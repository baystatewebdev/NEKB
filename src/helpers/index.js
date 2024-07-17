export const checkLandingPagePath = (pathname) => {
	const landingPagePaths = ["/free-consultation", "/free-kitchen-consultation"];
	return landingPagePaths.includes(pathname);
};
