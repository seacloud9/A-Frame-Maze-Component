## aframe-maze-component

[![Version](http://img.shields.io/npm/v/aframe-maze-component.svg?style=flat-square)](https://npmjs.org/package/aframe-maze-component)
[![License](http://img.shields.io/npm/l/aframe-maze-component.svg?style=flat-square)](https://npmjs.org/package/aframe-maze-component)

Quickly build a maze generated enviorment from map multidimentional array

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|**Map**   | Multi-Dimensional Flad 2d Array for creating dungeon |      [ [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],  [1, 1, 0, 0, 0, 0, 0, 1, 1, 1,], [1, 1, 0, 0, 2, 0, 0, 0, 0, 1,], [1, 0, 0, 0, 0, 2, 0, 0, 0, 1,], [1, 0, 0, 2, 0, 0, 2, 0, 0, 1,], [1, 0, 0, 0, 2, 0, 0, 0, 1, 1,], [1, 1, 1, 0, 0, 0, 0, 1, 1, 1,], [1, 1, 1, 0, 0, 1, 0, 0, 1, 1,],[1, 1, 1, 1, 1, 1, 0, 0, 1, 1,], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], 
| **MapW** | width of the map array | 10 |
| **MapH** | height of the map array | 10 |
| **offsetX** | offset of maze x | -200 |
| **offsetZ** | offset of maze z | -100 |
| **healthcube** | health cubes in maze | 5 |
| **UNITSIZE** | UNITSIZE in maze | 250 |
| **wallMaterial** | wall material within the maze | [new THREE.MeshLambertMaterial({/* color: 0x00CCAA,*/map: THREE.ImageUtils.loadTexture('images/wall-1.jpg')}),new THREE.MeshLambertMaterial({/* color: 0xC5EDA0,*/map: THREE.ImageUtils.loadTexture('images/wall-2.jpg')}),new THREE.MeshLambertMaterial({color: 0xFBEBCD, opacity: 0.2})]|
| **floorMaterial** | floor material within the maze | new THREE.MeshLambertMaterial({color: 0xEDCBA0 /* map: t.ImageUtils.loadTexture('images/floor-1.jpg')*/}) |
| **healthCubeMaterial** | healthcube material within the maze | new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('images/health.png')}) |


### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-maze-component/dist/aframe-maze-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity aframe-maze="map:[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [1, 1, 0, 0, 0, 0, 0, 1, 1, 1 ], [1, 1, 0, 0, 2, 0, 0, 0, 0, 1 ], [1, 0, 0, 0, 0, 2, 0, 0, 0, 1 ], [1, 0, 0, 2, 0, 0, 2, 0, 0, 1 ], [1, 0, 0, 0, 2, 0, 0, 0, 1, 1 ], [1, 1, 1, 0, 0, 0, 0, 1, 1, 1 ], [1, 1, 1, 0, 0, 1, 0, 0, 1, 1 ], [1, 1, 1, 1, 1, 1, 0, 0, 1, 1 ], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]]
"></a-entity>
  </a-scene>
</body>
```

<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install aframe-maze-component
```
-->

#### npm

Install via npm:

```bash
npm install https://github.com/seacloud9/A-Frame-Maze-Component
```

Then require and use.

```js
require('aframe');
require('aframe-maze-component');
```
