var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Daerah_Penelitian_1 = new ol.format.GeoJSON();
var features_Daerah_Penelitian_1 = format_Daerah_Penelitian_1.readFeatures(json_Daerah_Penelitian_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daerah_Penelitian_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daerah_Penelitian_1.addFeatures(features_Daerah_Penelitian_1);
var lyr_Daerah_Penelitian_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Daerah_Penelitian_1, 
                style: style_Daerah_Penelitian_1,
                popuplayertitle: "Daerah_Penelitian",
                interactive: true,
                title: 'Daerah_Penelitian'
            });
var format_Data_HujanB_2 = new ol.format.GeoJSON();
var features_Data_HujanB_2 = format_Data_HujanB_2.readFeatures(json_Data_HujanB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_HujanB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_HujanB_2.addFeatures(features_Data_HujanB_2);
var lyr_Data_HujanB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_HujanB_2, 
                style: style_Data_HujanB_2,
                popuplayertitle: "Data_HujanB",
                interactive: true,
                title: '<img src="styles/legend/Data_HujanB_2.png" /> Data_HujanB'
            });
var format_ero1vi_3 = new ol.format.GeoJSON();
var features_ero1vi_3 = format_ero1vi_3.readFeatures(json_ero1vi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ero1vi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ero1vi_3.addFeatures(features_ero1vi_3);
var lyr_ero1vi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ero1vi_3, 
                style: style_ero1vi_3,
                popuplayertitle: "ero1vi",
                interactive: true,
                title: '<img src="styles/legend/ero1vi_3.png" /> ero1vi'
            });
var format_InsetBali_4 = new ol.format.GeoJSON();
var features_InsetBali_4 = format_InsetBali_4.readFeatures(json_InsetBali_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InsetBali_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InsetBali_4.addFeatures(features_InsetBali_4);
var lyr_InsetBali_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InsetBali_4, 
                style: style_InsetBali_4,
                popuplayertitle: "Inset Bali",
                interactive: true,
                title: 'Inset Bali'
            });
var format_erp2vi_5 = new ol.format.GeoJSON();
var features_erp2vi_5 = format_erp2vi_5.readFeatures(json_erp2vi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_erp2vi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_erp2vi_5.addFeatures(features_erp2vi_5);
var lyr_erp2vi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_erp2vi_5, 
                style: style_erp2vi_5,
                popuplayertitle: "erp2vi",
                interactive: true,
    title: 'erp2vi<br />\
    <img src="styles/legend/erp2vi_5_0.png" />  agak berat<br />\
    <img src="styles/legend/erp2vi_5_1.png" />  berat<br />\
    <img src="styles/legend/erp2vi_5_2.png" />  ringan<br />\
    <img src="styles/legend/erp2vi_5_3.png" />  sangat berat<br />\
    <img src="styles/legend/erp2vi_5_4.png" />  sedang<br />\
    <img src="styles/legend/erp2vi_5_5.png" /> sangat ringan<br />\
    <img src="styles/legend/erp2vi_5_6.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Daerah_Penelitian_1.setVisible(true);lyr_Data_HujanB_2.setVisible(true);lyr_ero1vi_3.setVisible(true);lyr_InsetBali_4.setVisible(true);lyr_erp2vi_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Daerah_Penelitian_1,lyr_Data_HujanB_2,lyr_ero1vi_3,lyr_InsetBali_4,lyr_erp2vi_5];
lyr_Daerah_Penelitian_1.set('fieldAliases', {'Luas_Ha': 'Luas_Ha', });
lyr_Data_HujanB_2.set('fieldAliases', {'KOORDINATX': 'KOORDINATX', 'KOORDINATY': 'KOORDINATY', 'EROSIVITAS': 'EROSIVITAS', });
lyr_ero1vi_3.set('fieldAliases', {'fid': 'fid', 'KOORDINATX': 'KOORDINATX', 'KOORDINATY': 'KOORDINATY', 'EROSIVITAS': 'EROSIVITAS', 'Luas_Ha': 'Luas_Ha', 'Nilai_LS': 'Nilai_LS', });
lyr_InsetBali_4.set('fieldAliases', {'Kabupaten': 'Kabupaten', 'Pen_Laki': 'Pen_Laki', 'Pen_Perempuan': 'Pen_Perempuan', 'Total_Penduduk': 'Total_Penduduk', 'Jumlah_RT': 'Jumlah_RT', });
lyr_erp2vi_5.set('fieldAliases', {'fid': 'fid', 'KOORDINATX': 'KOORDINATX', 'KOORDINATY': 'KOORDINATY', 'EROSIVITAS': 'EROSIVITAS', 'Luas_Ha': 'Luas_Ha', 'Nilai_LS': 'Nilai_LS', 'Luas_Ha_2': 'Luas_Ha_2', 'Erodibilitas': 'Erodibilitas', 'class': 'class', 'erosi': 'erosi', });
lyr_Daerah_Penelitian_1.set('fieldImages', {'Luas_Ha': '', });
lyr_Data_HujanB_2.set('fieldImages', {'KOORDINATX': '', 'KOORDINATY': '', 'EROSIVITAS': '', });
lyr_ero1vi_3.set('fieldImages', {'fid': '', 'KOORDINATX': '', 'KOORDINATY': '', 'EROSIVITAS': '', 'Luas_Ha': '', 'Nilai_LS': '', });
lyr_InsetBali_4.set('fieldImages', {'Kabupaten': '', 'Pen_Laki': '', 'Pen_Perempuan': '', 'Total_Penduduk': '', 'Jumlah_RT': '', });
lyr_erp2vi_5.set('fieldImages', {'fid': 'TextEdit', 'KOORDINATX': 'TextEdit', 'KOORDINATY': 'TextEdit', 'EROSIVITAS': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Nilai_LS': 'TextEdit', 'Luas_Ha_2': 'TextEdit', 'Erodibilitas': 'TextEdit', 'class': 'TextEdit', 'erosi': 'Range', });
lyr_Daerah_Penelitian_1.set('fieldLabels', {'Luas_Ha': 'no label', });
lyr_Data_HujanB_2.set('fieldLabels', {'KOORDINATX': 'no label', 'KOORDINATY': 'no label', 'EROSIVITAS': 'no label', });
lyr_ero1vi_3.set('fieldLabels', {'fid': 'no label', 'KOORDINATX': 'no label', 'KOORDINATY': 'no label', 'EROSIVITAS': 'no label', 'Luas_Ha': 'no label', 'Nilai_LS': 'no label', });
lyr_InsetBali_4.set('fieldLabels', {'Kabupaten': 'no label', 'Pen_Laki': 'no label', 'Pen_Perempuan': 'no label', 'Total_Penduduk': 'no label', 'Jumlah_RT': 'no label', });
lyr_erp2vi_5.set('fieldLabels', {'fid': 'no label', 'KOORDINATX': 'no label', 'KOORDINATY': 'no label', 'EROSIVITAS': 'no label', 'Luas_Ha': 'no label', 'Nilai_LS': 'no label', 'Luas_Ha_2': 'no label', 'Erodibilitas': 'no label', 'class': 'no label', 'erosi': 'no label', });
lyr_erp2vi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});