import {formatDistanceToNow} from 'date-fns'
import VideoContext from '../../Context/VideoContext'

import {
  SingleVideo,
  VideoContainer,
  VideoImage,
  Channel,
  Published,
  Title,
  ViewCount,
  Profile,
  ProfileContainer,
  PublishedContainer,
  HomeLink,
} from './styledComponent'

const HomeVideos = props => {
  const {homeVideosDetails} = props
  const {
    id,
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = homeVideosDetails
  const publish = formatDistanceToNow(new Date(publishedAt))
  return (
    <VideoContext.Consumer>
      {value => {
        const {isTheme} = value
        const textColor = isTheme ? '#ffffff' : '#0f0f0f'
        return (
          <VideoContainer>
            <HomeLink to={`/videos/${id}`}>
              <SingleVideo>
                <VideoImage src={thumbnailUrl} alt="video thumbnail" />
                <ProfileContainer>
                  <Profile src={channel.profile_image_url} alt="channel logo" />
                  <Title color={textColor}>{title}</Title>
                </ProfileContainer>
                <Channel color={textColor}>{channel.name}</Channel>
                <PublishedContainer>
                  <ViewCount>{viewCount}</ViewCount>
                  <Published>{publish}</Published>
                </PublishedContainer>
              </SingleVideo>
            </HomeLink>
          </VideoContainer>
        )
      }}
    </VideoContext.Consumer>
  )
}

export default HomeVideos
