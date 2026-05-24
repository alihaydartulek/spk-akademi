/* ─────────────────────────────────────────────────────────────────────────────
 * Kurumsal Yönetim (1018)
 *
 * Kaynak: SPL 1018 Çalışma Notu, 31 Aralık 2025 (136 sayfa)
 * Sınavlar: Kurumsal Yönetim Derecelendirme Sınavı
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1010 (Ticaret Hukuku) ve 1017 (Kredi Derecelendirme) ile minimum
 * çakışma vardır; 1018 saf kurumsal yönetim ilkeleri (OECD/G20, SPK), Sarbanes-
 * Oxley, sürdürülebilirlik ve entegre raporlama, II-17.1 Tebliği ve KY
 * derecelendirme metodolojisi konusuna odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1018 } from "./mevzuat-1018";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011,
 *     ...mevzuat1012, ...mevzuat1013, ...mevzuat1014,
 *     ...mevzuat1015, ...mevzuat1016, ...mevzuat1017, ...mevzuat1018
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1018: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1018 KURUMSAL YÖNETİM
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1018",
    title: "Modül · Kurumsal Yönetim (1018)",
    lessons: [
      // ──────────── Ders 1: İşletme Yönetimi ve Yönetim Bilimi ────────────
      {
        id: "m1018-l1",
        title: "İşletme Yönetimi, Yönetim Fonksiyonları ve Yönetim Tarihi",
        duration: "10 dk",
        summary: {
          title: "İşletme Yönetimi ve Yönetim Bilimi",
          intro:
            "İşletme; mal ve hizmet üretmek için emek, sermaye, doğal kaynakları bir araya getirerek faaliyet gösteren ekonomik birimdir. İşletmelerin temel fonksiyonları (yönetim, üretim, pazarlama, finansman) ve destek fonksiyonları (insan kaynakları, muhasebe, Ar-Ge, halkla ilişkiler) vardır. Yönetim fonksiyonu beş temel işlevi içerir: planlama, organizasyon (örgütleme), koordinasyon, yürütme ve kontrol. Yönetim bilimi 19. yüzyıl sonundan itibaren bilimsel yönetim, klasik organizasyon, beşeri ilişkiler ve modern yaklaşımlarla evrilmiştir.",
          sections: [
            {
              heading: "İşletme ve Yönetim Fonksiyonları",
              icon: "shield",
              items: [
                {
                  strong: "Temel İşletme Fonksiyonları:",
                  text: "Yönetim (planlama-organize-yürüt-kontrol), Üretim (mal/hizmet yaratma), Pazarlama (tüketici ihtiyaçlarını karşılama), Finansman (sermaye temini ve yönetimi).",
                },
                {
                  strong: "Destek Fonksiyonlar:",
                  text: "İnsan Kaynakları (personel temini, eğitimi), Muhasebe (kayıt ve raporlama), Ar-Ge (yenilik ve geliştirme), Halkla İlişkiler (paydaş ilişkileri yönetimi).",
                },
                {
                  strong: "Yönetimin 5 Temel Fonksiyonu:",
                  text: "Planlama (geleceğe yönelik strateji), Organizasyon (yapı kurma), Koordinasyon (faaliyetleri uyumlu kılma), Yürütme (yönlendirme ve motivasyon), Kontrol (sonuçları değerlendirme).",
                },
                {
                  strong: "Yönetim Düzeyleri:",
                  text: "Üst Düzey Yönetim (CEO, üst düzey yöneticiler — strateji), Orta Düzey Yönetim (departman yöneticileri — taktik), Alt Düzey Yönetim (şef, ustabaşı — operasyonel).",
                },
                {
                  strong: "İşletmecilikte Temel İlkeler:",
                  text: "Verimlilik (output/input), etkinlik (hedeflere ulaşma), kârlılık (gelir > gider), büyüme, sürdürülebilirlik, sosyal sorumluluk, etik değerler.",
                },
              ],
            },
            {
              heading: "Yönetim Biliminin Tarihi Gelişimi",
              icon: "trend",
              items: [
                {
                  strong: "Bilimsel Yönetim (Frederick Taylor — 1900):",
                  text: "İşin en verimli yapılma yöntemini bilimsel olarak bulmak, zaman-hareket etütleri, verimliliğe dayalı ödüllendirme, görev uzmanlaşması; 'Bilimsel Yönetimin İlkeleri' (1911) eseri.",
                },
                {
                  strong: "Klasik Organizasyon Teorisi (Henri Fayol):",
                  text: "Yönetimin 14 ilkesi (iş bölümü, otorite-sorumluluk, disiplin, komuta birliği, hiyerarşi vb.); yönetim biliminin diğer kurucularından, organizasyon yapılarına odaklanır.",
                },
                {
                  strong: "Bürokrasi Yaklaşımı (Max Weber):",
                  text: "İdeal bürokrasinin özellikleri: hiyerarşik yapı, kurallara dayalı işleyiş, uzmanlaşma, yazılı dokümantasyon, kişisel olmayan ilişkiler; rasyonel-yasal otorite.",
                },
                {
                  strong: "Beşeri İlişkiler Yaklaşımı (Elton Mayo — Hawthorne):",
                  text: "1924-1932 Hawthorne araştırmaları; çalışan motivasyonunun fiziksel koşullardan çok sosyal ilişkiler ve psikolojik faktörlerden etkilendiğini gösterdi; insan ilişkilerinin önemi.",
                },
                {
                  strong: "Modern Yaklaşımlar:",
                  text: "Sistem yaklaşımı (organizasyon = açık sistem), durumsallık yaklaşımı (en iyi yöntem yok, duruma bağlı), Z teorisi (Ouchi — Japon yönetimi), öğrenen organizasyon (Senge), TQM (Toplam Kalite Yönetimi).",
                },
              ],
            },
          ],
          tip: "İşletmenin 4 temel fonksiyonu: Yönetim, Üretim, Pazarlama, Finansman. Yönetimin 5 fonksiyonu: Planlama-Organize-Koordinasyon-Yürütme-Kontrol. Bilimsel yönetim = Taylor, 14 ilke = Fayol, ideal bürokrasi = Weber, Hawthorne deneyleri = Mayo. Modern yaklaşımlarda 'tek doğru' yoktur, durumsallık esastır.",
        },
        questions: [
          {
            text: "Yönetim fonksiyonunun beş temel işlevi aşağıdakilerden hangisinde DOĞRU verilmiştir?",
            options: [
              { id: "A", text: "Üretim, Pazarlama, Finansman, Muhasebe, İK" },
              { id: "B", text: "Planlama, Organizasyon (örgütleme), Koordinasyon, Yürütme (yöneltme), Kontrol" },
              { id: "C", text: "Yalnızca planlama ve kontrol" },
              { id: "D", text: "Strateji, taktik, operasyon" },
            ],
            correct: "B",
            explanation:
              "Yönetim fonksiyonunun beş temel işlevi (POMC modeli olarak da bilinir): (1) Planlama — geleceğe yönelik strateji ve hedefler belirleme, (2) Organizasyon (örgütleme) — yapıyı, görevleri ve yetkileri tanımlama, (3) Koordinasyon — farklı birimlerin faaliyetlerini uyumlu hale getirme, (4) Yürütme (yöneltme/liderlik) — çalışanları motive etme ve yönlendirme, (5) Kontrol — sonuçları planlanan hedeflerle karşılaştırma ve gerekli düzeltmeleri yapma. Henri Fayol tarafından klasik yönetim teorisi içinde sistematize edilmiştir. Üretim, pazarlama, finansman ise işletmenin TEMEL fonksiyonlarıdır (yönetim fonksiyonu değil). Muhasebe ve İK ise destek fonksiyonlardır.",
          },
          {
            text: "Frederick W. Taylor'ın 'Bilimsel Yönetim' yaklaşımı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İnsan ilişkilerinin önemini vurgular." },
              { id: "B", text: "İşin en verimli yapılma yöntemini bilimsel olarak bulmaya odaklanır; zaman-hareket etütleri, verimliliğe dayalı ödüllendirme, görev uzmanlaşması temel araçlardır; 'Bilimsel Yönetimin İlkeleri' (1911) eseri ile sistematize edilmiştir." },
              { id: "C", text: "İdeal bürokrasinin özelliklerini tanımlar." },
              { id: "D", text: "Toplam kalite yönetimini geliştirmiştir." },
            ],
            correct: "B",
            explanation:
              "Frederick Winslow Taylor (1856-1915); 'Bilimsel Yönetimin Babası' olarak bilinir. 1911 yılında yayımlanan 'Bilimsel Yönetimin İlkeleri' (The Principles of Scientific Management) eserinde fikirlerini sistematize etmiştir. Temel yaklaşımı: işin en verimli yapılma yöntemini bilimsel olarak bulmak için zaman ve hareket etütleri (time and motion studies) yapmak; her görev için 'one best way' (tek doğru yöntem) tespit etmek; çalışanları bilimsel olarak seçmek ve eğitmek; görevleri uzmanlaştırmak; verimliliğe dayalı parça başı ücret sistemi uygulamak. Taylor'ın yaklaşımı verimliliği önemli ölçüde artırdı ancak 'insan-ı makine' anlayışıyla eleştirildi; bu eleştiri sonradan Beşeri İlişkiler Yaklaşımı'nın (Hawthorne deneyleri) doğmasına neden oldu. Henri Fayol klasik organizasyon ilkeleri, Max Weber ideal bürokrasi, Edwards Deming TKY ile bilinir.",
          },
          {
            text: "Max Weber'in 'İdeal Bürokrasi' yaklaşımının temel özellikleri arasında aşağıdakilerden hangisi YER ALMAZ?",
            options: [
              { id: "A", text: "Hiyerarşik yapı ve net otorite kademesi" },
              { id: "B", text: "Yazılı kurallara dayalı işleyiş ve dokümantasyon" },
              { id: "C", text: "Uzmanlaşma ve liyakate dayalı atama" },
              { id: "D", text: "Kişisel ilişkiler ve duygusal kararlar" },
            ],
            correct: "D",
            explanation:
              "Max Weber'in (1864-1920) 'İdeal Bürokrasi' (Ideal Bureaucracy) yaklaşımının temel özellikleri 'kişisel olmayan' (impersonal) ilişkilere dayanır; D seçeneği bu yaklaşımın TERS yönüdür. İdeal Bürokrasinin Özellikleri: (1) Hiyerarşik Yapı — net otorite kademesi, üst-ast ilişkisi, (2) Yazılı Kurallar — tüm prosedürler ve kararlar yazılı, dokümante, (3) Uzmanlaşma — her pozisyon belirli görev ve sorumluluklarla tanımlı, (4) Liyakate Dayalı Atama — yeterlilik ve sertifikalar üzerinden, kayırma yok, (5) Kişisel Olmayan İlişkiler — kişisel duygular yerine kurallara göre kararlar, (6) Yazılı Dokümantasyon — tüm faaliyetler kayıt altında, (7) Rasyonel-Yasal Otorite — geleneksel veya karizmatik değil, kanunlara dayalı. Weber bu modeli rasyonelliğin en yüksek formu olarak değerlendirdi; ancak bürokrasinin günümüzdeki olumsuz çağrışımları (yavaşlık, esneksizlik) ile karıştırılmamalı — Weber'in 'ideal' tanımı olumlu bir model olarak öneriyordu.",
          },
          {
            text: "Hawthorne deneyleri ve Beşeri İlişkiler Yaklaşımı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Sadece fiziksel koşulların verimlilik üzerinde etkili olduğunu gösterdi." },
              { id: "B", text: "Elton Mayo öncülüğünde 1924-1932'de yapılan deneyler; çalışan motivasyonunun fiziksel koşullardan çok sosyal ilişkiler ve psikolojik faktörlerden etkilendiğini gösterdi; insan ilişkilerinin önemini ortaya koydu, modern İK yönetiminin temellerini attı." },
              { id: "C", text: "Yalnızca üretim verimliliğini ölçtü." },
              { id: "D", text: "Bilimsel Yönetim teorisini güçlendirdi." },
            ],
            correct: "B",
            explanation:
              "Hawthorne deneyleri; 1924-1932 yılları arasında ABD'de Western Electric Company'nin Hawthorne fabrikasında Harvard profesörü Elton Mayo öncülüğünde yapılmıştır. Deneylerin temel bulgusu: çalışan verimliliği fiziksel koşullardan (aydınlatma, sıcaklık, iş süresi) çok sosyal ve psikolojik faktörlerden (yöneticinin ilgisi, grup dayanışması, çalışanın değer görme hissi) etkilenmektedir. 'Hawthorne etkisi' kavramı buradan doğmuştur — gözlem altında olduklarını bilen çalışanların performansının değişmesi. Bu bulgular 'Beşeri İlişkiler Yaklaşımı'nın (Human Relations Approach) doğmasına yol açtı ve modern insan kaynakları yönetiminin temellerini attı. Taylor'ın 'insan-ı makine' yaklaşımına bir tepki olarak ortaya çıkmıştır. Daha sonra Maslow'un ihtiyaçlar hiyerarşisi, Herzberg'in iki faktör teorisi, McGregor'un X-Y teorisi gibi motivasyon teorileri bu yaklaşımı geliştirmiştir.",
          },
          {
            text: "Modern yönetim yaklaşımlarından 'durumsallık yaklaşımı' (Contingency Approach) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm organizasyonlar için tek bir 'en iyi yöntem' vardır." },
              { id: "B", text: "Her durumda geçerli evrensel bir yönetim yöntemi yoktur; en iyi yönetim yöntemi spesifik duruma (organizasyon büyüklüğü, sektör, çevre, teknoloji) bağlı olarak değişir." },
              { id: "C", text: "Yalnızca büyük şirketler için geçerlidir." },
              { id: "D", text: "Yalnızca Japon işletmeleri için tasarlanmıştır." },
            ],
            correct: "B",
            explanation:
              "Durumsallık Yaklaşımı (Contingency Approach); 1960'larda Joan Woodward, Lawrence ve Lorsch gibi araştırmacılar tarafından geliştirilen modern yönetim yaklaşımıdır. Temel önerisi: 'Klasik yönetim teorisinin' aksine, her durumda geçerli evrensel 'en iyi yöntem' YOKTUR. Yönetim ve organizasyon yapısı şu duruma bağlı değişkenlere göre tasarlanmalıdır: (1) Organizasyon büyüklüğü — küçük ve büyük şirketlerde farklı yapılar, (2) Sektör/Endüstri — tekstil ve teknoloji şirketleri farklı, (3) Çevresel İstikrar — istikrarlı ortamda mekanik yapı, dinamik ortamda organik yapı, (4) Teknoloji — birim üretim, kitle üretim, süreç üretim farklı yapı gerektirir, (5) Strateji ve hedefler. Bu yaklaşım Henri Fayol'un 14 evrensel ilke önerisini eleştirmiş ve esnek yönetim anlayışını getirmiştir. Modern yönetim teorisinin temel taşlarından biridir; özellikle organizasyon tasarımında yaygın kullanılır.",
          },
        ],
      },
      // ──────────── Ders 2: Kurumsal Yönetim Kavramı ve Yaklaşımları ────────────
      {
        id: "m1018-l2",
        title: "Kurumsal Yönetim Kavramı, Yaklaşımları ve Dünyadaki Gelişmeler",
        duration: "10 dk",
        summary: {
          title: "Kurumsal Yönetim Kavramı ve Dünyada Gelişmeler",
          intro:
            "Kurumsal Yönetim (Corporate Governance); şirketlerin yönetilmesi ve denetlenmesi için oluşturulan kurallar, ilişkiler ve süreçlerin bütünüdür. Şirketin pay sahipleri, yönetim kurulu, yönetim ve diğer paydaşları arasındaki ilişkileri düzenler. ABD'deki Enron (2001) ve Worldcom (2002) skandalları sonrası Sarbanes-Oxley Kanunu (2002) ile küresel reformlar başlamıştır. G20/OECD Kurumsal Yönetim İlkeleri uluslararası referanstır. Sürdürülebilirlik ve entegre raporlama 21. yüzyılın yeni gelişmeleridir.",
          sections: [
            {
              heading: "Kurumsal Yönetim Temel Kavramları",
              icon: "shield",
              items: [
                {
                  strong: "Kurumsal Yönetim Tanımı:",
                  text: "Şirketin yönetilmesi ve kontrol edilmesi sistemi; pay sahipleri (principal) ile yöneticiler (agent) arasındaki vekalet ilişkisinin düzenlenmesi; OECD'nin 1999 ilkeleriyle kurumsallaşmıştır.",
                },
                {
                  strong: "Vekalet Sorunu (Agency Problem):",
                  text: "Pay sahipleri (asiller) ile yöneticiler (vekiller) arasında çıkar çatışması olabilir; yöneticiler kendi çıkarlarını şirket çıkarlarının önüne koyabilir; kurumsal yönetim bu sorunu yönetir.",
                },
                {
                  strong: "Kurumsal Yönetimin Dört İlkesi (SPK):",
                  text: "(1) Adillik (Eşit Davranış) — pay sahiplerine adil davranış, (2) Şeffaflık — bilgi açıklama, (3) Hesap Verebilirlik (Accountability) — yönetimin hesap verme yükümlülüğü, (4) Sorumluluk — yasal ve etik kurallara uygunluk.",
                },
                {
                  strong: "Tek Kademeli vs Çift Kademeli Kurullar:",
                  text: "Tek kademeli (Anglo-Amerikan) — yönetim kurulu hem yönetim hem denetim; Çift kademeli (Almanya/Hollanda) — Yönetim Kurulu (Vorstand) yürütme, Denetim Kurulu (Aufsichtsrat) gözetim ayrı.",
                },
                {
                  strong: "İyi Kurumsal Yönetimin Faydaları:",
                  text: "Sermaye maliyetinin düşmesi, yatırımcı güveninin artması, hisse senedi değerinin yükselmesi, finansman erişiminin kolaylaşması, sürdürülebilir büyüme, paydaş güveni.",
                },
              ],
            },
            {
              heading: "Dünyadaki Gelişmeler ve Sürdürülebilirlik",
              icon: "trend",
              items: [
                {
                  strong: "Sarbanes-Oxley Kanunu (2002):",
                  text: "Enron, Worldcom skandalları sonrası ABD'de çıkarılan yasa; CEO/CFO'nun finansal tabloları kişisel onayı, iç kontrol denetimi (Section 404), denetim komitesi bağımsızlığı, bağımsız denetçilerin sınırlı hizmetleri.",
                },
                {
                  strong: "G20/OECD Kurumsal Yönetim İlkeleri:",
                  text: "1999'da yayımlanan, 2004 ve 2015'te revize edilen küresel referans; 6 ana başlık: pay sahipleri, eşit davranış, paydaşların rolü, kamuyu aydınlatma ve şeffaflık, yönetim kurulu sorumlulukları, etkin kurumsal yönetim.",
                },
                {
                  strong: "Avrupa Birliği'nde Kurumsal Yönetim:",
                  text: "AB Komisyonu Action Plan'lar, 2014 Kurumsal Yönetim Bildirimi, 'Comply or Explain' yaklaşımı (uy ya da açıkla), pay sahipleri haklarının güçlendirilmesi.",
                },
                {
                  strong: "Sürdürülebilirlik ve ESG:",
                  text: "ESG (Environmental, Social, Governance) — Çevresel, Sosyal, Yönetişimsel kriterler; iklim değişikliği, çalışan hakları, çeşitlilik, etik yönetim; modern kurumsal yönetimin merkezi unsuru.",
                },
                {
                  strong: "Entegre Raporlama (IR — Integrated Reporting):",
                  text: "Geleneksel finansal rapor + sürdürülebilirlik raporunun birleştirilmesi; altı sermaye türü (finansal, üretilmiş, entelektüel, beşeri, sosyal-ilişkisel, doğal) bütüncül analiz edilir; IIRC çerçevesi referans alınır.",
                },
              ],
            },
          ],
          tip: "Kurumsal yönetimin 4 ilkesi: Adillik-Şeffaflık-Hesap Verebilirlik-Sorumluluk (ASHS). Vekalet sorunu = pay sahibi-yönetici çıkar çatışması. Sarbanes-Oxley 2002 ABD'de Enron sonrası. G20/OECD ilkeleri küresel referans. ESG modern KY'nin merkezi unsuru. Entegre Raporlama 6 sermayeyi bütüncül raporlar.",
        },
        questions: [
          {
            text: "Kurumsal yönetimin SPK tarafından benimsenen dört temel ilkesi aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Verimlilik, kârlılık, büyüme, sürdürülebilirlik" },
              { id: "B", text: "(1) Adillik (Eşit Davranış) — pay sahiplerine adil davranış, (2) Şeffaflık — bilgi açıklama, (3) Hesap Verebilirlik (Accountability) — yönetimin hesap verme yükümlülüğü, (4) Sorumluluk — yasal ve etik kurallara uygunluk." },
              { id: "C", text: "Planlama, organizasyon, yürütme, kontrol" },
              { id: "D", text: "Pay sahipleri, yöneticiler, çalışanlar, müşteriler" },
            ],
            correct: "B",
            explanation:
              "SPK tarafından benimsenen ve uluslararası referans olan kurumsal yönetimin dört temel ilkesi (ASHS): (1) Adillik (Fairness/Equality of Treatment) — şirket yönetimi tüm pay sahiplerine, hatta azınlık ve yabancı pay sahiplerine de eşit davranmalı; pay sahibi haklarının korunması, oy hakkı kullanımı, kâr payı dağıtımı eşit olmalıdır. (2) Şeffaflık (Transparency) — şirket finansal durumu, performansı, sahiplik yapısı ve kurumsal yönetim hakkında bilgileri zamanında, doğru ve eksiksiz olarak kamuya açıklamalıdır. (3) Hesap Verebilirlik (Accountability) — yönetim kurulu üyeleri ve yöneticiler kararlarından ve eylemlerinden ötürü pay sahiplerine ve şirkete hesap vermelidir. (4) Sorumluluk (Responsibility) — şirket yasalara, düzenlemelere ve etik kurallara uygun davranmalı; topluma ve çevreye karşı sorumluluklarını yerine getirmelidir. Bu dört ilke OECD ve G20 tarafından da benimsenmiştir.",
          },
          {
            text: "ABD'de 2002 yılında çıkarılan ve kurumsal yönetim alanında küresel reformları tetikleyen yasa aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Glass-Steagall Yasası" },
              { id: "B", text: "Sarbanes-Oxley Kanunu (SOX) — Enron (2001) ve Worldcom (2002) skandalları sonrası çıkarılan; CEO/CFO'nun finansal tabloları kişisel onayı, iç kontrol denetimi (Section 404), denetim komitesi bağımsızlığı, bağımsız denetçilerin sınırlı hizmetleri gibi reformları getirmiştir." },
              { id: "C", text: "Dodd-Frank Yasası" },
              { id: "D", text: "Volcker Kuralı" },
            ],
            correct: "B",
            explanation:
              "Sarbanes-Oxley Kanunu (kısaca SOX), 30 Temmuz 2002'de ABD Kongresi'nde kabul edilen ve kurumsal yönetim alanında küresel reformları tetikleyen yasadır. Enron (Aralık 2001 — gizli SPE'lerle borçları gizleme), Worldcom (Haziran 2002 — gider aktifleştirme ile kâr abartma), Tyco ve diğer büyük muhasebe skandalları sonrası çıkarılmıştır. Yasanın temel hükümleri: (1) Section 302 — CEO ve CFO finansal tabloları kişisel olarak onaylar, yanlış beyan halinde cezai sorumluluk, (2) Section 404 — şirketler iç kontrol sistemlerini değerlendirir ve bağımsız denetçi onayı alır (en tartışmalı bölüm, yüksek maliyet getirdi), (3) Section 802 — belge tahribatına ağır cezalar, (4) PCAOB (Public Company Accounting Oversight Board) kurulması — bağımsız denetçilerin denetimi, (5) Denetim Komitesi Bağımsızlığı — finansal uzman üye, bağımsızlık şartı, (6) Auditor independence — denetçinin danışmanlık hizmetleri sınırlandırıldı. Türkiye'deki SPK düzenlemeleri ve TTK 6102 reformları SOX'un etkisini taşır.",
          },
          {
            text: "G20/OECD Kurumsal Yönetim İlkeleri için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca AB ülkeleri için geçerlidir." },
              { id: "B", text: "1999'da yayımlanan, 2004 ve 2015'te revize edilen küresel referans çerçevesidir; 6 ana başlık: pay sahipleri, eşit davranış, paydaşların rolü, kamuyu aydınlatma ve şeffaflık, yönetim kurulu sorumlulukları, etkin kurumsal yönetim çerçevesi." },
              { id: "C", text: "Yalnızca büyük şirketler için tasarlanmıştır." },
              { id: "D", text: "Yasal yaptırımı olan zorunlu kurallar bütünüdür." },
            ],
            correct: "B",
            explanation:
              "G20/OECD Kurumsal Yönetim İlkeleri; 1999'da OECD tarafından yayımlanan ve 2004, 2015'te revize edilen küresel kurumsal yönetim referans çerçevesidir. 2015 revizyonu ile G20 ile ortak benimsenmiştir. Altı ana başlık: (1) Etkin Kurumsal Yönetim Çerçevesi — yasal, düzenleyici ve kurumsal altyapı, (2) Pay Sahipleri ve Temel Sahiplik İşlevleri — temel hakların korunması, oy hakkı, kâr payı, (3) Pay Sahiplerinin Eşit Muamelesi ve Temel Sahiplik İşlevleri — azınlık ve yabancı pay sahipleri dahil, (4) Kurumsal Yönetimde Paydaşların Rolü — çalışanlar, alacaklılar, tedarikçiler, müşteriler, (5) Kamuyu Aydınlatma ve Şeffaflık — finansal/operasyonel bilgilerin zamanında ve eksiksiz açıklanması, (6) Yönetim Kurulunun Sorumlulukları — stratejik rehberlik, izleme, hesap verme. Bu ilkeler yasal yaptırım içermez ('soft law'); ancak ülkeler kendi mevzuatlarını bu çerçeveye uyarlar. Türkiye'nin SPK Kurumsal Yönetim İlkeleri ve II-17.1 Tebliği bu ilkeleri esas almıştır.",
          },
          {
            text: "Tek kademeli (Anglo-Amerikan) ve çift kademeli (Almanya/Hollanda) kurul yapıları arasındaki temel fark nedir?",
            options: [
              { id: "A", text: "İki sistem aynıdır." },
              { id: "B", text: "Tek kademeli: yönetim kurulu hem yönetim hem denetim işlevini yürütür (icracı + bağımsız üyeler bir arada). Çift kademeli: Yönetim Kurulu (Vorstand) yürütme görevini, ayrı bir Denetim Kurulu (Aufsichtsrat) gözetim/denetim görevini ayrı yürütür; iki kurul üst üste bulunmaz, üyeler farklıdır." },
              { id: "C", text: "Tek kademeli yalnızca büyük, çift kademeli yalnızca küçük şirketler için." },
              { id: "D", text: "Tek kademeli üye sayısı sabittir." },
            ],
            correct: "B",
            explanation:
              "Dünyada iki temel kurul yapısı vardır: (1) Tek Kademeli (One-Tier / Unitary Board) — Anglo-Amerikan modeli; tek bir yönetim kurulu hem yürütme (executive) hem de denetim (oversight) işlevini birlikte yürütür. Kurul içinde icracı üyeler (CEO, üst yönetim) ve icracı olmayan üyeler (independent directors, non-executive directors) bir arada bulunur. ABD, İngiltere, Türkiye bu modeli kullanır. (2) Çift Kademeli (Two-Tier / Dual Board) — Kıta Avrupası modeli, özellikle Almanya, Hollanda, Avusturya. İki ayrı kurul: Yönetim Kurulu (Almanca: Vorstand / İngilizce: Management Board) — günlük yönetim ve operasyonlar; Denetim Kurulu (Almanca: Aufsichtsrat / İngilizce: Supervisory Board) — yönetimi gözetler, atar/azleder, stratejiyi onaylar. İki kurul üst üste bulunmaz, üyeler tamamen farklıdır. Almanya'da denetim kurulunun yarısı çalışan temsilcilerinden (Mitbestimmung — ortak yönetim) oluşur. Türkiye TTK 6102 ile tek kademeli sistemi benimsemiştir.",
          },
          {
            text: "Entegre Raporlama (IR — Integrated Reporting) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca finansal verileri içerir." },
              { id: "B", text: "Geleneksel finansal raporlama ile sürdürülebilirlik raporlamasının birleştirildiği bütüncül raporlama yaklaşımıdır; altı sermaye türü (finansal, üretilmiş, entelektüel, beşeri, sosyal-ilişkisel, doğal) bütüncül analiz edilir; IIRC (International Integrated Reporting Council) çerçevesi referans alınır." },
              { id: "C", text: "Yalnızca büyük halka açık şirketler için zorunludur." },
              { id: "D", text: "Sadece çevresel verileri raporlar." },
            ],
            correct: "B",
            explanation:
              "Entegre Raporlama (Integrated Reporting — <IR>); geleneksel finansal rapor ile sürdürülebilirlik raporunu birleştiren modern bir raporlama yaklaşımıdır. IIRC (International Integrated Reporting Council, 2010) tarafından geliştirilen <IR> Çerçevesi bu raporlamanın temelini oluşturur. Temel unsuru 'altı sermaye' (Six Capitals) modelidir: (1) Finansal Sermaye — para, fonlar, (2) Üretilmiş Sermaye — fabrikalar, ekipman, altyapı, (3) Entelektüel Sermaye — patentler, lisanslar, kurumsal bilgi, (4) Beşeri Sermaye — çalışanların yetkinliği, motivasyonu, (5) Sosyal ve İlişkisel Sermaye — paydaş ilişkileri, marka, itibar, (6) Doğal Sermaye — yenilenebilir/yenilenemez doğal kaynaklar. Entegre rapor; bu altı sermaye arasındaki etkileşimi, değer yaratma sürecini, kısa-orta-uzun vadeli stratejiyi bütüncül olarak gösterir. Geleneksel rapor 'şirket ne yaptı' derken, entegre rapor 'şirket nasıl değer yaratıyor ve gelecekte yaratacak' sorusunu yanıtlar. Türkiye'de bazı büyük şirketler (Garanti BBVA, Yapı Kredi, Doğan Holding) entegre raporlamayı benimsemiştir.",
          },
        ],
      },
      // ──────────── Ders 3: TTK Kurumsal Yönetim ve II-17.1 Tebliği ────────────
      {
        id: "m1018-l3",
        title: "TTK Kurumsal Yönetim Hükümleri ve II-17.1 Tebliği",
        duration: "10 dk",
        summary: {
          title: "TTK ve II-17.1 Tebliği",
          intro:
            "6102 sayılı yeni TTK (2012) kurumsal yönetim ilkelerini Türk şirketler hukukuna entegre etmiştir; pay sahipleri haklarını güçlendirmiş, yönetim kurulu sorumluluklarını netleştirmiş, kamuyu aydınlatma yükümlülüklerini artırmıştır. SPK'nın II-17.1 sayılı Kurumsal Yönetim Tebliği ise halka açık şirketler için spesifik kurumsal yönetim ilkelerini düzenler. İlkeler dört bölümde gruplanır: (i) Pay Sahipleri, (ii) Kamuyu Aydınlatma ve Şeffaflık, (iii) Menfaat Sahipleri, (iv) Yönetim Kurulu. 'Comply or Explain' (Uy ya da Açıkla) yaklaşımı esastır.",
          sections: [
            {
              heading: "TTK 6102 Kurumsal Yönetim Hükümleri",
              icon: "shield",
              items: [
                {
                  strong: "Pay Sahipleri Hakları (TTK):",
                  text: "Bilgi alma ve inceleme hakkı (md. 437), özel denetim isteme hakkı (md. 438), genel kurula katılma ve oy hakkı, kâr payı hakkı, rüçhan hakkı; eşit işlem ilkesi (md. 357).",
                },
                {
                  strong: "Yönetim Kurulu Sorumluluğu:",
                  text: "Devredilemez ve vazgeçilemez görevler (md. 375), bağımsız üye gerekliliği, sorumluluk davası (md. 553), bağlılık ve özen yükümlülükleri, müzakereden çekilme yasağı (md. 393).",
                },
                {
                  strong: "Kamuyu Aydınlatma:",
                  text: "Yıllık faaliyet raporu (md. 514), internet sitesi zorunluluğu (md. 1524) — halka açık ve sermayesi belirli tutarın üzerindeki şirketler için, finansal tabloların yayımı.",
                },
                {
                  strong: "Şirketler Topluluğu (md. 195-209):",
                  text: "Hâkim şirket-bağlı şirket ilişkileri, hâkim şirketin sorumluluğu, bağlı şirket pay sahipleri ve alacaklılarının korunması; ilişkili taraf işlemleri için bağımsız üye onayı.",
                },
                {
                  strong: "İç Yönerge ve Yönetim:",
                  text: "TTK m. 367 — yönetim devredilebilir; yönetim kurulu kendi içinde 'iç yönerge' ile görev dağılımı yapabilir; CEO/genel müdür profesyonel yönetici olarak atanabilir.",
                },
              ],
            },
            {
              heading: "II-17.1 Kurumsal Yönetim Tebliği",
              icon: "trend",
              items: [
                {
                  strong: "Tebliğin Kapsamı:",
                  text: "BIST'te işlem gören şirketler için kurumsal yönetim ilkelerinin uygulanmasını düzenler; uygulamada ilkeler 'zorunlu' (uygulanması mecburi) ve 'gönüllü' (Comply or Explain) olarak ikiye ayrılır.",
                },
                {
                  strong: "Comply or Explain (Uy ya da Açıkla):",
                  text: "Şirket gönüllü ilkelere uymak zorunda değildir, ancak uymadığı ilkeleri ve nedenlerini Yıllık Faaliyet Raporunda ve Kurumsal Yönetim İlkelerine Uyum Raporu'nda kamuya açıklamak zorundadır.",
                },
                {
                  strong: "Şirket Sınıflandırması:",
                  text: "Halka açık şirketler büyüklüklerine göre A, B, C grubu olarak sınıflandırılır; A grubunda en çok zorunlu ilke uygulanır, C grubunda en az; sınıflandırma ödenmiş sermaye ve fiili dolaşımdaki paylara göre yapılır.",
                },
                {
                  strong: "Bağımsız Yönetim Kurulu Üyesi:",
                  text: "Halka açık şirketlerde YK'da bağımsız üye zorunluluğu vardır; üye sayısının 1/3'ünden az olamaz; bağımsız üye kriterleri (önceki ilişki yokluğu, hisse sınırı vb.) tebliğ ile belirlenmiştir.",
                },
                {
                  strong: "Komiteler:",
                  text: "Yönetim Kurulu bünyesinde Denetim Komitesi (zorunlu, üyelerin tamamı bağımsız), Kurumsal Yönetim Komitesi, Riskin Erken Saptanması Komitesi gibi komiteler kurulur.",
                },
              ],
            },
          ],
          tip: "TTK 6102 (2012) kurumsal yönetimi entegre etti. SPK II-17.1 = halka açık şirketler için KY tebliği. 'Comply or Explain' = gönüllü ilkelere uy ya da uymama nedenini açıkla. Şirketler 3 gruba ayrılır: A-B-C. Bağımsız üye min 1/3. Denetim Komitesi tüm üyeleri bağımsız olmalı (zorunlu komite).",
        },
        questions: [
          {
            text: "SPK II-17.1 sayılı Kurumsal Yönetim Tebliği'nde uygulanan 'Comply or Explain' (Uy ya da Açıkla) yaklaşımı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm ilkelere uyum zorunludur, açıklama yapılamaz." },
              { id: "B", text: "Şirket gönüllü ilkelere uymak zorunda değildir, ancak uymadığı ilkeleri ve nedenlerini Yıllık Faaliyet Raporunda ve Kurumsal Yönetim İlkelerine Uyum Raporu'nda kamuya açıklamak zorundadır; piyasa disiplini ile ilkelere uyum teşvik edilir." },
              { id: "C", text: "Şirket istediği ilkeyi uygular, açıklama yapmaz." },
              { id: "D", text: "Yalnızca devlet kurumları için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "'Comply or Explain' (Uy ya da Açıkla) yaklaşımı; İngiliz Cadbury Komitesi (1992) tarafından geliştirilen ve kurumsal yönetim ilkelerinin esnek uygulamasını sağlayan yöntemdir. Türkiye'de SPK II-17.1 Tebliği bu yaklaşımı benimser. Mantık: bazı kurumsal yönetim ilkeleri 'zorunlu' (uygulanması mecburi) olarak belirlenir; diğerleri ise 'gönüllü' (Comply or Explain kapsamı) ilkelerdir. Şirket gönüllü ilkelere uymak zorunda değildir, ANCAK uymadığı her ilkeyi ve uymama nedenini Yıllık Faaliyet Raporu içinde yer alan 'Kurumsal Yönetim İlkelerine Uyum Raporu'nda açıklamak zorundadır. Bu sayede yatırımcılar, derecelendirme kuruluşları ve diğer paydaşlar şirketin uyum profilini değerlendirebilir; piyasa disiplini ile şirketler ilkelere uyma yönünde baskı altındadır. Bu yaklaşım katı zorunluluğun aksine esneklik tanır; özellikle farklı sektör/büyüklükteki şirketlerin kendi durumlarına uygun şekilde uyum sağlamasına izin verir.",
          },
          {
            text: "Halka açık şirketlerde yönetim kurulunda bağımsız üye sayısı için zorunlu minimum oran nedir?",
            options: [
              { id: "A", text: "Üye sayısının %10'u" },
              { id: "B", text: "Yönetim kurulu üye sayısının 1/3'ünden az olamaz; örneğin 6 üyeli kurulda en az 2 bağımsız üye olmalıdır; bağımsızlık kriterleri (şirket veya iştirakleriyle önceki ilişki yokluğu, hisse sahipliği sınırları, danışmanlık ilişkileri yok vb.) Tebliğ ile belirlenmiştir." },
              { id: "C", text: "Üye sayısının %50'si" },
              { id: "D", text: "Bağımsız üye zorunluluğu yoktur." },
            ],
            correct: "B",
            explanation:
              "Halka açık şirketlerde SPK II-17.1 Kurumsal Yönetim Tebliği uyarınca, yönetim kurulunda bağımsız üye sayısının yönetim kurulu toplam üye sayısının üçte birinden (1/3) az olamayacağı zorunludur. Hesaplamada kesirli sayılar bir üst tam sayıya yuvarlanır; örneğin 5 üyeli kurulda 2 bağımsız üye, 7 üyeli kurulda 3 bağımsız üye gerekir. Bağımsızlık kriterleri kapsamlıdır: (1) Aday üye, şirket veya iştirakleriyle son 5 yılda istihdam ilişkisi olmamalı, (2) Şirket veya iştiraklerinden önemli düzeyde gelir elde etmemeli, (3) Şirket sermayesinin %1'inden fazlasına sahip olmamalı, (4) Şirket veya iştirakleriyle danışmanlık, müşavirlik, denetim ilişkisi olmamalı, (5) İlişkili taraflarla ilişkili olmamalı, (6) Bağımsız üyelik dönemi 6 yıldan fazla olamaz. Bağımsız üyeler özellikle Denetim Komitesi'nde görev alır ve azınlık pay sahiplerinin haklarını koruma açısından kritik rol oynar.",
          },
          {
            text: "Halka açık şirketlerde 'Denetim Komitesi' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Denetim komitesi kurulması ihtiyaridir." },
              { id: "B", text: "Halka açık şirketlerde Denetim Komitesi kurulması zorunludur ve üyelerinin tamamı bağımsız yönetim kurulu üyelerinden oluşmalıdır; finansal tabloları, iç kontrol ve bağımsız denetim süreçlerini gözetir." },
              { id: "C", text: "Denetim komitesi en az 7 üyeden oluşur." },
              { id: "D", text: "Denetim komitesi yalnızca CEO tarafından atanır." },
            ],
            correct: "B",
            explanation:
              "Halka açık şirketlerde Denetim Komitesi (Audit Committee) kurulması SPK II-17.1 Tebliği uyarınca ZORUNLUDUR. Önemli kuralı: üyelerinin TAMAMI bağımsız yönetim kurulu üyelerinden oluşmalıdır (en kritik komite, en yüksek bağımsızlık standardı). En az 2 üyeden oluşur. Denetim Komitesi'nin görevleri: (1) Finansal raporlama sürecini gözetlemek; finansal tabloların doğruluğunu ve mevzuata uygunluğunu kontrol etmek, (2) Bağımsız denetçi seçimini yönetmek; bağımsız denetçinin nitelikleri, ücretlendirmesi, performansını değerlendirmek, (3) İç kontrol ve iç denetim sistemlerinin etkinliğini izlemek, (4) Yönetim ile bağımsız denetçi arasında bilgi akışını sağlamak, (5) Önemli muhasebe politikaları ve tahminlerinin uygunluğunu değerlendirmek. Sarbanes-Oxley Yasası bu komitenin önemini ABD'de güçlendirmiştir; Türkiye'de SPK ve KGK düzenlemeleri benzer çerçeveyi getirmiştir. Diğer önemli komiteler: Kurumsal Yönetim Komitesi (zorunlu), Riskin Erken Saptanması Komitesi (zorunlu), Aday Gösterme Komitesi, Ücret Komitesi.",
          },
          {
            text: "TTK 6102 kapsamında halka açık şirketlerde 'pay sahipleri haklarını' güçlendiren düzenlemeler arasında aşağıdakilerden hangisi YER ALMAZ?",
            options: [
              { id: "A", text: "Bilgi alma ve inceleme hakkı (TTK md. 437)" },
              { id: "B", text: "Özel denetim isteme hakkı (TTK md. 438)" },
              { id: "C", text: "Genel kurula katılma ve oy hakkı, kâr payı hakkı, rüçhan hakkı" },
              { id: "D", text: "Şirket malvarlığını kişisel kullanma hakkı" },
            ],
            correct: "D",
            explanation:
              "Pay sahibinin şirket malvarlığını kişisel olarak kullanma hakkı YOKTUR; bu açıkça yasaklanmıştır (TTK md. 358 — pay sahiplerinin şirkete borçlanma yasağı). Pay sahibi sadece taahhüt ettiği sermaye payı kadar şirkete katkıda bulunmuş ve karşılığında kar payı, oy ve diğer hakları kazanmıştır; şirket malvarlığı pay sahibinden ayrı bir tüzel kişiliğe aittir. TTK 6102 ile pay sahipliği haklarını güçlendiren düzenlemeler: (1) Bilgi Alma ve İnceleme Hakkı (md. 437) — her pay sahibi genel kurulda finansal tablolar ve faaliyet raporu hakkında bilgi alabilir, (2) Özel Denetim İsteme Hakkı (md. 438) — sermayenin %10'u (halka açıkta %5) sahibi pay sahipleri özel denetim talep edebilir, (3) Genel Kurula Katılma ve Oy Hakkı, (4) Kâr Payı Hakkı — esas sermayenin getirisi, (5) Rüçhan Hakkı — sermaye artırımında öncelikli alma hakkı, (6) Sorumluluk Davası Açma Hakkı — yönetim kuruluna karşı, (7) Sermayenin Korunması İlkesi — pay bedelinden başka karşılıksız sermaye geri alınamaz.",
          },
          {
            text: "II-17.1 Tebliği kapsamında halka açık şirketlerin sınıflandırılması için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm halka açık şirketler aynı kurallara tabidir." },
              { id: "B", text: "Halka açık şirketler büyüklüklerine göre A, B, C grubu olarak sınıflandırılır; A grubunda en çok zorunlu ilke uygulanır, C grubunda en az; sınıflandırma ödenmiş sermaye ve fiili dolaşımdaki paylara göre yapılır." },
              { id: "C", text: "Sınıflandırma şirketlerin sektörüne göre yapılır." },
              { id: "D", text: "Sınıflandırma yıllık olarak SPK tarafından serbestçe değiştirilir." },
            ],
            correct: "B",
            explanation:
              "SPK II-17.1 Kurumsal Yönetim Tebliği halka açık şirketleri büyüklük kriterlerine göre üç gruba ayırır: A, B ve C grubu. Sınıflandırma kriterleri: (1) Ödenmiş veya çıkarılmış sermayenin büyüklüğü, (2) Fiili dolaşımdaki payların piyasa değeri (FDPD). A Grubu — en büyük halka açık şirketler; en çok zorunlu kurumsal yönetim ilkesini uygulamak zorundadır (örn. genel kurulun internet üzerinden yayını, bağımsız üye sayısı, komite yapısı, yatırımcı ilişkileri yöneticisi). B Grubu — orta büyüklükteki halka açık şirketler; daha az zorunlu ilke. C Grubu — en küçük halka açık şirketler; en az zorunlu ilke. Bu kademeli yaklaşım küçük şirketlerin maliyetli kurumsal yönetim uyumu yüküyle ezilmemesini, büyük şirketlerin ise yüksek standartlara uymasını sağlar. Sınıflandırma yıllık olarak yapılır ve şirket büyüklüğü değişimine göre grup geçişi mümkündür. BIST 30 endeksindeki şirketler genellikle A grubunda yer alır.",
          },
        ],
      },
      // ──────────── Ders 4: SPK Kurumsal Yönetim İlkeleri ────────────
      {
        id: "m1018-l4",
        title: "SPK Kurumsal Yönetim İlkeleri ve Yapı Taşları",
        duration: "10 dk",
        summary: {
          title: "SPK Kurumsal Yönetim İlkeleri",
          intro:
            "SPK Kurumsal Yönetim İlkeleri; OECD ve G20 ilkelerini esas alan, Türk halka açık şirketlerine yönelik kapsamlı bir uyum çerçevesidir. İlkeler dört ana bölümde gruplanır: Pay Sahipleri (oy hakkı, kâr payı, eşit davranış), Kamuyu Aydınlatma ve Şeffaflık (finansal/operasyonel bilgi açıklama, internet sitesi, faaliyet raporu), Menfaat Sahipleri (çalışanlar, alacaklılar, müşteriler, toplum), Yönetim Kurulu (yapı, işleyiş, komiteler, bağımsız üyeler).",
          sections: [
            {
              heading: "Pay Sahipleri ve Kamuyu Aydınlatma İlkeleri",
              icon: "shield",
              items: [
                {
                  strong: "Pay Sahipleri Bölümü:",
                  text: "Pay sahiplerinin temel hakları (oy, kâr payı, bilgi alma, devir) tam olarak korunmalıdır; eşit davranış ilkesi gözetilmeli; yatırımcı ilişkileri bölümü kurulmalıdır.",
                },
                {
                  strong: "Genel Kurul:",
                  text: "Pay sahiplerinin etkin katılımı sağlanmalı; A grubu şirketlerde internet üzerinden canlı yayın zorunlu; vekaleten oy kullanımı kolaylaştırılmalı; soru sorma hakkı korunmalıdır.",
                },
                {
                  strong: "Kâr Dağıtım Politikası:",
                  text: "Yazılı bir kâr dağıtım politikası olmalı, kamuya açıklanmalı; kâr dağıtımı her yıl genel kurulda görüşülmeli; nakit veya hisse şeklinde dağıtım yapılabilmeli.",
                },
                {
                  strong: "Kamuyu Aydınlatma:",
                  text: "Bilgi açıklama politikası yazılı olmalı; finansal raporlar zamanında ve eksiksiz, faaliyet raporu kapsamlı olmalı; özel durum açıklamaları derhal KAP'a gönderilmeli.",
                },
                {
                  strong: "İnternet Sitesi:",
                  text: "Halka açık şirketlerin internet sitesi olmak zorunda; ortaklık yapısı, esas sözleşme, finansal raporlar, faaliyet raporları, kurumsal yönetim raporları, özel durum açıklamaları yer almalıdır.",
                },
              ],
            },
            {
              heading: "Menfaat Sahipleri ve Yönetim Kurulu İlkeleri",
              icon: "trend",
              items: [
                {
                  strong: "Menfaat Sahipleri (Stakeholders):",
                  text: "Çalışanlar, alacaklılar, müşteriler, tedarikçiler, toplum gibi menfaat sahiplerinin haklarına saygı gösterilmeli; insan kaynakları politikası, müşteri ve tedarikçi ilişkileri yönetilmeli; etik kurallar ve sosyal sorumluluk gözetilmeli.",
                },
                {
                  strong: "Yönetim Kurulu Yapısı:",
                  text: "Yönetim kurulu çeşitliliği (tecrübe, uzmanlık alanı, cinsiyet) sağlanmalı; üye sayısının 1/3'ü bağımsız olmalı; YK üyelerinin nitelikleri, görev tanımları belirli olmalı.",
                },
                {
                  strong: "Yönetim Kurulu Komiteleri:",
                  text: "Denetim Komitesi (zorunlu, tüm üyeler bağımsız), Kurumsal Yönetim Komitesi (zorunlu), Riskin Erken Saptanması Komitesi (zorunlu); Aday Gösterme, Ücret komiteleri da kurulabilir.",
                },
                {
                  strong: "İç Yönerge ve Görev Tanımı:",
                  text: "YK ve komitelerin işleyişi yazılı iç yönergeyle belirlenmeli; YK başkanı, üst düzey yöneticiler ve komitelerin yetki/sorumluluk sınırları yazılı olmalıdır.",
                },
                {
                  strong: "Performans ve Ücretlendirme:",
                  text: "Üst düzey yöneticilerin performansı düzenli değerlendirilmeli; ücretlendirme politikası kamuya açıklanmalı; performansa dayalı ücretlendirme şirket uzun vadeli çıkarlarıyla uyumlu olmalı.",
                },
              ],
            },
          ],
          tip: "SPK KY İlkeleri 4 bölüm: (1) Pay Sahipleri, (2) Kamuyu Aydınlatma ve Şeffaflık, (3) Menfaat Sahipleri (paydaşlar), (4) Yönetim Kurulu. Üç zorunlu komite: Denetim, Kurumsal Yönetim, Riskin Erken Saptanması. Yatırımcı ilişkileri bölümü zorunlu. Genel kurul A grubunda canlı yayın zorunlu. Kâr dağıtım politikası yazılı olmalı.",
        },
        questions: [
          {
            text: "SPK Kurumsal Yönetim İlkeleri'nde hangi 4 ana bölüm yer alır?",
            options: [
              { id: "A", text: "Üretim, Pazarlama, Finans, Yönetim" },
              { id: "B", text: "(1) Pay Sahipleri, (2) Kamuyu Aydınlatma ve Şeffaflık, (3) Menfaat Sahipleri (Stakeholders), (4) Yönetim Kurulu" },
              { id: "C", text: "Strateji, Taktik, Operasyon, Kontrol" },
              { id: "D", text: "Sadece Pay Sahipleri ve Yönetim Kurulu" },
            ],
            correct: "B",
            explanation:
              "SPK Kurumsal Yönetim İlkeleri (II-17.1 Tebliği eki); OECD/G20 ilkeleri model alınarak dört ana bölümde yapılandırılmıştır: (1) Pay Sahipleri — pay sahiplerinin temel hakları (oy hakkı, kâr payı hakkı, bilgi alma hakkı, eşit davranış), genel kurulun etkin yapılması, kâr dağıtım politikası, yatırımcı ilişkileri bölümü, (2) Kamuyu Aydınlatma ve Şeffaflık — bilgi açıklama politikası, internet sitesi, faaliyet raporu, finansal raporlama, özel durum açıklamaları, (3) Menfaat Sahipleri (Stakeholders) — çalışanlar, alacaklılar, müşteriler, tedarikçiler, toplum gibi paydaş haklarının korunması, etik kurallar, insan kaynakları politikaları, (4) Yönetim Kurulu — kurul yapısı (bağımsız üye, çeşitlilik), işleyişi (toplantı, karar alma), komiteler (denetim, KY, risk), üst düzey yöneticilerin atanması ve ücretlendirilmesi. Bu yapı modern kurumsal yönetimin küresel standardıdır.",
          },
          {
            text: "Halka açık şirketlerin yönetim kurullarında zorunlu olarak kurulması gereken üç komite hangileridir?",
            options: [
              { id: "A", text: "Pazarlama, Üretim ve Finans Komitesi" },
              { id: "B", text: "Denetim Komitesi, Kurumsal Yönetim Komitesi, Riskin Erken Saptanması Komitesi — bu üç komite II-17.1 Tebliği uyarınca halka açık şirketler için zorunludur." },
              { id: "C", text: "Yatırım Komitesi, Yönetim Komitesi, Strateji Komitesi" },
              { id: "D", text: "Sadece Denetim Komitesi" },
            ],
            correct: "B",
            explanation:
              "SPK II-17.1 Kurumsal Yönetim Tebliği uyarınca halka açık şirketlerin yönetim kurullarında zorunlu olarak kurulması gereken üç komite: (1) Denetim Komitesi (Audit Committee) — TÜM üyeleri bağımsız yönetim kurulu üyelerinden oluşur (en yüksek bağımsızlık standardı); finansal raporlama, iç kontrol, bağımsız denetim ve iç denetim faaliyetlerini gözetir, (2) Kurumsal Yönetim Komitesi (Corporate Governance Committee) — başkanı bağımsız üye olmak zorunda; kurumsal yönetim ilkelerinin uygulanmasını izler, kurumsal yönetim ilkelerine uyum raporunu hazırlar, yönetim kurulunun yapısı/komiteleri için önerilerde bulunur, yatırımcı ilişkileri bölümünün çalışmalarını gözetler, (3) Riskin Erken Saptanması Komitesi (Risk Detection Committee) — başkanı bağımsız üye olmak zorunda (TTK 6102 ile getirilmiştir); şirketi tehdit eden riskleri erken saptamak, riskleri önlemek için tedbir alma, risk yönetim sistemlerini gözden geçirmek görevini üstlenir. Ayrıca isteğe bağlı olarak Aday Gösterme Komitesi, Ücret Komitesi gibi komiteler de kurulabilir; ancak bunlar zorunlu değildir.",
          },
          {
            text: "Halka açık şirketlerde 'kâr dağıtım politikası' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Kâr dağıtım politikası gizli tutulmalıdır." },
              { id: "B", text: "Yazılı bir kâr dağıtım politikası olmalı, kamuya açıklanmalı; kâr dağıtımı her yıl genel kurulda görüşülmeli; nakit veya hisse şeklinde dağıtım yapılabilmeli; politikanın değişiklikleri kamuya açıklanmalıdır." },
              { id: "C", text: "Kâr dağıtımı yapılmamalıdır." },
              { id: "D", text: "Yalnızca yöneticilerin tercihine bırakılır." },
            ],
            correct: "B",
            explanation:
              "Halka açık şirketler için SPK Kurumsal Yönetim İlkeleri uyarınca kâr dağıtım politikası net ve şeffaf kurallara tabidir. Temel ilkeler: (1) Yazılı Kâr Dağıtım Politikası — şirketin uzun vadeli stratejisi, finansman ihtiyaçları, kârlılık beklentileri ve nakit pozisyonu dikkate alınarak yazılı bir politika hazırlanmalıdır. Bu politika kamuya açıklanmalı ve internet sitesinde yer almalıdır, (2) Yıllık Genel Kurul Onayı — kâr dağıtım kararı her yıl olağan genel kurulda görüşülmeli, kâr dağıtım veya dağıtmama nedenleri açıkça raporlanmalı, (3) Dağıtım Şekilleri — Nakit (en yaygın), Hisse Senedi (bedelsiz pay vererek), Karma (her ikisi). Bedelsiz pay yoluyla yapılan kâr dağıtımları sermayeyi büyütmez, sadece pay sayısını artırır, (4) Asgari Kâr Dağıtım — Esas sözleşmede belirlenebilir veya ana ortaklık politikası olabilir, (5) Politika Değişikliği — kâr dağıtım politikasındaki herhangi bir değişiklik kamuya derhal açıklanmalı ve genel kurulda onaylanmalıdır. Yatırımcılar için temel önemli unsurlardan biri olan kâr dağıtım politikası, hisse senedi yatırım kararlarını doğrudan etkiler.",
          },
          {
            text: "Halka açık şirketlerde 'Yatırımcı İlişkileri Bölümü' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yatırımcı ilişkileri bölümü kurulması ihtiyaridir." },
              { id: "B", text: "Halka açık şirketlerde Yatırımcı İlişkileri Bölümü kurulması zorunludur; bu bölüm pay sahipleri ile şirket arasındaki iletişimi sağlar; bilgi taleplerine yanıt verir, kâr dağıtımı, sermaye artırımı gibi süreçleri yönetir; yöneticisi SPL belgelerine sahip olmalıdır." },
              { id: "C", text: "Yatırımcı ilişkileri yalnızca yatırım fonları için geçerlidir." },
              { id: "D", text: "Yatırımcı ilişkileri yalnızca büyük şirketlerde yer alır." },
            ],
            correct: "B",
            explanation:
              "Halka açık şirketlerde Yatırımcı İlişkileri Bölümü (Investor Relations Department) kurulması SPK II-17.1 Tebliği uyarınca ZORUNLUDUR. Görev ve Sorumlulukları: (1) Pay sahiplerinden gelen bilgi taleplerini yanıtlamak; ortaklık yapısı, kâr dağıtımı, finansal performans hakkında bilgi sağlamak, (2) Genel kurul süreçlerini yönetmek; davet, gündem hazırlama, vekaletname işlemleri, oylama, (3) Sermaye artırımı, sermaye azaltımı, birleşme, bölünme gibi sermaye piyasası işlemlerinde koordinasyon, (4) Kâr dağıtımı sürecinin organizasyonu; ödeme planlamaları, MKK koordinasyonu, (5) Özel durum açıklamalarının hazırlanması ve KAP'a gönderilmesi, (6) Yıllık faaliyet raporu hazırlık koordinasyonu, (7) Yatırımcı toplantıları (analist günleri, road show'lar) düzenlenmesi, (8) Kurumsal Yönetim Komitesi'ne raporlama. Yatırımcı İlişkileri Yöneticisi'nin SPL Düzey 2/3 sertifikalarına sahip olması zorunludur. Bölüm üst düzey yönetime (CEO veya CFO'ya) doğrudan raporlamalı, yönetim kurulu komiteleri ile düzenli iletişimde olmalıdır.",
          },
          {
            text: "Halka açık şirketlerde A grubuna giren büyük şirketler için 'genel kurul' uygulamasında zorunlu olan özel uygulama aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Genel kurul yapılmaması" },
              { id: "B", text: "Genel kurulun internet üzerinden canlı yayını zorunludur; ayrıca elektronik genel kurul sistemine üyelik ve elektronik oy kullanımının desteklenmesi de gerekir; bu uygulamalar pay sahibi katılımını ve şeffaflığı artırır." },
              { id: "C", text: "Genel kurul yalnızca İngilizce yapılır." },
              { id: "D", text: "Genel kurul kapalı tutulur." },
            ],
            correct: "B",
            explanation:
              "Halka açık şirketler büyüklük kriterlerine göre A, B, C grubuna ayrılır ve farklı zorunluluklara tabi olur. A Grubu (en büyük halka açık şirketler) için genel kurul uygulamasında zorunlu olan özel uygulama: (1) İnternet Üzerinden Canlı Yayın — genel kurul toplantılarının internet üzerinden canlı yayınlanması zorunludur; bu sayede coğrafi olarak uzak veya fiziksel olarak katılamayan pay sahipleri de toplantıyı izleyebilir, (2) Elektronik Genel Kurul Sistemi (e-GKS) — Merkezi Kayıt Kuruluşu (MKK) tarafından yürütülen elektronik genel kurul sistemine üyelik zorunludur; pay sahipleri elektronik ortamda oy kullanabilir, soru sorabilir, kararlara katılabilir, (3) Toplantı Tutanakları — toplantı tutanaklarının ve sunumların yayımlanması zorunludur, (4) Elektronik Vekaletname — vekaleten oy kullanımının elektronik ortamda yapılabilmesi sağlanır. B ve C grubu şirketler için bu uygulamalar zorunlu değil ancak teşvik edilir (Comply or Explain). Bu uygulamalar pay sahibi katılımını artırır ve azınlık pay sahiplerinin de seslerini duyurabilmesini sağlar.",
          },
        ],
      },
      // ──────────── Ders 5: Kurumsal Yönetim Derecelendirmesi ────────────
      {
        id: "m1018-l5",
        title: "Kurumsal Yönetim İlkelerine Uyum Derecelendirmesi",
        duration: "10 dk",
        summary: {
          title: "Kurumsal Yönetim Derecelendirmesi",
          intro:
            "Kurumsal Yönetim İlkelerine Uyum Derecelendirmesi (KY Derecelendirmesi); şirketlerin SPK Kurumsal Yönetim İlkeleri'ne uyum düzeyini bağımsız bir derecelendirme kuruluşu tarafından değerlendirilmesi sürecidir. Şirket dört ana başlıkta (Pay Sahipleri, Kamuyu Aydınlatma, Menfaat Sahipleri, Yönetim Kurulu) ayrı ayrı değerlendirilir ve toplam not 0-10 ölçeğinde verilir. Yüksek not alan şirketler BIST Kurumsal Yönetim Endeksi'ne girer ve yatırımcı güvenini güçlendirir. Sürdürülebilirlik endeksleri ise ESG performansını ölçer.",
          sections: [
            {
              heading: "KY Derecelendirme Süreci ve Metodoloji",
              icon: "shield",
              items: [
                {
                  strong: "Derecelendirme Süreci:",
                  text: "Sözleşme imzalanması → Veri talep mektubu → Şirket tarafından bilgi paketi sunumu → Saha çalışmaları (üst yönetim ve YK üyeleriyle görüşmeler) → Analiz ve değerlendirme → Komite onayı → Rapor ve not açıklanması.",
                },
                {
                  strong: "Dört Ana Bölüm:",
                  text: "Her bölüm ayrı not alır ve ağırlıklandırılarak toplam not bulunur — (1) Pay Sahipleri — %25, (2) Kamuyu Aydınlatma ve Şeffaflık — %25, (3) Menfaat Sahipleri — %15, (4) Yönetim Kurulu — %35.",
                },
                {
                  strong: "Not Sistemi:",
                  text: "0-10 ölçeğinde verilir; 7'nin üstündeki notlar BIST Kurumsal Yönetim Endeksi'ne girme eşiğidir; 9 ve üstü 'mükemmel düzey', 8-9 'çok iyi', 7-8 'iyi', altı 'orta veya zayıf' olarak yorumlanır.",
                },
                {
                  strong: "Derecelendirme Kuruluşları (KY):",
                  text: "Türkiye'de KY derecelendirme yetkisi olan kuruluşlar SPK Seri VIII No 51 Tebliği uyarınca yetkilendirilmiştir; JCR Avrasya, SAHA, Kobirate gibi yerli kuruluşlar bu hizmeti vermektedir.",
                },
                {
                  strong: "Yıllık Güncelleme:",
                  text: "Notlar yıllık olarak güncellenir; şirket büyük yapısal değişiklikler yaparsa (birleşme, sermaye artışı, üst yönetim değişiklikleri) ara dönem revizyon yapılabilir.",
                },
              ],
            },
            {
              heading: "BIST Endeksleri ve KY Derecelendirme Etkisi",
              icon: "trend",
              items: [
                {
                  strong: "BIST Kurumsal Yönetim Endeksi:",
                  text: "KY derecelendirme notu en az 7 olan şirketler bu endekse girebilir; yatırımcılara yüksek standartta kurumsal yönetim uygulayan şirketleri gösterir; getiri performansı genelde BIST 100'den iyi olur.",
                },
                {
                  strong: "BIST Sürdürülebilirlik Endeksi:",
                  text: "ESG (Çevresel-Sosyal-Yönetişimsel) kriterlerine göre değerlendirilen şirketleri kapsar; FTSE Russell ile işbirliğinde değerlendirme yapılır; sürdürülebilirlik liderlerini öne çıkarır.",
                },
                {
                  strong: "Kurumsal Yönetim ve Hisse Performansı:",
                  text: "Akademik araştırmalar yüksek KY notu olan şirketlerin uzun vadede daha yüksek hisse performansı gösterdiğini, sermaye maliyetlerinin düşük olduğunu ve volatilitelerinin azaldığını gösteriyor.",
                },
                {
                  strong: "Yabancı Yatırımcılar İçin Önemi:",
                  text: "Yabancı kurumsal yatırımcılar (BlackRock, Vanguard, Norveç Egemen Fonu) kurumsal yönetim notlarını ciddi şekilde dikkate alır; düşük KY notu olan şirketler portföylerden çıkarılabilir.",
                },
                {
                  strong: "Sürdürülebilirlik Raporları:",
                  text: "GRI (Global Reporting Initiative), SASB (Sustainability Accounting Standards Board), TCFD (Task Force on Climate-related Financial Disclosures), ISSB (International Sustainability Standards Board) çerçeveleri kullanılır; entegre raporlama bütüncül yaklaşım sağlar.",
                },
              ],
            },
          ],
          tip: "KY derecelendirme = 4 bölüm: Pay Sahipleri %25 + Kamuyu Aydınlatma %25 + Menfaat Sahipleri %15 + Yönetim Kurulu %35. Not 0-10. BIST KY Endeksi eşiği 7. ESG = Environmental, Social, Governance. GRI/SASB/TCFD/ISSB sürdürülebilirlik çerçeveleri. Yabancı kurumsal yatırımcılar KY notunu ciddi alır.",
        },
        questions: [
          {
            text: "Kurumsal Yönetim Derecelendirme metodolojisinde dört ana bölüm hangileridir ve ağırlıkları nedir?",
            options: [
              { id: "A", text: "Tüm bölümler eşit ağırlığa sahiptir." },
              { id: "B", text: "(1) Pay Sahipleri %25, (2) Kamuyu Aydınlatma ve Şeffaflık %25, (3) Menfaat Sahipleri %15, (4) Yönetim Kurulu %35 — bu ağırlıklarla toplam not hesaplanır." },
              { id: "C", text: "Yalnızca Yönetim Kurulu değerlendirilir." },
              { id: "D", text: "Bölümler şirket tarafından serbestçe seçilir." },
            ],
            correct: "B",
            explanation:
              "Kurumsal Yönetim İlkelerine Uyum Derecelendirmesi metodolojisinde dört ana bölüm farklı ağırlıklarla değerlendirilir; Yönetim Kurulu en yüksek ağırlığa sahiptir çünkü kurumsal yönetimin merkezi unsurudur: (1) Pay Sahipleri — %25 ağırlık; oy hakkı, kâr payı, bilgi alma, eşit davranış, genel kurul katılımı, kâr dağıtım politikası değerlendirilir, (2) Kamuyu Aydınlatma ve Şeffaflık — %25 ağırlık; finansal raporlama kalitesi, faaliyet raporu kapsamlığı, internet sitesi tamlığı, özel durum açıklamalarının zamanlılığı, KAP'taki bilgi açıklama performansı, (3) Menfaat Sahipleri — %15 ağırlık; çalışan hakları, müşteri ilişkileri, tedarikçi ilişkileri, etik kurallar, sosyal sorumluluk değerlendirilir, (4) Yönetim Kurulu — %35 ağırlık (en yüksek); kurul yapısı, bağımsız üye sayısı ve nitelikleri, çeşitlilik, komiteler, üst düzey yöneticilerin atanması ve performansı, ücretlendirme. Her bölümün altında çok sayıda alt kriter vardır; toplam not bu dört bölümün ağırlıklı ortalaması olarak 0-10 arasında verilir.",
          },
          {
            text: "BIST Kurumsal Yönetim Endeksi'ne girebilmek için gereken minimum kurumsal yönetim derecelendirme notu kaçtır?",
            options: [
              { id: "A", text: "5" },
              { id: "B", text: "7 — KY derecelendirme notu en az 7 olan şirketler BIST Kurumsal Yönetim Endeksi'ne girebilir; bu endekse girmek prestij kaynağı olduğu gibi yabancı kurumsal yatırımcılar için de pozitif sinyaldir." },
              { id: "C", text: "9" },
              { id: "D", text: "10" },
            ],
            correct: "B",
            explanation:
              "BIST Kurumsal Yönetim Endeksi (XKURY); Borsa İstanbul tarafından oluşturulan ve kurumsal yönetim alanında yüksek standart sağlayan halka açık şirketleri kapsayan özel bir endekstir. Endekse girebilme şartı: SPK tarafından yetkilendirilmiş bir derecelendirme kuruluşundan KY derecelendirme notu en az 7 olmalıdır. Endeksin genel özellikleri: (1) Yüksek standartta kurumsal yönetim uygulayan şirketleri öne çıkarır, (2) Yatırımcılara güvenilir bir filtreleme sağlar — bu endeksteki şirketler şeffaf, hesap verebilir, paydaş dostu olarak kabul edilir, (3) Yabancı kurumsal yatırımcılar için pozitif sinyal verir; bazı uluslararası fonlar yalnızca KY endeksindeki şirketlere yatırım yapar, (4) Endeks performansı genellikle BIST 100 endeksinden daha iyi getiri sağlar (akademik araştırmalar bunu doğrular), (5) Endekse girmek prestij kaynağıdır ve şirketin yatırımcı tabanını genişletir. Notun düşmesi durumunda şirket endeksten çıkarılabilir; bu da hisse fiyatına olumsuz etki yapabilir. Türkiye'deki bazı büyük şirketler (Aselsan, Doğan Holding, Tüpraş, Garanti BBVA, Yapı Kredi) düzenli olarak yüksek KY notu ile bu endekste yer almaktadır.",
          },
          {
            text: "Kurumsal Yönetim Derecelendirme süreci için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Süreç yalnızca finansal tablolara bakılarak yapılır." },
              { id: "B", text: "Sözleşme imzalanması → Veri talep mektubu → Şirket tarafından bilgi paketi sunumu → Saha çalışmaları (üst yönetim ve YK üyeleriyle görüşmeler) → Analiz ve değerlendirme → Komite onayı → Rapor ve not açıklanması adımlarını içeren çok aşamalı bir süreçtir." },
              { id: "C", text: "Süreç birkaç saat içinde tamamlanır." },
              { id: "D", text: "Yalnızca büyük şirketler için yapılır." },
            ],
            correct: "B",
            explanation:
              "Kurumsal Yönetim Derecelendirme süreci; çok aşamalı, kapsamlı ve genellikle 2-3 ay süren bir profesyonel hizmettir. Tipik adımlar: (1) Sözleşme İmzalanması — şirket ile derecelendirme kuruluşu arasında hizmet sözleşmesi imzalanır, ücret ve süre belirlenir, (2) Veri Talep Mektubu — derecelendirme kuruluşu kapsamlı bir bilgi talep listesi gönderir (mali tablolar, KY uyum raporları, esas sözleşme, iç yönergeler, komite tutanakları, üye CV'leri vb.), (3) Bilgi Paketi Sunumu — şirket talep edilen tüm dokümanları derecelendirme kuruluşuna sunar, (4) Saha Çalışmaları — derecelendirme uzmanları şirketi ziyaret eder; CEO, CFO, YK Başkanı, bağımsız üyeler, Yatırımcı İlişkileri Yöneticisi, İç Denetim Birimi gibi anahtar kişilerle görüşmeler yapar; KY uygulamalarını yerinde gözlemler, (5) Analiz ve Değerlendirme — toplanan bilgiler dört ana bölümde detaylı analize tabi tutulur, alt kriterlere not verilir, (6) Komite Onayı — derecelendirme kuruluşunun rating komitesi nihai notu onaylar; bu adım bağımsızlığı sağlar, (7) Rapor ve Not Açıklanması — şirkete önce ön rapor sunulur, gerekirse görüş alınır, sonra final rapor ve not KAP'a açıklanır. Bu süreç tek başına bir analiz değil, derinlemesine bir kurumsal değerlendirme sürecidir.",
          },
          {
            text: "ESG (Environmental, Social, Governance) kriterleri için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "ESG yalnızca çevresel kriterleri içerir." },
              { id: "B", text: "Çevresel (Environmental — iklim değişikliği, karbon emisyonu, atık yönetimi), Sosyal (Social — çalışan hakları, çeşitlilik, müşteri/topluluk ilişkileri) ve Yönetişimsel (Governance — kurumsal yönetim, yönetim kurulu, etik) kriterlerin bütünüdür; modern sürdürülebilirlik raporlamasının ve sorumlu yatırımın temelidir." },
              { id: "C", text: "ESG yalnızca büyük yatırım fonları için geçerlidir." },
              { id: "D", text: "ESG yatırımcılar için önemsizdir." },
            ],
            correct: "B",
            explanation:
              "ESG (Environmental, Social, Governance — Çevresel, Sosyal, Yönetişimsel); 21. yüzyıl yatırım dünyasının en önemli kavramlarından biridir. Üç bileşeni: (1) Çevresel (Environmental) — iklim değişikliği ve karbon emisyonları, enerji verimliliği, su kullanımı, atık yönetimi, biyoçeşitlilik, kirlilik kontrolü, döngüsel ekonomi uygulamaları. Net Zero hedefleri, Paris Anlaşması taahhütleri bu boyutta değerlendirilir, (2) Sosyal (Social) — çalışan hakları (iş güvenliği, makul ücret, sendika hakkı), çeşitlilik ve kapsayıcılık (cinsiyet, ırk, yaş), insan hakları, tedarik zinciri yönetimi (modern kölelik karşıtlığı), müşteri korumaları, veri gizliliği, toplumsal etki, (3) Yönetişimsel (Governance) — yönetim kurulu yapısı (bağımsızlık, çeşitlilik), yönetim ücretlendirmesi, etik ve yolsuzluk karşıtlığı, vergi şeffaflığı, lobi faaliyetleri, ilişkili taraf işlemleri. ESG analizi modern sorumlu yatırım (responsible investing) ve etki yatırımcılığının (impact investing) temelidir. Türkiye'de BIST Sürdürülebilirlik Endeksi ESG performansını ölçer; FTSE Russell metodolojisi kullanır. Büyük varlık yöneticileri (BlackRock, Vanguard) ESG kriterlerini portföy seçiminde zorunlu kılmaya başlamıştır.",
          },
          {
            text: "Sürdürülebilirlik raporlama çerçeveleri arasında EN YAYGIN olan ve uluslararası kabul gören aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Yalnızca yerel bir Türk standardı kullanılır." },
              { id: "B", text: "GRI (Global Reporting Initiative), SASB (Sustainability Accounting Standards Board), TCFD (Task Force on Climate-related Financial Disclosures), ISSB (International Sustainability Standards Board) gibi uluslararası çerçeveler yaygın olarak kullanılır; ISSB son yıllarda küresel standart olma yolundadır." },
              { id: "C", text: "Yalnızca finansal raporlama yeterlidir." },
              { id: "D", text: "Sürdürülebilirlik çerçevesi yoktur." },
            ],
            correct: "B",
            explanation:
              "Sürdürülebilirlik raporlamada kullanılan başlıca uluslararası çerçeveler: (1) GRI (Global Reporting Initiative, 1997) — dünyanın en yaygın kullanılan sürdürülebilirlik raporlama standardıdır; çok paydaşlı yaklaşımı benimser, ekonomi-çevre-sosyal üç ayağı kapsar. GRI Standartları (Universal, Sector, Topic) modüler yapıdadır, (2) SASB (Sustainability Accounting Standards Board, 2011) — yatırımcı odaklı, sektör spesifik standartlardır; her sektör için 'finansal olarak materyal' (önemli) sürdürülebilirlik konularını belirler. 2022'de IFRS Vakfı ile birleşmiştir, (3) TCFD (Task Force on Climate-related Financial Disclosures, 2015) — Mark Carney öncülüğünde kurulan, iklim risklerinin finansal raporlamada açıklanmasını öneren çerçevedir; G20 ülkelerinde yaygın benimsenmiştir. Dört pillar: Yönetişim, Strateji, Risk Yönetimi, Metrikler ve Hedefler, (4) ISSB (International Sustainability Standards Board, 2021) — IFRS Vakfı bünyesinde kurulan, küresel sürdürülebilirlik raporlama standartlarını birleştirmek üzere oluşturulmuş kuruluştur. IFRS S1 (genel sürdürülebilirlik) ve IFRS S2 (iklim) standartlarını yayımlamıştır. Türkiye'de KGK ISSB standartlarını yerli mevzuata entegre etmektedir; 2024'ten itibaren büyük halka açık şirketler için zorunlu sürdürülebilirlik raporlaması başlamıştır. ESRS (European Sustainability Reporting Standards) ise AB'nin CSRD (Corporate Sustainability Reporting Directive) kapsamında kullandığı standarttır.",
          },
        ],
      },
    ],
  },
];