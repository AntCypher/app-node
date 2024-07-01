import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import { Container, NavigationMenu, SkipNavigationLink } from '../../components';
import styles from './Header.module.scss';

let cx = classNames.bind(styles);

export default function Header({
  title = 'Headless by WP Engine',
  description,
  menuItems,
  headerLogo,
  ctaButton,
}) {
    const [isNavShown, setIsNavShown] = useState(false);

    const imageUrl = headerLogo?.node?.mediaItemUrl ?? headerLogo?.node?.sourceUrl ?? '';
    const imageAlt = headerLogo?.node?.altText ?? '';


    return (


    <header className="main-header">
		<div className="header-inner">
			<Container>
				<div className="row no-gutters headerRow">
					<div className={cx(['header-logo'])}>
                        <a href="/" className="custom-logo-link">
                            
                        </a>
                        <Link href="/" passHref>
                            <a className={cx(['custom-logo-link'])}>
                                <img className="custom-logo" src={imageUrl} alt={imageAlt} />
                            </a>
                        </Link>
                    </div>

                    <div className="header-right">

                        <NavigationMenu
                        className={cx(['main-navigation','hidden-md-down', isNavShown ? 'show' : undefined])}
                        menuItems={menuItems}
                        />

                        {ctaButton ? (
                        <div className={cx(['header-cta'])}>
                            <Link href={ctaButton.url} passHref>
                                <a className={cx(['btn btn-primary-transparent'])} target={ctaButton.target}>
                                {ctaButton.title}
                                </a>
                            </Link>
                        </div>
                        ) : null}
                    </div>
				</div>
            </Container>
		</div>
	</header>

  );
}
