import React from 'react'

const VideoContext = React.createContext({
  isTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
})

export default VideoContext
