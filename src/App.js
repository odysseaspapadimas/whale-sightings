import { useState } from "react";
import Map from "./components/Map";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("orca");

  const handleClick = async () => {
    console.log(query);
    const res = await fetch(
      `https://hotline.whalemuseum.org/api.json?species=${query}`
    );
    const sightings = await res.json();
    console.log(sightings);
    setData(sightings);
  };

  return (
    <div className="App">
      {/* <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} /> */}
      <select onChange={(e) => setQuery(e.target.value)}>
        <option value="orca">Orca</option>
        <option value="gray whale">Gray whale</option>
        <option value="minke">Minke</option>
        <option value="humpback">Humpback</option>
        <option value="atlantic white-sided dolphin">
          Atlantic White-Sided Dolphin
        </option>
        <option value="pacific white-sided dolphin">
          Pacific White-Sided Dolphin
        </option>
        <option value="dalls porpoise">Dalls Porpoise</option>
        <option value="harbor porpoise">Harbor Porpoise</option>
        <option value="harbor seal">Harbor Seal</option>
        <option value="northern elephant seal">Nothern Elephant Seal</option>
        <option value="southern elephant seal">Southern Elephant Seal</option>
        <option value="california sea Lion">California Sea Lion</option>
        <option value="steller sea lion">Steller Sea Lion</option>
        <option value="sea otter">Sea Otter</option>
      </select>
      <button className="search" onClick={handleClick}>
        Search
      </button>
      <Map data={data} />
    </div>
  );
}

export default App;
