webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./helpers/fetcher.tsx":
/*!*****************************!*\
  !*** ./helpers/fetcher.tsx ***!
  \*****************************/
/*! exports provided: get, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

function get() {
  return axios.get("https://simple-blog-api.crew.red/posts").then(function (response) {
    return {
      posts: response.data
    };
  })["catch"](function (error) {
    console.log(error);
  });
}
function post(title, body) {
  return axios.post("https://simple-blog-api.crew.red/posts", {
    title: title,
    body: body
  }).then(function () {
    alert('Post successfully added!');
  })["catch"](function (error) {
    console.log(error);
  });
}

/***/ })

})
//# sourceMappingURL=index.js.d52533118158b2ba7ebb.hot-update.js.map