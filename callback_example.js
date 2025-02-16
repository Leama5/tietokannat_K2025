setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");
//tehtävä 1

function authors(){
    BookData.forEach(book=>{
        console.log(book.author);
    });
}
// tehtävä 3, nuolifunktio

const BookData= [
    {'name': "C++", 'author': "Jim Smith"},
    {'name': "JavaScript", 'author': "John Doe"},
    {'name': "Python", 'author': "Jane Doe"},
    {'name': "Java", 'author': "James Brown"},
    {'name': "Ruby", 'author': "Emily White"},
    {'name': "Go", 'author': "Michael Green"},
    {'name': "Swift", 'author': "Sarah Black"},
    {'name': "Kotlin", 'author': "Chris Blue"},
    {'name': "PHP", 'author': "Anna Yellow"},
    {'name': "Rust", 'author': "David Red"},
    {'name': "TypeScript", 'author': "Laura Purple"}
]


authors();

(function() {
     console.log("The end of authors");
})();
//tehtävä 2, anonyymi funktio
