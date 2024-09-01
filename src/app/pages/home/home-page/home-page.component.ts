import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../../interfaces/housinglocation';
import { HousingService } from '../../../services/housing.service';
import { BrandLogoSliderComponent } from '../brand-logo-slider/brand-logo-slider.component';
import { CustomerReviewComponent } from '../customer-review/customer-review.component';
import { HomeAmirServicesComponent } from '../home-amir-services/home-amir-services.component';
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component';
import { ServiceSliderComponent } from '../service-slider/service-slider.component';
import { TestimonialSliderComponent } from '../testimonial-slider/testimonial-slider.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeCarouselComponent,
    HomeAmirServicesComponent,
    CustomerReviewComponent,
    ServiceSliderComponent,
    TestimonialSliderComponent,
    BrandLogoSliderComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
