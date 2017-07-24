/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * A-Frame Maze Component component for A-Frame.
 */
AFRAME.registerComponent('aframe-maze', {
  schema: {
    map: {
        default: [ // 1  2  3  4  5  6  7  8  9
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], // 0
            [1, 1, 0, 0, 0, 0, 0, 1, 1, 1,], // 1
            [1, 1, 0, 0, 2, 0, 0, 0, 0, 1,], // 2
            [1, 0, 0, 0, 0, 2, 0, 0, 0, 1,], // 3
            [1, 0, 0, 2, 0, 0, 2, 0, 0, 1,], // 4
            [1, 0, 0, 0, 2, 0, 0, 0, 1, 1,], // 5
            [1, 1, 1, 0, 0, 0, 0, 1, 1, 1,], // 6
            [1, 1, 1, 0, 0, 1, 0, 0, 1, 1,], // 7
            [1, 1, 1, 1, 1, 1, 0, 0, 1, 1,], // 8
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], // 9
        ]
    },
    healthcube:{ default: 5},
    mapW:{ default: 10 },
    mapH:{ default: 10 },
    UNITSIZE: { default: 250 },
      WALLHEIGHT:{
        default:250 / 3
      }
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
      var el = this.el;
      console.log(this.el);
      this.data.SCREEN_WIDTH = window.innerWidth;
      this.data.SCREEN_HEIGHT = window.innerHeight;
      this.data.scene  = this.el.sceneEl.object3D;
      units = this.data.mapW;

      // Geometry: floor
      var floor = new THREE.Mesh(
          new THREE.CubeGeometry(units * this.data.UNITSIZE, 10, units * this.data.UNITSIZE),
          new THREE.MeshLambertMaterial({color: 0xEDCBA0,/*map: t.ImageUtils.loadTexture('images/floor-1.jpg')*/})
      );
      this.data.scene.add(floor);

      // Geometry: walls
      var cube = new THREE.CubeGeometry(this.data.UNITSIZE, this.data.WALLHEIGHT, this.data.UNITSIZE);
      var materials = [
          new THREE.MeshLambertMaterial({/*color: 0x00CCAA,*/map: THREE.ImageUtils.loadTexture('images/wall-1.jpg')}),
          new THREE.MeshLambertMaterial({/*color: 0xC5EDA0,*/map: THREE.ImageUtils.loadTexture('images/wall-2.jpg')}),
          new THREE.MeshLambertMaterial({color: 0xFBEBCD}),
      ];
      console.log(this.data)
      for (var i = 0; i < this.data.mapW; i++) {
          for (var j = 0, m = this.data.map[i].length; j < m; j++) {
              if (this.data.map[i][j]) {
                  var wall = new THREE.Mesh(cube, materials[this.data.map[i][j]-1]);
                  wall.position.x = (i - units/2) * this.data.UNITSIZE;
                  wall.position.y = this.data.WALLHEIGHT/2;
                  wall.position.z = (j - units/2) * this.data.UNITSIZE;
                  console.log(wall)
                  this.data.scene.add(wall);
              }
          }
      }

      // Health cube
      this.data.healthcube = new THREE.Mesh(
          new THREE.CubeGeometry(30, 30, 30),
          new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('images/health.png')})
      );
      this.data.healthcube.position.set(-this.data.UNITSIZE-15, 35, -this.data.UNITSIZE-15);
      this.data.scene.add(this.data.healthcube);

      // Lighting
      var directionalLight1 = new THREE.DirectionalLight( 0xF7EFBE, 0.7 );
      directionalLight1.position.set( 0.5, 1, 0.5 );
      //this.data.scene.add( directionalLight1 );
      var directionalLight2 = new THREE.DirectionalLight( 0xF7EFBE, 0.5 );
      directionalLight2.position.set( -0.5, -1, -0.5 );
      this.data.scene.add( directionalLight2 );

  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) { },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { }
});
