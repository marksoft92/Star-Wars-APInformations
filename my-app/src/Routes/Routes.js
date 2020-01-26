import React from 'react';
import People from '../People/People.js';
import Planets from '../Planets/Planets.js';
import Species from '../Species/Species.js';
import Starships from '../Starships/Starships.js';
import Vehicles from '../Vehicles/Vehicles.js';
import Films from '../Films/Films.js';
import HomeApp from '../HomeApp/HomeApp.js';

import { BrowserRouter, Route } from 'react-router-dom';

class Routes extends React.Component {

    render() {

        return (
            <BrowserRouter>

                <Route exact path='/' component={HomeApp} />
                <Route exact path='/People' component={People} />
                <Route exact path='/Planets' component={Planets} />
                <Route exact path='/Species' component={Species} />
                <Route exact path='/Starships' component={Starships} />
                <Route exact path='/Vehicles' component={Vehicles} />
                <Route exact path='/Films' component={Films} />

            </BrowserRouter>
        )
    }
}

export default Routes;
