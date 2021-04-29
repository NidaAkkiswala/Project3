var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
  center: {lat: 41.91049356042488, lng: -87.6772077410209},
  zoom: 16,
  });

  //HTML content
  const myopicBooksInfo = '<div class="googleMapsInfo"><h1>Myopic Books</h1><p>One of my favorite bookstores and with a great selection of books and helpful staff. Every time I go to Wicker Park I check in here and look around.</p></div>';
  const bloomingdaleTrailInfo = '<div class="googleMapsInfo"><h1>Bloomingdale Trail</h1><p>This is a nice trail and there is also a nice park here. I like to walk done this trail when it is nice out!</p></div>';
  const recklessRecordsInfo = '<div class="googleMapsInfo"><h1>Reckless Records</h1><p>This is a small record store on Milwaukee Ave that I have only been to a few times, but it seems like a cool place.</p></div>';

  //Icons
  const book = {
      url: "images/book.png",
      scaledSize: new google.maps.Size(32, 32)
  };

  const walk = {
      url: "images/walk.png",
      scaledSize: new google.maps.Size(32, 32)
  };

  const record = {
      url: "images/record.png",
      scaledSize: new google.maps.Size(32, 32)
  }
    
  //Markers
  const myopicBooks = new google.maps.Marker ({
    position: {lat: 41.909846755346486, lng: -87.67686253940002},
    map,
    icon: book,
    animation: google.maps.Animation.DROP,
    title: "Myopic Books",
  });

  const bloomingdaleTrail = new google.maps.Marker ({
    position: {lat: 41.91435042077941, lng: -87.6769028662957},
    map,
    icon: walk,
    animation: google.maps.Animation.DROP,
    title: "Bloomingdale Trail",
  });

  const recklessRecords = new google.maps.Marker ({
      position: {lat: 41.90707058258586, lng: -87.67183484651618},
      map,
      icon: record,
      animation: google.maps.Animation.DROP,
      title: "Reckless Records"
  });

  //Windows
  const myopicBooksWindow = new google.maps.InfoWindow ({
      content: myopicBooksInfo,
  })

  const bloomingdaleTrailWindow = new google.maps.InfoWindow ({
      content: bloomingdaleTrailInfo,
  })

  const recklessRecordsWindow = new google.maps.InfoWindow ({
      content: recklessRecordsInfo,
  })

  //Click Listeners
  myopicBooks.addListener("click", () => {
      myopicBooksWindow.open(map, myopicBooks);
  })

  bloomingdaleTrail.addListener("click", () => {
      bloomingdaleTrailWindow.open(map, bloomingdaleTrail)
  })

  recklessRecords.addListener("click", () => {
      recklessRecordsWindow.open(map, recklessRecords)
  })
}