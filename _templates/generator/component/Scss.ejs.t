---
to: '<% if(scss) { %>src/components/<%= h.changeCase.title(name) %>/<%= h.changeCase.lower(name) %>.scss%><% } %>'
---
.<%= h.changeCase.lower(name) %>_component {
  padding: 15px;
  border: 1px solid green;
}