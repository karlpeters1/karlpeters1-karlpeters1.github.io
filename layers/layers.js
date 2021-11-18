var wms_layers = [];


        var lyr_OpenStreetMapMonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap Monochrome',
            'type': 'base',
            'opacity': 1.000000,


            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var lyr_week45_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "week45",


                            source: new ol.source.ImageStatic({
                               url: "./layers/week45_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1038930.251168, 6416608.537888, 299922.267660, 8592109.765851]
                            })
                        });
var lyr_wk45wk44_Delta_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "wk45-wk44_Delta",


                            source: new ol.source.ImageStatic({
                               url: "./layers/wk45wk44_Delta_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1038930.251157, 6416608.537965, 299922.267652, 8592109.765748]
                            })
                        });
var format_Week45AvgHS_3 = new ol.format.GeoJSON();
var features_Week45AvgHS_3 = format_Week45AvgHS_3.readFeatures(json_Week45AvgHS_3,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Week45AvgHS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Week45AvgHS_3.addFeatures(features_Week45AvgHS_3);
var lyr_Week45AvgHS_3 = new ol.layer.Vector({
                declutter: true,
                opacity: 0.5,
                source:jsonSource_Week45AvgHS_3,
                style: style_Week45AvgHS_3,
                interactive: true,
    title: 'Week 45 Avg HS<br />\
    <img src="styles/legend/Week45AvgHS_3_0.png" /> 0 - 23<br />\
    <img src="styles/legend/Week45AvgHS_3_1.png" /> 23 - 46<br />\
    <img src="styles/legend/Week45AvgHS_3_2.png" /> 46 - 70<br />\
    <img src="styles/legend/Week45AvgHS_3_3.png" /> 70 - 93<br />\
    <img src="styles/legend/Week45AvgHS_3_4.png" /> 93 - 116<br />\
    <img src="styles/legend/Week45AvgHS_3_5.png" /> 116 - 139<br />\
    <img src="styles/legend/Week45AvgHS_3_6.png" /> 139 - 163<br />\
    <img src="styles/legend/Week45AvgHS_3_7.png" /> 163 - 186<br />\
    <img src="styles/legend/Week45AvgHS_3_8.png" /> 186 - 209<br />'
        });
var format_Week4544Delta_4 = new ol.format.GeoJSON();
var features_Week4544Delta_4 = format_Week4544Delta_4.readFeatures(json_Week4544Delta_4,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Week4544Delta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Week4544Delta_4.addFeatures(features_Week4544Delta_4);
var lyr_Week4544Delta_4 = new ol.layer.Vector({
                declutter: true,
                opacity: 0.5,
                source:jsonSource_Week4544Delta_4,
                style: style_Week4544Delta_4,
                interactive: true,
    title: 'Week 45-44 Delta<br />\
    <img src="styles/legend/Week4544Delta_4_0.png" /> -42 - -25.9<br />\
    <img src="styles/legend/Week4544Delta_4_1.png" /> -25.9 - -19.4<br />\
    <img src="styles/legend/Week4544Delta_4_2.png" /> -19.4 - -12.9<br />\
    <img src="styles/legend/Week4544Delta_4_3.png" /> -12.9 - -6.5<br />\
    <img src="styles/legend/Week4544Delta_4_4.png" /> -6.5 - 0<br />\
    <img src="styles/legend/Week4544Delta_4_5.png" /> 0 - 6.5<br />\
    <img src="styles/legend/Week4544Delta_4_6.png" /> 6.5 - 12.9<br />\
    <img src="styles/legend/Week4544Delta_4_7.png" /> 12.9 - 19.4<br />\
    <img src="styles/legend/Week4544Delta_4_8.png" /> 19.4 - 25.9<br />\
    <img src="styles/legend/Week4544Delta_4_9.png" /> 25.9 - 32.3<br />'
        });
var format_postdist_5 = new ol.format.GeoJSON();
var features_postdist_5 = format_postdist_5.readFeatures(json_postdist_5,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postdist_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postdist_5.addFeatures(features_postdist_5);
var lyr_postdist_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_postdist_5,
                style: style_postdist_5,
                interactive: true,
                title: '<img src="styles/legend/postdist_5.png" /> postdist'
            });

lyr_OpenStreetMapMonochrome_0.setVisible(true);lyr_week45_1.setVisible(false);lyr_wk45wk44_Delta_2.setVisible(false);lyr_Week45AvgHS_3.setVisible(false);lyr_Week4544Delta_4.setVisible(true);lyr_postdist_5.setVisible(false);
var layersList = [lyr_OpenStreetMapMonochrome_0,lyr_week45_1,lyr_wk45wk44_Delta_2,lyr_Week45AvgHS_3,lyr_Week4544Delta_4,lyr_postdist_5];
lyr_Week45AvgHS_3.set('fieldAliases', {'Postdist': 'Postdist', 'Postarea': 'Postarea', 'hs_hrs_mean': 'hs_hrs_mean', });
lyr_Week4544Delta_4.set('fieldAliases', {'Postdist': 'Postdist', 'Postarea': 'Postarea', 'Delta_mean': 'Delta_mean', });
lyr_postdist_5.set('fieldAliases', {'Postdist': 'Postdist', 'Postarea': 'Postarea', });
lyr_Week45AvgHS_3.set('fieldImages', {'Postdist': '', 'Postarea': '', 'hs_hrs_mean': '', });
lyr_Week4544Delta_4.set('fieldImages', {'Postdist': '', 'Postarea': '', 'Delta_mean': '', });
lyr_postdist_5.set('fieldImages', {'Postdist': '', 'Postarea': '', });
lyr_Week45AvgHS_3.set('fieldLabels', {'Postdist': 'no label', 'Postarea': 'no label', 'hs_hrs_mean': 'inline label', });
lyr_Week4544Delta_4.set('fieldLabels', {'Postdist': 'no label', 'Postarea': 'inline label', 'Delta_mean': 'inline label', });
lyr_postdist_5.set('fieldLabels', {'Postdist': 'no label', 'Postarea': 'no label', });
lyr_postdist_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
