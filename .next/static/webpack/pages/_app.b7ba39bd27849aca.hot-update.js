/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./styles/titlebar.module.css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./styles/titlebar.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*utilization of class selectors*/\\r\\n.titlebar_titlebar__Xrbex { \\r\\n    /*general section attributes*/\\r\\n    background: #1f2428;\\r\\n    height: 30px;\\r\\n    padding: 0 0.5rem;\\r\\n    display: flex; /*fills any empty space in the box*/\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    border-bottom: 1px solid #191d20;\\r\\n\\r\\n    /*the words in the element*/\\r\\n    color: #fff; /*refers to text color in the element */\\r\\n    font-family: 'Source Sans Pro', sans-serif;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.titlebar_icon__r0lOL {\\r\\n  display: block;\\r\\n  margin: 0 auto; /*top right bottom left*/\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  padding: 0.65rem 0;\\r\\n}\\r\\n\\r\\n.titlebar_items__G3voI {\\r\\n  flex: 1 1; /*1-3 values*/\\r\\n  display: flex;\\r\\n  margin-right: auto;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.titlebar_items__G3voI p { \\r\\n  display: inline-block;\\r\\n  margin-left: 0.5rem;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.titlebar_title__AMlMh {\\r\\n  flex: 2 1;\\r\\n  text-align: left;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n.titlebar_minimize__QJTmO {\\r\\n  background: #f1fa8c;\\r\\n}\\r\\n\\r\\n.titlebar_maximize__vbeDB {\\r\\n  background: #50fa7b;\\r\\n}\\r\\n\\r\\n.titlebar_close__k5jli {\\r\\n  background: #ff5555;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/titlebar.module.css\"],\"names\":[],\"mappings\":\"AAAA,iCAAiC;AACjC;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,aAAa,EAAE,mCAAmC;IAClD,mBAAmB;IACnB,uBAAuB;IACvB,gCAAgC;;IAEhC,2BAA2B;IAC3B,WAAW,EAAE,uCAAuC;IACpD,0CAA0C;IAC1C,kBAAkB;AACtB;;AAEA;EACE,cAAc;EACd,cAAc,EAAE,wBAAwB;EACxC,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,SAAO,EAAE,aAAa;EACtB,aAAa;EACb,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,SAAO;EACP,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB\",\"sourcesContent\":[\"/*utilization of class selectors*/\\r\\n.titlebar { \\r\\n    /*general section attributes*/\\r\\n    background: #1f2428;\\r\\n    height: 30px;\\r\\n    padding: 0 0.5rem;\\r\\n    display: flex; /*fills any empty space in the box*/\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    border-bottom: 1px solid #191d20;\\r\\n\\r\\n    /*the words in the element*/\\r\\n    color: #fff; /*refers to text color in the element */\\r\\n    font-family: 'Source Sans Pro', sans-serif;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  display: block;\\r\\n  margin: 0 auto; /*top right bottom left*/\\r\\n  height: 25px;\\r\\n  width: 25px;\\r\\n  padding: 0.65rem 0;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  flex: 1; /*1-3 values*/\\r\\n  display: flex;\\r\\n  margin-right: auto;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.items p { \\r\\n  display: inline-block;\\r\\n  margin-left: 0.5rem;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  flex: 2;\\r\\n  text-align: left;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n.minimize {\\r\\n  background: #f1fa8c;\\r\\n}\\r\\n\\r\\n.maximize {\\r\\n  background: #50fa7b;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  background: #ff5555;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"titlebar\": \"titlebar_titlebar__Xrbex\",\n\t\"icon\": \"titlebar_icon__r0lOL\",\n\t\"items\": \"titlebar_items__G3voI\",\n\t\"title\": \"titlebar_title__AMlMh\",\n\t\"minimize\": \"titlebar_minimize__QJTmO\",\n\t\"maximize\": \"titlebar_maximize__vbeDB\",\n\t\"close\": \"titlebar_close__k5jli\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL3RpdGxlYmFyLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxtS0FBK0U7QUFDekg7QUFDQTtBQUNBLDRHQUE0RyxrRUFBa0UscUJBQXFCLDBCQUEwQix1QkFBdUIsZ0VBQWdFLGdDQUFnQyx5Q0FBeUMsNkRBQTZELDJGQUEyRiwyQkFBMkIsS0FBSywrQkFBK0IscUJBQXFCLHNCQUFzQiw0Q0FBNEMsa0JBQWtCLHlCQUF5QixLQUFLLGdDQUFnQyxpQkFBaUIsa0NBQWtDLHlCQUF5Qix3QkFBd0IsS0FBSyxtQ0FBbUMsNEJBQTRCLDBCQUEwQixzQkFBc0IsS0FBSyxnQ0FBZ0MsZ0JBQWdCLHVCQUF1QixzQkFBc0IsS0FBSyxtQ0FBbUMsMEJBQTBCLEtBQUssbUNBQW1DLDBCQUEwQixLQUFLLGdDQUFnQywwQkFBMEIsS0FBSyxPQUFPLGtHQUFrRyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksdUJBQXVCLGFBQWEsYUFBYSxjQUFjLGFBQWEsdUJBQXVCLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxzQkFBc0IsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLG9CQUFvQixXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLDRFQUE0RSxrRUFBa0UscUJBQXFCLDBCQUEwQix1QkFBdUIsZ0VBQWdFLGdDQUFnQyx5Q0FBeUMsNkRBQTZELDJGQUEyRiwyQkFBMkIsS0FBSyxlQUFlLHFCQUFxQixzQkFBc0IsNENBQTRDLGtCQUFrQix5QkFBeUIsS0FBSyxnQkFBZ0IsZUFBZSxrQ0FBa0MseUJBQXlCLHdCQUF3QixLQUFLLG1CQUFtQiw0QkFBNEIsMEJBQTBCLHNCQUFzQixLQUFLLGdCQUFnQixjQUFjLHVCQUF1QixzQkFBc0IsS0FBSyxtQkFBbUIsMEJBQTBCLEtBQUssbUJBQW1CLDBCQUEwQixLQUFLLGdCQUFnQiwwQkFBMEIsS0FBSyxtQkFBbUI7QUFDMzhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3RpdGxlYmFyLm1vZHVsZS5jc3M/OTdmZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyp1dGlsaXphdGlvbiBvZiBjbGFzcyBzZWxlY3RvcnMqL1xcclxcbi50aXRsZWJhcl90aXRsZWJhcl9fWHJiZXggeyBcXHJcXG4gICAgLypnZW5lcmFsIHNlY3Rpb24gYXR0cmlidXRlcyovXFxyXFxuICAgIGJhY2tncm91bmQ6ICMxZjI0Mjg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qZmlsbHMgYW55IGVtcHR5IHNwYWNlIGluIHRoZSBib3gqL1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxOTFkMjA7XFxyXFxuXFxyXFxuICAgIC8qdGhlIHdvcmRzIGluIHRoZSBlbGVtZW50Ki9cXHJcXG4gICAgY29sb3I6ICNmZmY7IC8qcmVmZXJzIHRvIHRleHQgY29sb3IgaW4gdGhlIGVsZW1lbnQgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZWJhcl9pY29uX19yMGxPTCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMCBhdXRvOyAvKnRvcCByaWdodCBib3R0b20gbGVmdCovXFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIHBhZGRpbmc6IDAuNjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlYmFyX2l0ZW1zX19HM3ZvSSB7XFxyXFxuICBmbGV4OiAxIDE7IC8qMS0zIHZhbHVlcyovXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50aXRsZWJhcl9pdGVtc19fRzN2b0kgcCB7IFxcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlYmFyX3RpdGxlX19BTWxNaCB7XFxyXFxuICBmbGV4OiAyIDE7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGViYXJfbWluaW1pemVfX1FKVG1PIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWZhOGM7XFxyXFxufVxcclxcblxcclxcbi50aXRsZWJhcl9tYXhpbWl6ZV9fdmJlREIge1xcclxcbiAgYmFja2dyb3VuZDogIzUwZmE3YjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlYmFyX2Nsb3NlX19rNWpsaSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmY1NTU1O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3RpdGxlYmFyLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUNBQWlDO0FBQ2pDO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWEsRUFBRSxtQ0FBbUM7SUFDbEQsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQ0FBZ0M7O0lBRWhDLDJCQUEyQjtJQUMzQixXQUFXLEVBQUUsdUNBQXVDO0lBQ3BELDBDQUEwQztJQUMxQyxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYyxFQUFFLHdCQUF3QjtFQUN4QyxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQU8sRUFBRSxhQUFhO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBTztFQUNQLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qdXRpbGl6YXRpb24gb2YgY2xhc3Mgc2VsZWN0b3JzKi9cXHJcXG4udGl0bGViYXIgeyBcXHJcXG4gICAgLypnZW5lcmFsIHNlY3Rpb24gYXR0cmlidXRlcyovXFxyXFxuICAgIGJhY2tncm91bmQ6ICMxZjI0Mjg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qZmlsbHMgYW55IGVtcHR5IHNwYWNlIGluIHRoZSBib3gqL1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxOTFkMjA7XFxyXFxuXFxyXFxuICAgIC8qdGhlIHdvcmRzIGluIHRoZSBlbGVtZW50Ki9cXHJcXG4gICAgY29sb3I6ICNmZmY7IC8qcmVmZXJzIHRvIHRleHQgY29sb3IgaW4gdGhlIGVsZW1lbnQgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87IC8qdG9wIHJpZ2h0IGJvdHRvbSBsZWZ0Ki9cXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgcGFkZGluZzogMC42NXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMge1xcclxcbiAgZmxleDogMTsgLyoxLTMgdmFsdWVzKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zIHAgeyBcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBmbGV4OiAyO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbmltaXplIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWZhOGM7XFxyXFxufVxcclxcblxcclxcbi5tYXhpbWl6ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTBmYTdiO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2Uge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmNTU1NTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGl0bGViYXJcIjogXCJ0aXRsZWJhcl90aXRsZWJhcl9fWHJiZXhcIixcblx0XCJpY29uXCI6IFwidGl0bGViYXJfaWNvbl9fcjBsT0xcIixcblx0XCJpdGVtc1wiOiBcInRpdGxlYmFyX2l0ZW1zX19HM3ZvSVwiLFxuXHRcInRpdGxlXCI6IFwidGl0bGViYXJfdGl0bGVfX0FNbE1oXCIsXG5cdFwibWluaW1pemVcIjogXCJ0aXRsZWJhcl9taW5pbWl6ZV9fUUpUbU9cIixcblx0XCJtYXhpbWl6ZVwiOiBcInRpdGxlYmFyX21heGltaXplX192YmVEQlwiLFxuXHRcImNsb3NlXCI6IFwidGl0bGViYXJfY2xvc2VfX2s1amxpXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./styles/titlebar.module.css\n"));

/***/ })

});