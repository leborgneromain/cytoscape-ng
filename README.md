# CytoscapeNg

This project is a wrapper for cytoscape library : https://github.com/cytoscape/cytoscape.js?files=1

It has been made inspired by the work of Michael Knoch with this repo : https://github.com/michaelknoch/ng2-cytoscape

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm install` to import dependencies
Run `npm run package` to build and package the external library project. I produces a file 'cytoscape-ng-lib-<<version>>.tgz' that you can install to your project via npm with the command : npm install <<path_of_the_generated_tgz_file>>/cytoscape-ng-lib.tgz 

## Example Usage

A full example of how to use this external wrapper is available here https://github.com/leborgneromain/cytoscape-ng/tree/master/src/app


### In your `app.module.ts`
Add the import clause to import the module `NgCytoscapeModule`

```typescript
import {CytoscapeNgLibModule} from "cytoscape-ng-lib";
```

Add the `CytoscapeNgLibModule` to the imports array of the `NgModule`.

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CytoscapeNgLibModule // <= Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### In the component you want to use NgCytoscape
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private _graphData: any = {
    nodes: [
      {data: {id: 'j', name: 'Jerry', color: '#6FB1FC'}},
      {data: {id: 'e', name: 'Elaine', color: '#EDA1ED'}},
      {data: {id: 'k', name: 'Kramer', color: '#86B342'}},
      {data: {id: 'g', name: 'George', color: '#F5A45D'}}
    ],
    edges: [
      {data: {source: 'j', target: 'e', color: '#6FB1FC'}},
      {data: {source: 'j', target: 'k', color: '#6FB1FC'}},
      {data: {source: 'j', target: 'g', color: '#6FB1FC'}},

      {data: {source: 'e', target: 'j', color: '#EDA1ED'}},
      {data: {source: 'e', target: 'k', color: '#EDA1ED'}},

      {data: {source: 'k', target: 'j', color: '#86B342'}},
      {data: {source: 'k', target: 'e', color: '#86B342'}},
      {data: {source: 'k', target: 'g', color: '#86B342'}},

      {data: {source: 'g', target: 'j', color: '#F5A45D'}}
    ]
  };
  constructor() {
  }

  ngOnInit() {
  }

  get graphData(): any {
    return this._graphData;
  }

  set graphData(value: any) {
    this._graphData = value;
  }
}
```

### In your html template, Pass the data as below

```html
<div class="cytograph">
  <cytoscape-ng [elements]="graphData"></cytoscape-ng>
</div>
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


