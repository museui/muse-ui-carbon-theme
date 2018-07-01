export const createTheme = (theme, type, name) => {
  return name === 'carbon' ? `
  .mu-item.is-selected,
  .mu-slider,
  .mu-breadcrumbs-item,
  .mu-radio-checked,
  .mu-form-item__focus,
  .mu-checkbox-checked,
  .mu-switch-checked,
  .mu-picker,
  .mu-input__focus,
  .mu-refresh-control,
  .mu-app-drawer-header .mu-appbar-title-text:hover,
  .mu-app-drawer-header .mu-app-version:hover,
  .mu-bottom-item-active .mu-bottom-item-icon,
  .mu-bottom-item-active .mu-bottom-item-text {
    color: ${theme.secondary};
  }
  .mu-picker-display,
  .mu-datetime-picker .mu-tabs {
    background-color: ${theme.primary};
  }
  .mu-timepicker-number__selected,
  .mu-linear-progress-background,
  .mu-linear-progress-indeterminate,
  .mu-linear-progress-determinate,
  .mu-pagination-item.mu-button.is-current {
    background-color: ${theme.secondary};
  }
  .mu-circle-spinner {
    border-color: ${theme.secondary};
  }
  .mu-circular-progress-determinate-path{
    stroke: ${theme.secondary};
  }
  ` : '';
};

export { default as carbon } from './carbon';
