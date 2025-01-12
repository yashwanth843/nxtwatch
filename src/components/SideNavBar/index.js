import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import VideoContext from '../../Context/VideoContext'

import {
  SideBarContainer,
  UnorderList,
  List,
  Contact,
  ContactText,
  ImageLogoContainer,
  Facebook,
  Twitter,
  LinkedIn,
  Desc,
  NavLinks,
  MobileContainer,
  Para,
} from './styledComponent'

const SideNavBar = () => (
  <VideoContext.Consumer>
    {value => {
      const {changeTab, activeTab, isTheme, mobile} = value

      const onClickButton = path => {
        changeTab(path)
      }

      const homeBgColor = activeTab === '/'
      const trendingBgColor = activeTab === '/trending'
      const gamingBgColor = activeTab === '/gaming'
      const savedBgColor = activeTab === '/saved-videos'
      const sideNavBg = isTheme ? '#181818' : '#ffffff'
      const textColor = isTheme ? '#ffffff' : '#181818'

      return (
        <>
          <SideBarContainer bgColor={sideNavBg}>
            <UnorderList>
              <NavLinks to="/">
                <List
                  bgColor={homeBgColor ? '#d7dfe9' : ''}
                  color={homeBgColor ? '#ff0000' : '#424242'}
                  onClick={() => onClickButton('/')}
                >
                  <MdHome size="25" />
                  <Para color={textColor}>Home</Para>
                </List>
              </NavLinks>
              <NavLinks to="/trending">
                <List
                  bgColor={trendingBgColor ? '#d7dfe9' : ''}
                  color={trendingBgColor ? '#ff0000' : '#424242'}
                  onClick={() => onClickButton('/trending')}
                >
                  <FaFire size="25" />
                  <Para color={textColor}>Trending</Para>
                </List>
              </NavLinks>
              <NavLinks to="/gaming">
                <List
                  bgColor={gamingBgColor ? '#d7dfe9' : ''}
                  color={gamingBgColor ? '#ff0000' : '#424242'}
                  onClick={() => onClickButton('/gaming')}
                >
                  <SiYoutubegaming size="20" />
                  <Para color={textColor}>Gaming</Para>
                </List>
              </NavLinks>
              <NavLinks to="/saved-videos">
                <List
                  bgColor={savedBgColor ? '#d7dfe9' : ''}
                  color={savedBgColor ? '#ff0000' : '#424242'}
                  onClick={() => onClickButton('/saved-videos')}
                >
                  <MdPlaylistAdd size="25" />
                  <Para color={textColor}>Saved videos</Para>
                </List>
              </NavLinks>
            </UnorderList>
            <Contact>
              <ContactText color={textColor}>CONTACT US</ContactText>
              <ImageLogoContainer>
                <Facebook
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Twitter
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <LinkedIn
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ImageLogoContainer>
              <Desc color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </Desc>
            </Contact>
          </SideBarContainer>
          {mobile && (
            <MobileContainer bgColor={sideNavBg}>
              <UnorderList>
                <NavLinks to="/">
                  <List
                    bgColor={homeBgColor ? '#d7dfe9' : ''}
                    color={homeBgColor ? '#ff0000' : '#424242'}
                  >
                    <MdHome size="25" />
                    Home
                  </List>
                </NavLinks>
                <NavLinks to="/trending">
                  <List
                    bgColor={trendingBgColor ? '#d7dfe9' : ''}
                    color={trendingBgColor ? '#ff0000' : '#424242'}
                  >
                    <FaFire size="25" />
                    Trending
                  </List>
                </NavLinks>
                <NavLinks to="/gaming">
                  <List
                    bgColor={gamingBgColor ? '#d7dfe9' : ''}
                    color={gamingBgColor ? '#ff0000' : '#424242'}
                  >
                    <SiYoutubegaming size="20" />
                    Gaming
                  </List>
                </NavLinks>
                <NavLinks to="/saved-videos">
                  <List
                    bgColor={savedBgColor ? '#d7dfe9' : ''}
                    color={savedBgColor ? '#ff0000' : '#424242'}
                  >
                    <MdPlaylistAdd size="25" />
                    Saved videos
                  </List>
                </NavLinks>
              </UnorderList>
            </MobileContainer>
          )}
        </>
      )
    }}
  </VideoContext.Consumer>
)

export default SideNavBar
