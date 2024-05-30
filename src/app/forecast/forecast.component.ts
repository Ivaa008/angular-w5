import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  weatherData: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const city = params['city'];
      if (city) {
        this.weatherService.getWeather(city).subscribe(data => {
          this.weatherData = data;
        });
      }
    });
  }
}
