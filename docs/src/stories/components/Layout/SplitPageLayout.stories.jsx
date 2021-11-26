// create a "playground" demo page that may set some defaults and allow story to access component controls
import React from 'react'
import clsx from 'clsx'
import {LayoutTemplate} from './LayoutBeta.stories'

export default {
  title: 'Components/Layout/Beta/SplitPageLayout',
  excludeStories: ['SplitPageLayoutTemplate'],
  argTypes: {

    // Structure

    innerSpacing: {
      options: ['normal', 'condensed'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets padding to regions individually. `normal` sets padding to 16px, with the `content` region getting 24px horizontal padding on `lg` breakpoints and above. `condensed` keeps the padding always at `16px`.',
      table: {
        category: 'Structure'
      }
    },

    responsivePrimaryRegion: {
      options: ['content', 'pane'],
      control: {
        type: 'inline-radio'
      },
      description: 'When `responsiveVariant` is set to `separateRegions`, defines which region appears first on small viewports. `content` is default.',
      table: {
        category: 'Responsive'
      }
    },

    // Pane

    paneWidth: {
      options: ['default', 'narrow', 'wide'],
      control: {
      type: 'inline-radio'
      },
      description: 'Defines the width of the pane',
      table: {
        category: 'Pane'
      }
    },

    // Content

    contentWidth: {
      options: ['fluid', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio'
      },
      description: 'Defines the maximum width of the content region. `fluid` sets it to full-width. Other values follow container widths from `sm` to `xl`. With smaller widths, the content region will try to stay centered to the viewport area.',
      table: {
        category: 'Content'
      }
    }
  },
};

export const SplitPageLayoutTemplate = ({
  innerSpacing,
  responsivePrimaryRegion,
  paneWidth,
  paneIsSticky,
  contentWidth
}) => {
  return (
    <>
      <LayoutTemplate
        wrapperSizing='full'
        outerSpacing='none'
        innerSpacing={innerSpacing}
        columnGap='none'
        rowGap='none'

        responsiveVariant='separateRegions'
        responsivePrimaryRegion={responsivePrimaryRegion}

        paneWidth={paneWidth}
        paneIsSticky={paneIsSticky}
        panePosition='start'
        paneDivider={true}
        contentWidth={contentWidth}

        hasHeader={false}

        hasFooter={false}

        contentChildren="content"
        paneChildren="pane"
      />
    </>
  );
};

export const Playground = SplitPageLayoutTemplate.bind({});
Playground.storyName = 'Playground';
Playground.parameters = {
  layout: 'fullscreen',
};
Playground.args = {
  // Structure
  innerSpacing: 'normal',

  // Responsive
  responsivePrimaryRegion: 'content',

  // Pane
  paneWidth: 'wide',

  // Content
  contentWidth: 'fluid'
};