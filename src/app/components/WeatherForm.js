import React from "react";

export const WeatherForm = (props) => {
  const { getWeather, selectedRadio, cities, updateSelectedCity } = props;

  return (
    <div className="card card-body">
      <form>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="current"
            onChange={getWeather}
            checked={selectedRadio === "current"}
          />
          <label className="form-check-label" htmlFor="current">
            Current
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="forecast"
            onChange={getWeather}
            checked={selectedRadio === "forecast"}
          />
          <label className="form-check-label" htmlFor="forecast">
            Forecast
          </label>
        </div>
        <div>
          <select
            className="form-select"
            id="city"
            onChange={updateSelectedCity}
          >
            {cities.map((city, index) => {
              return (
                <option key={city} value={city}>
                  {index === 0 ? `${city} (current)` : city}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
};
