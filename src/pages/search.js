import React from 'react'
import Layout from '../components/Layout'
import Find from '../components/Find'
import Tweets from '../components/Tweets'


const Search = () => (
  <Layout>
    <h1>Search</h1>
    
    <Find />
    <Tweets />    
    
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: ;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </Layout>
)

export default Search;
