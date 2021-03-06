/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.StarRating = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _helpers = __webpack_require__(1);
	
	var _vars = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StarRating = exports.StarRating = function (_HTMLElement) {
	    _inherits(StarRating, _HTMLElement);
	
	    function StarRating() {
	        _classCallCheck(this, StarRating);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(StarRating).apply(this, arguments));
	    }
	
	    _createClass(StarRating, [{
	        key: "createdCallback",
	        value: function createdCallback() {
	            this._attrs = /(size|maxvalue|src)/i;
	            Object.defineProperty(this, "value", { value: 0, writable: true });
	        }
	    }, {
	        key: "attributeChangedCallback",
	        value: function attributeChangedCallback(name, oldVal, newVal) {
	            if (this._attrs.test(name)) {
	                this._update();
	                this._toggleStates(newVal || 0);
	            }
	        }
	    }, {
	        key: "attachedCallback",
	        value: function attachedCallback() {
	            this._root = this._hasShadow() ? this.createShadowRoot() : this;
	            this._update();
	        }
	    }, {
	        key: "reset",
	        value: function reset() {
	            if (this.value !== 0) {
	                this._setValue(0);
	                this._querySelectorAllStars(removedSelectedState);
	                this.dispatchEvent(this._ratingUpdatedEvent());
	            }
	
	            function removedSelectedState(item) {
	                item.classList.remove('selected');
	                this._setStateFor(item, this._src()[0], this._size());
	            }
	
	            return this;
	        }
	    }, {
	        key: "rate",
	        value: function rate(value) {
	            this._setValue(value);
	            this._toggleStates(value);
	            return this;
	        }
	    }, {
	        key: "_setStateFor",
	        value: function _setStateFor(item, starImg, size) {
	            if (!this._hasShadow()) {
	                item.style.backgroundImage = "url(" + starImg + ")";
	                item.style.width = size;
	                item.style.height = size;
	            }
	            return item;
	        }
	    }, {
	        key: "_update",
	        value: function _update() {
	            this._render();
	            this._bindEvents();
	        }
	
	        // TODO: Update this & relate style attr adjustments to use Shadow DOM &
	        // CSS Properties (doing this hack now to get browser support)
	
	    }, {
	        key: "_renderStars",
	        value: function _renderStars() {
	            var starArr = [];
	            var maxValue = this._maxValue();
	            while (maxValue > 0) {
	                starArr.push(maxValue);
	                maxValue--;
	            }
	            return starArr.map(_helpers.starTemplate).join('');
	        }
	    }, {
	        key: "_render",
	        value: function _render() {
	            if (this._hasShadow()) {
	                // console.log(CSSTemplate(this._size(), this._src()) + this._renderStars());
	                var elementOptions = {
	                    size: this._size(),
	                    colors: this._colors(),
	                    src: this._src(),
	                    transition: this._transition()
	                };
	
	                console.log(elementOptions);
	                this._root.innerHTML = (0, _helpers.elementTemplate)(elementOptions) + this._renderStars();
	            } else {
	                this.setAttribute('style', StarRating._style(this._size(), this._src()).element());
	                this._root.innerHTML = this._renderStars();
	            }
	        }
	    }, {
	        key: "_ratingUpdatedEvent",
	        value: function _ratingUpdatedEvent() {
	            return new CustomEvent("ratingUpdated", {
	                detail: {
	                    value: this.value,
	                    maxValue: this._maxValue()
	                }
	            });
	        }
	    }, {
	        key: "_querySelectorAllStars",
	        value: function _querySelectorAllStars(iterateFn) {
	            var stars = this._root.querySelectorAll('.star');
	            [].forEach.call(stars, iterateFn, this);
	            return stars;
	        }
	    }, {
	        key: "_bindEvents",
	        value: function _bindEvents() {
	            this._querySelectorAllStars(bindClicks);
	
	            function bindClicks(item, indx) {
	                updateEventHandlers(this, item, 'click', starHandler);
	
	                function starHandler(evt) {
	                    evt.preventDefault();
	                    var selectedStars = this._root.querySelectorAll('.selected');
	
	                    if (selectedStars.length === indx + 1 && evt.target.classList.contains('selected')) {
	                        this.reset();
	                    } else {
	                        this._toggleStates(indx);
	                    }
	                }
	            }
	
	            function updateEventHandlers(starRating, element, evt, handler) {
	                element.removeEventListener(evt, handler.bind(starRating));
	                element.addEventListener(evt, handler.bind(starRating));
	            }
	        }
	    }, {
	        key: "_updateStar",
	        value: function _updateStar(item, index) {
	            return this._hasShadow() ? this._toggleStates(index) : item.setAttribute('style', StarRating._style(this._size(), this._src()[0]).star() + ";");
	        }
	    }, {
	        key: "_toggleStates",
	        value: function _toggleStates(index) {
	            var _srcs = this._src();
	            var stars = this._querySelectorAllStars(toggleStates);
	            var size = this._size();
	            this.dispatchEvent(this._ratingUpdatedEvent());
	
	            function toggleStates(item, indx) {
	                var isInRange = indx <= index;
	                item.classList[isInRange ? 'add' : 'remove']('selected');
	                this._setValue(index + 1);
	                this._setStateFor(item, isInRange ? _srcs[0] : _srcs[1], size);
	            }
	        }
	    }, {
	        key: "_src",
	        value: function _src() {
	            var _src = this.getAttribute('src');
	            return (0, _helpers.exists)(_src) ? _src.split(/(\ *),{1}(\ *)/).filter(filterSrc) : false;
	
	            function filterSrc(item) {
	                if (!/^(data).*(base64)$/.test(item) && item.trim() !== '') {
	                    return item;
	                }
	            }
	        }
	    }, {
	        key: "_colors",
	        value: function _colors() {
	            var _colors = this.getAttribute('colors');
	            return (0, _helpers.exists)(_colors) ? _colors.split(/(\ *),{1}(\ *)/).filter(filterColors) : StarRating._defaultColors();
	
	            function filterColors(item) {
	                if (item.trim() !== '') {
	                    return item;
	                }
	            }
	        }
	    }, {
	        key: "_maxValue",
	        value: function _maxValue() {
	            var maxValue = parseInt(this.getAttribute('maxValue'), 10);
	            return (0, _helpers.exists)(maxValue) && !isNaN(maxValue) ? maxValue : _vars.MAX_VALUE;
	        }
	    }, {
	        key: "_size",
	        value: function _size() {
	            var sizeAttr = this.getAttribute('size');
	            return (0, _helpers.exists)(sizeAttr) ? sizeAttr : _vars.SIZE;
	        }
	    }, {
	        key: "_transition",
	        value: function _transition() {
	            var transition = this.getAttribute('transition');
	            return (0, _helpers.exists)(transition) ? transition : false;
	        }
	    }, {
	        key: "_setValue",
	        value: function _setValue(val) {
	            this.setAttribute("value", val);
	            return this.value = val;
	        }
	    }, {
	        key: "_hasShadow",
	        value: function _hasShadow() {
	            return "createShadowRoot" in this;
	        }
	    }], [{
	        key: "_sources",
	        value: function _sources() {
	            return [_vars.BASE_IMG_BKG, _vars.SELECTED_IMG_BKG];
	        }
	    }, {
	        key: "_defaultColors",
	        value: function _defaultColors() {
	            return [_vars.UNSELECTED_COLOR, _vars.SELECTED_COLOR];
	        }
	    }, {
	        key: "_style",
	        value: function _style(size, starImg) {
	
	            return {
	                element: function element() {
	                    return _vars.ELEMENT_STYLE;
	                },
	
	                star: function star(starImg, size) {
	                    return _vars.STAR_STYLE + ("height: " + size + ";width: " + size + ";background-image: url(" + starImg + ");");
	                }
	
	            };
	        }
	    }]);
	
	    return StarRating;
	}(HTMLElement);
	
	document.registerElement("star-rating", StarRating);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = helpers;
	exports.exists = exists;
	exports.starTemplate = starTemplate;
	exports.elementTemplate = elementTemplate;
	function helpers() {
	  return {
	    exists: exists,
	    starTemplate: starTemplate,
	    elementTemplate: elementTemplate
	  };
	}
	
	function exists(testItem) {
	  return typeof testItem !== "undefined" && testItem !== null;
	}
	
	function starTemplate() {
	  return '<svg class="star" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">    <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/><path d="M0 0h18v18H0z" fill="none"/></svg>';
	}
	
	function elementTemplate(options) {
	  var size = options['size'];
	  var colors = options['colors'];
	  var src = options['src'];
	  var transition = options['transition'];
	
	  var starStyles = void 0;
	  var selectedStarStyles = void 0;
	  if (src) {
	    starStyles = 'background: rgba(255,255,255,0) url(' + src[0] + ') no-repeat center center;\n      background-size: cover;\n      fill: transparent;';
	    selectedStarStyles = 'background-image: url(' + src[1] + ');';
	  } else {
	    starStyles = 'fill: ' + colors[0] + ';';
	    selectedStarStyles = 'fill: ' + colors[1] + ';';
	    if (transition) {
	      starStyles += 'transition: ' + transition + ' fill;';
	    }
	  }
	
	  return '<style>\n           :host {\n             display: flex;\n             -webkit-align-items: center;\n             -ms-align-items: center;\n             -moz-align-items: center;\n             align-items: center;\n             -webkit-justify-content: center;\n             -ms-justify-content: center;\n             -moz-justify-content: center;\n             justify-content: center;\n             width: 100%;\n           }\n\n           .star {\n              height: ' + size + ';\n              width: ' + size + ';\n              outline: 0;\n              cursor: pointer;\n              ' + starStyles + '\n           }\n\n           .star.selected {\n              ' + selectedStarStyles + '\n           }\n\n        </style>';
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vars;
	function Vars() {
	
	  return {
	    size: SIZE,
	    maxValue: MAX_VALUE,
	    icon: {
	      base: BASE_IMG_BKG,
	      selected: SELECTED_IMG_BKG
	    },
	    styles: {
	      element: ELEMENT_STYLE,
	      star: STAR_STYLE
	    },
	    templates: {
	      css: elementTemplate,
	      html: starTemplate
	    }
	
	  };
	}
	
	var SIZE = exports.SIZE = "36px";
	var MAX_VALUE = exports.MAX_VALUE = 5;
	var BASE_IMG_BKG = exports.BASE_IMG_BKG = 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjQ0NDQ0NDIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05IDExLjNsMy43MSAyLjctMS40Mi00LjM2TDE1IDdoLTQuNTVMOSAyLjUgNy41NSA3SDNsMy43MSAyLjY0TDUuMjkgMTR6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDE4djE4SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==';
	var SELECTED_IMG_BKG = exports.SELECTED_IMG_BKG = 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRjFDNDBGIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05IDExLjNsMy43MSAyLjctMS40Mi00LjM2TDE1IDdoLTQuNTVMOSAyLjUgNy41NSA3SDNsMy43MSAyLjY0TDUuMjkgMTR6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDE4djE4SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==';
	var ELEMENT_STYLE = exports.ELEMENT_STYLE = 'display: flex;\n                                 display: -webkit-flex;\n                                 -webkit-align-items: center;\n                                 -ms-align-items: center;\n                                 -moz-align-items: center;\n                                 align-items: center;\n                                 -webkit-justify-content: center;\n                                 -ms-justify-content: center;\n                                 -moz-justify-content: center;\n                                 justify-content: center;\n                                 width: 100%;';
	var STAR_STYLE = exports.STAR_STYLE = 'outline: 0;\n                                 cursor: pointer;\n                                 background-color: rgba(255,255,255,0);\n                                 background-repeat: no-repeat;\n                                 background-position: center center;\n                                 background-size: cover;';
	var UNSELECTED_COLOR = exports.UNSELECTED_COLOR = "#cccccc";
	var SELECTED_COLOR = exports.SELECTED_COLOR = "#F1C40F";

/***/ }
/******/ ]);
//# sourceMappingURL=star-rating.js.map