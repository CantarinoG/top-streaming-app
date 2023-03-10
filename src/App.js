import { useState, useEffect } from "react"; 

import { initializeFireBase, authWithGoogle, isUserLoggedIn, loadMedia, signOutUser } from "./utils/fireBaseManipulation";

import "./styles/App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Catalog from "./pages/Catalog";
import Display from "./pages/Display";

function App() {

  //State:
  const [showHome, setShowHome] = useState(true);
  const [showBrowse, setShowBrowse] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [showDisplay, setShowDisplay] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [currentTitle, setCurrentTitle] = useState({id: '-1', name: '', image: '', video: ''});


  //LifeCycle:
  useEffect(() => { //ComponentDidMount
    initializeFireBase();
    loadMedia(setData);
  }, []);

  //Functions:

  const switchToHome = () => {
    setShowHome(true);
    setShowBrowse(false);
    setShowCatalog(false);
    setShowDisplay(false);
  }

  const switchToBrowse = () => {
    setShowHome(false);
    setShowBrowse(true);
    setShowCatalog(false);
    setShowDisplay(false);
  }

  const switchToCatalog = () => {
    setShowHome(false);
    setShowBrowse(false);
    setShowCatalog(true);
    setShowDisplay(false);
  }

  const switchToDisplay = () => {
    setShowHome(false);
    setShowBrowse(false);
    setShowCatalog(false);
    setShowDisplay(true);
  }

  const logInWithGoogle = async () => {
    await authWithGoogle();
    if (isUserLoggedIn()) {
      setLoggedIn(true);
      switchToBrowse();
    }
  }

  const signOutApp = () => {
    signOutUser();
    switchToHome();
    console.log(isUserLoggedIn())
  }

  const displayMedia = (e) => {
    const id = e.target.getAttribute('data-id');
    const currentData = [...data];
    const index = currentData.findIndex((title) => title.id == id);
    const currentTitle = currentData[index];
    setCurrentTitle(currentTitle);
    switchToDisplay();
  }

  //Render:
  return <div className="app-container">
    {showHome ? <Home googleBtnClick={logInWithGoogle}/> : null}
    {showBrowse && loggedIn ? <><Header browseClick={switchToBrowse} catalogClick={switchToCatalog} signOutClick={signOutApp}/><Browse titles={data} mediaClick={displayMedia}/></> : null}
    {showCatalog && loggedIn ? <><Header browseClick={switchToBrowse} catalogClick={switchToCatalog} signOutClick={signOutApp}/><Catalog titles={data} mediaClick={displayMedia}/></> : null}
    {showDisplay && loggedIn ? <Display currentTitle={currentTitle} backClick={switchToBrowse}/> : null}
  </div>

}

export default App;