// Teks mengetik
const roles=["pembuat web portofolio","pembuat gim","programmer hebat"];
const typed=document.getElementById('typed');
let r=0,c=0,del=false;
function tick(){
  const w=roles[r];
  typed.textContent=w.slice(0,c);
  if(!del&&c===w.length){del=true;return setTimeout(tick,1400)}
  if(del&&c===0){del=false;r=(r+1)%roles.length}
  c+=del?-1:1;
  setTimeout(tick,del?45:90);
}
tick();

// Perjalanan sekolah
const data=[
  {t:'TK',n:'TK Bangkinang',l:'Jenjang pertama',d:'Awal mengenal dunia sekolah: bermain, menggambar, dan berteman.'},
  {t:'SD',n:'SD 007 Bangkinang',l:'Sekolah dasar',d:'Belajar membaca, menulis, dan berhitung, serta mulai punya cita-cita.'},
  {t:'SMP',n:'SMPN 2 Bangkinang',l:'Sekolah menengah pertama',d:'Mengenal banyak mata pelajaran baru dan mulai tertarik dengan teknologi.'},
  {t:'SMK',n:'SMKN 1 Bangkinang',l:'Kelas 10 PPLG',d:'Pengembangan Perangkat Lunak dan Gim: belajar membuat website, aplikasi, dan gim.'}
];
const stage=document.getElementById('stage'),sts=[...document.querySelectorAll('.st')];
const $=id=>document.getElementById(id);
let cur=3,first=true;
function show(i,dir){
  cur=Math.max(0,Math.min(data.length-1,i));
  const d=data[cur];
  $('sBig').textContent=d.t;
  $('sBadge').textContent=cur===data.length-1?'Sekarang':'Jenjang '+(cur+1);
  $('sName').textContent=d.n;$('sLvl').textContent=d.l;$('sDesc').textContent=d.d;
  $('sCount').textContent=(cur+1)+' dari '+data.length;
  $('trackFill').style.width=(cur/(data.length-1)*100)+'%';
  sts.forEach((s,k)=>{s.classList.toggle('now',k===cur);s.classList.toggle('done',k<cur);s.setAttribute('aria-selected',k===cur)});
  $('prev').disabled=cur===0;$('next').disabled=cur===data.length-1;
  stage.querySelectorAll('h3,.lvl,.desc,.badge').forEach(e=>e.classList.add('in'));
  stage.classList.remove('go-next','go-prev');void stage.offsetWidth;
  if(dir)stage.classList.add(dir>0?'go-next':'go-prev');
}
sts.forEach((s,k)=>s.addEventListener('click',()=>show(k,k-cur)));
$('prev').addEventListener('click',()=>show(cur-1,-1));
$('next').addEventListener('click',()=>show(cur+1,1));
// geser di layar sentuh
let x0=null;
stage.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});
stage.addEventListener('touchend',e=>{
  if(x0===null)return;
  const dx=e.changedTouches[0].clientX-x0;x0=null;
  if(Math.abs(dx)>50)show(cur+(dx<0?1:-1),dx<0?1:-1);
});
document.getElementById('journey').addEventListener('keydown',e=>{
  if(e.key==='ArrowRight')show(cur+1,1);
  if(e.key==='ArrowLeft')show(cur-1,-1);
});
show(0,0);

// Kartu belajar
const learn=document.getElementById('learn');
learn.addEventListener('click',()=>{
  const o=learn.classList.toggle('open');
  learn.setAttribute('aria-expanded',o);
});
document.getElementById('yr').textContent=new Date().getFullYear();

// Pindah halaman (single page): tiap tombol menu membuka halaman sendiri
const pages=[...document.querySelectorAll('.page')];
const links=[...document.querySelectorAll('nav a')];
function route(){
  const id=location.hash.slice(1);
  const target=pages.find(p=>p.id===id)||pages[0];
  pages.forEach(p=>p.classList.toggle('on',p===target));
  links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+target.id));
  window.scrollTo(0,0);
}
addEventListener('hashchange',route);
route();
