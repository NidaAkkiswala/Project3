var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}
	
function initMap() {
	var el = document.getElementById('canvas');
	var myLatLng = new google.maps.LatLng(42.052648121921564, -87.75195584135642);
	var MapOptions = {
		center: myLatLng,
		zoom: 10
	};
	
	var myMap = new google.maps.Map(el, MapOptions);
	
	
	var marker = new google.maps.Marker({
		postion: myLatLng,
		map: myMap,
		icon: 'images/house.png'
	});
	
	var contentString = '<h1>My Home</h1><p>No place better than a good home</p>';
	
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	google.maps.event.addListener(marker, 'mouseover', function() {
		infowindow.open(myMap, marker);
	});
}

google.maps.event.addDomListener(window, 'load', initMap);
		
	

