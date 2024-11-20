import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItems from './components/VideoItems'
import VideoContext from './Context/VideoContext'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isTheme: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({isTheme: !prevState.isTheme}))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const selectedVideo = savedVideos.findIndex(
      eachItem => video.id === eachItem.id,
    )

    if (selectedVideo === -1) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    } else {
      savedVideos.splice(selectedVideo, 1)
      this.setState({savedVideos})
    }
  }

  // removeVideo = id => {
  //   const {savedVideos} = this.state
  //   const updatedSavedVideos = savedVideos.filter(
  //     eachItem => eachItem.id !== id,
  //   )
  //   this.setState({savedVideos: updatedSavedVideos})
  // }

  render() {
    const {isTheme, activeTab, isSave, savedVideos} = this.state
    return (
      <VideoContext.Provider
        value={{
          isTheme,
          activeTab,
          isSave,
          savedVideos,
          changeTab: this.changeTab,
          toggleTheme: this.toggleTheme,
          saveButton: this.saveButton,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/videos/:id" component={VideoItems} />
          <Route component={NotFound} />
        </Switch>
      </VideoContext.Provider>
    )
  }
}
export default App
