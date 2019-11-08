/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([231,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _openfonts_open_sans_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(398);
/* harmony import */ var _openfonts_open_sans_all__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openfonts_open_sans_all__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _openfonts_roboto_mono_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(420);
/* harmony import */ var _openfonts_roboto_mono_all__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openfonts_roboto_mono_all__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"] `
   html, body {
    background: ${({ theme }) => theme.color.background.light};
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.text.dark} ;
    font-family: ${({ theme }) => theme.font.base.family};
    font-size: ${({ theme }) => theme.font.base.size};
    font-weight: ${({ theme }) => theme.font.base.weight};
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
 }
*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`);


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


const StyledCell = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].td `
  border: ${({ theme }) => (theme.border.hairline)};
  font-family: ${({ theme }) => (theme.font.data.family)};
  font-size: ${({ theme }) => (theme.font.data.size)};
  padding: ${({ theme }) => (theme.ws.xsmall)};
  text-align: 'center';
`;
const TableCell = (props) => {
    const { children, } = props;
    const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCell, { theme: theme }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (TableCell);


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

const TableRow = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].tr `
  background: ${({ theme, isStriped }) => (isStriped ? theme.color.background.subtle : theme.color.background.light)};
  &:hover {
    background: ${({ theme }) => (theme.color.background.medium)};
  }
`;
TableRow.defaultProps = {
    isStriped: false,
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["withTheme"])(TableRow));


/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


const StyledTableHead = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].thead `
  background-color: ${({ theme }) => (theme.color.background.medium)};
`;
const TableHead = (props) => {
    const { children, } = props;
    const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableHead, { theme: theme }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (TableHead);


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


const StyledTableHeadingCell = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].th `
  font-weight: ${({ theme }) => (theme.font.bold.weight)};
  text-align: 'center';
`;
const TableHeadingCell = (props) => {
    const { children, clickHandler, scope, } = props;
    const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableHeadingCell, { onClick: clickHandler, theme: theme, scope: scope }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (TableHeadingCell);


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

const TableBody = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].tbody `
  overflow: ${({ isScrollable }) => (isScrollable ? 'scroll' : 'visible')};
`;
TableBody.defaultProps = {
    isScrollable: false,
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["withTheme"])(TableBody));


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "53adae7e04b94384b103e6884cbad7ab.svg";

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(879);


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Binary_Property/ASCII.js": 454,
	"./Binary_Property/ASCII_Hex_Digit.js": 455,
	"./Binary_Property/Alphabetic.js": 456,
	"./Binary_Property/Any.js": 457,
	"./Binary_Property/Assigned.js": 458,
	"./Binary_Property/Bidi_Control.js": 459,
	"./Binary_Property/Bidi_Mirrored.js": 460,
	"./Binary_Property/Case_Ignorable.js": 461,
	"./Binary_Property/Cased.js": 462,
	"./Binary_Property/Changes_When_Casefolded.js": 463,
	"./Binary_Property/Changes_When_Casemapped.js": 464,
	"./Binary_Property/Changes_When_Lowercased.js": 465,
	"./Binary_Property/Changes_When_NFKC_Casefolded.js": 466,
	"./Binary_Property/Changes_When_Titlecased.js": 467,
	"./Binary_Property/Changes_When_Uppercased.js": 468,
	"./Binary_Property/Dash.js": 469,
	"./Binary_Property/Default_Ignorable_Code_Point.js": 470,
	"./Binary_Property/Deprecated.js": 471,
	"./Binary_Property/Diacritic.js": 472,
	"./Binary_Property/Emoji.js": 473,
	"./Binary_Property/Emoji_Component.js": 474,
	"./Binary_Property/Emoji_Modifier.js": 475,
	"./Binary_Property/Emoji_Modifier_Base.js": 476,
	"./Binary_Property/Emoji_Presentation.js": 477,
	"./Binary_Property/Extended_Pictographic.js": 478,
	"./Binary_Property/Extender.js": 479,
	"./Binary_Property/Grapheme_Base.js": 480,
	"./Binary_Property/Grapheme_Extend.js": 481,
	"./Binary_Property/Hex_Digit.js": 482,
	"./Binary_Property/IDS_Binary_Operator.js": 483,
	"./Binary_Property/IDS_Trinary_Operator.js": 484,
	"./Binary_Property/ID_Continue.js": 485,
	"./Binary_Property/ID_Start.js": 486,
	"./Binary_Property/Ideographic.js": 487,
	"./Binary_Property/Join_Control.js": 488,
	"./Binary_Property/Logical_Order_Exception.js": 489,
	"./Binary_Property/Lowercase.js": 490,
	"./Binary_Property/Math.js": 491,
	"./Binary_Property/Noncharacter_Code_Point.js": 492,
	"./Binary_Property/Pattern_Syntax.js": 493,
	"./Binary_Property/Pattern_White_Space.js": 494,
	"./Binary_Property/Quotation_Mark.js": 495,
	"./Binary_Property/Radical.js": 496,
	"./Binary_Property/Regional_Indicator.js": 497,
	"./Binary_Property/Sentence_Terminal.js": 498,
	"./Binary_Property/Soft_Dotted.js": 499,
	"./Binary_Property/Terminal_Punctuation.js": 500,
	"./Binary_Property/Unified_Ideograph.js": 501,
	"./Binary_Property/Uppercase.js": 502,
	"./Binary_Property/Variation_Selector.js": 503,
	"./Binary_Property/White_Space.js": 504,
	"./Binary_Property/XID_Continue.js": 505,
	"./Binary_Property/XID_Start.js": 506,
	"./General_Category/Cased_Letter.js": 507,
	"./General_Category/Close_Punctuation.js": 508,
	"./General_Category/Connector_Punctuation.js": 509,
	"./General_Category/Control.js": 510,
	"./General_Category/Currency_Symbol.js": 511,
	"./General_Category/Dash_Punctuation.js": 512,
	"./General_Category/Decimal_Number.js": 513,
	"./General_Category/Enclosing_Mark.js": 514,
	"./General_Category/Final_Punctuation.js": 515,
	"./General_Category/Format.js": 516,
	"./General_Category/Initial_Punctuation.js": 517,
	"./General_Category/Letter.js": 518,
	"./General_Category/Letter_Number.js": 519,
	"./General_Category/Line_Separator.js": 520,
	"./General_Category/Lowercase_Letter.js": 521,
	"./General_Category/Mark.js": 522,
	"./General_Category/Math_Symbol.js": 523,
	"./General_Category/Modifier_Letter.js": 524,
	"./General_Category/Modifier_Symbol.js": 525,
	"./General_Category/Nonspacing_Mark.js": 526,
	"./General_Category/Number.js": 527,
	"./General_Category/Open_Punctuation.js": 528,
	"./General_Category/Other.js": 529,
	"./General_Category/Other_Letter.js": 530,
	"./General_Category/Other_Number.js": 531,
	"./General_Category/Other_Punctuation.js": 532,
	"./General_Category/Other_Symbol.js": 533,
	"./General_Category/Paragraph_Separator.js": 534,
	"./General_Category/Private_Use.js": 535,
	"./General_Category/Punctuation.js": 536,
	"./General_Category/Separator.js": 537,
	"./General_Category/Space_Separator.js": 538,
	"./General_Category/Spacing_Mark.js": 539,
	"./General_Category/Surrogate.js": 540,
	"./General_Category/Symbol.js": 541,
	"./General_Category/Titlecase_Letter.js": 542,
	"./General_Category/Unassigned.js": 543,
	"./General_Category/Uppercase_Letter.js": 544,
	"./Script/Adlam.js": 545,
	"./Script/Ahom.js": 546,
	"./Script/Anatolian_Hieroglyphs.js": 547,
	"./Script/Arabic.js": 548,
	"./Script/Armenian.js": 549,
	"./Script/Avestan.js": 550,
	"./Script/Balinese.js": 551,
	"./Script/Bamum.js": 552,
	"./Script/Bassa_Vah.js": 553,
	"./Script/Batak.js": 554,
	"./Script/Bengali.js": 555,
	"./Script/Bhaiksuki.js": 556,
	"./Script/Bopomofo.js": 557,
	"./Script/Brahmi.js": 558,
	"./Script/Braille.js": 559,
	"./Script/Buginese.js": 560,
	"./Script/Buhid.js": 561,
	"./Script/Canadian_Aboriginal.js": 562,
	"./Script/Carian.js": 563,
	"./Script/Caucasian_Albanian.js": 564,
	"./Script/Chakma.js": 565,
	"./Script/Cham.js": 566,
	"./Script/Cherokee.js": 567,
	"./Script/Common.js": 568,
	"./Script/Coptic.js": 569,
	"./Script/Cuneiform.js": 570,
	"./Script/Cypriot.js": 571,
	"./Script/Cyrillic.js": 572,
	"./Script/Deseret.js": 573,
	"./Script/Devanagari.js": 574,
	"./Script/Dogra.js": 575,
	"./Script/Duployan.js": 576,
	"./Script/Egyptian_Hieroglyphs.js": 577,
	"./Script/Elbasan.js": 578,
	"./Script/Elymaic.js": 579,
	"./Script/Ethiopic.js": 580,
	"./Script/Georgian.js": 581,
	"./Script/Glagolitic.js": 582,
	"./Script/Gothic.js": 583,
	"./Script/Grantha.js": 584,
	"./Script/Greek.js": 585,
	"./Script/Gujarati.js": 586,
	"./Script/Gunjala_Gondi.js": 587,
	"./Script/Gurmukhi.js": 588,
	"./Script/Han.js": 589,
	"./Script/Hangul.js": 590,
	"./Script/Hanifi_Rohingya.js": 591,
	"./Script/Hanunoo.js": 592,
	"./Script/Hatran.js": 593,
	"./Script/Hebrew.js": 594,
	"./Script/Hiragana.js": 595,
	"./Script/Imperial_Aramaic.js": 596,
	"./Script/Inherited.js": 597,
	"./Script/Inscriptional_Pahlavi.js": 598,
	"./Script/Inscriptional_Parthian.js": 599,
	"./Script/Javanese.js": 600,
	"./Script/Kaithi.js": 601,
	"./Script/Kannada.js": 602,
	"./Script/Katakana.js": 603,
	"./Script/Kayah_Li.js": 604,
	"./Script/Kharoshthi.js": 605,
	"./Script/Khmer.js": 606,
	"./Script/Khojki.js": 607,
	"./Script/Khudawadi.js": 608,
	"./Script/Lao.js": 609,
	"./Script/Latin.js": 610,
	"./Script/Lepcha.js": 611,
	"./Script/Limbu.js": 612,
	"./Script/Linear_A.js": 613,
	"./Script/Linear_B.js": 614,
	"./Script/Lisu.js": 615,
	"./Script/Lycian.js": 616,
	"./Script/Lydian.js": 617,
	"./Script/Mahajani.js": 618,
	"./Script/Makasar.js": 619,
	"./Script/Malayalam.js": 620,
	"./Script/Mandaic.js": 621,
	"./Script/Manichaean.js": 622,
	"./Script/Marchen.js": 623,
	"./Script/Masaram_Gondi.js": 624,
	"./Script/Medefaidrin.js": 625,
	"./Script/Meetei_Mayek.js": 626,
	"./Script/Mende_Kikakui.js": 627,
	"./Script/Meroitic_Cursive.js": 628,
	"./Script/Meroitic_Hieroglyphs.js": 629,
	"./Script/Miao.js": 630,
	"./Script/Modi.js": 631,
	"./Script/Mongolian.js": 632,
	"./Script/Mro.js": 633,
	"./Script/Multani.js": 634,
	"./Script/Myanmar.js": 635,
	"./Script/Nabataean.js": 636,
	"./Script/Nandinagari.js": 637,
	"./Script/New_Tai_Lue.js": 638,
	"./Script/Newa.js": 639,
	"./Script/Nko.js": 640,
	"./Script/Nushu.js": 641,
	"./Script/Nyiakeng_Puachue_Hmong.js": 642,
	"./Script/Ogham.js": 643,
	"./Script/Ol_Chiki.js": 644,
	"./Script/Old_Hungarian.js": 645,
	"./Script/Old_Italic.js": 646,
	"./Script/Old_North_Arabian.js": 647,
	"./Script/Old_Permic.js": 648,
	"./Script/Old_Persian.js": 649,
	"./Script/Old_Sogdian.js": 650,
	"./Script/Old_South_Arabian.js": 651,
	"./Script/Old_Turkic.js": 652,
	"./Script/Oriya.js": 653,
	"./Script/Osage.js": 654,
	"./Script/Osmanya.js": 655,
	"./Script/Pahawh_Hmong.js": 656,
	"./Script/Palmyrene.js": 657,
	"./Script/Pau_Cin_Hau.js": 658,
	"./Script/Phags_Pa.js": 659,
	"./Script/Phoenician.js": 660,
	"./Script/Psalter_Pahlavi.js": 661,
	"./Script/Rejang.js": 662,
	"./Script/Runic.js": 663,
	"./Script/Samaritan.js": 664,
	"./Script/Saurashtra.js": 665,
	"./Script/Sharada.js": 666,
	"./Script/Shavian.js": 667,
	"./Script/Siddham.js": 668,
	"./Script/SignWriting.js": 669,
	"./Script/Sinhala.js": 670,
	"./Script/Sogdian.js": 671,
	"./Script/Sora_Sompeng.js": 672,
	"./Script/Soyombo.js": 673,
	"./Script/Sundanese.js": 674,
	"./Script/Syloti_Nagri.js": 675,
	"./Script/Syriac.js": 676,
	"./Script/Tagalog.js": 677,
	"./Script/Tagbanwa.js": 678,
	"./Script/Tai_Le.js": 679,
	"./Script/Tai_Tham.js": 680,
	"./Script/Tai_Viet.js": 681,
	"./Script/Takri.js": 682,
	"./Script/Tamil.js": 683,
	"./Script/Tangut.js": 684,
	"./Script/Telugu.js": 685,
	"./Script/Thaana.js": 686,
	"./Script/Thai.js": 687,
	"./Script/Tibetan.js": 688,
	"./Script/Tifinagh.js": 689,
	"./Script/Tirhuta.js": 690,
	"./Script/Ugaritic.js": 691,
	"./Script/Vai.js": 692,
	"./Script/Wancho.js": 693,
	"./Script/Warang_Citi.js": 694,
	"./Script/Yi.js": 695,
	"./Script/Zanabazar_Square.js": 696,
	"./Script_Extensions/Adlam.js": 697,
	"./Script_Extensions/Ahom.js": 698,
	"./Script_Extensions/Anatolian_Hieroglyphs.js": 699,
	"./Script_Extensions/Arabic.js": 700,
	"./Script_Extensions/Armenian.js": 701,
	"./Script_Extensions/Avestan.js": 702,
	"./Script_Extensions/Balinese.js": 703,
	"./Script_Extensions/Bamum.js": 704,
	"./Script_Extensions/Bassa_Vah.js": 705,
	"./Script_Extensions/Batak.js": 706,
	"./Script_Extensions/Bengali.js": 707,
	"./Script_Extensions/Bhaiksuki.js": 708,
	"./Script_Extensions/Bopomofo.js": 709,
	"./Script_Extensions/Brahmi.js": 710,
	"./Script_Extensions/Braille.js": 711,
	"./Script_Extensions/Buginese.js": 712,
	"./Script_Extensions/Buhid.js": 713,
	"./Script_Extensions/Canadian_Aboriginal.js": 714,
	"./Script_Extensions/Carian.js": 715,
	"./Script_Extensions/Caucasian_Albanian.js": 716,
	"./Script_Extensions/Chakma.js": 717,
	"./Script_Extensions/Cham.js": 718,
	"./Script_Extensions/Cherokee.js": 719,
	"./Script_Extensions/Common.js": 720,
	"./Script_Extensions/Coptic.js": 721,
	"./Script_Extensions/Cuneiform.js": 722,
	"./Script_Extensions/Cypriot.js": 723,
	"./Script_Extensions/Cyrillic.js": 724,
	"./Script_Extensions/Deseret.js": 725,
	"./Script_Extensions/Devanagari.js": 726,
	"./Script_Extensions/Dogra.js": 727,
	"./Script_Extensions/Duployan.js": 728,
	"./Script_Extensions/Egyptian_Hieroglyphs.js": 729,
	"./Script_Extensions/Elbasan.js": 730,
	"./Script_Extensions/Elymaic.js": 731,
	"./Script_Extensions/Ethiopic.js": 732,
	"./Script_Extensions/Georgian.js": 733,
	"./Script_Extensions/Glagolitic.js": 734,
	"./Script_Extensions/Gothic.js": 735,
	"./Script_Extensions/Grantha.js": 736,
	"./Script_Extensions/Greek.js": 737,
	"./Script_Extensions/Gujarati.js": 738,
	"./Script_Extensions/Gunjala_Gondi.js": 739,
	"./Script_Extensions/Gurmukhi.js": 740,
	"./Script_Extensions/Han.js": 741,
	"./Script_Extensions/Hangul.js": 742,
	"./Script_Extensions/Hanifi_Rohingya.js": 743,
	"./Script_Extensions/Hanunoo.js": 744,
	"./Script_Extensions/Hatran.js": 745,
	"./Script_Extensions/Hebrew.js": 746,
	"./Script_Extensions/Hiragana.js": 747,
	"./Script_Extensions/Imperial_Aramaic.js": 748,
	"./Script_Extensions/Inherited.js": 749,
	"./Script_Extensions/Inscriptional_Pahlavi.js": 750,
	"./Script_Extensions/Inscriptional_Parthian.js": 751,
	"./Script_Extensions/Javanese.js": 752,
	"./Script_Extensions/Kaithi.js": 753,
	"./Script_Extensions/Kannada.js": 754,
	"./Script_Extensions/Katakana.js": 755,
	"./Script_Extensions/Kayah_Li.js": 756,
	"./Script_Extensions/Kharoshthi.js": 757,
	"./Script_Extensions/Khmer.js": 758,
	"./Script_Extensions/Khojki.js": 759,
	"./Script_Extensions/Khudawadi.js": 760,
	"./Script_Extensions/Lao.js": 761,
	"./Script_Extensions/Latin.js": 762,
	"./Script_Extensions/Lepcha.js": 763,
	"./Script_Extensions/Limbu.js": 764,
	"./Script_Extensions/Linear_A.js": 765,
	"./Script_Extensions/Linear_B.js": 766,
	"./Script_Extensions/Lisu.js": 767,
	"./Script_Extensions/Lycian.js": 768,
	"./Script_Extensions/Lydian.js": 769,
	"./Script_Extensions/Mahajani.js": 770,
	"./Script_Extensions/Makasar.js": 771,
	"./Script_Extensions/Malayalam.js": 772,
	"./Script_Extensions/Mandaic.js": 773,
	"./Script_Extensions/Manichaean.js": 774,
	"./Script_Extensions/Marchen.js": 775,
	"./Script_Extensions/Masaram_Gondi.js": 776,
	"./Script_Extensions/Medefaidrin.js": 777,
	"./Script_Extensions/Meetei_Mayek.js": 778,
	"./Script_Extensions/Mende_Kikakui.js": 779,
	"./Script_Extensions/Meroitic_Cursive.js": 780,
	"./Script_Extensions/Meroitic_Hieroglyphs.js": 781,
	"./Script_Extensions/Miao.js": 782,
	"./Script_Extensions/Modi.js": 783,
	"./Script_Extensions/Mongolian.js": 784,
	"./Script_Extensions/Mro.js": 785,
	"./Script_Extensions/Multani.js": 786,
	"./Script_Extensions/Myanmar.js": 787,
	"./Script_Extensions/Nabataean.js": 788,
	"./Script_Extensions/Nandinagari.js": 789,
	"./Script_Extensions/New_Tai_Lue.js": 790,
	"./Script_Extensions/Newa.js": 791,
	"./Script_Extensions/Nko.js": 792,
	"./Script_Extensions/Nushu.js": 793,
	"./Script_Extensions/Nyiakeng_Puachue_Hmong.js": 794,
	"./Script_Extensions/Ogham.js": 795,
	"./Script_Extensions/Ol_Chiki.js": 796,
	"./Script_Extensions/Old_Hungarian.js": 797,
	"./Script_Extensions/Old_Italic.js": 798,
	"./Script_Extensions/Old_North_Arabian.js": 799,
	"./Script_Extensions/Old_Permic.js": 800,
	"./Script_Extensions/Old_Persian.js": 801,
	"./Script_Extensions/Old_Sogdian.js": 802,
	"./Script_Extensions/Old_South_Arabian.js": 803,
	"./Script_Extensions/Old_Turkic.js": 804,
	"./Script_Extensions/Oriya.js": 805,
	"./Script_Extensions/Osage.js": 806,
	"./Script_Extensions/Osmanya.js": 807,
	"./Script_Extensions/Pahawh_Hmong.js": 808,
	"./Script_Extensions/Palmyrene.js": 809,
	"./Script_Extensions/Pau_Cin_Hau.js": 810,
	"./Script_Extensions/Phags_Pa.js": 811,
	"./Script_Extensions/Phoenician.js": 812,
	"./Script_Extensions/Psalter_Pahlavi.js": 813,
	"./Script_Extensions/Rejang.js": 814,
	"./Script_Extensions/Runic.js": 815,
	"./Script_Extensions/Samaritan.js": 816,
	"./Script_Extensions/Saurashtra.js": 817,
	"./Script_Extensions/Sharada.js": 818,
	"./Script_Extensions/Shavian.js": 819,
	"./Script_Extensions/Siddham.js": 820,
	"./Script_Extensions/SignWriting.js": 821,
	"./Script_Extensions/Sinhala.js": 822,
	"./Script_Extensions/Sogdian.js": 823,
	"./Script_Extensions/Sora_Sompeng.js": 824,
	"./Script_Extensions/Soyombo.js": 825,
	"./Script_Extensions/Sundanese.js": 826,
	"./Script_Extensions/Syloti_Nagri.js": 827,
	"./Script_Extensions/Syriac.js": 828,
	"./Script_Extensions/Tagalog.js": 829,
	"./Script_Extensions/Tagbanwa.js": 830,
	"./Script_Extensions/Tai_Le.js": 831,
	"./Script_Extensions/Tai_Tham.js": 832,
	"./Script_Extensions/Tai_Viet.js": 833,
	"./Script_Extensions/Takri.js": 834,
	"./Script_Extensions/Tamil.js": 835,
	"./Script_Extensions/Tangut.js": 836,
	"./Script_Extensions/Telugu.js": 837,
	"./Script_Extensions/Thaana.js": 838,
	"./Script_Extensions/Thai.js": 839,
	"./Script_Extensions/Tibetan.js": 840,
	"./Script_Extensions/Tifinagh.js": 841,
	"./Script_Extensions/Tirhuta.js": 842,
	"./Script_Extensions/Ugaritic.js": 843,
	"./Script_Extensions/Vai.js": 844,
	"./Script_Extensions/Wancho.js": 845,
	"./Script_Extensions/Warang_Citi.js": 846,
	"./Script_Extensions/Yi.js": 847,
	"./Script_Extensions/Zanabazar_Square.js": 848,
	"./index.js": 849,
	"./unicode-version.js": 850
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 453;

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var mark_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);



const MarkOneWrapper = ({ children, }) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], { theme: mark_one__WEBPACK_IMPORTED_MODULE_2__["MarkOneTheme"] },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mark_one__WEBPACK_IMPORTED_MODULE_2__["GlobalCSS"], null),
        children)));
/* harmony default export */ __webpack_exports__["default"] = (MarkOneWrapper);


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/Button/BasicButton.tsx
var BasicButton = __webpack_require__(95);

// CONCATENATED MODULE: ./src/Button/index.ts


// EXTERNAL MODULE: ./src/Layout/Header.tsx
var Header = __webpack_require__(96);

// EXTERNAL MODULE: ./src/Layout/Logo.tsx
var Logo = __webpack_require__(97);

// CONCATENATED MODULE: ./src/Layout/index.ts



// EXTERNAL MODULE: ./src/Theme/GlobalCSS.tsx
var GlobalCSS = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/polished/dist/polished.es.js + 9 modules
var polished_es = __webpack_require__(13);

// CONCATENATED MODULE: ./src/Theme/MarkOneTheme.ts

var COLOR;
(function (COLOR) {
    COLOR["WHITE"] = "#ffffff";
    COLOR["BLACK"] = "#181818";
    COLOR["BLUE"] = "#0c6090";
    COLOR["GREEN"] = "#40DE40";
    COLOR["RED"] = "#ff4040";
})(COLOR || (COLOR = {}));
var FONT;
(function (FONT) {
    FONT["SANS"] = "\"Open Sans\", sans-serif";
    FONT["MONO"] = "\"Roboto Mono\", monospace";
})(FONT || (FONT = {}));
var WEIGHT;
(function (WEIGHT) {
    WEIGHT["LIGHT"] = "300";
    WEIGHT["MEDIUM"] = "400";
    WEIGHT["BOLD"] = "600";
})(WEIGHT || (WEIGHT = {}));
const MarkOneTheme = {
    color: {
        background: {
            light: COLOR.WHITE,
            subtle: Object(polished_es["a" /* darken */])(0.03, COLOR.WHITE),
            medium: Object(polished_es["a" /* darken */])(0.175, COLOR.WHITE),
            dark: Object(polished_es["a" /* darken */])(0.535, COLOR.WHITE),
            darker: Object(polished_es["a" /* darken */])(0.75, COLOR.WHITE),
            accent: '#903030',
            info: {
                light: Object(polished_es["b" /* lighten */])(0.2, COLOR.BLUE),
                medium: COLOR.BLUE,
                dark: Object(polished_es["a" /* darken */])(0.1, COLOR.BLUE),
            },
            positive: {
                light: Object(polished_es["b" /* lighten */])(0.15, COLOR.GREEN),
                medium: COLOR.GREEN,
                dark: Object(polished_es["a" /* darken */])(0.2, COLOR.GREEN),
            },
            negative: {
                light: Object(polished_es["b" /* lighten */])(0.1, COLOR.RED),
                medium: COLOR.RED,
                dark: Object(polished_es["a" /* darken */])(0.2, COLOR.RED),
            },
        },
        text: {
            light: Object(polished_es["b" /* lighten */])(0.9, COLOR.BLACK),
            medium: Object(polished_es["b" /* lighten */])(0.35, COLOR.BLACK),
            dark: COLOR.BLACK,
            info: COLOR.BLUE,
            positive: COLOR.GREEN,
            negative: COLOR.RED,
        },
    },
    font: {
        base: {
            family: FONT.SANS,
            size: '16px',
            weight: WEIGHT.MEDIUM,
        },
        body: {
            family: FONT.SANS,
            size: '1em',
            weight: WEIGHT.MEDIUM,
        },
        data: {
            family: FONT.MONO,
            size: '0.9em',
            weight: WEIGHT.BOLD,
        },
        bold: {
            family: FONT.SANS,
            size: '1em',
            weight: WEIGHT.BOLD,
        },
        title: {
            family: FONT.SANS,
            size: '1.66em',
            weight: WEIGHT.MEDIUM,
        },
        heading: {
            family: FONT.SANS,
            size: '1.33em',
            weight: WEIGHT.LIGHT,
        },
    },
    shadow: {
        xlight: '0 2px 4px rgba(0,0,0,0.24)',
        light: '0 4px 8px rgba(0,0,0,0.28)',
        medium: '0 4px 16px 2px rgba(0,0,0,0.24)',
    },
    border: {
        hairline: `1px solid ${COLOR.BLACK}`,
        light: `2px solid ${Object(polished_es["b" /* lighten */])(0.5, COLOR.BLACK)}`,
        heavy: `6px solid ${Object(polished_es["b" /* lighten */])(0.3, COLOR.BLACK)}`,
    },
    ws: {
        zero: '0px',
        xsmall: '5px',
        small: '10px',
        medium: '15px',
        large: '25px',
        xlarge: '40px',
    },
};
/* harmony default export */ var Theme_MarkOneTheme = (MarkOneTheme);

// EXTERNAL MODULE: ./src/Theme/MarkOneWrapper.tsx
var MarkOneWrapper = __webpack_require__(48);

// CONCATENATED MODULE: ./src/Theme/index.ts




// EXTERNAL MODULE: ./src/Table/Table.tsx
var Table = __webpack_require__(98);

// EXTERNAL MODULE: ./src/Table/TableCell.tsx
var TableCell = __webpack_require__(133);

// EXTERNAL MODULE: ./src/Table/TableRow.tsx
var TableRow = __webpack_require__(134);

// EXTERNAL MODULE: ./src/Table/TableHead.tsx
var TableHead = __webpack_require__(135);

// EXTERNAL MODULE: ./src/Table/TableHeadingCell.tsx
var TableHeadingCell = __webpack_require__(136);

// EXTERNAL MODULE: ./src/Table/TableBody.tsx
var TableBody = __webpack_require__(137);

// CONCATENATED MODULE: ./src/Table/index.ts







// CONCATENATED MODULE: ./src/index.ts
/* concated harmony reexport BasicButton */__webpack_require__.d(__webpack_exports__, "BasicButton", function() { return BasicButton["default"]; });
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "Header", function() { return Header["default"]; });
/* concated harmony reexport Logo */__webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo["default"]; });
/* concated harmony reexport GlobalCSS */__webpack_require__.d(__webpack_exports__, "GlobalCSS", function() { return GlobalCSS["default"]; });
/* concated harmony reexport MarkOneTheme */__webpack_require__.d(__webpack_exports__, "MarkOneTheme", function() { return Theme_MarkOneTheme; });
/* concated harmony reexport BaseTheme */__webpack_require__.d(__webpack_exports__, "BaseTheme", function() { return /* Cannot get final name for export "BaseTheme" in "./src/Theme/MarkOneTheme.ts" (known exports: default, known reexports: ) */ undefined; });
/* concated harmony reexport MarkOneWrapper */__webpack_require__.d(__webpack_exports__, "MarkOneWrapper", function() { return MarkOneWrapper["default"]; });
/* concated harmony reexport Table */__webpack_require__.d(__webpack_exports__, "Table", function() { return Table["default"]; });
/* concated harmony reexport TableCell */__webpack_require__.d(__webpack_exports__, "TableCell", function() { return TableCell["default"]; });
/* concated harmony reexport TableRow */__webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow["default"]; });
/* concated harmony reexport TableHead */__webpack_require__.d(__webpack_exports__, "TableHead", function() { return TableHead["default"]; });
/* concated harmony reexport TableHeadingCell */__webpack_require__.d(__webpack_exports__, "TableHeadingCell", function() { return TableHeadingCell["default"]; });
/* concated harmony reexport TableBody */__webpack_require__.d(__webpack_exports__, "TableBody", function() { return TableBody["default"]; });






/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'description': '',
    'displayName': 'BasicButton',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'clickHandler',
            'parent': {
                'fileName': 'mark-one-pub/src/Button/BasicButton.tsx',
                'name': 'ButtonProps'
            },
            'required': true,
            'type': { 'name': '(event: MouseEvent<Element, MouseEvent>) => void' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'Text or components to be displayed on the button',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one-pub/src/Button/BasicButton.tsx',
                'name': 'ButtonProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'If true, button won\'t fire',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one-pub/src/Button/BasicButton.tsx',
                'name': 'ButtonProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Allows you to pass in style properties for the element',
            'name': 'theme',
            'parent': {
                'fileName': 'mark-one-pub/src/Button/BasicButton.tsx',
                'name': 'ButtonProps'
            },
            'required': false,
            'type': { 'name': 'object' },
            'tags': {}
        }
    ],
    'doclets': {},
    'examples': __webpack_require__(864)
}
	

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(1),
    './../../src/Button/BasicButton.tsx': __webpack_require__(95)
};
var requireInRuntimeBase = __webpack_require__(63).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(64).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst BasicButton$0 = require('./../../src/Button/BasicButton.tsx');\nconst BasicButton = BasicButton$0['BasicButton'] || (BasicButton$0.default || BasicButton$0);", requireInRuntime);

module.exports = [{
        'type': 'code',
        'content': '<BasicButton clickHandler={function(){alert(\'you clicked the button\')}}>Click Me</BasicButton>',
        'settings': {},
        'evalInContext': evalInContext
    }]
	

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'description': '',
    'displayName': 'Header',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }],
    'doclets': {},
    'examples': __webpack_require__(866)
}
	

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'styled-components': __webpack_require__(4),
    './H_SEAS_logo_RGB.svg': __webpack_require__(205),
    'mark-one': __webpack_require__(65),
    'react': __webpack_require__(1),
    './../../src/Layout/Header.tsx': __webpack_require__(96)
};
var requireInRuntimeBase = __webpack_require__(63).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(64).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Header$0 = require('./../../src/Layout/Header.tsx');\nconst Header = Header$0['Header'] || (Header$0.default || Header$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The Header uses flexbox for positioning, and accepts a `justify` prop that controls the layout. The default value is `space-between`, which works well for multiple items:'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\nimport logo from \'./H_SEAS_logo_RGB.svg\';\nimport { Logo } from \'mark-one\';\n\nconst Title = styled.h1`\n  font-size: ${({ theme }) => theme.font.title.size};\n  font-family: ${({ theme }) => theme.font.title.family};\n  font-weight: ${({ theme }) => theme.font.title.weight};\n  grid-column-end: span 4;\n`;\n\n<Header>\n  <Logo \n    image={logo}\n    width="175px"\n    href="#"\n  >\n    The Link Description\n  </Logo>\n  <Title>Application Title</Title>\n  <div>three</div>\n  <div>menu</div>\n  <div>items</div>\n</Header>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'A value of `center` be used to position content around the center. (See [MDN\'s docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) for all supported values).'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\n\nconst Title = styled.h1`\n  grid-column: 5 / 9;\n  font-size: ${({ theme }) => theme.font.title.size};\n  font-family: ${({ theme }) => theme.font.title.family};\n  font-weight: ${({ theme }) => theme.font.title.weight};\n  text-align: center;\n`;\n\n<Header justify="center">\n  <Title>Centered Title</Title>\n</Header>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'You can also pass in a custom `background` prop to replace the default transparent background'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\n\nconst Title = styled.h1`\n  grid-column: 5 / 9;\n  font-size: ${({ theme }) => theme.font.title.size};\n  font-family: ${({ theme }) => theme.font.title.family};\n  font-weight: ${({ theme }) => theme.font.title.weight};\n  text-align: center;\n`;\n\n<Header justify="center" background="#eafeaf">\n  <Title>Custom Background</Title>\n</Header>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'description': '',
    'displayName': 'Logo',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }],
    'doclets': {},
    'examples': __webpack_require__(868)
}
	

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    './H_SEAS_logo_RGB.svg': __webpack_require__(205),
    'react': __webpack_require__(1),
    './../../src/Layout/Logo.tsx': __webpack_require__(97)
};
var requireInRuntimeBase = __webpack_require__(63).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(64).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Logo$0 = require('./../../src/Layout/Logo.tsx');\nconst Logo = Logo$0['Logo'] || (Logo$0.default || Logo$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Used for rendering an image link with screen-reader compatible text:'
    },
    {
        'type': 'code',
        'content': 'import logo from \'./H_SEAS_logo_RGB.svg\';\n\n<Logo image={logo} width="500px" height="150px" href="#SEAS">\n  This text is not visible, but is in the DOM\n</Logo>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'By default, it will render at `200px` x `75px`:'
    },
    {
        'type': 'code',
        'content': 'import logo from \'./H_SEAS_logo_RGB.svg\';\n\n<Logo image={logo} href="#SEAS">\n  This text is not visible, but is in the DOM\n</Logo>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'description': '',
    'displayName': 'Table',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': 'Internal table components like <thead> and <tbody> including their respective child components',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one-pub/src/Table/Table.tsx',
                'name': 'TableProps'
            },
            'required': true,
            'type': { 'name': '(TableHead | TableBody)[] | ((TableHead | TableBody)[] & string) | ((TableHead | TableBody)[] & number) | ((TableHead | TableBody)[] & false) | ((TableHead | TableBody)[] & true) | ((TableHead | TableBody)[] & ReactElement<...>) | ((TableHead | TableBody)[] & ReactNodeArray) | ((TableHead | TableBody)[] & ReactPortal)' },
            'tags': {}
        }],
    'doclets': {},
    'examples': __webpack_require__(870)
}
	

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(65),
    'react': __webpack_require__(1),
    './../../src/Table/Table.tsx': __webpack_require__(98)
};
var requireInRuntimeBase = __webpack_require__(63).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(64).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Table$0 = require('./../../src/Table/Table.tsx');\nconst Table = Table$0['Table'] || (Table$0.default || Table$0);", requireInRuntime);

module.exports = [{
        'type': 'code',
        'content': 'import { Table, TableBody, TableRow, TableHeadingCell, TableHead } from \'mark-one\';\n<Table>\n  <TableHead>\n    <TableRow>\n      <TableHeadingCell scope={\'col\'}>ID</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>First Name</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>Last Name</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody isScrollable={true}>\n    <TableRow isStriped={true}>\n      <td>1</td>\n      <td>Kristin</td>\n      <td>Glenn</td>\n    </TableRow>\n    <TableRow>\n      <td>2</td>\n      <td>Jack</td>\n      <td>Thompson</td>\n    </TableRow>\n    <TableRow isStriped={true}>\n      <td>3</td>\n      <td>Lianne</td>\n      <td>Michaels</td>\n    </TableRow>\n    <TableRow>\n      <td>4</td>\n      <td>Gabriela</td>\n      <td>Hines</td>\n    </TableRow>\n    <TableRow isStriped={true}>\n      <td>5</td>\n      <td>Cindy</td>\n      <td>Wong</td>\n    </TableRow>\n    <TableRow>\n      <td>6</td>\n      <td>Alex</td>\n      <td>Rainer</td>\n    </TableRow>\n  </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    }]
	

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'description': '',
    'displayName': 'TableBody',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }],
    'doclets': {},
    'examples': null
}
	

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'description': '',
    'displayName': 'TableCell',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': 'Text or components to be displayed in the cell',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one-pub/src/Table/TableCell.tsx',
                'name': 'TableCellProps'
            },
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        }],
    'doclets': {},
    'examples': null
}
	

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'description': '',
    'displayName': 'TableHead',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': 'Our TableRow functional component serves as the children for TableHead',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one-pub/src/Table/TableHead.tsx',
                'name': 'TableHeadProps'
            },
            'required': true,
            'type': { 'name': 'TableRow | (TableRow & string) | (TableRow & number) | (TableRow & false) | (TableRow & true) | (TableRow & ReactElement<...>) | (TableRow & ReactNodeArray) | (TableRow & ReactPortal)' },
            'tags': {}
        }],
    'doclets': {},
    'examples': null
}
	

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'description': '',
    'displayName': 'TableHeadingCell',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Text or components to be displayed in the table heading cell',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one-pub/src/Table/TableHeadingCell.tsx',
                'name': 'TableHeadingCellProps'
            },
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the group of cells that the table heading refers to',
            'name': 'scope',
            'parent': {
                'fileName': 'mark-one-pub/src/Table/TableHeadingCell.tsx',
                'name': 'TableHeadingCellProps'
            },
            'required': true,
            'type': { 'name': '"row" | "col" | "rowgroup" | "colgroup" | "auto"' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'clickHandler',
            'parent': {
                'fileName': 'mark-one-pub/src/Table/TableHeadingCell.tsx',
                'name': 'TableHeadingCellProps'
            },
            'required': false,
            'type': { 'name': '(event: MouseEvent<Element, MouseEvent>) => void' },
            'tags': {}
        }
    ],
    'doclets': {},
    'examples': null
}
	

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'description': '',
    'displayName': 'TableRow',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }],
    'doclets': {},
    'examples': null
}
	

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'description': 'Creates a global stylesheet that will apply to all sub-components,\naugmenting any locally defined styles. It applies some minor style resets,\nsetting margins/padding to 0 and box-sizing to "border-box" for consistency,\nand also sets things like the base background color, base font size, etc.\n\nFor convenience, this component is added as part of the \\[[MarkOneWrapper]],\nwhich injects the \\[[MarkOneTheme]]. To override the base styles in an\napplication, you can simply create a second stylesheet and add it inside the\nMarkOneWrapper.\n\n```jsx\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> ReactElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span> createGlobalStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> MarkOneWrapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'mark-one\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> NewGlobalCSS <span class="token operator">=</span> createGlobalStyle<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n   html, body {\n     font-size: 20px;\n   }\n</span><span class="token template-punctuation string">`</span></span>\n\n<span class="token keyword">const</span> App<span class="token punctuation">:</span> FunctionComponent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token parameter">ReactElement</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MarkOneWrapper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NewGlobalCSS</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n     </span><span class="token punctuation">{</span><span class="token punctuation">{</span> rest <span class="token keyword">of</span> the application <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">\n   </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MarkOneWrapper</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n```\n',
    'displayName': 'GlobalCSS',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'suppressMultiMountWarning',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'DefaultTheme' },
            'tags': {}
        }
    ],
    'doclets': {},
    'tags': {},
    'examples': null
}
	

