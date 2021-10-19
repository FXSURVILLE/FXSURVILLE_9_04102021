import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Header from './Header'
import Aside from './Aside'
import Content from '../pages/Content'
import '../styles/app.css'


class App extends React.Component{
  render (){
    return (
      <div className='sportSee'>
      <BrowserRouter>
        <Header />
        <Aside />
        <Content />
      </BrowserRouter>
      </div>
    )
  }
}
export default App;