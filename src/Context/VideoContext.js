import React from 'react'

const VideoContext = React.createContext({
  isTheme: false,
  savedVideos: [],
  activeTab: '/',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
  mobile: false,
  mobileFun: () => {},
})

export default VideoContext
