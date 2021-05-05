import { getDataURL } from './affiliate_data.ts';
import { assertMatch } from 'https://deno.land/std@0.95.0/testing/asserts.ts';

Deno.test({
    name: 'request uses HTTPS',
    fn: () => {
        const url = getDataURL(5);
        assertMatch(url, /https/);
    },
    // only: true
});