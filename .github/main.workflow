workflow "lint, test, deploy" {
  on = "push"
  resolves = [
    "npm lint",
    "npm test",
    "deploy",
    "build docs",
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

action "build docs" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "run build docs"
}


action "deploy" {
  uses = "primer/deploy@6e9ebc1"
  args = "docs"
  needs = "build docs"
  secrets = ["GITHUB_TOKEN", "NOW_TOKEN"]
}
