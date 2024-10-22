import "./Timeslot.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import DatePicker from "../DatePicker/DatePicker";
import SlidingMenu from "../../SlidingMenu/SlidingMenu";

function Timeslot({ serviceItems, location, staff }) {
  const [availability, setAvailability] = useState([]);
  const { staffId, serviceVariationId } = useParams();
  const serviceItem = serviceItems.find((item) =>
    item.itemData.variations.some(
      (variation) => variation.id === serviceVariationId
    )
  );

  const serverUrl = import.meta.env.VITE_API_URL;

  const getAvailability = async () => {
    try {
      const response = await axios.get(
        serverUrl +
          "availability/" +
          staffId +
          "/" +
          serviceVariationId +
          "?version=" +
          serviceItem.version
      );
      setAvailability(response.data.availabilities);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAvailability();
  }, [staffId, serviceItem]);

  if (!serviceItem || !staff || !location) {
    return <div>Loading...</div>;
  }
  const serviceId = serviceItem.id;
  const serviceVersion = serviceItem.version;

  return (
    <>
      <SlidingMenu
        serviceItem={serviceItem}
        serviceVariationId={serviceVariationId}
      ></SlidingMenu>

      <div className="content-main">
        <DatePicker
          availabilities={availability}
          serviceId={serviceId}
          serviceVersion={serviceVersion}
          serviceVariationId={serviceVariationId}
          location={location}
        ></DatePicker>
      </div>
    </>
  );
}

export default Timeslot;
