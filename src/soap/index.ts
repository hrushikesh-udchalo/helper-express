const { soap } = require('strong-soap');

// const url = 'http://www.dneonline.com/calculator.asmx?WSDL';

const url = 'http://www.webservicex.net/stockquote.asmx?WSDL'


export const describe = async ()=>{
    const client:any = await  createClient(url);
    const res  = await client.describe();
    return res;
}


export const Cal = {
    add:async ()=>{
        const client:any = await createClient(url);
        const res = await client.Add({ intA:101, intB:109});
        return res;
    }
}


const createClient = (url: string) => {
    return new Promise((resolve, reject) =>
        soap.createClient(url, {}, (err: any, client: any) => (err ? reject(err) : resolve(client)))
    );
};
