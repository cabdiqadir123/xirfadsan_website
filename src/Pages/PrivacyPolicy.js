import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">Effective Date: September 6, 2025</p>
        </header>

        {/* Privacy Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Privacy Policy</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Xirfadsan (“we,” “our,” or “us”) respects your privacy. This Privacy
              Policy explains how we collect, use, and protect your information
              when you use our mobile application <strong>Xirfadsan</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">1. Information We Collect</h3>
            <ul className="list-disc pl-6">
              <li>Name, email, phone number, address, and gender (required for profile setup).</li>
              <li>Optional profile image. If no image is uploaded, a default icon is used.</li>
              <li>Device token for notifications (if enabled).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700">2. How We Use Your Information</h3>
            <ul className="list-disc pl-6">
              <li>Create and manage your user profile.</li>
              <li>Provide and improve services in the app.</li>
              <li>Send important notifications (if you allow).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700">3. Data Storage and Security</h3>
            <p>
              Your data is processed through our backend at{" "}
              <span className="font-mono text-gray-800">https://back-end-for-xirfadsan.onrender.com/</span>
              and securely stored in a MySQL database hosted on Railway. All data
              transmission uses <strong>HTTPS encryption</strong>. We do not sell or
              share your data with third parties.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">4. User Rights</h3>
            <ul className="list-disc pl-6">
              <li>Access and update your information.</li>
              <li>Request deletion of your account and personal data.</li>
              <li>Disable notifications anytime in your device settings.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700">5. Children’s Privacy</h3>
            <p>
              Our services are not directed to children under 13. We do not
              knowingly collect data from children.
            </p>
          </div>
        </section>

        {/* Terms of Service */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Terms of Service</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <h3 className="text-xl font-semibold text-gray-700">1. Use of the App</h3>
            <p>
              You must provide accurate information when creating your profile.
              You may not misuse the app for fraudulent, harmful, or illegal
              activities.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">2. User Content</h3>
            <p>
              You are responsible for any images or information you upload. Do
              not upload harmful, offensive, or illegal content. We may remove
              inappropriate content at our discretion.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">3. Notifications</h3>
            <p>
              If you enable notifications, we may send service updates. You can
              turn them off at any time in your device settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">4. Account Security</h3>
            <p>
              You are responsible for keeping your login credentials secure. We
              are not responsible for unauthorized access caused by negligence.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">5. Limitation of Liability</h3>
            <p>
              While we work hard to provide a secure and reliable app, we do not
              guarantee uninterrupted or error-free operation. We are not liable
              for damages resulting from misuse or technical issues.
            </p>

            <h3 className="text-xl font-semibold text-gray-700">6. Contact</h3>
            <p>
              For any questions or to request data deletion, please contact us at:{" "}
              <span className="font-mono text-gray-800">[info@xirfadsan.com]</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
