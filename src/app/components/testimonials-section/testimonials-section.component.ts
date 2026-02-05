import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  company: string;
  rating: number;
  text: string;
}

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Thomas Schneider',
      company: 'Schneider Innenarchitektur',
      rating: 5,
      text: 'Die LED-Profile von alupona haben unsere Lichtkonzepte perfektioniert. Exzellente Qualität und hervorragende Lichtverteilung.'
    },
    {
      name: 'Marina Koch',
      company: 'Koch & Partner Architekten',
      rating: 5,
      text: 'Seit Jahren setzen wir auf alupona. Die Qualität ist durchgehend hervorragend und die Beratung erstklassig.'
    },
    {
      name: 'Stefan Müller',
      company: 'Müller Elektrotechnik',
      rating: 5,
      text: 'Einfache Montage, hochwertige Materialien. Meine Kunden sind begeistert von der Langlebigkeit.'
    }
  ];

  get stars(): number[] {
    return Array(5).fill(0);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
}
