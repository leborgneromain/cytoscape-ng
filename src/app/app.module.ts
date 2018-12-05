import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CytoscapeNgLibModule } from 'projects/cytoscape-ng-lib/src/lib/cytoscape-ng-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CytoscapeNgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
