<html>
<h1>Real Time Bus Tracker</h1>
  <p>In this file you will find a simple exercise in which we can move Pacman from one side to the other with Collision Detection. And also opens and closes its mouth. </p>
  <pre>
  <code>
    <html>
    <script>
        var pos = 0;
        let pageWidth = window.innerWidth;
        const pacArray = [
            ['PacMan1.png', 'PacMan2.png'],
            ['PacMan3.png', 'PacMan4.png']
        ];
        var direction = 0;
        var focus = 0;

        function Run() {
            function Start() {
                let img = document.getElementById("PacMan");
                let imgWidth = img.width
                focus = (focus + 1) % 2;
                direction = checkPageBounds(direction, img.style.left);
                img.src = pacArray[direction][focus];
                if (direction) {
                    pos -= 20;
                    img.style.left = pos + "px";
                } else {
                    pos += 20;
                    img.style.left = pos + 'px';
                }
            // Use setTimeout to call Run every 200 millesecs
            console.log(direction);
            console.log(img.style.left +' '+ img.width);
            }
            setInterval(Start,100);
        }

        function checkPageBounds(direction, imgWidth) {
            //
            // Complete this to reverse direction on hitting page bounds
            //
            if(parseInt(imgWidth) > (pageWidth-200)){
                direction = 1;
            }
            if(parseInt(imgWidth) < 20){
                direction = 0;
            }
            return direction;
        }
    </SCRIPT>

    <body>
        <img id="PacMan" src="PacMan1.png" width='200' onclick="Run()" style="position:absolute"> </img>
    </body>  
  </code>
  </pre>
  
  <h1> Usage and Support </h1>
  <p>In order to use this code, you only need to have 4 Pacman images, two from right to left with open and closed mouth and two from left to right with open and closed mouth.</p>
  <p> The program has two functions </p>
  <ul>
    <li>Run() function: This will contain all necessarry logic to move Pacman from one side to the other.</li>
    <li>checkPageBounds() function: This function will check whether Pacman goes forward or reverse according to page width boundaries.</li>
  </ul>
  <p>For more detailed information, contact me at grojas.s@ucb.edu.bo</p>
</html>
