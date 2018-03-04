import * as React from 'react';
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  DropdownToggle
} from 'reactstrap';
import { ApplicationState } from '../../../data';
import { connect } from 'react-redux';
import { User } from 'oidc-client';
import { userManager } from '../../../security';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { apiSettings } from '../../../shared';

interface HeaderProps extends RouteComponentProps<any> {
  className?: string;
  style?: React.CSSProperties;
  user: User;
}

interface HeaderState {
  dropdownOpen: boolean;
  hasImage: boolean;
}

/**
 * The Header component
 *
 * @returns Header as react stateless component
 */
class Header extends React.Component<HeaderProps, HeaderState> {
  public state: HeaderState = {
    dropdownOpen: false,
    hasImage: true
  };

  private sidebarToggle = e => {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  };

  private toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  private mobileSidebarToggle = e => {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  };

  private onLoginButtonClick = event => {
    event.preventDefault();
    userManager.signinRedirect();
  };

  private onLogoutButtonClick = event => {
    event.preventDefault();
    userManager.signoutRedirect();
  };

  private handleImgError = () => {
    this.setState({ hasImage: false });
  };

  private renderLogin() {
    const { user } = this.props;
    const { hasImage } = this.state;
    const userDefaultPicture = require('../../../images/user.png');

    if (user) {
      return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle className="nav-link dropdown-toggle">
            <span className="d-md-down-none">{user.profile.name}</span>
            {hasImage && (
              <img
                src={`${apiSettings.baseUrl}v1/aspnetusers/photo/${user.profile.sub}`}
                className="img-avatar"
                alt="user"
                onError={this.handleImgError}
              />
            )}
            {!hasImage && <img src={userDefaultPicture} className="img-avatar" alt="user" />}
          </DropdownToggle>
          <DropdownMenu right className={this.state.dropdownOpen ? 'show' : ''}>
            <Link to="/users/profile">
              <DropdownItem>
                <i className="far fa-user" /> Profile
              </DropdownItem>
            </Link>
            <DropdownItem onClick={this.onLogoutButtonClick}>
              <i className="fas fa-sign-out-alt" />&nbsp; Se déconnecter
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    } else {
      return (
        <Button outline color="primary" onClick={this.onLoginButtonClick}>
          <b>
            <i className="fas fa-sign-in-alt" />&nbsp; Se connecter
          </b>
        </Button>
      );
    }
  }

  // tslint:disable-next-line:member-ordering
  public render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          &#9776;
        </NavbarToggler>
        <NavbarBrand href="#" />

        <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>
          &#9776;
        </NavbarToggler>

        <Nav className="ml-auto" style={{ paddingRight: 10 }} navbar>
          <NavItem>{this.renderLogin()}</NavItem>
        </Nav>
      </header>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  user: state.oidc.user
});

const mapDispatchToProps = () => ({});

const header = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

export { header as Header };
