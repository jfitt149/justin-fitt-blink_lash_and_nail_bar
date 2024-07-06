import "./ServiceDetails.scss";
import { useNavigate } from "react-router-dom";

function ServiceDetails({ currentServices, setCurrentServices }) {
  const navigate = useNavigate();
  console.log(currentServices);

  const continueHandler = () => {
    navigate("/timeslot");
  };

  if (!currentServices) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      {currentServices.map((serviceItem) => (
        <div key={serviceItem.id}>
          <p>{serviceItem.id}</p>
          <button>ADD SERVICE</button>
          <button onClick={continueHandler}>CONTINUE</button>
        </div>
      ))}
    </main>
  );
}

export default ServiceDetails;
