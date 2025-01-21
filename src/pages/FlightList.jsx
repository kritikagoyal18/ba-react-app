import React, { useState, useEffect, useMemo } from "react";
import TeaserCard from "../components/TeaserCard";
import { useChooseAFare } from "../api";
 
const FlightList = () => {
  const [fetchTrigger, setFetchTrigger] = useState(true);
  const { data } = useChooseAFare("master", fetchTrigger);
  console.log("0", data);

  return (
    <>
      <TeaserCard cf={data}>
      </TeaserCard>
    </>
  );

}

export default FlightList;