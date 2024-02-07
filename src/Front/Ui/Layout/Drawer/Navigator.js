/**
 * The navigator.
 *
 * @namespace Bellmade_Front_Ui_Layout_Drawer_Navigator
 */
// MODULE'S VARS
const NS = 'Bellmade_Front_Ui_Layout_Drawer_Navigator';

// MODULE'S FUNCTIONS

/**
 * TeqFW DI factory function to get dependencies for the object.
 *
 * @param {Bellmade_Front_Defaults} DEF
 *
 * @returns {Bellmade_Front_Ui_Layout_Drawer_Navigator.vueCompTmpl}
 */
export default function (
    {
        Bellmade_Front_Defaults$: DEF,
    }
) {
    // VARS
    const ITEMS = [
        {icon: 'group', label: 'Member Library', route: DEF.ROUTE_HOME,},
        {icon: 'how_to_reg', label: 'Sign Up!', route: DEF.ROUTE_HOME,},
        {icon: 'chat', label: 'Join Discord', route: DEF.ROUTE_HOME,},
        {icon: 'folder_open', label: 'Exercise Catalog', route: DEF.ROUTE_HOME,},
        {icon: 'fitness_center', label: 'Bellbites', route: DEF.ROUTE_HOME,},
    ];
    const template = `
<q-scroll-area class="fit bg-primary">
    <q-list>

        <template v-for="(item, index) in menuList" :key="index">
            <q-item clickable :active="ifActive(item)" v-ripple v-on:click="onClick(item)" class="text-black">
                <q-item-section avatar>
                    <q-icon :name="item.icon"/>
                </q-item-section>
                <q-item-section>
                    {{ item.label }}
                </q-item-section>
            </q-item>
        </template>

    </q-list>
</q-scroll-area>
`;

    // MAIN
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Bellmade_Front_Ui_Layout_Drawer_Navigator
     */
    return {
        teq: {package: DEF.SHARED.NAME},
        name: NS,
        template,
        components: {},
        data() {
            return {
                menuList: ITEMS,
            };
        },
        computed: {},
        methods: {
            ifActive(item) {
                return (this.$router.currentRoute.value.fullPath === item?.route);
            },
            onClick(item) {
                this.$router.push(item?.route ?? DEF.ROUTE_HOME);
            },
        },
        mounted() {},
    };
}
