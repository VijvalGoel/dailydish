import Input from 'components/Input';

import { Link } from '@nextui-org/react';

import { createChild, getInstitutions } from './actions';

const AddChild = async () => {
    const institutionList = await getInstitutions();

    return (
        <>
            <div className="py-36 px-96">
                <div className="w-full p-4 mb-2 bg-white rounded-lg">
                    <div className="flex flex-col justify-center w-full p-8">
                        <div className="font-bold text-2xl w-full flex justify-center mb-8">
                            Add Child Details
                        </div>
                        <form className="flex flex-col justify-center w-full">
                            <Input
                                placeholder="Enter Name"
                                type="string"
                                name="name"
                            />
                            <Input
                                placeholder="Enter Student Id"
                                type="string"
                                name="student_id"
                            />
                            <select
                                className="p-2 mb-4 border border-gray-200 rounded-lg h-10"
                                name="institute"
                                defaultValue="Select an Institute"
                            >
                                <option
                                    key="-1"
                                    value="Select an Institute"
                                    disabled
                                >
                                    Select an Institute
                                </option>
                                {institutionList?.map((institute, i) => (
                                    <option
                                        key={i}
                                        value={institute.name}
                                        id={institute.id}
                                    >
                                        {institute.name}
                                    </option>
                                ))}
                            </select>
                            <div className="w-full flex justify-evenly gap-8 mt-4">
                                <Link
                                    className="bg-red-500 rounded-lg text-black h-12 px-8"
                                    href="/dashboard"
                                >
                                    Cancel
                                </Link>
                                <button
                                    className="bg-[#F6CD55] rounded-lg h-12 px-8 hover:bg-[#ffdb70]"
                                    formAction={createChild}
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

export default AddChild;
