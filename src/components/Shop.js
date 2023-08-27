import React, { useState } from "react";

const Shop = () => {
  const [relativeList] = useState([
    "Aunt Darshana",
    "Uncle Arun",
    "Cousin Om",
    "Grandma Mala",
    "Grandpa Ram",
  ]);

  const listKey = "relativeList";

  return (
    <div>
      <h1>Diwali Shopping List</h1>
      <p>Diwali is coming! Time to visit and shop for:</p>
      <ol id={listKey}>
        {relativeList.map((relative, index) => (
          <li id={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default Shop;
