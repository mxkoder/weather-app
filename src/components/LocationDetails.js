import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ city, country }) => {
  return <h1 data-testid="h1-LocationDetails">{`${city}, ${country}`}</h1>;
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
