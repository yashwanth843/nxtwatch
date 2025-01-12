import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {MdClose} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import HomeVideos from '../HomeVideos'
import VideoContext from '../../Context/VideoContext'

import {
  HomeContainer,
  MembershipContainer,
  MembershipText,
  NxtWatch,
  NxtButton,
  NxtWatchText,
  CloseButton,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  VideoContainer,
  VideosList,
  SearchNotFound,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
  NotFoundRetryButton,
  Loading,
  EmptyVideosContainer,
  EmptyVideosImg,
  EmptyHeading,
  Emptypara,
  EmptyButton,
} from './styledComponent'

const apiStatusContaint = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusContaint.initial,
    display: true,
    apiData: [],
    searchInput: '',
    videoCount: 0,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusContaint.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const uri = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(uri, options)
    console.log(response)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        channel: eachVideo.channel,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiData: updatedData,
        apiStatus: apiStatusContaint.success,
        videoCount: updatedData.length,
      })
    } else {
      this.setState({apiStatus: apiStatusContaint.failure})
    }
  }

  onClickClose = () => {
    this.setState({display: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.setState({searchInput: ''})
    this.getData()
  }

  onClickRetry = () => {
    this.getData()
  }

  renderSuccussView = () => {
    const {apiData, videoCount} = this.state
    const isVideo = videoCount === 0
    return isVideo ? (
      <EmptyVideosContainer>
        <EmptyVideosImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <EmptyHeading>No Search results found</EmptyHeading>
        <Emptypara>Try different key words or remove search filter.</Emptypara>
        <EmptyButton type="button" onClick={this.onClickRetry}>
          Retry
        </EmptyButton>
      </EmptyVideosContainer>
    ) : (
      <VideosList>
        {apiData.map(eachVideo => (
          <HomeVideos homeVideosDetails={eachVideo} key={eachVideo.id} />
        ))}
      </VideosList>
    )
  }

  renderFailureView = () => (
    <SearchNotFound>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <NotFoundHeading>Oops! Something Went Wrong</NotFoundHeading>
      <NotFoundPara>
        We are having some trouble to complete your request.
      </NotFoundPara>
      <NotFoundPara>Please try again</NotFoundPara>
      <NotFoundRetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </NotFoundRetryButton>
    </SearchNotFound>
  )

  renderLoadingView = () => (
    <Loading data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </Loading>
  )

  renderResultView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusContaint.success:
        return this.renderSuccussView()
      case apiStatusContaint.inProgress:
        return this.renderLoadingView()
      case apiStatusContaint.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    const {display, searchInput} = this.state
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <VideoContext.Consumer>
        {value => {
          const {isTheme} = value
          const homeTheme = isTheme ? '#181818' : '#f9f9f9'
          return (
            <>
              <Header />
              <SideNavBar />
              <HomeContainer data-testid="home" bgColor={homeTheme}>
                {display && (
                  <MembershipContainer data-testid="banner">
                    <MembershipText>
                      <NxtWatch
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <NxtWatchText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </NxtWatchText>
                      <NxtButton>GET IT NOW</NxtButton>
                    </MembershipText>
                    <CloseButton
                      type="button"
                      onClick={this.onClickClose}
                      data-testid="close"
                    >
                      <MdClose size="25" />
                    </CloseButton>
                  </MembershipContainer>
                )}

                <SearchInputContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                  />
                  <SearchButton
                    type="button"
                    onClick={this.onClickSearchButton}
                    data-testid="searchButton"
                  >
                    <FaSearch size="15" />
                  </SearchButton>
                </SearchInputContainer>
                <VideoContainer>{this.renderResultView()}</VideoContainer>
              </HomeContainer>
            </>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Home
