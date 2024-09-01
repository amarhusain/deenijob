import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeServiceData } from '../../../interfaces/home-service-data';
import { HomeServiceCardComponent } from '../home-service-card/home-service-card.component';

@Component({
  selector: 'app-home-amir-services',
  standalone: true,
  imports: [CommonModule, HomeServiceCardComponent],
  templateUrl: './home-amir-services.component.html',
  styleUrl: './home-amir-services.component.scss'
})
export class HomeAmirServicesComponent {
  cardDataList: HomeServiceData[] = [
    {
      id: 0,
      img: `assets/about-icon1.png`,
      heading: 'Corporate Structure',
      content: "Each of our departments effectively performs their specialized function while collaborating with each other to achieve the corporate's goals."
    },
    {
      id: 1,
      img: `assets/about-icon2.png`,
      heading: 'Mission & Values',
      content: "Build the best product, cause no unnecessary harm, use business to inspire and implement solutions to the environmental crisis."
    },
    {
      id: 2,
      img: `assets/about-icon3.png`,
      heading: 'Corporate Accountability',
      content: "We assure that our company will always keep our performance and behavior in line with the government's regulations on environment protection."
    }
  ]
}
