import React from "react";

function Filter(props) {
  return (
    <aside>
      <h2>Filter</h2>
      <h3>Status</h3>
      <form action="">
        <input type="radio" id="available" name="status" value="Available" />
        <label htmlFor="available">Available</label>
        <input type="radio" id="reserved" name="status" value="Reserved" />
        <label htmlFor="reserved">Reserved</label>
        <input type="radio" id="sold" name="status" value="Sold" />
        <label htmlFor="sold">Sold</label>
        <input
          type="radio"
          id="not-released"
          name="status"
          value="Not Released"
        />
        <label htmlFor="not-released">Not Released</label>
      </form>
    </aside>
  );
}

export default Filter;
