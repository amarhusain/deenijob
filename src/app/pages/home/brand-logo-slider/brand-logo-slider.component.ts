import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-brand-logo-slider',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './brand-logo-slider.component.html',
  styleUrl: './brand-logo-slider.component.scss'
})
export class BrandLogoSliderComponent implements OnInit {
  testimonials = [
    {
      image: 'assets/brand/logo1.png',
    },
    {
      image: 'assets/brand/logo3.png'
    },
    {
      image: 'assets/brand/logo4.png'
    },
    {
      image: 'assets/brand/logo5.png'
    }, {
      image: 'assets/brand/logo6.png'
    }, {
      image: 'assets/brand/logo7.png'
    }, {
      image: 'assets/brand/logo8.png'
    }
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    swipe: true,
    touchMove: true
  };
  constructor() { }

  ngOnInit(): void { }
  slides = [
    { img: "assets/slide-1.jpg" },
    { img: "assets/slide-2.jpg" },
    { img: "assets/slide-3.jpg" },
    { img: "assets/slide-4.jpg" }
  ];
  // slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
