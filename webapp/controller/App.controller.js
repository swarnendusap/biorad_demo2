sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast'

], function (Controller, JSONModel, MessageToast) {
	"use strict";

	var AppController = Controller.extend("biorad.demo.controller.App", {
		onInit: function () {

		},
		onAlertButtonPress: function (oEvent) {
			/*var oTable = this.byId("idProductsTable");
			oTable.getInfoToolbar().setVisible(!oEvent.getParameter("pressed"));*/
			MessageToast.show("This is BioRad Team", {
				duration: 10000, // default
				width: "100em",
			});
			//console.log();
		}
	});

});