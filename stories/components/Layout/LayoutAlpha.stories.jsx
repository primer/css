import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Layout/Alpha',
  excludeStories: ['LayoutAlphaTemplate'],
  argTypes: {
    container: {
      control: { type: 'select' },
      options: ['full', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio'
      },
      description: 'Wrapper around the entire component to define an optional maximum width.',
      table: {
        category: 'CSS'
      }
    },
    hasDivider: {
      control: { type: 'boolean' },
      description: 'Whether to show a pane line divider.',
      table: {
        category: 'CSS'
      }
    },
    gutter: {
      options: ['default', 'none', 'condensed', 'spacious'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets the gap between columns.',
      table: {
        category: 'CSS'
      }
    },
    sidebarPosition: {
      options: ['start', 'end'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets the position of the sidebar.',
      table: {
        category: 'CSS'
      }
    },
    sidebarWidth: {
      options: ['default', 'narrow', 'wide'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets the width of the sidebar.',
      table: {
        category: 'CSS'
      }
    },
    mainWidth: {
      options: ['full', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets the width of the main content area.',
      table: {
        category: 'CSS'
      }
    },
    flowRowUntil: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
      description: 'Sets the maximum breakpoint at which the layout will flow as row.',
      table: {
        category: 'CSS'
      }
    },
    mainChildren: {
      description: 'creates a slot for main children',
      table: {
        category: 'HTML'
      }
    },
    sidebarChildren: {
      description: 'creates a slot for sidebar children',
      table: {
        category: 'HTML'
      }
    },
  }
}

// build every component case here in the template (private api)
export const LayoutAlphaTemplate = ({
  container,
  hasDivider,
  gutter,
  sidebarPosition,
  sidebarWidth,
  mainWidth,
  flowRowUntil,
  mainChildren,
  sidebarChildren
}) => {

  // Default values
  container = container ?? 'xl';
  hasDivider = hasDivider ?? false;
  gutter = gutter ?? 'default';
  sidebarPosition = sidebarPosition ?? 'end';
  sidebarWidth = sidebarWidth ?? 'default';
  mainWidth = mainWidth ?? 'full';
  flowRowUntil = flowRowUntil ?? 'md';

  // Leave `null` values for states that don't require a modifier class
  container = (container === 'full') ? null : container;
  hasDivider = (hasDivider === false) ? null : hasDivider;
  gutter = (gutter === 'default') ? null : gutter;
  sidebarWidth = (sidebarWidth === 'default') ? null : sidebarWidth;
  mainWidth = (mainWidth === 'full') ? null : mainWidth;
  flowRowUntil = (flowRowUntil === 'sm') ? null : flowRowUntil;
  
  return (
    <div
      // use clsx for multiple classnames
      className={clsx(
        'Layout',
        container && 'container-' + `${container}`,
        gutter && 'Layout--gutter-' + `${gutter}`,
        sidebarPosition && 'Layout--sidebarPosition-' + `${sidebarPosition}`,
        sidebarWidth && 'Layout--sidebar-' + `${sidebarWidth}`,
        hasDivider && 'Layout--divided',
        flowRowUntil && '' + 'Layout--flowRow-until-' + `${flowRowUntil}`
      )}
      // use undefined for values that shouldn't be set if false
      aria-hidden={hasDivider ? 'true' : undefined}
    >
      {/* use {children} for wrapper component templates */}
      <>
      <div className="Layout-main">
        {mainWidth ? (
          <>
            <div className={'Layout-main-centered-' + mainWidth}>
              <div className={clsx( mainWidth && 'container-' + mainWidth)}>
                {mainChildren}
              </div>
            </div>
          </>
        ) : (
          <>
            {mainChildren}
          </>
        )}
      </div>
      <div className="Layout-divider"></div>
      <div className="Layout-sidebar">{sidebarChildren}</div>
      </>
    </div>
  );
};

const sidebarPlaceholder =
  <>
    <div style={
      {
        width: '100%',
        height: '100%',
        backgroundColor: '#DDF4FF',
        border: '1px solid #80CCFF',
        padding: '16px',
        borderRadius: '6px'
      }
    }>
      sidebar
    </div>
  </>;

const mainPlaceholder =
  <>
    <div style={
      {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFEFF7',
        border: '1px solid #FFADDA',
        padding: '16px',
        borderRadius: '6px'
      }
    }>
      main
    </div>
  </>;

// create a "playground" demo page that may set some defaults and allow story to access component controls
export const Playground = LayoutAlphaTemplate.bind({})
Playground.args = {
  container: 'full',
  hasDivider: false,
  gutter: 'default',
  sidebarPosition: 'end',
  sidebarWidth: 'default',
  mainWidth: 'full',
  flowRowUntil: 'md',
  mainChildren: mainPlaceholder,
  sidebarChildren: sidebarPlaceholder
}
