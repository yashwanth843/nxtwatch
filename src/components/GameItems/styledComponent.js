import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GameList = styled.li`
  list-style: none;
  margin-right: 20px;
  margin-top: 15px;
`

export const GameImg = styled.img`
  width: 200px;
  height: 380px;

  @media screen and (max-width: 576px) {
    width: 300px;
    height: 280px;
  }
`

export const GameTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin-bottom: 10px;
`

export const GameViews = styled.p`
  color: #7e858e;
  font-size: 12px;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 0;
`
export const GameLink = styled(Link)`
  text-decoration: none;
`
