---
"@primer/css": minor
---

Improve the font stack on Windows

- `Segoe UI Variable` -> `Segoe UI Variable Text`.
    - "Segoe UI Variable Text" seems to be the better option for a lot of text (markdown). In the future we might can consider having a UI and a "text" font stack.
- Add `Meiryo` before `system-ui`.
    - This should have the effect that the browser will use `Meiryo` instead of `Yu Gothic UI` and should improve font rendering, especially for Japanese.
    - Note: In an earlier version, `Yu Gothic` was used. But with great [feedback](https://twitter.com/448jp/status/1435087523185758212) from @448jp and @hiloki https://github.com/primer/css/pull/1573#issuecomment-913973890 it seems `Meiryo` is the better default.
