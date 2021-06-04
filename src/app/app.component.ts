import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
 title = 'Test';
 data: any=[];
  constructor(private api: GetApiService) 
  {
    this.api.apiCall().subscribe((data) => {
      console.log(data)
      this.data=data
  })
}}



