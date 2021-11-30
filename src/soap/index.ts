import { createClientAsync } from 'soap';

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';


export const SOAP = async () =>{
    const client = await createClientAsync(url);
    const Add  = client['Add'];
    try {
        const result = await promisify(Add,{intA:103,intB:105});
        return result;
    } catch (error) {
        return error;
    }
}


const promisify = async (fun: Function, args: any) => {
    return new Promise((resolve, reject) => {
        fun(args, (err: any, result: any) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};
