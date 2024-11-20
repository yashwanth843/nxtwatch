import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const TrendingItemList = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 10px;
  margin-left: 20px;
`

export const TrendingImage = styled.img`
  width: 400px;
  height: 280px;
`

export const TrendingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 90%;
`

export const TrendingTitle = styled.p`
  color: black;
  font-family: 'Roboto';
  margin-bottom: 0;
  color: ${props => props.color};
`

export const TrendingName = styled.p`
  color: black;
  font-family: 'Roboto';
  margin-bottom: 0;
  margin-top: 10px;
  color: ${props => props.color};
`

export const PublishTextContainer = styled.div`
  display: flex;
  margin-top: 0;
  margin-left: 10px;
  font-size: 12px;
`

export const ViewCount = styled.p`
  color: black;
  font-family: 'Roboto';
  margin-right: 8px;
  color: #7e858e;
`

export const Published = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
`
export const TrendingMain = styled.div``
export const VideoLink = styled(Link)`
  text-decoration: none;
`
