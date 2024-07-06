import "./ServiceList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
useNavigate;

function ServiceList({ currentServices, setCurrentServices }) {
  const [serviceItems, setServiceItems] = useState([]);

  BigInt.prototype.toJSON = function () {
    return { $bigint: this.toString() };
  };

  const navigate = useNavigate();

  const getServiceItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/catalog");
      // const parsedData = parseBigInt(JSON.stringify(response.data));
      // const parsedData = JSON.stringify(response.data);

      setServiceItems(response.data);
      // setServiceItems(parsedData);
      // console.log(serviceItems);
      // console.log(parsedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceItems();
  }, []);

  // useEffect(() => {
  //   navigate("/service-details");
  // }, [currentServices]);

  // const updateCurrentServices = (item) => {
  //   setCurrentServices((currentServices) => [...currentServices, item]);
  // };

  const bookServiceHandler = (item) => {
    // updateCurrentServices(item);
    // console.log(currentServices);
    navigate("/service-details");
  };

  if (!serviceItems) {
    return <div>Loading...</div>;
  }

  // const renderServiceItem = (items) => {
  //   if (typeof value === "object" && items !== null) {
  //     return (
  //       <ul>
  //         {Object.entries(items).map(([key, item]) => (
  //           <li key={key}>
  //             <p>
  //               {item.itemData.name}
  //             </p>
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  //   return items.toString();
  // };
  // console.log(serviceItems);

  return (
    <main className="service-list">
      <h1>Service List</h1>
      {/* <div>
        {serviceItems.map((serviceItem) => (
          <div key={serviceItem.id}>
            {serviceItem.itemData}
          </div>
        ))}
      </div> */}
      {serviceItems.map((serviceItem) => (
        <div key={serviceItem.id}>
          <p>{JSON.stringify(serviceItem.itemData.name)}</p>
          <button
            onClick={() => {
              setCurrentServices((currentServices) => [
                ...currentServices,
                serviceItem,
              ]);
              bookServiceHandler(serviceItem);
            }}
          >
            BOOK
          </button>
        </div>
      ))}
    </main>
  );
}

export default ServiceList;
