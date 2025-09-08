import React from "react";

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">Effective Date: September 6, 2025</p>
        </header>

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
              <span className="font-mono text-gray-800">[info@Xirfadsan.com]</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Terms;
