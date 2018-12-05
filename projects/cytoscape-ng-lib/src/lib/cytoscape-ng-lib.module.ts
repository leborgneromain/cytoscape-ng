import { NgModule } from '@angular/core';
import { CytoscapeNgLibComponent } from './cytoscape-ng-lib.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CytoscapeNgLibComponent],
  imports: [
    CommonModule
  ],
  exports: [CytoscapeNgLibComponent]
})
export class CytoscapeNgLibModule { }
