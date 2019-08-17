webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-load-script */ "./node_modules/react-load-script/lib/index.js");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_7__);









var _default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "makeGraph",
    value: function makeGraph() {
      var elem = document.getElementById('3d-graph');
      var Graph = ForceGraph3D()(elem).graphData(this.props.graphData).nodeLabel('id').nodeAutoColorBy('group').onNodeHover(function (node) {
        return elem.style.cursor = node ? 'pointer' : null;
      }).onNodeClick(function (node) {
        // Aim at node from outside it
        var distance = 40;
        var distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
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
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "3d-graph",
        className: "jsx-363332710"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_7___default.a, {
        url: "https://unpkg.com/3d-force-graph@1.52.0/dist/3d-force-graph.min.js",
        onLoad: this.makeGraph.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "363332710"
      }, "body{margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWd1c3RpblxcRG9jdW1lbnRzXFxHaXRIdWJcXGdyYXBoXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNrQyxBQUlVLFdBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxBZ3VzdGluXFxEb2N1bWVudHNcXEdpdEh1YlxcZ3JhcGhcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTY3JpcHQgZnJvbSAncmVhY3QtbG9hZC1zY3JpcHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuICAgIHJldHVybiB7IGdyYXBoRGF0YTogcmVxLmdyYXBoRGF0YX1cbiAgfVxuXG4gIG1ha2VHcmFwaCgpIHtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzNkLWdyYXBoJyk7XG4gICAgY29uc3QgR3JhcGggPSBGb3JjZUdyYXBoM0QoKVxuICAgICAgKGVsZW0pXG4gICAgICAgIC5ncmFwaERhdGEodGhpcy5wcm9wcy5ncmFwaERhdGEpXG4gICAgICAgIC5ub2RlTGFiZWwoJ2lkJylcbiAgICAgICAgLm5vZGVBdXRvQ29sb3JCeSgnZ3JvdXAnKVxuICAgICAgICAub25Ob2RlSG92ZXIobm9kZSA9PiBlbGVtLnN0eWxlLmN1cnNvciA9IG5vZGUgPyAncG9pbnRlcicgOiBudWxsKVxuICAgICAgICAub25Ob2RlQ2xpY2sobm9kZSA9PiB7XG4gICAgICAgICAgLy8gQWltIGF0IG5vZGUgZnJvbSBvdXRzaWRlIGl0XG4gICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSA0MDtcbiAgICAgICAgICBjb25zdCBkaXN0UmF0aW8gPSAxICsgZGlzdGFuY2UvTWF0aC5oeXBvdChub2RlLngsIG5vZGUueSwgbm9kZS56KTtcblxuICAgICAgICAgIEdyYXBoLmNhbWVyYVBvc2l0aW9uKFxuICAgICAgICAgICAgeyB4OiBub2RlLnggKiBkaXN0UmF0aW8sIHk6IG5vZGUueSAqIGRpc3RSYXRpbywgejogbm9kZS56ICogZGlzdFJhdGlvIH0sIC8vIG5ldyBwb3NpdGlvblxuICAgICAgICAgICAgbm9kZSwgLy8gbG9va0F0ICh7IHgsIHksIHogfSlcbiAgICAgICAgICAgIDMwMDAgIC8vIG1zIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgaWQ9XCIzZC1ncmFwaFwiPjwvZGl2PlxuICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgdXJsPVwiaHR0cHM6Ly91bnBrZy5jb20vM2QtZm9yY2UtZ3JhcGhAMS41Mi4wL2Rpc3QvM2QtZm9yY2UtZ3JhcGgubWluLmpzXCJcbiAgICAgICAgICBvbkxvYWQ9e3RoaXMubWFrZUdyYXBoLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PVwidHJ1ZVwiPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweFxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IFxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=C:\\Users\\Agustin\\Documents\\GitHub\\graph\\pages\\index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req;
      return {
        graphData: req.graphData
      };
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.d6de3775d03fab9eb28c.hot-update.js.map