workflow "lint, test, deploy, publish" {
  on = "push"
  resolves = [
    "lint",
    "test",
    "deploy",
    "publish",
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
    "NOW_TOKEN",
    "GITHUB_TOKEN",
  ]
}

action "publish" {
  needs = ["lint", "test"]
  uses = "primer/publish@8435e6f"
}
