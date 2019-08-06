(function () { 

    var btn = $('.burger');
    var nav = $('.nav');

   btn.on('click', function (){
        btn.toggleClass('burger--active');
        nav.toggleClass('nav--active');

   });

    // var title = $('#projects');
    var burgColor = $('.burger__line');
   
    var waypoints = $('.burger--white').waypoint({
        handler: function (direction) {
            burgColor.toggleClass('burger__line--black');
        }
    })
    var waypoints = $('.burger--black').waypoint({
        handler: function (direction) {
            burgColor.toggleClass('burger__line--black');
        }
    })



    // SLIDER
    $('.slider').slick({
        infinite: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        draggable: false
    });

    $('.news__content').slick({
        infinite: true,
        vertical: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive : [ {
            breakpoint: 900,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 545,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
    });

})();
// MAP

function initMap() {

    var myMap = document.getElementById('map');
    var myCenter = {
        lat: 40.667879,
        lng: -73.890639
    };
    var markerCenter = {
        lat: 40.677531,
        lng: -73.901117
    };
    var mapOptions = {
        zoom: 13,
        center: myCenter,
        styles: [
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "color": "#ebeae8"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffead3"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffebd6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffd6a9"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "weight": 2
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "transit.station.bus",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    }

    var map = new google.maps.Map(myMap, mapOptions);

    var marker = new google.maps.Marker({
        position: markerCenter,
        map: map,
        icon: './img/marker.svg'
    });
}

