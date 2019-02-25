
// Kitsu API: https://kitsu.io/api/edge
import axios from 'axios';

export function getTrendingAnime(){
    const URL = `https://kitsu.io/api/edge/trending/anime`;

    return axios.get(URL);
    
};

//TODO: refactor this to accept two parameters: a filter type (text, genre, etc.) and a search term
export const searchAnime = searchTerm => {
    const URL = `https://kitsu.io/api/edge/anime/?filter[text]=${searchTerm}`;
    

    return axios.get(URL, {
        headers: {
            'Content-Type': `application/vnd.api+json`
        }
    });
}