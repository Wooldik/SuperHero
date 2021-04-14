

export const routes = {
	mainpage: '/',
	card: '/card/:id',
	linkCardId: (post) => {
		return `/card/${post.id}`
	}

}

export const classNameBootstrap = {
	spinner: "spinner-border text-danger",
	fixed: "sr-only"
}