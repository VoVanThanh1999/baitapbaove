var loadUserEdit= document.getElementById('loadUserID');
var student;
var students =[];
function addNewStudent (){
	var idSinhVien = $("#iD").val();
	var khoaHoc = $("#khoaHoc").val();
	var ngayVaoDang= $("#ngayVaoDang").val();
	var hoTenCha = $("#hoTenCha").val();
	var ngheNghiepCha = $("#ngheNghiepCha").val();
	var tenSinhVien = $("#tenSinhVien").val();
	var hoTenMe = $("#hoTenMe").val();
	var ngheNghiepMe = $("#ngheNghiepMe").val();
	var hoKhau =$("#hoKhau").val();
	var sdtNha =  $("#sdtNha").val();
	var matKhau = $("#matKhau").val();
	var email = $("#email").val();
	var diaChi=$("#diaChi").val();
	var tonGiao = $("#tonGiao").val();
	var dienThoai= $("#dienThoai").val();
	var ngayVaoDoan = $("#ngayVaoDoan").val();
	var tenLop = $("#tenLop").val();
	var nganhHoc =$("#nganhHoc").val()  ; 
	var  bac= $("#bac").val();
	var CMND= $("#CMND").val();
	var noiCap =$("#noiCap").val();
	student = {
		idSinhVien:idSinhVien,
		tenSinhVien:tenSinhVien,
		matKhau:matKhau,
		tenLop:tenLop,
		khoaHoc:khoaHoc,
		ngayVaoDang:ngayVaoDang,
		hoTenCha:hoTenCha,
		ngheNghiepCha:ngheNghiepCha,
		hoTenMe:hoTenMe,
		ngheNghiepMe:ngheNghiepMe,
		hoKhau:hoKhau,
		sdtNha:sdtNha,
		CMND:CMND,
		email:email,
		diaChi:diaChi,
		ngayVaoDoan:ngayVaoDoan,
		noiCap:noiCap,
		dienThoai:dienThoai,
		tonGiao:tonGiao,
		bac:bac,
		nganhHoc:nganhHoc
	};
	students.push(student);
	localStorage.setItem("localStorageStudent", JSON.stringify(students));
}

