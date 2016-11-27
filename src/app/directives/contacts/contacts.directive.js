export default function() {
  return {
    templateUrl: 'app/directives/contacts/contacts.view.html',
    link(scope) {
      scope.contacts = [{
        type: 'phone',
        title: 'Cell',
        value: '(+20) 12 2886 8227',
      }, {
        type: 'text',
        title: 'Skype',
        value: 'amr.mohammed.abdulrahman',
      }, {
        type: 'email',
        title: 'Email',
        value: 'amr.abdurahman@gmail.com',
      }, {
        type: 'link',
        title: 'Github',
        value: 'github/AmrAbdulrahman',
        url: 'https://github.com/AmrAbdulrahman',
      }, {
        type: 'link',
        title: 'LinkedIn',
        value: 'Amr Abdulrahman',
        url: 'https://eg.linkedin.com/in/amrmabdulrahman',
      }, {
        type: 'link',
        title: 'Website',
        value: 'amrabdulrahman.com',
        url: 'https://amrabdulrahman.com/',
      }];
    }
  };
};
