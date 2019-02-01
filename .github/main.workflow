workflow "lint, test, deploy" {
  on = "push"
  resolves = [
    "deploy",
  ]
}

action "deploy" {
  uses = "primer/deploy@a66f053"
  args = "docs"
  secrets = ["GITHUB_TOKEN", "NOW_TOKEN"]
}
