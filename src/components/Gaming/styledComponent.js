import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
  margin-left: 160px;
  margin-top: 60px;
`

export const GamingHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #231f20;
  padding: 15px;
  color: #ff0000;
  margin-top: 10px;
`
export const GameLogoContainer = styled.div`
  background-color: #000000;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin-right: 10px;
  margin-left: 10px;
`
export const GameHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const GamingApiContainer = styled.div``
export const GameUnOrderList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  margin-left: 30px;
`

export const Loading2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`
export const SearchNotFound2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`
export const NotFoundImg2 = styled.img`
  width: 300px;
  height: 250px;
`
export const NotFoundHeading2 = styled.h4`
  text-align: center;
  color: #212121;
  font-family: 'Roboto';
`
export const NotFoundPara2 = styled.p`
  text-align: center;
  color: #212121;
  font-family: 'Roboto';
`
export const NotFoundRetryButton2 = styled.button`
  background-color: #3b82f6;
  width: 138px;
  height: 30px;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
`
