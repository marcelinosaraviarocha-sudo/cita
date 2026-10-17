let fechaElegida="", planElegido="";
function ir(n){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));document.getElementById("paso"+n).classList.add("active")}
function siguiente(){const f=document.getElementById("fecha").value;if(!f){alert("Primero elige una fecha 💗");return}fechaElegida=f;ir(2)}
function confirmar(plan){planElegido=plan;const d=new Date(fechaElegida+"T12:00:00");document.getElementById("resFecha").textContent="📅 "+d.toLocaleDateString("es-BO",{weekday:"long",day:"numeric",month:"long",year:"numeric"});document.getElementById("resPlan").textContent="✨ "+planElegido;ir(3)}
function reiniciar(){fechaElegida="";planElegido="";document.getElementById("fecha").value="";ir(0)}
const no=document.getElementById("no");
function escapar(){const x=(Math.random()*180)-90,y=(Math.random()*120)-60;no.style.transform=`translate(${x}px,${y}px)`;}
no.addEventListener("mouseenter",escapar);no.addEventListener("touchstart",e=>{e.preventDefault();escapar()});
function enviarWhatsApp(){
  if(!fechaElegida || !planElegido){
    alert("Primero completa la fecha y el plan 💗");
    return;
  }
  const d = new Date(fechaElegida+"T12:00:00");
  const fechaBonita = d.toLocaleDateString("es-BO",{
    weekday:"long", day:"numeric", month:"long", year:"numeric"
  });
  const mensaje =
`💕 ¡Acepté la cita!

📅 Fecha: ${fechaBonita}
✨ Plan: ${planElegido}

Nos vemos 😌💗`;

  const numero = "59177694769";
  window.open("https://wa.me/"+numero+"?text="+encodeURIComponent(mensaje), "_blank");
}
