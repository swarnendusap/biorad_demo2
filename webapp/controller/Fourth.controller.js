sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageToast',
	'sap/ui/core/routing/History',
	"sap/ui/model/odata/ODataModel"

], function (Controller, JSONModel, MessageToast, History, ODataModel) {
	"use strict";

	Controller.extend("biorad.demo.controller.Fourth", {
		onInit: function () {
			console.log("onInit");
			var oAirLineJSONModel = new sap.ui.model.json.JSONModel();
			var sODataURL = "http://s4hana7b.isl.edst.ibm.com:8001/sap/opu/odata/sap/Z_DEMO_FLIGHT_1_SRV/";
			var oModel = new ODataModel(sODataURL, {
				useBatch: true,
				defaultUpdateMethod: 'PATCH',
				json: true,
				countSupported: true
			});
			oModel.read("/AirlineSet", {
				success: function (oData, response) {
				oAirLineJSONModel.setData(oData);
					console.log(oData);
				},
				failed: function (oData, response) {
					console.log("failed");
				}
			});
			this.getView().setModel(oAirLineJSONModel);
			//var test = oAirLineJSONModel.getData();
			//console.log(test);
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//this.getRouter().getRoute("fourth").attachPatternMatched(this._onRouteMatched, this);
			oRouter.getRoute("fourth").attachPatternMatched(this._onRouteMatched, this);

		},
		
		_onRouteMatched: function(oEvent) {
			var sCarId = oEvent.getParameter("arguments").carId;
			
			console.log(sCarId);
		},
		
		rowSelect: function(oEvent) {
			console.log(oEvent.getSource().getSelectedItem().getBindingContext().getObject().Carrid);
			console.log(oEvent.getSource().getSelectedItem().getBindingContext());
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