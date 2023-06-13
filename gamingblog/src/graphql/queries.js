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

const GET_ARTICLE = gql`
	query getArticle($slug: String!) {
		post(where: { slug: $slug }) {
			author {
				image {
					url
				}
				name
				slug
			}
			title
			image {
				url
			}
			content {
				html
			}
			comments {
				... on Comment {
					name
					createdAt
					description
					id
				}
			}
		}
	}
`;

const GET_AUTHOR = gql`
	query getAuthor($slug: String!) {
		author(where: { slug: $slug }) {
			bio {
				html
			}
			image {
				url
			}
			name
			posts {
				image {
					url
				}
				slug
				title
			}
		}
	}
`;

export { GET_ARTICLES, GET_AUTHORS, GET_ARTICLE, GET_AUTHOR };
