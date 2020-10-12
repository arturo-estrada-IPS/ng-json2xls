import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { ExportDirective } from './_directives/export.directive';
import { CopyDirective } from './_directives/copy.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ExportDirective,
    CopyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
