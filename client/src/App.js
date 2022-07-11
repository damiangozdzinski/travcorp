import { useEffect, useState } from "react";

// * Components * //
import Header from "./components/Header";
import Trips from "./components/Trips";
import NotFound from "./components/NotFound";

// * Helpers * //
import { dataGetter } from "./helpers/dataGetter";

function App() {
  const [ travels, setTravels ] = useState([]);

  useEffect(() => {
    (async () => {
      const { travels } = await dataGetter("http://localhost:5003/travels-data");
      setTravels(travels);
    })();
  }, []);

  return (
    <main>
      <Header />
      {travels && travels.length ? (
        <Trips travels={travels} />
      ) : (
        <NotFound />
      )}
    </main>
  );
}

export default App;
