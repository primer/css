workflow "lint, test, deploy" {
  on = "push"
  resolves = [
    "lint",
    "test",
    "deploy",
  ]
}

action "install" {
  uses = "actions/npm@master"
  args = "install"
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
  uses = "primer/deploy@master"
  args = "test"
}
