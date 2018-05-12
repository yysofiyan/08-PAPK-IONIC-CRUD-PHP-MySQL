import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookformPage } from './bookform';

@NgModule({
  declarations: [
    BookformPage,
  ],
  imports: [
    IonicPageModule.forChild(BookformPage),
  ],
})
export class BookformPageModule {}
