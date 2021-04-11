import React, {useState} from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import {Container, Logo, Background, ButtonLink, Feature, Text, FeatureTitle, Link, Group, Dropdown, Picture, Profile, Search, SearchIcon, SearchInput, Play} from './styles/header'

function Header({bg = true, children, ...restProps}){
    return bg ?  <Background {...restProps}>{children}</Background> : children;
        
}

Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return (
        <Link {...restProps}>{children}</Link>
    )
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Picture = function HeaderPicture({src, ...restProps}){
    return (
        <Picture {...restProps} src={`images/users/${src}.png`}/>
    )
}

Header.Profile = function HeaderProfile({children, ...restProps}){
    return (
        <Profile {...restProps}>{children}</Profile>
    )
}

Header.Play = function HeaderProfile({children, ...restProps}){
    return (
        <Play {...restProps}>{children}</Play>
    )
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false)
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="images/icons/search.png" alt="search icon"/>
            </SearchIcon>
            <SearchInput 
                value={searchTerm}
                onChange={({target}) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />
        </Search>
    )
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return (
        <Dropdown {...restProps}>{children}</Dropdown>
    )
}

Header.Group = function HeaderGroup({children, ...restProps}){
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Header.Text = function HeaderText({children, ...restProps}){
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return (
        <Feature {...restProps}>{children}</Feature>
    )
}

Header.FeatureTitle = function HeaderFeatureTitle({children, ...restProps}){
    return (
        <FeatureTitle {...restProps}>{children}</FeatureTitle>
    )
}


Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return (
        <ButtonLink {...restProps}>{children}</ButtonLink>
    )
}

Header.Logo = function HeaderLogo({to, ...restProps}){
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}

export default Header