'use server';

import { createServerClient } from 'lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const signup = async (formData: FormData) => {
	const supabase = createServerClient();

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		options: {
			data: {
				name: formData.get('name') as string,
			},
		},
	};

	// if (
	// 	!(
	// 		(formData.get('password') as string) ===
	// 		(formData.get('confirm-password') as string)
	// 	)
	// )
	// 	redirect(`/register?error=password-mismatch`);

	const { error } = await supabase.auth.signUp(data);

	if (error) redirect(`/register?error=${error}`);

	revalidatePath('/', 'layout');
	redirect('/');
};
