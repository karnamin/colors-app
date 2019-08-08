import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Palette from "./components/Palette";
import PaleteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";

import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

import "./App.css";

class App extends Component {
    // function to find the palette based on id
    findPalette(id) {
        return seedColors.find(function(palette) {
            return palette.id === id;
        });
    }

    render() {
        return (
            <Switch>
                {/* Root route */}
                <Route
                    exact
                    path="/"
                    render={routeProps => (
                        <PaleteList palettes={seedColors} {...routeProps} />
                    )}
                />

                {/* Palette route */}
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

                {/* SingleColorPalette route */}
                <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={routeProps => (
                        <SingleColorPalette
                            palette={generatePalette(
                                this.findPalette(
                                    routeProps.match.params.paletteId
                                )
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
