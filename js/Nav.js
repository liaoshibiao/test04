var Nd = document.getElementsByClassName('nav-d');
var MdId = document.getElementsByClassName('mendianId');
for (var i = 0; i < Nd.length; i++) {
			Nd[i].index = i;
			Nd[i].onclick = function(){ 
					  $(this).addClass('active');			 
					  $(this).siblings('li').removeClass('active');
					  if($(this).index()==0){
					  		$("#L-wid").children().html("")
							$("#M-wid").children().html("")
							$("#R-wid").children().html("")
					  		$("#L-wid").children().remove()
							$("#M-wid").children().remove()
							$("#R-wid").children().remove()
							$("#R-wid").children().empty()
							$("#M-wid").children().empty()
							$("#L-wid").children().empty()
							fengzhuang(par1);						
					  }else if($(this).index()==1){
					  		$("#L-wid").children().html("")
							$("#M-wid").children().html("")
							$("#R-wid").children().html("")
					  		$("#L-wid").children().remove()
							$("#M-wid").children().remove()
							$("#R-wid").children().remove()
							$("#R-wid").children().empty()
							$("#M-wid").children().empty()
							$("#L-wid").children().empty()
							fengzhuang(par2);	
					  }else if($(this).index()==2){
					  		$("#L-wid").children().html("")
							$("#M-wid").children().html("")
							$("#R-wid").children().html("")
					  		$("#L-wid").children().remove()
							$("#M-wid").children().remove()
							$("#R-wid").children().remove()
							$("#R-wid").children().empty()
							$("#M-wid").children().empty()
							$("#L-wid").children().empty()
							fengzhuang(par3);	

					  }else if($(this).index()==3){
					  		$("#L-wid").children().html("")
							$("#M-wid").children().html("")
							$("#R-wid").children().html("")
					  		$("#L-wid").children().remove()
							$("#M-wid").children().remove()
							$("#R-wid").children().remove()
							$("#R-wid").children().empty()
							$("#M-wid").children().empty()
							$("#L-wid").children().empty()
							fengzhuang(par4);	
					  }else if($(this).index()==4){
//						  	$("#L-wid").children().html("")
//							$("#M-wid").children().html("")
//							$("#R-wid").children().html("")
//					  		$("#L-wid").children().remove()
//							$("#M-wid").children().remove()
//							$("#R-wid").children().remove()
//							$("#R-wid").children().empty()
//							$("#M-wid").children().empty()
//							$("#L-wid").children().empty()
							fengzhuang(par);
							document.location.reload();
					  }else{
					  		$("#L-wid").children().html("")
							$("#M-wid").children().html("")
							$("#R-wid").children().html("")
					  		$("#L-wid").children().remove()
							$("#M-wid").children().remove()
							$("#R-wid").children().remove()
							$("#R-wid").children().empty()
							$("#M-wid").children().empty()
							$("#L-wid").children().empty()
							fengzhuang(par6);	
					  }
			}
		}

$("#SS").click(function(){
	   if($('.switch-anim').prop('checked')){
	   		$("#L-wid").children().remove()
			$("#M-wid").children().remove()
			$("#R-wid").children().remove()
            fengzhuang(par)
        }else{
			$("#L-wid").children().remove()
			$("#M-wid").children().remove()
			$("#R-wid").children().remove()
            console.log("没选中");
            fengzhuang(par7)
        }
})
