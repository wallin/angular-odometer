'use strict'

describe 'Directive: odometer', ->
  beforeEach module 'ui.odometer'

  $compile = {}
  beforeEach inject (_$compile_) ->
    $compile = _$compile_

  createElement = (html, scope) ->
    element = angular.element(html)
    element = $compile(element) scope
    scope.$apply()
    element

  it 'renders a odometer', inject ($rootScope) ->
    elm = createElement('<span odometer="value"></span>', $rootScope)
    expect(elm.attr('class')).toContain('odometer')

  it 'updates the number', inject ($rootScope) ->
    elm = createElement('<span odometer="value"></span>', $rootScope)
    $rootScope.value = 5
    $rootScope.$apply();
    elm = elm.find('.odometer-last-value')
    expect(elm.text()).toBe '5'

  it 'sets options', inject ($rootScope) ->
    $rootScope.value = 5
    elm = createElement('<span odometer="value" odometer-options="{theme: \'digital\'}"></span>', $rootScope)
    expect(elm.attr('class')).toContain 'odometer-theme-digital'
