import React from "react";
import AvailableItems from "./AvailableItems";
import ItemsSummary from "./ItemsSummary";

function Items() {
  return (
    <React.Fragment>
      <ItemsSummary />
      <AvailableItems />
    </React.Fragment>
  );
}

export default Items;
