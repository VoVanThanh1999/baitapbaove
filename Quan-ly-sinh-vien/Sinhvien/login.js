var sinhVien = {
	username:'41583',
	password:'12345'
}

function checkUsername(){
	debugger;
	var userName = document.getElementById('idsinhvien').value;
	var password = document.getElementById('idpassword').value;

	if (sinhVien.username == userName && sinhVien.password == password) {

		window.location.replace("../Home Page/homepage.html");
	}
		
	

}