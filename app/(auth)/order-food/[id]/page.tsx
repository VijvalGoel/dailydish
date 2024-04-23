//@ts-nocheck

import { Link } from '@nextui-org/react';

import { getChildDetails, orderFood } from './action';

const OrderFood = async ({ params: { id } }) => {
    const { name } = await getChildDetails(parseInt(id));

    return (
        <>
            <div className="py-48 px-96">
                <div className="w-full p-4 mb-2 bg-white rounded-lg">
                    <div className="flex flex-col w-full my-8 px-4">
                        <div className="font-bold text-4xl text-center w-full">
                            Order Food
                        </div>
                        <form className="w-full">
                            <input
                                type="hidden"
                                name="child_name"
                                value={name}
                            />
                            <input
                                type="hidden"
                                name="child_id"
                                value={parseInt(id)}
                            />
                            <div className="w-full flex justify-center h-16 my-8 p-2">
                                <select name="item" className="rounded-lg p-4">
                                    <option selected disabled>
                                        Select a Food Item
                                    </option>
                                    <option value="Kadai Panner + 4 Roti + Salad + Papad">
                                        Kadai Panner + 4 Roti + Salad + Papad
                                    </option>
                                    <option value="Capsicum Masala + 4 Roti + Salad">
                                        Capsicum Masala + 4 Roti + Salad
                                    </option>
                                    <option value="Aloo Gobhi + 4 Roti + Curd">
                                        Aloo Gobhi + 4 Roti + Curd
                                    </option>
                                    <option value="Chicken Korma + 4 Roti + Salad + Papad">
                                        Chicken Korma + 4 Roti + Salad + Papad
                                    </option>
                                    <option value="Butter Chicken + 4 Roti + Salad">
                                        Butter Chicken + 4 Roti + Salad
                                    </option>
                                    <option value="Chicken Tikka Masala + 4 Roti + Salad">
                                        Chicken Tikka Masala + 4 Roti + Salad
                                    </option>
                                </select>
                            </div>
                            <div className="w-full flex justify-evenly gap-8 mt-4">
                                <Link
                                    className="bg-red-500 rounded-lg text-black h-12 px-8"
                                    href="/dashboard"
                                >
                                    Cancel
                                </Link>
                                <button
                                    formAction={orderFood}
                                    className="bg-[#F6CD55] rounded-lg h-12 px-8 hover:bg-[#ffdb70]"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-12 font-bold">
                <div>DailyDish</div>
                <div>©2024 Daily Dish.| Privacy Policy</div>
            </div>
        </>
    );
};

export default OrderFood;
