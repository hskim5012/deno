import { assertStringIncludes } from 'https://deno.land/std@0.95.0/testing/asserts.ts';

// Deno.test('My simple string', () => {
//   const msg = 'Deno is awesome!';
//   assertStringInlcudes(msg, 'awesome');
// });

Deno.test({
    name: 'My simple string',
    fn: () => {
        const msg = 'Deno is awesome';
        assertStringIncludes(msg, 'awesome');
    },
    ignore: false,
    only: false,
    sanitizeOps: true,
    sanitizeResources: true
});