/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/auth.tsx":
/*!**************************!*\
  !*** ./context/auth.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/firebase */ \"./lib/firebase.ts\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/firestore */ \"@firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_1__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_lib_firebase__WEBPACK_IMPORTED_MODULE_1__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)(undefined);\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_lib_firebase__WEBPACK_IMPORTED_MODULE_1__.auth, async (firebaseUser)=>{\n            if (firebaseUser) {\n                const ref = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_1__.db, `users/${firebaseUser.uid}`);\n                const snap = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(ref);\n                if (snap.exists()) {\n                    const appUser = (await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(ref)).data();\n                    setUser(appUser);\n                } else {\n                    const appUser = {\n                        id: firebaseUser.uid,\n                        name: firebaseUser.displayName\n                    };\n                    (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)(ref, appUser).then(()=>{\n                        setUser(appUser);\n                    });\n                }\n            } else {\n                setUser(null);\n            }\n            return unsubscribe;\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: user,\n        children: children\n    }, void 0, false, {\n        fileName: \"/usr/src/app/context/auth.tsx\",\n        lineNumber: 47,\n        columnNumber: 12\n    }, undefined);\n};\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(AuthContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F1dGgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFFZ0I7QUFDUDtBQU9wQztBQUlmLE1BQU1VLDRCQUFjSixvREFBYUEsQ0FBa0JLO0FBRTVDLE1BQU1DLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQTJCO0lBQzlELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUE7SUFFaENELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsY0FBY1gsaUVBQWtCQSxDQUFDTCwrQ0FBSUEsRUFBRSxPQUFPaUI7WUFDbEQsSUFBSUEsY0FBYztnQkFDaEIsTUFBTUMsTUFBTWhCLHdEQUFHQSxDQUFDRCw2Q0FBRUEsRUFBRSxDQUFDLE1BQU0sRUFBRWdCLGFBQWFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNQyxPQUFPLE1BQU1qQiwyREFBTUEsQ0FBQ2U7Z0JBRTFCLElBQUlFLEtBQUtDLE1BQU0sSUFBSTtvQkFDakIsTUFBTUMsVUFBVSxDQUFDLE1BQU1uQiwyREFBTUEsQ0FBQ2UsSUFBRyxFQUFHSyxJQUFJO29CQUN4Q1IsUUFBUU87Z0JBQ1YsT0FBTztvQkFDTCxNQUFNQSxVQUFnQjt3QkFDcEJFLElBQUlQLGFBQWFFLEdBQUc7d0JBQ3BCTSxNQUFNUixhQUFhUyxXQUFXO29CQUNoQztvQkFFQXRCLDJEQUFNQSxDQUFDYyxLQUFLSSxTQUFTSyxJQUFJLENBQUM7d0JBQ3hCWixRQUFRTztvQkFDVjtnQkFDRjtZQUNGLE9BQU87Z0JBQ0xQLFFBQVE7WUFDVjtZQUVBLE9BQU9DO1FBQ1Q7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ04sWUFBWWtCLFFBQVE7UUFBQ0MsT0FBT2Y7a0JBQU9EOzs7Ozs7QUFDN0MsRUFBRTtBQUVLLE1BQU1pQixVQUFVLElBQU12QixpREFBVUEsQ0FBQ0csYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL2NvbnRleHQvYXV0aC50c3g/OGMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCJAL2xpYi9maXJlYmFzZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAL3R5cGVzL3VzZXJcIjtcbmltcG9ydCB7IGRvYywgZ2V0RG9jLCBzZXREb2MgfSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7XG4gIFJlYWN0Tm9kZSxcbiAgY3JlYXRlQ29udGV4dCxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgVXNlckNvbnRleHRUeXBlID0gVXNlciB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxVc2VyQ29udGV4dFR5cGU+KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkgPT4ge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJDb250ZXh0VHlwZT4oKTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIGFzeW5jIChmaXJlYmFzZVVzZXIpID0+IHtcbiAgICAgICAgaWYgKGZpcmViYXNlVXNlcikge1xuICAgICAgICAgIGNvbnN0IHJlZiA9IGRvYyhkYiwgYHVzZXJzLyR7ZmlyZWJhc2VVc2VyLnVpZH1gKTtcbiAgICAgICAgICBjb25zdCBzbmFwID0gYXdhaXQgZ2V0RG9jKHJlZik7XG4gIFxuICAgICAgICAgIGlmIChzbmFwLmV4aXN0cygpKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBVc2VyID0gKGF3YWl0IGdldERvYyhyZWYpKS5kYXRhKCkgYXMgVXNlcjtcbiAgICAgICAgICAgIHNldFVzZXIoYXBwVXNlcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcFVzZXI6IFVzZXIgPSB7XG4gICAgICAgICAgICAgIGlkOiBmaXJlYmFzZVVzZXIudWlkLFxuICAgICAgICAgICAgICBuYW1lOiBmaXJlYmFzZVVzZXIuZGlzcGxheU5hbWUhLFxuICAgICAgICAgICAgfTtcbiAgXG4gICAgICAgICAgICBzZXREb2MocmVmLCBhcHBVc2VyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlcihhcHBVc2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICB9XG4gIFxuICAgICAgICByZXR1cm4gdW5zdWJzY3JpYmU7XG4gICAgICB9KTtcbiAgICB9LCBbXSk7XG4gIFxuICAgIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbiAgfTtcbiAgXG4gIGV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gICJdLCJuYW1lcyI6WyJhdXRoIiwiZGIiLCJkb2MiLCJnZXREb2MiLCJzZXREb2MiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXV0aENvbnRleHQiLCJ1bmRlZmluZWQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwidW5zdWJzY3JpYmUiLCJmaXJlYmFzZVVzZXIiLCJyZWYiLCJ1aWQiLCJzbmFwIiwiZXhpc3RzIiwiYXBwVXNlciIsImRhdGEiLCJpZCIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsInRoZW4iLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/auth.tsx\n");

