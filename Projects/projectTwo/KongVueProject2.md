http://kongvue.com/Project02/project02index.html

<!DOCTYPE html>
<html>
	<head>
		<title>Kong Vue Project 2</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<style>
			html, body {
				height: 100%;
				overflow: hidden;
				background-color: black;
				background-image: url(img1.jpg);
			}
			#blocker {
				position: absolute;
				/* background-color: rgba(255, 0, 0, 0.5); */
				top: 0px;
				left: 0px;
				width: 100%;
				height: 100%;
			}
		</style>
	</head>
	<body>
		<script src="three.js"></script>
		<script src="TrackballControls.js"></script>
		<script src="CSS3DRenderer.js"></script>

		<div id="container"></div>
		<div id="blocker"></div>

		<script>
			var camera, scene, renderer;
			var controls;

			//create the faces of the cube 
			var Element = function ( id, x, y, z, ry, rx) {
				//create a space for the faces
				var div = document.createElement( 'div' );
				//set the width and height of the div
				div.style.width = '480px';
				div.style.height = '480px';
				div.style.backgroundColor = '#000';

				//create an iframe for the video
				var iframe = document.createElement( 'iframe' );
				//set the seize for iframe
				iframe.style.width = '480px';
				iframe.style.height = '480px';
				iframe.style.border = '0px';
				iframe.src = [ 'https://www.youtube.com/embed/', id, '?rel=0' ].join( '' );
				//add iframe into the div
				div.appendChild( iframe );
				//create an three.js css3d object
				var object = new THREE.CSS3DObject( div );
				object.position.set( x, y, z );
				object.rotation.y = ry;
				object.rotation.x = rx;
				console.log(object.rotation.x);
				//object.rotation.y = rx;

				return object;
			};



			init();
			animate();


			function init() {
				var container = document.getElementById( 'container' );
				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
				camera.position.set( 1500, 1350, 1750 );
				scene = new THREE.Scene();
				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.domElement.style.position = 'absolute';
				renderer.domElement.style.top = 0;
				container.appendChild( renderer.domElement );

				var group = new THREE.Group();
										//id,         x,   y,   z,  ry, rx 
				group.add( new Element( 'xRqueGV1r5w', 0, 240, 0, 0, -Math.PI / 2) );//top
				group.add( new Element( 'K2sqPEvJOs4', 0, -240, 0, 0, -Math.PI / 2) );//bot
				group.add( new Element( '1SudJSJm2Q4', 0, 0, 240, 0, 0) );
				group.add( new Element( 'SgFrl-KwyPs', 240, 0, 0, Math.PI / 2, 0 ) );
				group.add( new Element( '_Rwlbf0wnE8', 0, 0, - 240, Math.PI, 0 ) );
				group.add( new Element( '0Djg5z2FHoI', - 240, 0, 0, - Math.PI / 2, 0 ) );
				scene.add( group );

				var group2 = new THREE.Group();
										//id,         x,   y,   z,  ry, rx 
				group.add( new Element( 'g-gp-Voq6MQ', 0, 480, 0, 0, -Math.PI / 2) );//top
				group.add( new Element( 'RKYjdTiMkXM', 0, -480, 0, 0, -Math.PI / 2) );//bot
				group.add( new Element( 'UkdsGeJxDcA', 0, 0, 480, 0, 0) );
				group.add( new Element( 'twZggnNbFqo', 480, 0, 0, Math.PI / 2, 0 ) );
				group.add( new Element( '_SBpBd-USw8', 0, 0, - 480, Math.PI, 0 ) );
				group.add( new Element( 'kRH385-XpFI', - 480, 0, 0, - Math.PI / 2, 0 ) );
				scene.add( group2 );


				var group3 = new THREE.Group();
										//id,         x,   y,   z,  ry, rx 
				group.add( new Element( 'mW6hFttt_KE', 0, 960, 0, 0, -Math.PI / 2) );//top
				group.add( new Element( 'k0DN-BZrM4o', 0, -960, 0, 0, -Math.PI / 2) );//bot
				group.add( new Element( 'bq6bYRUcf-A', 0, 0, 960, 0, 0) );
				group.add( new Element( 'Hg6L_7qLIEQ', 960, 0, 0, Math.PI / 2, 0 ) );
				group.add( new Element( 'GNWatifmMRE', 0, 0, - 960, Math.PI, 0 ) );
				group.add( new Element( 'ez-Et0rV8Tk', - 960, 0, 0, - Math.PI / 2, 0 ) );
				scene.add( group3 );



				controls = new THREE.TrackballControls( camera );
				controls.rotateSpeed = 2;

				window.addEventListener( 'resize', onWindowResize, false );
				// Block iframe events when dragging camera
				var blocker = document.getElementById( 'blocker' );
				blocker.style.display = 'none';
				document.addEventListener( 'mousedown', function () { blocker.style.display = ''; } );
				document.addEventListener( 'mouseup', function () { blocker.style.display = 'none'; } );
			}


			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}


			
			function animate() {
				requestAnimationFrame( animate );
				controls.update();
				renderer.render( scene, camera );
			}
		</script>
	</body>
</html>