/**
 * Plugin constants (hardcoded configuration) for frontend code.
 */
export default class Bellmade_Front_Defaults {

    ROUTE_HOME = '/';
    ROUTE_OTHER = '/other';

    /** @type {Bellmade_Shared_Defaults} */
    SHARED;

    /**
     * @param {Bellmade_Shared_Defaults} SHARED
     */
    constructor(
        {
            Bellmade_Shared_Defaults$: SHARED,
        }
    ) {
        this.SHARED = SHARED;
        Object.freeze(this);
    }
}
