attribute vec2 position;
attribute vec2 direction;
attribute vec2 textureCoord;
attribute float offsetMul;
uniform float offset;
uniform vec2 arrowsize;
uniform vec2 size;
uniform vec2 screen;
uniform float exc;
uniform float aspect2;
uniform mat4 transform;
varying vec2 tc;