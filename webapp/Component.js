sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "sap/ui/model/odata/ODataModel",
  "sap/ui/model/json/JSONModel",
], function(UIComponent, Device, ODataModel, JSONModel) {
  "use strict";

  return UIComponent.extend("biorad.demo.Component", {

    metadata: {
    	manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * In this method, the resource and application models are set and the router is initialized.
     * @public
     * @override
     */
    init: function() {

      var mConfig = this.getMetadata().getConfig();
      var serviceConfig = mConfig.serviceConfig;

      //var sServiceUrle = serviceConfig.serviceUrle;





      // set the i18n model
      //this.setModel(models.createResourceModel(mConfig.i18nBundle), "i18n");

      UIComponent.prototype.init.apply(this, arguments);
      this.getRouter().initialize();
    },

    /**
     * The component is destroyed by UI5 automatically.
     * In this method, the ListSelector and ErrorHandler are destroyed.
     * @public
     * @override
     */
    destroy: function() {

    },

    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     * @public
     * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    getContentDensityClass: function() {
      /*if (this._sContentDensityClass === undefined) {
        // check whether FLP has already set the content density class; do nothing in this case
        if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
          this._sContentDensityClass = "";
        } else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
          this._sContentDensityClass = "sapUiSizeCompact";
        } else {
          // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
          this._sContentDensityClass = "sapUiSizeCozy";
        }
      }
      return this._sContentDensityClass;*/
    },

    /**
     * Creates a promise which is resolved when the metadata is loaded.
     * @param {sap.ui.core.Model} oModel the app model
     * @private
     */
    _createMetadataPromise: function(oModel) {

    }

  });

});