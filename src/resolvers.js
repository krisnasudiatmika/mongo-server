import {
  Customer
} from "./models/Customer";

export const resolvers = {
  Query: {
    hello: () => "hi",
    customers: () => Customer.find()
  },
  Mutation: {
    createCustomer: async (_, {
      name,
      contact,
      email,
      phone,
      position,
      cell,
      fax,
      website,
      language,
      paymentname,
      paymentposition,
      paymentemail,
      paymentphone,
      paymentsupplier,
      paymentdiscount,
      companyname,
      address,
      city,
      state,
      country,
      postal
    }) => {
      const person = new Customer({
        name,
        contact,
        email,
        phone,
        position,
        cell,
        fax,
        website,
        language,
        paymentname,
        paymentposition,
        paymentemail,
        paymentphone,
        paymentsupplier,
        paymentdiscount,
        companyname,
        address,
        city,
        state,
        country,
        postal
      });
      await person.save();
      return person;
    }
  }
};