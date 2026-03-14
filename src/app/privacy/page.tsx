import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Oogyy",
  description: "Privacy Policy for the Oogyy travel app and website.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)] bg-[var(--background)]">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
            <Image
              src="/images/oogyy_wordmark.png"
              alt="Oogyy"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex gap-6 text-sm font-medium text-[var(--muted)]">
            <Link href="/" className="transition hover:text-[var(--foreground)]">
              Home
            </Link>
            <Link href="/terms" className="transition hover:text-[var(--foreground)]">
              Terms
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display mb-8 text-4xl font-bold tracking-tight text-[var(--foreground)]">
          Privacy Policy
        </h1>
        <p className="mb-12 text-sm text-[var(--muted)]">
          Last Updated: 28 Feb, 2024
        </p>

        <div className="prose prose-lg max-w-none text-[var(--muted)]">
          <p className="mb-6 leading-relaxed">
            Oogyy.com (hereinafter referred to as the &apos;Application Software&apos;) is designed and developed, owned, managed and operated by Oogyy (hereinafter referred to as the &apos;Company&apos;). The Company is committed to the protection of the User&apos;s privacy by ensuring a safe and secure online transaction of the User with the Company, subject to the Terms and Conditions.
          </p>
          <p className="mb-6 leading-relaxed">
            The Company may collect from the User any personal or such other information including without limitation name, contact number and address, email id and government id details at the time of User&apos;s registration with the Company. The Company may also collect certain primary information from the User if the User intends to browse the Application Software. The prime objective of collecting such information from the User is to facilitate efficient, customized and uninterrupted Services, and to solve any disputes if arises in relation to the Application Software or Services or any aspects related to the Company and to assist the Users in any troubleshoot situations. This Privacy Policy shall be applicable to all existing and former viewers and/ Users of the Application Software.
          </p>
          <p className="mb-6 leading-relaxed">
            This Privacy Policy helps the User/s in identifying the nature of the information that the Company collects from such User and thereby assists the User in making informed decisions in accessing the Application Software and also in utilizing the Services facilitated by the Company. The User herein warrants to provide true, accurate, appropriate, current, updated and complete information for the purpose of accessing the Application Software and in utilizing the Services facilitated by the Company.
          </p>
          <p className="mb-10 font-semibold text-[var(--foreground)]">
            All Users are advised to read through and to understand this Privacy Policy prior to accessing and/ in utilizing the Services facilitated by the Company on the Application Software. The User is also required to cooperate with the Company in ensuring the accuracy and appropriateness of such information provided by the User on the Application Software.
          </p>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            1. Definitions
          </h2>
          <ol className="mb-8 list-decimal space-y-2 pl-6">
            <li>Any capitalized terms in this Privacy Policy shall have the same meaning given to them in the Terms and Conditions unless and otherwise the context requires, that shall be defined accordingly in this Privacy Policy.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            2. Interpretations
          </h2>
          <ol className="mb-8 list-decimal space-y-3 pl-6">
            <li>Any reference to the Terms and Conditions in this Privacy Policy shall mean and include the terms and conditions of the Application Software determined, designed and drafted by the Company and same is made available to the User on the Application Software.</li>
            <li>Any reference to the Privacy Policy herein shall mean and include entire terms of this Privacy Policy without any exceptions of any nature.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            3. The User&apos;s Consent
          </h2>
          <ol className="mb-8 list-decimal space-y-2 pl-6">
            <li>By viewing, accessing the Application Software and/ by utilizing the Services facilitated by the Company on the Application Software, the User hereby accepts and consents the Company to collect, record and process any and all information required by the Company.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            4. Registration and modifications to the information
          </h2>
          <ol className="mb-8 list-decimal space-y-3 pl-6">
            <li>The User is required to provide such information whether personal information or properties details, as the case may be at the time of User&apos;s registration on the Application Software or during the User&apos;s mere browse of the Application Software. (For more details on registration kindly refer to the Terms and Conditions made available on the Application Software.)</li>
            <li>The Company upon verification of the personal and such other information provided by the User on the Application Software reserves the right to reject or block and/ disable the account of the User, if the User is already a registered User of the Application Software. Additionally, the Company, upon verification of the personal and other information provided by the User on the Application Software, reserves the right to reject, block, disable, or delete the User&apos;s account if the User engages in any illegal activity or violates the platform&apos;s policies.</li>
            <li>The User must accept the Terms and Conditions of the Application Software in order to register his/her account on the Application Software.</li>
            <li>The Users may modify any information provided by him/her on the Application Software in order to update/modify such information in line with the current, accurate and true information by logging in to their respective account on the Application Software.</li>
            <li>In any case, the User has forgotten the password of his/her account or otherwise unable to log in to the Application Software by using such password, the User is given an opportunity to reset the password and thereby to access the account effectively by clicking on the &apos;Forgot Password&apos; link on the Application Software.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            5. Type of Information collected by the Company
          </h2>
          <p className="mb-4 font-medium text-[var(--foreground)]">
            From time to time, the Company may collect and store such information provided hereunder from the User:
          </p>
          <ol className="mb-8 list-decimal space-y-3 pl-6">
            <li>In order to view the Services facilitated by the Company on the Application Software, like any other websites, the User is required to provide such basic information whether personal or such other information demanded by the Company on the Application Software.</li>
            <li>When the User visits and/ or utilizes the Services facilitated by the Company on the Application Software, the User is required to provide such personal information like name, contact number, email id, government id details, a password upon the registration of the User&apos;s account on the Application Software, etc. The User may be required to provide additional information if the User chooses to provide feedback on the Application Software with regard to his/her use of the Application Software or the Services.</li>
            <li>The Company may collect and retain the contact number/ email id of the User and also the content of the messages if the User corresponds with the Company via communication address made available to the User on the Application Software in that regard.</li>
            <li>If the User communicates with any other registered Users of the Application Software through the communication medium on the Application Software, the Company may retain such contents of the conversation, including the email ids of the Users.</li>
            <li>When the User registers on the Application Software, the User shall create a profile incorporating therein the details as mentioned in the profile creation form, and any other related aspects. This information, in whole or in part, shall generally be visible on the Application Software to other registered Users and viewers of the Application Software.</li>
            <li>From time to time the User is required to verify all the information provided by him/her on the Application Software and the User is also required to update the same.</li>
            <li>The Application Software uses standard technology called &apos;cookies&apos; and &apos;server logs&apos; in recognizing, identifying and collecting the manner in which the User makes use of the Application Software. Such cookies and server logs collect information including without limitation date and time of visits, time spent on the Application Software, pages and websites viewed before and after the use of the Application Software by the User.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            6. Protection to the information provided by the User
          </h2>
          <ol className="mb-8 list-decimal space-y-3 pl-6">
            <li>The Company takes reasonable efforts in placing adequate protection to the information provided by the User.</li>
            <li>The Company for the purpose as mentioned herein above shall use industrial measures and standards by employing highest degree of encryption and security measures to protect the information provided by the User in order to keep such information confidential, safe and secure.</li>
            <li>Despite extending such safeguards to the personal information of the User against any unauthorized disclosures or utilization by anybody, the Company does not undertake to guarantee the User to extend absolute protection for the same. Any and all disclosure or unauthorized utilization of User&apos;s personal information, beyond the reasonable control of the Company, the Company shall not assume any liability of whatsoever nature.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            7. The Company&apos;s Use of the User&apos;s information
          </h2>
          <ol className="mb-8 list-decimal space-y-3 pl-6">
            <li>The Company may use the information provided by User for the purpose of facilitating Services to the User in accordance with the User&apos;s need and requirements.</li>
            <li>The Company may use the information provided by User on the Application Software in the collation of the information possessed/developed by the Company for the purpose of advertising, promoting and marketing the Application Software and/ the Company.</li>
            <li>The Company may use the information provided by User on the Application Software for the purpose of controlling, managing, measuring the performance of the Application Software and in expanding the business activities of the Company.</li>
            <li>The Company may use User&apos;s information to protect its own interest, Application Software, or any other registered User&apos;s interest or any third-party interest.</li>
            <li>The Company may use the information provided by the User on the Application Software to notify the User with regard to any modifications/changes made to the Application Software, Services facilitated by the Company, any new services made available to the User on the Application Software and any offers presented by the Company to the User or any amendment/variations/modifications made to the Terms and Conditions or this Privacy Policy.</li>
            <li>The employees, any representative/appointee of the Company, or any third-party service provider or vendors may access and utilize the information provided by the User, in order to offer a quality service to the User in accordance with the User&apos;s need and requirements.</li>
            <li>The Company disclaims to assume any liability for any unauthorized use of any contents or materials of User&apos;s information provided by the User on the Application Software by anybody, otherwise than directly by the Company which has been proved beyond doubts by the User.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            8. Sharing with the third parties the information provided by the User
          </h2>
          <ol className="mb-8 list-decimal space-y-3 pl-6">
            <li>The Company has entered into the agreement with the third-party service provider (including payment gateway service provider, statutory bodies, and financial institutions) to facilitate an effective, customized and uninterrupted Services to the User in accordance with the User&apos;s need and requirements. Such third-party service provider may have direct access to the information provided by User or they may be entrusted with such required information by the Company in order to discharge the obligations of their appointment. By registering and utilizing the Services facilitated by the Company, the User hereby expressly grant the third-party service provider with the access and utilization of the User&apos;s information.</li>
            <li>Other than third-party service provider expressly mentioned either in the Terms and Conditions or Privacy Policy, the Company may enter into any arrangements with any third party, now or in the future for the purpose of presenting to the User with different or additional services, whether such services are in connection with the Services facilitated by the Company or not. Such a third party may also be given access to the User&apos;s personal information such as name, contact number, email id and other details. Such a third-party may also contact the User via the communication address made available to them for providing information about their products or services.</li>
            <li>The Company may permit certain third-party advertisements on the Application Software. The Terms and Conditions and Privacy Policy of the Application Software shall not be applicable to such third party advertisements, and as soon as the User clicks on such advertisement/website and thereby leaves the Application Software shall be bound by the terms and conditions and privacy policy of such third party website. The Company shall assume no liability for any loss, damage or expense incurred by the User due to the User&apos;s access of such third-party website.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            9. Compulsory Disclosure
          </h2>
          <ol className="mb-8 list-decimal space-y-3 pl-6">
            <li>
              The Company may have to disclose any personal information provided by User on the Application Software to the appropriate authority in order:
              <ol className="mt-2 list-decimal space-y-1 pl-6">
                <li>to comply with any rules, regulations, enactments, law and any amendments to the same or</li>
                <li>to protect and defend their rights or interest and Intellectual Property Rights of the Application Software;</li>
                <li>to protect the safety and interest of any registered Users or any third-party service provider.</li>
              </ol>
            </li>
            <li>The Company may provide any information of the User to any judicial, governmental or any such authority who shall have the authorization to call upon the Company to provide the same. In such circumstances, the Company may disclose such information required for and demanded by the appropriate authority.</li>
            <li>No prior authorization of the User of any kind shall be taken by the Company for the purpose of the disclosure as mentioned above.</li>
            <li>The Company shall provide to the appropriate authority the personal information of the User on an as is basis that is available to the Company on the Application Software. The Company shall neither assume any liability nor shall indemnify the User in case of any loss, damage or expenses incurred by the User due to the compulsory disclosure of User&apos;s personal information made by the Company.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            10. Updates via email, SMS or phone calls
          </h2>
          <ol className="mb-8 list-decimal space-y-3 pl-6">
            <li>The Company or any representative/appointee of the Company may contact the Users for the purpose of verifying the personal information provided by the User on the Application Software via emails, SMS or phone calls.</li>
            <li>The Company may also send updates/notifications about the existing or new Services (including advertisements and other promotional materials) to the User via email, SMS or phone calls if in the opinion of the Company such updates are of any interest to User.</li>
            <li>The Company may contact the User via phone, SMS or email for delivering certain updates for the Services or information regarding the Services requested by the User.</li>
            <li>The User may opt-out from receiving such notifications by emailing the same to the email address provided in that regard by the Company or through such other means of communication as determined by the Company from time to time.</li>
            <li>Any and all conversations along with the content or materials of the communications taken place between the Company and the User shall be maintained by the Company in the strictest confidence and the Company shall not in any manner disclose such information to anybody or otherwise shall be made available in the public domain.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            11. Incomplete or interrupted information
          </h2>
          <ol className="mb-8 list-decimal space-y-3 pl-6">
            <li>Sometimes for any reasons whatsoever, the User may receive certain incomplete or interrupted information about the Services or the Company itself on the Application Software.</li>
            <li>The User hereby acknowledges and agrees that the Company shall not be liable or be responsible to indemnify the User in case any loss or damage incurred by the User by acting on such incomplete or interrupted information provided on the Application Software.</li>
            <li>The Company may take reasonable actions to rectify such interrupted services.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            12. Modifications or Amendments
          </h2>
          <ol className="mb-8 list-decimal space-y-3 pl-6">
            <li>The Company reserves the right to bring about modification or amendment to this Privacy Policy, any time, without obtaining any authorization from the User.</li>
            <li>Any modifications or amendments made to this Privacy Policy shall be made available to the User on the Application Software for User&apos;s perusal. The User shall be bound by all the provisions of the Privacy Policy mentioned herein along with such amended or otherwise varied Privacy Policy.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            13. Prohibited Acts
          </h2>
          <ol className="mb-8 list-decimal space-y-3 pl-6">
            <li>The User shall not provide any information on the Application Software including but without limitation that is unnecessary or not demanded by the Company, or such information which contains any spam, obscene, prohibited, harmful, threatening, or which are in violation of any applicable law.</li>
            <li>The Company reserves the right to delete any and all information provided by the User if in the opinion of the Company is not in accordance with the Terms and Conditions and Privacy Policy of the Application Software.</li>
            <li>The Company may also report to the appropriate authority in case any act of the User seems to be detrimental to the interest of any other Users of the Application Software or is in violation of any rules, regulation or law.</li>
          </ol>

          <h2 className="font-display mt-12 mb-4 text-xl font-semibold text-[var(--foreground)]">
            14. Contact Information
          </h2>
          <ol className="mb-8 list-decimal space-y-2 pl-6">
            <li>All complaints about the services to be sent by email to &quot;support@oogyy.com&quot; and all suggestion may be emailed to &quot;suggestions@oogyy.com&quot;.</li>
          </ol>
        </div>

        <div className="mt-12 flex gap-6 border-t border-[var(--border)] pt-8">
          <Link
            href="/terms"
            className="font-medium text-[var(--primary)] transition hover:underline"
          >
            ← Terms of Service
          </Link>
          <Link
            href="/"
            className="font-medium text-[var(--primary)] transition hover:underline"
          >
            Back to Home →
          </Link>
        </div>
      </main>
    </div>
  );
}
