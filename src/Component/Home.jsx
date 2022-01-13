import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import { getEmployees } from "../Services/employee-services";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";

export const EmployeeContext = React.createContext();

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: props.employees,
            filteredRes: props.employees
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    static getDerivedStateFromProps(newProps, oldState) {
        console.log(newProps);
        if (newProps.employees.length != oldState.employees.length) {
            return {
                employee: newProps.employees,
                filteredRes: newProps.employees
            }
        }
        return null;
    }
    async componentDidMount() {
        //using backend API
        // let employees = await getEmployees()
        //     .catch(err => console.log("Error in loding employee data"))
        // this.setState({ employees, filteredRes: employees });
    }

    handleSearch(searchText) {
        console.log(searchText);
        if (searchText && searchText.length > 0) {
            searchText = searchText.toUpperCase();
            let filterResult = this.state.employees.filter((item) => item.Name.toUpperCase().indexOf(searchText) >= 0 || item.Location.toUpperCase().indexOf(searchText) >= 0);
            console.log("filterResult");
            console.log(filterResult);
            this.setState({ filteredRes: filterResult })
        } else {
            this.setState({ filteredRes: this.state.employees })
        }
    }

    render() {
        console.log(this.state);
        return <EmployeeContext.Provider value={{ employees: this.state.employees, data: this.state.filteredRes, doSearch: this.handleSearch }}>
            <Container>
                <Row>
                    <Col>
                        <h2>Home</h2>
                        {/* <SearchBar doSearch={this.handleSearch} />
                        <EmployeeList data={this.state.filteredRes} /> */}
                        <SearchBar />
                        <EmployeeList />
                    </Col>
                </Row>
            </Container>
        </EmployeeContext.Provider>
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employeeState.employees
    }
}

let connector = connect(mapStateToProps);
export default connector(Home);




// import React, { Component } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { connect } from "react-redux";
// import { getEmployees } from "../Services/employee-services";
// import EmployeeList from "./EmployeeList";
// import SearchBar from "./SearchBar";

// export const EmployeeContext = React.createContext();

// class Home extends Component {
//     constructor(props) {
//         super(props);
// console.log('Inside constructor')
// console.log(props.employees)
//         this.state = {
//             employees: props.employees,
//             filteredResults: props.employees
//         }
//         this.handleSearch = this.handleSearch.bind(this);
//     }
//     async componentDidMount() {
//         // let employees = await getEmployees()
//         //     .catch(err => console.log(err));
//         // this.setState({ employees, filteredResults: employees });
//         // // console.log(process.env.REACT_APP_EMPLOYEE_API_URL);
//         // // console.log(employees);
//     }

//     handleSearch(searchText) {
//         // do search using search text and update state
//         console.log(searchText);
//         if (searchText && searchText.length > 0) {
//             searchText = searchText.toUpperCase();
//             let filteredResults = this.state.employees.filter(emp =>
//                 emp.LocationId.toUpperCase().indexOf(searchText) >= 0
//                 || emp.EmpCode.toUpperCase().indexOf(searchText) >= 0
//                 || emp.Name.toUpperCase().indexOf(searchText) >= 0
//                 || emp.Designation.toUpperCase().indexOf(searchText) >= 0
//                 || emp.Department.toUpperCase().indexOf(searchText) >= 0
//             );
//             this.setState({ filteredResults })
//         }
//         else {
//             this.setState({ filteredResults: this.state.employees })
//         }


//     }

//     render() {
//         //console.log(this.state);
//         return <EmployeeContext.Provider value={{ employees: this.state.employees, data: this.state.filteredResults, doSearch: this.handleSearch }}>
//             <Container>
//                 <Row>
//                     <Col>
//                         <h4>Employee List</h4>
//                         <SearchBar />
//                         <EmployeeList />
//                     </Col>
//                 </Row>

//             </Container>
//         </EmployeeContext.Provider>
//     }


// }
// function mapStateToProps(state) {
//     return {
//         employees: state.employeeState.employees
//     }
// }

// // function mapDispatchToProps(dispatch){

// // }

// export default connect(mapStateToProps)(Home);