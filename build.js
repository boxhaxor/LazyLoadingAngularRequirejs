{
    baseUrl: 'src/',
    dir: "dist",
    mainConfigFile : "src/require-config.js",
    removeCombined: true,
    optimizeCss: "none",
    findNestedDependencies: true,
    skipDirOptimize: true,

    //Begin develop
    generateSourceMaps: true,
    preserveLicenseComments: false,
    optimize: "none",
    //end develop
    //OR
    // //Begin production
    // optimize: "uglify2",
    // //end production
    modules: [
        {
            name: 'require-config',
            exclude: [
                'libraries'
            ],
            include: [
                'app',
                'bootstrap'
            ]
        },
        {
            name: 'libraries',
            include: [
                'angular',
                'angularCouchPotato',
                'angularUi',
                'angularRoute',
            ]
        },
        {
            name: 'FooModule',
            exclude: [ 
                'libraries',
                'require-config',
            ],
        },
        {
            name: 'BarModule',
            exclude: [ 
                'libraries',
                'require-config',
            ],
        },

    ]
}