fetch('data/team.json')
.then(r=>r.json())
.then(d=>{
const g=document.getElementById('teamGrid');
const modal=document.getElementById('profileModal');
const modalContent=document.getElementById('modalContent');

d.forEach(m=>{
const card=document.createElement('div');
card.className='member-card';
card.innerHTML=`<img src="${m.image}">
<h2>${m.nickname}</h2>
<p class="role">${m.role}</p>`;

card.onclick=()=>{
modalContent.innerHTML=`
<img src="${m.image}">
<h2>${m.nickname}</h2>
<p class="role">${m.role}</p>
<p>${m.description}</p>
<a href="https://discord.gg/WCD9NFRvMc" target="_blank">Discord</a>
<a href="https://www.facebook.com/share/17D86kMYNY/?mibextid=wwXIfr" target="_blank">Fanpage</a>
<span class="close-btn">Đóng</span>`;
modal.style.display='flex';
modalContent.querySelector('.close-btn').onclick=()=>modal.style.display='none';
};
g.appendChild(card);
});
});
function openOrder(name, price){
  document.getElementById("productName").value = name;
  document.getElementById("productPrice").innerText = price;
  document.getElementById("orderModal").style.display = "flex";
}

function closeOrder(){
  document.getElementById("orderModal").style.display = "none";
}
