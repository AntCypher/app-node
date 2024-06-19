import className from 'classnames/bind';
import styles from './CounterSection.module.scss';

let cx = className.bind(styles);


export default function CounterSection({ sectionData }) {
    const { sectionId, sectionClass } = sectionData;

    return (
        <section className={cx(['counterSec', sectionClass])}>
            <div className="container">
                <div className={cx(['row counterRow'])}>
                    <div className="col-6 col-sm-6 col-lg-3 counterCol">
                        <div className={cx(['counterBox'])}>
                            <div className={cx(['counterNumber'])}> <span className={cx(['counter'])}>250</span> <span>+</span> </div>
                            <div className={cx(['counterText'])}>Happy
                                <br /> Clients</div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-3 counterCol">
                        <div className={cx(['counterBox'])}>
                            <div className={cx(['counterNumber'])}> <span className={cx(['counter'])}>400</span> <span>+</span> </div>
                            <div className={cx(['counterText'])}>Successful
                                <br /> Projects</div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-3 counterCol">
                        <div className={cx(['counterBox'])}>
                            <div className={cx(['counterNumber'])}> <span className={cx(['counter_sign'])}>$</span> <span className={cx(['counter'])}>99</span> <span>%</span> </div>
                            <div className={cx(['counterText'])}>Customer
                                <br /> Satisfaction</div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-3 counterCol">
                        <div className={cx(['counterBox'])}>
                            <div className={cx(['counterNumber'])}> <span className={cx(['counter'])}>100</span> <span>+</span> </div>
                            <div className={cx(['counterText'])}>Team
                                <br /> Members</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

