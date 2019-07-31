import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import "./App.css";

class App extends Component {
    findPalette(id) {
        return seedColors.find(function(palette) {
            return palette.id === id;
        });
    }
    render() {
        console.log(generatePalette(seedColors[4]));
        return (
            <Switch>
                <Route exact path="/" render={() => <h1>Palette list</h1>} />
                <Route
                    exact
                    path="/palette/:id"
                    render={routeProps => (
                        <Palette
                            palette={generatePalette(
                                this.findPalette(routeProps.match.params.id)
                            )}
                        />
                    )}
                />
            </Switch>
            /* <div className="App">
                <Palette palette={generatePalette(seedColors[4])} />
            </div> */
        );
    }
}

export default App;
