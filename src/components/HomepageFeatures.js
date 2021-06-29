import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Online User Guides',
    Svg: require('../../static/img/1f.svg').default,
    description: (
      <>
        Comprehensive documentation for taking the leap of success on Fynd Platform.
      </>
    ),
  },
  {
    title: 'Instructional Videos',
    Svg: require('../../static/img/2b.svg').default,
    description: (
      <>
        Video tutorials for utilizing the full potential of Fynd Platform, independently.
      </>
    ),
  },
  {
    title: 'Support and Assistance',
    Svg: require('../../static/img/3a.svg').default,
    description: (
      <>
        Expert assistance and resources to help you take your business to the peak.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
