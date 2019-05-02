import React, { Component } from 'react';
import styles from '../css/App.css';
import SearchBar from './SearchBar';
import {searchAnime} from '../clients/ApiClient';
import CardList from './CardList';

class App extends Component {
constructor(props){
  super(props);

  this.state = {searchTerm: '', searchResults: []};
  this.storeSearchTerm = this.storeSearchTerm.bind(this);
}

storeSearchTerm = term => {
  let resList = [];
  searchAnime(term)
  .then(response => {
    resList = response.data.data;
    this.setState({searchTerm: term, searchResults: resList});
  })
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
