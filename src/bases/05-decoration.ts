
export class NewPokemon{
    constructor(
        public readonly id : number,
        public name : string,
    
    ){}

    screen(){
        console.log(` NO QUIERO `);
    }
    speed(){ 
        console.log(`  NO QUIERO HABLAR !!`);
    }
}




const NyanDecorator = ()=>{
    return function (target: Function) {
        console.log('NyanDecorator called');
        console.log(target);
        return NewPokemon;
    }
}

@NyanDecorator()
export class Pokemon{

    constructor(
        public readonly id : number,
        public name : string,
    ){}

    screen(){
        console.log(`${this.name.toLowerCase()} !!`);
    }
    speed(){ 
        console.log(` ${this.name}, ${this.name} !!`);
    }
    
}
export const charmander = new Pokemon(1, 'Charmander');
charmander.screen();
charmander.speed();

