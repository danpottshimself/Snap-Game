(function () {
    'use strict';
    module.exports={
        concat: {
            cwd: '',
            src: ['app/scripts/modules.js', 'app/scripts/**/*.js'],
            dest: '.build/app/scripts/app.js',
            expand: false,
            nonull: true,
            ext: '.min.js'
        }
    };
})();