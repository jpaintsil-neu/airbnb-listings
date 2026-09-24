# Airbnb Listings

The webpage displays the first **50 Airbnb listings** from a provided JSON dataset. The listings are loaded automatically with JavaScript and presented as responsive cards that are easy to browse and search.

## Live Website

**GitHub Pages:**  
https://jpaintsil-neu.github.io/airbnb-listings/

## GitHub Repository

https://github.com/jpaintsil-neu/airbnb-listings

---

## Project Overview

The purpose of this project was to practice loading external data into a webpage using JavaScript.

Instead of manually creating each listing in HTML, the webpage reads the Airbnb data file and automatically creates the first 50 listing cards.

Each listing displays:

- Listing name
- Description
- Price
- Amenities
- Listing photograph
- Host name
- Host photograph
- Link to the original Airbnb listing

The page also includes a **search feature** that allows visitors to filter the displayed listings by listing name or neighborhood.

---

## How It Works

When the webpage opens, JavaScript uses the **Fetch API** with `async` and `await` to load the Airbnb JSON file.

The general process is:

```text
Airbnb JSON data
       ↓
JavaScript Fetch API
       ↓
First 50 listings selected
       ↓
Listing cards created automatically
       ↓
Displayed in the browser
```

The first 50 records are selected using:

```javascript
listings.slice(0, 50)
```

This ensures that exactly 50 listings are initially displayed.

---

## Features

### Dynamic Listing Display

The page automatically creates listing cards from the data rather than requiring each card to be written manually.

### Listing Details

Each card includes the main information needed to understand the property, including its name, price, description, amenities, host, and photographs.

### Search

Visitors can search the 50 loaded listings by:

- Listing name
- Neighborhood

Clearing the search returns the full set of 50 listings.

### Image Fallback

Some older image links in the provided dataset are no longer available.

When an image cannot be loaded, the webpage displays a local **"Image unavailable"** placeholder instead of showing a broken image.

### Responsive Layout

Bootstrap and custom CSS are used so the listing cards adjust to different browser and screen sizes.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- JSON
- Bootstrap 5
- Git and GitHub
- GitHub Pages
- Visual Studio Code

---

## Project Structure

```text
airbnb-listings/
├── index.html
├── airbnb_sf_listings_500.json
├── README.md
├── css/
│   └── main.css
├── images/
│   └── placeholder.svg
└── js/
    └── main.js
```

### Main Files

**`index.html`**  
Contains the basic webpage structure, navigation, search form, and the area where listings are displayed.

**`js/main.js`**  
Loads the Airbnb data, selects the first 50 listings, creates the listing cards, and handles searching.

**`css/main.css`**  
Controls the appearance of the listing cards, images, amenities, and host information.

**`airbnb_sf_listings_500.json`**  
Contains the Airbnb listing data used by the webpage.

**`images/placeholder.svg`**  
Provides a fallback image when an Airbnb image is unavailable.

---

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/jpaintsil-neu/airbnb-listings.git
```

Open the project folder in Visual Studio Code.

Because the webpage uses JavaScript `fetch()` to load the JSON file, it should be opened through a local web server such as the **Live Server** extension in VS Code.

1. Open `index.html`.
2. Right-click the file.
3. Select **Open with Live Server**.

---

## Deployment

The project is published using **GitHub Pages** from the `main` branch.

Live site:

https://jpaintsil-neu.github.io/airbnb-listings/

---

## Starter Code and References

This project was based on the Airbnb Listings example provided in class:

**Professor John Alexis Guerra Gomez — Airbnb Listings Demo Page**  
https://github.com/john-guerra/Airbnb_Listings_demo_page

The provided Airbnb JSON dataset was used as the source of the listing information.

Primary web-development reference:

**MDN Web Docs**  
https://developer.mozilla.org/

Additional documentation:

- Bootstrap: https://getbootstrap.com/
- GitHub Pages: https://docs.github.com/en/pages

---

## Generative AI Disclosure

**Tool:** ChatGPT  
**Model:** GPT-5.6 Sol

ChatGPT was used as a learning and development aid for:

- Clarifying assignment requirements
- Explaining JavaScript, `fetch()`, `async`, and `await`
- Debugging image and file-path problems
- Clarifyinging the search feature implementation
- Git and GitHub guidance

AI-assisted suggestions were reviewed and tested during development.

---

## Author

**John Paintsil**  
CS 5610 — Web Development  
Northeastern University
