import React from 'react';
import { PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren<{
  avatarUrl: string;
}>

function Header(props: HeaderProps): JSX.Element {
  return (
    // у авторизованного пользователя добавляется класс user-page__head
    <header className="page-header user-page__head">
      <div className="logo">
        <a className="logo__link" href="main.html" >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {props.children}

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={props.avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link" href='https://ru.reactjs.org/docs/getting-started.html'>Sign out</a>
        </li>
      </ul>

      {/* неавторизованный пользователь */}
      {/* <div className="user-block">
        <a className="user-block__link" href="sign-in.html">Sign in</a>
      </div> */}

    </header>
  );
}

export default Header;
