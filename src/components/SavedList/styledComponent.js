import styled from 'styled-components'

export const VideoList = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 15px;
`

export const VideoImage = styled.img`
  width: 300px;
  height: 200px;
`

export const VideoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-left: 10px;
`

export const VideoTitle = styled.p`
  width: 65%;
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.color};
  font-family: 'Roboto';
`

export const VideoName = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  color: #7e858e;
  font-size: 12px;
`

export const VideoView = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: #7e858e;
`
export const PublishContainer = styled.div`
  display: flex;
`
export const VideoPublish = styled.p`
  color: #7e858e;
  font-size: 12px;
  margin-left: 5px;
  font-family: 'Roboto';
`
