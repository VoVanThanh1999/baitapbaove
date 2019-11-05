var loadUserEdit= document.getElementById('loadUserID');

var student;
var students =[];
function addNewStudent (){
	var idSinhVien = $("#iD").val();
	var tenSinhVien = $("#tenSinhVien").val();
	var matKhau = $("#matKhau").val();
	var email = $("#email").val();
	var tenLop = $("#tenLop").val();
	var nganhHoc =$("#nganhHoc").val()  ; 
	
	student = {
		idSinhVien:idSinhVien,
		tenSinhVien:tenSinhVien,
		matKhau:matKhau,
		tenLop:tenLop,
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
			$("#loadUserID").html( `
				<tr id="">
					<th><input type="text" class="form-control" value='${students[j].idSinhVien}'></th>
					<th><input type="text" class="form-control" value='${students[j].tenSinhVien}'></th>
					<th><input type="text" class="form-control" value='${students[j].matKhau}'></th>
					<th><input type="text" class="form-control" value='${students[j].email}'></th>
					<th><input type="text" class="form-control" value='${students[j].tenLop}'></th>
					<th><input type="text" class="form-control" value='${students[j].nganhHoc}'></th>
					<th> <button type="button" class="btn btn-success" onclick="updateStudent(${j})">Update</button> </th>
					<th> </th>
				</tr>
			`)
		}else {
			
		}
	}
}

function updateStudent(i){
	alert(i);
}