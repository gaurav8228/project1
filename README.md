# Airbnb Clone

> A full-stack Airbnb-style web application to list, search, and book accommodations. Built with Node.js, Express, MongoDB, EJS (server-rendered views) and MapLibre/MapTiler for map integration.

---

## Table of Contents

* [Project Overview](#project-overview)
* [Live Demo](#live-demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Quick Start (Local Development)](#quick-start-local-development)
* [Environment Variables (.env)](#environment-variables-env)
* [Database & Seeding](#database--seeding)
* [Testing](#testing)
* [Deployment](#deployment)
* [Troubleshooting / Common Issues](#troubleshooting--common-issues)
* [Roadmap / To-do](#roadmap--to-do)
* [Contributing](#contributing)
* [License](#license)

---

## Project Overview

This project is an Airbnb-like platform where users can:

* Create an account and authenticate (register / login / logout)
* Create, read, update and delete property listings
* Upload images for listings (local or cloud storage)
* View listings on a map and use location search
* Leave reviews for listings

The project focuses on learning full-stack development concepts including RESTful routing, authentication, file uploads, geocoding, and map integration.

## Live Demo

> Add your demo URL here (if deployed). Example: `https://your-app.herokuapp.com`

## Features

* User authentication (passport/local or custom)
* CRUD for Listings (title, description, price, images, location)
* Image upload (multer + Cloudinary or local storage)
* Geocoding to convert address → coordinates
* Map display for listing (MapLibre + MapTiler / Mapbox style tiles)
* Reviews and ratings
* Flash messages for success/error feedback
* Responsive UI (Bootstrap)

## Tech Stack

* Backend: Node.js, Express
* Database: MongoDB + Mongoose
* Templating: EJS
* Authentication: passport.js (or custom)
* File upload: multer (+ Cloudinary recommended)
* Maps: MapLibre GL JS + MapTiler (or Mapbox) for base maps
* Hosting: Heroku / Render / Vercel (server)

## Prerequisites

* Node.js (>= 18 recommended)
* npm or yarn
* MongoDB (Atlas or local)
* (Optional) Cloudinary account for image hosting
* (Optional) MapTiler account / API key for map tiles

## Quick Start (Local Development)

1. Clone the repo

```bash
git clone https://github.com/your-username/airbnb-clone.git
cd airbnb-clone
```

2. Install dependencies

```bash
npm install
# or
# yarn
```

3. Create a `.env` file in the project root (see the next section for the required variables)

4. Start the dev server

```bash
npm run dev
# or
# NODE_ENV=development node app.js
```

5. Open `http://localhost:3000` in your browser (or the port shown in your console).

## Environment Variables (.env)

Create a `.env` file with values similar to the following:

```
PORT=3000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-db-name?retryWrites=true&w=majority
SESSION_SECRET=somesecretvalue
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPTILER_API_KEY=your_maptiler_or_mapbox_key
```

**Notes:**

* If you don't want to use Cloudinary, configure multer to save files locally (see `uploads/` example in the code).
* `MAPTILER_API_KEY` is required for MapLibre styles that use MapTiler tiles. If you use Mapbox instead, set your Mapbox token.

## Database & Seeding

* The app uses MongoDB with Mongoose models (`User`, `Listing`, `Review`, etc.).
* A `seeds/` script (if included) helps populate the DB with example listings for development.

To run a seed script:

```bash
node seeds/seed.js
```

## Running Tests

> Add test commands if you have unit/integration tests. For example, if using Jest:

```bash
npm test
```

## Deployment

### Heroku / Render / Railway

1. Push to your Git repo (GitHub/GitLab)
2. Connect the repo to your hosting provider
3. Set environment variables on the host (DATABASE_URL, SESSION_SECRET, CLOUDINARY_* and MAPTILER_API_KEY)
4. Make sure your `start` script in `package.json` launches the server (e.g. `node app.js`)

### Static Assets

* If serving images locally in production, ensure your host supports persistent filesystem or switch to Cloudinary/S3.

## Troubleshooting / Common Issues

* **Map not displaying**: Check `MAPTILER_API_KEY` and confirm you are using a compatible style URL for MapLibre. Example style:

  ```js
  const style = `https://api.maptiler.com/maps/streets/style.json?key=${process.env.MAPTILER_API_KEY}`
  ```
* **`listing.geometry` undefined**: Ensure geocoding returns coordinates and you save them to the `geometry` field as `{ type: 'Point', coordinates: [lng, lat] }` in the Listing document.
* **Image upload issues**: If using multer + Cloudinary, ensure Cloudinary credentials are correct and you have added the `storage` configuration used by your upload middleware.
* **Session / Login not persistent**: Confirm `express-session` is configured with a secret and that cookies are being set. Also ensure you are not blocking cookies in the browser.

## Roadmap / To-do

* Payment integration (Stripe)
* Booking calendar / availability
* Advanced search and filters
* User roles (host / admin)
* API endpoints for a frontend SPA or mobile app

## Contributing

Thanks for checking this project out! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes and open a pull request

Please open issues for bugs or feature requests.

## License

This project is available under the MIT License. See the `LICENSE` file for details.

---

### Helpful Links & Notes

* MapLibre: [https://maplibre.org/](https://maplibre.org/)
* MapTiler: [https://www.maptiler.com/](https://www.maptiler.com/) (style JSONs, API keys)
* Cloudinary docs for Node: [https://cloudinary.com/documentation/node_integration](https://cloudinary.com/documentation/node_integration)

---

*If you want, I can also generate a short `CONTRIBUTING.md`, sample `.env.example`, or a GitHub Actions deployment workflow — tell me which and I will add it.*
