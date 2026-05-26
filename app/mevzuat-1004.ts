/* ─────────────────────────────────────────────────────────────────────────────
 * Sermaye Piyasası Araçları 2 (1004)
 *
 * Kaynak: SPL 1004 Çalışma Notu, 31 Aralık 2025 (209 sayfa)
 * Sınavlar: SPL Düzey 2, Düzey 3 ve Türev Araçlar
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1003 (Sermaye Piyasası Araçları 1) modülünde işlenen pay, borçlanma
 * araçları ve klasik yatırım fonu konuları burada tekrar edilmemiş; 1004'e
 * özgü olan ileri seviye/özel sermaye piyasası araçlarına (izahname-ihraç,
 * varlığa dayalı menkul kıymetler, kira sertifikaları, gayrimenkul
 * sertifikaları, varantlar, depo sertifikaları) odaklanılmıştır.
 *
 * Kullanım:
 *   import { mevzuat1004 } from "./mevzuat-1004";
 *   export const modules = [...mevzuatVerisi, ...genisMevzuat, ...mevzuat1003, ...mevzuat1004];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1004: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1004 SERMAYE PİYASASI ARAÇLARI 2
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1004",
    title: "Modül · Sermaye Piyasası Araçları 2 (1004)",
    lessons: [
      // ─────────────────── Ders 1: İzahname ve İhraç ───────────────────
      {
        id: "m1004-l1",
        title: "İzahname, İhraç Belgesi ve Satış Tebliği (II-5.1 / II-5.2)",
        duration: "10 dk",
        summary: {
          title: "İzahname ve Sermaye Piyasası Araçlarının Satışı",
          intro:
            "II-5.1 sayılı İzahname ve İhraç Belgesi Tebliği ile II-5.2 sayılı Sermaye Piyasası Araçlarının Satışı Tebliği, halka arz ve nitelikli yatırımcılara satış süreçlerinin temel düzenlemeleridir. İzahname halka arz öncesi yatırımcının bilgilendirilmesi için hazırlanan kamuyu aydınlatma belgesidir; ihraç belgesi ise halka arz edilmeksizin yapılan satışlarda kullanılır.",
          sections: [
            {
              heading: "İzahname Esasları ve Onay Süreci",
              icon: "shield",
              items: [
                {
                  strong: "İzahname Türleri:",
                  text: "Tek bir belge olarak ya da üç ayrı belge (ihraççı bilgi dokümanı, sermaye piyasası aracı notu ve özet) şeklinde hazırlanabilir; üç belgeli sistem, sıkça ihraç yapan ortaklıklara esneklik sağlar.",
                },
                {
                  strong: "Geçerlilik Süresi:",
                  text: "İzahnamenin Kurulca onayı tarihinden itibaren 12 ay; ihraççı bilgi dokümanının da 12 ay geçerlidir.",
                },
                {
                  strong: "Tescil ve İlan:",
                  text: "Onaylanan izahname, onayı izleyen 15 gün içinde ihraççı tarafından ticaret siciline tescil ve KAP'ta ilan edilir.",
                },
                {
                  strong: "İnceleme Süresi:",
                  text: "Kurul; pay halka arzlarında 20 iş günü, diğer hallerde 10 iş günü içinde başvuruyu sonuçlandırır; eksiklik tebliğinde süre durur.",
                },
                {
                  strong: "Sorumluluk:",
                  text: "İzahnameden sorumlu kişiler ihraççı, halka arz eden ve aracılık eden yetkili kuruluştur; bağımsız denetim, derecelendirme ve değerleme kuruluşları kendi alanlarındaki bilgilerden sorumludur.",
                },
              ],
            },
            {
              heading: "Satış Şekilleri, Yöntemleri ve Tahsisat",
              icon: "trend",
              items: [
                {
                  strong: "Halka Arz vs. Halka Arz Edilmeksizin Satış:",
                  text: "Halka arz; SPK md. 3 kapsamında genel çağrı ve davet yoluyla yapılan satıştır. Nitelikli yatırımcılara satış, çalışanlara yönelik satış ve mevcut ortaklara satış halka arz sayılmaz.",
                },
                {
                  strong: "Üç Satış Yöntemi:",
                  text: "Talep toplama yoluyla satış (en yaygın), talep toplanmaksızın satış (sınırlı kullanım) ve borsada satış yöntemi (paylar için BIAŞ üzerinden).",
                },
                {
                  strong: "Tahsisat Esasları:",
                  text: "İlk halka arzlarda yurtiçi bireysel yatırımcılara asgari %10, yurtiçi kurumsal yatırımcılara asgari %20 tahsisat zorunlu; tahsisat oranları izahnamede önceden belirtilir.",
                },
                {
                  strong: "Talep Toplama Süreleri:",
                  text: "Satışa başlama süresi izahnamenin onayını izleyen 6 iş günü; satış süresi en az 2, en çok 30 iş günüdür.",
                },
                {
                  strong: "Yetkili Kuruluş Zorunluluğu:",
                  text: "Halka arzlarda satışın aracı kurumlar, yatırım ve kalkınma bankaları veya mevduat bankaları aracılığıyla yapılması zorunludur; ihraççı doğrudan satış yapamaz.",
                },
              ],
            },
          ],
          tip: "İzahname geçerlilik süresi 12 ay, satış süresi en az 2 / en fazla 30 iş günü, yurtiçi bireysel yatırımcılara tahsisat asgari %10 — bu sayılar her sınavda mutlaka karşımıza çıkar. Tek belgeli vs. üç belgeli izahname ayrımı da klasik bir tuzaktır.",
          kavramlar: [
            { terim: "İzahname", tanim: "Halka arzlarda yatırımcıya sunulan, ihraçcı ve ihraç edilen araca ilişkin tüm bilgileri içeren Kurul onaylı kapsamlı belge; geçerlilik süresi 12 aydır." },
            { terim: "İhraç Belgesi", tanim: "Nitelikli yatırımcılara yapılan satışlarda izahname yerine kullanılan daha basit bilgi dokümanı; halka arz için düzenlenmez." },
            { terim: "Satış Tebliği", tanim: "Halka arz sürecinde satışın usul ve esaslarını düzenleyen; satış süresinin en az 2 iş günü, en fazla 30 iş günü olduğunu belirleyen tebliğ." },
            { terim: "Tahsisat Kuralı", tanim: "Yurtiçi bireysel yatırımcılara halka arzda asgari %10 tahsisat yapılması zorunluluğu; talep yetersizse bu oran düşebilir." },
            { terim: "Tek Belgeli İzahname", tanim: "İhraçcı bilgileri ile ihraç bilgilerinin tek bir belgede bir araya getirildiği izahname formu." },
            { terim: "Üç Belgeli İzahname", tanim: "Kayıt belgesi, menkul kıymet notu ve özet olmak üzere üç ayrı belgeden oluşan, büyük ve halka açık şirketlerin kullandığı izahname sistemi." },
            { terim: "Halka Arz", tanim: "Sermaye piyasası araçlarının ilk kez veya çok sayıda yatırımcıya Kurul onaylı izahname ile duyurularak satışa sunulması işlemi." },
          ],
          dikkatlar: [
            "İzahname geçerlilik süresi 12 aydır; bu süre içinde ek pay ihracı veya yeni halka arz için aynı izahname güncellenebilir.",
            "Satış süresi en az 2 iş günü, en fazla 30 iş günü; '30 takvim günü' veya '2 hafta' seçenekleri yanıltıcıdır.",
            "Yurtiçi bireysel yatırımcılara asgari %10 tahsisat yapılmalıdır; talep bu oranı karşılamıyorsa ayrılan miktar o kadarda kalır.",
            "Tek belgeli izahnameyle üç belgeli izahname arasındaki fark yapı değil amaçtır: büyük, halka açık ve sürekli ihraç yapan şirketler üç belgeli sistemi tercih eder.",
            "İhraç belgesi halka arz içermez; yalnızca nitelikli yatırımcılara yönelik özel satışlarda kullanılır — izahname ile ihraç belgesi arasındaki bu fark sınavın temel sorusudur.",
          ],
        },
        questions: [
          {
            text: "II-5.1 sayılı Tebliğ uyarınca onaylanmış izahnamenin geçerlilik süresi nedir?",
            options: [
              { id: "A", text: "6 ay" },
              { id: "B", text: "12 ay" },
              { id: "C", text: "18 ay" },
              { id: "D", text: "24 ay" },
            ],
            correct: "B",
            explanation:
              "İzahname ve İhraç Belgesi Tebliği uyarınca onaylanmış izahnamenin geçerlilik süresi onayını izleyen 12 aydır. Aynı süre ihraççı bilgi dokümanı için de geçerlidir; bu süre içinde sermaye piyasası aracı notu ve özet ile birlikte yeni ihraçlar yapılabilir.",
          },
          {
            text: "İlk halka arzlarda yurtiçi bireysel yatırımcılara yapılması zorunlu asgari tahsisat oranı nedir?",
            options: [
              { id: "A", text: "%5" },
              { id: "B", text: "%10" },
              { id: "C", text: "%20" },
              { id: "D", text: "%30" },
            ],
            correct: "B",
            explanation:
              "II-5.2 sayılı Tebliğ ve i-SPK.128.23 sayılı İlke Kararı uyarınca ilk halka arzlarda yurtiçi bireysel yatırımcılara asgari %10, yurtiçi kurumsal yatırımcılara ise asgari %20 oranında tahsisat yapılması zorunludur.",
          },
          {
            text: "II-5.2 sayılı Tebliğ kapsamında halka arz yoluyla satılan sermaye piyasası araçlarının satış süresi en az ve en çok ne kadar olabilir?",
            options: [
              { id: "A", text: "En az 1, en çok 15 iş günü" },
              { id: "B", text: "En az 2, en çok 30 iş günü" },
              { id: "C", text: "En az 5, en çok 45 iş günü" },
              { id: "D", text: "En az 10, en çok 60 iş günü" },
            ],
            correct: "B",
            explanation:
              "Sermaye Piyasası Araçlarının Satışı Tebliği uyarınca halka arzda satış süresi en az 2 iş günü, en çok 30 iş günü olarak belirlenmiştir. Satışa başlama süresi ise izahnamenin onayını izleyen 6 iş günü içinde başlatılmalıdır.",
          },
          {
            text: "İzahnameden doğan zararlardan sorumluluk konusunda aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca ihraççı sorumludur." },
              { id: "B", text: "İhraççı, halka arz eden ve aracılık eden yetkili kuruluş izahnamenin tamamından sorumludur; bağımsız denetim, derecelendirme ve değerleme kuruluşları kendi alanlarındaki bilgilerden sorumludur." },
              { id: "C", text: "Sermaye Piyasası Kurulu izahnamenin onayı sonrasında doğacak zararlardan sorumludur." },
              { id: "D", text: "Yatırımcılar zararı ancak ceza davası açarak talep edebilir." },
            ],
            correct: "B",
            explanation:
              "İzahname ve İhraç Belgesi Tebliği'nde sorumluluk açıkça düzenlenmiştir: izahnameden ihraççı, halka arz eden ve aracılık eden yetkili kuruluş kusursuz sorumludur. Bağımsız denetim, derecelendirme ve değerleme kuruluşları ise yalnızca kendi alanlarındaki bilgi ve raporlardan sorumludur.",
          },
          {
            text: "Aşağıdakilerden hangisi 'halka arz' kapsamında değerlendirilMEZ?",
            options: [
              { id: "A", text: "Genel çağrı ve davet yoluyla yapılan pay satışı" },
              { id: "B", text: "Borsada birincil piyasa işlemleriyle pay satışı" },
              { id: "C", text: "Yalnızca nitelikli yatırımcılara yapılan satış" },
              { id: "D", text: "Tahsisli satış yöntemiyle dağıtım" },
            ],
            correct: "C",
            explanation:
              "II-5.2 sayılı Tebliğ uyarınca yalnızca nitelikli yatırımcılara yapılan satış 'halka arz' tanımının dışında tutulmuştur. Çalışanlara yönelik satış ve mevcut ortaklara rüçhan hakkı kullandırma da halka arz sayılmaz. Genel çağrı/davet yoluyla satış ise halka arzın temel tanımıdır.",
          },
        ],
      },
      // ─────────────── Ders 2: VDMK / TMK / İDMK ───────────────
      {
        id: "m1004-l2",
        title: "Varlığa/İpoteğe Dayalı ve Teminatlı Menkul Kıymetler (III-58.1 / III-59.1)",
        duration: "10 dk",
        summary: {
          title: "Varlık Finansmanı Menkul Kıymetleri",
          intro:
            "III-58.1 sayılı Varlığa veya İpoteğe Dayalı Menkul Kıymetler (VDMK/İDMK) Tebliği ile III-59.1 sayılı Teminatlı Menkul Kıymetler (TMK) Tebliği, menkul kıymetleştirme yoluyla yapılan ihraçların temel düzenlemeleridir. VDMK, alacakların belirli bir varlık fonu (VFF) bünyesinde bir araya getirilerek menkul kıymet ihraç edilmesini sağlar.",
          sections: [
            {
              heading: "VDMK ve İDMK Esasları",
              icon: "shield",
              items: [
                {
                  strong: "VFF ve İFF:",
                  text: "Varlık Finansmanı Fonu (VFF) genel alacaklar için, İpotek Finansmanı Fonu (İFF) ise konut/ticari kredilere dayalı ipoteklerden oluşan portföy için kurulur; her ikisi de tüzel kişiliği bulunmayan malvarlığıdır.",
                },
                {
                  strong: "Fon Kurucuları:",
                  text: "Bankalar, finansman şirketleri, finansal kiralama şirketleri, faktoring şirketleri ve geniş yetkili aracı kurumlar VFF/İFF kurabilir; kurucunun ödenmiş sermaye yeterliliği aranır.",
                },
                {
                  strong: "Risk Tutma Yükümlülüğü:",
                  text: "Kurucu, ihraç edilen VDMK/İDMK'nın asgari %5'i kadar pozisyonu vade boyunca elinde tutmakla yükümlüdür; bu kural 'risk-uyumlu' menkul kıymetleştirmeyi sağlar.",
                },
                {
                  strong: "Fon Malvarlığı Ayrılığı:",
                  text: "Fon malvarlığı kurucu ve hizmet sağlayıcının malvarlığından ayrıdır; haczedilemez, rehnedilemez, iflas masasına dahil edilemez.",
                },
                {
                  strong: "Fonun Sona Ermesi:",
                  text: "İhraç edilen tüm VDMK/İDMK'lar itfa edildiğinde fon kendiliğinden sona erer; geri ödeme güçlüğü halinde Kurul, fonun yönetimini başka bir kuruculuğa devredebilir.",
                },
              ],
            },
            {
              heading: "Teminatlı Menkul Kıymetler (TMK)",
              icon: "trend",
              items: [
                {
                  strong: "Tanım:",
                  text: "TMK; ihraççının kendi bilançosunda kalan varlıkların teminat olarak gösterildiği borçlanma araçlarıdır (covered bonds); VDMK'dan farklı olarak varlıklar bilanço dışına çıkarılmaz.",
                },
                {
                  strong: "İhraç Edebilecek Kurumlar:",
                  text: "Bankalar, ipotek finansmanı kuruluşları ve finansman şirketleri TMK ihraç edebilir; sermaye yeterlilik oranı asgari %12 olmalıdır.",
                },
                {
                  strong: "Tedavül Limiti:",
                  text: "Bankaların ihraç edebileceği TMK tutarı toplam yükümlülüklerinin azami %10'unu geçemez.",
                },
                {
                  strong: "Teminat Varlık Niteliği:",
                  text: "Konut/ticari ipotek kredileri, ticari alacaklar, kamu menkul kıymetleri ve KOBİ kredileri teminat varlık olarak kabul edilir; her teminat varlık için aşırı teminat (overcollateralization) marjı tutulur.",
                },
                {
                  strong: "Teminat Sorumlusu:",
                  text: "İhraççı, teminat havuzunu yöneten ve değerini izleyen bağımsız 'Teminat Sorumlusu' atamak zorundadır; bu kişi yatırımcı çıkarlarını korur.",
                },
              ],
            },
          ],
          tip: "VDMK ile TMK arasındaki fark sınavın klasiği: VDMK'da varlıklar fona devredilir (bilanço dışı), TMK'da bilançoda kalır (covered bond). Risk tutma %5 kuralı 2008 krizi sonrası geldi — kurucunun 'skin in the game'ini garantiler. Bankalarda TMK tedavül limiti %10.",
          kavramlar: [
            { terim: "VDMK (Varlığa Dayalı MK)", tanim: "Varlıkların özel amaçlı bir fona devredilmesiyle bilanço dışı olarak ihraç edilen menkul kıymet; riski ihraçcıdan bağımsızdır." },
            { terim: "TMK (Teminatlı MK)", tanim: "İhraçcının bilançosunda kalan varlıkların teminat olarak gösterilmesiyle ihraç edilen covered bond; ihraçcı temerrüdünde teminata başvurulur." },
            { terim: "Risk Tutma Kuralı (%5)", tanim: "VDMK ihraçcılarının ihraç ettiği menkul kıymet risk havuzunun asgari %5'ini elinde tutması zorunluluğu; kurucunun riske ortak olmasını sağlar." },
            { terim: "İpotek Teminatlı MK (İTMK)", tanim: "Teminat havuzunun yalnızca ipotek kredilerinden oluştuğu özel teminatlı menkul kıymet türü." },
            { terim: "Varlık Finansmanı Fonu", tanim: "VDMK ihracında varlıkların devredildiği, tüzel kişiliği bulunmayan özel amaçlı yapı; SPK düzenlemesine tabidir." },
            { terim: "Bilanço Dışı Finansman", tanim: "Varlıkların fona devri yoluyla ihraçcının bilançosundan çıkarılması; ihraçcının borçlanma kapasitesini genişletir." },
            { terim: "TMK Tedavül Limiti", tanim: "Bankaların ihraç edebileceği toplam TMK tutarının özkaynaklarının %10'uyla sınırlandırılması." },
          ],
          dikkatlar: [
            "VDMK bilanço DIŞI (varlıklar fona devredilir); TMK bilanço İÇİ (varlıklar bilançoda kalır, teminat gösterilir) — bu temel ayrım her sınavda farklı formatlarda sorulur.",
            "Risk tutma kuralı gereği VDMK ihraçcıları risk havuzunun en az %5'ini elinde tutmak zorundadır; bu oran 2008 küresel kriziyle gündeme gelmiştir.",
            "Bankalarda TMK tedavül limiti özkaynaklarının %10'udur; bu sınırı aşan ihraç yapılamaz.",
            "İTMK teminat havuzu yalnızca ipotek kredilerinden oluşur; ticari kredi veya tüketici kredisi bu havaza dahil edilemez.",
            "VDMK'da ihraçcı temerrüdü doğrudan yatırımcıyı etkilemez; varlıklar ayrı fonda olduğundan ihraçcı riskinden bağımsızdır — TMK'da ihraçcı temerrüdü risk yaratır.",
          ],
        },
        questions: [
          {
            text: "III-58.1 sayılı VDMK/İDMK Tebliği uyarınca fon kurucusunun ihraç edilen menkul kıymetlerin asgari ne kadarını kendisi tutmakla yükümlüdür?",
            options: [
              { id: "A", text: "%2" },
              { id: "B", text: "%5" },
              { id: "C", text: "%10" },
              { id: "D", text: "%20" },
            ],
            correct: "B",
            explanation:
              "Tebliğ'in 'Risk Tutma Yükümlülüğü' başlıklı bölümünde, kurucunun ihraç edilen VDMK/İDMK'nın asgari %5'ini vade boyunca elinde tutması gerektiği düzenlenmiştir. Bu kural, kurucunun ihraçla aynı risk havuzunda kalmasını ('skin in the game') sağlar.",
          },
          {
            text: "VDMK ile TMK arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "VDMK yalnızca dövizle ihraç edilirken TMK Türk lirasıyla ihraç edilir." },
              { id: "B", text: "VDMK'da varlıklar fona devredilerek bilanço dışına çıkarılır; TMK'da varlıklar ihraççının bilançosunda kalmaya devam eder." },
              { id: "C", text: "VDMK yalnızca nitelikli yatırımcılara, TMK ise halka arz edilebilir." },
              { id: "D", text: "VDMK'da kupon ödenmez; TMK'da kupon ödenir." },
            ],
            correct: "B",
            explanation:
              "VDMK (varlığa/ipoteğe dayalı menkul kıymet) ile TMK (teminatlı menkul kıymet) arasındaki temel ayrım, varlıkların ihraççı bilançosundaki konumudur. VDMK'da alacaklar fona devredilerek bilanço dışına çıkarılır; TMK ise covered bond niteliğindedir, varlıklar bilançoda kalır ve teminat olarak gösterilir.",
          },
          {
            text: "TMK ihraç edebilecek bankaların tedavül limiti ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Toplam yükümlülüklerinin azami %5'ini" },
              { id: "B", text: "Toplam yükümlülüklerinin azami %10'unu" },
              { id: "C", text: "Toplam yükümlülüklerinin azami %25'ini" },
              { id: "D", text: "Toplam yükümlülüklerinin azami %50'sini" },
            ],
            correct: "B",
            explanation:
              "III-59.1 sayılı TMK Tebliği uyarınca bankaların ihraç edebilecekleri TMK tutarı toplam yükümlülüklerinin azami %10'unu geçemez. Bu sınır, bankaların TMK ihracı yoluyla aşırı kaldıraçlanmasını önlemeyi amaçlar.",
          },
          {
            text: "Aşağıdakilerden hangisi VFF (Varlık Finansmanı Fonu) kurabilecek kuruluşlar arasında yer ALMAZ?",
            options: [
              { id: "A", text: "Bankalar" },
              { id: "B", text: "Finansman şirketleri" },
              { id: "C", text: "Finansal kiralama şirketleri" },
              { id: "D", text: "Sigorta şirketleri" },
            ],
            correct: "D",
            explanation:
              "Tebliğ uyarınca VFF kurabilecek kuruluşlar; bankalar, finansman şirketleri, finansal kiralama şirketleri, faktoring şirketleri ve geniş yetkili aracı kurumlardır. Sigorta şirketleri kendi mevzuatına tabi olup VFF kuramazlar; ancak VDMK satın alabilirler.",
          },
          {
            text: "Teminatlı Menkul Kıymet ihracında 'Teminat Sorumlusu' kimdir ve görevi nedir?",
            options: [
              { id: "A", text: "İhraççının kendi yönetim kurulu üyesidir; teminat havuzunu yönetir." },
              { id: "B", text: "Sermaye Piyasası Kurulu tarafından atanan bir kamu görevlisidir." },
              { id: "C", text: "İhraççı tarafından atanan bağımsız bir kişi/kuruluştur; teminat havuzunu izler ve yatırımcı çıkarlarını korur." },
              { id: "D", text: "Borsa İstanbul tarafından atanan denetim kuruluşudur." },
            ],
            correct: "C",
            explanation:
              "TMK Tebliği'nde Teminat Sorumlusu, ihraççı tarafından atanan ancak ihraççıdan bağımsız nitelikte olması gereken kişi/kuruluştur. Görevi; teminat havuzunun değerini izlemek, aşırı teminat oranını korumak ve yatırımcıların menfaatini gözetmektir.",
          },
        ],
      },
      // ─────────────────── Ders 3: Kira Sertifikaları ───────────────────
      {
        id: "m1004-l3",
        title: "Faizsiz Finans Araçları ve Kira Sertifikaları (III-61.1)",
        duration: "10 dk",
        summary: {
          title: "Kira Sertifikaları (Sukuk)",
          intro:
            "III-61.1 sayılı Kira Sertifikaları Tebliği, faizsiz finans esaslarına göre yapılandırılan, dünyada 'sukuk' olarak bilinen sermaye piyasası araçlarını düzenler. Kira sertifikaları, Varlık Kiralama Şirketi (VKŞ) tarafından ihraç edilir ve sahibine dayanak varlık veya işlemden elde edilen gelirden pay alma hakkı verir; faiz yerine kâr payı veya kira geliri esasına dayanır.",
          sections: [
            {
              heading: "Kira Sertifikası Türleri",
              icon: "shield",
              items: [
                {
                  strong: "Sahipliğe Dayalı (İcara):",
                  text: "VKŞ, fon kullanıcısının varlığını satın alır ve aynı tarafa kiralar; yatırımcılara periyodik kira ödemesi yapılır. En yaygın kira sertifikası türüdür.",
                },
                {
                  strong: "Yönetim Sözleşmesine Dayalı (Vekalet):",
                  text: "Fon kullanıcısı, VKŞ'nin sahip olduğu varlıkları/portföyü vekil sıfatıyla yönetir; yönetim sonucu elde edilen gelir yatırımcılara dağıtılır.",
                },
                {
                  strong: "Alım-Satıma Dayalı (Murabaha):",
                  text: "VKŞ bir emtiayı tedarikçiden satın alıp önceden anlaşılan kâr payıyla fon kullanıcısına vadeli olarak satar; yatırımcılara satış bedelinden ödeme yapılır.",
                },
                {
                  strong: "Ortaklığa Dayalı (Müşareke/Mudaraba):",
                  text: "Müşareke kâr-zarar ortaklığı (her iki tarafın sermaye katkısı), Mudaraba emek-sermaye ortaklığı (sermayedar fonu, girişimci emeği koyar) esasına dayanır.",
                },
                {
                  strong: "Eser Sözleşmesine Dayalı (İstisna):",
                  text: "İleride inşa edilecek/üretilecek bir eserin/varlığın finansmanı için kullanılır; tarım, altyapı ve büyük ölçekli inşaat projelerinde tercih edilir.",
                },
              ],
            },
            {
              heading: "VKŞ ve İhraç Esasları",
              icon: "trend",
              items: [
                {
                  strong: "Varlık Kiralama Şirketi (VKŞ):",
                  text: "Münhasıran kira sertifikası ihracı için kurulan, anonim ortaklık şeklindeki sermaye piyasası kurumudur; başka faaliyette bulunamaz.",
                },
                {
                  strong: "VKŞ Kurucuları:",
                  text: "Bankalar, geniş yetkili aracı kurumlar, ipotek finansmanı kuruluşları ve sermaye piyasası araçlarını ihraç etmiş anonim ortaklıklar VKŞ kurabilir.",
                },
                {
                  strong: "İhraç Limiti:",
                  text: "Kira sertifikası ihraç limiti, fon kullanıcısının özsermayesinin 5 katı (halka arzda) veya 10 katı (nitelikli yatırımcıya) ile sınırlıdır.",
                },
                {
                  strong: "Saklama ve Devir Yasağı:",
                  text: "VKŞ, ihraç edilen kira sertifikalarına dayanak teşkil eden varlıkları başka amaçlarla kullanamaz, devredemez ve teminat olarak gösteremez.",
                },
                {
                  strong: "Sukuk Pazarı:",
                  text: "BIST'te kira sertifikaları için ayrı bir piyasa bulunur; Hazine de Türkiye Cumhuriyeti adına kira sertifikası ihraç eder (Hazine Kira Sertifikaları).",
                },
              ],
            },
          ],
          tip: "Beş kira sertifikası türü dört faizsiz finans işleminden türemiştir: İcara (kiralama), Murabaha (peşin al-vadeli sat), Müşareke/Mudaraba (ortaklık), İstisna (sipariş). Sınavda 'hangisi sahipliğe dayalı, hangisi alım-satıma dayalı?' kalıp soru olarak gelir.",
          kavramlar: [
            { terim: "Kira Sertifikası (Sukuk)", tanim: "Varlığa dayalı, faiz içermeyen; sahibine kiralama, ortaklık veya alım-satım işlemlerinden periyodik gelir ve vade sonu anapara sağlayan İslami finansman aracı." },
            { terim: "İcara (Kiralama) Sukuk", tanim: "Varlığın ihraçcıya kiralanması modeline dayanan, sahibine kira geliri ödeyen; en yaygın sukuk türü." },
            { terim: "Murabaha Sukuk", tanim: "Peşin alım-vadeli satım işlemine dayanan sukuk; sahibine vadeli satış kâr payı öder — alım-satıma dayalı türdür." },
            { terim: "Müşareke/Mudaraba Sukuk", tanim: "Ortaklık (müşareke) veya emek-sermaye ortaklığı (mudaraba) sözleşmesine dayanan sukuk; sahibine kâr payı öder." },
            { terim: "İstisna Sukuk", tanim: "Henüz inşa edilmemiş bir varlığı sipariş eden ve üretim/inşaat sürecini finanse eden sukuk türü; proje finansmanında kullanılır." },
            { terim: "Kaynak Kuruluş", tanim: "Kira sertifikası ihracında varlıklarını devreden veya işleme konu eden, SPK'ya kayıtlı ihraçcı kuruluş." },
            { terim: "Faizsiz Finans İlkesi", tanim: "İslami finans ilkeleri uyarınca faiz (riba) içermeyen, gerçek bir varlık veya işleme dayanan finansman yapısı." },
          ],
          dikkatlar: [
            "İcara (kiralama) sukuk sahipliğe dayalıdır; Murabaha sukuk ise alım-satıma dayalıdır — 'hangisi kira geliri, hangisi kâr payı öder?' sorusu sınavın klasiğidir.",
            "Kira sertifikasında faiz yasağı vardır; 'faiz geliri' yerine 'kira geliri' veya 'kâr payı' kavramları kullanılır.",
            "Müşareke ve Mudaraba benzerdir ancak farklıdır: müşareke her iki tarafın sermaye koyduğu ortaklık; mudaraba ise bir tarafın sermaye diğerinin emek koyduğu yapıdır.",
            "İstisna sukuk tamamlanmamış varlıkları finanse eder; bu özellik inşaat ve altyapı projelerini İslami finansmanla mümkün kılar.",
            "Kira sertifikası ihraç eden 'kaynak kuruluş'tan farklı olarak SPK'ya kayıtlı özel amaçlı ihraç yapısı oluşturulabilir; hukuki yapı ihraca göre değişir.",
          ],
        },
        questions: [
          {
            text: "Bir Varlık Kiralama Şirketi (VKŞ) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "VKŞ, mevduat kabul edebilir ve kredi verebilir." },
              { id: "B", text: "VKŞ, münhasıran kira sertifikası ihracı için kurulan anonim ortaklıktır; başka faaliyette bulunamaz." },
              { id: "C", text: "VKŞ tüzel kişiliği bulunmayan bir malvarlığıdır." },
              { id: "D", text: "VKŞ yalnızca yabancı yatırımcılara satış yapabilir." },
            ],
            correct: "B",
            explanation:
              "III-61.1 sayılı Tebliğ uyarınca Varlık Kiralama Şirketi (VKŞ), münhasıran kira sertifikası ihracı amacıyla kurulan anonim ortaklık şeklindeki sermaye piyasası kurumudur. Esas sözleşmesinde belirtilen kira sertifikası ihracı dışında herhangi bir faaliyette bulunamaz.",
          },
          {
            text: "Bir VKŞ'nin fon kullanıcısının varlığını satın alıp aynı tarafa kiralaması esasına dayanan, yatırımcılara periyodik kira ödemesi yapılan kira sertifikası türü aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Murabaha (Alım-Satıma Dayalı)" },
              { id: "B", text: "İcara (Sahipliğe Dayalı)" },
              { id: "C", text: "Müşareke (Ortaklığa Dayalı)" },
              { id: "D", text: "İstisna (Eser Sözleşmesine Dayalı)" },
            ],
            correct: "B",
            explanation:
              "İcara (kiralama) bazlı kira sertifikası, faizsiz finans araçlarının en yaygın türüdür. VKŞ, fon kullanıcısının varlığını anlaşılan fiyattan satın alır, ardından aynı tarafa kiralar. Yatırımcılara periyodik kira ödemesi yapılır, vade sonunda varlık fon kullanıcısına satılarak anapara iadesi yapılır.",
          },
          {
            text: "İslami finansta 'Mudaraba' kavramı aşağıdakilerden hangisini ifade eder?",
            options: [
              { id: "A", text: "İki tarafın da sermaye koyduğu kâr-zarar ortaklığı" },
              { id: "B", text: "Bir tarafın sermaye, diğer tarafın emek/bilgi/tecrübe ortaya koyduğu emek-sermaye ortaklığı" },
              { id: "C", text: "Bir malın peşin alınıp vadeli satılması" },
              { id: "D", text: "İleride inşa edilecek bir eserin satış sözleşmesi" },
            ],
            correct: "B",
            explanation:
              "Mudaraba (emek-sermaye ortaklığı); bir tarafın sermayedar olarak fonu, diğer tarafın girişimci olarak emeğini, bilgi ve tecrübesini koyduğu ortaklık türüdür. Kâr önceden belirlenen oranda paylaşılırken, girişimcinin ihmali olmadığı sürece zarar yalnızca sermayedar tarafından üstlenilir. Müşareke ise her iki tarafın da sermaye koyduğu ortaklıktır.",
          },
          {
            text: "Murabaha esasına dayalı kira sertifikası işleminde, VKŞ tedarikçiden aldığı emtiayı kaynak kuruluşa hangi şartla satar?",
            options: [
              { id: "A", text: "Maliyet fiyatına, kâr eklenmeksizin" },
              { id: "B", text: "Önceden anlaşılan kâr payı eklenerek vadeli olarak" },
              { id: "C", text: "Borsa fiyatına anlık olarak" },
              { id: "D", text: "Yalnızca yabancı para cinsinden" },
            ],
            correct: "B",
            explanation:
              "Murabaha (alım-satım) esasına dayalı kira sertifikalarında VKŞ, tedarikçiden satın aldığı emtiayı, önceden anlaşılan kâr payı eklenerek vadeli olarak kaynak kuruluşa satar. Kaynak kuruluş emtiayı emtia borsasında peşin satarak finansman sağlar; vadenin sonunda VKŞ'ye maliyet+kâr payı ödemesi yapar.",
          },
          {
            text: "Selem işlemi için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Bedel vadeli, ürün peşindir." },
              { id: "B", text: "Bedel peşin, ürün vadelidir; özellikle tarım sektöründe kullanılır." },
              { id: "C", text: "Hem bedel hem ürün vadelidir." },
              { id: "D", text: "Selem işlemine altın, döviz ve para benzeri kıymetli evraklar konu olabilir." },
            ],
            correct: "B",
            explanation:
              "Selem; bedelin peşin, ürünün vadeli olduğu satış sözleşmesidir. Özellikle tarım sektöründe çiftçinin hasat öncesi finansman ihtiyacını karşılamak için kullanılır. Selem'e konu mallar misli (standart) mallar olmalıdır; döviz, altın, gümüş ve para benzeri kıymetli evrak (çek, poliçe vb.) seleme konu olamaz.",
          },
        ],
      },
      // ──────────────── Ders 4: Gayrimenkul Sertifikaları ────────────────
      {
        id: "m1004-l4",
        title: "Gayrimenkul Sertifikaları (VII-128.2)",
        duration: "8 dk",
        summary: {
          title: "Gayrimenkul Sertifikaları",
          intro:
            "VII-128.2 sayılı Gayrimenkul Sertifikaları Tebliği, gayrimenkul projelerinin finansmanı için ihraç edilen, bir gayrimenkul projesinin belirli bağımsız bölümlerini veya bağımsız bölümlerin belirli bir alan birimini temsil eden nominal değeri eşit menkul kıymetleri düzenler. Gayrimenkul sertifikaları yatırımcılara hem gayrimenkul yatırımı hem de likit menkul kıymet özelliği sağlar.",
          sections: [
            {
              heading: "Sertifika Türleri ve İhraç Esasları",
              icon: "shield",
              items: [
                {
                  strong: "İhraç Edebilecek Kişiler:",
                  text: "Yapı ruhsatı almış gerçek ve tüzel kişi gayrimenkul yatırımcıları; ihraçcı, ihraç tarihinden önceki son üç yıl içinde benzer büyüklükte en az bir projeyi başarıyla tamamlamış olmalıdır.",
                },
                {
                  strong: "Asli ve Tali Edim:",
                  text: "Asli edim sertifika sahibinin sahip olduğu hakkın aynen yerine getirilmesi (bağımsız bölüm tesliminin sağlanması), tali edim ise satış halinde nakit ödeme yapılması esasına dayanır.",
                },
                {
                  strong: "Teminat Zorunluluğu:",
                  text: "İhraçcı, ihraç tutarına eşit teminat göstermek zorundadır; teminat banka teminat mektubu, ipotek veya devlet iç borçlanma senedi şeklinde olabilir.",
                },
                {
                  strong: "İzahname ve İlan:",
                  text: "Halka arz edilecek gayrimenkul sertifikaları için izahname düzenlenir ve onaylanır; proje detayları, yapı kullanma izin tarihi ve tahmini teslim süresi izahnamede yer alır.",
                },
                {
                  strong: "MKK ve Borsa:",
                  text: "Sertifikalar kaydi olarak ihraç edilir, MKK'ya bildirilir ve BIST'te işlem görür; ikincil piyasada likidite imkanı sağlanır.",
                },
              ],
            },
            {
              heading: "Yatırımcı Hakları ve Süreç",
              icon: "trend",
              items: [
                {
                  strong: "Asli Edim Hakkı:",
                  text: "Sertifika sahibi, yeterli sayıda sertifikayı bir araya getirerek (örn. 100 m²'lik bir daireye eşit miktar) bağımsız bölüm tesliminden faydalanabilir.",
                },
                {
                  strong: "Tali Edim Süreci:",
                  text: "Asli edim talep etmeyen sahiplerin sertifikaları açık artırma yoluyla satılır; satıştan elde edilen tutar payları oranında dağıtılır.",
                },
                {
                  strong: "Cezai Şart ve Faiz:",
                  text: "İhraçcının taahhüdüne aykırı davranması veya yapı kullanma izni alamaması durumunda yatırımcılara cezai şart ve gecikme faizi ödenir.",
                },
                {
                  strong: "Tasfiye Yetkisi:",
                  text: "İhraçcının yükümlülüğünü yerine getirememesi halinde Kurul, gayrimenkullerin satışı ve fonların yatırımcılara dağıtımı dahil olmak üzere tasfiye sürecini başlatabilir.",
                },
                {
                  strong: "Kullanım Alanları:",
                  text: "Konut, ofis, alışveriş merkezi ve karma kullanımlı projeler gayrimenkul sertifikası kapsamında ihraç edilebilir.",
                },
              ],
            },
          ],
          tip: "Asli edim - tali edim ayrımı sınavın klasiği: asli = bağımsız bölüm teslimi, tali = nakit ödeme. İhraçcı son 3 yılda en az bir benzer proje tamamlamış olmalı; teminat zorunluluğu tutar bazlı, %100 oranında. GYO ile karıştırılmamalı: gayrimenkul sertifikası tek bir projeye, GYO portföye yatırım yapar.",
          kavramlar: [
            { terim: "Gayrimenkul Sertifikası", tanim: "Belirli bir gayrimenkul projesinin bağımsız bölümlerine ortak olunmasını sağlayan, proje tamamlandığında daire teslimi veya nakit ödeme hakkı veren menkul kıymet." },
            { terim: "Asli Edim", tanim: "Gayrimenkul sertifikasında vade sonunda yerine getirilecek temel yükümlülük: proje tamamlanırsa bağımsız bölüm teslimi." },
            { terim: "Tali Edim", tanim: "Asli edimin yerine getirilememesi durumunda devreye giren alternatif yükümlülük: sertifika bedelinin nakit olarak ödenmesi." },
            { terim: "Proje Tamamlama Teminatı", tanim: "İhraçcının projeyi tamamlayacağını garanti eden ve ihraç tutarının %100'ü oranında zorunlu tutulan teminat." },
            { terim: "İhraçcı Deneyim Şartı", tanim: "Gayrimenkul sertifikası ihraç edecek kuruluşun son 3 yılda en az bir benzer projeyi tamamlamış olması zorunluluğu." },
            { terim: "Bağımsız Bölüm", tanim: "Gayrimenkul projesinde sertifika sahiplerine tahsis edilecek daire, dükkân veya ofis gibi ayrı mülkiyet konusu olan kısım." },
            { terim: "GYS-GYO Farkı", tanim: "Gayrimenkul sertifikası tek bir projeye yatırım sağlar; GYO ise çeşitlendirilmiş gayrimenkul portföyü işletir." },
          ],
          dikkatlar: [
            "Asli edim = bağımsız bölüm teslimi; tali edim = nakit ödeme — vade sonunda proje tamamlandıysa asli edim, tamamlanamadıysa tali edim devreye girer.",
            "İhraçcının son 3 yılda en az bir benzer projeyi tamamlamış olması zorunludur; deneyim şartı sınavda 'son 2 yıl' veya '5 yıl' seçenekleriyle yanıltıcı biçimde sunulabilir.",
            "Teminat zorunluluğu ihraç tutarının %100'ü oranında gerçekleştirilir; '50%' veya 'sabit tutar' ifadeleri yanlıştır.",
            "Gayrimenkul sertifikası tek bir projeye yatırım aracıdır; GYO ise çok sayıda gayrimenkul içeren portföy yapısıdır — bu iki araç karıştırılmamalıdır.",
            "Sertifika sahibi proje tamamlanmadan önce BİAŞ'ta sertifikasını ikincil piyasada satabilir; bu özellik gayrimenkul yatırımının likiditesini artırır.",
          ],
        },
        questions: [
          {
            text: "VII-128.2 sayılı Tebliğ uyarınca gayrimenkul sertifikası ihraç etmek isteyen kişinin ihraç tarihinden önceki son üç yıl içinde nasıl bir şart sağlaması gerekir?",
            options: [
              { id: "A", text: "Asgari 100 milyon TL özsermayeye sahip olması" },
              { id: "B", text: "Sermaye Piyasası Kurulu üyesi olması" },
              { id: "C", text: "Benzer büyüklükte en az bir projeyi başarıyla tamamlamış olması" },
              { id: "D", text: "Üç yıldır halka açık ortaklık olması" },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca gayrimenkul sertifikası ihraç edebilmek için ihraçcının, ihraç tarihinden önceki son üç yıl içinde benzer büyüklükte en az bir gayrimenkul projesini başarıyla tamamlamış olması zorunludur. Bu şart, ihraçcının deneyim yetersizliğinden kaynaklanabilecek riski azaltmayı amaçlar.",
          },
          {
            text: "Gayrimenkul sertifikalarında 'asli edim' kavramı aşağıdakilerden hangisini ifade eder?",
            options: [
              { id: "A", text: "Sertifika sahibine satış sonrasında nakit ödeme yapılması" },
              { id: "B", text: "Sertifika sahibinin sahip olduğu hakkın aynen yerine getirilmesi; bağımsız bölüm tesliminin sağlanması" },
              { id: "C", text: "Sertifikanın borsada işlem görmesi" },
              { id: "D", text: "İhraçcının cezai şart ödemesi" },
            ],
            correct: "B",
            explanation:
              "Tebliğ'de asli edim, sertifika sahibinin hakkının aynen yerine getirilmesi olarak tanımlanmıştır. Yatırımcı yeterli sayıda sertifikayı bir araya getirerek (örn. bir daireye eşit miktar) bağımsız bölümün tesliminden faydalanabilir. Tali edim ise satış halinde nakit ödeme yapılmasıdır.",
          },
          {
            text: "Bir gayrimenkul sertifikası ihraçcısının göstermesi gereken teminat ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Teminat zorunluluğu yoktur." },
              { id: "B", text: "Teminat tutarı ihraç tutarının %50'si kadar olabilir." },
              { id: "C", text: "Teminat tutarı ihraç tutarına eşit olmalı; banka teminat mektubu, ipotek veya devlet iç borçlanma senedi şeklinde olabilir." },
              { id: "D", text: "Teminat olarak yalnızca nakit kabul edilir." },
            ],
            correct: "C",
            explanation:
              "Gayrimenkul Sertifikaları Tebliği uyarınca ihraçcı, ihraç tutarına eşit teminat göstermek zorundadır. Teminat türleri; banka teminat mektubu, ipotek veya devlet iç borçlanma senedi olabilir. Bu kural, projenin tamamlanamaması veya yatırımcının zarara uğraması durumunda güvence sağlamaya yöneliktir.",
          },
          {
            text: "Asli edim talep etmeyen gayrimenkul sertifikası sahiplerinin sertifikaları için aşağıdakilerden hangisi uygulanır?",
            options: [
              { id: "A", text: "Sertifikalar değersiz hale gelir." },
              { id: "B", text: "Sertifikalar açık artırma yoluyla satılır; satıştan elde edilen tutar payları oranında sahiplerine dağıtılır." },
              { id: "C", text: "Sertifikalar otomatik olarak nominal değerinden geri alınır." },
              { id: "D", text: "Sertifikalar SPK tarafından satın alınır." },
            ],
            correct: "B",
            explanation:
              "Gayrimenkul sertifikası uygulamasında asli edim talep etmeyen sahiplerin sertifikaları açık artırma yoluyla satılır (tali edim). Açık artırmadan elde edilen tutar, sertifika sahiplerine payları oranında dağıtılır. Bu mekanizma, fiziki teslim talep etmeyen yatırımcılara nakit çıkış imkanı sağlar.",
          },
          {
            text: "Gayrimenkul sertifikası ile Gayrimenkul Yatırım Ortaklığı (GYO) arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "GYO sertifikaları yalnızca yabancı yatırımcılara satılır." },
              { id: "B", text: "Gayrimenkul sertifikası tek bir gayrimenkul projesine yatırım yaparken, GYO çeşitlendirilmiş bir gayrimenkul portföyüne yatırım yapar." },
              { id: "C", text: "GYO yalnızca konut, gayrimenkul sertifikası yalnızca ticari gayrimenkul finanse eder." },
              { id: "D", text: "Gayrimenkul sertifikaları SPK denetimine tabi değildir." },
            ],
            correct: "B",
            explanation:
              "Gayrimenkul sertifikası belirli bir gayrimenkul projesinin bağımsız bölümlerini temsil ederken, GYO halka açık bir ortaklık olarak çeşitlendirilmiş bir gayrimenkul portföyü işletir. GYO portföy bazlı, sertifika ise proje bazlı bir yatırım aracıdır. Her ikisi de SPK denetimine tabidir.",
          },
        ],
      },
      // ──────────────────── Ders 5: Varantlar ve Sertifikalar ────────────────────
      {
        id: "m1004-l5",
        title: "Varantlar ve Yatırım Kuruluşu Sertifikaları (VII-128.3)",
        duration: "9 dk",
        summary: {
          title: "Varantlar ve Yatırım Kuruluşu Sertifikaları",
          intro:
            "VII-128.3 sayılı Tebliğ; varantları ve yatırım kuruluşu sertifikalarını düzenler. Varant, sahibine dayanak varlığı belirli bir fiyattan alma (alım varantı) veya satma (satım varantı) hakkı veren menkul kıymettir; opsiyonun menkul kıymet versiyonu olarak işlem görür. Yatırım kuruluşu sertifikaları ise belirli bir yatırım stratejisini izleyen ve genellikle endeksleri takip eden yapılandırılmış ürünlerdir.",
          sections: [
            {
              heading: "Varant Çeşitleri ve Esasları",
              icon: "shield",
              items: [
                {
                  strong: "Yatırım Kuruluşu Varantı (Covered Warrant):",
                  text: "Yatırım kuruluşları (geniş yetkili aracı kurumlar) tarafından ihraç edilir; dayanak varlık olarak BIST 30 paylar, endeksler, yabancı para ve emtia kullanılabilir.",
                },
                {
                  strong: "Ortaklık Varantı:",
                  text: "Halka açık şirketler tarafından kendi paylarına yönelik ihraç edilen varanttır; sadece alım varantı olarak ihraç edilebilir, satım varantı şeklinde ihraç edilemez.",
                },
                {
                  strong: "Avrupa ve Amerikan Tipi:",
                  text: "Avrupa tipi varant yalnızca vade sonunda işleme konabilir; Amerikan tipi vade içinde herhangi bir gün işleme konabilir.",
                },
                {
                  strong: "Nakit Uzlaşı Zorunluluğu:",
                  text: "Endekse veya göstergeye dayalı varantlarda dönüşüm zorunlu olarak nakit uzlaşı ile yapılır; fiziki teslim mümkün değildir.",
                },
                {
                  strong: "Kaldıraç ve Risk:",
                  text: "Varantlar kaldıraçlı ürünler olduğundan, dayanak varlığın küçük hareketleri varant fiyatında büyük dalgalanmalara yol açar; toplam yatırımı kaybetme riski vardır.",
                },
              ],
            },
            {
              heading: "Yatırım Kuruluşu Sertifikaları",
              icon: "trend",
              items: [
                {
                  strong: "Tanım:",
                  text: "Yatırım kuruluşları tarafından ihraç edilen, belirli bir dayanak varlık veya endeksin getirisini takip eden veya belirli yatırım stratejisini izleyen yapılandırılmış borçlanma araçlarıdır.",
                },
                {
                  strong: "Sertifika Türleri:",
                  text: "Endeks sertifikaları (bir endeksi birebir takip), kaldıraçlı sertifikalar (endeks getirisini katlayarak yansıtan), barriyerli sertifikalar (belirli bir fiyat seviyesi aşıldığında özellik değiştiren).",
                },
                {
                  strong: "Piyasa Yapıcılık:",
                  text: "İhraç eden yatırım kuruluşu, varant ve sertifikaların ikincil piyasada sürekli alış-satış kotasyonu vermekle (piyasa yapıcılık) yükümlüdür.",
                },
                {
                  strong: "Borsada İşlem:",
                  text: "Varantlar ve sertifikalar BIST'te ayrı bir pazarda işlem görür; alım-satım emirleri günlük olarak gerçekleşir.",
                },
                {
                  strong: "Vade ve İtfa:",
                  text: "Varantların vadesi 2 ay - 5 yıl arasında olabilir; vade sonunda otomatik nakit uzlaşı veya fiziki teslim yapılır.",
                },
              ],
            },
          ],
          tip: "Varant ile opsiyon karıştırılmamalı: opsiyon türev araç (sözleşme), varant ise menkul kıymet. Türkiye'de ortaklık varantları sadece alım varantı olabilir — satım varantı şeklinde ihraç edilemez. Kaldıraç özellikleri sınavın klasik tuzağıdır.",
          kavramlar: [
            { terim: "Varant", tanim: "Belirli bir varlığı önceden belirlenen fiyat ve tarihte alma/satma hakkı tanıyan, borsada işlem gören menkul kıymet; türev araç değil sermaye piyasası aracıdır." },
            { terim: "Ortaklık Varantı", tanim: "Sahibine ihraçcı şirketin hisse senetlerini belirlenen fiyattan satın alma hakkı veren varant türü; Türkiye'de yalnızca alım varantı şeklinde ihraç edilebilir." },
            { terim: "Aracı Kuruluş Varantı", tanim: "Aracı kurumların bir dayanak varlık üzerine ihraç ettiği, alım veya satım hakkı içerebilen varant türü." },
            { terim: "Yatırım Kuruluşu Sertifikası", tanim: "Aracı kurumlar tarafından ihraç edilen, belirli bir getiri formülüne bağlı yapılandırılmış ürün niteliğinde menkul kıymet." },
            { terim: "Kaldıraç Etkisi", tanim: "Varantın dayanak varlıktaki küçük bir fiyat hareketini büyütülmüş getiri/zarar olarak yatırımcıya yansıtması; risk de büyür." },
            { terim: "Varant-Opsiyon Farkı", tanim: "Opsiyon: türev araç (sözleşme), tezgah üstü veya organize borsada; Varant: menkul kıymet, borsada işlem gören, ihraçcı tarafından çıkarılmış." },
            { terim: "Varant Primı (Delta)", tanim: "Dayanak varlık fiyatı değiştiğinde varant fiyatının ne ölçüde değişeceğini gösteren duyarlılık katsayısı." },
          ],
          dikkatlar: [
            "Varant menkul kıymettir, türev araç değildir; opsiyon sözleşmedir — bu temel ayrım sınavda en sık karşılaşılan tuzaktır.",
            "Türkiye'de ortaklık varantları yalnızca ALIM varantı olarak ihraç edilebilir; 'satım varantı' şeklinde ortaklık varantı ihracı yasaktır.",
            "Aracı kuruluş varantları hem alım hem satım içerebilir; ortaklık varantı sadece alım hakkı içerir — iki tür arasındaki bu fark sınavda sorulur.",
            "Varantın kaldıraç etkisi hem kâr hem de zarar potansiyelini büyütür; prim kaybı riski yüksektir çünkü dayanak varlık beklenen yönde hareket etmezse tüm prim yitirilir.",
            "Yatırım kuruluşu sertifikası sabit veya değişken getirili olabilir; yapılandırılmış ürün niteliği taşır ve anapara koruması içerebilir.",
          ],
        },
        questions: [
          {
            text: "Türkiye'de ortaklık varantlarının ihracında aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Hem alım hem satım varantı olarak ihraç edilebilir." },
              { id: "B", text: "Yalnızca satım varantı olarak ihraç edilebilir." },
              { id: "C", text: "Yalnızca alım varantı olarak ihraç edilebilir." },
              { id: "D", text: "Yalnızca yatırım fonları tarafından ihraç edilebilir." },
            ],
            correct: "C",
            explanation:
              "VII-128.3 sayılı Tebliğ uyarınca Türkiye'de ortaklık varantları yalnızca alım varantı olarak ihraç edilebilir. Halka açık şirket, kendi paylarına dayalı alım varantı çıkararak yatırımcılara payları belirli fiyattan alabilme hakkı verir; satım varantı şeklinde ihraç edemez. Yatırım kuruluşu varantları ise hem alım hem satım olarak ihraç edilebilir.",
          },
          {
            text: "Yatırım kuruluşu varantı (covered warrant) ile ortaklık varantı arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Yatırım kuruluşu varantı vergiye tabi değildir." },
              { id: "B", text: "İhraçcı tarafları farklıdır: yatırım kuruluşu varantını yatırım kuruluşları, ortaklık varantını halka açık şirketler ihraç eder." },
              { id: "C", text: "Yatırım kuruluşu varantları yalnızca yabancı yatırımcılara açıktır." },
              { id: "D", text: "Ortaklık varantları yalnızca nitelikli yatırımcılara satılır." },
            ],
            correct: "B",
            explanation:
              "Yatırım kuruluşu varantı (covered warrant) yatırım kuruluşları (geniş yetkili aracı kurumlar) tarafından çeşitli dayanak varlıklar üzerine ihraç edilirken, ortaklık varantı halka açık şirketler tarafından kendi paylarına yönelik olarak ihraç edilir. Dayanak varlık ve ihraçcı tarafı temel ayrım noktasıdır.",
          },
          {
            text: "Endekse veya göstergeye dayalı varantlarda dönüşüm yöntemi ile ilgili aşağıdakilerden hangisi doğrudur?",
            options: [
              { id: "A", text: "Yalnızca fiziki teslim yapılır." },
              { id: "B", text: "Hem fiziki teslim hem nakit uzlaşı seçeneği vardır." },
              { id: "C", text: "Dönüşüm zorunlu olarak nakit uzlaşı ile yapılır." },
              { id: "D", text: "Dönüşüm yapılamaz, varant değersiz biter." },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca endeks veya göstergeye dayalı varantlarda dönüşüm zorunlu olarak nakit uzlaşı ile yapılır. Bu kural mantıksal bir gerekliliktir: bir endeks veya gösterge fiziksel olarak teslim edilemez, dolayısıyla yatırımcıya işleme koyma fiyatı ile dayanağın değeri arasındaki fark nakit olarak ödenir.",
          },
          {
            text: "Bir yatırımcı, BIST 30 endeksine dayalı bir 'alım varantı' satın aldığında ne tür bir hak elde eder?",
            options: [
              { id: "A", text: "BIST 30 paylarını fiziki olarak teslim alma hakkı" },
              { id: "B", text: "BIST 30 endeksini belirli bir seviyeden alma (vade sonunda nakit uzlaşı) hakkı" },
              { id: "C", text: "BIST 30 paylarına oy hakkı" },
              { id: "D", text: "Halka arzlardan öncelikli pay alma hakkı" },
            ],
            correct: "B",
            explanation:
              "Alım (call) varantı sahibine, dayanak varlığı veya göstergeyi belirli bir fiyattan/seviyeden alma hakkı verir. BIST 30 endeksine dayalı alım varantında yatırımcı, vade sonunda endeksin işleme koyma seviyesi üzerinde kapanması durumunda fark kadar nakit ödeme alır. Endeks fiziki teslim mümkün olmadığından nakit uzlaşı yapılır.",
          },
          {
            text: "Yatırım kuruluşu varantları ve sertifikalarının ikincil piyasa likiditesi açısından ihraçcının yükümlülüğü nedir?",
            options: [
              { id: "A", text: "İhraçcının ikincil piyasada herhangi bir yükümlülüğü yoktur." },
              { id: "B", text: "İhraçcı yalnızca vadeye kadar bekler." },
              { id: "C", text: "İhraçcı, ürünlerin ikincil piyasada sürekli alış-satış kotasyonu vermekle (piyasa yapıcılık) yükümlüdür." },
              { id: "D", text: "İhraçcı yalnızca vade sonuna 30 gün kala kotasyon verir." },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca yatırım kuruluşu varantı veya sertifikası ihraç eden yatırım kuruluşu, bu ürünlerin BIST'teki ikincil piyasasında sürekli alış-satış kotasyonu vermekle yükümlüdür. Bu 'piyasa yapıcılık' (market making) zorunluluğu, yatırımcıların ürünleri istedikleri zaman makul bir fiyatla alıp satabilmelerini güvence altına alır.",
          },
        ],
      },
      // ────────── Ders 6: Yabancı Sermaye Piyasası Araçları ──────────
      {
        id: "m1004-l6",
        title: "Yabancı Sermaye Piyasası Araçları ve Depo Sertifikaları (VII-128.4)",
        duration: "8 dk",
        summary: {
          title: "Yabancı Sermaye Piyasası Araçları ve Depo Sertifikaları",
          intro:
            "VII-128.4 sayılı Tebliğ; yabancı sermaye piyasası araçlarının ve yabancı yatırım fonu paylarının Türkiye'de halka arzı ile depo sertifikalarının ihracını düzenler. Depo sertifikası, yabancı bir ihraçcının paylarını veya borçlanma araçlarını temsil eden, depocu kuruluş tarafından ihraç edilen menkul kıymettir.",
          sections: [
            {
              heading: "Yabancı Sermaye Piyasası Araçları",
              icon: "shield",
              items: [
                {
                  strong: "Türkiye'de Halka Arz:",
                  text: "Yabancı bir ihraçcı, Türkiye'de payları veya borçlanma araçlarını halka arz etmek istediğinde Kurul'dan onay alır; izahname Türkçe hazırlanmalı veya Türkçe çeviri eklenmelidir.",
                },
                {
                  strong: "Karşılıklılık İlkesi:",
                  text: "Yabancı ihraçcının ait olduğu ülkenin sermaye piyasası otoritesi ile SPK arasında işbirliği anlaşması veya benzeri düzenleme bulunması gerekir.",
                },
                {
                  strong: "Yabancı Yatırım Fonları:",
                  text: "Yabancı yatırım fonu paylarının Türkiye'de satılabilmesi için Kurul onayı, fonun bulunduğu ülke düzenlemelerine uygunluğu ve denetim raporlarının Türkçeye çevrilmiş olması zorunludur.",
                },
                {
                  strong: "Bilgi Yükümlülükleri:",
                  text: "Yabancı ihraçcı, ait olduğu ülke düzenlemelerine göre yapması gereken kamuyu aydınlatma ve raporlama yükümlülüklerini Türkiye'de de eş zamanlı yerine getirmelidir.",
                },
              ],
            },
            {
              heading: "Depo Sertifikaları",
              icon: "trend",
              items: [
                {
                  strong: "Tanım ve İşleyiş:",
                  text: "Depo sertifikası, yabancı bir ihraçcının paylarını veya borçlanma araçlarını temsil eden, depocu kuruluş (depository) tarafından ihraç edilen menkul kıymettir; yatırımcı yabancı varlığı doğrudan değil, depo sertifikası aracılığıyla satın alır.",
                },
                {
                  strong: "Depocu Kuruluş:",
                  text: "Geniş yetkili aracı kurumlar, bankalar veya özel olarak yetkilendirilmiş kuruluşlar depocu olabilir; depocu, dayanak varlıkları saklar ve sahiplik haklarını sertifika sahiplerine yansıtır.",
                },
                {
                  strong: "Türkiye Depo Sertifikası:",
                  text: "TDS, yabancı bir şirketin paylarına yönelik olarak Türkiye'de ihraç edilen depo sertifikasıdır; BIST'te işlem görür ve TL cinsinden alınıp satılır.",
                },
                {
                  strong: "ADR ve GDR Karşılaştırması:",
                  text: "Uluslararası uygulamada ADR (American Depositary Receipt) ABD piyasalarında, GDR (Global Depositary Receipt) çoğu uluslararası piyasada işlem gören depo sertifikası türleridir; Türkiye Depo Sertifikası bunların TR muadilidir.",
                },
                {
                  strong: "Kar Payı ve Oy Hakkı:",
                  text: "Depo sertifikası sahibi, dayanak varlığın sağladığı tüm ekonomik haklardan (kar payı, sermaye artırımı vb.) faydalanır; oy haklarını ise depocu kuruluş aracılığıyla kullanır.",
                },
              ],
            },
          ],
          tip: "Depo sertifikası 'yabancı varlığa dolaylı yatırım' aracıdır. ADR (Amerikan), GDR (global), TDS (Türkiye) — üçü de aynı mantık. Karşılıklılık ilkesi sınavda klasik soru; SPK ile yabancı otorite arasında işbirliği anlaşması zorunlu.",
          kavramlar: [
            { terim: "Depo Sertifikası", tanim: "Yabancı bir şirketin hisse senetlerini temsil eden, yurt içi borsada yerel para cinsinden işlem gören dolaylı yatırım aracı." },
            { terim: "ADR (American Depositary Receipt)", tanim: "Yabancı şirket hisselerini temsil eden ABD piyasasında USD cinsinden işlem gören depo sertifikası." },
            { terim: "GDR (Global Depositary Receipt)", tanim: "Aynı anda birden fazla ülke piyasasında işlem görebilen global depo sertifikası." },
            { terim: "TDS (Türkiye Depo Sertifikası)", tanim: "Yabancı şirket hisselerini temsil eden Türkiye piyasasında TL cinsinden işlem gören depo sertifikası." },
            { terim: "Karşılıklılık İlkesi", tanim: "Türkiye'nin yabancı ülke otorite ilkeleriyle çelişmemesi koşuluyla, yabancı SPK araçlarına Türkiye'de işlem izni verilmesi." },
            { terim: "Depo Bankası", tanim: "Yabancı hisse senetlerini kendi kasasında tutarken bunları temsil eden sertifikaları ihraç eden aracı banka." },
            { terim: "İşbirliği Anlaşması", tanim: "SPK ile yabancı ülke sermaye piyasası otoritesi arasında bilgi paylaşımı ve denetim işbirliğini düzenleyen ikili anlaşma; yabancı araçların Türkiye'de kotasyonu için ön koşul." },
          ],
          dikkatlar: [
            "Depo sertifikası dolaylı yatırım aracıdır; yatırımcı yabancı hisse senedini doğrudan değil depo sertifikası üzerinden tutar.",
            "ADR Amerika'da, GDR uluslararası çoklu piyasalarda, TDS ise Türkiye'de işlem görür — üç kısaltma ve piyasaları eşleştirilmelidir.",
            "Yabancı SPK araçlarının Türkiye'de kotasyonu için SPK ile yabancı otorite arasında işbirliği anlaşması zorunludur; karşılıklılık ilkesi uygulanır.",
            "Depo sertifikası sahibi temettü ve sermaye artırımı haklarından yararlanır; oy hakkı kullanımı ise depo bankası aracılığıyla sağlanır.",
            "TDS ihracında asgari halka açıklık ve şeffaflık şartları Türk mevzuatına göre belirlenir; yabancı şirket SPK düzenlemelerine tabi olur.",
          ],
        },
        questions: [
          {
            text: "Depo sertifikası kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yerli bir şirketin yabancı borsalarda işlem gören paylarıdır." },
              { id: "B", text: "Yabancı bir ihraçcının paylarını veya borçlanma araçlarını temsil eden, depocu kuruluş tarafından ihraç edilen menkul kıymettir." },
              { id: "C", text: "Sermaye Piyasası Kurulu tarafından ihraç edilen kamu menkul kıymetidir." },
              { id: "D", text: "Bir yatırım fonunun katılma payıdır." },
            ],
            correct: "B",
            explanation:
              "Depo sertifikası; yabancı bir ihraçcının paylarını veya borçlanma araçlarını temsil eden, depocu kuruluş tarafından ihraç edilen menkul kıymettir. Yatırımcı yabancı varlığı doğrudan satın almak yerine, ülkesinde ihraç edilen depo sertifikası aracılığıyla dolaylı yatırım yapar.",
          },
          {
            text: "Türkiye Depo Sertifikası (TDS) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "TDS yalnızca yabancı para cinsinden ihraç edilebilir." },
              { id: "B", text: "TDS yabancı bir şirketin paylarına yönelik olarak Türkiye'de ihraç edilen, BIST'te TL cinsinden işlem gören depo sertifikasıdır." },
              { id: "C", text: "TDS, sadece nitelikli yatırımcılara satılır." },
              { id: "D", text: "TDS, ADR'nin Türk versiyonudur ve sadece NYSE'de işlem görür." },
            ],
            correct: "B",
            explanation:
              "Türkiye Depo Sertifikası (TDS), yabancı bir ihraçcının paylarına yönelik olarak Türkiye'de ihraç edilen depo sertifikasıdır. BIST'te işlem görür ve TL cinsinden alım-satıma konu olur. Yatırımcılar yurtdışındaki yabancı paylara döviz transferi yapmak zorunda kalmadan TL ile dolaylı yatırım yapabilir.",
          },
          {
            text: "Yabancı sermaye piyasası araçlarının Türkiye'de halka arz edilebilmesi için aşağıdaki şartlardan hangisi aranır?",
            options: [
              { id: "A", text: "Türkiye'de bir şube açılması zorunludur." },
              { id: "B", text: "Yabancı ihraçcının ait olduğu ülkenin sermaye piyasası otoritesi ile SPK arasında işbirliği anlaşması veya benzeri düzenleme bulunması gerekir (karşılıklılık ilkesi)." },
              { id: "C", text: "Yabancı ihraçcı en az 10 yıldır faaliyette olmalıdır." },
              { id: "D", text: "İzahname yalnızca İngilizce hazırlanabilir." },
            ],
            correct: "B",
            explanation:
              "Yabancı sermaye piyasası araçlarının Türkiye'de halka arzında karşılıklılık ilkesi uygulanır: Yabancı ihraçcının ait olduğu ülkenin sermaye piyasası otoritesi ile SPK arasında işbirliği anlaşması veya benzeri düzenleyici işbirliği bulunması zorunludur. Ayrıca izahnamenin Türkçe olarak hazırlanması veya Türkçe çevirisinin eklenmesi gerekir.",
          },
          {
            text: "Bir depo sertifikası sahibinin oy hakkını kullanma şekli aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Doğrudan kendi adına yabancı şirket genel kuruluna katılır." },
              { id: "B", text: "Oy hakkı kullanılamaz, yalnızca ekonomik haklar elde edilir." },
              { id: "C", text: "Oy hakları depocu kuruluş aracılığıyla kullanılır; sertifika sahibi talimatını depocuya iletir." },
              { id: "D", text: "Sermaye Piyasası Kurulu tarafından oy hakkı kullanılır." },
            ],
            correct: "C",
            explanation:
              "Depo sertifikası sahibi, dayanak varlığın sağladığı ekonomik haklardan (kar payı, sermaye artırımı vb.) doğrudan faydalanır. Oy hakkı ise dayanak varlığın hukuken depocu kuruluş üzerinde kayıtlı olmasından dolayı, depocu kuruluş aracılığıyla kullanılır; sertifika sahibi talimatını depocuya iletir, depocu yabancı şirketin genel kurulunda bu talimat doğrultusunda oy kullanır.",
          },
          {
            text: "Uluslararası uygulamada 'ADR' (American Depositary Receipt) ile 'GDR' (Global Depositary Receipt) arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "ADR yalnızca pay, GDR yalnızca borçlanma aracı için ihraç edilir." },
              { id: "B", text: "ADR ABD piyasalarında, GDR ise çoğu uluslararası piyasada işlem gören depo sertifikası türleridir." },
              { id: "C", text: "ADR yalnızca kurumsal yatırımcılara açıktır, GDR herkese açıktır." },
              { id: "D", text: "ADR vergiye tabi, GDR vergiden muaftır." },
            ],
            correct: "B",
            explanation:
              "ADR (American Depositary Receipt) ABD piyasalarında işlem gören, ABD dolarına dayalı depo sertifikalarıdır ve ABD borsalarında alınıp satılır. GDR (Global Depositary Receipt) ise birden fazla uluslararası piyasada (Londra, Lüksemburg vb.) işlem gören depo sertifikalarıdır. Türkiye Depo Sertifikası (TDS) bu ürünlerin Türk pazarındaki muadilidir.",
          },
        ],
      },
    ],
  },
];