const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // 2
    feed: (root, args, context, info) => {
      return context.prisma.links();
    }
    // link: (parent, args) => {
    //   // console.log("WHAT ARE THE ARGUMENTS?", args);
    //   let match = {};
    //   links.map(link => {
    //     if (link.id === args.id) {
    //       match = link;
    //       return link;
    //     } else {
    //       return link;
    //     }
    //   });
    //   return match;
    // }
  },
  // 3
  Mutation: {
    // 2
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description
      });
    }
    // updateLink: (parent, args) => {
    //   // console.log("WHAT ARE THE ARGUMENTS?", args);
    //   let newLink = {};
    //   const newLinks = links.map(link => {
    //     if (link.id === args.id) {
    //       link.description = args.description;
    //       link.url = args.url;
    //       newLink = link;
    //       return newLink;
    //     }
    //     return link;
    //   });
    //   links = newLinks;
    //   // console.log("WHAT IS LINK?", newLink);
    //   // console.log(newLinks);
    //   return newLink;
    // },
    // deleteLink: (parent, args) => {
    //   let deletedLink = {};
    //   links.map(link => {
    //     if (link.id === args.id) {
    //       deletedLink = link;
    //       return link;
    //     } else {
    //       return link;
    //     }
    //   });
    //   const newLinks = links.filter(link => link.id !== args.id);
    //   console.log(newLinks);
    //   return deletedLink;
    // }
  }
};

const server = new GraphQLServer({
  typeDefs: `./src/schema.graphql`,
  resolvers,
  context: { prisma }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
