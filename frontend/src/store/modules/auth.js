const state = () => {
  return {
    user: null,
    loading: false,
    initialized: false,
  }
}

const mutations = {
  setUser(state, user) {state.user = user},
  setLoading(state, v) { state.loading = !!v; },
  setInitialized(state, v) { state.initialized = !!v; },
  clear(state) { state.user = null; state.loading = false; state.initialized = true; }
}

export default { namespaced: true, state, mutations };