document.querySelectorAll("#option a").forEach((a) => {
    //jika di klik akan menjalankan sebuah fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    //pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap element hasil komputer dengan queryselector
    let pilihanKomputer = document.querySelector("#result")

    //mengisi pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    //pilihan kompter secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*choices.length)]; 
    pilihanKomputer = pilihanKomputer.innerHTML;

    //jika pilihan user == pilihan komputer (Seri)
    if(pilihanUser == pilihanKomputer){
        //alert("Seri Cok");
        setTimeout(() => alert("Seri Cok", 300));
    }

    //jika pilihan user menang
    if(pilihanUser == "Rock" &&  pilihanKomputer == "Scissors"){
        alert("Menang Dong");
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("Menang Dong");
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("Menang Dong");
    }

    //jika pilihan komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Yah Kalah");
    } else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Yah Kalah");
    } else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Yah Kalah")
    }
}