/***/ }),

/***/ "./lib/env.ts":
/*!********************!*\
  !*** ./lib/env.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FIREBASE_API_KEY: () => (/* binding */ FIREBASE_API_KEY),\n/* harmony export */   FIREBASE_APP_ID: () => (/* binding */ FIREBASE_APP_ID),\n/* harmony export */   FIREBASE_AUTH_DOMAIN: () => (/* binding */ FIREBASE_AUTH_DOMAIN),\n/* harmony export */   FIREBASE_MEASUREMENT_ID: () => (/* binding */ FIREBASE_MEASUREMENT_ID),\n/* harmony export */   FIREBASE_MESSAGING_SENDER_ID: () => (/* binding */ FIREBASE_MESSAGING_SENDER_ID),\n/* harmony export */   FIREBASE_PROJECT_ID: () => (/* binding */ FIREBASE_PROJECT_ID),\n/* harmony export */   FIREBASE_STORAGE_BUCKET: () => (/* binding */ FIREBASE_STORAGE_BUCKET)\n/* harmony export */ });\nconst FIREBASE_API_KEY = \"AIzaSyDJEB85NsuvqXfA7qlKeGMZ609vNtDozvk\" || 0;\nconst FIREBASE_AUTH_DOMAIN = \"myapp-aa682.firebaseapp.com\" || 0;\nconst FIREBASE_PROJECT_ID = \"myapp-aa682\" || 0;\nconst FIREBASE_STORAGE_BUCKET = \"myapp-aa682.appspot.com\" || 0;\nconst FIREBASE_MESSAGING_SENDER_ID = \"396409254024\" || 0;\nconst FIREBASE_APP_ID = \"1:396409254024:web:e08d83cefbd8f2d1282f3d\" || 0;\nconst FIREBASE_MEASUREMENT_ID = \"G-WWQVMBWDGM\" || 0;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZW52LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxtQkFBbUJDLHlDQUF1QyxJQUFJLEVBQUc7QUFDdkUsTUFBTUcsdUJBQXVCSCw2QkFBMkMsSUFBSSxFQUFHO0FBQy9FLE1BQU1LLHNCQUFzQkwsYUFBMEMsSUFBSSxFQUFHO0FBQzdFLE1BQU1PLDBCQUEwQlAseUJBQThDLElBQUksRUFBRztBQUNyRixNQUFNUywrQkFBK0JULGNBQWtELElBQUksRUFBRztBQUM5RixNQUFNVyxrQkFBa0JYLDJDQUFzQyxJQUFJLEVBQUc7QUFDckUsTUFBTWEsMEJBQTBCYixjQUE4QyxJQUFJLEVBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9saWIvZW52LnRzPzkzZjIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZJUkVCQVNFX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElLRVkgfHwgJyc7XG5leHBvcnQgY29uc3QgRklSRUJBU0VfQVVUSF9ET01BSU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIRE9NQUlOIHx8ICcnO1xuZXhwb3J0IGNvbnN0IEZJUkVCQVNFX1BST0pFQ1RfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUSUQgfHwgJyc7XG5leHBvcnQgY29uc3QgRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFQlVDS0VUIHx8ICcnO1xuZXhwb3J0IGNvbnN0IEZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdTRU5ERVJJRCB8fCAnJztcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9BUFBfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBJRCB8fCAnJztcbmV4cG9ydCBjb25zdCBGSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FQVNVUkVNRU5USUQgfHwgJyc7XG5cbiJdLCJuYW1lcyI6WyJGSVJFQkFTRV9BUElfS0VZIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSUtFWSIsIkZJUkVCQVNFX0FVVEhfRE9NQUlOIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSERPTUFJTiIsIkZJUkVCQVNFX1BST0pFQ1RfSUQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUSUQiLCJGSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VCVUNLRVQiLCJGSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lEIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HU0VOREVSSUQiLCJGSVJFQkFTRV9BUFBfSUQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBJRCIsIkZJUkVCQVNFX01FQVNVUkVNRU5UX0lEIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVBU1VSRU1FTlRJRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/env.ts\n");

