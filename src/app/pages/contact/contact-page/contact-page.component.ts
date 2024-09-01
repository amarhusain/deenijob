import { Component } from '@angular/core';
import { ContactAreaComponent } from '../contact-area/contact-area.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactAreaComponent, ContactFormComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}
