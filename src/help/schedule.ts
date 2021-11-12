import { availabilityPerClass, Leg, searchResponse } from "../types/search";

export const test_search_res = {
    err_code: "0",
    org: "CGK",
    des: "HKG",
    flight_date: "20200717",
    extra_days: 0,
    schedule: [ 
        [
            [
                "Q1-Q1367",
                "CGK",
                "HKG",
                "20200717",
                "20200718",
                "1000",
                "1400(+1)",
                "03h00m",
                "A319",
                "1",
                [
                    ["F", "8"],
                    ["C", "8"],
                    ["Y", "87"],
                ],
                "CGK-SIN-HKG",
            ],
        ],
        [
            [
                [
                    "Q1-Q1555",
                    "CGK",
                    "SIN",
                    "20200717",
                    "20200717",
                    "1210",
                    "1500",
                    "01h50m",
                    "A319",
                    "0",
                    [
                        ["Y", "800"],
                        ["H", "95"],
                        ["K", "85"],
                        ["M", "75"],
                        ["Q", "65"],
                        ["S", "55"],
                        ["T", "45"],
                        ["V", "35"],
                        ["X", "25"],
                        ["W", "20"],
                        ["O", "10"],
                    ],
                    "CGK-SIN",
                ],
                [
                    "Q1-Q1557",
                    "SIN",
                    "HKG",
                    "20200717",
                    "20200717",
                    "1700",
                    "1900",
                    "02h00m",
                    "A319",
                    "0",
                    [["Y", "180"]],
                    "SIN-HKG",
                ],
            ],
        ],
    ],
    ret_flight_date: "20200717",
    ret_schedule: [
        [
            [
                "Q1-Q1368",
                "HKG",
                "CGK",
                "20200717",
                "20200717",
                "1600",
                "2300",
                "08h00m",
                "A319",
                "1",
                [
                    ["F", "8"],
                    ["C", "8"],
                    ["Y", "90"],
                ],
                "HKG-SIN-CGK",
            ],
        ],
        [
            [
                [
                    "Q1-Q1558",
                    "HKG",
                    "SIN",
                    "20200717",
                    "20200717",
                    "1500",
                    "1700",
                    "02h00m",
                    "A319",
                    "0",
                    [
                        ["F", "8"],
                        ["C", "8"],
                        ["Y", "90"],
                    ],
                    "HKG-SIN",
                ],
                [
                    "Q1-Q1554",
                    "SIN",
                    "CGK",
                    "20200717",
                    "20200717",
                    "2100",
                    "2200",
                    "02h00m",
                    "A319",
                    "0",
                    [
                        ["F", "8"],
                        ["C", "8"],
                        ["Y", "90"],
                    ],
                    "SIN-CGK",
                ],
            ],
        ],
    ],
};


const getLeg_info = (schedule: any): Leg[] => {
    return schedule.map((item: any): Leg => {
        return {
            flightNumber: item[0],
            org: item[1],
            des: item[2],
            departureDate: item[3],
            arrivalDate: item[4],
            departureTime: item[5],
            arrivalTime: item[6],
            duration: item[7],
            aircraft: item[8],
            transit: item[9],
            availabilityPerClass: item[10].map(
                (avItem: any): availabilityPerClass => {
                    return {
                        availabilityClass: avItem[0],
                        availability: avItem[1],
                    };
                }
            ),
            route: item[11],
            timestamp: item[12] || null,
        };
    });
};


const getSearchResponse = (res:any) => {
    const response:searchResponse={
        err_code:res.err_code,
        org:res.org,
        des:res.des,
        flight_date:res.flight_date,
        extra_days:res.extra_days,
        schedule:{
            direct:getLeg_info(res.schedule[0]),
            connecting:res.schedule[1].map((item:any)=>{
                return {
                    segments:getLeg_info(item)
                }
            })
        },
        ret_flight_date:res.ret_flight_date,
        ret_schedule:{
            direct:getLeg_info(res.ret_schedule[0]),
            connecting:res.ret_schedule[1].map((item:any)=>{
                return {
                    segments:getLeg_info(item)
                }
            })
        }

    }
    return response;
};

export { getSearchResponse };
