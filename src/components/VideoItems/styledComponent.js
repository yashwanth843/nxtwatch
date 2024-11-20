import styled from 'styled-components'

export const VideoItemsMainContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  overflow-y: auto;
  margin-left: 160px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const VideoUnOrder = styled.ul`
  border: 1px solid black
  width: 100%;
`

export const Loading5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`
export const SearchNotFound4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`
export const NotFoundImg4 = styled.img`
  width: 300px;
  height: 250px;
`
export const NotFoundHeading4 = styled.h4`
  text-align: center;
  color: #212121;
  font-family: 'Roboto';
`
export const NotFoundPara4 = styled.p`
  text-align: center;
  color: #212121;
  font-family: 'Roboto';
`
export const NotFoundRetryButton4 = styled.button`
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
