window.$ = window.jQuery = require('jquery');
import * as _ from 'lodash';
import angular from 'angular';
import './app/app.controllers';
import './app/app.directives';

angular.module('cvApp', [
  'app.controllers',
  'app.directives',
]);

$(document).ready(() => {
  var appWrapper = $('#app-wrapper');

  $(window).on('scroll', () => {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 20) {
      appWrapper.addClass('fixed-header');
    } else {
      appWrapper.removeClass('fixed-header');
    }
  });
});
