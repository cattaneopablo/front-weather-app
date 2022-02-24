import React from "react";

export const WeatherInfo = (props) => {
  const { weathers } = props;

  return (
    <>
      {weathers?.map((weather) => {
        return (
          <div key={weather.temperature} style={{ backgroundColor: "#cfcfcf" }}>
            {weather.error && (
              <div className="alert alert-danger">
                <p>{weather.error}</p>
              </div>
            )}
            {weather.temperature ? (
              <section
                className="card card-body"
                style={{ backgroundColor: "#cfcfcf" }}
              >
                <div style={{ textAlign: "right" }}>
                  <img src={weather.icon} />
                </div>
                <div>
                  Location: {weather.city}, {weather.country}
                </div>
                <div>
                  Temperature: {weather.temperature} °C, {weather.description}
                </div>
                <div>Humidity: {weather.humidity} %</div>
                <div>Wind Speed: {weather.windSpeed} km/h</div>
              </section>
            ) : (
              <div
                className="card card-body"
                style={{ backgroundColor: "#cfcfcf" }}
              >
                <p>No request yet</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
