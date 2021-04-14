import { createSelector } from 'reselect'

const heros = state => state.posts.fetchedHeros
const loading = state => state.app.loading

export const getHeros = createSelector(
	heros,
	fetchedHeros => fetchedHeros
)
export const onLoading = createSelector(
	loading,
	loading => loading
)

