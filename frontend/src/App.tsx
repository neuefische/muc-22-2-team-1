import React from 'react';
import './App.css';
import WizardApp from './components/WizardApp';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import WizardGalleryApp from "./components/WizardGalleryApp";


function App() {
  return (
    <div className="App">
      <div>
          <BrowserRouter>
              <NavigationBar/>

              <Routes>
                  <Route path={""} element={<Home/>}> </Route>
                  <Route path={"/speaking-hat"} element={<WizardApp/>}> </Route>
                  <Route path={"/wizard-gallery"} element={<WizardGalleryApp/>}> </Route>
              </Routes>

          </BrowserRouter>

      </div>
    </div>
    );
}

export default App;
