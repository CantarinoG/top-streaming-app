import { useState, useEffect } from "react"; 

import {getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { initializeFireBase, authWithGoogle, isUserLoggedIn } from "./utils/fireBaseManipulation";

import "./styles/App.css";

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


  //LifeCycle:
  useEffect(() => { //ComponentDidMount
    initializeFireBase();
    if(isUserLoggedIn()) {
      setLoggedIn(true);
      switchToBrowse();
    }
    loadMedia();
  }, []);

  //Functions:

  async function loadMedia() {
    const q = query(collection(getFirestore(), "media"));
    const mediaArray = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
    await mediaArray.push(doc.data());
});
    setData(mediaArray);
}

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

  //Render:
  return <div className="app-container">
    {showHome ? <Home googleBtnClick={logInWithGoogle}/> : null}
    {showBrowse && loggedIn ? <Browse titles={data}/> : null}
    {showCatalog && loggedIn ? <Catalog/> : null}
    {showDisplay && loggedIn ? <Display/> : null}
  </div>

}

export default App;