import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Technology } from 'src/app/models/technology.models';

@Component({
  selector: 'app-tecnhologies',
  templateUrl: './tecnhologies.component.html',
  styleUrls: ['./tecnhologies.component.css'],
})
export class TecnhologiesComponent implements OnInit {
  public technologies: Technology[];
  constructor(public _httpService: HttpService) {}

  ngOnInit(): void {
    this._httpService
      .getTechnologies()
      .subscribe((technologies: Technology[]) => {
        this.technologies = technologies['data'];
        debugger;
      });
  }
}
