import { Component, Input } from '@angular/core';
import { HomeServiceData } from '../../../interfaces/home-service-data';

@Component({
  selector: 'app-home-service-card',
  standalone: true,
  imports: [],
  templateUrl: './home-service-card.component.html',
  styleUrl: './home-service-card.component.scss'
})
export class HomeServiceCardComponent {

  @Input() cardData!: HomeServiceData;

}
