(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "../../node_modules/geotiff/dist-module/compression/webimage.js":
/*!***************************************************************************************************!*\
  !*** /Users/staffordsmith/dev/TerriaMap/node_modules/geotiff/dist-module/compression/webimage.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WebImageDecoder; });\n/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basedecoder.js */ \"../../node_modules/geotiff/dist-module/compression/basedecoder.js\");\n\n\n/**\n * class WebImageDecoder\n *\n * This decoder uses the browsers image decoding facilities to read image\n * formats like WebP when supported.\n */\nclass WebImageDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    if (typeof createImageBitmap === 'undefined') {\n      throw new Error('Cannot decode WebImage as `createImageBitmap` is not available');\n    } else if (typeof document === 'undefined' && typeof OffscreenCanvas === 'undefined') {\n      throw new Error('Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available');\n    }\n  }\n\n  async decode(fileDirectory, buffer) {\n    const blob = new Blob([buffer]);\n    const imageBitmap = await createImageBitmap(blob);\n\n    let canvas;\n    if (typeof document !== 'undefined') {\n      canvas = document.createElement('canvas');\n      canvas.width = imageBitmap.width;\n      canvas.height = imageBitmap.height;\n    } else {\n      canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);\n    }\n\n    const ctx = canvas.getContext('2d');\n    ctx.drawImage(imageBitmap, 0, 0);\n\n    // TODO: check how many samples per pixel we have, and return RGB/RGBA accordingly\n    // it seems like GDAL always encodes via RGBA which does not require a translation\n\n    return ctx.getImageData(0, 0, imageBitmap.width, imageBitmap.height).data.buffer;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvY29tcHJlc3Npb24vd2ViaW1hZ2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3N0YWZmb3Jkc21pdGgvZGV2L1RlcnJpYU1hcC9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9jb21wcmVzc2lvbi93ZWJpbWFnZS5qcz81ZTg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlRGVjb2RlciBmcm9tICcuL2Jhc2VkZWNvZGVyLmpzJztcblxuLyoqXG4gKiBjbGFzcyBXZWJJbWFnZURlY29kZXJcbiAqXG4gKiBUaGlzIGRlY29kZXIgdXNlcyB0aGUgYnJvd3NlcnMgaW1hZ2UgZGVjb2RpbmcgZmFjaWxpdGllcyB0byByZWFkIGltYWdlXG4gKiBmb3JtYXRzIGxpa2UgV2ViUCB3aGVuIHN1cHBvcnRlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViSW1hZ2VEZWNvZGVyIGV4dGVuZHMgQmFzZURlY29kZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICh0eXBlb2YgY3JlYXRlSW1hZ2VCaXRtYXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWNvZGUgV2ViSW1hZ2UgYXMgYGNyZWF0ZUltYWdlQml0bWFwYCBpcyBub3QgYXZhaWxhYmxlJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBPZmZzY3JlZW5DYW52YXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWNvZGUgV2ViSW1hZ2UgYXMgbmVpdGhlciBgZG9jdW1lbnRgIG5vciBgT2Zmc2NyZWVuQ2FudmFzYCBpcyBub3QgYXZhaWxhYmxlJyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGVjb2RlKGZpbGVEaXJlY3RvcnksIGJ1ZmZlcikge1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSk7XG4gICAgY29uc3QgaW1hZ2VCaXRtYXAgPSBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcblxuICAgIGxldCBjYW52YXM7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2VCaXRtYXAud2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2VCaXRtYXAuaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKGltYWdlQml0bWFwLndpZHRoLCBpbWFnZUJpdG1hcC5oZWlnaHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VCaXRtYXAsIDAsIDApO1xuXG4gICAgLy8gVE9ETzogY2hlY2sgaG93IG1hbnkgc2FtcGxlcyBwZXIgcGl4ZWwgd2UgaGF2ZSwgYW5kIHJldHVybiBSR0IvUkdCQSBhY2NvcmRpbmdseVxuICAgIC8vIGl0IHNlZW1zIGxpa2UgR0RBTCBhbHdheXMgZW5jb2RlcyB2aWEgUkdCQSB3aGljaCBkb2VzIG5vdCByZXF1aXJlIGEgdHJhbnNsYXRpb25cblxuICAgIHJldHVybiBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGltYWdlQml0bWFwLndpZHRoLCBpbWFnZUJpdG1hcC5oZWlnaHQpLmRhdGEuYnVmZmVyO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/geotiff/dist-module/compression/webimage.js\n");

/***/ })

}]);