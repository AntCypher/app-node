import className from 'classnames/bind';
import styles from './CounterSection.module.scss';
import { Container } from '../../components';

let cx = className.bind(styles);


export default function CounterSection({ sectionData }) {
    const { sectionId, sectionClass, counterList } = sectionData;
    
    // Function to strip <p> tags from HTML content
    const stripPTags = (htmlContent) => {
        // Replace all <p> tags with an empty string
        return htmlContent.replace(/<p>/g, '').replace(/<\/p>/g, '');
    };

    return (

        <section id={sectionId} className={cx(['counterSec', sectionClass])}>
            <Container className={cx(['container'])}>

                <div className={cx(['row counterRow'])}>
                    {counterList.map((counter, index) => (
                        <div
                        key={index}
                        className={cx(['col-6 col-sm-6 col-lg-3', 'counterCol'])}
                        data-aos="fade"
                        >
                        <div className={cx(['counterBox'])}>
                            <div className={cx(['counterNumber'])}>
                                {counter.counterSign && <span>{counter.counterSign}</span>}
                                <span className={cx(['counter'])}>{counter.counterNumber}</span>
                                {counter.counterNumberSign && <span>{counter.counterNumberSign}</span>}
                            </div>
                            <div className={cx(['counterText'])} dangerouslySetInnerHTML={{ __html: stripPTags(counter.counterTitle ?? '') }} />
                        </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

