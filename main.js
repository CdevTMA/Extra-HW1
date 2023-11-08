var btnTinhTien = document.getElementById("btnTinhTien");
btnTinhTien.onclick = function () {
    var giaVeNguoiLon = document.getElementById("giaVeNguoiLon").value * 1;
    var giaVeTreEm = document.getElementById("giaVeTreEm").value * 1;
    var soVeNguoiLon = document.getElementById("soVeNguoiLon").value * 1;
    var soVeTreEm = document.getElementById("soVeTreEm").value * 1;
    var tyLeQuyenGop = document.getElementById("tyLeQuyenGop").value * 1;
    var tenPhim = document.getElementById("tenPhim").value;

    var doanhThu = (giaVeNguoiLon * soVeNguoiLon) + (giaVeTreEm * soVeTreEm);
    var soTienQuyenGop = (doanhThu * tyLeQuyenGop) / 100;
    var tongTienThuSauKhiTru = doanhThu - soTienQuyenGop;

    var formatter = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' });

    var doanhThuFormatted = formatter.format(doanhThu).replace("₫", "");
    var soTienQuyenGopFormatted = formatter.format(soTienQuyenGop).replace("₫", "");
    var tongTienThuSauKhiTruFormatted = formatter.format(tongTienThuSauKhiTru).replace("₫", "");

    var thongSo = document.getElementById("thongSo");
    thongSo.innerHTML = `Doanh thu: ${doanhThuFormatted} VND<br>Tổng số tiền quyên góp cho tổ chức từ thiện: ${soTienQuyenGopFormatted} VND<br>Tổng tiền thu được sau khi trừ: ${tongTienThuSauKhiTruFormatted} VND`
}