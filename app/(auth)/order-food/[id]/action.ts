'use server';

import { createServerClient } from 'lib/supabase';
import { redirect } from 'next/navigation';

export const getChildDetails = async (id: number) => {
	const supabase = createServerClient();

	const { data, error } = await supabase
		.from('children')
		.select()
		.eq('id', id);

	if (error) redirect(`/order-food/${id}?error=${error}`);

	return data[0];
};

export const orderFood = async (formData: FormData) => {
	const supabase = createServerClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) redirect('/login');

	const data = {
		item: formData.get('item') as string,
		price: 80 as number,
		parent_email: user?.email as string,
		child_name: formData.get('child_name') as string,
		child_id: formData.get('child_id') as string,
	};

	const { error } = await supabase.from('orders').insert(data);

	if (error) redirect(`/order-food?error=${error}`);

	//@ts-ignore
	const { error: nextError } = await supabase.from('children').update({order_complete: true}).eq('id', parseInt(formData.get('child_id')))

	if (nextError) redirect(`/order-food?error=${nextError}`);

	redirect('/dashboard');
};
