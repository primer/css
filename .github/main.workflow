workflow "Lint and test" {
  on = "push"
  resolves = [
    "npm lint",
    "npm test",
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

action "deploy docs" {
  uses = "primer/deploy@f7affe4"
  needs = "lerna bootstrap"
  args = "docs"
}
