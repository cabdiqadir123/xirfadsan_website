import React from "react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">Effective Date: September 10, 2025</p>
        </header>

        {/* Privacy Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Privacy Policy</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Xirfadsan respects your privacy. This Privacy
              Policy explains how we collect, use, and protect your information
              when you use our mobile application <strong>Xirfadsan</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">1. Information We Collect</h3>
            <ul className="list-disc pl-6">
              <li>Name, email address, phone number, address, and gender (required for profile).</li>
              <li>Optional profile image. If no image is uploaded, a default icon will be used.</li>
              <li>Device token for notifications (if enabled).</li>
              <li>Email and phone number used for sending OTP verification codes.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700">2. How We Use Your Information</h3>
            <ul className="list-disc pl-6">
              <li>Create and manage your user profile.</li>
              <li>Provide and improve services in the app.</li>
              <li>Send important notifications (if you allow).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700">OTP Verification</h3>
            <p>
              For security purposes, Xirfadsan may send One-Time Passwords (OTPs) to your email or phone. 
              Email OTPs are sent via our internal system using <strong>Nodemailer</strong>, 
              and phone OTPs are sent using a third-party service for delivery. 
              These OTPs are valid for a short period and are <strong>not stored permanently</strong> on our servers. 
              The service only processes your email or phone number to deliver the OTP and does not access any other personal information.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">3. Payment Information</h3>
            <p>
              Payments in Xirfadsan are processed through Horumud’s USSD service.
              The app <strong>does not collect or store your PIN or card information</strong>.
              Your device initiates the payment, and we only receive the transaction status
              (successful or cancelled) via the Horumud API to confirm your payment.
              No sensitive payment data is stored on our servers.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">4. Data Storage and Security</h3>
            <p>
              Your data is processed through our backend at{" "}
              <span className="font-mono text-gray-800">Render </span>
              and securely stored in a MySQL database hosted on Railway. All data
              transmission uses <strong>HTTPS encryption</strong>. We do not sell or
              share your data with third parties, except for OTP delivery via a third-party service 
              for phone OTPs and payment verification through Horumud, as described above.
            </p>
            <p>
              OTP codes and sensitive authentication data are temporary and not stored permanently.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">5. User Rights</h3>
            <ul className="list-disc pl-6">
              <li>Access and update your information.</li>
              <li>Request deletion of your account and personal data.</li>
              <li>Disable notifications anytime in your device settings.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
