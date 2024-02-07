/**
 * Web application.
 *
 * Initialization:
 *
 * Then create and mount root vue component to given DOM element.
 */
// MODULE'S VARS
const NS = 'Bellmade_Front_App';

// MODULE'S CLASSES
/**
 * @implements TeqFw_Web_Front_Api_IApp
 */
export default class Bellmade_Front_App {
    /**
     * @param {TeqFw_Di_Api_Container} container
     * @param {function} createApp
     * @param {function} createRouter
     * @param {function} createWebHashHistory
     * @param {Bellmade_Front_Defaults} DEF
     * @param {TeqFw_Core_Shared_Api_Logger} logger -  instance
     * @param {TeqFw_Core_Shared_Logger_Base} loggerBase
     * @param {TeqFw_Ui_Quasar_Front_Ext} quasar
     * @param {TeqFw_Web_Front_Mod_Config} modCfg
     * @param {TeqFw_Ui_Quasar_Front_Lib_Spinner.vueCompTmpl} uiSpinner
     * @param {Bellmade_Front_Ui_Layout_Main.vueCompTmpl} layoutMain
     */
    constructor(
        {
            container,
            'TeqFw_Vue_Front_Ext_Vue.createApp': createApp,
            'TeqFw_Vue_Front_Ext_Router.createRouter': createRouter,
            'TeqFw_Vue_Front_Ext_Router.createWebHashHistory': createWebHashHistory,
            Bellmade_Front_Defaults$: DEF,
            TeqFw_Core_Shared_Api_Logger$$: logger,
            TeqFw_Core_Shared_Logger_Base$: loggerBase,
            TeqFw_Ui_Quasar_Front_Ext: quasar,
            TeqFw_Web_Front_Mod_Config$: modCfg,
            TeqFw_Ui_Quasar_Front_Lib_Spinner$: uiSpinner,
            Bellmade_Front_Ui_Layout_Main$: layoutMain,
        }
    ) {
        // VARS
        let _isInitialized = false; // application is initialized and can be mounted
        let _print; // function to printout logs to UI or console
        let _root; // root vue component for the application

        // INSTANCE METHODS

        this.init = async function (fnPrintout) {
            // FUNCS

            /**
             * Create printout function to log application startup events (to page or to console).
             * @param {function(string)} fn
             * @return {function(string)}
             */
            function createPrintout(fn) {
                return (typeof fn === 'function') ? fn : (msg) => console.log(msg);
            }

            function initQuasarUi(app, quasar) {
                app.use(quasar, {config: {}});
                // noinspection JSUnresolvedVariable
                quasar.iconSet.set(quasar.iconSet.svgMaterialIcons);
            }

            /**
             * @param {{use:function}} app Vue 3 app
             * @param {Bellmade_Front_Defaults} DEF
             * @param {TeqFw_Di_Api_Container} container
             * @memberof Bellmade_Front_App
             */
            function initRouter(app, DEF, container) {
                /** @type {{addRoute, beforeEach}} */
                const router = createRouter({
                    history: createWebHashHistory(),
                    routes: [],
                });
                // setup application routes (load es6-module on demand using DI-container)
                router.addRoute({
                    path: DEF.ROUTE_HOME,
                    component: () => container.get('Bellmade_Front_Ui_Route_Home$'),
                });
                router.addRoute({
                    path: DEF.ROUTE_OTHER,
                    component: () => container.get('Bellmade_Front_Ui_Route_Other$'),
                });
                //
                app.use(router);
            }

            // MAIN
            let res = true;
            _print = createPrintout(fnPrintout);
            _print(`TeqFW App is initializing...`);

            // create root vue component
            _root = createApp({
                teq: {package: DEF.SHARED.NAME},
                name: NS,
                data() {
                    return {
                        canDisplay: false
                    };
                },
                template: '<router-view v-if="canDisplay"/><div class="launchpad" v-if="!canDisplay">App is starting...</div>',
                async mounted() {
                    logger.info(`Started with route: '${JSON.stringify(this.$router.currentRoute.value)}'`);
                    this.canDisplay = true;
                }
            });

            // ... and add global available components
            _root.component('uiSpinner', uiSpinner);
            _root.component('layoutMain', layoutMain);

            // other initialization
            _print(`Start the application initialization.`);
            await modCfg.init({}); // this app has no separate 'doors' (entry points)
            _print(`The app config is loaded.`);
            try {
                initQuasarUi(_root, quasar);
                _print(`Data sources are initialized.`);
                // validate route and authentication
                initRouter(_root, DEF, container);
                _print(`Vue app is created and initialized.`);
                _isInitialized = true;
            } catch (e) {
                _print(e?.message);
                res = false;
            }
            return res;
        };

        /**
         * Mount root vue component of the application to DOM element.
         *
         * @see https://v3.vuejs.org/api/application-api.html#mount
         *
         * @param {Element|string} elRoot
         */
        this.mount = function (elRoot) {
            if (_isInitialized) _root.mount(elRoot);
        };

        /**
         * Launch re-installation app.
         * @param {Element|string} elRoot
         */
        this.reinstall = function (elRoot) {
            _print(`
It is required to reinstall app. Please clean up all data in DevTools 
(F12 / Application / Storage / Clear site data).
Then reload this page.
`);
        };
    }
}