/***/ }),

/***/ "./lib/firebase.ts":
/*!*************************!*\
  !*** ./lib/firebase.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env */ \"./lib/env.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// import { getFirestore } from \"firebase/firestore\";\n// import { getAuth } from \"firebase/auth\";\n// import { initializeApp } from 'firebase/app';\n\n\n\n// import { getApp, getApps, initializeApp } from 'firebase/app'\n\nconsole.log(\"API Key:\", _env__WEBPACK_IMPORTED_MODULE_3__.FIREBASE_API_KEY);\nconst firebaseConfig = {\n    apiKey: _env__WEBPACK_IMPORTED_MODULE_3__.FIREBASE_API_KEY,\n    authDomain: _env__WEBPACK_IMPORTED_MODULE_3__.FIREBASE_AUTH_DOMAIN,\n    projectId: _env__WEBPACK_IMPORTED_MODULE_3__.FIREBASE_PROJECT_ID,\n    storageBucket: _env__WEBPACK_IMPORTED_MODULE_3__.FIREBASE_STORAGE_BUCKET,\n    messagingSenderId: _env__WEBPACK_IMPORTED_MODULE_3__.FIREBASE_MESSAGING_SENDER_ID,\n    appId: _env__WEBPACK_IMPORTED_MODULE_3__.FIREBASE_APP_ID,\n    measurementId: _env__WEBPACK_IMPORTED_MODULE_3__.FIREBASE_MEASUREMENT_ID\n};\nif (!(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)()?.length) {\n    (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n}\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig); // Initialize Firebase\n // const app = initializeApp(firebaseConfig);\n // export const initializeFirebaseApp = () =>\n //   !getApps().length ? initializeApp(firebaseConfig) : getApp()\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEscURBQXFEO0FBQ3JELDJDQUEyQztBQUMzQyxnREFBZ0Q7QUFFTTtBQUNKO0FBQ1Y7QUFHeEMsZ0VBQWdFO0FBVWpEO0FBRWRXLFFBQVFDLEdBQUcsQ0FBQyxZQUFZUixrREFBZ0JBO0FBRXpDLE1BQU1TLGlCQUFpQjtJQUNyQkMsUUFBUVYsa0RBQWdCQTtJQUN4QlcsWUFBWVYsc0RBQW9CQTtJQUNoQ1csV0FBV1YscURBQW1CQTtJQUM5QlcsZUFBZVYseURBQXVCQTtJQUN0Q1csbUJBQW1CViw4REFBNEJBO0lBQy9DVyxPQUFPVixpREFBZUE7SUFDdEJXLGVBQWVWLHlEQUF1QkE7QUFDeEM7QUFHQSxJQUFJLENBQUNULHFEQUFPQSxJQUFJb0IsUUFBUTtJQUN0QnJCLDJEQUFhQSxDQUFDYTtBQUNoQjtBQUVPLE1BQU1TLE9BQU9uQixzREFBT0EsR0FBRztBQUN2QixNQUFNb0IsS0FBS3JCLGdFQUFZQSxHQUFHO0FBQ2pDLE1BQU1zQixNQUFNeEIsMkRBQWFBLENBQUNhLGlCQVExQixzQkFBc0I7Q0FDdEIsNkNBQTZDO0NBRzdDLDZDQUE2QztDQUM3QyxpRUFBaUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9saWIvZmlyZWJhc2UudHM/NWQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuLy8gaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG4vLyBpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcblxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgZ2V0QXBwcyB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5cbi8vIGltcG9ydCB7IGdldEFwcCwgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCdcblxuaW1wb3J0IHtcbiAgRklSRUJBU0VfQVBJX0tFWSxcbiAgRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gIEZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIEZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICBGSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxuICBGSVJFQkFTRV9BUFBfSUQsXG4gIEZJUkVCQVNFX01FQVNVUkVNRU5UX0lEXG4gfSBmcm9tICcuL2VudidcblxuIGNvbnNvbGUubG9nKFwiQVBJIEtleTpcIiwgRklSRUJBU0VfQVBJX0tFWSk7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IEZJUkVCQVNFX0FQSV9LRVksXG4gIGF1dGhEb21haW46IEZJUkVCQVNFX0FVVEhfRE9NQUlOLFxuICBwcm9qZWN0SWQ6IEZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IEZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICBtZXNzYWdpbmdTZW5kZXJJZDogRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgYXBwSWQ6IEZJUkVCQVNFX0FQUF9JRCxcbiAgbWVhc3VyZW1lbnRJZDogRklSRUJBU0VfTUVBU1VSRU1FTlRfSURcbn07XG5cblxuaWYgKCFnZXRBcHBzKCk/Lmxlbmd0aCkge1xuICBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5cblxuXG5cblxuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG4vLyBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuXG4vLyBleHBvcnQgY29uc3QgaW5pdGlhbGl6ZUZpcmViYXNlQXBwID0gKCkgPT5cbi8vICAgIWdldEFwcHMoKS5sZW5ndGggPyBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6IGdldEFwcCgpIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBcHBzIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0QXV0aCIsIkZJUkVCQVNFX0FQSV9LRVkiLCJGSVJFQkFTRV9BVVRIX0RPTUFJTiIsIkZJUkVCQVNFX1BST0pFQ1RfSUQiLCJGSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQiLCJGSVJFQkFTRV9BUFBfSUQiLCJGSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCIsImNvbnNvbGUiLCJsb2ciLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJsZW5ndGgiLCJhdXRoIiwiZGIiLCJhcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/firebase.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/auth */ \"./context/auth.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_auth__WEBPACK_IMPORTED_MODULE_2__]);\n_context_auth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/usr/src/app/pages/_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 6\n    }, this);\n} // export default function App({ Component, pageProps }: AppProps) {\n //   return <Component {...pageProps} />\n // }\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBS2lCO0FBRS9CLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0csOERBQUNILHVEQUFZQTtrQkFDWiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc3QixFQUtELG9FQUFvRTtDQUNwRSx3Q0FBd0M7Q0FDeEMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbi8vIGltcG9ydCB7IGluaXRpYWxpemVGaXJlYmFzZUFwcCB9IGZyb20gJ0AvbGliL2ZpcmViYXNlJ1xuaW1wb3J0IHsgZ2V0QXBwLCBnZXRBcHBzLCBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJ1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9hdXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xuIH1cbiBcblxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4vLyAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyB9XG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@firebase/firestore");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();