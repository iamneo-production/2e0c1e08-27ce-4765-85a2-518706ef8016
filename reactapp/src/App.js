
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './LOGINREGISTER/Log';
import Register from './LOGINREGISTER/Register';
import Home from './Dashboard/Nav';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import TermsAndConditions from './components/terms';
// import Feedback from './Dashboard/Feedback';
import Page from './components/Page';
import Issues from './components/Issues';
import State from './Home/State';
import Nav from './Dashboard/Nav';
// import Feedback from './Dashboard/feedback';


function App() {
  return (
    <>
    <Routes>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/log' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/foot' element={<footer/>}/>
    <Route exact path='/about' element={<AboutUs/>}/>
    <Route exact path='/terms' element={<TermsAndConditions/>}/>
    <Route exact path='/gum' element={<Page/>}/>
    <Route exact path='/issue' element={<Issues/>}/>
    <Route exact path='/state' element={<State/>}/>
    <Route exact path='/nav' element={<Nav />}/>
    
    </Routes>
    </>
  );
}

export default App;
