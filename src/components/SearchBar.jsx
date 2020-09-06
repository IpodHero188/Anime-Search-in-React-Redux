import React, {useState, Fragment} from 'react';
import {TextField, Button} from '@material-ui/core';
import {searchAnime} from '../clients/ApiClient';
import CardList from './CardList';



export default function SearchBar() {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
 
    const onSubmit = (data, e) => {
        e.preventDefault();
        searchAnime(data)
        .then(response => {
            let resList = response.data.data;
            console.log(resList);

            setResults(resList);
          });
    }

    return (
        <Fragment>
        <div className="input-group mb-3">
            <TextField id="outlined-search" 
                label="Search field" 
                type="search" 
                variant="outlined"
                placeholder="Enter Anime Title"
                onChange={e => setTerm(e.target.value)} 
                
            />
            <Button variant="outlined" color="primary" onClick={e => onSubmit(term, e)}>Search</Button>
        </div>
        <div>
            <CardList searchResults={results}/>
        </div>
        </Fragment>
    );
}