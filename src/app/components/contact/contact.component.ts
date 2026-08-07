import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../shared/data/portfolio-data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly socialLinks = SOCIAL_LINKS;
}
