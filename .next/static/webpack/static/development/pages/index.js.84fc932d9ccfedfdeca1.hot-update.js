webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/fetcher */ "./helpers/fetcher.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Coding\\TestTaskByDevelopsToday\\Blog\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    text-align: center;\n    border-radius: 5px;\n    margin: 15px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    text-align: center;\n    list-style-type: none;\n    padding: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    color: blue;\n    padding-right: 10px;\n    padding-left: 10px;\n    cursor: pointer;\n\n    &:hover {\n        color: red;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    font-family: roboto;\n    text-align: center;\n    display: block;\n    margin-top: 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Title = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h1(_templateObject());
var LinkStyle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].a(_templateObject2());
var StyledWrapperUL = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].ul(_templateObject3());
var StyledWrapperLI = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].li(_templateObject4());

var Index = function Index(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Latest Posts"), __jsx(StyledWrapperUL, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.posts.map(function (post) {
    return __jsx(StyledWrapperLI, {
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/posts/[id]",
      as: "/posts/".concat(post.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(LinkStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, post.title)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, post.body));
  })));
};

Index.getInitialProps = function _callee(Context) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _helpers_fetcher__WEBPACK_IMPORTED_MODULE_5__["get"]());

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.84fc932d9ccfedfdeca1.hot-update.js.map