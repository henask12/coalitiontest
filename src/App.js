import './App.css';
import Home from './components/Home';
import Team from './components/Team';
import History from './components/History';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Home/>
     <main className="overflow-hidden">
     <Navbar backgroundColor="white" linkColor="black" header />
     <History/>
     <Team/>
     </main>
     <Footer/>

    </div>
  );
}

export default App;
