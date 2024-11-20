import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import GameItems from '../GameItems'
import VideoContext from '../../Context/VideoContext'
import {
  GamingContainer,
  GamingHeaderContainer,
  GameLogoContainer,
  GameHeading,
  GamingApiContainer,
  GameUnOrderList,
  Loading2,
  SearchNotFound2,
  NotFoundImg2,
  NotFoundHeading2,
  NotFoundPara2,
  NotFoundRetryButton2,
} from './styledComponent'

const apiStatusContant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gameData: [], apiStatus: apiStatusContant.initial}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiStatusContant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const uri = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(uri, options)
    const data = await response.json()
    if (response.ok) {
      const updatedGameData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        apiStatus: apiStatusContant.success,
        gameData: updatedGameData,
      })
    } else {
      this.setState({apiStatus: apiStatusContant.failure})
    }
  }

  onClickRetry2 = () => {
    this.getGamingData()
  }

  renderSuccessGame = () => {
    const {gameData} = this.state
    return (
      <GameUnOrderList>
        {gameData.map(eachItem => (
          <GameItems gameDetails={eachItem} key={eachItem.id} />
        ))}
      </GameUnOrderList>
    )
  }

  renderGameLoading = () => (
    <Loading2 data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </Loading2>
  )

  renderGameFailure = () => (
    <SearchNotFound2>
      <NotFoundImg2
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <NotFoundHeading2>Oops! Something Went Wrong</NotFoundHeading2>
      <NotFoundPara2>
        We are having some trouble to complete your request.
      </NotFoundPara2>
      <NotFoundPara2>Please try again</NotFoundPara2>
      <NotFoundRetryButton2 type="button" onClick={this.onClickRetry2}>
        Retry
      </NotFoundRetryButton2>
    </SearchNotFound2>
  )

  renderGameResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusContant.success:
        return this.renderSuccessGame()
      case apiStatusContant.inProgress:
        return this.renderGameLoading()
      case apiStatusContant.failure:
        return this.renderGameFailure()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <VideoContext.Consumer>
        {value => {
          const {isTheme} = value
          const gaming = isTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <>
              <Header />
              <SideNavBar />
              <GamingContainer bgColor={gaming} data-testid="gaming">
                <GamingHeaderContainer>
                  <GameLogoContainer>
                    <SiYoutubegaming size="25" />
                  </GameLogoContainer>
                  <GameHeading>Gaming</GameHeading>
                </GamingHeaderContainer>
                <GamingApiContainer>
                  {this.renderGameResult()}
                </GamingApiContainer>
              </GamingContainer>
            </>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Gaming
