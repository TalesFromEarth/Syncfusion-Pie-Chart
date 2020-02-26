import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartAllModule, AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartAllModule,
    AccumulationChartAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
