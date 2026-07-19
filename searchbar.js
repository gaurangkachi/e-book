// Book database
const books = [
{
    title: "A Match Made in Hell",
    author: "Traci Lovelot",
    page: "description of A Match Made in Hell.html"
},
{
    title: "Disclosure",
    author: "CK Quarterman",
    page: "description-disclosure.html"
},
{
    title: "Gone Rogue",
    author: "James Leonard",
    page: "gone-rogue.html"
},
{
    title: "Measure of a Man",
    author: "Jesse Storm",
    page: "measure.html"
},
{
    title: "Black Velvet",
    author: "Sal Casamassima",
    page: "black-velvet.html"
},
{
    title: "The Lost",
    author: "S.K. Apollo",
    page: "lost.html"
}
];

function searchBook() {

    let input = document.getElementById("searchInput").value
        .toLowerCase()
        .trim();

    let cards = document.querySelectorAll(".book");
    let result = document.getElementById("searchResult");

    // Empty search
    if(input === ""){

        cards.forEach(card=>{
            card.style.display="flex";
        });

        result.innerHTML="";
        return;
    }

    let found=false;
    let firstCard=null;

    cards.forEach(card=>{

        let title=card.querySelector("h3").innerText.toLowerCase();
        let author=card.querySelector("p").innerText.toLowerCase();

        if(title.includes(input) || author.includes(input)){

            card.style.display="flex";

            if(firstCard===null){
                firstCard=card;
            }

            found=true;

        }else{

            card.style.display="none";

        }

    });

    if(found){

        result.innerHTML="<span style='color:green'></span>";

        firstCard.scrollIntoView({
            behavior:"smooth",
            block:"center"
        });

    }else{

        result.innerHTML="<span style='color:red'></span>";

    }

    // Exact title match → Open page
    let exactBook = books.find(book =>
        book.title.toLowerCase() === input
    );

    if(exactBook){
        window.location.href = exactBook.page;
    }
}

// Search while typing
document.getElementById("searchInput").addEventListener("keyup", searchBook);

// Open page on Enter if full title matches
document.getElementById("searchInput").addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        let input = this.value.toLowerCase().trim();

        let exactBook = books.find(book =>
            book.title.toLowerCase() === input
        );

        if(exactBook){
            window.location.href = exactBook.page;
        }
    }

});