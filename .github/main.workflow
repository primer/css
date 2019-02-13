workflow "lint, test, deploy, publish" {
  on = "push"
  resolves = [
    "lint",
    "test",
    "publish",
    "deploy",
  ]
}

action "install" {
  uses = "actions/npm@v2.0.0"
  args = ["install", "--unsafe-perm"]
}

action "lint" {
  needs = "install"
  uses = "actions/npm@v2.0.0"
  args = ["--unsafe-perm", "run", "lint"]
}

action "test" {
  needs = "install"
  uses = "actions/npm@v2.0.0"
  args = ["--unsafe-perm", "test"]
}

action "publish" {
  needs = ["lint", "test"]
  uses = "primer/publish@v1.0.0"
  args = ["--", "--unsafe-perm"]
  secrets = ["GITHUB_TOKEN", "NPM_AUTH_TOKEN"]
}

action "deploy" {
  needs = "install"
  uses = "primer/deploy@v2.2.0"
  secrets = [
    "GITHUB_TOKEN",
    "NOW_TOKEN",
  ]
}
