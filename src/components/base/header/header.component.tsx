import AppFunctionComponent from "@appnroll/app-function-component"
import React from "react"
import styled from "styled-components"
import appnrollLogo from "../../../assets/logo/appnroll.svg"
import linkIcon from "../../../assets/icons/link.svg"
import locationIcon from "../../../assets/icons/location.svg"
import { textColor } from "../../../theming/theme-getters"
import NavBar from "../navbar/navbar.component"
import { ButtonIcon } from "../buttonIcon/buttonIcon.component"

const HeaderRoot = styled.header`
  min-height: 20vh;
  width: 60vw;
  margin: 0 auto;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  max-height: 102px;
  margin: 39px auto;
`

const Logo = styled.div`
  display: block;
  width: 102px;
  height: 102px;
  background-image: url(${appnrollLogo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80% 80%;
  background-color: #0f1436;
  border-radius: 5px;
  border: 1px solid #e3e5e8;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 500px;
  margin-left: 21px;
`

const InfoWrapper = styled.div`
  display: flex;

  p {
    font-size: 14px;
    padding-right: 24px;
  }

  a {
    font-size: 14px;
    color: inherit;
    text-decoration: none;
  }
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`

const Description = styled.p`
  font-size: 14px;
  letter-spacing: 0.16px;
  line-height: 18px;
  color: ${textColor("secondary")};
`

interface Props {
  siteTitle: string
}

const Header: AppFunctionComponent<Props> = ({ siteTitle }) => {
  return (
    <HeaderRoot>
      <HeaderWrapper>
        <Logo />
        <ContentWrapper>
          <Title>App'n'roll's repositories</Title>
          <Description>We rock IT</Description>
          <InfoWrapper>
            <ButtonIcon fav={false} icon={locationIcon} />
            <p>Warsaw,PL</p>
            <ButtonIcon fav={false} icon={linkIcon} />
            <a href="http://appnroll.com">http://appnroll.com</a>
          </InfoWrapper>
        </ContentWrapper>
      </HeaderWrapper>
      <NavBar />
    </HeaderRoot>
  )
}

export default Header
