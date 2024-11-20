import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import VideoContext from '../../Context/VideoContext'
import {
  VideoList,
  VideoImage,
  VideoListContainer,
  VideoTitle,
  VideoName,
  VideoView,
  PublishContainer,
  VideoPublish,
} from './styledComponent'
import './index.css'

const SavedList = props => {
  const {savedDetails} = props
  const {
    id,
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
  } = savedDetails
  const {name} = channel
  const publish = formatDistanceToNow(new Date(publishedAt))
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <VideoContext.Consumer>
      {value => {
        const {isTheme} = value
        const textColor = isTheme ? '#ffffff' : '#0f0f0f'
        return (
          <Link to={`/videos/${id}`} className="savedlink">
            <VideoList>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoListContainer>
                <VideoTitle color={textColor}>{title}</VideoTitle>
                <VideoName>{name}</VideoName>
                <PublishContainer>
                  <VideoView>{viewCount} views</VideoView>
                  <VideoPublish>{publish}</VideoPublish>
                </PublishContainer>
              </VideoListContainer>
            </VideoList>
          </Link>
        )
      }}
    </VideoContext.Consumer>
  )
}

export default SavedList
