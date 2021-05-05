import { Product } from './product.ts';
import { getDataURL } from 'https://raw.githubusercontent.com/hskim5012/deno/master/affiliate_data.ts?token=AKOTDFT5JZFGRK22SOETB6TASLBW4';

const affiliateID: number = parseInt(Deno.args[0]);

const data_url: string = getDataURL(affiliateID);

const response = await fetch(data_url); //from Deno not in JS

const data = (await response.json()) as Product[];

const affiliate_products: Product[] = new Array<Product>();

data.forEach((product) => {
  if (product.price > 40) {
    product.affiliateID = affiliateID;
    affiliate_products.push(product);
  }
});

Deno.writeTextFile(
  'affiliate_products.json',
  JSON.stringify(affiliate_products, null, '     ')
);
