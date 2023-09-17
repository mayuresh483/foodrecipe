import { createStore } from 'vuex'
import * as state from '../../src/store/state.js'
import * as actions from '../../src/store/actions.js'
import * as mutations from '../../src/store/mutations.js'
import * as getters from '../../src/store/getters.js'


const store = createStore({
    state,
    actions,
    mutations,
    getters,
})

export default store;