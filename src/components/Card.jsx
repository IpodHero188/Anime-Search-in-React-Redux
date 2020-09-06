import React, {Component} from 'react';

//TODO: What we need: canonicalTitle, posterImage (Small)

export default class Card extends Component {

    render(){
        return(
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={this.props.anime.posterImage.small} alt="poster of the anime" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.anime.canonicalTitle}</h5>
                </div>
            </div>
        );
    }
}
