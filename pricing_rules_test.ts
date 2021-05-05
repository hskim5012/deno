import { getThresholdPrices } from './pricing_rules.ts';
import { assertEquals } from 'https://deno.land/std@0.95.0/testing/asserts.ts';

Deno.test('threshold for affiliate ID 5', () => {
  const price = getThresholdPrices(5);

  assertEquals(price, 40);
});
