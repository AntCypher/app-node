import { gql } from '@apollo/client';

export const ThemeInfoFragment = gql`
    fragment ThemeInfoFragment on ThemeSettings {
      headerSettings {
        headerLogo {
          node {
            altText
            mediaItemUrl
            uri
            sourceUrl
          }
        }
        ctaButton {
          target
          title
          url
        }
      }
    }
`;
