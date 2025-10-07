//Javascript-kod tillhörande HTML och CSS, laboration 4, Elin Ronda 2025

//Vänta tills hela DOM laddats klart
//Document innebär hela html-dokumentet
//addEventListener lyssnar på en händelse, i detta fall att DOM-innehållet är färdigladdat
//När DOM är färdigladdat, kan vi köra funktionen
document.addEventListener("DOMContentLoaded"), function () {

    //Här ska jag hämta alla inputs
    //I HTML-dokumentet finns ett inputfält med id="fullname" → därför anger jag det här
    //Med const låser jag variabeln så att den alltid pekar på samma element
    //fullName (översta exemplet) är variabelnamnet som jag använder längre ner i koden
    //document.getElementById letar upp elementet i HTML som har id="fullname". Resultatet lagras i variabeln fullName
    const fullName = document.getElementById("fullname");
    const emailAddress = document.getElementById("email");
    const phoneNumber = document.getElementById("phone");
    const fontSelect = document.getElementById("font");

    //Hämta kortets förhandsvisning, i HTML finns en section id="preview" som hör till nedan.
    //Preview-variablerna här pekar på utskriftsytan på studentkortet man ska generera
    //Med const låser jag variabeln så att den alltid pekar på samma element
    //previewName är variabelnamnet som jag senare kopplar till andra funktioner
    //document.getElementById letar upp elementet i HTML som har id="previewfullname". Resultatet lagras i variabeln previewName
    const previewName = document.getElementById("previewfullname");
    const previewEmail = document.getElementById("previewemail");
    const previewPhone = document.getElementById("previewphone");

    //Fel-lista
    //errorList är variabelnamnet i min Javascript-kod
    //I HTML-koden är errorlist kopplat till en ul-lista som är tom från början men fylls på med <li> vid eventuella fel
    const errorList = document.getElementById("errorlist");

    //Knappar för att generera studentkortet eller rensa fälten
    const generateBtn = document.getElementById("generate");
    const clearBtn = document.getElementById("clear");
}