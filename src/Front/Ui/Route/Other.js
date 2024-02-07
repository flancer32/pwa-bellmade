/**
 * The base screen for the application's homepage.
 *
 * @namespace Bellmade_Front_Ui_Route_Home
 */
// MODULE'S VARS
const NS = 'Bellmade_Front_Ui_Route_Home';

// MODULE'S FUNCTIONS

/**
 * TeqFW DI factory function to get dependencies for the object.
 *
 * @param {Bellmade_Front_Defaults} DEF
 *
 * @returns {Bellmade_Front_Ui_Route_Home.vueCompTmpl}
 */
export default function (
    {
        Bellmade_Front_Defaults$: DEF,
    }
) {
    // VARS
    const template = `
<layout-main>
OTHER PAGE
</layout-main>
`;

    // MAIN
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Bellmade_Front_Ui_Route_Home
     */
    return {
        teq: {package: DEF.SHARED.NAME},
        name: NS,
        template,
        components: {},
        data() {
            return {};
        },
        methods: {},
    };
}
