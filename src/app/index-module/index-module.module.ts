import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexModuleRoutingModule } from './index-module-routing.module';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IndexModuleRoutingModule
  ]
})
export class IndexModuleModule { }
