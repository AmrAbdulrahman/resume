import * as _ from 'lodash';
import angular from 'angular';

import './app/app.controllers';
import './app/app.directives';

angular.module('cvApp', [
  'app.controllers',
  'app.directives',
]);
