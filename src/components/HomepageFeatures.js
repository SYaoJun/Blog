import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '专注',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       吾尝终日而思矣，不如须臾之所学也；吾尝跂而望矣，不如登高之博见也。
       ——《劝学》荀子
      </>
    ),
  },
  {
    title: '极致',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      而世之奇伟、瑰怪，非常之观，常在于险远，而人之所罕至焉，故非有志者不能至也。有志矣，不随以止也，然力不足者，亦不能至也。
      
      ——《游褒禅山记》王安石
      </>
    ),
  },
  {
    title: '口碑',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎！
        
        ——《赤壁赋》苏轼
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
