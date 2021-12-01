import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { NotFoundComponent } from 'src/app/modules/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FlexLayoutModule,
    TableModule,
    HttpClientModule
  ]
})
export class DefaultModule { }
