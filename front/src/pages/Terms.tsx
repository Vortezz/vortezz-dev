import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Wave from "../components/Wave";
import Client from "../struct/Client";

export default function Terms({client}: { client: Client }) {
  return (
    <div className="w-full dark:bg-vortezz-gray2 bg-light-gray2 min-h-[calc(90%)] dark:text-vortezz-white text-vortezz-gray-1 text-justify">
      <Navbar client={client}/>
      <div className="w-[calc(95%)] m-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold m-4">Terms
          and Conditions</h2>
        <p className="text-base md:text-lg xl:text-xl ml-12">Last updated: January 13, 2022</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">Please read these terms and conditions carefully before
          using Our Service.</p>
        {client.getLanguage() == "fr" &&
          <div className="text-base md:text-lg xl:text-xl ml-12 text-vortezz-red">Les présentes CGU ne sont actuellement
            pas traduites et feront l'objet d'une réécriture totale</div>}
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Interpretation
          and Definitions</h1>
        <h2
          className="font-bold text-base sm:text-lg md:text-1xl lg:text-2xl xl:text-3xl 2xl:text-4xl m-2 indent-6">Interpretation</h2>
        <p className="text-base md:text-lg xl:text-xl ml-12">The words of which the initial letter is capitalized have
          meanings defined under the following conditions. The following definitions shall have the same meaning
          regardless of whether they appear in singular or in plural.</p>
        <h2
          className="font-bold text-base sm:text-lg md:text-1xl lg:text-2xl xl:text-3xl 2xl:text-4xl m-2 indent-6">Definitions</h2>
        <p className="text-base md:text-lg xl:text-xl ml-12">For the purposes of these Terms and Conditions:</p>
        <ul>
          <li>
            <p className="text-base md:text-lg xl:text-xl ml-12"><strong>Affiliate</strong> means an entity that
              controls, is controlled by or is under common control with a party, where &quot;control&quot; means
              ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election
              of directors or other managing authority.</p>
          </li>
          <li>
            <p className="text-base md:text-lg xl:text-xl ml-12"><strong>Country</strong> refers to: France</p>
          </li>
          <li>
            <p className="text-base md:text-lg xl:text-xl ml-12"><strong>Device</strong> means any device that can
              access the Service such as a computer, a cellphone or a digital tablet.</p>
          </li>
          <li>
            <p className="text-base md:text-lg xl:text-xl ml-12"><strong>Service</strong> refers to the Website.</p>
          </li>
          <li>
            <p className="text-base md:text-lg xl:text-xl ml-12"><strong>Terms and Conditions</strong> (also referred
              as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and
              Vortezz regarding the use of the Service. This Terms and Conditions agreement has been created with the
              help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank">Terms and
                Conditions Generator</a>.</p>
          </li>
          <li>
            <p className="text-base md:text-lg xl:text-xl ml-12"><strong>Third-party Social Media Service</strong> means
              any services or content (including data, information, products or services) provided by a third-party that
              may be displayed, included or made available by the Service.</p>
          </li>
          <li>
            <p className="text-base md:text-lg xl:text-xl ml-12"><strong>Website</strong> refers to vortezz.dev,
              accessible from <a href="https://vortezz.dev/" rel="external nofollow noopener"
                                 target="_blank">https://vortezz.dev/</a></p>
          </li>
          <li>
            <p className="text-base md:text-lg xl:text-xl ml-12"><strong>You</strong> means the individual accessing or
              using the Service, or Vortezz, or other legal entity on behalf of which such individual is accessing or
              using the Service, as applicable.</p>
          </li>
        </ul>
        <h1
          className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Acknowledgment</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">These are the Terms and Conditions governing the use of
          this Service and the agreement that operates between You and Vortezz. These Terms and Conditions set out the
          rights and obligations of all users regarding the use of the Service.</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">Your access to and use of the Service is conditioned on
          Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all
          visitors, users and others who access or use the Service.</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">By accessing or using the Service You agree to be bound by
          these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not
          access the Service.</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">Your access to and use of the Service is also conditioned
          on Your acceptance of and compliance with the Privacy Policy of Vortezz. Our Privacy Policy describes Our
          policies and procedures on the collection, use and disclosure of Your personal information when You use the
          Application or the Website and tells You about Your privacy rights and how the law protects You. Please read
          Our Privacy Policy carefully before using Our Service.</p>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Links to Other
          Websites</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">Our Service may contain links to third-party web sites or
          services that are not owned or controlled by Vortezz.</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">Vortezz has no control over, and assumes no responsibility
          for, the content, privacy policies, or practices of any third party web sites or services. You further
          acknowledge and agree that Vortezz shall not be responsible or liable, directly or indirectly, for any damage
          or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content,
          goods or services available on or through any such web sites or services.</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">We strongly advise You to read the terms and conditions and
          privacy policies of any third-party web sites or services that You visit.</p>
        <h1
          className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Termination</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">We may terminate or suspend Your access immediately,
          without prior notice or liability, for any reason whatsoever, including without limitation if You breach these
          Terms and Conditions.</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">Upon termination, Your right to use the Service will cease
          immediately.</p>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Limitation of
          Liability</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">Notwithstanding any damages that You might incur, the
          entire liability of Vortezz and any of its suppliers under any provision of this Terms and Your exclusive
          remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100
          USD if You haven't purchased anything through the Service.</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">To the maximum extent permitted by applicable law, in no
          event shall Vortezz or its suppliers be liable for any special, incidental, indirect, or consequential damages
          whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for
          business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of
          or inability to use the Service, third-party software and/or third-party hardware used with the Service, or
          otherwise in connection with any provision of this Terms), even if Vortezz or any supplier has been advised of
          the possibility of such damages and even if the remedy fails of its essential purpose.</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">Some states do not allow the exclusion of implied
          warranties or limitation of liability for incidental or consequential damages, which means that some of the
          above limitations may not apply. In these states, each party's liability will be limited to the greatest
          extent permitted by law.</p>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">&quot;AS
          IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">The Service is provided to You &quot;AS
          IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the
          maximum extent permitted under applicable law, Vortezz, on its own behalf and on behalf of its Affiliates and
          its and their respective licensors and service providers, expressly disclaims all warranties, whether express,
          implied, statutory or otherwise, with respect to the Service, including all implied warranties of
          merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise
          out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing,
          Vortezz provides no warranty or undertaking, and makes no representation of any kind that the Service will
          meet Your requirements, achieve any intended results, be compatible or work with any other software,
          applications, systems or services, operate without interruption, meet any performance or reliability standards
          or be error free or that any errors or defects can or will be corrected.</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">Without limiting the foregoing, neither Vortezz nor any of
          Vortezz's provider makes any representation or warranty of any kind, express or implied: (i) as to the
          operation or availability of the Service, or the information, content, and materials or products included
          thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or
          currency of any information or content provided through the Service; or (iv) that the Service, its servers,
          the content, or e-mails sent from or on behalf of Vortezz are free of viruses, scripts, trojan horses, worms,
          malware, timebombs or other harmful components.</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">Some jurisdictions do not allow the exclusion of certain
          types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above
          exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth
          in this section shall be applied to the greatest extent enforceable under applicable law.</p>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Governing
          Law</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">The laws of the Country, excluding its conflicts of law
          rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to
          other local, state, national, or international laws.</p>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Disputes
          Resolution</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">If You have any concern or dispute about the Service, You
          agree to first try to resolve the dispute informally by contacting Vortezz.</p>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">For European
          Union (EU) Users</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">If You are a European Union consumer, you will benefit from
          any mandatory provisions of the law of the country in which you are resident in.</p>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Severability
          and Waiver</h1>
        <h2
          className="font-bold text-base sm:text-lg md:text-1xl lg:text-2xl xl:text-3xl 2xl:text-4xl m-2 indent-6">Severability</h2>
        <p className="text-base md:text-lg xl:text-xl ml-12">If any provision of these Terms is held to be unenforceable
          or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to
          the greatest extent possible under applicable law and the remaining provisions will continue in full force and
          effect.</p>
        <h2
          className="font-bold text-base sm:text-lg md:text-1xl lg:text-2xl xl:text-3xl 2xl:text-4xl m-2 indent-6">Waiver</h2>
        <p className="text-base md:text-lg xl:text-xl ml-12">Except as provided herein, the failure to exercise a right
          or to require performance of an obligation under these Terms shall not effect a party's ability to exercise
          such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a
          waiver of any subsequent breach.</p>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Translation
          Interpretation</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">These Terms and Conditions may have been translated if We
          have made them available to You on our Service.
          You agree that the original English text shall prevail in the case of a dispute.</p>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Changes to
          These Terms and Conditions</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">We reserve the right, at Our sole discretion, to modify or
          replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least
          30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at
          Our sole discretion.</p>
        <p className="text-base md:text-lg xl:text-xl ml-12">By continuing to access or use Our Service after those
          revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms,
          in whole or in part, please stop using the website and the Service.</p>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Source
          Code</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">The code of this website can be found on Github <a
          href="https://github.com/Vortezz/vortezz-dev" target="_blank">https://github.com/Vortezz/vortezz-web</a></p>
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl m-4">Contact
          Us</h1>
        <p className="text-base md:text-lg xl:text-xl ml-12">If you have any questions about these Terms and Conditions,
          You can contact us:</p>
        <ul>
          <li>
            <p className="text-base md:text-lg xl:text-xl ml-12">By email: <a
              href="mailto:contact@vortezz.dev">contact@vortezz.dev</a></p>
          </li>
          <li>
            <p className="text-base md:text-lg xl:text-xl ml-12">By visiting this page on our website: <Link
              to="/contact/" rel="external nofollow noopener" target="_blank">https://vortezz.dev/contact/</Link></p>
          </li>
        </ul>
      </div>
      <Wave variant={4} client={client} />
      <Footer client={client}/>
    </div>
  )
}
