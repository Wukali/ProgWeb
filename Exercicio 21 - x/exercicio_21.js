// Variáveis globais
var map;
var markers = [];
var distanceElement;

// Função de inicialização do mapa
function initMap() {
  // Localização inicial (Universidade)
  var initialLocation = {lat: 41.463603819557314, lng: -8.15374541883787};

  // Opções do mapa
  var mapOptions = {
    zoom: 14,
    center: initialLocation
  };

  // Criação do mapa
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Criação do marcador inicial
  var initialMarker = createMarker(initialLocation);

  // Adiciona o marcador inicial à lista de marcadores
  markers.push(initialMarker);

  // Evento de clique no mapa para adicionar novos marcadores
  map.addListener('click', function(event) {
    var clickedLocation = event.latLng;

    // Criação do novo marcador
    var newMarker = createMarker(clickedLocation);

    // Adiciona o novo marcador à lista de marcadores
    markers.push(newMarker);

    // Cálculo da distância entre os marcadores
    calculateDistance();
  });

  // Elemento HTML para exibir a distância
  distanceElement = document.getElementById('distance');
}

// Função para criar um marcador
function createMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    draggable: true
  });

  // Evento de clique no marcador para removê-lo
  marker.addListener('click', function() {
    removeMarker(marker);
  });

  return marker;
}

// Função para remover um marcador
function removeMarker(marker) {
  // Remove o marcador do mapa
  marker.setMap(null);

  // Remove o marcador da lista de marcadores
  var index = markers.indexOf(marker);
  if (index > -1) {
    markers.splice(index, 1);
  }

  // Cálculo da distância entre os marcadores atualizado
  calculateDistance();
}

// Função para calcular a distância entre os marcadores
function calculateDistance() {
  if (markers.length >= 2) {
    var startPoint = markers[markers.length - 2].getPosition();
    var endPoint = markers[markers.length - 1].getPosition();
    var distance = google.maps.geometry.spherical.computeDistanceBetween(startPoint, endPoint);

    // Exibição da distância na página
    distanceElement.innerText = 'Distância entre os marcadores: ' + (distance/1000).toFixed(2) + ' km';
  } else {
    // Limpa o conteúdo da distância se houver menos de 2 marcadores
    distanceElement.innerText = '';
  }
}