import React from "react";

function Apartment({ apartmentData, imgSrc }) {
  const code = apartmentData.code;
  const floorType = apartmentData.room_type.label;
  const internalArea = apartmentData.net_area;
  const externalArea = apartmentData.out_area;
  const grossArea = apartmentData.gross_area;
  const poolArea = apartmentData.pool_area;
  const roofArea = apartmentData.roof_area;
  return (
    <li>
      <img src={imgSrc} alt="apartment" width="400" />

      <table>
        <tbody>
          <tr>
            <td>{code}</td>
          </tr>
          <tr>
            <td>Floor Type</td>
            <td>{floorType}</td>
          </tr>
          <tr>
            <td>Internal Area</td>
            <td>{internalArea}</td>
          </tr>
          <tr>
            <td>External Area</td>
            <td>{externalArea}</td>
          </tr>
          <tr>
            <td>Gross Area</td>
            <td>{grossArea}</td>
          </tr>
          <tr>
            <td>Pool Area</td>
            <td>{poolArea}</td>
          </tr>
          <tr>
            <td>Roof Area</td>
            <td>{roofArea}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}

export default Apartment;
