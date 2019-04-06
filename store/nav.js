export const state = () => ({
	sidebarVisible: false
})

export const mutations = {
	TOGGLE_SIDEBAR_VISIBLE(state) {
		state.sidebarVisible = !state.sidebarVisible
	}
}

export const actions = {
	toggleSidebar({
		commit
	}) {
		commit("TOGGLE_SIDEBAR_VISIBLE")
	}
}
