import  { Product } from './product.ts';

const affiliateID: number = parseInt(Deno.args[0]);

const data_url: string =
  'https://gist.githubusercontent.com/hskim5012/5b04730d4a56a3d212eb88d92053514a/raw/7dde4326c926a76fb3948d6d585ecf4a2473df18/products.json';

const response = await fetch(data_url); //from Deno not in JS

const data = await response.json() as Product[];

const affiliate_products: Product[] = new Array<Product>();

data.forEach(product => {
    if(product.price > 40) {
        product.affiliateID = affiliateID;
        affiliate_products.push(product);
    }
});

Deno.writeTextFile('affiliate_products.json', JSON.stringify(affiliate_products, null, '     '));