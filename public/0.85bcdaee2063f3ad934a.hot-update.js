webpackHotUpdate(0,{

/***/ 376:
/*!**************************************!*\
  !*** ./src/components/PlaceList.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 214), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 212), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 122), React = __webpack_require__(/*! react */ 56); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 56);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _materialUi = __webpack_require__(/*! material-ui */ 223);
	
	var _materialUi2 = _interopRequireDefault(_materialUi);
	
	var _PlaceJsx = __webpack_require__(/*! ./Place.jsx */ 377);
	
	var _PlaceJsx2 = _interopRequireDefault(_PlaceJsx);
	
	var Card = _materialUi2['default'].Card;
	var List = _materialUi2['default'].List;
	
	var PlaceList = (function (_React$Component) {
	    _inherits(PlaceList, _React$Component);
	
	    function PlaceList(props) {
	        _classCallCheck(this, PlaceList);
	
	        _get(Object.getPrototypeOf(PlaceList.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            places: ['hereasd', 'there']
	        };
	    }
	
	    _createClass(PlaceList, [{
	        key: 'render',
	        value: function render() {
	            var placeNodes = this.state.places.map(function (place) {
	                return _react2['default'].createElement(_PlaceJsx2['default'], { place: place });
	            });
	            return _react2['default'].createElement(
	                Card,
	                { style: {
	                        flexGrow: 1
	                    } },
	                _react2['default'].createElement(
	                    List,
	                    null,
	                    placeNodes
	                )
	            );
	        }
	    }]);
	
	    return PlaceList;
	})(_react2['default'].Component);
	
	exports['default'] = PlaceList;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 378), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(/*! react */ 56))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "PlaceList.jsx" + ": " + err.message); } }); } } })(); }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/buildin/module.js */ 11)(module)))

/***/ }

})
//# sourceMappingURL=0.85bcdaee2063f3ad934a.hot-update.js.map