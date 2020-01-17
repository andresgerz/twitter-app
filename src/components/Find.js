import { Form, Button } from 'react-bootstrap'
import css from './Find.css'


class Find extends React.Component {
    
    constructor(props) {
        super(props)

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
            
            <div className={css.navbarWrapper}>
                    
                <Form 
                    onSubmit={e => this.handleSubmit(e)} 
                    >
                <Form.Group controlId="formBasicEmail" className="findText float-right mt-3 mr-3">
                    <Form.Control 
                        type="text" 
                        onChange={this.onChange}
                        name="tweet"
                        value={this.state.tweet}
                        />
                </Form.Group>
                <Button variant="primary" type="submit" className="findButton float-left mt-3 ml-3 mr-1">
                    
                </Button>
                </Form>             
            </div>                 
        )
    }
 
}

export default Find;