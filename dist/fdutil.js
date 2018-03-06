(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Fdutil"] = factory();
	else
		root["Fdutil"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _browser = __webpack_require__(1);

	var _browser2 = _interopRequireDefault(_browser);

	var _array = __webpack_require__(2);

	var _array2 = _interopRequireDefault(_array);

	var _cookie = __webpack_require__(3);

	var _cookie2 = _interopRequireDefault(_cookie);

	var _date = __webpack_require__(4);

	var _date2 = _interopRequireDefault(_date);

	var _email = __webpack_require__(5);

	var _email2 = _interopRequireDefault(_email);

	var _events = __webpack_require__(6);

	var _events2 = _interopRequireDefault(_events);

	var _html = __webpack_require__(7);

	var _html2 = _interopRequireDefault(_html);

	var _input = __webpack_require__(8);

	var _input2 = _interopRequireDefault(_input);

	var _mobile = __webpack_require__(9);

	var _mobile2 = _interopRequireDefault(_mobile);

	var _string = __webpack_require__(10);

	var _string2 = _interopRequireDefault(_string);

	var _url = __webpack_require__(11);

	var _url2 = _interopRequireDefault(_url);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
		browser: _browser2.default,
		array: _array2.default,
		cookie: _cookie2.default,
		date: _date2.default,
		email: _email2.default,
		events: _events2.default,
		html: _html2.default,
		input: _input2.default,
		mobile: _mobile2.default,
		strings: _string2.default,
		url: _url2.default
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * @fileOverview 定义和浏览器ua相关的方法.
	 */
	var ua = window.navigator.userAgent;
	var browser = {
		/**即：navigator.userAgent,browser.ua*/
		ua: ua,
		/**
	  *@namespace
	  *@name browser.is
	  */
		_is:
		/**@lends browser.is*/
		{
			/**是否IE浏览器
	   * @field
	   */
			ie: function ie() {
				if (!!window.ActiveXObject || "ActiveXObject" in window) {
					return true;
				} else {
					return false;
				}
			},

			/**是否IE6浏览器
	   * @field
	   */
			ie6: function ie6() {
				var ie6 = !-[1] && !window.XMLHttpRequest;
				return ie6;
			},

			/**是否IE7浏览器
	   * @field
	   */
			ie7: function ie7() {
				return this.ie && /MSIE 7.0/.test(ua);
			},

			/** 是否IE8浏览器
	   *@field
	   */
			ie8: function ie8() {
				return this.ie && /MSIE 8.0/.test(ua);
			},

			/**是否IE9浏览器
	   * @field
	   */
			ie9: function ie9() {
				return this.ie && /MSIE 9.0/.test(ua);
			},

			/**是否IE10浏览器
	   * @field
	   */
			ie10: function ie10() {
				return this.ie && /MSIE 10.0/.test(ua);
			},

			/**是否IE11浏览器
	   * @field
	   */
			ie11: function ie11() {
				return this.ie && /rv:11.0/.test(ua);
			},

			/**是否火狐浏览器
	   * @field
	   */
			firefox: /firefox/i,

			/**是否是否谷歌浏览器
	   * @field
	   */
			chrome: /chrome/i,

			/**是否欧朋浏览器
	   * @field
	   */
			opera: /opera/i,

			/**是否苹果的Safari浏览器,如果是Chrome则输出false
	   * @field
	   */
			safari: /safari/i,

			/**是否Webkit内核浏览器
	   * @field
	   */
			webkit: /webkit/i,

			/**是否Gecko内核浏览器
	   * @field
	   */
			gecko: /gecko/i,

			/**是否iOS操作系统
	   * @field
	   */
			ios: /iPad|iPhone|iPod/,

			/**是否mac操作系统
	   * @field
	   */
			mac: /mac/i,

			/**是否安卓操作系统
	   * @field
	   */
			android: /Android/,

			/**是否Windows Phone操作系统
	   * @field
	   */
			windowsphone: /Windows Phone/,

			/**是否Windows操作系统
	   * @field
	   */
			windows: /Windows/,

			/**是否为手机
	   * @field
	   */
			phone: /mobile|phone/i,

			/**是否为iPad设备
	   * @field
	   */
			ipad: /iPad/,

			/**是否为Linux操作系统
	   * @field
	   */
			linux: /Linux/
		},
		/**@namespace
	  *@name browser.support
	  */
		_support:
		/**@lends browser.support*/
		{
			/**
	   * 是否支持本地存储
	   */
			storage: function storage() {
				try {
					return "undefined" !== typeof window.localStorage;
				} catch (ex) {
					return false;
				}
			}
		},
		/**
	    *判断ua是否包含某个关键字,即：browser.ua.indexOf(keyword) > -1，可以一次判断多个值
	    *@example
	    browser.uaContains(keyword1,keyword2);
	    */
		uaContains: function uaContains(keyword1, keyword2) {
			var result = false;
			for (var i = 0; i < arguments.length; i++) {
				result = result || this.ua.indexOf(arguments[i]) > -1;
			}
			return result;
		},
		/**
	             
	    *初始化，给browser.is赋值
	    */
		init: function init() {
			var is = this.is = {};
			var _is = this._is;
			for (var r in _is) {
				if (_typeof(_is[r]) == "object") {
					is[r] = _is[r].test(ua);
				}
				if (typeof _is[r] == "function") {
					is[r] = _is[r]();
				}
			}
			is.safari = is.safari && !is.chrome;

			var _support = this._support;
			var support = this.support = {};
			for (var o in _support) {
				if (typeof _support[o] == "function") {
					support[o] = _support[o];
				}
			}
		}
	};
	browser.init();
	module.exports = browser;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @fileOverview 和数组相关的方法.
	 */

	/***
	 *数组去重
	 *@param {Array} arr 数组
	 *@example
	 *array.removeRepeat([1,2,3,4,5,1,2])
	 *@returns {Array}
	 */
	exports.removeRepeat = function (arr) {
		var obj = {},
		    array = [],
		    len = arr.length;
		for (var i = 0; i < len; i++) {
			obj[arr[i]] = null;
		}
		for (var o in obj) {
			array.push(o);
		}
		return array;
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @fileOverview 读取cookie和设置cookie.
	 */

	module.exports = {
		/**
	  *读取cookie值
	  *@returns {String}
	  */
		get: function get(name) {
			var arr = document.cookie.match(new RegExp("(^|\\W)" + name + "=([^;]*)(;|$)"));
			if (arr != null) return unescape(arr[2]);
			return "";
		},
		/**
	  *@param {Object} options 参数配置
	  *@param {String} options.name cookie的名称
	  *@param {String} options.value cookie的值
	  *@param {String} options.domain cookie访问权限域名，默认为当前域名
	  *@param {String} options.path 默认为 /
	  *@param {Date} options.expries 如果不设置，则默认为会话cookie
	  *@returns {void}
	  */
		set: function set(options) {
			var name = options.name;
			var value = options.value;
			var path = options.path || "/";
			var domain = options.domain;
			var expries = options.expries;
			var str = name + "=" + escape(value) + "; ";
			str += "path=" + path + "; ";
			if (domain) str += "domain=" + domain + "; ";
			if (expries) str += "expires=" + expires.toGMTString() + "; ";
			document.cookie = str;
		}
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @fileOverview 和日期相关的方法
	 */
	module.exports = {
		/**
	            *解析文本为日期对象，目前只支持yyyy-MM-dd hh:mm:ss的写法，解析失败返回null
	            *@param {String|Number} 要解析的时间文本,"yyyy-MM-dd hh:mm:ss"格式，或者是秒数
	            *@returns {Date}
	            *@example
	            date.parse("2012-10-10 10:10:10");
	            */
		parse: function parse(str) {
			if (/^\d{10}$/.test(str)) {
				return new Date(str * 1000);
			} else if (/^\d{13}$/.test(str)) {
				return new Date(str * 1);
			}

			str = str.trim();
			var reg = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
			var m = str.match(reg);
			if (m) {
				var year = m[1];
				var month = parseInt(m[2] - 1, 10);
				var day = parseInt(m[3], 10);
				var hour = parseInt(m[4], 10);
				var minutes = parseInt(m[5], 10);
				var seconds = parseInt(m[6], 10);
				return new Date(year, month, day, hour, minutes, seconds);
			} else {
				return null;
			}
		},
		/**
	    *格式化时间文本
	    *@param {Date} text 要格式化的文本
	    *@param {String} date 时间对象
	    *@returns {String}
	    @example
	    date.format("现在是yyyy年MM月dd日 hh点mm分ss秒，星期w",new Date());
	    y 表示年份
	    M 大写M表示月份
	    d 表示几号
	    h 表示小时
	    m 表示分
	    s 表示秒
	    w 表示星期几
	    */
		format: function format(text, date) {
			var o = {
				"M+": date.getMonth() + 1, //month
				"d+": date.getDate(), //day
				"h+": date.getHours(), //hour
				"m+": date.getMinutes(), //minute
				"s+": date.getSeconds(), //second
				"q+": Math.floor((date.getMonth() + 3) / 3), //quarter
				S: date.getMilliseconds(), //millisecond
				w: "日一二三四五六".charAt(date.getDay())
			};
			text = text.replace(/y{4}/, date.getFullYear()).replace(/y{2}/, date.getFullYear().toString().substring(2));
			for (var k in o) {
				var reg = new RegExp(k);
				text = text.replace(reg, match);
			}

			function match(m) {
				return m.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length);
			}
			return text;
		},
		/**
	  *返回date2比date1大了几天（不是十分准确，可能有1天的偏差）
	  *@param {Date} endDate 开始时间
	  *@param {Date} endDate 结束时间
	  *@returns {Number}
	  */
		getDaysPass: function getDaysPass(startDate, endDate) {
			var t = endDate.getTime() - startDate.getTime(); //相差毫秒
			var day = Math.round(t / 1000 / 60 / 60 / 24);
			if (day == 0 || day == 1) {
				day = startDate.getDate() == endDate.getDate() ? 0 : 1;
			}
			return day;
		},
		/**
	    *比较时间，获得人性化的时间差描述：刚刚，几分钟前，几小时前，几天前
	    @param {Date} date 要转化的时间
	    @param {Date} now 可选参数，当前时间，默认取客户端时间
	    *@returns {String}
	    *@example
	    var text = date.getFriendlyString(date,now);
	    */
		getFriendlyString: function getFriendlyString(date, now) {
			if (!date) return "";
			if (typeof date == "number") date = new Date(date);
			now = now || new Date();
			var result;
			var t = now.getTime() - date.getTime(); //相差毫秒
			if (t < 0) {
				result = this.format("yyyy-M-dd", date);
			} else {
				var s = Math.round(t / 1000);
				var minutes = Math.round(t / 1000 / 60);
				if (minutes == 0) {
					result = s + "秒前";
				} else if (minutes > 0 && minutes < 60) {
					result = minutes + "分钟前";
				} else if (minutes >= 60 && minutes < 60 * 24) {
					result = Math.floor(minutes / 60) + "小时前";
				} else {
					result = Math.floor(minutes / 60 / 24) + "天前";
				}
			}
			return result;
		},
		/**
	  * 根据当前时间返回：凌晨、早上、中午、晚上、深夜
	  */
		getHelloString: function getHelloString(date) {
			date = date || new Date();
			var hour = date.getHours();
			var map = {
				"0": "凌晨",
				"1": "上午",
				"2": "中午",
				"3": "下午",
				"4": "晚上",
				"5": "深夜"
			};
			//0点-3点深夜 3点-6点凌晨 6点-11点上午 11点-13点中午……
			var hoursList = "555000111112233333344444";
			var index = hoursList.charAt(hour);
			return map[index];
		},
		/**
	  *得到指定时间月份的天数
	  *@param {Date} date 可选参数，判断的时间，缺省为当前时间
	  *@returns {Number}
	  */
		getDaysOfMonth: function getDaysOfMonth(date) {
			if (!date) date = new Date();
			var isLeapYear = this.isLeapYear(date.getFullYear());
			return [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][date.getMonth()];
		},
		/**
	  *得到指定时间是否闰年
	  *@param {Date|Number} date 可选参数，判断的时间，缺省为当前时间
	  *@returns {Boolean}
	  */
		isLeapYear: function isLeapYear(date) {
			if (!date) date = new Date();
			if (date.getFullYear) date = date.getFullYear();
			return date % 400 == 0 || date % 4 == 0 && date % 100 != 0;
		},
		//获得星期几
		WEEKDAYS: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
		/**
	  *得到指定时间是星期几（中文）
	  *@param {Date} date 可选参数，判断的时间，缺省为当前时间
	  *@returns {String}
	  */
		getChineseWeekDay: function getChineseWeekDay(date) {
			if (!date) date = new Date();
			return this.WEEKDAYS[date.getDay()];
		},

		/**
	  *获得指定时间月份的1号是星期几（日历用）
	  *@param {Date} date 可选参数，判断的时间，缺省为当前时间
	  *@returns {Number}
	  */
		getFirstWeekDayOfMonth: function getFirstWeekDayOfMonth(date) {
			date = date ? new Date(date) : new Date();
			date.setDate(1);
			return date.getDay();
		},

		/**
	  *获得指定月份一共有几个星期
	  *@param {Date} date 可选参数，判断的时间，缺省为当前时间
	  *@returns {Number}
	  */
		getWeeksOfMonth: function getWeeksOfMonth(date) {
			if (!date) date = new Date();
			var firstWeekDay = this.getFirstWeekDayOfMonth(date);
			var days = this.getDaysOfMonth(date);
			return Math.ceil((days + (6 - firstWeekDay)) / 7);
		},

		/**
	  *获得距离指定日期n天的日期对象
	  *@param date 指定日期对象
	  *@param {n} 距离指定日期的天数
	  *@returns {Date}
	  * example 获取明天的日期对象:getDateByDays(new Date(), 1)
	  *
	  */
		getDateByDays: function getDateByDays(date, n) {
			if (!date) {
				date = new Date();
			}
			return new Date(date.getTime() + n * 86400000);
		},
		/**
	  *获得毫秒数对应的时间对象
	  *@param ms {int} 毫秒数
	  *@returns {Object} {day ： day, hour : hour, minute : minute, second : second}
	  */
		getTimeObj: function getTimeObj(ms) {
			var ss = 1000;
			var mi = ss * 60;
			var hh = mi * 60;
			var dd = hh * 24;
			var day = Math.floor(ms / dd);
			var hour = Math.floor((ms - day * dd) / hh);
			var minute = Math.floor((ms - day * dd - hour * hh) / mi);
			var second = Math.floor((ms - day * dd - hour * hh - minute * mi) / ss);
			//var milliSecond = ms - day * dd - hour * hh - minute * mi - second * ss;
			var strDay = day < 10 ? "0" + day : "" + day;
			var strHour = hour < 10 ? "0" + hour : "" + hour;
			var strMinute = minute < 10 ? "0" + minute : "" + minute;
			var strSecond = second < 10 ? "0" + second : "" + second;
			//var strMilliSecond = milliSecond < 10 ? "0" + milliSecond : "" + milliSecond;
			//strMilliSecond = milliSecond < 100 ? "0" + strMilliSecond : "" + strMilliSecond;
			var timeObj = {};
			timeObj.day = strDay;
			timeObj.hour = strHour;
			timeObj.minute = strMinute;
			timeObj.second = strSecond;
			return timeObj;
		}
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @fileOverview 定义和邮件地址相关的方法.
	 */

	module.exports = {
		/**
	  *获得检测邮件地址的正则表达式(可能来自全局配置)
	  *@returns {RegExp}
	  */
		getEmailRegex: function getEmailRegex() {
			return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i
			);
		},
		/**
	    * 验证邮箱地址是否合法
	    * @param {string} text 验证的邮箱地址字符串
	    * @returns {Boolean}
	    * @example
	    email.isEmail("kaifei@meizu.com");//返回true
	    */
		isEmail: function isEmail(text) {
			if (typeof text != "string") return false;
			text = $.trim(text);
			var reg = this.getEmailRegex();
			return reg.test(text);
		},
		/**
	    * 得到邮箱地址字符中的账号部分。
	    * @param {String} email 邮件地址字符串
	    * @returns {String}
	    * @example
	    email.getAccount("kaifei@meizu.com");//返回"kaifei"
	    */
		getAccount: function getAccount(email) {
			if (typeof email != "string") return "";
			email = $.trim(email);
			if (this.isEmail(email)) {
				return email.split("@")[0].toLowerCase();
			} else if (this.isEmailAddr(email)) {
				return email.match(/<([^@<>]+)@[^@<>]+>$/)[1].toLowerCase();
			} else {
				return "";
			}
		}
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _browser = __webpack_require__(1);

	var _browser2 = _interopRequireDefault(_browser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
		/**
	  *keycode常量
	  *@filed
	  */
		keycode: {
			//浏览器版本不一样 keyCode会不一样
			a: 65,
			c: 67,
			x: 88,
			v: 86,
			enter: 13,
			space: 32,
			tab: 9,
			up: 38,
			down: 40,
			left: 37,
			right: 39,
			del: 46,
			backspace: 8,
			//分号
			semicolon: _browser2.default.is.gecko || _browser2.default.is.opera ? 59 : 186,
			//逗号
			comma: 188,
			esc: 27
		},
		stopEvent: function stopEvent(e) {
			if (!e) {
				e = this.getEvent();
			}
			if (e) {
				if (e.stopPropagation) {
					e.stopPropagation();
					e.preventDefault();
				} else {
					e.cancelBubble = true;
					e.returnValue = false;
				}
			}
		}
	}; /**
	    * @fileOverview 和事件相关的方法.
	    */

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @fileOverview 对html片断进行转义的方法.
	 */

	module.exports = {
		html_decodes: {
			"&amp;": "&",
			"&quot;": '"',
			"&lt;": "<",
			"&gt;": ">",
			"&nbsp;": " ",
			"&#39;": "'"
		},
		/**
	  *转义html为安全文本
	  *@returns {String}
	  */
		encode: function encode(str) {
			if (typeof str != "string") return "";
			str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;").replace(/ /g, "&nbsp;");
			//.replace(/&amp;#([^\;]+);/ig, "&#$1;"); //将&#20117;转成相应的汉字“井”
			return str;
		},
		/**
	  *encode的逆函数
	  *@returns {String}
	  */
		decode: function decode(text) {
			if (typeof text != "string") return "";
			var map = this.html_decodes;
			//多个replace会有bug
			return text.replace(/(&quot;|&lt;|&gt;|&amp;|&nbsp;|&#39;)/g, function (str, item) {
				return map[item];
			});
			return text;
		}
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @fileOverview 和input相关的方法.
	 */

	module.exports = {
		/***
	             *聚焦去掉提示文字，失焦显示提示文字
	             *@param {Object}   options               参数集合
	             *@param {String}   options.id            必选，输入框的id名
	             *@param {String}   options.text          必选，输入框默认显示的文字
	             *@param {Array}    options.color         必选，输入框里的文字颜色，输入文字和默认提示文字
	             *@param {Function} options.focusCallback 可选，focus的回调函数
	             *@param {Function} options.blurCallback  可选，blur的回调函数
	             *@example
	             *input.placeholder({
	                  id:'#test',
	                  text:'密码',
	                  color:['#000','#999'],
	                  focusCallback:function(){},
	                  blurCallback:function(){}
	              })
	             
	             */
		placeholder: function placeholder(options) {
			var id = $(options.id);
			var color = options.color[1];
			id.val(options.text).css({
				//初始化设置
				color: color
			});
			id.focus(function () {
				//聚焦
				var text = $(this).val();
				if (text == options.text) {
					id.val("").css({
						color: options.color[0]
					});
				}
				if (options.focusCallback) {
					options.focusCallback();
				}
			});
			id.blur(function () {
				//失焦
				var text = $(this).val();
				if ($.trim(text) == "") {
					id.val(options.text).css({
						color: color
					});
				}
				if (options.blurCallback) {
					options.blurCallback();
				}
			});
		},
		/***
	             *点击文字出现输入框，可修改文字
	             *@param {Object}   options               参数集合
	             *@param {String}   options.element       必选，要进行编辑的标签属性  data-toedit
	             *@param {String}   options.cssClass      必选，控制输入框的样式
	             *@param {String}   options.type          可选，输入框的类型   input or textarea   默认input
	             *@param {Function} options.blurCallback  可选，blur的回调函数
	             *@example
	             *input.textToEdit({
	                  element:'data-toedit',
	                  cssClass:'xxxxxx',
	                  type:'textarea',
	                  blurCallback: function(e) {
	                    var target = $(e.target);
	                    target.hide();
	                    target.prev().show().text(target.val());
	                     something();
	                    .......
	                  }
	              })
	             */
		textToEdit: function textToEdit(options) {
			var self = this;
			var cssClass = options.cssClass ? options.cssClass : "";
			var type = options.type ? options.type : "input";
			var el = $("[" + options.element + "]");
			var len = el.length;
			for (var i = 0; i < len; i++) {
				(function (i) {
					var eli = el.eq(i);
					eli.click(function () {
						var text = $(this).text();
						var parent = $(this).parent();
						var input = parent.find(".input_edit_area");
						var html = self._editTextTemplate(type, text);
						$(this).hide();
						var existInput = input.length;
						if (!existInput) {
							parent.addClass(cssClass).append(html);
							input = parent.find(".input_edit_area");
						} else {
							input.show().val(text);
						}
						input.bind("blur", blur);
						self.setCursorPos({
							dom: input
						});

						function blur(e) {
							input.unbind("blur", blur);
							if (options.blurCallback) {
								options.blurCallback(e);
								return;
							}
							var target = $(e.target);
							target.hide();
							target.prev().show().text(target.val());
						}
					});
				})(i);
			}
		},
		/**
	  *与input.focus()的区别是，这里捕获异常，并且获得焦点后光标默认在文本最后
	  *@param {Object} options 参数集合
	  *@param {Object} options.dom 获得焦点的输入框
	  *@param {Number} options.pos 光标的位置 0:最前,1:选中所有文本,2:最后,默认为2
	  */
		setCursorPos: function setCursorPos(options) {
			var dom = options.dom;
			var len = dom.val().length;
			options = options || {};
			var pos = options.pos === undefined ? 2 : options.pos;
			try {
				if (pos == 2) {
					if (document.all) {
						var r = dom[0].createTextRange();
						r.moveStart("character", len);
						r.collapse(true);
						r.select();
					} else {
						dom[0].setSelectionRange(len, len);
						dom.focus();
					}
				} else if (pos == 1) {
					dom.select();
				} else {
					dom.focus();
				}
			} catch (e) {
				console.log(e);
			}
		},
		_editTextTemplate: function _editTextTemplate(type, text) {
			if (type == "input") {
				var html = '<input class="input_edit_area" type="text" value="' + text + '" />';
			} else {
				var html = '<textarea class="input_edit_area">' + text + "</textarea>";
			}
			return html;
		}
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @fileOverview 定义和手机相关的方法.
	 */

	module.exports = {
		/***
	  *获得匹配中国移动手机号的正则(可能来自全局配置)
	  *@returns {RegExp}
	  **/
		getChinaMobileRegex: function getChinaMobileRegex() {
			return new RegExp("^8613[4-9][0-9]{8}$|^8615[012789][0-9]{8}$|^8618[2378][0-9]{8}$|^8614[7][0-9]{8}$");
		},
		/***
	  *获得匹配移动手机号的正则(可能来自全局配置)
	  *@returns {RegExp}
	  **/
		getMobileRegex: function getMobileRegex() {
			return new RegExp("^8613[0-9]{9}$|^8615[012356789][0-9]{8}$|^8618[02356789][0-9]{8}$|^8614[7][0-9]{8}$");
		},
		/***
	  *检测输入文本是否为一个手机号（中国大陆的手机号），文本必须为纯数字号码
	  *@param {String} text 要检测的文本
	  *@returns {Boolean}
	  **/
		isMobile: function isMobile(text) {
			text = this.add86(text);
			return this.getMobileRegex().test(text);
		},
		/***
	  *检测输入文本是否为中国移动的手机号，文本必须为纯数字号码
	  *@param {String} text 要检测的文本
	  *@returns {Boolean}
	  **/
		isChinaMobile: function isChinaMobile(text) {
			text = this.add86(text);
			return this.getChinaMobileRegex().test(text);
		},

		/**
	  *给手机号码添加86，如果已存在则不添加
	  *@returns {String}
	  */
		add86: function add86(mobile) {
			if (typeof mobile != "string") mobile = mobile.toString();
			return mobile.trim().replace(/^(?:86)?(?=\d{11}$)/, "86");
		},
		/**
	  *移除手机号码前的86
	  *@returns {String}
	  */
		remove86: function remove86(mobile) {
			if (typeof mobile != "string") mobile = mobile.toString();
			return mobile.trim().replace(/^86(?=\d{11}$)/, "");
		}
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @fileOverview 和字符串相关的方法.
	 */

	module.exports = {
		/***
	    *获得描述性的文件大小文本，如：传入1124，返回1.1KB
	    *@param {Number} fileSize 必选参数，文件大小
	    *@param {String} options.byteChar 可选参数,可以把"B"替换为"字节"
	    *@param {String} options.maxUnit 可选参数,最大单位,目前支持：B|K|M,默认为G
	    *@param {String} options.comma 可选参数,是否用逗号分开每千单位
	    *@returns {String}
	    *@example
	    //返回1G
	    string.getFileSizeText(1024 * 1024 * 1024);
	    //返回10字节
	    string.getFileSizeText(10,{
	    byteChar:"字节"
	    });
	    //返回102400B
	    string.getFileSizeText(102400,{
	    maxUnit:"B"
	    });
	    //返回5,000KB
	    string.getFileSizeText(1024 * 5000,{
	    maxUnit:"K",
	    comma:true
	    });
	    */
		getFileSizeText: function getFileSizeText(fileSize, options) {
			var unit = "B";
			if (!options) {
				options = {};
			}
			if (options.byteChar) {
				unit = options.byteChar; //用"字节"或者"Bytes"替代z最小单位"B"
				if (options.maxUnit == "B") options.maxUnit = unit;
			}
			var maxUnit = options.maxUnit || "G";
			if (unit != maxUnit && fileSize >= 1024) {
				unit = "K";
				fileSize = fileSize / 1024;
				if (unit != maxUnit && fileSize >= 1024) {
					unit = "M";
					fileSize = fileSize / 1024;
					//debugger
					if (unit != maxUnit && fileSize >= 1024) {
						unit = "G";
						fileSize = fileSize / 1024;
					}
				}
				fileSize = Math.ceil(fileSize * 100) / 100;
			}
			if (options.comma) {
				var reg = /(\d)(\d{3})($|\.)/;
				fileSize = fileSize.toString();
				while (reg.test(fileSize)) {
					fileSize = fileSize.replace(reg, "$1,$2$3");
				}
			}
			return fileSize + unit;
		},
		/**
	  *截断字符串，并显示省略号
	  * @param {String} text 必选参数，要截断的字符串。
	  * @param {Number} maxLength 必选参数，文字长度。
	  * @param {Boolean} showReplacer 可选参数，截断后是否显示...，默认为true。
	  *@returns {String}
	  */
		getTextOverFlow: function getTextOverFlow(text, maxLength, showReplacer) {
			if (text.length <= maxLength) {
				return text;
			} else {
				return text.substring(0, maxLength) + (showReplacer ? "..." : "");
			}
		},
		getTextOverFlow2: function getTextOverFlow2(text, maxLength, showReplacer) {
			var charArr = text.split("");
			var byteLen = 0;
			var reg = new RegExp("[\x41-\x5A]|[^\x00-\xff]", "g");
			for (var i = 0; i < charArr.length; i++) {
				var cArr = charArr[i].match(reg);
				byteLen += cArr == null ? 1 : 2;

				if (byteLen > maxLength) {
					return text.substring(0, i) + (showReplacer ? "..." : "");
				}
			}
			return text;
		},
		/***
	  *格式化字符串，提供数组和object两种方式
	  *@example
	  *string.format("hello,{name}",{name:"kitty"})
	  *string.format("hello,{0}",["kitty"])
	  *@returns {String}
	  */
		format: function format(str, arr) {
			var reg;
			if ($.isArray(arr)) {
				reg = /\{([\d]+)\}/g;
			} else {
				reg = /\{([\w]+)\}/g;
			}
			return str.replace(reg, function ($0, $1) {
				var value = arr[$1];
				if (value !== undefined) {
					return value;
				} else {
					return "";
				}
			});
		},
		/**
	  * 得到字符串长度，支持中文
	  * <pre>示例：<br>
	  * string.getBytes("123");
	  * </pre>
	  * @return {Number}
	  */
		getBytes: function getBytes(str) {
			var cArr = str.match(/[^\x00-\xff]/gi);
			return str.length + (cArr == null ? 0 : cArr.length);
		},

		/**
	  * 文本编辑框文字聚焦到最后
	  * <pre>示例：<br>
	  * string.textFocusEnd(document.getElementById('text'));
	  * </pre>
	  * @param {Object} textObj 必选参数，文本框DOM对象
	  */
		textFocusEnd: function textFocusEnd(textObj) {
			if (textObj) {
				textObj.focus();
				var len = textObj.value.length;
				if (document.selection) {
					//IE
					var sel = textObj.createTextRange();
					sel.moveStart("character", len);
					sel.collapse();
					sel.select();
				} else if (typeof textObj.selectionStart == "number" && typeof textObj.selectionEnd == "number") {
					textObj.selectionStart = textObj.selectionEnd = len; //非IE
				}
			}
		}
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @fileOverview 定义对url进行处理的方法
	 */

	module.exports = {
		/**获取Url中的Get参数
	    *@param {String} key url中的查询参数
	    *@param {String} url 可选参数，默认是取当前窗口的location.href
	    *@returns {String}
	    *@example
	    var sid = url.queryString("sid");
	    */
		queryString: function queryString(key, url) {
			url = url || location.search;
			url = url.split(/&|\?/);
			var result = null;
			key = String(key).toLowerCase();
			for (var i = 0; i < url.length; i++) {
				var keyValue = url[i];
				var part = keyValue.split("=");
				if (part[0].toLowerCase() == key) {
					result = part[1];
					break;
				}
			}
			return result;
		},
		/**
	    @param {String} url 可选参数,要解析的url，默认是取当前窗口的location.href
	    @returns {Object} 返回{key:value}对应的所有get参数集合的对象
	    @example
	    var obj = url.getQueryObj("http://meizu.com/?a=1&b=2");
	    //返回
	    {
	    a:"1",
	    b:"2"
	    }
	    */
		getQueryObj: function getQueryObj(url) {
			var result = {};
			url = url || location.href;
			if (typeof url != "string") {
				throw "参数url必须是字符串类型";
			}
			if (url.indexOf("?") != -1) {
				var search = url.split("?")[1];
				var list = search.split("&");

				for (var i = 0; i < list.length; i++) {
					var pair = list[i].split("=");
					var key = pair[0];
					var value = pair[1];
					result[key] = value;
				}
			}
			return result;
		},
		/**拼接Url字符串
	    *@param {String} url 基础地址，可以带？也可以不带？
	    *@param {Object} queryObj Get查询参数
	    *@returns {String}
	    *@example
	    var url = url.makeUrl("http://meizu.com",{
	        sid:"xxxxxxx",
	        key:"yyyyyyy"
	    });
	    得到 http://meizu.com/?sid=xxxxxxx&key=yyyyyyy
	    或者
	    var url = url.makeUrl("http://meizu.com","a=1&b=2");
	    得到 http://meizu.com/?a=1&b=2
	    自动判断是否应该加上"?"
	    */
		makeUrl: function makeUrl(url, queryObj) {
			if (url.indexOf("?") == -1) {
				url += "?";
			}
			if (!/\?$/.test(url)) {
				url += "&";
			}
			if (typeof queryObj == "string") {
				url += queryObj;
			} else {
				url += this.urlEncodeObj(queryObj);
			}
			return url;
		},

		urlEncodeObj: function urlEncodeObj(queryObj) {
			var arr = [];
			for (var p in queryObj) {
				if (queryObj.hasOwnProperty(p)) {
					arr.push(p + "=" + encodeURIComponent(queryObj[p]));
				}
			}
			return arr.join("&");
		},
		/**
	  *根据完整的本地路径或者网络路径，获得文件名
	  *@returns {String}
	  */
		getFileName: function getFileName(fullpath) {
			if (typeof fullpath == "string") {
				var url = fullpath.split("?")[0];
				var reg = /[^\/\\]+$/;
				var m = url.match(reg);
				if (m) {
					return m[0];
				}
			}
			return "";
		},
		/**
	  *获得小写的文件扩展名，不带.号
	  *@returns {String}
	  */
		getFileExtName: function getFileExtName(fileName) {
			if (fileName && fileName.indexOf(".") > -1) {
				return fileName.split(".").pop().toLowerCase();
			}
			return "";
		},
		/**
	  *获得文件名，不包括扩展名
	  *@returns {String}
	  */
		getFileNameNoExt: function getFileNameNoExt(filePath) {
			var name = this.getFileName(filePath);
			return name.replace(/([^.]+)\.[^.]+$/, "$1");
		},

		/**
	  *根据给出的长度截断文件名，显示...，但是保留扩展名
	  *@param {String} fileName 文件名
	  *@param {Number} maxLength 要截断的最大长度
	  *@returns {String} 返回缩略的文件名
	  */
		getOverflowFileName: function getOverflowFileName(fileName, maxLength) {
			maxLength = maxLength || 25;
			fileName = this.getFileName(fileName);
			if (fileName.length <= maxLength) {
				return fileName;
			}
			var point = fileName.lastIndexOf(".");
			if (point == -1 || fileName.length - point > 5) {
				return fileName.substring(0, maxLength - 2) + "…";
			}
			var pattern = "^(.{" + (maxLength - 4) + "}).*(\\.[^.]+)$";
			return fileName.replace(new RegExp(pattern), "$1…$2");
		},

		/**
	  *判断字符串是否为一个url链接
	  *@param {String} url 要判断的文本
	  *@returns {Boolean}
	  */
		isUrl: function isUrl(url) {
			var reg = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;
			return reg.test(url);
		},

		/**
	    *根据一个url返回host
	    *@example
	    url.getHost("http://www.meizu.com/g2");//返回 www.meizu.com
	    */
		getHost: function getHost(url) {
			url = this.removeHttp(url);
			var match = url.match(/([^\/]+)/);
			if (match) {
				return match[1];
			} else {
				return "";
			}
		},

		/**
	    *移除一个url的协议部分
	    *@example
	    url.removeHttp("http://www.meizu.com/g2");//返回 www.meizu.com/g2
	    */
		removeHttp: function removeHttp(url) {
			try {
				return url.replace(/^(http|ftp|https|file):\/\//, "");
			} catch (e) {
				return "";
			}
		},

		/**
	    *根据一个url移除host部分
	    *@example
	    url.removeHost("http://www.meizu.com/g2");//返回 /g2
	    */
		removeHost: function removeHost(url) {
			url = this.removeHttp(url);
			return url.replace(/^[^\/]+/, "");
		}
	};

/***/ })
/******/ ])
});
;