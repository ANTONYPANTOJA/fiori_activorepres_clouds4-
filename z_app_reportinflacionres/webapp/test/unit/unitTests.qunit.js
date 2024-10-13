/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nsasa/z_app_reportinflacionres/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
