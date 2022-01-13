
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import EmployeeDetails from './Component/EmpDtls';
import EmployeeForm from './Component/EmployeeForm';
import { loadEmployees } from './Actions/action-creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Amplify Components
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsEXports from './aws-exports';
Amplify.configure(awsEXports);

function App({ loadEmployees }) {
  loadEmployees();
  return (
    <Authenticator loginMechanisms={['username']}>
      {({ signOut, user }) => (
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">{process.env.REACT_APP_TITLE}</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link onClick={signOut}>Signout</Nav.Link>
                <Nav.Link href="#">Welcome {user.username}</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div id="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/employees/loc/:locId/ecode/:ecode" element={<EmployeeDetails />}></Route>
              <Route exact path="/employees/create" element={<EmployeeForm />}></Route>
            </Routes>
          </div>
        </Router>
      )}
    </Authenticator>
  );
}

function mapDispatchToProps(dispatch) {
  let actionMap = {
    loadEmployees
  }
  return bindActionCreators(actionMap, dispatch);
}
//export default App;
export default connect(null, mapDispatchToProps)(App);
