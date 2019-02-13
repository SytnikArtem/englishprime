
function initialize() {
  var latlng = new google.maps.LatLng(50.426659,30.538397);
  var latlng2 = new google.maps.LatLng(50.501415,30.500371);
  var latlng3 = new google.maps.LatLng(50.501415,30.500371);
  var latlng4 = new google.maps.LatLng(50.501415,30.500371);
  var latlng5 = new google.maps.LatLng(50.501415,30.500371);
  var latlng6 = new google.maps.LatLng(50.501415,30.500371);
  var latlng7 = new google.maps.LatLng(50.501415,30.500371);
  var styleMap = [
      {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 65
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": "50"
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [
              {
                  "lightness": "30"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [
              {
                  "lightness": "40"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#232d41"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
              {
                  "lightness": -25
              },
              {
                  "saturation": "-69"
              },
              {
                  "color": "#232d41"
              },
              {
                  "gamma": "2.63"
              }
          ]
      }
  ];
  var myOptions = {
    zoom: 10,
    center: latlng,
    scrollwheel: false,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
    styles: styleMap
  };

  var myOptions2 =  {
    zoom: 10,
    center: latlng2,
    scrollwheel: false,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
      styles: styleMap
  };

    var myOptions3 =  {
        zoom: 10,
        center: latlng3,
        scrollwheel: false,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        styles: styleMap
    };
    var myOptions4 =  {
        zoom: 10,
        center: latlng4,
        scrollwheel: false,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        styles: styleMap
    };
    var myOptions5 =  {
        zoom: 10,
        center: latlng4,
        scrollwheel: false,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        styles: styleMap
    };
    var myOptions6 =  {
        zoom: 10,
        center: latlng4,
        scrollwheel: false,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        styles: styleMap
    };
    var myOptions7 =  {
        zoom: 10,
        center: latlng4,
        scrollwheel: false,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        styles: styleMap
    };

  var map = new google.maps.Map(document.getElementById("map1"), myOptions);
  var map2 = new google.maps.Map(document.getElementById("map2"), myOptions2);
  var map3 = new google.maps.Map(document.getElementById("map3"), myOptions3);
  var map4 = new google.maps.Map(document.getElementById("map4"), myOptions4);
  var map5 = new google.maps.Map(document.getElementById("map5"), myOptions5);
  var map6 = new google.maps.Map(document.getElementById("map6"), myOptions6);
  var map7 = new google.maps.Map(document.getElementById("map7"), myOptions7);

  var myMarker = new google.maps.Marker(
      {
        position: latlng,
        map: map,
        title:"г. Киев, бульвар Л. Украинки, 26",
          icon: {
              url: 'img/pin.png',
              scaledSize: new google.maps.Size(28, 32)
          }
      });

  var myMarker2 = new google.maps.Marker(
      {
        position: latlng2,
        map: map2,
        title:"г. Киев, бульвар Л. Украинки, 26",
          icon: {
              url: 'img/pin.png',
              scaledSize: new google.maps.Size(28, 32)
          }
      });

    var myMarker3 = new google.maps.Marker(
        {
            position: latlng3,
            map: map3,
            title:"г. Киев, бульвар Л. Украинки, 26",
            icon: {
                url: 'img/pin.png',
                scaledSize: new google.maps.Size(28, 32)
            }
        });
    var myMarker4 = new google.maps.Marker(
        {
            position: latlng4,
            map: map4,
            title:"г. Киев, бульвар Л. Украинки, 26",
            icon: {
                url: 'img/pin.png',
                scaledSize: new google.maps.Size(28, 32)
            }
        });
    var myMarker5 = new google.maps.Marker(
        {
            position: latlng5,
            map: map5,
            title:"г. Киев, бульвар Л. Украинки, 26",
            icon: {
                url: 'img/pin.png',
                scaledSize: new google.maps.Size(28, 32)
            }
        });
    var myMarker6 = new google.maps.Marker(
        {
            position: latlng6,
            map: map6,
            title:"г. Киев, бульвар Л. Украинки, 26",
            icon: {
                url: 'img/pin.png',
                scaledSize: new google.maps.Size(28, 32)
            }
        });
    var myMarker7 = new google.maps.Marker(
        {
            position: latlng7,
            map: map7,
            title:"г. Киев, бульвар Л. Украинки, 26",
            icon: {
                url: 'img/pin.png',
                scaledSize: new google.maps.Size(28, 32)
            }
        });
}

google.maps.event.addDomListener(window, 'load', initialize);