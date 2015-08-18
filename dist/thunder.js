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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Modernizr = __webpack_require__(1);
	var Thunder = __webpack_require__(2);

	if (!Modernizr.webp) {
	  new Thunder();
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*!
	 * modernizr v3.0.0-alpha.4
	 * Build http://modernizr.com/download/#-webp-addtest-dontmin
	 *
	 * Copyright (c)
	 *  Faruk Ates
	 *  Paul Irish
	 *  Alex Sexton
	 *  Ryan Seddon
	 *  Alexander Farkas
	 *  Patrick Kettner
	 *  Stu Cox
	 *  Richard Herrera

	 * MIT License
	 */

	/*
	 * Modernizr tests which native CSS3 and HTML5 features are available in the
	 * current UA and makes the results available to you in two ways: as properties on
	 * a global `Modernizr` object, and as classes on the `<html>` element. This
	 * information allows you to progressively enhance your pages with a granular level
	 * of control over the experience.
	*/

	;(function(window, document, undefined){
	  var tests = [];
	  

	  var ModernizrProto = {
	    // The current version, dummy
	    _version: '3.0.0-alpha.4',

	    // Any settings that don't work as separate modules
	    // can go in here as configuration.
	    _config: {
	      'classPrefix' : '',
	      'enableClasses' : true,
	      'enableJSClass' : true,
	      'usePrefixes' : true
	    },

	    // Queue of tests
	    _q: [],

	    // Stub these for people who are listening
	    on: function( test, cb ) {
	      // I don't really think people should do this, but we can
	      // safe guard it a bit.
	      // -- NOTE:: this gets WAY overridden in src/addTest for
	      // actual async tests. This is in case people listen to
	      // synchronous tests. I would leave it out, but the code
	      // to *disallow* sync tests in the real version of this
	      // function is actually larger than this.
	      var self = this;
	      setTimeout(function() {
	        cb(self[test]);
	      }, 0);
	    },

	    addTest: function( name, fn, options ) {
	      tests.push({name : name, fn : fn, options : options });
	    },

	    addAsyncTest: function (fn) {
	      tests.push({name : null, fn : fn});
	    }
	  };

	  

	  // Fake some of Object.create
	  // so we can force non test results
	  // to be non "own" properties.
	  var Modernizr = function(){};
	  Modernizr.prototype = ModernizrProto;

	  // Leak modernizr globally when you `require` it
	  // rather than force it here.
	  // Overwrite name so constructor name is nicer :D
	  Modernizr = new Modernizr();

	  

	  var classes = [];
	  

	  /**
	   * is returns a boolean for if typeof obj is exactly type.
	   */
	  function is( obj, type ) {
	    return typeof obj === type;
	  }
	  ;

	  // Run through all tests and detect their support in the current UA.
	  function testRunner() {
	    var featureNames;
	    var feature;
	    var aliasIdx;
	    var result;
	    var nameIdx;
	    var featureName;
	    var featureNameSplit;

	    for ( var featureIdx in tests ) {
	      featureNames = [];
	      feature = tests[featureIdx];
	      // run the test, throw the return value into the Modernizr,
	      //   then based on that boolean, define an appropriate className
	      //   and push it into an array of classes we'll join later.
	      //
	      //   If there is no name, it's an 'async' test that is run,
	      //   but not directly added to the object. That should
	      //   be done with a post-run addTest call.
	      if ( feature.name ) {
	        featureNames.push(feature.name.toLowerCase());

	        if (feature.options && feature.options.aliases && feature.options.aliases.length) {
	          // Add all the aliases into the names list
	          for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
	            featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
	          }
	        }
	      }

	      // Run the test, or use the raw value if it's not a function
	      result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


	      // Set each of the names on the Modernizr object
	      for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
	        featureName = featureNames[nameIdx];
	        // Support dot properties as sub tests. We don't do checking to make sure
	        // that the implied parent tests have been added. You must call them in
	        // order (either in the test, or make the parent test a dependency).
	        //
	        // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
	        // hashtag famous last words
	        featureNameSplit = featureName.split('.');

	        if (featureNameSplit.length === 1) {
	          Modernizr[featureNameSplit[0]] = result;
	        } else {
	          // cast to a Boolean, if not one already
	          /* jshint -W053 */
	          if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
	            Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
	          }

	          Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
	        }

	        classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
	      }
	    }
	  }

	  ;

	  // hasOwnProperty shim by kangax needed for Safari 2.0 support
	  var hasOwnProp;

	  (function() {
	    var _hasOwnProperty = ({}).hasOwnProperty;
	    /* istanbul ignore else */
	    /* we have no way of testing IE 5.5 or safari 2,
	     * so just assume the else gets hit */
	    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
	      hasOwnProp = function (object, property) {
	        return _hasOwnProperty.call(object, property);
	      };
	    }
	    else {
	      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
	        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
	      };
	    }
	  })();

	  

	  var docElement = document.documentElement;
	  

	  var isSVG = docElement.nodeName.toLowerCase() === 'svg';
	  

	  // Pass in an and array of class names, e.g.:
	  //  ['no-webp', 'borderradius', ...]
	  function setClasses( classes ) {
	    var className = docElement.className;
	    var classPrefix = Modernizr._config.classPrefix || '';

	    if (isSVG) {
	      className = className.baseVal;
	    }

	    // Change `no-js` to `js` (we do this independently of the `enableClasses`
	    // option)
	    // Handle classPrefix on this too
	    if(Modernizr._config.enableJSClass) {
	      var reJS = new RegExp('(^|\\s)'+classPrefix+'no-js(\\s|$)');
	      className = className.replace(reJS, '$1'+classPrefix+'js$2');
	    }

	    if(Modernizr._config.enableClasses) {
	      // Add the new classes
	      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
	      isSVG ? docElement.className.baseVal = className : docElement.className = className;
	    }

	  }

	  ;

	  // As far as I can think of, we shouldn't need or
	  // allow 'on' for non-async tests, and you can't do
	  // async tests without this 'addTest' module.

	  // Listeners for async or post-run tests
	  ModernizrProto._l = {};

	  // 'addTest' implies a test after the core runloop,
	  // So we'll add in the events
	  ModernizrProto.on = function( test, cb ) {
	    // Create the list of listeners if it doesn't exist
	    if (!this._l[test]) {
	      this._l[test] = [];
	    }

	    // Push this test on to the listener list
	    this._l[test].push(cb);

	    // If it's already been resolved, trigger it on next tick
	    if (Modernizr.hasOwnProperty(test)) {
	      // Next Tick
	      setTimeout(function() {
	        Modernizr._trigger(test, Modernizr[test]);
	      }, 0);
	    }
	  };

	  ModernizrProto._trigger = function( test, res ) {
	    if (!this._l[test]) {
	      return;
	    }

	    var cbs = this._l[test];

	    // Force async
	    setTimeout(function() {
	      var i, cb;
	      for (i = 0; i < cbs.length; i++) {
	        cb = cbs[i];
	        cb(res);
	      }
	    },0);

	    // Don't trigger these again
	    delete this._l[test];
	  };

	  /**
	   * addTest allows the user to define their own feature tests
	   * the result will be added onto the Modernizr object,
	   * as well as an appropriate className set on the html element
	   *
	   * @param feature - String naming the feature
	   * @param test - Function returning true if feature is supported, false if not
	   */
	  function addTest( feature, test ) {
	    if ( typeof feature == 'object' ) {
	      for ( var key in feature ) {
	        if ( hasOwnProp( feature, key ) ) {
	          addTest( key, feature[ key ] );
	        }
	      }
	    } else {

	      feature = feature.toLowerCase();
	      var featureNameSplit = feature.split('.');
	      var last = Modernizr[featureNameSplit[0]];

	      // Again, we don't check for parent test existence. Get that right, though.
	      if (featureNameSplit.length == 2) {
	        last = last[featureNameSplit[1]];
	      }

	      if ( typeof last != 'undefined' ) {
	        // we're going to quit if you're trying to overwrite an existing test
	        // if we were to allow it, we'd do this:
	        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
	        //   docElement.className = docElement.className.replace( re, '' );
	        // but, no rly, stuff 'em.
	        return Modernizr;
	      }

	      test = typeof test == 'function' ? test() : test;

	      // Set the value (this is the magic, right here).
	      if (featureNameSplit.length == 1) {
	        Modernizr[featureNameSplit[0]] = test;
	      } else {
	        // cast to a Boolean, if not one already
	        /* jshint -W053 */
	        if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
	          Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
	        }

	        Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test;
	      }

	      // Set a single class (either `feature` or `no-feature`)
	      /* jshint -W041 */
	      setClasses([(!!test && test != false ? '' : 'no-') + featureNameSplit.join('-')]);
	      /* jshint +W041 */

	      // Trigger the event
	      Modernizr._trigger(feature, test);
	    }

	    return Modernizr; // allow chaining.
	  }

	  // After all the tests are run, add self
	  // to the Modernizr prototype
	  Modernizr._q.push(function() {
	    ModernizrProto.addTest = addTest;
	  });

	  
	/*!
	{
	  "name": "Webp",
	  "async": true,
	  "property": "webp",
	  "tags": ["image"],
	  "builderAliases": ["img_webp"],
	  "authors": ["Krister Kari", "@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
	  "notes": [{
	    "name": "Webp Info",
	    "href": "http://code.google.com/speed/webp/"
	  }, {
	    "name": "Chormium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
	    "href": "http://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
	  }, {
	    "name": "Webp Lossless Spec",
	    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
	  }, {
	    "name": "Article about WebP support on Android browsers",
	    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
	  }, {
	    "name": "Chormium WebP announcement",
	    "href": "http://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
	  }]
	}
	!*/
	/* DOC
	Tests for lossy, non-alpha webp support.
	=======

	Tests for all forms of webp support (lossless, lossy, alpha, and animated)..

	  Modernizr.webp              // Basic support (lossy)
	  Modernizr.webp.lossless     // Lossless
	  Modernizr.webp.alpha        // Alpha (both lossy and lossless)
	  Modernizr.webp.animation    // Animated WebP

	*/


	  Modernizr.addAsyncTest(function() {

	    var webpTests = [{
	      'uri': 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
	      'name': 'webp'
	    },{
	      'uri': 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==',
	      'name': 'webp.alpha'
	    },{
	      'uri': 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
	      'name': 'webp.animation'
	    }, {
	      'uri': 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
	      'name': 'webp.lossless'
	    }];

	    var webp = webpTests.shift();
	    function test(name, uri, cb) {

	      var image = new Image();

	      function addResult(event) {
	        // if the event is from 'onload', check the see if the image's width is
	        // 1 pixel (which indiciates support). otherwise, it fails

	        var result = event && event.type === 'load' ? image.width == 1 : false;
	        var baseTest = name === 'webp';

	        /* jshint -W053 */
	        addTest(name, baseTest ? new Boolean(result) : result);

	        if (cb) cb(event);
	      }

	      image.onerror = addResult;
	      image.onload = addResult;

	      image.src = uri;
	    }

	    // test for webp support in general
	    test(webp.name, webp.uri, function(e) {
	      // if the webp test loaded, test everything else.
	      if (e && e.type === 'load') {
	        for (var i = 0; i < webpTests.length; i++) {
	          test(webpTests[i].name, webpTests[i].uri);
	        }
	      }
	    });

	  });



	  // Run each test
	  testRunner();

	  delete ModernizrProto.addTest;
	  delete ModernizrProto.addAsyncTest;

	  // Run the things that are supposed to run after the tests
	  for (var i = 0; i < Modernizr._q.length; i++) {
	    Modernizr._q[i]();
	  }

	  // Leak Modernizr namespace
	  window.Modernizr = Modernizr;


	;

	})(window, document);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function() {
	  var images = document.querySelectorAll('[data-thunder]'), i;

	  for (i = 0; i < images.length; ++i) {
	    var fallback = images[i].getAttribute('data-thunder');
	    images[i].setAttribute('src', fallback);
	  }
	};


/***/ }
/******/ ]);