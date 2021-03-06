// ripped from: https://github.com/opendatazurich/ckanext-stadtzh-theme/blob/master/ckanext/stadtzhtheme/descr.yaml
const dataTypes = {
	csv: {
		description: 'Comma-Separated Values.',
		link: 'Weitere Informationen zu CSV finden Sie in unserer Rubrik Werkstatt unter [Informationen zu Datenformaten.](https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt/csv.html)'
	},
	dxf: {
		description: 'Drawing Interchange File Format. Projektion CH1903+ / LV95 (EPSG:2056)',
		link: 'Weitere Informationen zu DXF finden Sie in unserer Rubrik Werkstatt unter [Informationen zu Datenformaten.](https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt/dxf.html)'
	},
	gdb: {
		description: 'Geodatabase. Projektion CH1903+ / LV95 (EPSG:2056)',
		link: 'Weitere Informationen zu Geodatabase finden Sie auf der Webseite von ESRI: [Was ist eine Geodatabase?](https://desktop.arcgis.com/de/arcmap/10.3/manage-data/geodatabases/what-is-a-geodatabase.htm).'
	},
	gpkg: {
		description: 'GeoPackage. Projektion CH1903+ / LV95 (EPSG:2056).',
		link: 'Weitere Informationen zu GeoPackage finden Sie in unserer Rubrik Werkstatt unter [Informationen zu Datenformaten.](https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt/gpkg.html)'
	},
	ili: {
		description: 'INTERLIS.',
		link: 'INTERLIS ist eine Beschreibungssprache, mit der die langfristige Kompatibilität unter verschiedlichen Systemen gewährleistet werden soll. INTERLIS ist software- und systemunabhängig.  Weitere Informationen dazu finden Sie [hier](https://www.interlis.ch/).'
	},
	json: {
		description: 'GeoJSON. Projektion WGS84 (EPSG:4326).',
		link: 'Weitere Informationen zu GeoJSON finden Sie in unserer Rubrik Werkstatt unter [Informationen zu Datenformaten.](https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt/json_geojson.html)'
	},
	kml: {
		description: 'Keyhole Markup Language (KML). Projektion WGS84 (EPSG:4326).',
		link: 'Weitere Informationen zu KML finden Sie in unserer Rubrik Werkstatt unter [Informationen zu Datenformaten.](https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt/kml.html)'
	},
	kmz: {
		description: 'Keyhole Markup Language (KML). Projektion WGS84 (EPSG:4326).',
		link: 'Weitere Informationen zu KMZ finden Sie in unserer Rubrik Werkstatt unter [Informationen zu Datenformaten.](https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt/kmz.html)'
	},
	shp: {
		description: 'Shapefile. Projektion CH1903+ / LV95 (EPSG:2056).',
		link: 'Weitere Informationen zu Shapefiles finden Sie in unserer Rubrik Werkstatt unter [Informationen zu Datenformaten.](https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt/shp_shapefile.html)'
	},
	tiff: {
		description: 'Tagged Image File Format.',
		link: 'Das Tagged Image File Format (TIFF oder auch kurz TIF) ist ein Dateiformat zur Speicherung von Bilddaten. Es wurde ursprünglich von Aldus (1994 von Adobe übernommen) und Microsoft für die Farbseparation bei gescannten Rastergrafiken entwickelt. TIFF-Dateien besitzen den MIME-Typ image/tiff. Weitere Informationen dazu finden Sie [hier](https://de.wikipedia.org/wiki/Tagged_Image_File_Format).'
	},
	wfs: {
		description: 'Web Feature Service. Projektion CH1903+ / LV95 (EPSG:2056).',
		link: 'Weitere Informationen zu WFS finden Sie in unserer Rubrik Werkstatt unter [Informationen zu Datenformaten.](https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt/wfs.html)'
	},
	wms: {
		description: 'Web Map Service. Projektion CH1903+ / LV95 (EPSG:2056).',
		link: 'Weitere Informationen zu WMS finden Sie in unserer Rubrik Werkstatt unter [Informationen zu Datenformaten.](https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt/wms_wmts.html)'
	},
	wmts: {
		description: 'Web Map Tile Service. Projektion CH1903+ / LV95 (EPSG:2056).',
		link: 'Weitere Informationen zu WMTS finden Sie in unserer Rubrik Werkstatt unter [Informationen zu Datenformaten.](https://www.stadt-zuerich.ch/portal/de/index/ogd/werkstatt/wms_wmts.html)'
	},
	zip: {
		description:
			'ZIP-File. Das ZIP-Dateiformat ist ein Format für verlustfrei komprimierte Dateien, das einerseits den Platzbedarf bei der Archivierung reduziert und andererseits als Containerdatei fungiert, in der mehrere zusammengehörige Dateien zusammengefasst werden können.',
		link: 'Weitere Informationen zum ZIP-Dateiformat finden Sie hier in [Wikipedia](https://de.wikipedia.org/wiki/ZIP-Dateiformat).'
	}
};

export const getType = (type: string) => {
	return dataTypes[type.toLowerCase()] || { description: '', link: '' };
};
