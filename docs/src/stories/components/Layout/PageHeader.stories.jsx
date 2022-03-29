import React from 'react'
import clsx from 'clsx'
import {ArrowLeftIcon, TriangleDownIcon} from '@primer/octicons-react'

export default {
  title: 'Components/Layout/Page Header',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    layout: 'padded'
  },

  excludeStories: ['PageHeaderTemplate'],
  argTypes: {

    // Parent link

    hasParentLink: {
      control: 'boolean',
      description: 'Whether to show a link to the parent page above the title. This is useful for mobile-friendly navigation, and by default it is only shown on narrow viewports.',
      table: {
        category: 'Parent link',
      },
    },
    parentLinkLabel: {
      control: 'text',
      description: 'The text used to reference the parent link. Use a compact label that is descriptive of the parent page.',
      table: {
        category: 'Parent link',
      },
    },
    parentLinkShow: {
      control: 'inline-check',
      description: 'Defines which viewport ranges the parent link is shown on. By default it is only shown on narrow viewports.',
      options: ['narrow', 'regular'],
      table: {
        category: 'Parent link'
      },
    },

    // Context bar

    contextBarShow: {
      control: 'inline-check',
      description: 'Defines which viewport ranges context bar appears. By default it is only shown on narrow viewports.',
      options: ['narrow', 'regular'],
      table: {
        category: 'Context bar'
      },
    },

    // Title

    title: {
      control: 'text',
      description: 'The title contents.',
      table: {
        category: 'Title'
      },
    },
    titleVariant: {
      options: ['title-large', 'title-medium', 'subtitle'],
      description: 'The title style variant. Use `title-large` for user-generated content such as issues, pull requests, or discussions. Use `title-medium` for static references and most other pages. Use `subtitle` when rendering a second PageHeader in a SplitPageLayout.',
      control: 'inline-radio',
      table: {
        category: 'Title'
      },
    },
    titleVariantWhenNarrow: {
      control: 'inline-radio',
      options: ['title-medium', 'subtitle'],
      description: 'The title style variant when the viewport is narrow. `title-medium` is the default.',
      table: {
        category: 'Title'
      },
    },
    titleTag: {
      control: 'inline-radio',
      description: 'The HTML tag to use for the heading. `h1` is the default.',
      options: ['h1', 'h2', 'h3'],
      table: {
        category: 'Title'
      },
    },
    titleLabel: {
      control: 'text',
      description: 'An accessible text-only version of the title. Use it when `title` has interactive elements inside.',
      table: {
        category: 'Title'
      },
    },
    titleIsInteractiveWhenNarrow: {
      control: 'boolean',
      description: 'Whether the title should be interactive when the viewport is narrow. This is useful for linking to a navigation panel in mobile-friendly scenarios.',
      table: {
        category: 'Title'
      },
    },
    titleInteractiveHref: {
      control: 'text',
      description: 'The URL to link to when the title is interactive. Default to `#pane`.',
      table: {
        category: 'Title'
      },
    },
    hasLeadingVisual: {
      control: 'boolean',
      description: 'A leading visual next to the title. Use it for rendering a logo, status, or a representation of an item or object. Don’t use leading visuals to represent page categories.',
      table: {
        category: 'Title'
      },
    },

    // Children

    contextBarChildren: {
      description: 'creates a slot for the context bar',
      table: {
        category: 'Slots'
      },
    },
    contextBarActionsChildren: {
      description: 'creates a slot for actions in the context bar',
      table: {
        category: 'Slots'
      },
    },
    leadingVisualChildren: {
      description: 'creates a slot for custom leading visuals',
      table: {
        category: 'Slots'
      },
    },
    actionsChildren: {
      description: 'creates a slot for action buttons',
      table: {
        category: 'Slots'
      },
    },
    descriptionChildren: {
      description: 'creates a slot for the description region',
      table: {
        category: 'Slots'
      },
    },
    navigationChildren: {
      description: 'creates a slot for the navigation region',
      table: {
        category: 'Slots'
      },
    },
  },
}

