import React from 'react';
import './App.css';
import WizardApp from './components/WizardApp';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";


function App() {
  return (
    <div className="App">


  
      <div>
          <BrowserRouter>
              <NavigationBar/>

              <Routes>
                  <Route path={""} element={<WizardApp/>}> </Route>
                  <Route path={"/Startseite"} element={<p>Wizard Welt</p>}> </Route>
                  <Route path={"/wizards"} element={<div>Galery</div>}> </Route>
              </Routes>

          </BrowserRouter>

      </div>
    </div>
    );
}

export default App;
