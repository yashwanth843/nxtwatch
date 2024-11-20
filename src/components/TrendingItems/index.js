import {formatDistanceToNow} from 'date-fns'
import VideoContext from '../../Context/VideoContext'
import {
  TrendingItemList,
  TrendingImage,
  TrendingTextContainer,
  TrendingTitle,
  TrendingName,
  PublishTextContainer,
  ViewCount,
  Published,
  TrendingMain,
  VideoLink,
} from './styledComponent'

const TrendingItems = props => {
  const {trendingDetails} = props
  const {
    id,
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = trendingDetails
  const publish = formatDistanceToNow(new Date(publishedAt))

  return (
    <VideoContext.Consumer>
      {value => {
        const {isTheme} = value
        const textColor = isTheme ? '#ffffff' : '#0f0f0f'
        return (
          <VideoLink to={`/videos/${id}`}>
            <TrendingItemList>
              <TrendingImage src={thumbnailUrl} alt="video thumbnail" />
              <TrendingMain>
                <TrendingTextContainer>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendingName color={textColor}>{channel.name}</TrendingName>
                </TrendingTextContainer>
                <PublishTextContainer>
                  <ViewCount>{viewCount}</ViewCount>
                  <Published>{publish}</Published>
                </PublishTextContainer>
              </TrendingMain>
            </TrendingItemList>
          </VideoLink>
        )
      }}
    </VideoContext.Consumer>
  )
}

export default TrendingItems
