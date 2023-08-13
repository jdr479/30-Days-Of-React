import React from 'react';
import ReactDOM from 'react-dom/client';
import frontend_technologies from './images/frontend_technologies.png'
import hexaColor from './hexaColor.js'

const headerStyles = 
{
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

const welcome = 'Welcome to 30 Days of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = 
{
  firstName: 'Johnathan',
  lastName: 'Ray'
}
const date = 'August 11, 2023'

const rootElement = document.getElementById('root')

// Header component
const header = 
(
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

const Header = () =>
{
  return header
}

const mainStyles = 
{
  backgroundColor: '#F3F0F5',
}

// TechList compoenent
const TechList = () =>
{
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li>{tech}</li>)
  return techsFormatted
}

const imgStyle = {
  width: 1503,
  height: 324,
  objectFit: 'contain',
}

// Main component
const Main = () =>
(
  <main style={mainStyles}>
    <div className='main-wrapper'>
      <p>Prerequisite to get started React.js</p>
      <ul><TechList /></ul>
      <img src={frontend_technologies} style={imgStyle}alt='frontend techs' />
    </div>
  </main>
)

const footerStyles = 
{
  backgroundColor: '#61DBFB',
}

// Footer component
const Footer = () =>
(
  <footer style={footerStyles}>
    <div className='footer-wrapper'>
      <p>Copyright 2023</p>
    </div>
  </footer>
)

const subscribeStyles = 
{
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

// Subscribe component
const Subscribe = () =>
(
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

// Button component
const buttonStyles = 
{
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}
const Button = () => <button style={buttonStyles}> action </button>

const HexaColor = (props) => 
{
  return (
  <div style={{backgroundColor: props.color, margin: 'auto', textAlign: 'center'}} className='hexa-color-wrapper'>
    <p>{props.color}</p>
  </div>
  )
}

const App = () =>
(
  <div className='app'>
    <Header />
    <Button />
    <Main />
    <Subscribe />
    <HexaColor color={hexaColor()}/>
    <HexaColor color={hexaColor()}/>
    <HexaColor color={hexaColor()}/>
    <Footer />
  </div>
)

// Note: ReactDOM.render is legacy code. Use this from now on
const root = ReactDOM.createRoot(rootElement)
root.render(<App />) // or [header, main, footer]