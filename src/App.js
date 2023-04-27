import Navbar from './Navbar';
import Home from './Home';
import './App.css';

const App = () => {


    return (
        <>
        <Navbar/>
        <div className='content'>
            <h1>React App</h1>
            <Home />
        </div>
        </>
    );
}

export default App;

