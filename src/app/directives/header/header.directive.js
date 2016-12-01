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

      scope.refer = () => {
        let subject = 'Amr Abdulrahman Resume | Frontend Engineer';
        let body = `
          Hello,

          Please find below the link for Amr's CV:
          https://amrabdulrahman.github.io/resume/build/

          Regards!
        `;

        $('a.refer').attr('href', `mailto:someone@something.com?subject=${subject}&body=${body}`);
        $('a.refer').click();

        //window.open(`mailto:someone@something.com?subject=${subject}&body=${body}`);
      };
    }
  };
};
