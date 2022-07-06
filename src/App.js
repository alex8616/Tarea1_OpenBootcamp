import logo from './logo.svg';
import './App.css';
import ContactoComponent from './container/contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoComponent></ContactoComponent>
      </header>
    </div>
  );
}

export default App;
