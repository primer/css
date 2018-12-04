---
title: Status key
doc_type: css
category: whats_new
---

<p class="f3-light">Primer is constantly evolving and we have many styles to refactor and bring up to standard. The status of each package is shown with it's corresponding documentation so you can be confident which styles are safe to use.</p>

<span id="stable" class="state bg-green f5 mt-4">Stable</span>

These styles are safe to use in production and there are currently no planned updates. If you find a problem with these styles please [open and issue](https://github.com/github/design-systems/issues).

<span id="new-release" class="State bg-green f5 mt-4">New release</span>

These are newly shipped styles that are safe to use in production. While these styles will have been thoroughly tested before being shipped you may find room for improvements in the documentation, and it's possible you may find the occasional bug. Like all the code we ship, the best test is when lots of people start using it. We'll link to a corresponding feedback issue for new releases so you can comment if you find any problems or have questions.

<span id="experimental" class="State bg-yellow text-gray-dark f5 mt-4">Experimental</span>

These are WIP styles that are safe to use but haven't been battle tested yet. That means they may go through more significant changes in the near future. You can use these styles and help us test out these styles while we're working on, them as long as you are prepared for changes (though we'll handle updates as much as possible for you). We will have a corresponding issue for experimental styles where you can let us know you're using them, and can leave feedback or ask questions.

<span id="in-review" class="state bg-yellow text-gray-dark f5 mt-4">In review</span>

This means we are actively reviewing these styles with a view to refactor or deprecate them. They are still safe to use in production but if you are considering using them on a new feature it would be good to talk to us so we can make sure that our review doesn't disrupt your work. All styles in review will have a corresponding issue explaining why they are in review and will link to any relevant pull requests.


<span id="deprecated" class="State bg-red f5 mt-4">Deprecated</span>

These styles are in the process of being removed and should no longer be used in production. The design systems team are responsible for updating existing views that currently use these styles, however you can help us by replacing deprecated classes from views that you are working on (if you have the time). You will get a lint error telling you to replace these styles if you attempt to add new instances. Please contact us if this causes you a problem.
