// main
export const PROJECT_NAME = "Point map";

// map
export const MAP_CENTER = [55.76, 37.64];
export const MAP_ZOOM = 10;

// polyline
export const optionsPolyline = {
  balloonCloseButton: false,
  strokeColor: "#000000",
  strokeWidth: 7,
  strokeOpacity: 0.5
};

export const generateOptionsPlacemark = value => ({
  properties: {
    balloonContent: `<strong>${value}</strong>`
  },
  options: {
    draggable: true,
    preset: "islands#redSportIcon"
  },
  modules: ["geoObject.addon.balloon"]
});
