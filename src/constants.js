

export const routes = {
	mainpage: "/",
	card: "/card/:id",
	linkCardId: (post) => `/card/${post.id}`
};

export const classNameBootstrap = {
	spinner: "spinner-border text-danger",
	fixed: "sr-only",
	buttonLighte: "btn btn-light"
};