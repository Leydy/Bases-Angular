import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';



@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);
  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      //id: this.characters().length + 1,
      id: 10000,
      name: this.name(),
      power: this.power(),
    };
    //this.characters().push(newCharacter);
    //this.characters.update((list) => [...list, newCharacter]);
    console.log({ newCharacter });
    this.resetFields();
  }

  resetFields() {
    this.name.set(' ');
    this.power.set(0);
  }
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8000,
    },
  ]);

  protected readonly console = console;
}
