import { Component, AfterViewInit, ElementRef, signal, OnDestroy } from '@angular/core';

interface Feature {
  highlight: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent implements AfterViewInit, OnDestroy {
  isVisible = signal(false);
  private observer?: IntersectionObserver;

  readonly features: Feature[] = [
    {
      highlight: 'Langlebig',
      title: 'Hält 50 Jahre. Mindestens.',
      description: 'Hochwertige Aluminiumprofile mit bis zu 20 Jahren Garantie. Kein Rosten, kein Verziehen.'
    },
    {
      highlight: 'Vielseitig',
      title: 'Unendlich flexibel',
      description: 'Balkongeländer, Zäune, Carports, Pergolas – ein System für alle Projekte.'
    },
    {
      highlight: 'Easy',
      title: 'Montage ohne Kopfschmerzen',
      description: 'Modulares Klick-System. Keine Spezialwerkzeuge nötig. In unter 2 Stunden montiert.'
    },
    {
      highlight: 'Wartungsfrei',
      title: 'Null Wartung nötig',
      description: 'Kein Streichen, kein Schleifen. Einfach abspritzen – fertig. Mehr Zeit für wichtige Dinge.'
    },
    {
      highlight: 'Design',
      title: 'Design-Flexibilität',
      description: 'Moderne Ästhetik in verschiedenen Farben und Oberflächen. Passt zu jedem Stil.'
    },
    {
      highlight: 'Qualität',
      title: 'Made in Germany',
      description: 'Deutsche Ingenieurskunst und Präzision. Qualität, auf die Sie sich verlassen können.'
    }
  ];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    // IntersectionObserver - moderne Scroll-Detection
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.isVisible()) {
            this.isVisible.set(true);
          }
        });
      },
      { 
        threshold: 0.15,  // Triggert bei 15% Sichtbarkeit
        rootMargin: '0px 0px -100px 0px'  // Triggert etwas früher
      }
    );

    const element = this.elementRef.nativeElement.querySelector('.features-section');
    if (element) {
      this.observer.observe(element);
    }
  }

  ngOnDestroy(): void {
    // Cleanup
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
