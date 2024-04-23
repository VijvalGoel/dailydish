'use server';

import { createServerClient } from 'lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const login = async (formData: FormData) => {
	const supabase = createServerClient();

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) redirect(`/login?error=${error}`);

	revalidatePath('/', 'layout');
	redirect('/dashboard');
};
