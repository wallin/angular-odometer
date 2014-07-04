angular.module('ui.odometer', []).provider('odometerOptions', function() {
  var self;
  self = this;
  self.defaults = {
    value: 0
  };
  this.$get = function() {
    return angular.copy(self.defaults);
  };
  return this;
}).directive('odometer', [
  'odometerOptions', function(odometerOptions) {
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {
        var odometer, opts;
        opts = scope.$eval(attrs.odometerOptions) || {};
        angular.extend(opts, odometerOptions);
        opts.el = elm[0];
        odometer = new Odometer(opts);
        scope.$watch(attrs.odometer, function(newVal) {
          odometer.update(newVal);
        });
      }
    };
  }
]);
