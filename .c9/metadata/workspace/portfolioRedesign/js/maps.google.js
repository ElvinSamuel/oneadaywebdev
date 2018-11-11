{"filter":false,"title":"maps.google.js","tooltip":"/portfolioRedesign/js/maps.google.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":91,"column":0},"action":"insert","lines":["function initMap() {","    // Styles a map in night mode.","    var map = new google.maps.Map(document.getElementById('map'), {","        center: { lat: 33.7919616, lng: -84.4028351 },","        zoom: 11,","        zoomControl: false,","        mapTypeControl: false,","        streetViewControl: false,","        fullscreenControl: false,","        styles: [","            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },","            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },","            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },","            {","                featureType: 'administrative.locality',","                elementType: 'labels.text.fill',","                stylers: [{ color: '#d59563' }]","            },","            {","                featureType: 'poi',","                elementType: 'labels.text.fill',","                stylers: [{ color: '#d59563' }]","            },","            {","                featureType: 'poi.park',","                elementType: 'geometry',","                stylers: [{ color: '#263c3f' }]","            },","            {","                featureType: 'poi.park',","                elementType: 'labels.text.fill',","                stylers: [{ color: '#6b9a76' }]","            },","            {","                featureType: 'road',","                elementType: 'geometry',","                stylers: [{ color: '#38414e' }]","            },","            {","                featureType: 'road',","                elementType: 'geometry.stroke',","                stylers: [{ color: '#212a37' }]","            },","            {","                featureType: 'road',","                elementType: 'labels.text.fill',","                stylers: [{ color: '#4A0000' }]","            },","            {","                featureType: 'road.highway',","                elementType: 'geometry',","                stylers: [{ color: '#746855' }]","            },","            {","                featureType: 'road.highway',","                elementType: 'geometry.stroke',","                stylers: [{ color: '#4A0000' }]","            },","            {","                featureType: 'road.highway',","                elementType: 'labels.text.fill',","                stylers: [{ color: '#f3d19c' }]","            },","            {","                featureType: 'transit',","                elementType: 'geometry',","                stylers: [{ color: '#2f3948' }]","            },","            {","                featureType: 'transit.station',","                elementType: 'labels.text.fill',","                stylers: [{ color: '#d59563' }]","            },","            {","                featureType: 'water',","                elementType: 'geometry',","                stylers: [{ color: '#808080' }]","            },","            {","                featureType: 'water',","                elementType: 'labels.text.fill',","                stylers: [{ color: '#515c6d' }]","            },","            {","                featureType: 'water',","                elementType: 'labels.text.stroke',","                stylers: [{ color: '#17263c' }]","            }","        ]","    });","}",""],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":21},"end":{"row":3,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1541131968410,"hash":"b47fdb6e0dd72217eb33fa59bfa8484c1618fcf0"}