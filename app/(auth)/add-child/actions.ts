"use server";

import { createServerClient } from 'lib/supabase';
import { redirect } from 'next/navigation';

export const getInstitutions = async () => {
    const supabase = createServerClient();

    const { data, error } = await supabase.from("institutions").select();

    if (error) redirect(`/add-child?error=${error}`);

    return data;
};

export const createChild = async (formData: FormData) => {
    const supabase = createServerClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) redirect("/login");

    const data = {
        name: formData.get("name") as string,
        order_complete: false,
        institute: formData.get("institute") as string,
        parent_email: user?.email as string,
        student_id: formData.get("student_id") as string,
    };

    const { error } = await supabase.from("children").insert(data);

    if (error) redirect(`/add-child?error=${error}`);

    redirect("/dashboard");
};
