const apiKey = "v3Okb1uxbGtOPK3dDcCW";

const map = new maplibregl.Map({
  container: "map",
  style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
  center: listing.geometry.coordinates, // [lng, lat]
  zoom: 9
});

map.addControl(new maplibregl.NavigationControl());

// -------- CUSTOM ICON MARKER ---------

// Create a custom HTML element for the marker
const el = document.createElement("div");
el.className = "custom-marker";
el.style.backgroundImage = "url('/images/home.png')";
el.style.width = "30px";      // adjust size
el.style.height = "30px";
el.style.backgroundSize = "contain";
el.style.backgroundRepeat = "no-repeat";
el.style.cursor = "pointer";

// Add marker with popup
new maplibregl.Marker({ element: el })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maplibregl.Popup().setHTML(`
      <h4>${listing.location}</h4>
      <p>Exact Location Provided after booking</p>
    `)
  )
  .addTo(map);
