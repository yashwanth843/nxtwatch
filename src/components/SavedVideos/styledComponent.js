import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
  margin-left: 160px;
  margin-top: 60px;
`
export const SavedVideoHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #231f20;
  padding: 15px;
  color: #ff0000;
  margin-top: 10px;
`
export const LogoContainer = styled.div`
  background-color: #000000;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin-right: 10px;
  margin-left: 10px;
  padding-left: 8px;
`
export const SavedHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const SavedOrderList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
export const NoVideoImage = styled.img`
  width: 300px;
  height: 300px;
`
export const NoVideosHeading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
`
export const NoVideosPara = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
`
