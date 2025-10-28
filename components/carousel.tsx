import Stripe from "stripe";
import { Card } from "@/components/ui/card";

interface Props {
    products: Stripe.Product
}

export const Carousel = ({products}: Props) => {
    return <Card>

    </Card>;
}