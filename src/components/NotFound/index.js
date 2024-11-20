import VideoContext from '../../Context/VideoContext'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundImg,
  NotFoundPara,
} from './styledComponent'

const NotFound = () => (
  <VideoContext.Consumer>
    {value => {
      const {isTheme} = value
      const notFound = isTheme ? '#181818' : '#f9f9f9'
      const image = isTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <SideNavBar />
          <NotFoundContainer bgColor={notFound}>
            <NotFoundImg src={image} alt="not found" />
            <NotFoundHeading>Page Not Found</NotFoundHeading>
            <NotFoundPara>
              we are sorry, the page you requested could not be found.
            </NotFoundPara>
          </NotFoundContainer>
        </>
      )
    }}
  </VideoContext.Consumer>
)

export default NotFound
