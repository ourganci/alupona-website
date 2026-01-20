import { Component, signal, ElementRef, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';

interface Showcase {
  image: string;
  position: 'left' | 'right';
  title: string;
  text: string;
  benefits: string[];
  link: string;
}

@Component({
  selector: 'app-product-showcase',
  standalone: true,
  templateUrl: './product-showcase.component.html',
  styleUrls: ['./product-showcase.component.scss']
})
export class ProductShowcaseComponent implements AfterViewInit {
  @ViewChildren('showcaseSection') showcaseSections!: QueryList<ElementRef>;
  
  visibleSections = signal<Set<number>>(new Set());

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
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661955033564-dc850d38b7df?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      position: 'left',
      title: 'Lichtakzente im Außenbereich',
      text: 'Wetterfeste Profile für Terrassen und Gärten. Robust gegen Witterungseinflüsse.',
      benefits: ['Wetterfest & UV-beständig', 'Einfache Montage'],
      link: '/produkte/außenprofile'
    }
  ]);

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            this.visibleSections.update(set => {
              const newSet = new Set(set);
              newSet.add(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    this.showcaseSections.forEach((section, index) => {
      section.nativeElement.setAttribute('data-index', index.toString());
      observer.observe(section.nativeElement);
    });
  }

  isVisible(index: number): boolean {
    return this.visibleSections().has(index);
  }
}
