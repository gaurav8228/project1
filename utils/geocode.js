import { config, geocoding } from "@maptiler/client";

config.apiKey = "v3Okb1uxbGtOPK3dDcCW";

export async function getCoordinates(locationName) {
  try {
    const response = await geocoding.forward(locationName);

    if (!response.features || response.features.length === 0) return null;

    const [lng, lat] = response.features[0].geometry.coordinates;
    return { lat, lng };
  } catch (err) {
    console.error("Geocoding error:", err);
    return null;
  }
}
