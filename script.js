const[c1,c2,c3]=document.querySelectorAll(".container1, .container2, .container3"),setDisplay=(i,e,s)=>{c1.style.display=i,c2.style.display=e,c3.style.display=s},setVisibility=(i,e,s)=>{c1.style.visibility=i,c2.style.visibility=e,c3.style.visibility=s},isVisible=i=>"block"===i.style.display,setContainer=()=>{isVisible(c1)?setDisplay("none","block","none"):isVisible(c2)?setDisplay("none","none","block"):isVisible(c3)&&setDisplay("block","none","none")};setDisplay("none","none","none"),onload=(()=>{setVisibility("visible","visible","visible"),setDisplay("block","none","none"),setInterval(setContainer,2e4)});