import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-box',
  templateUrl: './categories-box.component.html',
  styleUrls: ['./categories-box.component.scss'],
})
export class CategoriesBoxComponent implements OnInit {
  @Input() items;

  constructor() { }

  ngOnInit() {}

}
