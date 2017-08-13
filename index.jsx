import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import styles from './styles.scss';
import formStyles from '../styles/components/form.scss';

/**
 * TextArea.
 * @param {string} label
 * @param {string} placeholder
 * @param {string} id
 * @param {number} rows
 * @param {function(string)} onChange - passes content up.
 * @returns {React.Component}
 */

function TextArea({ label, placeholder, id, onChange, rows }) {
  function handleChange(event) {
    const content = event.target.value.trim();

    onChange(content);
  }

  return (
    <section>
      <label className={formStyles.title} htmlFor={id} >{label}</label>

      <textarea
        id={id}
        className={styles.textarea}
        placeholder={placeholder}
        onChange={handleChange}
        rows={rows}
      />
    </section>
  );
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  placeholder: '',
  rows: 5,
  onChange: noop,
};

export default TextArea;
