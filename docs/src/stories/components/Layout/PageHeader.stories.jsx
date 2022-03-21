import React from 'react'
import clsx from 'clsx'
import {ArrowLeftIcon} from '@primer/octicons-react'

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
      table: {
        category: 'Parent link',
      },
    },
    parentLinkLabel: {
      control: 'text',
      table: {
        category: 'Parent link',
      },
    },
    parentLinkDisplay: {
      control: 'check',
      options: ['narrow', 'regular'],
      table: {
        category: 'Parent link'
      },
    },

    // Context bar



    // Title

    title: {
      control: 'text',
      description: 'The page title',
      table: {
        category: 'Title'
      },
    },
    titleVariant: {
      options: ['title-large', 'title-medium', 'subtitle'],
      control: 'inline-radio',
      table: {
        category: 'Title'
      },
    },
    titleVariantWhenNarrow: {
      control: 'inline-radio',
      options: ['title-medium', 'subtitle'],
      table: {
        category: 'Title'
      },
    },
    titleTag: {
      control: 'inline-radio',
      options: ['h1', 'h2', 'h3'],
      table: {
        category: 'Title'
      },
    },
    titleInteractiveWhenNarrow: {
      control: 'boolean',
      table: {
        category: 'Title'
      },
    },
    leadingVisual: {
      control: 'inline-radio',
      table: {
        category: 'Title'
      },
    },

    // Actions

    actions: {
      control: 'inline-radio',
      options: ['none', 'info'],
      table: {
        category: 'Actions'
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
  titleVariant,
  titleVariantWhenNarrow,

  // Parent link
  hasParentLink,
  parentLinkLabel,
  parentLinkDisplay,

  // Children
  contextBarChildren,
  contextBarActionsChildren,
  leadingVisualChildren,
  actionsChildren,
  descriptionChildren,
  navigationChildren,
}) => {

  const pageHeaderClassName = 'PageHeader';

  // Default title variant
  titleVariant = titleVariant ?? 'title-medium';
  titleVariantWhenNarrow = titleVariantWhenNarrow ?? 'title-medium';
  titleVariantWhenNarrow = titleVariant === titleVariantWhenNarrow ? null : titleVariantWhenNarrow;

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
        <div className={clsx(`${pageHeaderClassName}-contextBar`)}>
            {hasParentLink && (
              <>
                <div className={clsx(`${pageHeaderClassName}-parentLink`)}>
                  <a href="#" aria-label={`Back to ${parentLinkLabel}`}>
                    <span class={clsx(`${pageHeaderClassName}-parentLink-icon`)}>
                      <ArrowLeftIcon />
                    </span>
                    <span class={clsx(`${pageHeaderClassName}-parentLink-label`)}>{parentLinkLabel}</span>
                  </a>
                </div>
              </>
            )}
            
            {contextBarActionsChildren && (
              <>
                <div className={clsx(
                  `${pageHeaderClassName}-actions`,
                  `${pageHeaderClassName}-actions-posContextBar`,
                )}>
                  {contextBarActionsChildren}
                </div>
              </>
            )}
          </div>

        <div className={clsx(`${pageHeaderClassName}-titleBar`)}>

          {/* Title */}
          <div className={
            clsx(
              `${pageHeaderClassName}-title`, 
              `${pageHeaderClassName}-title--${titleVariantClassName}`,
              (titleVariantWhenNarrow && `${pageHeaderClassName}-title--${titleVariantWhenNarrowClassName}-whenNarrow`),
              hasParentLink && parentLinkDisplay === 'backButton' && `${pageHeaderClassName}-title--hasBackButton`
            )}
          >
            {hasParentLink && parentLinkDisplay === 'backButton' && (
              <>
                <div className={clsx(`${pageHeaderClassName}-backButton`)}>
                  <a href="#" aria-label="Back to :parent_link"><ArrowLeftIcon /></a>
                </div>
              </>
            )}
            {titleVariant === 'title-large' || titleVariant === 'title-medium' ? (
              <>
                <h1>{title}</h1>
              </>
            ) : (
              <>
                <h2>{title}</h2>
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
  titleInteractiveWhenNarrow: false,

  // Parent link
  hasParentLink: true,
  parentLinkLabel: 'Parent link',
  parentLinkDisplay: ['narrow'],
  actionsPositionWhenNarrow: 'titleBar',
};
