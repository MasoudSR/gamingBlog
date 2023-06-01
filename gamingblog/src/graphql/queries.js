import { gql } from "@apollo/client";

const GET_ARTICLES = gql`
	query {
		posts {
			slug
			title
			image {
				url
			}
			author {
				name
			}
		}
	}
`;

const GET_AUTHORS = gql`
	query {
		authors {
			image {
				url
			}
			name
			slug
		}
	}
`;

export { GET_ARTICLES, GET_AUTHORS };
