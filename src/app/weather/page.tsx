"use client";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { weatherAtom } from "./atom";
import axios from "axios";
import { Forecast } from "./type";

export default function Weather() {
  const [weathers, setWeathers] = useAtom(weatherAtom);

  useEffect(() => {
    const getAll = async () => {
      const res = await axios.get(
        "https://weather.tsukumijima.net/api/forecast/city/140020"
      );
      setWeathers(res.data);
    };
    getAll();
  }, []);

  const [firstForecast, ...restForecasts] = weathers.forecasts || [];

  return (
    <div
      className="flex justify-center w-full h-screen text-gray-800"
      style={{
        background:
          "radial-gradient(circle,rgba(201, 238, 174, 1) 0%, rgba(148, 187, 233, 1) 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center bg-white w-100 gap-20">
        <h1 className="text-3xl md:text-4xl font-bold ">{weathers.title}</h1>
        {firstForecast && (
          <div className=" p-6 rounded-lg shadow-lg text-center border-solid border-1 border-gray-300">
            <h3 className="text-3xl font-bold pb-2">
              {firstForecast.dateLabel}
            </h3>
            <img
              src={firstForecast.image.url}
              alt={firstForecast.image.title}
              loading="lazy"
              className="mx-auto pb-2 w-45"
            />
            <h2 className="text-xl font-semibold pb-1">
              {firstForecast.telop}
            </h2>
            <p className="text-sm">
              最高気温 {firstForecast.temperature.max?.celsius ?? "--"}°
            </p>
            <p className="text-sm">
              最低気温 {firstForecast.temperature.min?.celsius ?? "--"}°
            </p>
          </div>
        )}
        <div className="flex gap-10">
          {restForecasts.map((forecast: Forecast, index: number) => (
            <div
              key={index}
              className="bg-white p-6 rounded text-center border-solid border-1 border-gray-300 shadow-md"
            >
              <h3 className="text-xl font-bold pb-2">{forecast.dateLabel}</h3>
              <img
                src={forecast.image.url}
                alt={forecast.image.title}
                className="mx-auto pb-2"
              />
              <h2 className="text-lg font-semibold pb-1">{forecast.telop}</h2>
              <p className="text-sm">
                最高気温 {forecast.temperature.max?.celsius ?? "--"}°
              </p>
              <p className="text-sm">
                最低気温 {forecast.temperature.min?.celsius ?? "--"}°
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
