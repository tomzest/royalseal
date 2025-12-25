fetch('data/news.json')
.then(r=>r.json())
.then(d=>{
const list=document.getElementById('newsList');
d.forEach(n=>{
list.innerHTML+=`
<div class="news-item">
<h3>${n.title}</h3>
<div class="date">${n.date}</div>
<p>${n.content}</p>
</div>`;
});
});