/* ─────────────────────────────────────────────────────────────────────────────
 * Genel Ekonomi (1008)
 *
 * Kaynak: SPL 1008 Çalışma Notu, 31 Aralık 2025 (199 sayfa)
 * Sınavlar: SPL Düzey 3
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1001-1007 modüllerinde işlenen mevzuat, sermaye piyasası araçları ve
 * finansal yönetim konularıyla çakışma yoktur. 1008 saf ekonomi teorisine
 * (mikroekonomi temelleri, para-maliye politikaları, makroekonomik
 * göstergeler, dış ticaret) odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1008 } from "./mevzuat-1008";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1008: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1008 GENEL EKONOMİ
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1008",
    title: "Modül · Genel Ekonomi (1008)",
    lessons: [
      // ──────────── Ders 1: Temel Kavramlar ve Piyasalar ────────────
      {
        id: "m1008-l1",
        title: "Mikroekonomi Temelleri — Arz, Talep, Esneklik ve Piyasalar",
        duration: "10 dk",
        summary: {
          title: "Mikroekonomi Temelleri",
          intro:
            "Ekonomi; kıt kaynakların sınırsız ihtiyaçları karşılamak amacıyla nasıl tahsis edileceğini inceleyen bilim dalıdır. Mikroekonomi bireysel karar birimlerinin (tüketici, üretici) davranışlarını analiz ederken, makroekonomi ulusal düzeydeki büyüklükleri (GSYH, enflasyon, işsizlik) ele alır. Fiyat mekanizması arz ve talep güçlerinin etkileşimi sonucu piyasa dengesini oluşturur.",
          sections: [
            {
              heading: "Arz, Talep ve Esneklik",
              icon: "shield",
              items: [
                {
                  strong: "Talep Kanunu:",
                  text: "Diğer koşullar sabitken, bir malın fiyatı yükseldiğinde talep edilen miktar düşer; fiyat düştüğünde ise artar. Talep eğrisi negatif eğimlidir.",
                },
                {
                  strong: "Arz Kanunu:",
                  text: "Diğer koşullar sabitken, bir malın fiyatı yükseldiğinde sunulan miktar artar; fiyat düştüğünde azalır. Arz eğrisi pozitif eğimlidir.",
                },
                {
                  strong: "Piyasa Dengesi:",
                  text: "Arz ve talep eğrilerinin kesiştiği noktada denge fiyatı ve denge miktarı oluşur; bu noktada satın alınmak istenen miktar ile satılmak istenen miktar eşittir.",
                },
                {
                  strong: "Talep Esnekliği:",
                  text: "Fiyat değişimine talebin gösterdiği tepkidir; |E|>1 esnek (lüks mallar), |E|<1 esnek değil (zorunlu mallar), |E|=1 birim esnektir.",
                },
                {
                  strong: "Çapraz ve Gelir Esnekliği:",
                  text: "Çapraz esneklik iki mal arasındaki ilişkiyi (ikame veya tamamlayıcı), gelir esnekliği gelir değişimine talebin tepkisini ölçer; gelir esnekliği <0 ise düşük mal, >1 ise lüks mal.",
                },
              ],
            },
            {
              heading: "Üretim, Maliyetler ve Piyasa Türleri",
              icon: "trend",
              items: [
                {
                  strong: "Üretim Faktörleri:",
                  text: "Emek, sermaye, doğal kaynaklar ve girişimcilik olmak üzere dört temel üretim faktörü vardır; her birinin geliri sırasıyla ücret, faiz, rant ve kârdır.",
                },
                {
                  strong: "Sabit ve Değişken Maliyetler:",
                  text: "Sabit maliyetler üretim miktarından bağımsızdır (kira, amortisman); değişken maliyetler üretimle birlikte değişir (hammadde, işçilik); ikisinin toplamı toplam maliyettir.",
                },
                {
                  strong: "Tam Rekabet:",
                  text: "Çok sayıda alıcı-satıcı, homojen ürün, serbest giriş-çıkış ve tam bilgi varsayımına dayanır; firma fiyat alıcısıdır (price taker).",
                },
                {
                  strong: "Tekel (Monopol):",
                  text: "Tek satıcının olduğu, ikamesi olmayan ürün üreten ve giriş engelleri bulunan piyasa yapısıdır; firma fiyat belirleyicidir.",
                },
                {
                  strong: "Oligopol ve Monopolcü Rekabet:",
                  text: "Oligopolde az sayıda büyük firma vardır (otomotiv, telekom); monopolcü rekabette çok sayıda firma farklılaştırılmış ürün satar (restoran, kıyafet).",
                },
              ],
            },
          ],
          tip: "Talep esnekliğinde |E|>1 = esnek, |E|<1 = inelastik kuralı sınavın klasiğidir. Lüks mal = esnek talep, zorunlu mal = inelastik talep. Piyasa türleri 'satıcı sayısı + ürün farklılaşması' iki kriteriyle ayrılır: tam rekabet → monopolcü rekabet → oligopol → tekel.",
          kavramlar: [
            { terim: "Talep Esnekliği", tanim: "Fiyat değiştiğinde talep miktarının ne ölçüde değiştiğini ölçen katsayı; |E|>1 esnek, |E|<1 inelastik, |E|=1 birim esnekli." },
            { terim: "Arz Eğrisi", tanim: "Fiyat arttıkça üreticilerin piyasaya arz etmek istediği miktar artar; pozitif eğimli ilişkiyi gösterir." },
            { terim: "Talep Eğrisi", tanim: "Fiyat arttıkça tüketicilerin talep etmek istediği miktar azalır; negatif eğimli ilişkiyi gösterir." },
            { terim: "Tam Rekabet Piyasası", tanim: "Çok sayıda alıcı ve satıcının homojen ürün alıp sattığı; hiçbir aktörün fiyatı etkileyemediği piyasa yapısı." },
            { terim: "Tekel (Monopol)", tanim: "Tek satıcının homojen ürün sattığı; fiyat belirleyici konumunda olduğu piyasa yapısı; sosyal refah açısından en olumsuz yapı." },
            { terim: "Oligopol", tanim: "Az sayıda büyük firmanın piyasayı paylaştığı; rakip kararlarına karşılıklı bağımlılığın yüksek olduğu piyasa yapısı." },
            { terim: "Fiyat Esnekliği ve Gelir", tanim: "Esnek talepte fiyat düşüşü toplam geliri artırır; inelastik talepte fiyat düşüşü toplam geliri azaltır — bu ilişki fiyat stratejileri için kritiktir." },
          ],
          dikkatlar: [
            "Talep esnekliği: |E| > 1 esnek (lüks mallar), |E| < 1 inelastik (zorunlu mallar), |E| = 1 birim elastik — mutlak değer kullanılır, işaret değil.",
            "Piyasa yapıları satıcı sayısı ve ürün homojenliğine göre sıralanır: tam rekabet → monopolcü rekabet → oligopol → tekel.",
            "Tam rekabette P = MC (marjinal maliyet); tekelde P > MC — bu fark tekel gelirini (monopoly rent) oluşturur.",
            "Esnek talepte (|E|>1) fiyat artışı toplam geliri azaltır; inelastik talepte (|E|<1) fiyat artışı toplam geliri artırır — bu ters ilişki sınavda tuzak olarak sunulur.",
            "Arz esnekliği kısa vadede düşük, uzun vadede yüksek olur; üretim kapasitesi genişledikçe arz daha esnek hale gelir.",
          ],
        },
        questions: [
          {
            text: "Bir malın fiyatı %20 arttığında talep edilen miktar %30 azalıyorsa, bu malın talep esnekliği için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Talep esnek değildir (inelastik); |E|<1" },
              { id: "B", text: "Talep birim esnektir; |E|=1" },
              { id: "C", text: "Talep esnektir; |E|=1,5 > 1, lüks mal niteliğindedir" },
              { id: "D", text: "Talep tamamen esnek değildir; |E|=0" },
            ],
            correct: "C",
            explanation:
              "Talep esnekliği = |%Talep Değişimi / %Fiyat Değişimi| = |30/20| = 1,5. |E|>1 olduğu için talep esnektir. Esnek talep gösteren mallar genellikle lüks mallar veya ikamesi kolay bulunan ürünlerdir; tüketici fiyat değişimine duyarlı tepki verir. İnelastik talep ise zorunlu mallarda (örneğin temel gıda) görülür.",
          },
          {
            text: "Aşağıdakilerden hangisi 'tam rekabet' piyasa yapısının temel varsayımları arasında yer ALMAZ?",
            options: [
              { id: "A", text: "Çok sayıda alıcı ve satıcı bulunması" },
              { id: "B", text: "Ürünlerin homojen olması" },
              { id: "C", text: "Piyasaya giriş ve çıkışın serbest olması" },
              { id: "D", text: "Firmaların fiyat belirleyici (price maker) olması" },
            ],
            correct: "D",
            explanation:
              "Tam rekabet piyasasında firmalar 'fiyat alıcı' (price taker) konumundadır, yani piyasada oluşan fiyatı veri kabul ederler. Çok sayıda satıcı olduğu için tek bir firma fiyatı etkileyemez. Fiyat belirleyici (price maker) konumu ise tekel (monopol) ve oligopol gibi eksik rekabet piyasalarına özgüdür.",
          },
          {
            text: "Bir malın gelir esnekliği -0,5 olarak hesaplanmıştır. Bu durumda mal hangi grupta yer alır?",
            options: [
              { id: "A", text: "Lüks mal" },
              { id: "B", text: "Normal mal" },
              { id: "C", text: "Düşük mal (gelir arttıkça talebi azalan mal)" },
              { id: "D", text: "Tamamlayıcı mal" },
            ],
            correct: "C",
            explanation:
              "Gelir esnekliği < 0 olan mallar 'düşük mal' (inferior good) olarak adlandırılır; gelir arttıkça bu malların talebi azalır. Örneğin tüketici geliri arttıkça toplu taşıma yerine özel araç tercih edebilir. Gelir esnekliği 0-1 arası olan mallar zorunlu (normal), >1 olan mallar ise lüks mallardır.",
          },
          {
            text: "Aşağıdakilerden hangisi 'oligopol' piyasa yapısının temel özelliğidir?",
            options: [
              { id: "A", text: "Tek bir satıcı vardır." },
              { id: "B", text: "Sonsuz sayıda firma homojen ürün satar." },
              { id: "C", text: "Az sayıda büyük firma piyasaya hakimdir; firmaların kararları birbirini doğrudan etkiler (karşılıklı bağımlılık)." },
              { id: "D", text: "Firmaların fiyat üzerinde hiçbir etkisi yoktur." },
            ],
            correct: "C",
            explanation:
              "Oligopol; az sayıda büyük firmanın piyasaya hakim olduğu eksik rekabet piyasası türüdür. Otomotiv, telekomünikasyon, hava yolculuğu sektörleri tipik örneklerdir. Bu piyasalarda firmaların kararları birbirini doğrudan etkiler — karşılıklı bağımlılık (interdependence) en belirleyici özelliktir; bu nedenle oyun teorisi bu piyasaları analiz etmekte sıkça kullanılır.",
          },
          {
            text: "Üretim faktörleri ve gelirleri eşleşmesi açısından aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Emek - Faiz; Sermaye - Ücret" },
              { id: "B", text: "Emek - Ücret; Sermaye - Faiz; Doğal Kaynaklar - Rant; Girişimcilik - Kâr" },
              { id: "C", text: "Tüm üretim faktörlerinin geliri ücret olarak adlandırılır." },
              { id: "D", text: "Girişimcilik bir üretim faktörü değildir." },
            ],
            correct: "B",
            explanation:
              "Klasik ekonomi teorisinde dört üretim faktörü ve karşılık gelen gelir türleri şunlardır: Emek → Ücret, Sermaye → Faiz, Doğal Kaynaklar (toprak) → Rant, Girişimcilik → Kâr. Girişimci üretim faktörlerini bir araya getirerek üretimi organize eden ve risk üstlenen kişidir; karşılığında elde ettiği gelir kârdır.",
          },
        ],
      },
      // ──────────── Ders 2: Para Politikası ────────────
      {
        id: "m1008-l2",
        title: "Para Politikası — Merkez Bankası Araçları ve Amaçları",
        duration: "9 dk",
        summary: {
          title: "Para Politikası ve Merkez Bankası",
          intro:
            "Para politikası; merkez bankasının para arzı ve faiz oranlarını kontrol ederek ekonomik istikrarı sağlamaya yönelik uyguladığı politikalardır. Türkiye Cumhuriyet Merkez Bankası (TCMB) Türkiye'nin para otoritesidir; temel amacı fiyat istikrarını sağlamaktır. Para politikası araçları doğrudan ve dolaylı olmak üzere iki gruba ayrılır.",
          sections: [
            {
              heading: "Para Tanımı ve Para Politikası Araçları",
              icon: "shield",
              items: [
                {
                  strong: "Para Çeşitleri:",
                  text: "M1 (dolaşımdaki para + vadesiz mevduat), M2 (M1 + vadeli mevduat), M3 (M2 + repo + para piyasası fonları); para arzı genişledikçe tanım kapsamı artar.",
                },
                {
                  strong: "Açık Piyasa İşlemleri (APİ):",
                  text: "Merkez bankasının devlet menkul kıymetleri alıp satarak para arzını ayarladığı en yaygın araçtır; menkul kıymet alımı para arzını artırır, satımı azaltır.",
                },
                {
                  strong: "Zorunlu Karşılık Oranı:",
                  text: "Bankaların mevduatlarının belirli bir oranını merkez bankasında tutma zorunluluğudur; oran artışı kredi yaratma gücünü düşürür ve para arzını daraltır.",
                },
                {
                  strong: "Reeskont (Politika) Faizi:",
                  text: "Merkez bankasının ticari bankalara verdiği kredilerin faiz oranıdır; politika faizinin yükselmesi piyasa faizlerini de yukarı çeker.",
                },
                {
                  strong: "Geç Likidite Penceresi:",
                  text: "Bankaların gün sonunda likidite ihtiyacını karşılamak için kullandığı son başvuru kaynağıdır; politika faizinden yüksek bir faiz uygulanır.",
                },
              ],
            },
            {
              heading: "Para Politikası Amaçları ve Çeşitleri",
              icon: "trend",
              items: [
                {
                  strong: "Fiyat İstikrarı:",
                  text: "TCMB'nin yasal birincil amacıdır (TCMB Kanunu md. 4); enflasyonun düşük ve istikrarlı bir düzeyde tutulması esastır, enflasyon hedeflemesi rejimi uygulanır.",
                },
                {
                  strong: "Diğer Amaçlar:",
                  text: "Tam istihdam, ekonomik büyüme ve dış ticaret dengesi gibi amaçlar fiyat istikrarıyla çelişmediği sürece desteklenir; finansal istikrar da kritik amaçtır.",
                },
                {
                  strong: "Daraltıcı Para Politikası:",
                  text: "Yüksek enflasyon dönemlerinde uygulanır; faiz artırımı, açık piyasa satışları ve zorunlu karşılık artışı ile para arzı azaltılır, talep yatıştırılır.",
                },
                {
                  strong: "Genişletici Para Politikası:",
                  text: "Resesyon ve durgunluk dönemlerinde uygulanır; faiz indirimi, açık piyasa alımları ve zorunlu karşılık indirimi ile para arzı artırılır, ekonomik aktivite canlandırılır.",
                },
                {
                  strong: "Para Politikası Aktarım Mekanizması:",
                  text: "Politika faizi → piyasa faizleri → krediler ve döviz kuru → toplam talep → enflasyon zinciri ile para politikasının ekonomik etkisi yayılır.",
                },
              ],
            },
          ],
          tip: "Üç temel para politikası aracı: Açık Piyasa İşlemleri, Zorunlu Karşılık Oranı, Reeskont (Politika) Faizi. APİ en esnek araçtır. Daraltıcı politika = enflasyonla mücadele, genişletici politika = resesyonla mücadele. TCMB'nin birincil amacı fiyat istikrarıdır — Kanun md. 4 ile sabittir.",
          kavramlar: [
            { terim: "Para Politikası", tanim: "Merkez Bankasının para arzını ve faiz oranlarını etkilemek amacıyla kullandığı araçlar bütünü; birincil amacı fiyat istikrarıdır." },
            { terim: "Açık Piyasa İşlemleri (APİ)", tanim: "MB'nın devlet tahvili alım-satımıyla para arzını etkilediği en esnek ve en sık kullanılan para politikası aracı." },
            { terim: "Zorunlu Karşılık Oranı", tanim: "Bankaların topladıkları mevduatın belirli bir yüzdesini MB'da tutma zorunluluğu; artırılması para arzını daraltır." },
            { terim: "Politika Faizi (Reeskont)", tanim: "MB'nın bankalara borç verdiği temel faiz oranı; artırılması krediyi pahalılaştırarak para arzını daraltır." },
            { terim: "Genişletici Para Politikası", tanim: "Para arzını artıran (APİ alım, düşük ZKO, düşük faiz) politika; resesyon dönemlerinde büyümeyi desteklemek için kullanılır." },
            { terim: "Daraltıcı Para Politikası", tanim: "Para arzını azaltan (APİ satış, yüksek ZKO, yüksek faiz) politika; enflasyonla mücadelede başvurulan araçlar." },
            { terim: "TCMB Bağımsızlığı", tanim: "TCMB'nin kendi yetkisi dahilindeki para politikası kararlarında hükümetten bağımsız hareket etme ilkesi; TCMB Kanunu'nda güvence altındadır." },
          ],
          dikkatlar: [
            "TCMB'nin birincil amacı fiyat istikrarıdır (enflasyon hedeflemesi); büyüme ve istihdam ikincil amaçlardır — bu hiyerarşi Kanun md. 4'te sabittir.",
            "APİ en esnek para politikası aracıdır; günlük bazda piyasaya yapılabilir — ZKO değişikliği ise daha kaba ve etkisi gecikmeli bir araçtır.",
            "Daraltıcı politika: APİ satış + ZKO artışı + faiz artışı; genişletici politika: APİ alım + ZKO indirimi + faiz indirimi.",
            "ZKO artırılırsa bankalar daha az kredi verebilir; bu para çarpanını küçülterek para arzını daraltır.",
            "Politika faizi artışı hem krediyi pahalılaştırır hem de TL'yi değerlendirerek enflasyonu iki yoldan dizginler.",
          ],
        },
        questions: [
          {
            text: "TCMB Kanunu md. 4 uyarınca Türkiye Cumhuriyet Merkez Bankası'nın temel amacı aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Tam istihdamı sağlamak" },
              { id: "B", text: "Fiyat istikrarını sağlamak" },
              { id: "C", text: "Bütçe açığını finanse etmek" },
              { id: "D", text: "Döviz kurunu sabit tutmak" },
            ],
            correct: "B",
            explanation:
              "TCMB Kanunu md. 4 uyarınca Bankanın temel amacı fiyat istikrarını sağlamaktır. Banka, fiyat istikrarını sağlamak için uygulayacağı para politikasını ve kullanacağı para politikası araçlarını doğrudan kendisi belirler. Diğer amaçlar (tam istihdam, ekonomik büyüme, finansal istikrar) ise fiyat istikrarı amacıyla çelişmediği sürece desteklenir.",
          },
          {
            text: "Aşağıdakilerden hangisi merkez bankasının para politikası araçları arasında yer ALMAZ?",
            options: [
              { id: "A", text: "Açık Piyasa İşlemleri (APİ)" },
              { id: "B", text: "Zorunlu Karşılık Oranı" },
              { id: "C", text: "Reeskont (Politika) Faizi" },
              { id: "D", text: "Kurumlar Vergisi Oranı" },
            ],
            correct: "D",
            explanation:
              "Kurumlar vergisi oranı bir maliye politikası aracıdır, para politikası aracı değildir; Hazine ve Maliye Bakanlığı tarafından belirlenir. Para politikası araçları merkez bankası tarafından kullanılır ve şunları kapsar: Açık Piyasa İşlemleri (APİ — devlet menkul kıymetleri alım-satımı), Zorunlu Karşılık Oranı (bankaların merkez bankasında tutması gereken mevduat oranı) ve Reeskont/Politika Faizi.",
          },
          {
            text: "Yüksek enflasyon dönemlerinde merkez bankası 'daraltıcı para politikası' uygulamak istiyorsa aşağıdakilerden hangisini yapması beklenir?",
            options: [
              { id: "A", text: "Politika faizini düşürmek ve açık piyasa alımları yapmak" },
              { id: "B", text: "Politika faizini artırmak, açık piyasa satışları yapmak ve zorunlu karşılık oranını artırmak" },
              { id: "C", text: "Zorunlu karşılık oranını sıfıra indirmek" },
              { id: "D", text: "Bankalara serbest kredi vermek" },
            ],
            correct: "B",
            explanation:
              "Daraltıcı (sıkı) para politikası, yüksek enflasyon dönemlerinde para arzını azaltarak toplam talebi yatıştırmayı amaçlar. Üç temel araç eş zamanlı kullanılır: (i) politika faizinin artırılması (kredi maliyetini yükseltir), (ii) açık piyasa satışları (piyasadan likidite çeker), (iii) zorunlu karşılık oranının artırılması (bankaların kredi yaratma gücünü düşürür). Bu önlemler kredi büyümesini ve harcamaları yavaşlatır.",
          },
          {
            text: "Açık Piyasa İşlemleri (APİ) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Merkez bankasının devlet menkul kıymeti alması para arzını azaltır." },
              { id: "B", text: "Merkez bankasının devlet menkul kıymeti satması piyasadan likidite çeker; alımı ise piyasaya likidite enjekte eder." },
              { id: "C", text: "APİ yalnızca yıllık olarak yapılır." },
              { id: "D", text: "APİ bankaları doğrudan etkilemez." },
            ],
            correct: "B",
            explanation:
              "Açık Piyasa İşlemleri merkez bankasının devlet menkul kıymetlerini alıp satmasıdır. Mantık açıktır: merkez bankası menkul kıymet sattığında piyasa parayı verip kıymeti alır → piyasada para azalır (likidite çekilir). Tersine, merkez bankası kıymet satın aldığında piyasaya para verir → likidite artar. APİ en esnek ve sık kullanılan para politikası aracıdır; merkez bankasının her gün uygulayabileceği bir mekanizmadır.",
          },
          {
            text: "Para politikası aktarım mekanizmasının temel zinciri aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Vergi oranı → kamu giderleri → bütçe açığı → enflasyon" },
              { id: "B", text: "Politika faizi → piyasa faizleri → krediler ve döviz kuru → toplam talep → enflasyon" },
              { id: "C", text: "Petrol fiyatı → enflasyon → işsizlik" },
              { id: "D", text: "İhracat → cari işlemler → büyüme" },
            ],
            correct: "B",
            explanation:
              "Para politikası aktarım mekanizması; merkez bankasının politika kararının ekonomiye yayılma sürecini açıklar. Tipik zincir şöyledir: politika faizinin değişmesi → bankalar arası faizler ve diğer piyasa faizleri etkilenir → kredi maliyeti ve döviz kuru değişir → tüketim, yatırım, ihracat ve ithalat (toplam talep) etkilenir → enflasyon ve büyüme etkilenir. Bu süreç birkaç ay ile birkaç yıl arasında değişen gecikmelerle gerçekleşir.",
          },
        ],
      },
      // ──────────── Ders 3: Maliye Politikası ────────────
      {
        id: "m1008-l3",
        title: "Maliye Politikası — Kamu Gelirleri, Giderleri ve Bütçe",
        duration: "9 dk",
        summary: {
          title: "Maliye Politikası ve Kamu Maliyesi",
          intro:
            "Maliye politikası; kamu gelirlerinin (vergiler) ve kamu giderlerinin (harcamalar) ekonomik istikrarı sağlamak amacıyla bilinçli olarak ayarlanmasıdır. Hazine ve Maliye Bakanlığı tarafından yürütülür. Para politikasının yanı sıra makroekonomik politikanın diğer ana aracıdır; bütçe açığı veya fazlası, vergi oranları ve kamu yatırımları temel müdahale alanlarıdır.",
          sections: [
            {
              heading: "Kamu Gelirleri ve Giderleri",
              icon: "shield",
              items: [
                {
                  strong: "Vergiler:",
                  text: "Kamu gelirlerinin en büyük bölümünü oluşturur; dolaysız vergiler (gelir, kurumlar) gelir üzerinden, dolaylı vergiler (KDV, ÖTV) tüketim üzerinden alınır.",
                },
                {
                  strong: "Diğer Kamu Gelirleri:",
                  text: "Harçlar, resimler, parafiskal gelirler (sosyal güvenlik primleri), kamu mülklerinden elde edilen gelirler ve borçlanma kamu gelirlerini tamamlar.",
                },
                {
                  strong: "Cari Giderler:",
                  text: "Kamu personeli maaşları, mal-hizmet alımları, sosyal yardımlar gibi süreklilik arz eden giderler; bütçenin büyük kısmını oluşturur.",
                },
                {
                  strong: "Yatırım Giderleri:",
                  text: "Altyapı projeleri, kamu binaları gibi sermaye birikimine yönelik giderler; uzun vadede ekonomik büyümeyi destekler.",
                },
                {
                  strong: "Transfer Harcamaları:",
                  text: "Karşılığında doğrudan mal veya hizmet alınmayan ödemelerdir; emekli aylıkları, sosyal yardımlar, faiz ödemeleri ve sübvansiyonlar bu kapsamdadır.",
                },
              ],
            },
            {
              heading: "Bütçe ve Maliye Politikası Çeşitleri",
              icon: "trend",
              items: [
                {
                  strong: "Bütçe Türleri:",
                  text: "Denk bütçe (gelir = gider), açık bütçe (gider > gelir, finansman gerekir), fazla bütçe (gelir > gider); bütçe açığı genellikle borçlanmayla finanse edilir.",
                },
                {
                  strong: "Maliye Politikası Çarpanı:",
                  text: "Kamu harcamalarındaki 1 birimlik artışın milli gelirde yarattığı toplam artış oranıdır; çarpan = 1/(1-MTE), MTE = marjinal tüketim eğilimi.",
                },
                {
                  strong: "Genişletici Maliye Politikası:",
                  text: "Resesyon dönemlerinde uygulanır; vergi indirimleri ve kamu harcaması artışıyla toplam talep canlandırılır, ancak bütçe açığını artırma riski vardır.",
                },
                {
                  strong: "Daraltıcı Maliye Politikası:",
                  text: "Aşırı ısınmış ekonomi veya yüksek enflasyon dönemlerinde uygulanır; vergi artışları ve kamu harcamalarının kısılmasıyla toplam talep yatıştırılır.",
                },
                {
                  strong: "IS-LM Modeli:",
                  text: "Mal piyasası (IS eğrisi) ve para piyasası (LM eğrisi) dengesinin birlikte analiz edildiği makroekonomik modeldir; para ve maliye politikalarının birbirini etkisini gösterir.",
                },
              ],
            },
          ],
          tip: "Vergiler dolaylı/dolaysız ayrımı: dolaysız (gelir, kurumlar) gelir üzerinden, dolaylı (KDV, ÖTV) tüketim üzerinden. Maliye politikası çarpanı = 1/(1-MTE) — sınavın klasik formülüdür. IS-LM modeli para ve maliye politikalarının kesişimini gösterir; hem ekonomi öğrencileri hem SPL adayları için temel araçtır.",
          kavramlar: [
            { terim: "Dolaysız Vergi", tanim: "Gelir üzerinden alınan; mükellefi ile ekonomik yükü taşıyan kişinin aynı olduğu vergi türü — gelir vergisi, kurumlar vergisi." },
            { terim: "Dolaylı Vergi", tanim: "Tüketim veya işlemler üzerinden alınan; yük başkasına yansıtılabilen vergi türü — KDV, ÖTV, damga vergisi." },
            { terim: "Marjinal Tüketim Eğilimi (MTE)", tanim: "Ek gelirin ne kadarının tüketime harcandığını gösteren katsayı; 0 ile 1 arasındadır ve kamu harcaması çarpanını belirler." },
            { terim: "Maliye Politikası Çarpanı", tanim: "Kamu harcamasındaki 1 birimlik artışın GSYH'yi kaç birim artırdığını gösteren katsayı: 1/(1-MTE)." },
            { terim: "Genişletici Maliye Politikası", tanim: "Kamu harcamalarını artıran ve/veya vergileri düşüren; ekonomiyi canlandırmaya yönelik politika." },
            { terim: "Daraltıcı Maliye Politikası", tanim: "Kamu harcamalarını kısan ve/veya vergileri artıran; enflasyonu ve aşırı ısınmayı frenleyen politika." },
            { terim: "IS-LM Modeli", tanim: "IS eğrisi (mal piyasası dengesi) ile LM eğrisinin (para piyasası dengesi) kesişimiyle faiz oranı ve milli geliri belirleyen makroekonomik çerçeve." },
          ],
          dikkatlar: [
            "Maliye politikası çarpanı = 1/(1-MTE); MTE = 0,8 ise çarpan = 5 — yüksek MTE yüksek çarpan anlamına gelir.",
            "Dolaysız vergi gelire göre (gelir vergisi, kurumlar vergisi); dolaylı vergi tüketime göre (KDV, ÖTV) alınır — sınırda 'damga vergisi' dolaylı kategorisindedir.",
            "Genişletici maliye politikası kısa vadede canlandırma sağlar; uzun vadede kamu borcu artışı özel yatırımları dışlayabilir (crowding out).",
            "IS eğrisi mal piyasası dengelerini; LM eğrisi para piyasası dengelerini gösterir — kesişme noktası faiz-gelir dengesini verir.",
            "Vergi çarpanı harcama çarpanından küçüktür: vergi indirimi GSYH'yi tam çarpan etkisiyle değil, (MTE/(1-MTE)) kadar artırır.",
          ],
        },
        questions: [
          {
            text: "Aşağıdakilerden hangisi 'dolaysız vergi' kapsamındadır?",
            options: [
              { id: "A", text: "Katma Değer Vergisi (KDV)" },
              { id: "B", text: "Özel Tüketim Vergisi (ÖTV)" },
              { id: "C", text: "Gelir Vergisi" },
              { id: "D", text: "Damga Vergisi" },
            ],
            correct: "C",
            explanation:
              "Dolaysız vergiler, vergi yükümlüsü ile vergi taşıyıcısının aynı kişi olduğu, kişinin geliri veya servet üzerinden alınan vergilerdir; gelir vergisi ve kurumlar vergisi dolaysız vergilerin başlıcalarıdır. Dolaylı vergiler (KDV, ÖTV, damga vergisi gibi) ise mal-hizmet işlemleri üzerinden alınır ve genellikle nihai tüketici tarafından yüklenilir.",
          },
          {
            text: "Marjinal tüketim eğilimi (MTE) 0,8 olan bir ekonomide maliye politikası çarpanı kaçtır?",
            options: [
              { id: "A", text: "1,25" },
              { id: "B", text: "2,5" },
              { id: "C", text: "5" },
              { id: "D", text: "10" },
            ],
            correct: "C",
            explanation:
              "Maliye politikası çarpanı = 1 / (1 − MTE) formülüyle hesaplanır. MTE = 0,8 ise çarpan = 1 / (1 − 0,8) = 1 / 0,2 = 5. Bu, kamu harcamalarındaki 1 birimlik artışın milli gelirde 5 birimlik toplam artışa yol açacağını gösterir. Çarpan etkisi, harcamanın el değiştirerek ekonomide yayılmasından kaynaklanır.",
          },
          {
            text: "Genişletici maliye politikası aşağıdakilerden hangisini içerir?",
            options: [
              { id: "A", text: "Vergi artışları ve kamu harcaması kısıntıları" },
              { id: "B", text: "Vergi indirimleri ve kamu harcamalarının artırılması" },
              { id: "C", text: "Faiz oranlarının yükseltilmesi" },
              { id: "D", text: "Açık piyasa satışları" },
            ],
            correct: "B",
            explanation:
              "Genişletici maliye politikası, ekonomik durgunluk veya resesyon dönemlerinde uygulanır. Temel araçları: (i) vergi indirimleri — bireylerin kullanılabilir gelirini artırarak tüketimi teşvik eder, (ii) kamu harcamalarının artırılması — toplam talebi doğrudan yükseltir. Bu politika ekonomik aktiviteyi canlandırır ancak bütçe açığını büyütme riski taşır. Faiz oranı ve APİ ise para politikası araçlarıdır.",
          },
          {
            text: "Aşağıdakilerden hangisi 'transfer harcaması' niteliğindedir?",
            options: [
              { id: "A", text: "Kamu personeli maaşları" },
              { id: "B", text: "Kamu binası inşaatı" },
              { id: "C", text: "Emekli aylıkları, sosyal yardımlar ve faiz ödemeleri" },
              { id: "D", text: "Mal ve hizmet alımları" },
            ],
            correct: "C",
            explanation:
              "Transfer harcamaları; karşılığında doğrudan bir mal veya hizmet alınmayan ödemelerdir. Emekli aylıkları, sosyal yardımlar, işsizlik ödenekleri, sübvansiyonlar ve devlet borçlarının faiz ödemeleri bu kategoride yer alır. Cari harcamalar (personel maaşları, mal-hizmet alımı) ve yatırım harcamaları (kamu binaları, altyapı) ise karşılığında doğrudan bir hizmet veya varlık elde edilen harcamalardır.",
          },
          {
            text: "IS-LM modeli ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca mal piyasası dengesini gösterir." },
              { id: "B", text: "Yalnızca para piyasası dengesini gösterir." },
              { id: "C", text: "Mal piyasası (IS eğrisi) ve para piyasası (LM eğrisi) dengesinin birlikte analiz edildiği makroekonomik modeldir." },
              { id: "D", text: "Yalnızca dış ticaret dengesini gösterir." },
            ],
            correct: "C",
            explanation:
              "IS-LM modeli; mal piyasası dengesini gösteren IS eğrisi (Investment-Savings) ile para piyasası dengesini gösteren LM eğrisi (Liquidity-Money) bir araya getirilerek oluşturulan makroekonomik dengeyi analiz eder. İki eğrinin kesişim noktası faiz ve milli gelir düzeyini birlikte belirler. Model özellikle para ve maliye politikalarının birbiriyle nasıl etkileşim ettiğini ve ekonomide hangi sonuçları yarattığını göstermek için kullanılır.",
          },
        ],
      },
      // ──────────── Ders 4: Makroekonomik Göstergeler ────────────
      {
        id: "m1008-l4",
        title: "Makroekonomik Göstergeler — GSYH, Enflasyon ve Büyüme",
        duration: "10 dk",
        summary: {
          title: "Makroekonomik Göstergeler ve Yorumu",
          intro:
            "Makroekonomik göstergeler; bir ülkenin ekonomik performansını ölçen istatistiksel verilerdir. GSYH (Gayrı Safi Yurt İçi Hasıla), milli gelir, enflasyon, işsizlik oranı, cari işlemler dengesi ve kapasite kullanım oranı temel göstergelerdir. Bu göstergeler hem ekonomik politika kararlarına hem de finansal piyasaların değerleme süreçlerine yön verir.",
          sections: [
            {
              heading: "GSYH ve Ekonomik Büyüme",
              icon: "shield",
              items: [
                {
                  strong: "GSYH Tanımı:",
                  text: "Gayrı Safi Yurt İçi Hasıla; bir ülkenin sınırları içinde belirli bir dönemde üretilen tüm nihai mal ve hizmetlerin piyasa değeridir; üretim, gelir ve harcama yöntemleriyle hesaplanır.",
                },
                {
                  strong: "Nominal vs Reel GSYH:",
                  text: "Nominal GSYH cari fiyatlarla, reel GSYH ise sabit fiyatlarla hesaplanır; reel GSYH enflasyonun etkisini arındırır ve gerçek büyümeyi gösterir.",
                },
                {
                  strong: "Cobb-Douglas Üretim Fonksiyonu:",
                  text: "Y = A × K^α × L^(1-α); Y çıktı, A teknoloji, K sermaye, L emek; potansiyel ekonomik büyümeyi açıklayan klasik modeldir.",
                },
                {
                  strong: "Solow Büyüme Modeli:",
                  text: "Sermaye birikimi, emek artışı ve teknolojik gelişmenin büyümeyi nasıl etkilediğini analiz eder; uzun vadede teknolojik gelişme büyümenin ana sürücüsüdür.",
                },
                {
                  strong: "Orta Gelir Tuzağı:",
                  text: "Gelişmekte olan ülkelerin belirli bir gelir seviyesine ulaştıktan sonra büyümelerinin yavaşlaması durumudur; teknolojik dönüşüm ve kurumsal reform ile aşılabilir.",
                },
              ],
            },
            {
              heading: "Enflasyon, İşsizlik ve Konjonktür",
              icon: "trend",
              items: [
                {
                  strong: "Enflasyon Türleri:",
                  text: "Talep enflasyonu (toplam talebin arzı aşması), maliyet enflasyonu (üretim maliyetlerinin artışı), yapısal enflasyon (ekonomik yapıdaki kalıcı bozukluklar).",
                },
                {
                  strong: "Enflasyon Göstergeleri:",
                  text: "TÜFE (tüketici fiyatları), ÜFE (üretici fiyatları), Çekirdek Enflasyon (gıda ve enerji hariç); TÜİK aylık olarak yayımlar.",
                },
                {
                  strong: "İşsizlik Oranı:",
                  text: "İşsiz Sayısı / İşgücü; işgücü = istihdam + işsiz; işsizlik türleri: dönemsel (konjonktürel), yapısal, friksiyonel, mevsimsel.",
                },
                {
                  strong: "Konjonktürel Dalgalanmalar:",
                  text: "Ekonomik aktivitenin canlanma, refah, durgunluk ve kriz aşamalarından geçmesidir; iş çevrimleri (business cycles) olarak da bilinir.",
                },
                {
                  strong: "Güven Endeksleri ve KKO:",
                  text: "Tüketici Güven Endeksi (TGE), Reel Kesim Güven Endeksi (RKGE) öncü göstergelerdir; Kapasite Kullanım Oranı (KKO) sanayi sektörünün ne kadar verimli kullanıldığını gösterir.",
                },
              ],
            },
          ],
          tip: "Nominal GSYH cari fiyatlarla, Reel GSYH sabit fiyatlarla — sınavın klasik tuzağıdır. Cobb-Douglas formülünde toplam üs = 1 (α + (1-α) = 1) sabit ölçeklere getiri varsayımıdır. TÜFE = tüketici, ÜFE = üretici, Çekirdek = gıda+enerji hariç. İşsizlik oranı paydası 'işgücü', toplam nüfus değil.",
          kavramlar: [
            { terim: "Nominal GSYH", tanim: "Cari (o yılın) fiyatlarıyla hesaplanan GSYH; enflasyonun etkisini içerdiğinden büyüme karşılaştırmasında yanıltıcı olabilir." },
            { terim: "Reel GSYH", tanim: "Sabit baz yıl fiyatlarıyla hesaplanan GSYH; enflasyondan arındırılmış gerçek büyüme göstergesi." },
            { terim: "TÜFE (CPI)", tanim: "Tüketici Fiyat Endeksi; hanehalkının satın aldığı mal ve hizmetlerin fiyat değişimini ölçen enflasyon göstergesi." },
            { terim: "ÜFE (PPI)", tanim: "Üretici Fiyat Endeksi; üreticilerin sattığı mal ve hizmetlerin fiyat değişimini ölçen; genellikle TÜFE'nin öncü göstergesidir." },
            { terim: "Çekirdek Enflasyon", tanim: "Gıda ve enerji fiyatları çıkarılmış enflasyon; daha istikrarlı olduğundan para politikası kararlarında tercih edilen ölçüt." },
            { terim: "İşsizlik Oranı", tanim: "İşsiz sayısının işgücüne (çalışan + iş arayan) oranı; paydası toplam nüfus değil, yalnızca işgücüdür." },
            { terim: "Cobb-Douglas Üretim Fonksiyonu", tanim: "Y = A × K^α × L^(1-α) şeklinde gösterilen; sermaye ve emeğin toplam üretimdeki katkısını modelleyen üretim fonksiyonu; α+( 1-α)=1 sabit ölçek varsayımını temsil eder." },
          ],
          dikkatlar: [
            "Nominal GSYH cari fiyatlarla, Reel GSYH sabit fiyatlarla ölçülür; 'ekonomi büyüdü' derken reel GSYH artışı kastedilir.",
            "İşsizlik oranı = (İşsiz / İşgücü) × 100; payda 'toplam nüfus' değil 'aktif işgücü'dür — eve dönmüş kişiler işsiz sayılmaz.",
            "TÜFE tüketici enflasyonunu, ÜFE üretici enflasyonunu ölçer; ÜFE artışı ilerleyen aylarda TÜFE'ye yansıyabilir.",
            "Çekirdek enflasyon gıda ve enerjiyi dışarıda bırakır; para politikası kararları genellikle çekirdek enflasyona göre alınır.",
            "Deflasyon (negatif enflasyon) talep düşüşü, borç deflasyonu ve yatırım caydırıcılığı nedeniyle enflasyondan daha tehlikeli olabilir.",
          ],
        },
        questions: [
          {
            text: "Nominal GSYH ile Reel GSYH arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Nominal GSYH yalnızca yabancı para cinsinden, reel GSYH ise yerli para cinsinden hesaplanır." },
              { id: "B", text: "Nominal GSYH cari fiyatlarla, reel GSYH ise sabit (baz yıl) fiyatlarla hesaplanır; reel GSYH enflasyonun etkisini arındırır." },
              { id: "C", text: "Nominal GSYH yalnızca özel sektör, reel GSYH ise kamu sektörü için hesaplanır." },
              { id: "D", text: "İki kavram arasında fark yoktur." },
            ],
            correct: "B",
            explanation:
              "Nominal GSYH, cari (geçerli) yıl fiyatlarıyla hesaplanan toplam üretim değeridir; bu nedenle hem üretim artışını hem de fiyat artışını (enflasyonu) içerir. Reel GSYH ise belirlenen bir baz yılın sabit fiyatlarıyla hesaplanır; böylece fiyat değişimlerinin etkisi arındırılır ve gerçek üretim artışı ortaya çıkar. Reel GSYH büyümesi, ekonomik büyümenin daha doğru bir göstergesidir.",
          },
          {
            text: "Cobb-Douglas üretim fonksiyonunda Y = A × K^α × L^(1-α) formülüyle ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "A teknolojiyi, K sermaye stokunu, L emeği temsil eder; α + (1-α) = 1 olduğu için sabit ölçek getirisi vardır." },
              { id: "B", text: "Yalnızca emek girdisini dikkate alır." },
              { id: "C", text: "Teknoloji üretimi etkilemez." },
              { id: "D", text: "Sermaye ve emek arasında ikame yoktur." },
            ],
            correct: "A",
            explanation:
              "Cobb-Douglas üretim fonksiyonu Y = A × K^α × L^(1-α) formülüyle gösterilir. A: toplam faktör verimliliği (teknoloji), K: sermaye stoku, L: emek; α ve (1-α) ise sermaye ve emeğin gelirden aldığı pay (üs olarak). Üslerin toplamı 1 olduğu için 'sabit ölçek getirisi' (constant returns to scale) vardır: tüm girdiler iki katına çıkarılırsa çıktı da iki katına çıkar. Modern büyüme teorilerinin temelidir.",
          },
          {
            text: "TÜFE (Tüketici Fiyat Endeksi) ile ÜFE (Üretici Fiyat Endeksi) arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "TÜFE üretici fiyatlarını, ÜFE tüketici fiyatlarını ölçer." },
              { id: "B", text: "TÜFE tüketicilerin satın aldığı mal ve hizmetlerin fiyat değişimlerini, ÜFE ise üreticilerin sattığı malların fiyat değişimlerini ölçer." },
              { id: "C", text: "İki endeks aynı şeyi ölçer, sadece isimleri farklıdır." },
              { id: "D", text: "TÜFE yıllık, ÜFE haftalık olarak hesaplanır." },
            ],
            correct: "B",
            explanation:
              "TÜFE (Tüketici Fiyat Endeksi); tüketicilerin satın aldığı bir sepet mal ve hizmetin fiyat değişimlerini ölçer; günlük yaşam pahalılığını gösterir. ÜFE (Üretici Fiyat Endeksi) ise yurt içinde üretilen malların üretici tarafından satışından elde edilen fiyatların değişimini ölçer; üretici maliyetlerinin göstergesidir. ÜFE genellikle TÜFE'nin öncü göstergesi kabul edilir — üretici fiyatları artarsa kısa süre sonra tüketici fiyatları da artar.",
          },
          {
            text: "Bir ekonomide işgücü 50 milyon, istihdam edilen kişi sayısı 45 milyon ise işsizlik oranı kaçtır?",
            options: [
              { id: "A", text: "%5" },
              { id: "B", text: "%10" },
              { id: "C", text: "%20" },
              { id: "D", text: "%50" },
            ],
            correct: "B",
            explanation:
              "İşsizlik Oranı = (İşsiz Sayısı / İşgücü) × 100 formülüyle hesaplanır. İşgücü = İstihdam + İşsiz olduğu için İşsiz = 50 - 45 = 5 milyon kişidir. İşsizlik Oranı = (5 / 50) × 100 = %10. Önemli not: paydada toplam nüfus değil, 'işgücü' (15 yaş üzeri çalışmaya istekli ve aktif iş arayan kişiler) kullanılır.",
          },
          {
            text: "Aşağıdaki enflasyon türlerinden hangisi, üretim maliyetlerindeki artış nedeniyle ortaya çıkar?",
            options: [
              { id: "A", text: "Talep enflasyonu" },
              { id: "B", text: "Maliyet (arz) enflasyonu" },
              { id: "C", text: "Yapısal enflasyon" },
              { id: "D", text: "Hedonik enflasyon" },
            ],
            correct: "B",
            explanation:
              "Maliyet enflasyonu (arz enflasyonu); üretim maliyetlerinin (hammadde, enerji, ücretler vb.) artması sonucunda ürünlerin satış fiyatlarına yansıyan enflasyondur. 1973 Petrol Krizi gibi enerji şokları klasik örneklerdir. Talep enflasyonu ise toplam talebin toplam arzı aşmasından, yapısal enflasyon ise ekonomik yapıdaki kalıcı bozukluklardan (verimsizlik, oligopol, beklentiler) kaynaklanır.",
          },
        ],
      },
      // ──────────── Ders 5: Dış Ticaret ve Uluslararası Ekonomi ────────────
      {
        id: "m1008-l5",
        title: "Dış Ticaret Teorileri ve Ödemeler Dengesi",
        duration: "9 dk",
        summary: {
          title: "Dış Ticaret ve Uluslararası Ekonomi",
          intro:
            "Uluslararası ekonomi; ülkeler arasındaki mal, hizmet, sermaye ve emek hareketlerini inceleyen ekonomi dalıdır. Dış ticaret teorileri (Mutlak Üstünlük, Karşılaştırmalı Üstünlük, H-O Modeli) ülkelerin neden ticaret yaptığını açıklar. Ödemeler dengesi ise bir ülkenin yurt dışıyla yaptığı tüm ekonomik işlemlerin sistematik kaydıdır.",
          sections: [
            {
              heading: "Dış Ticaret Teorileri",
              icon: "shield",
              items: [
                {
                  strong: "Mutlak Üstünlük Teorisi (Adam Smith):",
                  text: "Bir ülke, bir malı diğer ülkelerden daha düşük maliyetle (daha az emekle) üretebiliyorsa o malda mutlak üstünlüğe sahiptir; her ülke mutlak üstünlüğü olduğu malı üretmelidir.",
                },
                {
                  strong: "Karşılaştırmalı Üstünlük Teorisi (David Ricardo):",
                  text: "Bir ülke tüm mallarda mutlak üstünlüğe sahip olsa bile, fırsat maliyetinin daha düşük olduğu (göreceli olarak daha verimli olduğu) malda uzmanlaşırsa ticaretten kazançlı çıkar.",
                },
                {
                  strong: "Heckscher-Ohlin (H-O) Modeli:",
                  text: "Ülkeler bol bulunan üretim faktörünü yoğun kullanan malları ihraç eder; emek-yoğun ülkeler emek-yoğun ürünler, sermaye-yoğun ülkeler sermaye-yoğun ürünler ihraç eder.",
                },
                {
                  strong: "Korumacılık Politikaları:",
                  text: "Gümrük tarifeleri, ithalat kotaları, anti-damping önlemleri ve sübvansiyonlar yerli üreticiyi korur ancak tüketici fiyatlarını yükseltir, küresel etkinliği azaltır.",
                },
                {
                  strong: "Serbest Ticaret Anlaşmaları:",
                  text: "İkili veya çoklu anlaşmalarla taraflar arası gümrük tarifelerini düşürür/kaldırır; AB Gümrük Birliği, Türkiye'nin imzaladığı STA'lar örnektir.",
                },
              ],
            },
            {
              heading: "Ödemeler Dengesi ve Döviz Kuru",
              icon: "trend",
              items: [
                {
                  strong: "Cari İşlemler Dengesi:",
                  text: "Mal ve hizmet ticareti, birincil gelirler (ücret, faiz, kâr payı) ve ikincil gelirler (transferler) toplamıdır; cari açık dış borçlanma ihtiyacı doğurur.",
                },
                {
                  strong: "Sermaye ve Finans Hesabı:",
                  text: "Doğrudan yatırımlar, portföy yatırımları, krediler ve rezerv değişimlerini kapsar; cari açığı finanse eden kaynaktır.",
                },
                {
                  strong: "Net Hata ve Noksan:",
                  text: "Ödemeler dengesinin teorik olarak sıfıra eşitlenmesi gerekir; kayıt dışı işlemler ve ölçüm hataları nedeniyle bir 'net hata ve noksan' kalemi vardır.",
                },
                {
                  strong: "Döviz Kuru Sistemleri:",
                  text: "Sabit kur (kur belirli bir paraya bağlanır), serbest dalgalanma (piyasa belirler), yönetilen dalgalanma (merkez bankası müdahale eder); Türkiye 2001'den beri serbest dalgalanma uygular.",
                },
                {
                  strong: "Reel Efektif Döviz Kuru (REDK):",
                  text: "Bir ülke parasının nominal değişimine ek olarak diğer ülkelerle enflasyon farkını da içeren bileşik göstergedir; REDK artışı yerli paranın aşırı değerlendiğini gösterir, ihracatı zorlaştırır.",
                },
              ],
            },
          ],
          tip: "Karşılaştırmalı üstünlük teorisi sınavın klasiğidir — bir ülke tüm mallarda mutlak üstünlüğe sahip olsa bile, ticaret yapması karşılıklı kazanç sağlar. Cari işlemler dengesi = Mal+Hizmet+Birincil+İkincil gelirler. REDK > 100 = TL aşırı değerli, REDK < 100 = TL ucuz. Türkiye 2001 sonrası serbest dalgalanma rejimindedir.",
          kavramlar: [
            { terim: "Karşılaştırmalı Üstünlük", tanim: "David Ricardo'nun teorisi; bir ülke tüm mallarda daha az verimli olsa bile, en az dezavantajlı olduğu malı üretip ihraç ederek ticaretten kazanç sağlar." },
            { terim: "Mutlak Üstünlük", tanim: "Adam Smith'in teorisi; bir ülkenin diğerine göre daha az kaynak kullanarak mal üretmesi; ticaret temelini açıklamada yetersiz kalır." },
            { terim: "Cari İşlemler Dengesi", tanim: "Ödemeler dengesi içinde mal ticareti, hizmet ticareti, birincil gelirler (faiz, kâr) ve ikincil gelirleri (transferler) kapsayan denge kalemi." },
            { terim: "Reel Efektif Döviz Kuru (REDK)", tanim: "TL'nin enflasyon farkına göre düzeltilmiş çok taraflı döviz kuru; >100 TL aşırı değerli, <100 TL rekabetçi düzeyde değersiz." },
            { terim: "Sabit Döviz Kuru Rejimi", tanim: "Ulusal paranın değerinin yabancı bir para birimine sabitlendiği kur sistemi; dış rekabetçilik esnekliği sınırlıdır." },
            { terim: "Serbest Dalgalanma Rejimi", tanim: "Döviz kurunun piyasa arz-talebine göre serbestçe belirlendiği kur sistemi; Türkiye 2001 krizinden sonra bu rejime geçmiştir." },
            { terim: "Dış Ticaret Açığı", tanim: "İthalatın ihracatı aşması; cari açığın en büyük bileşeni olan ve finansman için sermaye girişi gerektiren durum." },
          ],
          dikkatlar: [
            "Karşılaştırmalı üstünlük mutlak üstünlük gerektirmez; fırsat maliyeti en düşük olan mal ihraç edilir — 'en iyi olmak zorunlu değil' sınavın temel mesajıdır.",
            "REDK > 100 = TL aşırı değerli = ihracat pahalanır, ithalat ucuzlar; REDK < 100 = TL rekabetçi = ihracat canlanır.",
            "Cari işlemler dengesi dört bileşenden oluşur: mal ticareti + hizmet ticareti + birincil gelirler + ikincil gelirler — 'sermaye hesabı' cari işlemlerde yer almaz.",
            "Türkiye 2001 krizinden sonra serbest dalgalanma rejimine geçmiştir; sabit kur sistemini 2001 öncesiyle bağdaştırmak yanıltıcıdır.",
            "Dış ticaret açığı cari açığın en büyük kalemidir; finansmanı için yabancı sermaye girişi (FDI, portföy yatırımı, borç) gerekir.",
          ],
        },
        questions: [
          {
            text: "David Ricardo'nun 'karşılaştırmalı üstünlük' teorisi aşağıdakilerden hangisini öne sürer?",
            options: [
              { id: "A", text: "Bir ülke ancak mutlak üstünlüğe sahip olduğu malları üretmelidir." },
              { id: "B", text: "Bir ülke tüm mallarda mutlak üstünlüğe sahip olsa bile, fırsat maliyetinin düşük olduğu malda uzmanlaşıp ticarete katılarak kazançlı çıkar." },
              { id: "C", text: "Uluslararası ticaret her zaman zarara yol açar." },
              { id: "D", text: "Korumacılık her ülke için en iyi politikadır." },
            ],
            correct: "B",
            explanation:
              "Ricardo'nun karşılaştırmalı üstünlük teorisi, Adam Smith'in mutlak üstünlük teorisinin önemli bir genişlemesidir. Buna göre bir ülke tüm mallarda diğer ülkelerden daha verimli olsa bile, fırsat maliyetinin düşük olduğu malda uzmanlaşması (göreceli üstünlüğü olduğu malı üretmesi) ve ticaret yapması iki taraf için de kazanç yaratır. Bu teorem uluslararası ticaretin temel mantıksal dayanağıdır.",
          },
          {
            text: "Heckscher-Ohlin (H-O) modeline göre bir ülkenin ihraç edeceği mallar nasıl belirlenir?",
            options: [
              { id: "A", text: "En pahalı mallar ihraç edilir." },
              { id: "B", text: "Ülke bol bulunan üretim faktörünü yoğun kullanan malları ihraç eder; örneğin emek-yoğun ülkeler emek-yoğun ürünler ihraç eder." },
              { id: "C", text: "Yalnızca tüketim malları ihraç edilir." },
              { id: "D", text: "İhracat tamamen rastgeledir." },
            ],
            correct: "B",
            explanation:
              "H-O modeli (Heckscher-Ohlin) faktör donanımı yaklaşımını esas alır: ülkeler nispeten bol ve ucuz olan üretim faktörlerini yoğun kullanan malları ihraç eder, kıt ve pahalı olan faktörleri yoğun kullanan malları ithal eder. Örneğin emek-yoğun bir ülke (Bangladeş gibi) tekstil ürünleri ihraç ederken, sermaye-yoğun bir ülke (Almanya gibi) makine ihraç eder. Klasik teoriyi faktör donanımı ile genişleten teoremdir.",
          },
          {
            text: "Bir ülkenin Cari İşlemler Dengesi açıklamasında aşağıdaki kalemlerden hangisi yer ALMAZ?",
            options: [
              { id: "A", text: "Mal ticareti (ihracat-ithalat farkı)" },
              { id: "B", text: "Hizmet ticareti (turizm, taşımacılık)" },
              { id: "C", text: "Birincil gelirler (yurt dışı işçi ücretleri, faiz, kâr payı)" },
              { id: "D", text: "Doğrudan yabancı yatırımlar" },
            ],
            correct: "D",
            explanation:
              "Doğrudan yabancı yatırımlar (FDI) ve portföy yatırımları, Cari İşlemler Hesabı'nda değil 'Sermaye ve Finans Hesabı'nda yer alır. Cari İşlemler Dengesi dört bileşenden oluşur: (1) Mal ticareti, (2) Hizmet ticareti, (3) Birincil gelirler (ücret, faiz, kâr payı), (4) İkincil gelirler (karşılıksız transferler). Cari açık varsa bu açık genellikle sermaye hesabındaki net girişlerle finanse edilir.",
          },
          {
            text: "Reel Efektif Döviz Kuru (REDK) endeksinin değeri 110 olarak hesaplanmıştır (baz yıl = 100). Bu durum aşağıdakilerden hangisini gösterir?",
            options: [
              { id: "A", text: "Türk Lirası baz yıla göre %10 değer kaybetmiştir." },
              { id: "B", text: "Türk Lirası baz yıla göre %10 değerlenmiştir; bu durum TL'nin aşırı değerli olduğunu ve ihracatın zorlaşacağını gösterebilir." },
              { id: "C", text: "Enflasyon %110'a ulaşmıştır." },
              { id: "D", text: "Cari açık ortadan kalkmıştır." },
            ],
            correct: "B",
            explanation:
              "Reel Efektif Döviz Kuru (REDK) endeksi 100'ün üzerine çıktığında yerli paranın baz yıla kıyasla reel olarak değerlendiğini gösterir; bu durumda ihraç malları yabancı para cinsinden pahalanır (ihracat zorlaşır), ithal malları ucuzlar (ithalat artar). Endeks 100'ün altına düşerse yerli para reel olarak değer kaybeder; ihracat avantajı sağlar ancak ithalat pahalanır.",
          },
          {
            text: "Türkiye'nin uyguladığı döviz kuru rejimi ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "1980'den beri sabit kur uygulanmaktadır." },
              { id: "B", text: "Türkiye 2001 krizinden bu yana serbest dalgalanma (free floating) rejimi uygulamaktadır." },
              { id: "C", text: "Sürekli sürünen pariteli (crawling peg) sistem kullanılmaktadır." },
              { id: "D", text: "TL Euro'ya bağlıdır." },
            ],
            correct: "B",
            explanation:
              "Türkiye, 2001 Şubat ekonomik krizinden bu yana 'serbest dalgalanma' (free floating) döviz kuru rejimi uygulamaktadır. Öncesinde uygulanan sürünen pariteli (crawling peg) sabit kur sistemi krizle birlikte terk edilmiştir. Serbest dalgalanma rejiminde döviz kuru piyasa arz-talep koşullarına göre belirlenir; TCMB ise yalnızca aşırı dalgalanmalara karşı zaman zaman müdahale eder.",
          },
        ],
      },
    ],
  },
];