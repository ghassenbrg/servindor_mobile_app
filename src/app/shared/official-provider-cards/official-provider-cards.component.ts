import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-official-provider-cards',
  templateUrl: './official-provider-cards.component.html',
  styleUrls: ['./official-provider-cards.component.scss'],
})
export class OfficialProviderCardsComponent implements OnInit {

  officialProviders = [
    {
      label: "Tunisie Télécom",
      img: "./assets/img/mock/tt.png"
    },
    {
      label: "Platinum Motors",
      img: "./assets/img/mock/pm.png"
    },
    {
      label: "Mirabel Beauty Center",
      img: "./assets/img/mock/mirabel.png"
    },
    {
      label: "Express Home Service",
      img: "./assets/img/mock/express-home.png"
    }
  ]
  constructor() { }

  ngOnInit() { }

}
