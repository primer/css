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
    title: {
      control: 'text',
      description: 'The page title',
    },
    titleVariant: {
      options: ['title-large', 'title-medium', 'subtitle'],
      control: 'inline-radio',
    },
    titleVariantWhenNarrow: {
      control: 'inline-radio',
      options: ['title-medium', 'subtitle'],
    },
    titleSize: {
      control: 'inline-radio',
      options: ['large', 'medium'],
    },
    leadingVisual: {
      control: 'inline-radio',

    },
    hasParentLink: {
      control: 'boolean',
    },
    trailingActions: {
      control: 'inline-radio',
      options: ['none', 'info'],
    },
    trailingPosition: {
      control: 'inline-radio',
      options: ['byParentLink', 'byTitle'],
    },
    isTitleInteractive: {
      control: 'boolean',
    },
    visualChildren: {
      description: 'creates a slot for custom visuals',
    },
    actionChildren: {
      description: 'creates a slot for action buttons',
    }
  },
}

export const PageHeaderTemplate = ({
  title,
  titleVariant,
  titleVariantWhenNarrow,
}) => {

  const pageHeaderClassName = 'PageHeader';

  titleVariant = titleVariant ?? 'title-medium';
  titleVariantWhenNarrow = titleVariantWhenNarrow ?? 'title-medium';

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
        <div className={clsx(`${pageHeaderClassName}-parentLink`)}>
          <a href="#"><ArrowLeftIcon /> Parent link</a>
        </div>

        <div className={
          clsx(
            `${pageHeaderClassName}-title`, 
            `${pageHeaderClassName}-title--${titleVariantClassName}`,
            `${pageHeaderClassName}-title--${titleVariantWhenNarrowClassName}-whenNarrow`
          )}
        >
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

        <div className={clsx(`${pageHeaderClassName}-actions`)}>
          <button className="btn">Button</button>
        </div>

      </div>
    </>
  )
}

export const Playground = PageHeaderTemplate.bind({})

Playground.args = {
  titleVariant: 'title-large',
  titleVariantWhenNarrow: 'title-medium',
  title: 'Vinicius',
};
