function checkUsername(argument) {
	// body... 
	debugger;
	var idsinhvien = $("#idsinhvien").val();
	var idpasssword= $("#idpassword").val();
	let	students =JSON.parse(localStorage.getItem("localStorageStudent"));	
	for (var i = 0; i <students.length; i++) {
		var count = 0;
		if (students[i].idSinhVien == idsinhvien  && students[i].matKhau==idpasssword) {
			count +=1;
		}
		if (count == 0) {
			
		}
	}

}
		