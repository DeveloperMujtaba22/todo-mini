import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProjectComponent } from "./project/project.component";
import { NotesComponent } from "./notes/notes.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectComponent, NotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BATCH 2307A ANGULAR CLASSES';
}
