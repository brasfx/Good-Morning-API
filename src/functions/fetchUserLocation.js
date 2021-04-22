export default async function fetchUserLocation() {
  const response = await fetch('https://ipapi.co/json/');

  const userLocation = await response.json();

  const user = await userLocation.city;

  return user;
}
