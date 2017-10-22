function saveUser(name,pass,email){
  Bmob.initialize("37b466960b81f0472be3e12b7173320a", "1ddff6b686c5a86df7e8f5e853498be1");
  var User = Bmob.Object.extend("user");
    var user = new User();
  
     user.set("name",name)
     user.set("pass",pass)
     user.set("email",email)
    
    user.save(null, {
      success: function(object) {
        //alert("create object success, object id:"+object.id);
        $("#innerDiv").hide()
       // $("#outerDiv").append("<font color='#0084C7'>注册成功</font>")
       
        i=3;
        $("#outerDiv").html("<center><font style='text-align:center,margin:auto' color='#0084C7'>注册成功"+i+"秒后跳转到<a href='index.html'>首页</a></font></center>")

        id=setInterval(function(){
        	i--
        	if(i==0){
        		window.location="index.html"
        		//alert(object.id)
        		document.cookie="user_id="+object.id
        		refresh()
        		clearInterval(id);
        		
        	}
        	$("#outerDiv").html("<center><font style='text-align:center,margin:auto' color='#0084C7'>注册成功"+i+"秒后跳转到<a href='index.html'>首页</a></font></center>")
        },1*1000)
        //setTimeout(function(){ $("#outerDiv").html("<font>3秒后跳转</font>")},3*1000)
      },
      error: function(model, error) {
       // alert("create object fail"+error.description);
      }
     });
	
	
}
function checkUser(name,pass){
  Bmob.initialize("37b466960b81f0472be3e12b7173320a", "1ddff6b686c5a86df7e8f5e853498be1");
	  var User = Bmob.Object.extend("user");
	var query = new Bmob.Query(User);
		query.equalTo("name",name); 
		// 查询所有数据
		query.find({
		    success: function(results) {
		      //  alert("共查询到 " + results.length + " 条记录");
		        // 循环处理查询到的数据
		       /* for (var i = 0; i < results.length; i++) {
		        var object = results[i];
		        alert(object.id + ' - ' + object.get('playerName'));
		        }*/
		       var object=results[0]
		       if(pass==object.get("pass")){
		       	  $("#first").hide();
					  	$("#login").hide();
					  	$("#me").show();
					  	$("#me").height($(document).height())
					     document.cookie="user_id="+object.id;
		       }else{
		       	 alert("登陆失败");
		       }
		    },
		    error: function(error) {
		        alert("登陆失败");
		    }
		});
}
function saveNotes(user_id,title,content){
	 var Notes = Bmob.Object.extend("notes");
    notes=new Notes();
   // alert(user_id)
     notes.set("user_id",user_id)
     notes.set("title",title);
     notes.set("content",content);
    
    notes.save(null, {
      success: function(object) {
        alert("保存成功");
        refresh()
      },
      error: function(model, error) {
        alert("create object fail"+error.description);
      }
     });
}
function refresh(){
 Bmob.initialize("37b466960b81f0472be3e12b7173320a", "1ddff6b686c5a86df7e8f5e853498be1");
  var Notes = Bmob.Object.extend("notes");//创建查询对象，入口参数是对象类的实例
	var query = new Bmob.Query(Notes);
 query.equalTo("user_id",getCookie("user_id"))
// 查询所有数据
    
   query.find({
    success: function(results) {
       // alert("共查询到 " + results.length + " 条记录");
        // 循环处理查询到的数据
        var notess=""
        for (var i = 0; i < results.length; i++) {
        var object = results[i];
         notess+="<div class='notes'>"
	  	   notess+="<div class='notes_title'>"+object.get("title")+"</div>"
	  	   notess+="<div class='notes_content'>"+object.get("content")+"</div>"
	  	   notess+="<div class='notes_time'>"+object.createdAt.substr(0,10)+"</div>"
	  	   notess+="</div>"
	  	
        }
         $("#notesA").html(notess)  
	  	 $("#me").height($(document).height())
    },
    error: function(error) {
        alert("查询失败: " + error.code + " " + error.message);
    }
	
	})
}
