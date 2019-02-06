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
  uses = "actions/npm@master"
  args = "ci"
}

action "lint" {
  needs = "install"
  uses = "actions/npm@master"
  args = "run lint"
}

action "test" {
  needs = "install"
  uses = "actions/npm@master"
  args = "test"
}

action "deploy" {
  needs = "install"
  uses = "primer/deploy@status-config-redux"
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
