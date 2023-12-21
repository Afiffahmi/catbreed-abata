import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatsPageRoutingModule } from './cats-routing.module';

import { CatsPage } from './cats.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatsPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [CatsPage],

})
export class CatsPageModule {}
