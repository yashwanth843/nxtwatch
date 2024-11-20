import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player/youtube'
import {formatDistanceToNow} from 'date-fns'
import VideoContext from '../../Context/VideoContext'
import {
  VideoList,
  VideoPlayerContainer,
  VideoTextContainer,
  Heading,
  ViewContainer,
  ViewText,
  SocialButtonsContainer,
  LikeButton,
  DislikeButton,
  SaveButton,
  ProfileContainer,
  Profile,
  ProfileTextContainer,
  ProfileName,
  ProfileSub,
  Description,
  Hr,
  Published,
  PublishedContainer,
} from './styledComponent'

const VideoPlayer = props => {
  const {videoDetails, likeButton, isDisLikeButton, isLiked, isDisLike} = props
  const {
    channel,
    description,
    title,
    videoUrl,
    viewCount,
    publishedAt,
  } = videoDetails
  const publish = formatDistanceToNow(new Date(publishedAt))
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <VideoContext.Consumer>
      {value => {
        const {addVideo, savedVideos, isTheme} = value
        const text1 = isLiked ? '#2563eb' : '#64748b'
        const text2 = isDisLike ? '#2563eb' : '#64748b'
        const textColor = isTheme ? '#ffffff' : '#0f0f0f'
        const onClickLike = () => {
          likeButton()
        }

        const onClickDisLike = () => {
          isDisLikeButton()
        }

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        let isSaved
        const indexs = savedVideos.findIndex(
          eachItem => eachItem.id === videoDetails.id,
        )
        if (indexs === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saved = isSaved ? '#2563eb' : '#64748b'
        const savedText = isSaved ? 'Saved' : 'Save'

        return (
          <>
            <VideoList>
              <VideoPlayerContainer>
                <ReactPlayer url={videoUrl} width="640px" controls="true" />
                <VideoTextContainer>
                  <Heading color={textColor}>{title}</Heading>
                  <ViewContainer>
                    <PublishedContainer>
                      <ViewText>{viewCount} views</ViewText>
                      <Published>{publish}</Published>
                    </PublishedContainer>
                    <SocialButtonsContainer>
                      <LikeButton onClick={onClickLike} bgColor={text1}>
                        <AiOutlineLike size="20" />
                        Like
                      </LikeButton>
                      <DislikeButton onClick={onClickDisLike} bgColor={text2}>
                        <AiOutlineDislike size="20" />
                        Dislike
                      </DislikeButton>
                      <SaveButton onClick={onClickSave} color={saved}>
                        <MdPlaylistAdd size="20" />
                        {savedText}
                      </SaveButton>
                    </SocialButtonsContainer>
                  </ViewContainer>
                  <Hr />
                  <ProfileContainer>
                    <Profile
                      src={channel.profile_image_url}
                      alt="channel logo"
                    />
                    <ProfileTextContainer>
                      <ProfileName color={textColor}>
                        {channel.name}
                      </ProfileName>
                      <ProfileSub>
                        {channel.subscriber_count} subscribers
                      </ProfileSub>
                    </ProfileTextContainer>
                  </ProfileContainer>
                </VideoTextContainer>
                <Description color={textColor}>{description}</Description>
              </VideoPlayerContainer>
            </VideoList>
          </>
        )
      }}
    </VideoContext.Consumer>
  )
}
export default VideoPlayer
