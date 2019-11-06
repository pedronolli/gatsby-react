import React from 'react'
import { Home } from 'styled-icons/boxicons-solid/Home'
import { Search } from 'styled-icons/evil/Search'
import { UpArrow as Arrow } from 'styled-icons/boxicons-regular/UpArrow'
import { Bulb as Light } from 'styled-icons/boxicons-regular/Bulb'
import { Grid } from 'styled-icons/boxicons-solid/Grid'

import * as S from './styled'

const MenuBar = () => (

    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Back to home">
                <S.MenuBarItem><Home /></S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/search/" title="Search">
                <S.MenuBarItem><Search /></S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>

        <S.MenuBarGroup>
            <S.MenuBarItem title="Change theme"><Light /></S.MenuBarItem>
            <S.MenuBarItem title="Change view"><Grid /></S.MenuBarItem>
            <S.MenuBarItem title="Go to the top"><Arrow /></S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>

)

export default MenuBar