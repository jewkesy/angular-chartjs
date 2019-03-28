import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

	public lineChartOptions = {
		responsive: true
	}

	public lineChartLabels = ['January', 'February'];

	public lineChartType = 'line';
	public lineChartLegend = true;

	public lineChartData = [
		{data: [65, 59], label: "Foo" },
		{data: [4, 99], label: "Bar"},
	];

  constructor() { }

  ngOnInit() {
  }

}
