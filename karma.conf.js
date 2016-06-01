/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            'js/*.js',
            'js/lib/*.js',
            'Unit Tests/*.js'
        ],
        exclude: [
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: [
            'chrome'
        ],
        plugins: [
        ]
    });
};
