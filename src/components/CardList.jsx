import React, {Component} from 'react';
import Card from '../components/Card';

//TODO: Convert to functional class
export default class CardList extends Component {

    render(){
        return (
            <div className="row">
                <div className="col-sm-6">
                    {
                        this.props.searchResults.map(result => {
                            return <Card key={result.id} anime={result} />
                        })
                    }
                </div>
            </div>
        );
    }

}