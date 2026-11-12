# Zuredex landing refresh — Stage A investigation

Date: November 12, 2026 (America/New_York; investigation began November 11). Product status is the owner's November 2026 brief.

**Recommendation:** Make Zuredex a product-led enterprise site for orthopedic and medical-device distributors. Lead with case sheets, mandatory human review, PO matching, confirmed revenue, and commissions. Replace early-access positioning and unsupported absolutes with visible workflow evidence. A measured, readable interface and real fictional-demo screenshots will establish more credibility than infrastructure badges or unapproved statistics.

This is a report, not an implementation or publication approval. No production source, app source, legal text, branding usage, dependencies, hosting configuration, or customer data was changed. No form was submitted and no app account was accessed. The only intended tracked change is this document; no PR is to be created.

## 1. Scope, evidence, and repository state

### Evidence and boundaries

- Landing repository: `C:\Projects\zuredex-landing-page`. Reviewed tracked marketing source, public asset filenames/sizes, branding review documentation, Git history, installed Next.js guides, public HTTP responses, and Lighthouse results.
- App reference reads were limited to styling in `C:\Projects\Zuredex\app\globals.css` and a font-reference search in `app/layout.tsx`; filename discovery was limited to permitted `app/`, `components/`, and `docs/` paths. App implementation was not audited to substantiate engineering claims. Nothing in that repo was modified.
- No `.env*` contents or `scratch/` contents were read. Existence checks confirmed that the four production-build environment-file names were absent before building. No customer datasets, documents, authenticated screens, or app APIs were inspected. Existing marketing screenshots were inventoried without opening their pixels or asserting their provenance. Lighthouse screenshot audits were disabled.
- Product capabilities and release labels below come from the owner's brief, not inference from code. Public security assertions are evidence of what the website says, not proof that the controls work.
- Authoritative references consulted: installed Next.js 16.2.6 metadata and CLI guides; [WCAG 2.2](https://www.w3.org/TR/WCAG22/); [Google Web Vitals](https://web.dev/articles/vitals); [Google canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). No independent competitor study was performed.

### Git and branding

| Item | Observed state |
| --- | --- |
| Initial checkout | `design/zuredex-symbol-refinement`, clean tracked working tree, commit `a13cadc` |
| Main | Local `main` and `origin/main` at `77f0a11b11bf9732bcc24c54f5875d2a19eaf9cf`; a live `git ls-remote --heads origin` confirmed the same main tip and returned only main |
| Investigation branch | Created `investigate/landing-refresh` from `main`, so the report branch does not carry the pending symbol commit |
| Symbol branch contents | One additional commit: `public/branding/zuredex-symbol-refined.svg`, `design-review/zuredex-symbol/README.md`, `render-review.cjs`, and its scoped `.gitignore`; 309 added lines across four files |
| Approval recorded | Review README says geometry approved, product-specific print preparation pending. Five rounded vector pieces on an 820 × 920 transparent canvas; revised gaps/cuts and preserved gradients. Hash checks protect the approved master |
| Review tooling | Existing `sharp` renders original/refined comparisons on white, navy, and silhouette backgrounds plus measurements/validation; generated artifacts are local. It does not regenerate the SVG or change website references |
| Merge/publication status | Refined symbol is **not merged into main**, not present as a remote branch at the check, and not used by nav/footer. Current site uses `zuredex-symbol.svg` |
| Wordmark | Nav/footer render uppercase `ZUREDEX` as styled Syne text. No new wordmark file or wordmark change is present in the refinement commit. A separately approved new wordmark cannot be established from this repository |

Do not treat the symbol approval as approval to merge, recolor, replace favicons, publish, or create a new lockup. The review notes warn about dark pieces losing contrast on navy at small sizes. Resolve approved light/dark lockups and minimum sizes separately. Pre-existing local design-review artifacts may appear untracked after leaving the design branch; do not add or delete them for this investigation.

### Stack, routes, and hosting

- Next.js **16.2.6**, React/React DOM **19.2.4**, TypeScript 5, Tailwind 4, ESLint 9. App Router; page/layout Server Components; extensive inline styling plus shared `SiteStyles.tsx`. No CMS, form handler, or application database integration in this marketing source.
- Scripts: `dev`, `build`, `start`, `lint`. `next.config.ts` has no custom configuration. README is the starter README and does not document deployment ownership or operational procedures. No checked-in CI workflow or test suite was found in the tracked file inventory.
- Routes: `/`, `/about`, `/privacy`, `/terms`; generated `/robots.txt`, `/sitemap.xml`, and not-found route. No dedicated product, how-it-works, security, demo/contact, or pricing page.
- Live `https://zuredex.com` returns **301 to `https://www.zuredex.com/`**, then 200. Response headers identify Vercel and prerendered Next.js content, cache HIT, and HSTS. About, Privacy, Terms, the OG image, and the linked booking page returned 200. Account-level Vercel settings, deployment commit, preview protection, analytics toggles, and custom-domain ownership were not inspected.
- `Client Login` in navigation and footer goes directly to `https://app.zuredex.com`, same tab. Marketing anchors do not authenticate or embed the app. Keep this clear utility link separate from demo conversion. No authenticated app link test was performed.

### Build result

Production build **passed**, including TypeScript and static generation for all listed routes. Command: `node node_modules/next/dist/bin/next build`, with Next telemetry disabled. The first sandboxed run failed only on Google Fonts access; the network-enabled retry passed. Build output stayed in normal ignored build/generated locations; no tracked source changed.

Next reported that it inferred `C:\Projects` as its root because of a parent lockfile. Future implementation should explicitly scope `turbopack.root` to this checkout after consulting the installed Next guide. Do not remove or edit a parent/sibling lockfile. Geist/Geist Mono currently require build-time font fetching, while the actual marketing typography also loads Google Fonts at runtime.

### Measured Lighthouse baseline

Public production homepage, Lighthouse **13.6.0**, headless Chrome **156**, one navigation run per device, simulated throttling. Mobile ran November 12 at 00:04 ET; desktop at 00:10 ET. Both completed without runtime errors or run warnings. Public PageSpeed API was first attempted but returned HTTP 429/quota exhausted; the results below are local Lighthouse runs, not PageSpeed field data.

| Metric | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | 75 | 95 |
| Accessibility | 95 | 95 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| First contentful paint | 1.3 s | 0.4 s |
| Largest contentful paint | 7.2 s | 1.6 s |
| Total blocking time | 130 ms | 0 ms |
| Cumulative layout shift | 0 | 0 |
| Speed index | 1.5 s | 0.7 s |

Mobile simulation: 150 ms RTT, 1,638.4 Kbps throughput, 4× CPU slowdown. Desktop: 40 ms RTT, 10,240 Kbps, 1× CPU. These are lab samples, not availability, accuracy, or customer outcome figures. They are internal audit measurements and must not become product proof claims. No CrUX/real-user INP baseline was obtained. Only the homepage was Lighthouse-tested; legal/about findings also use source and HTTP inspection. Keyboard, screen-reader, zoom, and full visual cross-browser acceptance testing remain future work.

Mobile transferred about **2,692 KiB**. Lighthouse estimated **1,322 KiB** image savings, **630 ms** render-blocking savings, and **60 KiB** unused JavaScript savings. The measured LCP element was the headline; image compression alone will not explain or fix its delay. Inspect font loading, render dependencies, and entrance animation together. The external Google Fonts stylesheet is explicitly flagged as blocking.

Raw reports/tool cache are local, ignored, and not committed: `.next/landing-audit/lighthouse-mobile.json` and `lighthouse-desktop.json`. Reproduction: run Lighthouse against `https://www.zuredex.com` with categories `performance,accessibility,best-practices,seo`, default mobile or `--preset=desktop`, headless Chrome, and screenshot audits `screenshot-thumbnails,final-screenshot,full-page-screenshot` disabled. Use a clean isolated browser profile and keep outputs inside this repo.

### Accessibility, SEO, assets, analytics, and conversion

| Area | Findings and implications |
| --- | --- |
| Contrast | Lighthouse flags color contrast (32 mobile result items). Source color `#4A5568` on `#07182A` is approximately **2.38:1**, and on `#0F141A` **2.46:1**; both fail normal-text AA and large-text 3:1. This affects body copy, captions, footer links, and legal annotations |
| Structure and navigation | English language, viewport, heading hierarchy, image alt text, and semantic nav/footer exist. Main content has no `<main>` landmark or skip link. Below 768 px the central nav disappears without a menu replacement. Fixed nav has no evident anchor offset. Custom focus treatment is absent from landing styles; default browser focus must be tested, not assumed absent |
| Type and motion | Dense mock UI uses approximately 6.5–10 px text, frequently uppercase and low contrast. Infinite pulses/dashed flow and smooth scrolling have no reduced-motion override or pause control. No light marketing theme: shared styles force dark background despite starter color-scheme variables |
| Image delivery | Four product PNGs total about 1.55 MB: territory 1,124,698 bytes; dashboard desktop 196,460; dashboard mobile 120,479; cases mobile 110,618. Plain `<img>` elements have no responsive sources or lazy loading; several lack intrinsic dimensions. Territory container reserves space, but other images still trigger unsized-image diagnostics |
| Brand/social assets | `favicon.svg` is a **1,163,221-byte raster-in-SVG wrapper**, not a compact vector favicon. OG PNG is **1,133,085 bytes**. Icons, manifest, Twitter large card, and OG tags exist. OG image endpoint works; pixels/content approval and social-client previews were not evaluated |
| Canonicals | Live About, Privacy, and Terms all inherit homepage canonical `https://www.zuredex.com`. Root metadata/OG/sitemap use the apex elsewhere. Use the observed www destination consistently and self-canonicalize each indexable page. Lighthouse SEO 100 does not validate this architecture |
| Discovery | Robots allows all and references apex sitemap. Sitemap contains only the apex homepage; source uses build-time `new Date()` for last-modified. Add appropriate canonical pages and meaningful modification dates |
| Metadata/schema | Child titles/descriptions exist, but all share homepage OG title, description, and URL. Global SoftwareApplication JSON-LD advertises price `0` and a pilot program without an approved offer. It also uses the social image as organization logo. Correct scope and remove the unsupported offer; do not invent ratings/reviews |
| Analytics | No analytics package, tag, event tracking, or third-party analytics script was found in inspected source/public HTML. Vercel account-side telemetry and external scheduling analytics remain unverified. Current visitor-to-qualified-demo conversion cannot be measured from this repo |
| Conversion | Hero Request Demo first scrolls to the bottom CTA; final CTA opens `https://cal.com/zuredex/60min`. The booking URL responds, but booking availability, required fields, privacy terms, and successful delivery were not tested. Mailto goes to `analytics@zuredex.com`. No owned demo-request form, submission endpoint, spam protection, delivery/error state, or lead routing exists |
| Legal | Footer links Terms and Privacy correctly. Privacy is explicitly marked **draft pending legal review in a source comment**, yet publicly served; effective date August 25, 2026. Terms source identifies lawyer-reviewed version `2026-08-22-v1` copied from the app. This is a source assertion, not verification of counsel approval; do not change substance without counsel. App `lib/legal` was outside allowed reads and was not opened |

## 2. Claim and capability gap analysis

Classification: **outdated** = superseded positioning; **understated** = supported but poorly explained; **verify** = not established by the supplied product truth; **missing** = absent/insufficiently visible. Proposed copy remains subject to owner approval.

### Current pages and claim groups

| Current location/claim | Assessment | Recommended treatment |
| --- | --- | --- |
| Home: “Every Device. Every Case. Every Dollar.”; operational intelligence | Understated and overbroad: memorable but does not name distributor workflow or explain the product | Lead with case sheets → confirmed revenue and commissions; retain old phrase only as optional supporting brand language |
| Home: AI reconciliation, automatic connections, unresolved revenue detection | Supported in part, but masks mandatory human review and can imply automatic approval or underpayment recovery | Say AI extracts; a person confirms **every case in Manual Review**; match case sheets to POs and flag price mismatches. Missing PO visibility is not manufacturer statement reconciliation |
| Home: pilot-ready, early access, preparing pilots, seeking design partners | Outdated versus production deployment | Remove preproduction positioning. Use a production statement only within approved proof wording; no customer identity or scale numbers |
| Hero dashboard and analytics mock metrics | Hardcoded amounts, counts, confidence/match percentages, reconciliation-time figures, and a named manufacturer can look like substantiated results or affiliation | Replace with approved Quorvane screenshots. Do not carry numeric proof, named manufacturers, or confidence percentages into new copy without explicit approval. Mark approved demo values as fictional, not outcomes |
| Capability pillar: automated matching with “confidence-tiered resolution” | Misleading if interpreted as confidence-based auto-approval | Explicitly describe mandatory Manual Review for every case and matching/exception handling after confirmation |
| Capability pillar: real-time revenue/at-risk/rep visibility | Dashboard capability is supported; latency guarantee is not established | Say current confirmed revenue and rep visibility; owner verifies refresh behavior before retaining “real-time” |
| Capability pillar: geographic/facility territory visibility | Territory map is shipped; exact facility drill-down and sales breakdown coverage need confirmation | Show the current territory view without extending it to roadmap cross-facility analytics |
| Capability pillar: “rate-accurate” commissions across reps, surgeons, facility agreements | Commissions shipped, but accuracy promise and those agreement dimensions are not substantiated by brief | Name confirmed supported calculation types: split payees, flat fees, per-rep payouts; show reviewable calculation details |
| Capability pillar: “Inventory Analytics,” device/manufacturer movement by territory | Overbroad: device usage dashboards do not necessarily provide stock, inventory movement, or cross-facility analytics | Rename to Device Usage and limit description to current dashboard behavior |
| Capability pillar: Rep Portal case status/pipeline/performance | Rep role supported; newer mobile experience recently shipped/rolling out | Distinguish existing role-specific access from mobile rollout and verify pictured features |
| Trust bar: secure cloud, AI-assisted validation, RBAC, audit logging, duplicate prevention, multi-tenancy | RBAC, multi-tenancy, and assisted validation supported; audit/cloud detail requires verification; duplicate behavior is rolling out | Use concrete supported controls; qualify release availability; move technical detail to Security |
| Infrastructure strip: Google Cloud, BigQuery, Firebase, Cloud Run, Power BI Embedded, Next.js 16, Document AI, Python | Tech inventory overwhelms buyer value; several deployment claims are unverified, especially Power BI Embedded | Remove the stack parade. Owner verifies app architecture and current dashboard technology before any public technical list. Landing itself is on Vercel |
| Why now: Document AI reliability is “solved”; parsing “high confidence” | Unsupported reliability absolute | Explain reading typed/handwritten sheets and implant stickers with human confirmation, without accuracy figures |
| Why now: margin pressure, untracked revenue “in every sales cycle” | Pain is relevant; universal outcome is unsupported | Use the owner's concrete pains without universal loss/recovery claims |
| Why now: hospital digitization and machine-readable documents | External market assertion not established here; underplays difficult handwriting | Replace with the practical workflow pain; commission separate market research if needed |
| Why now: “No purpose-built tool exists” / no reconciliation infrastructure | Unsubstantiated competitive absolute | Remove. State what Zuredex does without claiming category exclusivity |
| Inputs: PDFs, POs, uploads, processing queue, Email Attachments | Upload/PO supported; queue is not an input; email attachments may imply shipped email-in | Show upload or phone camera. If a user downloads an attachment and uploads it, name that explicitly. PO email-in is roadmap |
| Engine: confidence scoring, duplicate detection, normalization, validation, exception routing, audit logging | Some may be implementation details, but not all substantiated by brief | Replace generic engine list with extraction → Manual Review → match/price mismatch → confirmation. Verify any retained scoring/routing/audit behavior |
| Outputs: matched revenue, unresolved alerts, executive analytics, review queues, workflow reports | Broadly aligned, but alerts/reports and confirmed status semantics need checking | Name Cases, Manual Review, confirmed revenue, commissions, and shipped dashboards; do not promise outbound alerts/report exports without confirmation |
| “See Zuredex in action” illustrated only by territory screenshot | Understated/misleading presentation: static map is not a workflow walkthrough | Use a narrated step sequence or optional accessible demo; clearly label static product imagery |
| Analytics: revenue by rep/surgeon, exposure, match rate, average reconciliation days, queue depth, monthly trend | Dashboard capability supported; exact listed KPIs are not all verified by brief | Show owner-confirmed current dashboard labels. Add team rankings and device usage. Do not equate ordinary device usage with roadmap cross-facility analytics |
| CRM comparison / “actual surgical revenue” | Useful focus but insufficient distinction between unmatched exposure and confirmed revenue | Explicitly label status and confirmed/unconfirmed totals; avoid suggesting cash collected or bank settlement |
| “Live product,” desktop/mobile screenshots, sample-data caption | Good foundation; screen age and seed provenance unknown. Mobile rep experience is recent/rolling out | Recapture approved demo states; use the release label for the pictured mobile workflow. Do not assume a generic sample-data caption proves safety |
| Security: granular roles | Supported role names | Explain admin, manager, finance, rep responsibilities; verify exact permission boundaries before making detailed promises |
| Security: full audit trail / every change timestamped and attributed | Unverified completeness absolute | Verify coverage and insert-only behavior; scope published wording to the actual events covered |
| Security: tenant query isolation / no cross-tenant access | Architecture/control assertion requiring owner evidence | Verify dataset isolation and enforcement; describe design without unconditional impossibility claims |
| Security: encryption at rest/in transit, SHA-256 duplicate blocking | Implementation details not proven by brief | Verify encryption scope and dedupe boundaries; distinguish exact-file dedupe from “Did you mean...?” record prevention |
| Security: identifiers not required / not extracted into structured records | Not equivalent to the supplied “not stored as raw values” fact | Owner verifies source documents, transformations, logs, backups, and structured fields. Do not expand this into “no PHI stored” |
| About: founder-led, company/location, named co-founder and role | Existing identity narrative; completeness and permission not confirmed | Owner approves leadership names, bios, images, entity/address, and origin story. Add product mission; avoid inflating team size |
| About: “entirely” Google Cloud, BAA, strict enterprise standards, TLS/AES, MFA-enforced | Scope/contract claims exceed supplied confirmation | Distinguish product infrastructure from Vercel website; verify deployment, agreements, algorithms, and MFA policy before publication. Availability of MFA does not prove universal enforcement |
| Privacy: Firebase passwords/MFA, isolated storage, BAA/subprocessors, no extracted patient identifiers, fail-closed routing, retention | Public draft with technical/contract assertions needing verification | Counsel and owner reconcile against actual handling; cover marketing form data, scheduling, analytics, rights/contact, retention, and effective date |
| Terms: PHI/BAA, ownership, security safeguards, AI review, no training, subprocessors, aggregated de-identification, liability/availability | Human-review language is aligned; remaining legal/operational commitments require controlled review | Preserve reviewed substance pending counsel; verify operational statements and process for synchronizing copies. Do not turn legal clauses into certification badges |
| Footer: operational intelligence, Indianapolis, built on Google Cloud | Positioning vague; location/infrastructure approval needed | Clear distributor description, verified entity/contact, Terms/Privacy, product/security links, Client Login |
| Metadata/schema: reconciliation/revenue, pilot, zero price | Understates commissions; pilot/free offer outdated or unsupported | Add accurate intent-specific metadata; remove invented free pricing and apply truthful schema per page |

### Capability coverage and status labels

| Product truth from owner | Website gap / proposed placement |
| --- | --- |
| **Shipped:** case-sheet and PO upload or phone camera | Make capture the first Home/How It Works step; camera is currently missing |
| **Shipped:** Document AI/Vertex AI reads typed text, handwriting, implant stickers, REF/LOT, fields and line items | Feature the actual extraction screen; vendor names are secondary. Do not assert accuracy or universal document support |
| **Shipped:** Manual Review, human confirms every case, no auto-approval | Prominent in hero sequence, product page, walkthrough, and trust copy; currently explicit mainly on About/Terms |
| **Shipped:** case-to-PO matching with price-mismatch detection | Show mismatch state, missing PO state, and confirmed result; price mismatch is currently missing |
| **Shipped:** confirmed revenue and commissions: split payees, flat fees, per-rep payouts | Expand the brief Commission Tracking pillar into a product section and screenshot; concrete supported calculation types are missing |
| **Shipped:** revenue, rep performance, team rankings, territory map, device usage dashboards | Real dashboard imagery; territory currently overrepresented, rankings/device usage insufficiently explained |
| **Shipped:** Cases workspace | Dedicated product section; current footer “Cases” merely returns to generic workflow |
| **Pilot:** admin intelligence chat, server-computed, organization-scoped, aggregates only | Optional secondary product section with visible **Pilot** label; no patient-level chat or universal availability implication |
| **Shipped:** sending email from customer's own mailbox | Explain outbound workflow after owner confirms visible behavior; keep distinct from roadmap inbound PO email |
| **Shipped:** admin/manager/finance/rep roles; passkey and MFA sign-in | Security section and role-oriented product benefits; passkeys missing today |
| **Recently shipped / rolling out:** Add PO from a case with two-step confirmation; Dismiss/Restore in Manual Review; “Did you mean...?” duplicate prevention; rep mobile experience | Owner confirms availability per feature before screenshots/copy. Label **Rolling out** where appropriate, not globally shipped |
| **In build:** manufacturer commission-statement reconciliation / underpayment finding; manual case entry | Exclude from shipped pages and hero. May describe underpayment cross-checking as a buyer pain, never imply current automated recovery |
| **Roadmap:** cross-facility device-usage analytics, recall alerts, self-serve historical import, PO email-in | Omit from core conversion story. If owner wants a roadmap, visibly separate it, avoid dates and availability promises |

## 3. Positioning and information architecture

### Audience and message

Primary buyer: distributor owner/operator who lacks current confirmed revenue and commission visibility. Daily users: reps capturing cases; finance staff reconciling POs and commissions; managers reviewing performance. Investors and manufacturers are secondary audiences seeking workflow depth, company identity, and appropriate diligence information. Do not broaden the main headline into a generic healthcare AI platform or imply a shipped manufacturer reconciliation product.

**Proposed headline:** “Turn case sheets and POs into confirmed revenue and commissions.”

**Proposed supporting copy:** “Built for orthopedic and medical-device distributors. Capture documents by upload or phone camera, review AI-extracted details, match purchase orders, and calculate commissions—with a person confirming every case.”

**Value statements:**

- Less double entry between spreadsheets and email: capture once, review extracted fields and line items.
- See which cases are waiting for a PO and where prices do not match.
- Calculate commissions from confirmed case revenue, including split payees, flat fees, and per-rep payouts.
- Give owners current revenue and team visibility, with a Cases workspace for daily follow-through.

Avoid “money recovered,” “paid revenue,” “instant,” “error-free,” or measured time savings without evidence. “Confirmed revenue” is not necessarily cash received. Explicit approval is required before using any customer count, scale, named customer/partner, logo, accuracy percentage, or event-based proof. The owner has offered production and live-demo evidence; its numbers and identities are intentionally withheld here from proposed copy.

### Proposed page map and section outlines

| Route | Job and section sequence |
| --- | --- |
| `/` Home | Audience-specific hero + primary CTA; real photo/extraction/review/match sequence; spreadsheet/email pains; confirmed revenue/commission overview; desktop/mobile product proof; benefits for owner, finance, rep; factual trust strip; final demo CTA |
| `/product` | Product overview; intake/extraction; Manual Review + Cases; PO matching/price mismatch; commission calculation; dashboards/team/territory/device usage; outbound mailbox workflow; role access; separately labeled chat pilot and verified rollout notes; CTA |
| `/how-it-works` | Upload/photo; extracted fields/line items; required human confirmation; PO match or missing/mismatched exception; resolution/confirmed revenue; commission calculation and visibility; limitations/status legend; CTA |
| `/security` | Concrete current controls; roles and sign-in; data handling overview; owner-verified tenant isolation/encryption/audit scope; human review and bounded chat; contractual/security contact; links to counsel-approved legal pages. No badge wall |
| `/about` | Why the company exists; distributor workflow context; approved founder/team bios and location; product principles; approved evidence if granted; contact for manufacturer/investor inquiries |
| `/request-demo` | What the walkthrough covers; short business-contact form; no-patient-data notice; submission success/error; optional scheduling link; direct contact fallback and Privacy link |
| `/privacy`, `/terms` | Readable, accessible, versioned legal content with counsel-approved scope; maintained from an agreed source-of-truth process |

Use `/request-demo` for the main conversion path instead of adding a redundant contact page initially. Route manufacturer/investor inquiries through a role/interest choice. Header: Product, How It Works, Security, About, Request a Demo, plus Client Login utility. Mobile gets an accessible disclosure menu and persistent discoverable CTA. Footer includes all primary pages, Terms, Privacy, verified contact/entity, and Client Login. Preserve useful old home anchors during transition.

**Pricing:** No visible pricing table exists today; the zero-price schema is not an approved offer. Recommendation: no public price table in the first refresh; use “Discuss your team's workflow” and Request a Demo. Owner must decide packaging, minimums, onboarding fees, and whether prices should become public. Do not invent a free plan, free trial, starting price, or quote-only policy as an established fact.

## 4. Enterprise visual direction and asset plan

### Design system aligned with the app

Keep deep navy, restrained teal, clear surface hierarchy, consistent spacing, and status semantics. Use real product UI as the main visual evidence. Reduce decorative grids, glows, all-caps microcopy, and generic engine cards. Keep headings readable and screenshots large enough to explain a single task.

| Token/group | Observed app reference / proposed marketing usage |
| --- | --- |
| Base surfaces | App `--bg-base #07182A`, `--bg-surface #0B1F33`, `--bg-elevated #151B22`; newer dashboard cards use `#10263B`, elevated `#152E43`, border `#345066` |
| Text | Base primary `#F2F9FC`, secondary `#93B1BF`; newer dashboard secondary `#B7CBD8`, tertiary `#A1B8C9`. Prefer the clearer newer hierarchy; verify each use/background for AA |
| Accent | Base teal `#3BA7C7`; newer dashboard `#58C4DE`. Choose semantic accent tokens and validate foreground/background pairs, especially on light surfaces |
| Status | Matched `#3CC7E1`, waiting `#F59E0B`, review `#FF6B35`, mismatch `#FF4D6A`, duplicate `#8B5CF6`, complete `#10B981`. Always accompany color with readable status text/icon; “matched” and “complete” are not interchangeable |
| Typography | Legacy app uses Syne/DM Mono; newer rep portal, Cases, Manual Review, sign-in, and dashboard styles use system sans, with monospace reserved for identifiers. Recommend system sans for body/UI and restrained Syne for brand/display if desired; remove unused Geist loads and excessive font weights in future implementation |
| Geometry | App spacing scale 4/8/12/16/20/24/32/40/48/64 px; radii 3/6/10 px; content max 1280 px. Marketing can use larger section spacing while keeping component rhythm |
| Motion | App transitions 100/200/350 ms. Marketing hover/focus 100–200 ms; short step transitions 200–350 ms. No continuous attention-seeking animation |
| Light/dark | Dark hero and actual dark app screens; light explanatory/security/legal sections can improve reading rhythm. Light tokens are a proposed extension, not an observed shipped app theme. Never recolor screenshots to imply a shipped light app. Validate both modes and logo variants; a user theme toggle is optional |

### Asset inventory

| Asset | Make in code vs capture | Acceptance conditions |
| --- | --- | --- |
| Hero: photo → extracted fields → Manual Review → matched revenue | CSS/SVG/browser-device frames and step transitions in code; genuine Quorvane screen crops plus synthetic document/photo | Human confirmation is a visible required gate. Missing PO or price mismatch cannot animate directly to success. No generated imitation UI presented as the actual product |
| Synthetic handwritten case sheet and implant stickers | Fictional source document created specifically for demo; capture camera presentation after validation | No patient names, DOB, MRNs, real case documents, real manufacturer logo, or actual clinical record. Owner approves synthetic REF/LOT content and visible sample values |
| Extraction/Manual Review desktop | New screenshot | Fields/line items readable; human confirms; no real document preview. Do not feature confidence percentages without approval |
| PO match/mismatch and Add PO | Screenshots with code callouts/arrows | Use exact current labels. Add PO's two-step confirm shown only with verified rollout status |
| Confirmed revenue/commissions | Screenshot of real calculation UI | Show split/flat/per-rep capability without inventing controls; approve any visible fictional numbers |
| Dashboard and team rankings | Current desktop screenshot plus limited crops | Quorvane only; distinguish confirmed totals from exposure; visible numbers need approval even if seeded |
| Territory and device usage | Current screenshot, static crop | Generic fictional facilities; no real customer sites/locations; no suggestion of shipped cross-facility analytics or recall alerts |
| Cases workspace | Desktop screenshot | Current status labels, no patient identifiers or real row data; can support product page and explanatory callouts |
| Rep mobile | Real mobile viewport screenshot inside simple CSS frame | Confirm availability. Show capture/rep workflow rather than only shrinking desktop; no browser notifications/personal account UI |
| Intelligence chat | Optional real screenshot with **Pilot** label | Synthetic aggregate question/answer; organization scope visible; no patient-level prompts or cross-org result implication |
| Workflow diagram | Semantic HTML ordered steps + SVG connectors | Text equivalent; capture → extract → Manual Review → PO match/resolve → confirm → calculate commissions; branch for missing PO/mismatch |
| Feature/security icons | Consistent small SVG set in code | Decorative icons hidden from assistive tech; descriptive icons labeled; no seals, certification-like “ISO” tile, or provider logo wall |
| Brand assets | Reuse approved vectors; prepare lockups/favicon/OG in later work | Owner resolves refined symbol merge and wordmark first. No unsolicited regeneration of approved geometry |
| Social card | Code-generated 1200 × 630 branded card | Approved headline and mark; no customer proof or sensitive screenshot; explicit metadata dimensions and alt |
| Founder image | Owner-provided/approved photograph if desired | Permission and current bio; no stock team presented as actual employees |

The hero should have a useful static first frame. Progressive enhancement can advance steps on scroll or via buttons without trapping scroll. Provide pause/replay for any auto-running sequence and a reduced-motion/static path. Keyboard users must reach the same explanatory content. Avoid video/WebGL/carousel dependencies for the first release; an optional captioned walkthrough may follow.

### Safe capture procedure for a later authorized stage

1. Owner confirms the fictional **Quorvane Orthopedic Partners** tenant and demo-only access. Do not browse production/customer tenants, export customer records, or discover credentials from environment files.
2. Verify fixture provenance with the owner before opening screens. Use dedicated synthetic uploads with no patient identifiers, real documents, real manufacturer/customer marks, or real facility/person data. Fictional organization approval alone does not approve every embedded number or third-party name.
3. Use a dedicated demo browser profile/account; disable personal notifications, extensions, autofill, and unrelated tabs. Verify organization and role before each capture. Keep camera-roll/system UI out of frame.
4. Capture stable desktop and mobile viewports at appropriate resolution. Record screen, role, release status, date, and safe-data provenance in a capture manifest. Use exact status labels and current UI; do not fabricate unavailable states.
5. Review every pixel including menus, tooltips, documents, charts, email headers, filenames, URLs, and hidden preview panels. Reject unsafe captures; rebuild synthetic fixtures instead of relying on blur over real data. Strip image metadata and inspect again.
6. Obtain owner approval for each publishable asset and every visible metric/name. Label approved images “Fictional demo data.” If numerical approval is withheld, use approved nonnumeric crops or explanatory diagrams until approval exists.
7. Export appropriately sized AVIF/WebP plus fallbacks, explicit dimensions, useful alt text, and optimized device frames. Keep raw captures private and outside public assets until reviewed. Commit only approved final assets in a future implementation stage.

No new screenshots, synthetic records, animations, or brand assets were created in Stage A.

## 5. Trust and security: publication gates

### Supported by the supplied product brief

These can form factual draft copy today, without adding unverified implementation guarantees:

- “Every case is confirmed by a person in Manual Review.”
- “Role-based access for admins, managers, finance staff, and reps.”
- “Passkey and MFA sign-in.” Do not replace with “MFA enforced for everyone” without verification.
- “AI-assisted extraction with human confirmation.”
- “Admin intelligence chat is in pilot, with server-computed, organization-scoped aggregate answers.” Keep the pilot label adjacent.
- “Zuredex is a multi-tenant platform for distributors.” This alone does not establish a particular isolation mechanism or certify security.

### Must be verified before publication

| Proposed trust statement | Required owner evidence / review |
| --- | --- |
| Product built on Google Cloud services | Current service/deployment inventory for Cloud Run, BigQuery, Storage, KMS, SQL, Firebase; distinguish marketing Vercel hosting. Do not imply Google endorsement |
| One isolated dataset per customer | Definition of tenant/dataset, coverage across stores, access controls and query routing; owner security review |
| Insert-only audit trails | Actual append-only behavior, event coverage, actor/time recording, access and retention; avoid “every action” unless proven |
| Patient identifiers are not stored as raw values | Exact transformation/storage behavior across structured data, original documents, logs, backups, support and AI services; owner and counsel approve scope. Never translate to “no PHI exists anywhere” |
| Encryption, algorithms, key management, fail-closed controls | Verification for each storage/transit path; KMS presence alone does not prove end-to-end coverage |
| BAA-governed processing and executed subprocessor agreements | Counsel verifies contracting entities, executed agreements, applicable services and customer conditions |
| Customer data not used to train models | Owner verifies provider configurations, contracts, retention, and exceptions; counsel approves wording |
| Privacy rights, retention/deletion, subprocessors, marketing analytics | Counsel approves actual operating policy and responsible contact; operational owner confirms it is implementable |
| Production customer proof or Summit demonstration | Explicit owner authorization for wording, date/context, metrics, identity/logo/photo permissions; no implied sponsor/partner endorsement |

No HIPAA “compliant” or “certified” claim; no SOC 2, HITRUST, other certification badge, uptime claim, accuracy figure, customer/partner logo, or guaranteed financial result. Terms mentioning legal frameworks do not authorize marketing certification language. Do not conflate roadmap underpayment detection with current price-mismatch detection.

## 6. Conversion, forms, and legal footer

Primary CTA: **Request a Demo**. Secondary: **See How It Works**. Keep Client Login discoverable but visually secondary. Proposed demo promise: a walkthrough of capture, Manual Review, matching, and commissions using fictional demo data. Do not promise a meeting length, immediate response, free trial, or onboarding timeline until the owner confirms it. Existing scheduler is a 60-minute route; consider a shorter introductory meeting only after owner agreement.

### Proposed request form

- Required: name, work email, company, role (owner/operator, manager, finance, rep, manufacturer, investor).
- Optional structured interest choice: document intake, PO matching, commissions, dashboards, company inquiry. Avoid attachments and free-text case descriptions in the initial form; no patient, surgeon, procedure, case, PO, or document-upload fields.
- Clear note: “Business inquiries only. Do not submit patient information or case documents.” Link Privacy immediately beside submit; separate optional marketing consent from the service request if marketing follow-up is planned.
- Server-side schema/length validation, body-size limits, output encoding, same-origin/CSRF safeguards as appropriate, rate limits, honeypot/time checks, and an accessible bot challenge only when needed. Choose the provider after privacy/accessibility review. Never trust client-side validation alone.
- Proposed routing: a server-side provider sends validated requests to **`analytics@zuredex.com`**, the existing public contact, only after the owner confirms it is monitored and appropriate. Optional CRM destination is a separate owner decision. Use a verified sender domain and the submitter's address as Reply-To; never spoof the submitter. No email or lead was sent in this audit.
- Confirm success only after durable acceptance/delivery handoff; prevent duplicate submissions; show accessible inline errors and a mailto fallback on failure. Alert the responsible owner on persistent delivery failures. Avoid logging submission bodies or including submitted data in URLs/analytics.
- Retention, authorized inbox/CRM readers, deletion handling, and follow-up responsibility require explicit operational ownership. Provide a scheduling link after success without silently transmitting form values to the scheduler.

Track consent-appropriate, non-sensitive events such as demo CTA click, form start, accepted submission, booking-link click, and login click. Do not record entered values, document contents, email addresses, or session replay of the form. A booking-link click is not a booked demo; qualified/booked conversion requires a verified downstream signal. No analytics vendor is selected or installed by this report.

Footer must retain Terms and Privacy, verified company identity, contact, Security, and Client Login. Add privacy coverage for the marketing site/form/scheduler before enabling collection. Counsel should resolve the currently published draft Privacy Policy and approve any changes to Terms; do not silently rewrite contractual commitments as a design task.

## 7. Targets and risks

### Acceptance targets for the refresh

| Area | Proposed target / verification |
| --- | --- |
| Performance lab | Median of three comparable production runs: mobile performance ≥90, desktop ≥95; no new regressions on product, security, demo, or legal routes. Use Lighthouse as a diagnostic, not a product claim |
| Real users | At the 75th percentile, mobile and desktop separately: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1. Establish real-user measurement if traffic permits; do not substitute lab TBT for INP. Threshold source: [Google Web Vitals](https://web.dev/articles/vitals) |
| Budgets | Initial mobile route transfer target ≤1 MB, hero visual ≤250 KB, initial compressed JS target ≤150 KB subject to measured Next baseline. Lazy-load below-fold imagery; no autoplay hero video. Budgets are engineering proposals, not current results |
| Delivery | Explicit image dimensions/sizes and modern formats; load only needed font families/weights, prefer system or self-hosted fonts; keep headline visible without entrance-animation dependence; reserve layout space; defer optional chat/video/analytics |
| Accessibility | WCAG **2.2 AA** target across all routes/states. Normal text ≥4.5:1, large text ≥3:1, meaningful UI boundaries/focus ≥3:1 as applicable. Clear focus, keyboard menu/form, landmarks/skip link, errors announced, text alternatives, no color-only meaning, zoom/reflow at 320 CSS px and 200% text zoom. Aim for 44×44 px controls while meeting AA target-size requirements. Reduced motion and pause controls; no scroll trap. [WCAG reference](https://www.w3.org/TR/WCAG22/) |
| Automated accessibility | Target Lighthouse accessibility 100 and zero serious/critical automated findings; supplement with keyboard and screen-reader testing. A score is not conformance certification |
| SEO | Unique intent-specific title/description and route-specific canonical/OG URL; consistent www host, complete sitemap, useful internal links, semantic content, accurate schema, approved share images. Validate rendered HTML and redirects; Search Console verification remains owner-dependent. [Canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) |
| Conversion quality | Mobile/desktop validation, spam handling, successful and failed delivery, duplicate-submit protection, privacy links and analytics event tests. Confirm who receives and follows up before launch |

### Risks and priority

1. **P0 — claim accuracy:** early-access language understates a live product while automatic/reliability/security absolutes overstate it. Establish a feature/status/copy approval checklist before new visuals.
2. **P0 — privacy and proof:** existing screenshots have unverified provenance; fictional demo data still needs per-asset review and numeric approval. No real customer capture, PHI, logos, scale numbers, or accuracy claims.
3. **P0 — legal consistency:** public draft Privacy and unverified operational assertions need counsel/owner review; do not let redesign silently change obligations.
4. **P1 — conversion gap:** a long page and external booking handoff lose context; new form needs a real destination and operational owner.
5. **P1 — accessibility/mobile:** low-contrast captions/links, hidden navigation, tiny UI, and unbounded animation undermine credibility and access.
6. **P1 — performance:** large eager PNGs, oversized raster favicon, excess font loads, and headline rendering delay; richer visuals could worsen mobile LCP unless budgeted.
7. **P1 — SEO:** inherited homepage canonicals and inconsistent host signals despite perfect Lighthouse SEO; rectify before expanding page count.
8. **P2 — branding/deployment:** pending symbol/unknown wordmark approval, print-specific work, unclear account-level Vercel settings, parent-root inference, and limited regression automation. Keep unrelated branches/files untouched. A Git push may trigger an existing Vercel preview automatically; no explicit deployment or hosting change is part of Stage A.

## 8. Phased plan, effort, and owner decisions

Estimates are focused person-days for one designer/developer familiar with the stack; owner/counsel review and fixture access are external elapsed-time dependencies. They are planning estimates, not delivery commitments. All implementation requires a later stage; Stage A stops after the report branch is pushed.

| Phase | Work and exit condition | Effort |
| --- | --- | ---: |
| Quick wins this week | Correct release labels and AI/human-review story; remove unsupported absolutes and zero-price offer; prioritize commissions/mismatch; make main landmark/mobile nav/focus/contrast/reduced-motion fixes; correct canonical/sitemap metadata; optimize existing *approved* assets/font loads. Keep legal substance behind counsel review | 3–5 days |
| Content and design foundation | Approve page map/copy matrix; resolve symbol/wordmark; define readable tokens, light sections, component states; approve demo capture manifest and form routing/privacy | 2–3 days |
| Demo assets and interaction prototype | Capture/review Quorvane screens; export crops/frames; prototype mandatory-review hero sequence and semantic flow diagram; reduced-motion version | 2–4 days |
| Site implementation | Home, Product, How It Works, Security, About, Request Demo, shared shell/legal presentation; responsive components; validated form and approved analytics; accurate metadata/schema | 5–7 days |
| QA and launch preparation | Keyboard/screen-reader/mobile/browser QA, three-run performance comparisons, form delivery/failure checks, security/copy/legal/asset sign-offs, redirect/link checks and rollback preparation | 2–3 days |

Larger redesign: approximately **11–17 person-days** after quick wins (some work can overlap with approvals), typically 3–4 calendar weeks for one person if approvals and demo access are timely. Scope can shrink to Home/Product/Demo first, but legal, accessibility, truthful status labeling, and safety review remain launch requirements. No implementation, merge, PR, or launch is authorized by this report.

### Questions for the owner

1. Is the primary conversion a distributor owner requesting a sales demo, and who handles finance/rep, manufacturer, and investor inquiries?
2. Which of Add PO, Dismiss/Restore, duplicate suggestions, and rep mobile are generally available versus rolling out? Which exact UI status labels should be used in screenshots?
3. Can we say the product is in production without identifying a customer? Separately, what proof, if any, is explicitly approved: anonymous scale figures, live handwriting demonstration narrative, event name/photos, testimonials, names/logos? Silence means none is approved.
4. Who will provision/verify Quorvane demo access and approve each screenshot, synthetic source document, visible metric, and identity? Which real names or manufacturer marks must be replaced in its fixtures before capture?
5. Should the refined symbol be merged later? Is there an approved wordmark/lockup outside this repository? What light/dark variants and favicon uses are approved?
6. Who can verify Google Cloud services, per-customer dataset isolation, insert-only audit scope, patient-identifier handling, encryption, and model-training/retention assertions? Who is counsel for BAA/privacy/Terms review?
7. Is `analytics@zuredex.com` the correct monitored destination for demo requests? Who follows up, what CRM (if any), what retention policy, and should the current 60-minute booking flow change?
8. Should pricing remain sales-led for this refresh, or are packaging and public prices ready for approval? Confirm there is no intended free offer before removing the zero-price schema in implementation.
9. Which founder/team identities, biographies, photos, location details, and contact information are approved for About? Should investor/manufacturer material remain private and request-based?
10. What is enabled in Vercel Analytics/Speed Insights, Search Console, scheduler tracking, and preview deployment protection? Who owns those accounts and approves consent/analytics behavior?
11. Who is the final approver for copy, legal content, demo assets, and release availability, and what date should the redesign support?

**Stage A stop condition:** save this report on `investigate/landing-refresh`, commit this document only, push that branch, report the result in chat, create no PR, and stop. No next-stage work should begin automatically.
