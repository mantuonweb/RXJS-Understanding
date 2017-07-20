import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CombineallComponent } from './combineall/combineall.component';
import { CombinelatestComponent } from './combinelatest/combinelatest.component';
import { ConcateComponent } from './concate/concate.component';
import { MergeComponent } from './merge/merge.component';

@NgModule({
  declarations: [
    AppComponent,
    CombineallComponent,
    CombinelatestComponent,
    ConcateComponent,
    MergeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
