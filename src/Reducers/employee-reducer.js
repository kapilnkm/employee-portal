import * as ActionTypes from '../Actions/actions-types';

const initialState = {
    // employees: [
    //     { LocationId: 'Mum', Name: 'Nikhil Ezhuvankandath', Age: 31, Designation: 'SeniorManager', Department: 'MSTC', Location: 'Mumbai', EmpCode: 'EMP1' },
    //     { LocationId: 'AMB', Name: 'Mayur Solanki', Age: 23, Designation: 'Deputy Manager', Department: 'DIGITAL', Location: 'Pune', EmpCode: 'EMP2' }
    // ]
    employees: []
}


function employeeReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (action.type) {
        case ActionTypes.GET_EMPLOYEES:
            return { ...state, employees: payload }
        case ActionTypes.GET_EMPLOYEE:
            return { ...state, employee: payload }
        case ActionTypes.ADD_EMPLOYEE:
            // console.log("ADD EMP");
            // console.log(payload);
            return { ...state, employees: [...state.employees, payload] }
        case ActionTypes.GET_EMPLOYEES:
            return state = { ...state, employees: action.payload }
        case ActionTypes.DELETE_EMPLOYEE:
            //        console.log(payload);
            let dItem = state.employees.find(item => item.LocationId == payload.LocationId && item.EmpCode == payload.EmpCode);
            //      console.log(dItem);
            return { ...state, employees: state.employees.filter((item) => item != dItem) };
        default:
            return state;
    }
}

export default employeeReducer;
