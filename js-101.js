$(document).ready(function() {

  $.ajax({
    url: "main.json"
  }).done(function(data) {
    // var contentEl = $("#container");
    console.log(data);
    var outputList = document.getElementById("container");
    for(var i = 0; i < data.songs.length; i++) {
      var h3 = document.createElement("h3");
      h3.innerHTML = data.songs[i].name;
      outputList.appendChild(h3);
      var span = document.createElement("span");
      span.innerHTML = data.songs[i].artist;
      outputList.appendChild(span);
      var span1 = document.createElement("span");
      span1.innerHTML = data.songs[i].album;
      outputList.appendChild(span1);
    }
  })

  $("#getData").
    $.ajax({
      url: "secondary.json"
    }).click(function(data) {
      console.log(data);
      var outputList = document.getElementById("container");
      for(var i = 0; i < data.songs.length; i++) {
        var h3 = document.createElement("h3");
        h3.innerHTML = data.songs[i].name;
        outputList.appendChild(h3);
        var span = document.createElement("span");
        span.innerHTML = data.songs[i].artist;
        outputList.appendChild(span);
        var span1 = document.createElement("span");
        span1.innerHTML = data.songs[i].album;
        outputList.appendChild(span1);
    }
    })

});  

















// var songs = [];


//   songs[songs.length] = "One > by Metallica on the album ...And Justice for All";
//   songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
//   songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
//   songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
//   songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
//   songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
//   songs[songs.length] = "Nightcall > Kavinsky on the album Outrun";
  



// for (i = 0; i < songs.length; i++) {
// 	songs[i] = songs[i].replace(/>/g, "-");
// 	songs[i] = songs[i].replace(/\*|@|\(|!/g, "");
// 	songs[i] = "<div>" + songs[i] + "<div>";
// 	container.innerHTML += songs[i] + "<br>" + "<br>" + " ";
// }
// console.log(songs);

