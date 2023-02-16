//write your code here
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

pronouns.forEach(pronoun =>
  adjs.forEach(adj =>
    nouns.forEach(noun =>
      domains.forEach(function(domain) {
        const domainLength = domain.length - 1;

        if (noun.substring(noun.length - domainLength) == domain.substring(1)) {
          const nounDomainsReplace = noun.replace(
            noun.substring(noun.length - domainLength),
            domain
          );
          const remplaceNoun = pronoun + adj + nounDomainsReplace;
          console.log(remplaceNoun);
        } else {
          const domainComplit = pronoun + adj + noun + domain;
          console.log(domainComplit);
        }
      })
    )
  )
);
