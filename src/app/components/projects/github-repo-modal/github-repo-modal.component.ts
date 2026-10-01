import { Component, Inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../../../shared/interfaces/project.interface';

@Component({
  selector: 'app-github-repo-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './github-repo-modal.component.html',
  styleUrls: ['./github-repo-modal.component.scss']
})
export class GithubRepoModalComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<GithubRepoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public project: Project
  ) {}

  ngOnInit(){
    this.project;
    debugger
  }

  close() {
    this.dialogRef.close();
  }
}
