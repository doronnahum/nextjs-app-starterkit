---
to: '<% if(scss) { %>src/screens/<%= h.changeCase.lower(name) %>/<%= h.changeCase.lower(name) %>.scss%><% } %>'
---
.<%= h.changeCase.lower(name) %>_screen {
  padding: 15px;
  border: 1px solid red;
}