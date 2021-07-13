import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Apartment from "./components/Apartment";
import oneBedAptImg from "./components/images/1-bed-apt.jpg";
import oneBedSmartImg from "./components/images/1-bed-smart.jpg";
import twoBedAptImg from "./components/images/2-bed-apt.jpg";
import twoBedPHImg from "./components/images/2-bed-ph.jpg";
import twoBedSmartImg from "./components/images/2-bed-smart.jpg";
import threeBedAptImg from "./components/images/3-bed-apt.jpg";
import threeBedPHImg from "./components/images/3-bed-ph.jpg";
import threeBedPoolImg from "./components/images/3-bed-pool.jpg";
import studioAptImg from "./components/images/studio.jpg";
import "./components/styles/App.css";

function App() {
  const [selectedApartments, setSelectedApartments] = useState([]);
  const [selectedApartmentsStatus, setSelectedApartmetsStatus] = useState(null);
  const [allApertments, setAllApartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const images = [
    { component: oneBedAptImg, name: "1 Bed Apt" },
    { component: oneBedSmartImg, name: "1 Bed Smart" },
    { component: twoBedAptImg, name: "2 Bed Apt" },
    { component: twoBedPHImg, name: "2 Bed PH" },
    { component: twoBedSmartImg, name: "2 Bed Smart" },
    { component: threeBedAptImg, name: "3 Bed Apt" },
    { component: threeBedPHImg, name: "3 Bed PH" },
    { component: threeBedPoolImg, name: "3 Bed Pool" },
    { component: studioAptImg, name: "Studio" },
  ];
  useEffect(() => {
    const fetchAllApertments = async () => {
      const fetchResponse = await fetch(
        "https://wizio.co.uk/test/api/properties/"
      );
      const data = await fetchResponse.json();
      const dataWithImages = data.map((apartment) => {
        const img_src = findImg(apartment.room_type.label);
        return { ...apartment, img_src };
      });
      setAllApartments(() => [...dataWithImages]);
      setSelectedApartments(() => [...dataWithImages]);
      setIsLoading(false);
    };
    fetchAllApertments();
  }, []);
  const filterApartments = (e) => {
    setSelectedApartmetsStatus(e.target.dataset);
    let selectedApts = allApertments;
    if (e.target.dataset.status !== "0") {
      selectedApts = allApertments.filter((apartment) => {
        return apartment.status.id === parseInt(e.target.dataset.status);
      });
    }
    setSelectedApartments(selectedApts);
  };

  const findImg = (houseType) => {
    const foundImg = images.find((image) => image.name === houseType);
    return foundImg.component;
  };
  const renderedApartmentList = selectedApartments.map((apartment) => {
    return (
      <Apartment
        key={apartment.id}
        apartmentData={apartment}
        imgSrc={apartment.img_src}
      />
    );
  });
  return (
    <div className="App">
      {isLoading ? (
        <p>Loading Houses...</p>
      ) : (
        <div className="content-container">
          <ul className="list-container">{renderedApartmentList}</ul>
          <Filter filterApartments={filterApartments} />
        </div>
      )}
    </div>
  );
}

export default App;
