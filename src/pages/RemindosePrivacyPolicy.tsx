import { Link } from "react-router-dom";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

const RemindosePrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Remindose - Privacy Policy
        </h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <p className="text-sm text-gray-500">Effective Date: January 17, 2025</p>
          <p className="text-sm text-gray-500">Last Updated: January 17, 2025</p>
          
          <section className="space-y-4">
            <p className="text-gray-700">
              This Privacy Policy governs the use of the <strong>Remindose</strong> mobile application ("App") developed and published by <strong>Zebra Labs OOD</strong> ("we," "our," "us," or the "Developer").
            </p>
            
            <p className="text-gray-700">
              <strong>Your Privacy is Our Priority:</strong> Remindose is designed as a completely offline, privacy-first medication reminder app. All your data stays on your device - we never collect, access, or transmit your personal health information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">1. App Overview</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700"><strong>App Name:</strong> Remindose</p>
              <p className="text-gray-700"><strong>Developer:</strong> Zebra Labs OOD</p>
              <p className="text-gray-700"><strong>Category:</strong> Health & Fitness</p>
              <p className="text-gray-700"><strong>Data Storage:</strong> Local device only (SQLite database)</p>
              <p className="text-gray-700"><strong>Internet Required:</strong> No - works completely offline</p>
              <p className="text-gray-700"><strong>User Accounts:</strong> Not required - no sign-up needed</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">2. What Information is Stored</h2>
            <p className="text-gray-700">
              Remindose stores the following information <strong>exclusively on your device</strong> in a local SQLite database:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Medication Data:</strong> Names, dosages, and schedules for your medications</li>
              <li><strong>Reminder Settings:</strong> Times and frequencies for medication notifications</li>
              <li><strong>Tracking Records:</strong> When medications are marked as taken or skipped</li>
              <li><strong>Weight Tracking:</strong> Optional weight measurements and goals if you use this feature</li>
              <li><strong>App Preferences:</strong> Theme settings (light/dark mode) and display preferences</li>
            </ul>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-4">
              <p className="text-green-900 font-medium">✓ All data is stored locally on your device</p>
              <p className="text-green-900 font-medium">✓ No data is sent to any servers or cloud services</p>
              <p className="text-green-900 font-medium">✓ We have zero access to your information</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">3. App Permissions</h2>
            <p className="text-gray-700">
              Remindose only requests the minimal permissions necessary:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Notifications:</strong> To send medication reminders at your scheduled times</li>
              <li><strong>Local Storage:</strong> To save your data in the app's private database</li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
              <p className="text-blue-900 font-medium">The app does NOT use or request:</p>
              <ul className="list-disc pl-6 mt-2 text-blue-900">
                <li>Internet or network access for data syncing</li>
                <li>Calendar access</li>
                <li>Location services</li>
                <li>Camera or photo library</li>
                <li>Contacts or phone access</li>
                <li>Any cloud storage services</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">4. Data Security</h2>
            <p className="text-gray-700">
              Your data security is ensured through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Storage in a local SQLite database within the app's sandboxed storage area</li>
              <li>Protection by your device's security features (PIN, biometric lock, etc.)</li>
              <li>No network communication means no risk of data interception</li>
              <li>Complete data isolation - each app installation has its own separate database</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">5. Data Sharing</h2>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-900 font-medium">
                Your data never leaves your device. We cannot access, view, share, or sell your information because it never reaches us.
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              Remindose operates completely offline without:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Server communication or cloud storage</li>
              <li>Analytics or crash reporting services</li>
              <li>Advertising networks or marketing tools</li>
              <li>Third-party SDKs that collect data</li>
              <li>User accounts or authentication systems</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">6. Your Control Over Data</h2>
            <p className="text-gray-700">
              You have complete control over your data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>View:</strong> Access all your data directly in the app</li>
              <li><strong>Edit:</strong> Modify any medication or tracking information at any time</li>
              <li><strong>Delete:</strong> Remove individual entries or clear all data</li>
              <li><strong>Export:</strong> Create JSON backups of your data for personal use</li>
              <li><strong>Import:</strong> Restore data from previous exports</li>
              <li><strong>Complete Removal:</strong> Uninstalling the app permanently deletes all data</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">7. Data Backup and Export</h2>
            <p className="text-gray-700">
              Remindose provides local backup options:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Export your data as a JSON file to your device</li>
              <li>Import previously exported data to restore your medications</li>
              <li>Share export files through your device's sharing options (you control where it goes)</li>
              <li>All backup operations are performed locally without internet</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">8. Children's Privacy</h2>
            <p className="text-gray-700">
              Remindose can be used by anyone to manage medication schedules. Since the app stores all data locally 
              on the device and doesn't collect or transmit any information, there are no special privacy concerns 
              for users of any age. Parents or guardians can safely use the app to manage family medication schedules.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">9. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy if the app's functionality changes significantly. The current version 
              will always be available at this URL. The "Last Updated" date indicates the most recent revision.
            </p>
            <p className="text-gray-700 mt-4">
              Since Remindose doesn't collect any data or connect to the internet, policy updates would only be 
              needed if we add new features that change how data is handled.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">10. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy or the Remindose app, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4 border border-gray-200">
              <p className="font-semibold text-gray-900">Zebra Labs OOD</p>
              <p className="text-gray-700">Email: <ObfuscatedEmail user="support" domain="zebralabs.org" /></p>
              <p className="text-gray-700">Privacy Inquiries: <ObfuscatedEmail user="privacy" domain="zebralabs.org" /></p>
            </div>
          </section>

          <section className="space-y-4 border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-500">
              By using Remindose, you acknowledge that you have read and understood this Privacy Policy. 
              Your privacy is protected by design - your health information never leaves your device.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RemindosePrivacyPolicy;