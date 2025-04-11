// src/models/Pokemon.ts
import axios from 'axios';

import {
  Move,
  PokeAPIReponse,
} from '../interfaces/pokeapi-response.interface';

export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
    public type: string,
    public level: number,
    public attack: number,
    public defense: number,
    public speed: number,
    public specialAttack: number,
    public specialDefense: number,
    public hp: number,
    public status: string
  ) {}

  public get getUrl(): string {
    return `https://pokeapi.co/api/v2/pokemon/${this.id}`;
  }

  public get getName(): string {
    return this.name.toLowerCase();
  }

  public scream() {
    console.log(`¡${this.name.toUpperCase()}!`);
  }

  public speak() {
    console.log(`¡${this.name}!`);
  }

  public attackEnemy(enemy: Pokemon): void {
    console.log(`${this.name} ataca a ${enemy.name}`);
    enemy.hp -= this.attack;
    console.log(`La vida de ${enemy.name} es ${enemy.hp}`);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPIReponse>(this.getUrl);
    return data.moves;
  }
}

export const charmander = new Pokemon(
  4,
  'Charmander',
  'Fuego',
  5,
  52,
  43,
  65,
  60,
  50,
  39,
  'Normal'
);
export const bulbasaur = new Pokemon(
  1,
  'Bulbasaur',
  'Planta/Veneno',
  5,
  49,
  49,
  45,
  65,
  65,
  45,
  'Normal'
);

export const pokemons = [
  charmander,
  bulbasaur,
  new Pokemon(7, 'Squirtle', 'Agua', 5, 48, 65, 43, 50, 64, 44, 'Normal'),
  new Pokemon(25, 'Pikachu', 'Eléctrico', 5, 55, 40, 90, 50, 50, 35, 'Normal'),
]