import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MAIN_SKILLS } from '../../shared/data/portfolio-data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { Skill } from '../../shared/interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  readonly skills = MAIN_SKILLS;

  getSubSkillNames(subSkills: Skill[] = []): string {
  return subSkills.map(skill => skill.name).join(', ');
}
}
