import clsx from 'clsx'
import React from 'react'
import ConditionalWrapper from '../../helpers/ConditionalWrapper'
import {PatternFullBleed} from '../ActionList/ActionListFeatures.stories.jsx'

export default {
  title: 'UI Patterns/Overlay base',
  parameters: {
    layout: 'padded'
  },
  excludeStories: ['OverlayBaseTemplate'],
  argTypes: {

    // # backdrop
    // # - visible
    // # - transparent
    // # - none
    // # motion
    // # - auto
    // # - none
    // # placement
    // # - viewport
    // #   - top, left, right, bottom, full, center
    // # - anchored
    // #   - [directions]
    // # open/dismiss behavior
    // #   - open: boolean
    // #   - API client-side:
    // #     - open
    // #     - dismiss
    // # sizing
    // # - width: auto, xsmall, small, medium, large, xlarge, xxlarge
    // # - height: auto, xsmall, small, medium, large, xlarge

    // backdrop
    backdrop: {
      options: ['visible', 'transparent', 'none'],
      control: {
        type: 'inline-radio',
      }
    },
    placement: {
      // Todo: fix placement options
      options: ['top', 'left', 'right', 'bottom', 'full', 'center', 'anchor'],
      control: {
        type: 'inline-radio',
      }
    },
    motion: {
      options: ['auto', 'none'],
      control: {
        type: 'inline-radio',
      }
    },
    width: {
      options: ['auto', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
      control: {
        type: 'select',
      }
    },
    height: {
      options: ['auto', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xlarge'],
      control: {
        type: 'select',
      }
    },
    open: {
      control: {
        type: 'boolean',
      }
    },

    // content
    contentSlot: {
      description: 'Slot for the overlay contents.',
      control: {type: 'string'},
    }
  }
}

const focusOverlay = function getFocus() {
  const overlay = document.querySelector('.Overlay');
  overlay.focus()
}

const toggleOverlay = () => {
  const overlay = document.querySelector('.Overlay');
  overlay.classList.toggle('Overlay--open');
  focusOverlay();
}

export const OverlayBaseTemplate = ({
  placement,
  backdrop,
  motion,
  width,
  height,
  open,
  contentSlot
}) => {

  // Default values
  backdrop = backdrop ?? 'visible';
  placement = placement ?? 'center';
  width = width ?? 'auto';
  height = height ?? 'auto';
  motion = motion ?? 'auto';

  // Inherit values
  // variantWhenNarrow = variantWhenNarrow === 'inherit' ? variant : variantWhenNarrow;

  // Leave `null` values for states that don't require a modifier class
  // headerVariant = headerVariant === 'medium' ? null : headerVariant;

  return (
  <>
    <button class="btn" onClick={toggleOverlay}>
      <span>Open overlay</span>
    </button>

    <div
      className={clsx(
        'Overlay',
        open && 'Overlay--open',
        placement && `Overlay--${placement}`,
      )}
    >
      <div
        className={clsx(
          'Overlay-wrapper',
        )}
        // data-focus-trap={dataFocusTrap}
        // role={role}
        // aria-labelledby={ariaLabelledby}
        // aria-describedby={ariaDescribedby}
        // open
      >
        <div className={clsx(
          'Overlay-content',
          width && `Overlay-content--width-${width}`,
          height && `Overlay-content--height-${height}`,
          motion && `Overlay-content--motion-${motion}`,
          )}>
          {contentSlot}
        </div>
      </div>
      {backdrop !== 'none' && (
        <div className={clsx(
          'Overlay-backdrop',
          backdrop && `Overlay-backdrop--${backdrop}`,
        )}></div>
      )}
    </div>
  </>
  );
};

export const Playground = OverlayBaseTemplate.bind();
Playground.storyName = 'Playground';
Playground.args = {
  placement: 'viewport-top',
  width: 'small',
  height: 'small',
  open: true,
  // title: 'This is the title of the dialog',
  // description: 'This is the subtitle of the dialog',
  // motion: 1,
  // footerContentAlign: 2,
  // showCloseButton: true,
  // showFooterButton: false,
  // headerSlot: '',
  // actionContentSlot: '',
  // headerVariant: 'medium',
  // bodyPaddingVariant: 0,
  // hasHeader: true,
  // hasFooter: true,
  // showFooterDivider: false,
  // showHeaderDivider: false,
  // role: '',
  // ariaDescribedby: '',
  // dataFocusTrap: '',
  contentSlot: (
    <>
      <p>This is the body of the dialog</p>
    </>
  )
};

// export const Dialog = OverlayBaseTemplate.bind();
// Dialog.storyName = 'Dialog';
// Dialog.args = {
//   /*
//   variant: 'center',

//   // Header
//   hasHeader: true,
//   title: 'Dialog title',
//   description: 'This is the subtitle of the dialog',

//   // Properties
//   width: 'medium',
//   height: 'small',
//   motion: 'auto',

//   footerContentAlign: 2,
//   showCloseButton: true,
//   showFooterButton: false,
//   headerSlot: '',
//   actionContentSlot: '',
//   headerVariant: 'large',
//   bodyPaddingVariant: 0,
//   hasFooter: false,
//   showFooterDivider: false,
//   showHeaderDivider: false,
//   role: '',
//   ariaDescribedby: '',
//   dataFocusTrap: '',
//   */
//   contentSlot: (
//     <>
//       <div>Lorem ipsum dolor sit amet.</div>
//       <div>Lorem ipsum dolor sit amet.</div>
//       <div>Lorem ipsum dolor sit amet.</div>
//       <div>Lorem ipsum dolor sit amet.</div>
//       <div>Lorem ipsum dolor sit amet.</div>
//     </>
//   )
// };

// export const CustomHeader = OverlayBaseTemplate.bind();
// CustomHeader.storyName = 'Custom header';
// CustomHeader.args = {
//   variant: 'center',

//   // Header
//   hasHeader: true,
//   title: 'Dialog title',
//   description: 'This is the subtitle of the dialog',

//   // Properties
//   width: 'medium',
//   height: 'small',
//   motion: 'auto',

//   // Header
//   headerVariant: 'custom',
//   headerSlot: (
//     <><div style={{background: 'pink', height: '32px', width: '100%'}}>Custom header</div></>
//   ),
//   subHeaderSlot: (
//     <>UnderlineNav</>
//   ),

//   footerContentAlign: 2,
//   showCloseButton: true,
//   showFooterButton: false,
//   actionContentSlot: '',
//   bodyPaddingVariant: 0,
//   hasFooter: false,
//   showFooterDivider: false,
//   showHeaderDivider: false,
//   role: '',
//   ariaDescribedby: '',
//   dataFocusTrap: '',

//   bodySlot: (
//     <>
//       <div>Lorem ipsum dolor sit amet.</div>
//       <div>Lorem ipsum dolor sit amet.</div>
//       <div>Lorem ipsum dolor sit amet.</div>
//       <div>Lorem ipsum dolor sit amet.</div>
//       <div>Lorem ipsum dolor sit amet.</div>
//     </>
//   )
// };