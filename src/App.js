import Navbar from './Navbar';
import Home from './Home';
import './App.css';

const App = () => {


    return (
        <>
        <Navbar/>
        <div className='content'>
            <Home />
        </div>
        </>
    );
}

export default App;

