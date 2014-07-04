# Directive
angular.module('ui.odometer', [])
.provider('odometerOptions', ->
  self = @
  self.defaults =
    value: 0
  @$get = -> angular.copy(self.defaults)
  @
)
.directive('odometer', [
  'odometerOptions'
  (odometerOptions) ->
    restrict: 'A'
    link: (scope, elm, attrs) ->
      opts = scope.$eval(attrs.odometerOptions) || {}
      angular.extend(opts, odometerOptions)
      opts.el = elm[0]
      odometer = new Odometer(opts)
      scope.$watch attrs.odometer, (newVal) ->
        odometer.update(newVal)
        return
      return
])
