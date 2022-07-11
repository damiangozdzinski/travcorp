import { useEffect, useState } from "react";

// * Components * //
import Header from "./components/Header";
import Trips from "./components/Trips";
import NotFound from "./components/NotFound";
import Loading from "./components/Loading";

// * Helpers * //
import { dataGetter } from "./helpers/dataGetter";

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ travels, setTravels ] = useState([]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { travels } = await dataGetter("http://localhost:5003/travels-data");
      setTravels(travels);
    })();
    setLoading(false);
  }, []);

  return (
    <main>
      <Header />
      {loading ?
        <Loading />
        : 
        travels && travels.length ? (
          <Trips travels={travels} />
        ) : (
          <NotFound />
        )
      }
    </main>
  );
}

export default App;
