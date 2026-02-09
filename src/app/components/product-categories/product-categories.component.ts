import { Component, signal, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ProductCategory {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
}

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  private autoplayInterval: any;

  categories = signal<ProductCategory[]>([
    {
      id: 1,
      name: 'Aufbauprofile',
      description: 'Elegante Aufbaulösungen für sichtbare LED-Montage',
      link: '/produkte/aufbauprofile',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80'
    },
    {
      id: 2,
      name: 'Bodenprofile',
      description: 'Robuste Profile für Treppen und Bodenintegration',
      link: '/produkte/bodenprofile',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80'
    },
    {
      id: 3,
      name: 'Eckprofile',
      description: 'Perfekte Lichtführung um Ecken und Kanten',
      link: '/produkte/eckprofile',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'
    },
    {
      id: 4,
      name: 'Einbauprofile',
      description: 'Unsichtbare Integration in Wand und Decke',
      link: '/produkte/einbauprofile',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80'
    },
    {
      id: 5,
      name: 'Fliesenprofile',
      description: 'Wasserdichte Lösungen für Nassbereiche',
      link: '/produkte/fliesenprofile',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80'
    },
    {
      id: 6,
      name: 'Sonderprofile',
      description: 'Individuelle Lösungen für spezielle Anforderungen',
      link: '/produkte/sonderprofile',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
    },
    {
      id: 7,
      name: 'Trockenbauprofile',
      description: 'Schattenfugen und bündige Deckenintegration',
      link: '/produkte/trockenbauprofile',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80'
    },
    {
      id: 8,
      name: 'Zubehör für Profile',
      description: 'Endkappen, Verbinder und Montagezubehör',
      link: '/produkte/zubehoer',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80'
    }
  ]);

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.scrollRight();
    }, 4000); // Alle 4 Sekunden
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  scrollLeft(): void {
    this.stopAutoplay();
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: -320, behavior: 'smooth' });
    
    // Autoplay nach User-Interaktion wieder starten
    setTimeout(() => this.startAutoplay(), 5000);
  }

  scrollRight(): void {
    const container = this.scrollContainer.nativeElement;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Wenn am Ende, zurück zum Anfang
    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: 320, behavior: 'smooth' });
    }
  }

  // Pause on hover
  onMouseEnter(): void {
    this.stopAutoplay();
  }

  onMouseLeave(): void {
    this.startAutoplay();
  }
}
