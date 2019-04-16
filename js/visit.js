
//// MAP VISIT_US
//
function initMap() {
    var grit = {
        lat: 40.354101,
        lng: -74.6616664
    };
    var map = new google.maps.Map(document.getElementById('mapv'), {
        zoom: 14,
        center: grit
    });

    var markerImage = 'img/logopoint.png';

   
    
     var contentString = '<div class="info-window">' +
            '<h3>Grit + Polish</h3>' +
            '<div class="info-content">' +
            '<p>160 Witherspoon Street, Princeton, NJ 08542</p>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 300
        });
    
     var marker = new google.maps.Marker({
        position: grit,
        map: map,
        title: 'Grit +',
        icon: markerImage
    });
    
    
     marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
}

//    google.maps.event.addDomListener(window, 'load', initMap);
//});

//$(function () {
//    $(".datepicker").datepicker();
//});

//       $('.selectpicker').selectpicker({
// 
//  size: 4
//});

//$('.selectpicker').selectpicker('val', ['Mustard','Relish']);

$(document).ready(function() {

    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy'
    });
});

//$(".#datepicker").datepicker({
//    defaultDate: +7
//});
