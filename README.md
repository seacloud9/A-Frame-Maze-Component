## aframe-aframe-maze-component

[![Version](http://img.shields.io/npm/v/aframe-aframe-maze-component.svg?style=flat-square)](https://npmjs.org/package/aframe-aframe-maze-component)
[![License](http://img.shields.io/npm/l/aframe-aframe-maze-component.svg?style=flat-square)](https://npmjs.org/package/aframe-aframe-maze-component)

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
| **WALLHEIGHT** | WALLHEIGHT in maze | 250 / 3 |


### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-aframe-maze-component/dist/aframe-aframe-maze-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity aframe-maze="foo: bar"></a-entity>
  </a-scene>
</body>
```

<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install aframe-aframe-maze-component
```
-->

#### npm

Install via npm:

```bash
npm install aframe-aframe-maze-component
```

Then require and use.

```js
require('aframe');
require('aframe-aframe-maze-component');
```
