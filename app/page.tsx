import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button} from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

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
                        Welcome to Arvo! The Best E-Commerence Site. 
                    </h2>
                    <p> 
                        Creating and delivering high quality digital products for you.
                    </p>
                    <Button 
                    asChild
                    variant="default"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
                    >
                      <Link href="/products" className="inline-flex items-center justify-center rounded-full px-6 py-3">See Products</Link>
                    </Button>
                  </div>
                <Image src={products.data[0].images[0]} alt="Hero Image" width={450} height={450} />
              </div>
            </section>
            <section>
              <Carousel />
            </section>
    </div>
  );
}
