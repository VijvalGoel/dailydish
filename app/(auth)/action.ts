'use server';

import { createServerClient } from 'lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const signout = async () => {
	const supabase = createServerClient();

	const { error } = await supabase.auth.signOut();

	if (error) redirect(`/register?error=${error}`);

	revalidatePath('/', 'layout');
	redirect('/login');
};
