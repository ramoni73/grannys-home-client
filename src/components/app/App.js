import React from 'react';
import './App.css';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {Route, Switch} from "react-router-dom";
import OffersPage from "../pages/OffersPage";
import MyAcceptedOffersPage from "../pages/MyAcceptedOffersPage";
import AcceptedOffersPage from "../pages/AcceptedOffersPage";
import ChatsPage from "../pages/ChatsPage";
import MyProfilePage from "../pages/MyProfilePage";

function App() {
  return (
    <div className="container">
        <Header/>

        <Switch>
            <Route path="/" render={() => <h2>Welcome to Granny's Home</h2>} exact={true}/>
            <Route path="/offers" component={OffersPage}/>
            <Route path="/myAcceptedOffers" component={MyAcceptedOffersPage}/>
            <Route path="/acceptedOffers" component={AcceptedOffersPage}/>
            <Route path="/chats" component={ChatsPage}/>
            <Route path="/myProfile" component={MyProfilePage}/>
        </Switch>

        <Footer />
    </div>
  );
}

export default App;
