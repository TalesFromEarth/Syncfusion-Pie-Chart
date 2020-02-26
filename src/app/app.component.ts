import { Component, ViewEncapsulation, OnInit , ChangeDetectionStrategy } from '@angular/core';
import { IAccLoadedEventArgs, AccumulationTheme } from '@syncfusion/ej2-angular-charts';
import {AccumulationChartComponent, AccumulationChart, AccumulationDataLabel } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public data: object[] = [{ x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
    { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
    { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
    { x: 'Insurance', y: 16, text: '16%' }];

    public dataLabel = {
        visible: true,
        position: 'Outside',
        font: {color: 'var(--font-primary-header-color)'}
      };
    public legendSettings: object = {
        visible: true,
        position: 'Right',
        textStyle: {
          size: '14px',
          color: 'var(--font-primary-header-color)'
        }
      };
      public startAngle = 0;
      public endAngle = 360;
      public tooltip: object = { enable: true };
      public title = 'Project Cost Breakdown';
     // custom code start
    public load(args: IAccLoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
    }
     // custom code end
    constructor() {
        // code
    }
  }
