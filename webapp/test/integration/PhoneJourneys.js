jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"realtime/identifier/benutzerantrag/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"realtime/identifier/benutzerantrag/test/integration/pages/App",
	"realtime/identifier/benutzerantrag/test/integration/pages/Browser",
	"realtime/identifier/benutzerantrag/test/integration/pages/Master",
	"realtime/identifier/benutzerantrag/test/integration/pages/Detail",
	"realtime/identifier/benutzerantrag/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "realtime.identifier.benutzerantrag.view."
	});

	sap.ui.require([
		"realtime/identifier/benutzerantrag/test/integration/NavigationJourneyPhone",
		"realtime/identifier/benutzerantrag/test/integration/NotFoundJourneyPhone",
		"realtime/identifier/benutzerantrag/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});