import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import config from "../../../customize"
import { setThemeVars } from "../../util/theme-helper"

const Footer = () => {
  return (
    <StyledFooter className="main-footer">
      <div>
        <span>© {new Date().getFullYear()} </span>
        {config.profileDescription}
      </div>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  text-align: center;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  margin-top: 1rem;
  padding: 1rem;
  
  @media(max-width: 500px){
    font-size: 0.77rem;
  }
`
