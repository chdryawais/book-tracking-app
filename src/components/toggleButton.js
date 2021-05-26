import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ThemeContext } from '../context/themeContext';

const CheckedIcon = () => <>🌜</>;
const UncheckedIcon = () => <>🌞</>;

const ToggleButton = (props) => {
  const [toggle, setToggle] = useState(false);
  const { setTheme } = React.useContext(ThemeContext);

  const { defaultChecked, onChange, disabled, className } = props;

  const triggerToggle = () => {
    if (disabled) {
      return;
    }

    setToggle(!toggle);

    if (typeof onChange === 'function') {
      onChange(!toggle);
    }
  };

  const toggleClasses = classNames(
    'ml-7 wrg-toggle',
    {
      'wrg-toggle--checked': toggle,
      'wrg-toggle--disabled': disabled,
    },
    className
  );

  useEffect(() => {
    if (defaultChecked) {
      setToggle(defaultChecked);
      setTheme(defaultChecked ? 'dark' : 'light');
    }
  }, [defaultChecked]);

  useEffect(() => {
    setTheme(toggle ? 'dark' : 'light');
  }, [toggle]);

  const getIcon = (type) => {
    const { icons } = props;
    if (!icons) {
      return null;
    }

    return icons[type] === undefined
      ? ToggleButton.defaultProps.icons[type]
      : icons[type];
  };

  return (
    <div onClick={triggerToggle} className={toggleClasses}>
      <div className='wrg-toggle-container bg-snowWhite dark:bg-black'>
        <div className='wrg-toggle-check'>
          <span>{getIcon('checked')}</span>
        </div>
        <div className='wrg-toggle-uncheck'>
          <span>{getIcon('unchecked')}</span>
        </div>
      </div>
      <div className='wrg-toggle-circle bg-silverGrey dark:bg-white'></div>
      <input
        type='checkbox'
        aria-label='Toggle Button'
        className='wrg-toggle-input'
      />
    </div>
  );
};

ToggleButton.defaultProps = {
  icons: {
    checked: <CheckedIcon />,
    unchecked: <UncheckedIcon />,
  },
};

ToggleButton.propTypes = {
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  icons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      checked: PropTypes.node,
      unchecked: PropTypes.node,
    }),
  ]),
};

export default ToggleButton;
