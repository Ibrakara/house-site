import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Apartment from "./components/Apartment";

function App() {
  const [slectedApartments, setSelectedApartments] = useState(null);
  const [allApertments, setAllApartments] = useState([]);
  useEffect(() => {
    const fetchAllApertments = async () => {
      const fetchResponse = await fetch(
        "https://wizio.co.uk/test/api/properties/"
      );
      const data = await fetchResponse.json();
      setAllApartments(() => [...data]);
    };
    fetchAllApertments();
  }, []);
  console.log(allApertments);
  return (
    <div className="App">
      <h1>Our House Inventory</h1>
      <Filter />
    </div>
  );
}

export default App;
