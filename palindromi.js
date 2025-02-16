function vertaa(x) {
    x[i]=x.split('');
    for (var i = 0; i < x.length; i++) {
        if (x[i] != x[x.length - 1 - i]) {
            console.log("Sana ei ole palindromi.");
            return;
        }
        else {
            console.log("Sana on palindromi.");
            return;
        }   
    }
    
}

var x=prompt("Anna sana, niin tarkistan onko se palindromi:");
vertaa(x);