export const PageHeaderTemplate = ({
  // Title
  title,
  titleLabel,
  titleVariant,
  titleVariantWhenNarrow,
  titleTag,
  titleIsInteractiveWhenNarrow,
  hasLeadingVisual,

  // Parent link
  hasParentLink,
  parentLinkLabel,
  parentLinkShow,

  // Context bar
  contextBarShow,

  // Children
  contextBarChildren,
  contextBarActionsChildren,
  leadingVisualChildren,
  actionsChildren,
  descriptionChildren,
  navigationChildren,
}) => {

  const pageHeaderClassName = 'PageHeader';
  const showWhenNarrowClassName = 'show-whenNarrow';
  const showWhenRegularClassName = 'show-whenRegular';

  // Parent link

  if (!parentLinkShow || parentLinkShow.length === 0) {
    // default option
    parentLinkShow = ['narrow'];
  }

  // empty class name means that the link is shown regardless of viewport ranges
  let parentLinkShowClassName = '';
  if (parentLinkShow.length === 1) {
    parentLinkShowClassName = parentLinkShow.includes('narrow') 
      ? showWhenNarrowClassName 
      : showWhenRegularClassName;
  }

  // Title
  titleVariant = titleVariant ?? 'title-medium';
  titleVariantWhenNarrow = titleVariantWhenNarrow ?? 'title-medium';
  titleVariantWhenNarrow = titleVariant === titleVariantWhenNarrow ? null : titleVariantWhenNarrow;
  titleLabel = titleLabel ?? title;
  
  const TitleTag = titleTag ?? 'h1';

  const titleVariantClassName =
    (titleVariant && titleVariant.startsWith('title'))
      ? titleVariant.split('-')[1]
      : titleVariant;

  const titleVariantWhenNarrowClassName =
    (titleVariantWhenNarrow && titleVariantWhenNarrow.startsWith('title'))
      ? titleVariantWhenNarrow.split('-')[1]
      : titleVariantWhenNarrow;

  return (
    <>
      <div className={clsx(pageHeaderClassName)}>

        {/* Context bar */}
        {(contextBarChildren || hasParentLink || contextBarActionsChildren) && (
          <div className={clsx(`${pageHeaderClassName}-contextBar`)}>
            {hasParentLink && (
              <>
                <div className={parentLinkShowClassName}>
                  <div className={clsx(`${pageHeaderClassName}-parentLink`)}>
                    <a href="#" aria-label={`Back to ${parentLinkLabel}`}>
                      <span class={clsx(`${pageHeaderClassName}-parentLink-icon`)}>
                        <ArrowLeftIcon />
                      </span>
                      <span class={clsx(`${pageHeaderClassName}-parentLink-label`)}>{parentLinkLabel}</span>
                    </a>
                  </div>
                </div>
              </>
            )}

            {contextBarChildren && (
              {contextBarChildren}
            )}

            {contextBarActionsChildren && (
              <>
                {/* FIXME: Show when Narrow only? */}
                <div className={clsx(
                  `${pageHeaderClassName}-actions`,
                  `${pageHeaderClassName}-actions-posContextBar`,
                )}>
                  {contextBarActionsChildren}
                </div>
              </>
            )}
          </div>
        )}

        {/* Title bar */}
        <div className={clsx(`${pageHeaderClassName}-titleBar`)}>

          {/* Title wrap */}
          <div className={
            clsx(
              `${pageHeaderClassName}-titleWrap`, 
              `${pageHeaderClassName}-titleWrap--${titleVariantClassName}`,
              titleVariantWhenNarrow && `${pageHeaderClassName}-titleWrap--${titleVariantWhenNarrowClassName}-whenNarrow`,
              titleIsInteractiveWhenNarrow && `${pageHeaderClassName}-titleWrap--isInteractiveWhenNarrow`,
            )}
          >
            
            {/* FIXME: back button as independent item */}
            {hasParentLink && parentLinkShow === 'backButton' && (
              <>
                <div className={clsx(`${pageHeaderClassName}-backButton`)}>
                  <a href="#" aria-label="Back to :parent_link"><ArrowLeftIcon /></a>
                </div>
              </>
            )}

            {/* Title */}
            <TitleTag className={clsx(
              `${pageHeaderClassName}-title`,
              titleIsInteractiveWhenNarrow && `hide-whenNarrow`,
            )}>
              {/* Title leading visual */}
              {hasLeadingVisual && (
                <div className={clsx(
                  `${pageHeaderClassName}-leadingVisual`,
                )}>
                  {leadingVisualChildren}
                </div>
              )}

              {title}
            </TitleTag>
            
            {/* Interactive title when narrow */}
            {titleIsInteractiveWhenNarrow && (
              <>
                {/* Screen-reader title above interactive element */}
                <TitleTag className="sr-only show-whenNarrow">{titleLabel}</TitleTag>
                <div className="show-whenNarrow">
                  <a className={clsx(
                    `${pageHeaderClassName}-title`,
                    `${pageHeaderClassName}-title--interactive`,
                  )} href="#" aria-label="Open navigation pane">
                    <span>{title}</span>
                    <TriangleDownIcon />
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Actions */}
          {actionsChildren && (
            <div className={clsx(
              `${pageHeaderClassName}-actions`,
              `${pageHeaderClassName}-actions-posTitleBar`,
            )}>
              {actionsChildren}
            </div>
          )}
        </div>

        {/* Description */}
        {descriptionChildren && (
          <div className={clsx(`${pageHeaderClassName}-description`)}>
            {descriptionChildren}
          </div>
        )}

        {/* Navigation */}
        {navigationChildren && (
          <div className={clsx(`${pageHeaderClassName}-navigation`)}>
            {navigationChildren}
          </div>
        )}
      </div>
    </>
  )
}

export const Playground = PageHeaderTemplate.bind({})

Playground.args = {
  // Title
  title: 'Page title',
  titleVariant: 'title-medium',
  titleVariantWhenNarrow: 'title-medium',
  titleTag: 'h1',
  titleIsInteractiveWhenNarrow: false,

  // Parent link
  hasParentLink: true,
  parentLinkLabel: 'Parent link',
  parentLinkShow: ['narrow'],
};
