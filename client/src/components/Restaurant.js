import React from "react";
import { Card } from "semantic-ui-react";

const Restaurant = ({ restaurant, setSelectedRestaurant, selected }) => {
  return (
    <Card
      onClick={() => setSelectedRestaurant(restaurant.id)}
      className={selected ? "green" : ""}
    >
      <Card.Content>
        <Card.Header content={restaurant.restaurant_name} />
        <Card.Meta content={restaurant.address} />
        <Card.Description content={restaurant.description} />
      </Card.Content>
    </Card>
  );
};

export default Restaurant;
