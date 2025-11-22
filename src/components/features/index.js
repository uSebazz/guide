import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn',
    img: require('@site/static/img/dog.jpg').default,
    description: (
      <>
       Here you can learn very quickly
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    img: require('@site/static/img/capy.jpg').default,
    description: (
      <>
        i dont gonna say anything about what you dont want
      </>
    ),
  },
  {
    title: 'Powered by chatgpt',
     img: require('@site/static/img/cat.jpg').default,
    description: (
      <>
        This page is vibecoded but who cares
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.img} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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