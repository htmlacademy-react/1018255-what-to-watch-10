import React from 'react';
import { ReactNode } from 'react';
import Footer from '../footer/footer';

type PageContentProps = {
  children: ReactNode;
}

function PageContent(props: PageContentProps): JSX.Element {
  return (
    <div className="page-content">
      {props.children}
      <Footer />
    </div>
  );
}

export default PageContent;
