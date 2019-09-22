import React, { Component } from 'react';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const Layout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const BlankPage = React.lazy(() => import('./views/Pages/BlankPage'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
export const IdleFlag = (props) => {
  return (
    <>
      <Modal isOpen={props.idleAutoFlag} className={props.className}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.onHandleClickYes}>onHandleClickYes</Button>{' '}
          <Button color="secondary" onClick={props.onHandleClickNo}>No</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idleAutoFlag: false
    }
    this.IDLE_COUNT = 1800; //Idle Waiting Time in Seconds
    this.AUTO_CLOSE_WAITING_TIME = 60000 // autoClose Waiting time in milliseconds 
    //Browser Idle 
    this.events = [
      "load",
      "click",
      "scroll",
      "keypress"
    ];
    this.events.forEach(eventName => {
      window.addEventListener(eventName, this.resetIdleTime, false);
    });
    document.addEventListener("visibilitychange", this.browserTabActive, false);
    this.startTimer();
  }
  clearTimer = () => {
    window.clearTimeout(this.autoClooseTime);
    window.clearInterval(this.waringTimeOut);
    this.count = this.IDLE_COUNT;
  }
  resetIdleTime = () => {
    if (!(this.props.history.location.pathname == "/login")) {
      this.clearTimer();
      this.startTimer();
    }
  }
  startTimer = () => {
    if (!(this.props.history.location.pathname == "/login")) {
      const idleFlag = JSON.parse(localStorage.getItem('idleFlag'));
      if (!(idleFlag)) {     
        this.waringTimeOut = window.setInterval(this.idleWaring, 1000);
      }
    }
  }
  browserTabActive = () => {
    if (!(document.hidden)) {    
      if (!(this.props.history.location.pathname == "/login")) {
        const idleFlag = JSON.parse(localStorage.getItem('idleFlag'));
        if (idleFlag) {      
          this.clearTimer();
          this.setState({ idleAutoFlag: true });
        } else {
          this.setState({ idleAutoFlag: false });
          this.clearTimer();
          this.startTimer();
        }
      }
    }
  }

  idleWaring = () => {
    this.count--;   
    if (this.count === 0) {
      localStorage.setItem('idleFlag', true);
      this.setState({ idleAutoFlag: true });
      this.clearTimer();
      this.autoClooseTime = setTimeout(() => {       
        localStorage.setItem('idleFlag', false);
        this.setState({ idleAutoFlag: false });
        this.clearTimer();
        this.props.history.push('/login');
      }, this.AUTO_CLOSE_WAITING_TIME);
    }
  }
  onHandleClickYes = (e) => {    
    localStorage.setItem('idleFlag', false);
    this.setState({ idleAutoFlag: false });
    this.clearTimer();
    this.startTimer();

  }
  onHandleClickNo = () => {   
    localStorage.setItem('idleFlag', false);
    this.setState({ idleAutoFlag: false });
    this.clearTimer();
    this.props.history.push('/login');
  }

  render() {
    return (

      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
          <Route exact path="/blankPage" name="Blank Page" render={props => <BlankPage {...props} />} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
          <Route path="/" name="Home" render={props => <Layout {...props} />} />
        </Switch>
        {<IdleFlag idleAutoFlag={this.state.idleAutoFlag} onHandleClickYes={this.onHandleClickYes} onHandleClickNo={this.onHandleClickNo}></IdleFlag>}
      </React.Suspense>

    );
  }
}

export default withRouter(App);
