function check(){
	const el=document.getElementById("check");
	const check1=document.getElementById("check1");
	const check2=document.getElementById("check2");
	const check3=document.getElementById("check3");
	const firstname=document.getElementById("input1").value;
	const lastname=document.getElementById("input2").value;
	const password=document.getElementById("input3").value;
	
	
	if (firstname==="") {
		check1.innerHTML="*";
		el.innerHTML="please check first name *";
	}else if(lastname===""){
		check1.innerHTML="";
		check2.innerHTML="*";
		el.innerHTML="please check last name *";
	}else if(password==="") {
		check2.innerHTML="";
		check3.innerHTML="*";
		el.innerHTML="please check password *";
	}
	else{
	check1.innerHTML="";
	check2.innerHTML="";
	check3.innerHTML="";
	el.innerHTML="";
	
	}
};
	