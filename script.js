const list = [["Venusaur","Venusuar is a grass type pokemon from the Kanto region from the video game franchise Pokemon."], ["Charizard","Perhaps Everyone Now Is Suspect about picking Charizard as the main Pokemon due to his popularity"], ["Blastoise","Blastoise in my opinion has a smiple yet effective design compared to the other Pokemon"], ["Luffy","Luffy is a man who dreams to become the most free man in the world from the from the popular show one piece"], ["Zoro","Zoro is Luffys righthand man in the show one piece. zoros dream is become the greatest swordsman"], ["Sanji","Sanji is also from the show one piece, he is my presonal favortie charecter in the show due to his kicking fight styles, being the chef and, being one the strongest members on the crew."], ["Goku","Goku in the main character from the dragon ball franchinse. a goal of his is to become the strongest mortal, he fights everyday to get stronger"], ["Vegeta","Vegeta is gokus rival, and best fusion partner. Vegeta is always being one-uped by goku, so his goal is to defeat kakorot. (Kakorot is Gokus birthname Goku is his earth name.)"], ["Broly","There are 2 versions of Borly. This version of Broly hates Vegeta becuase Vegetas father king Vegeta becuase king Vegeta banned Broly and his father from planrt Vegeta.(THe Father,Son and Planet are named Vegeta)"], ["Josuke","Josuke is the love child of Joseph Jostar and Tomoko Higashikata. Josuke took his moms last name becuase he hates his father for leaving them (he comes back). One day Josuke Run into a man name Jotaro Joestar (That also Josephs Grandson). Josuke, Jotaro and friends learn a sireal killer is living in the town of morioh. The killers name is Kira Yoshikage who has a hand fetish ever since he saw the mona lisa painting.(I'm not naking this up). He kills women and takes thier hands on dates."], ["Okuyasu","Okuyasu is one of Josukes best friends. They used to be enemies becuase Okoyasu and his older brother are looking for a certin person who can heal thier dad, but their methods hurting people so Josuke had to stop them."], ["Koichi","Koichi was Josukes first friends and is the most based MF you will ever meet. Koichi has this power he can change the gravity of any object."]]
const gallery = document.getElementById('g')
let listArray = []
for(const lists of list){
    listArray.push(`<div> <img class="gallery" src="/img/${lists[0]}.jpg" alt="${lists[0]}"></img> <p style="display:none; font-size:100px">${lists [1]}</p> </div>`)
}

gallery.insertAdjacentHTML("beforeend",listArray.join(' '))

gallery.addEventListener('click', function (i) {
if (i.target.classList.contains("big")){
    i.target.className = "gallery"
    i.target.parentElement.children[1].style ="display:none; font-size:100px"
} else {
    i.target.className += " big" 
    i.target.parentElement.children[1].style ="display:block; font-size:100px"
}
});




























