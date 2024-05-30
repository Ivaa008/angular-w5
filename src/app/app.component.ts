import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { FormControl,FormGroup } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  data:any;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getData().subscribe(response=> {this.data=response;console.log(this.data)});
  }
  
}

