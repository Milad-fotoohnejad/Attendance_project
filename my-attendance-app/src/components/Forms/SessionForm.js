// src/components/SessionForm.js
import React, { useState } from "react";

export default function SessionForm() {
    const [formData, setFormData] = useState({
        className: "",
        classNumber: "",
        sessionNumber: "",
        schoolName: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log("Form submitted:", formData);
    };

    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-center">
                    <div className="w-full lg:w-12/12 mt-12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full rounded-lg bg-blueGray-200 shadow-2xl">
                            <div className="text-center w-full mt-5">
                                <h6 className="text-blueGray-600 text-md mb-3 font-normal">
                                    Please fill out this session's information
                                </h6>
                            </div>
                            <hr className="my-4 border-blueGray-300" />
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form onSubmit={handleSubmit}>
                                    <div className="relative w-full mb-3">
                                        {/* this should be a dropdown button to let the user choose */}
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="className"
                                        >
                                            Class Name
                                        </label>
                                        <input
                                            type="text"
                                            name="className"
                                            className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="e.g. Math 101"
                                            value={formData.className}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="classNumber"
                                        >
                                            Class Number
                                        </label>
                                        <input
                                            type="number"
                                            name="classNumber"
                                            className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="e.g. 101"
                                            value={formData.classNumber}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="sessionNumber"
                                        >
                                            This sessions is the
                                        </label>
                                        <input
                                            type="number"
                                            name="sessionNumber"
                                            className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="e.g. 3rd session"
                                            value={formData.sessionNumber}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="schoolName"
                                        >
                                            School Name
                                        </label>
                                        <input
                                            type="text"
                                            name="schoolName"
                                            className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="e.g. VCC College"
                                            value={formData.schoolName}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white hover:text-emerald-200 text-md font-normal px-6 py-3 rounded shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Generate QR Code
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
