/* eslint-disable */
import "./style.css";
import "./index.html";

window.onload = function() {
  let domainGenerator = [];
  let pronoun = ["El", "Su"];
  let adj = ["espacio", "sitio"];
  let noun = ["magico", "seguro"];
  let domain = [".com", ".cl"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < domain.length; d++) {
          domainGenerator.push(" " + pronoun[p] + adj[a] + noun[n] + domain[d]);
        }
      }
    }
  }
  console.log(domainGenerator);
  document.getElementById("domainName").innerHTML = domainGenerator.map(domain => `<li>${domain}</li>`).join('');
};
