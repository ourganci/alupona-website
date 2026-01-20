import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductShowcaseComponent } from './components/product-showcase/product-showcase.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    HeroComponent, 
    ProductShowcaseComponent,
    LoadingScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMainContent = signal(false);

  onLoadingComplete() {
    // Gleichzeitig: Intro faded aus + Main faded ein
    this.showMainContent.set(true);
  }
}
