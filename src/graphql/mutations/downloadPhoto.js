import { gql, UserInputError } from 'apollo-server';

export const typeDefs = gql`
  extend type Mutation {
    """
    Downloads the photo which has the given id.
    """
    downloadPhoto(id: ID!): Boolean
  }
`;

export const resolvers = {
  Mutation: {
    downloadPhoto: async (obj, args, { models: { Photo } }) => {
      const photo = await Photo.query().findById(args.id);

      if (!photo) {
        throw new UserInputError(`Photo with id ${args.id} does not exist`);
      }

      await Photo.query()
        .where({ id: args.id })
        .increment('download_count', 1);

      return true;
    },
  },
};

export default {
  typeDefs,
  resolvers,
};