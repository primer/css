workflow "lint, test, publish" {
  on = "push"
  resolves = [
    "lint",
    "test",
    "publish",
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
