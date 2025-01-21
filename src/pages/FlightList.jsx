import React, { useState, useEffect, useMemo } from "react";
import TeaserCard from "../components/TeaserCard";
import { useChooseAFare } from "../api";
import { useFlightPackageById } from "../api";
import FlightPackage from "../components/FlightPackage";
import "./FlightList.scss";

 
const FlightList = () => {
  const [fetchTrigger, setFetchTrigger] = useState(true);
  const navigate = useNavigate();
 
  const fareTypes = [
    "economy-basic",
    "business"
  ];

  // Individual hooks for each fare type
  const economyBasicPackage = useFlightPackageById("economy-basic", 'master', fetchTrigger);
  const businessPackage = useFlightPackageById("business", 'master', fetchTrigger);

  // Combine results in useEffect
  useEffect(() => {
    const allPackages = [
      economyBasicPackage.data,
      businessPackage.data
    ].filter(data => data !== null);
    
    setPackages(allPackages);
  }, [economyBasicPackage.data, businessPackage.data]);

  useEffect(() => {
    if (!searchParams.get("variation")) {
      navigate("/?variation=master");
    }
  }, [searchParams, navigate]);
 
  const { data } = useChooseAFare("master", fetchTrigger);
  console.log("0", data);

  return (
    <>
      <TeaserCard cf={data} title="Teaser">
      </TeaserCard>
      {packages.map((offer, index) => (
        <FlightPackage title="Flight Package"
          key={offer.packageId || index}
          cf={offer}
          setFetchTrigger={setFetchTrigger}
        />
      ))}
    </>
  );

}

export default FlightList;
