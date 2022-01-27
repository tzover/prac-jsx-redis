import logo from './images/logo.svg';
import Asnlogo from './images/Aisinlogo.svg';
import './App.css';
import { ShorTextForm } from './components/molecules/ShortTextForm';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={Asnlogo} className="App-logo" alt="logo" width="50%" />
            </header>
            <main>
                <ShorTextForm />
            </main>
        </div>
    );
}

export default App;
