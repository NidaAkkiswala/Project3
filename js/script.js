$(document).ready(function(){
      $('.slider').bxSlider();
    });
	
function initMap() {
	map = new google.maps.Map(document.getElementById('canvas'), {
		center: {lat: 41.91049356042488, lng: -87.6772077410209},
		zoom: 15;
	};
	
	const home = new google.maps.Marker({
		postion: {lat: 42.0524416425546, lng: -87.75200353075955},
		map,
		icon: 'images/house.png'
		animation: google.map.Animation.DROP,
		title: "Home"
	});
	
	const homeinfo = '<h1>My Home</h1><p>No place better than a good home</p>';
	
	const houseWindow = new google.maps.InfoWindow({
		content: homeinfo,
	})
	
	home.addListener("click", () {
		houseWindow.open(map, home);
	})
}

google.maps.event.addDomListener(window, 'load', initMap);
		
	

