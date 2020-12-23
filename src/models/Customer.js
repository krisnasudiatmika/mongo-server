import mongoose from "mongoose";

export const Customer = mongoose.model("customers", {
    name: String,
    contact: String,
    email: String,
    phone: String,
    position: String,
    cell: String,
    fax: String,
    website: String,
    language: String,
    paymentname: String,
    paymentposition: String,
    paymentemail: String,
    paymentphone: String, 
    paymentsupplier: String,
    paymentdiscount: String,
    companyname : String,
    address: String,
    city: String,
    state: String,
    country: String,
    postal: String


});