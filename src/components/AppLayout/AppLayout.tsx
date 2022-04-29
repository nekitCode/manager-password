import React from "react";
import { Content } from "../Content/Content";
import { Header } from "../Header/Header";
import { SideBarLeft } from "../SideBar/SideBarLeft/SideBarLeft";
import { SideBarRight } from "../SideBar/SideBarRight/SideBarRight";
import { TypeCard } from "../TypeCard/TypeCard";

interface IAppLayoutProps {
  page: React.ReactNode;
}

export const AppLayout: React.FC<IAppLayoutProps> = ({page}) => {
  console.log(page);
  return (
    <div className="App">
      <Header/>
      <div className="app-container" style={{display: 'flex'}}>
        <SideBarLeft/>
        <TypeCard/>

        <div>{ page }</div>
        <SideBarRight/>
      </div>
    </div>
  );
};
