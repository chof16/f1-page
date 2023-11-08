import { ApexChart, ApexFill, ApexNonAxisChartSeries, ApexResponsive, ApexStroke } from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    stroke: ApexStroke;
    fill: ApexFill;
};