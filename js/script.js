$(document).ready(function(){
      $('.slider').bxSlider();
    });
	
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
		
	

