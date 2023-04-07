const mainP = document.querySelector("#mainP");
const managerInput = document.querySelector("#managerInput");
const companyName = document.querySelector("#companyName");
const btn = document.querySelector("#btn");
const date = new Date();
const render = (Manager, companyName) => {
  mainP.innerHTML = `<span>Kjære ${Manager},</span><br><br>

  Jeg skriver for å søke på stillingen som omsorgsarbeider ved ${companyName}. <br>
  Selv om jeg ikke har direkte erfaring som omsorgsarbeider,
   har jeg tidligere jobbet som aktivitør ved et sykehjem.<br>
    Gjennom denne erfaringen har jeg fått en dypere forståelse og 
   respekt for eldre mennesker og deres behov for omsorg.<br><br>
  
  Som aktivitør, var jeg ansvarlig for å planlegge og gjennomføre aktiviteter for pasientene,
   inkludert kreativ kunst, musikk og bevegelsesøvelser. <br>
   Jeg har lært å jobbe med eldre pasienter og har utviklet 
   ferdigheter i å lytte og forstå deres behov og ønsker. 
  Jeg har også lært å jobbe i et tverrfaglig team for å gi best mulig omsorg og støtte til pasientene.  <br><br>

  Jeg er veldig motivert for å begynne å jobbe som omsorgsarbeider ved ${companyName}.
   Jeg har en naturlig empatisk natur og ønsker å gi omsorg og støtte til pasientene. Jeg er villig til å lære og utvikle meg for å bli en dyktig omsorgsarbeider.
   Jeg tror mine erfaringer som aktivitør og min personlige holdning vil være til nytte i denne stillingen. <br><br>
 
  




  Jeg vil gjerne informere om at mitt morsmål ikke er norsk, og at jeg derfor ikke snakker språket helt flytende,
   men Jeg er trygg på at norsken min er tilstrekkelig for å utføre jobben på en god måte. <br> <br>

  Jeg ser frem til å høre fra deg og diskutere min søknad og mine kvalifikasjoner videre. Takk for din tid og vurdering. <br><br>


  Med vennlig hilsen,<br>
Lena Cohen
<br>
${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
`;
};

btn.addEventListener("click", () => {
  if (managerInput.value > "" && companyName.value > "") {
    render(managerInput.value, companyName.value);
  } else return;
});
