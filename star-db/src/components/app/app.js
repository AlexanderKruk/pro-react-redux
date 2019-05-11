import React, { Component } from 'react';

import Header from '../header';
// import RandomPlanet from '../random-planet';
// import ErrorButton from '../error-button';
// import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import ItemDetails from '../item-details';
import Row from '../row';


import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({hasError: true});
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage
            } = this.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage} />
    );

    const starshipDetails = (
      <ItemDetails 
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage} />
    );

    return (
      <ErrorBoundry>
        <div>
          <Header />
          <Row
            left={personDetails}
            right={starshipDetails} />
          {/* <RandomPlanet /> */}
          <div className="row mb2 button-row">
            {/* <ErrorButton /> */}
          </div>
          {/* <PeoplePage /> */}
        </div>
      </ErrorBoundry>
    );
  };
}