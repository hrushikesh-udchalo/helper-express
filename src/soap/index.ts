import { createClientAsync } from 'soap';

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';


export const SOAP = async () =>{
    const client = await createClientAsync(url);
    const describe = await client.describe();
    return describe;
}

