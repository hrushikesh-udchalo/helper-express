export interface searchResponse {
    err_code: string;
    org: string;
    des: string;
    flight_date: string;
    extra_days: number;
    schedule: {
        direct: Leg[];
        connecting?: connectingLeg[];
    };
    ret_flight_date?: string;
    ret_schedule?: {
        direct: Leg[];
        connecting?: connectingLeg[]
    };
}

export interface connectingLeg{
    segments:Leg[]
}

export interface Leg {
    flightNumber: string;
    org: string;
    des: string;
    departureDate: string;
    arrivalDate: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    aircraft: string;
    transit: string;
    availabilityPerClass: availabilityPerClass[];
    route: string;
    timestamp?: string;
}

export interface availabilityPerClass {
    availabilityClass: string;
    availability: string;
}
