import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ResponseDialogComponent } from './component/response-dialog/response-dialog.component'
import { DetailsDialogComponent } from './component/details-dialog/details-dialog.component'
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ResponseDialogComponent,
    DetailsDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ResponseDialogComponent,
    DetailsDialogComponent
  ],
})
export class SharedModule {}
