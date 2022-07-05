$(document).ready(function () {
    getProDuct()
    getCountReview()
});
let gia
var bill = JSON.parse(localStorage.getItem('hd'))
function getProDuct() {

    $.ajax({
        url: 'https://localhost:44366//api/product/' + localStorage.getItem('sp'),
        method: 'GET',
        contentType: 'application\json',
        dataType: 'json',
        error: function (response) {
            
        },
        success: function (response) {
            //console.log(response)
            $("#img-1").html(`<a href="#">
                                <img id="zoom1" src="assets/image/${response.Image}"
                                    data-zoom-image="assets/image/${response.Image}" alt="big-1">
                            </a>`)
            $("#tensp").text(response.TenSP)
            gia = response.Gia
            $("#curr_price").text(response.Gia.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }))
            $("#mota").text(response.Mota)
            $("#soluong").attr('max', response.Soluong)
            $("#info").text(response.Mota)
        },
        fail: function (response) {
            
        }
    });
}

function getCountReview() {
    $.ajax({
        url: 'https://localhost:44366//api/Review/' + localStorage.getItem('sp'),
        method: 'GET',
        contentType: 'application\json',
        dataType: 'json',
        error: function (response) {

        },
        success: function (response) {
            //console.log(response.length)
            $("#rev").text("Reviews (" + response.length + ")")
            $("#cntRv").text(response.length + " reviews")
            $("#cmt_box").empty()
            for (let i = 0; i < response.length; i++) {
                let cmt = ''
                cmt += `<div class="comment_thmb" >
                                            <img src="assets/img/blog/comment2.jpg" alt="">
                                        </div>`
                cmt += `<div class="comment_text">
                                            <div class="reviews_meta">
                                                <div class="star_rating">
                                                    <ul>`
                for (let j = 1; j <= response[i].Rate; j++) {
                    cmt += `<li><a href="#"><i class="icon-star"></i></a></li>`                              
                }

                cmt += `</ul>
                                                </div>
                                                <p><strong>${response[i].TenKhach} </strong> ${response[i].NgayReview}</p>
                                                <span>${response[i].Cmt}</span>
                                            </div>
                                        </div>  <br />`
                                                    
                $("#cmt_box").append(cmt)
            }
            
        },
        fail: function (response) {

        }
    });
}

function addCart() {
    $.ajax({
        url: 'https://localhost:44366//api/bill?id_hdb=' + bill.ID_HDB + '&id_sp=' + localStorage.getItem('sp') + '&id_KH=' + bill.ID_KhachHang + '&soLuong=' + $("#soluong").val()
            + '&donGia=' + gia,
        method: 'POST',
        contentType: 'application\json',
        dataType: 'json',
        error: function (response) {

        },
        success: function (response) {
            //console.log(response)
            window.location.href = './cart.html'
        },
        fail: function (response) {

        }
    });
}