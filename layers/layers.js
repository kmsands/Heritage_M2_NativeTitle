ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:7851").setExtent([306515.921671, 7925258.449781, 826641.784012, 8191828.563871]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WestKimberleyTitleClaims_1 = new ol.format.GeoJSON();
var features_WestKimberleyTitleClaims_1 = format_WestKimberleyTitleClaims_1.readFeatures(json_WestKimberleyTitleClaims_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_WestKimberleyTitleClaims_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestKimberleyTitleClaims_1.addFeatures(features_WestKimberleyTitleClaims_1);
var lyr_WestKimberleyTitleClaims_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WestKimberleyTitleClaims_1, 
                style: style_WestKimberleyTitleClaims_1,
                popuplayertitle: "West Kimberley Title Claims",
                interactive: true,
    title: 'West Kimberley Title Claims<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_0.png" /> BINDUNBUR<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_1.png" /> BINDUNBUR #2<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_2.png" /> BINDUNBUR PART B<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_3.png" /> BIRRIMAN-GAN<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_4.png" /> BOORROOLA MOORROOL MOORROOL PART A<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_5.png" /> EDARRBUR (RUBIBI #18) (ON BEHALF OF THE YAWURU COMMUNITY)<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_6.png" /> JABIRR JABIRR/NGUMBARL<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_7.png" /> JABIRR JABIRR/NGUMBARL PEOPLE PART B<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_8.png" /> JOOMBARN- BURU<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_9.png" /> NYIKINA MANGALA<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_10.png" /> NYIKINA MANGALA #2<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_11.png" /> NYIKINA MANGALA and NYIKINA MANGALA #2<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_12.png" /> RUBIBI COMMUNITY<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_13.png" /> RUBIBI No. 6<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_14.png" /> WARRWA COMBINED PART A<br />\
    <img src="styles/legend/WestKimberleyTitleClaims_1_15.png" /> WARRWA MAWADJALA GADJIDGAR<br />'
        });
var format_DevelopmentEnvelope_2 = new ol.format.GeoJSON();
var features_DevelopmentEnvelope_2 = format_DevelopmentEnvelope_2.readFeatures(json_DevelopmentEnvelope_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_DevelopmentEnvelope_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DevelopmentEnvelope_2.addFeatures(features_DevelopmentEnvelope_2);
var lyr_DevelopmentEnvelope_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DevelopmentEnvelope_2, 
                style: style_DevelopmentEnvelope_2,
                popuplayertitle: "Development Envelope",
                interactive: true,
                title: '<img src="styles/legend/DevelopmentEnvelope_2.png" /> Development Envelope'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_WestKimberleyTitleClaims_1.setVisible(true);lyr_DevelopmentEnvelope_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WestKimberleyTitleClaims_1,lyr_DevelopmentEnvelope_2];
lyr_WestKimberleyTitleClaims_1.set('fieldAliases', {'id': 'id', 'object_id': 'object_id', 'native_title_determined_number': 'native_title_determined_number', 'nntt_no': 'nntt_no', 'federal_court_reference': 'federal_court_reference', 'determination_name': 'determination_name', 'land_id_number': 'land_id_number', 'registered_nt_body_corp': 'registered_nt_body_corp', 'data_source': 'data_source', 'comments': 'comments', 'area_sq_km': 'area_sq_km', 'determination_method': 'determination_method', 'determined_in_full': 'determined_in_full', 'determined_outcome': 'determined_outcome', 'design_file': 'design_file', 'design_level': 'design_level', 'last_updated': 'last_updated', 'registration_date': 'registration_date', 'determination_date': 'determination_date', 'determination_reference': 'determination_reference', 'st_area_shape_': 'st_area_shape_', 'st_perimeter_shape_': 'st_perimeter_shape_', });
lyr_DevelopmentEnvelope_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_WestKimberleyTitleClaims_1.set('fieldImages', {'id': 'Hidden', 'object_id': 'Hidden', 'native_title_determined_number': 'Hidden', 'nntt_no': 'TextEdit', 'federal_court_reference': 'Hidden', 'determination_name': 'TextEdit', 'land_id_number': 'Hidden', 'registered_nt_body_corp': 'TextEdit', 'data_source': 'Hidden', 'comments': 'Hidden', 'area_sq_km': 'Hidden', 'determination_method': 'Hidden', 'determined_in_full': 'Hidden', 'determined_outcome': 'Hidden', 'design_file': 'Hidden', 'design_level': 'Hidden', 'last_updated': 'Hidden', 'registration_date': 'Hidden', 'determination_date': 'Hidden', 'determination_reference': 'Hidden', 'st_area_shape_': 'Hidden', 'st_perimeter_shape_': 'Hidden', });
lyr_DevelopmentEnvelope_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_WestKimberleyTitleClaims_1.set('fieldLabels', {'nntt_no': 'inline label - always visible', 'determination_name': 'inline label - always visible', 'registered_nt_body_corp': 'inline label - always visible', });
lyr_DevelopmentEnvelope_2.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', });
lyr_DevelopmentEnvelope_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});