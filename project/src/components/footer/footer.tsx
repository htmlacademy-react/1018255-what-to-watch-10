import React from 'react';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light" href='https://ru.reactjs.org/docs/getting-started.html'>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
