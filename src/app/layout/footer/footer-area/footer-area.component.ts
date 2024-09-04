import { Component } from '@angular/core';
import { FooterCopyrightComponent } from '../footer-copyright/footer-copyright.component';
import { SupportFooterAreaComponent } from '../support-footer-area/support-footer-area.component';

@Component({
  selector: 'app-footer-area',
  standalone: true,
  imports: [SupportFooterAreaComponent, FooterCopyrightComponent],
  templateUrl: './footer-area.component.html',
  styleUrl: './footer-area.component.scss'
})
export class FooterAreaComponent {

}
