import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import TrendingItems from '../TrendingItems'
import VideoContext from '../../Context/VideoContext'
import {
  TrendingContainer,
  TrendingheadingContainer,
  TrendingHeading,
  LogoContainer,
  TrendingApiContainer,
  TrendingUnorderList,
  Loading1,
  SearchNotFound1,
  NotFoundImg1,
  NotFoundHeading1,
  NotFoundPara1,
  NotFoundRetryButton1,
} from './styledComponent'

const apiStatusContant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusContant.initial, trendingData: []}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiStatusContant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedTrendingData = data.videos.map(eachItems => ({
        id: eachItems.id,
        channel: eachItems.channel,
        publishedAt: eachItems.published_at,
        thumbnailUrl: eachItems.thumbnail_url,
        title: eachItems.title,
        viewCount: eachItems.view_count,
      }))
      this.setState({
        trendingData: updatedTrendingData,
        apiStatus: apiStatusContant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusContant.failure})
    }
  }

  renderTrendingSuccess = () => {
    const {trendingData} = this.state
    return (
      <TrendingUnorderList>
        {trendingData.map(eachItem => (
          <TrendingItems trendingDetails={eachItem} key={eachItem.id} />
        ))}
      </TrendingUnorderList>
    )
  }

  renderTrendingLoadingView = () => (
    <Loading1 data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </Loading1>
  )

  renderTrendingFailureView = () => (
    <SearchNotFound1>
      <NotFoundImg1
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <NotFoundHeading1>Oops! Something Went Wrong</NotFoundHeading1>
      <NotFoundPara1>
        We are having some trouble to complete your request.
      </NotFoundPara1>
      <NotFoundPara1>Please try again</NotFoundPara1>
      <NotFoundRetryButton1 type="button" onClick={this.onClickRetry1}>
        Retry
      </NotFoundRetryButton1>
    </SearchNotFound1>
  )

  renderTrendingResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusContant.success:
        return this.renderTrendingSuccess()
      case apiStatusContant.inProgress:
        return this.renderTrendingLoadingView()
      case apiStatusContant.failure:
        return this.renderTrendingFailureView()
      default:
        return null
    }
  }

  onClickRetry1 = () => {
    this.getTrendingData()
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
          const trending = isTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <>
              <Header />
              <SideNavBar />
              <TrendingContainer bgColor={trending} data-testid="trending">
                <TrendingheadingContainer>
                  <LogoContainer>
                    <FaFire size="30" />
                  </LogoContainer>
                  <TrendingHeading>Trending</TrendingHeading>
                </TrendingheadingContainer>
                <TrendingApiContainer>
                  {this.renderTrendingResult()}
                </TrendingApiContainer>
              </TrendingContainer>
            </>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Trending