/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'description': 'Provides the Mark One Theme to all child components. This should be added at\nthe top level of the application, and then any child component that needs to\nuse the theme should include the `useContext()` hook to grab it. e.g.:\n\n```jsx\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useContext<span class="token punctuation">,</span> <span class="token constant">SFC</span><span class="token punctuation">,</span> ReactElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span> ThemeContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'mark-one\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> TestComponent<span class="token punctuation">:</span> <span class="token constant">SFC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token parameter">ReactElement</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n   <span class="token keyword">const</span> theme<span class="token punctuation">:</span> BaseTheme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n   <span class="token keyword">const</span> DarkBackgroundDiv <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n     background: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>theme<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> theme<span class="token punctuation">.</span>color<span class="token punctuation">.</span>background<span class="token punctuation">.</span>dark<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n   </span><span class="token template-punctuation string">`</span></span>\n\n   <span class="token keyword">return</span> <span class="token punctuation">(</span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DarkBackgroundDiv</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n       This will have a dark background.\n     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DarkBackgroundDiv</span></span><span class="token punctuation">></span></span>\n   <span class="token punctuation">)</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> TestComponent<span class="token punctuation">;</span>\n```\n',
    'displayName': 'MarkOneWrapper',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': 'The content of the app that should receive the theme',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one-pub/src/Theme/MarkOneWrapper.tsx',
                'name': 'ThemeWrapperProps'
            },
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        }],
    'doclets': {},
    'tags': {},
    'examples': __webpack_require__(878)
}
	

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'styled-components': __webpack_require__(4),
    'react': __webpack_require__(1),
    './../../src/Theme/MarkOneWrapper.tsx': __webpack_require__(48)
};
var requireInRuntimeBase = __webpack_require__(63).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(64).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst MarkOneWrapper$0 = require('./../../src/Theme/MarkOneWrapper.tsx');\nconst MarkOneWrapper = MarkOneWrapper$0['MarkOneWrapper'] || (MarkOneWrapper$0.default || MarkOneWrapper$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': '## Mark One Theme Specimens\n\n### Background Colors'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\nconst BackgroundDiv = styled.div`\n  background: ${({theme, value, modifier}) => (\n    modifier\n    ? theme.color.background[modifier][value]\n    : theme.color.background[value])\n  };\n  padding: ${({theme}) => (theme.ws.medium)};\n  margin-top: ${({theme}) => (theme.ws.small)};\n  color: ${({theme, value}) => (\n    /dark/.test(value)\n    ? theme.color.text.light\n    : theme.color.text.dark)};\n`;\n<div>\n  {[\n     \'light\',\n     \'subtle\',\n     \'medium\',\n     \'dark\',\n     \'darker\',\n     \'accent\',\n  ].map((color) => (\n    <BackgroundDiv value={color}>Background: {color}</BackgroundDiv>\n  ))}\n  {[\'info\', \'positive\', \'negative\'].map((meaning) => (\n    [\'light\', \'medium\', \'dark\'].map((shade) => (\n      <BackgroundDiv\n        value={shade}\n        modifier={meaning}\n      >\n        {meaning}: {shade}\n      </BackgroundDiv>\n    ))\n  ))}\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### Typography'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\nconst TextBlock = styled.span`\n  font-family: ${({theme, type}) => theme.font[type].family};\n  font-weight: ${({theme, type}) => theme.font[type].weight};\n  font-size: ${({theme, type}) => theme.font[type].size}\n`;\n<>\n  <div>\n    <TextBlock type="title">This is the title</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="heading">This is the heading type</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="body">This is body text</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="bold">This is bold text</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="data">This is text for rendering data</TextBlock>\n  </div>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### Borders and Shadows'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\nconst BorderDiv = styled.div`\n  background: ${({theme}) => (theme.color.background.subtle)\n  };\n  padding: ${({theme}) => (theme.ws.medium)};\n  margin-top: ${({theme}) => (theme.ws.large)};\n  border: ${({theme, border})=> (theme.border[border])}\n  box-shadow: ${({theme, shadow})=> (theme.shadow[shadow])}\n`;\n\n<div>\n  {[\'xlight\', \'light\', \'medium\'].map((shadow) => (\n    [\'hairline\', \'light\', \'heavy\'].map((border) => (\n      <BorderDiv\n        border={border}\n        shadow={shadow}\n      >\n        {border} border | {shadow} shadow\n      </BorderDiv>\n    ))\n  ))}\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button `
  background: ${({ theme }) => (theme.color.background.medium)};
  border: ${({ theme }) => (theme.border.light)};
  color: ${({ theme }) => (theme.color.text.dark)};
  cursor: pointer;
  font-size: ${({ theme }) => (theme.font.body.size)};
  font-weight: ${({ theme }) => (theme.font.body.weight)};
  padding: ${({ theme }) => (theme.ws.xsmall + ' ' + theme.ws.small)};
  &:hover {
    background: ${({ theme }) => (theme.color.background.dark)};
  }
`;
const BasicButton = (props) => {
    const { children, clickHandler, disabled, } = props;
    const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, { onClick: clickHandler, theme: theme, disabled: disabled }, children));
};
BasicButton.defaultProps = {
    children: '',
};
/* harmony default export */ __webpack_exports__["default"] = (BasicButton);


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

const Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header `
  align-items: flex-end;
  background-color: ${({ background }) => background};
  box-shadow: ${({ theme }) => theme.shadow.light};
  display: flex;
  height: 80px;
  justify-content: ${({ justify }) => justify};
  padding: ${({ theme }) => `${theme.ws.medium} ${theme.ws.small}`};
  width: 100%;
`;
Header.defaultProps = {
    background: 'transparent',
    justify: 'space-between',
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["withTheme"])(Header));


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a `
  align-self: stretch;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  color: transparent;
  display: inline-block;
  font-size: 0;
  line-height: 0;
  margin: ${({ theme }) => `${theme.ws.xsmall} ${theme.ws.small}`};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
Logo.defaultProps = {
    href: '',
    image: '',
    width: '200px',
    height: '75px',
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["withTheme"])(Logo));


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


const StyledTable = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].table `
    border: ${({ theme }) => (theme.border.light)};
    border-collapse: collapse;
    margin: ${({ theme }) => (theme.ws.small)};
    padding: ${({ theme }) => (theme.ws.xsmall + ' ' + theme.ws.small)};
`;
const Table = (props) => {
    const { children, } = props;
    const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTable, { theme: theme }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (Table);


/***/ })

/******/ });