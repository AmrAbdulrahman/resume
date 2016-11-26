import contactsDirective from './directives/contacts/contacts.directive';
import headerDirective from './directives/header/header.directive';
import educationDirective from './directives/education/education.directive';

angular
  .module('app.directives', [])
  .directive('contacts', contactsDirective)
  .directive('header', headerDirective)
  .directive('education', educationDirective);
