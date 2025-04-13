import axios from 'axios';

export interface HttpAdapter{
    get<T>(url: string): Promise<T>;
}

export class PokeApifeckAdapter  implements HttpAdapter {
  
    async get<T>(url: string) : Promise<T> {
        const response = await fetch(url);
        const data : T = await response.json();
        console.log("fech");
        return data;
    }
    
    
}


export class PokeApiAdapter  implements HttpAdapter{
   private readonly axios  = axios;
   

    async get<T>(url: string) : Promise<T> {
        const { data } = await this.axios.get<T>(url);
        console.log("axios");

        return data;
    }
    
}
