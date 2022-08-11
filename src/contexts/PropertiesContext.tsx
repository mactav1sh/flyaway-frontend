import React, { createContext, ReactNode, useState } from 'react';

interface IProps {
  children?: ReactNode;
}

const PropertiesContext = createContext<any>(null);

const PropertiesProvider = ({ children }: IProps) => {
  const [properties, setProperties] = useState<any>();

  const value = {
    properties,
    setProperties,
  };

  return (
    <PropertiesContext.Provider value={value}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
