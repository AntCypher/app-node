import className from 'classnames/bind';
import styles from './WhatWeDoSection.module.scss';
import { Container } from '../../components';

let cx = className.bind(styles);


export default function WhatWeDoSection({ sectionData }) {
	
  	const { sectionId, sectionClass, sectionTitle, whatWeDoList } = sectionData;

  	// Function to strip <p> tags from HTML content
  	const stripPTags = (htmlContent) => {
		// Replace all <p> tags with an empty string
		return htmlContent.replace(/<p>/g, '').replace(/<\/p>/g, '');
	};

	return (
		<section id={sectionId} className={cx(['whatWeDoSec', sectionClass])}>
			<Container>
				<div className="row">
					<div className="col-12">
						<div className={cx(['whatWeDoHeading','text-center'])}>
							<h2 className={cx(['heading_h2',' heading_h2'])} data-aos="fade-up">
							{sectionTitle}
							<span className="hedingIcon">
								<svg
								xmlns="http://www.w3.org/2000/svg"
								width="62"
								height="62"
								viewBox="0 0 62 62"
								>
								<mask
									id="mask0_327_885"
									style={{ maskType: 'alpha' }}
									maskUnits="userSpaceOnUse"
									x="0"
									y="0"
									width="62"
									height="62"
								>
									<rect
									width="61.3223"
									height="61.3223"
									transform="matrix(-1 0 0 1 61.3223 0)"
									/>
								</mask>
								<g mask="url(#mask0_327_885)">
									<path d="M16.3531 45.9917L40.882 21.4628V43.4366H45.9922V12.7755H15.3311V17.8857H37.3049L12.776 42.4146L16.3531 45.9917Z" />
								</g>
								</svg>
							</span>
							</h2>
						</div>
					</div>
				</div>

				<div className="row">
					{whatWeDoList.map((item, index) => (
						<div
							key={index}
							className="col-12 col-lg-4 col-md-6"
							data-aos="fade" >
							<div className={cx('whatWeDoCard')}>
								<div className={cx('whatWeDoCardInner')}>
									<div className={cx('whatWeDoCardIcon')}>
										{item.icon && (
										<div
											className={cx('whatWeDoCardIconBox')}
											data-aos="zoom-in"
											data-aos-delay="1000"
											data-aos-offset="0"
										>
											<img src={item.icon.node.sourceUrl} alt={item.icon.node.altText} />
										</div>
										)}

										{item.iconPattern && (
										<div className={cx(['whatWeDoCardIconPattern'])} dangerouslySetInnerHTML={{ __html: item.iconPattern ?? '' }} />
										)}
									</div>
									<div className={cx('whatWeDoCardText')}>
										{item.title && <h3 className={cx(['heading_h4'])} dangerouslySetInnerHTML={{ __html: stripPTags(item.title ?? '') }} />}
										{item.description && <div dangerouslySetInnerHTML={{ __html: item.description ?? '' }} />}

									</div>
								</div>
							</div>
						</div>
					))}
				</div>

			</Container>
		</section>
	);
}

