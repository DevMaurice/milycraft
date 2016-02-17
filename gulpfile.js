var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
var csspath = 'resources/assets/css/';
var jspath = 'resources/assets/js/';
var nodepath = 'node_modules/'

elixir(function(mix) {
    mix.sass('app.scss',csspath);
    mix.copy(nodepath+'bootstrap/dist/css/bootstrap.css',csspath+'bootstrap.css') //bootstrap css
    	.copy(nodepath+'font-awesome/css/font-awesome.css',csspath+'font-awesome.css')
    	.copy(nodepath+'bootstrap/dist/js/bootstrap.js',jspath+'bootstrap.js') //bootstrap js
    	.copy(nodepath+'jquery/dist/jquery.js',jspath+'jquery.js')
    	.copy('font-awesome/fonts/**', 'public/build/fonts')
    mix.styles([
    	'bootstrap.css',
    	'app.css',
    	'font-awesome.css',
        'sb-admin.css'
    	]);
    mix.scripts([    	
    	'jquery.js',
        'bootstrap.js',
    	]);
    mix.version(['js/all.js','css/all.css'])
});
