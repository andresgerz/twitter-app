import React from 'react'
import Link from 'next/link'


const NavbarWeb = () => (
  <nav>
    <h1>Twitter app</h1>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/search">
          <a>Search</a>
        </Link>
      </li>
      <li>
        <Link href="/historial">
          <a>Historial</a>
        </Link>
      </li>
    </ul>
    
    
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
        justify-content: center;
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
  </nav>
)

export default NavbarWeb;
