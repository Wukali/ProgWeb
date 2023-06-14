var car = document.getElementById("car");
    var bike = document.getElementById("bike");
    var startButton = document.getElementById("start-button");
    var resetButton = document.getElementById("reset-button");
    var winnerMessage = document.getElementById("winner-message");
    var raceStarted = false;
    var carTime = 0;
    var bikeTime = 0;

    startButton.addEventListener("click", function() {
      if (!raceStarted) {
        raceStarted = true;
        startRace();
      }
    });

    resetButton.addEventListener("click", function() {
      resetRace();
    });

    function startRace() {
      var raceContainerWidth = document.querySelector(".race-container").clientWidth;
      var raceTrackWidth = raceContainerWidth - car.clientWidth;
      var carPosition = 0;
      var bikePosition = 0;

      var raceInterval = setInterval(function() {
        carPosition += getRandomSpeed();
        bikePosition += getRandomSpeed();

        car.style.left = (carPosition / 100) * raceTrackWidth + "px";
        bike.style.left = (bikePosition / 100) * raceTrackWidth + "px";

        if (carPosition >= 100 || bikePosition >= 100) {
          endRace(raceInterval);
          determineWinner(carPosition, bikePosition);
        }
      }, 100);
    }

    function resetRace() {
      car.style.left = "0";
      bike.style.left = "0";
      winnerMessage.textContent = "";
      raceStarted = false;
      carTime = 0;
      bikeTime = 0;
    }

    function endRace(interval) {
      clearInterval(interval);
      raceStarted = false;
    }

    function determineWinner(carPosition, bikePosition) {
      var carTimeSeconds = carPosition / 10;
      var bikeTimeSeconds = bikePosition / 10;

      carTime = carTimeSeconds.toFixed(2);
      bikeTime = bikeTimeSeconds.toFixed(2);

      var winnerText = "";
      if (carPosition > bikePosition) {
        winnerText = "Car wins!";
      } else if (bikePosition > carPosition) {
        winnerText = "Bike wins!";
      } else {
        winnerText = "It's a tie!";
      }

      winnerMessage.textContent = `Winner: ${winnerText} | Times - Car: ${carTime}s, Bike: ${bikeTime}s`;
    }

    function getRandomSpeed() {
      return Math.floor(Math.random() * 10) + 5;
    }