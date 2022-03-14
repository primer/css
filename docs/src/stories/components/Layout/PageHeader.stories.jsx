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
    parentLinkPlacement: {
      control: 'inline-radio',
      options: ['contextBar', 'title'],
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
    isTitleInteractive: {
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

    // Trailing actions

    trailingActions: {
      control: 'inline-radio',
      options: ['none', 'info'],
      table: {
        category: 'Trailing actions'
      },
    },
    trailingActionPosition: {
      control: 'inline-radio',
      options: ['eyebrow', 'title'],
      table: {
        category: 'Trailing actions'
      },
    },

    // Children

    visualChildren: {
      description: 'creates a slot for custom visuals',
      table: {
        category: 'Slots'
      },
    },
    actionChildren: {
      description: 'creates a slot for action buttons',
      table: {
        category: 'Slots'
      },
    }
  },
}

export const PageHeaderTemplate = ({
  title,
  titleVariant,
  titleVariantWhenNarrow,
  hasParentLink,
  parentLinkVariant,
  trailingActionPosition,
}) => {

  const pageHeaderClassName = 'PageHeader';

  // Default values
  titleVariant = titleVariant ?? 'title-medium';
  titleVariantWhenNarrow = titleVariantWhenNarrow ?? 'title-medium';
  trailingActionPosition = trailingActionPosition ?? 'title';

  const titleVariantClassName =
    (titleVariant.startsWith('title'))
      ? titleVariant.split('-')[1]
      : titleVariant;

  const titleVariantWhenNarrowClassName =
    (titleVariantWhenNarrow.startsWith('title'))
      ? titleVariantWhenNarrow.split('-')[1]
      : titleVariantWhenNarrow;

  return (
    <>
      <div className={clsx(pageHeaderClassName, titleVariant && `PageHeader--${titleVariant}`)}>
        <div className={clsx(`${pageHeaderClassName}-titleWrap`)}>

          {/* Eyebrow */}
          <div className={clsx(`${pageHeaderClassName}-eyebrow`)}>
            {hasParentLink && parentLinkVariant === 'eyebrowText' && (
              <>
                <div className={clsx(`${pageHeaderClassName}-parentLink`)}>
                  <a href="#" aria-label="Back to :parent_link"><ArrowLeftIcon /> Parent link</a>
                </div>
              </>
            )}
          </div>

          {/* Title */}
          <div className={
            clsx(
              `${pageHeaderClassName}-title`, 
              `${pageHeaderClassName}-title--${titleVariantClassName}`,
              `${pageHeaderClassName}-title--${titleVariantWhenNarrowClassName}-whenNarrow`,
              hasParentLink && parentLinkVariant === 'backButton' && `${pageHeaderClassName}-title--hasBackButton`
            )}
          >
            {hasParentLink && parentLinkVariant === 'backButton' && (
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

          {/* Trailing actions */}
          <div className={clsx(
            `${pageHeaderClassName}-actions`,
            `${pageHeaderClassName}-actions--pos-${trailingActionPosition}`
          )}>
            <button className="btn">Button</button>
          </div>
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

  // Parent link
  hasParentLink: true,
  parentLinkVariant: 'eyebrowText',
  trailingActionPosition: 'eyebrow',
};
