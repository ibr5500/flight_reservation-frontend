import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function AirlineDetails() {
  const airline = useParams();
  const dataList = useSelector((state) => state.airlines.airlines.data);
  const airlineDetails = dataList.filter((flight) => +flight.id === +airline.id);

  return (
    <div className="container my-5">
      {airlineDetails.map((item) => (
        <div className="details-container" key={item.id}>
          <div className="img-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="contents p-5">
            <div className="p-3">
              <p>Name: </p>
              <h3>{item.name}</h3>
            </div>

            <div className="p-3 my-2">
              <p>Price: $</p>
              {' '}
              <h4>{item.price}</h4>
            </div>
            <Link className="btn book-btn my-2" to={`/reservationForm/${item.id}`}>Book now</Link>
            <Link className="btn my-2" to="/home">Back</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AirlineDetails;
