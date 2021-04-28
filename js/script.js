$(document).ready(function(){
      $('.slider').bxSlider();
    });
	
function initMap(): {
	const myLatLng = {lat: 42.052648121921564, lng: -87.75195584135642}
	
	const map = new google.maps.Map{
		document.getElementById("map") as HTMLElement,
		{
			zoom: 4,
			center: myLatLng,
		}
	};
	
	new google.maps.Marker({
		postion: myLatLng,
		map,
		title: "home",
	});
}
		
	