function deleteStudent(i){
	debugger;
	let	students =JSON.parse(localStorage.getItem("localStorageStudent"));
	students.splice(i, 1);
	localStorage.setItem('localStorageStudent', JSON.stringify(students));
	editStudentHTML();
}
function editStudent(i){
	debugger;
	let	students =JSON.parse(localStorage.getItem("localStorageStudent"));	
	for (var j = 0 ; j < students.length ; j++) {
		if (j==i) {
			$("#updateBody").html( `
				<p class="h4">Cập nhật thông tin</p>
				<br/>
				<div class="row">
					<div class="col-md-6">
						<label>*ID Sinh Viên</label>
						<input type="text" class="form-control" id="idSinhVien" value='${students[j].idSinhVien}'><br/>
						<label>*Tên sinh viên</label>
						<input type="text" class="form-control" id="tenSinhVien" value='${students[j].tenSinhVien}'><br/>
						<label>*Mật khẩu</label>
						<input type="text" class="form-control" id="matKhau" value='${students[j].matKhau}'><br/>
						<label>*Bậc</label>
						<input type="text" class="form-control" id="bac" value='${students[j].bac}'><br/>
						<label>*Tên lớp</label>
						<input type="text" class="form-control" id="tenLop" value='${students[j].tenLop}'><br/>
						<label>*Chứng minh nhân dân</label>
						<input type="text" class="form-control" id="CMND" value='${students[j].CMND}'><br/>
						<label>*Nơi Cấp</label>
						<input type="text" class="form-control" id="noiCap" value='${students[j].noiCap}'><br/>
						<label>*Khóa học</label>
						<input type="text" class="form-control" id="khoaHoc" value='${students[j].khoaHoc}'><br/>
						<label>*Email</label>
						<input type="text" class="form-control" id="email" value='${students[j].email}'><br/>
						<label>*Địa chỉ</label>
						<input type="text" class="form-control" id="diaChi" value='${students[j].diaChi}'><br/>
					</div>
					<div class="col-md-6">
						<label>*Tôn giáo</label>
						<input type="text" class="form-control" id="tonGiao" value='${students[j].tonGiao}'><br/>
						<label>*Số điện thoại</label>
						<input type="text" class="form-control" id="dienThoai" value='${students[j].dienThoai}'><br/>
						<label>*Ngày vào đoàn</label>
						<input type="text" class="form-control" id="ngayVaoDoan" value='${students[j].ngayVaoDoan}'><br/>
						<label>*Ngành học</label>
						<input type="text" class="form-control" id="nganhHoc" value='${students[j].nganhHoc}'><br/>
						<label>*Ngày vào đảng</label>
						<input type="text" class="form-control" id="ngayVaoDang" value='${students[j].ngayVaoDang}'><br/>
						<label>*Họ và tên Cha</label>
						<input type="text" class="form-control" id="hoTenCha" value='${students[j].hoTenCha}'><br/>
						<label>*Nghề nghiệp cha</label>
						<input type="text" class="form-control" id="ngheNghiepCha" value='${students[j].ngheNghiepCha}'><br/>
						<label>*Họ tên mẹ</label>
						<input type="text" class="form-control" id="hoTenMe" value='${students[j].hoTenMe}'><br/>
						<label>*Nghề nghiệp mẹ</label>
						<input type="text" class="form-control" id="ngheNghiepMe" value='${students[j].ngheNghiepMe}'><br/>
						<label>*Hộ Khẩu</label>
						<input type="text" class="form-control" id="hoKhau" value='${students[j].hoKhau}'><br/>
						<label>*Số điện thoại nhà</label>
						<input type="text" class="form-control" id="sdtNha" value='${students[j].sdtNha}'><br/>
					</div>
				</div>
			
				<button type="button" class="btn btn-success" onclick="updateStudent(${j})">Cập nhập sinh viên</button> 

			`)
		}else {
			
		}
	}
}

function updateStudent(i){
	let	students =JSON.parse(localStorage.getItem("localStorageStudent"));
	var idSinhVien = $("#idSinhVien").val();
	var khoaHoc = $("#khoaHoc").val();
	var ngayVaoDang= $("#ngayVaoDang").val();
	var hoTenCha = $("#hoTenCha").val();
	var ngheNghiepCha = $("#ngheNghiepCha").val();
	var tenSinhVien = $("#tenSinhVien").val();
	var hoTenMe = $("#hoTenMe").val();
	var ngheNghiepMe = $("#ngheNghiepMe").val();
	var hoKhau =$("#hoKhau").val();
	var sdtNha =  $("#sdtNha").val();
	var matKhau = $("#matKhau").val();
	var email = $("#email").val();
	var diaChi=$("#diaChi").val();
	var tonGiao = $("#tonGiao").val();
	var dienThoai= $("#dienThoai").val();
	var ngayVaoDoan = $("#ngayVaoDoan").val();
	var tenLop = $("#tenLop").val();
	var nganhHoc =$("#nganhHoc").val()  ; 
	var bac = $("#bac").val();
	var CMND= $("#CMND").val();
	var noiCap =$("#noiCap").val();
	student = {
		idSinhVien:idSinhVien,
		tenSinhVien:tenSinhVien,
		matKhau:matKhau,
		tenLop:tenLop,
		khoaHoc:khoaHoc,
		ngayVaoDang:ngayVaoDang,
		hoTenCha:hoTenCha,
		ngheNghiepCha:ngheNghiepCha,
		hoTenMe:hoTenMe,
		ngheNghiepMe:ngheNghiepMe,
		hoKhau:hoKhau,
		sdtNha:sdtNha,
		CMND:CMND,
		email:email,
		diaChi:diaChi,
		ngayVaoDoan:ngayVaoDoan,
		noiCap:noiCap,
		dienThoai:dienThoai,
		tonGiao:tonGiao,
		nganhHoc:nganhHoc
	};
	students[i] = student;
	localStorage.setItem('localStorageStudent', JSON.stringify(students));
	$("#updateBody").html(``);

	alert('update thành công')
	
}