import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-12 md:px-20 lg:px-32">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        <p className="text-gray-600">
          By using our services, you agree to these terms. Please read carefully before using our website.
        </p>
      </header>

      {/* Content */}
      <main className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Use of Services</h2>
          <p className="text-gray-700">
            You agree to use our services lawfully and not for any prohibited purposes, including illegal activities or violating rights of others.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. User Accounts</h2>
          <p className="text-gray-700">
            If you create an account, you are responsible for maintaining its confidentiality and for all activities under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
          <p className="text-gray-700">
            All content, logos, and materials are owned by us and protected under intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p className="text-gray-700">
            We are not liable for any direct or indirect damages arising from your use of our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Modifications</h2>
          <p className="text-gray-700">
            We may update these Terms at any time. Your continued use of our website constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p className="text-gray-700">
            Questions about these Terms? Reach out at 
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

export default Terms;
