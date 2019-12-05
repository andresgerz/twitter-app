import React, { Component } from 'react';
import axios from 'axios';

import './Historial.css';

class Historial extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        }
    }


    componentDidMount() {
        this.getTweets();
    }


    async getTweets() {
        const res = await axios.get("http://localhost:4000/tweets") 

        let searchTweet = [];

        for(let i = 0; i < res.data.length; i++) {
            
            searchTweet.push(res.data[i].date_time + " | " + res.data[i].tweet); 
        };

        this.setState({
            tweets: searchTweet   
        })
    }


    render() {
        return (
                    <div>
                        <ul className="w-50 m-auto list-group">
                            {                                    
                                this.state.tweets.map((e,id) =>
                                
                                <li className="list-group-item list-group-item-info border border-light text-center" key={id}>      
                                   {e}                             
                                </li>                                    
                            )}
                        </ul>
                    </div>                
        );
    }
}

export default Historial;