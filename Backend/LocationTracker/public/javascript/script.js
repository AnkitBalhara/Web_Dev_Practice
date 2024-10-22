const socket = io();

if (!navigator.geolocation) {
  alert("Sorry Your Device Doesn't support Location Setting..");
}

navigator.geolocation.watchPosition(
  (position) => {
    // console.log(position)
    const { latitude, longitude } = position.coords;
    socket.emit("send-location", { latitude, longitude });
  },
  (error) => {
    console.log("Error Occured in longitude aand latitude :- ", error);
  },
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }
);

const map = L.map("map").setView([0, 0], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Balhara Creation",
}).addTo(map);

const markers = {};

socket.on("recieve-location", (data) => {
  const { id, longitude, latitude } = data;
  map.setView([latitude, longitude]);
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
