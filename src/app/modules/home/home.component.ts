import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/services/backend-api.service';
import { BehaviorSubject, Observable, forkJoin } from "rxjs";
import { finalize } from 'rxjs/operators';
import { PostType } from 'src/app/types/post.type';
import { Router } from   '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading$ = new BehaviorSubject(true);
  posts: PostType[];
  cols: any[] = [{ field: 'id', header: 'ID' },{ field: 'userId', header: 'UserID' },
                 { field: 'title', header: 'Title' }, { field: 'body', header: 'Body' }];;
  constructor(private _backendService: BackEndService,
              private _router: Router) { }

    ngOnInit(): void {
        this.initGrid();
    }

    initGrid(){
      this.isLoading$.next(true);
      this._backendService.getPosts().pipe(
      finalize(() => this.isLoading$.next(false)))
      .subscribe(
        res => { 
            this.posts = res;
        },
        err => {
        }
      );
    }

    dblClickEvent(post){
      this._router.navigate([ `/post-detail/${post.id}`]);
    }

    addPost(){
      this._router.navigate([ `/new-post`]);
    }

}
