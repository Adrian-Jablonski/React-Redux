import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";

function App() {
    return (
        <div className="container-fluid">
            {/* Calling header about Routes will always display the heading */}
            <Header />

            {/* Switch allows us to declare that only one route can match */}
            <Switch>
                {/* Setting up app routing */}
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                {/* If no route found */}
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
