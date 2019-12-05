import React, { Component } from 'react';

import Tweets from './Tweets/Tweets';
import Find from './Find/Find';

import './Buscador.css';

class Home extends Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            tweets: []
        }

    }
    

    onTweetChange = (tweetsFound) => {
        
        this.setState({
           tweetsFound: tweetsFound

        });
    }


    render() {
        return (
                    <div className="buscador-wrapper border m-auto">
                        <Find 
                            onTweetChange={this.onTweetChange}
                        />
                        <Tweets tweetsFound={this.state.tweetsFound} />                    
                    </div>
        );
    }
}

export default Home;