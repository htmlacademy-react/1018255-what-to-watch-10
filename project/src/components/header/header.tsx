import React from 'react';
import { Link } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../constants/constants';

type HeaderProps = PropsWithChildren<{
  avatarUrl: string;
}>

function Header({children, avatarUrl}: HeaderProps): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <Logo />

      {children}

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link" to={AppRoute.Root}>Sign out</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
