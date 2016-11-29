export default function() {
  return {
    templateUrl: 'app/directives/header/header.view.html',
    link(scope) {
      scope.print = () => {
        // so many solutions out there to solve the problem of "printing part of the page"
        // and this one, is the most neat one, from my POV
        // it doesn't play around HTML, doesn't create, remove, recreates DOM
        // we simply have 'printable' area in the page
        // and play around that with pure CSS
        window.print();
      };

      scope.share = () => {
        window.FB.ui({
          method: 'share',
          href: 'https://amrabdulrahman.github.io/resume/build/'
        }, (response) => {
          console.log(response);
        });
      };
    }
  };
};
