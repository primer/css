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

action "docs" {
  needs = "install"
  uses = "primer/deploy@b539208"
  secrets = [
    "NOW_TOKEN",
    "GITHUB_TOKEN",
  ]
}

action "publish" {
  needs = ["lint", "test"]
  uses = "primer/publish@make-it-work"
  args = "--dry-run"
}
