import React from 'react'

import * as S from './styled'

const PostItem = () => (
    <S.PostItemLink to ="/slug">
        <S.PostItemWrapper>
            <S.PostItemTag>Misc</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>November, 05, 2019 - 7 min of reading</S.PostItemDate>
                <S.PostItemTitle>Learning Gatsby</S.PostItemTitle>
                <S.PostItemDescription>
                    Gatsby is a free and open source framework based on React that helps developers 
                    build blazing fast websites and apps - GatsbyJs
                    </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>

)

export default PostItem