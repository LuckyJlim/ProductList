import { promises as fsp } from 'fs';
import app from './app';
import { sequelize } from './database';
import { Product } from './models/products';

const { PORT = 13002 } = process.env;

const seedProducts = async (json: Array<any>): Promise<number> => {
  await Product.bulkCreate(
    json.map(p => {
      const { product_name: name, description, price, product_image: imageUrl } = p;
      return {
        name,
        description,
        price,
        imageUrl,
      };
    }),
    { logging: false },
  );
  return json.length;
};

const seedProductsFromFile = async () => {
  const count = await Product.count();
  if (count !== 0) return;
  const json = JSON.parse(await fsp.readFile('../products.json', 'utf8'));
  const numberOfProducts = await seedProducts(json);
  console.log('Seeded', numberOfProducts, 'of products');
};

Promise.resolve()
  .then(async () => {
    await sequelize.sync();
    await seedProductsFromFile();
    app.listen(PORT, () => console.log('Listening on port', PORT));
  })
  .catch(console.error);
