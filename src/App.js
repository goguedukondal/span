
// import './App.css';
import Navbar from './components/Nav/Navbar';
import UpdateProfile from './components/updateProfile/UpdateProfile';
import Contact from './components/Contact/Contact';
import Adress from './components/Adress/Adress';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <UpdateProfile/>
     <Contact/>
     <Adress/>
    </div>
  );
}

export default App;
