/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/webpack/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var html = document.documentElement;
	var windowWidth = html.clientWidth;
	html.style.fontSize = windowWidth / 6.4 + 'px';

	//为canvas缩放，使用640*1136
	function pageUtil(selector) {
	  this.ele = document.querySelectorAll(selector)[0];
	  this.scaleNum = document.documentElement.clientWidth / 640;
	  return this;
	}
	pageUtil.prototype.response = function (selector) {
	  this.ele.style.cssText = "-webkit-transform-origin: 0 0 0px; -webkit-transform: scale(" + this.scaleNum + ");position: absolute;width:640px;height:1136px";
	  return this;
	};
	pageUtil.prototype.rotate = function () {
	  this.ele["style"]["cssText"] = "width: " + 1136 + "px;height: " + 640 + "px;transform:rotate(90deg) translate(-50%,-50%);" + "transform-origin:0 0; position: absolute; top: 50%; left: 50%;";
	  return this;
	};

/***/ }
/******/ ]);