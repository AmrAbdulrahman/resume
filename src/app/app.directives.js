import contactsDirective from './directives/contacts/contacts.directive';
import headerDirective from './directives/header/header.directive';
import educationDirective from './directives/education/education.directive';
import experienceDirective from './directives/experience/experience.directive';
import cvBodyDirective from './directives/cv-body/cv-body.directive';

angular
  .module('app.directives', [])
  .directive('header', headerDirective)
  .directive('cvBody', cvBodyDirective)
  .directive('contacts', contactsDirective)
  .directive('education', educationDirective)
  .directive('experience', experienceDirective);
