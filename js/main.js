
/* Truncate Card Title */
window.addEventListener("load",function(){
    truncateCardTitle();
});

function truncateCardTitle(){
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for(var i = 0; i < cardList.length; i++){
        var text = cardList[i].innerHTML;
        var newText = truncateString(text,35);
        cardList[i].innerHTML = newText;
    }
}

function truncateString(str,num){
    if(str.length > num){
        return str.slice(0,num) + "...";
    } else{
        return str;
    }
}

/* Sidebar Mini */
var toggleBtn = document.querySelector('.sidebarMini__button');
var sidebarMini = document.querySelector('.sidebarMini');
var switchBtn = document.querySelector('#checkbox');

toggleBtn.addEventListener('click',function(){
    sidebarMini.classList.toggle('is-opened');
});

switchBtn.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkMode');
});

// Google Map
let map;

function initMap() {
  // Map Option

  var options = {
    // lat = latitud, lng = longitud
    center: { lat: -36.848461, lng: 174.763336 },
    zoom: 16,
  };

  //  New map
  map = new google.maps.Map(document.getElementById("map"), options);

  //  Marker

  // The marker
  const marker = new google.maps.Marker({
    position: { lat: -36.851635, lng: 174.767702 },
    map: map,
  });

  const marker1 = new google.maps.Marker({
    position: { lat: -36.849145, lng: 174.76559 },
    map: map,
  });

  const marker2 = new google.maps.Marker({
    position: { lat: -36.848942, lng: 174.762134 },
    map: map,
  });

//   InfoWindow 
// this for setup the marker with any name we want. 
  // const detailWindow = new google.maps.InfoWindow({
  //   content: `<h2>AUT Place</h2>`
  // })
//   when user 'click'/ or 'mouseover' on the marker, the <h2></h2> tag show up with text inside
  marker.addListener("mouseover", () =>{
    detailWindow.open(map, marker);
  })

  marker1.addListener("mouseover", () =>{
    detailWindow.open(map, marker1);
  })

}
