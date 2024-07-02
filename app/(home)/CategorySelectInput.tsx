import NumberBadge from "@/components/NumberBadge";

export default function CategorySelect() {
    return (
        <div>
            <div >
                Choose a category:
            </div>
            <div className="relative mt-2 rounded-lg shadow-sm h-16">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <NumberBadge num={2} />
                </div>
                <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    className="block rounded-full outline-none border-0  w-full h-full py-3 pl-14 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Click to choose a legal category"
                />
            </div>
        </div>
    );
}