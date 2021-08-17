import { useState } from "react";
import { Card, Button, Container } from "semantic-ui-react";
import Nav from "./components/Nav";

import Restaurant from "./components/Restaurant";

function App() {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const getRestaurantList = async () => {
    setLoading(true);
    try {
      const res = await fetch("/getRestaurantList");
      const data = await res.json();
      setRestaurants(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Nav setQuery={setQuery} />
      {restaurants.length ? (
        <Card.Group as={Container} itemsPerRow={4} stackable={true}>
          {restaurants.map((restaurant) => {
            if (restaurant.restaurant_name.toLowerCase().indexOf(query) > -1)
              return (
                <Restaurant
                  selected={selectedRestaurant === restaurant.id}
                  key={restaurant.id}
                  setSelectedRestaurant={setSelectedRestaurant}
                  restaurant={restaurant}
                />
              );
          })}
        </Card.Group>
      ) : (
        <div className="btn-wrapper">
          <Button secondary onClick={getRestaurantList}>
            {loading ? "Loading Restaurants" : "Load Restaurants"}
          </Button>
        </div>
      )}
    </>
  );
}

export default App;
