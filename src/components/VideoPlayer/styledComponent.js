import styled from 'styled-components'

export const VideoList = styled.li`
  list-style: none;
`
export const VideoPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`
export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
`
export const ViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ViewText = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 12px;
`
export const SocialButtonsContainer = styled.div`
  display: flex;
`
export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.bgColor};
`
export const DislikeButton = styled.button`
  display: flex;
  align-items: center;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.bgColor};
`
export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const Profile = styled.img`
  width: 30px;
  height: 30px;
`
export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
`
export const ProfileName = styled.p`
  margin-bottom: 0;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
`
export const ProfileSub = styled.p`
  margin-top: 4px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #7e858e;
`
export const Hr = styled.hr`
  width: 100%;
`
export const Description = styled.p`
  width: 600px;
  color: ${props => props.color};
`
export const Published = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 12px;
  margin-left: 8px;
`
export const PublishedContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Span = styled.span`
  color: ${props => props.color};
`
