---
'@primer/css': patch
---

Count `.markdown-body` list nesting from the markdown root, so markdown rendered inside a list item keeps decimal and disc markers on its top-level lists. Nested `<ol type>` lists now keep the marker their `type` attribute sets instead of becoming lower-roman, and `<ul type>` markers are preserved.
