workflow "lint, test, deploy" {
  on = "push"
  resolves = [
    "lint",
    "test",
    "deploy",
  ]
}

action "bootstrap" {
  uses = "actions/npm@94e6933"
  runs = "script/bootstrap"
}

action "lint" {
  uses = "actions/npm@94e6933"
  needs = ["bootstrap"]
  args = "run lint"
}

action "test" {
  uses = "actions/npm@94e6933"
  needs = ["bootstrap"]
  args = "test"
}

action "deploy" {
  uses = "primer/deploy@master"
  needs = ["bootstrap"]
  args = "-- docs"
  secrets = ["GITHUB_TOKEN", "NOW_TOKEN"]
}
