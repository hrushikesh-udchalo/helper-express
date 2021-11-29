//[[farebasis, [total_fare, basic_fare, insurance, airport_tax, surcharge, terminal_fee, booking_fee, vat]{ADULT, CHILD, INFANT, ADULT_RETURN, CHILD_RETURN, INFANT_RETURN}, notes, is_ibook, min_stay, max_stay, total_fare_agent_adult, total_fare_agent_ret_adult, total_fare_agent_child, total_fare_agent_ret_child, total_fare_agent_infant, total_fare_agent_ret_child, bg_allow_adult, bg_allow_child], [other_fee]{ADULT, CHILD, INFANT}]

import { Fare, FareDetails, FareResponse } from "../types/fare";


export const test_fare_res = {
    err_code: "0",
    flight_date: "20211112",
    flight_no: "Q19991",
    return_flight: 0,
    ret_flight_date: "",
    ret_flight_no: "",
    ret_fare_info: [],
    org: "SIN",
    des: "HKG",
    fare_info: [
        [
            "Y/Y",
            [112825, 100000, 2545, 91, 0, 189, 0, 10000],
            [112825, 100000, 2545, 91, 0, 189, 0, 10000],
            [112825, 100000, 2545, 91, 0, 189, 0, 10000],
            [112825, 100000, 2545, 91, 0, 189, 0, 10000],
            [112825, 100000, 2545, 91, 0, 189, 0, 10000],
            [112825, 100000, 2545, 91, 0, 189, 0, 10000],
            "", //note
            "", //is_ibook
            "", //min_stay
            "", //max_stay
            "IDR", //ccy
            107636, //agent_fare adult
            107636, //agent_fare ret_adult
            107636, //agent_fare child
            107636, //agent_fare ret_child
            0,      //incentive adult
            0,      //incentive child
            "15",
            "15",
            [],
            [],
            [],
        ],
    ],
};


export const test_fare_res_full = {
    err_code: "0",
    flight_date: "20200717",
    flight_no: "Q1367",
    return_flight: 1,
    ret_flight_date: "20200724",
    ret_flight_no: "Q1368",
    ret_org: "HKG",
    ret_des: "CGK",
    ret_fare_info: [
        [
            "F/F",
            [1495.75, 1000, 0, 15, 15, 0, 400, 65.75],
            [970.75, 500, 0, 15, 15, 0, 400, 40.75],
            [135.75, 100, 0, 15, 15, 0, 0, 5.75],
            [1480, 985, 0, 15, 15, 0, 400, 65],
            [955, 485, 0, 15, 15, 0, 400, 40],
            [120, 85, 0, 15, 15, 0, 0, 5],
            "",
            "IBOOK",
            "",
            "",
            "IDR",
            1045.75,
            1030.75,
            545.75,
            530.75,
            0,
            0,
            "20",
            "20",
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [],
        ],
        [
            "C/C",
            [1285.75, 800, 0, 15, 15, 0, 400, 55.75],
            [865.75, 400, 0, 15, 15, 0, 400, 35.75],
            [114.75, 80, 0, 15, 15, 0, 0, 4.75],
            [1270, 785, 0, 15, 15, 0, 400, 55],
            [850, 385, 0, 15, 15, 0, 400, 35],
            [99, 65, 0, 15, 15, 0, 0, 4],
            "",
            "IBOOK",
            "",
            "",
            "IDR",
            845.75,
            830.75,
            445.75,
            430.75,
            0,
            0,
            "20",
            "20",
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [],
        ],
        [
            "Y/Y",
            [1075.75, 600, 0, 15, 15, 0, 400, 45.75],
            [760.75, 300, 0, 15, 15, 0, 400, 30.75],
            [93.75, 60, 0, 15, 15, 0, 0, 3.75],
            [1060, 585, 0, 15, 15, 0, 400, 45],
            [745, 285, 0, 15, 15, 0, 400, 30],
            [78, 45, 0, 15, 15, 0, 0, 3],
            "",
            "IBOOK",
            "",
            "",
            "IDR",
            645.75,
            630.75,
            345.75,
            330.75,
            0,
            0,
            "20",
            "20",
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [],
        ],
    ],
    org: "CGK",
    des: "HKG",
    fare_info: [
        [
            "F/F",
            [1495.75, 1000, 0, 15, 15, 0, 400, 65.75],
            [970.75, 500, 0, 15, 15, 0, 400, 40.75],
            [135.75, 100, 0, 15, 15, 0, 0, 5.75],
            [1495.75, 1000, 0, 15, 15, 0, 400, 65.75],
            [970.75, 500, 0, 15, 15, 0, 400, 40.75],
            [135.75, 100, 0, 15, 15, 0, 0, 5.75],
            "",
            "IBOOK",
            "",
            "",
            "IDR",
            1045.75,
            1031.5,
            545.75,
            531.5,
            0,
            0,
            "20",
            "20",
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [],
        ],
        [
            "C/C",
            [1285.75, 800, 0, 15, 15, 0, 400, 55.75],
            [865.75, 400, 0, 15, 15, 0, 400, 35.75],
            [114.75, 80, 0, 15, 15, 0, 0, 4.75],
            [1285.75, 800, 0, 15, 15, 0, 400, 55.75],
            [865.75, 400, 0, 15, 15, 0, 400, 35.75],
            [114.75, 80, 0, 15, 15, 0, 0, 4.75],
            "",
            "IBOOK",
            "",
            "",
            "IDR",
            845.75,
            831.5,
            445.75,
            431.5,
            0,
            0,
            "20",
            "20",
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [],
        ],
        [
            "Y/Y",
            [1075.75, 600, 0, 15, 15, 0, 400, 45.75],
            [760.75, 300, 0, 15, 15, 0, 400, 30.75],
            [93.75, 60, 0, 15, 15, 0, 0, 3.75],
            [1060, 585, 0, 15, 15, 0, 400, 45],
            [760.75, 300, 0, 15, 15, 0, 400, 30.75],
            [93.75, 60, 0, 15, 15, 0, 0, 3.75],
            "",
            "IBOOK",
            "",
            "",
            "IDR",
            645.75,
            630.75,
            345.75,
            331.5,
            0,
            0,
            "20",
            "20",
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [
                ["RCS Provision", 200],
                ["Cute Fee", 100],
                ["User Development Fee", 100],
            ],
            [],
        ],
    ],
};

