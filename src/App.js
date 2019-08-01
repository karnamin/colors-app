import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Palette from "./components/Palette";
import PaleteList from "./components/PaletteList";

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
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={routeProps => (
                        <PaleteList palettes={seedColors} {...routeProps} />
                    )}
                />
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
                <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={() => <h1>Color Id</h1>}
                />
            </Switch>
            /* <div className="App">
                <Palette palette={generatePalette(seedColors[4])} />
            </div> */
        );
    }
}

export default App;
