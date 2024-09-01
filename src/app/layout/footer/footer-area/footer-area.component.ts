import { Component } from '@angular/core';
import { SupportFooterAreaComponent } from '../support-footer-area/support-footer-area.component';

@Component({
  selector: 'app-footer-area',
  standalone: true,
  imports: [SupportFooterAreaComponent],
  templateUrl: './footer-area.component.html',
  styleUrl: './footer-area.component.scss'
})
export class FooterAreaComponent {

}
