import React from "react";
import "./styles/Apartment.css";

function Apartment({ apartmentData, imgSrc }) {
  const code = apartmentData.code;
  const floorType = apartmentData.room_type.label;
  const internalArea = apartmentData.net_area;
  const externalArea = apartmentData.out_area;
  const grossArea = apartmentData.gross_area;
  const poolArea = apartmentData.pool_area;
  const roofArea = apartmentData.roof_area;
  return (
    <li className="apartment-card">
      <img className="apartment-img" src={imgSrc} alt="apartment" width="200" />

      <table className="apartment-info-container">
        <tbody className="apartment-table-body">
          <tr id="apartment-code" className="apartment-table-row">
            <td className="row-content">{code}</td>
          </tr>
          <tr className="apartment-table-row">
            <td className="row-content">FLOOR TYPE</td>
            <td className="row-content">{floorType}</td>
          </tr>
          <tr className="apartment-table-row">
            <td className="row-content">INTERNAL</td>
            <td className="row-content">{internalArea}</td>
          </tr>
          <tr className="apartment-table-row">
            <td className="row-content">EXTERNAL</td>
            <td className="row-content">{externalArea}</td>
          </tr>
          <tr className="apartment-table-row">
            <td className="row-content">GROSS</td>
            <td className="row-content">{grossArea}</td>
          </tr>
          <tr className="apartment-table-row">
            <td className="row-content">POOL</td>
            <td className="row-content">{poolArea}</td>
          </tr>
          <tr className="apartment-table-row" id="roof-row">
            <td className="row-content">ROOF</td>
            <td className="row-content">{roofArea}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}

export default Apartment;
