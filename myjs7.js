var listStudent = [
    {
        'name': 'Nam Thần',
        'rollNumber' : 'A00121',
        'age' : 20,
        'address' : 'số 10 Tôn Thất Thuyết',
        'avatar': 'https://i.pinimg.com/originals/a7/d6/e7/a7d6e7e7cadb4f468162f0d94fd39702.jpg',
        'phone': '0349555602',
    },
    {
        'name': 'Soái Ca',
        'rollNumber' : 'A00122',
        'age' : 21,
        'address' : 'số 20 Tôn Thất Thuyết',
        'avatar': 'https://kenh14cdn.com/thumb_w/660/2017/20664687-1931280623811540-2633903832468491112-n-1505389713725-1513421614447.jpg',
        'phone': '0349555602',
    },
    {
        'name': 'Tỉ Tỉ',
        'rollNumber' : 'A00123',
        'age' : 20,
        'address' : 'số 10 Tôn Thất Thuyết',
        'avatar': 'https://i.pinimg.com/originals/4d/43/df/4d43df44b1482434b722e02bfe702a77.png',
        'phone': '0164955602',
    },
    {
        'name': 'Annabelle',
        'rollNumber' : 'A00124',
        'age' : 60,
        'address' : 'số 10 Kim Mã',
        'avatar': 'http://a9.vietbao.vn/images/vi955/2014/7/55646580-1405752479-201.jpg',
        'phone': '0164955602',
    },
    {
        'name': 'Eminem',
        'rollNumber' : 'A00125',
        'age' : 20,
        'address' : 'số 10 Tôn Thất Thuyết',
        'avatar': 'https://i.pinimg.com/originals/49/3d/fb/493dfbc2b7c89f15122449f954902206.jpg',
        'phone': '0164955602',
    },
    {
        'name': 'Hoài Anh',
        'rollNumber' : 'A00126',
        'age' : 20,
        'address' : 'Phú Xuyên ',
        'avatar': 'http://a9.vietbao.vn/images/vn999/165/2014/04/20140415-guong-mat-qua-xinh-dep-khien-nu-sinh-phai-bo-hoc-0.jpg',
        'phone': '0164955602',
    },
    {
        'name': 'Nam Ca',
        'rollNumber' : 'A00127',
        'age' : 30,
        'address' : 'số Hồ Gươm',
        'avatar': 'http://2sao.vietnamnetjsc.vn/images/2017/11/25/07/15/hot-boy-1.jpg',
        'phone': '0164955602',
    },
    {
        'name': 'Mihu',
        'rolNumber' : 'A00128',
        'age' : 40,
        'address' : 'số 56 Bến Tre',
        'avatar': 'https://image1.thegioitre.vn/2018/09/11/41328214_456346804877067_6983562101117681664_n.jpg',
        'phone': '0164955602',
    }
];

var content = document.getElementsByClassName('main-content');

for (var i = 0; i < listStudent.length; i++) {
    var mainContent = content[0];
    mainContent.innerHTML += '<div class="student">' +
        '<div class="box-img">' +
        '<img id="avatar" src="' + listStudent[i].avatar + '" alt="Avatar">' +
        '</div>' +
        '<div class="title">' +
        '<div class="nameStudent">' + listStudent[i].name + '</div>' +
        '<div class="phoneStudent">' + listStudent[i].phone + '</div>' +
        '<div class="rollNumberStudent">' + listStudent[i].rollNumber + '</div>' +
        '<div class="ageStudent">' + listStudent[i].age + '</div>' +
        '<div class="addressStudent">' + listStudent[i].address + '</div>' +
        '</div>'
}




