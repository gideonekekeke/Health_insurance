//catcing all the pages when offline
const serviceWorker = () => {
	let cacheName = "v1";

	let cacheAssets = ["App.js", "App.css"];

	// call install event

	window.addEventListener("install", (e) => {
		console.log("service worker installed");

		e.waitUntil(
			caches
				.open(cacheName)
				.then((cache) => {
					console.log("service worker : caching files");
					cache.addAll(cacheAssets);
				})
				.then(() => window.skipWaiting()),
		);
	});

	// activate the event

	window.addEventListener("activate", (e) => {
		console.log("service worker activated");
	});

	// call fetch event when we are offline

	window.addEventListener("fetch", (e) => {
		console.log("service worker fetching");

		e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
	});
};

export default serviceWorker;
