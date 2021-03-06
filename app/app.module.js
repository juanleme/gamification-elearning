(function() {
    'use strict';

    angular.module('el', [
      // Core dependency Injection
      'el.routes',
      'el.constants',
      
      // Components dependency Injection
      'el.courses',
      'el.videos',
      'el.login',
      'el.register',

      //Shared dependency Injection
      'el.header',
      'el.footer',
      'el.cookies'
    ]);

})();
