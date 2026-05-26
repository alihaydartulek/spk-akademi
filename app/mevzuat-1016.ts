/* ─────────────────────────────────────────────────────────────────────────────
 * Muhasebe ve Finansal Raporlama (1016)
 *
 * Kaynak: SPL 1016 Çalışma Notu, 31 Aralık 2025 (300 sayfa)
 * Sınavlar: SPL Düzey 2, Düzey 3, Kurumsal Yönetim Derecelendirme,
 *           Kredi Derecelendirme
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1015 (İnşaat Muhasebesi) ile bazı kavram örtüşmesi olabilir; ancak
 * 1016 genel muhasebe ilkeleri, tekdüzen muhasebe sistemi (varlık-borç-
 * özkaynak detayları), II-14.1 Sermaye Piyasası Finansal Raporlama Tebliği
 * ve bağımsız denetim odaklıdır.
 *
 * Kullanım:
 *   import { mevzuat1016 } from "./mevzuat-1016";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011,
 *     ...mevzuat1012, ...mevzuat1013, ...mevzuat1014,
 *     ...mevzuat1015, ...mevzuat1016
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1016: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1016 MUHASEBE VE FİNANSAL RAPORLAMA
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1016",
    title: "Modül · Muhasebe ve Finansal Raporlama (1016)",
    lessons: [
      // ──────────── Ders 1: Muhasebenin Temel Kavramları ve İlkeleri ────────────
      {
        id: "m1016-l1",
        title: "Muhasebenin Temel Kavramları, İlkeleri ve Hesap İşleyişi",
        duration: "10 dk",
        summary: {
          title: "Muhasebenin Temelleri",
          intro:
            "Muhasebe; işletmelerin tamamen veya kısmen finansal nitelikli ve para ile ifade edilebilen işlemlerine ilişkin anlamlı ve güvenilir bilgileri toplama, doğruluklarını saptama, kaydetme, sınıflandırma ve raporlama bilim ve sanatıdır. Karar vericiler ile işletme faaliyetleri arasında köprü niteliğindeki bir bilgi sistemidir. 12 temel kavram (sosyal sorumluluk, kişilik, süreklilik, dönemsellik, parayla ölçülme, maliyet esası, tarafsızlık, tutarlılık, tam açıklama, ihtiyatlılık, önemlilik, özün önceliği) muhasebenin felsefi temelini oluşturur.",
          sections: [
            {
              heading: "Muhasebenin 12 Temel Kavramı",
              icon: "shield",
              items: [
                {
                  strong: "Sosyal Sorumluluk ve Kişilik:",
                  text: "Sosyal sorumluluk: muhasebe tüm ilgili taraflara doğru bilgi sağlamakla yükümlüdür. Kişilik: işletmenin sahibinden ayrı bir kişiliği vardır.",
                },
                {
                  strong: "İşletmenin Sürekliliği ve Dönemsellik:",
                  text: "Süreklilik (going concern): işletme sınırsız süre faaliyet gösterecek varsayılır. Dönemsellik: faaliyetler belirli zaman dilimlerine bölünür (genelde 1 yıl).",
                },
                {
                  strong: "Parayla Ölçülme ve Maliyet Esası:",
                  text: "Parayla ölçülme: yalnızca para ile ölçülebilen olaylar kaydedilir. Maliyet esası: varlıklar ve borçlar başlangıçta maliyet bedeli ile kaydedilir.",
                },
                {
                  strong: "Tarafsızlık-Belgelendirme, Tutarlılık, Tam Açıklama:",
                  text: "Tarafsızlık: kayıtlar belgelere dayalı olmalıdır. Tutarlılık: politikalar dönemden döneme aynı uygulanır. Tam açıklama: önemli tüm bilgi tablolarda açıklanır.",
                },
                {
                  strong: "İhtiyatlılık, Önemlilik ve Özün Önceliği:",
                  text: "İhtiyatlılık: olası kayıplar derhal kaydedilir, kazançlar ise gerçekleşince kaydedilir. Önemlilik: önemli kalemler ayrıca gösterilir. Özün önceliği: ekonomik öz, hukuki şekle üstündür.",
                },
              ],
            },
            {
              heading: "Hesap İşleyişi ve Muhasebenin Temel Denklemi",
              icon: "trend",
              items: [
                {
                  strong: "Temel Muhasebe Denklemi:",
                  text: "Varlıklar = Kaynaklar (Borçlar + Özkaynak); bu denklem her işlemde korunur, çift taraflı kayıt sisteminin (double-entry) temelidir.",
                },
                {
                  strong: "Aktif Hesaplar:",
                  text: "Varlık hesaplarıdır (kasa, banka, alacaklar, stoklar, demirbaşlar); BORÇ tarafına kaydedilince ARTAR, ALACAK tarafına kaydedilince AZALIR.",
                },
                {
                  strong: "Pasif Hesaplar:",
                  text: "Borç ve özkaynak hesaplarıdır; ALACAK tarafına kaydedilince ARTAR, BORÇ tarafına kaydedilince AZALIR — aktiften ters çalışır.",
                },
                {
                  strong: "Gelir ve Gider Hesapları:",
                  text: "Gelir hesapları pasif gibi çalışır (alacakta artar, gelir = özkaynak artışı); gider hesapları aktif gibi çalışır (borçta artar, gider = özkaynak azalışı).",
                },
                {
                  strong: "Kayıt Araçları:",
                  text: "Yevmiye Defteri (kronolojik kayıt), Defter-i Kebir (büyük defter — hesap bazlı sınıflandırma), Mizan (dönem sonu hesap özet tablosu), Envanter Defteri (fiili sayım kayıtları).",
                },
              ],
            },
          ],
          tip: "12 temel kavram muhasebenin felsefi temelidir — 4'ü en kritik: süreklilik, dönemsellik, ihtiyatlılık, özün önceliği. Aktif hesaplar BORÇ'ta artar, Pasif hesaplar ALACAK'ta artar. Temel denklem: Varlık = Borç + Özkaynak. Çift taraflı kayıt = her işlemin hem borç hem alacak tarafı vardır, ikisi eşittir.",
          kavramlar: [
            { terim: "Muhasebenin Temel Denklemi", tanim: "Varlık = Borç + Özkaynak; bilanço bu denklemi yansıtır, her muhasebe işleminde denklemin iki tarafı eşit kalmaya devam eder." },
            { terim: "Çift Taraflı Kayıt", tanim: "Her muhasebe işleminin borç ve alacak olmak üzere iki farklı hesabı eş tutarlarda etkilemesi ilkesi; denge her zaman korunur." },
            { terim: "Süreklilik İlkesi", tanim: "İşletmenin öngörülebilecek gelecekte faaliyetlerini sürdüreceği varsayımı; tasfiye edilmeyeceği kabul edilerek değerleme yapılır." },
            { terim: "Dönemsellik İlkesi", tanim: "İşletmenin ekonomik faaliyetlerinin belirli dönemlere bölünerek her dönemin gelir-giderinin o dönemde raporlanması." },
            { terim: "İhtiyatlılık İlkesi", tanim: "Belirsiz durumda varlık ve gelirlerin düşük, borç ve giderlerin yüksek tahmin edilmesi; güvensizlik yönünde muhafazakâr tutum." },
            { terim: "Özün Önceliği İlkesi", tanim: "İşlemlerin hukuki biçimine değil ekonomik özüne göre muhasebeleştirilmesi; TFRS'de esas, VUK'ta daha sınırlı uygulanır." },
            { terim: "Tahakkuk Esası", tanim: "Gelir ve giderlerin nakit akışından bağımsız olarak hak kazanıldığında veya yükümlülük doğduğunda kayıt altına alınması." },
          ],
          dikkatlar: [
            "Aktif (varlık) hesaplar borç tarafında, pasif (kaynak) hesaplar alacak tarafında artar; azalışlar ters tarafta gösterilir.",
            "Süreklilik varsayımı çökmüşse tablolar tasfiye esasına göre hazırlanır; bu durum bağımsız denetçi raporunda vurgulanır.",
            "İhtiyatlılık ihtiyatı aşarsa gizli yedek oluşur; bu da finansal tablolarda yanıltıcılık yaratır.",
            "Özün önceliği TMS/TFRS'de temel ilkedir; VUK muhasebesi şekli esas alır, bu iki sistem arasında farklılık yaratır.",
            "Dönemsellik gereği dönem sonu tahakkuk/karşılık kayıtları zorunludur; atlanırsa dönem net kâr yanıltıcı olur.",
          ],
        },
        questions: [
          {
            text: "Muhasebenin temel kavramlarından 'özün önceliği' kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Hukuki şekil ekonomik öze her zaman üstündür." },
              { id: "B", text: "İşlemlerin muhasebeleştirilmesinde ve raporlanmasında, biçimlerinden çok ekonomik özlerinin esas alınması gerekir; özün önceliği hukuki şekle üstündür." },
              { id: "C", text: "Yalnızca büyük işletmeler için geçerlidir." },
              { id: "D", text: "Yalnızca yabancı para işlemleri için kullanılır." },
            ],
            correct: "B",
            explanation:
              "Özün önceliği (substance over form) ilkesi; muhasebede işlemlerin hukuki/biçimsel görünümlerinden çok gerçek ekonomik özlerinin esas alınmasını gerektirir. Örneğin finansal kiralama (leasing) hukuken kira sözleşmesidir, ancak ekonomik özü itibariyle satın alma ve borçlanma işlemine eşdeğerdir; bu nedenle TFRS 16 kapsamında bilançoda hem varlık hem borç olarak gösterilir. Aynı şekilde 'şekilsiz' arsa karşılığı inşaat anlaşmalarında veya finansman amaçlı satıcı kredisi işlemlerinde özün önceliği belirleyicidir. Bu ilke, finansal tabloların ekonomik gerçeği yansıtmasını ve muhasebe kayıtlarının manipüle edilmesini önlemeyi amaçlar.",
          },
          {
            text: "Muhasebenin temel denklemi (çift taraflı kayıt sisteminin temeli) aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Gelir = Gider" },
              { id: "B", text: "Varlıklar = Borçlar + Özkaynak" },
              { id: "C", text: "Aktif − Pasif = 0" },
              { id: "D", text: "Sermaye = Yedekler" },
            ],
            correct: "B",
            explanation:
              "Temel muhasebe denklemi: Varlıklar = Borçlar + Özkaynak (Aktif = Pasif). Bu denklem her muhasebe işleminde korunur ve çift taraflı kayıt sisteminin (double-entry bookkeeping) matematiksel temelidir. Her işlemin hem borç hem alacak tarafı vardır ve bunlar eşittir; bu sayede denklem bozulmaz. Örnek: 1.000 TL nakit ile makine satın alındığında, 'Demirbaşlar' (varlık) artar 1.000 TL, 'Kasa' (varlık) azalır 1.000 TL — toplam varlık değişmez, denklem korunur. Borçla makine alındığında ise hem varlık (demirbaş) hem borç artar 1.000 TL — yine denklem korunur. Bu sistem 1494'te Luca Pacioli tarafından sistematize edilmiştir ve 500 yıldır temel muhasebe yöntemidir.",
          },
          {
            text: "Aktif (varlık) hesapları için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Aktif hesaplar her zaman alacak tarafına kaydedilince artar." },
              { id: "B", text: "Aktif hesaplar BORÇ tarafına kaydedilince ARTAR, ALACAK tarafına kaydedilince AZALIR; örneğin kasaya para girişi 'Kasa' hesabının borç tarafına yazılır." },
              { id: "C", text: "Aktif hesaplar yalnızca yıl sonu kapatılır." },
              { id: "D", text: "Aktif ve pasif hesaplar aynı şekilde işler." },
            ],
            correct: "B",
            explanation:
              "Tekdüzen muhasebe sistemi ve genel muhasebede hesapların işleyiş kuralları net olarak tanımlanmıştır. Aktif (varlık) hesapları — Kasa, Banka, Alacaklar, Stoklar, Demirbaşlar gibi varlıkları ifade eder; bu hesaplar BORÇ tarafına yazıldığında artar (örneğin kasaya 1.000 TL girişi 'Kasa Borç 1.000' olarak yazılır), ALACAK tarafına yazıldığında azalır (kasadan 500 TL çıkışı 'Kasa Alacak 500' olarak yazılır). Pasif (borç ve özkaynak) hesapları ise tam tersine çalışır: ALACAK tarafında artar, BORÇ tarafında azalır. Gelir hesapları pasif gibi çalışır (alacakta artar), gider hesapları aktif gibi çalışır (borçta artar). Bu kurallar muhasebe öğreniminin başlangıç temelidir.",
          },
          {
            text: "Aşağıdakilerden hangisi muhasebenin 12 temel kavramı arasında YER ALMAZ?",
            options: [
              { id: "A", text: "İşletmenin Sürekliliği (Going Concern)" },
              { id: "B", text: "Dönemsellik" },
              { id: "C", text: "İhtiyatlılık (Konservatizm)" },
              { id: "D", text: "Maksimum Kâr İlkesi" },
            ],
            correct: "D",
            explanation:
              "Muhasebenin 12 temel kavramı (MSUGT'da düzenlenmiştir): (1) Sosyal Sorumluluk, (2) Kişilik, (3) İşletmenin Sürekliliği, (4) Dönemsellik, (5) Parayla Ölçülme, (6) Maliyet Esası, (7) Tarafsızlık ve Belgelendirme, (8) Tutarlılık, (9) Tam Açıklama, (10) İhtiyatlılık, (11) Önemlilik, (12) Özün Önceliği. 'Maksimum kâr ilkesi' muhasebenin temel kavramı DEĞİLDİR; o işletme yönetiminin amacı olabilir ancak muhasebenin görevi tarafsız bilgi sağlamaktır, kârı maksimize etmek değil. Aksine, ihtiyatlılık ilkesi gereği muhasebe potansiyel kayıpları derhal raporlamayı, gelirleri ise gerçekleşene kadar tanımamayı gerektirir; bu kâr maksimizasyonunun tersi bir yaklaşımdır.",
          },
          {
            text: "Muhasebede temel kayıt araçları için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca tek bir defter (yevmiye) tutulur." },
              { id: "B", text: "Yevmiye Defteri (kronolojik kayıt), Defter-i Kebir (büyük defter — hesap bazlı sınıflandırma), Mizan (dönem sonu hesap özet tablosu), Envanter Defteri (fiili sayım kayıtları) temel araçlardır." },
              { id: "C", text: "Yalnızca elektronik kayıt yapılır." },
              { id: "D", text: "Defter tutmak ihtiyaridir." },
            ],
            correct: "B",
            explanation:
              "Türk muhasebe sisteminde (VUK kapsamında) tutulması zorunlu temel kayıt araçları: (1) Yevmiye Defteri (Günlük Defter) — tüm muhasebe işlemleri zaman sırasıyla (kronolojik) buraya kaydedilir, en birincil kayıttır, (2) Defter-i Kebir (Büyük Defter / General Ledger) — yevmiyedeki kayıtlar hesap bazında ayrıştırılır, her hesabın hareket geçmişi izlenir, (3) Mizan — dönem sonunda Defter-i Kebir hesaplarının borç/alacak toplamlarının ve bakiyelerinin alındığı özet tablodur; muhasebe denkleminin sağlanıp sağlanmadığını kontrol eder, (4) Envanter Defteri — yıl sonunda fiili sayım yoluyla varlık ve borçların gerçek tutarlarının kayda alındığı defterdir. Modern muhasebede bu defterler elektronik ortamda da tutulabilir (e-Defter uygulaması).",
          },
        ],
      },
      // ──────────── Ders 2: Tekdüzen Muhasebe Sistemi — Varlık ve Borç Hesapları ────────────
      {
        id: "m1016-l2",
        title: "Tekdüzen Hesap Planı — Dönen/Duran Varlıklar ve Yabancı Kaynaklar",
        duration: "10 dk",
        summary: {
          title: "Tekdüzen Hesap Planı ve Hesap Detayları",
          intro:
            "Tekdüzen Muhasebe Sistemi, VUK kapsamında defter tutan tüm işletmelerin uyguladığı standart hesap planıdır. 1-9 hesap grubuna bölünmüştür: 1 (Dönen Varlıklar), 2 (Duran Varlıklar), 3 (Kısa Vadeli Yabancı Kaynaklar), 4 (Uzun Vadeli Yabancı Kaynaklar), 5 (Özkaynaklar), 6 (Gelir Tablosu Hesapları), 7 (Maliyet Hesapları). Bu yapı işletmeler arası karşılaştırılabilirliği ve denetimi kolaylaştırır.",
          sections: [
            {
              heading: "Dönen Varlıklar (1. Grup)",
              icon: "shield",
              items: [
                {
                  strong: "Hazır Değerler (10):",
                  text: "Kasa (100), Bankalar (102), Verilen Çekler (103), Diğer Hazır Değerler (108); en likit varlıklardır, anında ödeme yapabilen değerlerdir.",
                },
                {
                  strong: "Menkul Kıymetler (11):",
                  text: "Hisse Senetleri (110), Özel Kesim Tahvil/Bono (111), Kamu Kesim Tahvil/Bono (112); kısa vadede paraya çevirme amacıyla tutulur, faiz veya temettü geliri sağlar.",
                },
                {
                  strong: "Ticari Alacaklar (12):",
                  text: "Alıcılar (120), Alacak Senetleri (121), Şüpheli Alacaklar (128) — şüpheli hale gelen alacaklar için Şüpheli Alacaklar Karşılığı (129) ayrılır.",
                },
                {
                  strong: "Stoklar (15):",
                  text: "İlk Madde ve Malzeme (150), Yarı Mamuller-Üretim (151), Mamuller (152), Ticari Mallar (153); değerleme yöntemleri: FIFO, ortalama maliyet (LIFO Türkiye'de yasaktır).",
                },
                {
                  strong: "Diğer Dönen Varlıklar (19):",
                  text: "Devreden KDV (190), İndirilecek KDV (191), Peşin Ödenen Vergi ve Fonlar (193), İş Avansları (195) gibi muhtelif hesaplar.",
                },
              ],
            },
            {
              heading: "Duran Varlıklar ve Yabancı Kaynaklar",
              icon: "trend",
              items: [
                {
                  strong: "Maddi Duran Varlıklar (25):",
                  text: "Arazi-Arsalar (250), Yer Altı/Üstü Düzenleri (251), Binalar (252), Tesis-Makine-Cihazlar (253), Taşıtlar (254), Demirbaşlar (255); Birikmiş Amortismanlar (257) ile değerleri düşürülür.",
                },
                {
                  strong: "Maddi Olmayan Duran Varlıklar (26):",
                  text: "Haklar (260), Şerefiye (261), Kuruluş ve Örgütlenme (262), Araştırma Geliştirme (263), Özel Maliyetler (264); itfa payları ile maliyeti dağıtılır.",
                },
                {
                  strong: "Mali Borçlar (30, 40):",
                  text: "Banka Kredileri (300), Çıkarılmış Tahviller (305), Tahvil Anapara Borçları (304); kısa vadeli (300) ve uzun vadeli (400) ayrımı yapılır.",
                },
                {
                  strong: "Ticari Borçlar (32):",
                  text: "Satıcılar (320), Borç Senetleri (321), Alınan Depozito ve Teminatlar (326); mal/hizmet alımından doğan borçlardır.",
                },
                {
                  strong: "Borç ve Gider Karşılıkları (37, 47):",
                  text: "Kıdem Tazminatı Karşılığı (372/472), Diğer Borç ve Gider Karşılıkları (379); ihtiyatlılık ilkesi gereği gelecekteki yükümlülükler için ayrılır.",
                },
              ],
            },
          ],
          tip: "Hesap kodları 1-9: 1 (Dönen), 2 (Duran), 3 (KVYK), 4 (UVYK), 5 (Özkaynak), 6 (Gelir Tablosu), 7 (Maliyet). LIFO Türkiye'de YASAK. Birikmiş amortismanlar (257) eksili hesap olarak çalışır. Şüpheli alacaklar karşılığı (129) ihtiyatlılık ilkesinin uygulamasıdır. Kıdem tazminatı karşılığı her yıl ayrılır.",
          kavramlar: [
            { terim: "Tekdüzen Hesap Planı (THP)", tanim: "Türkiye'de muhasebe kayıtlarını standartlaştıran plan; 1-8 ana grup, her grup altında üç haneli hesap kodu bulunur." },
            { terim: "Birikmiş Amortisman (257)", tanim: "Maddi duran varlıkların değer azalışını izleyen eksili hesap; ilgili varlık hesabının altında raporlanır, dönem amortismanı 730/770'e gider." },
            { terim: "Şüpheli Alacaklar Karşılığı (129)", tanim: "Tahsil riski doğan alacaklar için ayrılan karşılık; ihtiyatlılık ilkesinin uygulaması, gider yazılarak ayrılır." },
            { terim: "LIFO Yasağı", tanim: "Son giren ilk çıkar stok yönteminin Türkiye'de hem VUK hem TMS 2 açısından yasaklı olması; FIFO veya ağırlıklı ortalama uygulanır." },
            { terim: "Kıdem Tazminatı Karşılığı", tanim: "Çalışanların hak kazandıkları kıdem tazminatı için her yıl dönem gideri yazılarak ayrılan uzun vadeli karşılık (472 hesabı)." },
            { terim: "Karşılık Hesapları", tanim: "Tutarı ya vadesi belirsiz borç ve giderleri bilançoda temsil eden hesaplar; ihtiyatlılık ve dönemsellik ilkesinin gereği." },
            { terim: "Yeniden Değerleme", tanim: "TMS 16 altında maddi duran varlıkların gerçeğe uygun değerle ölçülmesi; artış özkaynak altında 'yeniden değerleme fonu'na alınır." },
          ],
          dikkatlar: [
            "LIFO Türkiye'de yasaklıdır; sınavda 'LIFO uygulandı' ifadesi hatalı bir seçenektir.",
            "Birikmiş amortisman (257) eksili (karşı) hesaptır; dönem amortismanı gider hesaplarına aktarılır, 257 alacaklanır.",
            "Şüpheli alacak karşılığı VUK'ta icra/dava şartı aranır; TMS 9'da tüm beklenen kredi kayıpları için ayrılır.",
            "Kıdem tazminatı karşılığı TMS 19 kapsamında aktüeryal yöntemle hesaplanır; VUK karşılık ayrımından farklıdır.",
            "Özkaynak değişim tablosu, dönem başı-sonu özkaynak bileşenlerinin tüm hareketini gösterir; kâr dağıtımı burada izlenir.",
          ],
        },
        questions: [
          {
            text: "Tekdüzen Muhasebe Sistemi'nde hesap grubu numaraları ile içerik eşleşmesi açısından aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "1: Borçlar, 2: Varlıklar, 3: Özkaynak" },
              { id: "B", text: "1 (Dönen Varlıklar), 2 (Duran Varlıklar), 3 (Kısa Vadeli Yabancı Kaynaklar — KVYK), 4 (Uzun Vadeli Yabancı Kaynaklar — UVYK), 5 (Özkaynaklar), 6 (Gelir Tablosu Hesapları), 7 (Maliyet Hesapları)" },
              { id: "C", text: "Tüm gruplar serbest olarak işletme tarafından numaralanır." },
              { id: "D", text: "Yalnızca 5 hesap grubu vardır." },
            ],
            correct: "B",
            explanation:
              "Tekdüzen Hesap Planı'nda hesap grupları sayısal kodlarla yapılandırılmıştır: (1) Dönen Varlıklar — bir yıl içinde paraya çevrilebilen veya tüketilen varlıklar (kasa, banka, alacaklar, stoklar), (2) Duran Varlıklar — bir yıldan uzun süreli kullanılan varlıklar (binalar, makine, taşıtlar), (3) Kısa Vadeli Yabancı Kaynaklar (KVYK) — bir yıl içinde ödenecek borçlar, (4) Uzun Vadeli Yabancı Kaynaklar (UVYK) — bir yıldan uzun vadeli borçlar, (5) Özkaynaklar — sermaye, yedekler, kâr, (6) Gelir Tablosu Hesapları — gelirler ve giderler, (7) Maliyet Hesapları — 7/A veya 7/B seçeneği. Ayrıca 0 (nazım hesaplar) ve 9 (dış muhasebe hesapları) da vardır. Bu yapı işletmeler arası karşılaştırma ve denetimi kolaylaştırır.",
          },
          {
            text: "Türkiye'de stok değerleme yöntemleri için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "FIFO ve LIFO yöntemleri serbestçe seçilebilir." },
              { id: "B", text: "FIFO (İlk Giren İlk Çıkar) ve Ortalama Maliyet yöntemleri kullanılabilir; LIFO (Son Giren İlk Çıkar) yöntemi Türkiye'de YASAKTIR." },
              { id: "C", text: "Yalnızca LIFO yöntemi kullanılır." },
              { id: "D", text: "Türkiye'de stok değerleme yöntemi yoktur." },
            ],
            correct: "B",
            explanation:
              "Türkiye'de Vergi Usul Kanunu uyarınca stok değerleme yöntemleri sınırlandırılmıştır: (1) FIFO (First In First Out — İlk Giren İlk Çıkar) — ilk alınan stoğun ilk satıldığı varsayımına dayanır, (2) Ortalama Maliyet Yöntemi — alımların ağırlıklı ortalaması alınır (basit veya hareketli ortalama). LIFO (Last In First Out — Son Giren İlk Çıkar) yöntemi Türkiye'de YASAKTIR; çünkü enflasyonist ortamda LIFO en güncel (yüksek) maliyetleri gider yazarak vergi matrahını düşürür ve devletin vergi gelirini azaltır. TMS 2 (Stoklar) standardı da LIFO'ya izin vermez (uluslararası uygulama da bu yöndedir). FIFO yöntemi enflasyon dönemlerinde daha yüksek brüt kâr gösterir; ortalama maliyet ise dengeli sonuç verir.",
          },
          {
            text: "Şüpheli alacaklar için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Şüpheli alacaklar için karşılık ayrılmaz." },
              { id: "B", text: "Tahsili şüpheli hale gelen alacaklar 'Şüpheli Ticari Alacaklar' (128) hesabına aktarılır ve karşılığında 'Şüpheli Ticari Alacaklar Karşılığı' (129) ayrılır; ihtiyatlılık ilkesi gereği gelecekteki tahsil edilemeyebilecek tutar gider olarak yansıtılır." },
              { id: "C", text: "Şüpheli alacaklar yalnızca devlet alacaklarında ortaya çıkar." },
              { id: "D", text: "Şüpheli alacak karşılığı ayırmak yasaktır." },
            ],
            correct: "B",
            explanation:
              "Şüpheli alacaklar muhasebesi, ihtiyatlılık ilkesinin somut bir uygulamasıdır. Tahsili şüpheli hale gelen alacaklar (örn. müşterinin iflası, dava açılması, vade aşımı, ödeme güçlüğü işaretleri) önce 'Şüpheli Ticari Alacaklar' (128) hesabına aktarılır. Aynı zamanda 'Şüpheli Ticari Alacaklar Karşılığı' (129) hesabı oluşturulur ve karşılık tutarı 'Karşılık Giderleri' (654) olarak gider yazılır. Bu sayede potansiyel kayıp önceden raporlanır, finansal tablolar aşırı iyimser görünmez. Vergisel açıdan ise VUK md. 323 uyarınca tahsili şüphelilik koşulları (dava-icra takibi başlatılması, küçük tutarlı protestolu vb.) sağlanırsa karşılık vergi matrahından düşülebilir; diğer koşullarda muhasebe karşılığı ayrılır ancak vergi kabul edilmez (KKEG).",
          },
          {
            text: "Maddi Duran Varlıklar grubunda 'Birikmiş Amortismanlar' (257) hesabının niteliği aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Doğrudan bir gelir hesabıdır." },
              { id: "B", text: "Aktifte yer alan ancak negatif (eksili) çalışan bir düzenleyici hesaptır; maddi duran varlıkların birikmiş amortisman düşüldükten sonraki net değerini gösterir." },
              { id: "C", text: "Pasifte yer alan bir borç hesabıdır." },
              { id: "D", text: "Yıl sonu kapatılan bir hesaptır." },
            ],
            correct: "B",
            explanation:
              "Birikmiş Amortismanlar (257) hesabı; aktifte yer alan ancak negatif (eksili) çalışan bir 'düzenleyici hesap'tır (kontra-aktif hesap). Diğer aktif hesapların aksine alacak tarafında çalışır ve normalde alacak bakiyesi verir. Amaç; maddi duran varlıkların maliyet bedelini olduğu gibi 25X hesabında gösterirken, geçen sürede yapılan amortisman tutarını ayrı bir hesapta biriktirmek. Bilançoda maddi duran varlıkların 'Net Defter Değeri' = (252-Binalar tarihi maliyeti) − (257-Birikmiş Amortismanlar) olarak gösterilir. Bu yapı; varlığın orijinal maliyetini de korur, kullanım süresince ne kadar tüketildiğini de gösterir. Yıl sonunda kapatılmaz; varlık satıldığında veya elden çıkarıldığında ilgili amortisman da sıfırlanır.",
          },
          {
            text: "Kıdem Tazminatı Karşılığı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Kıdem tazminatı karşılığı ayırmak yasaktır." },
              { id: "B", text: "İhtiyatlılık ilkesi gereği işten ayrılma durumunda ödenmesi muhtemel kıdem tazminatları için her yıl 'Kıdem Tazminatı Karşılığı' (372 veya 472) ayrılır; gelecekteki yükümlülük şimdiden kayda alınır." },
              { id: "C", text: "Yalnızca işçi ayrıldığında muhasebe kaydı yapılır." },
              { id: "D", text: "Yalnızca devlet kurumları için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "Kıdem tazminatı; 1475 sayılı eski İş Kanunu (md. 14 yürürlükte) uyarınca, en az 1 yıl çalıştıktan sonra belirli koşullarda işten ayrılan işçilere ödenmesi gereken bir tazminattır. İşveren açısından gelecekte ödenmesi muhtemel ciddi bir yükümlülüktür. İhtiyatlılık ilkesi gereği her yıl bilanço tarihine göre 'Kıdem Tazminatı Karşılığı' hesaplanır ve kayda alınır: Kısa Vadeli için 372, Uzun Vadeli için 472 hesabı kullanılır. Karşılık tutarı genelde 'her bir çalışan için her yıl 1 maaş' formülü ve aktüeryal hesaplamalarla bulunur (TMS 19). Vergisel açıdan ise yalnızca fiilen ödenen kıdem tazminatları gider olarak kabul edilir; karşılık ayırma vergi matrahından düşülmez (KKEG). Bu fark ertelenmiş vergi varlığı yaratabilir.",
          },
        ],
      },
      // ──────────── Ders 3: Gelir Tablosu Hesapları ve Dönem Sonu İşlemleri ────────────
      {
        id: "m1016-l3",
        title: "Gelir Tablosu Hesapları ve Dönem Sonu İşlemleri",
        duration: "9 dk",
        summary: {
          title: "Gelir Tablosu Hesapları ve Dönem Sonu",
          intro:
            "Gelir tablosu hesapları (6. grup), bir hesap döneminde elde edilen gelirleri ve katlanılan giderleri sınıflandırır. Brüt satışlardan başlayarak satış indirimleri, satışların maliyeti, faaliyet giderleri, diğer gelirler/giderler, finansman giderleri ve olağandışı kalemler basamaklı şekilde dönem net kâr/zararına ulaşılır. Dönem sonu işlemleri ise muhasebe içi (kayıtların düzenlenmesi) ve muhasebe dışı (envanter sayımı) iki tür envanter işlemini kapsar.",
          sections: [
            {
              heading: "Gelir Tablosu Yapısı (Basamaklı Sunum)",
              icon: "shield",
              items: [
                {
                  strong: "Brüt ve Net Satışlar:",
                  text: "Brüt Satışlar (60) = Yurtiçi Satışlar (600) + Yurtdışı Satışlar (601) + Diğer Gelirler (602); Satış İndirimleri (61) [İade-İndirim-Iskonto] çıkarılarak Net Satışlar bulunur.",
                },
                {
                  strong: "Brüt Satış Kârı/Zararı:",
                  text: "Net Satışlar − Satışların Maliyeti (62) = Brüt Satış Kârı/Zararı; SMM içinde 620 (Satılan Mamul Maliyeti), 621 (Satılan Ticari Mal Maliyeti), 622 (Satılan Hizmet Maliyeti).",
                },
                {
                  strong: "Faaliyet Kârı:",
                  text: "Brüt Kâr − Faaliyet Giderleri (63) = Faaliyet Kârı; Faaliyet Giderleri = Araştırma-Geliştirme (630) + Pazarlama Satış Dağıtım (631) + Genel Yönetim (632) giderleri.",
                },
                {
                  strong: "FVÖK ve Vergi Öncesi Kâr:",
                  text: "Faaliyet Kârı + Diğer Olağan Gelir/Kârlar (64) − Diğer Olağan Gider/Zararlar (65) = Olağan Kâr; ardından Finansman Giderleri (66) çıkarılır → Olağandışı Gelir/Gider (67-68) eklenir → Vergi Öncesi Kâr.",
                },
                {
                  strong: "Dönem Net Kârı:",
                  text: "Vergi Öncesi Kâr − Dönem Kârı Vergi ve Diğer Yasal Yükümlülük Karşılıkları (691) = Dönem Net Kârı (zararı); 692 hesabında izlenir.",
                },
              ],
            },
            {
              heading: "Dönem Sonu İşlemleri ve Envanter",
              icon: "trend",
              items: [
                {
                  strong: "Muhasebe Dışı Envanter:",
                  text: "Fiili sayım, ölçüm ve değerleme işlemleridir; stok sayımı, kasa sayımı, banka mutabakatları, alacak-borç teyitleri yapılır, gerçek tutarlar tespit edilir.",
                },
                {
                  strong: "Muhasebe İçi Envanter:",
                  text: "Fiili durum ile kayıtlar arasındaki farkların düzeltilmesidir; eksiklik/fazlalık kayıtları, tahakkuk işlemleri (gelir/gider), karşılık ayrılması, amortisman, KDV mahsubu yapılır.",
                },
                {
                  strong: "Tahakkuk Esası:",
                  text: "Gelir ve giderler ait olduğu döneme kayıt edilir; gelecek aylara ait gider 180 hesabına, gelir tahakkuku 181 hesabına alınır — dönemsellik ilkesinin uygulamasıdır.",
                },
                {
                  strong: "Hesap Kapatma ve Mizan:",
                  text: "Gelir tablosu hesapları (6. grup) yıl sonu 690 'Dönem Kârı veya Zararı' hesabına aktarılır; bilanço hesapları gelecek dönem açılış kayıtları olur.",
                },
                {
                  strong: "Finansal Tabloların Hazırlanması:",
                  text: "Dönem sonu işlemleri tamamlandıktan sonra Bilanço, Gelir Tablosu, Nakit Akış Tablosu, Özkaynak Değişim Tablosu ve Dipnotlar hazırlanır.",
                },
              ],
            },
          ],
          tip: "Gelir tablosu basamaklı: Net Satışlar → Brüt Kâr → Faaliyet Kârı → Olağan Kâr → Vergi Öncesi Kâr → Net Kâr. Dönem sonu envanter iki tür: muhasebe DIŞI (fiili sayım) ve muhasebe İÇİ (kayıtların düzeltilmesi). Tahakkuk esası dönemsellik ilkesinin uygulamasıdır. Yıl sonu gelir tablosu hesapları 690'a kapatılır, bilanço hesapları taşınır.",
          kavramlar: [
            { terim: "Brüt Kâr", tanim: "Net satışlardan satılan malın maliyeti düşüldükten sonra kalan tutar; işletmenin ticari faaliyetinin ilk kârlılık göstergesi." },
            { terim: "Faaliyet Kârı (FVÖK)", tanim: "Brüt kârdan faaliyet giderlerinin (pazarlama, genel yönetim, Ar-Ge) düşülmesiyle bulunan; faiz ve vergi öncesi faaliyet sonucu." },
            { terim: "690 Dönem Kârı/Zararı Hesabı", tanim: "Yıl sonunda tüm gelir ve gider hesaplarının kapatılarak aktarıldığı özet hesap; dönem net kârını veya zararını gösterir." },
            { terim: "Muhasebe Dışı Envanter", tanim: "Fiziksel sayım, tartım ve ölçümle gerçek stok miktarını belirleme; dönem sonu kayıt düzeltmelerine esas oluşturur." },
            { terim: "Muhasebe İçi Envanter", tanim: "Kayıt bakiyelerinin gerçek durumla karşılaştırılarak düzeltici kayıtların yapılması; dönemsellik gereği tahakkuk, karşılık, reeskont işlemleri." },
            { terim: "Reeskont", tanim: "Bilanço tarihinde vadesi gelmemiş senetlerin iskonto oranıyla bugünkü değere indirgenmesi işlemi; dönem sonu gider/gelir düzeltmesi." },
            { terim: "Kapanış Kaydı", tanim: "Dönem sonunda gelir tablosu hesaplarının 690'a devredilmesi ve ardından 690 bakiyesinin bilanço hesabına (570/580) aktarılması." },
          ],
          dikkatlar: [
            "Gelir tablosu sıralaması: Net Satışlar → Brüt Kâr → Faaliyet Kârı → Olağan Kâr → Vergi Öncesi Kâr → Net Kâr; atlamak hata yaratır.",
            "Dönem sonu muhasebe dışı envanterde eksiklik varsa stok gider yazılır; fazlalık varsa gelir yazılır.",
            "Reeskont hesaplamada senet nominal değeri değil bugünkü değeri esas alınır; faiz gideri/geliri dönemsellik gereği tanınır.",
            "Kapanış kaydında yalnızca gelir tablosu (6. grup) hesaplar 690'a kapatılır; bilanço hesapları kapatılmaz, bir sonraki döneme devredilir.",
            "FVÖK = Faaliyet Kârı; faiz giderlerinden etkilenmez — farklı finansman yapısındaki şirketleri kıyaslamada kullanılır.",
          ],
        },
        questions: [
          {
            text: "Gelir tablosunda 'Brüt Satış Kârı/Zararı' nasıl hesaplanır?",
            options: [
              { id: "A", text: "Brüt Satışlar − Tüm Giderler" },
              { id: "B", text: "Net Satışlar − Satışların Maliyeti (SMM); önce brüt satışlardan satış indirimleri çıkarılarak net satışlara ulaşılır, sonra satışların maliyeti çıkarılır." },
              { id: "C", text: "Faaliyet Kârı − Vergiler" },
              { id: "D", text: "Yalnızca yurtdışı satışlardır." },
            ],
            correct: "B",
            explanation:
              "Gelir tablosu basamaklı (multi-step) sunum yapısında ilk önemli ara toplam Brüt Satış Kârı/Zararı'dır: (1) Brüt Satışlar = Yurtiçi Satışlar (600) + Yurtdışı Satışlar (601) + Diğer Gelirler (602), (2) Net Satışlar = Brüt Satışlar − Satış İndirimleri [Satıştan İadeler (610), Satış İskontoları (611), Diğer İndirimler (612)], (3) Brüt Satış Kârı/Zararı = Net Satışlar − Satışların Maliyeti (SMM). SMM içinde Satılan Mamul Maliyeti (620), Satılan Ticari Mal Maliyeti (621), Satılan Hizmet Maliyeti (622) yer alır. Brüt kâr marjı (Brüt Kâr / Net Satışlar), şirketin temel ticari faaliyetinin kârlılığını gösteren önemli bir orandır.",
          },
          {
            text: "'Faaliyet Giderleri' (63) grubunda yer alan giderler aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Yalnızca pazarlama giderleri" },
              { id: "B", text: "Araştırma ve Geliştirme Giderleri (630), Pazarlama Satış ve Dağıtım Giderleri (631), Genel Yönetim Giderleri (632)" },
              { id: "C", text: "Faiz giderleri ve banka komisyonları" },
              { id: "D", text: "Yalnızca personel maaşları" },
            ],
            correct: "B",
            explanation:
              "Faaliyet Giderleri (63) grubu, işletmenin asıl faaliyet konusunu sürdürmek için katlandığı giderleri kapsar ve üç ana hesaptan oluşur: (1) Araştırma ve Geliştirme Giderleri (630) — yeni ürün/süreç geliştirme, yenilik faaliyetleri için yapılan harcamalar (TMS 38 kapsamında bazı koşullarda aktifleştirilebilir), (2) Pazarlama, Satış ve Dağıtım Giderleri (631) — reklam, pazarlama personeli, sevkiyat, satış komisyonları, (3) Genel Yönetim Giderleri (632) — üst yönetim, muhasebe, hukuk, idari personel, ofis kira, yönetim kurulu giderleri. Önemli not: Faiz giderleri 'Finansman Giderleri' (66) grubunda, satılan ürünlerin maliyeti ise 'Satışların Maliyeti' (62) grubunda yer alır; bunlar faaliyet giderleri değildir.",
          },
          {
            text: "Dönem sonu işlemlerinde 'muhasebe dışı envanter' ile 'muhasebe içi envanter' arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki kavram aynıdır." },
              { id: "B", text: "Muhasebe DIŞI envanter: fiili sayım, ölçüm ve değerleme işlemleridir (stok sayımı, kasa sayımı, banka mutabakatları). Muhasebe İÇİ envanter: fiili durum ile kayıtlar arasındaki farkların düzeltilmesidir (eksiklik/fazlalık kayıtları, tahakkuk, karşılık ayrılması, amortisman)." },
              { id: "C", text: "Muhasebe dışı envanter yalnızca devlet kurumlarınca yapılır." },
              { id: "D", text: "Muhasebe içi envanter yıl içinde sürekli yapılır." },
            ],
            correct: "B",
            explanation:
              "Dönem sonu işlemleri iki ana aşamadan oluşur: (1) Muhasebe Dışı Envanter — fiziksel sayım ve gerçek durumun tespitidir. Stoklar tek tek sayılır, kasa parası saydırılır, bankalardan ekstre alınır ve mutabakat yapılır, alacak-borç teyit mektupları gönderilip alınır, demirbaşlar listelenir. Bu işlem muhasebe defterleriyle değil 'gerçek dünya' ile ilgilidir. (2) Muhasebe İÇİ Envanter — fiili durum ile defter kayıtları arasındaki farkların kayda alınmasıdır. Sayım sonucu eksiklik/fazlalık varsa kaydedilir; gelecek dönemlere ait gelir-gider tahakkukları yapılır (180, 181, 280, 380, 480 hesapları); karşılıklar ayrılır (kıdem tazminatı, şüpheli alacak, garanti); amortismanlar hesaplanır; KDV mahsupları yapılır. İki tür birlikte yapılır ve sonuçta kayıtlar gerçek durumu yansıtır.",
          },
          {
            text: "'Tahakkuk esası' (accrual basis) ilkesi muhasebede nasıl uygulanır?",
            options: [
              { id: "A", text: "Yalnızca tahsilat yapılan gelirler kayıt edilir." },
              { id: "B", text: "Gelir ve giderler ait olduğu döneme kayıt edilir, nakit akışından bağımsızdır; gelecek aylara ait gider 180/280 hesaplarına, gelir tahakkukları 181/281 hesaplarına alınır — dönemsellik ilkesinin somut uygulamasıdır." },
              { id: "C", text: "Gelir ve giderler nakit hareketinde kayıt edilir." },
              { id: "D", text: "Yalnızca yıl sonu tüm gelir-giderler kaydedilir." },
            ],
            correct: "B",
            explanation:
              "Tahakkuk esası (accrual basis); modern muhasebenin temel ilkesidir ve dönemsellik kavramının uygulamasıdır. Bu ilkeye göre gelir ve giderler nakit akışından bağımsız olarak ait olduğu döneme kayıt edilir. Örnekler: (1) Aralık ayında alınan ancak 6 aylık olan kira bedeli — toplam gelirin sadece 1 aya ait kısmı bu yıl, kalan 5 ay sonraki yıl gelir kaydedilir (Gelecek Aylara Ait Gelirler — 380), (2) Yıl sonu yapılan ancak ödenmeyen elektrik faturası — gider tahakkuk ettirilir (Gider Tahakkukları — 381), (3) Çalışanların yıl içinde hak ettiği ancak ertesi yıl ödenecek izin tatili — karşılık olarak gider yazılır. Tahakkuk esası, alternatifi olan 'nakit esası'ndan (cash basis) çok daha doğru bir performans ölçümü sağlar; çünkü gelirin elde edilmesi ile nakit tahsilatı her zaman aynı dönemde olmaz.",
          },
          {
            text: "Yıl sonu hesap kapatma sürecinde gelir tablosu hesapları (6. grup) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Bilanço hesaplarına aynen aktarılır." },
              { id: "B", text: "Yıl sonu '690 Dönem Kârı veya Zararı' hesabına kapatılır; gelir hesapları borç tarafında, gider hesapları alacak tarafında devredilir; sonuç 690 hesabında dönem kârı (alacak bakiyesi) veya zararı (borç bakiyesi) olarak kalır." },
              { id: "C", text: "Yıl sonu gelir tablosu hesapları silinir." },
              { id: "D", text: "Hesap kapatma yapılmaz." },
            ],
            correct: "B",
            explanation:
              "Yıl sonu hesap kapatma süreci; muhasebe döngüsünün son adımıdır. Gelir tablosu hesapları (6. grup hesapları — gelir-gider) yıl boyunca biriktirilir ve dönem sonunda '690 Dönem Kârı veya Zararı' hesabına kapatılır: (1) Gelirler ve gelir karakterli hesaplar borç tarafına yazılarak kapatılır (örn. 600 Yurtiçi Satışlar Borç, 690 Dönem Kârı Alacak), (2) Giderler ise alacak tarafına yazılarak kapatılır (örn. 690 Dönem Kârı Borç, 620 Satılan Mamul Maliyeti Alacak). Sonuçta 690 hesabında dönem net kârı (alacak bakiyesi) veya zararı (borç bakiyesi) kalır. Vergi karşılıkları (691) düşüldükten sonra 692 'Dönem Net Kârı/Zararı' hesabına aktarılır ve oradan 590 'Dönem Net Kârı' (özkaynaklar grubuna) hesabına geçer. Bilanço hesapları ise (1-5. grup) yıl sonu kapatılmaz, sonraki dönemin açılış kaydı olarak devam eder.",
          },
        ],
      },
      // ──────────── Ders 4: Finansal Raporlama, TMS/TFRS ve II-14.1 Tebliği ────────────
      {
        id: "m1016-l4",
        title: "Finansal Raporlama, TMS/TFRS ve II-14.1 Tebliği",
        duration: "10 dk",
        summary: {
          title: "Finansal Raporlama ve TMS/TFRS",
          intro:
            "Finansal raporlama; işletmelerin mali durumu, performansı ve nakit akışları hakkında bilgi sağlamak amacıyla finansal tablolar üreten süreçtir. Türkiye'de KGK tarafından yürürlüğe konulan TMS/TFRS standartları büyük işletmeler ve halka açık şirketler için zorunludur. Sermaye piyasasında ise II-14.1 sayılı 'Sermaye Piyasasında Finansal Raporlamaya İlişkin Esaslar Tebliği' özel düzenlemeleri içerir. Faydalı finansal bilginin niteliksel özellikleri (ihtiyaca uygunluk, gerçeğe uygun sunum, karşılaştırılabilirlik vb.) raporlamanın kalite kriterleridir.",
          sections: [
            {
              heading: "Finansal Raporlamaya İlişkin Kavramsal Çerçeve",
              icon: "shield",
              items: [
                {
                  strong: "Finansal Raporlamanın Amacı:",
                  text: "Mevcut ve potansiyel yatırımcılara, borç verenlere ve diğer alacaklılara, kaynaklarını sağlamada yardımcı olacak finansal bilgi sunmaktır.",
                },
                {
                  strong: "Finansal Tablo Kullanıcıları:",
                  text: "Yatırımcılar, kredi verenler, tedarikçiler, müşteriler, çalışanlar, devlet ve düzenleyiciler, kamu — her kullanıcının farklı bilgi ihtiyaçları vardır.",
                },
                {
                  strong: "Faydalı Finansal Bilginin Temel Özellikleri:",
                  text: "İhtiyaca uygunluk (relevance) — kararı etkileyen bilgi; Gerçeğe uygun sunum (faithful representation) — tam, tarafsız, hatasız.",
                },
                {
                  strong: "Faydalı Finansal Bilginin Destekleyici Özellikleri:",
                  text: "Karşılaştırılabilirlik (firmalar arası ve dönemler arası), doğrulanabilirlik (verifiability), zamanlılık (timeliness), anlaşılabilirlik (understandability).",
                },
                {
                  strong: "Tahakkuk ve Tanıma Kriterleri:",
                  text: "Bir kalem finansal tabloya tahakkuk ettirilir eğer: (a) gelecekte ekonomik fayda akışı muhtemelse, (b) güvenilir olarak ölçülebilirse.",
                },
              ],
            },
            {
              heading: "TMS/TFRS ve II-14.1 Tebliği",
              icon: "trend",
              items: [
                {
                  strong: "TMS/TFRS Standartları:",
                  text: "KGK tarafından IFRS ile uyumlu olarak yürürlüğe konulan standartlar bütünüdür; halka açık şirketler, bankalar, sigorta şirketleri ve kamu yararını ilgilendiren kuruluşlar (KAYİK) zorunlu uygulamak zorundadır.",
                },
                {
                  strong: "Temel Standartlar:",
                  text: "TMS 1 (Finansal Tabloların Sunumu), TMS 2 (Stoklar), TMS 7 (Nakit Akış Tablosu), TMS 8 (Muhasebe Politikaları), TMS 16 (Maddi Duran Varlıklar), TMS 36 (Varlıklarda Değer Düşüklüğü), TFRS 9 (Finansal Araçlar), TFRS 15 (Hasılat), TFRS 16 (Kiralamalar).",
                },
                {
                  strong: "II-14.1 Tebliğin Kapsamı:",
                  text: "Sermaye piyasasında faaliyet gösteren ihraçcılar, sermaye piyasası kurumları ve KAP'a yayımlanan bilgileri düzenler; finansal raporların hazırlanması, denetlenmesi ve kamuya açıklanmasını içerir.",
                },
                {
                  strong: "Raporlama Dönemleri:",
                  text: "Yıllık (12 ay), ara dönem (3 aylık) ve özel dönem raporları zorunludur; halka açık şirketler 9 ayın sonunda finansal raporlarını KAP'ta açıklamalıdır.",
                },
                {
                  strong: "Konsolide Finansal Tablolar:",
                  text: "Bağlı ortaklıkları olan şirketler grup için konsolide tablo hazırlar; iştirakler özkaynak yöntemiyle, müşterek girişimler ise eşitle ortak yönetilen kuruluş yaklaşımıyla muhasebeleştirilir.",
                },
              ],
            },
          ],
          tip: "Faydalı bilgi 2 temel özellik: ihtiyaca uygunluk + gerçeğe uygun sunum. 4 destekleyici özellik: karşılaştırılabilirlik, doğrulanabilirlik, zamanlılık, anlaşılabilirlik. KGK = Türkiye'nin standart koyucu kurumu. II-14.1 = SPK'nın finansal raporlama tebliği. KAYİK = halka açık + bankalar + sigorta. Konsolide tablo = grup tablosu (bağlı ortaklıklar dahil).",
          kavramlar: [
            { terim: "İhtiyaca Uygunluk", tanim: "Finansal bilginin kullanıcının kararlarını etkileyebilmesi; tahmin değeri veya doğrulayıcı değer taşıması." },
            { terim: "Gerçeğe Uygun Sunum", tanim: "Finansal bilginin tam, tarafsız ve hatasız olması; ekonomik gerçeği doğru biçimde yansıtması." },
            { terim: "KGK (Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu)", tanim: "Türkiye'de muhasebe ve denetim standartlarını belirleyen bağımsız idari otorite; ISA uyumlu BDS, TMS/TFRS yayımlar." },
            { terim: "KAYİK (Kamuyu Aydınlatma Yükümlülüğü İçeren Kuruluş)", tanim: "Halka açık şirketler, bankalar, sigortacılar, emeklilik şirketleri; TMS/TFRS uygulamak zorunludur." },
            { terim: "Konsolide Finansal Tablolar", tanim: "Ana ortaklık ve bağlı ortaklıklarının tek bir ekonomik işletme gibi raporlandığı finansal tablolar; TFRS 10 kapsamında." },
            { terim: "SPK Tebliği II-14.1", tanim: "Sermaye piyasası mevzuatı kapsamındaki şirketlerin finansal raporlamasını düzenleyen tebliğ; TFRS uyumunu ve KAP açıklamalarını zorunlu kılar." },
            { terim: "Karşılaştırılabilirlik İlkesi", tanim: "Finansal bilgilerin dönemler ve işletmeler arasında tutarlı yöntemlerle karşılaştırılabilmesini sağlayan destekleyici niteliksel özellik." },
          ],
          dikkatlar: [
            "Temel iki niteliksel özellik: ihtiyaca uygunluk + gerçeğe uygun sunum; destekleyiciler (4 adet) bunları pekiştirir.",
            "KGK = standart koyucu; bağımsız denetçileri lisanslar, disiplin kararları verir, ISA uyumlu BDS'leri yayımlar.",
            "KAYİK kapsamındaki şirketler TMS/TFRS'ye tabidir; küçük işletmeler KÜMİ FRS'yi kullanabilir.",
            "Konsolidasyonda ana ortaklık + bağlı ortaklıklar tek tabloda gösterilir; grup içi işlemler elimine edilir.",
            "SPK II-14.1 tebliği halka açık şirketlere hem TFRS uyumunu hem KAP'ta belirli sürelerde açıklama yapmayı zorunlu kılar.",
          ],
        },
        questions: [
          {
            text: "TMS/TFRS standartlarını Türkiye'de yürürlüğe koyan ve uygulamasını denetleyen kurum aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Sermaye Piyasası Kurulu (SPK)" },
              { id: "B", text: "Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu (KGK)" },
              { id: "C", text: "Bankacılık Düzenleme ve Denetleme Kurumu (BDDK)" },
              { id: "D", text: "Hazine ve Maliye Bakanlığı" },
            ],
            correct: "B",
            explanation:
              "Türkiye'de muhasebe ve denetim standartlarını belirleyen kurum, 660 sayılı Kanun Hükmünde Kararname ile 2011 yılında kurulan Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu'dur (KGK). KGK; uluslararası standartlarla (IFRS — International Financial Reporting Standards) uyumlu Türkiye Muhasebe Standartları (TMS) ve Türkiye Finansal Raporlama Standartları (TFRS) yayımlar, ayrıca Bağımsız Denetim Standartlarını (BDS) belirler ve bağımsız denetçileri yetkilendirir. SPK ise sermaye piyasalarındaki ihraçcıların finansal raporlama yükümlülüklerini II-14.1 Tebliği çerçevesinde düzenler ancak temel standartlar KGK kaynaklıdır. BDDK bankalar için, EPDK enerji şirketleri için sektör spesifik düzenlemeler yapar.",
          },
          {
            text: "Faydalı finansal bilginin 'temel niteliksel özellikleri' aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Yalnızca anlaşılabilirlik ve karşılaştırılabilirlik" },
              { id: "B", text: "İhtiyaca uygunluk (relevance) — kararı etkileyen bilgi; Gerçeğe uygun sunum (faithful representation) — tam, tarafsız ve hatasız sunum." },
              { id: "C", text: "Yalnızca zamanlılık" },
              { id: "D", text: "Hızlı raporlama ve gizlilik" },
            ],
            correct: "B",
            explanation:
              "Kavramsal Çerçeve'ye göre faydalı finansal bilginin niteliksel özellikleri iki kategoriye ayrılır: (A) TEMEL Niteliksel Özellikler — bunlar bilginin faydalı olabilmesi için MUTLAK GEREKLİ olanlardır: (1) İhtiyaca Uygunluk (Relevance) — bilgi kullanıcının kararını etkileyebilme yeteneğine sahip olmalıdır; öngörü değeri (predictive value) ve onaylayıcı değer (confirmatory value) içermelidir. Önemlilik (materiality) ihtiyaca uygunluğun bir alt boyutudur, (2) Gerçeğe Uygun Sunum (Faithful Representation) — bilgi tam, tarafsız ve hatasız olmalıdır. (B) DESTEKLEYİCİ Niteliksel Özellikler — temel özellikleri güçlendirir ancak tek başlarına yeterli değildir: karşılaştırılabilirlik, doğrulanabilirlik, zamanlılık, anlaşılabilirlik.",
          },
          {
            text: "II-14.1 sayılı 'Sermaye Piyasasında Finansal Raporlamaya İlişkin Esaslar Tebliği' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm işletmeler için zorunludur." },
              { id: "B", text: "Sermaye piyasasında faaliyet gösteren ihraçcılar, sermaye piyasası kurumları ve KAP'a yayımlanan bilgileri düzenler; finansal raporların hazırlanması, denetlenmesi ve kamuya açıklanmasını içerir." },
              { id: "C", text: "Yalnızca bankalar için geçerlidir." },
              { id: "D", text: "TMS/TFRS standartlarının yerini alır." },
            ],
            correct: "B",
            explanation:
              "II-14.1 sayılı Sermaye Piyasasında Finansal Raporlamaya İlişkin Esaslar Tebliği; SPK tarafından sermaye piyasalarındaki ihraçcılar için özel olarak çıkarılmış bir düzenlemedir. Tebliğin kapsamı: (1) İhraçcıların (halka açık şirketler) ve sermaye piyasası kurumlarının (PYŞ, GYO, MKYO, aracı kurumlar vb.) finansal raporlarını TMS/TFRS uyarınca hazırlamaları zorunludur, (2) Yıllık ve ara dönem (3 ve 9 aylık) finansal raporlama yükümlülükleri, (3) Bağımsız denetçi seçimi ve denetim raporlarının yayımı, (4) KAP üzerinden kamuya açıklama yükümlülükleri, (5) Konsolide finansal tablolar. Bu tebliğ TMS/TFRS standartlarının yerine geçmez, onları sermaye piyasası bağlamında uygular ve ek yükümlülükler getirir.",
          },
          {
            text: "Halka açık şirketler için ara dönem finansal raporlama yükümlülüğü için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca yıllık rapor yeterlidir." },
              { id: "B", text: "Yıllık raporlara ek olarak ara dönem (3 aylık ve 9 aylık) finansal raporlar zorunludur; bu raporlar belirlenen sürelerde KAP üzerinden kamuya açıklanmalıdır." },
              { id: "C", text: "Yalnızca özel durum açıklamaları yapılır." },
              { id: "D", text: "Ara dönem raporlama yasaktır." },
            ],
            correct: "B",
            explanation:
              "Halka açık şirketler için raporlama dönemleri II-14.1 Tebliği uyarınca belirlenmiştir: (1) Yıllık Finansal Raporlar — 12 aylık dönem sonu için hazırlanır, bağımsız denetçi tarafından denetlenir, dönem sonundan itibaren belirli sürede KAP'ta açıklanır, (2) Ara Dönem Finansal Raporlar — 3 aylık (Mart, Haziran, Eylül) ve 9 aylık ara dönemler için hazırlanır; sınırlı denetimden geçer, daha kısa sürede yayımlanır, (3) Özel Durum Açıklamaları — faaliyetlerini önemli ölçüde etkileyen herhangi bir gelişme oluştuğunda anlık olarak KAP'ta açıklanmalıdır. Bu raporlama yapısı yatırımcıların güncel bilgiye sürekli erişimini sağlar; bilgi asimetrisini azaltır ve sermaye piyasasının sağlıklı işleyişine katkıda bulunur. Geç açıklama veya eksik açıklama SPK tarafından idari para cezasına tabidir.",
          },
          {
            text: "Konsolide finansal tablolar için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca tek başına şirket tablolarıdır." },
              { id: "B", text: "Bağlı ortaklıkları olan ana ortaklık ve bağlı ortaklıklarının finansal tablolarının grup olarak birleştirildiği, grup içi işlemlerin elimine edildiği tablolardır; iştirakler özkaynak yöntemiyle muhasebeleştirilir." },
              { id: "C", text: "Yalnızca yabancı şirketler için hazırlanır." },
              { id: "D", text: "Yalnızca devlete ait gruplar için zorunludur." },
            ],
            correct: "B",
            explanation:
              "Konsolide finansal tablolar (consolidated financial statements); bir ana ortaklığın (parent company) ve bağlı ortaklıklarının (subsidiaries — kontrol oranı %50'nin üstünde) finansal tablolarının grup olarak birleştirildiği tablolardır. TFRS 10 'Konsolide Finansal Tablolar' ve TMS 28 'İştiraklerdeki ve İş Ortaklıklarındaki Yatırımlar' standardı bu süreci düzenler. Konsolidasyon süreci: (1) Ana ortaklık ve bağlı ortaklıkların tabloları satır satır toplanır, (2) Grup içi işlemler (örn. ana ortaklığın bağlı ortaklığa satışı) elimine edilir, (3) Bağlı ortaklığa olan yatırım ile bağlı ortaklığın özsermayesi karşılıklı netleşir (eliminasyon), (4) Azınlık payları (kontrol gücü olmayan paylar) ayrı gösterilir. İştirakler (%20-50 etki) için özkaynak yöntemi (equity method) kullanılır — yatırım, iştirakteki net varlığın payımız oranındaki tutarına eşitlenir.",
          },
        ],
      },
      // ──────────── Ders 5: Bağımsız Denetim ────────────
      {
        id: "m1016-l5",
        title: "Bağımsız Denetim — Çerçeve, Türleri ve Yaklaşımları",
        duration: "10 dk",
        summary: {
          title: "Bağımsız Denetim",
          intro:
            "Bağımsız denetim; işletmelerin finansal tablolarının ve diğer finansal bilgilerinin, finansal raporlama standartlarına uygun olarak hazırlanmasının makul güvence verecek şekilde değerlendirilmesi ve görüş bildirilmesi sürecidir. Denetim; bağımsızlık, güvenilirlik ve şeffaflık gereksinimlerini karşılayan profesyonel hizmettir. Türkiye'de KGK tarafından düzenlenen Bağımsız Denetim Standartları (BDS) IFAC'ın ISA (International Standards on Auditing) standartları ile uyumludur.",
          sections: [
            {
              heading: "Bağımsız Denetim Çerçevesi ve Türleri",
              icon: "shield",
              items: [
                {
                  strong: "Bağımsız Denetimin Amacı:",
                  text: "İşletmenin finansal tablolarının ilgili finansal raporlama standartlarına uygun olarak hazırlandığına ve gerçeği yansıttığına dair makul güvence sağlamak ve bağımsız denetçi görüşü bildirmektir.",
                },
                {
                  strong: "Bağımsız Denetimin Faydaları:",
                  text: "Finansal bilginin güvenilirliğini artırır, sermaye maliyetini düşürür, yönetim ile ortaklar arasındaki bilgi asimetrisini azaltır, suiistimalleri caydırır, kamu güvenini güçlendirir.",
                },
                {
                  strong: "Denetim Türleri:",
                  text: "Konu açısından: finansal denetim, faaliyet denetimi (etkinlik), uygunluk denetimi (yasalara uyum). Yapan kişi açısından: iç denetim (bordrolu), dış (bağımsız) denetim, kamu denetimi (vergi, SGK).",
                },
                {
                  strong: "Denetçi Türleri:",
                  text: "Bağımsız denetçi (KGK lisanslı), iç denetçi (şirket bordrolu, genelde IIA üyesi), kamu denetçisi (Sayıştay, Maliye); her birinin yetkisi ve raporlama hedefi farklıdır.",
                },
                {
                  strong: "Denetim Standartları:",
                  text: "BDS (Bağımsız Denetim Standartları) — KGK yayımlar, ISA ile uyumludur; standartların amacı denetim kalitesini artırmak, denetçi davranışını standartlaştırmak ve toplumun denetime güvenini sağlamaktır.",
                },
              ],
            },
            {
              heading: "Denetim Yaklaşımları ve Süreç",
              icon: "trend",
              items: [
                {
                  strong: "Risk Bazlı Denetim Yaklaşımı:",
                  text: "Modern denetimde standart yaklaşım; denetçi önce işletmeyi anlar ve risk değerlendirmesi yapar (önemli yanlışlık riski), yüksek risk alanlarına daha fazla denetim çalışması yöneltilir.",
                },
                {
                  strong: "İç Kontrol Sistemi Değerlendirmesi:",
                  text: "İşletmenin iç kontrol sisteminin etkinliği değerlendirilir; iç kontroller güvenilirse esaslı denetim çalışmaları azaltılabilir, zayıfsa daha kapsamlı testler yapılır.",
                },
                {
                  strong: "Maddi Doğruluk (Esaslı) Testleri:",
                  text: "Hesap bakiyelerinin doğruluğunun teyit edilmesi için yapılan testlerdir: belge incelemesi, üçüncü taraf teyitleri (banka, müşteri, tedarikçi), fiziksel sayım, analitik prosedürler.",
                },
                {
                  strong: "Önemlilik (Materiality) Kavramı:",
                  text: "Bir hatanın veya yanlışlığın finansal tabloların kullanıcılarının kararlarını etkileyebilecek büyüklükte olmasıdır; denetim önemlilik eşiğine göre planlanır ve yürütülür.",
                },
                {
                  strong: "Denetim Görüşleri:",
                  text: "Olumlu görüş (uygun sunum), şartlı görüş (sınırlı sorun), olumsuz görüş (önemli hata var), görüş bildirmekten kaçınma (yeterli kanıt elde edilemedi) — dört tür denetim sonucu.",
                },
              ],
            },
          ],
          tip: "Denetim 4 türü: finansal, faaliyet, uygunluk, IT. Denetçi 3 türü: bağımsız (dış), iç, kamu. Modern yaklaşım = risk bazlı denetim. İç kontrol güçlüyse esaslı test azalır. Önemlilik = denetim planlamanın temel kavramı. 4 denetim görüşü: olumlu, şartlı, olumsuz, görüş bildirmeme. KGK = TR'de standart koyucu, ISA ile uyumlu BDS yayımlar.",
          kavramlar: [
            { terim: "Risk Bazlı Denetim", tanim: "Önemli yanlış beyan riskinin yüksek olduğu alanlara denetim kaynaklarını yoğunlaştıran modern denetim yaklaşımı." },
            { terim: "Önemlilik (Materiality)", tanim: "Finansal tablolardaki hata veya ihmalin kullanıcı kararlarını etkileyebileceği eşik; denetim planı ve test kapsamını belirler." },
            { terim: "İç Kontrol", tanim: "Finansal raporlamanın güvenilirliği, faaliyetlerin etkinliği ve mevzuata uyumu güvenceye almak için yönetimce kurulan süreç." },
            { terim: "Esaslı Test", tanim: "Finansal tablo tutarlarını ve açıklamalarını doğrudan test eden denetim prosedürü; iç kontrol zayıfsa kapsamı artar." },
            { terim: "Olumlu Görüş", tanim: "Finansal tabloların tüm önemli yönleriyle geçerli çerçeveye uygun hazırlandığını belirten bağımsız denetçi görüşü." },
            { terim: "Şartlı Görüş", tanim: "Belirli konular dışında finansal tabloların uygun hazırlandığını belirten görüş; önemli ama tüm tabloyu etkileyen bir sorun yoktur." },
            { terim: "BDS (Bağımsız Denetim Standartları)", tanim: "KGK'nın ISA uyumlu olarak yayımladığı denetim standartları; Türkiye'de bağımsız denetim bu standartlara göre yapılır." },
          ],
          dikkatlar: [
            "4 denetim görüşü: olumlu (sorun yok) → şartlı (sınırlı sorun) → olumsuz (tablolar yanıltıcı) → görüş bildirmeme (kapsam çok dar).",
            "Risk bazlı denetimde önce yanlış beyan riski değerlendirilir; yüksek riskli hesaplara daha fazla esaslı test uygulanır.",
            "İç kontrol testleri güçlü iç kontrol varlığında esaslı testleri azaltır; ancak tümüyle kaldırmaz.",
            "Önemlilik eşiği genellikle toplam varlıkların veya gelirin %0,5-2'si arasında belirlenir; eşik altı hatalar raporlanmaz.",
            "KGK = denetim standartları (BDS) + muhasebe standartları (TMS/TFRS) + etik kurallar; hem bağımsız hem iç denetçileri düzenler.",
          ],
        },
        questions: [
          {
            text: "Bağımsız denetimin temel amacı aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İşletmenin vergisini hesaplamak ve devlete ödemek" },
              { id: "B", text: "İşletmenin finansal tablolarının ilgili finansal raporlama standartlarına uygun olarak hazırlandığına ve gerçeği yansıttığına dair makul güvence sağlamak ve bağımsız denetçi görüşü bildirmektir." },
              { id: "C", text: "İşletmenin günlük operasyonlarını yönetmek" },
              { id: "D", text: "İşletmenin pazar değerini belirlemek" },
            ],
            correct: "B",
            explanation:
              "Bağımsız denetim, BDS 200 standardı uyarınca; finansal tabloların finansal raporlama standartlarına (TMS/TFRS, BOBİ FRS) uygun olarak hazırlanıp tüm önemli yönleriyle gerçeği yansıttığına dair MAKUL GÜVENCE elde etmek ve buna ilişkin bir görüş bildirmektir. 'Makul güvence' (reasonable assurance) yüksek bir güvence düzeyidir ancak %100 değildir; örneğin önemsiz bir hata atlanabilir, ancak önemli (kritik) hatalar yakalanmalıdır. Denetim; vergi hesaplama, yönetim danışmanlığı veya işletme yönetimi DEĞİLDİR. Bu görevler bağımsızlık ilkesini ihlal eder. Denetim raporu, finansal tabloların kullanıcılarına (yatırımcı, kredi veren, devlet) güven sağlar; sermaye maliyetini düşürür ve bilgi asimetrisini azaltır.",
          },
          {
            text: "Türkiye'de bağımsız denetim standartlarını yayımlayan ve denetçileri yetkilendiren kurum aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Türkiye Muhasebe ve Mali Müşavirler Birliği (TÜRMOB)" },
              { id: "B", text: "Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu (KGK)" },
              { id: "C", text: "Sermaye Piyasası Kurulu (SPK)" },
              { id: "D", text: "Hazine ve Maliye Bakanlığı" },
            ],
            correct: "B",
            explanation:
              "Türkiye'de bağımsız denetim standartlarını yayımlayan, denetçileri ve denetim kuruluşlarını yetkilendiren ve denetimi gözeten kurum Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu'dur (KGK). 660 sayılı Kanun Hükmünde Kararname ile 2011 yılında kurulmuştur. KGK'nın temel görevleri: (1) Türkiye Denetim Standartlarını (TDS) ve Bağımsız Denetim Standartlarını (BDS) IFAC'ın International Standards on Auditing (ISA) standartlarıyla uyumlu olarak yayımlamak, (2) Bağımsız denetçileri ve denetim kuruluşlarını yetkilendirmek (lisanslandırmak), (3) Denetim kalitesini gözetmek (kalite kontrol incelemeleri), (4) Yetkili denetçilerin sicilini tutmak ve disiplin işlemlerini yürütmek, (5) Türkiye Muhasebe Standartlarını (TMS) ve Türkiye Finansal Raporlama Standartlarını (TFRS) yayımlamak. TÜRMOB ise mali müşavir ve YMM odası, SPK sermaye piyasası düzenleyicisi, BDDK bankacılık düzenleyicisidir.",
          },
          {
            text: "Bağımsız denetim sürecinde uygulanan 'risk bazlı denetim yaklaşımı' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm hesaplar eşit derecede ayrıntılı incelenir." },
              { id: "B", text: "Modern denetimin standart yaklaşımıdır; denetçi önce işletmeyi anlar ve risk değerlendirmesi yapar (önemli yanlışlık riski), yüksek risk alanlarına daha fazla denetim çalışması yöneltilir, düşük risk alanlarında daha az test yapılır." },
              { id: "C", text: "Yalnızca büyük şirketler için geçerlidir." },
              { id: "D", text: "Risk değerlendirmesi yapılmaz." },
            ],
            correct: "B",
            explanation:
              "Risk bazlı denetim yaklaşımı (Risk-Based Audit Approach), modern bağımsız denetimin standart yöntemidir ve BDS 315 standardında düzenlenmiştir. Üç ana aşaması: (1) İşletmeyi Anlama — sektör, faaliyet konusu, iş modeli, çevresel faktörler, iç kontrol sistemi anlaşılır, (2) Risk Değerlendirmesi — finansal tablolarda 'önemli yanlışlık riski' (risk of material misstatement) tespit edilir; doğal risk (inherent risk) ve kontrol riski (control risk) ayrı değerlendirilir, (3) Riske Dayalı Denetim Yanıtı — yüksek risk alanlarına (örn. tahminler, ilişkili taraf işlemleri, gelir tanıma) daha kapsamlı denetim prosedürleri uygulanır, düşük risk alanlarında daha sınırlı testler yapılır. Bu yaklaşım denetim kaynaklarının verimli kullanılmasını ve önemli risklerin yakalanma olasılığının yüksek tutulmasını sağlar.",
          },
          {
            text: "Bağımsız denetim sonucunda verilen 'denetim görüşü' türleri aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Yalnızca olumlu ve olumsuz" },
              { id: "B", text: "Olumlu görüş (uygun sunum), Şartlı görüş (sınırlı sorun var), Olumsuz görüş (önemli hata var), Görüş bildirmekten kaçınma (yeterli kanıt elde edilemedi) — dört tür denetim sonucu." },
              { id: "C", text: "Yalnızca tek bir görüş türü vardır." },
              { id: "D", text: "Görüş yerine puanlama yapılır." },
            ],
            correct: "B",
            explanation:
              "Bağımsız denetim sonucunda denetçi dört tür görüş bildirebilir (BDS 700-705 standartları): (1) Olumlu Görüş (Unqualified/Unmodified Opinion) — finansal tablolar her açıdan finansal raporlama standartlarına uygun ve gerçeği yansıtıyor, ideal sonuç; (2) Şartlı Görüş (Qualified Opinion) — bir konuda anlaşmazlık veya kanıt eksikliği var ancak finansal tablolar genel olarak güvenilir; 'şu konu hariç olmak üzere doğrudur' şeklinde belirtilir; (3) Olumsuz Görüş (Adverse Opinion) — finansal tablolar finansal raporlama standartlarına uygun değildir, önemli yanlışlıklar yaygındır, kullanılmamalıdır; (4) Görüş Bildirmekten Kaçınma (Disclaimer of Opinion) — denetçi yeterli kanıt toplayamadığı için görüş bildiremez (örn. şirketin kayıtlarına erişim engellendi, savaş bölgesi). Olumlu görüş dışındaki tüm görüşler 'değiştirilmiş görüş' (modified opinion) olarak adlandırılır ve okuyucunun dikkatini çekmek için ek paragraflarla açıklanır.",
          },
          {
            text: "Bağımsız denetimde 'önemlilik' (materiality) kavramının önemi nedir?",
            options: [
              { id: "A", text: "Tüm hatalar önemli olarak değerlendirilir." },
              { id: "B", text: "Bir hatanın veya yanlışlığın finansal tabloların kullanıcılarının kararlarını etkileyebilecek büyüklükte olmasıdır; denetim önemlilik eşiğine göre planlanır, yürütülür ve değerlendirilir; küçük hatalar genellikle göz ardı edilir, büyük hatalar düzeltilmesi gerekir." },
              { id: "C", text: "Önemlilik kavramı yalnızca büyük işletmeler için kullanılır." },
              { id: "D", text: "Önemlilik denetçi tarafından serbestçe belirlenir." },
            ],
            correct: "B",
            explanation:
              "Önemlilik (materiality) kavramı; BDS 320 standardında düzenlenen, denetimin temel taşı niteliğinde bir kavramdır. Tanım: Bir hata veya yanlışlığın, finansal tabloların kullanıcılarının (yatırımcı, kredi veren) ekonomik kararlarını etkileyebilecek büyüklükte olmasıdır. Önemlilik denetimde üç aşamada kullanılır: (1) Planlama Önemliliği — denetimin başında belirlenen genel eşik (örn. net kârın %5'i veya brüt satışların %1'i); (2) Performans Önemliliği — daha düşük tutulan ve test seçimi/örnekleme için kullanılan eşik; (3) Açıkça Önemsiz Tutar — bunun altındaki hatalar görmezden gelinir (örn. planlama önemliliğinin %5'i). Belirlenmesi denetçinin profesyonel yargısına dayanır ancak rastgele değildir — sektör, işletmenin durumu, kullanıcı türü, hata türü dikkate alınır. Önemli hatalar düzeltilmezse denetim görüşü değiştirilir.",
          },
        ],
      },
    ],
  },
];