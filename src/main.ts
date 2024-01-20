import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TypewriterService } from './typewriter.service';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h1>{{ typedText$ | async }}</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  titles = ['Hello World', 'How are you?', 'What are you up to?'];

  private typewriterService = inject(TypewriterService);

  typedText$ = this.typewriterService
    .getTypewriterEffect(this.titles)
    .pipe(map((text) => text));
}

bootstrapApplication(App);
