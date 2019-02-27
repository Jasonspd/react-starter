import React from 'react'
import ReactDOM from 'react-dom'
import NewComponent from './components/newComponent'
import ShowDummyApi from './components/showDummyApi'
import ShowGithubApi from './components/showGithubApi'
import App from './app'

const Index = () => {
  return <div>
      {/* Hello React! Welcome: <NewComponent />
      <p>Dummy API: </p>
      <ShowDummyApi />
      <p>Github API:</p>
      <ShowGithubApi /> */}
      {/* <App/> */}
  </div>
}

ReactDOM.render(<Index />, document.getElementById('index'))