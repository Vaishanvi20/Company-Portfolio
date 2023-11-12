import './styles.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Sample from './Sample';
 import Homepages from './Components/Homepages';
// import Footer from './Components/Footer';

// import FAQAccordion from './Components/FAQAccordion';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Homepages/>}/>
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
