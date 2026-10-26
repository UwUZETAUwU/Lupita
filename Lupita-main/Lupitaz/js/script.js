function obtener(){return JSON.parse(localStorage.getItem('carrito')||'[]')}
function guardar(c){localStorage.setItem('carrito',JSON.stringify(c));actualizarContador()}
function agregar(nombre,precio){let c=obtener();let x=c.find(i=>i.nombre===nombre);if(x)x.cantidad++;else c.push({nombre,precio,cantidad:1});guardar(c);alert(nombre+' agregado al carrito 🥐')}
function actualizarContador(){let c=obtener();let n=c.reduce((s,i)=>s+i.cantidad,0);document.querySelectorAll('#contador').forEach(e=>e.textContent=n)}
function mostrar(){let l=document.getElementById('lista');if(!l)return;let c=obtener();if(!c.length){l.innerHTML='<p>Tu carrito está vacío.</p>';document.getElementById('total').textContent='S/ 0.00';return}l.innerHTML=c.map((i,k)=>`<div class="cart-item"><div><b>${i.nombre}</b><br>S/ ${i.precio.toFixed(2)} × ${i.cantidad}</div><button class="card button" onclick="eliminar(${k})">Eliminar</button></div>`).join('');let t=c.reduce((s,i)=>s+i.precio*i.cantidad,0);document.getElementById('total').textContent='S/ '+t.toFixed(2)}
function eliminar(k){let c=obtener();c.splice(k,1);guardar(c);mostrar()}
function finalizar(){if(!obtener().length)return alert('Tu carrito está vacío.');alert('¡Gracias por tu pedido en La Lupita! 🥖');localStorage.removeItem('carrito');mostrar();actualizarContador()}
function toggleMenu(){document.getElementById('menu')?.classList.toggle('open')}
document.addEventListener('DOMContentLoaded',()=>{actualizarContador();mostrar()})