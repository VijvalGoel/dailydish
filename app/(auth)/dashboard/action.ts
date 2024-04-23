'use server';

import { createServerClient } from 'lib/supabase';
import { redirect } from 'next/navigation';

export const getOrderList = async () => {
	const supabase = createServerClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	try {
		const { data, error } = await supabase
			.from('orders')
			.select()
			.eq('parent_email', user?.email?.toString())
			.limit(5);

		if (error)
			console.error(`Error trying to fetch orders. Error: ${error}`);
		if (data) return data;
	} catch (err) {
		console.error(`Error trying to fetch orders. Error: ${err}`);
	}

	return null;
};

export const getChildrenList = async () => {
	const supabase = createServerClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	try {
		const { data, error } = await supabase
			.from('children')
			.select()
			.eq('parent_email', user?.email?.toString());

		if (error)
			console.error(`Error trying to fetch children. Error: ${error}`);
		if (data) return data;
	} catch (err) {
		console.error(`Error trying to fetch children. Error: ${err}`);
	}

	return null;
};

export const deleteChild = async (id: number) => {
	const supabase = createServerClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { error } = await supabase
		.from('children')
		.delete()
		.eq('parent_email', user?.email)
		.eq('id', id);

	if (error) redirect(`/dashboard?error=${error}`);

	redirect('/dashboard');
};
