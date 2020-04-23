   
    var london = [42.981635, -81.245336];
    var echidna = [42.981453, -81.249336];
    var northern  = [42.981174, -81.242919];
    var tbk  = [42.990400, -81.247600];
    var arcane  = [42.980400, -81.250100];
    var leaflet_map = new L.Map('map-content', {
      zoom: 6,
      center: london,
      layers: new L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      )});

    
      var echidna_marker = L.marker(echidna).addTo(leaflet_map).bindPopup('Digital Echidna');
      var northern_marker = L.marker(northern).addTo(leaflet_map).bindPopup('Northern Commerce');
      var tbk_marker = L.marker(tbk).addTo(leaflet_map).bindPopup('TBK');
      var arcane_marker = L.marker(arcane).addTo(leaflet_map).bindPopup('Arcane');

     function flyIn() {
      leaflet_map.flyTo(london, 13);
    };

    function flyTo(loc) {
      leaflet_map.flyTo(eval(loc), 18);
    };

    var explore_btn = document.querySelector('#fly-in');
    explore_btn.addEventListener('click',flyIn,false);
    var fly_btns = document.querySelectorAll('.fly-button');

    for(var i=0; i<fly_btns.length; i++) {
    fly_btns[i].addEventListener('click',function(e) {
    flyTo(e.target.id);
    },false);


  }