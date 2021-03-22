import React from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';

const login = '/'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */


export default WrappedComponent => {
  const checkUserAuthentication = (): { auth: any } => {
    const token = Cookies.get('token');
    const userId = Cookies.get('userId');

    if (!token && !userId) {
      return { auth: false }
    }

    return { auth: true }; // change null to { isAdmin: true } for test it.
  };
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;


  hocComponent.getInitialProps = async (context: { res: { writeHead: (arg0: number, arg1: { Location: string; }) => void; end: () => void; }; }) => {
    const userAuth = await checkUserAuthentication();

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({...context, auth: userAuth});
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};