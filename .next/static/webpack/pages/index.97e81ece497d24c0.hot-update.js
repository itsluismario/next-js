"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ProductList/ProductList */ \"./components/ProductList/ProductList.tsx\");\n/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Loading/Loading */ \"./components/Loading/Loading.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [productList, setProductList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.fetch(\"/api/avo\").then((response)=>response.json()).then((param)=>{\n            let { data  } = param;\n            setProductList(data);\n        });\n    }, []);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        setTimeout(()=>{\n            try {\n                setLoading(false);\n            } catch (error) {\n                setError(error);\n            }\n        }, 1000);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"\\uD83E\\uDD51 Est\\xe1 muy guay\"\n            }, void 0, false, {\n                fileName: \"/Users/itsluismario/Documents/CS/FullStack/next-js/pages/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_3__.Loading, {}, void 0, false, {\n                fileName: \"/Users/itsluismario/Documents/CS/FullStack/next-js/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                products: productList\n            }, void 0, false, {\n                fileName: \"/Users/itsluismario/Documents/CS/FullStack/next-js/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/itsluismario/Documents/CS/FullStack/next-js/pages/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HomePage, \"jFAsDYjl53Fx6RkWJemtfkTQ8+M=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ1c7QUFDUDtBQUV0RCxNQUFNSyxXQUFXLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZ0IsR0FBR0wsK0NBQVFBLENBQWEsRUFBRTtJQUc5REQsZ0RBQVNBLENBQUMsSUFBTTtRQUNaTyxPQUFPQyxLQUFLLENBQUMsWUFDWkMsSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxTQUFZO2dCQUFYLEVBQUNHLEtBQUksRUFBQztZQUNiTixlQUFlTTtRQUNmO0lBQ0osR0FBRyxFQUFFO0lBR0wsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdmLHFEQUFjLENBQUMsSUFBSTtJQUNqRCxNQUFNLENBQUNnQixPQUFPQyxTQUFTLEdBQUdqQixxREFBYyxDQUFDLEtBQUs7SUFFOUNBLHNEQUFlLENBQUMsSUFBTTtRQUNsQmtCLFdBQVcsSUFBTTtZQUNiLElBQUk7Z0JBQ0FILFdBQVcsS0FBSztZQUNwQixFQUFFLE9BQU1DLE9BQU87Z0JBQ1hDLFNBQVNEO1lBQ2I7UUFFSixHQUFHO0lBQ1A7SUFHQSxxQkFDSSw4REFBQ0c7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDaEIsZ0VBQU9BOzs7OzswQkFDUiw4REFBQ0QsMkVBQVdBO2dCQUFDa0IsVUFBVWY7Ozs7Ozs7Ozs7OztBQUduQztHQW5DTUQ7S0FBQUE7QUFxQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJ0Bjb21wb25lbnRzL1Byb2R1Y3RMaXN0L1Byb2R1Y3RMaXN0J1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCJAY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmdcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdCBdID0gdXNlU3RhdGU8VFByb2R1Y3RbXT4oW10pXG5cbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuZmV0Y2goJy9hcGkvYXZvJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgc2V0UHJvZHVjdExpc3QoZGF0YSlcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9LCAxMDAwKVxuICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT7wn6WRIEVzdMOhIG11eSBndWF5PC9oMT5cbiAgICAgICAgICAgIDxMb2FkaW5nLz5cbiAgICAgICAgICAgIDxQcm9kdWN0TGlzdCBwcm9kdWN0cz17cHJvZHVjdExpc3R9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdExpc3QiLCJMb2FkaW5nIiwiSG9tZVBhZ2UiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0Iiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInNldFRpbWVvdXQiLCJkaXYiLCJoMSIsInByb2R1Y3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});