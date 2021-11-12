export interface FareResponse {
    err_code: string;
    flight_date: string;
    flight_no: string;
    return_flight: number;
    ret_flight_date?: string;
    ret_flight_no?: string;
    ret_fare_info?: Fare[];
    org: string;
    des: string;
    fare_info: Fare[];
}

export interface Fare {
    sub_class: string;
    details: {
        adult: FareDetails;
        child: FareDetails;
        infant: FareDetails;
        ret_adult?: FareDetails;
        ret_child?: FareDetails;
        ret_infant?: FareDetails;
    };
    note: string;
    is_i_book: string;
    min_stay: string;
    max_stay: string;
    ccy: string;
    agent_fare: {
        adult: number;
        ret_adult: number;
        child: number;
        ret_child: number;
    };
    incentive: {
        adult: number;
        child: number;
    };
    baggage_allowance: {
        adult: string;
        child: string;
    };
    other_fee: {
        adult: [];
        child: [];
        infant: [];
    };
}

export interface FareDetails {
    total_fare: number;
    basic_fare: number;
    insurance: number;
    airport_tax: number;
    surcharge: number;
    terminal_fee: number;
    booking_fee: number;
    vat: number;
}
