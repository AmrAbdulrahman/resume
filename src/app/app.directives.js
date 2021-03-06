import contactsDirective from './directives/contacts/contacts.directive';
import headerDirective from './directives/header/header.directive';
import educationDirective from './directives/education/education.directive';
import experienceDirective from './directives/experience/experience.directive';
import cvBodyDirective from './directives/cv-body/cv-body.directive';
import technicalSkillsDirective from './directives/technical-skills/technical-skills.directive';
import sectionTitleDirective from './directives/section-title/section-title.directive';

angular
  .module('app.directives', [])
  .directive('header', headerDirective)
  .directive('cvBody', cvBodyDirective)
  .directive('contacts', contactsDirective)
  .directive('education', educationDirective)
  .directive('experience', experienceDirective)
  .directive('technicalSkills', technicalSkillsDirective)
  .directive('sectionTitle', sectionTitleDirective);
