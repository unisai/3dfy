<!DOCTYPE HTML>
<html>
  <head>
    <title>WebGL/Three.js</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- <link rel="stylesheet" type="text/css" href="3dmodel.css"/> -->
    <style>
      body {
        margin: 0px;
        background-color: #fff;
        overflow: hidden;
      }
        canvas {
            background-color: #fff;
        }
    </style>
  </head>
  <body>
      <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-8" id="canvasHouse">
                        <div id="myCanvas">
                            <h1>3D Model View</h1>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <section>
                            <article>
                                <h2>Dimensions</h2>
                                <p>X :</p>
                                <p>Y :</p>
                                <p>Z :</p>
                            </article>
                            <article>
                                <h2></h2>
                                <p></p>
                            </article>
                            <article>
                                <h2></h2>
                                <p></p>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </div>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.min.js"></script>
	<script src="js/OBJMTLLoader.js"></script>
	<script src="js/MTLLoader.js"></script>
	<script src="js/OrbitControls.js"></script>
    <script src="3dmodel.js"></script>
  </body>
</html>
