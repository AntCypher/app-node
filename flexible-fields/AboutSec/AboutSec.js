import className from 'classnames/bind';
import styles from './AboutSec.module.scss';
import { Container } from '../../components';

let cx = className.bind(styles);


export default function AboutSec({ sectionData }) {
    const { sectionId, sectionClass, counterList } = sectionData;
    
    // Function to strip <p> tags from HTML content
    const stripPTags = (htmlContent) => {
        // Replace all <p> tags with an empty string
        return htmlContent.replace(/<p>/g, '').replace(/<\/p>/g, '');
    };

    return (

        <section id={sectionId} className={cx(['hmAboutSec', sectionClass])}>
            <h2>About Section</h2>
        </section>
    );
}

