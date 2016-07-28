var gulp = require("gulp");
var elixir = require('laravel-elixir');
var ts = require('gulp-typescript');
var ets = require('elixir-typescript');
var Task = Elixir.Task;

elixir.config.publicPath = 'dist';
elixir.config.assetsPath = 'src';

elixir(function(mix) {
    
    // mix.copy('./node_modules/@angular', 'dist/js/libs/@angular');
    // mix.copy('./node_modules/rxjs', 'dist/js/libs/rxjs');
    // mix.copy('./node_modules/angular2-in-memory-web-api', 'dist/js/libs/angular2-in-memory-web-api');
    // mix.copy('./node_modules/reflect-metadata/Reflect.js.map', 'dist/js/libs/');

    mix.sass('app.scss');

    mix.scripts([
        './node_modules/core-js/client/shim.js',
        './node_modules/zone.js/dist/zone.js',
        './node_modules/reflect-metadata/Reflect.js',
        './node_modules/systemjs/dist/system.src.js',
        'systemjs.config.js'
    ], "dist/js/libs/lib.js");
    
    mix.typescript(
        [
            'app.component.ts',
            'main.ts'
        ],
        'dist/'
    );
    mix.copy('./src/typescript/*.js', 'dist/js/');
    mix.copy('./src/typescript/*.map', 'dist/js/');
    mix.browserSync({
        files: ['src/**/*', 'dist/**/*'],
        proxy: "angular2-js.dev"
    });

});