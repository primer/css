---
title: Archived changelog
searchable: false
---

Changes are listed by most recent.

## June 2017
- Update fade variables to use rgba instead of transparentize color function for better readability [#74179](https://github.com/github/github/pull/74179)
- Revised "gutters" grid object to include properly-named modifiers, including responsive modifiers [#74164](https://github.com/github/github/pull/74164)
- Deprecate `single-column` and `table-column` from layout module [#74095](https://github.com/github/github/pull/74095)
- Fix/revert $box-shadow-extra-large to .07 opacity [#74231](https://github.com/github/github/pull/74231)
- Add `.show-on-focus` utility class for accessibility [#72680](https://github.com/github/github/pull/72680)
- Update b tag font weight in base styles [#73853](https://github.com/github/github/pull/73853)

## May 2017
- Update marketing table colors to use new variables [#73689](https://github.com/github/github/pull/73689)
- Update typography utilities to use new color variables [#73689](https://github.com/github/github/pull/73689)
- Update support variables and mixins to use new color variables [#73689](https://github.com/github/github/pull/73689)
- Add `.p-responsive` class [#72006](https://github.com/github/github/pull/72006)
- Remove `@include clearfix` from responsive container classes [#73631](https://github.com/github/github/pull/73631)

## April 2017
- Add `State--small` to labels module [#71975](https://github.com/github/github/pull/71975)
- Fix responsive border utilities. [#71908](https://github.com/github/github/pull/71908)
- Added and updated typography variables and mixins; updated variables used in typography utilities; updated margin, padding, and typography readmes. [#66821](https://github.com/github/github/pull/66821/)
- Darken `.box-shadow-extra-large` shadow [#71314](https://github.com/github/github/pull/71314)
- Update `.tooltip-multiline` to remove `word-break: break-word` property. [#71381](https://github.com/github/github/pull/71381)
- Add `.border-purple` utility class. [#71658](https://github.com/github/github/pull/71658)
- Add responsive border utilities to primer-marketing. [#71658](https://github.com/github/github/pull/71658)
- Add `ws-normal` utility for `whitespace: normal`. [#71594](https://github.com/github/github/pull/71594)

## March 2017
- Updated syntax and classnames for `Counters` and `Labels`, moved into combined module with states. [#67917](https://github.com/github/github/pull/67917)
- Add negative margin utilities. [#70128](https://github.com/github/github/pull/70128)
- Move `.d-flex` & `.d-flex-inline` to be with other display utility classes in `visibility-display.scss`. [#70079](https://github.com/github/github/pull/70079)
- Delete `.shade-gradient` in favor of `.bg-shade-gradient`. [#70079](https://github.com/github/github/pull/70079)
- Removed alt-body-font variable from primer-marketing. [#69247](https://github.com/github/github/pull/69247)
- Removed un-used `alt` typography styles from primer-marketing. [#69718](https://github.com/github/github/pull/69718)
- Add green border utility. [#68015](https://github.com/github/github/pull/68015)
- Added new border variable and utility, replaced deprecated flash border variables. [#69657](https://github.com/github/github/pull/69657)
- Updated variable name in form validation. [#69634](https://github.com/github/github/pull/69634)
- Updated `.sr-only` to not use negative margin. [#69617](https://github.com/github/github/pull/69617)
- Added and removed border variables and utilities. [#69634](https://github.com/github/github/pull/69634)
- Add filter utility to Primer Marketing [#69497](https://github.com/github/github/pull/69497)
- Removed all custom color variables within Primer-marketing in favor of the new color system. [#69512](https://github.com/github/github/pull/69512)
- Updated style for form group error display so it is positioned properly. [#68267](https://github.com/github/github/pull/68845), [69666](https://github.com/github/github/pull/69666)
- Updated state closed color and text and background pending utilities. [#69551](https://github.com/github/github/pull/69551)
- Removed local font css file from primer-marketing/support. [#69565](https://github.com/github/github/pull/69565)
- Updated all color variables and replaced 579 hex refs across modules with new variables, added additional shades to start introducing a new color system which required updating nearly all primer modules. [#68964](https://github.com/github/github/pull/68964)

## February 2017
- Added layout utility `.sr-only` for creating screen reader only elements. [#68267](https://github.com/github/github/pull/68267)
- Added `.flex{-infix}-item-equal` utilities for creating equal width and equal height flex items.
- Added `.flex{-infix}-row-reverse` utility for reversing rows of content [#68522](https://github.com/github/github/pull/68522)
- Updated `.select-menu-button-large` to use `em` units for sizing of the CSS triangle.
- Added `.box-shadow-extra-large` utility for large, diffused shadow [#68522](https://github.com/github/github/pull/68522)
- Updated: removed background color from markdown body [#68364](https://github.com/github/github/pull/68364)
- Updated: remove background on the only item in an avatar stack. [#68268](https://github.com/github/github/pull/68268)

## January 2017
- Added form utility `.form-checkbox-details` to allow content to be shown/hidden based on a radio button being checked. [#67710](https://github.com/github/github/pull/67710)
- Added form utility to override Webkit's incorrect assumption of where to try to autofill contact information. [#67710](https://github.com/github/github/pull/67710)
- Update primer modules to use bold variable applying `font-weight: 600` [#64694](https://github.com/github/github/pull/64694)
- Added `CircleBadge` component for badge-like displays within product/components/avatars. [#66834](https://github.com/github/github/pull/66834)
- Added Box shadow utilities `box-shadow`, `box-shadow-medium`, `box-shadow-large`, `box-shadow-none`. [#66828](https://github.com/github/github/pull/65145)
- Moved visibility and display utilities to separate partial at the end of the imports list, moved flexbox to it's own partial [#66941](https://github.com/github/github/pull/66941)
- Added `flex-shrink-0` to address Flexbox Safari bug [#66943](https://github.com/github/github/pull/66943)
- Updated: Using spacing variables in the `.flash` component [#65145](https://github.com/github/github/pull/65145)

## December 2016
- Updated Box component styles and documentation [#63877](https://github.com/github/github/pull/63877)
- Added `.wb-break-all` utility [#66246](https://github.com/github/github/pull/66246)

## November 2016
- Added red and blue border color variables and utilities [#64795](https://github.com/github/github/pull/64795)
- Updated: `$spacer-5` has been changed to `32px` from `36px` [#64635](https://github.com/github/github/pull/64635)
- Updated: `$spacer-6` has been changed to `40px` from `48px` [#65069](https://github.com/github/github/pull/65069)
- Deprecated `link-blue`, updated `link-gray` and `link-gray-dark`, added `link-hover-blue` - Updated: blankslate module to use support variables for sizing [#65150](https://github.com/github/github/pull/65150)

## October 2016
- Renamed `.flex-table` to `.TableObject` [#63438](https://github.com/github/github/pull/63438)
- Updated: `$spacer-1` has been changed to `4px` from `3px` [#63040](https://github.com/github/github/pull/63040)
- Updated: `$spacer-2` has been changed to `6px` from `8px` https://github.com/github/github/pull/63428
- Added: `.text-shadow-dark` & `.text-shadow-light` utilities [#63414](https://github.com/github/github/pull/63414)
- Updated: Moved non-framework CSS out of Primer modules. Added `box.scss` to `primer-core`. Added `discussion-timeline.scss` to `primer-product`, and moved `blob-csv.scss` into `/primer-product/markdown` directory. [#62715](https://github.com/github/github/pull/62715)

## September 2016

- Added: Flex utilities [#56820](https://github.com/github/github/pull/56820)
- Refactor: Site typography to use Primer Marketing styles [#62702](https://github.com/github/github/pull/62702)
- Added: `.list-style-none` utility [#62592](https://github.com/github/github/pull/62592)
- Refactor: Button groups into some cleaner CSS [#59986](https://github.com/github/github/pull/59986)
- Updated: Reorganizing how we separate primer-core, primer-product, primer-marketing css [#62514](https://github.com/github/github/pull/62514)

## August 2016

- Added: Responsive styles for margin and padding utilities, display,  float, and new responsive hide utility, and updates to make typography responsive. [#58106](https://github.com/github/github/pull/58106)
- Added: new container styles and grid styles with responsive options. [#58106](https://github.com/github/github/pull/58106)
- Added: updated underline nav styles. [#58583](https://github.com/github/github/pull/58583)
- Deprecate: Deprecating a lot of color and layout utilities [#107](https://github.com/github/design-systems/issues/107)

## July 2016

- Added: More type utilities for different weights and larger sizes. [#58399](https://github.com/github/github/pull/58399)
- Added: Well defined browser support [#58252](https://github.com/github/github/pull/58252)

## June 2016

- Added: Update font stack to system fonts. [#56473](https://github.com/github/github/pull/56473)
- Added: Updated type scale as part of system font update. [#56701](https://github.com/github/github/pull/56701)
- Added: `.Box` component for replacing boxed groups, simple box, and table-list styles. [#56284](https://github.com/github/github/pull/56284)
- Added: New type utilities for headings and line-height [#55614](https://github.com/github/github/pull/55614)
- Deprecated: `vertical-middle` was replaced with `v-align-middle`.
- Added: Layout utilities for vertical alignment, overflow, width and height, visibility, and display table. [#55461](https://github.com/github/github/pull/55461)
- Added: Changing from font icons to SVG [#56408](https://github.com/github/github/pull/56408)

## May 2016

- Added: Bringing primer modules back into the main codebase, and publishing to external repositories [#53976](https://github.com/github/github/pull/53976)
- Removed scss-lint and added stylelint as the CSS linter [#54908](https://github.com/github/github/pull/54908)

## April 2016

- Added: Creating the styleguide [#52515](https://github.com/github/github/pull/52515)

## March 2016

- Added: Animation utilities. [#51894](https://github.com/github/github/pull/51894)

## February 2016

- Added: Whitespace scale, and margin and padding utilities. [#50407](https://github.com/github/github/pull/50407)
- Added: Border utilities [#50751](https://github.com/github/github/pull/50751)
