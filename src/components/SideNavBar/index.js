import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import VideoContext from '../../Context/VideoContext'

import {
  SideBarContainer,
  UnorderList,
  List,
  HomeButton,
  TrendingButton,
  GamingButton,
  SavedButton,
  Contact,
  ContactText,
  ImageLogoContainer,
  Facebook,
  Twitter,
  LinkedIn,
  Desc,
  NavLinks,
} from './styledComponent'

const SideNavBar = () => (
  <VideoContext.Consumer>
    {value => {
      const {changeTab, activeTab, isTheme} = value

      const onClickHome = () => {
        changeTab('Home')
      }

      const onClickTrending = () => {
        changeTab('Trending')
      }

      const onClickGaming = () => {
        changeTab('Gaming')
      }

      const onClickSaved = () => {
        changeTab('Saved')
      }

      const homeBgColor = activeTab === 'Home'
      const trendingBgColor = activeTab === 'Trending'
      const gamingBgColor = activeTab === 'Gaming'
      const savedBgColor = activeTab === 'Saved'
      const sideNavBg = isTheme ? '#181818' : '#ffffff'
      const textColor = isTheme ? '#ffffff' : '#181818'

      return (
        <SideBarContainer bgColor={sideNavBg}>
          <UnorderList>
            <NavLinks to="/">
              <List
                bgColor={homeBgColor ? '#d7dfe9' : ''}
                color={homeBgColor ? '#ff0000' : '#424242'}
              >
                <MdHome size="25" />
                <HomeButton
                  type="button"
                  onClick={onClickHome}
                  color={textColor}
                >
                  Home
                </HomeButton>
              </List>
            </NavLinks>
            <NavLinks to="/trending">
              <List
                bgColor={trendingBgColor ? '#d7dfe9' : ''}
                color={trendingBgColor ? '#ff0000' : '#424242'}
              >
                <FaFire size="25" />
                <TrendingButton
                  type="button"
                  onClick={onClickTrending}
                  color={textColor}
                >
                  Trending
                </TrendingButton>
              </List>
            </NavLinks>
            <NavLinks to="/gaming">
              <List
                bgColor={gamingBgColor ? '#d7dfe9' : ''}
                color={gamingBgColor ? '#ff0000' : '#424242'}
              >
                <SiYoutubegaming size="20" />
                <GamingButton
                  type="button"
                  onClick={onClickGaming}
                  color={textColor}
                >
                  Gaming
                </GamingButton>
              </List>
            </NavLinks>
            <NavLinks to="/saved-videos">
              <List
                bgColor={savedBgColor ? '#d7dfe9' : ''}
                color={savedBgColor ? '#ff0000' : '#424242'}
              >
                <MdPlaylistAdd size="25" />
                <SavedButton
                  type="button"
                  onClick={onClickSaved}
                  color={textColor}
                >
                  Saved videos
                </SavedButton>
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
      )
    }}
  </VideoContext.Consumer>
)

export default SideNavBar
