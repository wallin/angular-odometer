[![Bower version](https://badge.fury.io/bo/angular-odometer-js.png)](http://badge.fury.io/bo/angular-odometer-js)
[![NPM version](https://badge.fury.io/js/angular-odometer-js.png)](http://badge.fury.io/js/angular-odometer-js)

[![Build Status](https://travis-ci.org/wallin/angular-odometer.png?branch=master)](https://travis-ci.org/wallin/angular-odometer)
[![Code Climate](https://codeclimate.com/github/wallin/angular-odometer.png)](https://codeclimate.com/github/wallin/angular-odometer)
angular-odometer
==============

Angular.JS directive for [Hubspot odometer](http://github.hubspot.com/odometer/docs/welcome/).

Copyright (C) 2014, Sebastian Wallin <sebastian.wallin@gmail.com>

Requirements
-----

* AngularJS (http://angularjs.org)
* Odometer (http://github.hubspot.com/odometer/docs/welcome/)

Install with Bower
-----

```
bower install angular-odometer-js --save
```

Install with NPM
-----

```
npm install angular-odometer-js --save
```

Usage
-----
Include `angular-odometer.js` in your application, as well as the `odometer.js` and the [default theme CSS file](http://github.hubspot.com/odometer/api/themes/)

```html
<script src="components/odometer/odometer.js"></script>
<script src="components/angular-odometer/dist/angular-odometer.js"></script>

<link rel="stylesheet" href="components/odometer/themes/odometer-theme-minimal.css"/>
```

Add the module `ui.odometer` as a dependency to your app:

```js
var app = angular.module('app', ['ui.odometer']);
```

Then use the directive on a tag of choice tag and it will convert it to a odometer for you. Examples:

```html
<span odometer="'5'">

<span odometer="visitors">

<span odometer="visitors" odometer-options="{theme: 'digital', duration: 3000}">
```

Configuration
-----

The options that are sent along to Odometer can be set either
directly in the directive as seen above with `odometer-options` hash or configured as default parameters via the `odometerOptionsProvider`:

```js
angular.module('ui.odometer').config([
  'odometerOptionsProvider', function(odometerOptionsProvider) {
    odometerOptionsProvider.defaults = {
      duration : 3000,
      theme    : 'digital'
    };
  }
]);
```

All the available options can be seen over at the [Odometer docs](http://github.hubspot.com/odometer/)

License
-----

MIT
