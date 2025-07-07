import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterSearchComponent } from './components/character-search/character-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'backoffice';
}
