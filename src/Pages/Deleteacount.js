import React from 'react'
import blogimg from '../assets/images/Frame 34849.png'
import frame7 from '../assets/images/frame image 7.png'
import frame8 from '../assets/images/frame image 8.png'

import Right from '../assets/icon/Right.png'
import { Link } from 'react-router-dom'
import { TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'
function Deleteacount() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
                {/* Header */}
                <div className="text-center border-b pb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Delete Account</h1>
                    <p className="mt-2 text-gray-600">
                        This page explains how you can delete your account in the{" "}
                        <span className="font-semibold">Xirfadsan Service</span> app.
                        Please read carefully before you continue.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        How to delete your account
                    </h2>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                        <li>Open the <span className="font-medium">Xirfadsan app</span></li>
                        <li>Go to <span className="font-medium">Profile → Settings</span></li>
                        <li>Select <span className="font-medium">Delete Account</span></li>
                        <li>Confirm the deletion</li>
                    </ol>
                    <p className="mt-4 text-sm text-gray-600">
                        ⚠️ Once deleted, your account and all related data will be
                        permanently removed. Workers cannot delete their own accounts —
                        they are managed by the system administrator.
                    </p>
                </div>

                {/* Main Section */}
                <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
                    {/* Left side info */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            What will be deleted?
                        </h2>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>All Bookings</li>
                            <li>All Complaints</li>
                            <li>All Notifications</li>
                            <li>All Invoices</li>
                            <li>Subscriptions</li>
                        </ul>
                    </div>

                    {/* Right side warning */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h2 className="text-xl font-semibold text-red-600 mb-4">
                            Permanent Deletion
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Deleting your account will <span className="font-semibold">permanently remove</span>
                            your personal account and all related data from our system.
                            This action <span className="text-red-500 font-semibold">cannot be undone</span>.
                        </p>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-600">
                            <strong>Note:</strong> You can only delete your account inside the app
                            using the account settings.
                        </div>
                    </div>
                </div>

                {/* Contact info */}
                <div className="mt-8 text-center">
                    <p className="text-gray-700">
                        If you face issues deleting your account, please contact us at:
                    </p>
                    <a
                        href="mailto:support@xirfadsan.com"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        support@xirfadsan.com
                    </a>
                </div>
            </div>
        </div >
    );
}

export default Deleteacount