import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import './Find.css';

class Find extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tweet: '',
            tweetsFound: [ ]
        }
    
    }
     

    handleSubmit = async (e) => {
        e.persist(); 
        e.preventDefault();
        
        
        const response = await axios.post('http://localhost:4000/tweets', {
            tweet: this.state.tweet
        })
        
        this.setState({
            tweetsFound: response.data.result
        });


        this.props.onTweetChange(this.state.tweetsFound); 
        this.setState({ 
            tweet: ''
        });
   
    }    


    onChange = e => {

        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }    
 

    render() {
        return (
                <div className="navbar-wrapper">
                    
                    <Form 
                        onSubmit={e => this.handleSubmit(e)} 
                        >
                    <Form.Group controlId="formBasicEmail" className="find-text float-right mt-3 mr-3">
                        <Form.Control 
                            type="text" 
                            onChange={this.onChange}
                            name="tweet"
                            value={this.state.tweet}
                            />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="find-button float-left mt-3 ml-3 mr-1">
                        
                    </Button>
                    </Form>             
                </div>                 
        );
    }
}

export default Find;