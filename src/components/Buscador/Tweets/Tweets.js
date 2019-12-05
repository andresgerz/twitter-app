import React, { Component } from 'react';

import './Tweets.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faRetweet, faStar, faEllipsisH } from '@fortawesome/free-solid-svg-icons'



class History extends Component {

  
    render() {
        
        return ( <div> 
                           {           
                               this.props.tweetsFound && this.props.tweetsFound.tweetsArray.map((e,id) =>
                                 
                                <div className="tweets-wrapper" key={id} border="light" style={{ maxWidth: '40rem' }} >
                                    
                                    <div className="history-card">
                                        <div>                                            
                                            <img className="twitter-image" src={this.props.tweetsFound.imgArray[id]} alt="no" />    
                                        </div>
                                        <div className="twitter-text-wrapper"> 
                                            <div className="text-left">
                                                <div className="twitter-header">
                                                    {this.props.tweetsFound.namesArray[id]}
                                                </div>
                                                {e}                                    
                                            </div>
                                            <div className="">
                                                <FontAwesomeIcon icon={faShare} className="icon" />
                                                <FontAwesomeIcon icon={faRetweet} className="icon" />
                                                <FontAwesomeIcon icon={faStar} className="icon" />
                                                <FontAwesomeIcon icon={faEllipsisH} className="icon" />                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>                   
                            )} 
                    </div>                
        );
    }
}

export default History;