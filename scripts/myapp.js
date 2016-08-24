(function () {

    window.myapp = window.myapp || {};

    window.onload = function () {

        var myapp = window.myapp,
            username = "ramirocartodb",
            mapname = "How to change the basemap in a CARTO dashboard",
            diJSON = "https://team.carto.com/u/ramirocartodb/api/v3/viz/5756a1f4-5ee8-11e6-8762-0e3ebc282e83/viz.json";

        cartodb.deepInsights.createDashboard('#dashboard', diJSON, {
            no_cdn: false
        }, function (err, dashboard) {

            // DI dashboard
            myapp.dashboard = dashboard;

            // DI map
            myapp.map = dashboard.getMap();

            // CARTO map to add layers and so on
            myapp.Cmap = myapp.map.map;

            // CARTO layers
            myapp.layers = myapp.map.getLayers();

            // Basemap layer
            myapp.basemap = myapp.Cmap.getBaseLayer();

            // url basemap templates
            var urlDark = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png';
            var urlPositron = 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png';

            // change to Dark Matter basemap
            cdb.$('#dark').click(function() {
              myapp.basemap.set('urlTemplate', urlDark);
            });

            // change to Positron basemap
            cdb.$('#positron').click(function() {
              myapp.basemap.set('urlTemplate', urlPositron);
            });

        });

    }

})();
