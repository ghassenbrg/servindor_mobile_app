import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() imgUrl: string;

  constructor() { }

  ngOnInit() {}

}
