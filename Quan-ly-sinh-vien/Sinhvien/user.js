
var message;
var messages = [];

function checkUsername(argument) {
	// body... 
	debugger;
	var idsinhvien = $("#idsinhvien").val();
	var idpasssword= $("#idpassword").val();
	let	students =JSON.parse(localStorage.getItem("localStorageStudent"));	
	for (var i = 0; i <students.length; i++) {
		var count = 0;
		if (students[i].idSinhVien == idsinhvien  && students[i].matKhau==idpasssword) {
			// thông tin cá nhân
			// PAGE INDEX
			$("#bodyUser").html(
				`
					<div class="container-fluid " style="background: #025215; height: 40px;">
						<div class="nav">
							<div class="col-md-4">
								<p class="text-white " style="font-size: 18px; font-weight: 500; padding-top: 5px;" >UDA Student</p>
							</div>
							<div class="col-md-6" style="margin-left: 135px;">
								<div class="date radirus" >
									<p id="date"></p>
								</div>
								<div class="month radirus" >
									<p id="month"></p>
								</div>
								<div class="year radirus" >
									<p id="year"></p>
								</div>
								<div class="avatar" >
									
								</div>
							</div>

						</div>
					</div>
					<nav class="container-fluid">
					<!-- Example split danger button -->
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Thông tin thông báo
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
						    <button class="dropdown-item" type="button" id="viewSchedule">Xem lịch học tập</button>
						    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
						    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
						  </div>
						</div>
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Đăng ký học phần
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button">Đăng ký kế hoặc đạt chuẩn đầu ra</button>
						    <button class="dropdown-item" type="button">Đăng ký học phần</button>
						    <button class="dropdown-item" type="button">Xem lịch giảng dậy</button>
						    <button class="dropdown-item" type="button">Kế hoặc toàn khóa</button>
						    <button class="dropdown-item" type="button">Kế hoặc năm học</button>
						  </div>
						</div>
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						   	Góc riêng sinh viên
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button" onclick="thongTinCaNhan(${i})">Thông tin cá nhân</button>
						    <button class="dropdown-item" type="button" >Thông tin sinh viên lớp</button>
						    <button class="dropdown-item" type="button">Kết quả học tập</button>
						    <button class="dropdown-item" type="button">Điểm rèn luyện</button>
						    <button class="dropdown-item" type="button">Nhận xét rèn luyện</button>
						    <button class="dropdown-item" type="button">Đánh giá chuẩn đầu ra</button>
						    <button class="dropdown-item" type="button">Học phí lệ phí</button>
						    <button class="dropdown-item" type="button">Đăng ký học lại</button>
						    <button class="dropdown-item" type="button">Thông báo tốt nghiệp</button>
						  </div>
						</div>
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						   	Sinh viên nhà trường
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
						    <button class="dropdown-item" type="button">Xem lịch học tập</button>
						    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
						    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
						  </div>
						</div>
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						   	Công tác sinh viên
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
						    <button class="dropdown-item" type="button">Xem lịch học tập</button>
						    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
						    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
						  </div>
						</div>
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						   	Khảo sát
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
						    <button class="dropdown-item" type="button">Xem lịch học tập</button>
						    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
						    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
						  </div>
						</div>
					</nav>
					<!-- --------------------------------------------------------------------------------- -->
					<div class="container-fluid" style="float: left; border-top: 1px solid #343a4075;" >
						<div class="row" style="margin-top: 20px;">
							<div class="col-md-7">
								<p>
									<img src="" width="28" class="w3-jumbo w3-spin">
									<label class="tieude1" style="font-weight: bold;">THÔNG TIN THÔNG BÁO</label>

								</p>
							<div class="row" style="border-bottom-style:dotted;border-bottom-color:#025215;border-bottom-width:1px;padding-left:5px;padding-right:5px ;">
				                
				                <div class="col-md-12">
				                    <h5 style="color:#025215;font-weight:bold">KẾT HOẠCH THI KẾT THÚC HỌC PHẦN NGOẠI NGỮ COMMUNICATION, PRONUNCIATION - ĐỢT 2</h5>
				                    <i class="fa fa-calendar"></i> 01/11/2019
				                    <p style="font-weight:bold">
				                        CÁC HỌC PHẦN NGOẠI NGỮ COMMUNICATION, PRONUNCIATION 
				                    </p>
				                    <p style="text-align:right"><a class="btn btn-danger" href="/thong-bao/thong-tin-thong-bao-chi-tiet-01000000CE6EA64B617D2F8C70499CD0FAD0D6C0690A75C427062915">Xem chi tiết ...</a></p>
				                </div>
				            </div>
				            <div class="row" style="border-bottom-style:dotted;border-bottom-color:#025215;border-bottom-width:1px;padding-left:5px;padding-right:5px ">
				                <div class="col-md-12">
				                    <h5 style="color:#025215;font-weight:bold">THÔNG BÁO: V/v nộp chứng chỉ ngoại ngữ đạt chuẩn đầu ra năm 2019</h5>
				                    <i class="fa fa-calendar"></i> 26/10/2019
				                    <p style="font-weight:bold">
				                        Nhằm kịp thời động viên, khen thưởng SV có ý chí phấn đấu vươn lên trong học tập, sớm đạt chuẩn đầu ra ngoại ngữ theo quy định của Nhà trường
				                    </p>
				                    <p style="text-align:right"><a class="btn btn-danger" href="/thong-bao/thong-tin-thong-bao-chi-tiet-010000007CB25C0053E92F9101CF52CB0BE9CE0DAAB85CA10832DB08">Xem chi tiết ...</a></p>
				                </div>
				            </div>
				             <div class="row" style="border-bottom-style:dotted;border-bottom-color:#025215;border-bottom-width:1px;padding-left:5px;padding-right:5px ">
				                <div class="col-md-12">
				                    <h5 style="color:#025215;font-weight:bold">THÔNG BÁO: Nộp kết quả học tập Giáo dục Quốc phòng để được xét miễn giảm</h5>
				                    <i class="fa fa-calendar"></i> 23/10/2019
				                    <p style="font-weight:bold">
				                        Dành cho SV nhập học năm 2019
				                    </p>
				                    <p style="text-align:right"><a class="btn btn-danger" href="/thong-bao/thong-tin-thong-bao-chi-tiet-01000000E94245F1E6C1805FF1C7791CC356BD3B2FFA9F9192F3D8AA">Xem chi tiết ...</a></p>
				                </div>
				            </div>
				             <div class="row" style="border-bottom-style:dotted;border-bottom-color:#025215;border-bottom-width:1px;padding-left:5px;padding-right:5px ">
				                <div class="col-md-12">
				                    <h5 style="color:#025215;font-weight:bold">THÔNG BÁO: Nộp kết quả học tập Giáo dục Quốc phòng để được xét miễn giảm</h5>
				                    <i class="fa fa-calendar"></i> 23/10/2019
				                    <p style="font-weight:bold">
				                        Dành cho SV nhập học năm 2019
				                    </p>
				                    <p style="text-align:right"><a class="btn btn-danger" href="/thong-bao/thong-tin-thong-bao-chi-tiet-01000000E94245F1E6C1805FF1C7791CC356BD3B2FFA9F9192F3D8AA">Xem chi tiết ...</a></p>
				                </div>
				            </div>
							</div>
							<div class="col-md-5">
								<p>
				       				 <img src="" width="28" class="w3-jumbo w3-spin"><label class="tieude1" style="font-weight: bold;">THÔNG TIN TUYỂN SINH</label>

								</p>

				    			<div class="row" style="border-bottom-style:dotted;border-bottom-color:#025215;border-bottom-width:1px;">
				        
					       			 <div class="col-md-12">
					            		<h5 style="color:#025215;font-weight:bold">Tuyển sinh Đại học Liên thông - Đợt tháng 10/2019</h5>
					            		<i class="fa fa-calendar"></i> 17/09/2019
					            		<p style="font-weight:bold">
					                		Trường Đại học Đông Á thông báo tuyển sinh Đại học liên thông từ TCCN, CĐ lên ĐH đợt tháng 10 năm 2019 như sau:
					            		</p>
					            		<p style="text-align:right"><a class="btn btn-danger" href="/thong-bao/thongtin-chitiet-ntsinh-10">Xem chi tiết ...</a></p>
					        		</div>
				    			</div>
				    		</div>
						</div>
					</div>
					<footer style=" color: #fff;background-color: #1e7e34;border-color: #28a745;font-size: 12px;">
						<footer class="footer fixed-bottom footer-dark navbar-border">
					    <a class="btn btn-danger" id="heplStudent" href="#" style="width:100%;font-weight:bold">Ngay lúc này, em cần nhà trường hỗ trợ về việc gì nào?</a>
					</footer>

					`

				);
				//xem lich hoc tap
					// xem lịch hoc tập
				$("#viewSchedule").click(function(){
					let	schedule =JSON.parse(localStorage.getItem("localStorageSchedule"));	
					console.log(schedule); 
					$("#bodyUser").html(
						`<div class="contaier-fluid" style="">
							<div class="container-fluid " style="background: #025215; height: 40px;">
								<div class="nav">
									<div class="col-md-4">
										<p class="text-white " style="font-size: 18px; font-weight: 500; padding-top: 5px;" >UDA Student</p>
									</div>
									<div class="col-md-6" style="margin-left: 135px;">
										<div class="date radirus">
											
										</div>
										<div class="month radirus">
											
										</div>
										<div class="year radirus">
											
										</div>
										<div class="avatar" >
											
										</div>
									</div>

								</div>
							</div>
							<nav class="container-fluid">
							<!-- Example split danger button -->
								<div class="dropdown">
								  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    Thông tin thông báo
								  </button>
								  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
								    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
								    <button class="dropdown-item" type="button">Xem lịch học tập</button>
								    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
								    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
								  </div>
								</div>
								<div class="dropdown">
								  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    Đăng ký học phần
								  </button>
								  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
								    <button class="dropdown-item" type="button">Đăng ký kế hoặc đạt chuẩn đầu ra</button>
								    <button class="dropdown-item" type="button">Đăng ký học phần</button>
								    <button class="dropdown-item" type="button">Xem lịch giảng dậy</button>
								    <button class="dropdown-item" type="button">Kế hoặc toàn khóa</button>
								    <button class="dropdown-item" type="button">Kế hoặc năm học</button>
								  </div>
								</div>
								<div class="dropdown">
								  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								   	Góc riêng sinh viên
								  </button>
								  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
								    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
								    <button class="dropdown-item" type="button">Xem lịch học tập</button>
								    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
								    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
								  </div>
								</div>
								<div class="dropdown">
								  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								   	Sinh viên nhà trường
								  </button>
								  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
								    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
								    <button class="dropdown-item" type="button">Xem lịch học tập</button>
								    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
								    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
								  </div>
								</div>
								<div class="dropdown">
								  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								   	Công tác sinh viên
								  </button>
								  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
								    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
								    <button class="dropdown-item" type="button">Xem lịch học tập</button>
								    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
								    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
								  </div>
								</div>
								<div class="dropdown">
								  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								   	Khảo sát
								  </button>
								  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
								    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
								    <button class="dropdown-item" type="button">Xem lịch học tập</button>
								    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
								    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
								  </div>
								</div>
							</nav>
							<!-- --------------------------------------------------------BODY--------------- -->
							<div class="container-fluid float-left">
								<hr>
								<p class="h5 text-danger">Cố vấn học tập: Trương Thị Hoài An SĐT: 0916547579</p>
								<br>
								<table class="border table"border = '1'>
								  <thead class="" style="background: #025215">
								    <tr>
								      <th scope="col" clas="text-white"></th>
								      <th scope="col" clas="text-white">Thứ 2</th>
								      <th scope="col" clas="text-white">Thứ 3</th>
								      <th scope="col" clas="text-white">Thứ 4</th>
								      <th scope="col" clas="text-white">Thứ 5</th>
								      <th scope="col" clas="text-white">Thứ 6</th>
								      <th scope="col" clas="text-white">Thứ 7</th>
								      <th scope="col" clas="text-white">Chủ Nhật</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr>
								      <th scope="row">Buối Sáng</th>
								      <td></td>
								      <td>${schedule.sangThu3}</td>
								      <td>${schedule.sangThu4}</td>
								      <td>${schedule.sangThu5}</td>
								      <td>${schedule.sangThu6}</td>
								      <td>${schedule.sangThu7}</td>
								      <td></td>
								    </tr>
								    <tr>
								      <th scope="row">Buôi Chiều</th>
								      <td>${schedule.chieuThu2}</td>
								      <td>${schedule.chieuThu3}</td>
								      <td>${schedule.chieuThu4}</td>
								      <td>${schedule.chieuThu5}</td>
								      <td>${schedule.chieuThu6}</td>
								      <td>${schedule.chieuThu7}</td>
								      <td></td>
								    </tr>
								  </tbody>
								</table>
							</div>
						
							<footer class="footer fixed-bottom  navbar-border" >
								<a class="btn text-white" style="width: 100%" href="#">Ngay lúc này, em cần nhà trường hỗ trợ về việc gì nào?</a>
							</footer>	

						</div>`
					);
				});
				
				$("#thongTinCaNhan").click(function(){
					debugger;
					
				});		
				
			
			
				// Page userhepl
				$("#heplStudent").click(function(){
					$("#bodyUser").html(
						`
						<div class="container-fluid " style="background: #025215; height: 40px;">
							<div class="nav">
								<div class="col-md-4">
									<p class="text-white " style="font-size: 18px; font-weight: 500; padding-top: 5px;" >UDA Student</p>
								</div>
								<div class="col-md-6" style="margin-left: 135px;">
									<div class="date radirus">
										
									</div>
									<div class="month radirus">
										
									</div>
									<div class="year radirus">
										
									</div>
									<div class="avatar" >
										
									</div>
								</div>

							</div>
						</div>
						<nav class="container-fluid">
						<!-- Example split danger button -->
							<div class="dropdown">
							  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Thông tin thông báo
							  </button>
							  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
							    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
							    <button class="dropdown-item" type="button">Xem lịch học tập</button>
							    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
							    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
							  </div>
							</div>
							<div class="dropdown">
							  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Đăng ký học phần
							  </button>
							  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
							    <button class="dropdown-item" type="button">Đăng ký kế hoặc đạt chuẩn đầu ra</button>
							    <button class="dropdown-item" type="button">Đăng ký học phần</button>
							    <button class="dropdown-item" type="button">Xem lịch giảng dậy</button>
							    <button class="dropdown-item" type="button">Kế hoặc toàn khóa</button>
							    <button class="dropdown-item" type="button">Kế hoặc năm học</button>
							  </div>
							</div>
							<div class="dropdown">
							  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							   	Góc riêng sinh viên
							  </button>
							  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
							    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
							    <button class="dropdown-item" type="button">Xem lịch học tập</button>
							    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
							    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
							  </div>
							</div>
							<div class="dropdown">
							  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							   	Sinh viên nhà trường
							  </button>
							  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
							    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
							    <button class="dropdown-item" type="button">Xem lịch học tập</button>
							    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
							    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
							  </div>
							</div>
							<div class="dropdown">
							  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							   	Công tác sinh viên
							  </button>
							  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
							    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
							    <button class="dropdown-item" type="button">Xem lịch học tập</button>
							    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
							    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
							  </div>
							</div>
							<div class="dropdown">
							  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							   	Khảo sát
							  </button>
							  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
							    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
							    <button class="dropdown-item" type="button">Xem lịch học tập</button>
							    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
							    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
							  </div>
							</div>
						</nav>
						<!-- --------------------------------------------------------------------------------- -->
						<div id="wrapper" style="margin:5px;float:left; border-top: 1px solid #343a4075;width: 100%;" >
					    	<div id="page-content-wrapper" style="margin-top: 15px;">
					        <section class="content-wrapper main-content clear-fix">
					            <h4><i class="fa fa-headphones" style="color:red"></i>
					    			Ngay lúc này, em cần nhà trường hổ trợ về việc gì nào?</h4>
							<form action="/hoi-dap/gop-y" enctype="multipart/form-data" id="form" method="post">    
								<div class="row">
					        		<div class="col-md-12" style="border-right: none;">
					            		<input id="ngay" name="ngay" type="hidden" value="2019-11-04 16:44:19">
					            		<input id="trangthai" name="trangthai" type="hidden" value="0">
					            		<textarea class="form-control" cols="20" id="content" name="content" required="required" rows="2"></textarea>
					        		</div>
					    		</div>
					    		<div class="row" style="padding-top:5px">
					        		<div class="col-md-12" style="border-right: none;">
					            		<p class="btn btn-success" id="btnSend">Gửi thông tin chia sẽ này</p>	
					           		</div>
					    		</div>
							</form>
						<style type="text/css">
							h4{
								font-size: 14px;
							}
							th{
								font-size: 13px;
							}

							.btn-primary{
								 background-color: #1e7e34;
					    			border-color: #28a745;
					    			font-size: 13px;
							}
						</style>
							<hr>
							<h4>
					    		<i class="fa fa-table" style="color:red"></i>
					    		Các thông tin em đã gửi tới Nhà trường 
							</h4>
							<div class="row">
					    		<div class="col-md-12" style="border-right: none;">
									<table class="table table-bordered">
						    			<tbody>
						    				<tr>
						        				<th>Nội dung</th>
						        				<th width="100">Ngày gửi</th>
						        				<th width="100"></th>
						    				</tr>
										</tbody>
									</table>
								</div>
							</div>
					        </section>
					    </div><!-- /#page-content-wrapper -->
					</div>
					</body>
					<footer>
						<footer class="footer fixed-bottom footer-dark navbar-border">
					    <a class="btn btn-danger" href="#" style="width:100%;font-weight:bold">Ngay lúc này, em cần nhà trường hỗ trợ về việc gì nào?</a>
					</footer>	
					`
					)	
					// send hepl message
					$("#btnSend").click(function (){
						debugger
						var messgae = $("#content").val();
						var date = new Date();
						 day  = date.getDate(),  
				         month = date.getMonth() + 1,              
				         year =  date.getFullYear();
				         var message = {
				         	idrequest:idsinhvien,
				         	messgae:messgae,
				         	day:day,
				         	month:month,
				         	year:year
				         }
				         if (message!=null) {
				         	// statement
				         	messages.push(message);
				        	localStorage.setItem("localStorageMessage", JSON.stringify(messages));
				        	alert('Gửi tin nhắn thành công')
				         } else {
				         	// statement
				         	alert('Gửi tin nhắn không thành công')
				         }
				       
				         
					});
				})
				
			}
		if (count == 0) {
			var status = document.getElementById('statusLogin');
			$(".statusLogin").html(
				`Login  thất bại`	
			);
			count +=1;
		}
		if (count == 0) {
			
		}
	}

}
function thongTinCaNhan (i) {
		// body... 
		let	students =JSON.parse(localStorage.getItem("localStorageStudent"));
		bodyUser.innerHTML =`
					<div class="container-fluid " style="background: #025215; height: 40px;">
						<div class="nav">
							<div class="col-md-4">
								<p class="text-white " style="font-size: 18px; font-weight: 500; padding-top: 5px;" >UDA Student</p>
							</div>
							<div class="col-md-6" style="margin-left: 135px;">
								<div class="date radirus">
									
								</div>
								<div class="month radirus">
									
								</div>
								<div class="year radirus">
									
								</div>
								<div class="avatar" >
									
								</div>
							</div>

						</div>
					</div>
					<nav class="container-fluid">
					<!-- Example split danger button -->
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Thông tin thông báo
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
						    <button class="dropdown-item" type="button">Xem lịch học tập</button>
						    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
						    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
						  </div>
						</div>
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Đăng ký học phần
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button">Đăng ký kế hoặc đạt chuẩn đầu ra</button>
						    <button class="dropdown-item" type="button">Đăng ký học phần</button>
						    <button class="dropdown-item" type="button">Xem lịch giảng dậy</button>
						    <button class="dropdown-item" type="button">Kế hoặc toàn khóa</button>
						    <button class="dropdown-item" type="button">Kế hoặc năm học</button>
						  </div>
						</div>
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						   	Góc riêng sinh viên
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
						    <button class="dropdown-item" type="button">Xem lịch học tập</button>
						    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
						    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
						  </div>
						</div>
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						   	Sinh viên nhà trường
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
						    <button class="dropdown-item" type="button">Xem lịch học tập</button>
						    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
						    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
						  </div>
						</div>
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						   	Công tác sinh viên
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
						    <button class="dropdown-item" type="button">Xem lịch học tập</button>
						    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
						    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
						  </div>
						</div>
						<div class="dropdown">
						  <button  class=" btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						   	Khảo sát
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
						    <button class="dropdown-item" type="button">Xem thông tin thông báo</button>
						    <button class="dropdown-item" type="button">Xem lịch học tập</button>
						    <button class="dropdown-item" type="button">Xem TKB lớp khác</button>
						    <button class="dropdown-item" type="button">Học và kỳ thi lần này</button>
						  </div>
						</div>
					</nav>
					<!-- --------------------------------------------------------BODY--------------- -->

					<div class="container-fluid body">
							<div class="hssv" style="width: 70% ;margin-top: 10px; float:left;" >
								<p id="p_hssv">
									<img src="http://sinhvien.donga.edu.vn/images/onlyhoa.png" id="iconhssv">
									Hồ sơ sinh viên
								</p>
							</div>
							<div class="suatt" style="width: 30%;margin-top: 10px; float: left;">
								<p id="p_suatt">Sửa thông tin</p>
							</div>
							<div class="container">
								<div class="row profile">
									<div class="col-sm-3">
										<img src="" id="img_ttht">
										<p id="idsv">IDSV: '${students[i].idSinhVien}'</p>
										<p id="name">Họ và tên: '${students[i].tenSinhVien}'</p>
										<p id="sex">Phái: Nam</p>
										<p id="datebirth">Ngày sinh : '${students[i].tenSinhVien}'</p>
										<p id="born">Nơi sinh '${students[i].hoKhau}'</p>
										<p id="dt">Dân tộc '${students[i].hoKhau}'</p>
									</div>
									<div class="col-sm-9">
										<dl class="dl_httt">
										<dt>Bậc : ${students[i].bac}</dt>
										<dd></dd>

										<dt>Khóa học : ${students[i].khoaHoc}</dt>
										<dd></dd>

										<dt>Ngành học : ${students[i].nganhHoc}</dt>
										<dd></dd>

										<dt>Tên lớp : ${students[i].tenLop}</dt>
										<dd></dd>

										<dt>Số CMND ${students[i].CMND}</dt>
										<dd></dd>

										<dt>Ngày nơi cấp : ${students[i].noiCap}</dt>
										<dd></dd>

										<dt>Điện thoại : ${students[i].sdtNha}</dt>
										<dd></dd>

										<dt>Email : ${students[i].email} </dt>
										<dd></dd>

										<dt>Tôn giáo :${students[i].tonGiao} </dt>
										<dd></dd>

										<dt>Địa chỉ nhà trọ : ${students[i].diaChi} </dt>
										<dd></dd>

										<dt>Đoàn viên</dt>
										<dd>
											<input class="check-box" disabled="disabled" type="checkbox">
										</dd>

										<dt>Ngày vào Đoàn : ${students[i].ngayVaoDoan}</dt>
										<dd></dd>

										<dt>Đảng viên : ${students[i].ngayVaoDang}</dt>
										<dd>
											<input class="check-box" disabled="disabled" type="checkbox">
										</dd>

										<dt>Ngày vào Đảng : ${students[i].ngayVaoDang}</dt>
										<dd></dd>

										<dt>Họ tên Cha : ${students[i].hoTenCha}</dt>
										<dd></dd>

										<dt>Nghệ nghiệp Cha : ${students[i].ngheNghiepCha} </dt>
										<dd></dd>

										<dt>Họ tên Mẹ : ${students[i].hoTenMe}</dt>
										<dd></dd>

										<dt>Nghề nghiệp Mẹ : ${students[i].ngheNghiepMe}</dt>
										<dd></dd>

										<dt>Hộ khẩu : ${students[i].hoKhau}</dt>
										<dd></dd>

										<dt>Số điện thoại nhà : ${students[i].dienThoai}</dt>
										<dd></dd>

										<dt>Thành phần gia đình</dt>
										<dd></dd>

									</dl>
									</div>
								</div>
							</div>
					</div>
					<footer class="footer fixed-bottom  navbar-border" >
						<a class="btn text-white" style="width: 100%" href="#">Ngay lúc này, em cần nhà trường hỗ trợ về việc gì nào?</a>

				</footer>	

	`;				
}
