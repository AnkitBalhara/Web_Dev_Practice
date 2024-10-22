const socket = io();
// console.log(socket)

if (!navigator.geolocation) {
  alert("Sorry Device Doesn,t support location functionality...");
}

navigator.geolocation.watchPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    // This below line is to send the longitude and latitude to the frontend.
    socket.emit("send-location", { latitude, longitude });
  },
  (error) => {
    console.log("Error in longitude and latitude :-", error);
  },
  {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000,
  }
);

// This below "L" comes from Leaflet script and setting Longitude and latitude for Earth center
const map = L.map("map").setView([0, 0], 10);

// Setting longitude and latitude for "India"
// const map = L.map("map").setView([29, 76], 8);

// This below line is to show map like colors in map(blue,green,...)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Balhara Creation",
}).addTo(map);

// Adding a marker object for our present/live location.
const markers = {};

socket.on("recieve-location", (data) => {
  const { id, latitude, longitude } = data;
  map.setView([latitude, longitude], 15);

  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
