// Declare your genre arrays here
let horror= ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JKe9qLfY3H_G6wuWksPyBb1FYJw3nxtAQ7VlyDW5bpPw3Tco","https://heute-at-prod-images.imgix.net/2024/10/04/9c822ba1-7aba-4a4a-be43-84b090867f4c.jpeg?rect=45%2C0%2C2910%2C1637&amp;auto=format","https://m.media-amazon.com/images/M/MV5BMTA3NjA0ODgtNmYyMi00NGJmLWE1NDYtYTliNmYwMDY3NjYzXkEyXkFqcGc@._V1_.jpg"
  
]
let action= ["https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBnfgdj6S32yB-VjpwLVnIE4-CHop12_I0ZqWJOEDnMMfhCMPhuQqyMZKwwvP2-wgOhV0bRA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9ME83du7rJkpwszQYv6swKV2PNlWxde9X6ogkCfNO9oWZsPyEPDcY3HSPdeRdcnLgZ5Sbpg", "https://resizing.flixster.com/SqwDnXVwt5G7ymhK9NMdKaX3gTk=/375x210/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8609562_i_h8_aa.jpg"
  
]
let Thriller= [
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLHJtttsMaMVNcKNYXOD8H74RdJ8UWe019PxJnCP5qoXN7OZe84aw3BvCk6I4wmH3e-4y1", "https://m.media-amazon.com/images/M/MV5BMTUxMjc2MTcxNV5BMl5BanBnXkFtZTcwMzgzOTY0MQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="28 Weeks Later (2007) - IMDb","https://www.hollywoodreporter.com/wp-content/uploads/2013/03/screen_shot_2013-03-26_at_1.01.12_pm.png?w=1440&amp;h=810&amp;crop=1" alt="World War Z: Film Review"
]




// Make sure to declare your HTML elements as variables! 
let suggestBtn=document.querySelector(".suggest");
let shows=document.querySelector(".shows");
// Submit Button 
let submitButton = document.querySelector(".submit");
submitButton.onclick = function() {
  let genreInput=document.querySelector(".genre").value;
  if(genreInput==="Horror" || genreInput==="horror"){
    for(let Hor of Horror){
      shows.insertAdjacentHTML("afterBegin", "<img scr=" + app + ">")
    }}
  else if(genreInput==="Action")
    {
      for(let Act of Action){
        shows.insertAdjacentHTML("afterBegin", "<img scr=" + Action + ">")
      }
    }
 };


 