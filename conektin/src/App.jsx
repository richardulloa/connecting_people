import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './Router/router';
import Provider from './context/Provider';


function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;