import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedItem: 11
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  };

  render () {
    const itemList = (
    <ItemList 
      onItemSelected={this.onItemSelected}
      getData = {this.swapiService.getAllPeople}>

      {(i) => 
        (`${i.name} (${i.birthYear})`
      )}

    </ItemList>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    );

    return (
        <Row left={itemList} right={itemDetails} />
    );
  }
}