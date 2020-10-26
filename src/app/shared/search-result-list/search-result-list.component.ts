import { Component, Input, OnInit } from '@angular/core';
import { countries } from 'src/app/core/static/countries';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent implements OnInit {

  @Input() servicesList: any[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  constructor() { }

  ngOnInit() {}

}
