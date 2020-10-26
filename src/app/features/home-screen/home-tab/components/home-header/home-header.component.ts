import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {

  @Input() direction: string = 'ltr';
  
  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToSearchPage() {
    this.router.navigate(['/search'])
  }

}
