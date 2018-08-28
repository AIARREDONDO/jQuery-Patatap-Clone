(function() {
    var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {

    }
})();

    // Loop to seet the x coordinate and y coordinate to create circles
    // for (var x=0; x < 1000; x += 100){
    //     for(var y = 0; y < 1000; y+= 100){
    //         new Path.Circle(new Point(x, y), 10).fillColor = "yellow";
    //     }
    // }