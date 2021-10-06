import React from 'react'
import { BrowserRouter} from 'react-router-dom'
// import Router from './Router'
import Header from './Header'
// import Aside from './Aside'
import Content from '../pages/Content'
// import Footer from './Footer'
// import Profile from './Profile'


class App extends React.Component{
  render (){
    return (
      <div>
      <BrowserRouter>
        <Header />
        {/* <Aside /> */}
        <Content />
        {/* <Router /> */}
        {/* <Footer /> */}
        {/* <Profile /> */}
      </BrowserRouter>
      </div>
    )
  }
}
export default App;