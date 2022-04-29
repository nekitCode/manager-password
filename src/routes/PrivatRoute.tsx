import React from "react";
import { Route, RouteProps, Routes } from "react-router-dom";

interface IProps extends RouteProps {
  children?: React.ReactElement;

  [key: string]: any;
}

export const PrivateRoute: React.FC<IProps> = ({children, ...rest}) => {
  return (
    <Routes>
      <Route { ...rest } element={ children }/>
    </Routes>
  );
};
