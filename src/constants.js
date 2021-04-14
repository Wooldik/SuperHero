

export const routes = {
	mainpage: '/',
	card: '/card/:id',
	linkCardId: (post) => {
		return `/card/${post.id}`
	}

}