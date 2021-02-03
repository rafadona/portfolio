import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.png'
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
      </Helmet>
      <App />
    </>
  );
};
