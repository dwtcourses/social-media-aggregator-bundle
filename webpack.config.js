var Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath(Encore.isProduction() ? 'Resources/public/build/' : 'Resources/public/build/dev/')
    // public path used by the web server to access the output path
    .setPublicPath(Encore.isProduction() ? '/bundles/milosasocialmediaaggregator/build/' : '/bundles/milosasocialmediaaggregator/build/dev')
    // only needed for CDN's or sub-directory deploy
    .setManifestKeyPrefix('/bundles/milosasocialmediaaggregator/build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('app', './Resources/assets/js/app.js')
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
    .enableReactPreset()
    .enableSourceMaps(!Encore.isProduction())
    .cleanupOutputBeforeBuild()
    .configureBabel(function(babelConfig) {
        // add additional presets
        // babelConfig.presets.push('@babel/react');


        // no plugins are added by default, but you can add some
        // babelConfig.plugins.push('styled-jsx/babel');
    })
    .disableSingleRuntimeChunk()
;

module.exports = Encore.getWebpackConfig();
