let url = "https://kontests.net/api/v1/all";
let response = fetch(url);

response
  .then((v) => {
    return v.json();
  })
  .then((contests) => {
    console.log(contests);
    st = "";
    for (item in contests) {
      console.log(contests[item]);
      st += `
  <div class="card mx-2 my-2" style="width:22rem;">
    <img class="card-img-top" src="https://imgeng.jagran.com/images/2023/mar/best%20laptops1679305053832.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${contests[item].name}</h5>
      <p class="card-text">Status is ${contests[item].status}</p>
      <p class="card-text">In 24 hours ? ${contests[item].status}</p>
      <p class="card-text">${contests[item].start_time}</p>
      <p class="card-text"><small class="text-muted">${contests[item].end_time}</small></p>
      <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
    </div>
  </div>
      `;
    }
    cardContainer.innerHTML = st
  });

// 2 3 4 Questions solutions.
let a = prompt("Enter Which Laptop You want? ")
if(a)
{
    localStorage.setItem("Note",a)
}
let yourNote = localStorage.getItem("Note")
alert("Your Note IS : "+yourNote)

let c = confirm("Do you want to delete your Note? ")
if(c)
{
    localStorage.removeItem("Note")
    alert("Note Successfully Deleted.")
}

