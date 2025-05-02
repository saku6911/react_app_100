export type Forecast = {
  dateLabel: string;
  telop: string;
  image: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  temperature: {
    max: {
      celsius: number;
    };
    min: {
      celsius: number;
    };
  };
};
export type Weather = {
  title: string;
  forecasts: Forecast[];
};
