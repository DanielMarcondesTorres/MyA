atualizarcs();animar();inser();iniciar();$(".toScroll").hide();$('#animars').click(function(event){event.preventDefault();if(this.innerHTML=="Select"){document.getElementById('multy').classList.remove("d-none");document.getElementById('multy').style.cssText="animation-name: appearintop; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";document.getElementById('demo').style.cssText="animation-name: ola; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";document.getElementById('animars').innerText="Select";let targetOffset=$(".example").offset().top;$('html, body').animate({scrollTop:targetOffset-60},1000)}
else{let esda=document.getElementById("animas");((esda.options[esda.selectedIndex].value!="Multy-Animation")?animar():animult())}});$("#fech").click(function(e){document.getElementById('dlearn').style.cssText="animation-name: disappeardown; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";window.setTimeout(function(){document.getElementById('dlearn').classList.add("d-none")},400)});$('#animMult').click(function(event){animult()});$(".anim").change(function(event){let e=document.getElementById("animas");((e.options[e.selectedIndex].value!="Multy-Animation")?animar():animult())});function atuli(){for(var i=0;i<$(".toScroll").length;i++){$(".toScroll")[i].classList.remove("d-flex")}
$(".toScroll").hide();document.getElementById("animadors").classList.remove("MyA-lock");document.getElementById("animadorscopy").classList.remove("myaOnClickTo-animadors");document.getElementById("animadorscopy").classList.remove("myaOnClickToOnly-animadors");document.getElementById("animadorscopy").classList.remove("myaOnHoverToOnly-animadors");document.getElementById("animadorscopy").classList.remove("myaOnHoverTo-animadors")}
$("#count").change(function(event){atuli();document.getElementById("animadorscopy").style.cssText+="display:none;";let e=document.getElementById("count");if(e.options[e.selectedIndex].value=="mya-onScrollOnly"||e.options[e.selectedIndex].value=="mya-onScroll"){$(".toScroll").show();for(var i=0;i<$(".toScroll").length;i++){$(".toScroll")[i].classList.add("d-flex")}
$('html, body').animate({scrollTop:0},10);window.setTimeout(function(e){let esda=document.getElementById("animas");((esda.options[esda.selectedIndex].value!="Multy-Animation")?animar():animult())},500)}
else if(e.options[e.selectedIndex].value=="myaOnClickTo-"||e.options[e.selectedIndex].value=="myaOnClickToOnly-"||e.options[e.selectedIndex].value=="myaOnHoverToOnly-"||e.options[e.selectedIndex].value=="myaOnHoverTo-"){document.getElementById("animadorscopy").style.cssText+="display:flex; margin:25px;"
document.getElementById("animadorscopy").classList.add("hoverme");document.getElementById("animadorscopy").classList.add("MyA");atuli();document.getElementById("animadorscopy").classList.add(e.options[e.selectedIndex].value+"animadors");document.getElementById("animadorscopy").innerText=((e.options[e.selectedIndex].value.includes("Click"))?"Click Me":"Hover Me");let oanim=document.getElementById('animadors');for(var i=0;i<oanim.classList.length;i++){if(oanim.classList[i].includes("myaCount")){oanim.classList.remove(oanim.classList[i]);oanim.classList.add("myaCount-1");break}}
atualizar()}
else{let esda=document.getElementById("animas");((esda.options[esda.selectedIndex].value!="Multy-Animation")?animar():animult())}});$('#animas').change(function(event){let e=document.getElementById("animas");if(e.options[e.selectedIndex].value=="Multy-Animation"){document.getElementById('multy').classList.remove("d-none");document.getElementById('multy').style.cssText="animation-name: appearintop; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";document.getElementById('demo').style.cssText="animation-name: ola; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";document.getElementById('animars').innerText="Select";let targetOffset=$(".example").offset().top;$('html, body').animate({scrollTop:targetOffset-60},1000)}
else{document.getElementById('animars').innerText="Animate";document.getElementById('multy').style.cssText="animation-name: disappeardown; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";window.setTimeout(function(){document.getElementById('multy').classList.add("d-none")},400);let esda=document.getElementById("animas");((esda.options[esda.selectedIndex].value!="Multy-Animation")?animar():animult())}});$('#learn').click(function(e){e.preventDefault();document.getElementById('demo').style.cssText="animation-name: ola1; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";document.getElementById('dlearn').classList.remove("d-none");document.getElementById('dlearn').style.cssText="animation-name: appearintop; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";document.getElementById('multy').style.cssText="animation-name: disappeardown; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";window.setTimeout(function(){document.getElementById('multy').classList.add("d-none");let targetOffset=$("#dlearn").offset().top;$('html, body').animate({scrollTop:targetOffset},1000)},500)});$('#next').click(function(e){document.getElementById('demo').style.cssText="animation-name: ola; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";document.getElementById('multy').style.cssText="animation-name: disappeardown; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";window.setTimeout(function(){document.getElementById('multy').classList.add("d-none")},400)});$('#conf').click(function(e){document.getElementById('demo').style.cssText="animation-name: ola1; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";document.getElementById('dlearn').style.cssText="animation-name: disappeardown; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;";window.setTimeout(function(){document.getElementById('dlearn').classList.add("d-none")},400)});$('#tomult').click(function(e){document.getElementById('multy').style.cssText="animation-name: appearintop; animation-duration: .4s; animation-timing-function: linear; animation-fill-mode: forwards;"});$('#ocss').click(function(e){inser()});function atualizarcs(){document.getElementById("mycss").innerHTML="min-height: 100px;\n"+"min-width: 100px;\n"+"display: flex;\n"+"align-items: center;\n"+"justify-content: center;\n"+"background: #ed145b;\n\n"+"Border-radius: 360px 30px 360px 360px;\n"+"box-shadow: inset 0 0 35px #008, inset #ed145b 0 0 10px, 2px 5px 25px #000;\n"+"background: linear-gradient(180deg, #ed145b, gray);\n"+"font-size: 25px;\n"+"text-shadow: 0 0 20px #000;\n"+"color: #fff;\n"+"user-select: none;"}
function inser(){let cssString=$('#mycss').val();let text=$('#text').val();document.getElementById("animadors").innerText=text;document.getElementById("animadors").style.cssText=cssString;let targetOffset=$("#demo").offset().top;$('html, body').animate({scrollTop:0},1000)}
function animult(){let nome=$("#animarsm").val();let ea=document.getElementById("delay");let delay=ea.options[ea.selectedIndex].value.replace("myaDelay-","")[0]+"."+ea.options[ea.selectedIndex].value.replace("myaDelay-","")[1];let eb=document.getElementById("duration");let duration=eb.options[eb.selectedIndex].value.replace("myaDuration-","")[0]+"."+eb.options[eb.selectedIndex].value.replace("myaDuration-","")[1]+"s";let ec=document.getElementById("count");let count=ec.options[ec.selectedIndex].value.replace("myaCount-","").replace("myaOnClickTo-","").replace("myaOnClickToOnly-","").replace("myaOnHoverToOnly-","").replace("myaOnHoverTo-","");let ed=document.getElementById("direct");let direct=ed.options[ed.selectedIndex].value.replace("myaDirection-","");let ef=document.getElementById("speed");let speed=ef.options[ef.selectedIndex].value.replace("myaSpeed-","");let eg=document.getElementById("fill");let fill=eg.options[eg.selectedIndex].value.replace("myaFillmode-","");let cara=document.getElementById('animadors');for(var ia=0;ia<10;ia++){for(var i=0;i<cara.classList.length;i++){cara.classList.remove(cara.classList.item(i))}}
let nomea="Mya_";window.setTimeout(function(){cara.classList.add('MyA');if(isNaN(count)&&count!="infinite"){cara.classList.add(count);count=1};for(var i=0;i<nome.length;i++){nomea+=nome[i].replace("mya-","")+"/"+duration+"/"+speed+"/"+(Math.round(delay*i*10)/10)+"s/"+direct+"/"+count+"/"+fill+((i==nome.length-1)?"":"_");console.log(nome[i].replace("mya-",""))}
cara.classList.add(nomea);code()},10);window.setTimeout(function(){atualizar()},100)}
function animar(){let e=document.getElementById("animas");let nome=e.options[e.selectedIndex].value;let ea=document.getElementById("delay");let delay=ea.options[ea.selectedIndex].value;let eb=document.getElementById("duration");let duration=eb.options[eb.selectedIndex].value;let ec=document.getElementById("count");let count=ec.options[ec.selectedIndex].value;count=((count.includes("To-")||count.includes("ToOnly-"))?1:count);let ed=document.getElementById("direct");let direct=ed.options[ed.selectedIndex].value;let ef=document.getElementById("speed");let speed=ef.options[ef.selectedIndex].value;let eg=document.getElementById("fill");let fill=eg.options[eg.selectedIndex].value;let cara=document.getElementById('animadors');cara.style.animation="";for(var ia=0;ia<10;ia++){for(var i=0;i<cara.classList.length;i++){if(cara.classList.item(i)!="animadors"){cara.classList.remove(cara.classList.item(i))}}}
window.setTimeout(function(){cara.classList.add('MyA');cara.classList.add(nome);if(delay!="myaDelay-00"){cara.classList.add(delay)}
cara.classList.add(duration);if(count!="myaCount-1"){cara.classList.add(count)}
if(direct!="myaDirection-normal"){cara.classList.add(direct)}
if(speed!="myaSpeed-linear"){cara.classList.add(speed)}
if(fill!="myaFillmode-none"){cara.classList.add(fill)}
code()},10);window.setTimeout(function(){atualizar()},20)}
function code(){let cara=document.getElementById('animadors');document.getElementById('classes').innerHTML="<ul>";for(var i=0;i<cara.classList.length;i++){document.getElementById('classes').innerHTML+="<li>"+cara.classList[i]+"</li>"}
let nome=$("#animas").val();document.getElementById('classes').innerHTML+="</ul><br><h4 class='col-12 padding-none margin-none'>Here is all "+((nome=="Multy-Animation")?"in one line":"")+"</h4><hr>";document.getElementById('classes').innerHTML+="<p class='col-12 padding-none margin-none'>"+cara.classList+"</p>";if(nome!="Multy-Animation"){let ea=document.getElementById("delay");let delay=ea.options[ea.selectedIndex].value.replace("myaDelay-","")[0]+"."+ea.options[ea.selectedIndex].value.replace("myaDelay-","")[1];let eb=document.getElementById("duration");let duration=eb.options[eb.selectedIndex].value.replace("myaDuration-","")[0]+"."+eb.options[eb.selectedIndex].value.replace("myaDuration-","")[1]+"s";let ec=document.getElementById("count");let count=ec.options[ec.selectedIndex].value.replace("myaCount-","");let ed=document.getElementById("direct");let direct=ed.options[ed.selectedIndex].value.replace("myaDirection-","");let ef=document.getElementById("speed");let speed=ef.options[ef.selectedIndex].value.replace("myaSpeed-","");let eg=document.getElementById("fill");let fill=eg.options[eg.selectedIndex].value.replace("myaFillmode-","");let nomea="Mya_"+nome.replace("mya-","")+"/"+duration+"/"+speed+"/"+delay+"s/"+direct+"/"+count+"/"+fill;document.getElementById('classes').innerHTML+="<br><h4 class='col-12 padding-none margin-none'>You can also use the code All in One</h4><hr>";document.getElementById('classes').innerHTML+="<p class='col-12 padding-none margin-none'>MyA "+nomea+"</p>"}}
function iniciar(){let cssString=$('#mycss').val();let text=$('#text').val();document.getElementById("animadorscopy").innerText=text;document.getElementById("animadorscopy").style.cssText=cssString;document.getElementById("animadorscopy").style.cssText+="display:none;";document.getElementById('animarsm').innerHTML=document.getElementById("animas").innerHTML;document.getElementById("animas").innerHTML+='<optgroup label="Especial"><option value="Multy-Animation">Multy-Animation</option></optgroup>'}