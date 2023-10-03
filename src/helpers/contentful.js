import { createClient } from 'contentful';
import ContentTypes from '@Constants/ContentTypes';

const {
  REACT_APP_CONTENTFUL_SPACE_ID,
  REACT_APP_CONTENTFUL_ACCESS_TOKEN,
} = process.env;

const client = createClient({
  space: REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export async function getSocialMediaHandles() {
  const response = await client.getEntries({
    content_type: ContentTypes.socialMedia,
    order: 'sys.createdAt',
  });
  return response.items;
}
