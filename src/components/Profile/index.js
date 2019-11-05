import React from 'react'
import { useStaticQuery , graphql } from 'gatsby'
import Avatar from '../Avatar'
import * as S from './styled'


const Profile = () => {
    const { 
        site: {
            siteMetadata: {position, title, description} 
        },
    } = useStaticQuery( graphql`query MySiteMetadata {
        site {
            siteMetadata {
                position
                title
                description
            }
         }
       }
    `)

    return (
        <S.ProfileWrapper>
        <Avatar />
        <S.ProfileLink>
        <S.ProfileAuthor>
             {title}
             <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
        </S.ProfileLink>
        <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}



export default Profile