(function() {
  angular.module('docsApp')
    .factory('$demoAngularScripts', ['BUILDCONFIG', DemoAngularScripts]);

  function DemoAngularScripts(BUILDCONFIG) {
    var scripts = [
      'angular.js',
      'angular-animate.min.js',
      'angular-route.min.js',
      'angular-aria.min.js',
      'angular-messages.min.js'
    ];

    return {
      all: allAngularScripts
    };

    function allAngularScripts() {
      return scripts.map(fullPathToScript);
    };

    function fullPathToScript(script) {
      return "script" + BUILDCONFIG.ngVersion + "/" + script;
    };
  };
})();
