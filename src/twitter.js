// Twitter API

require('dotenv').config();

let Twitter = require('twitter');


const findTweet = (text) => {

    this.text1 = text; 

    let client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: '',
    }); 

    let params = { screen_name: text };
    let namesArray = [];
    let tweetsArray = [];
    let imgArray = [];
    let allData = {};

    return client.get('statuses/user_timeline', params)
        .then(function (tweets) {

            for (const prop in tweets) {                
                tweetsArray.push(tweets[prop].text); 
                namesArray.push(tweets[prop].user.name);
                imgArray.push(tweets[prop].user.profile_image_url_https)   
            }  
            allData = { namesArray, tweetsArray, imgArray };
            
            return allData; 
           
            })
        .catch(function (error) {
            
            console.log(error[0].message);
        });
    }


module.exports = {
    findTweet    
}