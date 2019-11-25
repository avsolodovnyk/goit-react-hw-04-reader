import React from 'react';
import T from 'prop-types';
import styles from './Publication.module.css';

export default function Publication({ currentItem: { id, title, text } }) {
  return (
    <article className={styles.publication} id={id}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

Publication.propTypes = {
  currentItem: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired,
    text: T.string.isRequired,
  }).isRequired,
};
