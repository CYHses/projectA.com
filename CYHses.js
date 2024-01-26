function check(){
	const button=document.querySelector("#loginButton");
	const el=document.getElementById("check");
	const check1=document.getElementById("check1");
	const check2=document.getElementById("check2");
	const check3=document.getElementById("check3");
	const filename=document.getElementById("input1").value;
	const basename=document.getElementById("input2").value;
	const password=document.getElementById("input3").value;
	
	
	if (filename==="") {
		check1.innerHTML="*";
		el.innerHTML="please check first name *";
	}else if(basename===""){
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
	button.innerHTML="<a href='CYHsesHome.html'>Login</a>";
	
	}
};

function brownMode(){
	const brownMode=document.querySelector("body");
	brownMode.classList.toggle("brownMode");
}
