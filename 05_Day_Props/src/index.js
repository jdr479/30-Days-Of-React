import React from 'react';
import ReactDOM from 'react-dom/client';
import frontend_technologies from './images/frontend_technologies.png'
import hexaColor from './hexaColor.js'

const getUserInfo = (firstName, lastName, country) =>
{
  return `${firstName} ${lastName}. Lives in ${country}`
}

getUserInfo('Johnathan', 'Ray', 'United States')

const User = (props) =>
{
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}
<User firstName='Johnathan' lastName='Ray' country='United States' />

const headerStyles = 
{
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

const rootElement = document.getElementById('root')

const showDate = (time) =>
{
  const months = 
  [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return `${month} ${date} ${year}`
}

// Header component
const Header = (props) =>
(
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>{props.data.welcome}</h1>
      <h2>{props.data.title}</h2>
      <h3>{props.data.subtitle}</h3>
      <p>
        {props.data.author.firstName} {props.data.author.lastName}
      </p>
      <small>{showDate(props.data.date)}</small>
    </div>
  </header>
)

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
const Main = (props) =>
(
  <main style={mainStyles}>
    <div className='main-wrapper'>
      <p>{props.data.title}</p>
      <ul>{props.data.techList}</ul>
      <img src={props.data.imgSrc} style={imgStyle} alt={props.data.alt} />
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

const firstName = 'First name'
const lastName = 'Last name'
const email = 'Email'

// Subscribe component
const Subscribe = (props) =>
(
  <div style={subscribeStyles} className='subscribe-wrapper'>
    <h1>SUBSCRIBE</h1>
    <p>'Sign up with your email address to receive news and updates.'</p>
    <div className='inputs'>
      <input type={props.data.inputTypes[0]} placeholder={props.data.placeholders[0]}/>
      <input type={props.data.inputTypes[1]} placeholder={props.data.placeholders[1]}/>
      <input type={props.data.inputTypes[2]} placeholder={props.data.placeholders[2]}/>
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

const Button = (props) => <button style={buttonStyles} onClick={props.onClick}>{props.text}</button>

const HexaColor = (props) => 
{
  return (
  <div style={{backgroundColor: props.color, margin: 'auto', textAlign: 'center'}} className='hexa-color-wrapper'>
    <p>{props.color}</p>
  </div>
  )
}

const userCardStyle = 
{
  background: 'rgb(255, 255, 255)',
  border: 'none',
  borderRadius: 5,
}
const UserCard = () =>
(
  <div style={userCardStyle} className='user-card-wrapper'>
    <img></img>
    <h3>Johnathan Ray</h3>
    <p>Learning React, United States</p>
    <h3>Skills</h3>
    <div className='skills'>

    </div>
    <p>Joined November 17, 2024</p>
  </div>
)

const Status = (props) =>
{
  let status = props.status ? 'Old enough to drive' : 'Too young to drive'
  return <p>{status}</p>
}

const App = () =>
{
  const headerData = 
  {
    welcome:'Welcome to 30 Days of React',
    title:'Getting Started React',
    subtitle:'JavaScript Library',
    author:
    {
      firstName:'Johnathan',
      lastName:'Ray'
    },
    date:new Date()
  }

  const mainData =
  {
    title:'Prerequisite to get started React.js',
    techList:<TechList />,
    imgSrc:frontend_technologies,
    alt:'frontend techs'
  }

  const subscribeData =
  {
    inputTypes:['text', 'text', 'text'],
    placeholders:['First Name', 'Last Name', 'Email']
  }

  const birthYear = 2000
  const currentYear = 2024
  const age = currentYear - birthYear

  let status = age >= 16
  return  (
  <div className='app'>
    <Header data={headerData}/>
    <Button text='Press Me!' onClick={() => alert('sup!! :)')}/>
    <Button text='Get Time' onClick={() => alert(new Date())}/>
    <Main data={mainData}/>
    <Status status={status}/>
    <Subscribe data={subscribeData}/>
    <HexaColor color={hexaColor()}/>
    <HexaColor color={hexaColor()}/>
    <HexaColor color={hexaColor()}/>
    <UserCard />
    <Footer />
  </div>
  )
}

const welcome = 'Welcome to 30 Days of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = 
{
  firstName: 'Johnathan',
  lastName: 'Ray'
}
const date = 'November 18, 2024'

// Note: ReactDOM.render is legacy code. Use this from now on
const root = ReactDOM.createRoot(rootElement)
root.render(<App />) // or [header, main, footer]