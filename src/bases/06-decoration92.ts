
const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}



export class Pokemon{

    constructor(
        public readonly id : number,
        public name : string,
    ){}

    screen(){
        console.log(`${this.name.toLowerCase()} !!`);
    }
    @Deprecated('No quiero hablar de eso')
    speed(){ 
        console.log(` ${this.name}, ${this.name} !!`);
    }
    speed3(){ 
        console.log(` ${this.name}, ${this.name} !!`);
    }
    
}
export const charmander = new Pokemon(1, 'Charmander');
charmander.screen();