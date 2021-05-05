export function getDataURL(affiliateID: number): string {
  let data_url: string = '';

  switch (affiliateID) {
    case 5:
      data_url =
        'https://gist.githubusercontent.com/hskim5012/5b04730d4a56a3d212eb88d92053514a/raw/7dde4326c926a76fb3948d6d585ecf4a2473df18/products.json';
  }

  return data_url;
}
