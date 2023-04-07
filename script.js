const mainP = document.querySelector("#mainP");
const managerInput = document.querySelector("#managerInput");
const companyName = document.querySelector("#companyName");
const btn = document.querySelector("#btn");
const date = new Date();
const render = (Manager, companyName) => {
  mainP.innerHTML = `<span>Kjære ${Manager},</span><br><br>
    <span>

    Jeg skriver for å uttrykke min interesse for stillingen som produksjonsmedarbeider hos ${companyName}. 
    Med min erfaring innen produksjon og min styrke til å jobbe i et team, tror jeg ville være en verdifull tillegg til teamet deres. <br><br></span>

    Jeg er en norsk statsborger som for tiden bor i Israel, men jeg ønsker nå å flytte
     tilbake til Norge og bosette meg på lang sikt. Jeg er veldig interessert i å utforske mulighetene som finnes hos dere.
 <br> <br>


 Jeg har erfaring fra ulike produksjonsarbeid, inkludert arbeid med små komponenter og kvalitetskontroll.
  Jeg er opptatt av å levere arbeid av høy kvalitet og å jobbe
  effektivt for å oppnå best mulig resultater. Jeg har også erfaring fra å arbeide i team og har utviklet gode kommunikasjons- 
  og samarbeidsevner.<br> <br>
  Jeg vil gjerne informere om at mitt morsmål ikke er norsk, og at jeg derfor ikke snakker språket helt flytende,
   men Jeg er trygg på at norsken min er tilstrekkelig for å utføre jobben på en god måte. <br> <br>

  Jeg ser på muligheten til å flytte tilbake til Norge som en spennende mulighet for både personlig og faglig utvikling, 
  og jeg er overbevist om at jeg kan bidra positivt til deres team. Jeg ser frem til å høre fra dere og diskutere mulighetene videre. <br> <br>



  Med vennlig hilsen, <br>

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
