import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { SideBarLeft } from "./components/SideBar/SideBarLeft/SideBarLeft";
import { SideBarRight } from "./components/SideBar/SideBarRight/SideBarRight";
import { Content } from "./components/Content/Content";
import { Bank } from "./components/pages/BankPages/Bank";
import { Card } from "./components/pages/CardPages/Card";
import classnames from "classnames/bind";

import styles from "./App.module.scss";

const cx = classnames.bind(styles);

const App = () => {
  return (
    // <React.Fragment>
    //   <Routes>
    //     { ROUTES.map((route) => {
    //       return (
    //         <React.Fragment key={ route.id }>
    //           <Route path={ route.path } element={ <PrivateRoute path={ route.path }>
    //             <AppLayout page={ route.element }/>
    //           </PrivateRoute> }/>
    //         </React.Fragment>
    //       )
    //     })
    //     }
    //   </Routes>
    // </React.Fragment>
    <div className={cx("Header")}>
      <Header />
      <div className={cx("Content")}>
        <SideBarLeft />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/credit-card/:id" element={<Card />} />
          <Route path="/bank-account/:id" element={<Bank />} />
          {/*<Route path="/password/:id" element={ <Card/> }/>*/}
          {/*<Route path="/account-bank/:id" element={ <BankPages/> }/>*/}
        </Routes>
        <SideBarRight />
      </div>
    </div>
  );
};

export default App;
