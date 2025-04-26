import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  title = '';
  context = '';
  notes: any[] = [];
  isEditing = false;
  currentNoteIndex: number | null = null;

  addNotes() {
    if (this.title && this.context) {
      this.notes.push({ title: this.title, context: this.context });
      this.clearForm();
    }
  }

  editNote(index: number) {
    this.isEditing = true;
    this.currentNoteIndex = index;
    this.title = this.notes[index].title;
    this.context = this.notes[index].context;
  }

  updateNote() {
    if (this.currentNoteIndex !== null) {
      this.notes[this.currentNoteIndex] = {
        title: this.title,
        context: this.context
      };
      this.cancelEdit();
    }
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    if (this.isEditing && this.currentNoteIndex === index) {
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.currentNoteIndex = null;
    this.clearForm();
  }

  clearForm() {
    this.title = '';
    this.context = '';
  }
}