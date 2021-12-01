import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { PostDetailComponent } from './modules/post-detail/post-detail.component';
import { NewPostComponent } from './modules/new-post/new-post.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children:[
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'post-detail/:id', component: PostDetailComponent },
    { path: 'new-post', component: NewPostComponent },
    { path: '**', component: NotFoundComponent },
  ]
}]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
