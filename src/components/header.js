import * as React from "react"
import { Link } from "gatsby"
import novaImagem from "../images/a2-logo-curvas.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      justifyContent: `space-evenly`,
      backgroundColor: `var(--color-primary)`,
    }}
  >
    {/* <img
      alt="a2 consorcio logo"
      height={105}
      style={{ position: `relative`, marginLeft: `520px`,}}
      src={novaImagem}
    /> */}


  </header>

)

export default Header
