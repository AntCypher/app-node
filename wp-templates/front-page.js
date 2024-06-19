import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import { ThemeInfoFragment } from '../fragments/ThemeSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  NavigationMenu,
  Hero,
  SEO,
} from '../components';

import {
  BannerSection,
  CounterSection,
  WhatWeDoSection,
} from '../flexible-fields';


export default function Component(props) {

  if (props.loading) {
    return <>Loading...</>;
  }

  

  const { title: siteTitle, description: siteDescription } = props?.data?.generalSettings || {};
  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];
  const page = props?.data?.page ?? { title: '', content: '', featuredImage: null };
  const { title, content, featuredImage } = page;

  // const { globalPageSections } = props?.data?.page?.globalPageSections;

  const globalPageSections = props?.data?.page?.template?.globalPageSections?.globalPageSections ?? [];

  const { themeSettings } = props?.data;
  const headerSettings = themeSettings?.headerSettings;
  const headerLogo = headerSettings?.headerLogo;
  const ctaButton = headerSettings?.ctaButton;


  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
        ctaButton={ctaButton}
        headerLogo={headerLogo}
      />

      {/* Your existing code */}
    {globalPageSections.map((section, index) => {
      switch (section.__typename) {
        case 'GlobalPageSectionsGlobalPageSectionsBannerSectionLayout':
          return (
            <BannerSection
              key={index}
              sectionData={section}
            />
          );
        case 'GlobalPageSectionsGlobalPageSectionsCounterSectionLayout':
          return (
            <CounterSection
              key={index}
              sectionData={section}
            />
          );
        case 'GlobalPageSectionsGlobalPageSectionsWhatWeDoSectionLayout':
          return (
            <WhatWeDoSection
              key={index}
              sectionData={section}
            />
          );
        default:
          return null;
      }
    })}

      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${ThemeInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }

      template {
        ... on DefaultTemplate {
          globalPageSections {
            globalPageSections {
              ... on GlobalPageSectionsGlobalPageSectionsBannerSectionLayout {
                bannerDescription
                bannerTitle
                sectionId
                sectionClass
                bannerButton {
                  target
                  title
                  url
                }
                bannerImage {
                  node {
                    altText
                    sourceUrl
                    mediaItemUrl
                  }
                }
                bannerList {
                  text
                }
              }
              ... on GlobalPageSectionsGlobalPageSectionsCounterSectionLayout {
                sectionClass
                sectionId
              }
              ... on GlobalPageSectionsGlobalPageSectionsWhatWeDoSectionLayout {
                sectionClass
                sectionId
              }
            }
          }
        }
      }

    }
    generalSettings {
      ...BlogInfoFragment
    }
    
    themeSettings {
      ...ThemeInfoFragment
    }

    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
