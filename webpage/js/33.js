//留言板

		

		

	  var count=0;
        window.onload = function(){
            var Msg = document.getElementById("msg");
            var Btn = document.getElementById("btn");
            var Msg_c = document.getElementById("msg_c");
            var Ul = document.createElement("ul"); //定义一个有序的列表
            Msg_c.appendChild(Ul);                 //向Msg_c中添加UL节点
            Btn.onclick = function(){              /* 点击留言以后，在Msg_c中添加列表，在列表中添加内容
                                                      在每一条留言后面添加一个<span>标签 使用此标签的onclick属性
                                                    */ 
                                      
                var MsgValue = Msg.value;   
                if(MsgValue.length>0){
                	        var Li = document.createElement("li");
                Li.innerHTML = MsgValue + " <span class='liebiaospan'  style='color: red;'>删除</span>";
                var arrayLi = Ul.getElementsByTagName("li")   //判断是否是第一个留言
                if(arrayLi.length>0){
                    Ul.insertBefore(Li,arrayLi[0]);
                    count++;
                }else{
                    Ul.appendChild(Li);
                    count++;
                }
                Msg.value='';
                var Span = document.getElementsByClassName("liebiaospan")
                for(var i=0; i<Span.length; i++){
                    Span[i].onclick = function(){
                      Ul.removeChild(this.parentNode);
                      count--;
                    }
                }
                }else{
                	alert("请输入留言")
                }
        
            }
        }
        function allMessage(){       //统计留言的数量
            alert("一共有"+count+"条留言");
        }
        
        function verify(){
	    var length=document.getElementById("msg").value.length;	
		if(length<=50&&length>0){
		     document.getElementById("s2").innerHTML="你还可以输入<span style='color:red;font-size:30px'>"+(50-length)+"</span>个字	";
			$("#btn").attr("disabled",false); 
		}else{
					     document.getElementById("s2").innerHTML="已超出<span style='color:red;font-size:20px'>"+(length-50)+"</span>个字	";
					     alert("已超过留言字数");
				    $("#btn").attr("disabled",true);
					    
		         }
	            
         }
           	      
	 //留言板over