import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {DatabaseComponent} from './database';

@NgModule({
  declarations: [DatabaseComponent],
  imports: [IonicModule],
  exports: [DatabaseComponent],
  providers:[DatabaseComponent]
})

export class DatabaseComponentModule {};