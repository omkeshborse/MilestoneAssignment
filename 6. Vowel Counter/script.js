function count() {
    let text = document.getElementById('vowels').value;
    let numberVowel = document.getElementById('count');
    let count = 0;
    for (let index = 0; index < text.length; index++) {
        if(text[index]=='a' || text[index]=='e' ||text[index]=='i'|| text[index]=='o' ||text[index]=='u' ||text[index]=='A' || text[index]=='E' ||text[index]=='I'|| text[index]=='O' ||text[index]=='U'  )
        {
            count++;
        }


    }
    numberVowel.innerText = count;
}