document.addEventListener("DOMContentLoaded", function (event) {
    var inputSearch = document.getElementById("keyword");
    inputSearch.onkeydown = function (event) {
        if (event.keyCode == 13) {
            loadVideo(this.value);
        }
    };
    loadVideo("MTP");
});
// Lấy ra cái modal
var modal = document.getElementById('myModal');
// Lấy ra element có class là close và lấy ra phần tử đầu tiên nghĩa là index thứ 0 => code nà getElementsByClassName("close")[0];
var span = document.getElementsByClassName("close")[0];
var videoFrame = document.getElementById("video-frame");
// khi người dùng ấn X thì close Video
span.onclick = function () {
    // videoFrame.pause;
    closeVideo();
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeVideo();
    }
};
function loadVideo(keyword) {
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", YOUTUBE_API, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Parse kết quả trả về thành kiểu json.
            var responseJson = JSON.parse(this.responseText);
            var htmlContent = "";
            for (var i = 0; i < responseJson.items.length; i++) {
                if (responseJson.items[i].id.kind == 'youtube#channel') { //Ckeck xem neu nó là chanel mà ko phải video thì bỏ qua
                    continue;
                }
                var videoId = responseJson.items[i].id.videoId;
                var videoTitle = responseJson.items[i].snippet.title;
                var videoThumbnail = responseJson.items[i].snippet.thumbnails.medium.url;
                htmlContent += '<div class="video" onclick="showVideo(' + videoId + ')">';
                htmlContent += '<img src="' + videoThumbnail + '">';
                htmlContent += '<div class="title">' + videoTitle + '</div>';
                htmlContent += '</div>'
            }
            document.getElementById("list-video").innerHTML = htmlContent;
        } else if (this.readyState == 4) {
            console.log("Ô shit");
        }
    };
    xhr.send();
}
function closeVideo() {
    modal.style.display = "none";
    videoFrame.src = "";
}
function showVideo(videoId) {
    videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    setTimeout(function () {
        modal.style.display = "block";
    }, 300);
}

function changeLabel() {
    if (document.getElementById('keyword').value > 0 || document.getElementById('keyword').value != null){
        document.getElementById('labelKeyWord').classList.add('change');
    }else{
        document.getElementById('labelKeyWord').classList.remove('change');
    }
}