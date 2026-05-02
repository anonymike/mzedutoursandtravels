import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Cookie Policy | Mzedu Tours & Travels",
  description: "Cookie Policy for Mzedu Tours & Travels - Learn about the cookies we use on our website",
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-white/90">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and understanding how you use our
              site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mzedu Tours & Travels uses cookies for the following purposes:
            </p>

            <h3 className="font-semibold text-lg text-foreground mb-3">Essential Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These cookies are necessary for our website to function properly. They enable basic features like page
              navigation, secure areas access, and remembering your cookie consent preference.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Session management</li>
              <li>Security features</li>
              <li>Cookie consent tracking</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">Analytics Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use analytics cookies to understand how visitors interact with our website. This helps us improve our
              services and user experience.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Page views and visit duration</li>
              <li>Traffic sources and user navigation patterns</li>
              <li>Device and browser information</li>
              <li>Popular content and features</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">Functional Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These cookies allow our website to remember your choices and provide enhanced features.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Language preferences</li>
              <li>Region or location settings</li>
              <li>Previously submitted form information</li>
              <li>User interface customization</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">Marketing Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With your consent, we may use marketing cookies to show you relevant advertisements and measure the
              effectiveness of our marketing campaigns.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Personalized advertising</li>
              <li>Social media integration</li>
              <li>Campaign performance tracking</li>
              <li>Retargeting purposes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may allow trusted third-party services to set cookies on our website for analytics and marketing
              purposes. These third parties include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Google Analytics (for website analytics)</li>
              <li>Social media platforms (Facebook, Instagram, Twitter)</li>
              <li>Payment processors (for secure transactions)</li>
              <li>Advertising networks</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Cookie Duration</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Cookies can be either:</p>

            <h3 className="font-semibold text-lg text-foreground mb-3">Session Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Temporary cookies that expire when you close your browser. They help us maintain your session and remember
              what you've added to your booking.
            </p>

            <h3 className="font-semibold text-lg text-foreground mb-3">Persistent Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies remain on your device for a set period (ranging from hours to years) and activate each time
              you visit our website. They help us recognize you as a returning visitor.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences
              through:
            </p>

            <h3 className="font-semibold text-lg text-foreground mb-3">Browser Settings</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can set your browser to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete cookies when you close your browser</li>
              <li>Alert you when a website tries to set a cookie</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">Cookie Consent Banner</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you first visit our website, you'll see a cookie consent banner. You can choose to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Accept all cookies</li>
              <li>Decline non-essential cookies</li>
              <li>Customize your cookie preferences</li>
            </ul>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-6">
              <p className="text-sm text-muted-foreground mb-2">
                <strong className="text-foreground">Important Note:</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Blocking or deleting cookies may impact your experience on our website. Some features may not work
                properly, and you may need to re-enter information when you visit.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Browser-Specific Cookie Controls</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here's how to manage cookies in popular browsers:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Google Chrome</h4>
                <p className="text-sm text-muted-foreground">
                  Settings → Privacy and security → Cookies and other site data
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Mozilla Firefox</h4>
                <p className="text-sm text-muted-foreground">Settings → Privacy & Security → Cookies and Site Data</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Safari</h4>
                <p className="text-sm text-muted-foreground">Preferences → Privacy → Cookies and website data</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Microsoft Edge</h4>
                <p className="text-sm text-muted-foreground">
                  Settings → Cookies and site permissions → Cookies and data stored
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Do Not Track Signals</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some browsers have a "Do Not Track" feature that signals to websites that you don't want to be tracked.
              Currently, there is no industry standard for responding to these signals. We respect your privacy choices
              and encourage you to use our cookie consent tools to manage your preferences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Changes to This Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our
              business operations. We will notify you of any significant changes by posting the updated policy on our
              website with a new "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">More Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For more information about how we handle your personal data, please read our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions or concerns about our use of cookies, please contact us:
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <p className="text-foreground font-semibold mb-2">Mzedu Tours & Travels</p>
              <p className="text-muted-foreground mb-1">Voi, Taita Taveta, Kenya</p>
              <p className="text-muted-foreground mb-1">Phone: +254 723 471 093 / +254 722 705 824</p>
              <p className="text-muted-foreground">Email: info@mzedutours.com</p>
            </div>
          </section>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-12">
            <p className="text-sm text-muted-foreground text-center">
              By continuing to use our website, you acknowledge that you have read and understood this Cookie Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
