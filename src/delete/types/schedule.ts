export interface SearchResponse {
    err_code: string;
    org: string;
    des: string;
    flight_date: string;
    extra_days: number;
    schedule: {
        direct: Leg[];
        connecting?: ConnectingLeg[];
    };
    ret_flight_date?: string;
    ret_schedule?: {
        direct: Leg[];
        connecting?: ConnectingLeg[]
    };
}

export interface ConnectingLeg{
    segments:Leg[]
}

export interface Leg {
    flight_number: string;
    org: string;
    des: string;
    departure_date: string;
    arrival_date: string;
    departure_time: string;
    arrival_time: string;
    duration: string;
    aircraft: string;
    transit: string;
    availability_per_class: AvailabilityPerClass[];
    route: string;
    timestamp?: string;
}

export interface AvailabilityPerClass {
    class: string;
    availability: string;
}
