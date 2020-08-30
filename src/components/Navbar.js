import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    position: relative;
    list-style: none;
    margin: 40px;
    margin-top: 30px;
    padding: 0;
    text-align: center;
`;

const NavLi = styled.li`
    display: inline;
    font-size: 180%;
    margin: 5px;
`;

const NavA = styled.a`
    color: ${props => props.current ? "#fff" : "#000"};
    background-color: ${props => props.current ? "#444" : "#fff"};
    display: inline-block;
    padding: 5px 10px;
    text-decoration: none;
    &:visited {
        color: ${props => props.current ? "#fff" : "#000"};
        background-color: ${props => props.current ? "#444" : "#fff"};
    }
    &:hover {
        color: #fff;
        background-color: #444;
    }
`;

const Navbar = (props) => {
    const homeIsCurrent = props.current === 'home';
    const experienceIsCurrent = props.current === 'experience';
    const projectsIsCurrent = props.current === 'projects';

    return (
        <Nav>
            <NavLi><NavA href="./" current={homeIsCurrent}>Home</NavA></NavLi>
            <NavLi><NavA href="./experience" current={experienceIsCurrent}>Experience</NavA></NavLi>
            <NavLi><NavA href="./projects" current={projectsIsCurrent}>Projects</NavA></NavLi>
        </Nav>
    );
}

export default Navbar;