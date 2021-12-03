const { soap } = require('strong-soap');

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';

export const describe = async () => {
    const client: any = await createClient(url);
    const res = await client.describe();
    return res;
};

export const Cal = {
    add: async () => {
        const client: any = await createClient(url);
        const requests = [
            { intA: 101, intB: 109 },
            { intA: 102, intB: 103 },
            { intA: 101, intB: 119 },
        ];
        const res = await Promise.all(requests.map(async req => await client.Add(req)));
        return res.map(res=>res.result);
    },
};

const createClient = (url: string) => {
    return new Promise((resolve, reject) =>
        soap.createClient(url, {}, (err: any, client: any) => (err ? reject(err) : resolve(client)))
    );
};
