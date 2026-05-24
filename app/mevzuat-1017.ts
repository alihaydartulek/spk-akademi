/* ─────────────────────────────────────────────────────────────────────────────
 * Kredi Derecelendirmesi (1017)
 *
 * Kaynak: SPL 1017 Çalışma Notu, 31 Aralık 2025 (150 sayfa)
 * Sınavlar: Kredi Derecelendirme Sınavı
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1009 (Finans Mat) ve 1016 (Muhasebe) ile minimum çakışma vardır;
 * 1017 saf kredi riski ölçümü, kredi notlama/derecelendirme metodolojileri,
 * Seri VIII No 51 tebliği, kredi derecelendirme kuruluşları (S&P, Moody's,
 * Fitch) ve Basel sermaye uzlaşıları konusuna odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1017 } from "./mevzuat-1017";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011,
 *     ...mevzuat1012, ...mevzuat1013, ...mevzuat1014,
 *     ...mevzuat1015, ...mevzuat1016, ...mevzuat1017
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1017: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1017 KREDİ DERECELENDİRMESİ
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1017",
    title: "Modül · Kredi Derecelendirmesi (1017)",
    lessons: [
      // ──────────── Ders 1: Derecelendirme Kavramı ve Seri VIII No 51 ────────────
      {
        id: "m1017-l1",
        title: "Derecelendirme Kavramı ve Seri VIII No 51 Tebliği",
        duration: "10 dk",
        summary: {
          title: "Derecelendirme Kavramı ve Mevzuat",
          intro:
            "Kredi derecelendirmesi (credit rating); borçlunun kredi riski hakkında kredi derecelendirme kuruluşları tarafından oluşturulan görüşlerdir. S&P'nin tanımıyla 'kuruluşun, borçlunun finansal yükümlülüğünün tamamını zamanında geri ödeme kapasitesi ve istekliliği hakkındaki görüşü'dür. Derecelendirilen taraf bir devlet, finansal kuruluş, şirket veya ihraç edilen bir finansal varlık olabilir. Türkiye'de derecelendirme faaliyeti SPK'nın Seri VIII No 51 sayılı tebliği ile düzenlenir.",
          sections: [
            {
              heading: "Kredi Derecelendirmesinin Temel Kavramları",
              icon: "shield",
              items: [
                {
                  strong: "Tanım ve Niteliği:",
                  text: "Kredi derecelendirmesi bir 'görüş'tür, garanti değildir; borçlunun kredi değerliliği hakkında nispi (relatif) bir değerlendirmedir, kantitatif analiz ile uzman görüşünün karışımıdır.",
                },
                {
                  strong: "Kullanıcılar:",
                  text: "Yatırımcılar (yatırım kararlarında), kredi verenler (risk değerlendirmesi), düzenleyici otoriteler (sermaye yeterliliği), borçlular (finansman maliyetinin azaltılması), merkez bankaları ve fon yöneticileri.",
                },
                {
                  strong: "Makro Yararları:",
                  text: "Sermaye akışlarını kolaylaştırır, sermaye maliyetini azaltır, piyasa şeffaflığını artırır, yatırımcı güvenini sağlar, sermaye piyasalarının derinleşmesine katkıda bulunur.",
                },
                {
                  strong: "Sembollerle Gösterim:",
                  text: "AAA (en yüksek), AA, A, BBB (yatırım yapılabilir seviye), BB, B, CCC, CC, C, D (temerrüt) — kuruluşa göre küçük farklılıklar (S&P/Fitch: AAA, Moody's: Aaa).",
                },
                {
                  strong: "Yatırım Yapılabilir vs Spekülatif:",
                  text: "BBB- (Baa3) ve üzeri 'yatırım yapılabilir' seviye (investment grade); BB+ (Ba1) ve altı 'spekülatif' veya 'junk' seviye — kurumsal yatırımcılar için kritik eşiktir.",
                },
              ],
            },
            {
              heading: "Seri VIII No 51 Tebliği — Türkiye'de Düzenleme",
              icon: "trend",
              items: [
                {
                  strong: "Tebliğin Kapsamı:",
                  text: "Sermaye piyasasında derecelendirme faaliyeti yapacak kuruluşların yetkilendirilmesini, faaliyet esaslarını, sorumluluklarını ve denetimini düzenler; SPK tarafından çıkarılmıştır.",
                },
                {
                  strong: "Yerli ve Yabancı Kuruluşlar:",
                  text: "Türkiye'de kurulmuş yerli derecelendirme kuruluşları (örn. JCR Avrasya, SAHA, Turkrating) SPK'dan; yabancı kuruluşlar (S&P, Moody's, Fitch) ise tanınma kararıyla faaliyet gösterir.",
                },
                {
                  strong: "İki Tür Derecelendirme:",
                  text: "Talebe bağlı derecelendirme (issuer/borçlu talep eder ve ücret öder, yaygın iş modeli) ve talebe bağlı olmayan derecelendirme (kuruluşun kendi inisiyatifiyle yapar, bağımsız değerlendirme).",
                },
                {
                  strong: "Bağımsızlık ve Çıkar Çatışması:",
                  text: "Derecelendirme kuruluşları faaliyetlerinde bağımsız olmalıdır; danışmanlık hizmetleri ile derecelendirme aynı şirkete sunulamaz; çalışanlar derecelendirme yaptıkları şirketlerin paylarına sahip olamaz.",
                },
                {
                  strong: "Yetkilendirilen Faaliyet Türleri:",
                  text: "İşletmelerin derecelendirilmesi (kurumsal kredi), borç enstrümanlarının derecelendirilmesi (ihraç), sermaye piyasası araçlarının derecelendirilmesi, yapılandırılmış finansal araçların derecelendirilmesi.",
                },
              ],
            },
          ],
          tip: "Kredi derecelendirmesi = GÖRÜŞ, garanti değil. Sembollerde S&P/Fitch (AAA-D) ve Moody's (Aaa-C) farklı. BBB-/Baa3 = yatırım yapılabilir eşik. Türkiye'de düzenleyici tebliğ: Seri VIII No 51. İki tür: talebe bağlı (yaygın) ve talebe bağlı olmayan. Bağımsızlık ilkesi kritik — danışmanlık + derecelendirme aynı şirkete yapılamaz.",
        },
        questions: [
          {
            text: "Kredi derecelendirmesi (credit rating) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Derecelendirme borçlunun ödeme yapacağına dair kesin bir garantidir." },
              { id: "B", text: "Borçlunun kredi riski hakkında kredi derecelendirme kuruluşları tarafından oluşturulan GÖRÜŞTÜR; nispi bir değerlendirmedir, garanti değildir, satın alma/satma önerisi de değildir." },
              { id: "C", text: "Yalnızca devletler için kullanılır." },
              { id: "D", text: "Yalnızca temerrüt olasılığının yüzdesel ifadesidir." },
            ],
            correct: "B",
            explanation:
              "Kredi derecelendirmesi; borçlunun finansal yükümlülüklerini zamanında ve tam olarak geri ödeme kapasitesi ve istekliliği hakkında bir 'görüştür'. Önemli özellikleri: (1) Bir GARANTİ DEĞİLDİR — derecelendirme kuruluşları açıkça belirtir ki, dereceler kredi kalitesi veya gelecekteki kredi riski için bir garanti oluşturmaz, (2) Nispi (relatif) bir değerlendirmedir — borçluların birbirine göre kredi değerliliğini gösterir, (3) Satın alma/satma önerisi DEĞİLDİR — sadece kredi riski hakkında bilgi sağlar, (4) Temerrüt olasılığının yüzdesel ifadesi DEĞİLDİR — sembolik (AAA, BB- vb.) bir gösterimdir, (5) Tahvil fiyatları hakkında yorum içermez. Derecelendirme komitelerinin uzman görüşlerini ve kantitatif değerlendirmeleri birlikte yansıtır.",
          },
          {
            text: "Kredi derecelendirmelerinde 'yatırım yapılabilir seviye' (investment grade) ile 'spekülatif seviye' (junk) arasındaki sınır hangi notlardadır?",
            options: [
              { id: "A", text: "AAA ile AA arasında" },
              { id: "B", text: "S&P/Fitch için BBB- ile BB+ arasında, Moody's için Baa3 ile Ba1 arasındadır; bu eşik kurumsal yatırımcıların yatırım kararlarında kritik öneme sahiptir." },
              { id: "C", text: "A ile B arasında" },
              { id: "D", text: "C ile D arasında" },
            ],
            correct: "B",
            explanation:
              "Kredi derecelendirme sembollerinde 'yatırım yapılabilir' (investment grade) ile 'spekülatif' (speculative/junk) seviye arasındaki kritik eşik: S&P ve Fitch için BBB- (yatırım yapılabilir en alt seviye) ile BB+ (spekülatif en üst seviye) arasındadır; Moody's içinse Baa3 ile Ba1 arasındadır. Bu sınırın önemi büyüktür: (1) Birçok kurumsal yatırımcı (yatırım fonu, emeklilik fonu, sigorta şirketi) yalnızca yatırım yapılabilir seviyedeki tahvillere yatırım yapar (mevzuat veya iç politika gereği), (2) Spekülatif seviyeye düşen tahviller (downgrade) ciddi fiyat düşüşü yaşar — 'yıldız düşmesi' (fallen angel) olarak adlandırılır, (3) Borçlanma maliyeti spekülatif seviyede çok daha yüksektir. Türkiye'nin uzun yıllardır yatırım yapılabilir eşik etrafında gezindiğine sıkça atıfta bulunulur.",
          },
          {
            text: "Türkiye'de kredi derecelendirme faaliyetini düzenleyen mevzuat aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "II-14.1 sayılı Tebliğ" },
              { id: "B", text: "Seri VIII No 51 sayılı Sermaye Piyasasında Derecelendirme Faaliyeti ve Derecelendirme Kuruluşlarına İlişkin Esaslar Tebliği — SPK tarafından çıkarılmıştır." },
              { id: "C", text: "III-39.1 Tebliği" },
              { id: "D", text: "Bankacılık Kanunu" },
            ],
            correct: "B",
            explanation:
              "Türkiye'de kredi derecelendirme faaliyeti, SPK tarafından çıkarılan Seri VIII No 51 sayılı 'Sermaye Piyasasında Derecelendirme Faaliyeti ve Derecelendirme Kuruluşlarına İlişkin Esaslar Tebliği' ile düzenlenmektedir. Tebliğin kapsamı: (1) Türkiye'de kurulmuş yerli derecelendirme kuruluşlarının yetkilendirilmesi (lisanslandırma şartları, asgari sermaye, organizasyon yapısı), (2) Yabancı derecelendirme kuruluşlarının (S&P, Moody's, Fitch gibi) tanınması ve faaliyet esasları, (3) Derecelendirme kuruluşlarının bağımsızlık, çıkar çatışmasının önlenmesi, gizlilik yükümlülükleri, (4) Yetkilendirilen faaliyet türleri (kurumsal kredi, borç enstrümanı, yapılandırılmış araç), (5) Denetim, raporlama ve disiplin düzenlemeleri.",
          },
          {
            text: "Derecelendirme kuruluşlarının bağımsızlık ilkesi açısından aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Derecelendirme kuruluşları aynı şirkete hem danışmanlık hem derecelendirme hizmeti sunabilir." },
              { id: "B", text: "Derecelendirme kuruluşları faaliyetlerinde bağımsız olmalıdır; danışmanlık hizmetleri ile derecelendirme aynı şirkete sunulamaz; çalışanlar derecelendirme yaptıkları şirketlerin paylarına sahip olamaz." },
              { id: "C", text: "Bağımsızlık ilkesi yalnızca yabancı kuruluşlar için geçerlidir." },
              { id: "D", text: "Bağımsızlık ilkesi yoktur." },
            ],
            correct: "B",
            explanation:
              "Derecelendirme kuruluşlarının bağımsızlığı; verdikleri görüşlerin güvenilirliğinin temelidir ve hem Seri VIII No 51 hem de uluslararası IOSCO ilkelerinde sıkı şekilde düzenlenmiştir. Bağımsızlık kuralları: (1) Aynı şirkete hem derecelendirme hem danışmanlık hizmeti sunulamaz — bu çıkar çatışması yaratır (örn. danışmanlık verdiği şirketin tahvilini iyi derecelendirebilir korkusu), (2) Derecelendirme analistleri ve karar vericiler, derecelendirme yaptıkları şirketlerin pay senedi/tahvili gibi finansal araçlarına sahip olamaz, (3) Yöneticilerin ücreti, derecelendirme sonuçları veya gelir hedefleriyle bağlantılandırılamaz, (4) Aynı analistin aynı şirketi uzun süre derecelendirmesi sınırlandırılır (rotasyon), (5) Şirketten alınan ücret toplam gelirlerin belirli oranını aşmamalıdır. 2008 finansal krizinde derecelendirme kuruluşlarının bağımsızlık eksikliği eleştirilen ana konulardan biri olmuştur.",
          },
          {
            text: "'Talebe bağlı derecelendirme' ile 'talebe bağlı olmayan derecelendirme' arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki kavram aynıdır." },
              { id: "B", text: "Talebe bağlı derecelendirme: borçlu (issuer) talep eder ve ücret öder, en yaygın iş modelidir; talebe bağlı olmayan: derecelendirme kuruluşu kendi inisiyatifiyle yapar, bağımsız değerlendirme niteliğindedir." },
              { id: "C", text: "Talebe bağlı yalnızca yatırımcı tarafından, talebe bağlı olmayan ise borçlu tarafından talep edilir." },
              { id: "D", text: "Talebe bağlı olmayan derecelendirme yasaktır." },
            ],
            correct: "B",
            explanation:
              "Kredi derecelendirme kuruluşları iki farklı iş modeliyle çalışabilir: (1) Talebe Bağlı Derecelendirme (Solicited Rating) — borçlu (örn. tahvil ihraç edecek şirket) kendisi derecelendirme kuruluşunu seçer, talep eder ve ücretini öder. Bu en yaygın iş modelidir ('issuer-pays model'). Borçlu derecelendirme kuruluşuna kapsamlı bilgi (mali tablolar, stratejik plan, yönetim) sağlar; analiz daha derinlemesine yapılır. Çıkar çatışması riski vardır (borçlu memnun etmek isteği). (2) Talebe Bağlı Olmayan Derecelendirme (Unsolicited Rating) — derecelendirme kuruluşu kendi inisiyatifiyle, kamu bilgilerine ve bağımsız analize dayanarak derecelendirme yapar; ücret almaz. Daha bağımsız bir değerlendirmedir, ancak analiz daha sınırlı bilgiye dayanır. Bazı kuruluşlar bu derecelendirmeleri 'pi' (public information) sembolü ile etiketler.",
          },
        ],
      },
      // ──────────── Ders 2: Kredi Riski Ölçümü ve Notlama ────────────
      {
        id: "m1017-l2",
        title: "Kredi Riski Ölçümü, Notlama (Scoring) ve Validasyon",
        duration: "10 dk",
        summary: {
          title: "Kredi Riski Ölçümü ve Notlama",
          intro:
            "Kredi riski; borçlunun yükümlülüklerini zamanında ve tam olarak yerine getirememesi olasılığıdır. Risk ölçümü; bankalar ve finansal kuruluşların temel risk yönetim faaliyetidir. Kredi riski ölçümünde iki önemli teknik vardır: Kredi notlaması (Scoring) — istatistiksel modellerle hızlı, otomatik puanlama (perakende kredilerde yaygın); Kredi derecelendirmesi (Rating) — uzman görüşü + kantitatif analiz birleşimi (kurumsal kredilerde). Notlama sistemleri 'validasyon' süreciyle düzenli olarak doğrulanır.",
          sections: [
            {
              heading: "Kredi Notlaması (Scoring) ve Modeller",
              icon: "shield",
              items: [
                {
                  strong: "Notlama vs Derecelendirme:",
                  text: "Notlama (scoring): istatistiksel/algoritmik, hızlı, otomatik, ucuz, perakende ve KOBİ kredilerinde yaygın; Derecelendirme (rating): uzman + analiz, derinlemesine, daha pahalı, büyük kurumsal kredilerde.",
                },
                {
                  strong: "Perakende Kredilerde Notlama:",
                  text: "Bireysel kredi başvurularında; demografik (yaş, gelir, meslek), kredi geçmişi (KKB sicili), banka ilişkisi (mevcut hesaplar) gibi değişkenler puanlanır; toplam puan onay/red kararını verir.",
                },
                {
                  strong: "İşletme Kredilerinde Kantitatif Modeller:",
                  text: "Altman Z-Skor (1968): finansal oranlardan iflas tahmini; Z = 1.2X1 + 1.4X2 + 3.3X3 + 0.6X4 + 1.0X5; Z<1.81 yüksek risk, Z>2.99 düşük risk.",
                },
                {
                  strong: "Modern İstatistiksel Modeller:",
                  text: "Logistik regresyon (en yaygın), diskriminant analizi (Altman'ın kullandığı), karar ağaçları (decision trees), yapay sinir ağları (neural networks), random forest, XGBoost gibi makine öğrenmesi modelleri.",
                },
                {
                  strong: "Hibrit Modeller:",
                  text: "Birden fazla yöntemi (uzman + istatistik + makine öğrenmesi) birleştiren modeller — modern kredi notlamada yaygın; her yöntemin güçlü yanından yararlanır.",
                },
              ],
            },
            {
              heading: "Validasyon ve Not Çizelgeleri (Scorecards)",
              icon: "trend",
              items: [
                {
                  strong: "Validasyon Süreci:",
                  text: "Notlama modellerinin geçerliliğinin düzenli olarak (en az yıllık) test edilmesidir; modelin gerçek performansının (temerrüt tahmini) ölçülmesi ve gerekirse modelin yeniden kalibrasyonudur.",
                },
                {
                  strong: "Validasyon Yöntemleri:",
                  text: "Diskriminasyon (ayırt etme gücü) analizi — iyi/kötü krediler arasında fark; Kalibrasyon — tahmin edilen olasılıkların gerçekleşene yakınlığı; Stabilite — modelin zaman içinde tutarlılığı.",
                },
                {
                  strong: "Gini Katsayısı ve ROC Eğrisi:",
                  text: "Modelin diskriminasyon gücünü ölçen istatistik metriklerdir; Gini 0-1 arası (1 mükemmel), ROC eğrisinin altındaki alan (AUC) 0.5-1 arası (0.5 rastgele, 1 mükemmel).",
                },
                {
                  strong: "Not Çizelgesi (Scorecard) Türleri:",
                  text: "Şirket büyüklüğüne göre (kurumsal-ticari-KOBİ-mikro) ayrı çizelgeler; başvuru çizelgesi (yeni başvuru) vs ödeme davranışı çizelgesi (mevcut müşteri).",
                },
                {
                  strong: "Jenerik vs Özelleştirilmiş Modeller:",
                  text: "Jenerik modeller — geniş veri kümesi üzerinde geliştirilen, çok bankada kullanılan modeller (örn. FICO score); Özelleştirilmiş modeller — bankanın kendi müşteri datasına göre geliştirilmiş, daha doğru ama yüksek maliyet.",
                },
              ],
            },
          ],
          tip: "Notlama (scoring) = bireysel/perakende, otomatik. Derecelendirme (rating) = kurumsal, uzman görüşü dahil. Altman Z-Skor klasik iflas tahmin modeli — Z<1.81 tehlikeli. Validasyon = modelin doğruluğunun düzenli kontrolü. Gini ve AUC = ayırt etme gücü metrikleri. Logistic regresyon en yaygın istatistik model.",
        },
        questions: [
          {
            text: "Kredi notlaması (scoring) ile kredi derecelendirmesi (rating) arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki kavram aynıdır." },
              { id: "B", text: "Notlama: istatistiksel/algoritmik, hızlı, otomatik, ucuz, perakende ve KOBİ kredilerinde yaygın; Derecelendirme: uzman görüşü + kantitatif analiz birleşimi, derinlemesine, daha pahalı, büyük kurumsal kredilerde uygulanır." },
              { id: "C", text: "Notlama yalnızca bankalar, derecelendirme yalnızca devletler için kullanılır." },
              { id: "D", text: "Notlama yalnızca otomatik, derecelendirme yalnızca manuel yapılır; ikisi de bireysel kredilerde kullanılır." },
            ],
            correct: "B",
            explanation:
              "Kredi notlaması (Credit Scoring) ve kredi derecelendirmesi (Credit Rating); kredi riski ölçümünde kullanılan iki farklı yaklaşımdır. (1) Notlama — bireysel veya KOBİ kredi başvurularında istatistiksel modeller veya makine öğrenmesi algoritmalarıyla otomatik puanlama yapan sistemdir. Hızlı, otomatik, ucuz, ölçeklenebilir; binlerce başvuru kısa sürede değerlendirilebilir. Tipik örnek: bireysel ihtiyaç kredisi başvurusu, kredi kartı başvurusu. (2) Derecelendirme — büyük kurumsal kredilerde, tahvil ihracında veya devlet borçlanmasında kullanılır. Kantitatif analiz (mali tablolar, oranlar) ile birlikte uzman değerlendirmesi (sektör analizi, yönetim kalitesi, makro ortam) yapılır. Daha derinlemesine, daha pahalı; bir derecelendirme süreci aylar alabilir. S&P, Moody's, Fitch gibi büyük kuruluşlar bu hizmeti verir.",
          },
          {
            text: "Altman Z-Skor modeli için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Z-Skor 0-100 arasında ölçeklenir." },
              { id: "B", text: "Edward Altman'ın 1968'de geliştirdiği, finansal oranlardan iflas tahmini yapan klasik modeldir; Z = 1.2X1 + 1.4X2 + 3.3X3 + 0.6X4 + 1.0X5 formülüyle hesaplanır; Z<1.81 yüksek iflas riski, Z>2.99 düşük risk olarak yorumlanır." },
              { id: "C", text: "Yalnızca Türk şirketleri için geçerlidir." },
              { id: "D", text: "Altman Z-Skor modeli yalnızca makine öğrenmesi algoritmasıdır." },
            ],
            correct: "B",
            explanation:
              "Altman Z-Skor; New York Üniversitesi profesörü Edward Altman'ın 1968 yılında diskriminant analizi kullanarak geliştirdiği klasik iflas tahmin modelidir. Formül: Z = 1.2(İşletme Sermayesi/Toplam Aktifler) + 1.4(Dağıtılmamış Kâr/Toplam Aktifler) + 3.3(FVÖK/Toplam Aktifler) + 0.6(Hisselerin Piyasa Değeri/Toplam Borçlar) + 1.0(Satışlar/Toplam Aktifler). Yorumlama: Z < 1.81 — 'Distress Zone', yüksek iflas riski; 1.81 < Z < 2.99 — 'Gray Zone', belirsizlik; Z > 2.99 — 'Safe Zone', düşük risk. Halka açık imalat şirketleri için geliştirilmiştir; sonradan farklı varyantları yapılmıştır (Z' özel sektör için, Z'' hizmet/yabancı şirketler için). Hâlâ kredi analizinde başlangıç noktası olarak kullanılır.",
          },
          {
            text: "Kredi notlama modellerinin 'validasyon' süreci ne anlama gelir?",
            options: [
              { id: "A", text: "Kredi başvuru formunun doldurulmasıdır." },
              { id: "B", text: "Notlama modellerinin geçerliliğinin düzenli olarak (en az yıllık) test edilmesi; modelin gerçek performansının (temerrüt tahmini) ölçülmesi ve gerekirse modelin yeniden kalibrasyonudur. Diskriminasyon, kalibrasyon ve stabilite olmak üzere üç temel boyutu vardır." },
              { id: "C", text: "Yalnızca yeni müşterilerin kayıt edilmesidir." },
              { id: "D", text: "Modelin geliştirilmesi sürecidir." },
            ],
            correct: "B",
            explanation:
              "Validasyon; kredi notlama modellerinin gerçek dünya performansının düzenli olarak test edilmesi sürecidir. BDDK ve Basel düzenlemeleri uyarınca bankalar her yıl modellerini valide etmekle yükümlüdür. Validasyonun üç temel boyutu: (1) Diskriminasyon (Discrimination) — modelin iyi ve kötü kredileri ne kadar iyi ayırt ettiğinin ölçümü; Gini katsayısı, ROC eğrisi (AUC) gibi metriklerle; (2) Kalibrasyon (Calibration) — modelin tahmin ettiği temerrüt olasılığının gerçek temerrüt oranıyla ne kadar uyumlu olduğunun ölçümü; örneğin %5 PD tahmin edilen kredilerin gerçekten %5'inin temerrüde düşmesi beklenir; (3) Stabilite (Stability) — modelin zaman içindeki tutarlılığı; hedef portföydeki değişiklikler, makro ortam değişiklikleri modelin performansını bozmamalıdır. Validasyon sonucu yetersizse model yeniden kalibre edilir veya yeniden geliştirilir.",
          },
          {
            text: "Modern kredi notlama modellerinde kullanılan istatistiksel ve makine öğrenmesi yaklaşımları arasında EN YAYGIN olan aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Lineer regresyon" },
              { id: "B", text: "Logistik regresyon — özellikle ikili sınıflandırma (default/no-default) için ideal olduğu için kredi notlamasının altın standardı kabul edilir; ayrıca diskriminant analizi, karar ağaçları, yapay sinir ağları, random forest, XGBoost gibi modeller de kullanılır." },
              { id: "C", text: "Yalnızca uzman görüşü" },
              { id: "D", text: "Monte Carlo simülasyonu" },
            ],
            correct: "B",
            explanation:
              "Kredi notlamasında en yaygın kullanılan istatistiksel yöntem logistik regresyondur; bunun nedenleri: (1) Bağımlı değişken ikili (temerrüt eder mi/etmez mi — 0/1) olduğu için lineer regresyon uygun değil — logistik regresyon ideal, (2) Sonuç doğrudan olasılık (PD — Probability of Default) olarak yorumlanabilir, (3) Modelin yorumlanabilirliği yüksek — her değişkenin etkisi katsayılarla anlaşılır, (4) Düzenleyici otoriteler (BDDK, ECB) tarafından kabul gören klasik yöntemdir. Diğer yaygın yöntemler: (a) Diskriminant Analizi — Altman Z-Skor'da kullanılır, (b) Karar Ağaçları (Decision Trees) — kolay yorumlanır, (c) Yapay Sinir Ağları (Neural Networks) — yüksek doğruluk ama yorumlanması zor (black box), (d) Random Forest, XGBoost — modern ensemble yöntemler. Hibrit modeller (logistik regresyon + ağaç tabanlı) son yıllarda yaygınlaşmaktadır.",
          },
          {
            text: "Not çizelgesi (scorecard) türleri için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca tek bir tür not çizelgesi vardır." },
              { id: "B", text: "Şirket büyüklüğüne göre (kurumsal-ticari-KOBİ-mikro) ayrı çizelgeler ve başvuru çizelgesi (yeni başvuru için) ile ödeme davranışı çizelgesi (mevcut müşterinin davranış geçmişi için) gibi farklı türler kullanılır." },
              { id: "C", text: "Tüm bankalar aynı çizelgeyi kullanır." },
              { id: "D", text: "Not çizelgesi yasaktır." },
            ],
            correct: "B",
            explanation:
              "Not çizelgeleri (scorecards), banka kredi notlama sistemlerinin çıktısıdır ve farklı segmentler için ayrı geliştirilir. Üç temel sınıflandırma vardır: (1) Şirket Büyüklüğüne Göre — Kurumsal scorecard (büyük şirketler), Ticari scorecard (orta ölçekli), KOBİ scorecard (küçük işletmeler), Mikro scorecard (çok küçük işletmeler). Her segmentin risk dinamikleri farklıdır; aynı modelin tüm segmentlerde kullanımı doğru sonuç vermez. (2) Faaliyet/Sektör Bazlı — bazı bankalar inşaat, tarım, ihracat, perakende sektörlerine özgü scorecard geliştirir. (3) Başvuru vs Davranış Scorecard — Başvuru scorecard'ı (Application scorecard) — yeni başvuru sahibi için demografi, gelir, kredi geçmişi gibi değişkenleri kullanır; Davranış scorecard'ı (Behavioral scorecard) — mevcut müşterinin son 6-12 aylık ödeme davranışı, bakiye değişimi, kullanım oranları gibi davranışsal verileri kullanır, daha güçlü tahminler verir.",
          },
        ],
      },
      // ──────────── Ders 3: Finansal Analiz ve Erken Uyarı Sinyalleri ────────────
      {
        id: "m1017-l3",
        title: "Kredi Analizi için Finansal Analiz ve Erken Uyarı Sinyalleri",
        duration: "9 dk",
        summary: {
          title: "Kredi Analizinde Finansal Analiz",
          intro:
            "Finansal analiz; kredi derecelendirme ve kredi karar sürecinin temelidir. Bilanço, gelir tablosu ve nakit akış tablosu üzerinden oran analizi, dikey-yatay analiz ve nakit akış analizi yapılır. Kredi analisti yalnızca tarihsel verilere değil, finansal tabloların güvenilirliğine (makyajlama riski) ve geleceğe yönelik 'erken uyarı sinyalleri'ne de odaklanır. Bilanço, gelir tablosu ve nakit akış tablosunun her birinde kredi riskini önceden gösteren spesifik sinyaller bulunur.",
          sections: [
            {
              heading: "Finansal Tablo Analizi ve Oranlar",
              icon: "shield",
              items: [
                {
                  strong: "Likidite Oranları:",
                  text: "Cari Oran (Dönen Varlık/KVYK), Asit-Test (Likidite Oranı), Nakit Oranı; kısa vadeli yükümlülükleri karşılama gücünü ölçer; bankalar için kritik oranlardır.",
                },
                {
                  strong: "Borçluluk ve Faiz Karşılama Oranları:",
                  text: "Borç/Özsermaye Oranı, Borç/Toplam Aktif (kaldıraç), Faiz Karşılama Oranı (FVÖK/Faiz Giderleri); şirketin borç yükünü ve faiz ödeme kapasitesini gösterir.",
                },
                {
                  strong: "Kârlılık Oranları:",
                  text: "Brüt Kâr Marjı, Net Kâr Marjı, Aktif Kârlılığı (ROA), Özsermaye Kârlılığı (ROE); şirketin operasyonel ve finansal performansını ölçer.",
                },
                {
                  strong: "Faaliyet Oranları:",
                  text: "Stok Devir Hızı, Alacak Devir Hızı, Aktif Devir Hızı, Nakit Dönüşüm Süresi; işletme sermayesi yönetiminin etkinliğini ölçer.",
                },
                {
                  strong: "Nakit Akış Oranları:",
                  text: "Faaliyet Nakit Akışı/Net Kâr (kalite), Faaliyet Nakit Akışı/Toplam Borç (geri ödeme kapasitesi), Faaliyet Nakit Akışı/Faiz Giderleri (faiz karşılama); kredibilite analizinde kritik.",
                },
              ],
            },
            {
              heading: "Finansal Tablo Makyajlamaları ve Erken Uyarı",
              icon: "trend",
              items: [
                {
                  strong: "Finansal Tablo Makyajlama Yöntemleri:",
                  text: "Hasılat tanımayı erkenden yapma (channel stuffing), giderleri aktifleştirme, stokları abartma (write-off ertelemesi), karşılık ayırmama, gizli borçlanmalar, özel amaçlı kuruluşlar (SPE).",
                },
                {
                  strong: "Bilançoya İlişkin Erken Uyarı Sinyalleri:",
                  text: "Stoklarda ani büyüme, alacaklarda yüksek artış (özellikle 'ilişkili taraflar'), kısa vadeli borçlarda artış, nakit pozisyonunda hızlı erime, 'diğer aktif/pasifler'de açıklanmamış kalemlerde büyüme.",
                },
                {
                  strong: "Gelir Tablosuna İlişkin Erken Uyarı Sinyalleri:",
                  text: "Hasılat artışına paralel kâr artışı görmemek, 'diğer faaliyet gelirleri'nin payının artması, tek seferlik gelirlerin artması, finansman giderlerinde aşırı artış, brüt kâr marjının düşmesi.",
                },
                {
                  strong: "Nakit Akış Tablosuna İlişkin Erken Uyarı Sinyalleri:",
                  text: "Faaliyet nakit akışının net kâra göre düşük kalması ('quality of earnings'), sürekli negatif faaliyet nakit akışı, finansman faaliyetlerinden sürekli nakit girişi (yeni borç), yatırım faaliyetlerinde sürekli yüksek harcama.",
                },
                {
                  strong: "Kalitatif Erken Uyarılar:",
                  text: "Kıdemli yöneticilerin/finans direktörünün ardı ardına ayrılması, denetçi değişikliği (özellikle anlaşmazlık sonucu), düzenleyici otoritelerden inceleme veya ceza, basın haberleri, ana müşteri/tedarikçi kayıpları.",
                },
              ],
            },
          ],
          tip: "Kredi analizinin temeli: 4 oran kategorisi (likidite, borçluluk, kârlılık, faaliyet) + nakit akış. 'Quality of Earnings' = net kârın gerçekten nakde dönüşmesi. Erken uyarı sinyalleri 3 tabloya göre ayrı düşünülür. Stokta/alacakta ani büyüme klasik kırmızı bayrak. Denetçi değişikliği + finans direktörü ayrılması = ciddi sinyal.",
        },
        questions: [
          {
            text: "Faiz Karşılama Oranı (FVÖK/Faiz Giderleri) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Şirketin nakit pozisyonunu gösterir." },
              { id: "B", text: "Şirketin operasyonlarından elde ettiği FVÖK'ün faiz giderlerini ne kadar karşıladığını ölçer; oran ne kadar yüksekse şirketin faiz ödeme kapasitesi o kadar güçlüdür; kredi analizinde temel borç servis kapasitesi göstergesidir." },
              { id: "C", text: "Yalnızca bankaların kullandığı bir orandır." },
              { id: "D", text: "Şirketin pazar değerini gösterir." },
            ],
            correct: "B",
            explanation:
              "Faiz Karşılama Oranı (Interest Coverage Ratio); kredi analizinin temel metriklerinden biridir. Formül: Faiz Karşılama Oranı = FVÖK (Faiz ve Vergi Öncesi Kâr) / Faiz Giderleri. FVÖK kullanılması önemlidir çünkü faiz, vergiden önce ödenir; bu oran şirketin faiz yükümlülüklerini karşılamak için ne kadar 'ekstra' kâr ürettiğini gösterir. Yorumlama eşikleri: oran > 5 — çok güçlü borç servisi kapasitesi; 3 < oran < 5 — yeterli; 1.5 < oran < 3 — sınırda, dikkat edilmeli; oran < 1.5 — yetersiz, ciddi risk; oran < 1 — şirket faiz giderlerini bile karşılayamıyor, akut tehlike. Kredi sözleşmelerinde 'covenant' (kuvenant) olarak sıkça yer alır: borçlu belirli bir minimum faiz karşılama oranını korumakla yükümlü olabilir, aksi halde kredi geri çağrılabilir.",
          },
          {
            text: "Şirketin nakit akış tablosunda 'sürekli negatif faaliyet nakit akışı' kredi analizi açısından nasıl yorumlanır?",
            options: [
              { id: "A", text: "Pozitif bir gelişme, şirket büyüyor demektir." },
              { id: "B", text: "Erken uyarı sinyalidir; şirketin asıl operasyonlarından nakit üretemediğini gösterir, finansman ihtiyacı sürekli kaynak gerektirecek demektir; kredi riskinin ciddi şekilde artışına işaret edebilir." },
              { id: "C", text: "Yalnızca yeni kurulan şirketler için normaldir." },
              { id: "D", text: "Kredi analizinde dikkate alınmaz." },
            ],
            correct: "B",
            explanation:
              "Sürekli negatif faaliyet nakit akışı (operating cash flow); kredi analizinde en ciddi erken uyarı sinyallerinden biridir. Bunun anlamı: şirket asıl operasyonel faaliyetlerinden (mal/hizmet satışı) nakit üretemiyor; varlığını sürdürmek için sürekli olarak ya yeni borç almak (finansman faaliyeti) ya da varlık satmak (yatırım faaliyeti) zorunda. Bu durum sürdürülebilir değildir. Önemli istisnalar: (1) Yeni Kurulan Şirketler — başlangıç dönemlerinde yatırım yoğunluğu nedeniyle negatif faaliyet nakit akışı normal olabilir, (2) Hızlı Büyüyen Şirketler — işletme sermayesi ihtiyacı geçici olarak nakit emer, ancak orta vadede pozitife dönmesi beklenir. Eğer olgun bir şirketin sürekli negatif faaliyet nakit akışı varsa, bu büyük olasılıkla 'gizli sorun' işaretidir; Enron skandalı (2001) öncesinde de Enron'un faaliyet nakit akışı net kârının çok altındaydı.",
          },
          {
            text: "Finansal tablo makyajlama yöntemleri arasında aşağıdakilerden hangisi YER ALMAZ?",
            options: [
              { id: "A", text: "Hasılat tanımayı erkenden yapma (channel stuffing)" },
              { id: "B", text: "Giderleri aktifleştirme (giderleri uzun vadeli varlık olarak kaydetme)" },
              { id: "C", text: "Karşılık ayırmama (şüpheli alacak, garanti vb. için)" },
              { id: "D", text: "Yıl sonu fiili envanter sayımının yapılması" },
            ],
            correct: "D",
            explanation:
              "Yıl sonu fiili envanter sayımı; muhasebenin TEMEL ve ZORUNLU bir prosedürüdür, makyajlama yöntemi değildir; aksine, makyajlamayı önleyen bir kontroldür. Finansal tablo makyajlama (window dressing / earnings management) yöntemleri ise şunlardır: (1) Channel Stuffing — yıl sonu satışları zorla artırma (müşterilere fazla mal gönderme), gelecek yıl iadelerin gelmesi pahasına, (2) Giderleri Aktifleştirme — gider olması gereken kalemleri (örn. araştırma giderleri) varlık olarak kaydetme, kâr abartma (Worldcom skandalı 2002 — telekom giderleri varlık olarak kaydedildi), (3) Stokları Abartma — eski/satılamayan stokları write-off etmeyi geciktirme, (4) Karşılık Ayırmama — şüpheli alacaklar, garanti karşılıkları gibi gelecekteki yükümlülükleri kaydetmeme, (5) Gizli Borçlanmalar — özel amaçlı kuruluşlar (SPE) ile borçları bilanço dışında tutma (Enron 2001), (6) İlişkili Taraf İşlemleri — grup şirketleri arası uydurma satışlar.",
          },
          {
            text: "'Quality of Earnings' (Kazançların Kalitesi) kavramı kredi analizinde nasıl değerlendirilir?",
            options: [
              { id: "A", text: "Yalnızca net kâr büyüklüğüne bakılır." },
              { id: "B", text: "Net kârın faaliyet nakit akışıyla karşılaştırılması yapılır; faaliyet nakit akışı/net kâr oranı 1'e yakın veya üstüyse kazançlar yüksek kaliteli (gerçek nakde dönüyor); 1'in altındaysa kazanç kalitesi düşüktür (muhasebe işlemleriyle abartılmış olabilir)." },
              { id: "C", text: "Yalnızca brüt kâr marjına bakılır." },
              { id: "D", text: "Kazançların kalitesi yalnızca yatırım fonları için önemlidir." },
            ],
            correct: "B",
            explanation:
              "'Quality of Earnings' (Kazançların Kalitesi); kredi ve hisse senedi analizinin temel kavramlarından biridir. Temel mantık: muhasebe kuralları gereği net kâr çeşitli tahminleri (amortisman, karşılıklar, gelir tanıma) içerir; bu nedenle 'kağıt üstündeki' kâr ile gerçekten nakde dönen kâr farklı olabilir. Quality of Earnings analizi: Faaliyet Nakit Akışı / Net Kâr oranı incelenir. Yorumlama: (1) Oran > 1 — kazançlar yüksek kaliteli, gerçekten nakde dönüyor, hatta amortisman gibi nakitsiz giderleri de kapsıyor, (2) Oran ≈ 1 — kabul edilebilir kalite, (3) Oran < 1 — kazanç kalitesi düşük; muhasebe karı raporlanıyor ama nakit gelmiyor, makyajlama olabilir, (4) Sürekli düşük oran — ciddi kırmızı bayrak. Birçok başarısız şirket (Enron, Worldcom) iflastan önce yüksek net kâr açıklarken, faaliyet nakit akışları çok daha düşüktü.",
          },
          {
            text: "Aşağıdakilerden hangisi şirkette ciddi finansal sorun başladığına işaret eden 'kalitatif erken uyarı sinyalidir'?",
            options: [
              { id: "A", text: "Şirketin yeni ürün lansmanı" },
              { id: "B", text: "Kıdemli yöneticilerin/finans direktörünün ardı ardına ayrılması, denetçi değişikliği (özellikle anlaşmazlık sonucu), düzenleyici otoriteden inceleme/ceza, ana müşteri veya tedarikçi kayıpları." },
              { id: "C", text: "Şirketin yeni şube açması" },
              { id: "D", text: "Şirketin reklam harcamalarını artırması" },
            ],
            correct: "B",
            explanation:
              "Kalitatif erken uyarı sinyalleri; finansal tablolarda görünmeyen ama kredi riskinin arttığını gösteren işaretlerdir. Profesyonel kredi analistleri sayısal verilerin yanı sıra bu sinyalleri de yakından takip eder: (1) Kıdemli Yönetici Kayıpları — özellikle CFO (finans direktörü), denetçi veya kontrol/iç denetim başkanlarının ani ayrılması ciddi bir sinyaldir; bu kişiler şirket içindeki sorunları ilk gören kişilerdir, (2) Denetçi Değişikliği — özellikle 'anlaşmazlık' veya 'ücret farkı' gerekçeli denetçi değişiklikleri tehlike işaretidir; denetçinin sorunlu hesapları onaylamaması olası, (3) Düzenleyici İncelemeler — SPK, BDDK, Maliye gibi otoritelerden incelemeler, idari soruşturmalar, cezalar yapısal sorunlara işaret edebilir, (4) Müşteri/Tedarikçi Kayıpları — ana müşteri kayıpları gelir kaybına, ana tedarikçi sorunları üretim aksamasına yol açar, (5) Hukuki Davaları — büyük tazminat davaları gelecekteki yükümlülük yaratır, (6) Basın Haberleri — finansal sıkıntı, yönetim skandalı, etik sorunlar.",
          },
        ],
      },
      // ──────────── Ders 4: Kredi Derecelendirme Kuruluşları ve Metodolojileri ────────────
      {
        id: "m1017-l4",
        title: "Kredi Derecelendirme Kuruluşları ve Rating Metodolojileri",
        duration: "10 dk",
        summary: {
          title: "Kredi Derecelendirme Kuruluşları ve Metodolojileri",
          intro:
            "Küresel kredi derecelendirme piyasasına 'Big Three' (Üç Büyükler) hakimdir: Standard & Poor's (S&P), Moody's ve Fitch — bu üç kuruluş dünya pazarının yaklaşık %95'ini kontrol eder. Türkiye'de yerli kuruluşlar (JCR Avrasya, SAHA, Turkrating) yer alır. Rating metodolojileri; iş riski analizi (sektör, rekabet, yönetim) ile finansal risk analizini (oranlar, kaldıraç, nakit akışı) birleştiren çok boyutlu bir süreçtir. Banka ratingleri ise kendine özgü çerçevelere (CAMELS, BFS) sahiptir.",
          sections: [
            {
              heading: "Derecelendirme Kuruluşları",
              icon: "shield",
              items: [
                {
                  strong: "Big Three (Üç Büyükler):",
                  text: "Standard & Poor's (1860, ABD) — pazarın %40'ı; Moody's (1909, ABD) — pazarın %40'ı; Fitch (1924, ABD/UK) — pazarın %15'i; bu üç kuruluş pazarın yaklaşık %95'ini kontrol eder.",
                },
                {
                  strong: "Sembol Sistemleri:",
                  text: "S&P ve Fitch: AAA, AA+, AA, AA-, A+, A, A-, BBB+, BBB, BBB-, BB+, BB, BB-, B+, B, B-, CCC, CC, C, D; Moody's: Aaa, Aa1-Aa3, A1-A3, Baa1-Baa3, Ba1-Ba3, B1-B3, Caa, Ca, C, D.",
                },
                {
                  strong: "Türkiye'deki Yerli Kuruluşlar:",
                  text: "JCR Avrasya Derecelendirme A.Ş. (JCR'nin Türkiye iştiraki), SAHA Kurumsal Yönetim ve Kredi Derecelendirme Hizmetleri A.Ş., Turkrating İstanbul Uluslararası Derecelendirme Hizmetleri A.Ş.",
                },
                {
                  strong: "Outlook ve Watch:",
                  text: "Outlook (görünüm) — orta vadeli (6 ay-2 yıl) potansiyel rating yönü: Pozitif/Stabil/Negatif/Gelişmekte; Watch (izleme) — kısa vadeli (90 gün) potansiyel değişiklik: Pozitif/Negatif/Gelişmekte.",
                },
                {
                  strong: "Ücretlendirme:",
                  text: "Issuer-pays modeli en yaygındır — borçlu öder; subscription modeli ise yatırımcılardan abonelik ücreti alınır (daha az yaygın); abonelik modeli çıkar çatışmasını azaltır.",
                },
              ],
            },
            {
              heading: "Rating Metodolojileri",
              icon: "trend",
              items: [
                {
                  strong: "Şirket Rating Çerçevesi (S&P örneği):",
                  text: "İş Riski Profili (sektör risk + rekabet pozisyonu) + Finansal Risk Profili (kaldıraç + nakit akışı) → Anchor Rating → Modifierlerle ayarlanır (likidite, yönetim, finansal politika) → Stand-alone Credit Profile.",
                },
                {
                  strong: "Sektör Risk Analizi:",
                  text: "Sektörün makro risklerini değerlendirir; konjonktürel duyarlılık, rekabet yoğunluğu, regülasyon, teknolojik değişim, giriş engelleri, müşteri konsantrasyonu gibi faktörler analiz edilir.",
                },
                {
                  strong: "Finansal Risk Analizi:",
                  text: "Anahtar oranlar: Borç/FAVÖK, Net Borç/Özsermaye, Faiz Karşılama Oranı, Faaliyet Nakit Akışı/Borç, FAVÖK Marjı; benchmark karşılaştırması yapılır.",
                },
                {
                  strong: "Banka Ratingleri:",
                  text: "Banka ratingleri özel çerçeveye sahiptir: BFS (Bank Financial Strength) ratings — Moody's'in banka temel sağlamlığı ratingi; CAMELS — düzenleyici otoritelerin kullandığı çerçeve (Capital, Assets, Management, Earnings, Liquidity, Sensitivity).",
                },
                {
                  strong: "Yapılandırılmış Finansal Araçlar:",
                  text: "ABS (Asset-Backed Securities), MBS (Mortgage-Backed Securities), CDO (Collateralized Debt Obligations) gibi araçların ratingi farklı metodoloji gerektirir; portföy bazlı analiz, korelasyon, kayıp dağılımı simülasyonu kullanılır.",
                },
              ],
            },
          ],
          tip: "Big Three: S&P (40%), Moody's (40%), Fitch (15%) = küresel pazarın %95'i. S&P/Fitch 'AAA-D', Moody's 'Aaa-C' sembol sistemi. Outlook orta vade, Watch kısa vade. Rating = İş Riski + Finansal Risk → Anchor → Modifierler. Banka ratingi farklı çerçeve (CAMELS). 2008 krizinden sonra yapılandırılmış araç ratingi sıkı denetime alındı.",
        },
        questions: [
          {
            text: "Küresel kredi derecelendirme pazarına hakim olan 'Big Three' kuruluşları hangileridir?",
            options: [
              { id: "A", text: "JPMorgan, Goldman Sachs, Morgan Stanley" },
              { id: "B", text: "Standard & Poor's (S&P), Moody's ve Fitch — bu üç kuruluş dünya kredi derecelendirme pazarının yaklaşık %95'ini kontrol eder; S&P ve Moody's yaklaşık %40'ar paya, Fitch ise %15 paya sahiptir." },
              { id: "C", text: "Bloomberg, Reuters, FactSet" },
              { id: "D", text: "Deloitte, PwC, KPMG" },
            ],
            correct: "B",
            explanation:
              "'Big Three' (Üç Büyükler) küresel kredi derecelendirme pazarına hakim olan üç ABD merkezli kuruluştur: (1) Standard & Poor's (S&P) — 1860'ta kurulmuş (Henry Varnum Poor), bugün S&P Global Ratings olarak faaliyet gösterir, pazarın yaklaşık %40'ı, (2) Moody's — 1909'da John Moody tarafından kurulmuş, bugün Moody's Investors Service, pazarın yaklaşık %40'ı, (3) Fitch Ratings — 1924'te kurulmuş (John Knowles Fitch), bugün Fitch Group'un parçası, pazarın yaklaşık %15'i. Bu üç kuruluş birlikte küresel pazarın yaklaşık %95'ini kontrol ederler — bu yüksek konsantrasyon eleştiri konusudur. ABD SEC tarafından NRSRO (Nationally Recognized Statistical Rating Organization) olarak tanınmış kuruluşlardır. Goldman Sachs/JPMorgan yatırım bankaları, Bloomberg/Reuters bilgi şirketleri, Deloitte/PwC denetim şirketleridir — derecelendirme yapmazlar.",
          },
          {
            text: "S&P/Fitch ile Moody's arasındaki rating sembol sistemi farklılığı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İki kuruluş tamamen aynı sembolleri kullanır." },
              { id: "B", text: "S&P ve Fitch: AAA, AA+, AA, AA-, A+, A, A-, BBB+, BBB, BBB-, BB+, BB, BB-, B+, B, B-, CCC, CC, C, D; Moody's: Aaa, Aa1, Aa2, Aa3, A1, A2, A3, Baa1, Baa2, Baa3, Ba1, Ba2, Ba3, B1, B2, B3, Caa, Ca, C, D — küçük harf farkları ve numerik modifierlerle gösterim." },
              { id: "C", text: "S&P harfleri kullanır, Moody's sadece sayıları kullanır." },
              { id: "D", text: "İki kuruluş arasındaki fark sadece dildedir." },
            ],
            correct: "B",
            explanation:
              "S&P/Fitch ile Moody's arasında küçük fakat tutarlı farklar vardır: (1) Büyük harf kullanımı — S&P ve Fitch tüm rating sembollerinde büyük harf kullanır (AAA, BBB), Moody's ise ilk harf büyük diğerleri küçük (Aaa, Baa); (2) Notch (alt seviye) gösterimi — S&P/Fitch '+' ve '-' işaretleri kullanır (AA+, AA, AA-), Moody's ise sayısal modifier kullanır (Aa1, Aa2, Aa3 — burada 1 en yüksek, 3 en düşük); (3) Spekülatif seviye sınırı — S&P/Fitch'te BBB- (Investment Grade) ile BB+ (Speculative Grade) arasında, Moody's'te Baa3 ile Ba1 arasında. Pratik olarak: AA+ (S&P) = Aa1 (Moody's), BBB (S&P) = Baa2 (Moody's), B- (S&P) = B3 (Moody's), C (S&P) = C (Moody's). Tüm sistemlerde D (default) en alt seviyedir. Bu farklılıklar tarihsel olarak iki kuruluşun farklı geleneklerinden kaynaklanır.",
          },
          {
            text: "Rating raporlarında 'Outlook' ile 'Watch' (CreditWatch) arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki kavram aynıdır." },
              { id: "B", text: "Outlook (görünüm): orta vadeli (6 ay-2 yıl) potansiyel rating yönünü gösterir (Pozitif/Stabil/Negatif/Gelişmekte); Watch (izleme): kısa vadeli (90 gün) potansiyel değişikliği gösterir (Pozitif/Negatif/Gelişmekte) — daha acil bir durumu işaret eder." },
              { id: "C", text: "Outlook yalnızca kötü haberler için, Watch yalnızca iyi haberler için kullanılır." },
              { id: "D", text: "İkisi de aynı süreyi kapsar." },
            ],
            correct: "B",
            explanation:
              "Outlook ve Watch (CreditWatch) ratinge ek olarak verilen tamamlayıcı bilgilerdir: (1) Outlook (Görünüm) — uzun veya orta vadede (genellikle 6 ay-2 yıl) ratingin nereye doğru gidebileceğini gösterir. Türleri: Stabil (Stable) — beklenen değişiklik yok; Pozitif (Positive) — yükselme olasılığı var; Negatif (Negative) — düşme olasılığı var; Gelişmekte (Developing) — yön belirsiz, çift yönlü olabilir. Outlook değişikliği rating eylemi sayılır ancak fiili rating değişmez. (2) Watch (CreditWatch) — kısa vadede (genellikle 90 gün içinde) belirli bir olayın sonucuna bağlı olarak ratingin değişme olasılığının yüksek olduğunu gösterir. Türleri: Pozitif Watch — yükselme yüksek olasılıkta; Negatif Watch — düşme yüksek olasılıkta; Gelişmekte Watch — sonuç belirsiz. Watch genellikle bir olay tetiklenir (birleşme/satın alma açıklaması, büyük dava, regülasyon değişikliği) ve olay sonuçlandığında rating sonuçlanır.",
          },
          {
            text: "Bankaların kredi derecelendirmesinde kullanılan 'CAMELS' çerçevesi neyi temsil eder?",
            options: [
              { id: "A", text: "Türkiye'ye özgü banka denetim çerçevesi" },
              { id: "B", text: "Capital (Sermaye), Assets (Aktif Kalitesi), Management (Yönetim), Earnings (Kazançlar), Liquidity (Likidite), Sensitivity (Duyarlılık) — düzenleyici otoritelerin banka risk değerlendirmesinde kullandığı çerçeve." },
              { id: "C", text: "Yalnızca yatırım bankaları için kullanılır." },
              { id: "D", text: "Bir kredi notlama yazılımıdır." },
            ],
            correct: "B",
            explanation:
              "CAMELS; banka denetim ve risk değerlendirmesinde kullanılan uluslararası bir çerçevedir; başlangıçta CAMEL olan modele 1996'da 'S' eklenmiştir. Açılımı: (C) Capital Adequacy — sermaye yeterliliği, BIS Sermaye Yeterlilik Oranı, bankanın kayıpları absorbe etme kapasitesi; (A) Asset Quality — kredi portföyünün kalitesi, takipteki krediler oranı (NPL — Non-Performing Loans), karşılık seviyeleri; (M) Management Quality — yönetim kalitesi, kurumsal yönetim, iç kontrol, risk yönetimi sistemleri; (E) Earnings — kârlılık seviyesi ve sürdürülebilirliği, ROA, ROE, marj analizleri; (L) Liquidity — likidite seviyesi, kısa vadeli yükümlülükleri karşılama kapasitesi, LCR (Liquidity Coverage Ratio); (S) Sensitivity to Market Risk — piyasa risklerine duyarlılık, faiz oranı riski, döviz riski, kur riski. Her boyut 1 (en iyi) ile 5 (en kötü) arasında puanlanır; toplam değerlendirme 'composite rating' verir. ABD'de FFIEC, Türkiye'de BDDK kullanır.",
          },
          {
            text: "Yapılandırılmış finansal araçların (ABS, MBS, CDO) derecelendirilmesi neden klasik şirket derecelendirmesinden farklıdır?",
            options: [
              { id: "A", text: "Yapılandırılmış araçlar hiç derecelendirilmez." },
              { id: "B", text: "Yapılandırılmış araçlar birden fazla varlığın oluşturduğu havuzun menkul kıymetleştirilmesidir; bu nedenle derecelendirme metodolojisi farklıdır — portföy bazlı analiz, varlıklar arası korelasyon, kayıp dağılımı simülasyonu (Monte Carlo) ve kredi geliştirme yapıları (subordination) dikkate alınır." },
              { id: "C", text: "Yapılandırılmış araçlar her zaman AAA notu alır." },
              { id: "D", text: "Yapılandırılmış araç derecelendirmesi yalnızca subjektif yargıya dayanır." },
            ],
            correct: "B",
            explanation:
              "Yapılandırılmış finansal araçlar (Structured Finance Instruments) — ABS (Asset-Backed Securities), MBS (Mortgage-Backed Securities), CDO (Collateralized Debt Obligations) gibi — birden fazla finansal varlığın (krediler, ipotekler, alacaklar) bir havuza toplanıp menkul kıymetleştirilmesinden oluşur. Klasik şirket derecelendirmesinden farklılıkları: (1) Portföy Analizi — tek bir borçlu yerine binlerce dayanak varlık vardır; her birinin temerrüt olasılığı, kayıp oranı ayrı modellenir, (2) Varlıklar Arası Korelasyon — dayanak varlıkların aynı zamanda kötüye gitme olasılığı (korelasyon) kritik; korelasyonun küçük tahmin edilmesi 2008 krizinin temel nedenlerinden biridir, (3) Kayıp Dağılımı Simülasyonu — Monte Carlo simülasyonu ile portföyün olası kayıp dağılımı hesaplanır, (4) Kredi Geliştirme (Credit Enhancement) — Subordination (alt-üst dilim yapısı), Over-collateralization, Reserve Funds, Guarantor desteği gibi yapılarla farklı dilimler farklı ratingler alır (en üst dilim AAA, en alt dilim B veya unrated). 2008 finansal krizi yapılandırılmış araç ratinglerinin başarısız olduğu bir dönem oldu; sonrasında metodolojiler büyük ölçüde revize edildi.",
          },
        ],
      },
      // ──────────── Ders 5: Basel Sermaye Uzlaşıları ve Kredi Riski ────────────
      {
        id: "m1017-l5",
        title: "Basel I, II, III Sermaye Uzlaşıları ve Kredi Riski",
        duration: "10 dk",
        summary: {
          title: "Basel Sermaye Uzlaşıları",
          intro:
            "Basel Bankacılık Gözetim Komitesi (BCBS); G10 ülkelerinin merkez bankaları tarafından 1974'te kurulan, küresel bankacılık standartlarını belirleyen kuruluştur. Basel I (1988), Basel II (2004) ve Basel III (2010) sermaye uzlaşıları bankaların sermaye yeterliliği konusunda küresel referans çerçeveleridir. Her uzlaşı bir öncekinin eksikliklerini gidermek üzere geliştirilmiştir. 2008 finansal krizi Basel II'nin yetersizliklerini ortaya koymuş, Basel III ile sermaye yeterliliği önemli ölçüde sıkılaştırılmıştır.",
          sections: [
            {
              heading: "Basel I ve Basel II",
              icon: "shield",
              items: [
                {
                  strong: "Basel I (1988):",
                  text: "İlk uluslararası sermaye yeterliliği standardıdır; bankalar risk ağırlıklı varlıklarının (RWA) en az %8'i kadar sermaye tutmalıdır; risk ağırlıkları: nakit %0, devlet tahvili %0, ipotekli krediler %50, kurumsal krediler %100.",
                },
                {
                  strong: "Basel I'in Eksiklikleri:",
                  text: "Basit risk ağırlıkları — kredi kalitesi farklılıkları yansıtılmaz (BBB ve CCC kurumsal kredinin risk ağırlığı aynı); operasyonel risk ve piyasa riski yetersiz ele alınır; menkul kıymetleştirmeyi destekler (sermaye arbitrajı).",
                },
                {
                  strong: "Basel II (2004) — 3 Sütun:",
                  text: "Sütun 1 (Asgari Sermaye Yükümlülükleri): kredi, piyasa, operasyonel risk için sermaye; Sütun 2 (Denetim Süreci): denetçilerin değerlendirmesi; Sütun 3 (Piyasa Disiplini): kamuya açıklama yükümlülükleri.",
                },
                {
                  strong: "Basel II Kredi Riski Yaklaşımları:",
                  text: "Standart Yaklaşım — dış kredi derecelendirme kuruluşu (ECAI) ratinglerine göre risk ağırlıkları; İçsel Derecelendirme (IRB) — bankalar kendi modellerini kullanır (Foundation IRB ve Advanced IRB).",
                },
                {
                  strong: "PD, LGD, EAD, M:",
                  text: "IRB yaklaşımının dört temel parametresi: PD (Probability of Default — temerrüt olasılığı), LGD (Loss Given Default — temerrüt halinde kayıp oranı), EAD (Exposure at Default — temerrüt anındaki risk tutarı), M (Maturity — vade).",
                },
              ],
            },
            {
              heading: "Basel II.5, Basel III ve 2008 Krizi Sonrası",
              icon: "trend",
              items: [
                {
                  strong: "2008 Finansal Krizi ve Basel'in Yetersizlikleri:",
                  text: "Krizde bankaların yetersiz sermayeli, aşırı kaldıraçlı ve yetersiz likiditeye sahip olduğu görüldü; ayrıca yapılandırılmış araç ratinglerinin güvenilmez olduğu ortaya çıktı.",
                },
                {
                  strong: "Basel II.5 (2009):",
                  text: "Krize ilk acil yanıt; piyasa riski sermaye gereksinimleri artırıldı, menkul kıymetleştirme pozisyonları için sermaye arttırıldı, stresli VaR (sVaR) kullanılmaya başlandı.",
                },
                {
                  strong: "Basel III (2010-2019 kademeli yürürlük):",
                  text: "Sermaye yeterliliği sıkılaştırıldı; CET1 (Common Equity Tier 1) en az %4.5 (önceki %2'den), Toplam Sermaye %8 + %2.5 sermaye koruma tamponu = %10.5; sistem önemli bankalar için ek tamponlar; konjonktürel tampon (countercyclical buffer).",
                },
                {
                  strong: "Yeni Basel III Düzenlemeleri:",
                  text: "Kaldıraç oranı (Leverage Ratio) en az %3; Likidite Karşılama Oranı (LCR) %100 — 30 günlük stres senaryosu; Net İstikrarlı Fonlama Oranı (NSFR) — 1 yıllık fonlama; sistemik önemli kuruluşlar için ek tampon (G-SIB, D-SIB).",
                },
                {
                  strong: "Türkiye'de Uygulama:",
                  text: "BDDK, Türk bankacılık sektörünün Basel standartlarına uyumunu sağlar; Türkiye genel olarak Basel III standartlarını uygular; sektör sermaye yeterlilik oranı %8'in oldukça üzerindedir.",
                },
              ],
            },
          ],
          tip: "Basel I = sermaye/RWA ≥ %8 (basit). Basel II = 3 sütun + IRB modeller (PD, LGD, EAD, M). Basel II.5 = krize acil yanıt. Basel III = sıkılaştırma — CET1 %4.5, %2.5 tampon, kaldıraç %3, LCR %100, NSFR. Türkiye BDDK Basel III uygular. 2008 krizi Basel II'nin zayıflığını gösterdi.",
        },
        questions: [
          {
            text: "Basel I sermaye uzlaşısı kapsamında bankaların minimum sermaye yeterliliği oranı kaçtır?",
            options: [
              { id: "A", text: "%4" },
              { id: "B", text: "Risk Ağırlıklı Varlıkların (RWA) en az %8'i — bankalar kredi, yatırım ve diğer riskli varlıklarına karşılık en az bu oranda sermaye tutmakla yükümlüdür; bu oran 1988'den beri uluslararası standart olarak korunmaktadır." },
              { id: "C", text: "%12" },
              { id: "D", text: "%20" },
            ],
            correct: "B",
            explanation:
              "Basel I (1988); bankaların minimum sermaye yeterliliğini belirleyen ilk uluslararası standarttır ve bugün hâlâ temel taşı kabul edilir. Temel kural: Sermaye / Risk Ağırlıklı Varlıklar (RWA) ≥ %8. Risk ağırlıkları (Basel I): %0 — Nakit, OECD ülkelerinin devlet tahvilleri; %20 — OECD ülkelerinin bankalarına olan alacaklar; %50 — İpotekli konut kredileri; %100 — Kurumsal krediler, OECD dışı ülkelere alacaklar. Örneğin bir banka 100 milyon TL ipotekli kredi (%50 risk ağırlıklı) verdiğinde, RWA = 50 milyon TL olur ve buna karşılık 50 × %8 = 4 milyon TL sermaye tutmalıdır. Basel II ve III bu temel oranı değiştirmedi (%8 koruundu) ancak ek tamponlar getirdi (sermaye koruma tamponu, konjonktürel tampon, sistemik önem tamponu) — toplam yükümlülük %10.5-%13 seviyesine çıkmıştır.",
          },
          {
            text: "Basel II sermaye uzlaşısının 'Üç Sütun' yapısı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Üç farklı sermaye türü vardır." },
              { id: "B", text: "Sütun 1 (Asgari Sermaye Yükümlülükleri — kredi, piyasa, operasyonel risk için sermaye); Sütun 2 (Denetim Süreci — denetçilerin değerlendirmesi); Sütun 3 (Piyasa Disiplini — kamuya açıklama yükümlülükleri)." },
              { id: "C", text: "Üç farklı banka türü vardır." },
              { id: "D", text: "Üç ayrı düzenleyici otorite vardır." },
            ],
            correct: "B",
            explanation:
              "Basel II (2004) yenilikçi bir yaklaşım olarak Üç Sütun (Three Pillars) yapısı getirmiştir: (1) Sütun 1 — Asgari Sermaye Yükümlülükleri (Minimum Capital Requirements): Kredi riski, piyasa riski ve operasyonel risk için sayısal sermaye gereksinimleri belirlenir; bankalar Standart Yaklaşım veya İçsel Derecelendirme (IRB) yöntemleriyle sermaye hesaplar. (2) Sütun 2 — Denetim Süreci (Supervisory Review): Düzenleyici otoritelerin (BDDK, ECB, Fed) bankaları değerlendirme sürecidir; banka risk yönetiminin yeterliliği, ek sermaye ihtiyaçları (Pillar 2 add-ons), stres testi süreçleri denetlenir. ICAAP (Internal Capital Adequacy Assessment Process) bankanın kendi değerlendirmesi, SREP (Supervisory Review and Evaluation Process) denetçinin değerlendirmesidir. (3) Sütun 3 — Piyasa Disiplini (Market Discipline): Bankaların risk pozisyonları, sermaye yapısı ve risk yönetimi hakkında kamuya kapsamlı açıklama yapma yükümlülüğüdür; bu sayede yatırımcılar ve karşı taraflar bankaları değerlendirebilir, piyasa fiyatlama ile baskı oluşur.",
          },
          {
            text: "Basel II'nin İçsel Derecelendirme (IRB) yaklaşımında kullanılan dört temel parametre aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "ROA, ROE, ROI, PE" },
              { id: "B", text: "PD (Probability of Default — temerrüt olasılığı), LGD (Loss Given Default — temerrüt halinde kayıp oranı), EAD (Exposure at Default — temerrüt anındaki risk tutarı), M (Maturity — vade)" },
              { id: "C", text: "GDP, CPI, PPI, USD" },
              { id: "D", text: "AAA, BBB, CCC, D" },
            ],
            correct: "B",
            explanation:
              "Basel II İçsel Derecelendirme (Internal Ratings-Based — IRB) yaklaşımında dört temel parametre kullanılır: (1) PD (Probability of Default) — Temerrüt olasılığı: borçlunun gelecek 1 yıl içinde temerrüde düşme olasılığı; rating sınıfları için ortalama PD'ler hesaplanır (örn. AAA için %0.01, BB için %2). (2) LGD (Loss Given Default) — Temerrüt halinde kayıp oranı: temerrüt halinde toplam riske karşılık beklenen kayıp yüzdesi; teminatlar, kıdem, geri kazanım oranı dikkate alınır (örn. teminatsız krediler için %45, ipotekli kredi için %25). (3) EAD (Exposure at Default) — Temerrüt anındaki risk tutarı: temerrüt anında bankanın borçluya ne kadar maruz kalacağının tahmini; kredi limitlerinin ne kadar kullanılacağı dahil. (4) M (Maturity) — Vade: kredinin etkin vadesi (yıl olarak). Beklenen Kayıp = PD × LGD × EAD formülüyle hesaplanır. IRB'nin iki versiyonu vardır: Foundation IRB (sadece PD'yi banka tahmin eder, diğerleri düzenleyici verir), Advanced IRB (banka tüm parametreleri kendi tahmin eder).",
          },
          {
            text: "Basel III sermaye uzlaşısının 2008 krizi sonrası getirdiği YENİ düzenlemeler arasında aşağıdakilerden hangisi YER ALMAZ?",
            options: [
              { id: "A", text: "Kaldıraç Oranı (Leverage Ratio) en az %3" },
              { id: "B", text: "Likidite Karşılama Oranı (LCR) %100 (30 günlük stres senaryosu) ve Net İstikrarlı Fonlama Oranı (NSFR — 1 yıllık fonlama)" },
              { id: "C", text: "%2.5 sermaye koruma tamponu ve sistemik önemli kuruluşlar için ek tampon (G-SIB, D-SIB)" },
              { id: "D", text: "Sermaye yeterliliği oranının %2'ye indirilmesi" },
            ],
            correct: "D",
            explanation:
              "Basel III (2010 kabulü, 2013-2019 kademeli yürürlük); 2008 finansal krizinin derslerinden hareketle Basel II'yi önemli ölçüde sıkılaştırmıştır. Getirdiği YENİ düzenlemeler: (1) Sermaye Yeterliliğinde Sıkılaştırma — CET1 (Common Equity Tier 1, en kaliteli sermaye) en az %4.5 (önceki %2'den artırıldı), Tier 1 en az %6, Toplam Sermaye %8; (2) Sermaye Koruma Tamponu — ek %2.5 (toplam %10.5); ihlal edilirse temettü/ikramiye sınırlandırılır; (3) Konjonktürel Tampon (Countercyclical Buffer) — ekonomide aşırı kredi büyümesi varsa %0-2.5 ek; (4) Sistemik Önem Tamponu — G-SIB (Global Systemically Important Banks) için %1-3.5 ek, D-SIB (yerli sistemik bankalar) için ulusal düzenleyiciler belirler; (5) Kaldıraç Oranı — Tier 1/Toplam Riskler ≥ %3 (risk ağırlıklı olmayan); (6) Likidite Düzenlemeleri — LCR (Liquidity Coverage Ratio) 30 günlük stres senaryosunda %100, NSFR (Net Stable Funding Ratio) 1 yıllık dönem için %100. Sermayenin %2'ye İNDİRİLMESİ değil, ARTIRILMASI gerçekleşmiştir; D seçeneği yanlıştır.",
          },
          {
            text: "Basel III'te getirilen 'Likidite Karşılama Oranı' (LCR — Liquidity Coverage Ratio) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Bankaların kâr oranını ölçer." },
              { id: "B", text: "30 günlük şiddetli stres senaryosunda bankaların net nakit çıkışını karşılayacak yüksek kaliteli likit varlık (HQLA) tutmalarını gerektirir; oran %100'ün altına düşmemelidir; krizde likidite sorunlarını önlemek için tasarlanmıştır." },
              { id: "C", text: "Yalnızca yatırım bankaları için geçerlidir." },
              { id: "D", text: "Yıllık olarak hesaplanır." },
            ],
            correct: "B",
            explanation:
              "LCR (Liquidity Coverage Ratio); Basel III'ün likidite düzenlemelerinin temel ayağıdır ve 2008 krizinden çıkarılan önemli derslerden birinin uygulamasıdır. Krizde Lehman Brothers ve diğer büyük bankalar yeterli sermayeleri olsa bile likidite sıkıntısı nedeniyle çöktüler; sermaye uzun vadeli sağlamlığı, likidite kısa vadeli ödeme kapasitesini ölçer. LCR formülü: LCR = HQLA (Yüksek Kaliteli Likit Varlık) / 30 Günlük Net Nakit Çıkışı (stres senaryosunda) ≥ %100. HQLA'lar üç seviyeye ayrılır: Level 1 (en likit — nakit, merkez bankası rezervleri, AAA devlet tahvilleri — herhangi bir indirim olmadan sayılır), Level 2A (%15 haircut), Level 2B (%25-50 haircut). 30 günlük stres senaryosu — mevduatın belirli oranı çekilir (perakende %5, kurumsal %25-40), kredi limitleri kullanılır, repo'lar yenilenmez. Bu sayede bankalar 30 gün boyunca kendi başlarına ayakta durabilir. Türkiye'de BDDK LCR uygulamasını 2014'te başlattı, sektör genelinde %100 üzerinde tutmaktadır. NSFR ise daha uzun vadeli (1 yıl) yapısal likidite oranıdır.",
          },
        ],
      },
    ],
  },
];