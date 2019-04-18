sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast',
	'sap/ui/core/routing/History'

], function (Controller, JSONModel, MessageToast, History) {
	"use strict";

	/*var AppController = */
	Controller.extend("biorad.demo.controller.Second", {
		onInit: function () {
			var ourdata = {
				"currency": [{
					"name": "USD",
					"unit": 100
				},{
					"name": "EUR",
					"unit": 10
				},
				{
					"name": "INR",
					"unit": 1
				}
				]
			};
			var oViewModel = new JSONModel(ourdata);
			this.getView().setModel(oViewModel);
			console.log(ourdata);
			console.log("Jessy is Here");
			
		},
		onAlertButtonPress: function (oEvent) {
			var data1 = this.getView().byId("input1").getValue();
			var data2 = this.getView().byId("input2").getValue();
			var data3 = parseInt(data1, 10) * parseInt(data2, 10);
			this.getView().byId("input3").setValue(data3);
			/*var oTable = this.byId("idProductsTable");
			oTable.getInfoToolbar().setVisible(!oEvent.getParameter("pressed"));*/
			/*	MessageToast.show("First Input: "+data1, {
					duration: 1000, // default
					width: "20em",
				});*/
			//console.log();
		},
		onFirstBtnPrs: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("first");
		},
		onThirdBtnPrs: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("third");
		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("first", {}, this);
			}
		}
	});

});

/*			
			*/