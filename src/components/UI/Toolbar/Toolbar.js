import React, {Fragment} from 'react';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    UncontrolledButtonDropdown
} from "reactstrap";
import { NavLink as RouterNavLink } from 'react-router-dom';

const logOut = () => {
    localStorage.clear();
    window.location.reload();
}

const Toolbar = ({user}) => {
    return (
        <div>
            <Navbar color='light' light expand='md'>
                <NavbarBrand tag={RouterNavLink} to='/'>Shop</NavbarBrand>
                <Nav className='ml-auto'>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/' exact>Artists</NavLink>
                    </NavItem>
                    {user ? (
                        <Fragment>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/track-histories" exact>Track History</NavLink>
                            </NavItem>
                            <UncontrolledButtonDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Hello, {user.username}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Show Profile</DropdownItem>
                                    <DropdownItem onClick={()=>logOut()}>Log out</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/register" exact>Sign up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/login" exact>Login</NavLink>
                            </NavItem>
                        </Fragment>
                    )}
                </Nav>
            </Navbar>
        </div>
    );
};

export default Toolbar;