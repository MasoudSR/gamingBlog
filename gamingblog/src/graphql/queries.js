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

export { GET_ARTICLES };
