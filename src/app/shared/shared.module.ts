import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserWidgetTreeComponent } from './components/user-widget-tree/user-widget-tree.component';
import { ListUserWidgetTreeComponent } from './components/list-user-widget-tree/list-user-widget-tree.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    UserWidgetTreeComponent,
    ListUserWidgetTreeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports:[
    UserWidgetTreeComponent,
    ListUserWidgetTreeComponent
  ]
})
export class SharedModule { }
