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


const map = L.map("map").setView([0,0],12)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:"Balhara Creation"
}).addTo(map)