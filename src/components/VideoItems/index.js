import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import VideoPlayer from '../VideoPlayer'
import VideoContext from '../../Context/VideoContext'
import {
  VideoItemsMainContainer,
  VideoUnOrder,
  Loading5,
  SearchNotFound4,
  NotFoundImg4,
  NotFoundHeading4,
  NotFoundPara4,
  NotFoundRetryButton4,
} from './styledComponent'

const apiStatusContant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItems extends Component {
  state = {
    videosData: {},
    apiStatus: apiStatusContant.initial,
    isLiked: false,
    isDisLike: false,
  }

  componentDidMount() {
    this.getVideoData()
  }

  onClickedButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLike: false,
    }))
  }

  onClickedDisLikeButton = () => {
    this.setState(prevState => ({
      isDisLike: !prevState.isDisLike,
      isLiked: false,
    }))
  }

  getVideoData = async () => {
    this.setState({apiStatus: apiStatusContant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = {
        id: data.video_details.id,
        channel: data.video_details.channel,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        apiStatus: apiStatusContant.success,
        videosData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusContant.failure})
    }
  }

  onClickRetry4 = () => {
    this.getVideoData()
  }

  renderSuccessVideo = () => {
    const {videosData, isLiked, isDisLike} = this.state
    return (
      <VideoUnOrder>
        <VideoPlayer
          videoDetails={videosData}
          likeButton={this.onClickedButton}
          isDisLikeButton={this.onClickedDisLikeButton}
          isLiked={isLiked}
          isDisLike={isDisLike}
          key={videosData.id}
        />
      </VideoUnOrder>
    )
  }

  renderVideoLoader = () => (
    <Loading5 data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </Loading5>
  )

  renderVideoFailure = () => (
    <SearchNotFound4>
      <NotFoundImg4
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <NotFoundHeading4>Oops! Something Went Wrong</NotFoundHeading4>
      <NotFoundPara4>
        We are having some trouble to complete your request.
      </NotFoundPara4>
      <NotFoundPara4>Please try again</NotFoundPara4>
      <NotFoundRetryButton4 type="button" onClick={this.onClickRetry4}>
        Retry
      </NotFoundRetryButton4>
    </SearchNotFound4>
  )

  renderResultsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusContant.success:
        return this.renderSuccessVideo()
      case apiStatusContant.inProgress:
        return this.renderVideoLoader()
      case apiStatusContant.failure:
        return this.renderVideoFailure()
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
          const videoTheme = isTheme ? '#0f0f0f' : ' #f9f9f9'
          return (
            <>
              <Header />
              <SideNavBar />
              <VideoItemsMainContainer bgColor={videoTheme}>
                {this.renderResultsView()}
              </VideoItemsMainContainer>
            </>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default VideoItems
