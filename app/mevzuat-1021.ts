/* ─────────────────────────────────────────────────────────────────────────────
 * Bilgi Sistemleri Geliştirilmesi ve Uygulanması (1021)
 *
 * Kaynak: SPL 1021 Çalışma Notu, 31 Aralık 2025 (213 sayfa)
 * Sınavlar: Bilgi Sistemleri Bağımsız Denetim Sınavı
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1020 (Bilgi Sistemleri Yönetimi ve Denetimi) ile minimum çakışma vardır
 * (SDLC'ye orada kısaca değinildi); 1021 tamamen proje yönetimi (PMI/PMBOK,
 * PERT, CPM, Gantt, EVA) + SDLC + yazılım geliştirme metodolojileri
 * (Waterfall, Agile, RAD, OOSD) + test süreçleri + uygulama kontrolleri
 * (giriş/işleme/çıktı) konularına derinlemesine odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1021 } from "./mevzuat-1021";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011,
 *     ...mevzuat1012, ...mevzuat1013, ...mevzuat1014,
 *     ...mevzuat1015, ...mevzuat1016, ...mevzuat1017,
 *     ...mevzuat1018, ...mevzuat1019, ...mevzuat1020,
 *     ...mevzuat1021
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1021: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1021 BİLGİ SİSTEMLERİ GELİŞTİRİLMESİ VE UYGULANMASI
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1021",
    title: "Modül · Bilgi Sistemleri Geliştirilmesi ve Uygulanması (1021)",
    lessons: [
      // ──────────── Ders 1: Proje Yönetimi Temelleri ve Planlama ────────────
      {
        id: "m1021-l1",
        title: "Proje Yönetimi Temelleri, PMI/PMBOK ve Proje Planlaması",
        duration: "10 dk",
        summary: {
          title: "Proje Yönetimi Temelleri ve Planlama",
          intro:
            "Proje (PMI tanımı); benzersiz bir ürün, hizmet ya da sonucun üretildiği tekrarlı olmayan bir çalışmadır. Her projenin 4 temel özelliği vardır: emsalsiz (özgün), tekrarlanmayan, kısıtları olan (başlangıç-bitiş-bütçe-işgücü) ve planlama-yönetim-kontrol gerektiren. Proje Yönetiminin 3T Hedefi (Üçlü Kısıt) — Zaman, Maliyet, Kapsam (Kalite); bu üç parametre birbiriyle dengeli olmalı, birinin değişmesi diğerlerini de etkiler. PMI'ın PMBOK rehberi proje yönetiminin küresel referansıdır.",
          sections: [
            {
              heading: "Proje Yönetimi Temel Kavramları",
              icon: "shield",
              items: [
                {
                  strong: "Proje Tanımı (PMI):",
                  text: "Benzersiz bir ürün, hizmet ya da sonucun üretildiği tekrarlı olmayan bir çalışmadır; 4 ana özellik: emsalsiz, tekrarlanmayan, kısıtları olan, planlama-yönetim-kontrol gerektiren.",
                },
                {
                  strong: "Proje vs Operasyon:",
                  text: "Proje — geçici, benzersiz, başlangıç-bitiş net; Operasyon — sürekli, tekrarlayan, rutin günlük faaliyetler (örn. müşteri hizmetleri); aynı işletmede ikisi paralel yürür.",
                },
                {
                  strong: "Proje Yönetiminin 3T Hedefi (Üçlü Kısıt):",
                  text: "Zaman (Time), Maliyet (Cost), Kapsam/Kalite (Scope/Quality); bu üç parametre 'demir üçgen' oluşturur — birini değiştirince diğerleri etkilenir; örn. kapsam genişlerse zaman ve maliyet artar.",
                },
                {
                  strong: "PMI ve PMBOK:",
                  text: "Project Management Institute (PMI, 1969) küresel proje yönetimi enstitüsüdür; PMBOK (Project Management Body of Knowledge) proje yönetiminin küresel referans rehberidir; 7. baskısı (2021) son versiyondur.",
                },
                {
                  strong: "PMP Sertifikası:",
                  text: "Project Management Professional — PMI tarafından verilen, proje yönetiminin en prestijli uluslararası sertifikası; 3 yıl mesleki deneyim + sınav + sürekli mesleki gelişim (PDU) gerektirir.",
                },
              ],
            },
            {
              heading: "Proje Planlaması ve Maliyet Tahminleri",
              icon: "trend",
              items: [
                {
                  strong: "Proje Kapsam Belirleme:",
                  text: "Projede neyin yapılacağı ve neyin yapılmayacağının net olarak tanımlanması; İş Kırılım Yapısı (WBS — Work Breakdown Structure) ile proje aşamalara ve görevlere bölünür.",
                },
                {
                  strong: "Fizibilite Çalışması:",
                  text: "Projenin yapılabilirliğinin değerlendirilmesi — Teknik fizibilite (yapılabilir mi?), Ekonomik fizibilite (kâra geçer mi? ROI, NPV, IRR), Operasyonel fizibilite (kuruluş kapasitesi yeterli mi?), Zamansal fizibilite, Yasal fizibilite.",
                },
                {
                  strong: "Maliyet Tahmin Yöntemleri:",
                  text: "Analoji Yöntemi (benzer projelere göre), Aşağıdan Yukarıya (her görev için ayrı tahmin), Yukarıdan Aşağıya (üst seviyeden bölme), Parametrik Modeller (COCOMO, FP — Function Points), Uzman Görüşü, Üç Nokta Tahmin (PERT formülü).",
                },
                {
                  strong: "Yazılım Çaba Tahmini (SEE):",
                  text: "Software Effort Estimation — yazılım projelerinin maliyet/zamanını tahmin etme; COCOMO (Constructive Cost Model) — Barry Boehm, satır kodu (LOC) bazlı; Function Points (FP) — kullanıcı işlevselliği bazlı; Use Case Points; Story Points (Agile).",
                },
                {
                  strong: "SMART Hedefler:",
                  text: "Specific (Belirli), Measurable (Ölçülebilir), Attainable (Gerçekçi), Relevant (İlgili), Time-bound (Süreli) — proje hedeflerinin SMART kriterlere uygun olması başarı şansını artırır.",
                },
              ],
            },
          ],
          tip: "Proje 4 özelliği: emsalsiz + tekrarlanmayan + kısıtlı + yönetim gerektirir. 3T Hedefi (Demir Üçgen): Zaman + Maliyet + Kapsam. PMI = uluslararası proje yönetimi enstitüsü, PMBOK = referans rehber, PMP = altın sertifika. SMART = proje hedeflerinin formülü. WBS = iş kırılım yapısı (kapsam yönetiminin temeli).",
        },
        questions: [
          {
            text: "Proje Yönetim Enstitüsü'nün (PMI) tanımına göre 'proje' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Sürekli ve tekrarlayan rutin faaliyetlerdir." },
              { id: "B", text: "Benzersiz bir ürün, hizmet ya da sonucun üretildiği TEKRARLI OLMAYAN bir çalışmadır; emsalsiz, tekrarlanmayan, kısıtları olan (başlangıç-bitiş-bütçe-işgücü) ve planlama-yönetim-kontrol gerektiren 4 ana özelliğe sahiptir." },
              { id: "C", text: "Yalnızca büyük şirketlerin yaptığı faaliyetlerdir." },
              { id: "D", text: "Sadece yazılım geliştirme faaliyetidir." },
            ],
            correct: "B",
            explanation:
              "Proje Yönetim Enstitüsü (PMI - Project Management Institute) projenin küresel kabul gören tanımını yapmıştır: 'Proje, benzersiz bir ürün, hizmet ya da sonucun üretildiği tekrarlı olmayan bir çalışmadır.' Bir çalışmanın proje olabilmesi için 4 temel özelliğe sahip olması gerekir: (1) Emsalsiz/Özgün (Unique) — daha önce yapılmamış, benzersiz bir sonuç üretir; her proje kendine özgüdür, (2) Tekrarlanmayan (Non-repetitive) — operasyonların aksine sürekli tekrarlanmaz; başlayıp biter, (3) Kısıtları Olan (Constrained) — başlangıç ve bitiş tarihi, bütçe, işgücü, kapsam kısıtları vardır, (4) Planlama-Yönetim-Kontrol Gerektiren — pek çok faaliyetten oluşur, koordinasyon gerektirir. Proje ile Operasyon farkı: operasyonlar sürekli, tekrarlayan, rutin günlük faaliyetlerdir (müşteri hizmetleri, üretim hattı, muhasebe kaydı); aynı işletmede projeler ve operasyonlar birlikte yürür. Diğer Tanımlar: BSI (British Standards Institution) — 'zaman, maliyet ve performans parametreleri kısıtında belirli bir başlangıç ve bitiş zamanı bulunan, koordineli aktiviteler topluluğu'. Juran — 'çözüm için çizelgelenmiş bir problem'.",
          },
          {
            text: "Proje yönetiminin 'Üçlü Kısıt' (Demir Üçgen / 3T Hedef) kavramı aşağıdakilerden hangisini ifade eder?",
            options: [
              { id: "A", text: "Üç farklı proje yönetim metodolojisi" },
              { id: "B", text: "Zaman (Time), Maliyet (Cost), Kapsam/Kalite (Scope/Quality) — bu üç parametre birbiriyle dengeli olmalı; birinin değişmesi diğerlerini de etkiler (kapsam genişlerse zaman ve maliyet artar)." },
              { id: "C", text: "Üç proje yöneticisi seviyesi" },
              { id: "D", text: "Üç farklı proje türü" },
            ],
            correct: "B",
            explanation:
              "Proje Yönetiminin Üçlü Kısıtı (Triple Constraint), 'Demir Üçgen' (Iron Triangle) veya '3T' olarak da bilinir. Proje yönetiminin temel paradigmasıdır ve üç ana parametre arasındaki dengeyi ifade eder: (1) Zaman (Time) — projenin teslim süresi; başlangıç ve bitiş tarihleri, kilometre taşları (milestones), (2) Maliyet (Cost) — projenin bütçesi; işgücü, malzeme, ekipman, dış kaynak giderleri, (3) Kapsam (Scope) / Kalite (Quality) — projede yapılacak işler, teslim edilecek çıktılar, ulaşılacak kalite standartları. Üçü Arasındaki İlişki: bu üç parametre birbirine bağlıdır ve birini değiştirmek diğerlerini etkiler. Örnekler: (a) Kapsam genişlerse → Zaman uzar ve/veya Maliyet artar (örn. yazılıma yeni özellikler eklenmesi), (b) Zaman kısaltılırsa → Maliyet artar (daha çok personel) ve/veya Kapsam azalır (özellikler çıkarılır), (c) Maliyet azaltılırsa → Zaman uzar (daha az kaynakla) ve/veya Kapsam azalır. Proje yöneticisi bu dengeyi sürekli yönetir; öncelikleri paydaşlarla birlikte belirler. Modern Genişletilmiş Üçgen: bazı kaynaklar buna 'kalite', 'risk', 'kaynaklar' ve 'paydaş memnuniyeti'ni de ekler — 'Project Management Star' veya '6 Constraint Model' olarak adlandırılır. Bir proje yöneticisinin temel becerisi bu kısıtlar arasındaki dengeyi yönetmektir.",
          },
          {
            text: "Proje hedeflerinin 'SMART' kriterlere uygun olması için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "SMART bir sertifika türüdür." },
              { id: "B", text: "Specific (Belirli — net tanımlı), Measurable (Ölçülebilir — sayısal göstergeler), Attainable (Gerçekçi — ulaşılabilir), Relevant (İlgili/Uygun — strateji ile bağlantılı), Time-bound (Süreli — net tarih sınırı) — hedeflerin bu beş kriteri karşılaması başarı şansını artırır." },
              { id: "C", text: "SMART yalnızca kişisel hedefler için kullanılır." },
              { id: "D", text: "SMART beş farklı proje yöneticisi türünü ifade eder." },
            ],
            correct: "B",
            explanation:
              "SMART hedef belirleme tekniği; George T. Doran tarafından 1981'de geliştirilen ve proje yönetiminin yanı sıra performans yönetimi, kişisel gelişim alanlarında yaygın kullanılan bir çerçevedir. SMART açılımı: (1) Specific (Belirli) — hedef net, açık ve anlaşılır olmalıdır; 'gelirleri artır' yerine 'müşteri portalı modülünü 31 Aralık'a kadar canlıya al' gibi. Hedef sorularına yanıt vermeli: Ne? Kim? Nerede? Hangi koşullarda?, (2) Measurable (Ölçülebilir) — hedefin tamamlanıp tamamlanmadığını gösterecek sayısal göstergeler olmalı; ölçüt yoksa başarı değerlendirilemez. 'Performansı iyileştir' yerine 'yanıt süresini 2 saniyeden 0.5 saniyeye düşür', (3) Attainable / Achievable (Gerçekçi/Ulaşılabilir) — hedef zorlayıcı ama mümkün olmalı; çok kolay ise motivasyon, çok zor ise umutsuzluk yaratır. Mevcut kaynak ve yetkinliklere göre değerlendirilir, (4) Relevant (İlgili/Uygun) — hedef organizasyonun ve projenin genel stratejisiyle uyumlu olmalı; bağımsız hedefler değer üretmez. 'Bu hedef stratejiye nasıl hizmet ediyor?' sorusu yanıtlanmalı, (5) Time-bound (Süreli) — hedefin net bir başlangıç ve bitiş tarihi olmalı; süresi olmayan hedef sürekli ertelenir. 'Hızlı şekilde' yerine '30 Haziran 2026'ya kadar'. Bazı versiyonlarda: SMARTER eklenir → Evaluated (Değerlendirilen), Reviewed (Gözden Geçirilen).",
          },
          {
            text: "Yazılım projelerinde 'COCOMO' (Constructive Cost Model) modeli için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Bir programlama dilidir." },
              { id: "B", text: "Barry Boehm tarafından 1981'de geliştirilen, yazılım projelerinin maliyet/efor tahmini için kullanılan parametrik modeldir; SATIR KODU (LOC - Lines of Code) bazlı çalışır; üç seviyesi vardır: Basic (basit), Intermediate (orta), Detailed (detaylı); modern versiyonu COCOMO II'dir." },
              { id: "C", text: "Yalnızca donanım maliyetini hesaplar." },
              { id: "D", text: "Yalnızca büyük şirketler için kullanılır." },
            ],
            correct: "B",
            explanation:
              "COCOMO (Constructive Cost Model); yazılım çaba tahmini (Software Effort Estimation - SEE) için en yaygın kullanılan klasik modeldir. Tarihçe: Barry Boehm tarafından 1981'de geliştirilmiş, 2000'de COCOMO II adıyla modernize edilmiştir. Temel Mantık: yazılımın tahmini boyutu (genellikle KSLOC - Kilo Source Lines of Code) verildiğinde, gerekli çaba (person-month) ve süre (months) tahmin edilir. COCOMO Modelleri: (1) Basic COCOMO — sadece KLOC bilgisiyle basit tahmin; üç tür proje sınıfı: (a) Organic (basit, küçük): Effort = 2.4 × (KLOC)^1.05, (b) Semi-detached (orta): Effort = 3.0 × (KLOC)^1.12, (c) Embedded (karmaşık): Effort = 3.6 × (KLOC)^1.20, (2) Intermediate COCOMO — 15 maliyet sürücüsü eklenir: ürün özellikleri (güvenilirlik, veri tabanı boyutu, karmaşıklık), donanım (zaman ve hafıza kısıtları), personel (yetkinlik, deneyim), proje özellikleri (modern programlama, geliştirme zamanı), (3) Detailed COCOMO — her proje aşaması için ayrı tahmin yapılır. Diğer SEE Yöntemleri: (a) Function Points (FP) — Allan Albrecht (1979), satır kodu yerine kullanıcı işlevselliği (girdi, çıktı, sorgu, dosya, arayüz) bazlı, dil-bağımsız, (b) Use Case Points — kullanım senaryoları bazlı, OOSD için uygun, (c) Story Points — Agile'da, ekip bazlı tahmin (Planning Poker tekniği), (d) PERT Formülü — Üç nokta tahmin: (Optimistic + 4×Likely + Pessimistic) / 6. Modern yazılım projelerinde genellikle Function Points ve Story Points birlikte kullanılır.",
          },
          {
            text: "Proje fizibilite çalışmasında aşağıdaki fizibilite türlerinden hangisi 'projenin maliyet-fayda analizini' (NPV, IRR, ROI) içerir?",
            options: [
              { id: "A", text: "Teknik fizibilite" },
              { id: "B", text: "Ekonomik fizibilite — projenin maliyet-fayda dengesini, getirisini ve yatırımın geri dönüş süresini değerlendirir; NPV (Net Bugünkü Değer), IRR (İç Verim Oranı), ROI (Yatırımın Getirisi), Payback Period gibi finansal göstergeler kullanılır." },
              { id: "C", text: "Operasyonel fizibilite" },
              { id: "D", text: "Yasal fizibilite" },
            ],
            correct: "B",
            explanation:
              "Fizibilite Çalışması (Feasibility Study); proje yatırım kararının verilmeden önce projenin yapılabilirliğinin çok boyutlu değerlendirildiği analizdir. Beş Temel Fizibilite Türü: (1) Teknik Fizibilite — proje teknik olarak yapılabilir mi? Mevcut teknoloji yeterli mi? Gerekli yetkinlikler mevcut mu? Altyapı destekliyor mu? Risk: teknik karmaşıklık, yenilik derecesi, (2) Ekonomik Fizibilite — projenin maliyet-fayda dengesi nasıl? Yatırımın geri dönüşü nasıl olacak? Kullanılan finansal göstergeler: (a) NPV (Net Present Value) — gelecekteki nakit akışlarının bugünkü değeri; pozitif NPV kabul edilebilir, (b) IRR (Internal Rate of Return) — projenin getiri oranı; iskonto oranından yüksekse kabul, (c) ROI (Return on Investment) — yatırımın getirisi (Net Kâr / Yatırım × 100), (d) Payback Period — yatırımın kendini geri ödeme süresi, (e) Maliyet-Fayda Oranı (BCR — Benefit-Cost Ratio). (3) Operasyonel Fizibilite — kuruluş projeyi operasyonel olarak yürütebilir mi? Süreçlere entegre olabilir mi? Kullanıcı kabulü olur mu? Mevcut iş akışlarıyla uyumlu mu?, (4) Zamansal Fizibilite (Schedule Feasibility) — proje istenen sürede tamamlanabilir mi? Bağımlılıklar, kritik yol, kaynak uygunluğu, (5) Yasal Fizibilite (Legal Feasibility) — proje yasal düzenlemelere uygun mu? KVKK, sektör mevzuatı, fikri mülkiyet, sözleşmeler. Modern fizibilite çalışmalarında ek boyutlar da değerlendirilir: Sosyal Fizibilite (toplum etkisi), Çevresel Fizibilite (ESG), Politik Fizibilite. Tüm boyutlar olumlu olmadıkça proje genelde onaylanmaz.",
          },
        ],
      },
      // ──────────── Ders 2: Proje Çizelgeleme — Gantt, PERT, CPM, Zaman Kutulama ────────────
      {
        id: "m1021-l2",
        title: "Proje Çizelgeleme Teknikleri — Gantt, PERT, CPM, Zaman Kutulama",
        duration: "10 dk",
        summary: {
          title: "Proje Çizelgeleme Teknikleri",
          intro:
            "Proje çizelgeleme; projedeki faaliyetlerin zaman içinde nasıl sıralanacağının ve süreceğinin planlanmasıdır. Dört temel teknik: (1) Gantt Şemaları — görsel zaman çizelgesi, basit ve yaygın; (2) PERT (Program Evaluation Review Technique) — belirsizlik içeren projelerde olasılıksal tahmin; (3) CPM (Critical Path Method) — kritik yolun belirlenmesi, minimum proje süresinin hesaplanması; (4) Zaman Kutulama (Time Boxing) — Agile yaklaşımda sabit süreli iterasyonlar. Her tekniğin güçlü ve zayıf yönleri vardır; modern projelerde birlikte kullanılırlar.",
          sections: [
            {
              heading: "Gantt Şemaları ve PERT",
              icon: "shield",
              items: [
                {
                  strong: "Gantt Şemaları:",
                  text: "1910-1915 arasında Henry Gantt tarafından geliştirilen, çubuk grafik (bar chart) tipi proje çizelgeleme tekniği; yatay eksen zaman, dikey eksen faaliyetleri gösterir; her çubuğun uzunluğu süresi, başlangıç-bitiş tarihleri gösterilir.",
                },
                {
                  strong: "Gantt Şemalarının Faydaları:",
                  text: "Görsel ve anlaşılır, ilerlemeyi takip etmek kolay (yüzde tamamlanma), kilometre taşları (milestones) gösterilebilir, kaynak atamaları görülebilir; Microsoft Project, Asana, Jira, Monday.com gibi araçlar Gantt destekler.",
                },
                {
                  strong: "PERT Tekniği:",
                  text: "Program Evaluation Review Technique (1957, ABD Donanması Polaris Projesi); BELİRSİZLİK içeren projelerde her faaliyet için üç süre tahmini yapılır: Optimistik (a), En Olası (m), Pesimistik (b); beklenen süre TE = (a + 4m + b) / 6 formülüyle hesaplanır.",
                },
                {
                  strong: "PERT vs CPM Farkları:",
                  text: "PERT — olasılıksal (belirsizlikle başa çıkar), tek süre yerine üç süre tahmini, AR-GE projeleri için uygun; CPM — deterministik (sabit süreler), kesin tahminler, inşaat projeleri için uygun. Pratikte birlikte kullanılır.",
                },
                {
                  strong: "PERT Diyagramı:",
                  text: "Faaliyetler ok şeklinde, olaylar düğüm (node) olarak gösterilir; AON (Activity on Node) ve AOA (Activity on Arrow) iki gösterim biçimi; modern proje yönetim yazılımları AON kullanır.",
                },
              ],
            },
            {
              heading: "CPM, Kritik Yol ve Zaman Kutulama",
              icon: "trend",
              items: [
                {
                  strong: "CPM (Critical Path Method):",
                  text: "1957'de DuPont ve Remington Rand tarafından geliştirilen, projedeki en uzun faaliyet zincirini (kritik yolu) belirleyen teknik; kritik yoldaki herhangi bir gecikme tüm projeyi geciktirir; minimum proje süresini gösterir.",
                },
                {
                  strong: "Kritik Yol Kavramı:",
                  text: "Projedeki en uzun yol (longest path) kritik yoldur; bu yoldaki faaliyetlerin 'esnekliği' (slack/float) sıfırdır; proje yöneticisi en çok dikkati buraya verir; kritik yol dışındaki faaliyetlerin esnekliği vardır.",
                },
                {
                  strong: "Erken/Geç Başlangıç-Bitiş Süreleri:",
                  text: "EST (Earliest Start Time), EFT (Earliest Finish Time), LST (Latest Start Time), LFT (Latest Finish Time); Esneklik (Slack) = LST − EST = LFT − EFT; kritik yolda slack = 0.",
                },
                {
                  strong: "Zaman Kutulama (Time Boxing):",
                  text: "Agile metodolojilerinde kullanılan teknik; sabit süreli iterasyonlar (Scrum sprint = 2-4 hafta) tanımlanır; sürenin sonunda ne yapıldıysa teslim edilir, kapsam değişebilir ancak süre değişmez; kapsamla zaman arasında ters bir öncelik.",
                },
                {
                  strong: "Hibrit Yaklaşımlar:",
                  text: "Modern büyük projelerde Gantt + PERT + CPM + Agile birlikte kullanılır; üst seviye proje planı klasik (Gantt/CPM), alt seviye geliştirme döngüleri Agile (Zaman Kutulama).",
                },
              ],
            },
          ],
          tip: "Gantt = çubuk grafik, görsel (1910). PERT = olasılıksal, 3 süre tahmini, (a+4m+b)/6 formülü (1957). CPM = deterministik, kritik yol, slack=0 olan yol (1957). Zaman Kutulama = Agile'da sabit süreli sprintler. Kritik yoldaki gecikme TÜM projeyi geciktirir. PERT ve CPM birlikte de kullanılabilir.",
        },
        questions: [
          {
            text: "PERT (Program Evaluation Review Technique) tekniğinde bir faaliyet için 'beklenen süre' (TE) formülü aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "TE = a + m + b" },
              { id: "B", text: "TE = (a + 4m + b) / 6 — burada a: Optimistik süre (en iyi senaryo), m: En Olası süre (most likely), b: Pesimistik süre (en kötü senaryo); en olası süreye 4 ağırlık verilerek beta dağılımı yaklaşımı uygulanır." },
              { id: "C", text: "TE = (a × b) / m" },
              { id: "D", text: "TE = a − b" },
            ],
            correct: "B",
            explanation:
              "PERT Tekniği (Program Evaluation Review Technique); 1957'de ABD Donanması'nın Polaris Füze Projesi için Booz Allen Hamilton tarafından geliştirilmiştir. Temel mantığı: gerçek proje sürelerinin belirsiz olduğu durumlarda, tek bir tahmin yerine ÜÇ NOKTA tahmin yapılır ve beklenen süre istatistiksel olarak hesaplanır. Üç Süre Tahmini: (1) Optimistik Süre (a — optimistic time) — her şey en iyi şekilde giderse faaliyetin tamamlanabileceği minimum süre; düşük olasılıkla gerçekleşir, (2) En Olası Süre (m — most likely time) — normal koşullarda en muhtemel süre; öngörülen değer, (3) Pesimistik Süre (b — pessimistic time) — her şey kötüye giderse faaliyetin alabileceği maksimum süre; düşük olasılıkla gerçekleşir. Beklenen Süre (TE - Expected Time) Formülü: TE = (a + 4m + b) / 6. Bu formül beta dağılımı yaklaşımına dayanır ve en olası süreye 4 ağırlık verir. Örnek Hesaplama: Bir faaliyet için optimistik 4 gün, en olası 6 gün, pesimistik 14 gün ise: TE = (4 + 4×6 + 14) / 6 = 42 / 6 = 7 gün. Standart Sapma (σ): σ = (b - a) / 6; varyans σ² = ((b-a)/6)². Bu sayede proje süresinin olasılıksal aralıkları (örn. %95 güven düzeyinde 60-70 gün arası) hesaplanabilir. PERT'in avantajı belirsizlik içeren AR-GE ve yazılım projeleri için uygun olmasıdır; dezavantajı süre tahminlerinin subjektif olabilmesidir. Modern proje yönetim yazılımları (MS Project, Primavera) PERT analizini destekler.",
          },
          {
            text: "CPM (Critical Path Method - Kritik Yol Metodu) tekniğinde 'kritik yol' kavramı ne anlama gelir?",
            options: [
              { id: "A", text: "En kısa yol — projedeki en hızlı tamamlanan faaliyet zinciri" },
              { id: "B", text: "Projedeki EN UZUN yol (longest path); bu yoldaki faaliyetlerin 'esnekliği' (slack/float) SIFIRDIR; kritik yoldaki herhangi bir gecikme TÜM projeyi geciktirir; proje yöneticisinin en çok dikkat etmesi gereken faaliyetler bu yoldadır; minimum proje süresini gösterir." },
              { id: "C", text: "Tüm faaliyetlerin ortalaması" },
              { id: "D", text: "En pahalı faaliyetlerin zinciri" },
            ],
            correct: "B",
            explanation:
              "CPM (Critical Path Method); 1957'de DuPont Corporation ve Remington Rand tarafından eş zamanlı geliştirilen, deterministik (sabit süreli) proje çizelgeleme tekniğidir. Kritik Yol Kavramı: Projedeki EN UZUN faaliyet zinciridir. Görünüşte ters görünür (neden en kısa değil?), ancak mantığı şudur: paralel faaliyetler olduğunda, proje en uzun zincir tamamlanmadan bitemez; dolayısıyla minimum proje süresi en uzun yola eşittir. Kritik Yolun Özellikleri: (1) Esneklik (Slack/Float) Sıfırdır — kritik yoldaki faaliyetlerin başlama zamanını geciktirmek imkânsızdır; gecikme tüm projeyi geciktirir, (2) Bir Projede Birden Fazla Kritik Yol Olabilir — eşit uzunluktaki paralel zincirler, (3) Kritik Yol Faaliyetlerine Öncelikli Kaynak — proje yöneticisi en deneyimli personeli, en iyi araçları buraya verir, (4) Risk Yönetimi — kritik yoldaki risklerin yönetimi öncelikli. Hesaplama: 4 zaman parametresi: (a) EST (Earliest Start Time) — En Erken Başlama (öne doğru hesaplama), (b) EFT (Earliest Finish Time) — En Erken Bitiş = EST + Süre, (c) LST (Latest Start Time) — En Geç Başlama (geriye doğru hesaplama), (d) LFT (Latest Finish Time) — En Geç Bitiş. Slack = LST − EST = LFT − EFT; SLACK = 0 OLAN FAALİYETLER KRİTİK YOLDADIR. Pratik Kullanım: bir proje yöneticisinin en önemli görevi kritik yoldaki faaliyetleri sürekli izlemek ve gecikmeleri hızla yönetmektir. Kritik yol değişebilir — bir faaliyetin gecikmesi başka bir paralel yolu kritik yapabilir.",
          },
          {
            text: "Gantt şemaları için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Gantt şemaları 2000 yılından sonra geliştirilmiştir." },
              { id: "B", text: "1910-1915 yılları arasında Henry Gantt tarafından geliştirilen ÇUBUK GRAFIK (bar chart) tipi proje çizelgeleme tekniğidir; yatay eksen zamanı, dikey eksen faaliyetleri gösterir; her çubuğun uzunluğu faaliyetin süresini gösterir; basit, görsel ve yaygın kullanılır." },
              { id: "C", text: "Yalnızca büyük yazılım projeleri için kullanılır." },
              { id: "D", text: "Yalnızca PERT'ten sonra geliştirilmiştir." },
            ],
            correct: "B",
            explanation:
              "Gantt Şemaları (Gantt Charts); proje yönetimi tarihinin en eski ve hâlâ en yaygın kullanılan çizelgeleme tekniğidir. Tarihçe: 1910-1915 yılları arasında Amerikalı mühendis ve yönetim danışmanı Henry Laurence Gantt tarafından geliştirilmiştir; Hoover Barajı, Eyfel Kulesi gibi büyük projelerde başarıyla kullanılmıştır. Yapı: (1) Yatay Eksen (X) — Zaman; günler, haftalar, aylar, çeyrekler şeklinde olabilir, (2) Dikey Eksen (Y) — Faaliyetler/Görevler; üst düzey aşamalar ve alt görevler hiyerarşik gösterilir, (3) Çubuklar (Bars) — her görev için bir yatay çubuk; çubuğun başlangıcı görevin başlangıç tarihi, sonu bitiş tarihi, uzunluğu süresidir. Modern Gantt Özellikleri: (a) İlerleme Yüzdeleri — çubuk içinde renkli kısım tamamlanan oranı gösterir, (b) Bağımlılıklar (Dependencies) — görevler arası bağlantı okları (FS, SS, FF, SF tipleri), (c) Kilometre Taşları (Milestones) — elmas/baklava sembolüyle önemli proje noktaları, (d) Kaynak Atamaları — her göreve atanan personel/ekipman, (e) Kritik Yol Vurgulanması — kritik yol farklı renkte gösterilir. Faydaları: çok görsel ve anlaşılır, ilerlemeyi takip etmek kolay, paydaş iletişimi için ideal, basit projeler için yeterli. Zayıf Yönleri: büyük projelerde karmaşık, dinamik değişikliklere ayak uyduramaz, faaliyet bağımlılıklarını detaylı göstermek zor. Yazılımlar: Microsoft Project (klasik), Asana, Jira, Monday.com, Smartsheet, GanttPRO modern Gantt destekler. CPM ve PERT genelde Gantt üzerinde görselleştirilir; Gantt diğer tekniklerin tamamlayıcısıdır.",
          },
          {
            text: "Agile metodolojilerinde kullanılan 'Zaman Kutulama' (Time Boxing) tekniği için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Faaliyetlerin esnek süreli olmasıdır." },
              { id: "B", text: "Sabit süreli iterasyonların (örn. Scrum sprint = 2-4 hafta) tanımlanması; sürenin sonunda ne yapıldıysa teslim edilir, kapsam değişebilir ancak süre değişmez; kapsamla zaman arasında ters bir öncelik vardır — zaman korunur, kapsam ayarlanır." },
              { id: "C", text: "Zaman kutulamada süre serbestçe uzatılabilir." },
              { id: "D", text: "Yalnızca uzun vadeli projeler için kullanılır." },
            ],
            correct: "B",
            explanation:
              "Zaman Kutulama (Time Boxing); Agile proje yönetimi felsefesinin temel tekniklerinden biridir. Klasik proje yönetiminden farklı olarak, kapsam yerine ZAMAN sabittir. Temel Mantık: (1) Sabit Süre — proje sabit süreli kutulara (timeboxes) bölünür; bu süre sözleşmeyle korunur ve değiştirilmez. Süre dolduğunda iş kutusu kapanır, (2) Esnek Kapsam — kapsam (yapılacak özellikler) önceliklendirilir; sürenin izin verdiği kadar tamamlanır; tamamlanamayan özellikler bir sonraki kutuya devreder, (3) Klasik 3T'nin Tersi — geleneksel projede 'tüm kapsamı tamamla, zaman kayar' anlayışı vardır; Agile'da 'zamanı koru, kapsamı ayarla' anlayışı vardır. Yaygın Time Box Türleri: (a) Scrum Sprint — 2-4 hafta (genelde 2 hafta); sprintin sonunda çalışan bir ürün artışı teslim edilir, (b) Daily Standup — 15 dakika, günlük durum toplantısı, (c) Sprint Planning — 2-4 saat, sprint başlangıcında planlama, (d) Sprint Review — 1-2 saat, sprint sonunda paydaşlara demo, (e) Sprint Retrospective — 1 saat, ekibin süreç iyileştirme görüşmesi, (f) Release — birden fazla sprint, 3-6 ay, kullanıcıya canlı sürüm teslimi. Avantajları: (1) Hızlı geri bildirim — kullanıcı her sprintte gerçek çalışan ürünü görür, (2) Risk azaltma — proje sonuna kadar beklenmez, sorunlar erken görülür, (3) Esneklik — değişen ihtiyaçlara uyum, (4) Motivasyon — ekip kısa hedeflere odaklanır, başarı duygusu, (5) Şeffaflık — paydaşlar sürekli gerçek ilerlemeyi görür. Zaman Kutulama Disiplini: kuralı bozmamak kritiktir; 'sadece bu sprint biraz uzasın' demek tüm sistemi çökertir. Eğer kapsam yetiştirilmiyorsa kapsam keser, süre uzatma. Agile metodolojiler: Scrum (en yaygın), Kanban, XP (Extreme Programming), SAFe (Scaled Agile Framework — büyük organizasyonlar), Nexus, LeSS.",
          },
          {
            text: "PERT ve CPM teknikleri arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki teknik aynıdır." },
              { id: "B", text: "PERT olasılıksal (belirsizliklerle başa çıkar, her faaliyet için üç süre tahmini, AR-GE/yazılım projeleri için uygun); CPM deterministik (sabit süreler, kesin tahminler, inşaat/üretim projeleri için uygun); pratikte modern projelerde birlikte kullanılırlar." },
              { id: "C", text: "PERT yalnızca kısa, CPM yalnızca uzun projeler için kullanılır." },
              { id: "D", text: "PERT yalnızca yazılım, CPM yalnızca donanım için kullanılır." },
            ],
            correct: "B",
            explanation:
              "PERT ve CPM; 1957 yılında ABD'de neredeyse eş zamanlı geliştirilmiş iki proje çizelgeleme tekniğidir. Aynı dönemde, farklı amaçlarla, farklı organizasyonlar tarafından ortaya çıkmıştır ve her birinin kendine özgü güçlü yönü vardır. PERT (Program Evaluation Review Technique): (1) Tarihçe — 1957, ABD Donanması Polaris Füze Projesi için Booz Allen Hamilton tarafından geliştirildi, (2) Yaklaşım — OLASILIKSAL (probabilistic); süreler kesin bilinemiyor, her faaliyet için üç tahmin (a, m, b), beklenen süre (a+4m+b)/6, varyans (b-a)²/36, (3) Uygun Projeler — AR-GE projeleri, yenilikçi/öncü teknolojiler, yazılım geliştirme, akademik araştırma; süre belirsizliği yüksek olan projeler, (4) Avantajı — belirsizliği matematiksel olarak modelleyebilme, olasılıksal proje süresi (örn. %95 güven aralığında 100-120 gün arası tamamlanır), (5) Dezavantajı — süre tahminleri subjektif olabilir, üç tahmin almak zaman alır. CPM (Critical Path Method): (1) Tarihçe — 1957, DuPont Corporation ve Remington Rand tarafından bağımsız geliştirildi; ilk uygulama bir kimyasal tesis bakımı, (2) Yaklaşım — DETERMİNİSTİK (deterministic); her faaliyet için tek bir kesin süre tahmini, (3) Uygun Projeler — inşaat, üretim, bakım, montaj projeleri; geçmiş deneyim ve standartlardan süreler iyi biliniyor, (4) Avantajı — kritik yolun net belirlenmesi, kaynak optimizasyonu, maliyet-süre dengelemesi (crashing), (5) Dezavantajı — süre belirsizliğini hesaba katmaz; her tahmin %100 kesin varsayılır. Pratikte Birlikte Kullanım: modern proje yönetim yazılımları (MS Project, Primavera) hem PERT hem CPM özelliklerini birlikte sunar; aslında bir 'PERT/CPM hibridi' yaygındır — kritik yol mantığı (CPM) + üç nokta tahmin (PERT). Yazılım projelerinde Function Points + Story Points + PERT yaklaşımları birlikte uygulanır.",
          },
        ],
      },
      // ──────────── Ders 3: Proje İşletimi, Risk ve Kapatma — EVA ────────────
      {
        id: "m1021-l3",
        title: "Proje İşletimi, Risk Yönetimi, EVA ve Kapatma",
        duration: "9 dk",
        summary: {
          title: "Proje İşletimi, Risk Yönetimi ve Kapatma",
          intro:
            "Proje işletimi; proje planının hayata geçirilmesi, sürekli izlenmesi ve kontrol edilmesi sürecidir. Üç ana aşama: (1) Proje Açılışı (kick-off, ekip oluşturma, dokümantasyon), (2) Proje Kontrolü ve İzlenmesi (kapsam, zaman, maliyet, risk, kaynak yönetimi), (3) Proje Kapatılması (sonuç değerlendirmesi, dokümantasyon, dersler öğrenildi). EVA (Earned Value Analysis / Kazanılan Değer Analizi) — proje performansının ölçülmesinde altın standarttır; zaman ve maliyet sapmalarını sayısallaştırır. Proje Risk Yönetimi ise risklerin belirlenmesi, analizi, müdahale ve izleme süreçlerinden oluşur.",
          sections: [
            {
              heading: "Proje Açılışı ve İzleme",
              icon: "shield",
              items: [
                {
                  strong: "Proje Açılışı (Kick-off):",
                  text: "Resmi proje başlangıcı; proje sponsoru ve yöneticisi atanır, ekip kurulur, proje şartnamesi (Project Charter) imzalanır, paydaş analizi yapılır, ilk plan onaylanır.",
                },
                {
                  strong: "Proje Yöneticisi Rolü:",
                  text: "PMI'a göre proje yöneticisinin üç yetkinlik alanı: Teknik Proje Yönetimi (planlama, çizelgeleme), Liderlik (vizyon, motivasyon), Stratejik ve İş Yönetimi (iş bilgisi, finansal anlayış).",
                },
                {
                  strong: "Kapsam Değişikliği Yönetimi:",
                  text: "Proje sırasında ortaya çıkan değişiklik talepleri 'Değişiklik Talebi' (Change Request) formu ile sunulur; etki analizi yapılır (zaman, maliyet, kalite), Değişiklik Kontrol Kurulu (CCB) onaylar.",
                },
                {
                  strong: "Scope Creep (Kapsam Kayması):",
                  text: "Kontrol edilmeden eklenen küçük değişikliklerin proje kapsamını şişirmesidir; proje başarısızlığının ana nedenlerinden biridir; sıkı değişiklik kontrolü ile önlenir.",
                },
                {
                  strong: "Kazanılan Değer Analizi (EVA):",
                  text: "Earned Value Analysis — proje performansını sayısallaştıran teknik. Üç ana metrik: PV (Planlanan Değer), EV (Kazanılan Değer), AC (Gerçek Maliyet). CV = EV − AC (Maliyet Sapması), SV = EV − PV (Zaman Sapması), CPI = EV/AC, SPI = EV/PV.",
                },
              ],
            },
            {
              heading: "Risk Yönetimi ve Kapatma",
              icon: "trend",
              items: [
                {
                  strong: "Proje Risk Tanımı:",
                  text: "Projede oluşabilecek belirsiz bir olay veya durumun proje hedeflerine (zaman, maliyet, kapsam, kalite) etkisi; pozitif (fırsat) veya negatif (tehdit) olabilir; her riskin olasılık ve etki boyutu vardır.",
                },
                {
                  strong: "Risk Yönetimi Süreçleri:",
                  text: "(1) Risk Yönetimi Planlama, (2) Risklerin Belirlenmesi (Brainstorming, Delphi, kontrol listeleri), (3) Niteliksel Risk Analizi (olasılık × etki matrisi), (4) Niceliksel Risk Analizi (Monte Carlo simülasyonu), (5) Risk Müdahale Planlaması, (6) Risk Kontrol/İzleme.",
                },
                {
                  strong: "Risk Müdahale Stratejileri (Tehditler için):",
                  text: "Kaçınma (Avoid — kapsam değişikliği), Aktarma (Transfer — sigorta, dış kaynak), Azaltma (Mitigate — önleyici tedbirler), Kabul (Accept — tepkisel veya proaktif).",
                },
                {
                  strong: "Risk Müdahale Stratejileri (Fırsatlar için):",
                  text: "Kullanma (Exploit), Paylaşma (Share — partner ile), Geliştirme (Enhance), Kabul (Accept). Risk fırsata da yöneliktir, sadece tehdit değil.",
                },
                {
                  strong: "Proje Kapatma:",
                  text: "Proje çıktılarının teslim edilmesi, paydaş onayı, finansal kapanış, dokümantasyon, kaynak serbestleştirme, kutlama, 'Dersler Öğrenildi' (Lessons Learned) toplantısı; bilgi gelecek projelere aktarılır.",
                },
              ],
            },
          ],
          tip: "Proje işletimi 3 aşama: Açılış → İzleme/Kontrol → Kapatma. EVA temel formüller: CV=EV−AC, SV=EV−PV, CPI=EV/AC, SPI=EV/PV; CPI<1 = bütçe aşımı, SPI<1 = gecikme. Risk Müdahale: Tehdit (Kaçın-Aktar-Azalt-Kabul) + Fırsat (Kullan-Paylaş-Geliştir-Kabul). Scope Creep = sessiz öldürücü. Lessons Learned = kurumsal bilgi.",
        },
        questions: [
          {
            text: "Proje yönetiminde 'Kazanılan Değer Analizi' (EVA - Earned Value Analysis) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "EVA yalnızca finansal raporlamada kullanılır." },
              { id: "B", text: "Proje performansını sayısallaştıran tekniktir; üç ana metrik: PV (Planlanan Değer), EV (Kazanılan Değer), AC (Gerçek Maliyet); türetilen göstergeler: CV = EV−AC (Maliyet Sapması), SV = EV−PV (Zaman Sapması), CPI = EV/AC (Maliyet Performans Endeksi), SPI = EV/PV (Zaman Performans Endeksi); CPI<1 bütçe aşımı, SPI<1 gecikme demektir." },
              { id: "C", text: "EVA yalnızca yıl sonu raporlanır." },
              { id: "D", text: "EVA sadece sözel bir değerlendirmedir." },
            ],
            correct: "B",
            explanation:
              "Kazanılan Değer Analizi (Earned Value Analysis - EVA, EVM); 1960'larda ABD Savunma Bakanlığı tarafından geliştirilen ve modern proje yönetiminin altın standardı olan bir performans ölçüm tekniğidir. Üç Temel Metrik: (1) PV — Planned Value (Planlanan Değer / BCWS — Budgeted Cost of Work Scheduled) — belirli bir tarihte planlanan iş için bütçelenen tutar. 'Bu tarihe kadar ne kadar iş yapmış olmalıydık?', (2) EV — Earned Value (Kazanılan Değer / BCWP — Budgeted Cost of Work Performed) — belirli bir tarihte gerçekten tamamlanan iş için bütçelenen tutar. 'Bu tarihe kadar ne kadar iş yapıldı?', (3) AC — Actual Cost (Gerçek Maliyet / ACWP — Actual Cost of Work Performed) — gerçekten harcanan tutar. 'Ne kadar harcandı?'. Türetilen Sapma Göstergeleri: (a) CV — Cost Variance (Maliyet Sapması) = EV − AC; pozitif → bütçenin altında, negatif → bütçe aşımı, (b) SV — Schedule Variance (Zaman Sapması) = EV − PV; pozitif → planın önünde, negatif → gecikmiş. Türetilen Performans Endeksleri: (a) CPI — Cost Performance Index = EV / AC; 1'in üstü → bütçenin altında, 1'in altı → bütçe aşımı; örn. CPI=0.8, her 1 dolar için 0.8 dolarlık iş üretiliyor, (b) SPI — Schedule Performance Index = EV / PV; 1'in üstü → öne, 1'in altı → geriye; örn. SPI=0.9, planın %90'ında ilerliyor. Tahmin Göstergeleri: (a) EAC — Estimate at Completion = Toplam Bütçe / CPI; projenin nihai maliyet tahmini, (b) ETC — Estimate to Complete = EAC − AC; geriye kalan tahmini maliyet, (c) VAC — Variance at Completion = BAC − EAC; nihai sapma. Avantajları: erken uyarı sinyali verir, objektif sayısal değerlendirme, tahmin yapılabilir, raporlama standardize. Modern proje yönetim yazılımları EVA hesaplamalarını otomatik yapar.",
          },
          {
            text: "Proje risk yönetiminde TEHDIT risklerine yönelik müdahale stratejileri aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Tek strateji vardır: kabul etmek." },
              { id: "B", text: "Kaçınma (Avoid — riski tetikleyen kapsam değişikliği), Aktarma (Transfer — sigorta, dış kaynak), Azaltma (Mitigate — önleyici tedbirler), Kabul (Accept — tepkisel veya proaktif rezerv ayırma); fırsatlar için de paralel stratejiler vardır: Kullanma, Paylaşma, Geliştirme, Kabul." },
              { id: "C", text: "Yalnızca riski göz ardı etmek." },
              { id: "D", text: "Yalnızca büyük şirketler risk yönetimi yapar." },
            ],
            correct: "B",
            explanation:
              "Proje Risk Müdahale Stratejileri; PMBOK Risk Yönetimi sürecinin kritik adımıdır. Riskler tehdit (negatif) ve fırsat (pozitif) olarak ikiye ayrılır ve her biri için ayrı stratejiler vardır. TEHDIT RİSKLERİ İÇİN 4 STRATEJİ: (1) Kaçınma (Avoid) — Riski tamamen ortadan kaldırma; bunun için projenin kapsamını değiştirmek, riskli kısımları çıkarmak, alternatif yöntem seçmek gerekebilir. Örnek: yeni bir teknolojinin risk yüksekse, kanıtlanmış bir teknoloji tercih etmek. Genelde yüksek olasılıklı + yüksek etkili riskler için, (2) Aktarma (Transfer) — Riski başka bir tarafa devretme; sigortalama, garanti, sözleşme klozları, dış kaynak kullanma. Örnek: yangın sigortası yaptırmak, kritik geliştirmeyi uzman firmaya outsource etmek. Risk ortadan kalkmaz ama mali sorumluluk başkasına geçer. Aktarmanın da bir maliyeti vardır (sigorta primi, hizmet bedeli), (3) Azaltma (Mitigate) — Riskin olasılığını veya etkisini düşürme. Örnekler: kapsamlı testler yapmak (yazılım hata olasılığını azaltır), eğitim vermek (personel hatası azalır), yedek sistem kurmak (downtime etkisi azalır). En yaygın strateji, (4) Kabul (Accept) — Risk bilinçli olarak kabul edilir; düşük olasılıklı veya düşük etkili riskler için. İki türü var: (a) Pasif Kabul — bir şey yapılmaz, oluşursa baş edilir, (b) Aktif Kabul — risk için 'Acil Durum Rezervi' (contingency reserve) ayrılır (bütçe ve zaman tamponu). FIRSAT RİSKLERİ İÇİN 4 STRATEJİ: (1) Kullanma (Exploit) — fırsatı garantileme; örn. en iyi ekip üyelerini atamak, (2) Paylaşma (Share) — fırsatı en iyi yararlanacak partnerle paylaşma, (3) Geliştirme (Enhance) — fırsatın olasılığını/etkisini artırma, (4) Kabul (Accept) — pasif olarak yararlanma.",
          },
          {
            text: "Proje yönetiminde 'Scope Creep' (Kapsam Kayması) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Projenin başarı oranını artıran bir tekniktir." },
              { id: "B", text: "Kontrol edilmeden eklenen küçük değişikliklerin proje kapsamını sürekli şişirmesidir; proje başarısızlığının ANA nedenlerinden biridir; sıkı değişiklik kontrolü (Change Control Board, Change Request formları) ile önlenir; her değişiklik etki analizi (zaman, maliyet, kalite, risk) gerektirir." },
              { id: "C", text: "Yalnızca büyük projelerde gerçekleşir." },
              { id: "D", text: "Scope Creep avantajlı bir durumdur." },
            ],
            correct: "B",
            explanation:
              "Scope Creep (Kapsam Kayması, Project Creep); proje yönetiminin en yaygın ve en tehlikeli sorunlarından biridir. Tanım: kontrol mekanizması olmadan veya yetersiz kontrolle, projeye sürekli küçük eklemeler yapılması ve sonuçta proje kapsamının orijinal planın çok ötesine geçmesi. Nasıl Oluşur? (1) Resmi olmayan istekler — 'çok küçük bir değişiklik, hemen ekleyiver' türü görüşmeler, (2) Gold Plating — geliştiricilerin gönüllü olarak ekstra özellikler eklemesi (iyi niyetli ama zararlı), (3) Belirsiz kapsam — başlangıçta net tanımlanmamış kapsam, (4) Güçsüz proje yönetimi — proje yöneticisinin 'hayır' diyememesi, (5) Paydaş baskısı — etkili paydaşların kapsam dışı talepleri. Etkileri: (a) Zaman gecikmesi — daha çok iş, daha uzun süre, (b) Maliyet aşımı — daha çok kaynak, daha çok harcama, (c) Kalite düşüşü — ekibin daha çok iş yapmak için kalite kesintisi, (d) Personel tükenmişliği — sürekli yeni talepler, (e) Müşteri memnuniyetsizliği — son teslim ertelenir veya kalite düşer, (f) Proje başarısızlığı — Standish Group Chaos Report'una göre proje başarısızlıklarının %52'sinde scope creep faktör. Önleme Yöntemleri: (1) Net Kapsam Tanımı — Project Charter ve WBS'te kapsam açıkça yazılı, (2) Resmi Değişiklik Kontrolü — her değişiklik talebi (Change Request) yazılı, etki analizi (zaman/maliyet/risk) yapılır, (3) Değişiklik Kontrol Kurulu (Change Control Board - CCB) — paydaş temsilcileri değişiklikleri değerlendirir ve onaylar, (4) Kapsam Dokümantasyonu — neyin DAHIL olduğu kadar neyin DAHIL OLMADIĞI da yazılı, (5) Net İletişim — paydaşlara her değişikliğin gerçek maliyetini göstermek. Proje yöneticisinin temel becerilerinden biri saygılı şekilde 'hayır' veya 'evet ama şu maliyetle' demektir.",
          },
          {
            text: "Proje kapatma aşamasında yapılan 'Lessons Learned' (Dersler Öğrenildi) toplantısının amacı nedir?",
            options: [
              { id: "A", text: "Ekibe ödül vermek." },
              { id: "B", text: "Projenin başında ve sırasında yaşanan tüm deneyimlerin (başarılar, başarısızlıklar, beklenmedik durumlar) sistematik olarak değerlendirilmesi, dokümante edilmesi ve GELECEK PROJELERE aktarılabilir kurumsal bilgi haline getirilmesidir; sürekli iyileştirmenin temel mekanizmasıdır." },
              { id: "C", text: "Yalnızca finansal kapatma içindir." },
              { id: "D", text: "Müşteriye sunum yapmaktır." },
            ],
            correct: "B",
            explanation:
              "Lessons Learned (Dersler Öğrenildi); proje yönetiminin organizasyonel öğrenme mekanizmasıdır ve proje kapatma aşamasının kritik bir parçasıdır. Amaç: 'Hata yapmak öğrenmenin bir parçasıdır, ama aynı hatayı tekrar yapmak öğrenmemenin işareti' anlayışıyla organizasyonun her projeden öğrenmesini sağlamak. Toplantının İçeriği: (1) NE İYİ GİTTİ? — Başarılı kararlar, etkili teknikler, iyi çalışan süreçler, faydalı araçlar, ekibin güçlü yönleri. Bu uygulamalar gelecek projelerde de kullanılmalıdır, (2) NE KÖTÜ GİTTİ? — Hatalar, gecikmeler, maliyet aşımları, kalite sorunları, kötü iletişim, ekip çatışmaları. Kök nedenleri (root cause) analiz edilir, (3) BEKLENMEDİK DURUMLAR — Hiç düşünülmemiş riskler, ortaya çıkan fırsatlar, paydaşların değişen tutumları, (4) NE FARKLI YAPILMALIYDI? — Geriye baktığımızda daha iyi sonuç verecek alternatifler, (5) GELECEK İÇİN ÖNERİLER — sonraki projelere uygulanabilir net öneriler. Kim Katılır? Proje yöneticisi, proje ekibi (tüm üyeler), proje sponsoru, ana paydaşlar, müşteri temsilcileri, kalite/risk uzmanları. Yöntem: (a) Açık ve dürüst ortam — suçlama değil öğrenme odağı, (b) Anonim anketler — kişiler eleştirileri rahatlıkla paylaşabilir, (c) 5 Whys (5 Neden) — kök neden analizi tekniği, (d) Fishbone Diagram (Ishikawa) — neden-sonuç analizi. Dokümantasyon: Lessons Learned dokümante edilir ve organizasyonel bilgi yönetim sistemine (knowledge management) kaydedilir; gelecek proje yöneticilerinin başlangıçta erişebileceği bir varlık haline getirilir. PMBOK'a göre 'OPA - Organizational Process Assets'in bir parçasıdır. Gerçek Etkisi: organizasyonel olgunluk seviyesinin yüksek olduğu şirketler (CMMI Level 4-5, ISO 9001 sertifikalı) Lessons Learned'i ciddi bir disiplin olarak uygular; bu sayede proje başarı oranları %70+ seviyelere ulaşır.",
          },
          {
            text: "Proje risk yönetiminde 'niteliksel risk analizi' ile 'niceliksel risk analizi' arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki analiz aynıdır." },
              { id: "B", text: "Niteliksel Analiz: risklerin olasılık ve etki bazında sözel/kategorik değerlendirilmesi (Yüksek/Orta/Düşük), risk matrisi kullanılır; hızlı ve görsel, tüm riskler değerlendirilir. Niceliksel Analiz: yüksek riskli kalemler için SAYISAL analiz; Monte Carlo simülasyonu, beklenen parasal değer (EMV), karar ağacı; matematiksel kesinlik ama zaman ve veri yoğun." },
              { id: "C", text: "Niteliksel yalnızca yazılım, niceliksel yalnızca donanım için kullanılır." },
              { id: "D", text: "Her ikisi de sadece büyük şirketlerde yapılır." },
            ],
            correct: "B",
            explanation:
              "Proje Risk Analizi; iki ayrı seviyede yapılır ve birbirini tamamlar. (1) Niteliksel Risk Analizi (Qualitative Risk Analysis) — Önce yapılan, geniş kapsamlı ve hızlı analiz: (a) Yaklaşım — Her risk için OLASILIK ve ETKİ değerlendirmesi; sözel/kategorik puanlama (Çok Yüksek/Yüksek/Orta/Düşük/Çok Düşük veya 1-5 ölçeği), (b) Risk Matrisi (P-I Matrix) — Olasılık × Etki matrisi; 5x5 grid; sonuç skoru olasılık × etki = risk skoru; örn. olasılık 3, etki 4 → risk skoru 12, (c) Renkli Kodlama — Yeşil (düşük), Sarı (orta), Turuncu (yüksek), Kırmızı (kritik), (d) Avantajları — tüm riskler kapsanır, hızlı (1-2 saatte tüm proje için), düşük maliyet, görsel sunum kolay, (e) Çıktı — risklerin önceliklendirilmesi, hangi risklerin daha derin analiz gerektirdiğinin belirlenmesi. (2) Niceliksel Risk Analizi (Quantitative Risk Analysis) — Niteliksel analizden sonra, YÜKSEK ÖNCELİKLİ riskler için yapılan derinlemesine sayısal analiz: (a) Yaklaşım — risklerin proje hedefleri (süre, maliyet, kapsam) üzerindeki etkisinin SAYISAL hesaplanması, (b) Kullanılan Teknikler — Monte Carlo Simülasyonu: binlerce senaryo simüle edilerek olasılık dağılımı çıkarılır (örn. projenin 100-130 gün arasında %80 olasılıkla tamamlanacağı); Beklenen Parasal Değer (EMV - Expected Monetary Value) = Olasılık × Etki Para Değeri (her risk için pozitif/negatif); Karar Ağacı (Decision Tree) — kararların maliyetlerini ve olasılıklarını analiz; Duyarlılık Analizi (Tornado Diagram) — hangi değişkenlerin sonucu en çok etkilediği, (c) Avantajları — matematiksel kesinlik, güven aralıkları, optimum karar verme, paydaşlara somut rakam sunma, (d) Dezavantajları — zaman yoğun (saatler-günler), uzman gerektirir (genelde özel analist), tarihsel veri ihtiyacı, yazılım gerekir (MS Project, @Risk, Crystal Ball). Sıralama: Niteliksel → seç önemli riskleri → Niceliksel.",
          },
        ],
      },
      // ──────────── Ders 4: SDLC ve Yazılım Geliştirme Metodolojileri ────────────
      {
        id: "m1021-l4",
        title: "Sistem Geliştirme Yaşam Döngüsü (SDLC) ve Yazılım Metodolojileri",
        duration: "10 dk",
        summary: {
          title: "SDLC ve Yazılım Geliştirme Metodolojileri",
          intro:
            "Sistem Geliştirme Yaşam Döngüsü (SDLC — System Development Life Cycle); bir bilgi sisteminin fikir aşamasından emekliliğe kadar geçirdiği aşamaları tanımlayan yapısal süreçtir. Klasik aşamalar: Fizibilite → Gereksinim Analizi → Tasarım → Geliştirme/Kodlama → Test → Uygulama → Bakım. SDLC metodolojileri farklılaşır: Waterfall (klasik, doğrusal), V-Modeli (test odaklı), Spiral (risk odaklı), RAD (hızlı), Agile (yinelemeli, sprintli), OOSD (nesne yönelimli), CBSD (bileşen tabanlı), DevOps (geliştirme + operasyon birleşik). Her metodoloji belirli proje tipleri için uygundur.",
          sections: [
            {
              heading: "SDLC Aşamaları ve Waterfall",
              icon: "shield",
              items: [
                {
                  strong: "SDLC Klasik Aşamaları:",
                  text: "(1) Fizibilite, (2) Gereksinim Analizi (Requirements), (3) Tasarım (Design — yüksek seviyeli ve detaylı), (4) Geliştirme/Kodlama (Development), (5) Test, (6) Üretime Alma/Devreye Alma (Implementation), (7) İşletim ve Bakım (Operation & Maintenance), (8) Emeklilik (Retirement).",
                },
                {
                  strong: "Waterfall (Şelale) Modeli:",
                  text: "Klasik SDLC yaklaşımı; doğrusal/aşamalı süreç, her aşama bir öncekini takip eder, geri dönüş zordur; gereksinimlerin başlangıçta net olduğu, kapsam değişikliği beklenmeyen projeler için uygun (yasal düzenleme, askeri yazılım).",
                },
                {
                  strong: "V-Modeli:",
                  text: "Waterfall'ın test odaklı versiyonu; sol tarafta geliştirme aşamaları (gereksinim → tasarım → kod), sağ tarafta paralel test aşamaları (birim test → entegrasyon → sistem → kabul); her geliştirme aşamasının karşılığı test aşaması.",
                },
                {
                  strong: "Spiral Modeli (Boehm 1986):",
                  text: "Risk odaklı yinelemeli model; her döngüde (spiral) dört aşama: hedefler belirleme, risk analizi, geliştirme/test, planlama; yüksek riskli, karmaşık projeler için uygun; pahalı ama güvenli.",
                },
                {
                  strong: "Incremental ve Iterative:",
                  text: "Incremental — sistem parçalar halinde geliştirilir ve teslim edilir, her parça öncekine eklenir; Iterative — sistem bir defada geliştirilir ama iyileştirilerek; modern yazılım her ikisini birleştirir.",
                },
              ],
            },
            {
              heading: "Agile, RAD ve Modern Yaklaşımlar",
              icon: "trend",
              items: [
                {
                  strong: "Agile Manifesto (2001):",
                  text: "17 yazılım uzmanının ortak değerleri: Bireyler ve etkileşimler > süreçler ve araçlar; Çalışan yazılım > kapsamlı dokümantasyon; Müşteri işbirliği > sözleşme görüşmeleri; Değişime yanıt > planı takip etme. 4 değer + 12 ilke.",
                },
                {
                  strong: "Scrum Çerçevesi:",
                  text: "En yaygın Agile metodolojisi; Roller: Ürün Sahibi (PO), Scrum Master (SM), Geliştirme Ekibi; Etkinlikler: Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective; Çıktılar: Product Backlog, Sprint Backlog, Increment.",
                },
                {
                  strong: "RAD (Rapid Application Development):",
                  text: "James Martin (1991) — hızlı uygulama geliştirme; prototipleme, kullanıcı katılımı, küçük ekipler, kısa döngüler; iş kuralları sık değişen, sürelerin kısıtlı olduğu projeler için uygun; SCREEM şartı: kullanıcı kabulü kritik.",
                },
                {
                  strong: "OOSD (Object Oriented Software Development):",
                  text: "Nesne yönelimli yazılım geliştirme; gerçek dünyayı nesneler (objects) olarak modelleme; sınıflar (classes), kalıtım (inheritance), polimorfizm (polymorphism), kapsülleme (encapsulation); UML (Unified Modeling Language) ile modelleme; Java, C++, Python, C# dilleri kullanır.",
                },
                {
                  strong: "DevOps ve Modern Yaklaşımlar:",
                  text: "Geliştirme (Development) + Operasyon (Operations) birleşik; sürekli entegrasyon (CI), sürekli teslimat (CD), otomatik test, altyapı kod (IaC), bulut tabanlı; modern başarılı şirketler (Netflix, Amazon, Google) DevOps uygular; yılda binlerce deploy yapabilir.",
                },
              ],
            },
          ],
          tip: "SDLC = sistem geliştirme yaşam döngüsü. Klasik metodolojiler: Waterfall (doğrusal), V-Modeli (test odaklı), Spiral (risk odaklı). Modern: Agile (Scrum, Kanban), DevOps (geliştirme+operasyon). RAD = hızlı prototipleme, kullanıcı odaklı. OOSD = nesne yönelimli (UML, sınıflar, kalıtım). Agile Manifesto 2001 = 4 değer + 12 ilke.",
        },
        questions: [
          {
            text: "Yazılım Geliştirmede 'Waterfall' (Şelale) modeli için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Aşamalar paralel olarak yürütülür." },
              { id: "B", text: "Klasik SDLC yaklaşımıdır; DOĞRUSAL/aşamalı süreç, her aşama (Gereksinim → Tasarım → Kodlama → Test → Uygulama → Bakım) bir öncekini takip eder; geri dönüş zordur; gereksinimlerin başlangıçta net olduğu, kapsam değişikliği beklenmeyen projeler için uygundur (yasal düzenleme, askeri yazılım, kritik altyapı)." },
              { id: "C", text: "Yalnızca büyük şirketlerde kullanılır." },
              { id: "D", text: "2010'lardan sonra geliştirilmiştir." },
            ],
            correct: "B",
            explanation:
              "Waterfall (Şelale) Modeli; yazılım geliştirme tarihinin ilk yapısal modelidir; 1970'te Winston W. Royce tarafından bir makalede tanımlanmış, sonraki on yıllarda yaygın kullanılmıştır. Adı 'şelale' olmasının nedeni aşamaların yukarıdan aşağıya doğru tek yönlü akmasıdır (suyun şelaleden aşağı düşmesi gibi). Klasik 7 Aşama: (1) Gereksinim Analizi (Requirements Analysis) — kullanıcı ihtiyaçları toplanır, gereksinim spesifikasyonu (SRS) yazılır, (2) Sistem Tasarımı (System Design) — yüksek seviyeli mimari tasarım, sistem bileşenleri, (3) Detaylı Tasarım (Detailed Design) — alt sistem ve modül tasarımı, veri tabanı şeması, (4) Kodlama (Implementation/Coding) — yazılımın kodlanması, (5) Test (Verification) — birim, entegrasyon, sistem testleri, (6) Uygulama/Devreye Alma (Deployment) — üretim ortamına alma, (7) İşletim ve Bakım (Operation & Maintenance) — hata düzeltme, küçük iyileştirmeler. Özellikleri: (a) Doğrusal/Aşamalı — her aşama bir öncekini takip eder, (b) Aşamalar Kapanır — bir aşama tamamlanmadan sonraki başlamaz, (c) Geri Dönüş Zor — aşamaya geri dönmek pahalıdır, dokümantasyon yeniden yapılmalıdır, (d) Yoğun Dokümantasyon — her aşamada formal dokümantasyon, onaylar, (e) Müşteri Etkileşimi Az — gereksinim aşamasından sonra müşteri ile yoğun temas olmaz. Uygun Olduğu Projeler: (1) Net ve sabit gereksinimler — yasal düzenleme yazılımları, vergi sistemleri, (2) Kritik güvenlik — askeri, havacılık, sağlık sistemleri, (3) Yüksek dokümantasyon zorunluluğu — devlet ihaleleri, regülasyon. Zayıf Yönleri: (1) Geç geri bildirim — son testte tüm sorunlar görülür, (2) Esneksizlik — değişen gereksinimlere uyum zor, (3) Yüksek risk — yıllar süren proje sonunda yanlış çıktı olabilir. Modern Trend: birçok sektör Waterfall'dan Agile'a geçmiştir; ancak kritik altyapı ve regülasyon yoğun projelerde Waterfall hâlâ kullanılır. Bir varyasyon olan V-Modeli, Waterfall'ın test odaklı versiyonudur.",
          },
          {
            text: "Agile Manifesto (2001) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Süreçler ve araçlar bireylerden daha önemlidir." },
              { id: "B", text: "17 yazılım uzmanı (Snowbird, Utah) tarafından oluşturulan; 4 temel değer: (1) Bireyler ve etkileşimler > süreçler ve araçlar, (2) Çalışan yazılım > kapsamlı dokümantasyon, (3) Müşteri işbirliği > sözleşme görüşmeleri, (4) Değişime yanıt > planı takip etme; ayrıca 12 ilke vardır." },
              { id: "C", text: "Yalnızca büyük yazılım şirketleri için tasarlanmıştır." },
              { id: "D", text: "Sözleşmeler işbirliğinden önemlidir." },
            ],
            correct: "B",
            explanation:
              "Agile Manifesto; modern yazılım geliştirme metodolojilerinin felsefi temelini oluşturan, 2001 yılında Snowbird, Utah'ta (ABD) toplanan 17 yazılım uzmanı tarafından yayımlanan deklarasyondur. Katılımcılar arasında Kent Beck (XP), Martin Fowler, Robert C. Martin, Ken Schwaber ve Jeff Sutherland (Scrum), Jim Highsmith, Alistair Cockburn gibi sektörün önde gelen isimleri vardı. 4 TEMEL DEĞER (Manifesto): Her bir karşılaştırmada SOL tarafa daha çok değer verilir, ancak SAĞ tarafın da değeri vardır: (1) Süreçler ve araçlar yerine BİREYLER VE ETKİLEŞİMLER — yazılım iyi insanlar tarafından yazılır, en gelişmiş araçlar bile beceri ve iletişimden öncelikli değildir, (2) Kapsamlı dokümantasyon yerine ÇALIŞAN YAZILIM — müşterinin gerçek ihtiyacı çalışan bir ürün; sayfalarca doküman değil, (3) Sözleşme görüşmeleri yerine MÜŞTERİ İŞBİRLİĞİ — sözleşmeyle değil işbirliğiyle ilerlemek; müşteri proje boyunca aktif katılımcıdır, (4) Planı takip etmek yerine DEĞİŞİME YANIT — sabit planı uygulamak yerine değişen koşullara uyum sağlamak; piyasa hızla değişiyor. 12 İLKE (Principles): manifesto değerlerini destekleyen 12 detaylı ilke; örn: (1) En yüksek önceliğimiz müşteri memnuniyetini, erken ve sürekli değerli yazılım teslim ederek sağlamaktır, (2) Değişen gereksinimlere kucak açın, geç aşamalarda bile, (3) Çalışan yazılımı sık sık (haftalar-aylar) teslim edin, (4) İş insanları ve geliştiriciler proje boyunca birlikte çalışmalı, (5) En iyi mimari, gereksinimler ve tasarımlar kendini organize eden ekiplerden çıkar, ... Etkileri: Agile metodolojisi (Scrum, Kanban, XP, SAFe, LeSS) Agile Manifesto temel alır. Bugün Fortune 500 şirketlerinin büyük çoğunluğu Agile yaklaşımları uygulamaktadır. Yazılım dışında pazarlama (Agile Marketing), insan kaynakları (Agile HR), donanım geliştirme gibi alanlara da yayılmıştır.",
          },
          {
            text: "Nesneye Yönelik Yazılım Geliştirme (OOSD - Object Oriented Software Development) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca eski yazılımları onarmak için kullanılır." },
              { id: "B", text: "Gerçek dünyayı NESNELER (objects) olarak modelleyen yaklaşım; temel kavramlar: sınıflar (classes), nesneler (instances), kalıtım (inheritance), polimorfizm (polymorphism), kapsülleme (encapsulation), soyutlama (abstraction); UML ile modellenir; Java, C++, Python, C#, Ruby dilleri kullanır." },
              { id: "C", text: "Yalnızca web siteleri için kullanılır." },
              { id: "D", text: "Yalnızca basit projeler için uygundur." },
            ],
            correct: "B",
            explanation:
              "Nesneye Yönelik Yazılım Geliştirme (Object-Oriented Software Development - OOSD); 1960'larda Simula dili ile başlamış, 1980'lerde Smalltalk ile yaygınlaşmış ve 1990'lardan itibaren yazılım geliştirmenin baskın paradigması haline gelmiş yaklaşımdır. Temel Felsefe: Gerçek dünyayı NESNELER (objects) olarak modellemek; her nesnenin özellikleri (attributes/properties) ve davranışları (methods/behaviors) vardır. Örnek: Banka uygulamasında 'Müşteri', 'Hesap', 'İşlem' nesneleri vardır; her birinin özellikleri (Müşteri.ad, Hesap.bakiye) ve davranışları (Müşteri.hesapAç(), Hesap.paraYatır()) bulunur. OOSD'nin 4 Temel İlkesi: (1) Kapsülleme (Encapsulation) — bir nesnenin verilerinin ve davranışlarının tek bir yerde toplanması; iç detaylar dış dünyadan gizlenir (data hiding); arayüzler (interfaces) üzerinden etkileşim. Faydası: kod karmaşıklığı azalır, bakım kolaylaşır, (2) Kalıtım (Inheritance) — bir sınıfın başka bir sınıftan özellik ve davranışları devralması; örn. 'TasarrufHesabı' ve 'VadeliHesap' sınıfları genel 'Hesap' sınıfından kalıtım alır. Faydası: kod tekrar kullanımı (reusability), hiyerarşik yapı, (3) Polimorfizm (Polymorphism) — aynı arayüzün farklı şekillerde davranması; örn. 'Hesap.faizHesapla()' yöntemi tasarruf hesabında ve vadeli hesapta farklı çalışır. Faydası: esneklik, genişletilebilirlik, (4) Soyutlama (Abstraction) — karmaşık sistemleri basit modellerle temsil etme; iç detaylar gizlenir, sadece gerekli bilgi sunulur. UML (Unified Modeling Language): OOSD için standart modelleme dili; 14 diyagram türü: Sınıf Diyagramı (Class Diagram), Sıra Diyagramı (Sequence Diagram), Kullanım Senaryosu (Use Case), Etkileşim Diyagramı, vb. OOP Dilleri: Java, C++, C#, Python, Ruby, Smalltalk, Swift (modern), Kotlin, JavaScript (kısmen). Karşıt Yaklaşım: Prosedürel Programlama (C, COBOL, FORTRAN) — adım adım talimatlar; fonksiyonlar ve veri ayrı. OOSD bugün kurumsal yazılım, web, mobil, oyun, AI uygulamalarının baskın paradigmasıdır.",
          },
          {
            text: "Scrum çerçevesinin rolleri ve etkinlikleri için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Scrum'da yalnızca bir tek rol vardır." },
              { id: "B", text: "Roller: Ürün Sahibi (Product Owner — ne yapılacağı), Scrum Master (süreç koruyucu), Geliştirme Ekibi (nasıl yapılacağı). Etkinlikler: Sprint Planning (planlama), Daily Standup (günlük 15 dk), Sprint Review (demo), Sprint Retrospective (süreç iyileştirme). Çıktılar: Product Backlog, Sprint Backlog, Increment (çalışan ürün artışı)." },
              { id: "C", text: "Scrum'da etkinlikler ihtiyaridir." },
              { id: "D", text: "Sprint Master ve Product Master olmak üzere iki ana rol vardır." },
            ],
            correct: "B",
            explanation:
              "Scrum; Ken Schwaber ve Jeff Sutherland tarafından 1990'larda geliştirilmiş, bugün dünyada en yaygın kullanılan Agile çerçevesidir. Scrum Guide (2020) resmi referanstır. Scrum'ın 3 Rolü: (1) Ürün Sahibi (Product Owner - PO) — NE yapılacağından sorumludur; ürünün vizyonunu taşır, Product Backlog'u sahiplenir ve önceliklendirir, paydaşlarla iletişim kurar, kabul kriterleri tanımlar, (2) Scrum Master (SM) — SÜREÇTEN sorumludur; Scrum kurallarına uyumu sağlar, ekibin önündeki engelleri kaldırır, sürekli iyileştirmeyi kolaylaştırır, koç ve mentordur. Bir 'yönetici' değil 'hizmet eden lider' (servant leader), (3) Geliştirme Ekibi (Development Team) — NASIL yapılacağından sorumludur; tipik olarak 3-9 kişi, kendini organize eder (self-organizing), çapraz işlevsel (cross-functional — geliştirici, tasarımcı, tester hep birlikte). Hierarchy yok, tüm üyeler eşit. Scrum'ın 5 Etkinliği (Events): (1) Sprint — Tüm etkinlikleri kapsayan ana kutu; 1-4 hafta sabit süre (genellikle 2 hafta), (2) Sprint Planning — Sprint'in başında; ekip sprintte ne yapacağını planlar; süresi: 2 saat × sprint hafta sayısı (örn. 2 haftalık sprint için 4 saat), (3) Daily Scrum (Standup) — Her gün 15 dakika; ekip durumlarını paylaşır: dün ne yaptım, bugün ne yapacağım, engelim var mı?, (4) Sprint Review — Sprint sonunda; paydaşlara çalışan ürün demosu, geri bildirim alma; 1 saat × sprint hafta sayısı, (5) Sprint Retrospective — Sprint sonunda (Review'den sonra); ekibin süreçleri gözden geçirmesi: ne iyi gitti, ne iyileştirilebilir, hangi aksiyonları alacağız; 45 dakika × sprint hafta sayısı. Scrum'ın 3 Çıktısı (Artifacts): (1) Product Backlog — yapılacak tüm işlerin önceliklendirilmiş listesi; PO sahip, (2) Sprint Backlog — bu sprintte yapılacak işler; ekip sahip, (3) Increment — sprintte üretilen çalışan ürün artışı; 'Definition of Done'a uygun olmalı. Türkiye'de yaygın kullanılır; bankalar, e-ticaret, telekom, fintek sektörlerinde standart yaklaşım.",
          },
          {
            text: "Modern yazılım geliştirmede 'DevOps' yaklaşımı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Geliştirme ve operasyon ekiplerinin tamamen ayrılmasıdır." },
              { id: "B", text: "Geliştirme (Development) + Operasyon (Operations) ekiplerinin BİRLEŞTİRİLMESİ; sürekli entegrasyon (CI), sürekli teslimat (CD), otomatik test, altyapı kod olarak (IaC - Infrastructure as Code), bulut tabanlı yaklaşımlar; modern başarılı şirketler (Netflix, Amazon, Google) DevOps ile yılda binlerce deploy yapabilir." },
              { id: "C", text: "Yalnızca büyük şirketler için tasarlanmıştır." },
              { id: "D", text: "DevOps bir programlama dilidir." },
            ],
            correct: "B",
            explanation:
              "DevOps; 2009'da Patrick Debois tarafından tanıtılan ve modern yazılım geliştirme/operasyon dünyasını dönüştüren bir kültür ve uygulama bütünüdür. İsim: Development + Operations birleşimidir. Temel Felsefe: Geleneksel olarak yazılımcılar (Dev) kod yazar, operasyon ekibi (Ops) bunu canlıya alır ve işletir; bu iki grup arasında çatışma yaygındır ('benim makinede çalışıyor' sendromu). DevOps bu iki dünyayı birleştirir; ortak hedefler, ortak araçlar, paylaşılan sorumluluk. DevOps'un Temel Uygulamaları: (1) Sürekli Entegrasyon (CI - Continuous Integration) — geliştiricilerin kodları sık sık (günde defalarca) ortak repoya merge etmesi; her merge otomatik test edilir; entegrasyon sorunları erken yakalanır. Araçlar: Jenkins, GitLab CI, GitHub Actions, CircleCI, (2) Sürekli Teslimat (CD - Continuous Delivery/Deployment) — kodun her zaman üretime alınmaya hazır olması (CD); veya her geçen testin otomatik olarak üretime gönderilmesi (Continuous Deployment); Amazon her 11.7 saniyede bir deployment yapar, (3) Altyapı Kod Olarak (IaC - Infrastructure as Code) — sunucular, ağlar, veritabanları kod ile tanımlanır ve sürüm kontrolüne alınır. Araçlar: Terraform, Ansible, AWS CloudFormation, (4) Konteynerleştirme (Containerization) — uygulamalar konteynerlere paketlenir; her ortamda aynı çalışır. Docker en yaygın; Kubernetes orkestrasyonu, (5) Otomatik Test — Birim, entegrasyon, performans, güvenlik testleri tamamen otomatik; manuel test minimal, (6) Monitoring ve Observability — sistem davranışı sürekli izlenir; loglar, metrikler, izler (logs, metrics, traces). Araçlar: Prometheus, Grafana, ELK Stack, Datadog, New Relic, (7) Bulut (Cloud Native) — AWS, Azure, GCP üzerinde mikroservis mimarisi; ölçeklenebilir, esnek. DevOps'un Faydaları: (1) Hızlı Teslimat — Amazon, Google gibi şirketler günde binlerce deployment yapar, (2) Düşük Hata Oranı — otomatik testler ile, (3) Hızlı Kurtarma — sorun olursa hızlı geri alma, (4) Yüksek Memnuniyet — ekip mutluluğu, müşteri memnuniyeti. DevOps'un Genişletilmiş Versiyonları: DevSecOps (güvenlik dahil), GitOps (Git tabanlı operasyon), AIOps (AI destekli operasyon), MLOps (ML modelleri için). Modern başarılı yazılım şirketleri DevOps'u temel uygulama olarak benimser.",
          },
        ],
      },
      // ──────────── Ders 5: Test Süreçleri, Üretime Aktarım ve Uygulama Kontrolleri ────────────
      {
        id: "m1021-l5",
        title: "Test Süreçleri, Üretime Aktarım, Bakım ve Uygulama Kontrolleri",
        duration: "10 dk",
        summary: {
          title: "Test, Üretime Aktarım ve Uygulama Kontrolleri",
          intro:
            "Yazılım test süreçleri; yazılımın kalitesini ve doğruluğunu sağlayan kritik aşamadır. Test türleri: Birim, Entegrasyon, Sistem, Kullanıcı Kabul (UAT), Performans, Güvenlik, Regresyon. Üretime aktarım stratejileri farklılaşır: Direkt Kesim (Big Bang), Paralel Kesim, Aşamalı (Phased), Pilot. Sistem bakımı: Düzeltici, Uyarlayıcı, Önleyici, Mükemmelleştirici. Uygulama Kontrolleri ise işlem doğruluğunu garanti eden kontrollerdir: Giriş (Input), İşleme (Process), Çıktı (Output) kontrolleri olarak üç katmanda incelenir.",
          sections: [
            {
              heading: "Test Türleri ve Üretime Aktarım",
              icon: "shield",
              items: [
                {
                  strong: "Test Aşamaları (Test Levels):",
                  text: "Birim Testi (Unit Test) — tek modül; Entegrasyon Testi — modüller arası; Sistem Testi — tam sistem; Kullanıcı Kabul Testi (UAT) — son kullanıcı onayı; Test piramidi: çok birim test, daha az entegrasyon, az UI testi.",
                },
                {
                  strong: "Test Türleri:",
                  text: "Fonksiyonel Testler (gereksinimlere göre), Performans Testleri (yük, stres, dayanıklılık), Güvenlik Testleri (penetrasyon, zafiyet), Kullanılabilirlik (UX), Regresyon Testi (önceki özelliklerin bozulmaması), Smoke Test (hızlı sağlık kontrolü).",
                },
                {
                  strong: "Üretime Aktarım Stratejileri:",
                  text: "(1) Direkt Kesim (Big Bang/Direct Cutover) — eski sistem bir anda kapatılır, yenisi açılır; hızlı ama riskli; (2) Paralel Kesim — eski ve yeni sistem bir süre paralel çalışır; güvenli ama maliyetli; (3) Aşamalı (Phased) — modül modül geçiş; (4) Pilot — küçük bir grup/lokasyonda test, sonra yayma.",
                },
                {
                  strong: "Sistem Bakım Türleri:",
                  text: "(1) Düzeltici Bakım (Corrective) — hata düzeltme (%21), (2) Uyarlayıcı Bakım (Adaptive) — çevresel değişikliklere uyum, mevzuat (%25), (3) Önleyici Bakım (Preventive) — gelecek sorunları engelleme, (4) Mükemmelleştirici Bakım (Perfective) — performans iyileştirme, yeni özellikler (%50+).",
                },
                {
                  strong: "Kritik Başarı Faktörleri (Sistem Geliştirme):",
                  text: "Üst yönetim desteği, net gereksinimler, deneyimli ekip, etkin proje yönetimi, kullanıcı katılımı, uygun metodoloji, yeterli kaynak, gerçekçi takvim, açık iletişim, sürekli test.",
                },
              ],
            },
            {
              heading: "Uygulama Kontrolleri (Giriş, İşleme, Çıktı)",
              icon: "trend",
              items: [
                {
                  strong: "Giriş Kontrolleri (Input Controls):",
                  text: "Veri doğruluğunu, eksiksizliğini ve geçerliliğini sağlayan kontroller; verinin sisteme HATALI veya yetkisiz girilmesini önler; bilgi sisteminin temel veri kalitesi katmanıdır.",
                },
                {
                  strong: "Giriş Kontrolü Türleri:",
                  text: "Veri Doğrulama (Edit Checks) — format, alan kontrolü, mantık kontrolü; Existence Check — zorunlu alanlar dolu mu; Sequence Check — sıralı veri kontrolü; Reasonableness Check — mantıksal aralık (örn. yaş 0-150); Check Digit — sayısal doğruluk (TCKN, IBAN); Self-Checking Number — kontrol basamağı.",
                },
                {
                  strong: "İşleme Kontrolleri (Process Controls):",
                  text: "Veri işleme sırasında bütünlüğü ve doğruluğu garanti eder; Run-to-Run Totals — başlangıç ve bitiş tutarları kontrol, Reconciliation — mutabakat, Edit Reports — hata raporları, Batch Control Totals — toplu işlem kontrolleri, Audit Trails — işlem izleri, Suspense Files — şüpheli kayıtlar.",
                },
                {
                  strong: "Çıktı Kontrolleri (Output Controls):",
                  text: "Çıktıların doğruluğunu, dağıtımını, gizliliğini ve bütünlüğünü sağlar; Output Distribution Logs — kim hangi raporu aldı, Output Review — yetkili gözden geçirme, Error Logs — çıktıdaki hatalar, Forms Control — özel form numaraları, Negative Confirmation — sessizlik onay, Document Retention — saklama süreleri.",
                },
                {
                  strong: "Üç Katmanın Birleşimi:",
                  text: "Giriş + İşleme + Çıktı kontrolleri birlikte 'savunma derinliği' (defense in depth) sağlar; tek katmandaki hata diğer katmanlarda yakalanabilir; etkili kontrol mimarisi tüm aşamaları kapsar.",
                },
              ],
            },
          ],
          tip: "Test piramidi: çok birim test → az entegrasyon → daha az UI/UAT. Üretime Aktarım 4 strateji: Big Bang (riskli/hızlı), Paralel (güvenli/maliyetli), Aşamalı, Pilot. Bakım %50+ Mükemmelleştirici. Uygulama Kontrolleri 3 katman: GİRİŞ (validation, check digit) + İŞLEME (mutabakat, run-to-run) + ÇIKTI (distribution log, review). Savunma derinliği = 3 katmanın birlikte çalışması.",
        },
        questions: [
          {
            text: "Yazılım test sürecinde 'Kullanıcı Kabul Testi' (UAT - User Acceptance Test) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca geliştiricilerin yaptığı testtir." },
              { id: "B", text: "Yazılım geliştirme yaşam döngüsünün SON test aşamasıdır; SON KULLANICILAR (müşteri/iş birimi temsilcileri) tarafından, gerçek iş senaryolarında, sistemin iş ihtiyaçlarını karşılayıp karşılamadığını doğrulamak için yapılan testtir; başarılı UAT olmadan sistem üretime alınmamalıdır." },
              { id: "C", text: "Yalnızca performans ölçer." },
              { id: "D", text: "Yalnızca güvenlik testidir." },
            ],
            correct: "B",
            explanation:
              "Kullanıcı Kabul Testi (User Acceptance Test - UAT); yazılım geliştirme yaşam döngüsünün son ve en kritik test aşamasıdır. Tanım: SON KULLANICILAR (müşteri, iş birimi temsilcileri, son kullanıcı temsilcileri) tarafından, gerçek iş senaryolarında, sistemin iş ihtiyaçlarını karşılayıp karşılamadığını doğrulamak için yapılan testtir. Önemi: UAT olmadan sistem ÜRETİME ALINMAMALIDIR; çünkü teknik olarak çalışan bir sistem iş ihtiyaçlarını karşılamayabilir. Test Piramidi (Standart Test Aşamaları): (1) Birim Testi (Unit Testing) — Bireysel modüller/fonksiyonlar; geliştiriciler yapar; sayısı en çok (binler); araçlar: JUnit, NUnit, PyTest, (2) Entegrasyon Testi (Integration Testing) — Modüller arası etkileşim; arayüzler, API'ler; geliştiriciler veya QA, (3) Sistem Testi (System Testing) — Tüm sistem uçtan uca; QA ekibi; üretim benzeri ortam, (4) Kullanıcı Kabul Testi (UAT) — Son kullanıcılar; gerçek senaryolar; iş kabulü için. UAT Türleri: (a) Alpha Testing — şirket içi son kullanıcılar veya iç müşteri, (b) Beta Testing — sınırlı dış kullanıcı grubu, gerçek koşullar, (c) Operational Acceptance Testing (OAT) — operasyonel hazırlık; yedekleme, kurtarma, dokümantasyon, (d) Contract Acceptance Testing — sözleşme şartlarına uygunluk (özellikle dış tedarikçilerle yapılan projelerde), (e) Regulation Acceptance Testing — yasal düzenlemelere uygunluk (KVKK, GDPR, sektör mevzuatı). UAT'nin Çıktıları: (1) Test Senaryoları — gerçek iş süreçlerini yansıtan senaryolar; örn. 'Müşteri kredi başvurusu yapar, sistem onayını verir, hesabına para yatar', (2) Test Sonuçları — Pass/Fail durumları, hatalar, eksiklikler, (3) Kabul Kararı — yazılı 'Sign-off' onay belgesi (UAT Sign-off); sistemin üretime alınmasına yetki verir, (4) Eksiklik Listesi — varsa düzeltilecek konular ve önem seviyeleri. UAT'nin Riskleri: (a) Kullanıcı zamanı bulunmaması — iş birimleri günlük işlerini bırakıp test yapmak zorunda, (b) Test ortamı gerçeği yansıtmama — veri farklı, kullanıcı sayısı az, (c) Geç tespit edilen sorunlar — proje sonuna yakın yapılır, düzeltme maliyetli, (d) Kabul kriterlerinin belirsizliği. UAT başarısızlığı projenin gecikmesinin veya iptalinin temel nedenlerindendir.",
          },
          {
            text: "Sistem üretime aktarım stratejilerinden 'Paralel Kesim' (Parallel Cutover) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Eski sistem bir anda kapatılır." },
              { id: "B", text: "Eski sistem ve yeni sistem belirli bir süre PARALEL olarak çalıştırılır; aynı işlemler iki sistemde de yapılır, sonuçlar karşılaştırılır; yeni sistem güvenilir bulunduğunda eski sistem kapatılır; en GÜVENLİ ama en MALİYETLİ strateji; kritik sistemler (banka, hava trafik kontrol) için tercih edilir." },
              { id: "C", text: "Yalnızca küçük şirketler için kullanılır." },
              { id: "D", text: "Yalnızca yazılım değil, donanım için de kullanılır." },
            ],
            correct: "B",
            explanation:
              "Üretime Aktarım Stratejileri (Cutover Strategies); yeni bir bilgi sisteminin eskinin yerini alması için kullanılan dört temel yaklaşım vardır. Her birinin kendine özgü risk-maliyet dengesi vardır. (1) Direkt Kesim / Big Bang (Direct Cutover) — Eski sistem bir anda kapatılır, yenisi devreye alınır; geri dönüş genelde yoktur. Avantajları: Hızlı, basit, ucuz; iki sistemi sürdürme maliyeti yok. Dezavantajları: ÇOK RİSKLİ; yeni sistemde sorun çıkarsa iş durur, müşteri etkilenir, kurtarma zor. Uygulanırlık: küçük, kritik olmayan sistemler; yeni sistem küçük ölçekli. (2) Paralel Kesim (Parallel Cutover) — Eski ve yeni sistem belirli süre (haftalar-aylar) PARALEL çalışır; aynı işlemler iki sistemde de yapılır, sonuçlar karşılaştırılır; güvenlik onaylandığında eski sistem kapatılır. Avantajları: EN GÜVENLİ, geri dönüş kolay, sorunları erken yakalar, kullanıcılar adapte olur. Dezavantajları: EN MALİYETLİ; iki sistemi paralel sürdürme (sunucular, lisanslar, personel), çift veri girişi gerektirebilir, uzun süreçtir. Uygulanırlık: kritik sistemler (bankalar yeni core banking, hava trafik kontrol, hastane bilgi sistemleri, ödeme sistemleri). (3) Aşamalı Kesim / Phased Implementation — Sistem modül modül veya iş birimi iş birimi geçilir; örn. önce muhasebe modülü canlıya alınır, sonra satış, sonra üretim. Avantajları: orta seviye risk, sorunlar küçük kapsamda yaşanır, ekibin öğrenmesi için zaman. Dezavantajları: uzun süre, modüller arası entegrasyon karmaşıklığı (yeni/eski sistemler veri alışverişi yapmalı), tam sistem entegrasyonu gecikir. Uygulanırlık: büyük ERP geçişleri, çok modüllü sistemler. (4) Pilot Kesim (Pilot Cutover) — Sistem önce bir lokasyonda veya küçük kullanıcı grubunda test edilir; başarılı olursa yayma. Avantajları: gerçek koşullarda öğrenme, riski sınırlama. Dezavantajları: pilotta görülmeyen sorunlar büyük ölçekte çıkabilir. Uygulanırlık: çok şubeli organizasyonlar (banka şubeleri, perakende mağazaları), ülke çapında uygulamalar.",
          },
          {
            text: "Uygulama kontrolleri kategorisinde 'Check Digit' (Kontrol Basamağı) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca yıl sonu kontroldür." },
              { id: "B", text: "Sayısal verilerin doğruluğunu sağlamak için ana sayıya eklenen kontrol basamağıdır; matematiksel formülle hesaplanır; veri girişinde otomatik doğrulama sağlar; TC Kimlik Numarası son hanesi (Luhn algoritması), IBAN son 2 hanesi, kredi kartı son hanesi gibi örnekler vardır; giriş kontrolü türündedir." },
              { id: "C", text: "Yalnızca tarih kontrolüdür." },
              { id: "D", text: "Yalnızca büyük şirketler kullanır." },
            ],
            correct: "B",
            explanation:
              "Check Digit (Kontrol Basamağı / Self-Checking Number); sayısal verilerin doğruluğunu otomatik olarak kontrol etmek için ana sayıya eklenen matematiksel bir doğrulama basamağıdır. Mantık: ana sayıdaki rakamlar belirli bir formülle hesaplanır ve sonuç olarak ortaya çıkan tek bir rakam (kontrol basamağı) sayının sonuna eklenir. Veri girişinde sistem bu hesaplamayı yeniden yapar; sonuç tutmazsa giriş hatalıdır. Yaygın Örnekler ve Algoritmalar: (1) T.C. Kimlik Numarası (TCKN) — 11 haneli; 10. ve 11. haneler kontrol basamaklarıdır. Algoritma: 1, 3, 5, 7, 9. haneler toplanır ve 7 ile çarpılır; bundan 2, 4, 6, 8. hanelerin toplamı çıkarılır; sonucun mod 10'u 10. basamak; tüm ilk 10 basamağın toplamının mod 10'u 11. basamak. Yanlış TCKN sistem tarafından otomatik tespit edilir, (2) IBAN (International Bank Account Number) — Türkiye IBAN'ı 26 haneli; 'TR' ülke kodu + 2 haneli kontrol basamağı + 22 haneli banka/hesap. Algoritma: 'IBAN mod 97 = 1' eşitliği; Modulo-97 algoritması, (3) Kredi Kartı Numarası — 16 haneli; son basamak kontrol basamağı. Luhn Algoritması: sağdan sola tek basamaklar 2 ile çarpılır, çift basamaklar olduğu gibi alınır, toplam mod 10 = 0 olmalı, (4) ISBN (International Standard Book Number) — 13 haneli; son basamak kontrol basamağı, (5) Vergi Kimlik Numarası — 10 haneli, çeşitli kontrol algoritmaları, (6) IMEI (Cep Telefonu) — 15 haneli, Luhn algoritması. Avantajları: (1) Manuel hata önleme — daktilo hatası, sayı atlama hemen yakalanır, (2) Erken doğrulama — veri sisteme girmeden önce, (3) Düşük maliyet — algoritma çok basit, (4) Veri bütünlüğü — yanlış numara veritabanına girmez. Yetersiz Olduğu Durumlar: kasıtlı sahtekarlık (saldırgan yeni kontrol basamağını hesaplayabilir), bu nedenle güvenlik amaçlı değil yalnızca veri kalitesi için kullanılır. Uygulama Kontrolleri Çerçevesinde: GİRİŞ kontrolleri kategorisindedir; veri sisteme girerken doğruluğu kontrol edilir.",
          },
          {
            text: "Sistem bakım türleri için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca hata düzeltme yapılır." },
              { id: "B", text: "Dört bakım türü vardır: (1) Düzeltici (Corrective — hata düzeltme, %21), (2) Uyarlayıcı (Adaptive — çevresel değişikliklere uyum, yeni mevzuat, %25), (3) Önleyici (Preventive — gelecek sorunları engelleme, optimizasyon), (4) Mükemmelleştirici (Perfective — yeni özellikler, performans iyileştirme, %50+) — en büyük pay mükemmelleştiricidir." },
              { id: "C", text: "Yalnızca yıllık bakım yapılır." },
              { id: "D", text: "Sistem bakımı maliyetsizdir." },
            ],
            correct: "B",
            explanation:
              "Yazılım Bakımı (Software Maintenance); IEEE/ISO standartlarına göre 'yazılımın teslim edildikten sonra hataları düzeltmek, performansı veya diğer özellikleri iyileştirmek veya değiştirilmiş bir ortama uyarlamak için yapılan modifikasyon' olarak tanımlanır. Yazılım yaşam döngüsünün EN UZUN aşamasıdır — yazılımın toplam maliyetinin %60-80'ini oluşturur. Dört Bakım Türü (Lientz ve Swanson sınıflandırması, 1980): (1) Düzeltici Bakım (Corrective Maintenance) — Pay: ~%21. Tespit edilen HATALARI düzeltme; üretime alındıktan sonra ortaya çıkan bug'lar, hatalı hesaplamalar, çökme durumları. Örnek: kullanıcı şikayet bildirimi → log analizi → hata yeri tespit → düzeltme → patch dağıtımı. Reaktif bakımdır, (2) Uyarlayıcı Bakım (Adaptive Maintenance) — Pay: ~%25. Değişen ÇEVREYE uyum sağlama; donanım/işletim sistemi güncellemeleri, yeni regülasyonlar (KVKK uyumu, yeni vergi oranı), iş kuralları değişikliği, ekosistem değişikliği (API güncellemeleri). Örnek: yeni TÜFE oranına göre artış hesaplama mantığının güncellenmesi. Proaktif değil, dış koşullara reaksiyon, (3) Önleyici Bakım (Preventive Maintenance) — Pay: ~%4. GELECEK sorunları engelleme; kod refaktörü (refactoring), teknik borç (technical debt) azaltma, performans optimizasyonu, kod kalitesi iyileştirmesi, dokümantasyon güncelleme. Tamamen proaktif. Örnek: yavaş çalışan bir veri tabanı sorgusunun index eklenerek hızlandırılması, (4) Mükemmelleştirici Bakım (Perfective Maintenance) — Pay: ~%50+. YENİ ÖZELLİKLER ekleme, mevcut özellikleri iyileştirme, kullanılabilirlik artırma; gerçekte yeni geliştirme. Örnek: bir e-ticaret sitesine 'kişiselleştirilmiş öneri' özelliği eklenmesi. En büyük pay, çünkü iş ihtiyaçları sürekli evrilir. Bakım Maliyetini Etkileyen Faktörler: (1) Sistem yaşı — eski sistemler bakım maliyetlerine daha fazla harcanır, (2) Sistem boyutu — büyük sistemler daha karmaşık, (3) Karmaşıklık — yüksek karmaşıklık = yüksek bakım, (4) Dokümantasyon kalitesi — iyi doküman bakımı kolaylaştırır, (5) Geliştirici devir hızı — yeni gelenler eski kodu öğrenmek zorunda, (6) Programlama dili — eski diller (COBOL) için uzman azlığı maliyeti artırır.",
          },
          {
            text: "Uygulama kontrollerinin üç katmanı (Giriş, İşleme, Çıktı) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca girişte kontrol yeterlidir." },
              { id: "B", text: "Üç katman birlikte 'savunma derinliği' (defense in depth) sağlar; GİRİŞ Kontrolleri (validation, check digit, sequence) veri kalitesini sağlar, İŞLEME Kontrolleri (run-to-run totals, mutabakat, edit reports) işlem doğruluğunu garanti eder, ÇIKTI Kontrolleri (distribution logs, output review, error logs) sonuçların doğru kullanıcılara doğru bilgiyi iletmesini sağlar; tek katmandaki hata diğer katmanlarda yakalanabilir." },
              { id: "C", text: "Yalnızca çıktıda kontrol yeterlidir." },
              { id: "D", text: "Üç katman birbirinden bağımsız çalışır." },
            ],
            correct: "B",
            explanation:
              "Uygulama Kontrolleri (Application Controls); bilgi sistemlerinde işlem doğruluğunu, eksiksizliğini ve zamanlılığını garanti eden kontrollerdir. Üç katmanda incelenir ve birlikte 'savunma derinliği' (Defense in Depth) sağlarlar. (1) GİRİŞ KONTROLLERİ (Input Controls) — verinin sisteme HATALI veya yetkisiz şekilde girilmesini önler. Türleri: (a) Veri Doğrulama Kontrolleri (Edit Checks): Format Kontrolü — alanın doğru formatta olması (tarih, sayı, e-posta), Alan Kontrolü (Field Check) — sayısal alanlara harf girilemez, Aralık Kontrolü (Range Check) — değer belirli aralıkta (yaş 0-150), Mantık Kontrolü (Reasonableness) — mantıksal olarak makul (örn. doğum tarihi gelecek olamaz), (b) Existence/Completeness Check — Zorunlu alanlar dolu olmalı, (c) Sequence Check — Sıralı veri kontrolü (fatura numaralarında boşluk olmamalı), (d) Check Digit — TCKN, IBAN, kredi kartı sonuna eklenen kontrol basamağı, (e) Limit Test — maksimum/minimum sınırlar, (f) Sign Test — negatif/pozitif kontrol. (2) İŞLEME KONTROLLERİ (Processing Controls) — veri işleme sırasında bütünlüğü ve doğruluğu garanti eder. Türleri: (a) Run-to-Run Totals — başlangıç toplamları ve bitiş toplamları karşılaştırılır; örn. işlem öncesi 1.000 kayıt, işlem sonrası da 1.000 kayıt, (b) Reconciliation (Mutabakat) — iki sistem veya kaynak arasında eşleştirme, (c) Edit Reports — işlem hatalarını içeren raporlar; manuel inceleme için, (d) Batch Control Totals — toplu işlem kontrolleri; toplu olarak verilen hash/checksum, (e) Audit Trails — işlem izleri; kim, ne zaman, ne yaptı, (f) Suspense Files — şüpheli kayıtlar dosyası; sonradan incelenecek, (g) Exception Reports — istisna durumlar (örn. limit aşımı). (3) ÇIKTI KONTROLLERİ (Output Controls) — çıktıların doğruluğunu, dağıtımını, gizliliğini sağlar. Türleri: (a) Output Distribution Logs — kim hangi raporu aldı, ne zaman, (b) Output Review — yetkili kişinin gözden geçirmesi, (c) Error Logs — çıktıdaki hatalar, (d) Forms Control — özel form numaraları (çek defterleri), (e) Negative Confirmation — sessizlik onay (örn. müşteri 30 gün içinde itiraz etmezse onaylanmış sayılır), (f) Document Retention — saklama süreleri (yasal olarak ne kadar saklanmalı), (g) Output Encryption — hassas çıktıların şifrelenmesi. Savunma Derinliği: tek katmandaki hata, sonraki katmanda yakalanabilir; örn. giriş kontrolü atlanan bir hata, işleme aşamasındaki mutabakat ile fark edilebilir.",
          },
        ],
      },
    ],
  },
];