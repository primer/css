workflow "lint, test, deploy" {
  on = "push"
  resolves = [
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
  uses = "primer/deploy@5ea00ad"
  needs = ["lerna bootstrap"]
  runs = ["node", "/entrypoint.js", "--", "docs"]
  secrets = ["GITHUB_TOKEN", "NOW_TOKEN"]
}
