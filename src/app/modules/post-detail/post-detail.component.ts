import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackEndService } from 'src/app/services/backend-api.service';
import { BehaviorSubject, Observable, forkJoin } from "rxjs";
import { finalize } from 'rxjs/operators';
import { Router } from   '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResponseDialogComponent } from '../../shared/component/response-dialog/response-dialog.component';
import { DetailsDialogComponent } from '../../shared/component/details-dialog/details-dialog.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  dataForm: FormGroup;
  showData: boolean = false;
  isLoading$ = new BehaviorSubject(true);

  constructor(public builder: FormBuilder,
              private _router: Router,
              public dialog: MatDialog,
              private _backendService: BackEndService,
              private  activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.dataForm = PostDetailComponent.getForm(this.builder)
    this.getPost(this.activatedRoute.snapshot.params.id);
  }

  static getForm(builder: FormBuilder): FormGroup {
         const formGroup = builder.group({
           'id': new FormControl(),
           'userId': new FormControl(),
           'title': new FormControl(),
           'body': new FormControl(),
         });
         return formGroup;
  }

  getPost(id){
      this.isLoading$.next(true);
      this._backendService.getPost(id).pipe(
      finalize(() => this.isLoading$.next(false)))
      .subscribe(
        res => { 
          this.showData = true;
          this.dataForm.controls['id'].setValue(res.id);
          this.dataForm.controls['userId'].setValue(res.userId);
          this.dataForm.controls['title'].setValue(res.title);
          this.dataForm.controls['body'].setValue(res.body);
        },
        err => {
        }
      );
  }


  putPost(id,body){
    this.isLoading$.next(true);
    this._backendService.putPost(id,body).pipe(
    finalize(() => this.isLoading$.next(false)))
    .subscribe(
      res => { 
        const dialogRef = this.dialog.open(ResponseDialogComponent, {
          panelClass: 'responseDialog',
          data: {
            id: res.id,
            userId: res.userId,
            title: res.title,
            body: res.body
          }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this._router.navigate([ `/home`]);
        });

      },
      err => {
      }
    );
  }



  cancel(){
    this._router.navigate([ `/home`]);
  }

  save(){
      let body = {
        "id": this.dataForm.value.id,
        "title": this.dataForm.value.title,
        "body": this.dataForm.value.body,
        "userId": this.dataForm.value.userId,
        }
        this.putPost(this.activatedRoute.snapshot.params.id,body);
  }

  details(){
      this.detailsPost(this.activatedRoute.snapshot.params.id);
}


detailsPost(id){
  this.isLoading$.next(true);
  this._backendService.detailsPost(id).pipe(
  finalize(() => this.isLoading$.next(false)))
  .subscribe(
    res => { 
      const dialogRef = this.dialog.open(DetailsDialogComponent, {
        panelClass: 'responseDialog',
        data: {
          user: JSON.parse(res.parte1),
          coments: JSON.parse(res.parte2),
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        
      });
    },
    err => {
    }
  );
}





  
}
