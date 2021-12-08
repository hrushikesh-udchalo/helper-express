const { soap, QName } = require("strong-soap");

import { createClientAsync as x } from "soap";

// const url1 = "https://sgtestr4xapi.navitaire.com/BookingManager.svc?wsdl";
// const url2 = "https://sgtestr4xapi.navitaire.com/BookingManager.svc?singleWsdl";

import { readFileSync } from "fs";
import path from "path";

const url1 = path.join("/", "BookingManager.xml");

export const noob = async () => {
    const file = path.resolve("BookingManager.wsdl");
    const url1 = readFileSync(file, "utf-8");
    return url1;
};

export const describe = async (method: string) => {
    const file = path.resolve("BookingManager.wsdl");
    const client: any = await createClient(file);
    const describe = await client.describe();
    const res = describe.SessionManager.BasicHttpBinding_ISessionManager[method].input;
    return res;
};

export const logon = async () => {
    const url = "https://sgtestr4xapi.navitaire.com/SessionManager.svc?singleWsdl";
    const client: any = await createClient(url);

    const body = {
        LogonRequest: {
            logonRequestData: {
                DomainCode: "WWW",
                AgentName: "APITESTID",
                Password: "Spice@123",
            },
        },
    };

    client.addSoapHeader('<h:ContractVersion xmlns:h="http://schemas.navitaire.com/WebServices">420</h:ContractVersion>');
    client.addSoapHeader('<h:EnableExceptionStackTrace xmlns:h="http://schemas.navitaire.com/WebServices">true</h:EnableExceptionStackTrace>');

    const logon = await client.Logon(body);
    const request = await client.lastRequest;

    return { ...logon, request };
};

// const promisify = (client:any,body:any) => {
//     return new Promise((resolve, reject) =>
//         client.Logon(body,(err,result,env,soap)=>{
//             if(err)
//             reject(err);
//             else{
//                 resolve({
//                     result,
//                     env,
//                     soap
//                 })
//             }
//         })
//     );
// };

export const search = async () => {
    // const sign: any = await logon();
    // const token = sign.result.Signature;
    const token = `IsdjBPY4ti8=|rkj/yICOKcQmrq2ajoDLiA0+QfsyZER6NOApe2kA+H6uiLJslybvLF5IFxJR7ls55pJSE3TbhwnIi//SuAoiEDH2BC+8fYJxpajrBz+hieMl5/+2h9aQxZGFXJkQmvvGgKJvZ0Kl9BQ=`;
    const file = path.resolve("BookingManager.wsdl");
    const client: any = await createClient(file);

    const body = {
        GetAvailabilityRequest: {
            TripAvailabilityRequest: {
                AvailabilityRequests: {
                    AvailabilityRequest: [
                        {
                            DepartureStation: "HYD",
                            ArrivalStation: "DEL",
                            BeginDate: "2021-12-30T00:00:00",
                            EndDate: "2021-12-30T00:00:00",
                            CarrierCode: "SG",
                            FlightType: "All",
                            PaxCount: 1,
                            Dow: "Daily",
                            CurrencyCode: "INR",
                            AvailabilityType: "Default",
                            MaximumConnectingFlights: 3,
                            AvailabilityFilter: "ExcludeUnavailable",
                            FareClassControl: "CompressByProductClass",
                            MaximumFarePrice: 0,
                            MinimumFarePrice: 0,
                            SSRCollectionsMode: "None",
                            InboundOutbound: "None",
                            NightStay: 0,
                            IncludeAllotments: false,
                            FareTypes: {
                                string: ["R", "MX", "SF"],
                            },
                            ProductClasses: {
                                string: ["RS", "SC", "SF", "FS"],
                            },
                            PaxPriceTypes: {
                                PaxPriceType: [
                                    {
                                        PaxType: "ADT",
                                        PaxCount: 1,
                                    },
                                ],
                            },
                            IncludeTaxesAndFees: true,
                            FareRuleFilter: "Default",
                            LoyaltyFilter: "MonetaryOnly",
                            ServiceBundleControl: "Disabled",
                            BookingStatus: "Default",
                        },
                    ],
                },
                LoyaltyFilter: "MonetaryOnly",
                LowFareMode: false,
            },
        },
    };

    client.addSoapHeader('<h:ContractVersion xmlns:h="http://schemas.navitaire.com/WebServices">420</h:ContractVersion>');
    client.addSoapHeader(
        '<h:EnableExceptionStackTrace xmlns:h="http://schemas.navitaire.com/WebServices">true</h:EnableExceptionStackTrace>'
    );
    client.addSoapHeader(`<h:Signature xmlns:h="http://schemas.navitaire.com/WebServices">${token}</h:Signature>`);

    try {
        const res = await client.GetAvailabilityVer2(body);
        const request = client.lastRequest;
        return {
            res,
            request,
        };
    } catch (error) {
        const request = client.lastRequest;
        return {
            error,
            request,
        };
    }
};

const createClient = (url: string) => {
    return new Promise((resolve, reject) =>
        soap.createClient(url, {}, (err: any, client: any) => (err ? reject(err) : resolve(client)))
    );
};
