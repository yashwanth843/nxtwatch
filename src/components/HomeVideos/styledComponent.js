import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoContainer = styled.div`
  min-heigth: 100vh;
  display: flex;
`
export const SingleVideo = styled.li`
  list-style: none;
`
export const VideoImage = styled.img`
  width: 280px;
  height: 180px;
  margin-bottom: 0;

  @media screen and (max-width: 576px) {
    width: 300px;
    height: 200px;
  }
`
export const Channel = styled.p`
  margin-top: 0;
  margin-left: 35px;
  margin-bottom: 0;
  color: ${props => props.color};
  font-family: 'Roboto';
`
export const Published = styled.p`
  margin-bottom: 0;
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 12px;
`
export const Title = styled.p`
  margin-bottom: 10px;
  color: #212121;
  font-family: 'Roboto';
  width: 100%;
  color: ${props => props.color};
`
export const ViewCount = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  margin-right: 10px;
  font-size: 12px;
`
export const Profile = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

export const ProfileContainer = styled.div`
  margin-top: 0;
  display: flex;
  align-items: center;
  width: 80%;
`
export const PublishedContainer = styled.div`
  display: flex;
  margin-top: 0;
  margin-left: 30px;
`
export const HomeLink = styled(Link)`
  text-decoration: none;
`
