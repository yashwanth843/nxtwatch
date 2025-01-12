import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  height: 92%;
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
  position: fixed;
  top: 70px;

  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const UnorderList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const List = styled.li`
  display: flex;
  align-items: center;
  color: ${props => props.color};
  margin-bottom: 15px;
  background-color: ${props => props.bgColor};
  width: 160px;
  margin-right: 40px;
  padding-left: 20px;
`
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const ContactText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  margin-left: 10px;
  font-size: 18px;

  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const ImageLogoContainer = styled.div`
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const Facebook = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  margin-left: 10px;
`
export const Twitter = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`
export const LinkedIn = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`
export const Desc = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  text-align: left;
  margin-left: 10px;
  margin-bottom: 50px;
  font-size: 14px;
`
export const NavLinks = styled(Link)`
  text-decoration: none;
`
export const MobileContainer = styled.div`
  background-color: ${props => props.bgColor};
  position: fixed;
  top: 70;
`
export const Para = styled.p`
  color: ${props => props.color};
`
