/* ─────────────────────────────────────────────────────────────────────────────
 * Bilgi Sistemleri Yönetimi ve Denetimi (1020)
 *
 * Kaynak: SPL 1020 Çalışma Notu, 31 Aralık 2025 (210 sayfa)
 * Sınavlar: Bilgi Sistemleri Bağımsız Denetim Sınavı
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1016 (Muhasebe ve Finansal Raporlama) ile bağımsız denetim açısından
 * minimum çakışma vardır; 1020 ise tamamen bilgi sistemleri yönetişimi
 * (IT Governance), bilgi güvenliği, IT denetimi, uluslararası çerçeveler
 * (COBIT, ISO 27000, ITIL, COSO, ITAF) ve SPK BS mevzuatı (VII-128.10,
 * III-62.2, Seri X No 22) konularına odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1020 } from "./mevzuat-1020";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011,
 *     ...mevzuat1012, ...mevzuat1013, ...mevzuat1014,
 *     ...mevzuat1015, ...mevzuat1016, ...mevzuat1017,
 *     ...mevzuat1018, ...mevzuat1019, ...mevzuat1020
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1020: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1020 BİLGİ SİSTEMLERİ YÖNETİMİ VE DENETİMİ
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1020",
    title: "Modül · Bilgi Sistemleri Yönetimi ve Denetimi (1020)",
    lessons: [
      // ──────────── Ders 1: BS Stratejisi, Yönetişim ve Kurumsal Mimari ────────────
      {
        id: "m1020-l1",
        title: "Bilgi Sistemleri Stratejisi, Yönetişim ve Kurumsal Mimari",
        duration: "10 dk",
        summary: {
          title: "Bilgi Sistemleri Stratejisi ve Yönetişimi",
          intro:
            "Bilgi sistemleri stratejisi; işletmenin iş hedefleri ile bilgi teknolojileri yatırımlarının uyumlandırılması sürecidir. Bilgi Sistemleri Yönetişimi (IT Governance); BS'lerin işletmenin stratejik amaçlarına hizmet etmesini sağlayan, kararların verildiği ve sorumluluğun belirlendiği çerçeve, yapı ve süreçler bütünüdür. Kurumsal Mimari (Enterprise Architecture) — iş, veri, uygulama ve teknoloji mimarilerinin bütününü tanımlar; BS yatırımlarının stratejik hedeflere hizmet etmesini sağlar.",
          sections: [
            {
              heading: "BS Stratejisi ve Yönetişimi",
              icon: "shield",
              items: [
                {
                  strong: "BS Stratejisinin Tanımı:",
                  text: "İşletmenin iş hedeflerini destekleyecek BT yatırımlarının, projelerin ve kaynakların planlanması süreci; üst yönetim sponsorluğunda hazırlanır, periyodik gözden geçirilir.",
                },
                {
                  strong: "BS Yönetişimi (IT Governance):",
                  text: "BS'lerin yönetim ve denetim sorumluluklarını belirleyen, BS yatırımlarının değer yarattığını ve risklerin yönetildiğini güvence altına alan yönetim çerçevesi; yönetim kurulunun sorumluluğundadır.",
                },
                {
                  strong: "Bilgi Sistemleri Yönlendirme Komitesi:",
                  text: "BS yatırımları, stratejisi ve önemli projelerin değerlendirildiği; üst yönetim temsilcilerinin ve iş birim yöneticilerinin yer aldığı yönlendirme komitesi; BS-iş uyumunu sağlar.",
                },
                {
                  strong: "BS-İş Uyumu (Business-IT Alignment):",
                  text: "BS yatırımlarının iş ihtiyaçlarına uyumlu olmasının sağlanması; iş ve BS stratejisinin entegrasyonu; ortak hedefler, ortak terminoloji, düzenli iletişim mekanizmaları gerektirir.",
                },
                {
                  strong: "Bilgi Güvenliği Yönetişimi:",
                  text: "Bilginin gizliliği, bütünlüğü ve erişilebilirliğinin (CIA — Confidentiality, Integrity, Availability) sağlanması; bilgi güvenliği politikası, güvenlik standartları, prosedürler, sorumluluklar tanımlanır.",
                },
              ],
            },
            {
              heading: "Kurumsal Mimari ve Kontrol Ortamı",
              icon: "trend",
              items: [
                {
                  strong: "Kurumsal Mimari Bileşenleri:",
                  text: "İş Mimarisi (Business Architecture) — iş süreçleri ve organizasyon; Veri Mimarisi — veri yapıları ve yönetimi; Uygulama Mimarisi — yazılım uygulamaları; Teknoloji Mimarisi — donanım, ağ, altyapı.",
                },
                {
                  strong: "TOGAF ve Diğer Çerçeveler:",
                  text: "TOGAF (The Open Group Architecture Framework) — en yaygın kurumsal mimari çerçevesi; ADM (Architecture Development Method) ile mimari geliştirme döngüsü; Zachman Framework başka bir alternatiftir.",
                },
                {
                  strong: "Veri Mimarisi ve Yönetimi:",
                  text: "Veri modeli, veri akış diyagramları, veri sözlüğü, veri sahipliği, master data management (MDM), veri kalitesi yönetimi; veri varlık olarak görülmeli, korunmalı ve değer üretmeli.",
                },
                {
                  strong: "Kontrol Ortamı (Control Environment):",
                  text: "COSO çerçevesinde tanımlanan; iç kontrolün tonunu belirleyen üst yönetimin tutumu, etik değerler, yetkinlik standartları, organizasyon yapısı, yetki ve sorumluluk dağıtımı.",
                },
                {
                  strong: "Bilgi Güvenliği Politikası:",
                  text: "Üst yönetim tarafından onaylanmış yazılı doküman; güvenlik vizyonu, hedefleri, sorumluluklar, kabul edilebilir kullanım, kayıt yönetimi, olay yönetimi, ihlal yaptırımları içerir.",
                },
              ],
            },
          ],
          tip: "BS Yönetişimi = stratejik yön belirleme (üst yönetim), BS Yönetimi = operasyonel uygulama. CIA üçgeni: Confidentiality (gizlilik), Integrity (bütünlük), Availability (erişilebilirlik). Kurumsal Mimari 4 katman: İş + Veri + Uygulama + Teknoloji. TOGAF = en yaygın EA çerçevesi. BS-İş Uyumu kritik — iş ve teknoloji entegrasyonu.",
        },
        questions: [
          {
            text: "Bilgi güvenliğinin temel ilkeleri olan 'CIA üçgeni' aşağıdakilerden hangisinden oluşur?",
            options: [
              { id: "A", text: "Customer, Information, Asset" },
              { id: "B", text: "Confidentiality (Gizlilik), Integrity (Bütünlük), Availability (Erişilebilirlik) — bilgi güvenliği yönetiminin temelidir; gizlilik yetkisiz erişimden korur, bütünlük verinin doğruluğunu sağlar, erişilebilirlik yetkili kişilerin ihtiyaç anında erişebilmesini garanti eder." },
              { id: "C", text: "Control, Inspection, Audit" },
              { id: "D", text: "Cost, Income, Asset" },
            ],
            correct: "B",
            explanation:
              "Bilgi Güvenliği'nin üç temel ilkesi olan CIA Triad (Üçgeni) bilgi güvenliği yönetiminin altın standardıdır: (1) Confidentiality (Gizlilik) — bilginin yetkisiz kişilerden korunması; yetkili olmayanların bilgiye erişimi engellenir. Mekanizmalar: şifreleme, erişim kontrolleri (kullanıcı adı/şifre, çok faktörlü kimlik doğrulama), veri sınıflandırma, fiziksel güvenlik, NDA (gizlilik anlaşmaları). İhlal örnekleri: veri sızıntısı, hack saldırıları, içeriden sızıntı. (2) Integrity (Bütünlük) — bilginin doğruluğunun ve tutarlılığının korunması; yetkisiz değiştirmenin engellenmesi. Mekanizmalar: hash fonksiyonları, dijital imzalar, veri yedekleme, sürüm kontrolü, denetim izleri. İhlal örnekleri: veri manipülasyonu, ortadaki adam saldırıları, yazılım hataları. (3) Availability (Erişilebilirlik) — bilginin yetkili kullanıcılar tarafından ihtiyaç anında erişilebilir olması. Mekanizmalar: yedekleme (backup), iş sürekliliği planları (BCP), olağanüstü durum kurtarma (DR), yedekli sistem mimarisi (redundancy), DDoS koruması, kapasite planlama. İhlal örnekleri: sistem çökmesi, DDoS saldırıları, doğal afetler. Bu üç ilke birbiriyle dengeli olarak yönetilmelidir; bir ilkeye aşırı odaklanma diğerlerini zayıflatabilir.",
          },
          {
            text: "Bilgi Sistemleri Yönetişimi (IT Governance) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca BS departmanının sorumluluğudur." },
              { id: "B", text: "BS'lerin işletmenin stratejik amaçlarına hizmet etmesini sağlayan, kararların verildiği ve sorumluluğun belirlendiği çerçeve, yapı ve süreçler bütünüdür; ÜST YÖNETİM ve YÖNETİM KURULUNUN sorumluluğundadır." },
              { id: "C", text: "Yalnızca BT operasyonlarını içerir." },
              { id: "D", text: "Yalnızca proje yönetimidir." },
            ],
            correct: "B",
            explanation:
              "Bilgi Sistemleri Yönetişimi (IT Governance) ile Bilgi Sistemleri Yönetimi (IT Management) arasında kritik bir ayrım vardır: (1) BS Yönetişimi — kararların kim tarafından alındığını, sorumlulukların kime ait olduğunu, hesap verme mekanizmalarını ve genel yönü belirler. STRATEJİK düzeyde işler. ÜST YÖNETİM ve YÖNETİM KURULU sorumluluğundadır. Sorumluluklar: BS stratejisi onayı, BS yatırım kararları, BS performansının izlenmesi, BS risklerinin yönetilmesi, BS-iş uyumu, (2) BS Yönetimi — yönetişim çerçevesinde belirlenen yönü uygulayan operasyonel yönetimdir. CIO (Chief Information Officer), CTO gibi BS yöneticilerinin sorumluluğundadır. Görevler: günlük operasyonlar, proje yönetimi, teknik kararlar. Önemli IT Governance Standartları: (a) COBIT (Control Objectives for Information and Related Technologies) — ISACA, en yaygın IT yönetişim çerçevesi, (b) ISO/IEC 38500 — IT governance standardı, (c) IT-CMF (IT Capability Maturity Framework). Etkin IT Governance'in 5 alanı (COBIT 2019): Stratejik Uyum, Değer Yaratma, Risk Yönetimi, Kaynak Yönetimi, Performans Ölçümü.",
          },
          {
            text: "Kurumsal Mimari (Enterprise Architecture) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca yazılım kodlama tekniğidir." },
              { id: "B", text: "İş Mimarisi (iş süreçleri ve organizasyon), Veri Mimarisi (veri yapıları), Uygulama Mimarisi (yazılım uygulamaları), Teknoloji Mimarisi (donanım, ağ, altyapı) olmak üzere dört katmandan oluşan bütüncül yapıdır; TOGAF en yaygın çerçevedir." },
              { id: "C", text: "Yalnızca veritabanı tasarımıdır." },
              { id: "D", text: "Yalnızca bulut bilişim altyapısıdır." },
            ],
            correct: "B",
            explanation:
              "Kurumsal Mimari (Enterprise Architecture - EA); bir organizasyonun iş, bilgi, uygulama ve teknoloji bileşenlerinin nasıl tasarlandığını, organize edildiğini ve birbirleriyle etkileşim halinde olduğunu tanımlayan yüksek seviyeli, holistik (bütüncül) bir yapıdır. Dört katmanı vardır: (1) İş Mimarisi (Business Architecture) — organizasyonun stratejisi, hedefleri, iş süreçleri, organizasyon yapısı, iş kuralları; 'İŞ ne yapıyor?' sorusunu yanıtlar, (2) Veri/Bilgi Mimarisi (Data/Information Architecture) — veri yapıları, veri modelleri, veri akışı, ana veri yönetimi (MDM); 'Hangi veri var ve nasıl yönetiliyor?', (3) Uygulama Mimarisi (Application Architecture) — yazılım uygulamaları, uygulama portföyü, uygulamalar arası entegrasyon; 'Hangi uygulamalar var?', (4) Teknoloji Mimarisi (Technology Architecture) — donanım, ağ, işletim sistemleri, veri tabanı yönetim sistemleri, bulut altyapısı; 'Hangi teknolojiler kullanılıyor?'. Yaygın Çerçeveler: TOGAF (en yaygın) — The Open Group Architecture Framework, ADM döngüsü; Zachman Framework — 6x6 matris yaklaşımı; FEAF (Federal Enterprise Architecture Framework) — ABD federal hükümeti; Gartner Methodology. EA'nın faydaları: BS-iş uyumu, paralel çabaların azaltılması, BT yatırım optimizasyonu, değişiklik yönetiminin kolaylaştırılması.",
          },
          {
            text: "Bilgi Sistemleri Yönlendirme Komitesi (IS Steering Committee) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca BS personelinden oluşur." },
              { id: "B", text: "BS yatırımları, stratejisi ve önemli projelerin değerlendirildiği; üst yönetim temsilcileri (CEO, CFO, COO) ve iş birim yöneticilerinin yer aldığı yönlendirme komitesidir; BS-iş uyumunu sağlar ve önemli kararları onaylar." },
              { id: "C", text: "Yalnızca yıllık bütçeyi onaylar." },
              { id: "D", text: "Yalnızca BS departmanının iç toplantısıdır." },
            ],
            correct: "B",
            explanation:
              "Bilgi Sistemleri Yönlendirme Komitesi (IS/IT Steering Committee veya BS Yönlendirme Komitesi); BS yatırımlarının ve stratejisinin yönetimi için kurulan ve karar verici özelliğe sahip bir komitedir. Yapısı: (1) Üyeler — Üst Yönetim Temsilcileri (CEO, CFO, COO, CIO), iş birim yöneticileri (büyük bölümlerin başkanları), bazen yönetim kurulu üyeleri. ÖNEMLİ: sadece BS personelinden değil, ÇOK FONKSİYONLU bir komitedir, (2) Başkan — genelde CEO, COO veya CFO; CIO sekreterya görevini yapar. Görevleri: (a) BS Stratejisinin Onayı — BS stratejisini ve uzun vadeli planları onaylama, (b) BS Yatırım Kararları — büyük projeleri, satın almaları onaylama (örn. yeni ERP sistemi), bütçe tahsisleri, (c) BS Önceliklerinin Belirlenmesi — iş öncelikleriyle uyumlu BS girişimlerinin seçimi, (d) BS Performansının İzlenmesi — KPI'lar, hedeflere ulaşma, projelerin durumu, (e) BS Risklerinin Yönetimi — temel riskleri değerlendirme, kabul edilebilir risk seviyelerinin belirlenmesi, (f) BS-İş Uyumunun Sağlanması — BS yatırımlarının iş hedeflerine hizmet etmesini garantileme. Toplantı sıklığı: genelde aylık veya iki ayda bir. Etkin yönlendirme komitesi BS yatırımlarının başarı oranını ciddi şekilde artırır; yokluğu BS-iş ayrımına ve gereksiz yatırımlara yol açar.",
          },
          {
            text: "BS Yönetiminde 'görevler ayrılığı' (segregation of duties) ilkesi için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca büyük kuruluşlarda uygulanır." },
              { id: "B", text: "Bir işlem üzerinde tüm yetkilerin tek kişide toplanmasının engellenmesi ilkesidir; geliştirme-test-üretim ortamları farklı kişilerce yönetilmeli, sistem yöneticileri kendi çalışmalarını denetleyememeli, kritik işlemler en az iki kişi onayı gerektirmeli; hata, hile ve yetkisiz erişim riskini azaltır." },
              { id: "C", text: "Tüm görevler tek kişide toplanmalıdır." },
              { id: "D", text: "Yalnızca finans departmanında uygulanır." },
            ],
            correct: "B",
            explanation:
              "Görevler Ayrılığı (Segregation of Duties — SoD); iç kontrolün ve bilgi sistemleri güvenliğinin temel ilkelerinden biridir. Temel Mantık: bir işlem üzerinde tüm yetkilerin tek bir kişide toplanması, o kişinin hata yapma veya kötü niyetli davranma riskini ciddi şekilde artırır. Bu nedenle yetkiler birden fazla kişiye dağıtılır. BS Ortamında Klasik Görev Ayrılıkları: (1) Geliştirme vs Üretim — yazılım geliştiriciler doğrudan üretim ortamına müdahale edememeli; geliştirme → test → üretim arası geçişler farklı kişilerce yönetilmeli, (2) Sistem Yönetici vs Veritabanı Yöneticisi — birinin atadığı yetkileri diğerinin denetlemesi, (3) Veri Girişi vs Onaylama — bir kişi veri girer, başka bir kişi onaylar, (4) İşlem Yetkisi vs Erişim Yetkisi — işlemi onaylayan ile sistemde gerçek girişi yapan kişi farklı olmalı, (5) Denetçi vs Yönetici — iç denetim bağımsız olmalı, denetlediği alanda yönetim yetkisi olmamalı. Küçük Organizasyonlar — tam SoD uygulamak zor olabilir; bu durumda telafi edici kontroller (compensating controls) uygulanır: sıkı izleme, denetim izleri, yönetim incelemesi. SoD eksikliği genelde finansal manipülasyon, suistimal ve yetkisiz veri değişikliklerinde kendini gösterir.",
          },
        ],
      },
      // ──────────── Ders 2: BS Denetimi Kavramları, Türler ve Kontroller ────────────
      {
        id: "m1020-l2",
        title: "Bilgi Sistemleri Denetim Kavramları, Türleri ve Kontroller",
        duration: "10 dk",
        summary: {
          title: "BS Denetim Kavramları ve Kontroller",
          intro:
            "Bilgi Sistemleri Denetimi (IT Audit); bilgi sistemlerinin yönetiminin, kontrollerinin, güvenliğinin ve denetlenen işletmenin BS politikalarına ve yasal düzenlemelere uyumunun bağımsız olarak değerlendirilmesi sürecidir. BS denetimi finansal denetimden farklıdır; teknik bilgi gerektirir ve CIA üçgenine, sistem güvenilirliğine, veri bütünlüğüne odaklanır. Denetim türleri ve kontroller (uygulama, genel, önleyici, tespit edici, düzeltici) BS denetiminin temel kavramlarıdır.",
          sections: [
            {
              heading: "BS Denetim Türleri",
              icon: "shield",
              items: [
                {
                  strong: "Genel Kontroller Denetimi:",
                  text: "BS ortamının tümünü etkileyen, uygulamalardan bağımsız kontrolleri inceler: fiziksel güvenlik, mantıksal erişim kontrolleri, değişiklik yönetimi, yedekleme, iş sürekliliği, sistem geliştirme yaşam döngüsü.",
                },
                {
                  strong: "Uygulama Kontrolleri Denetimi:",
                  text: "Belirli bir iş uygulamasının (örn. muhasebe sistemi, ERP) içindeki kontrolleri inceler: girdi kontrolleri (validation), işleme kontrolleri, çıktı kontrolleri, veri bütünlüğü kontrolleri.",
                },
                {
                  strong: "Sistem Geliştirme Denetimi:",
                  text: "Yeni geliştirilen veya değiştirilen sistemlerin SDLC (System Development Life Cycle) süreçlerine uygunluğunu denetler: gereksinim analizi, tasarım, kodlama, test, kabul, devreye alma.",
                },
                {
                  strong: "Güvenlik Denetimi (Security Audit):",
                  text: "Bilgi güvenliği kontrollerinin yeterliliğini değerlendirir: kullanıcı erişim yönetimi, ağ güvenliği, antivirüs, güvenlik duvarları, log yönetimi, olay müdahale (incident response).",
                },
                {
                  strong: "Uyum Denetimi (Compliance Audit):",
                  text: "İşletmenin yasal düzenlemelere (KVKK, GDPR, SPK Tebliğleri, sektör mevzuatı) ve iç politikalarına uyumunu değerlendirir.",
                },
              ],
            },
            {
              heading: "Kontrol Türleri ve Sınıflandırma",
              icon: "trend",
              items: [
                {
                  strong: "Önleyici Kontroller (Preventive):",
                  text: "Hata, hile veya istenmeyen olayın oluşmasını ÖNLEMEYE yönelik kontroller: şifre politikaları, fiziksel erişim engelleri, görevler ayrılığı, eğitim, yetkilendirme onayları.",
                },
                {
                  strong: "Tespit Edici Kontroller (Detective):",
                  text: "Hata veya hileyi OLDUKTAN SONRA tespit eden kontroller: denetim izleri (audit logs), mutabakatlar, sürpriz sayımlar, hata raporları, izinsiz giriş tespit sistemleri (IDS).",
                },
                {
                  strong: "Düzeltici Kontroller (Corrective):",
                  text: "Tespit edilen hata veya zararı DÜZELTMEYE yönelik kontroller: yedekten geri yükleme, iş sürekliliği planları, olay müdahale prosedürleri, yamaların uygulanması.",
                },
                {
                  strong: "Uygulamalı vs Manuel Kontroller:",
                  text: "Otomatik (Programlanmış) Kontroller — sistem tarafından uygulanan, tutarlı ama esnek olmayan (örn. otomatik veri doğrulama); Manuel Kontroller — insan müdahalesi gerektiren, esnek ama hataya açık.",
                },
                {
                  strong: "Genel ve Uygulama Kontrolleri:",
                  text: "Genel Kontroller (ITGC) — BS ortamının tümünü etkileyen (yetki yönetimi, değişiklik yönetimi, yedekleme); Uygulama Kontrolleri — belirli iş süreciyle ilgili (örneğin müşteri sipariş kontrolleri).",
                },
              ],
            },
          ],
          tip: "BS Denetim Türleri: Genel kontrol + Uygulama kontrolü + Sistem geliştirme + Güvenlik + Uyum. Kontrol Amaçları: ÖN-LEYİCİ (önle), TES-PİT EDİCİ (gör), DÜ-ZELTİCİ (düzelt) — bunlar 3'lü bir hattır. ITGC (Genel Kontroller) = altyapı düzeyinde, Uygulama Kontrolleri = iş süreci düzeyinde. SDLC = sistem geliştirme yaşam döngüsü.",
        },
        questions: [
          {
            text: "Bilgi sistemleri kontrolleri 'amaçlarına göre' aşağıdakilerden hangi üç kategoride sınıflandırılır?",
            options: [
              { id: "A", text: "Manuel, otomatik, hibrit" },
              { id: "B", text: "ÖNLEYİCİ (preventive) — olayı önlemeye yönelik, TESPİT EDİCİ (detective) — olayı tespit eden, DÜZELTİCİ (corrective) — zararı düzeltmeye yönelik kontroller; bu üçü birlikte 'üç savunma hattı' oluşturur." },
              { id: "C", text: "Yüksek, orta, düşük" },
              { id: "D", text: "Stratejik, taktik, operasyonel" },
            ],
            correct: "B",
            explanation:
              "BS Kontrollerinin amaçlarına göre üç temel sınıflandırması savunma derinliği (defense in depth) yaklaşımının temel taşıdır: (1) Önleyici Kontroller (Preventive Controls) — Birinci savunma hattı; hata, hile veya istenmeyen olayın olmasını ÖNLEMEYE yöneliktir. Örnekler: şifre politikaları, çok faktörlü kimlik doğrulama (MFA), fiziksel erişim engelleri (kart girişi, biometric), görevler ayrılığı (SoD), yetkilendirme onayları, kullanıcı eğitimi, güvenlik farkındalık programları, güvenlik duvarları. Avantajı: en etkili ve maliyet-verimli kontrol türü; sorunlar daha yaşanmadan önler, (2) Tespit Edici Kontroller (Detective Controls) — İkinci savunma hattı; önleyici kontroller başarısız olursa, olayı OLDUKTAN SONRA tespit eder. Örnekler: denetim izleri (audit trails/logs), günlük mutabakatlar, sürpriz sayımlar, izinsiz giriş tespit sistemleri (IDS), antivirüs taramaları, anomali tespit yazılımları, performans izleme, video gözetim. Önemi: tüm önleyici kontroller her zaman başarılı olamaz; tespit edici kontroller olayı en kısa sürede yakalamak için kritiktir, (3) Düzeltici Kontroller (Corrective Controls) — Üçüncü savunma hattı; tespit edilen olayın zararını DÜZELTİR ve normale döner. Örnekler: yedekten geri yükleme (backup restore), iş sürekliliği planı (BCP), olağanüstü durum kurtarma planı (DRP), olay müdahale prosedürleri, güvenlik yamalarının uygulanması, kullanıcı erişiminin iptali. Bu üç kategori birbirini tamamlar; etkili bir güvenlik mimarisi üçünü dengeli bir şekilde kullanır.",
          },
          {
            text: "Genel Kontroller (ITGC - IT General Controls) ile Uygulama Kontrolleri arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki kavram aynıdır." },
              { id: "B", text: "Genel Kontroller (ITGC): BS ortamının tümünü etkileyen, uygulamalardan BAĞIMSIZ kontrolleri içerir (yetki yönetimi, değişiklik yönetimi, yedekleme, fiziksel güvenlik). Uygulama Kontrolleri: belirli bir iş uygulamasının (örn. ERP, muhasebe sistemi) içindeki kontrollerdir (girdi doğrulama, hesaplama kontrolleri, onay akışları)." },
              { id: "C", text: "Genel kontroller manuel, uygulama kontrolleri otomatiktir." },
              { id: "D", text: "Genel kontroller yalnızca finansal, uygulama kontrolleri yalnızca operasyoneldir." },
            ],
            correct: "B",
            explanation:
              "ITGC ve Uygulama Kontrolleri, BS denetiminin iki temel kategori türüdür: (1) Genel Kontroller (IT General Controls — ITGC) — BS ortamının TÜMÜNE uygulanan ve uygulamalardan BAĞIMSIZ olarak işleyen kontrollerdir. Tüm uygulamaları, sistemleri ve verileri korur. Beş Ana Alan: (a) Sistem Geliştirme Kontrolleri (Change Management) — yazılım değişikliklerinin onaylı, test edilmiş ve dokümante edilmiş şekilde üretime alınması, (b) Bilgi Güvenliği (Logical Access) — kullanıcı yetkilendirme, kimlik doğrulama, erişim kontrolleri, şifre yönetimi, (c) Yedekleme ve Felaket Kurtarma — yedekleme prosedürleri, BCP/DRP, iş sürekliliği, (d) Fiziksel Güvenlik — veri merkezi erişimi, çevresel kontroller (yangın, ısı), (e) BS Operasyonları — iş zamanlama (job scheduling), problem yönetimi, kapasite yönetimi. ITGC eksikliği TÜM uygulamaları etkiler. (2) Uygulama Kontrolleri (Application Controls) — BELİRLİ bir uygulama içindeki kontrollerdir; uygulama özelinde tasarlanmıştır. Üç Tip: (a) Girdi Kontrolleri — veri doğruluğu kontrolleri (validation): format kontrolü, alan zorunluluğu, mantıksal kontroller, (b) İşleme Kontrolleri — hesaplama doğruluğu, mantık kontrolleri, batch toplam kontrolleri, (c) Çıktı Kontrolleri — rapor doğruluğu, dağıtım kontrolleri, hata raporları. Sıralama: ITGC önce değerlendirilir; eğer ITGC zayıfsa uygulama kontrollerine güvenmek mümkün olmaz. Bu nedenle BS denetimi genelde ITGC ile başlar.",
          },
          {
            text: "BS denetiminde 'önleyici' (preventive) kontrol için aşağıdakilerden hangisi bir ÖRNEKTİR?",
            options: [
              { id: "A", text: "Denetim izleri (audit logs) — sistem olaylarının kaydedilmesi" },
              { id: "B", text: "Şifre politikaları, görevler ayrılığı, fiziksel erişim engelleri, çok faktörlü kimlik doğrulama (MFA), güvenlik duvarları gibi olayın olmasını önlemeye yönelik kontroller" },
              { id: "C", text: "Yedekten geri yükleme — felaket sonrası" },
              { id: "D", text: "Olay müdahale prosedürleri — saldırı sonrası" },
            ],
            correct: "B",
            explanation:
              "Önleyici Kontroller (Preventive Controls); BS güvenlik mimarisinin BİRİNCİ savunma hattıdır ve hata, hile veya istenmeyen olayın oluşmasını engellemeyi amaçlar. Önemli Örnekler: (1) Şifre Politikaları — minimum uzunluk, karmaşıklık, düzenli değişim zorunluluğu, tekrar kullanım engelleme, (2) Çok Faktörlü Kimlik Doğrulama (MFA) — şifre + SMS kodu, biometric + token gibi iki veya daha fazla doğrulama faktörü; %99.9 güvenlik artışı sağladığı gösterilmiştir, (3) Görevler Ayrılığı (Segregation of Duties) — kritik işlemlerin tek kişide yoğunlaşmaması, (4) Fiziksel Erişim Engelleri — kart geçişli kapılar, biometric kilitler, güvenlik kameraları, güvenlik personeli, (5) Güvenlik Duvarları (Firewalls) — yetkisiz ağ trafiğini engelleyen sistemler, (6) Antivirüs/Anti-malware — zararlı yazılımları sisteme girmeden engelleme, (7) Kullanıcı Eğitimi ve Farkındalık — phishing simülasyonları, güvenlik eğitimleri; insan faktörünü güçlendirme, (8) Yetkilendirme Onayları — kritik işlemler öncesi onay alma, (9) Şifreleme — yetkisiz erişim olsa bile verinin okunamaması. Diğer Seçenekler Niçin Yanlış: (A) Denetim izleri TESPİT EDİCİ kontroldür (olaydan SONRA loglar), (C) Yedekten geri yükleme DÜZELTİCİ kontroldür (zararı düzeltir), (D) Olay müdahale DÜZELTİCİ kontroldür. Önleyici kontroller en etkin ve maliyet-verimli kontrollerdir; sorunlar yaşanmadan engellenir.",
          },
          {
            text: "Bilgi Sistemleri Denetiminde 'denetim izleri' (audit logs/trails) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca finansal işlemler için tutulur." },
              { id: "B", text: "Sistemde gerçekleşen tüm önemli olayların (giriş, çıkış, veri değişikliği, yetki değişikliği, hatalı erişim denemeleri) zaman damgalı kaydedilmesidir; tespit edici (detective) kontrol türüdür, geriye dönük inceleme ve hesap verebilirlik için kritiktir." },
              { id: "C", text: "Yalnızca yöneticiler tarafından erişilir." },
              { id: "D", text: "Yalnızca yıllık olarak tutulur." },
            ],
            correct: "B",
            explanation:
              "Denetim İzleri (Audit Logs/Trails); BS güvenliğinin kritik bir bileşenidir ve sistemde gerçekleşen önemli olayların zaman damgalı kaydını tutar. Önemli Özellikler: (1) Niteliği — Tespit Edici (Detective) kontrol türüdür; olayları olduktan sonra kaydeder, gerçek zamanlı önleme yapmaz, (2) Kapsanan Olaylar — sisteme giriş/çıkış, başarılı/başarısız oturum açma denemeleri, veri değişiklikleri (ne, kim, ne zaman, eski değer, yeni değer), yetki değişiklikleri, ayrıcalıklı işlemler (admin erişimi), kritik dosya erişimleri, yapılan sorgular, sistem yapılandırma değişiklikleri, (3) Tutulan Bilgiler — Tarih/Saat, Kullanıcı kimliği, IP adresi, Yapılan işlem, Etkilenen kayıt/varlık, İşlemin sonucu (başarılı/başarısız), (4) Korunma Gereksinimleri — Logların kendisi de korunmalıdır; aksi halde saldırgan izleri silebilir. SIEM (Security Information and Event Management) sistemleri logları merkezi olarak toplar ve gerçek zamanlı analiz eder, (5) Kullanım Alanları — Adli inceleme (forensic): saldırı sonrası ne olduğunu anlama, Uyum (compliance): yasal düzenlemelere uyum kanıtı (KVKK, GDPR, SOX), İç denetim: kontrolların etkinliği değerlendirme, Hesap verebilirlik: kim ne yaptı izleyebilme, (6) Yasal Gereksinimler — SPK Tebliği VII-128.10 ve III-62.2, BDDK düzenlemeleri, KVKK denetim izlerini zorunlu kılar. Düzenli log inceleme, anomali tespit yazılımları (UEBA — User and Entity Behavior Analytics) ile birleştirilince güvenlik için son derece etkilidir.",
          },
          {
            text: "BS denetiminde 'sistem geliştirme yaşam döngüsü' (SDLC) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca kodlama aşamasını içerir." },
              { id: "B", text: "Yeni geliştirilen veya değiştirilen sistemlerin gereksinim analizi, tasarım, kodlama, test (birim/entegrasyon/kabul), kullanıcı kabul testi (UAT), devreye alma ve bakım aşamalarını içeren yaşam döngüsüdür; her aşamada kontroller ve dokümantasyon gerektirir." },
              { id: "C", text: "Yalnızca büyük projeler için kullanılır." },
              { id: "D", text: "Yalnızca finansal sistemler için uygulanır." },
            ],
            correct: "B",
            explanation:
              "Sistem Geliştirme Yaşam Döngüsü (System Development Life Cycle — SDLC); bir yazılım sisteminin fikir aşamasından emekliliğe kadar geçirdiği aşamaları tanımlayan yapısal süreçtir. Klasik Aşamaları: (1) Gereksinim Analizi (Requirements Analysis) — kullanıcı ihtiyaçları toplanır, iş gereksinimleri belirlenir, gereksinim dokümantasyonu hazırlanır, (2) Tasarım (Design) — sistem mimarisi, veri tabanı tasarımı, kullanıcı arayüzü tasarımı, güvenlik tasarımı, (3) Kodlama (Development/Coding) — yazılımın kodlanması, kod standardına uyum, kod incelemeleri (peer review), (4) Test (Testing) — Birim Testi (unit test) — bireysel modüller, Entegrasyon Testi — modüller arası, Sistem Testi — uçtan uca, Kullanıcı Kabul Testi (UAT — User Acceptance Test) — son kullanıcı onayı, (5) Devreye Alma (Deployment) — üretim ortamına alma; aşamalı geçiş veya tam değişim, (6) Bakım (Maintenance) — hata düzeltme, güncellemeler, performans iyileştirmeleri, kullanıcı destek. SDLC Metodolojileri: Waterfall (geleneksel, doğrusal); Agile (yinelemeli, sprintlerle); Scrum, Kanban (Agile alt türleri); DevOps (geliştirme + operasyon birleşik). BS Denetimi İlgisi: BS denetçisi SDLC süreçlerine uygunluğu kontrol eder: gereksinimler net mi, tasarım onaylanmış mı, testler kapsamlı mı, görev ayrılığı (geliştirme/test/üretim ortamları farklı kişiler), değişiklik kontrolü, dokümantasyon. SDLC eksikliği sıkça yazılım hatalarına, güvenlik açıklarına ve iş kesintilerine neden olur.",
          },
        ],
      },
      // ──────────── Ders 3: BS Denetim Süreci — Planlama, Kanıt, Raporlama ────────────
      {
        id: "m1020-l3",
        title: "BS Denetim Süreci — Planlama, Kanıt Toplama ve Raporlama",
        duration: "9 dk",
        summary: {
          title: "BS Denetim Süreci",
          intro:
            "Bilgi Sistemleri Denetim Süreci; bağımsız ve sistemli bir şekilde BS kontrollerinin etkinliğinin değerlendirildiği yapılandırılmış bir süreçtir. Süreç üç ana aşamadan oluşur: (1) Denetim Planlama — denetim hedefleri, kapsam, risk değerlendirmesi, önemlilik düzeyi; (2) Denetim Gerçekleştirme — kanıt toplama, kontrollerin test edilmesi, örnekleme; (3) Denetim Raporlama — bulgular, öneriler, denetim görüşü. Her aşamada dokümantasyon ve mesleki muhakeme kritik öneme sahiptir.",
          sections: [
            {
              heading: "Denetim Planlaması ve Risk",
              icon: "shield",
              items: [
                {
                  strong: "Denetim Planlaması Aşamaları:",
                  text: "(1) Denetlenen işletmenin anlaşılması, (2) Risk değerlendirmesi, (3) Önemlilik düzeyi belirlenmesi, (4) Denetim hedef ve kapsamının belirlenmesi, (5) Kaynak tahsisi (zaman, personel, uzmanlık), (6) Denetim programının hazırlanması.",
                },
                {
                  strong: "Risk Bazlı Denetim Yaklaşımı:",
                  text: "Modern BS denetiminin standart yaklaşımı; denetçi yüksek risk alanlarına (kritik sistemler, finansal raporlama, regülasyon altındaki süreçler) daha fazla kaynak ayırır; düşük risk alanlarında daha sınırlı testler yapar.",
                },
                {
                  strong: "Önemlilik (Materiality):",
                  text: "Bir bulgunun finansal tablolar veya işletme faaliyetleri üzerindeki etkisinin, kullanıcıların kararlarını değiştirebilecek düzeyde olup olmadığı; kantitatif (tutar bazlı) ve kalitatif (etki bazlı) olarak değerlendirilir.",
                },
                {
                  strong: "Doğal Risk vs Kontrol Riski:",
                  text: "Doğal Risk (Inherent Risk) — kontroller olmadığı varsayımı altında oluşacak risk; Kontrol Riski — mevcut kontrollerin riski yakalayamama olasılığı; Tespit Riski — denetçinin bulguyu yakalayamama riski. Bunların çarpımı 'Denetim Riski'dir.",
                },
                {
                  strong: "Denetim Programı:",
                  text: "Denetimin nasıl, ne zaman, kim tarafından yapılacağını gösteren detaylı doküman; her denetim alanı için yapılacak testler, gerekli kanıtlar, sorumlu denetçi, süre tahminleri yer alır.",
                },
              ],
            },
            {
              heading: "Kanıt Toplama, Örnekleme ve Raporlama",
              icon: "trend",
              items: [
                {
                  strong: "Denetim Kanıtı Türleri:",
                  text: "Fiziksel İnceleme (fiziksel sayım, ziyaret), Belge İncelemesi (politika, prosedür, log), Gözlem (sürecin yerinde izlenmesi), Sorgulama (görüşme, soru), Yeniden Hesaplama (sistemin hesaplamasının teyidi), Analitik İnceleme (oran ve trend analizleri).",
                },
                {
                  strong: "Denetim Kanıtının Niteliği:",
                  text: "Yeterlilik (Sufficient) — yeterli miktarda kanıt, Uygunluk (Appropriate) — kanıt güvenilir ve ilgili olmalı; üçüncü taraflardan elde edilen kanıt iç kanıtlardan daha güvenilirdir.",
                },
                {
                  strong: "Denetimde Örnekleme:",
                  text: "Tüm popülasyon yerine örnek incelenir; İstatistiksel Örnekleme — sonuçların matematiksel olarak genellenebilirliği var; İstatistiksel Olmayan (Yargı Bazlı) — denetçinin profesyonel yargısına dayalı seçim.",
                },
                {
                  strong: "Denetim Raporlama:",
                  text: "Yönetici Özeti, Denetim Kapsamı ve Hedefleri, Metodoloji, Bulgular ve Öneriler (risk seviyesiyle birlikte), Yönetim Yanıtları, Denetim Görüşü (Olumlu/Şartlı/Olumsuz/Görüş Vermekten Kaçınma).",
                },
                {
                  strong: "İzleme (Follow-up):",
                  text: "Denetim raporundaki bulguların ve önerilerin nasıl uygulandığının izlenmesi; düzeltici eylem planları (CAP — Corrective Action Plan), izleme tarihleri, sorumlu kişiler; eksik kalan eylemler bir sonraki denetimde tekrar incelenir.",
                },
              ],
            },
          ],
          tip: "Denetim 3 aşaması: Planlama → Gerçekleştirme → Raporlama. Denetim Riski = Doğal Risk × Kontrol Riski × Tespit Riski. Önemlilik (materiality) hem kantitatif hem kalitatif. Kanıt türleri: fiziksel, belge, gözlem, sorgulama, yeniden hesaplama, analitik. Örnekleme: istatistiksel veya yargı bazlı. Raporda 4 görüş tipi: olumlu/şartlı/olumsuz/kaçınma.",
        },
        questions: [
          {
            text: "BS Denetiminde 'Denetim Riski' formülü aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Denetim Riski = Doğal Risk + Kontrol Riski + Tespit Riski" },
              { id: "B", text: "Denetim Riski = Doğal Risk × Kontrol Riski × Tespit Riski; üç bileşenin ÇARPIMIDIR; doğal risk yüksek + kontrol riski yüksek + tespit riski yüksek olursa toplam denetim riski katlanarak artar." },
              { id: "C", text: "Denetim Riski = Doğal Risk − Tespit Riski" },
              { id: "D", text: "Denetim Riski = Doğal Risk / Kontrol Riski" },
            ],
            correct: "B",
            explanation:
              "Denetim Riski Modeli (Audit Risk Model); BS ve finansal denetimin temel risk değerlendirme çerçevesidir. Formül: Denetim Riski (AR) = Doğal Risk (IR) × Kontrol Riski (CR) × Tespit Riski (DR). Üç Bileşen: (1) Doğal Risk (Inherent Risk — IR) — kontroller olmadığı varsayımı altında bir alanda hata/hile oluşma olasılığı; alanın doğasından kaynaklanır. Yüksek doğal risk örnekleri: karmaşık hesaplamalar, manuel müdahale gerektiren süreçler, yüksek hacimli işlemler, ilişkili taraf işlemleri. Denetçinin değiştirme yetkisi yoktur, sadece değerlendirir, (2) Kontrol Riski (Control Risk — CR) — mevcut iç kontrollerin önemli bir hatayı yakalayamama veya önleyememe olasılığı; işletmenin kontrol ortamına ve uygulamalarına bağlıdır. Yüksek kontrol riski örnekleri: zayıf görevler ayrılığı, yetersiz onay süreçleri, eksik dokümantasyon, manuel kontroller. Denetçi değiştiremez ama test ederek değerlendirir, (3) Tespit Riski (Detection Risk — DR) — denetçinin mevcut önemli bir yanlışlığı yakalayamama olasılığı; denetçinin uyguladığı testlerin etkinliğine bağlıdır. Denetçi KONTROL EDEBİLEN tek değişkendir; örnek büyüklüğünü artırarak veya daha kapsamlı testler yaparak tespit riskini düşürebilir. Pratik Kullanım: kabul edilebilir denetim riski genelde %5 olarak belirlenir; doğal ve kontrol riski yüksekse, denetçinin tespit riskini düşük tutması (yani daha çok test yapması) gerekir. Bu model risk bazlı denetim yaklaşımının temelidir.",
          },
          {
            text: "BS denetiminde 'denetim kanıtı'nın niteliği için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Kanıt yalnızca yazılı belge olmalıdır." },
              { id: "B", text: "Denetim kanıtı YETERLI (sufficient — yeterli miktar) ve UYGUN (appropriate — güvenilir ve ilgili) olmalıdır; üçüncü taraflardan elde edilen kanıt iç kanıtlardan daha güvenilirdir; orijinal belgeler kopyalardan daha güvenilirdir; yazılı kanıt sözlü ifadelerden daha güvenilirdir." },
              { id: "C", text: "Bir tek kanıt türü yeterlidir." },
              { id: "D", text: "Kanıt yalnızca yöneticinin verdiği bilgilerdir." },
            ],
            correct: "B",
            explanation:
              "Denetim Kanıtının Niteliği (Quality of Audit Evidence); denetim görüşünün dayandığı temeli oluşturur ve BDS 500 standardında düzenlenmiştir. İki Temel Özellik: (1) Yeterlilik (Sufficiency) — KANIT MİKTARI ile ilgilidir. Yeterli kanıt = denetçinin bir alan hakkında makul sonuç çıkarabileceği miktarda kanıt. Yetersiz miktarda kanıt → denetim görüşü dayanıksız olur. Risk yüksekse daha çok kanıt gerekir, (2) Uygunluk (Appropriateness) — KANIT KALİTESİ ile ilgilidir, iki alt boyutu var: (a) İlgililik (Relevance) — kanıtın test edilen denetim hedefiyle ilgili olması; örneğin yetkilendirme kontrolünü test etmek için onay imzaları kanıt, ama veri yedekleme kanıtı değildir, (b) Güvenilirlik (Reliability) — kanıtın doğruluğuna güvenilebilmesi. Güvenilirlik hiyerarşisi: ÜÇÜNCÜ TARAF kanıt (banka teyidi, müşteri teyidi) > İÇ kanıt iyi kontrollerle > İÇ kanıt zayıf kontrollerle > Sözlü beyan; ORİJİNAL belge > Kopya/fotokopi; YAZILI kanıt > Sözlü ifade; DENETÇİNİN BİZZAT topladığı (fiziksel sayım, gözlem) kanıt > Sunulan kanıt. BS denetiminde özel kanıt türleri: sistem ekran görüntüleri (zaman damgalı), CAATs (Computer Assisted Audit Techniques) sonuçları, log analizi raporları, penetrasyon test sonuçları. Yetersiz veya uygunsuz kanıt durumunda denetçi: (a) daha fazla kanıt toplar, (b) görüş bildirmekten kaçınabilir, (c) şartlı görüş verebilir.",
          },
          {
            text: "Denetimde 'istatistiksel örnekleme' ile 'istatistiksel olmayan örnekleme' arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki yöntem aynıdır." },
              { id: "B", text: "İstatistiksel Örnekleme: rastgele seçim ve olasılık teorisine dayanır; sonuçlar matematiksel olarak tüm popülasyona genellenebilir, sapma ve güven aralıkları hesaplanır. İstatistiksel Olmayan (Yargı Bazlı) Örnekleme: denetçinin profesyonel yargısına dayalı seçim (yüksek riskli, büyük tutarlı, anormal kalemler); sonuçlar matematiksel olarak genellenemez ama hedefli ve verimli olabilir." },
              { id: "C", text: "İstatistiksel örnekleme yalnızca büyük şirketlerde, yargı bazlı yalnızca küçük şirketlerde kullanılır." },
              { id: "D", text: "İstatistiksel olmayan örnekleme yasaktır." },
            ],
            correct: "B",
            explanation:
              "Denetim Örneklemesi (Audit Sampling); denetçinin tüm popülasyonu (örneğin tüm fatura kayıtları, tüm kullanıcı yetkilendirme istekleri) inceleme imkânı olmadığında, temsili bir örnek inceleyerek genel bir sonuç çıkarma yöntemidir. İki Ana Yaklaşım: (1) İstatistiksel Örnekleme (Statistical Sampling) — Olasılık ve istatistik teorisine dayanır. Özellikleri: (a) Rastgele Seçim — her kalemin seçilme olasılığı eşit/belirli; rastgele sayı üreteçleri kullanılır, (b) Matematiksel Genelleme — örnek sonuçlarından popülasyon hakkında istatistiksel çıkarım yapılır, sapma payı (margin of error) ve güven aralığı (confidence interval) hesaplanır (örn. %95 güven düzeyinde sapma %2), (c) Avantajları — objektif, savunulabilir, kanıtlanabilir; (d) Türleri — Olasılığa Orantılı Boyut (PPS) örnekleme, tabakalı örnekleme, sistematik örnekleme. (2) İstatistiksel Olmayan Örnekleme (Non-statistical / Judgmental Sampling) — Denetçinin profesyonel yargısına dayanır. Özellikleri: (a) Hedefli Seçim — yüksek riskli kalemler, büyük tutarlı işlemler, anormal/sıra dışı kalemler, ilişkili taraf işlemleri özellikle seçilir, (b) Olasılık Teorisi YOK — sonuçlar matematiksel olarak genellenemez, (c) Avantajları — verimli, denetçinin uzmanlığını kullanır, yüksek riskli alanlara odaklanır, (d) Dezavantajları — subjektif, denetçi yargısına bağımlı. Hangisi Kullanılır? — Aynı denetimde her ikisi birlikte kullanılabilir: yüksek riskli alanlar için yargı bazlı seçim, geniş popülasyonlar için istatistiksel.",
          },
          {
            text: "BS denetim raporunda yer alan denetim görüşü türleri için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca olumlu görüş verilir." },
              { id: "B", text: "Dört görüş türü vardır: Olumlu Görüş (Unqualified) — kontroller etkin; Şartlı Görüş (Qualified) — sınırlı bir alanda eksiklik; Olumsuz Görüş (Adverse) — kontroller önemli ölçüde yetersiz; Görüş Bildirmekten Kaçınma (Disclaimer) — denetçi yeterli kanıt toplayamadı; ayrıca özel paragraflar (dikkat çekici hususlar, devam eden hususlar) eklenebilir." },
              { id: "C", text: "Yalnızca olumlu ve olumsuz iki görüş türü vardır." },
              { id: "D", text: "Görüş türleri yalnızca finansal denetim için geçerlidir, BS denetiminde puan verilir." },
            ],
            correct: "B",
            explanation:
              "BS Denetim Raporu Görüşleri; finansal denetimle paralel olarak dört temel görüş türü içerir (BDS 700-705 standartlarına uygun). (1) Olumlu Görüş (Unqualified / Unmodified Opinion) — BS kontrolleri TÜM önemli yönleriyle etkindir ve gerçeği yansıtmaktadır; herhangi bir önemli bulgu yoktur. Hedef sonuçtur. (2) Şartlı Görüş (Qualified Opinion) — BS kontrollerinin GENEL OLARAK etkin olduğu, ancak BELİRLİ bir alanda sınırlı eksiklik (örn. yetki yönetiminde bir zayıflık, ancak diğer kontroller iyi) tespit edildiği durumdadır. 'Şu konu hariç olmak üzere kontroller etkindir' şeklinde belirtilir. (3) Olumsuz Görüş (Adverse Opinion) — BS kontrolleri önemli ölçüde YETERSİZDİR; çoklu ve yaygın bulgular var. Sisteme güvenilemez, ciddi düzeltme gerekli. Nadiren verilir, ancak çok kötü durumlarda. (4) Görüş Bildirmekten Kaçınma (Disclaimer of Opinion) — denetçi yeterli ve uygun kanıt toplayamamıştır; örnekler: sistemlere erişim engellendi, belgeler sunulmadı, dokümantasyon eksik. Görüş veremez. Ek Paragraflar: (a) Dikkat Çekici Hususlar (Emphasis of Matter) — görüşü etkilemez ama önemli bir konuya dikkat çeker (örn. devam eden büyük bir BS dönüşümü), (b) Diğer Hususlar (Other Matter) — denetimin niteliği veya kapsamı hakkında ek açıklama. BS denetim raporu yapısı: Yönetici Özeti, Denetim Kapsamı/Hedefleri, Metodoloji, Bulgular (risk seviyesine göre — Yüksek/Orta/Düşük), Öneriler, Yönetim Yanıtları, Sonuç (Görüş).",
          },
          {
            text: "BS denetim sürecinde 'izleme' (follow-up) aşamasının amacı nedir?",
            options: [
              { id: "A", text: "Yeni bir denetim başlatmaktır." },
              { id: "B", text: "Önceki denetim raporundaki bulguların ve önerilerin nasıl uygulandığının izlenmesi; düzeltici eylem planlarının (CAP — Corrective Action Plan) tamamlanma durumu, izleme tarihleri ve sorumlu kişiler kontrol edilir; eksik kalan eylemler bir sonraki denetimde tekrar incelenir." },
              { id: "C", text: "Yalnızca yönetime sunum yapmaktır." },
              { id: "D", text: "Denetim raporunu yeniden yazmaktır." },
            ],
            correct: "B",
            explanation:
              "Denetim İzleme (Audit Follow-up); BS denetiminin tamamlayıcı ve kritik bir aşamasıdır; denetim sonuçlarının pratik etkisini garanti altına alır. Süreç: (1) Düzeltici Eylem Planı (Corrective Action Plan — CAP) — Denetimden çıkan her önemli bulgu için yönetim bir CAP hazırlar: bulgu açıklaması, kök neden, planlanan düzeltici eylem, sorumlu kişi, hedef tamamlanma tarihi, gerekli kaynaklar, (2) İzleme Frekansı — kritik bulgular için 3 ayda bir, orta öncelikliler için 6 ayda bir, düşük öncelikliler için yıllık izleme yapılabilir, (3) İzleme Yöntemleri — (a) Yazılı Statü Raporu — yönetim CAP ilerlemesini raporlar, (b) Yerinde İnceleme — denetçi tekrar yerinde test yapar; özellikle 'çözüldü' beyan edilen bulgular için, (c) İlerleme Toplantıları — yönetim ve denetçi düzenli görüşür, (4) İzleme Sonuçları — (a) Tamamen Çözüldü — bulgu kapatılır, (b) Kısmen Çözüldü — daha fazla eylem gerekli, izleme devam eder, (c) Çözülmedi — yeni bir izleme planı veya yönetim kuruluna eskalasyon, (d) Risk Kabul — yönetim riski kabul edip eylem yapmama kararı (yazılı olarak belgelenmeli), (5) Denetim Komitesine Raporlama — özellikle halka açık şirketlerde, açık bulguların durumu yönetim kuruluna ve denetim komitesine düzenli raporlanır. Etkin İzlemenin Önemi: bulgular kapatılmazsa denetim kağıt üzerinde kalır; kontroller iyileşmez; aynı bulgular her yıl tekrar eder. Bazı kuruluşlar 'kapanmış bulgu oranını' bir KPI olarak takip eder. Etkin izleme, BS denetiminin organizasyonel öğrenme ve sürekli iyileştirme sağlamasının yolu.",
          },
        ],
      },
      // ──────────── Ders 4: SPK BS Mevzuatı — Seri X No 22, VII-128.10, III-62.2 ────────────
      {
        id: "m1020-l4",
        title: "SPK BS Mevzuatı — Seri X No 22, VII-128.10 ve III-62.2 Tebliğleri",
        duration: "10 dk",
        summary: {
          title: "SPK Bilgi Sistemleri Mevzuatı",
          intro:
            "Türkiye'de sermaye piyasası kuruluşlarının BS yönetimi ve denetimi üç temel SPK tebliği ile düzenlenir: (1) Seri X No 22 — Sermaye Piyasasında Bağımsız Denetim Standartları Tebliği (genel denetim çerçevesi); (2) VII-128.10 — Bilgi Sistemleri Yönetimine İlişkin Usul ve Esaslar Tebliği (BS yönetimi yükümlülükleri); (3) III-62.2 — Bilgi Sistemleri Bağımsız Denetim Tebliği (BS denetim faaliyeti). Ayrıca BDDK, GİB, SEDDK, TCMB ve Sayıştay gibi diğer regülasyon otoritelerinin de BS düzenlemeleri vardır.",
          sections: [
            {
              heading: "VII-128.10 — Bilgi Sistemleri Yönetimi Tebliği",
              icon: "shield",
              items: [
                {
                  strong: "Tebliğin Amacı ve Kapsamı:",
                  text: "Sermaye piyasası kurumlarının (BIST, MKK, Takasbank, aracı kurumlar, PYŞ, GYO, yatırım ortaklıkları) BS yönetimi konusundaki yükümlülüklerini düzenler; BS yönetişimi, organizasyon, risk yönetimi, kontroller, dış kaynak kullanımı ele alınır.",
                },
                {
                  strong: "BS Yönetim Yükümlülükleri:",
                  text: "Yönetim Kurulu ve üst yönetim BS sorumluluğu, BS Yönlendirme Komitesi kurulması, yazılı BS politikaları ve prosedürleri, BS strateji planı, risk yönetimi çerçevesi.",
                },
                {
                  strong: "BS Kontrolleri:",
                  text: "Erişim Kontrolleri (kullanıcı yönetimi, yetkilendirme, kimlik doğrulama), Değişiklik Yönetimi, Yedekleme ve Sürdürülebilirlik (BCP/DRP), Olay Yönetimi, Veri Güvenliği, Şifreleme.",
                },
                {
                  strong: "Dış Kaynak Kullanımı:",
                  text: "Bulut hizmetler, dış hizmet sağlayıcılar, yazılım/donanım tedariki için yazılı sözleşmeler, hizmet seviye anlaşmaları (SLA), güvenlik gereksinimleri, denetim hakları; kritik fonksiyonların dış kaynakla yönetilmesi için onay gerekir.",
                },
                {
                  strong: "Muafiyetler ve Geçici Hükümler:",
                  text: "Belirli küçük ölçekli kuruluşlar için kademeli uygulama; geçici muafiyetler; SPK Tebliğ değişikliklerine uyum süresi tanımlıdır.",
                },
              ],
            },
            {
              heading: "III-62.2 BS Denetim ve Seri X No 22",
              icon: "trend",
              items: [
                {
                  strong: "III-62.2 BS Bağımsız Denetim Tebliği:",
                  text: "Sermaye piyasası kurumlarının BS denetiminin nasıl yapılacağını düzenler; yetkili BS denetim kuruluşları, denetim metodolojisi, denetim ekibi nitelikleri, raporlama yükümlülükleri.",
                },
                {
                  strong: "BS Bağımsız Denetim Yetkisi:",
                  text: "BS denetim yapmak için SPK tarafından yetkilendirilmiş bağımsız denetim kuruluşu olmak; en az 1 CISA (Certified Information Systems Auditor) veya eşdeğer sertifikalı uzman bulundurmak; CISM, CISSP gibi sertifikalar değer kazanır.",
                },
                {
                  strong: "Denetim Periyodu ve Raporu:",
                  text: "Kapsama giren kurumlar (BIST, MKK, Takasbank, geniş yetkili aracı kurumlar, bankalar) için en az 2 yılda bir BS bağımsız denetimi zorunludur; rapor SPK'ya iletilir, yönetim kuruluna sunulur.",
                },
                {
                  strong: "Seri X No 22 (Genel Bağımsız Denetim):",
                  text: "Sermaye piyasası bağımsız denetiminin genel çerçevesidir; bağımsız denetçi nitelikleri, denetim kuruluşunun nitelikleri, etik ilkeler, bağımsızlık kuralları, denetim raporları, KGK ile uyum.",
                },
                {
                  strong: "BDDK ve Diğer Düzenleyiciler:",
                  text: "Bankalar için BDDK düzenlemeleri (Bilgi Sistemleri ve İş Süreçleri Bağımsız Denetimi Hakkında Yönetmelik), sigorta için SEDDK, vergi için GİB, kamu kurumları için Sayıştay; sektör spesifik BS yükümlülükleri vardır.",
                },
              ],
            },
          ],
          tip: "3 ana SPK BS Tebliği: VII-128.10 (Yönetim), III-62.2 (Denetim), Seri X No 22 (Genel BD çerçevesi). BS denetimi periyodu: en az 2 yılda bir. CISA = BS denetim için altın sertifika. Bankalar = BDDK ek düzenlemeleri. Dış kaynak (bulut, IT outsourcing) yazılı sözleşme + SLA + denetim hakkı gerektirir.",
        },
        questions: [
          {
            text: "SPK'nın VII-128.10 sayılı 'Bilgi Sistemleri Yönetimine İlişkin Usul ve Esaslar Tebliği' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca finansal raporlamayı düzenler." },
              { id: "B", text: "Sermaye piyasası kurumlarının (BIST, MKK, Takasbank, aracı kurumlar, PYŞ, GYO, yatırım ortaklıkları) BS yönetimi konusundaki yükümlülüklerini düzenler; BS yönetişimi, organizasyon, kontroller, risk yönetimi ve dış kaynak kullanımına ilişkin esasları belirler." },
              { id: "C", text: "Yalnızca bankalar için geçerlidir." },
              { id: "D", text: "Yalnızca yazılım geliştirme şirketleri için düzenleme yapar." },
            ],
            correct: "B",
            explanation:
              "SPK'nın VII-128.10 sayılı Tebliği; Türkiye'deki sermaye piyasası kurumlarının BS yönetimi yükümlülüklerini düzenleyen temel mevzuattır. Kapsam: Sermaye piyasasındaki tüm anahtar kurumlar — BIST (Borsa İstanbul), MKK (Merkezi Kayıt Kuruluşu), Takasbank, aracı kurumlar (geniş yetkili, dar yetkili, kısmi yetkili), PYŞ (Portföy Yönetim Şirketleri), GYO (Gayrimenkul Yatırım Ortaklıkları), MKYO/MKYF, yatırım fonları, derecelendirme kuruluşları — bu tebliğ kapsamındadır. Temel Düzenleme Alanları: (1) BS Yönetişimi — Yönetim Kurulu sorumluluğu, BS Yönlendirme Komitesi, BS Strateji Planı, BS politikaları, (2) BS Organizasyonu — yeterli personel, görevler ayrılığı, eğitim, CIO/BS Birim Yöneticisi atanması, (3) Risk Yönetimi — BS risklerinin tespiti, değerlendirilmesi, yönetimi, sürekli izleme, (4) Bilgi Güvenliği — fiziksel güvenlik, mantıksal erişim kontrolleri, şifreleme, kimlik doğrulama, anti-malware, (5) Değişiklik Yönetimi — yazılım/donanım değişikliklerinin kontrollü yapılması, test, onay, dokümantasyon, (6) İş Sürekliliği ve Felaket Kurtarma — BCP/DRP, düzenli testler, alternatif veri merkezleri, (7) Dış Kaynak Kullanımı — bulut hizmetleri, SaaS uygulamaları, dış IT servisleri için yazılı sözleşmeler, SLA'lar, denetim hakları, (8) Olay Yönetimi — güvenlik olaylarının kaydedilmesi, yönetimi, raporlanması, (9) Veri Yönetimi — veri yaşam döngüsü, KVKK uyumu, yedekleme, arşivleme. SPK düzenli olarak bu yükümlülüklere uyumu denetler.",
          },
          {
            text: "SPK'nın III-62.2 sayılı 'Bilgi Sistemleri Bağımsız Denetim Tebliği' kapsamında sermaye piyasası kurumlarının BS denetim periyodu için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Her ay bir kez BS denetimi zorunludur." },
              { id: "B", text: "Kapsama giren sermaye piyasası kurumları (BIST, MKK, Takasbank, geniş yetkili aracı kurumlar) için en az 2 YILDA BİR BS bağımsız denetimi zorunludur; rapor SPK'ya iletilir ve yönetim kuruluna sunulur." },
              { id: "C", text: "Her 10 yılda bir BS denetimi yeterlidir." },
              { id: "D", text: "BS denetimi tamamen isteğe bağlıdır." },
            ],
            correct: "B",
            explanation:
              "SPK III-62.2 BS Bağımsız Denetim Tebliği uyarınca BS denetiminin periyodu ve süreci sıkı şekilde düzenlenmiştir: (1) Periyot — Kapsama giren sermaye piyasası kurumları için en az 2 YILDA BİR bağımsız BS denetimi yaptırılması zorunludur. Bazı kritik kurumlar için (BIST, MKK, Takasbank gibi piyasa altyapısı kurumları) yıllık denetim de uygulanabilir. (2) Kapsama Giren Kurumlar — (a) Piyasa Altyapı Kurumları: BIST, MKK, Takasbank, (b) Geniş Yetkili Aracı Kurumlar (tam yetkili), (c) Halka açık şirketler (II-14.1 uyarınca), (d) Sermaye piyasası kurumları (PYŞ, GYO, vb.). Küçük yatırım kuruluşları için kademeli uygulama olabilir. (3) Denetim Kuruluşu Niteliği — Denetimi yapan kuruluş SPK tarafından özel olarak yetkilendirilmiş 'BS Bağımsız Denetim Kuruluşu' olmalıdır; sıradan bağımsız denetim yetkisi yeterli değildir. Ekipte en az 1 CISA (Certified Information Systems Auditor) sertifikalı uzman bulunması gerekir. (4) Rapor — Denetim raporu SPK'ya iletilir, denetlenen kurumun yönetim kuruluna sunulur, KAP'a yayımlanabilir (halka açık kurumlar için). Rapor: yönetici özeti, kapsam, metodoloji, bulgular (risk seviyesine göre), öneriler, yönetim yanıtları, denetim görüşü içerir. (5) İzleme — bulguların yönetim tarafından düzeltilmesi izlenir; ciddi bulgular SPK'nın inceleme/işlem konusu olabilir. (6) Mesleki Sorumluluk Sigortası — BS denetim kuruluşu için zorunludur. Bu mevzuat çerçevesi 2008 finansal krizi sonrası BS riskinin sistemik öneminin anlaşılmasıyla şekillenmiştir.",
          },
          {
            text: "BS denetim ekiplerinde tercih edilen profesyonel sertifika 'CISA' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "CISA bir yazılım türüdür." },
              { id: "B", text: "Certified Information Systems Auditor — ISACA (Information Systems Audit and Control Association) tarafından verilen, BS denetimi alanındaki en yaygın ve prestijli uluslararası sertifikadır; SPK III-62.2 kapsamında BS bağımsız denetim ekibinde en az 1 CISA sahibi uzman bulundurulması gerekir; CISM, CISSP, CRISC gibi diğer ISACA/ISC2 sertifikaları da değerlidir." },
              { id: "C", text: "CISA yalnızca İngiltere için geçerlidir." },
              { id: "D", text: "CISA Türk Devleti tarafından verilen bir sertifikadır." },
            ],
            correct: "B",
            explanation:
              "CISA (Certified Information Systems Auditor); BS denetimi alanındaki en yaygın ve prestijli uluslararası sertifikadır. Detaylar: (1) Veren Kuruluş — ISACA (Information Systems Audit and Control Association); 1969'da kurulmuş, ABD merkezli, küresel bir profesyonel organizasyon, (2) Hedef Kitle — BS denetçileri, iç denetçiler, BS güvenlik uzmanları, danışmanlar, (3) Sınav İçeriği — beş ana alan: (a) Bilgi Sistemleri Denetim Süreci, (b) BT Yönetişimi ve Yönetimi, (c) Bilgi Sistemleri Edinim, Geliştirme ve Uygulaması, (d) Bilgi Sistemleri Operasyonları ve İş Esnekliği, (e) Bilgi Varlıklarının Korunması, (4) Şartlar — Sınavı geçmek + En az 5 yıl mesleki deneyim (eğitim ile yarıya indirilebilir) + Etik kurallarına bağlılık + Sürekli mesleki eğitim (yıllık CPE saatleri), (5) Türkiye'de Önemi — SPK III-62.2 Tebliği uyarınca, BS bağımsız denetim kuruluşlarının ekibinde EN AZ 1 CISA sertifikalı uzman bulunması zorunludur. BDDK denetimlerinde de aranır. Diğer Önemli BS/Güvenlik Sertifikaları: CISM (Certified Information Security Manager) — ISACA, güvenlik yönetimi odaklı; CISSP (Certified Information Systems Security Professional) — ISC2, güvenlik geneli; CRISC (Certified in Risk and Information Systems Control) — ISACA, risk yönetimi; CIA (Certified Internal Auditor) — IIA, genel iç denetim; COBIT 5/2019 Certification — IT governance; ISO 27001 Lead Auditor — bilgi güvenliği yönetim sistemi denetimi. BS denetim profesyonelleri için sürekli sertifika güncellemek ve birden fazla sertifikaya sahip olmak rekabet avantajı sağlar.",
          },
          {
            text: "SPK'nın Seri X No 22 sayılı 'Sermaye Piyasasında Bağımsız Denetim Standartları Tebliği' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca BS denetim standartlarını içerir." },
              { id: "B", text: "Sermaye piyasasında bağımsız denetimin GENEL çerçevesini belirler; bağımsız denetçi/denetim kuruluşu nitelikleri, etik ilkeler, bağımsızlık kuralları, denetim sözleşmeleri, denetim raporları, KGK düzenlemeleriyle uyum gibi konuları kapsar; III-62.2 (BS Denetim) ve diğer özel tebliğler bu genel çerçeve ile uyumludur." },
              { id: "C", text: "Sadece halka kapalı şirketler için geçerlidir." },
              { id: "D", text: "Hiçbir bağımsız denetim hükmü içermez." },
            ],
            correct: "B",
            explanation:
              "Seri X No 22 sayılı 'Sermaye Piyasasında Bağımsız Denetim Standartları Tebliği'; SPK'nın sermaye piyasası kurumları için bağımsız denetim faaliyetinin GENEL çerçevesini belirleyen ana mevzuattır. Düzenleme Alanları: (1) Denetime Tabi İşletmeler — halka açık ortaklıklar, yatırım kuruluşları (aracı kurumlar, PYŞ, GYO, yatırım fonları/ortaklıkları), piyasa altyapısı kurumları (BIST, MKK, Takasbank), bağımsız denetime tabi diğer kuruluşlar, (2) Bağımsız Denetimin Amacı ve Kapsamı — finansal tabloların TFRS/TMS standartlarına uyumunun değerlendirilmesi, makul güvence verilmesi, denetim raporunun ihraç edilmesi, (3) Bağımsız Denetim Faaliyetinde Bulunma Şartları — KGK tarafından yetkilendirme, yeterli personel, kalite kontrol sistemi, mesleki sorumluluk sigortası, (4) Bağımsız Denetçilerin Nitelikleri — eğitim, sınav, mesleki deneyim, KGK sicili, sürekli mesleki eğitim, (5) Etik İlkeler — Bağımsızlık (zihinsel ve görünüşte), Tarafsızlık, Profesyonel Yeterlilik ve Özen, Gizlilik, Profesyonel Davranış. KGK'nın Bağımsız Denetçiler için Etik Kuralları ile uyum, (6) Bağımsızlık Kuralları — aynı şirkete kapsamlı vergi/danışmanlık + denetim hizmetleri verme yasağı, denetim dönemi/rotasyon kuralları (kıdemli denetçi 7 yıl, ardından soğuma süresi), pay sahibi/yönetim ilişkisi yasakları, (7) Bağımsız Denetim Sözleşmeleri — yazılı sözleşme zorunluluğu, kapsam tanımı, ücretlendirme, (8) Denetim Raporları — TBB/KGK formatına uygunluk, görüş türleri, dipnotlar, (9) KGK İlişkisi — KGK düzenlemeleriyle uyum, sicil yönetimi, kalite kontrol incelemeleri. III-62.2 (BS Bağımsız Denetim) bu genel çerçeveye ek olarak BS denetim özelliklerini düzenler.",
          },
          {
            text: "BS yönetiminde 'dış kaynak kullanımı' (outsourcing, bulut hizmetler) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Dış kaynak kullanımı yasaktır." },
              { id: "B", text: "Yazılı sözleşme, hizmet seviye anlaşması (SLA), güvenlik gereksinimleri ve DENETİM HAKLARI içermek zorundadır; kritik fonksiyonların (örn. ana takas sistemi, müşteri verisi) dış kaynakla yönetilmesi için SPK onayı gerekebilir; veri yurtdışına çıkarsa KVKK kuralları uygulanır; dış kaynak sorumluluğu hâlâ kurumdadır." },
              { id: "C", text: "Sözleşme gerekmez, sözlü anlaşma yeterlidir." },
              { id: "D", text: "Dış kaynak yalnızca yabancı sağlayıcılarla yapılır." },
            ],
            correct: "B",
            explanation:
              "BS Dış Kaynak Kullanımı (Outsourcing/Cloud Services); modern sermaye piyasası kurumları için yaygın bir uygulama olmuştur (AWS, Azure, Google Cloud kullanımı, SaaS uygulamaları, IT outsourcing). SPK VII-128.10 Tebliği ve diğer düzenlemeler bu alanı sıkı kontrol altına alır. Temel Yükümlülükler: (1) Yazılı Sözleşme — sözlü anlaşma yeterli değildir; kapsamlı yazılı sözleşme şart. Sözleşme içeriği: hizmet kapsamı, süre, ücretlendirme, taraflar arası sorumluluk dağılımı, çıkış stratejisi (transition out), (2) Hizmet Seviye Anlaşması (SLA — Service Level Agreement) — Erişilebilirlik (uptime, örn. %99.99), Yanıt süreleri (response time), Olay çözüm süreleri, Performans göstergeleri, SLA ihlali halinde cezalar, (3) Güvenlik Gereksinimleri — Veri şifreleme (taşıma sırasında ve depolamada), Erişim kontrolleri, Kimlik doğrulama standartları, Olay bildirim yükümlülükleri, Sızma testleri, ISO 27001 veya SOC 2 Type II sertifikası talep, (4) Denetim Hakları — Hizmet sağlayıcının BS'lerini denetim hakkı; ya doğrudan ya da bağımsız denetçi raporu (SOC reports), düzenleyici otoritelerin (SPK, BDDK) denetim hakları, (5) Veri Yerleşimi — Veriler nerede saklanıyor? Yurtdışı veri transferi varsa KVKK md. 9 uygulanır (KVK Kurulu onayı, yeterlilik kararı, taahhütname, açık rıza), AB GDPR uyumu, (6) İş Sürekliliği — Hizmet sağlayıcının BCP/DRP olması, alternatif tedarik kaynakları, (7) Kritik Fonksiyonlar — Ana takas, sicil tutma, müşteri kimlik doğrulama gibi kritik fonksiyonlar dışarıya verilmek isteniyorsa SPK onayı gerekebilir, (8) Sorumluluk — Dış kaynak kullanımı yapıldığında bile, son sorumluluk hâlâ kurumdadır; SPK'ya karşı kurum sorumludur, hizmet sağlayıcı değil. Modern uygulamada birçok aracı kurum AWS, Azure veya Google Cloud kullanmaktadır; bu kullanımlar yukarıdaki çerçeveye uygun yapılır.",
          },
        ],
      },
      // ──────────── Ders 5: Uluslararası Çerçeveler — COBIT, ISO 27000, ITIL, COSO ────────────
      {
        id: "m1020-l5",
        title: "Uluslararası BS Çerçeveleri — COBIT, ISO 27000, ITIL, COSO, ITAF",
        duration: "10 dk",
        summary: {
          title: "Uluslararası BS Yönetim ve Denetim Çerçeveleri",
          intro:
            "BS yönetim ve denetiminin küresel referans çerçeveleri farklı amaçlara hizmet eder ve birbirini tamamlayıcıdır. COBIT — BS yönetişim ve yönetim çerçevesi; ISO/IEC 27000 — bilgi güvenliği yönetim standardı; ITIL — BS hizmet yönetimi en iyi uygulamaları; COSO — iç kontrol ve kurumsal risk yönetimi çerçevesi; ITAF — BS denetim çerçevesi (ISACA). Etik ilkeler ise hem bağımsız denetçiler için (KGK) hem de BS profesyonelleri için (ISACA) tanımlanmıştır.",
          sections: [
            {
              heading: "COBIT, ISO 27000 ve ITIL",
              icon: "shield",
              items: [
                {
                  strong: "COBIT (Control Objectives for Information and Related Technologies):",
                  text: "ISACA tarafından geliştirilen, BS yönetişim ve yönetiminin küresel referans çerçevesidir. COBIT 2019 son versiyondur; BS hedeflerini iş hedefleriyle uyumlandırır, kontrol hedeflerini belirler. 5 yönetişim ilkesi + 40 yönetişim ve yönetim hedefi vardır.",
                },
                {
                  strong: "COBIT 2019 Bileşenleri:",
                  text: "Yönetişim ve Yönetim Hedefleri (Governance and Management Objectives), Olgunluk Seviyeleri (CMMI bazlı, 0-5), Performans Yönetimi, Tasarım Faktörleri (organizasyona göre özelleştirme), Sürekli İyileştirme döngüsü.",
                },
                {
                  strong: "ISO/IEC 27000 Serisi:",
                  text: "Bilgi Güvenliği Yönetim Sistemi (BGYS / ISMS) standartlar serisi. Ana standart ISO 27001 — sertifikasyon standardıdır; ISO 27002 — kontrol seti (114 kontrol, 14 alan); ISO 27005 — risk yönetimi; ISO 27017 — bulut güvenliği; ISO 27018 — kişisel veri koruması.",
                },
                {
                  strong: "ISO 27001 Sertifikasyonu:",
                  text: "Şirketin BGYS'nin uluslararası standartlara uyumunu kanıtlayan sertifika; bağımsız sertifikasyon kuruluşları (TSE, BSI, TÜV, SGS) tarafından verilir; 3 yıl geçerli, yıllık gözetim denetimleri, 3 yılda bir yenileme.",
                },
                {
                  strong: "ITIL (Information Technology Infrastructure Library):",
                  text: "BS hizmet yönetimi (ITSM) için en iyi uygulamalar koleksiyonu; AXELOS (UK) tarafından sahip olunur; ITIL 4 en güncel versiyon; Service Strategy, Design, Transition, Operation, Continual Improvement yaşam döngüsü.",
                },
              ],
            },
            {
              heading: "COSO, ITAF ve Etik İlkeler",
              icon: "trend",
              items: [
                {
                  strong: "COSO İç Kontrol Çerçevesi:",
                  text: "Committee of Sponsoring Organizations of the Treadway Commission; iç kontrolün küresel referansı. COSO 2013 versiyonu — 5 bileşen × 17 ilke. Bileşenler: Kontrol Ortamı, Risk Değerlendirmesi, Kontrol Faaliyetleri, Bilgi ve İletişim, İzleme.",
                },
                {
                  strong: "COSO ERM (Enterprise Risk Management):",
                  text: "COSO'nun kurumsal risk yönetimi çerçevesi (2017 güncellemesi); Yönetişim ve Kültür, Strateji ve Hedef Belirleme, Performans, İnceleme ve Revizyon, Bilgi-İletişim-Raporlama olmak üzere 5 bileşen, 20 ilke.",
                },
                {
                  strong: "ITAF (IT Assurance Framework):",
                  text: "ISACA tarafından geliştirilen BS güvence (denetim) çerçevesi; BS denetçileri için standartlar, kılavuzlar, prosedürler içerir. ITAF standartları (1001-1207), kılavuzları (2002-2207), prosedürleri (3002-3403) olmak üzere üç seviyededir.",
                },
                {
                  strong: "ISACA Etik Kuralları:",
                  text: "BS denetçileri ve güvenlik profesyonelleri için 7 etik ilke: meslek standartlarına uyum, mesleki yetkinliğin korunması, sır saklama, doğru bilgi sunum, mesleki çıkar çatışmasını önleme, kalite ve verimliliği destekleme, mesleğin gelişimine katkı.",
                },
                {
                  strong: "Çerçeveler Birbirini Tamamlar:",
                  text: "COBIT — Yönetişim/Yönetim (NE yapılmalı); ISO 27001 — Bilgi Güvenliği (NASIL korunmalı); ITIL — Hizmet Yönetimi (NASIL sunulmalı); COSO — İç Kontrol (NASIL kontrol edilmeli); ITAF — Denetim (NASIL denetlenmeli). Modern kuruluşlar bu çerçeveleri entegre eder.",
                },
              ],
            },
          ],
          tip: "5 ana çerçeve: COBIT (yönetişim) + ISO 27001 (bilgi güvenliği) + ITIL (hizmet yönetimi) + COSO (iç kontrol) + ITAF (BS denetim). COSO 5 bileşen × 17 ilke. ISO 27001 = sertifikasyon standardı (BSI/TSE/TÜV). ISACA = COBIT ve ITAF'ın sahibi. ETİK = KGK (denetçi) + ISACA (BS uzmanı) iki ayrı kural seti.",
        },
        questions: [
          {
            text: "COBIT (Control Objectives for Information and Related Technologies) çerçevesi için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca yazılım kodlama standartlarıdır." },
              { id: "B", text: "ISACA tarafından geliştirilen, BS yönetişim ve yönetiminin küresel referans çerçevesidir; COBIT 2019 son versiyondur; BS hedeflerini iş hedefleriyle uyumlandırır, 5 yönetişim ilkesi ve 40 yönetişim/yönetim hedefi içerir; CMMI bazlı olgunluk seviyeleri (0-5) vardır." },
              { id: "C", text: "Yalnızca bankalar için zorunludur." },
              { id: "D", text: "Bir yazılım ürünüdür." },
            ],
            correct: "B",
            explanation:
              "COBIT (Control Objectives for Information and Related Technologies); ISACA tarafından geliştirilen ve sürekli güncellenen, BT yönetişim ve yönetiminin küresel referans çerçevesidir. Tarihçe: COBIT 1 (1996), COBIT 4.1 (2007), COBIT 5 (2012), COBIT 2019 (son versiyon, 2018). COBIT 2019 Bileşenleri: (1) Yönetişim ve Yönetim Hedefleri (40 Hedef) — beş ana alanda gruplandırılmış: (a) Yönetişim (5 hedef): EDM (Evaluate, Direct, Monitor), (b) Yönetim — Uyum, Planlama, Kuruluş (APO), (c) Edinim, Uygulama, Geliştirme (BAI), (d) Sunum, Hizmet, Destek (DSS), (e) İzleme, Değerlendirme, Performans (MEA), (2) Yönetişim İlkeleri (5 İlke) — paydaşları için değer yaratma, holistik yaklaşım, dinamik sistem, yönetim ve yönetişim ayrımı, organizasyona uyum sağlama, (3) Olgunluk Modeli — CMMI bazlı 0-5 seviyeleri: 0 (yok), 1 (başlangıç), 2 (yönetiliyor), 3 (tanımlanmış), 4 (ölçülen), 5 (optimize edilen). Her hedef için olgunluk seviyesi değerlendirilir, (4) Performans Yönetimi — KPI'lar, kontrol metrikleri, (5) Tasarım Faktörleri — organizasyon büyüklüğüne, sektörüne, risk profiline göre özelleştirme: 11 faktör, (6) Sürekli İyileştirme Döngüsü — değerlendirme → planlama → uygulama → izleme. COBIT'in Uygulama Alanları: BT yönetişim olgunluk değerlendirmesi, BT strateji geliştirme, BS denetim referansı, BS risk yönetimi, regülasyon uyumu (Sarbanes-Oxley, KVKK), BT-iş uyumu. BS denetçileri için temel referans niteliğindedir; denetim ekiplerinin COBIT bilgisi olması beklenir. CISA sınavında temel konu alanlarından biridir.",
          },
          {
            text: "ISO/IEC 27001 standardı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Bir bilgisayar virüsüdür." },
              { id: "B", text: "Bilgi Güvenliği Yönetim Sistemi (BGYS / ISMS) için uluslararası sertifikasyon standardıdır; şirketler bağımsız sertifikasyon kuruluşları (TSE, BSI, TÜV, SGS) tarafından denetlenerek sertifika alır; sertifika 3 yıl geçerli, yıllık gözetim denetimleri ve 3 yılda bir yenileme denetimi yapılır." },
              { id: "C", text: "Yalnızca devlet kurumları için geçerlidir." },
              { id: "D", text: "Yalnızca yazılım şirketleri için uygulanır." },
            ],
            correct: "B",
            explanation:
              "ISO/IEC 27001; Bilgi Güvenliği Yönetim Sistemi (Information Security Management System - ISMS) için uluslararası sertifikasyon standardıdır. ISO 27000 serisinin ana standardıdır. Detaylar: (1) Veren Kuruluş — ISO (International Organization for Standardization) ve IEC (International Electrotechnical Commission) işbirliği, (2) Sertifikasyon Süreci — şirket BGYS kurar → bağımsız sertifikasyon kuruluşu denetler → uygunsa sertifika alır. Sertifikasyon kuruluşları: TSE (Türk Standardları Enstitüsü), BSI (British Standards Institution), TÜV Rheinland, SGS, Bureau Veritas, Lloyd's Register, DNV-GL, (3) Sertifika Geçerliliği — 3 YIL; ancak yıllık 'gözetim denetimleri' (surveillance audits) yapılır; 3 yıl sonunda 'yenileme denetimi' (recertification audit) gereklidir; uygunsuzluk durumunda sertifika askıya alınabilir veya iptal edilebilir, (4) Yapı — 11 ana bölüm: (a) Kapsam, (b) Atıf yapılan standartlar, (c) Terimler, (d) Kuruluşun bağlamı, (e) Liderlik, (f) Planlama, (g) Destek, (h) Operasyon, (i) Performans değerlendirme, (j) İyileştirme, Annex A (kontroller). (5) Annex A Kontrolleri — ISO 27002'de detayları olan 114 kontrol, 14 alanda gruplandırılmış (örn. Erişim Kontrolü, Kriptografi, Fiziksel Güvenlik, Olay Yönetimi), (6) Faydaları — Müşteri ve iş ortaklarına güvenlik güvencesi, regülasyon uyumu (KVKK, GDPR), rekabet avantajı, ihalelerde tercih sebebi, sigorta primlerinde indirim, güvenlik olayı maliyetlerinin azalması, (7) Türkiye'de Yaygınlık — bankalar, sigorta şirketleri, telekom operatörleri, halka açık şirketler, devlet kurumları yaygın olarak alır.",
          },
          {
            text: "COSO İç Kontrol Çerçevesi 2013'ün beş bileşeni aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Planlama, organizasyon, yürütme, kontrol, raporlama" },
              { id: "B", text: "Kontrol Ortamı (Control Environment), Risk Değerlendirmesi (Risk Assessment), Kontrol Faaliyetleri (Control Activities), Bilgi ve İletişim (Information and Communication), İzleme Faaliyetleri (Monitoring Activities) — bu beş bileşen birbirini destekler ve 17 ilkeye genişletilmiştir." },
              { id: "C", text: "Yalnızca üç bileşen vardır." },
              { id: "D", text: "Beş bileşen finansal denetim için, BS denetimi için ayrı 10 bileşen vardır." },
            ],
            correct: "B",
            explanation:
              "COSO İç Kontrol Çerçevesi (Internal Control - Integrated Framework); Committee of Sponsoring Organizations of the Treadway Commission tarafından geliştirilen, iç kontrolün küresel referansıdır. 1992'de ilk yayımlanmış, 2013'te güncellenmiştir. Beş Bileşeni: (1) Kontrol Ortamı (Control Environment) — iç kontrolün 'tonu'; üst yönetim ve yönetim kurulunun tutumu, etik değerler, yetkinlik standartları, organizasyon yapısı, hesap verebilirlik. 5 ilke içerir. (2) Risk Değerlendirmesi (Risk Assessment) — hedefler doğrultusunda risklerin tespit edilmesi, analiz edilmesi, değerlendirilmesi; iç ve dış risklerin sürekli izlenmesi; 4 ilke. (3) Kontrol Faaliyetleri (Control Activities) — risklerin yönetilmesi için politikalar ve prosedürlerin uygulanması; önleyici, tespit edici ve düzeltici kontroller; teknoloji üzerinden kontroller; 3 ilke. (4) Bilgi ve İletişim (Information and Communication) — iç kontrolün ihtiyaç duyduğu kaliteli bilginin üretilmesi ve uygun bilgi akışı; iç iletişim (yöneticilerden çalışanlara, çalışanlardan üste) ve dış iletişim (yatırımcılar, müşteriler); 3 ilke. (5) İzleme Faaliyetleri (Monitoring Activities) — iç kontrolün etkinliğinin sürekli izlenmesi; iç denetim, kalite kontrol, yönetim incelemeleri; eksikliklerin raporlanması ve düzeltilmesi; 2 ilke. Beş bileşen birlikte 17 İLKE oluşturur. COSO çerçevesi sadece finansal denetim için DEĞİL, tüm iç kontrol için referanstır; BS denetiminde de yaygın kullanılır. SOX (Sarbanes-Oxley) uyumu için ABD'de zorunlu, Türkiye'de SPK ve BDDK düzenlemelerinde benimsenmiştir.",
          },
          {
            text: "ITIL (Information Technology Infrastructure Library) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Bir donanım türüdür." },
              { id: "B", text: "BS hizmet yönetimi (IT Service Management - ITSM) için en iyi uygulamalar koleksiyonudur; AXELOS (UK) tarafından sahip olunur; ITIL 4 en güncel versiyondur; hizmet yaşam döngüsü: Service Strategy, Service Design, Service Transition, Service Operation, Continual Service Improvement." },
              { id: "C", text: "Yalnızca yazılım kodu yazma standardıdır." },
              { id: "D", text: "Bir programlama dilidir." },
            ],
            correct: "B",
            explanation:
              "ITIL (Information Technology Infrastructure Library); BT hizmet yönetimi (ITSM) için küresel olarak en yaygın kullanılan en iyi uygulamalar koleksiyonudur. Tarihçe: ITIL ilk olarak 1980'lerde İngiliz hükümetinin Central Computer and Telecommunications Agency (CCTA) tarafından geliştirildi; sonradan AXELOS (UK)'a devredildi. Versiyonlar: ITIL v2 (2000), ITIL v3 (2007), ITIL 4 (2019, son versiyon). ITIL 4'ün Anahtar Bileşenleri: (1) Service Value System (SVS) — Hizmet Değer Sistemi: hizmet yönetiminin entegre yaklaşımı, (2) Service Value Chain — Hizmet Değer Zinciri: planlama, iyileştirme, etkileşim, tasarım/geçiş, edinim/inşa, sunum/destek, (3) Practices (34 Uygulama) — yönetim uygulamaları, hizmet yönetim uygulamaları, teknik yönetim uygulamaları, (4) Four Dimensions of Service Management — 4 boyut: Organizations and People, Information and Technology, Partners and Suppliers, Value Streams and Processes. Klasik ITIL Süreçleri (ITIL v3 - hâlâ yaygın): (a) Incident Management — Olay yönetimi, hızlı çözüm, (b) Problem Management — Problem yönetimi, kök neden analizi, (c) Change Management — Değişiklik yönetimi, kontrollü değişim, (d) Configuration Management — Yapılandırma yönetimi (CMDB), (e) Release Management — Sürüm yönetimi, (f) Service Level Management — SLA yönetimi, (g) Capacity Management — Kapasite yönetimi, (h) Availability Management — Erişilebilirlik yönetimi, (i) IT Service Continuity Management — İş sürekliliği. ITIL Sertifikaları: Foundation, Managing Professional, Strategic Leader, Practice Manager. BS Denetimi İlgisi: BS denetçileri ITIL süreçlerinin etkin uygulanıp uygulanmadığını değerlendirir; özellikle değişiklik yönetimi, olay yönetimi, problem yönetimi BS kontrollerinin temelidir.",
          },
          {
            text: "BS denetçileri ve güvenlik profesyonelleri için ISACA tarafından tanımlanan etik ilkeler için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Etik ilkeler ihtiyaridir." },
              { id: "B", text: "ISACA Etik Kuralları 7 ana ilkeden oluşur: (1) meslek standartlarına uyum, (2) mesleki yetkinliğin korunması, (3) sır saklama ve gizlilik, (4) doğru ve dürüst bilgi sunum, (5) mesleki çıkar çatışmasını önleme, (6) kalite ve verimliliği destekleme, (7) mesleğin gelişimine katkı; etik ihlaller ISACA tarafından soruşturulur ve sertifika iptaline kadar varan yaptırımlar uygulanabilir." },
              { id: "C", text: "Yalnızca yöneticiler için geçerlidir." },
              { id: "D", text: "Sadece ABD vatandaşları için uygulanır." },
            ],
            correct: "B",
            explanation:
              "ISACA Etik Kuralları (ISACA Code of Professional Ethics); BS denetçileri (CISA), güvenlik yöneticileri (CISM), risk uzmanları (CRISC), yönetişim uzmanları (CGEIT) ve diğer ISACA sertifikalı profesyoneller için bağlayıcı etik standartlardır. 7 Etik İlke: (1) Mesleki Standartlara Uyum — ITAF, COBIT gibi ISACA standartlarına ve meslek alanındaki yasal düzenlemelere uyum, (2) Mesleki Yetkinliğin Korunması — sürekli eğitim, güncel bilgi, gerekli yetkinliğe sahip olmadan görev kabul etmeme, yıllık CPE (Continuing Professional Education) saatleri zorunlu, (3) Sır Saklama ve Gizlilik (Confidentiality) — denetim sırasında öğrenilen bilgilerin yasal zorunluluk olmadıkça açıklanmaması; eski işverenler için bile geçerli, (4) Doğru ve Dürüst Bilgi Sunum — denetim bulgularının ve raporların doğru, dürüst, tam ve objektif olarak sunulması; manipülasyon yapmamak, (5) Mesleki Çıkar Çatışmasını Önleme — denetçinin denetlediği şirketle ekonomik veya kişisel çıkar çatışması olmaması; aile üyelerinin işletmede çalışmaması, pay sahibi olmaması, (6) Kalite ve Verimliliği Destekleme — paydaşlara ve toplum üyelerine en iyi hizmeti sunma, organizasyonların etkinliğini artırma, (7) Mesleğin Gelişimine Katkı — bilgi paylaşımı, mentorluk, etik kurallar konusunda topluluğu eğitme, ISACA'ya katkı. Yaptırımlar: etik ihlaller ISACA tarafından soruşturulur; doğrulanan ihlallerde uyarı, kınama, geçici askıya alma, kalıcı sertifika iptaline kadar varan yaptırımlar uygulanabilir. KGK'nın Bağımsız Denetçiler İçin Etik Kuralları da paralel ilkeler içerir: dürüstlük, tarafsızlık, bağımsızlık, mesleki yetkinlik ve özen, sır saklama, mesleki davranış. Bu iki etik çerçeve birbirini tamamlar.",
          },
        ],
      },
    ],
  },
];