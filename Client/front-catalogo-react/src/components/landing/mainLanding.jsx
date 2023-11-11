import { useState } from "react";
import LandingFooter from "./LandingFooter";
import LandingHeader from "./LandingHeader";
import PageOffer from "./PageOffer";

import "../../css/main.css";
import "../../css/landing.css";
import PageComputador from "./PageComputador";

function MainLanding() {
  const [selectedPage, setSelectedPage] = useState("offer");

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  const page = {
    offer: <PageOffer />,
    computador: <PageComputador />,
  };

  return (
    <>
      <LandingHeader onPageChange={handlePageChange} />
      {page[selectedPage]}
      <LandingFooter />
    </>
  );
}

export default MainLanding;
