export class ProductAPI {
    public static async getAll(){
        const resp = await fetch('http://localhost:3001/products', {
            method: "GET"
        })

        const data = await resp.json();

        return data;
    }

    public static async getSome(searchcriteria: string, searchTerm: string){
        const resp = await fetch(`http://localhost:3001/products/${searchcriteria}/${searchTerm}`, {
            method: "GET"
        })

        const data = await resp.json();

        return data;
    }
}