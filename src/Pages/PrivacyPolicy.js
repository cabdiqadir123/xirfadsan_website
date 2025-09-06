import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-12 md:px-20 lg:px-32">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600">
          Your privacy is important to us. This page explains how we collect, use, and protect your information.
        </p>
      </header>

      {/* Content */}
      <main className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="text-gray-700">
            We may collect information you provide directly, such as name, email, and contact details, 
            as well as information automatically collected like IP address and usage data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p className="text-gray-700">
            Your information helps us improve our services, communicate with you, personalize your experience, 
            and ensure compliance with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Data Security</h2>
          <p className="text-gray-700">
            We implement reasonable security measures to protect your data. 
            However, no method of transmission over the internet is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Sharing With Third Parties</h2>
          <p className="text-gray-700">
            We may share your information with trusted service providers to operate our services. 
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
          <p className="text-gray-700">
            You may request access to, correction, or deletion of your personal data at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy occasionally. All changes will be posted on this page with the effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about this Privacy Policy, contact us at 
            <a href="mailto:support@example.com" className="text-blue-600 ml-1">support@example.com</a>.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          &larr; Back to Home
        </Link>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
