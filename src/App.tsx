import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { SideBarLeft } from "./components/SideBar/SideBarLeft/SideBarLeft";
import { SideBarRight } from "./components/SideBar/SideBarRight/SideBarRight";
import { Content } from "./components/Content/Content";
import { Bank } from "./components/pages/BankPages/Bank";
import { Card } from "./components/pages/CardPages/Card";
import classnames from "classnames/bind";
import { Password } from "./components/pages/PasswordPages/Password";

import styles from "./App.module.scss";

const cx = classnames.bind(styles);

export const App = () => {
  return (
    <div className={cx("Header")}>
      <Header/>
      <div className={cx("Content")}>
        <SideBarLeft/>
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/credit-card/:id" element={<Card/>}/>
          <Route path="/bank-account/:id" element={<Bank/>}/>
          <Route path="/password/:id" element={<Password />}/>
          {/*<Route path="/account-bank/:id" element={ <BankPages/> }/>*/}
        </Routes>
        <SideBarRight/>
      </div>
    </div>
  );
};
