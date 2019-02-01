workflow "lint, test, deploy" {
  on = "push"
  resolves = [
    "deploy",
  ]
}

action "deploy" {
  uses = "primer/deploy@e4407a2"
  runs = ["node", "/entrypoint.js", "--", "docs"]
  secrets = ["GITHUB_TOKEN", "NOW_TOKEN"]
}
