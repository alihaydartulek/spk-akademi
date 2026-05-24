/* ─────────────────────────────────────────────────────────────────────────────
 * İnşaat ve Gayrimenkul Muhasebesi (1015)
 *
 * Kaynak: SPL 1015 Çalışma Notu, 31 Aralık 2025 (285 sayfa)
 * Sınavlar: Gayrimenkul Değerleme Sınavı
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1013 (Vergi) ve 1014 (Gayrimenkul Değerleme) ile minimum çakışma
 * vardır; 1015 ise saf inşaat muhasebesi (özel inşaat-taahhüt ayrımı, maliyet
 * hesapları, TMS/TFRS standartları, KDV uygulamaları) konusuna odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1015 } from "./mevzuat-1015";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011,
 *     ...mevzuat1012, ...mevzuat1013, ...mevzuat1014, ...mevzuat1015
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1015: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1015 İNŞAAT VE GAYRİMENKUL MUHASEBESİ
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1015",
    title: "Modül · İnşaat ve Gayrimenkul Muhasebesi (1015)",
    lessons: [
      // ──────────── Ders 1: İnşaat Sektörü ve İşletme Türleri ────────────
      {
        id: "m1015-l1",
        title: "İnşaat Sektörü, İşletme Türleri ve Kamu-Özel İşbirliği",
        duration: "9 dk",
        summary: {
          title: "İnşaat Sektörü ve Çalışma Esasları",
          intro:
            "İnşaat; toprağa bağlı, sürekli kalmak amacıyla meydana getirilen ekonomik tesislerin oluşturulmasıdır. Hukuki dayanağı 6098 sayılı Türk Borçlar Kanunu'ndaki 'eser sözleşmesi' (md. 470), 3194 sayılı İmar Kanunu ve 4734 sayılı Kamu İhale Kanunu'dur. İnşaat işletmeleri faaliyet biçimine göre 'Özel İnşaat İşletmeleri' (kendi adına satmak amacıyla inşa edenler) ve 'İnşaat Taahhüt İşletmeleri' (başkası adına bedel karşılığında inşa edenler) olarak ikiye ayrılır.",
          sections: [
            {
              heading: "İnşaat Sektörü Tanımı ve Hukuki Çerçeve",
              icon: "shield",
              items: [
                {
                  strong: "İnşaat Tanımı:",
                  text: "Toprağa bağlı, sürekli kalmak amacıyla meydana getirilen ve ekonomik değer taşıyan tesislerin oluşturulmasıdır; imalatın özel bir biçimi olarak nitelendirilir.",
                },
                {
                  strong: "Eser Sözleşmesi (TBK md. 470):",
                  text: "Yüklenicinin bir eser meydana getirmeyi, iş sahibinin de bunun karşılığında bir bedel ödemeyi üstlendiği sözleşmedir; inşaat sözleşmesinin hukuki temelidir.",
                },
                {
                  strong: "Yapım Tanımı (KİK md. 4):",
                  text: "Kamu İhale Kanunu yapımı geniş kapsamlı tanımlar: bina, karayolu, köprü, baraj, enerji santrali ve benzeri her türlü inşaat işleri ile tesisat, imalat, nakliye, tamamlama, montaj işleri.",
                },
                {
                  strong: "Sektörün Genel Özellikleri:",
                  text: "Uzun üretim süresi, yüksek sermaye yoğunluğu, ekonomi ile yüksek bağlantı, sektörel çarpan etkisi, çok sayıda alt sektörle ilişki, yüksek istihdam yaratma kapasitesi.",
                },
                {
                  strong: "Yıllara Yaygın İnşaat:",
                  text: "Birden fazla takvim yılına yayılan inşaat işleri; muhasebeleştirme açısından özel kurallara tabidir (GVK md. 42-44 ve TFRS 15).",
                },
              ],
            },
            {
              heading: "İnşaat İşletmeleri ve Kamu-Özel İşbirliği Modelleri",
              icon: "trend",
              items: [
                {
                  strong: "Özel İnşaat İşletmeleri:",
                  text: "Kendi adına ve kendi hesabına gayrimenkul üreten ve satan işletmelerdir; ürettikleri konut/ticari yapıları stok olarak değerlendirir, satış sonrası hasılat oluşur.",
                },
                {
                  strong: "İnşaat Taahhüt İşletmeleri:",
                  text: "Bir işverene karşı bedel karşılığında inşaat eserini meydana getirmeyi taahhüt eden işletmelerdir; gelirleri eserin tamamlanması veya tamamlanma oranına göre tanımlanır.",
                },
                {
                  strong: "Yap-İşlet-Devret (YİD):",
                  text: "Özel sektör tesisi inşa eder, belirli süre işletip kâr eder, sonunda kamuya devreder; otoyol, köprü, hava limanı projeleri tipik örnektir.",
                },
                {
                  strong: "Yap-Kirala-Devret (YKD):",
                  text: "Özel sektör tesisi inşa eder, kamuya kiralar (kamu tesisi belirli süre kira öder), sürenin sonunda mülkiyet kamuya devredilir; şehir hastaneleri tipik örnektir.",
                },
                {
                  strong: "Yap-İşlet (Yİ) ve İşletme Hakkı Devri:",
                  text: "Yap-İşlet'te tesis inşa edilip işletilir, devir yoktur (enerji santralleri); İşletme Hakkı Devri'nde mevcut kamu tesisinin işletme hakkı süreli olarak özel sektöre devredilir.",
                },
              ],
            },
          ],
          tip: "İki temel inşaat işletmesi: Özel İnşaat (kendi adına) + İnşaat Taahhüt (başkası adına). Eser sözleşmesi TBK md. 470 — inşaatın hukuki temeli. KÖİ modelleri: YİD (devirli), Yİ (devirsiz), YKD (kira+devir), İHD (mevcut tesis). Yıllara yaygın inşaat = birden fazla takvim yılı, özel muhasebe kuralları.",
        },
        questions: [
          {
            text: "Türk Borçlar Kanunu'nun 470. maddesinde tanımlanan 'eser sözleşmesi' inşaat hukuku açısından ne anlama gelir?",
            options: [
              { id: "A", text: "Eser sözleşmesi sadece sanat eserleri için geçerlidir." },
              { id: "B", text: "Yüklenicinin bir eser meydana getirmeyi, iş sahibinin de bunun karşılığında bir bedel ödemeyi üstlendiği sözleşmedir; inşaat sözleşmesinin hukuki temelini oluşturur." },
              { id: "C", text: "Eser sözleşmesi yalnızca devlete karşı yapılan inşaat işleri için kullanılır." },
              { id: "D", text: "Eser sözleşmesi günlük basit işler için kullanılır." },
            ],
            correct: "B",
            explanation:
              "Türk Borçlar Kanunu'nun 470. maddesinde eser sözleşmesi; 'Yüklenicinin bir eser meydana getirmeyi, iş sahibinin de bunun karşılığında bir bedel ödemeyi üstlendiği sözleşme' olarak tanımlanır. İnşaat sözleşmeleri bu tanıma tipik olarak uyduğu için hukuki dayanağı eser sözleşmesidir. Bir heykeltıraş ile sipariş verenin ilişkisi de bir eser sözleşmesidir; aynı şekilde bir müteahhit ile belediye arasındaki kaldırım yapım sözleşmesi de eser sözleşmesidir. Eser sözleşmesinde yüklenicinin temel borcu eseri sözleşmeye uygun olarak meydana getirmek, iş sahibinin temel borcu ise bedeli ödemek ve eseri kabul etmektir.",
          },
          {
            text: "Özel inşaat işletmesi ile inşaat taahhüt işletmesi arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki işletme türü aynıdır." },
              { id: "B", text: "Özel inşaat işletmesi kendi adına ve kendi hesabına inşa edip satar (ürünleri stoktur); inşaat taahhüt işletmesi ise bir işverene karşı bedel karşılığında inşaat eserini meydana getirmeyi taahhüt eder." },
              { id: "C", text: "Özel inşaat işletmesi yalnızca konut, taahhüt işletmesi yalnızca ticari yapı yapar." },
              { id: "D", text: "Özel inşaat işletmesi yalnızca yabancı yatırımcı sahipliğindedir." },
            ],
            correct: "B",
            explanation:
              "İki inşaat işletmesi türü arasındaki temel fark; üretilen yapının kim adına ve kimin hesabına yapıldığıdır. (1) Özel İnşaat İşletmesi (yapsatçı/kat karşılığı vb.); kendi adına ve hesabına inşa eder, ürettiği konut/ticari yapıları kendisi pazarlayıp satar. Bu yapıların stok değeri ve maliyetleri 'mamuller' veya 'inşaat halindeki gayrimenkuller' olarak izlenir. (2) İnşaat Taahhüt İşletmesi (müteahhit); bir işverenin (kamu veya özel) verdiği iş için bedel karşılığında inşaat yapar. Tamamlanan yapı işverenin malıdır; gelir hak edişler aracılığıyla tahsil edilir. Bu iki tür farklı muhasebe ve vergi düzenlemelerine tabidir.",
          },
          {
            text: "Yap-İşlet-Devret (YİD) modeli ile Yap-Kirala-Devret (YKD) modeli arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki model aynı şeyi farklı isimlerle ifade eder." },
              { id: "B", text: "YİD'de özel sektör tesisi inşa eder, belirli süre işletip kâr eder, sonunda kamuya devreder (otoyol, köprü); YKD'de özel sektör tesisi inşa eder, kamuya kiralar (kamu kira öder), sürenin sonunda mülkiyet devredilir (şehir hastaneleri tipik örnektir)." },
              { id: "C", text: "YİD yalnızca yabancı şirketler için, YKD yalnızca yerli şirketler için kullanılır." },
              { id: "D", text: "YİD'de devir yoktur, YKD'de devir vardır." },
            ],
            correct: "B",
            explanation:
              "Yap-İşlet-Devret (YİD) ve Yap-Kirala-Devret (YKD) Kamu-Özel İşbirliği (KÖİ) modelleridir. Aralarındaki temel fark; özel sektörün geliri nasıl elde ettiğidir. YİD'de özel sektör tesisi inşa eder, belirli sözleşme süresi boyunca işletir ve son kullanıcıdan ücret tahsil ederek (otoyol geçiş ücreti, köprü gişesi, havalimanı işletme ücreti) gelirini elde eder; sürenin sonunda tesis kamuya devredilir. YKD'de ise özel sektör tesisi inşa eder ve kamuya kiraya verir; kamu (Bakanlık, hastane idaresi vb.) belirli süre kira öder ve hizmeti son kullanıcıya kendisi sunar. Şehir hastaneleri YKD'nin tipik örneğidir.",
          },
          {
            text: "Aşağıdakilerden hangisi yıllara yaygın inşaat işlerini tanımlar?",
            options: [
              { id: "A", text: "Bir takvim yılı içinde tamamlanan inşaat işleri" },
              { id: "B", text: "Birden fazla takvim yılına yayılan inşaat işleri; muhasebeleştirme açısından özel kurallara tabidir (GVK md. 42-44 ve TFRS 15)." },
              { id: "C", text: "Yalnızca devlet tarafından yapılan inşaat işleri" },
              { id: "D", text: "Yalnızca bütçesi 1 milyon TL'den fazla olan inşaat işleri" },
            ],
            correct: "B",
            explanation:
              "Yıllara yaygın inşaat işleri; başlangıç ve bitiş tarihleri farklı takvim yıllarında olan inşaat işleridir (örneğin 2024'te başlayıp 2026'da biten bir köprü inşaatı). Bu işler için özel muhasebeleştirme ve vergileme kuralları uygulanır: GVK md. 42-44 vergi açısından düzenler, TFRS 15 (Müşterilerle Yapılan Sözleşmeden Doğan Hasılat) muhasebe açısından düzenler. Vergisel olarak; iş bitiminde toplam kazanç o yıl beyannamede gösterilir, geçici kabul (proje teslim) tarihi belirleyicidir. Muhasebede ise iki yöntem vardır: (1) Tamamlanma yüzdesi yöntemi — her yıl tamamlanma oranına göre gelir/maliyet kaydedilir, (2) Tamamlanmış sözleşme yöntemi — gelir/maliyet iş bitiminde tek seferde kaydedilir.",
          },
          {
            text: "İnşaat sektörünün genel özelliği için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İnşaat sektörü ekonomiyle bağlantısı düşük olan tek başına bir sektördür." },
              { id: "B", text: "Uzun üretim süresi, yüksek sermaye yoğunluğu, ekonomi ile yüksek bağlantı (sektörel çarpan etkisi), çok sayıda alt sektörle ilişki, yüksek istihdam yaratma kapasitesi." },
              { id: "C", text: "İnşaat sektörü kısa vadeli üretim yapan bir sektördür." },
              { id: "D", text: "İnşaat sektörü düşük istihdam yaratan bir sektördür." },
            ],
            correct: "B",
            explanation:
              "İnşaat sektörü ekonomide önemli bir konuma sahip 'lokomotif' sektördür. Genel özellikleri: (1) Uzun üretim süresi — bir inşaatın tamamlanması aylar/yıllar sürer, (2) Yüksek sermaye yoğunluğu — büyük yatırımlar gerektirir, (3) Yüksek sektörel çarpan etkisi — çimento, demir, cam, mobilya, elektrik tesisatı, beyaz eşya gibi çok sayıda sektörü besler ('üreten sektörler' zinciri), (4) Yüksek istihdam yaratma kapasitesi — niteliksiz işçiden mühendis-mimara kadar geniş yelpazede istihdam yaratır, (5) Ekonomik çevrim duyarlılığı — büyüme dönemlerinde hızla genişler, durgunlukta hızla daralır. Bu özellikleri nedeniyle inşaat sektörü ülke ekonomisinin sağlığının önemli bir göstergesidir.",
          },
        ],
      },
      // ──────────── Ders 2: Muhasebenin Temelleri ve Finansal Tablolar ────────────
      {
        id: "m1015-l2",
        title: "Muhasebe Temelleri ve İnşaatta Finansal Tablolar",
        duration: "10 dk",
        summary: {
          title: "Muhasebenin Temelleri ve Finansal Tablolar",
          intro:
            "Muhasebe; işletmelerin mali nitelikteki işlemlerini ve olaylarını para birimi cinsinden kaydetme, sınıflandırma, özetleme, analiz ve yorumlama bilim ve sanatıdır. Muhasebenin temel kavramları (sosyal sorumluluk, kişilik, işletmenin sürekliliği, ihtiyatlılık vb.) ve genel kabul görmüş muhasebe ilkeleri tüm işletmeler için geçerlidir. İnşaat işletmelerinin tabi olduğu finansal raporlama çerçeveleri ise işletme büyüklüğüne göre değişir: TMS/TFRS (büyük işletmeler), BOBİ FRS (orta-küçük), KÜMİ FRS (küçük-mikro).",
          sections: [
            {
              heading: "Muhasebenin Temel Kavramları",
              icon: "shield",
              items: [
                {
                  strong: "Sosyal Sorumluluk Kavramı:",
                  text: "Muhasebe yalnızca işletme sahiplerine değil, tüm ilgili taraflara (devlet, çalışanlar, alacaklılar, yatırımcılar) doğru ve tarafsız bilgi sağlamakla yükümlüdür.",
                },
                {
                  strong: "Kişilik ve İşletmenin Sürekliliği:",
                  text: "İşletmenin sahibinden ayrı bir kişiliği vardır; ayrıca işletmenin faaliyetlerinin sınırsız bir süre devam edeceği varsayılır (going concern), aksi belirtilmedikçe.",
                },
                {
                  strong: "Dönemsellik ve Parayla Ölçülme:",
                  text: "Faaliyetler belirli dönemlere bölünerek değerlendirilir (genellikle 1 yıl); muhasebe yalnızca para ile ölçülebilen olayları kaydeder.",
                },
                {
                  strong: "Maliyet Esası ve Tarafsızlık-Belgelendirme:",
                  text: "Varlıklar ve borçlar başlangıçta maliyet bedeli ile kaydedilir; tüm muhasebe kayıtları belgelere dayalı olmalı ve tarafsız nitelikte olmalıdır.",
                },
                {
                  strong: "Tutarlılık, Tam Açıklama, İhtiyatlılık ve Önemlilik:",
                  text: "Muhasebe politikaları tutarlı uygulanmalı, finansal tablolar tam açıklamayı sağlamalı, beklenen kayıplar derhal kaydedilmeli (ihtiyatlılık), önemli kalemler ayrı gösterilmelidir.",
                },
              ],
            },
            {
              heading: "Finansal Tablolar ve Raporlama Çerçeveleri",
              icon: "trend",
              items: [
                {
                  strong: "Finansal Durum Tablosu (Bilanço):",
                  text: "İşletmenin belirli bir tarihteki varlıklarını, borçlarını ve özkaynağını gösteren tablodur; Varlıklar = Borçlar + Özkaynak temel denklemi geçerlidir.",
                },
                {
                  strong: "Kâr-Zarar Tablosu (Gelir Tablosu):",
                  text: "Belirli bir dönemdeki hasılat, maliyet ve giderlerin sonucu olarak ortaya çıkan dönem kârı/zararını gösteren tablodur; brüt kâr, FAVÖK, FVÖK, vergi öncesi kâr ve net kâr basamakları vardır.",
                },
                {
                  strong: "Nakit Akış Tablosu ve Özkaynak Değişim Tablosu:",
                  text: "Nakit akışı işletme, yatırım ve finansman faaliyetlerinden gelen nakit hareketlerini gösterir; özkaynak değişim tablosu sermaye, yedekler ve dönem kârının dönem içi değişimini gösterir.",
                },
                {
                  strong: "Raporlama Çerçeveleri:",
                  text: "Türkiye'de üç temel raporlama çerçevesi: TMS/TFRS (büyük ve halka açık işletmeler), BOBİ FRS (orta ve küçük işletmeler), KÜMİ FRS (küçük ve mikro işletmeler).",
                },
                {
                  strong: "Tekdüzen Muhasebe Sistemi:",
                  text: "VUK kapsamında defter tutan işletmelerin uygulayacağı standart hesap planıdır; 1-9 grupları (varlıklar, kaynaklar, gelir tablosu, maliyet hesapları) ile yapılandırılır.",
                },
              ],
            },
          ],
          tip: "5 temel finansal tablo: Bilanço, Gelir Tablosu, Nakit Akış, Özkaynak Değişim, Dipnotlar. Türkiye'de 3 raporlama çerçevesi: TMS/TFRS (büyük), BOBİ FRS (orta), KÜMİ FRS (küçük). Tekdüzen Hesap Planı: 1-2 (Varlık), 3-4 (Borç), 5 (Özkaynak), 6 (Gelir Tablosu), 7 (Maliyet Hesapları). Going concern (süreklilik) muhasebenin temel varsayımıdır.",
        },
        questions: [
          {
            text: "Muhasebenin temel kavramlarından 'işletmenin sürekliliği' (going concern) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İşletmenin yalnızca 1 yıl faaliyet göstereceği varsayılır." },
              { id: "B", text: "İşletmenin faaliyetlerinin sınırsız bir süre devam edeceği varsayılır (going concern), aksi belirtilmedikçe; bu varsayım maliyet esası, dönemsellik ve amortisman uygulamasının temelini oluşturur." },
              { id: "C", text: "İşletmeler her yıl tasfiye olur." },
              { id: "D", text: "İşletmeler yalnızca devlet tarafından sürdürülür." },
            ],
            correct: "B",
            explanation:
              "İşletmenin sürekliliği (going concern) varsayımı; muhasebenin en kritik temel kavramlarından biridir. Aksi belirtilmedikçe ve kanıtlanmadıkça işletmenin faaliyetlerinin sınırsız bir süre devam edeceği varsayılır. Bu varsayım altında: (1) Varlıklar maliyet bedeliyle değerlenebilir (tasfiye değeri yerine), (2) Uzun vadeli yatırımlar (örn. binalar) amortismana tabi tutulabilir (kullanım süresince giderleştirilir), (3) Geleceğe yönelik yükümlülükler (kıdem tazminatı vb.) tahakkuk ettirilebilir. Eğer işletmenin sürekliliği şüpheliyse (iflas, tasfiye), bu durum dipnotlarda açıklanmalı ve değerleme esasları buna göre değiştirilmelidir.",
          },
          {
            text: "Türkiye'de finansal raporlama çerçeveleri için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm işletmeler aynı raporlama çerçevesini uygular." },
              { id: "B", text: "Üç temel raporlama çerçevesi vardır: TMS/TFRS (büyük ve halka açık işletmeler), BOBİ FRS (orta ve küçük işletmeler), KÜMİ FRS (küçük ve mikro işletmeler) — işletme büyüklüğüne göre uygulanan çerçeve değişir." },
              { id: "C", text: "Yalnızca bankalar TFRS uygular, diğerleri istediğini uygular." },
              { id: "D", text: "Türkiye'de finansal raporlama çerçevesi yoktur." },
            ],
            correct: "B",
            explanation:
              "Türkiye'de finansal raporlama çerçeveleri kademeli yapıdadır: (1) TMS/TFRS (Türkiye Muhasebe Standartları/Türkiye Finansal Raporlama Standartları) — Halka açık şirketler, bankalar, sigorta şirketleri ve büyük ölçekli işletmelerin uyguladığı, IFRS ile uyumlu standartlar bütünüdür; (2) BOBİ FRS (Büyük ve Orta Boy İşletmeler için Finansal Raporlama Standardı) — bağımsız denetime tabi olan ancak TFRS uygulamayan büyük ve orta ölçekli işletmeler için tasarlanmıştır; (3) KÜMİ FRS (Küçük ve Mikro İşletmeler için Finansal Raporlama Standardı) — küçük ve mikro ölçekli işletmeler için en basit raporlama çerçevesidir. KGK (Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu) bu standartları belirler.",
          },
          {
            text: "Finansal Durum Tablosu (Bilanço) için temel muhasebe denklemi aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Gelir = Gider + Kâr" },
              { id: "B", text: "Varlıklar = Borçlar + Özkaynak" },
              { id: "C", text: "Sermaye = Yedek + Kâr" },
              { id: "D", text: "Aktif = Pasif × 2" },
            ],
            correct: "B",
            explanation:
              "Finansal Durum Tablosunun (Bilanço) temel muhasebe denklemi: Varlıklar = Borçlar + Özkaynak. Bu denklem 'çift taraflı kayıt' (double-entry bookkeeping) sisteminin temelini oluşturur ve işletmenin kaynaklarının (sol taraf — varlıklar) ve bu kaynakların finansman kaynaklarının (sağ taraf — borçlar ve özkaynak) her zaman eşit olduğunu ifade eder. Diğer ifadeyle: 'işletmenin sahip olduğu her şey' = 'başkalarına borçlu olduğu' + 'sahiplerin payı'. Bu denklem her işlemde korunur; örneğin nakit ile mal alındığında bir varlık (mal) artarken başka bir varlık (nakit) azalır; denklem değişmez. Borçla mal alındığında ise hem varlık (mal) hem borç artar.",
          },
          {
            text: "Tekdüzen Muhasebe Sistemi'nde hesap grupları için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm hesaplar tek bir grupta toplanır." },
              { id: "B", text: "1-2 grupları varlıklar (dönen ve duran), 3-4 grupları borçlar (kısa ve uzun vadeli), 5 grubu özkaynak, 6 grubu gelir tablosu (gelir-gider), 7 grubu maliyet hesaplarıdır." },
              { id: "C", text: "Hesap grupları yalnızca devlet kurumları için belirlenmiştir." },
              { id: "D", text: "Hesap grupları işletmeler tarafından serbestçe seçilir." },
            ],
            correct: "B",
            explanation:
              "Tekdüzen Muhasebe Sistemi (TDMS) hesap planı 9 grupta yapılandırılmıştır. (1-2): Aktif (varlıklar) grupları — 1: Dönen Varlıklar (kasa, banka, ticari alacaklar, stoklar), 2: Duran Varlıklar (maddi/maddi olmayan duran varlıklar). (3-4): Pasif (borçlar) grupları — 3: Kısa Vadeli Yabancı Kaynaklar, 4: Uzun Vadeli Yabancı Kaynaklar. (5): Özkaynaklar — sermaye, yedekler, geçmiş yıl kârları. (6): Gelir Tablosu Hesapları — satışlar, satışların maliyeti, faaliyet giderleri. (7): Maliyet Hesapları — 7/A (fonksiyon bazlı) veya 7/B (gider çeşidi bazlı). (0 ve 9): Nazım hesaplar. Bu standart hesap planı VUK kapsamında defter tutan tüm işletmeler için zorunludur ve karşılaştırılabilirliği sağlar.",
          },
          {
            text: "Aşağıdakilerden hangisi 5 temel finansal tablo arasında yer ALMAZ?",
            options: [
              { id: "A", text: "Finansal Durum Tablosu (Bilanço) ve Kâr-Zarar Tablosu (Gelir Tablosu)" },
              { id: "B", text: "Nakit Akış Tablosu ve Özkaynak Değişim Tablosu" },
              { id: "C", text: "Dipnotlar ve Açıklayıcı Notlar" },
              { id: "D", text: "Müşteri Memnuniyet Anketi" },
            ],
            correct: "D",
            explanation:
              "Finansal raporlamanın 5 temel bileşeni: (1) Finansal Durum Tablosu (Bilanço) — belirli bir tarihteki varlık/borç/özkaynak yapısı, (2) Kâr-Zarar Tablosu (Gelir Tablosu) ve Diğer Kapsamlı Gelir Tablosu — dönem performansı, (3) Nakit Akış Tablosu — işletme/yatırım/finansman faaliyetlerinden nakit hareketleri, (4) Özkaynak Değişim Tablosu — sermaye/yedekler/dağıtılmamış kâr değişimi, (5) Dipnotlar ve Açıklayıcı Notlar — sayısal verileri açıklayan ve detay veren açıklamalar. Müşteri memnuniyet anketi yönetim raporlama aracı olabilir ancak finansal raporlama bileşeni değildir. Bu 5 bileşen TMS/TFRS, BOBİ FRS ve uluslararası IFRS standartlarına göre zorunludur.",
          },
        ],
      },
      // ──────────── Ders 3: İnşaat Muhasebesi Uygulamaları ────────────
      {
        id: "m1015-l3",
        title: "İnşaat İşletmelerinde Muhasebe Uygulamaları ve Maliyet Hesapları",
        duration: "10 dk",
        summary: {
          title: "İnşaat İşletmelerinde Muhasebe Uygulamaları",
          intro:
            "İnşaat işletmelerinin muhasebe uygulamaları; iki temel işletme türünün (özel inşaat-taahhüt) farklı yapılarına göre şekillenir. Özel inşaat işletmelerinde inşa edilen yapılar 'inşaat halindeki gayrimenkul' veya 'mamuller' olarak izlenir, satış sonrası hasılat tanımlanır. İnşaat taahhüt işletmelerinde ise yıllara yaygın olup olmamasına göre tamamlanma yüzdesi yöntemi veya iş bitiminde hasılat kaydı yöntemi uygulanır. Maliyet hesapları 7. grup hesaplarda izlenir (7/A fonksiyon bazlı, 7/B gider çeşidi bazlı).",
          sections: [
            {
              heading: "Maliyet Hesapları ve İnşaat Maliyetleri",
              icon: "shield",
              items: [
                {
                  strong: "7/A ve 7/B Seçenekleri:",
                  text: "Tekdüzen Hesap Planı'nda maliyet hesapları iki seçeneğe göre tutulur — 7/A: fonksiyon bazlı (üretim, ar-ge, pazarlama, genel yönetim); 7/B: gider çeşidi bazlı (ilk madde, işçilik, dışarıdan sağlanan fayda).",
                },
                {
                  strong: "İnşaat Maliyeti Bileşenleri:",
                  text: "Doğrudan ilk madde ve malzeme (çimento, demir, tuğla), doğrudan işçilik (inşaat işçileri ücretleri), genel üretim giderleri (proje yönetimi, makine kira, sigorta) ve değişken/sabit ayrımı yapılır.",
                },
                {
                  strong: "Özel İnşaat İşletmelerinde Maliyetlendirme:",
                  text: "İnşaat halindeki yapılar 'maliyet bedeli' ile stoklarda izlenir; arsa maliyeti, müteahhit hak edişleri, yapı denetim, izin/ruhsat masrafları, finansman giderleri (TFRS uygun ise) maliyete eklenir.",
                },
                {
                  strong: "Arsa Karşılığı İnşaat:",
                  text: "Arsa sahibinin müteahhide arsa vermesi karşılığında belirli bağımsız bölümleri alması yapısıdır; muhasebede özel kayıt yöntemleri (eşdeğer fiyat sistemi) uygulanır.",
                },
                {
                  strong: "Satışların Muhasebeleştirilmesi:",
                  text: "Konut/dükkan satışında hasılat ile maliyet karşılaştırılır; hasılat 600 (Yurtiçi Satışlar), maliyet 620 (Satılan Mamul/Mal Maliyeti) hesaplarına kaydedilir.",
                },
              ],
            },
            {
              heading: "Yıllara Yaygın İnşaat Taahhüt Muhasebesi",
              icon: "trend",
              items: [
                {
                  strong: "Yıllara Yaygın Olmayan İnşaat:",
                  text: "Bir takvim yılı içinde başlayıp biten taahhüt işleridir; tamamlandığında hasılat kaydedilir, normal işletme muhasebesi gibi izlenir.",
                },
                {
                  strong: "Yıllara Yaygın İnşaat — Vergisel Yaklaşım:",
                  text: "GVK md. 42-44 uyarınca; iş bitimine kadar gelir/maliyet biriktirilir, iş bittiği yıl tüm kâr o yıla ait beyannamede gösterilir; geçici kabul tarihi belirleyicidir.",
                },
                {
                  strong: "Yıllara Yaygın İnşaat — Muhasebe Yaklaşımı (TFRS 15):",
                  text: "İki yöntem vardır: (1) Tamamlanma Yüzdesi Yöntemi (her yıl tamamlanma oranına göre gelir/maliyet kaydı), (2) İş Bitiminde Hasılat Kaydı Yöntemi (gelir/maliyet iş bitiminde tek seferde).",
                },
                {
                  strong: "Tamamlanma Oranı Hesaplama:",
                  text: "Tamamlanma oranı = (Bu Tarihe Kadar Yapılan Maliyet) / (Tahmini Toplam Maliyet); örneğin 200/1000 = %20 tamamlanma; bu orana göre hasılat tanımlanır.",
                },
                {
                  strong: "170 Hesabı — Yıllara Yaygın Maliyetler:",
                  text: "Yıllara yaygın inşaat ve onarma işlerinde maliyet 170 hesabında biriktirilir; iş bittiğinde 622 hesabına aktarılır ve hasılat 350 hesabından mahsup edilir.",
                },
              ],
            },
          ],
          tip: "Maliyet hesapları 7. grup: 7/A (fonksiyon) veya 7/B (gider çeşidi). Özel inşaat = stok mantığı, taahhüt = sözleşme mantığı. Yıllara yaygın iş için iki yöntem: Tamamlanma Yüzdesi (TFRS 15) vs İş Bitiminde Hasılat (Vergi-GVK 42). Tamamlanma oranı = Yapılan Maliyet/Toplam Tahmini Maliyet. Hesap 170 = yıllara yaygın maliyetler.",
        },
        questions: [
          {
            text: "Tekdüzen Muhasebe Sistemi'nde maliyet hesapları için 7/A ve 7/B seçenekleri arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki seçenek arasında fark yoktur." },
              { id: "B", text: "7/A: fonksiyon bazlı (üretim, ar-ge, pazarlama, genel yönetim) — büyük işletmeler için; 7/B: gider çeşidi bazlı (ilk madde, işçilik, dışarıdan sağlanan fayda) — daha basit, küçük-orta işletmeler için." },
              { id: "C", text: "7/A yalnızca yabancı şirketler, 7/B yerli şirketler için kullanılır." },
              { id: "D", text: "İki seçenek arasında istisnai durumlarda seçim yapılır." },
            ],
            correct: "B",
            explanation:
              "Tekdüzen Hesap Planı'nda maliyet hesapları 7. grupta izlenir ve iki seçenek arasında tercih yapılır: (1) 7/A Seçeneği — Fonksiyon bazlı maliyet izleme; 710 (Direkt İlk Madde ve Malzeme), 720 (Direkt İşçilik), 730 (Genel Üretim Giderleri), 740 (Hizmet Üretim Maliyeti), 750 (Araştırma Geliştirme Giderleri), 760 (Pazarlama Satış Dağıtım Giderleri), 770 (Genel Yönetim Giderleri), 780 (Finansman Giderleri) gibi hesaplarla detaylı izleme yapar. Büyük işletmeler için uygundur. (2) 7/B Seçeneği — Gider çeşidi bazlı; 791 (İlk Madde ve Malzeme), 792 (İşçi Ücret ve Giderleri), 793 (Memur Ücret ve Giderleri), 794 (Dışarıdan Sağlanan Fayda ve Hizmetler), 795 (Çeşitli Giderler), 796 (Vergi Resim ve Harçlar), 797 (Amortisman ve Tükenme Payları), 798 (Finansman Giderleri) hesapları kullanılır. Daha basit, küçük-orta işletmeler için tercih edilir.",
          },
          {
            text: "Yıllara yaygın inşaat işlerinde 'tamamlanma yüzdesi yöntemi' ile 'iş bitiminde hasılat kaydı' arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki yöntem aynı sonucu verir." },
              { id: "B", text: "Tamamlanma yüzdesi yöntemi her yıl tamamlanma oranına göre gelir/maliyet kaydeder (TFRS 15 muhasebe yaklaşımı); iş bitiminde hasılat kaydı yöntemi ise tüm geliri ve maliyeti iş bittiği yıl tek seferde kaydeder (GVK md. 42-44 vergisel yaklaşım)." },
              { id: "C", text: "Tamamlanma yüzdesi yöntemi yalnızca konut için, iş bitiminde hasılat ticari yapı için kullanılır." },
              { id: "D", text: "Tamamlanma yüzdesi yöntemi vergi mevzuatı, iş bitiminde hasılat ise muhasebe standartları yöntemidir." },
            ],
            correct: "B",
            explanation:
              "Yıllara yaygın inşaat işlerinde iki temel muhasebeleştirme yöntemi vardır ve farklı amaçlara hizmet ederler: (1) Tamamlanma Yüzdesi Yöntemi (Percentage of Completion) — TFRS 15 (Müşterilerle Yapılan Sözleşmeden Doğan Hasılat) standardının önerdiği yöntemdir. Her dönem sonunda işin tamamlanma oranı (örn. yapılan maliyet / tahmini toplam maliyet) hesaplanır, bu orana göre dönem hasılatı, maliyeti ve kârı tanımlanır. Avantajı; finansal tabloların gerçek performansı yansıtmasıdır. (2) İş Bitiminde Hasılat Kaydı Yöntemi (Completed Contract) — GVK md. 42-44 vergi mevzuatının kabul ettiği yöntemdir. İş bitimine kadar gelir/maliyet 170 ve 350 hesaplarında bekletilir, geçici kabul tarihinde tüm kâr o yıla ait beyannamede gösterilir. İhtiyatlı bir yöntemdir ancak finansal performansı yansıtmaz. Türkiye'de işletmeler genellikle vergi için iş bitiminde hasılat, finansal raporlama için tamamlanma yüzdesi kullanır.",
          },
          {
            text: "Yıllara yaygın bir inşaat taahhüt işinde tahmini toplam maliyet 1.000.000 TL, yıl sonuna kadar yapılan maliyet 200.000 TL ise tamamlanma oranı kaçtır?",
            options: [
              { id: "A", text: "%5" },
              { id: "B", text: "%10" },
              { id: "C", text: "%20" },
              { id: "D", text: "%50" },
            ],
            correct: "C",
            explanation:
              "Tamamlanma yüzdesi yöntemi formülü: Tamamlanma Oranı = (Bu Tarihe Kadar Yapılan Maliyet) / (Tahmini Toplam Maliyet) × 100. Bu örnekte: Tamamlanma Oranı = 200.000 / 1.000.000 × 100 = %20. Bu orana göre dönem hasılatı tanımlanır: örneğin sözleşme bedeli 1.500.000 TL ise dönem hasılatı = 1.500.000 × %20 = 300.000 TL olur. Dönem maliyeti yapılan 200.000 TL'dir ve dönem brüt kârı 100.000 TL bulunur. Yöntem TFRS 15 standardının uygulanmasında temel mekanizmadır; her yıl tamamlanma oranı yeniden hesaplanır ve önceki yıllardan farkı dönem hasılatına yansıtılır. Toplam maliyet tahmininde değişiklik olursa kümülatif yöntem ile dönem rakamları yeniden hesaplanır.",
          },
          {
            text: "Arsa karşılığı inşaat işleri için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Arsa karşılığı inşaat yasaktır." },
              { id: "B", text: "Arsa sahibinin müteahhide arsa vermesi karşılığında belirli bağımsız bölümleri alması yapısıdır; muhasebede özel kayıt yöntemleri (eşdeğer fiyat sistemi) uygulanır, vergisel olarak farklı düzenlemelere tabidir." },
              { id: "C", text: "Yalnızca devlet ile yapılan inşaat sözleşmeleridir." },
              { id: "D", text: "Yalnızca tarım arazisi için kullanılır." },
            ],
            correct: "B",
            explanation:
              "Arsa karşılığı inşaat (kat karşılığı inşaat); Türkiye'de yaygın bir gayrimenkul üretim modelidir. Arsa sahibi arsasını müteahhide verir, müteahhit kendi sermayesi ile inşaat yapar ve karşılığında inşaattaki belirli bağımsız bölümleri (örn. dairelerin %50'si) arsa sahibine bedelsiz olarak verir, geri kalanını kendisi satar. Bu modelin muhasebe ve vergi uygulamaları karmaşıktır: (1) Arsa sahibi açısından vergi olayı önemlidir — daire teslim alındığında gelir vergisi (değer artış kazancı) doğabilir, (2) Müteahhit açısından arsa için ödenen değer maliyete dahil edilir (eşdeğer fiyat sistemi), (3) KDV uygulamaları farklılaşır — arsa teslimi/daire teslimi farklı KDV oranlarına tabi olabilir. Bu modelin doğru muhasebeleştirilmesi için muhasebeci/mali müşavir uzmanlığı gerekir.",
          },
          {
            text: "İnşaat maliyetinin temel bileşenleri için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İnşaat maliyeti yalnızca işçilik ücretlerinden oluşur." },
              { id: "B", text: "Doğrudan ilk madde ve malzeme (çimento, demir, tuğla), doğrudan işçilik (inşaat işçileri ücretleri), genel üretim giderleri (proje yönetimi, makine kira, sigorta) ve uygun durumlarda finansman giderleri inşaat maliyetinin bileşenleridir." },
              { id: "C", text: "İnşaat maliyetinde kâr da yer alır." },
              { id: "D", text: "Yalnızca arsa bedeli inşaat maliyetidir." },
            ],
            correct: "B",
            explanation:
              "İnşaat maliyetinin (üretim maliyetinin) temel bileşenleri: (1) Doğrudan İlk Madde ve Malzeme (DIMM) — çimento, demir, tuğla, kum, betonarme malzemeleri, doğrama, boya gibi inşaata doğrudan giren malzemeler, (2) Doğrudan İşçilik (Dİ) — inşaat işçilerinin ücret, prim ve sosyal güvenlik primleri, (3) Genel Üretim Giderleri (GÜG) — proje yönetimi, makine kira ücretleri, sigorta, geçici barınma, alt yüklenici hizmetleri, izin/ruhsat masrafları gibi dolaylı giderler, (4) Finansman Giderleri — TMS 23 Borçlanma Maliyetleri standardı uyarınca uygun durumlarda (uzun süreli, özellikli varlık) inşaat maliyetine eklenebilir. Önemli not: kâr maliyetin bir parçası DEĞİLDİR; kâr satış fiyatı ile maliyet arasındaki farkın sonucudur. Genel yönetim giderleri (ofis kira, yönetim ücreti) de inşaat maliyetine eklenmez, dönem gideri olarak kaydedilir.",
          },
        ],
      },
      // ──────────── Ders 4: İnşaatta Vergi ve Sosyal Güvenlik Uygulamaları ────────────
      {
        id: "m1015-l4",
        title: "İnşaat İşlerinde Vergi ve Sosyal Güvenlik Uygulamaları",
        duration: "9 dk",
        summary: {
          title: "İnşaatta Vergi ve SGK Uygulamaları",
          intro:
            "İnşaat işlerinde vergi ve sosyal güvenlik uygulamaları; sektörün karmaşık yapısı nedeniyle özel düzenlemelere tabidir. Gelir Vergisi Kanunu md. 42-44 yıllara yaygın inşaat işlerini düzenler; KVK kapsamında ise inşaat işletmeleri standart kurumlar vergisine tabidir. KDV uygulamasında konut ve ticari yapı satışları için farklı oranlar uygulanır. Sosyal güvenlik açısından 'asgari işçilik uygulaması' inşaat sektörünün özgün denetim mekanizmasıdır.",
          sections: [
            {
              heading: "İnşaat İşletmelerinde Vergi Uygulamaları",
              icon: "shield",
              items: [
                {
                  strong: "GVK md. 42-44 (Yıllara Yaygın İnşaat):",
                  text: "Birden fazla takvim yılına yayılan inşaat ve onarma işlerinde kâr veya zarar işin bittiği yıla ait beyannamede gösterilir; geçici kabul tarihi belirleyicidir.",
                },
                {
                  strong: "Tevkifat Yükümlülüğü:",
                  text: "Yıllara yaygın inşaat ve onarma işleri için yapılan ödemelerden işverenler %5 oranında vergi tevkifatı (kesinti) yapmakla yükümlüdür; iş bittiğinde mahsup edilir.",
                },
                {
                  strong: "KDV Uygulaması — Konut:",
                  text: "Net alanı 150 m²'ye kadar olan konutlarda %1, 150 m² üzerinde %20 KDV uygulanır; lüks konut, 2.konut ve büyük metrajlı yapılarda yüksek KDV uygulanır.",
                },
                {
                  strong: "KDV Uygulaması — İnşaat İşi (Yapım):",
                  text: "İnşaat taahhüt işlerinde (eser sözleşmesi) standart KDV oranı %20'dir; ancak bazı kamu projelerinde indirimli oranlar veya istisnalar uygulanabilir.",
                },
                {
                  strong: "Damga Vergisi:",
                  text: "İnşaat sözleşmelerinde damga vergisi uygulanır (binde 9,48 oranında); işveren ve yüklenici damga vergisinden müteselsil sorumludur.",
                },
              ],
            },
            {
              heading: "Sosyal Güvenlik ve Asgari İşçilik",
              icon: "trend",
              items: [
                {
                  strong: "İnşaatta SGK Yükümlülükleri:",
                  text: "İnşaat işverenleri çalıştırdıkları her işçi için SGK primi (%37,75 toplam, %15 işçi + %22,75 işveren) ödemekle yükümlüdür; işyeri tescili ve çalışan bildirimi zorunludur.",
                },
                {
                  strong: "Asgari İşçilik Uygulaması:",
                  text: "İnşaat işlerinde gerçek işçilik miktarının tespitinin zorluğu nedeniyle SGK; toplam maliyet, m² metrajı ve diğer faktörlere göre asgari işçilik tutarı hesaplar; bu tutarın altında prim bildirimi yapılırsa fark talep edilir.",
                },
                {
                  strong: "Asgari İşçilik Tespit Süreci:",
                  text: "İşin tamamlanmasının ardından SGK denetim raporu hazırlar, asgari işçilik tutarı ile fiili işçilik karşılaştırılır; eksik bildirim tespit edilirse fark prim, gecikme cezası ve faiziyle istenir.",
                },
                {
                  strong: "İlişkisiz Belge:",
                  text: "İnşaat işi tamamlanıp SGK borcu kalmadığında 'ilişkisiz belgesi' alınır; bu belge olmadan iş sahibi yüklenicinin son hak edişini ödeyemez (kanuni zorunluluk).",
                },
                {
                  strong: "Alt Yüklenici Sorumluluğu:",
                  text: "Ana yüklenici (taşeron veren) alt yüklenicilerinin SGK borçlarından müteselsil sorumludur; bu nedenle ana yüklenici alt yüklenicisinin ilişkisiz belgesini görmeden hak ediş ödememelidir.",
                },
              ],
            },
          ],
          tip: "GVK md. 42-44 = yıllara yaygın inşaat işlerinin vergi rejimi. %5 tevkifat (KKDF dahil değil). KDV: 150 m² altı konut %1, üstü %20. İnşaat taahhüt = %20 KDV. Asgari işçilik = SGK'nın inşaat sektöründeki kayıt dışı çalışmayı önleme mekanizması. İlişkisiz belgesi olmadan son hak ediş ödenmez. Damga vergisi binde 9,48.",
        },
        questions: [
          {
            text: "GVK md. 42-44 kapsamında yıllara yaygın inşaat işlerinde 'tevkifat oranı' kaçtır?",
            options: [
              { id: "A", text: "%2" },
              { id: "B", text: "%5" },
              { id: "C", text: "%10" },
              { id: "D", text: "%20" },
            ],
            correct: "B",
            explanation:
              "Yıllara yaygın inşaat ve onarma işleri için yapılan istihkak ödemelerinde işverenler %5 oranında vergi tevkifatı (stopaj) yapmakla yükümlüdür. Bu tevkifat işin tamamlanmasına kadar kesilir, iş bittiğinde toplam vergi yükümlülüğünden mahsup edilir. Eğer fazla tevkifat yapıldıysa iade edilir, eksikse tamamlanır. Tevkifat hem kamu hem özel sektör işverenleri için geçerlidir; yıllara yaygın olmayan (1 yıl içinde tamamlanan) inşaat işlerinde bu özel tevkifat uygulanmaz, normal kurumlar/gelir vergisi rejimi geçerlidir. Bu mekanizmanın amacı; uzun süreli işlerde vergi tahsilatının vade sonuna ertelenmesini önlemek ve devletin nakit akışını korumaktır.",
          },
          {
            text: "Net alanı 150 m²'nin altındaki konutlar ile 150 m²'nin üstündeki konutların KDV oranları sırasıyla aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "%5 ve %10" },
              { id: "B", text: "%1 ve %20" },
              { id: "C", text: "%10 ve %18" },
              { id: "D", text: "%18 ve %20" },
            ],
            correct: "B",
            explanation:
              "Türkiye'de konut KDV uygulaması net alana göre farklılaştırılmıştır. Net alanı 150 m²'nin altında olan konutlarda KDV oranı %1 olarak uygulanır; bu düzenleme orta gelirli ailelerin konut edinmesini desteklemek amacıyla yapılmıştır. 150 m²'nin üstündeki konutlar (lüks konut/villa) ile 2. konut alımlarında KDV oranı %20 olarak uygulanır. KDV oranları zaman zaman değişebilir; ayrıca büyükşehirlerin merkezlerinde lüks konutlar için yüksek KDV oranları (%18-20) uygulanırken büyük metrajlı konutların indirimli orana tabi olabildiği özel düzenlemeler de bulunabilir. KDV Kanunu çerçevesinde Cumhurbaşkanı Kararı ile bu oranlarda değişiklik yapılabilir.",
          },
          {
            text: "İnşaat sektöründeki 'asgari işçilik uygulaması' SGK açısından ne anlama gelir?",
            options: [
              { id: "A", text: "İşçilere ödenecek asgari ücretin belirlenmesi" },
              { id: "B", text: "İnşaat işlerinde gerçek işçilik miktarının tespitinin zorluğu nedeniyle SGK'nın toplam maliyet, m² metrajı ve diğer faktörlere göre asgari işçilik tutarını hesaplaması; bu tutarın altında prim bildirimi yapılırsa fark talep edilmesi." },
              { id: "C", text: "Yalnızca yabancı işçiler için asgari ücret belirlenmesi" },
              { id: "D", text: "Asgari işçi sayısının belirlenmesi" },
            ],
            correct: "B",
            explanation:
              "Asgari işçilik uygulaması; SGK'nın inşaat sektöründeki kayıt dışı çalışmayı önlemeye yönelik özel bir denetim mekanizmasıdır. İnşaat işlerinde işçi sirkülasyonu yüksek, çalışma süreleri belirsiz ve denetim zordur; bu nedenle SGK işin maliyeti, m² metrajı, kullanılan malzeme miktarı ve sektör ortalamalarına göre 'asgari işçilik tutarı' hesaplar. Eğer işverenin SGK'ya bildirdiği gerçek işçilik bu asgari tutarın altındaysa, fark prim olarak istenir; ayrıca gecikme cezası ve faizi de tahakkuk ettirilir. Bu uygulama; inşaatın tamamlanmasının ardından yapılan SGK denetimi sonucu uygulanır. Hesaplamalar SGK'nın 2008/14 sayılı Genelgesi ve sonraki düzenlemelerle belirlenir.",
          },
          {
            text: "'İlişkisiz belgesi' (SGK'dan ilişiksizlik belgesi) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İnşaat işi tamamlandığında alınması ihtiyari bir belgedir." },
              { id: "B", text: "İnşaat işi tamamlanıp SGK borcu kalmadığında alınan belgedir; bu belge olmadan iş sahibi yüklenicinin son hak edişini ödeyemez (kanuni zorunluluk)." },
              { id: "C", text: "Yalnızca devlet kurumlarına verilir." },
              { id: "D", text: "Yalnızca yabancı yüklenicilere verilir." },
            ],
            correct: "B",
            explanation:
              "İlişiksizlik belgesi (eski adıyla ilişkisiz belgesi); inşaat işinin tamamlanmasının ardından yüklenicinin SGK'ya olan tüm prim, gecikme cezası ve gecikme zammı borçlarını ödediğini, asgari işçilik denetiminin tamamlandığını ve SGK ile bir borç ilişkisinin kalmadığını gösteren resmi belgedir. 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu md. 90 uyarınca; iş sahibinin (işveren), yüklenicinin son hak edişini ödeyebilmesi için SGK'dan ilişiksizlik belgesini alması zorunludur. Aksi takdirde iş sahibi, yüklenicinin SGK borçlarından müteselsil sorumlu tutulur. Bu mekanizma; SGK alacaklarının korunmasını ve inşaat sektöründeki kayıt dışı çalışmanın önlenmesini sağlar.",
          },
          {
            text: "İnşaat sözleşmelerinde uygulanan damga vergisi ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Damga vergisi uygulanmaz." },
              { id: "B", text: "İnşaat sözleşmelerinde damga vergisi uygulanır (binde 9,48 oranında); işveren ve yüklenici damga vergisinden müteselsil sorumludur." },
              { id: "C", text: "Damga vergisi yalnızca yıllara yaygın işlerde uygulanır." },
              { id: "D", text: "Damga vergisi yalnızca devlet ihalelerinde uygulanır." },
            ],
            correct: "B",
            explanation:
              "Damga Vergisi Kanunu uyarınca inşaat sözleşmeleri damga vergisine tabidir; uygulanan oran binde 9,48'dir. Damga vergisinin matrahı sözleşme bedelidir. Sözleşme tarafları (işveren ve yüklenici) damga vergisinden müteselsil sorumludur; yani devlet alacağını taraflardan herhangi birinden tahsil edebilir. Ancak uygulamada genellikle işveren öder ve sözleşme bedeline yansıtır. Damga vergisi sözleşme imzalandığında (ya da ihale kararının kesinleşmesinde) doğar ve 15 gün içinde ödenir. Bazı kamu projelerinde damga vergisi muafiyetleri uygulanabilir. Damga vergisinin damga vergisi defteri ve damga vergisi beyannamesi ile takip edilmesi gerekir; eksik veya geç ödemede vergi ziyaı cezası uygulanır.",
          },
        ],
      },
      // ──────────── Ders 5: TMS/TFRS Standartları ve Yatırım Amaçlı Gayrimenkuller ────────────
      {
        id: "m1015-l5",
        title: "TMS/TFRS Standartları — TFRS 15, TMS 40, TMS 16, TFRS 16",
        duration: "10 dk",
        summary: {
          title: "İnşaat ve Gayrimenkullere İlişkin TMS/TFRS Standartları",
          intro:
            "İnşaat ve gayrimenkullerin muhasebeleştirilmesinde kullanılan başlıca standartlar; TFRS 15 (Müşteri Sözleşmelerinden Hasılat), TMS 40 (Yatırım Amaçlı Gayrimenkuller), TMS 16 (Maddi Duran Varlıklar) ve TFRS 16 (Kiralamalar) standartlarıdır. Bu standartlar gayrimenkullerin sınıflandırılması, ölçümü, değerleme yöntemi (maliyet veya gerçeğe uygun değer) ve hasılat tanımlama esaslarını düzenler. Doğru sınıflandırma kritik öneme sahiptir; çünkü her sınıfın muhasebeleştirme yöntemi farklıdır.",
          sections: [
            {
              heading: "TFRS 15 ve TMS 40 Standartları",
              icon: "shield",
              items: [
                {
                  strong: "TFRS 15 — Müşteri Sözleşmelerinden Hasılat:",
                  text: "Yıllara yaygın inşaat sözleşmelerinin muhasebeleştirilmesinde kullanılan ana standarttır; eski TMS 11 (İnşaat Sözleşmeleri) standardını yürürlükten kaldırmıştır.",
                },
                {
                  strong: "TFRS 15 — Beş Adımlı Hasılat Tanıma:",
                  text: "(1) Sözleşmeyi tanımla, (2) Edim yükümlülüklerini belirle, (3) İşlem fiyatını belirle, (4) İşlem fiyatını edim yükümlülüklerine dağıt, (5) Edim yükümlülüğü yerine geldiğinde hasılatı tanı.",
                },
                {
                  strong: "TMS 40 — Yatırım Amaçlı Gayrimenkuller:",
                  text: "Kiraya verme veya değer artışı kazancı amacıyla tutulan gayrimenkulleri düzenler (örneğin kiralık ofis binası, alışveriş merkezi); maliyet modeli veya gerçeğe uygun değer modeli ile ölçülebilir.",
                },
                {
                  strong: "TMS 40 — Gerçeğe Uygun Değer Modeli:",
                  text: "Yatırım amaçlı gayrimenkuller her dönem sonunda gerçeğe uygun değerle yeniden ölçülür; değer değişiklikleri kâr-zarar tablosuna yansıtılır (sermaye artışı/azalışı yerine).",
                },
                {
                  strong: "Sınıflandırma Önemi:",
                  text: "Aynı bina farklı amaçlarda kullanılırsa farklı standartlara tabi olabilir: kendi kullanımı (TMS 16), kiraya verme (TMS 40), satış için tutma (TMS 2 — Stoklar).",
                },
              ],
            },
            {
              heading: "TMS 16 ve TFRS 16 Standartları",
              icon: "trend",
              items: [
                {
                  strong: "TMS 16 — Maddi Duran Varlıklar:",
                  text: "İşletmenin kendi faaliyetinde kullanmak için tuttuğu maddi varlıkları (binalar, makineler, taşıtlar) düzenler; iki ölçüm modeli: maliyet modeli ve yeniden değerleme modeli.",
                },
                {
                  strong: "TMS 16 — Amortisman:",
                  text: "Maddi duran varlıkların ekonomik ömürleri boyunca giderleştirilmesidir; doğrusal amortisman (eşit yıllık) en yaygın yöntemdir, hızlandırılmış yöntemler de kullanılabilir.",
                },
                {
                  strong: "TFRS 16 — Kiralamalar:",
                  text: "Tüm kiralamaları kiracının bilançosunda 'Kullanım Hakkı Varlığı' ve 'Kira Yükümlülüğü' olarak tanımlar; eski TMS 17'nin operasyonel/finansal kiralama ayrımını kaldırmıştır (12 aydan kısa veya düşük tutarlı kiralamalar hariç).",
                },
                {
                  strong: "TFRS 16 — Etki:",
                  text: "Şirketler artık kiraladıkları gayrimenkulleri (ofis binaları, AVM mağazaları) bilançolarında 'varlık' olarak gösterir ve karşılığında 'borç' kaydeder; bilanço büyür, finansal oranlar (örn. borç oranı) değişir.",
                },
                {
                  strong: "TMS 12 — Gelir Vergileri ve Ertelenmiş Vergi:",
                  text: "Muhasebe ile vergi hesaplaması arasındaki geçici farklar nedeniyle ortaya çıkan ertelenmiş vergi varlığı/yükümlülüğünü düzenler; özellikle yıllara yaygın inşaat işlerinde önemlidir.",
                },
              ],
            },
          ],
          tip: "5 ana standart: TFRS 15 (yıllara yaygın hasılat), TMS 40 (yatırım amaçlı gayrimenkul), TMS 16 (kendi kullanım), TFRS 16 (kiralama), TMS 12 (ertelenmiş vergi). Aynı bina farklı amaçla farklı standarda tabi! TFRS 15 = 5 adımlı hasılat tanıma. TFRS 16 = artık tüm kiralamalar bilançoda. Gerçeğe uygun değer değişiklikleri TMS 40'ta P&L'e gider.",
        },
        questions: [
          {
            text: "TFRS 15 'Müşteri Sözleşmelerinden Hasılat' standardının beş adımlı hasılat tanıma süreci aşağıdakilerden hangisinde DOĞRU sırayla verilmiştir?",
            options: [
              { id: "A", text: "Hasılatı tanı → İşlem fiyatını belirle → Sözleşmeyi tanımla → Edim yükümlülüklerini belirle → Dağıt" },
              { id: "B", text: "(1) Sözleşmeyi tanımla, (2) Edim yükümlülüklerini belirle, (3) İşlem fiyatını belirle, (4) İşlem fiyatını edim yükümlülüklerine dağıt, (5) Edim yükümlülüğü yerine geldiğinde hasılatı tanı." },
              { id: "C", text: "Yalnızca tek bir adım vardır: hasılatı tanı." },
              { id: "D", text: "Adımlar işletmenin tercihine göre değişir." },
            ],
            correct: "B",
            explanation:
              "TFRS 15 Müşteri Sözleşmelerinden Hasılat standardı, 1 Ocak 2018'den itibaren yürürlüğe girmiş ve eski TMS 11 (İnşaat Sözleşmeleri) ve TMS 18 (Hasılat) standartlarını yürürlükten kaldırmıştır. Standart, hasılat tanımlama için 5 adımlı sistematik süreç tanımlar: (1) Sözleşmeyi tanımla — geçerli bir sözleşmenin var olduğunu doğrula, (2) Edim yükümlülüklerini belirle — sözleşmedeki ayrı performans yükümlülüklerini tespit et (örn. inşaat + bakım), (3) İşlem fiyatını belirle — tahmini bedel, değişken bileşenler dahil, (4) İşlem fiyatını edim yükümlülüklerine dağıt — bağımsız satış fiyatlarına göre, (5) Edim yükümlülüğü yerine geldiğinde hasılatı tanı — kontrolün müşteriye geçtiği zaman. Bu yapı önceki sistemlerden daha disiplinli ve karşılaştırılabilirdir.",
          },
          {
            text: "TMS 40 'Yatırım Amaçlı Gayrimenkuller' standardı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İşletmenin kendi kullanımı için tuttuğu binaları düzenler." },
              { id: "B", text: "Kiraya verme veya değer artışı kazancı amacıyla tutulan gayrimenkulleri düzenler (kiralık ofis binası, AVM); maliyet modeli veya gerçeğe uygun değer modeli ile ölçülebilir; gerçeğe uygun değer değişiklikleri kâr-zarar tablosuna yansıtılır." },
              { id: "C", text: "Yalnızca konutlar için kullanılır." },
              { id: "D", text: "Stok olarak tutulan gayrimenkulleri düzenler." },
            ],
            correct: "B",
            explanation:
              "TMS 40 Yatırım Amaçlı Gayrimenkuller standardı; kira geliri ve/veya değer artışı kazancı elde etmek üzere tutulan gayrimenkulleri (kiralık ofis binası, alışveriş merkezi, kiralık konut, kiraya verilmiş arsa) düzenler. Önemli ayrım: işletmenin kendi faaliyetinde kullandığı binalar TMS 16 kapsamındadır, satış için tutulan inşa halindeki gayrimenkuller TMS 2 (Stoklar) kapsamındadır. TMS 40'ta iki ölçüm modeli vardır: (1) Maliyet Modeli — maliyet bedeli − birikmiş amortisman ile değerlenir, (2) Gerçeğe Uygun Değer Modeli — her dönem sonunda gerçeğe uygun (piyasa) değerine yeniden ölçülür ve değer değişiklikleri DOĞRUDAN KÂR-ZARAR tablosuna yansıtılır (TMS 16'daki yeniden değerleme modelinden farklı olarak özkaynaklara değil). Gayrimenkul yatırım ortaklıkları (GYO) genellikle gerçeğe uygun değer modelini tercih eder.",
          },
          {
            text: "TFRS 16 'Kiralamalar' standardının önceki TMS 17 standartından temel farkı aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki standart arasında fark yoktur." },
              { id: "B", text: "TFRS 16 tüm kiralamaları (12 aydan kısa veya düşük tutarlı olanlar hariç) kiracının bilançosunda 'Kullanım Hakkı Varlığı' ve 'Kira Yükümlülüğü' olarak tanımlar; eski TMS 17'nin operasyonel/finansal kiralama ayrımını kaldırmıştır." },
              { id: "C", text: "TFRS 16 yalnızca finansal kiralamayı düzenler." },
              { id: "D", text: "TFRS 16 yalnızca konut kiralarını kapsar." },
            ],
            correct: "B",
            explanation:
              "TFRS 16 Kiralamalar standardı; 1 Ocak 2019'dan itibaren yürürlüğe girmiş ve eski TMS 17 standardını yürürlükten kaldırmıştır. Temel değişiklik: önceki standartta operasyonel kiralamalar bilançoya yansıtılmıyor (sadece kira gideri olarak gelir tablosuna yansıyordu); finansal kiralamalar ise hem varlık hem borç olarak bilançoda yer alıyordu. TFRS 16 bu ayrımı kaldırmış ve kiracı tarafında tüm kiralamaları (12 aydan kısa olanlar veya düşük değerli varlıklar hariç) bilançoda göstermeyi zorunlu kılmıştır. Kiralayan taraf için ise eski sınıflandırma korunmuştur. Etkisi büyük: şirketlerin bilanço toplamı ve borç oranları belirgin şekilde artmıştır. Özellikle havayolu şirketleri (uçak kiralama), perakende zincirleri (mağaza kiralama) bu değişiklikten en çok etkilenen sektörlerdir.",
          },
          {
            text: "Aynı bir gayrimenkulün muhasebeleştirilmesinde kullanılacak standart aşağıdaki amaçlara göre nasıl değişir?",
            options: [
              { id: "A", text: "Tüm gayrimenkuller her zaman aynı standarda tabidir." },
              { id: "B", text: "Aynı bina farklı amaçla farklı standarda tabi olabilir: kendi kullanımı için tutuluyorsa TMS 16 (Maddi Duran Varlıklar), kiraya verme amacıyla tutuluyorsa TMS 40 (Yatırım Amaçlı Gayrimenkul), satış için inşa halinde tutuluyorsa TMS 2 (Stoklar)." },
              { id: "C", text: "Standart yalnızca binanın metrekaresine göre değişir." },
              { id: "D", text: "Sınıflandırma yönetim tarafından serbestçe yapılır." },
            ],
            correct: "B",
            explanation:
              "Bir gayrimenkulün hangi standarda tabi olacağı, işletme tarafından NASIL kullanıldığına bağlıdır; bu kullanım amacı muhasebeleştirme yöntemini belirler: (1) Kendi Kullanım (Own-Use) — TMS 16 Maddi Duran Varlıklar; örneğin işletmenin merkez ofis binası, fabrika binası. Maliyet veya yeniden değerleme modeli ile ölçülür, amortismana tabidir. (2) Kiraya Verme veya Değer Artışı — TMS 40 Yatırım Amaçlı Gayrimenkuller; örneğin kiralık ofis binası, AVM, kiralık konut. Maliyet veya gerçeğe uygun değer modeli; gerçeğe uygun değer değişiklikleri P&L'e gider. (3) Satış İçin İnşa Halinde — TMS 2 Stoklar; örneğin müteahhitin inşa edip satacağı daireler. Maliyet veya net gerçekleşebilir değerin düşüğü ile ölçülür. Sınıflandırma değişirse standardı da değişir; örneğin önce kendi kullanımdaki bir binayı kiraya vermeye karar verilirse, TMS 16'dan TMS 40'a geçiş yapılır.",
          },
          {
            text: "TMS 12 'Gelir Vergileri' standardı ile düzenlenen 'ertelenmiş vergi' kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Ertelenmiş vergi, sonraki dönemlere ödenmesi geciktirilen vergidir." },
              { id: "B", text: "Muhasebe ile vergi hesaplaması arasındaki geçici farklar nedeniyle ortaya çıkan, gelecekte ödenecek ya da geri alınacak vergi tutarlarıdır; özellikle yıllara yaygın inşaat işlerinde muhasebe tamamlanma yüzdesi yöntemi vergi iş bitiminde hasılat yöntemini kullandığı için önemlidir." },
              { id: "C", text: "Yalnızca borçlu işletmeler tarafından kullanılır." },
              { id: "D", text: "Devlete kasıtlı olarak ödenmeyen vergidir." },
            ],
            correct: "B",
            explanation:
              "TMS 12 Gelir Vergileri standardı; muhasebe karı ile vergi matrahı arasındaki farklar nedeniyle ortaya çıkan ertelenmiş vergi varlığı ve yükümlülüğünü düzenler. İki tür fark vardır: (1) Sürekli Farklar — hiçbir zaman tersine dönmez (örn. KKEG), ertelenmiş vergiye konu olmaz, (2) Geçici Farklar — zamanla tersine döner ve ertelenmiş vergi yaratır. Bu durum özellikle yıllara yaygın inşaat işlerinde belirgindir: muhasebe TFRS 15 ile tamamlanma yüzdesi yöntemini kullanır (her yıl gelir/maliyet tanır), vergi ise GVK md. 42-44 ile iş bitiminde hasılat yöntemini kullanır (iş bitince tek seferde). Bu fark sonucu ilk yıllarda muhasebe karı vergi matrahından yüksek olabilir, dolayısıyla 'ertelenmiş vergi yükümlülüğü' (gelecekte ödenecek vergi) tahakkuk eder. İş bittiğinde tersine dönüş olur. Ertelenmiş vergi muhasebesi finansal tabloların gerçek vergi yükünü göstermesini sağlar.",
          },
        ],
      },
    ],
  },
];