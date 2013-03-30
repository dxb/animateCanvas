require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    // use app here

        var canvas = document.getElementById('test');

            var ctx = canvas.getContext('2d');
            ctx.fillRect(25,25,100,100);
            ctx.clearRect(45,45,60,60);
            ctx.strokeRect(50,50,50,50);


   //console.log(app);
});