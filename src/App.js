import React, { Component } from "react";
import { Route } from "react-router-dom";
import Food from "./Food";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/food/:name"
          // render={routeProps => <Food name="egg" stuff={routeProps} />}
          // render={routeProps => <Food name={routeProps.match.params.name} />} // ONE WAY
          render={routeProps => <Food {...routeProps} />} // OPTION 2: Bring in 3 seperate props ...routeProps
        />
        {/* OR use component and skip the extra work but it won't work if you need another prop such as 'authenicated' */}
        {/* <Route exact path="/food/:name" component={Food} /> */}
      </div>
    );
  }
}

export default App;
/*
Below, will work but you I would have to hard-code every possible food that could be entered:
<Route path="/food/kale" render={() => <Food name="kale" />} />
<Route path="/food/chicken" render={() => <Food name="chicken" />} />

Instead, we use the ' : ' to make a URL PARAMETER, in this case it's 'name'

ROUTE PROPS: assigned to all render methods
- match
- location
- history

render={routeProps => <Food name="egg" stuff={routeProps} />}
  stuff returns match, location, and history
  routeProps.match.params.name will return the name in the url

*/
