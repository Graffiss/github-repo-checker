import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import starsIcon from "../../../assets/icons/stars.svg"
import visitorsIcon from "../../../assets/icons/visitors.svg"
import issuesIcon from "../../../assets/icons/issues.svg"
import addIcon from "../../../assets/icons/add.svg"
import addedIcon from "../../../assets/icons/added.svg"
import externalLinkIcon from "../../../assets/icons/external_link.svg"
import { ButtonIcon } from "../buttonIcon/buttonIcon.component"
import { buttonColor } from "../../../theming/theme-getters"
import AppContext from "../../../context/AppContext"

const RepoWrapper = styled.div`
  height: 350px;
  width: 375px;
  border-radius: 5px;
  border-top: 5px solid #f0e066;
  border-bottom: 1px solid #e3e5e8;
  border-left: 1px solid #e3e5e8;
  border-right: 1px solid #e3e5e8;
  position: relative;
`

const ContentWrapper = styled.div`
  display: flex;
  padding: 34px 0;
  width: 100%;
`

const LeftContent = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  max-width: 300px;
`

const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: start;
  padding-right: 32px;
`

const Footer = styled.div`
  height: 86px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(39, 124, 220, 0.04);
  display: flex;
  padding: 35px 0 35px 32px;
`

const Language = styled.div`
  display: flex;
  flex: 1;
`

const Info = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 2;
`

const Paragraph = styled.p`
  font-size: 12px;
  color: #243c56;
  letter-spacing: 0.32px;
  line-height: 16px;
  font-weight: 500;
  margin-right: 32px;
`

const Dot = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  margin-right: 4px;
  background-color: #f0e066;
`

const Link = styled.div`
  display: flex;
  margin-bottom: 12px;

  a {
    text-decoration: none;
    color: ${buttonColor("primary")};
    font-size: 14px;
    letter-spacing: 0.16px;
    line-height: 16px;
  }
`

const Description = styled.p`
  font-size: 16px;
  color: #7d8ca1;
  letter-spacing: 0;
  line-height: 24px;
`

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 36px;
  margin: 0 0 12px 0;
`
interface Repository {
  id: number
  language: string
  name: string
  description: string
  full_name: string
  stargazers_count: number
  forks_count: number
  url: string
  watchers_count: number
}
interface Repo {
  repository: Repository
}

const Repository = ({
  repository,
  repository: {
    language,
    name,
    description,
    full_name,
    stargazers_count,
    forks_count,
    url,
    watchers_count,
  },
}: Repo) => {
  const context = useContext(AppContext)
  const { addToFav, removeFromFav, favourites } = context
  const [favourite, setFavourite] = useState(false)

  const handleClick = (repository: Repository) => {
    favourite ? removeFromFav(repository.id) : addToFav(repository)
  }

  useEffect(() => {
    const isFav = favourites.find((fav) => fav.id === repository.id)
    if (isFav === undefined) {
      setFavourite(false)
    } else {
      setFavourite(true)
    }
  }, [favourites, repository])

  return (
    <RepoWrapper>
      <ContentWrapper>
        <LeftContent>
          <Title>{name}</Title>
          <Link>
            <ButtonIcon fav={false} icon={externalLinkIcon} />
            <a href={url} target="_blank">
              {full_name}
            </a>
          </Link>
          <Description>{description}</Description>
        </LeftContent>
        <RightContent>
          <ButtonIcon
            fav
            icon={favourite ? addedIcon : addIcon}
            onClick={() => handleClick(repository)}
          />
        </RightContent>
      </ContentWrapper>
      <Footer>
        <Language>
          <Dot />
          <Paragraph>{language}</Paragraph>
        </Language>
        <Info>
          <ButtonIcon fav={false} icon={starsIcon} />
          <Paragraph>{stargazers_count}</Paragraph>
          <ButtonIcon fav={false} icon={visitorsIcon} />
          <Paragraph>{watchers_count}</Paragraph>
          <ButtonIcon fav={false} icon={issuesIcon} />
          <Paragraph>{forks_count}</Paragraph>
        </Info>
      </Footer>
    </RepoWrapper>
  )
}

export default Repository
