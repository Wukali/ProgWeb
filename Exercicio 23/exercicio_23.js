$(document).ready(function() {
    var car1Position = 0;
    var car2Position = 0;
    var car1Time = 0;
    var car2Time = 0;
    var raceInProgress = false;
  
    function moveCars() {
      if (car1Position < 700 && car2Position < 700) {
        car1Position += Math.floor(Math.random() * 5) + 1;
        car2Position += Math.floor(Math.random() * 5) + 1;
  
        $('#car1').css('left', car1Position + 'px');
        $('#car2').css('left', car2Position + 'px');
  
        requestAnimationFrame(moveCars);
      } else {
        raceInProgress = false;
        $('#race-btn').prop('disabled', false);
  
        if (car1Position >= 700 && car2Position >= 700) {
          $('#car1-position').text('Carro 1: 1º Lugar');
          $('#car2-position').text('Carro 2: 2º Lugar');
        } else if (car1Position >= 700) {
          $('#car1-position').text('Carro 1: 1º Lugar');
          $('#car2-position').text('Carro 2: 2º Lugar');
        } else if (car2Position >= 700) {
          $('#car1-position').text('Carro 1: 2º Lugar');
          $('#car2-position').text('Carro 2: 1º Lugar');
        }
  
        $('#car1-time').text('Tempo: ' + car1Time + 's');
        $('#car2-time').text('Tempo: ' + car2Time + 's');
      }
    }
  
    $('#start-btn').click(function() {
      car1Position = 0;
      car2Position = 0;
      car1Time = 0;
      car2Time = 0;
      raceInProgress = false;
      $('#car1').css('left', '0');
      $('#car2').css('left', '0');
      $('#car1-position').text('');
      $('#car2-position').text('');
      $('#car1-time').text('');
      $('#car2-time').text('');
      $('#race-btn').prop('disabled', false);
    });
  
    $('#race-btn').click(function() {
      if (!raceInProgress) {
        raceInProgress = true;
        $('#race-btn').prop('disabled', true);
        requestAnimationFrame(moveCars);
        raceTimer();
      }
    });
  
    function raceTimer() {
      if (raceInProgress) {
        car1Time++;
        car2Time++;
        setTimeout(raceTimer, 1000);
      }
    }
  });
  