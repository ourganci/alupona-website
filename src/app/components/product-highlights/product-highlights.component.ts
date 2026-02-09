import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Showcase {
  image: string;
  position: 'left' | 'right';
  title: string;
  text: string;
  benefits: string[];
  link: string;
}

@Component({
  selector: 'app-product-highlights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-highlights.component.html',
  styleUrls: ['./product-highlights.component.scss']
})
export class ProductHighlightsComponent {
  showcases = signal<Showcase[]>([
    {
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      position: 'left',
      title: 'Indirektes Licht für wohnliche Räume',
      text: 'alupona Profile kühlen LED-Streifen optimal und verlängern die Lebensdauer. Blendfrei und homogen für eine perfekte Lichtatmosphäre.',
      benefits: ['Wand- & Deckenintegration', 'Passende Abdeckungen & Diffusoren'],
      link: '/produkte/aufbauprofile'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
      position: 'right',
      title: 'Sichere Wegführung mit Design',
      text: 'Boden- und Eckprofile für Treppen und Flure. Robust, hochwertig und perfekt für Orientierungslicht.',
      benefits: ['Orientierungslicht', 'IP-Schutz für Feuchträume'],
      link: '/produkte/bodenprofile'
    },
    {
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
      position: 'left',
      title: 'Funktionales Licht für Küchen',
      text: 'Einbau- und Aufbauprofile für Arbeitsplatten und Schränke. Blendfreies Arbeitslicht mit Stil.',
      benefits: ['Arbeitsplatzbeleuchtung', 'Möbelintegration'],
      link: '/produkte/einbauprofile'
    },
    {
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
      position: 'right',
      title: 'Akzente im Bad',
      text: 'Fliesenprofile für Dusche und Wellness-Bereiche. Wasserdicht und langlebig.',
      benefits: ['IP65 Schutzklasse', 'Fugenlose Integration'],
      link: '/produkte/fliesenprofile'
    }
  ]);

  viewDetails(url: string): void {
    // Optional: Router oder null
  }
}
