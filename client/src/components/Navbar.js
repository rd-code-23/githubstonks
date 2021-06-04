import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// uselocation
const Navbar = () => {
    return (
        <Wrapper>
            <NavBarItem
                className="active"
                exact
                to="/guest"
                activeStyle={{
                    fontWeight: "bold",
                    color: "rgb(14, 184, 239)",
                }}
            >
                Home
            </NavBarItem>
            <NavBarItem
                exact
                to="/guest/account"
                activeStyle={{
                    fontWeight: "bold",
                    color: "rgb(14, 184, 239)",
                }}
            >
                Acount
            </NavBarItem>
            <a href="http://localhost:8000/api/user/signin">
                Sign in with Github
            </a>
        </Wrapper>
    );
};
//  navlink knows
const Wrapper = styled.div`
    padding: 10px 10px 10px 14px;
    max-width: 100%;
    height: 21px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    position: fixed;
    width: 100%;
    margin-left: 201px;
    z-index: 10;
`;

const NavBarItem = styled(NavLink)`
    margin-right: 14px;
    text-decoration: none;
    color: black;
    &:active {
        color: rgb(14, 184, 239);
    }
    /* &.active {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    } */
`;

export default Navbar;
