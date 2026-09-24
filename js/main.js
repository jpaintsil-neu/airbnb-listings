function MainModule(listingsID = "#listings") {
  const me = {};


  const listingsElement = document.querySelector(listingsID);
  const searchForm = document.querySelector("#search-form");
  const searchInput = document.querySelector("#search-input");

  let loadedListings = [];

  function getListingCode(listing) {
    const amenities = JSON.parse(listing.amenities).slice(0, 6);
    const amenitiesHTML = amenities
      .map((amenity) => `<span class="amenity">${amenity}</span>`)
      .join("");
    return `<div class="col-4">
  <div class="listing card">
    <img
  src="${listing.picture_url}"
  class="card-img-top"
  alt="${listing.name}"
  onerror="this.onerror=null; this.src='images/placeholder.svg';"
/>
    <div class="card-body">
      <h2 class="card-title">${listing.name}</h2>
      <div>${listing.price}</div>
      <p class="card-text">
  ${listing.description}
</p>
<div class="amenities-section">
  <h3 class="h6">Amenities</h3>

  <div class="amenities-list">
    ${amenitiesHTML}
  </div>
</div>
<div class="host-info">
  <img
    src="${listing.host_picture_url}"
    alt="Host ${listing.host_name}"
    class="host-photo"
    onerror="this.onerror=null; this.src='images/placeholder.svg';"
  />

  <span>
    Hosted by ${listing.host_name}
  </span>
</div>
      <a
  href="${listing.listing_url}"
  class="btn btn-primary"
  target="_blank"
  rel="noopener noreferrer"
>
  View Listing
</a>
    </div>
  </div>
  <!-- /card -->
  </div>

  `;
  }

  function redraw(listings) {
    listingsElement.innerHTML = "";
    // for (let i = 0; i < listings.length; i++) {
    //   listingsElement.innerHTML += getListingCode(listings[i]);
    // }

    // for (let listing of listings) {
    //   console.log("listing", listing );
    //   listingsElement.innerHTML += getListingCode(listing);
    // }

    listingsElement.innerHTML = listings.map(getListingCode).join("\n");
  }

  async function loadData() {
    const res = await fetch("./airbnb_sf_listings_500.json");
    const listings = await res.json();


    loadedListings = listings.slice(0, 50);
    me.redraw(loadedListings);
  }

  me.redraw = redraw;
  me.loadData = loadData;

  function searchListings(event) {
    event.preventDefault();

    const searchTerm = searchInput.value
      .trim()
      .toLowerCase();

    const filteredListings = loadedListings.filter((listing) => {
      const name = listing.name?.toLowerCase() || "";
      const neighborhood =
        listing.neighbourhood_cleansed?.toLowerCase() || "";

      return (
        name.includes(searchTerm) ||
        neighborhood.includes(searchTerm)
      );
    });

    me.redraw(filteredListings);
  }

  searchForm.addEventListener("submit", searchListings);

  return me;
}

const main = MainModule();


main.loadData();