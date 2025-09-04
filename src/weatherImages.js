
import clear from "./images/clear.jpg";
import clouds from "./images/cloudy.jpg";
import rain from "./images/rainy.jpg";
import thunder from "./images/thunder.jpg";
import snow from "./images/snow.jpg";
import mist from "./images/mist.jpg";

export const backgrounds = { clear, clouds, rain, thunder, snow, mist };

export function getWeatherBackground(code) {
  if ([71, 73, 75, 77, 85, 86].includes(code)) return backgrounds.snow;   // snow
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return backgrounds.rain; // rain
  if ([95, 96, 99].includes(code)) return backgrounds.thunder;            // thunderstorm
  if ([45, 48].includes(code)) return backgrounds.mist;                   // fog/mist
  if ([1, 2, 3].includes(code)) return backgrounds.clouds;                // cloudy/overcast
  return backgrounds.clear;                                               // default = clear sky
}

