(function (window) {
	var UrlConfigurator = function () {
		this.baseUrl = rCreditsConfig.serverUrl;
		this.demoUrl = rCreditsConfig.stagingServerUrl;
	};
	UrlConfigurator.prototype.getServerUrl = function (account) {
		if (account.isDemo()) {
			var x = this.demoUrl.replace('xxx', account.getMemberId());
//      debugger
			console.log(x);
			return x;
		} else {
			return this.baseUrl.replace('xxx', account.getMemberId());
		}
	};
	window.UrlConfigurator = UrlConfigurator;
})(window);
