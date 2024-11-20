import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #ffffff;
  min-heigth: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }
`
export const LoginFormContainer = styled.form`
  box-shadow: 4px 4px 4px 4px #cbd5e1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 180px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
    width: 90%;
  }
`

export const LoginImage = styled.img`
  width: 150px;
  heigth: 150px;
  margin: auto;
  padding-bottom: 15px;
`
export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: #475569;
  font-family: 'Roboto';
  margin-bottom: 4px;
  margin-top: 4px;
`

export const Input = styled.input`
  width: 250px;
  height: 30px;
  outline: none;
  @media screen and (max-width: 576px) {
    width: 200px;
  }
`
export const CheckBox = styled.input`
  width: 20px;
  heigth: 20px;
`
export const ShowPassword = styled.label`
  color: #181818;
  font-family: 'Roboto';
`
export const UserNameContainers = styled.div`
  margin-top: 10px;
  display: flex;
`

export const LoginButton = styled.button`
  background-color: #4f46e5;
  width: 250px;
  height: 30px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  cursor: pointer;
  margin-top: 15px;
  @media screen and (max-width: 576px) {
    width: 200px;
  }
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  margin-left: 10px;
  text-align: centre;
`
