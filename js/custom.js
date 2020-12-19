let mymap = L.map('mapid').setView([19.2512285,-103.7406081], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mymap);
let marker = L.marker([19.2512285,-103.7406081], {
  title: 'Lugar X'
}).addTo(mymap);