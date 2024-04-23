import type { ReactNode } from 'react';
import { createServerClient } from 'lib/supabase';
import { redirect } from 'next/navigation';

export default async function ProtectedLayout({
	children,
}: {
	children: ReactNode;
}) {
	const supabase = createServerClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}

	return <>{children}</>;
}
