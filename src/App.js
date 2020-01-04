import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Food from "./Food";
import Meal from "./Meal";
import FoodSearch from "./FoodSearch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* add switch so we only render one route, the first one to match */}
        {/* *******   ORDER IS IMPORTANT   ********* */}
        <Switch>
          <Route
            exact
            path="/food/:name"
            // render={routeProps => <Food name={routeProps.match.params.name} />} // ONE WAY
            render={routeProps => <Food {...routeProps} />} // OPTION 2: Bring in 3 seperate props ...routeProps
          />
          <Route
            exact
            path="/food/:foodName/drink/:drinkName"
            component={Meal}
          />
          {/* <Route exact path="/" render={() => <h1>HomePage</h1>} /> */}
          <Route exact path="/" render={() => <FoodSearch />} />
          <Route render={() => <h2>404 Error: Site requested not found</h2>} />
        </Switch>
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



Working with one parameter in the url
<Route exactpath="/food/:name"
  // render={routeProps => <Food name="egg" stuff={routeProps} />}
  // render={routeProps => <Food name={routeProps.match.params.name} />} // ONE WAY
  render={routeProps => <Food {...routeProps} />} // OPTION 2: Bring in 3 seperate props ...routeProps
/>
/* OR use component and skip the extra work but it won't work if you need another prop such as 'authenicated' */
/* <Route exact path="/food/:name" component={Food} /> */
