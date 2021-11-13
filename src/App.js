import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AllCar from './Pages/Home/Cars/AllCar/AllCar';
import BookingCar from './Pages/Home/Cars/BookingCar/BookingCar';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Dashboard/Dashboard/Dashboard';





function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/allservices">
              <AllCar></AllCar>
            </Route>
            <PrivateRoute path='/booking/:serviceId'>
              <BookingCar></BookingCar>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
