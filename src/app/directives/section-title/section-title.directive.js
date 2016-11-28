export default function() {
  return {
    templateUrl: 'app/directives/section-title/section-title.view.html',
    replace: true,
    scope: {
      title: '@',
      iconClass: '@'
    }
  };
};
