---
title: Testing resources
path: tools/testing
---

At GitHub we use a staging environment called review-lab for testing with production data. Deploying a branch to [review-lab](https://github.com/github/github/blob/master/docs/deployment.md#test-in-lab-environments) for testing is one of the best ways to test your work with real production data prior to an actual production deployment.

To make testing on review-lab for extended periods of time easier, you can use the [Redirector](https://chrome.google.com/webstore/detail/redirector/pajiegeliagebegjdhebejdlknciafen) extension for Chrome to redirect all GitHub.com traffic to your review-lab deploy URL.

## How to use it

1. Install the [extension](https://chrome.google.com/webstore/detail/redirector/pajiegeliagebegjdhebejdlknciafen)
2. Open the extension options panel from the icon in Chrome
3. In the "From" field, enter: `https:\/\/github\.com\/?(.+)?`
4. In the "To" field, enter: `https://branchname.review-lab.github.com/$1` where `branchname` is the name of your branch.

## Tips

- You'll need to remove your rule or simply disable the extension when you want to stop redirecting to your branch.
- If you're trying to reach GitHub.com or your review-lab URL but are getting a "This page isn't working" message in your browser, that means your review-lab deploy has gone stale and needs to be redeployed.
