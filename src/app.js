//write your code here

/* si pulsas Ctrl+Alt+n deberia de escribir en consola en OUTPUT los diferentes Email
 que se pueden conseguir con estas variables....*/
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const generatorEmail = document.getElementById("generatorEmail");
  const pronouns = ["the", "your", "every", "one", "such"];
  const adjs = [
    "great",
    "adventurous",
    "arrogant",
    "charming",
    "creepy",
    "grotesque",
    "hungry"
  ];
  const nouns = ["sitcom", "lotus", "cubes", "planet"];
  const domains = [".com", ".us", ".es", ".net", ".shop"];

  function domainGenerator(remplaceNoun) {
    const noumRemplace = document.createElement("div");
    noumRemplace.textContent = remplaceNoun;
    generatorEmail.appendChild(noumRemplace);
  }

  pronouns.forEach(pronoun =>
    adjs.forEach(adj =>
      nouns.forEach(noun =>
        domains.forEach(function(domain) {
          const domainLength = domain.length - 1;
          if (
            noun.substring(noun.length - domainLength) == domain.substring(1)
          ) {
            const nounDomainsReplace = noun.replace(
              noun.substring(noun.length - domainLength),
              domain
            );
            const remplaceNoun = pronoun + adj + nounDomainsReplace;
            domainGenerator(remplaceNoun);
          } else {
            const domainComplit = pronoun + adj + noun + domain;
            domainGenerator(domainComplit);
          }
        })
      )
    )
  );
};
