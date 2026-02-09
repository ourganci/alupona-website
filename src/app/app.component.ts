import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductShowcaseComponent } from './components/product-showcase/product-showcase.component';
import { ProductHighlightsComponent } from './components/product-highlights/product-highlights.component';
import { ProductCategoriesComponent } from "./components/product-categories/product-categories.component";
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { FeaturesSectionComponent } from "./components/features-section/features-section.component";
import { TestimonialsSectionComponent } from "./components/testimonials-section/testimonials-section.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ProductShowcaseComponent,
    ProductHighlightsComponent,
    ProductCategoriesComponent,
    LoadingScreenComponent,
    FeaturesSectionComponent,
    TestimonialsSectionComponent,
    FooterComponent
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
