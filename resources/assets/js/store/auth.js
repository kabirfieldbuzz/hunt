import Hunt from '../config/Hunt'
export default {
    state: {
        user: null,
        redirectTo: null
    },
    mutations: {
        /**
         * Sets the user data at logged in and emits event loggedIn
         *
         * @param state
         * @param user
         */
        loggedIn(state, user) {
            state.user = user;
            Bus.$emit('loggedIn');
        },
        /**
         * Removes the auth data
         *
         * @param state
         */
        loggedOut(state) {
            window.Laravel.token = null;
            state.user = null;
        }
    },
    actions: {
        /**
         * Validates authentication and updates token
         *
         * @param ctx
         */
        loggedIn(ctx) {
            Vue.http.get(Hunt.BASE_URL + '/refreshToken')
                .then(
                    success => {
                        window.Laravel.token=success.body.token;
                        ctx.commit('loggedIn', success.body.user);
                    },
                    fail => {
                        Hunt.toast('Error refreshing token.', 'error');
                    }
                );
        },
        /**
         * Invokes loggedOut
         *
         * @param ctx
         */
        loggedOut(ctx) {
            ctx.commit('loggedOut');
        }
    },
    getters: {
        /**
         * Checks if user logged in
         *
         * @param state
         * @returns {boolean}
         */
        isLoggedIn(state) {
            return state.user!=null;
        },
        /**
         * Gives user email (if authenticated)
         *
         * @param state
         * @returns {string|*}
         */
        userEmail(state) {
            return state.user.email;
        },
        /**
         * Gives user nick name (if authenticated)
         * @param state
         */
        userName(state) {
            return state.user.name;
        }
    }
}