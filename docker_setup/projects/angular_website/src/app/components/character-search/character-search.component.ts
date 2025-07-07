import { Component } from '@angular/core';

import { RickService } from '../../services/rick.service';

import { NgIf, NgFor, AsyncPipe, NgClass  } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Observable, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-character-search',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, NgClass, FormsModule],
  templateUrl: './character-search.component.html',
  styleUrl: './character-search.component.scss'
})
export class CharacterSearchComponent {
  searchTerm = '';
  characters: any[] = [];
  error = false;

  constructor(private rickService: RickService) {}

  search(): void {
    if (!this.searchTerm.trim()) {
      this.characters = [];
      this.error = false;
      return;
    }

    this.rickService.searchCharacters(this.searchTerm).subscribe({
      next: (response) => {
        this.characters = response.results;
        this.error = false;
      },
      error: () => {
        this.characters = [];
        this.error = true;
      },
    });
  }

  selectedCharacter: any = null;
  episodes: any[] = [];
  loadingDetails = false;

selectCharacter(character: any): void {
  this.selectedCharacter = character;
  this.loadingDetails = true;

  // Cargar detalles de episodios
  const episodeRequests = character.episode.map((url: string) => this.rickService.getEpisodeByUrl(url));

  Promise.all(episodeRequests.map((obs: Observable<any>) => lastValueFrom(obs)))
    .then((results: any[]) => {
      this.episodes = results;
      this.loadingDetails = false;
    })
    .catch(() => {
      this.episodes = [];
      this.loadingDetails = false;
    });
} 
}
