
const BookArray = [
    {
        id: 1,
        title: "Everything You Ever Wanted to Know",
        author: "Upton",
        isbn: "082305649x"
    },
    {
        id: 2,
        title: "Photography",
        author: "Vilppu",
        isbn: "205711499"
    },
    {
        id: 3,
        title: "Drawing Manual Vilppu",
        author: "Zelanshi",
        isbn: "1892053039"
    },
    {
        id: 4,
        title: "TBA",
        author: "Zelanshi",
        isbn: "0534613932"
    },
    {
        id: 5,
        title: "Shaping Space",
        author: "Speight",
        isbn: "0534613934"
    },
    {
        id: 6,
        title: "Art Since 1940",
        author: "Speight",
        isbn: "0131839780"
    },
    {
        id: 7,
        title: "Make it in Clay",
        author: "Stokstad",
        isbn: "0076417011"
    },
    {
        id: 8,
        title: "Art History Vol II & ala carte lab",
        author: "Stokstad",
        isbn: "205795617"
    },
    {
        id: 9,
        title: "Accounting Concepts",
        author: "Albrecht",
        isbn: "1111287856"
    },
    {
        id: 10,
        title: "Intermediate Accounting",
        author: "Stice",
        isbn: "0538479736"
    },
    {
        id: 11,
        title: "Management Info Systems",
        author: "Marakas",
        isbn: "9780073376813"
    },
    {
        id: 12,
        title: "Management",
        author: "Williams",
        isbn: "9780757524028"
    },
    {
        id: 13,
        title: "Leadership Wisdom of Jesus",
        author: "Manz",
        isbn: "9781609940041"
    },
    {
        id: 14,
        title: "Business Law Today",
        author: "Miller",
        isbn: "9780324786156"
    },
    {
        id: 15,
        title: "Management Info Systems",
        author: "Marakas",
        isbn: "9780073376813"
    }
];
//console.log(typeof(BookArray)); //Minkä tyyppinen tieto taulukossa on
//console.log(BookArray); //Tulostaa koko taulukon
//console.log(BookArray[0]); //Tulostaa ensimmäisen taulukon alkion
//console.log(BookArray[0].title); //Tulostaa ensimmäisen taulukon kirjan nimen
//console.log(BookArray.length); //Tulostaa taulukossa olevien kirjojen määrän
BookArray.forEach(book => console.log(book.title)); // Tulostaa kaikkien kirjojen nimet

