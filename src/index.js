window.$ = window.jQuery = require('jquery');
import * as _ from 'lodash';
import angular from 'angular';
import './app/app.controllers';
import './app/app.directives';

angular.module('cvApp', [
  'app.controllers',
  'app.directives',
]);

// FB share
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1747088575543985',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// sticky header
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
