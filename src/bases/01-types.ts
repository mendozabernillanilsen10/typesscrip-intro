

export let name: string = 'types'
export let description: string = 'Typescript types'
export let code: string = `
// TypeScript is a superset of JavaScript that adds static typing to the language.                      
// This means that you can specify the types of variables, function parameters, and return values.

// This can help catch errors at compile time, rather than runtime.
// TypeScript also has a powerful type inference system, which can automatically infer the types of variables based on their values.
`
export const template = `ESTO ES UN STRING 
multilinea
// Esto es un string multilinea
// Esto es un string multilinea
// Esto es un string multilinea
"Esto es un string multilinea"
inyeccion de variables ${name} ${description}
// Esto es un string multilinea
// Esto es un string multilinea
suma ${1 + 1}	
// Esto es un string multilinea
// Esto es un string multilinea

`