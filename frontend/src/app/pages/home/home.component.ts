import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import * as pluginAnnotations from "chartjs-plugin-annotation";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [7, 6, 9, 8, 7, 9], label: "Notas" }
  ];
  public lineChartLabels: Label[] = [
    "Semestre 01",
    "Semestre 02",
    "Semestre 03",
    "Semestre 04",
    "Semestre 05",
    "Semestre 06"
  ];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: "y-axis-0",
          position: "left",
          ticks: {
            min: 0,
            max: 10,
            stepSize: 1
          }
        }
      ]
    },
    annotation: {
      annotations: []
    }
  };
  public lineChartColors: Color[] = [
    {
      // red
      backgroundColor: "rgba(32,178,170,0.3)",
      borderColor: "lightseagreen",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {}

  ngOnInit() {}
}
