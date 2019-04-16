sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast'

], function (Controller, JSONModel, MessageToast) {
	"use strict";

	/*var AppController = */
	Controller.extend("biorad.demo.controller.First", {
		onInit: function () {

		},
		onAlertButtonPress: function (oEvent) {
			var data1 = this.getView().byId("input1").getValue();
			var data2 = this.getView().byId("input2").getValue();
			var data3 = (parseInt(data1,10)+parseInt(data2,10));
			this.getView().byId("input3").setValue(data3);
		/*	MessageToast.show("First Input: "+data1, {
				duration: 1000, // default
				width: "20em",
			});*/
		},
		onNextBtnPrs: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("second");
		}
	});

});