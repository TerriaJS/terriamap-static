((self || window)["webpackJsonp"] = (self || window)["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/geotiff/dist-module/compression/deflate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/deflate.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DeflateDecoder; });\n/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pako */ \"./node_modules/geotiff/node_modules/pako/dist/pako.esm.mjs\");\n/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basedecoder.js */ \"./node_modules/geotiff/dist-module/compression/basedecoder.js\");\n\n\n\nclass DeflateDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  decodeBlock(buffer) {\n    return Object(pako__WEBPACK_IMPORTED_MODULE_0__[\"inflate\"])(new Uint8Array(buffer)).buffer;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9jb21wcmVzc2lvbi9kZWZsYXRlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvY29tcHJlc3Npb24vZGVmbGF0ZS5qcz9mYTYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluZmxhdGUgfSBmcm9tICdwYWtvJztcbmltcG9ydCBCYXNlRGVjb2RlciBmcm9tICcuL2Jhc2VkZWNvZGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmbGF0ZURlY29kZXIgZXh0ZW5kcyBCYXNlRGVjb2RlciB7XG4gIGRlY29kZUJsb2NrKGJ1ZmZlcikge1xuICAgIHJldHVybiBpbmZsYXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpLmJ1ZmZlcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/geotiff/dist-module/compression/deflate.js\n");

/***/ })

}]);