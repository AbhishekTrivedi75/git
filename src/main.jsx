import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function Myapp()
{
  return(
    <div><h1>custom app</h1></div>
  )
}

const anotherelement=(
  <a href="https://google.com" target='_blank'><h1>VISIT GOOGLE</h1></a>
)

const anothertext="hello"

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const reactelement=React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },
  "VISIT GOOGLE!!",
  anothertext
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //    <App />
  // </React.StrictMode>,
  //< Myapp/>
  //anotherelement
  reactelement
)
