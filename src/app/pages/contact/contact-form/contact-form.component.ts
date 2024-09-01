import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../../shared/forbidden-name.directive';
import { mobileNumberLengthValidator } from '../../../shared/mobile-number-length.directive';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm = this.fb.group({
    name: ['', [Validators.required, forbiddenNameValidator(/bob/i)]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern(/^\d+$/), mobileNumberLengthValidator(10)]], // Optional phone number validation
    message: ['', [Validators.required]]
  });


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Submit the form data (e.g., send to server)
      console.log(this.contactForm.value);
      this.contactForm.reset(); // Clear form after submission
    }
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get mobile() {
    return this.contactForm.get('mobile');
  }
  get message() {
    return this.contactForm.get('message');
  }

}
