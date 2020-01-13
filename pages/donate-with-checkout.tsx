import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

import CheckoutForm from "../components/CheckoutForm";

import StripeProvider from "../components/StripeProvider";

const DonatePage: React.FunctionComponent = () => {
  return (
    <Layout title="Donate with Checkout | Next.js + TypeScript Example">
      <h1>Donate with Checkout</h1>
      <p>Donate to our project 💖</p>
      <StripeProvider>
        <CheckoutForm />
      </StripeProvider>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default DonatePage;
