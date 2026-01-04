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
modalContent.innerHTML = `
  <div class="profile-image">
    <img src="${member.image}" alt="${member.name}">
  </div>

  <h2>${member.name}</h2>
  <p class="role">${member.role}</p>

  <a href="${member.discord}" target="_blank">Discord</a>
  <a href="${member.fanpage}" target="_blank">Fanpage</a>

  <span class="close-btn" onclick="closeProfile()">Đóng</span>
`;
g.appendChild(card);
});
});

function openOrder(name, price){
  const modal = document.getElementById("orderModal");
  if(!modal){
    alert("Không tìm thấy modal");
    return;
  }

  const nameInput = document.getElementById("productName");
  const priceText = document.getElementById("productPrice");

  if(nameInput) nameInput.value = name;
  if(priceText) priceText.innerText = price;

  modal.style.display = "flex";
}

function closeOrder(){
  const modal = document.getElementById("orderModal");
  if(modal) modal.style.display = "none";
}
function openOrder(name, price){
  const modal = document.getElementById("orderModal");
  document.getElementById("productName").value = name;
  document.getElementById("productPrice").innerText = price;
  modal.style.display = "flex";
}

function closeOrder(){
  const modal = document.getElementById("orderModal");
  modal.style.display = "none";
}

/* click ra ngoài để đóng */
window.addEventListener("click", function(e){
  const modal = document.getElementById("orderModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
});

