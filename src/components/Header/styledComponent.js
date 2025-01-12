import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  width: 100%;
`

export const NavBarLogo = styled.img`
  width: 120px;
  height: 40px;
  margin: 15px 15px 15px 30px;
`

export const NavBarButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 15px 15px 30px;
`

export const ThemeLogoButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.color};
`

export const ProfileButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const ProfileLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1.5px solid #00306e;
  cursor: pointer;
  width: 100px;
  height: 25px;
  color: #3b82f6;
  font-family: 'Roboto';
  font-weigth: 400;
`
export const PopupContainer = styled.div`
  background-color: #231f20;
  border-radius: 10px;
  padding: 30px;
`
export const MessageText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 6px;
  width: 100px;
  height: 30px;
  color: #ffffff;
  font-family: 'Roboto';
  cursor: pointer;
  margin-right: 15px;
  margin-left: 10px;
`
export const ConfirmButton = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 6px;
  width: 100px;
  height: 30px;
  color: #ffffff;
  font-family: 'Roboto';
  cursor: pointer;
`
export const MobileButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  color: ${props => props.color};

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MobileLogout = styled.button``
