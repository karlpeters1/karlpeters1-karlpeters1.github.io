var size = 0;
var placement = 'point';

var style_Week4544Delta_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Delta_mean");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -42.000000 && value <= -25.866667) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(26,150,65,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -25.866667 && value <= -19.400000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(104,187,88,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -19.400000 && value <= -12.933333) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(176,221,116,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -12.933333 && value <= -6.466667) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(225,242,163,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -6.466667 && value <= 0.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,192,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.000000 && value <= 6.466667) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,192,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6.466667 && value <= 12.933333) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,228,161,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12.933333 && value <= 19.400000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,183,108,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 19.400000 && value <= 25.866667) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,108,66,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 25.866667 && value <= 32.333333) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