export const getFareResponse = (res: any) => {
    const response:FareResponse = {
        err_code:res.err_code,
        flight_date:res.flight_date,
        flight_no:res.flight_no,
        return_flight:res.return_flight,
        ret_flight_date:res.return_flight_date,
        ret_flight_no:res.ret_flight_no,
        org:res.org,
        des:res.des,
        fare_info:getFareInfo(res.fare_info),
        ret_fare_info:res.ret_fare_info ? getFareInfo(res.ret_fare_info) : undefined
    }
    // console.log(response);
    return response;
};

const getFareInfo = (fare_info:any):Fare[] =>{
    return fare_info.map((item:any):Fare=>{
        return {
            sub_class:item[0],
            details:{
                adult:getFareDetails(item[1]),
                child:getFareDetails(item[2]),
                infant:getFareDetails(item[3]),
                ret_adult:getFareDetails(item[4]),
                ret_child:getFareDetails(item[5]),
                ret_infant:getFareDetails(item[6]),
            },
            note:item[7],
            is_i_book:item[8],
            min_stay:item[9],
            max_stay:item[10],
            ccy:item[11],
            agent_fare:{
                adult:item[12],
                ret_adult:item[13],
                child:item[14],
                ret_child:item[15]
            },
            incentive:{adult:item[16],child:item[17]},
            baggage_allowance:{
                adult:item[18],
                child:item[19]
            },
            other_fee:{
                adult:item[20],
                child:item[21],
                infant:item[22],
            },
        }
    })
}

//[[farebasis, [total_fare, basic_fare, insurance, airport_tax, surcharge, terminal_fee, booking_fee, vat]{ADULT, CHILD, INFANT, ADULT_RETURN, CHILD_RETURN, INFANT_RETURN}, notes, is_ibook, min_stay, max_stay, total_fare_agent_adult, total_fare_agent_ret_adult, total_fare_agent_child, total_fare_agent_ret_child, total_fare_agent_infant, total_fare_agent_ret_child, bg_allow_adult, bg_allow_child], [other_fee]{ADULT, CHILD, INFANT}]


const getFareDetails = (fareBreakup:any) : FareDetails => {
    return {
        total_fare:fareBreakup[0],
        basic_fare:fareBreakup[1],
        insurance:fareBreakup[2],
        airport_tax:fareBreakup[3],
        surcharge:fareBreakup[4],
        terminal_fee:fareBreakup[5],
        booking_fee:fareBreakup[6],
        vat:fareBreakup[7]
    }
}