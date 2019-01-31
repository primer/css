workflow "Lint and test" {
  on = "push"
  resolves = [
    "npm lint",
    "npm test",
    "deploy",
  ]
}

action "lerna bootstrap" {
  uses = "actions/npm@94e6933"
  needs = ["npm install"]
  args = "run bootstrap"
}

action "npm install" {
  uses = "actions/npm@94e6933"
  args = "install"
}

action "npm lint" {
  uses = "actions/npm@94e6933"
  needs = ["lerna bootstrap"]
  args = "run lint"
}

action "npm test" {
  uses = "actions/npm@94e6933"
  needs = ["lerna bootstrap"]
  args = "test"
}

action "deploy" {
  uses = "primer/deploy@master"
  needs = "lerna bootstrap"
  args = "docs"
  secrets = ["GITHUB_TOKEN", "NOW_TOKEN"]
}
