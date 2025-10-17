import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  console.log(products);

  return (
    <div>
            <section className="rounded bg-neutral-100 py-8 sm:py-12">
              <div className="div">
                <div className="div">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Welcome to Arvo!
                    </h2>
                    <p> 
                        Creating and delivering high quality digital products for you.
                    </p>
                  </div>
              </div>
            </section>
    </div>
  );
}
