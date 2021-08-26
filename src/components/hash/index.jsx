import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import crypto from 'crypto'
import {ColorLegend} from '@local/components/color-legend'
import {Sandbox, SandboxBody, SandboxControls} from '@local/components/sandbox'
import {classNameRetriever} from '@local/utils/style'
import styles from './styles.module.css'

const getClassName = classNameRetriever(styles);

const algorithms = {
  md5: 'MD5',
  sha1: 'SHA-1',
  sha256: 'SHA-256',
  sha512: 'SHA-512',
}

const formats = {
  bin: 'BINARY',
  hex: 'HEXADECIMAL',
}

function toHashDigest({algorithm, format, inputString}) {
  const bytes = [];
  for (const byte of crypto.createHash(algorithm).update(inputString).digest()) {
    bytes.push(byte);
  }
  return bytes.flatMap(byte => 
   format === 'bin' ? 
    Array.from(byte.toString(2).padStart(8, 0)) :
      Array.from(byte.toString(16).padStart(2, 0)));
}

function BitsPreview({bitChars}) {
  const bitCharEls = bitChars
    .map((bitChar, idx) => {
        return (
          <span key={idx}>
            {bitChar}
          </span>
        );
    });

  return (
    <p>
      <strong className={getClassName('hashDigest')}>
        {bitCharEls}
      </strong>
    </p>
  )
}

BitsPreview.propTypes = {
  bitChars: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

function HashDigestPreview({algorithm, format, input}) {
  const hashDigestBits = toHashDigest({
    algorithm,
    format,
    inputString: input
  });

  const hashDigestEl = (
    <BitsPreview bitChars={hashDigestBits}/>
  );
  
  return (
      <div className={clsx('container', 'padding--md')}>
        <div className={clsx('row')}>
          <div className={clsx('col', 'col--12')}>
            <p>
              Hash digest:
            </p>
            {hashDigestEl}
          </div>
        </div>
      </div>
    )
}

HashDigestPreview.propTypes = {
  algorithm: PropTypes.string.isRequired, 
  format: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired, 
};

export function Hash() {
  const [activeAlgorithm, setActiveAlgorithm] = 
      React.useState(Object.keys(algorithms)[0]);
  const [activeFormat, setActiveFormat] = 
      React.useState(Object.keys(formats)[0]);
  const [input, setInput] = React.useState('example text');
  const tabs = Object
      .entries(algorithms)
      .map(([algorithm, label], idx) => {
          const isActive = algorithm === activeAlgorithm;
          return (
            <li 
              className={clsx('tabs__item', {'tabs__item--active': isActive})}
              key={idx}
              onClick={() => setActiveAlgorithm(algorithm)}
            >
              {label}
            </li>
          );
      });

  const formatEls = Object.keys(formats).map(formatName => (
    <p key={formatName}>
      <input 
        checked={activeFormat === formatName}
        name="format" 
        onChange={() => setActiveFormat(formatName)}
        type="radio" 
        value={formatName}
      />
      {formats[formatName]}
    </p>
  ));

  return (
    <Sandbox title="Hash">
      <SandboxBody>
          <ul className={clsx('tabs', 'tabs--block')}>
            {tabs}
          </ul>
          <HashDigestPreview
            algorithm={activeAlgorithm}
            format={activeFormat}
            input={input}
          />
      </SandboxBody>
      <SandboxControls>
        <div className={clsx('container')}>
          <div className={clsx('row')}>
            <div className={clsx('col', 'col--12')}>
              <div>{formatEls}</div>
              <input
                onChange={evt => setInput(evt.target.value)}
                placeholder="input"
                type="text"
                value={input}
              />
            </div>
          </div>
        </div>
      </SandboxControls>
    </Sandbox>
  )
}

