import React from 'react'
import { withApollo } from '../../src/apollo'
import { Layout } from '../../components/PageLayout/Layout'
import Head from 'next/head'
import { Card, CardContent } from '@material-ui/core'

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - FinSharing.com</title>
      </Head>

      <Card>
        <CardContent>
          <section>
            <h1>Privacy Policy for FinSharing.com</h1>

            <div className="g-mb-15">
              <h3>1. Introduction</h3>

              <p>
                Welcome to <strong>FinSharing.com</strong>
              </p>

              <p>
                FinSharing.com (“us”, “we”, or “our”) operates https://finsharing.com (hereinafter referred to
                as
                “<strong>Service</strong>”).
              </p>

              <p>
                Our Privacy Policy governs your visit to https://finsharing.com, and explains how we
                collect, safeguard and disclose information that results from your use of our Service.
              </p>

              <p>
                We use your data to provide and improve Service. By using Service, you agree to the
                collection and use of information in accordance with this policy. Unless otherwise defined in
                this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our
                Terms and Conditions.
              </p>

              <p>
                Our Terms and Conditions (“<strong>Terms</strong>”) govern all use of our Service and together with the
                Privacy Policy constitutes your agreement with us (“<strong>agreement</strong>”).
              </p>
            </div>

            <div className="g-mb-15">
              <h3>2. Definitions</h3>

              <p>
                <strong>SERVICE</strong> means the https://finsharing.com website operated by FinSharing.com.
              </p>

              <p>
                <strong>PERSONAL DATA</strong> means data about a living individual who can be identified from those
                data
                (or
                from those and other information either in our possession or likely to come into our possession).
              </p>

              <p>
                <strong>USAGE DATA</strong> is data collected automatically either generated by the use of Service or
                from
                Service infrastructure itself (for example, the duration of a page visit).
              </p>

              <p>
                <strong>COOKIES</strong> are small files stored on your device (computer or mobile device).
              </p>

              <p>
                <strong>DATA CONTROLLER</strong> means a natural or legal person who (either alone or jointly or in
                common
                with other persons) determines the purposes for which and the manner in which any personal data are, or
                are
                to
                be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.
              </p>

              <p>
                <strong>DATA PROCESSORS (OR SERVICE PROVIDERS)</strong> means any natural or legal person who processes
                the
                data on behalf of the Data Controller. We may use the services of various Service Providers in order to
                process your data more effectively.
              </p>

              <p>
                <strong>DATA SUBJECT</strong> is any living individual who is the subject of Personal Data.
              </p>

              <p>
                <strong>THE USER</strong> is the individual using our Service. The User corresponds to the Data Subject,
                who
                is the subject of Personal Data.
              </p>
            </div>

            <div className="g-mb-15">
              <h3>3. Information Collection and Use</h3>

              <p>
                We collect several different types of information for various purposes to provide and improve our
                Service to
                you.
              </p>
            </div>

            <div className="g-mb-15">
              <h3>4. Types of Data Collected</h3>

              <p><strong>Personal Data</strong></p>

              <p>
                While using our Service, we may ask you to provide us with certain personally identifiable information
                that
                can be used to contact or identify you (“<strong>Personal Data</strong>”). Personally identifiable
                information
                may include, but is not limited to:
              </p>

              <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Cookies and Usage Data</li>
              </ul>

              <p>
                We may use your Personal Data to contact you with newsletters, marketing or promotional materials and
                other
                information that may be of interest to you. You may opt out of receiving any, or all, of these
                communications
                from us by following the unsubscribe link.
              </p>

              <p><strong>Usage Data</strong></p>

              <p>
                We may also collect information that your browser sends whenever you visit our Service or when you
                access
                Service by or through a mobile device (“<strong>Usage Data</strong>”).
              </p>

              <p>
                This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP
                address),
                browser type, browser version, the pages of our Service that you visit, the time and date of your visit,
                the
                time spent on those pages, unique device identifiers and other diagnostic data.
              </p>

              <p>
                When you access Service with a mobile device, this Usage Data may include information such as the type
                of
                mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile
                operating system, the type of mobile Internet browser you use, unique device identifiers and other
                diagnostic
                data.
              </p>

              <p><strong>Tracking Cookies Data</strong></p>

              <p>
                We use cookies and similar tracking technologies to track the activity on our Service and we hold
                certain
                information.
              </p>

              <p>
                Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies
                are
                sent to your browser from a website and stored on your device. Other tracking technologies are also used
                such
                as beacons, tags and scripts to collect and track information and to improve and analyze our Service.
              </p>

              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
                if
                you do not accept cookies, you may not be able to use some portions of our Service.
              </p>

              <p>
                Examples of Cookies we use:
              </p>

              <ul>
                <li><strong>Session Cookies</strong>: We use Session Cookies to operate our Service.</li>
                <li><strong>Preference Cookies</strong>: We use Preference Cookies to remember your preferences and
                  various
                  settings.
                </li>
                <li><strong>Security Cookies</strong>: We use Security Cookies for security purposes.</li>
                <li><strong>Advertising Cookies</strong>: Advertising Cookies are used to serve you with advertisements
                  that
                  may be relevant to you and your interests.
                </li>
              </ul>

              <p><strong>Other Data</strong></p>
              <p>
                While using our Service, we may also collect the following information: sex, age, date of birth, place
                of
                birth, passport details, citizenship, registration at place of residence and actual address, telephone
                number
                (work, mobile), details of documents on education, qualification, professional training, employment
                agreements, non-disclosure agreements, information on bonuses and compensation, information on marital
                status,
                family members, social security (or other taxpayer identification) number, office location and other
                data.
              </p>
            </div>

            <div className="g-mb-15">
              <h3>5. Use of Data</h3>

              <p>FinSharing.com uses the collected data for various purposes:</p>

              <ul>
                <li>to provide and maintain our Service;</li>
                <li>to notify you about changes to our Service;</li>
                <li>to allow you to participate in interactive features of our Service when you choose to do so;</li>
                <li>to provide customer support;</li>
                <li>to gather analysis or valuable information so that we can improve our Service;</li>
                <li>to monitor the usage of our Service;</li>
                <li>to detect, prevent and address technical issues;</li>
                <li>to fulfill any other purpose for which you provide it;</li>
                <li>to carry out our obligations and enforce our rights arising from any contracts entered into between
                  you
                  and us, including for billing and collection;
                </li>
                <li>to provide you with notices about your account and/or subscription, including expiration and renewal
                  notices, email-instructions, etc.;
                </li>
                <li>to provide you with news, special offers and general information about other goods, services and
                  events
                  which we offer that are similar to those that you have already purchased or enquired about unless you
                  have
                  opted not to receive such information;
                </li>
                <li>in any other way we may describe when you provide the information;</li>
                <li>for any other purpose with your consent.</li>
              </ul>
            </div>

            <div className="g-mb-15">
              <h3>6. Retention of Data</h3>

              <p>
                We will retain your Personal Data only for as long as is necessary for the purposes set out in this
                Privacy
                Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal
                obligations
                (for example, if we are required to retain your data to comply with applicable laws), resolve disputes,
                and
                enforce our legal agreements and policies.
              </p>

              <p>
                We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a
                shorter
                period, except when this data is used to strengthen the security or to improve the functionality of our
                Service, or we are legally obligated to retain this data for longer time periods.
              </p>
            </div>

            <div className="g-mb-15">
              <h3>7. Transfer of Data</h3>

              <p>
                Your information, including Personal Data, may be transferred to – and maintained on – computers located
                outside of your state, province, country or other governmental jurisdiction where the data protection
                laws
                may
                differ from those of your jurisdiction.
              </p>

              <p>
                If you are located outside United States and choose to provide information to us, please note that we
                transfer
                the data, including Personal Data, to United States and process it there.
              </p>

              <p>
                Your consent to this Privacy Policy followed by your submission of such information represents your
                agreement
                to that transfer.
              </p>

              <p>
                FinSharing.com will take all the steps reasonably necessary to ensure that your data is treated
                securely
                and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an
                organisation or a country unless there are adequate controls in place including the security of your
                data
                and
                other personal information.
              </p>
            </div>

            <div className="g-mb-15">
              <h3>8. Disclosure of Data</h3>

              <p>We may disclose personal information that we collect, or you provide:</p>

              <ul>
                <li>
                  <p><strong>Disclosure for Law Enforcement.</strong></p>
                  <p>
                    Under certain circumstances, we may be required to disclose your Personal Data if required to do so
                    by
                    law
                    or in response to valid requests by public authorities.
                  </p>
                </li>

                <li>
                  <p><strong>Business Transaction.</strong></p>
                  <p>
                    If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data
                    may be
                    transferred.
                  </p>
                </li>

                <li><strong>Other cases. We may disclose your information also:</strong></li>
                <ul>
                  <li>to our subsidiaries and affiliates;</li>
                  <li>to fulfill the purpose for which you provide it;</li>
                  <li>for the purpose of including your company’s logo on our website;</li>
                  <li>for any other purpose disclosed by us when you provide the information;</li>
                  <li>with your consent in any other cases;</li>
                  <li>if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of
                    the
                    Company, our customers, or others.
                  </li>
                </ul>
              </ul>

            </div>

            <div className="g-mb-15">
              <h3>9. Security of Data</h3>

              <p>
                The security of your data is important to us but remember that no method of transmission over the
                Internet
                or
                method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
                protect
                your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="g-mb-15">
              <h3>10. Your Data Protection Rights Under General Data Protection Regulation (GDPR)</h3>

              <p>
                If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data
                protection rights, covered by GDPR. – See more at https://eur-lex.europa.eu/eli/reg/2016/679/oj
              </p>

              <p>
                We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your
                Personal
                Data.
              </p>

              <p>
                If you wish to be informed what Personal Data we hold about you and if you want it to be removed from
                our
                systems, please email us at admin@finsharing.com.
              </p>

              <p>
                In certain circumstances, you have the following data protection rights:
              </p>
              <ul>
                <li>the right to access, update or to delete the information we have on you;</li>
                <li>
                  the right of rectification. You have the right to have your information rectified if that information
                  is
                  inaccurate or incomplete;
                </li>
                <li>the right to object. You have the right to object to our processing of your Personal Data;</li>
                <li>the right of restriction. You have the right to request that we restrict the processing of your
                  personal
                  information;
                </li>
                <li>the right to data portability. You have the right to be provided with a copy of your Personal Data
                  in a
                  structured, machine-readable and commonly used format;
                </li>
                <li>the right to withdraw consent. You also have the right to withdraw your consent at any time where we
                  rely
                  on your consent to process your personal information;
                </li>
              </ul>

              <p>
                Please note that we may ask you to verify your identity before responding to such requests. Please note,
                we
                may not able to provide Service without some necessary data.
              </p>

              <p>
                You have the right to complain to a Data Protection Authority about our collection and use of your
                Personal
                Data. For more information, please contact your local data protection authority in the European Economic
                Area
                (EEA).
              </p>
            </div>

            <div className="g-mb-15">
              <h3>11. Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)</h3>

              <p>
                CalOPPA is the first state law in the nation to require commercial websites and online services to post
                a
                privacy policy. The law’s reach stretches well beyond California to require a person or company in the
                United
                States (and conceivable the world) that operates websites collecting personally identifiable information
                from
                California consumers to post a conspicuous privacy policy on its website stating exactly the information
                being
                collected and those individuals with whom it is being shared, and to comply with this policy. – See more
                at:
                https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/
              </p>

              <p>
                According to CalOPPA we agree to the following:
              </p>

              <ul>
                <li>users can visit our site anonymously;</li>
                <li>our Privacy Policy link includes the word “Privacy”, and can easily be found on the page specified
                  above
                  on the home page of our website;
                </li>
                <li>users will be notified of any privacy policy changes on our Privacy Policy Page;</li>
                <li>users are able to change their personal information by emailing us at admin@finsharing.com.</li>
              </ul>

              <p>
                Our Policy on “Do Not Track” Signals:
              </p>

              <p>
                We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track
                browser
                mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites
                that
                you do not want to be tracked.
              </p>

              <p>
                You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.
              </p>
            </div>

            <div className="g-mb-15">
              <h3>12. Service Providers</h3>

              <p>
                We may employ third party companies and individuals to facilitate our Service (“<strong>Service
                Providers</strong>”), provide Service on our behalf, perform Service-related services or assist us in
                analysing how our Service is used.
              </p>

              <p>
                These third parties have access to your Personal Data only to perform these tasks on our behalf and are
                obligated not to disclose or use it for any other purpose.
              </p>

            </div>

            <div className="g-mb-15">
              <h3>13. Analytics</h3>

              <p>
                We may use third-party Service Providers to monitor and analyze the use of our Service.
              </p>

              <p><strong>Google Analytics</strong></p>
              <p>
                Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.
                Google
                uses the data collected to track and monitor the use of our Service. This data is shared with other
                Google
                services. Google may use the collected data to contextualise and personalise the ads of its own
                advertising
                network.
              </p>

              <p>
                For more information on the privacy practices of Google, please visit the Google Privacy Terms web page:
                https://policies.google.com/privacy?hl=en
              </p>

              <p>
                We also encourage you to review the Google's policy for safeguarding your data:
                https://support.google.com/analytics/answer/6004245.
              </p>

              <p><strong>Cloudflare analytics</strong></p>
              <p>
                Cloudflare analytics is a web analytics service operated by Cloudflare Inc. Read the Privacy Policy
                here:
                https://www.cloudflare.com/privacypolicy/
              </p>

            </div>

            <div className="g-mb-15">
              <h3>14. CI/CD tools</h3>

              <p>We may use third-party Service Providers to automate the development process of our Service.</p>

              <p><strong>GitHub</strong></p>

              <p>GitHub is provided by GitHub, Inc.</p>

              <p>GitHub is a development platform to host and review code, manage projects, and build software.</p>

              <p>For more information on what data GitHub collects for what purpose and how the protection of the data
                is
                ensured, please visit GitHub Privacy Policy page:
                https://help.github.com/en/articles/github-privacy-statement.</p>

              <p><strong>GitLab CI/CD</strong></p>

              <p>GitLab CI/CD is provided by GitLab, Inc.</p>

              <p>
                GitLab CI (Continuous Integration) service is a part of GitLab that build and test the software whenever
                developer pushes code to application.
              </p>

              <p>
                GitLab CD (Continuous Deployment) is a software service that places the changes of every code in the
                production which results in every day deployment of production.
              </p>

              <p>
                For more information on what data GitLab CI/CD collects for what purpose and how the protection of the
                data
                is ensured, please visit GitLab CI/CD Privacy Policy page: https://about.gitlab.com/privacy/.
              </p>

              <p><strong>Travis CI</strong></p>

              <p>
                Travis CI is a distributed continuous integration service to build and test projects hosted at GitHub.
              </p>

              <p>
                For more information on what data Travis CI collects for what purpose and how the protection of the data
                is
                ensured, please visit Travis CI Privacy Policy page: https://docs.travis-ci.com/legal/privacy-policy.
              </p>
            </div>

            <div className="g-mb-15">
              <h3>15. Advertising</h3>

              <p>
                We may use third-party Service Providers to show advertisements to you to help support and maintain our
                Service.
              </p>

              <p><strong>Google AdSense DoubleClick Cookie</strong></p>
              <p>
                Google, as a third party vendor, uses cookies to serve ads on our Service. Google's use of the
                DoubleClick
                cookie enables it and its partners to serve ads to our users based on their visit to our Service or
                other
                websites on the Internet.
              </p>

              <p>
                You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the
                Google
                Ads
                Settings web page: http://www.google.com/ads/preferences/
              </p>

              <p><strong>Bing Ads</strong></p>
              <p>
                Bing Ads is an advertising service provided by Microsoft Inc.
              </p>

              <p>
                You can opt-out from Bing Ads by following the instructions on Bing Ads Opt-out page:
                https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
              </p>

              <p>
                For more information about Bing Ads, please visit their Privacy Policy:
                https://privacy.microsoft.com/en-us/PrivacyStatement
              </p>

              <p><strong>AdMob by Google</strong></p>
              <p>
                AdMob by Google is provided by Google Inc.
              </p>

              <p>
                You can opt-out from the AdMob by Google service by following the instructions described by Google:
                https://support.google.com/ads/answer/2662922?hl=en
              </p>

              <p>
                For more information on how Google uses the collected information, please visit the “How Google uses
                data
                when
                you use our partners' sites or app” page: http://www.google.com/policies/privacy/partners/ or visit the
                Privacy Policy of Google: http://www.google.com/policies/privacy/
              </p>

            </div>

            <div className="g-mb-15">
              <h3>16. Behavioral Remarketing</h3>

              <p>
                FinSharing.com uses remarketing services to advertise on third party websites to you after you visited
                our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your
                past
                visits to our Service.
              </p>

              <p><strong>Google Ads (AdWords)</strong></p>
              <p>Google Ads (AdWords) remarketing service is provided by Google Inc.</p>

              <p>
                You can opt-out of Google Analytics for Display Advertising and customise the Google Display Network ads
                by
                visiting the Google Ads Settings page: http://www.google.com/settings/ads
              </p>

              <p>
                Google also recommends installing the Google Analytics Opt-out Browser Add-on –
                https://tools.google.com/dlpage/gaoptout – for your web browser. Google Analytics Opt-out Browser Add-on
                provides visitors with the ability to prevent their data from being collected and used by Google
                Analytics.
              </p>

              <p>
                For more information on the privacy practices of Google, please visit the Google Privacy Terms web page:
                https://policies.google.com/privacy?hl=en
              </p>

              <p><strong>Bing Ads Remarketing</strong></p>
              <p>Bing Ads remarketing service is provided by Microsoft Inc.</p>

              <p>
                You can opt-out of Bing Ads interest-based ads by following their instructions:
                https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
              </p>

              <p>
                You can learn more about the privacy practices and policies of Microsoft by visiting their Privacy
                Policy
                page: https://privacy.microsoft.com/en-us/PrivacyStatement
              </p>

              <p><strong>Facebook</strong></p>
              <p>Facebook remarketing service is provided by Facebook Inc.</p>

              <p>
                You can learn more about interest-based advertising from Facebook by visiting this page:
                https://www.facebook.com/help/164968693837950
              </p>

              <p>
                To opt-out from Facebook's interest-based ads, follow these instructions from Facebook:
                https://www.facebook.com/help/568137493302217
              </p>

              <p>
                Facebook adheres to the Self-Regulatory Principles for Online Behavioural Advertising established by the
                Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies
                through
                the
                Digital Advertising Alliance in the USA http://www.aboutads.info/choices/, the Digital Advertising
                Alliance
                of
                Canada in Canada http://youradchoices.ca/ or the European Interactive Digital Advertising Alliance in
                Europe
                http://www.youronlinechoices.eu/, or opt-out using your mobile device settings.
              </p>

              <p>
                For more information on the privacy practices of Facebook, please visit Facebook's Data Policy:
                https://www.facebook.com/privacy/explanation
              </p>

            </div>

            <div className="g-mb-15">
              <h3>17. Links to Other Sites</h3>

              <p>
                Our Service may contain links to other sites that are not operated by us. If you click a third party
                link,
                you
                will be directed to that third party's site. We strongly advise you to review the Privacy Policy of
                every
                site
                you visit.
              </p>

              <p>
                We have no control over and assume no responsibility for the content, privacy policies or practices of
                any
                third party sites or services.
              </p>
            </div>

            <div className="g-mb-15">
              <h3>18. Children's Privacy</h3>

              <p>Our Services are not intended for use by children under the age of 18 (“<strong>Child</strong>” or
                “<strong>Children</strong>”).</p>

              <p>
                We do not knowingly collect personally identifiable information from Children under 18. If you become
                aware
                that a Child has provided us with Personal Data, please contact us. If we become aware that we have
                collected
                Personal Data from Children without verification of parental consent, we take steps to remove that
                information
                from our servers.
              </p>

            </div>

            <div className="g-mb-15">
              <h3>19. Changes to This Privacy Policy</h3>

              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page.
              </p>

              <p>
                We will let you know via email and/or a prominent notice on our Service, prior to the change becoming
                effective and update “effective date” at the top of this Privacy Policy.
              </p>

              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy
                are
                effective when they are posted on this page.
              </p>
            </div>

            <div className="g-mb-15">
              <h3>20. Contact Us</h3>

              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>

              <p>
                By email: admin@finsharing.com
              </p>
            </div>

          </section>
        </CardContent>
      </Card>
    </Layout>
  )
}

export default withApollo(PrivacyPolicyPage)