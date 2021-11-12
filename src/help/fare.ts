//[[farebasis, [total_fare, basic_fare, insurance, airport_tax, surcharge, terminal_fee, booking_fee, vat]{ADULT, CHILD, INFANT, ADULT_RETURN, CHILD_RETURN, INFANT_RETURN}, notes, is_ibook, min_stay, max_stay, total_fare_agent_adult, total_fare_agent_ret_adult, total_fare_agent_child, total_fare_agent_ret_child, total_fare_agent_infant, total_fare_agent_ret_child, bg_allow_adult, bg_allow_child], [other_fee]{ADULT, CHILD, INFANT}]

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

export const getFareResponse = (res: any) => {
    
};
