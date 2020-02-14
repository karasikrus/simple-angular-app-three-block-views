import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewBlockComponent } from './tree-view-block/tree-view-block.component';
import { StackViewBlockComponent } from './stack-view-block/stack-view-block.component';
import {FormsModule} from '@angular/forms';
import { DataGridBlockComponent } from './data-grid-block/data-grid-block.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewBlockComponent,
    StackViewBlockComponent,
    DataGridBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
