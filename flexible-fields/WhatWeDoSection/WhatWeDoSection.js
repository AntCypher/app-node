import className from 'classnames/bind';
import styles from './WhatWeDoSection.module.scss';

let cx = className.bind(styles);


export default function WhatWeDoSection({ sectionData }) {
  const { sectionId, sectionClass } = sectionData;

  return (
    <div className={sectionClass}>
      {/* Add content specific to WhatWeDoSection */}
    </div>
  );
}

