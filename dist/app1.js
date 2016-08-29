webpackJsonp([2,4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _hello = __webpack_require__(1);

	var _hello2 = _interopRequireDefault(_hello);

	var _world = __webpack_require__(176);

	var _world2 = _interopRequireDefault(_world);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(36);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_hello2.default, null), document.getElementById('hello1'));
	_reactDom2.default.render(_react2.default.createElement(_world2.default, null), document.getElementById('world1'));

	(function () {

	    var img = document.createElement('img');
	    img.src = __webpack_require__(177);
	    document.body.appendChild(img);

	    img = document.createElement('img');
	    img.src = __webpack_require__(178);
	    document.body.appendChild(img);
	})();

	(function () {
	    var app = __webpack_require__(179);
	    _reactDom2.default.render(_react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'h1',
	            { className: app.h1 },
	            '123'
	        ),
	        _react2.default.createElement(
	            'h2',
	            { className: 'h2' },
	            '123'
	        )
	    ), document.getElementById('css1'));
	})();

	(function () {
	    __webpack_require__.e/* nsure */(1/* duplicate */, function (require) {
	        var content = __webpack_require__(183);
	        alert(content.world);
	    });
	})();

/***/ }
]);