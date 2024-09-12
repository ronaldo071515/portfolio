import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HabilitiesComponent } from './components/habilities/habilities.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    HabilitiesComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portafolio_ronaldo';
}
