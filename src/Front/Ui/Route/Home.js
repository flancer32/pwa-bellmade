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

    <div class="-main column q-pa-lg q-col-gutter-lg">
        <div class="-title" style="width: 100%">
            <q-img alt=""
                   src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2154993201/settings_images/250e568-46e2-270-4f1a-e58cccd746b8_Welcome_Image_5.png"
            />
        </div>

        <div class="-gallery" style="width: 100%">
            <q-img alt=""
                   src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2154993201/settings_images/ab4a34d-5e-05d1-6c13-c33e2bd68bb5_Mobile_2x.png"/>
        </div>

        <div style="width: 100%;">
            <q-list bordered class="rounded-borders q-pa-xs" style="border-color: black;border-radius: 15px;">
                <q-expansion-item
                        expand-separator
                        label="What is Bellmade?"
                        class="t-label"
                >
                    <div>
                        <p>
                            Bellmade is a kettlebell training resource developed by Eric Spector 
                            (<em><a href="https://www.instagram.com/ericdoeskettlebell">@ericdoeskettlebell</a></em>).
                        </p>
                        <p>
                            It's a simple online platform that hosts Eric's programming, general kettlebell information, 
                            and a community of like-minded individuals.
                        </p>
                        <p>
                            To learn about joining the Bellmade family, 
                            please <a href=""><span style="font-size: 16px; font-weight: bold;">click here</span></a>!
                        </p>
                    </div>
                </q-expansion-item>
            </q-list>
        </div>
        
        <div class="t-buttons t-buttons2">
            <div>
                <q-btn style="background-color: #EF6D64;" v-on:click="onClick">Sign Up!</q-btn>
            </div>
            <div>
                <q-btn style="background-color: #B7B0F7;" v-on:click="onClick">Join Discord</q-btn>
            </div>
        </div>
        
        <div class="t-buttons">
            <q-btn style="background-color: #F1B334;" v-on:click="onClick">Exercise Catalog</q-btn>
        </div>
        
        <div class="t-buttons">
            <q-btn style="background-color: #F1B334;" v-on:click="onClick">
                Bellbites (coming soon)
            </q-btn>
        </div>

    </div>

    <div class="bg-black text-primary">
        <div class="q-pa-lg">

            <div class="t-footer">
                <div>Habits over Motivation.</div>
                <div>Systems over goals.</div>
                <div>&nbsp;</div>
                <div>Swing some bells and</div>
                <div>Touch some grass!</div>
            </div>

            <div class="t-copyright">
                <div>© 2024 Touch Grass LLC</div>
                <div class="t-instagram">
                    <a href="https://www.instagram.com/ericdoeskettlebell"
                       target="_blank"
                    >
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

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
        methods: {
            onClick() {
                this.$router.push(DEF.ROUTE_OTHER);
            },
        },
    };
}
