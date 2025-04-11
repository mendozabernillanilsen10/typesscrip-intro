export const pokemon = [1,2,3,4,5,6,7,8,9,10]
interface Pokemon {
    id : number;
    name: string;
    type: string;
    age?: number;
    level: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
    hp: number;
    status: string;
}
// export const pokemon: Pokemon = {
export const pokemon2 : Pokemon = {
    id: 1,
    name: 'Pikachu',
    type: 'Electric',
    level: 5,
    attack: 55,
    defense: 40,
    speed: 90,
    specialAttack: 50,
    specialDefense: 50,
    hp: 35,
    status: 'Normal',
    
}
// }

export const pokemones: Pokemon[]= [] ;
pokemones.push(pokemon2)
pokemones.push({
    id: 2,
    name: 'Charmander',
    type: 'Fire',
    level: 5,
    attack: 52,
    defense: 43,
    speed: 65,
    specialAttack: 60,
    specialDefense: 50,
    hp: 39,
    status: 'Normal',
})  
pokemones.push({
    id: 3,
    name: 'Squirtle',
    type: 'Water',
    level: 5,
    attack: 48,
    defense: 65,
    speed: 43,
    specialAttack: 50,
    specialDefense: 64,
    hp: 44,
    status: 'Normal',
})
