import React from "react";
import { Bank } from "../components/pages/BankPages/Bank";
import { Card } from "../components/pages/CardPages/Card";
import { PrivateRoute } from "./PrivatRoute";

export interface IRoute {
  path: string | undefined;
  id: string | undefined;
  element?: any;
}

export const ROUTES: IRoute[] = [
  {
    path: "/",
    id: "home",
    element: <PrivateRoute />,
  },
  {
    path: "/password/:id",
    id: "Password",
    element: <div>Hello1</div>,
  },
  {
    path: "/credit-card/:id",
    id: "Credit Card",
    element: <Card/>
  },
  {
    path: "/bank-account/:id",
    id: "BankPages Account",
    element: <Bank/>
  },
  {
    path: "/web-login/:id",
    id: "Web login",
    element: <div>HEllo4</div>,
  },
];
