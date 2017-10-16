function saveUser(name,pass,email){
  Bmob.initialize("37b466960b81f0472be3e12b7173320a", "1ddff6b686c5a86df7e8f5e853498be1");
  var User = Bmob.Object.extend("user");
    var user = new User();
  
     user.set("name",name)
     user.set("pass",pass)
     user.set("email",email)
    
    user.save(null, {
      success: function(object) {
        alert("create object success, object id:"+object.id);
      },
      error: function(model, error) {
        alert("create object fail"+error.description);
      }
     });
	
	
}
