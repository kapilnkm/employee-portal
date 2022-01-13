
import axios from 'axios';

const API_URL = process.env.REACT_APP_EMPLOYEE_API_URL;

//AWS:Add Debug Configuration | AWS: EditDebug Configuration

export async function getEmployees() {
    return fetch(API_URL)
        .then(response => response.json());
}

module.export = { getEmployees };

export async function getEmployee(locId,ecode) {
    //http://localhost:5000/employees/location/MUM/empcode/E103
    let url = `${API_URL}/location/${locId}/empcode/${ecode}`;
    return fetch(url)
            .then(resp => resp.json());
}

export function insertEmployee(employee){
    return axios.post(API_URL,employee)
}

