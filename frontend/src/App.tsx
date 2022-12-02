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
                  <Route path={""} element={<div>Hello Wizards</div>}> </Route>
                  <Route path={"/speaking-hat"} element={<WizardApp/>}> </Route>
                  <Route path={"/wizard-gallery"} element={<div>Wizard Gallery</div>}> </Route>
              </Routes>

          </BrowserRouter>

      </div>
    </div>
    );
}

export default App;
