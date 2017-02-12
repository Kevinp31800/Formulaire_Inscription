$(document).ready(function(){
	var users = []
	$('form').submit(function(event){
		event.preventDefault();
		console.log('send');
		var name = $('#name').val()
		var first_name = $('#first_name').val()
		var id = $('#id').val()
		var birth = $('#birth').val()
		var mail = $('#mail').val()
		var tel = $('#tel').val()
		var ville = $('#ville').val()
		var color = $('#color').val()
		var pass = $('#pass').val()
		var obj = {
			name:name, 
			first_name:first_name, 
			id:id, 
			birth:birth,
			mail:mail,
			tel:tel,
			ville:ville,
			color:color,
			pass:pass,
		}
		users.push(obj);
		console.log(users)
		localStorage.setItem('users', JSON.stringify(users));
		var user = localStorage.getItem('users');
		var parseUser = JSON.parse(user);
		for(var i = 0; i<parseUser.length; i++){
			console.log(parseUser[i]);
			$('#app').append(parseUser[i] + "<br />")

			if ($("#pass" === "#pass".lowercase && $("#submit").click)){
				alert("veuillez mettre au moins une majuscule !");
			}
		}
	})
});