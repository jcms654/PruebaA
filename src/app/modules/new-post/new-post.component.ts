import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackEndService } from 'src/app/services/backend-api.service';
import { BehaviorSubject, Observable, forkJoin } from "rxjs";
import { finalize } from 'rxjs/operators';
import { Router } from   '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResponseDialogComponent } from '../../shared/component/response-dialog/response-dialog.component';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  dataForm: FormGroup;
  showData: boolean = false;
  isLoading$ = new BehaviorSubject(true);

  constructor(public builder: FormBuilder,
    private _router: Router,
    public dialog: MatDialog,
    private _backendService: BackEndService,
    private  activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataForm = NewPostComponent.getForm(this.builder);
    this.dataForm.controls['userId'].setValue(1);
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



  
  newPost(body){
    this.dataForm.controls['userId'].setValue(1);
    this.isLoading$.next(true);
    this._backendService.newPost(body).pipe(
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
        "title": this.dataForm.value.title,
        "body": this.dataForm.value.body,
        "userId": 1,
        }
        this.newPost(body);
    }
    



}
