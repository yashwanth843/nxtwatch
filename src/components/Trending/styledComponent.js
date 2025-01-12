import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
  margin-left: 160px;
  margin-top: 60px;

  @media screen and (max-width: 576px) {
    margin-left: 0px;
    margin-top: 60px;
  }
`
export const TrendingheadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #231f20;
  padding: 15px;
  color: #ff0000;
  margin-top: 10px;
`
export const TrendingHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
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
`

export const TrendingApiContainer = styled.div``
export const TrendingUnorderList = styled.ul`
  @media screen and (max-width: 576px) {
    width: 300px;
    height: 280px;

    @media screen and (max-width: 576px) {
      flex-direction: colums;
    }
  }
`
export const Loading1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`
export const SearchNotFound1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`
export const NotFoundImg1 = styled.img`
  width: 300px;
  height: 250px;
`
export const NotFoundHeading1 = styled.h4`
  text-align: center;
  color: #212121;
  font-family: 'Roboto';
`
export const NotFoundPara1 = styled.p`
  text-align: center;
  color: #212121;
  font-family: 'Roboto';
`
export const NotFoundRetryButton1 = styled.button`
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
