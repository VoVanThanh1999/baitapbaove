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
				         messages.push(message);
				         localStorage.setItem("localStorageMessage", JSON.stringify(messages));
				         
					});
				})
				
			}
		if (count == 0) {
			var status = document.getElementById('statusLogin');
			$(".statusLogin").html(
				`Login  thất bại`	
			);

		}
	}

}
		