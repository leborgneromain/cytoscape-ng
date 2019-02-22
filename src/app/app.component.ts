import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private _graphData: any = {
    nodes: [
      { data: { id: 'j', name: 'Jerry', color: '#6FB1FC', icon: 0xf15b } },
      { data: { id: 'e', name: 'Elaine', color: '#EDA1ED', icon: 0xf085 } },
      { data: { id: 'k', name: 'Kramer', color: '#86B342', icon: 0xf15b } },
      { data: { id: 'g', name: 'George', color: '#F5A45D', icon: 0xf1ec } }
    ],
    edges: [
      { data: { source: 'j', target: 'e', color: '#6FB1FC' } },
      { data: { source: 'j', target: 'k', color: '#6FB1FC' } },
      { data: { source: 'j', target: 'g', color: '#6FB1FC' } },

      { data: { source: 'e', target: 'j', color: '#EDA1ED' } },
      { data: { source: 'e', target: 'k', color: '#EDA1ED' } },

      { data: { source: 'k', target: 'j', color: '#86B342' } },
      { data: { source: 'k', target: 'e', color: '#86B342' } },
      { data: { source: 'k', target: 'g', color: '#86B342' } },

      { data: { source: 'g', target: 'j', color: '#F5A45D' } }
    ]
  };
  constructor() {
  }

  ngOnInit() {
  }

  get graphData(): any {
    return this._graphData
  }

  set graphData(value: any) {
    this._graphData = value
  }
}
