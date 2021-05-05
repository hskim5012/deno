import { Product } from './product.ts';
import { getDataURL, getThresholdPrices } from './deps.ts'; 

const affiliateID: number = parseInt(Deno.args[0]);

const data_url: string = getDataURL(affiliateID);

const response = await fetch(data_url); //from Deno not in JS

const data = (await response.json()) as Product[];

const affiliate_products: Product[] = new Array<Product>();

const threshold_price: number = getThresholdPrices(affiliateID);

data.forEach((product) => {
  if (product.price > threshold_price) {
    product.affiliateID = affiliateID;
    affiliate_products.push(product);
  }
});

Deno.writeTextFile(
  'affiliate_products.json',
  JSON.stringify(affiliate_products, null, '     ')
);
