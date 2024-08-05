import React, { Fragment } from "react";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
