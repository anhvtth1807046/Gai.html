var arrayTubes = [

    {
        id : 'jQMW_BVmkyc',
        title : 'Về đi anh',
        singer : 'Hà Anh Tuấn'
    },
    {
        id : '5JE6_Ml6RWM',
        title : 'Sao anh nỡ vội lấy chồng',
        singer : 'Hà Anh Tuấn'
    },
    {
        id : 'dcsGejac-04',
        title : 'Bèo dạt mây trôi',
        singer : 'Quang Thắng'
    },
    {
        id : '5mYA4WswGdw',
        title : 'Ba kể con nghe',
        singer : 'Duy KHánh'
    },
    {
        id : 'PXyXzHIZlBo',
        title : 'Hãy ra khỏi người đó đi',
        singer : 'Phan Mạnh Quỳnh'
    },
    {
        id : 'UCXao7aTDQM',
        title : 'Tháng tư là tháng nói dối của em',
        singer : 'Hà Anh Tuấn'
    },
];

var myTubes = document.getElementById("myTubes");
for (var i = 0; i < arrayTubes.length; i++) {
    myTubes.innerHTML += '<div class="video-item">'+
        '<iframe width="660" height="355" src="https://www.youtube.com/embed/' + arrayTubes[i].id + '" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen> </iframe>'+
        '<h3>' + arrayTubes[i].title +'</h3>'+
        '</div>';
}

