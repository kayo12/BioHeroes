"use strict";
(() => {
var exports = {};
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ useCallApi)
});

;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
;// CONCATENATED MODULE: ./src/pages/api/ApiMC.tsx

function useCallApi() {
    (0,external_react_namespaceObject.useEffect)(()=>{
        fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.API_HASH}`).then((response)=>{
            return response.json();
        }).then((jsonParsed)=>{
            console.log(jsonParsed);
        }).catch((e)=>{
            console.log(e);
        });
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(640));
module.exports = __webpack_exports__;

})();