import {MdPlaylistAdd} from 'react-icons/md'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import SavedList from '../SavedList'
import VideoContext from '../../Context/VideoContext'
import {
  SavedVideosContainer,
  SavedVideoHeaderContainer,
  LogoContainer,
  SavedHeading,
  SavedOrderList,
  NoVideosContainer,
  NoVideoImage,
  NoVideosHeading,
  NoVideosPara,
} from './styledComponent'

const SavedVideos = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <VideoContext.Consumer>
      {value => {
        const {isTheme, savedVideos} = value
        const saved = isTheme ? '#0f0f0f' : '#f9f9f9'
        const notext = isTheme ? '#ffffff' : ' #212121'

        return (
          <>
            <Header />
            <SideNavBar />
            <SavedVideosContainer bgColor={saved} data-testid="savedVideos">
              <SavedVideoHeaderContainer>
                <LogoContainer>
                  <MdPlaylistAdd size="25" />
                </LogoContainer>
                <SavedHeading>Saved Videos</SavedHeading>
              </SavedVideoHeaderContainer>
              {savedVideos.length > 0 ? (
                <SavedOrderList>
                  {savedVideos.map(eachSaved => (
                    <SavedList savedDetails={eachSaved} key={eachSaved.id} />
                  ))}
                </SavedOrderList>
              ) : (
                <NoVideosContainer>
                  <NoVideoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                    alt="no saved videos"
                  />
                  <NoVideosHeading color={notext}>
                    No saved videos found
                  </NoVideosHeading>
                  <NoVideosPara color={notext}>
                    You can save your videos while watching them
                  </NoVideosPara>
                </NoVideosContainer>
              )}
            </SavedVideosContainer>
          </>
        )
      }}
    </VideoContext.Consumer>
  )
}
export default SavedVideos
