const { soap } = require('strong-soap');

// const url = 'http://www.dneonline.com/calculator.asmx?WSDL';

const url = 'http://ws.cdyne.com/ip2geo/ip2geo.asmx?wsdl'

export const describe = async () => {
    const client: any = await createClient(url);
    const res = await client.describe();
    return res;
};

export const Methods = {
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


    ip:async ()=>{
        const client:any = await createClient(url);
        const res = await client.ResolveIP({
            ipAddress:'157.33.252.98',
            licenseKey:''
        });
        return res.result;
    }
};

const createClient = (url: string) => {
    return new Promise((resolve, reject) =>
        soap.createClient(url, {}, (err: any, client: any) => (err ? reject(err) : resolve(client)))
    );
};
