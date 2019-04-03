import {get} from './constants'

const getDirectionStyles = (theme, direction) => {
  const map = {
    w: `
      top: 0;
      right: 100%;
      left: auto;
      width: auto;
      margin-top: 0;
      margin-right: 10px;

      &::before {
        top: 10px;
        right: -16px;
        left: auto;
        border-color: transparent;
        border-left-color: ${get('colors.blackfade15')(theme)};
      }

      &::after {
        top: 11px;
        right: -14px;
        left: auto;
        border-color: transparent;
        border-left-color: ${get('colors.white')(theme)};
      }
    `,
    e: `
      top: 0;
      left: 100%;
      width: auto;
      margin-top: 0;
      margin-left: 10px;

      &::before {
        top: 10px;
        left: -16px;
        border-color: transparent;
        border-right-color: ${get('colors.blackfade15')(theme)};
      }

      &::after {
        top: 11px;
        left: -14px;
        border-color: transparent;
        border-right-color: ${get('colors.white')(theme)};
      }
    `,
    ne: `
      top: auto;
      bottom: 100%;
      left: 0;
      margin-bottom: 3px;

      &::before,
      &::after {
        top: auto;
        right: auto;
      }

      &::before {
        bottom: -8px;
        left: 9px;
        border-top: 8px solid ${get('colors.blackfade15')(theme)};
        border-bottom: 0;
        border-left: 8px solid transparent;
      }

      &::after {
        bottom: -7px;
        left: 10px;
        border-top: 7px solid ${get('colors.white')(theme)};
        border-right: 7px solid transparent;
        border-bottom: 0;
        border-left: 7px solid transparent;
      }
    `,
    s: `
      right: 50%;
      left: auto;
      transform: translateX(50%);

      &::before {
        top: -16px;
        right: 50%;
        transform: translateX(50%);
      }

      &::after {
        top: -14px;
        right: 50%;
        transform: translateX(50%);
      }
    `,
    sw: `
      right: 0;
      left: auto;

      &::before {
        top: -16px;
        right: 9px;
        left: auto;
      }

      &::after {
        top: -14px;
        right: 10px;
        left: auto;
      }
    `,
    se: `
      &::before {
        top: -16px;
        left: 9px;
      }

      &::after {
        top: -14px;
        left: 10px;
      }
    `
  }
  return map[direction]
}

export default getDirectionStyles
