---
title: AvatarStack
path: components/avatar-stack
status: Stable
source: 'https://github.com/primer/css/tree/main/src/avatars'
rails: 'https://primer.style/view-components/components/beta/avatarstack'
bundle: avatars
---

Stacked avatars can be used to show multiple collaborators or participants when there is limited space available. When you hover over the stack, the avatars will reveal themselves.

```html live
<div class="AvatarStack AvatarStack--three-plus">
  <div
    class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
    aria-label="octocat, octocat, and octocat"
  >
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
  </div>
</div>
```

Based on the number of avatars in the stack, add these modifier classes:

- `AvatarStack--two` for 2 avatars.
- `AvatarStack--three-plus` for 3 or more avatars.

If you have more than three avatars, add a div with the classes `avatar avatar-more` as the third avatar in the stack, as such:

```html live
<div class="AvatarStack AvatarStack--three-plus">
  <div
    class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
    aria-label="octocat, octocat, octocat, octocat, and octocat"
  >
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <div class="avatar avatar-more"></div>
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
  </div>
</div>
```

You can also link individual avatars. To do this shift the `avatar` class over to the anchor:

```html live
<div class="AvatarStack AvatarStack--two">
  <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat and octocat">
    <a href="#" class="avatar">
      <img
        height="20"
        alt="@octocat"
        src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
        width="20"
      />
    </a>
    <a href="#" class="avatar">
      <img
        height="20"
        alt="@octocat"
        src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
        width="20"
      />
    </a>
  </div>
</div>
```

Use `AvatarStack--right` to right-align the avatar stack. Remember to switch the alignment of tooltips when making this change.

```html live
<div class="AvatarStack AvatarStack--three-plus AvatarStack--right">
  <div
    class="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1"
    aria-label="octocat, octocat, and octocat"
  >
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
    <img
      class="avatar"
      height="20"
      alt="@octocat"
      src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
      width="20"
    />
  </div>
</div>
```
