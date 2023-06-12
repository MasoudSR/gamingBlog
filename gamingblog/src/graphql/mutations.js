import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
	mutation postComment($name: String!, $description: String!, $email: String!, $slug: String!) {
		createComment(data: { name: $name, description: $description, email: $email, post: { connect: { slug: $slug } } }) {
			id
		}
	}
`;

export { SEND_COMMENT };
