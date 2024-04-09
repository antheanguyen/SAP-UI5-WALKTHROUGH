sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast,JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App",{
        onInit(){
            //Set data model for View
            const oData = {
                recipient : {
                    name: "Test 7"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
        onShowAnswer(){
            MessageToast.show ("Đẹp trai lắm lắm");
        }
    });
    
});