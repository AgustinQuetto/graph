module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-load-script */ "react-load-script");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static getInitialProps({
    req
  }) {
    return {
      graphData: req.graphData
    };
  }

  makeGraph() {
    const elem = document.getElementById('3d-graph');
    const Graph = ForceGraph3D()(elem).graphData(this.props.graphData).nodeLabel('id').nodeAutoColorBy('group').onNodeHover(node => elem.style.cursor = node ? 'pointer' : null).onNodeClick(node => {
      // Aim at node from outside it
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      Graph.cameraPosition({
        x: node.x * distRatio,
        y: node.y * distRatio,
        z: node.z * distRatio
      }, // new position
      node, // lookAt ({ x, y, z })
      3000 // ms transition duration
      );
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "3d-graph",
      className: "jsx-363332710"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_2___default.a, {
      url: "https://unpkg.com/3d-force-graph@1.52.0/dist/3d-force-graph.min.js",
      onLoad: this.makeGraph.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "363332710"
    }, "body{margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWd1c3RpblxcRG9jdW1lbnRzXFxHaXRIdWJcXGdyYXBoXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNrQyxBQUlVLFdBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxBZ3VzdGluXFxEb2N1bWVudHNcXEdpdEh1YlxcZ3JhcGhcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTY3JpcHQgZnJvbSAncmVhY3QtbG9hZC1zY3JpcHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuICAgIHJldHVybiB7IGdyYXBoRGF0YTogcmVxLmdyYXBoRGF0YX1cbiAgfVxuXG4gIG1ha2VHcmFwaCgpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzNkLWdyYXBoJyk7XG4gICAgY29uc3QgR3JhcGggPSBGb3JjZUdyYXBoM0QoKVxuICAgICAgKGVsZW0pXG4gICAgICAgIC5ncmFwaERhdGEodGhpcy5wcm9wcy5ncmFwaERhdGEpXG4gICAgICAgIC5ub2RlTGFiZWwoJ2lkJylcbiAgICAgICAgLm5vZGVBdXRvQ29sb3JCeSgnZ3JvdXAnKVxuICAgICAgICAub25Ob2RlSG92ZXIobm9kZSA9PiBlbGVtLnN0eWxlLmN1cnNvciA9IG5vZGUgPyAncG9pbnRlcicgOiBudWxsKVxuICAgICAgICAub25Ob2RlQ2xpY2sobm9kZSA9PiB7XG4gICAgICAgICAgLy8gQWltIGF0IG5vZGUgZnJvbSBvdXRzaWRlIGl0XG4gICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSA0MDtcbiAgICAgICAgICBjb25zdCBkaXN0UmF0aW8gPSAxICsgZGlzdGFuY2UvTWF0aC5oeXBvdChub2RlLngsIG5vZGUueSwgbm9kZS56KTtcblxuICAgICAgICAgIEdyYXBoLmNhbWVyYVBvc2l0aW9uKFxuICAgICAgICAgICAgeyB4OiBub2RlLnggKiBkaXN0UmF0aW8sIHk6IG5vZGUueSAqIGRpc3RSYXRpbywgejogbm9kZS56ICogZGlzdFJhdGlvIH0sIC8vIG5ldyBwb3NpdGlvblxuICAgICAgICAgICAgbm9kZSwgLy8gbG9va0F0ICh7IHgsIHksIHogfSlcbiAgICAgICAgICAgIDMwMDAgIC8vIG1zIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgaWQ9XCIzZC1ncmFwaFwiPjwvZGl2PlxuICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgdXJsPVwiaHR0cHM6Ly91bnBrZy5jb20vM2QtZm9yY2UtZ3JhcGhAMS41Mi4wL2Rpc3QvM2QtZm9yY2UtZ3JhcGgubWluLmpzXCJcbiAgICAgICAgICBvbkxvYWQ9e3RoaXMubWFrZUdyYXBoLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PVwidHJ1ZVwiPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweFxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IFxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=C:\\Users\\Agustin\\Documents\\GitHub\\graph\\pages\\index.js */"));
  }

});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Agustin\Documents\GitHub\graph\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-load-script":
/*!************************************!*\
  !*** external "react-load-script" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-load-script");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map