(function () {
    'use strict';
    module.exports={
                mainappimages: {
                    cwd: '',
                    src: ['app/images/**/*.*'],
                    dest: '.build/',
                    expand: true
                },
                mainappsounds: {
                    cwd: '',
                    src: ['app/sounds/*.*'],
                    dest: '.build/',
                    expand: true
                },
                html: {
                    cwd: '',
                    src: ['app/templates/*.*', 'app/*.html'],
                    dest: '.build/',
                    expand: true
                },
                bower: {
                    cwd: '',
                    src: ['bower_components/**/*.*'],
                    dest: '.build/app/thirdparty/',
                    expand: true
                },
                animation: {
                    cwd: '',
                    src: ['app/animation/animation.css'],
                    dest: '.build/app/css/animate.css',
                    expand:false
                }
            };
})();