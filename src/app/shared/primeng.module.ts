import { NgModule, ModuleWithProviders } from '@angular/core';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {EditorModule} from 'primeng/editor';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RadioButtonModule} from 'primeng/radiobutton';
import {PaginatorModule } from 'primeng/paginator';
import {ScrollingModule} from '@angular/cdk/scrolling';



import {CheckboxModule} from 'primeng/checkbox';

const PRIMECOMPONENTS = [
  TableModule,
  CheckboxModule,
  CalendarModule,
  SliderModule,
  DialogModule,
  MultiSelectModule,
  ContextMenuModule,
  DropdownModule,
  ButtonModule,
  ToastModule,
  InputTextModule,
  ProgressBarModule,
  EditorModule,
  InputTextareaModule,
  RadioButtonModule,
  PaginatorModule,
  ScrollingModule
];


@NgModule({
  imports: [
    ...PRIMECOMPONENTS
  ],
  exports: [
    ...PRIMECOMPONENTS,
  ],
})
export class PrimeNgModule {
  static forRoot(): ModuleWithProviders<PrimeNgModule>{
    return {
      ngModule: PrimeNgModule
    };
  }
}
