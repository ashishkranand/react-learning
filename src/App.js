// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Footer from './components/Footer';


function App() {
  return (
    <>
    
<Navbar title="Word counter" abouttext="about WC"/>
{/* <Navbar title="LMS" /> */}
{/* <Navbar /> */}

<div className="container my-3">

<Textform heading="Enter the text to analyze below"/>
</div>
<Footer/>


    </>
  );
}

export default App;
