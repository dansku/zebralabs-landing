import { Link } from "react-router-dom";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">Effective Date: January 1, 2025</p>
          <p className="text-sm text-gray-400">Last Updated: January 1, 2025</p>
          
          <section className="space-y-4">
            <p>
              Zebra Labs OOD ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications and services (collectively, the "Services").
            </p>
            
            <p>
              Please read this Privacy Policy carefully. By using our Services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-cyan-400">1.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account Information: When you create an account, we collect your name, email address, and password.</li>
              <li>Profile Information: You may choose to provide additional information such as a profile picture or bio.</li>
              <li>Communications: When you contact us for support or feedback, we collect the information you provide.</li>
              <li>User Content: Any content you create, upload, or share through our Services.</li>
            </ul>

            <h3 className="text-xl font-semibold text-cyan-400">1.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device Information: Device type, operating system, unique device identifiers, and mobile network information.</li>
              <li>Usage Data: App features used, time spent in the app, crash data, and other diagnostic data.</li>
              <li>Location Information: With your permission, we may collect precise or approximate location data.</li>
              <li>Analytics: We use analytics tools to understand how users interact with our Services.</li>
            </ul>

            <h3 className="text-xl font-semibold text-cyan-400">1.3 Information from Third Parties</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Social Media: If you connect your social media accounts, we may receive information from those platforms.</li>
              <li>Third-Party Services: Information from payment processors, analytics providers, and advertising partners.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">2. How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, maintain, and improve our Services</li>
              <li>To personalize your experience and deliver content relevant to your interests</li>
              <li>To process transactions and send related information</li>
              <li>To send administrative information, updates, and security alerts</li>
              <li>To respond to your comments, questions, and provide customer support</li>
              <li>To monitor and analyze usage patterns and trends</li>
              <li>To detect, prevent, and address technical issues and fraud</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>For any other purpose with your consent</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">3. Information Sharing and Disclosure</h2>
            <p>We may share your information in the following situations:</p>
            
            <h3 className="text-xl font-semibold text-cyan-400">3.1 With Your Consent</h3>
            <p>We may share your information with your explicit consent.</p>

            <h3 className="text-xl font-semibold text-cyan-400">3.2 Service Providers</h3>
            <p>We may share information with third-party vendors who perform services on our behalf, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cloud storage providers</li>
              <li>Analytics services</li>
              <li>Customer support tools</li>
              <li>Payment processors</li>
              <li>Email delivery services</li>
            </ul>

            <h3 className="text-xl font-semibold text-cyan-400">3.3 Legal Requirements</h3>
            <p>We may disclose information if required by law or in response to valid legal requests.</p>

            <h3 className="text-xl font-semibold text-cyan-400">3.4 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred.</p>

            <h3 className="text-xl font-semibold text-cyan-400">3.5 Aggregated Information</h3>
            <p>We may share aggregated or de-identified information that cannot reasonably identify you.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">5. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our Services and fulfill the purposes outlined in this Privacy Policy. Retention periods may vary depending on the type of information and legal requirements. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">6. Your Rights and Choices</h2>
            
            <h3 className="text-xl font-semibold text-cyan-400">6.1 Access and Update</h3>
            <p>You can access and update your account information through the app settings.</p>

            <h3 className="text-xl font-semibold text-cyan-400">6.2 Delete Account</h3>
            <p>You can request deletion of your account by contacting us at privacy@zebralabs.org.</p>

            <h3 className="text-xl font-semibold text-cyan-400">6.3 Opt-Out</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Marketing Communications: You can opt-out of marketing emails by clicking the unsubscribe link.</li>
              <li>Push Notifications: You can disable push notifications in your device settings.</li>
              <li>Location Services: You can disable location permissions in your device settings.</li>
              <li>Analytics: You can opt-out of certain analytics through your device settings.</li>
            </ul>

            <h3 className="text-xl font-semibold text-cyan-400">6.4 Data Portability</h3>
            <p>You have the right to request a copy of your personal data in a structured, commonly used format.</p>

            <h3 className="text-xl font-semibold text-cyan-400">6.5 Do Not Track</h3>
            <p>Our Services do not currently respond to Do Not Track browser signals.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">7. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place for such transfers, including standard contractual clauses and data processing agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">8. Children's Privacy</h2>
            <p>
              Our Services are not intended for children under 13 years of age (or 16 in the EEA). We do not knowingly collect personal information from children under these ages. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">9. Third-Party Services</h2>
            <p>
              Our Services may contain links to third-party websites, services, or advertisements. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">10. Region-Specific Rights</h2>
            
            <h3 className="text-xl font-semibold text-cyan-400">10.1 European Economic Area (GDPR)</h3>
            <p>If you are in the EEA, you have additional rights under the General Data Protection Regulation:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>

            <h3 className="text-xl font-semibold text-cyan-400">10.2 California (CCPA/CPRA)</h3>
            <p>California residents have specific rights under the California Consumer Privacy Act:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination</li>
              <li>Right to correct inaccurate personal information</li>
              <li>Right to limit use of sensitive personal information</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">11. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. For material changes, we will provide additional notice through the app or via email.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mt-8">12. Contact Information</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="bg-gray-800 p-4 rounded-lg mt-4">
              <p className="font-semibold">Zebra Labs OOD</p>
              <p>Email: <ObfuscatedEmail user="privacy" domain="zebralabs.org" /></p>
              <p>Data Protection Officer: <ObfuscatedEmail user="dpo" domain="zebralabs.org" /></p>
            </div>
          </section>

          <section className="space-y-4 border-t border-gray-700 pt-6 mt-8">
            <p className="text-sm text-gray-400">
              By using our Services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;