import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {IoReorderThree, IoClose} from 'react-icons/io5'
import Cookies from 'js-cookie'
import VideoContext from '../../Context/VideoContext'

import {
  NavBarContainer,
  NavBarLogo,
  NavBarButtonsContainer,
  ProfileLogo,
  ThemeLogoButton,
  ProfileButton,
  LogoutButton,
  PopupContainer,
  MessageText,
  CancelButton,
  ConfirmButton,
  MobileButton,
} from './styledComponent'

const Header = props => (
  <VideoContext.Consumer>
    {value => {
      const {isTheme, toggleTheme, mobileFun, mobile} = value

      const onClickTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickMobile = () => {
        mobileFun()
      }

      const lineLogo = mobile ? (
        <IoClose size="25" />
      ) : (
        <IoReorderThree size="25" />
      )
      const navBgColor = isTheme ? '#181818' : '#f9f9f9'
      const logoImg = isTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavBarContainer bgColor={navBgColor}>
          <Link to="/">
            <NavBarLogo src={logoImg} alt="website logo" />
          </Link>
          <NavBarButtonsContainer>
            <ThemeLogoButton
              type="button"
              data-testid="theme"
              onClick={onClickTheme}
              color={isTheme ? '#ffffff' : '#000000'}
            >
              {isTheme ? <BsBrightnessHigh size="25" /> : <BsMoon size="25" />}
            </ThemeLogoButton>
            <MobileButton
              type="button"
              onClick={onClickMobile}
              color={isTheme ? '#ffffff' : '#000000'}
            >
              {lineLogo}
            </MobileButton>
            <ProfileButton>
              <ProfileLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileButton>
            <Popup
              modal
              trigger={<LogoutButton type="button">Logout</LogoutButton>}
            >
              {close => (
                <PopupContainer>
                  <MessageText>Are you sure, you want to logout?</MessageText>
                  <CancelButton type="button" onClick={() => close()}>
                    Cancel
                  </CancelButton>
                  <ConfirmButton type="button" onClick={onClickLogout}>
                    Confirm
                  </ConfirmButton>
                </PopupContainer>
              )}
            </Popup>
          </NavBarButtonsContainer>
        </NavBarContainer>
      )
    }}
  </VideoContext.Consumer>
)
export default withRouter(Header)
