import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderCardComponent } from '../slider-card/slider-card.component';

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, SliderCardComponent],
  templateUrl: './testimonial-slider.component.html',
  styleUrl: './testimonial-slider.component.scss'
})
export class TestimonialSliderComponent implements OnInit {
  testimonials = [
    {
      image: 'assets/slide-1.jpg',
      name: 'John Doe',
      message: 'This is an amazing service!'
    },
    {
      image: 'assets/slide-2.jpg',
      name: 'Jane Smith',
      message: 'I had a great experience!'
    },
    {
      image: 'assets/slide-3.jpg',
      name: 'Mike Johnson',
      message: 'Highly recommend to everyone!'
    }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
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
