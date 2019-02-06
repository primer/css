workflow "lint, test, deploy, publish" {
  on = "push"
  resolves = [
    "lint",
    "test",
    "deploy",
    "npm publish primer",
  ]
}

action "install" {
  uses = "actions/npm@v2.0.0"
  args = "ci"
}

action "lint" {
  needs = "install"
  uses = "actions/npm@v2.0.0"
  args = "run lint"
}

action "test" {
  needs = "install"
  uses = "actions/npm@v2.0.0"
  args = "test"
}

action "deploy" {
  needs = "install"
  uses = "primer/deploy@v2.2.0"
  secrets = [
    "GITHUB_TOKEN",
    "NOW_TOKEN",
  ]
}

action "npm publish primer" {
  needs = ["lint", "test"]
  uses = "primer/publish@8435e6f"
  secrets = ["GITHUB_TOKEN", "NPM_AUTH_TOKEN"]
}
