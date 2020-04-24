   
    var london = [42.981635, -81.245336];
    var echidna = [42.981453, -81.249336];
    var northern  = [42.981174, -81.242919];
    var tbk  = [42.990400, -81.247600];
    var arcane  = [42.980400, -81.250100];
    var bigbluebubble = [42.983299, -81.252602];
    var leaflet_map = new L.Map('map-content', {
      zoom: 7,
      center: london,
      layers: new L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      )});

    
      var echidna_marker = L.marker(echidna).addTo(leaflet_map).bindPopup('<strong>Digital Echidna</strong> <br> Travis, Web Developer  <br> Dylan, Web Developer');
      var northern_marker = L.marker(northern).addTo(leaflet_map).bindPopup('<strong>Northern Commerce</strong>');
      var tbk_marker = L.marker(tbk).addTo(leaflet_map).bindPopup('<strong>TBK</strong>');
      var arcane_marker = L.marker(arcane).addTo(leaflet_map).bindPopup('<strong>Arcane</strong> <br>Mackenzie, Web Developer  <br> Christopher, Senior Developer');
      var bigbluebubble_marker = L.marker(bigbluebubble).addTo(leaflet_map).bindPopup('<strong>Big Blue Bubble</strong> <br>Brian, Programmer');

     function flyIn() {
      leaflet_map.flyTo(london, 14, {
        animate: true,
        duration: 6
      });
      };

    function flyTo(loc) {
      leaflet_map.flyTo(eval(loc), 18, {
      animate: true,
      duration: 5
    });
    };

    var explore_btn = document.querySelector('#fly-in');
    explore_btn.addEventListener('click',flyIn,false);
    var fly_btns = document.querySelectorAll('.fly-button');

    for(var i=0; i<fly_btns.length; i++) {
    fly_btns[i].addEventListener('click',function(e) {
    flyTo(e.target.id);
    },false);


  }