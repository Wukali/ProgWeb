const canvas = document.getElementById("canvas");
        canvas.width = 500;
        canvas.height = 300;
        const context = canvas.getContext("2d");

        function drawSquare(x, y, color) {
            context.fillStyle = color;
            context.fillRect(x, y, 50, 50);
        }

        function drawQuadrados() {
            context.strokeStyle = "black";
            context.strokeRect(10, 10, 10, 10);

            context.fillStyle = "black";
            context.fillRect(canvas.width - 30, 10, 20, 20);

            context.strokeStyle = "green";
            context.strokeRect(10, canvas.height - 40, 30, 30);

            context.fillStyle = "rgb(200, 0, 100)";
            context.fillRect(canvas.width - 60, canvas.height - 60, 50, 50);
        }

        drawQuadrados();