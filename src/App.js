import "./App.css";
import Home from "./Home/Home";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import NotFound from "./Notfound/NotFound";
import Register from "./Register/Register";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import Users from "./Users/Users";
import AddTask from "./AddTask.js/AddTask";
import MyTask from "./MyTask/MyTask";
import Submit from "./Submit/Submit";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/users">
              <Users></Users>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/make-admin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/tasks/:taskId">
              <AddTask></AddTask>
            </Route>
            <Route path="/submit/:taskId">
              <Submit></Submit>
            </Route>
            <Route path="/my-task">
              <MyTask></MyTask>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
