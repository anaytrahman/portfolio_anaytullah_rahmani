import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PROJECTS } from '../../shared/data/portfolio-data';
import { Project } from '../../shared/interfaces/project.interface';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { GithubRepoModalComponent } from './github-repo-modal/github-repo-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public hiddenProj = true;
  readonly projects = PROJECTS;

  constructor(private dialog: MatDialog) {}

  openGithubModal(project: Project) {
    this.dialog.open(GithubRepoModalComponent, {
      width: '600px',
      maxWidth: '95vw',
      data: project,
      panelClass: 'github-repo-dialog',
    });
  }
}
