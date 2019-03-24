import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''}

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitTerm        = this.submitTerm.bind(this); 
    }

    handleInputChange = event => {
        event.preventDefault();
        this.setState({term: event.target.value});
    }

    submitTerm = () => {
        this.props.saveTerm(this.state.term);
        this.setState({term: ''}); //For clean up. Not sure if necessary
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input id="animeSearch" type="text" className="form-control" placeholder="Anime!!" 
                        aria-label="Default" aria-describedby="inputGroup-sizing-default" 
                        onChange={this.handleInputChange}/>
                <div className="input-group-append">
                    <input type="button" className="btn btn-primary" value="Enter" onClick={this.submitTerm}/>
                </div>
            </div>
        );
    }
}