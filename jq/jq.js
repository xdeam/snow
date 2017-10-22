$(function(){
	
	
	
	
	$("#login").height($(document).height());
	/*alert($.cookie("name"))*/
		  
	//alert(getCookie("name"))
	user_id=getCookie("user_id")
	/*userinfo=$.cookie("name");*/
	if(user_id!=""){
		 $("#first").hide();
		  	$("#login").hide();
		  	$("#me").show();
		  	$("#me").height($(document).height())
		  	
	}
    Bmob.initialize("37b466960b81f0472be3e12b7173320a", "1ddff6b686c5a86df7e8f5e853498be1");
    queryX()
    var flag
    $("#show_reg").click(function(){
    	/*$("#reg_form").show()
    	$("#login_form").hide()
    	$(this).hide()
    	$(this).siblings("span").hide()*/
    	window.location="reg.html"
    })
	$("#sy").click(function(){
	  /*	$("#first").show();
	  	$("#login").hide();
	  	$("#me").hide();*/
	  	window.location="elsfk.html"
	})
	$("#dl").click(function(){
	  	$("#first").hide();
	  	$("#login").show();
	  	$("#me").hide();
	})
	$("#wo").click(function(){
	  	$("#first").hide();
	  	$("#login").hide();
	  	$("#me").show();
	  	$("#me").height($(document).height())
	})
/*	$("[name=loginbt]").mousemove(function(){
		$(".am-form-set").hide();
		$(this).siblings(".am-form-set").show();
	});*/
	$("#write").click(function () {
		if(!flag){
      	$("#notes_add").show()
        flag=true;
      }
      else{
      	flag=false
      	$("#notes_add").hide()
      }
    })
	$("#send").click(function(){
		
		 $("#notes_add").hide()
          //var notes = new Notes();
     	  var title=$("#ntitle").val();
          var content=$("#neirong").val();
		  saveNotes(user_id,title,content)
		/* var ss="<div class='notes'>"
	  	   ss+="<div class='notes_title'>标题</div>"
	  	   ss+="<div class='notes_content'>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容</div>"
	  	   ss+="<div class='notes_time'>2017/09/28</div>"
	  	   ss+="</div>"
	  	 $("#me").append(ss)  
	  	 $("#me").height($(document).height())*/
	    
	})
	$("#signin").click(function(){
	 
	});	
	$("#signup").click(function(){
		var name=$("#uname").val();
        var pass=$("#upass").val();
        
        checkUser(name,pass)
/*        
    var User = Bmob.Object.extend("user");//创建查询对象，入口参数是对象类的实例
	var query = new Bmob.Query(User);
    var name=$("#uname").val();
    var pass=$("#upass").val()
    query.equalTo("name",name);
// 查询所有数据
    var vpass;
   query.find({
    success: function(results) {
        alert("共查询到 " + results.length + " 条记录");
        // 循环处理查询到的数据
        for (var i = 0; i < results.length; i++) {
        var object = results[i];
          vpass=object.get('pass')
         // alert(vpass)
         if(vpass==pass){alert("aaaa")
         	$("#first").hide();
	  	$("#login").hide();
	  	$("#me").show();
	  	$("#me").height($(document).height())}
        }
    },
    error: function(error) {
        alert("查询失败: " + error.code + " " + error.message);
    }
    
});  */
   
    })
})
function queryX(){
	//$("me").empty()
	 var Notes = Bmob.Object.extend("notes");//创建查询对象，入口参数是对象类的实例
	var query = new Bmob.Query(Notes);
    query.equalTo("user_id",user_id)
// 查询所有数据
    
   query.find({
    success: function(results) {
       // alert("共查询到 " + results.length + " 条记录");
        // 循环处理查询到的数据
        ss=""
        for (var i = 0; i < results.length; i++) {
        var object = results[i];
           ss+="<div class='notes'>"
	  	   ss+="<div class='notes_title'>"+object.get("title")+"</div>"
	  	   ss+="<div class='notes_content'>"+object.get("content")+"</div>"
	  	   ss+="<div class='notes_time'>"+object.createdAt.substr(0,10)+"</div>"
	  	   ss+="</div>"
	  	
        }
         $("#notesA").html(ss)  
	  	 $("#me").height($(document).height())
    },
    error: function(error) {
        alert("查询失败: " + error.code + " " + error.message);
    }
	
	})
}
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
 