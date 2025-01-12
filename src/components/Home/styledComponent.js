import styled from 'styled-components'

export const HomeContainer = styled.div`
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
export const MembershipContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`
export const MembershipText = styled.div`
  display: flex;
  flex-direction: column;
`
export const NxtWatch = styled.img`
  width: 130px;
  height: 50px;
`
export const NxtWatchText = styled.p`
  color: #212121;
  font-family: 'Roboto';
  width: 95%;
`
export const NxtButton = styled.button`
  background-color: transparent;
  border: 2px solid #231f20;
  width: 120px;
  height: 30px;
  color: #181818;
  font-family: 'Roboto';
  cursor: pointer;
  border-radius: 8px;
  text-weight: bold;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 0;
  height: 10px;
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
`
export const SearchInput = styled.input`
  height: 30px;
  width: 350px;
  outline: none;
  border-right: none;
  border: 1px solid #cbd5e1;
  padding-left: 15px;
  font-family: 'Roboto';
`

export const SearchButton = styled.button`
  height: 30px;
  border: 1px solid #cbd5e1;
  background-color: #cccccc;
  border-left: none;
  width: 100px;
  padding: 8px;
  cursor: pointer;
`
export const VideoContainer = styled.div``

export const VideosList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  gap: 10px;
  margin-left: 5%;

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 0fr);
  }
`
export const SearchNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`
export const NotFoundImg = styled.img`
  width: 300px;
  height: 250px;
`
export const NotFoundHeading = styled.h4`
  text-align: center;
  color: #212121;
  font-family: 'Roboto';
`
export const NotFoundPara = styled.p`
  text-align: center;
  color: #212121;
  font-family: 'Roboto';
`
export const NotFoundRetryButton = styled.button`
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
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`
export const EmptyVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const EmptyVideosImg = styled.img`
  width: 400px;
  height: 300px;
`
export const EmptyHeading = styled.h4`
  font-family: 'Roboto';
`

export const Emptypara = styled.p`
  font-family: 'Roboto';
`

export const EmptyButton = styled.button`
  background-color: #4f46e5;
  width: 130px;
  height: 30px;
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
`
