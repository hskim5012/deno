import { Application, Router, Status } from 'https://deno.land/x/oak@v7.0.0/mod.ts';
import * as log from 'https://deno.land/std@0.95.0/log/mod.ts';
import { Product } from './product.ts';

const productsJson = await Deno.readTextFile('affiliate_products.json');
const productsArray = JSON.parse(productsJson) as Product[];

const router = new Router();

router
  .get('/products', (context: any) => {
    context.response.body = JSON.stringify(productsArray, null, '     ');
    log.info('Returning all products');
  })
  .get('/products/:id', (context: any) => {
    const requestProduct = productsArray.find(
      (p) => p.productID == context.params.id
    );
    if (requestProduct) {
      context.response.body = JSON.stringify(requestProduct, null, '    ');
      log.info(`Returning product: ${requestProduct.name}.`)
    }
    else {
        context.response.status =  Status.NotFound;
        log.error(`Requested product ID ${context.params.id} not found.`);
    }
  });

const app = new Application();
app.use(router.routes());

log.info('Listening for requests...');

await app.listen({ port: 8000 });
