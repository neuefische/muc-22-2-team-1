import React from 'react';
import './App.css';
import WizardApp from './components/WizardApp';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import WizardGalleryApp from "./components/WizardGalleryApp";
import LoginPage from "./components/LoginPage";
import useUser from "./hooks/useUser";


function App() {

    const {username, login, logout} = useUser();

  return (
    <div className="App">
      <div>
          <BrowserRouter>
              <NavigationBar logout={logout}/>
              <h2>Hallo {username}!</h2>

              <Routes>
                  <Route path={""} element={<Home/>}> </Route>
                  <Route path={"/speaking-hat"} element={<WizardApp/>}> </Route>
                  <Route path={"/wizard-gallery"} element={<WizardGalleryApp/>}> </Route>
                  <Route path={"/login"} element={<LoginPage login={login}/>} />
              </Routes>

          </BrowserRouter>

      </div>
    </div>
    );
}

export default App;
