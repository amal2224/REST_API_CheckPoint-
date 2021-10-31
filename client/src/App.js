import { Switch ,Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home"
import AddContact from "./Pages/AddContact"
import ContactList from "./Pages/ContactList"
import Error from "./Pages/Error"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contacts" component={ContactList}/>
        <Route path={["/addContact" , "/edit/:id"]} component={AddContact}/> {/* //the same path will render two componants (contact)  */}
        <Route path="/*" component={Error}/>
      </Switch>
      <Footer/>
    </div>
  );
}
export default App;