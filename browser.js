try {
	if ( typeof window.window.document.getElementById === "function" ) {
		module.exports = require("pusher-js")
	}
} catch(e) {
	/// copy and change
	module.exports = require("./lib/pusher.worker.min.js")
}