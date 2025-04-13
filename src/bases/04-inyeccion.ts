import {
  HttpAdapter,
  PokeApiAdapter,
  PokeApifeckAdapter,
} from '../api/pokeApi.adapter';
import {
  Move,
  PokeAPIReponse,
} from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http:HttpAdapter

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const  data  = await this.http.get<PokeAPIReponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );

        return data.moves;
    }

}
const PokemonApiAxios = new PokeApiAdapter();
const PokemonApiFetch = new PokeApifeckAdapter();

export const charmander = new Pokemon( 12, 'Charmander', PokemonApiFetch );


charmander.getMoves();