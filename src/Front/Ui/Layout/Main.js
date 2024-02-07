/**
 * The main layout for regular pages.
 *
 * The main sizes (see `web/css/vars.css`, prefix `--size-`):
 *  - 50px: header's height
 *
 * @namespace Bellmade_Front_Ui_Layout_Main
 */
// MODULE'S VARS
const NS = 'Bellmade_Front_Ui_Layout_Main';

// MODULE'S FUNCTIONS

/**
 * TeqFW DI factory function to get dependencies for the object.
 *
 * @param {Bellmade_Front_Defaults} DEF
 * @param {TeqFw_Vue_Front_Util} utilVue
 * @param {Bellmade_Front_Ui_Layout_Drawer_Navigator.vueCompTmpl} uiNavigator
 *
 * @returns {Bellmade_Front_Ui_Layout_Main.vueCompTmpl}
 */
export default function (
    {
        Bellmade_Front_Defaults$: DEF,
        TeqFw_Vue_Front_Util$: utilVue,
        Bellmade_Front_Ui_Layout_Drawer_Navigator$: uiNavigator,
    }
) {
    // VARS
    const template = `
<q-layout view="hHh lpR lFf">

    <q-header elevated class="bg-primary text-white">
        <q-toolbar class="q-pa-xs">
                <q-img
                    alt="Header Logo"
                    style="width: 140px" 
                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2154993201/settings_images/18285ba-8f3a-60be-2834-51ccd7de2d84_Bellmade_Top_Left_Logo.png"
                />   
            <q-space/>
            <div class="q-gutter-sm">
                <q-btn flat icon="menu" color="black" size="lg" @click="toggleNavigator" />
            </div>
        </q-toolbar>
    </q-header>

    <q-drawer v-model="ifNavigatorOpen" side="right" overlay elevated>
        <ui-navigator/>
    </q-drawer>

    <q-page-container class="bg-primary">
        <router-view>
            <q-page style="overflow-y: auto; height: calc(100vh - 50px);">
                <slot/>
            </q-page>
        </router-view>
    </q-page-container>

</q-layout>
`;

    // MAIN
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Bellmade_Front_Ui_Layout_Main
     */
    return {
        teq: {package: DEF.SHARED.NAME},
        name: NS,
        template,
        components: {uiNavigator},
        data() {
            return {
                ifNavigatorOpen: false,
            };
        },
        computed: {},
        methods: {
            onBack() {
                utilVue.goBack(this.$router, DEF.ROUTE_HOME);
            },
            toggleNavigator() {
                this.ifNavigatorOpen = !this.ifNavigatorOpen;
            }
        },
        mounted() { },
    };
}
