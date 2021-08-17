import { useState } from "react";
import { Button } from "semantic-ui-react";

function App() {
  const [loading, setLoading] = useState(false);

  const getRestaurantList = async () => {
    setLoading(true);
    try {
      const res = await fetch("/getRestaurantList");
      const data = await res.json();
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button secondary loading={loading} onClick={getRestaurantList}>
      Load Restaurants
    </Button>
  );
}

export default App;
