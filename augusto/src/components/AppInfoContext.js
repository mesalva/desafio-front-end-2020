import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AppInfoContext = React.createContext();

export const AppInfoProvider = ({ children }) => {
  AppInfoProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };
  const [appInfo, setAppInfo] = useState({
    photoSelected: null,
    photosList: [],
  });

  return (
    <AppInfoContext.Provider value={[appInfo, setAppInfo]}>
      {children}
    </AppInfoContext.Provider>
  );
};
