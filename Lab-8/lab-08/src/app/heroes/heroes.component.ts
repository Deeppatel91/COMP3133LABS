import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { CommonModule } from '@angular/common';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';
import { InputFormatDirective } from '../input-format.directive'; // ✅

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    RemoveSpacesPipe,
    InputFormatDirective // ✅ Make sure this is here!
  ],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'], // Correct placement
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero: any;

  selectHero(hero: any) {
    this.selectedHero = hero;
  }
}
