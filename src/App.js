import { useState } from "react"; 

import "./styles/App.css";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Catalog from "./pages/Catalog";
import Display from "./pages/Display";

function App() {

  const [showHome, setShowHome] = useState(true);
  const [showBrowse, setShowBrowse] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [showDisplay, setShowDisplay] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return <div className="app-container">
    {showHome ? <Home/> : null}
    {showBrowse ? <Browse/> : null}
    {showCatalog ? <Catalog/> : null}
    {showDisplay ? <Display/> : null}
  </div>

}

export default App;