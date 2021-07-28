import React, { useContext, useEffect } from "react";
import { logger } from "../common-util";
import { AppCtx } from "../context";

const Home = (_props: any) => {
  const { state } = useContext(AppCtx);

  useEffect(() => {
    logger("state.user in Home.tsx", state.user);
  }, [state.user]);

  // main render
  return (
    <React.Fragment>
      <div>home is here </div>
    </React.Fragment>
  );
};

export default Home;
