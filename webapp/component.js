sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function(XMLView) {
    "use strict";

    /* Step 2: Bootstrap
    // alert("UI5 xin chào Bùi Trung Hiếu");
    */

    //  Step 3: Controls
    // new Text({
    //     text:"Hello Bui Trung Hieu xinh gái!"
    // }).placeAt("content");
    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App"
    }).then((oView) => oView.placeAt("content"));
    
});