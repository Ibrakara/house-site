import React from "react";

function Filter({ filterApartments }) {
  return (
    <aside>
      <h2>Filter</h2>
      <h3>Status</h3>
      <form action="">
        <input
          defaultChecked
          onClick={filterApartments}
          type="radio"
          id="all"
          name="status"
          value="All"
          data-status="0"
        />
        <label htmlFor="all">All</label>
        <input
          onClick={filterApartments}
          type="radio"
          id="available"
          name="status"
          value="Available"
          data-status="1"
        />
        <label htmlFor="available">Available</label>
        <input
          onClick={filterApartments}
          type="radio"
          id="reserved"
          name="status"
          value="Reserved"
          data-status="2"
        />
        <label htmlFor="reserved">Reserved</label>
        <input
          onClick={filterApartments}
          type="radio"
          id="sold"
          name="status"
          value="Sold"
          data-status="3"
        />
        <label htmlFor="sold">Sold</label>
        <input
          onClick={filterApartments}
          type="radio"
          id="not-released"
          name="status"
          value="Not Released"
          data-status="4"
        />
        <label htmlFor="not-released">Not Released</label>
      </form>
    </aside>
  );
}

export default Filter;
