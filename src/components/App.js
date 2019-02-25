import React, { Component } from 'react';
import styles from '../css/App.css';
import SearchBar from './SearchBar';
import {searchAnime} from '../clients/ApiClient';

class App extends Component {
constructor(props){
  super(props);

  this.state = {searchTerm: '', searchResults: []};
  this.storeSearchTerm = this.storeSearchTerm.bind(this);
}

storeSearchTerm = term => {
  //TODO: parse out the list to get the data
  const list = searchAnime(term);
  this.setState({searchTerm: term, searchResults: list});
}

  render() {
    return (
      <div className={styles.App}>
        <SearchBar saveTerm={this.storeSearchTerm}/>
      </div>
    );
  }
}

export default App;
