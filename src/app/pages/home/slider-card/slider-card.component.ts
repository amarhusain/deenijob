import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-card.component.html',
  styleUrl: './slider-card.component.scss'
})
export class SliderCardComponent {
  testimonial = {
    image: 'assets/images/image1.jpg',
    name: 'John Doe',
    message: 'This is an amazing service!',
    rating: 4
  };
  stars: number[] = [1, 2, 3, 4, 5];
}
