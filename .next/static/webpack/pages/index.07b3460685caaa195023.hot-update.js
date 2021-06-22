/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: 'CinemaHub',\n  description: \"CinemaHub is a movie database application built to share detailed information about any movie. The user can filter through categories to seek information about a variety of movies. The user can click on a movie, and it shows a summary of the movie, the actors involved, the trailer, and ability to comment the user's thoughts.\",\n  image: '/images/cinemahub.png',\n  tags: ['React', 'Express', 'JavaScript', 'Node'],\n  source: 'https://cinemahub.netlify.app/',\n  visit: 'https://github.com/steventejeda/cinemahub',\n  id: 0\n}, {\n  title: 'Pathfinding Visualizer',\n  description: \"At its core, a pathfinding algorithm seeks to find the shortest path between two points. This application visualizes the A* Search Algorithm and I plan on implementing more algorithms as I continue to learn them at a deeper understanding.\",\n  image: '/images/pf.png',\n  tags: ['React', 'JavaScript', 'CSS'],\n  source: 'https://pathfinding-hodgkin-14bb43.netlify.app/',\n  visit: 'https://github.com/steventejeda/pathfinding-visualizer',\n  id: 1\n}, {\n  title: 'Cryptocurrency Price Tracker',\n  description: \"Simple and clean crypto currency tracker built using React.js, JavaScript & CSS3. Utilizing the coingecko API to search for your favorite coins!\",\n  image: '/images/crypto.jpg',\n  tags: ['React', 'JavaScript', 'CSS'],\n  source: 'https://crypto-00202.netlify.app/',\n  visit: 'https://github.com/steventejeda/cryptocurrencytracker',\n  id: 2\n}, {\n  title: 'React-Pokedex',\n  description: \"This app uses the Pokemon API to generate different types of pokemon and displays their stats. You can click on the PokemonCard components and they are flipped over using a custom hook called useFlip. You can add and delete pokemon\",\n  image: '/images/react-pokedex.jpg',\n  tags: ['React', 'ChatEngine', 'Firebase'],\n  source: 'https://epic-borg-b84437.netlify.app/',\n  visit: 'https://github.com/steventejeda/Pokedex_React/tree/main/pokedex_app',\n  id: 3\n}, {\n  title: 'Expense Tracker',\n  description: \"App was built using HTML, CSS, JavaScript along with React Hooks and Context API. Keep track of income and expenses. Add and remove transactions and save to local storage!\",\n  image: '/images/react-pokedex.jpg',\n  tags: ['React', 'JavaScript', 'HTML', 'CSS'],\n  source: 'https://wonderful-beaver-8ebd66.netlify.app/',\n  visit: 'https://github.com/steventejeda/expense-tracker',\n  id: 4\n}, {\n  title: 'React Movie App',\n  description: \"You can browse movies by searching for titles. If you hover over with your mouse an overview will slide up and have a brief synopsis about the movie. The API has 10's of thousands movie titles you can browse from.\",\n  image: '/images/movie.jpeg',\n  tags: ['React', 'JavaScript', 'HTML', 'CSS'],\n  source: 'https://wonderful-beaver-8ebd66.netlify.app/',\n  visit: 'https://github.com/steventejeda/expense-tracker',\n  id: 5\n}];\nvar TimeLineData = [{\n  year: 2020,\n  text: 'Enrolled in Springboards Software Engineering Career Track'\n}, {\n  year: 2021,\n  text: 'Graduated with a Certificate of completion. Currently building projects and solving dymanic problems.'\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsd1VBRmY7QUFHSUMsT0FBSyxFQUFFLHVCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLFlBQXJCLEVBQW1DLE1BQW5DLENBSlY7QUFLRUMsUUFBTSxFQUFFLGdDQUxWO0FBTUVDLE9BQUssRUFBRSwyQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTixPQUFLLEVBQUUsd0JBRFQ7QUFFRUMsYUFBVyxFQUFDLGdQQUZkO0FBR0VDLE9BQUssRUFBRSxnQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixLQUF4QixDQUpSO0FBS0VDLFFBQU0sRUFBRSxpREFMVjtBQU1FQyxPQUFLLEVBQUUsd0RBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FWc0IsRUFtQnRCO0FBQ0VOLE9BQUssRUFBRSw4QkFEVDtBQUVFQyxhQUFXLEVBQUUsa0pBRmY7QUFHSUMsT0FBSyxFQUFFLG9CQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxZQUFWLEVBQXdCLEtBQXhCLENBSlY7QUFLRUMsUUFBTSxFQUFFLG1DQUxWO0FBTUVDLE9BQUssRUFBRSx1REFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQW5Cc0IsRUE0QnRCO0FBQ0VOLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSx5T0FGZjtBQUdFQyxPQUFLLEVBQUUsMkJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsdUNBTFY7QUFNRUMsT0FBSyxFQUFFLHFFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUJzQixFQXFDdEI7QUFDRU4sT0FBSyxFQUFFLGlCQURUO0FBRUVDLGFBQVcsRUFBRSw2S0FGZjtBQUdFQyxPQUFLLEVBQUUsMkJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsTUFBeEIsRUFBZ0MsS0FBaEMsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsOENBTFY7QUFNRUMsT0FBSyxFQUFFLGlEQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBckNzQixFQThDdEI7QUFDRU4sT0FBSyxFQUFFLGlCQURUO0FBRUVDLGFBQVcsRUFBRSx1TkFGZjtBQUdFQyxPQUFLLEVBQUUsb0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsTUFBeEIsRUFBZ0MsS0FBaEMsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsOENBTFY7QUFNRUMsT0FBSyxFQUFFLGlEQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBOUNzQixDQUFqQjtBQXlEQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixDQUFyQiIsImZpbGUiOiIuL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdDaW5lbWFIdWInLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNpbmVtYUh1YiBpcyBhIG1vdmllIGRhdGFiYXNlIGFwcGxpY2F0aW9uIGJ1aWx0IHRvIHNoYXJlIGRldGFpbGVkIGluZm9ybWF0aW9uIGFib3V0IGFueSBtb3ZpZS4gVGhlIHVzZXIgY2FuIGZpbHRlciB0aHJvdWdoIGNhdGVnb3JpZXMgdG8gc2VlayBpbmZvcm1hdGlvbiBhYm91dCBhIHZhcmlldHkgb2YgbW92aWVzLiBUaGUgdXNlciBjYW4gY2xpY2sgb24gYSBtb3ZpZSwgYW5kIGl0IHNob3dzIGEgc3VtbWFyeSBvZiB0aGUgbW92aWUsIHRoZSBhY3RvcnMgaW52b2x2ZWQsIHRoZSB0cmFpbGVyLCBhbmQgYWJpbGl0eSB0byBjb21tZW50IHRoZSB1c2VyJ3MgdGhvdWdodHMuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvY2luZW1haHViLnBuZycsXG4gICAgICB0YWdzOiBbJ1JlYWN0JywgJ0V4cHJlc3MnLCAnSmF2YVNjcmlwdCcsICdOb2RlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9jaW5lbWFodWIubmV0bGlmeS5hcHAvJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zdGV2ZW50ZWplZGEvY2luZW1haHViJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUGF0aGZpbmRpbmcgVmlzdWFsaXplcicsXG4gICAgZGVzY3JpcHRpb246XCJBdCBpdHMgY29yZSwgYSBwYXRoZmluZGluZyBhbGdvcml0aG0gc2Vla3MgdG8gZmluZCB0aGUgc2hvcnRlc3QgcGF0aCBiZXR3ZWVuIHR3byBwb2ludHMuIFRoaXMgYXBwbGljYXRpb24gdmlzdWFsaXplcyB0aGUgQSogU2VhcmNoIEFsZ29yaXRobSBhbmQgSSBwbGFuIG9uIGltcGxlbWVudGluZyBtb3JlIGFsZ29yaXRobXMgYXMgSSBjb250aW51ZSB0byBsZWFybiB0aGVtIGF0IGEgZGVlcGVyIHVuZGVyc3RhbmRpbmcuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3BmLnBuZycsXG4gICAgdGFnczogWydSZWFjdCcsICdKYXZhU2NyaXB0JywgJ0NTUyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vcGF0aGZpbmRpbmctaG9kZ2tpbi0xNGJiNDMubmV0bGlmeS5hcHAvJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zdGV2ZW50ZWplZGEvcGF0aGZpbmRpbmctdmlzdWFsaXplcicsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0NyeXB0b2N1cnJlbmN5IFByaWNlIFRyYWNrZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNpbXBsZSBhbmQgY2xlYW4gY3J5cHRvIGN1cnJlbmN5IHRyYWNrZXIgYnVpbHQgdXNpbmcgUmVhY3QuanMsIEphdmFTY3JpcHQgJiBDU1MzLiBVdGlsaXppbmcgdGhlIGNvaW5nZWNrbyBBUEkgdG8gc2VhcmNoIGZvciB5b3VyIGZhdm9yaXRlIGNvaW5zIVwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NyeXB0by5qcGcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdKYXZhU2NyaXB0JywgJ0NTUyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vY3J5cHRvLTAwMjAyLm5ldGxpZnkuYXBwLycsXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vc3RldmVudGVqZWRhL2NyeXB0b2N1cnJlbmN5dHJhY2tlcicsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1JlYWN0LVBva2VkZXgnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIHVzZXMgdGhlIFBva2Vtb24gQVBJIHRvIGdlbmVyYXRlIGRpZmZlcmVudCB0eXBlcyBvZiBwb2tlbW9uIGFuZCBkaXNwbGF5cyB0aGVpciBzdGF0cy4gWW91IGNhbiBjbGljayBvbiB0aGUgUG9rZW1vbkNhcmQgY29tcG9uZW50cyBhbmQgdGhleSBhcmUgZmxpcHBlZCBvdmVyIHVzaW5nIGEgY3VzdG9tIGhvb2sgY2FsbGVkIHVzZUZsaXAuIFlvdSBjYW4gYWRkIGFuZCBkZWxldGUgcG9rZW1vblwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9yZWFjdC1wb2tlZGV4LmpwZycsXG4gICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9lcGljLWJvcmctYjg0NDM3Lm5ldGxpZnkuYXBwLycsXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vc3RldmVudGVqZWRhL1Bva2VkZXhfUmVhY3QvdHJlZS9tYWluL3Bva2VkZXhfYXBwJyxcbiAgICBpZDogMyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRXhwZW5zZSBUcmFja2VyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJBcHAgd2FzIGJ1aWx0IHVzaW5nIEhUTUwsIENTUywgSmF2YVNjcmlwdCBhbG9uZyB3aXRoIFJlYWN0IEhvb2tzIGFuZCBDb250ZXh0IEFQSS4gS2VlcCB0cmFjayBvZiBpbmNvbWUgYW5kIGV4cGVuc2VzLiBBZGQgYW5kIHJlbW92ZSB0cmFuc2FjdGlvbnMgYW5kIHNhdmUgdG8gbG9jYWwgc3RvcmFnZSFcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvcmVhY3QtcG9rZWRleC5qcGcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCcsICdIVE1MJywgJ0NTUyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vd29uZGVyZnVsLWJlYXZlci04ZWJkNjYubmV0bGlmeS5hcHAvJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zdGV2ZW50ZWplZGEvZXhwZW5zZS10cmFja2VyJyxcbiAgICBpZDogNCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUmVhY3QgTW92aWUgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJZb3UgY2FuIGJyb3dzZSBtb3ZpZXMgYnkgc2VhcmNoaW5nIGZvciB0aXRsZXMuIElmIHlvdSBob3ZlciBvdmVyIHdpdGggeW91ciBtb3VzZSBhbiBvdmVydmlldyB3aWxsIHNsaWRlIHVwIGFuZCBoYXZlIGEgYnJpZWYgc3lub3BzaXMgYWJvdXQgdGhlIG1vdmllLiBUaGUgQVBJIGhhcyAxMCdzIG9mIHRob3VzYW5kcyBtb3ZpZSB0aXRsZXMgeW91IGNhbiBicm93c2UgZnJvbS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvbW92aWUuanBlZycsXG4gICAgdGFnczogWydSZWFjdCcsICdKYXZhU2NyaXB0JywgJ0hUTUwnLCAnQ1NTJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly93b25kZXJmdWwtYmVhdmVyLThlYmQ2Ni5uZXRsaWZ5LmFwcC8nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL3N0ZXZlbnRlamVkYS9leHBlbnNlLXRyYWNrZXInLFxuICAgIGlkOiA1LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnRW5yb2xsZWQgaW4gU3ByaW5nYm9hcmRzIFNvZnR3YXJlIEVuZ2luZWVyaW5nIENhcmVlciBUcmFjaycsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ0dyYWR1YXRlZCB3aXRoIGEgQ2VydGlmaWNhdGUgb2YgY29tcGxldGlvbi4gQ3VycmVudGx5IGJ1aWxkaW5nIHByb2plY3RzIGFuZCBzb2x2aW5nIGR5bWFuaWMgcHJvYmxlbXMuJywgfSxcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});