import {
  gql
} from "apollo-server-express";

export const typeDefs = gql `
  type Query {
    hello: String!
    customers: [Customer!]!
  }

  type Customer {
    id: ID!
    name: String!
    contact: String!
    email: String!
    phone: String!
    position: String!
    cell: String!
    fax: String!
    website:String!
    language: String!
    paymentname: String!
    paymentposition: String!
    paymentemail: String!
    paymentphone: String!
    paymentsupplier: String!
    paymentdiscount: String!
    companyname: String!
    address: String!
    city: String!
    state: String!
    country: String!
    postal: String!


  }

  type Mutation {
    createCustomer(
      name: String!, 
      contact: String!, 
      email:String!, 
      phone: String!, 
      position: String!, 
      cell: String!, 
      fax: String!, 
      website:String!, 
      language:String!, 
      paymentname: String!
      paymentposition: String!,
      paymentemail: String!,
      paymentphone: String!, 
      paymentsupplier: String!,
      paymentdiscount: String!,
      companyname: String!,
      address: String!,
      city: String!,
      state: String!,
      country: String!,
      postal: String!
      
      ): Customer!
  }
`;