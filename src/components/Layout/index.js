/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Sidebar from '../Sidebar'
import * as S from './styled'
import GlobalStyles from '../../styles/global'
import Menubar from '../MenuBar'


const Layout = ({ children }) => {
  return (
        <S.LayoutWrapper>
          <GlobalStyles />
          <Sidebar />
            <S.LayoutMain>{children}</S.LayoutMain>
          <Menubar />
        </S.LayoutWrapper>
  )
}
  

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout