import { Component } from '@angular/core';
import { Carouseldata } from '../../../interfaces/carouseldata';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {
  carouselDataList: Carouseldata[] = [
    {
      id: 0,
      heading: 'IL',
      img: `assets/carousel1.jpg`,
    },
    {
      id: 1,
      heading: 'IL',
      img: `assets/carousel2.jpg`,
    },
    {
      id: 2,
      heading: 'IL',
      img: `assets/carousel3.jpg`,
    },
    {
      id: 3,
      heading: 'IL',
      img: `assets/carousel4.jpg`,
    },
    {
      id: 4,
      heading: 'IL',
      img: `assets/carousel5.jpg`,
    },

  ]
}
