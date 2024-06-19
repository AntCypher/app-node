import React, { useEffect } from 'react';
import className from 'classnames/bind';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './BannerSection.module.scss';
import {
    Container,
  } from '../../components';

let cx = className.bind(styles);


export default function BannerSection({ sectionData }) {

    useEffect(() => {

        AOS.init({
            duration: 3000, // duration of the animation in milliseconds
        });

        const spanElement = document.querySelector('.heading_h1 span');
        if (spanElement) {
            // const newElement = document.createElement('svg');
            const newElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            newElement.setAttribute('data-aos', 'zoom-out');
            newElement.setAttribute('data-aos-duration', '3000');
            newElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            newElement.setAttribute('width', '257');
            newElement.setAttribute('height', '107');
            newElement.setAttribute('viewBox', '0 0 257 107');
            newElement.setAttribute('fill', 'none');
            newElement.innerHTML = '<path d="M148.369 105.139C120.432 107.453 95.1672 106.177 68.5362 101.108C53.8852 98.3197 36.2931 91.6105 36.1834 88.7702C36.159 88.14 36.7344 88.2361 39.0394 89.2494C40.627 89.9472 47.708 92.0495 54.7747 93.9217C71.6024 98.3792 85.6136 100.11 108.173 100.518C165.182 101.55 227.427 85.3009 244.482 64.9362C246.996 61.9342 247.85 60.4899 248.463 58.2021C252.647 42.5879 227.665 25.292 186.778 15.4948C173.094 12.2155 166.68 11.0922 153.055 9.58776C114.645 5.3469 75.1162 8.85059 47.6218 18.933C19.1799 29.3633 5.77501 41.1231 6.53659 54.9755C6.95873 62.6543 9.70895 67.9037 19.7735 80.2392C24.1823 85.6422 25.2993 87.5436 23.8357 87.1514C22.9 86.9007 14.5719 79.915 11.3335 76.664C5.06202 70.3698 2.08016 64.9659 0.804683 57.5856C-0.371504 50.7797 1.37651 42.8242 5.3149 37.0535C13.5837 24.9385 35.8151 13.1712 62.2718 6.90392C98.2126 -1.60943 142.276 -1.33595 184.985 7.66529C217.519 14.5226 242.438 26.8285 252.154 40.8361C258.178 49.5196 258.31 59.0331 252.527 67.5515C240.109 85.8426 198.035 101.026 148.369 105.139Z" fill="#FCC509"/>';
            spanElement.appendChild(newElement);
        }
    }, []);

    const { sectionId, sectionClass, bannerImage, bannerTitle, bannerDescription, bannerButton, bannerList } = sectionData;

    const imageUrl = bannerImage?.node?.mediaItemUrl ?? bannerImage?.node?.sourceUrl ?? '';
    const imageAlt = bannerImage?.node?.altText ?? '';

//   console.log('imageUrl:', imageUrl);
//   console.log('imageAlt:', imageAlt);

  return (
    <section id={sectionId} className={cx(['heroBannerSec', sectionClass])}>

        <div className={cx(['heroBannerImage'])}>
            <img src={imageUrl} alt={imageAlt} />
        </div>
        
        <div className={cx(['heroBannerContent'])}>

            <Container>
                <div className={cx(['heroBannerHeading'])}>
                    <h1 className={cx(['heading_h1',' heading_h1'])} dangerouslySetInnerHTML={{ __html: bannerTitle ?? '' }} />
                </div>

                <div className={cx(['heroBannerText'])}>
                    <div className={cx(['heading_p'])} dangerouslySetInnerHTML={{ __html: bannerDescription ?? '' }} />
                </div>

                {bannerList && bannerList.length > 0 && (
                    <ul>
                    {bannerList.map((item, index) => (
                        <li key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <circle cx="17" cy="17" r="17" fill="white"/>
                            <path d="M14.8101 23L9 17.2857L11.0112 15.3077L14.8101 19.044L22.9888 11L25 12.978L14.8101 23Z" fill="black"/>
                        </svg>
                        <span>{item.text}</span>
                        </li>
                    ))}
                    </ul>
                )}

                <div className={cx(['heroBannerBtn'])}>
                    <a href={bannerButton?.url} target={bannerButton?.target} className={cx(['btn btn-primary'])}>{bannerButton?.title}</a>                                
                </div>
            </Container>
        </div>
    </section>

  );
}

