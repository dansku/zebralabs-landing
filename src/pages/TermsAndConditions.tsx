import { Link } from "react-router-dom";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Terms and Conditions
        </h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-sm text-gray-500">Effective Date: January 1, 2025</p>
          <p className="text-sm text-gray-500">Last Updated: January 1, 2025</p>
          
          <section className="space-y-4">
            <p className="text-gray-700">
              Welcome to Zebra Labs OOD's mobile applications and services. These Terms and Conditions ("Terms") govern your use of our mobile applications, websites, and related services (collectively, the "Services") provided by Zebra Labs OOD ("we," "our," or "us").
            </p>
            
            <p className="text-gray-700">
              By downloading, installing, accessing, or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing or using our Services, you represent that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You are at least 13 years old (or 16 in the EEA)</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>Your use of the Services complies with all applicable laws and regulations</li>
              <li>If using the Services on behalf of an organization, you have authority to bind that organization to these Terms</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">2. Account Registration</h2>
            
            <h3 className="text-xl font-semibold text-gray-800">2.1 Account Creation</h3>
            <p className="text-gray-700">
              To access certain features of our Services, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800">2.2 Account Termination</h3>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent or illegal activities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">3. License to Use Services</h2>
            
            <h3 className="text-xl font-semibold text-gray-800">3.1 Grant of License</h3>
            <p className="text-gray-700">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Download and install our mobile applications on devices you own or control</li>
              <li>Access and use the Services for personal, non-commercial purposes</li>
              <li>Use the Services in accordance with their intended functionality</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800">3.2 License Restrictions</h3>
            <p className="text-gray-700">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Copy, modify, or create derivative works of the Services</li>
              <li>Reverse engineer, decompile, or disassemble the Services</li>
              <li>Sell, rent, lease, sublicense, or distribute the Services</li>
              <li>Remove or alter any proprietary notices or labels</li>
              <li>Use the Services for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Attempt to gain unauthorized access to any portion of the Services</li>
              <li>Use automated systems or software to extract data from the Services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">4. User Content</h2>
            
            <h3 className="text-xl font-semibold text-gray-800">4.1 Your Content</h3>
            <p className="text-gray-700">
              You retain ownership of any content you submit, post, or display through the Services ("User Content"). By providing User Content, you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable license to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use, reproduce, modify, adapt, publish, and display your User Content</li>
              <li>Distribute your User Content in connection with the Services</li>
              <li>Incorporate your User Content into other works</li>
              <li>Sublicense these rights to third parties as necessary to operate the Services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800">4.2 Content Standards</h3>
            <p className="text-gray-700">You agree that your User Content will not:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Violate any law or regulation</li>
              <li>Infringe any third-party rights, including intellectual property rights</li>
              <li>Contain harmful, offensive, or inappropriate material</li>
              <li>Include malware, viruses, or malicious code</li>
              <li>Constitute spam, advertising, or promotional material</li>
              <li>Impersonate any person or entity</li>
              <li>Contain false or misleading information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800">4.3 Content Removal</h3>
            <p className="text-gray-700">
              We reserve the right to remove or disable access to any User Content that violates these Terms or is otherwise objectionable, without prior notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">5. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-gray-800">5.1 Our Rights</h3>
            <p className="text-gray-700">
              The Services and all associated content, features, and functionality (including but not limited to software, text, displays, images, video, audio, design, selection, and arrangement) are owned by Zebra Labs OOD, its licensors, or other providers and are protected by intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">5.2 Trademarks</h3>
            <p className="text-gray-700">
              Our name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Zebra Labs OOD. You may not use such marks without our prior written permission.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">5.3 Copyright Infringement</h3>
            <p className="text-gray-700">
              If you believe that any content on our Services infringes your copyright, please contact us at legal@zebralabs.org with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Description of the copyrighted work</li>
              <li>Location of the allegedly infringing material</li>
              <li>Your contact information</li>
              <li>Statement of good faith belief</li>
              <li>Statement of accuracy and authorization</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">6. Privacy</h2>
            <p className="text-gray-700">
              Your use of our Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">7. Purchases and Payments</h2>
            
            <h3 className="text-xl font-semibold text-gray-800">7.1 In-App Purchases</h3>
            <p className="text-gray-700">
              Our Services may offer in-app purchases. By making a purchase, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Pay all applicable fees and taxes</li>
              <li>Provide accurate payment information</li>
              <li>Authorize us to charge your payment method</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800">7.2 Subscriptions</h3>
            <p className="text-gray-700">
              If you purchase a subscription:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Subscriptions automatically renew unless canceled before the renewal date</li>
              <li>You can manage subscriptions through your app store account settings</li>
              <li>No refunds for partial subscription periods</li>
              <li>Price changes will be notified in advance</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800">7.3 Refund Policy</h3>
            <p className="text-gray-700">
              All purchases are final and non-refundable, except as required by applicable law or as stated in the app store's refund policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">8. Third-Party Services</h2>
            <p className="text-gray-700">
              Our Services may contain links to or integrate with third-party websites, services, or content. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The availability or accuracy of third-party services</li>
              <li>The content, products, or services offered by third parties</li>
              <li>Your interactions with third-party services</li>
              <li>The privacy practices of third parties</li>
            </ul>
            <p className="text-gray-700">
              Your use of third-party services is governed by their respective terms and policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">9. Disclaimers</h2>
            
            <h3 className="text-xl font-semibold text-gray-800">9.1 As-Is Basis</h3>
            <p className="text-gray-700 uppercase font-semibold">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">9.2 No Guarantee</h3>
            <p className="text-gray-700">
              We do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The Services will be uninterrupted, secure, or error-free</li>
              <li>Defects will be corrected</li>
              <li>The Services are free of viruses or harmful components</li>
              <li>The results obtained from using the Services will be accurate or reliable</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">10. Limitation of Liability</h2>
            <p className="text-gray-700 uppercase font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ZEBRA LABS OOD, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR SUPPLIERS BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
              <li>LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES</li>
              <li>DAMAGES RESULTING FROM YOUR USE OR INABILITY TO USE THE SERVICES</li>
              <li>DAMAGES RESULTING FROM ANY THIRD-PARTY SERVICES OR CONTENT</li>
              <li>DAMAGES RESULTING FROM UNAUTHORIZED ACCESS TO YOUR ACCOUNT</li>
            </ul>
            <p className="text-gray-700">
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">11. Indemnification</h2>
            <p className="text-gray-700">
              You agree to defend, indemnify, and hold harmless Zebra Labs OOD, its affiliates, and their respective officers, directors, employees, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Your violation of these Terms</li>
              <li>Your use of the Services</li>
              <li>Your User Content</li>
              <li>Your violation of any third-party rights</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">12. Governing Law and Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-800">12.1 Governing Law</h3>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of Bulgaria and the European Union, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">12.2 Dispute Resolution</h3>
            <p className="text-gray-700">
              Any disputes arising out of or relating to these Terms or the Services shall be resolved through:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Good faith negotiations between the parties</li>
              <li>If negotiations fail, binding arbitration in accordance with the rules of the Bulgarian Chamber of Commerce and Industry</li>
              <li>The arbitration shall take place in Sofia, Bulgaria</li>
              <li>The language of arbitration shall be English</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800">12.3 Exceptions</h3>
            <p className="text-gray-700">
              Notwithstanding the above, either party may seek injunctive or other equitable relief in any court of competent jurisdiction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">13. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Posting the updated Terms in the Services</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending notice through the app or via email for material changes</li>
            </ul>
            <p className="text-gray-700">
              Your continued use of the Services after changes become effective constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">14. General Provisions</h2>
            
            <h3 className="text-xl font-semibold text-gray-800">14.1 Entire Agreement</h3>
            <p className="text-gray-700">
              These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and Zebra Labs OOD regarding the Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">14.2 Severability</h3>
            <p className="text-gray-700">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">14.3 Waiver</h3>
            <p className="text-gray-700">
              No waiver of any term or condition shall be deemed a further or continuing waiver of such term or any other term.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">14.4 Assignment</h3>
            <p className="text-gray-700">
              You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations without restriction.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">14.5 Force Majeure</h3>
            <p className="text-gray-700">
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">15. App Store Additional Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-800">15.1 Apple App Store</h3>
            <p className="text-gray-700">If you download our app from the Apple App Store:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>These Terms are between you and Zebra Labs OOD only, not Apple</li>
              <li>Apple has no obligation to provide maintenance or support services</li>
              <li>Apple is not responsible for any product warranties</li>
              <li>Apple is not responsible for addressing any claims relating to the app</li>
              <li>Apple is a third-party beneficiary of these Terms</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800">15.2 Google Play Store</h3>
            <p className="text-gray-700">If you download our app from Google Play Store:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You must comply with Google Play's Terms of Service</li>
              <li>These Terms do not override Google's terms</li>
              <li>Google is not responsible for the app or these Terms</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">16. Contact Information</h2>
            <p className="text-gray-700">If you have any questions about these Terms, please contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4 border border-gray-200">
              <p className="font-semibold text-gray-900">Zebra Labs OOD</p>
              <p className="text-gray-700">Email: <ObfuscatedEmail user="legal" domain="zebralabs.org" /></p>
              <p className="text-gray-700">Support: <ObfuscatedEmail user="support" domain="zebralabs.org" /></p>
            </div>
          </section>

          <section className="space-y-4 border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-500">
              By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;