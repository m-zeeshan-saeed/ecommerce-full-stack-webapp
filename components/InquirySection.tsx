"use client"
import { useState } from 'react'
import SuccessAlert from "./successalert/SuccessAlert";

const InquirySection = () => {
    const [formData, setFormData] = useState({
        productName: '',
        quantity: '' as number | string,
        unit: 'Pcs',
        details: '',
    });
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const submissionData = {
                ...formData,
                quantity: Number(formData.quantity)
            };
            const response = await fetch('/api/inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });
            const data = await response.json();
            if (data.success) {
                alert("Quote sent successfully!");
                setFormData({
                    productName: '',
                    quantity: '',
                    unit: 'Pcs',
                    details: '',
                });
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div onSubmit={handleSubmit} className="w-full mx-auto ">

            <div className="relative rounded-lg overflow-hidden min-h-[420px] flex items-center shadow-lg">


                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/image 102.png')" }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600/90 to-blue-400/40" />
                </div>


                <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-top px-6 py-10 lg:px-12 gap-10">


                    <div className="text-white max-w-md space-y-4">
                        <div className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                            An easy way to send requests to all suppliers
                        </div>
                        <div className="text-blue-50 text-sm md:text-base opacity-90 leading-relaxed">
                            If you want it to sound more premium, more casual, or more sales-focused, tell me and I’ll refine it further.
                        </div>
                    </div>


                    <div className="w-full max-w-[490px] bg-white rounded-xl p-6 md:p-8 shadow-2xl backdrop-blur-sm bg-opacity-95 transform transition-all duration-300 hover:scale-[1.01]">
                        <div className="text-xl font-bold text-gray-900 mb-6">
                            Send quote to suppliers
                        </div>

                        <form className="space-y-4 text-gray-600">

                            <input
                                type="text"
                                value={formData.productName}
                                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                                placeholder="What item you need?"
                                className="w-full border text-gray-600 border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                            />


                            <textarea
                                value={formData.details}
                                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                placeholder="Type more details"
                                rows={3}
                                className="w-full border text-gray-600 border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none"
                            />


                            <div className="flex gap-3">
                                <input
                                    type="number"
                                    placeholder="Quantity"
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                    className="flex-1 border text-gray-600 border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                                <div className="relative min-w-[120px]">
                                    <select
                                        value={formData.unit}
                                        onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                                        className="w-full h-full border text-gray-600 border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                                    >
                                        <option>Pcs</option>
                                        <option>Kg</option>
                                        <option>Liters</option>
                                    </select>

                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>


                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg w-fit mt-2"
                            >
                                {loading ? "sending..." : "Send inquiry"}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InquirySection;
