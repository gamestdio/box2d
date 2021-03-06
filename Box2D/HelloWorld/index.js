process.chdir(__dirname);

global.System = global.System || require('systemjs');
global.ts = global.ts || require('typescript');

function boot(args) {
  if (!false) {
    System.config({
      transpiler: "typescript",
      typescriptOptions: {},
      packages: {
        '.': { defaultExtension: 'ts' },
        '../Box2D': { defaultExtension: 'ts' }
      }
    });
  } else {
    System.config({
      packages: {
        '.': { defaultExtension: 'js' },
        '../Box2D': { defaultExtension: 'js' }
      }
    });
  }
  System.import("HelloWorld").then(function(HelloWorld) {
    HelloWorld.main();
  }).catch(function(error) {
    console.error(error);
  });
}

if (require.main === module) {
  var args = process.argv.slice(2); // args from command line
  console.log(args);
  boot(args);
} else {
  module.exports = boot;
}
