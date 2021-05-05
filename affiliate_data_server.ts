import { Application, Router } from 'https://deno.land/x/oak@v7.0.0/mod.ts';
import { Product } from './product.ts';

const productsJson = await Deno.readTextFile('affiliate_products.json');
const productsArray = JSON.parse(productsJson) as Product[];

const router = new Router();

router
  .get('/products', (context: any) => {
    context.response.body = JSON.stringify(productsArray, null, '     ');
  })
  .get('/products/:id', (context: any) => {
    const requestProduct = productsArray.find(
      (p) => p.productID == context.params.id
    );
    context.response.body = JSON.stringify(requestProduct, null, '    ');
  });

const app = new Application();
app.use(router.routes());

console.log('Listening for requests...');

await app.listen({ port: 8000 });
