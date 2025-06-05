//import logo from './logo.svg';
import { BrowserRouter,NavLink,Link, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
 //import video from './pages/Video';

//Importer le composant Formulaire ici dans App
import Formulaires from "./components/Formulaires";

//importer le composant footer
import Footer from "./footer/Footer";

 // comme on a deja installer bootstrapp, on peut l'importer ici 
import "bootstrap/dist/css/bootstrap.min.css";
// Importer le useState
import { useState} from "react";


function App (){
    // activer l'acceuil comme nav par defaut 
    const [ curentRoute, setCurentRoute] = useState();
    return (
        <div>
                {/*Faire les liens entre les pages*/}
                <BrowserRouter> 
                <nav className="m-1 p-1 border border-info">
                    <ul className="nav na-pills">
                        <li>
                           <Link onClic ={() => setCurentRoute("Home")} className={ curentRoute === "Home" ? "btn btn-info ms-1" :"btn btn-outline-info ms-1"} to={"/Home"}>Accueil</Link> 
                           {/*<NavLink to={"/Home"} className={({ isActive }) => isActive ? "active" : " "  } >Accueil </NavLink>*/}
                        </li>

                        <li>
                            <Link className=" btn btn-outline-info ms-1" to={"/Products"}>Produits</Link>
                        </li>

                        <li>
                            <Link className=" btn btn-outline-danger ms-1" to={"/Formulaires"}>Formulaire</Link>
                        </li>

                    </ul>
                </nav>
                <Routes>
                    <Route path="/Home" element={ <Home/>}></Route>
                    <Route path="/Products" element={ <Products/>}></Route>
                    <Route path="/Formulaires" element={ <Formulaires/>}></Route>
                </Routes>
                </BrowserRouter>

                <div className="app-footer">
                    <Footer/>

                </div>

        </div>
    

    );


}


export default App;

