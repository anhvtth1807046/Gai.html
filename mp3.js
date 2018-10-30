
function Call_MP3_API(MP3API) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            var jsObject = JSON.parse(xhttp.responseText);
            var content = '';
            for (var i = 0; i < jsObject.items.length; i++) {
                var videoItem = '<div class="tube-item">';
                videoItem += '<iframe width="660" height="355" ' +
                    'src="https://https://mp3.zing.vn/embed/' + jsObject.items[i].id.audioId + '"' +
                    'frameborder="0" allow="autoplay; encryted-media" ' +
                    'allowfullscreen></iframe>';
                audioItem += '<h3>' + jsObject.items[i].snippet.title + '</h3>';
                audioItem += '</div>';
                content += audioItem;
            }
            document.getElementById("demo").innerHTML = content;
        }
    };
    xhttp.open("GET", MP3API, true);
    xhttp.send();
}


var btnSearch = document.getElementById('btnSearch');
btnSearch.onclick = function () {
    var keyword = document.getElementById('keyword').value;
    var MP3_API = "https://content.googleapis.com/mp3/v3/search?q=" + keyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    Call_Youtube_API(MP3_API);
};



function MP3() {

    if (window.event.keyCode != 13) {
        return;
    }
    var keyword = document.getElementById('keyword').value;
    var MP3_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    Call_MP3_API(MP3_API);
}
// End Function ChangeVideo.


var keyword = document.getElementById('keyword').value;
var MP3_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
Call_MP3_API(MP3_API);