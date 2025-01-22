import React, {useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useChooseAFare, useFlightPackageById} from "../api";
import "./FlightList.scss";
import TeaserCard from "../components/TeaserCard";
import FlightPackage from "../components/FlightPackage";


const FlightList = () => {
  const [fetchTrigger, setFetchTrigger] = useState(true);
  const navigate = useNavigate();

  const economyBasicPackage = useFlightPackageById("economy-basic", "master", fetchTrigger);
  const businessPackage = useFlightPackageById("business", "master", fetchTrigger);

  const packages = [economyBasicPackage, businessPackage];
  const {data} = useChooseAFare("master", fetchTrigger);

  function getAllPackages() {
    return packages.map((offer, index) => (
        <FlightPackage
            key={offer?.packageId || index}
            cf={offer?.data}
            navigate={navigate}
        />
    ));
  }


  return (
      <>
        <ol className="progress-list">
            <li className="progress-step"><span>1</span>Outbound</li>
            <li className="progress-step"><span>2</span>Flight summary Incomplete.
            </li>
            <li className="progress-step"><span>3</span>Seats</li>
            <li className="progress-step"><span>4</span>Passengers details Incomplete.
            </li>
            <li className="progress-step"><span>5</span>Passengers details
            Incomplete.
            </li>
            <li className="progress-step"><span>6</span>Extras
            </li>
            <li className="progress-step"><span>7</span>Review and pay
            </li>
        </ol>
        <TeaserCard cf={data} title="Teaser"/>
        <div className="column-container">
          {getAllPackages()}
        </div>
      </>
  );
};

export default FlightList;
