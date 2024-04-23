import { cookies } from 'next/headers';

import { createServerClient } from '@supabase/ssr';

import type { CookieOptions } from '@supabase/ssr';

const createClient = () => {
	const cookieStore = cookies();

	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return cookieStore.get(name)?.value;
				},
				set(name: string, value: string, options: CookieOptions) {
					try {
						cookieStore.set({ name, value, ...options });
					} catch (err) {
						// TODO
					}
				},
				remove(name: string, options: CookieOptions) {
					try {
						cookieStore.set({ name, value: '', ...options });
					} catch (err) {
						// TODO
					}
				},
			},
		}
	);
};

export default createClient;
