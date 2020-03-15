webpackHotUpdate("static\\development\\pages\\posts\\new.js",{

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
/*! exports provided: New, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "New", function() { return New; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.tsx");
/* harmony import */ var _helpers_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/fetcher */ "./helpers/fetcher.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Coding\\TestTaskByDevelopsToday\\Blog\\pages\\posts\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-right: 10px;\n    padding-right: 10px;\n    border: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 400px;\n    max-width: 100vw;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    cursor: pointer;\n    color: blue;\n    width: 100px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 18px;\n    padding: 10px;\n    margin: 10px;\n    background: papayawhip;\n    border: none;\n    border-radius: 3px;\n    width: 90%;\n    max-width: 100vw;\n    height: 100px;\n    resize: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 18px;\n    padding: 10px;\n    margin: 10px;\n    background: papayawhip;\n    border: none;\n    border-radius: 3px;\n    width: 80%;\n    max-width: 100vw;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-family: roboto;\n    text-align: center;\n    display: block;\n    margin-top: 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Title = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input(_templateObject2());
var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].textarea(_templateObject3());
var Button = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(Input)(_templateObject4());
var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form(_templateObject5());
var New = function New() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    title: '',
    body: ''
  }),
      newPost = _useState[0],
      setNewPost = _useState[1];

  function handleSubmit(event) {
    var title = newPost.title,
        body = newPost.body;
    event.preventDefault();

    if (!title || !body) {
      return setNewPost({
        title: '',
        body: ''
      });
    }

    _helpers_fetcher__WEBPACK_IMPORTED_MODULE_3__["post"](title, body);
    setNewPost({
      title: '',
      body: ''
    });
  }

  function handleChange(event) {
    if (event.target.name === 'title') {
      setNewPost({
        title: event.target.value,
        body: newPost.body
      });
    } else if (event.target.name === 'body') {
      setNewPost({
        title: newPost.title,
        body: event.target.value
      });
    }
  }

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Fill the form below"), __jsx(Form, {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(Input, {
    type: "text",
    name: "title",
    placeholder: "Title",
    value: newPost.title,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(Textarea, {
    name: "body",
    placeholder: "Post",
    value: newPost.body,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx(Button, {
    type: "submit",
    value: "Send",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (New);

/***/ })

})
//# sourceMappingURL=new.js.781b2da2ef037b58cd71.hot-update.js.map