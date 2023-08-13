import React from 'react';
import ReactDOM from 'react-dom/client';
import frontend_technologies from './images/frontend_technologies.png'

const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

const welcome = 'Welcome to 30 Days of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Johnathan',
  lastName: 'Ray'
}
const date = 'August 11, 2023'

const rootElement = document.getElementById('root')
const header = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>By {author.firstName} {author.lastName}</p>
      <p>Date: {date}</p>
    </div>
  </header>
)

const mainStyles = {
  backgroundColor: '#F3F0F5',
}

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const imgStyle = {
  width: 1503,
  height: 324,
  objectFit: 'contain',
}

const main = (
  <main style={mainStyles}>
    <div className='main-wrapper'>
      <p>Prerequisite to get started React.js</p>
      <ul>{techsFormatted}</ul>
      <img src={frontend_technologies} style={imgStyle}alt='frontend techs' />
    </div>
  </main>
)

const footerStyles = {
  backgroundColor: '#61DBFB',
}

const copyright = 'Copyright 2023'

const footer = (
  <footer style={footerStyles}>
    <div className='footer-wrapper'>
      <p>{copyright}</p>
    </div>
  </footer>
)

const subscribeStyles = {
  backgroundColor: '#8BE2F7',
  borderRadius: 25,
  width: 1000,
  margin: 'auto',
  textAlign: 'center',
}

const sub = 'SUBSCRIBE'
const signUp = 'Sign up with your email address to receive news and updates.'
const firstName = 'First name'
const lastName = 'Last name'
const email = 'Email'

const subscribe = (
  <div style={subscribeStyles} className='subscribe-wrapper'>
    <h1>{sub}</h1>
    <p>{signUp}</p>
    <div className='inputs'>
      <input type='text' placeholder={firstName}/>
      <input type='text' placeholder={lastName}/>
      <input type='text' placeholder={email}/>
    </div>
    <button>Subscribe</button>
  </div>
)

const app = (
  <div className='app'>
    {header}
    {main}
    {subscribe}
    {footer}
  </div>
)

// Note: ReactDOM.render is legacy code. Use this from now on
const root = ReactDOM.createRoot(rootElement)
root.render(app) // or [header, main, footer]