import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterAreaComponent } from './layout/footer/footer-area/footer-area.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, HeaderComponent, FooterAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Deenijob"
}
