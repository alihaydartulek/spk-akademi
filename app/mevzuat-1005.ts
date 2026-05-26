/* ─────────────────────────────────────────────────────────────────────────────
 * Yatırım Kuruluşları (1005)
 *
 * Kaynak: SPL 1005 Çalışma Notu, 31 Aralık 2025 (167 sayfa)
 * Sınavlar: SPL Düzey 1, Düzey 2, Düzey 3 ve Türev Araçlar
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1001/1002 modüllerinde yatırım kuruluşlarına temel düzeyde değinilmişti;
 * 1005 ise bu kuruluşların operasyonel detaylarına derinlemesine girmektedir
 * (yatırım hizmetleri, faaliyet izinleri, müşteri sınıflandırması, kredili
 * işlemler ve kitle fonlaması). Çakışma yerine derinlik sağlayan bir
 * tamamlayıcıdır.
 *
 * Kullanım:
 *   import { mevzuat1005 } from "./mevzuat-1005";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1005: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1005 YATIRIM KURULUŞLARI
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1005",
    title: "Modül · Yatırım Kuruluşları (1005)",
    lessons: [
      // ───────────── Ders 1: Yatırım Hizmetleri ve Faaliyetleri ─────────────
      {
        id: "m1005-l1",
        title: "Yatırım Hizmetleri ve Faaliyetleri (II-37.1)",
        duration: "10 dk",
        summary: {
          title: "Yatırım Hizmetleri ve Faaliyetleri",
          intro:
            "II-37.1 sayılı Tebliğ, 6362 sayılı SPKn'nun 34. maddesi kapsamında yatırım kuruluşlarının sunabileceği yatırım hizmetleri ve faaliyetleri ile yan hizmetleri düzenler. Tebliğ, her bir faaliyet için ayrı ayrı izin ve faaliyet şartları öngörür; yan hizmetler için ise yalnızca bildirim yeterlidir. Yatırım kuruluşları aracı kurumlar ve bankalar olarak iki gruba ayrılır.",
          sections: [
            {
              heading: "Aracı Kurum Gruplandırması ve Faaliyet Türleri",
              icon: "shield",
              items: [
                {
                  strong: "Dar Yetkili Aracı Kurum:",
                  text: "Yalnızca emir iletimine aracılık ve yatırım danışmanlığı faaliyetlerinde bulunabilir; en düşük asgari sermaye ile kurulur.",
                },
                {
                  strong: "Kısmi Yetkili Aracı Kurum:",
                  text: "Dar yetkilinin faaliyetlerine ek olarak işlem aracılığı, sınırlı saklama ve halka arza aracılıkta bulunabilir; orta düzey sermaye gerektirir.",
                },
                {
                  strong: "Geniş Yetkili Aracı Kurum:",
                  text: "Tüm yatırım hizmet ve faaliyetlerinde (portföy aracılığı, genel saklama, türev araç işlemleri dahil) bulunabilir; en yüksek asgari sermayeyi gerektirir.",
                },
                {
                  strong: "Bankaların Yatırım Hizmeti Sınırı:",
                  text: "Mevduat ve katılım bankaları paylar, kaldıraçlı işlemler ve paya dayalı türev araçlar üzerinde portföy aracılığı yapamaz; pay endekslerine dayalı türevlerde portföy aracılığı yapabilir.",
                },
                {
                  strong: "Yan Hizmetler:",
                  text: "Sermaye piyasalarına ilişkin danışmanlık, kredi/ödünç verme, döviz işlemleri ve genel yatırım tavsiyesi gibi hizmetler yan hizmet kapsamındadır; izin değil bildirim gerektirir.",
                },
              ],
            },
            {
              heading: "Beş Temel Yatırım Faaliyeti",
              icon: "trend",
              items: [
                {
                  strong: "Alım-Satıma Aracılık:",
                  text: "Üç alt türü vardır — emir iletimine aracılık (en dar kapsamlı, müşteri emrini başka kuruluşa iletme), işlem aracılığı (borsaya doğrudan emir iletme), portföy aracılığı (kendi portföyünden işlem yapma).",
                },
                {
                  strong: "Bireysel Portföy Yöneticiliği:",
                  text: "Müşterinin portföyünü, çerçeve sözleşme kapsamında müşteri adına vekil sıfatıyla yönetme faaliyetidir; bireysel portföy yöneticisi lisansı gerektirir.",
                },
                {
                  strong: "Yatırım Danışmanlığı:",
                  text: "Müşteriye sermaye piyasası araçları konusunda yorum ve tavsiyede bulunma faaliyetidir; tavsiyenin müşterinin yatırım amacı ve risk profiline uygunluğu zorunludur.",
                },
                {
                  strong: "Halka Arza Aracılık:",
                  text: "İhraçların halka arzına en iyi gayret aracılığı veya aracılık yüklenimi şeklinde aracılık etme faaliyetidir; aracılık yükleniminde satılmayan paylar kuruluş tarafından satın alınır.",
                },
                {
                  strong: "Saklama Hizmeti:",
                  text: "Sermaye piyasası araçlarının ve nakdin saklanması; sınırlı saklama (sadece kendi müşterisi için) ve genel saklama (üçüncü taraflar için) olmak üzere iki türdür.",
                },
              ],
            },
          ],
          tip: "Aracı kurum gruplandırmasında 'dar < kısmi < geniş' yetkili sıralaması kalıp soru olarak gelir. Portföy aracılığı en riskli faaliyet olduğundan en kapsamlı izni gerektirir; bankalar paylarda portföy aracılığı yapamaz — bu bankacılık-aracılık ayrımının temelidir.",
          kavramlar: [
            { terim: "Yatırım Hizmeti", tanim: "SPKn md. 37 kapsamında sermaye piyasası araçlarına yönelik emir iletimi, işlem aracılığı, portföy aracılığı, portföy yönetimi, yatırım danışmanlığı ve halka arza aracılık faaliyetleri." },
            { terim: "Dar Yetkili Aracı Kurum", tanim: "Yalnızca emir iletimi ve işlem aracılığı yapabilen; portföy aracılığı, bireysel portföy yönetimi ve danışmanlık yapamayan aracı kurum." },
            { terim: "Kısmi Yetkili Aracı Kurum", tanim: "Dar yetki kapsamına ek olarak yatırım danışmanlığı yapabilen; ancak portföy aracılığı ve bireysel portföy yönetimi yapmayan aracı kurum." },
            { terim: "Geniş Yetkili Aracı Kurum", tanim: "Tüm yatırım hizmetlerini yapabilen, portföy aracılığı dahil en kapsamlı faaliyet iznine sahip aracı kurum." },
            { terim: "Portföy Aracılığı", tanim: "Müşteriden tam yetki alarak müşteri adına ve hesabına işlem yapma; en kapsamlı ve riskli yatırım hizmeti türü." },
            { terim: "Bankacılık-Aracılık Ayrımı", tanim: "Bankaların pay senetlerinde portföy aracılığı yapamayacağı, aracı kurumların ise mevduat kabul edemeyeceği temel yasal sınır." },
            { terim: "Mevzuata Uyum Birimi", tanim: "Aracı kurumun yatırım hizmetlerinin mevzuata uygunluğunu izleyen, iç kontrol ve denetim işlevlerini yerine getiren birim." },
          ],
          dikkatlar: [
            "Yetki sıralaması: dar < kısmi < geniş; portföy aracılığı yalnızca geniş yetkili aracı kurumlar tarafından yapılabilir.",
            "Bankalar pay senetleri piyasasında portföy aracılığı YAPAMAZ; banka-aracı kurum ayrımının temel kural.",
            "Emir iletimi (dar yetki) ile işlem aracılığı arasındaki fark: emir iletimine müşteri kendi hesabına karar verir; işlem aracılığında aracı kurum kendi adına da işlem yapabilir.",
            "Portföy aracılığı en riskli hizmettir çünkü müşteri adına tam yetki gerektiren karar verme yetkisi doğurur; en kapsamlı izni gerektirir.",
            "'Yatırım danışmanlığı' ile 'portföy yönetimi' karıştırılmamalı: danışmanlık öneri sunar, portföy yönetimi ise fiilen işlem yapar.",
          ],
        },
        questions: [
          {
            text: "II-37.1 sayılı Tebliğ uyarınca aracı kurumlar yetki kapsamlarına göre kaç gruba ayrılır?",
            options: [
              { id: "A", text: "İki: Dar ve geniş yetkili" },
              { id: "B", text: "Üç: Dar, kısmi ve geniş yetkili" },
              { id: "C", text: "Dört: Dar, kısmi, orta ve geniş yetkili" },
              { id: "D", text: "Aracı kurumlar gruplandırılmaz" },
            ],
            correct: "B",
            explanation:
              "Tebliğ uyarınca aracı kurumlar üç yetki grubuna ayrılır: dar yetkili (emir iletimine aracılık ve yatırım danışmanlığı), kısmi yetkili (işlem aracılığı, sınırlı saklama ve halka arza aracılık dahil) ve geniş yetkili (portföy aracılığı, genel saklama dahil tüm faaliyetler). Sermaye yeterliliği aşağıdan yukarıya artar.",
          },
          {
            text: "Aşağıdaki alım-satıma aracılık türlerinden hangisi en yüksek çıkar çatışması riski taşır?",
            options: [
              { id: "A", text: "Emir iletimine aracılık" },
              { id: "B", text: "İşlem aracılığı" },
              { id: "C", text: "Portföy aracılığı" },
              { id: "D", text: "Halka arza aracılık" },
            ],
            correct: "C",
            explanation:
              "Portföy aracılığında yatırım kuruluşu müşterinin emrinin karşı tarafı olarak kendi portföyünden işlem gerçekleştirir. Bu durum müşteri ile kuruluş arasında doğrudan çıkar çatışması yaratır; bu nedenle çıkar çatışması politikası ve emrin en iyi koşullarda gerçekleştirilmesi yükümlülüğü bu faaliyette özel önem taşır.",
          },
          {
            text: "Mevduat ve katılım bankaları aşağıdakilerden hangisini yapamaz?",
            options: [
              { id: "A", text: "Borçlanma araçları üzerinde işlem aracılığı" },
              { id: "B", text: "Paylar üzerinde portföy aracılığı" },
              { id: "C", text: "Pay endekslerine dayalı türev araçlarda portföy aracılığı" },
              { id: "D", text: "Yatırım fonu katılma payı satışı" },
            ],
            correct: "B",
            explanation:
              "Tebliğ uyarınca mevduat ve katılım bankaları paylar, kaldıraçlı işlemler ile paylara dayalı türev araçlar üzerinde portföy aracılığı yapamaz. Pay endekslerine dayalı türev araçlarda portföy aracılığı yapabilirler; bu, bankaların aracı kurumlardan ayrılan temel bir yetki kısıtlamasıdır.",
          },
          {
            text: "'Aracılık yüklenimi' (best efforts olmayan halka arza aracılık) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Aracılık eden kuruluşun satılmayan paylar için sorumluluğu yoktur." },
              { id: "B", text: "Aracılık eden kuruluş, halka arzda satılamayan payları kendisi satın almakla yükümlüdür." },
              { id: "C", text: "Sadece nitelikli yatırımcılara satış yapılabilir." },
              { id: "D", text: "Sadece kamu menkul kıymetleri için kullanılır." },
            ],
            correct: "B",
            explanation:
              "Halka arza aracılık iki şekilde yapılabilir: 'en iyi gayret aracılığı' (best efforts) sadece satış için çaba gösterme yükümlülüğü doğururken, 'aracılık yüklenimi' (firm commitment underwriting) aracılık eden kuruluşun satılamayan payları kendisi satın alma yükümlülüğünü içerir. Bu nedenle aracılık yüklenimi daha yüksek risk ve daha yüksek komisyon getirir.",
          },
          {
            text: "Aşağıdakilerden hangisi yatırım kuruluşunun yan hizmet kapsamında sunduğu hizmetlerdendir?",
            options: [
              { id: "A", text: "İşlem aracılığı" },
              { id: "B", text: "Bireysel portföy yöneticiliği" },
              { id: "C", text: "Sermaye piyasalarına ilişkin danışmanlık ve genel yatırım tavsiyesi" },
              { id: "D", text: "Halka arza aracılık" },
            ],
            correct: "C",
            explanation:
              "Tebliğ'de yan hizmetler sermaye piyasası faaliyetinden ayrı düzenlenmiştir: sermaye piyasaları konusunda danışmanlık, kredi/ödünç verme, döviz işlemleri ve genel yatırım tavsiyesi yan hizmetlere örnektir. Yan hizmetler için Kurul'dan izin yerine bildirim yeterlidir. Diğer üç seçenek temel yatırım faaliyetidir.",
          },
        ],
      },
      // ─────────── Ders 2: Aracı Kurumların Kuruluş ve Faaliyet Esasları ───────────
      {
        id: "m1005-l2",
        title: "Aracı Kurumların Kuruluş ve Faaliyet Esasları (III-39.1)",
        duration: "10 dk",
        summary: {
          title: "Aracı Kurumların Kuruluş ve Faaliyet Esasları",
          intro:
            "III-39.1 sayılı Tebliğ; aracı kurumların kuruluş, kurucularda aranacak şartlar, faaliyet izni, personel nitelikleri ve müşteri ilişkileri konularını düzenler. Aracı kurumlar yalnızca anonim ortaklık şeklinde kurulabilir, paylarının tamamı nakit karşılığı çıkarılır ve faaliyetleri SPK iznine tabidir.",
          sections: [
            {
              heading: "Kuruluş ve Faaliyet İzni",
              icon: "shield",
              items: [
                {
                  strong: "Hukuki Yapı:",
                  text: "Aracı kurum yalnızca anonim ortaklık şeklinde kurulur; payları nakit karşılığı çıkarılır, ticaret unvanında 'menkul değerler', 'aracı kurum' veya benzeri ibareler bulunmalıdır.",
                },
                {
                  strong: "Kurucu Şartları:",
                  text: "Müflis olmamak, sermaye piyasası mevzuatına aykırılıktan dolayı çalışma yasağı almamış olmak, yüz kızartıcı suçlardan hüküm giymemiş olmak ve yeterli mali güç sahibi olmak gerekir.",
                },
                {
                  strong: "İki Aşamalı İzin Süreci:",
                  text: "Önce kuruluş izni (esas sözleşme onayı ve sicil tescili) alınır, sonra faaliyet izni (yetki belgesi) alınır; faaliyete geçiş öncesi sermaye, personel ve teknolojik altyapı şartları sağlanmalıdır.",
                },
                {
                  strong: "Sermaye Yeterliliği:",
                  text: "Asgari özsermaye yetki kapsamına göre değişir; geniş yetkili aracı kurumlar en yüksek özsermaye gereğine tabidir, tutarlar her yıl yeniden değerleme oranıyla güncellenir.",
                },
                {
                  strong: "Faaliyet İzninin İptali:",
                  text: "Üç yıl boyunca faaliyetsiz kalma, sermaye yeterliliğini kaybetme, yetki belgesinin iptali gibi hallerde faaliyet izni iptal edilir.",
                },
              ],
            },
            {
              heading: "Müşteri Sınıflandırması ve Uygunluk Testi",
              icon: "trend",
              items: [
                {
                  strong: "Müşteri Sınıfları:",
                  text: "Müşteriler 'profesyonel' ve 'genel' (perakende) olarak ikiye ayrılır; profesyonel müşteriler kurumsal yatırımcıları ve belirli portföy büyüklüğü/tecrübeye sahip bireyleri kapsar.",
                },
                {
                  strong: "Talebe Bağlı Profesyonellik:",
                  text: "Genel müşteriler belirli koşulları sağlıyorsa (en az 1 milyon TL nakit/finansal varlık, son 1 yılda en az 10'ar adet işlem, finansal sektörde en az 2 yıl deneyim) talep ederek profesyonel statüsü kazanabilir.",
                },
                {
                  strong: "Uygunluk Testi (Suitability):",
                  text: "Yatırım kuruluşu, sunulan ürün/hizmetin müşteriye uygunluğunu belirlemek için müşterinin bilgi ve deneyimini ölçen bir test uygular; uygun değilse müşteri uyarılmalıdır.",
                },
                {
                  strong: "Personel Lisansı:",
                  text: "Yatırım kuruluşunda çalışacak personelin görev tipine göre uygun SPK lisansına sahip olması zorunludur (Düzey 1, 2, 3, Türev, Bireysel Portföy Yöneticiliği vb.).",
                },
                {
                  strong: "Yapamayacakları İşler:",
                  text: "Aracı kurumlar mevduat kabulü, ödünç para verme (sermaye piyasası araçlarına ilişkin kredi hariç), ticari ve sınai faaliyetlerde bulunamaz; faaliyet alanları esas sözleşmeyle sınırlandırılmıştır.",
                },
              ],
            },
          ],
          tip: "Aracı kurum yalnızca anonim ortaklık şeklinde kurulur — limited şirket veya kollektif şirket olamaz. Talebe bağlı profesyonel müşteri için '1 milyon TL + 10 işlem + 2 yıl deneyim' üçlüsü sınavın klasiğidir. Mevduat kabulü kesinlikle yasak; bu bankacılık-aracılık ayrımının çekirdeğidir.",
          kavramlar: [
            { terim: "Aracı Kurum", tanim: "Sermaye piyasası faaliyetleri için Kurul'dan izin almış, yalnızca anonim ortaklık şeklinde kurulabilen yatırım kuruluşu." },
            { terim: "Profesyonel Müşteri", tanim: "Finansal piyasalarda deneyim ve bilgi sahibi olduğu kabul edilen, belirli eşikleri aşan kurumsal veya bireysel müşteri; daha az koruma kapsamındadır." },
            { terim: "Talebe Bağlı Profesyonel Müşteri", tanim: "1 milyon TL varlık + son 1 yılda 10 işlem + 2 yıl finans sektörü deneyimi üçlüsünü sağlayan ve talep eden bireysel yatırımcı." },
            { terim: "Genel Müşteri", tanim: "Profesyonel müşteri kriterlerini karşılamayan, en yüksek yatırımcı koruma standartlarından yararlanan standart müşteri kategorisi." },
            { terim: "Mevduat Yasağı", tanim: "Aracı kurumların her türlü mevduat veya katılım fonu kabul etmesi yasaktır; bu yalnızca bankalara özgü faaliyettir." },
            { terim: "Sermaye Yeterliliği", tanim: "Aracı kurumların sahip olması gereken asgari özkaynak tutarı; faaliyet türü ve yetki genişliğine göre kademeli olarak belirlenir." },
            { terim: "Uygunluk Testi", tanim: "Aracı kurumun müşteriye ürün sunmadan önce müşterinin bilgi, deneyim ve risk profilini değerlendirdiği test." },
          ],
          dikkatlar: [
            "Aracı kurum YALNIZCA anonim ortaklık olabilir; limited veya şahıs şirketi şeklinde kurulamaz — bu kural mutlak istisnasızdır.",
            "Talebe bağlı profesyonel müşteri olabilmek için üç koşulun tamamı birlikte sağlanmalıdır: 1 milyon TL varlık + son 1 yılda 10 işlem + 2 yıl finans deneyimi.",
            "Mevduat kabulü aracı kurumlar için KESİNLİKLE YASAK; 'aracı kurum mevduat alabilir mi?' sorusuna cevap her zaman hayırdır.",
            "Uygunluk testi ile yerindelik testi farklı kavramlardır: uygunluk bilgi-deneyim bazlı; yerindelik ek olarak finansal durumu ve hedefleri de kapsar.",
            "Profesyonel müşteri daha az koruma kapsamındadır; örneğin bazı uyarı yükümlülükleri genel müşterilere uygulanırken profesyonellere uygulanmayabilir.",
          ],
        },
        questions: [
          {
            text: "III-39.1 sayılı Tebliğ uyarınca aracı kurumların hukuki yapısı ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Limited veya anonim şirket olabilir." },
              { id: "B", text: "Yalnızca anonim ortaklık şeklinde kurulabilir; payları nakit karşılığı çıkarılır." },
              { id: "C", text: "Yalnızca kollektif şirket şeklinde kurulabilir." },
              { id: "D", text: "Hukuki yapısı serbestçe belirlenebilir." },
            ],
            correct: "B",
            explanation:
              "Tebliğ uyarınca aracı kurumlar yalnızca anonim ortaklık şeklinde kurulabilir; payları nakit karşılığı çıkarılmalı ve ticaret unvanında 'menkul değerler', 'aracı kurum' veya benzer ibareler bulunmalıdır. Limited şirket, kollektif şirket veya komandit şirket şeklinde kurulamazlar.",
          },
          {
            text: "Genel müşterinin talebe bağlı olarak profesyonel müşteri statüsüne geçebilmesi için aşağıdaki koşullardan hangisi aranmaz?",
            options: [
              { id: "A", text: "En az 1 milyon TL tutarında nakit ve/veya finansal varlığa sahip olmak" },
              { id: "B", text: "Son 1 yılda her üç ayda en az 10'ar adet işlem gerçekleştirmiş olmak" },
              { id: "C", text: "Finansal sektörde en az 2 yıl çalışmış olmak veya benzer bir tecrübeye sahip olmak" },
              { id: "D", text: "Yüksek lisans veya doktora derecesine sahip olmak" },
            ],
            correct: "D",
            explanation:
              "Talebe bağlı profesyonel müşteri statüsü için üç koşuldan en az ikisinin sağlanması gerekir: (i) 1 milyon TL'lik nakit/finansal varlık, (ii) son 1 yılda her üç ayda en az 10'ar işlem gerçekleştirmiş olma, (iii) finansal sektörde en az 2 yıl çalışma deneyimi. Eğitim seviyesi (lisans, yüksek lisans vb.) bu kriterlere dahil değildir.",
          },
          {
            text: "Yatırım kuruluşunun müşteriye uygulamak zorunda olduğu 'uygunluk testi' (suitability test) aşağıdakilerden hangisini ölçer?",
            options: [
              { id: "A", text: "Müşterinin sermaye piyasaları konusundaki bilgi ve deneyimini" },
              { id: "B", text: "Müşterinin Türk vatandaşı olup olmadığını" },
              { id: "C", text: "Müşterinin yaşını ve cinsiyetini" },
              { id: "D", text: "Müşterinin vergi mükellefiyet durumunu" },
            ],
            correct: "A",
            explanation:
              "Uygunluk testi, sunulan ürün veya hizmetin müşteriye uygunluğunu belirlemek için müşterinin sermaye piyasası araçları, riskleri ve işlemleri konusundaki bilgi ve deneyim seviyesini ölçer. Test sonucunda ürün müşterinin profiline uygun değilse müşteri açıkça uyarılmalıdır.",
          },
          {
            text: "Aşağıdakilerden hangisi aracı kurumların yapamayacakları işler arasında yer ALMAZ?",
            options: [
              { id: "A", text: "Mevduat kabul etmek" },
              { id: "B", text: "Ticari ve sınai faaliyetlerde bulunmak" },
              { id: "C", text: "Sermaye piyasası araçlarının alım-satımına aracılık etmek" },
              { id: "D", text: "Sermaye piyasası araçları dışında ödünç para vermek" },
            ],
            correct: "C",
            explanation:
              "Sermaye piyasası araçlarının alım-satımına aracılık etmek aracı kurumun temel faaliyetidir; yapamayacağı iş değil, asıl iştigal konusudur. Mevduat kabulü, ticari/sınai faaliyetler ve sermaye piyasası araçları dışında ödünç para verme aracı kurumlar için yasaklanmıştır.",
          },
          {
            text: "Aracı kurumun faaliyet izninin iptal edilebileceği haller arasında aşağıdakilerden hangisi yer ALMAZ?",
            options: [
              { id: "A", text: "Üç yıl süreyle faaliyetsiz kalma" },
              { id: "B", text: "Asgari sermaye yeterliliğini kaybetme" },
              { id: "C", text: "Yetki belgesinin iptali" },
              { id: "D", text: "Yıllık brüt karın geçen yıla göre %10 azalması" },
            ],
            correct: "D",
            explanation:
              "Faaliyet izninin iptali için Tebliğ'de düzenlenen başlıca haller; üç yıl süreyle faaliyetsiz kalma, sermaye yeterliliğinin kaybedilmesi, yetki belgesinin iptal edilmesi ve mali zafiyete düşmedir. Yıllık brüt karın azalması faaliyet izninin iptal nedeni değildir; ekonomik dalgalanmalardan kaynaklanan normal bir durumdur.",
          },
        ],
      },
      // ─────────── Ders 3: Belge ve Kayıt Düzeni ───────────
      {
        id: "m1005-l3",
        title: "Belge ve Kayıt Düzeni (III-45.1)",
        duration: "9 dk",
        summary: {
          title: "Belge ve Kayıt Düzeni",
          intro:
            "III-45.1 sayılı Tebliğ; yatırım kuruluşlarının çerçeve sözleşmeler, müşteri emirleri, hesap ekstresi, risk bildirimi ve belge saklama yükümlülüklerini düzenler. Tebliğ'in amacı, yatırımcı korumasını artırmak ve tarafların hak ve yükümlülüklerinin yazılı belgelerle tespit edilmesini sağlamaktır.",
          sections: [
            {
              heading: "Çerçeve Sözleşme ve Kimlik Doğrulama",
              icon: "shield",
              items: [
                {
                  strong: "Çerçeve Sözleşme Zorunluluğu:",
                  text: "Müşteriyle herhangi bir yatırım hizmeti sunulmadan önce yazılı çerçeve sözleşme imzalanmalıdır; sözleşme tarafların hak/yükümlülüklerini, ücret/komisyon esaslarını, gizlilik kurallarını içerir.",
                },
                {
                  strong: "Müşteri Hesap Numarası:",
                  text: "Her müşteri için tekil hesap numarası açılır; hesap üzerindeki tüm işlemler bu numara altında izlenir, müşteri varlıkları yatırım kuruluşunun varlıklarından ayrı tutulur.",
                },
                {
                  strong: "Kimlik Doğrulama:",
                  text: "İş ilişkisi öncesi müşterinin kimliği MASAK mevzuatına uygun şekilde doğrulanır; uzaktan kimlik tespiti için Kurul'un belirlediği usul ve esaslar uygulanır.",
                },
                {
                  strong: "Risk Bildirimi:",
                  text: "Yatırım hizmeti öncesi müşteriye yatırım yapılan ürünün riskleri konusunda yazılı bildirim yapılır; kaldıraçlı işlemler ve türev araçlar için ayrı, daha kapsamlı risk bildirimi zorunludur.",
                },
              ],
            },
            {
              heading: "Müşteri Emirleri ve Belge Saklama",
              icon: "trend",
              items: [
                {
                  strong: "Emir Türleri:",
                  text: "Limit emir (belirlenen fiyat veya daha iyisinden gerçekleştirme), piyasa emri (en uygun piyasa fiyatından), şarta bağlı emir (belirli koşul gerçekleştiğinde aktif olan), iyi-til-iptal emri (iptal edilene kadar geçerli).",
                },
                {
                  strong: "Emir İletim Esasları:",
                  text: "Müşteri emirleri yazılı, sözlü, telefonla, internet/mobil aracılığıyla iletilebilir; her emir kaydedilir, ses kayıtları en az 5 yıl saklanır.",
                },
                {
                  strong: "Hesap Ekstresi:",
                  text: "Yatırım kuruluşu müşterilerine ay sonlarını takip eden 7 iş günü içinde hesap ekstresi gönderir; ekstre işlem detaylarını, ücretleri ve dönem sonu bakiyeyi içerir.",
                },
                {
                  strong: "Saklama Süresi:",
                  text: "Yatırım hizmetlerine ilişkin belgeler ve kayıtlar düzenleme tarihinden itibaren en az 5 yıl saklanır; ses kayıtları, elektronik yazışmalar ve emir kayıtları için aynı süre geçerlidir.",
                },
                {
                  strong: "Müşteri Şikayetleri:",
                  text: "Şikayetler kayıt altına alınır, makul sürede (genellikle 20 iş günü) yanıtlanır; çözümlenemeyen şikayetler için Türkiye Sermaye Piyasaları Birliği'ne (TSPB) başvurulabilir.",
                },
              ],
            },
          ],
          tip: "Çerçeve sözleşme = ana sözleşme, yazılı şekil zorunlu. Belge saklama süresi 5 yıl — bu rakam tüm sınavlarda gelir. Hesap ekstresi gönderim süresi 7 iş günü, müşteri şikayetlerine yanıt süresi 20 iş günü.",
          kavramlar: [
            { terim: "Çerçeve Sözleşme", tanim: "Aracı kurum ile müşteri arasındaki yatırım hizmetlerinin tüm şartlarını düzenleyen ana sözleşme; yazılı şekil zorunludur." },
            { terim: "Belge Saklama Yükümlülüğü", tanim: "Aracı kurumların müşterilere ait tüm belge ve kayıtları asgari 5 yıl süreyle muhafaza etme zorunluluğu." },
            { terim: "Hesap Ekstresi", tanim: "Müşterinin portföy ve işlem durumunu özetleyen, işlem tarihini izleyen 7 iş günü içinde gönderilmesi gereken belge." },
            { terim: "Şikayet Yanıt Süresi", tanim: "Müşteri şikayetlerine aracı kurumun 20 iş günü içinde yazılı olarak yanıt verme zorunluluğu." },
            { terim: "Emir Kaydı", tanim: "Alınan her müşteri emrinin zaman damgası, tutar, fiyat ve diğer detaylarıyla kaydedildiği zorunlu işlem kaydı." },
            { terim: "Elektronik Kayıt", tanim: "Ses kayıtları dahil tüm iletişim kayıtlarının asgari 5 yıl saklanması; telefon emirlerinde ses kaydı zorunludur." },
            { terim: "En İyi Emir Politikası", tanim: "Müşteri emrini en iyi fiyat, hız ve koşullarla gerçekleştirme yükümlülüğünü belirleyen yazılı politika." },
          ],
          dikkatlar: [
            "Belge ve kayıt saklama süresi 5 yıldır; '3 yıl', '7 yıl' veya '10 yıl' seçenekleri yanıltıcıdır — kesin rakam 5 yıldır.",
            "Hesap ekstresi işlem tarihini izleyen 7 iş günü içinde gönderilmelidir; 'takvim günü' ile 'iş günü' farkı sınavda sorulabilir.",
            "Müşteri şikayetlerine yanıt süresi 20 iş günüdür; bu sürenin aşılması mevzuat ihlali sayılır.",
            "Çerçeve sözleşme YAZILI olarak yapılmak zorundadır; sözlü veya elektronik onay yeterli değildir.",
            "Telefon yoluyla alınan emirlerde ses kaydı zorunludur; bu kayıtlar da 5 yıl süreyle saklanmalıdır.",
          ],
        },
        questions: [
          {
            text: "Yatırım kuruluşu ile müşteri arasında yatırım hizmeti sunulması öncesi imzalanması zorunlu olan belge nedir?",
            options: [
              { id: "A", text: "Risk bildirim formu" },
              { id: "B", text: "Çerçeve sözleşme" },
              { id: "C", text: "Kimlik tespit formu" },
              { id: "D", text: "Vergi muafiyet beyannamesi" },
            ],
            correct: "B",
            explanation:
              "III-45.1 sayılı Tebliğ uyarınca, yatırım kuruluşu müşteriyle herhangi bir yatırım hizmeti sunulmadan önce yazılı çerçeve sözleşme imzalamak zorundadır. Sözleşme; tarafların hak ve yükümlülüklerini, ücret-komisyon esaslarını, gizlilik kurallarını ve uyuşmazlık çözüm usullerini içerir.",
          },
          {
            text: "III-45.1 sayılı Tebliğ uyarınca yatırım hizmetlerine ilişkin belgelerin asgari saklama süresi nedir?",
            options: [
              { id: "A", text: "1 yıl" },
              { id: "B", text: "3 yıl" },
              { id: "C", text: "5 yıl" },
              { id: "D", text: "10 yıl" },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca yatırım hizmetlerine ilişkin tüm belgeler ve kayıtlar (sözleşmeler, emir kayıtları, ses kayıtları, elektronik yazışmalar dahil) düzenleme tarihinden itibaren en az 5 yıl süreyle saklanmalıdır. Bu süre denetim, dava ve şikayet süreçleri açısından kritik öneme sahiptir.",
          },
          {
            text: "Aşağıdaki emir türlerinden hangisi 'belirlenen fiyat veya daha iyisinden' işlem gerçekleştirilmesini sağlar?",
            options: [
              { id: "A", text: "Piyasa emri" },
              { id: "B", text: "Limit emri" },
              { id: "C", text: "Şarta bağlı emir" },
              { id: "D", text: "İyi-til-iptal emri" },
            ],
            correct: "B",
            explanation:
              "Limit emri, müşterinin belirlediği fiyattan veya daha iyi bir fiyattan (alımda daha düşük, satımda daha yüksek) işlem yapılmasını sağlar. Piyasa emri ise emrin en uygun piyasa fiyatından anında gerçekleştirilmesini ister; fiyat garanti edilmez ancak işlem hızı önceliktedir.",
          },
          {
            text: "Yatırım kuruluşunun müşterilerine hesap ekstresi göndermesi gereken süre nedir?",
            options: [
              { id: "A", text: "Ay sonlarını takip eden 7 iş günü içinde" },
              { id: "B", text: "Ay sonlarını takip eden 15 iş günü içinde" },
              { id: "C", text: "Üç ayda bir" },
              { id: "D", text: "Müşterinin talep ettiği zaman" },
            ],
            correct: "A",
            explanation:
              "Tebliğ uyarınca yatırım kuruluşu, müşterilerine ay sonlarını takip eden 7 iş günü içinde hesap ekstresi göndermek zorundadır. Ekstre dönem içindeki işlemleri, alınan komisyon ve ücretleri ve dönem sonu varlık-borç bakiyesini ayrıntılı olarak gösterir.",
          },
          {
            text: "Müşteri emirleri ile ilgili ses kayıtlarının saklanma süresi nedir?",
            options: [
              { id: "A", text: "1 yıl" },
              { id: "B", text: "3 yıl" },
              { id: "C", text: "5 yıl" },
              { id: "D", text: "Süresiz olarak saklanmalıdır." },
            ],
            correct: "C",
            explanation:
              "Telefonla iletilen müşteri emirlerinin ses kayıtları belge saklama yükümlülüğüne tabidir ve düzenleme tarihinden itibaren en az 5 yıl saklanmalıdır. Bu süre, müşteri şikayetlerinin ve hukuki uyuşmazlıkların çözümünde belge niteliği taşır.",
          },
        ],
      },
      // ─────────── Ders 4: Kredili Alım, Açığa Satış, Ödünç ───────────
      {
        id: "m1005-l4",
        title: "Kredili Alım, Açığa Satış ve Ödünç İşlemleri (Seri V No 65)",
        duration: "9 dk",
        summary: {
          title: "Kredili Alım, Açığa Satış ve Ödünç İşlemleri",
          intro:
            "Seri V No 65 sayılı Tebliğ; sermaye piyasası araçlarının kredili alım, açığa satış ve ödünç alma-verme işlemlerinin esaslarını düzenler. Bu işlemler kaldıraç sağladığı için yatırımcılara hem fırsat hem de yüksek risk sunar; sıkı özkaynak, teminat ve raporlama kurallarına tabidir.",
          sections: [
            {
              heading: "Kredili Alım İşlemleri",
              icon: "shield",
              items: [
                {
                  strong: "Tanım:",
                  text: "Kredili alım, müşterinin sermaye piyasası araçlarını kredi kullanarak satın aldığı işlemdir; kredinin teminatı satın alınan menkul kıymetlerdir.",
                },
                {
                  strong: "Özkaynak Oranı:",
                  text: "Başlangıç özkaynak oranı asgari %50 olmalı; yani müşteri işlem bedelinin en az yarısını kendi parasıyla karşılamalıdır. Sürdürme özkaynak oranı %35'tir.",
                },
                {
                  strong: "Özkaynak Tamamlama Bildirimi:",
                  text: "Özkaynak oranı %35'in altına düştüğünde aracı kurum müşteriye özkaynak tamamlama çağrısı yapar; müşteri 2 iş günü içinde tamamlamalıdır.",
                },
                {
                  strong: "Yetki ve Çerçeve Sözleşme:",
                  text: "Kredili işlem yapacak aracı kurum geniş yetkili olmalı, müşteriyle ayrı bir kredili işlem çerçeve sözleşmesi imzalamalıdır.",
                },
                {
                  strong: "Halka Arzda Yasak:",
                  text: "İlk halka arz edilen menkul kıymetler için halka arz tarihinden itibaren belirli bir süre kredili alım yapılamaz; bu yasak fiyat manipülasyonunu önlemeye yöneliktir.",
                },
              ],
            },
            {
              heading: "Açığa Satış ve Ödünç İşlemleri",
              icon: "trend",
              items: [
                {
                  strong: "Açığa Satış Tanımı:",
                  text: "Açığa satış, sahibi olunmayan sermaye piyasası araçlarının ödünç alınarak satılması işlemidir; satıcı, vade sonunda araçları geri almak için piyasadan satın alır ve ödünç verene iade eder.",
                },
                {
                  strong: "Açığa Satış Şartları:",
                  text: "Sadece geniş yetkili aracı kurumlar açığa satış yapabilir; satış öncesi ödünç sözleşmesi imzalanmış olmalıdır (uncovered/naked short selling yasaktır).",
                },
                {
                  strong: "Yukarı Adım Kuralı (Uptick Rule):",
                  text: "Açığa satış emrinin fiyatı, son işlem fiyatının üstünde olmalıdır; bu kural piyasa düşüşlerini hızlandırmayı önlemeye yöneliktir (BIST'te koşullu olarak uygulanır).",
                },
                {
                  strong: "Ödünç İşlemleri:",
                  text: "Sermaye piyasası araçlarının belirli bir süre için ödünç verilmesi/alınması işlemidir; ödünç veren ücret kazanır, ödünç alan açığa satış veya teminat amacıyla kullanır.",
                },
                {
                  strong: "Özkaynak Olarak Kabul Edilebilir Kıymetler:",
                  text: "Kredili işlemlerde özkaynak olarak nakit, devlet iç borçlanma senetleri, A grubu paylar (likiditesi yüksek olanlar), yatırım fonu katılma payları ve mevduat kabul edilir.",
                },
              ],
            },
          ],
          tip: "Kredili işlemde özkaynak oranları sınavın klasiği: başlangıç %50, sürdürme %35, tamamlama 2 iş günü. Açığa satışın 'uncovered' (çıplak) yapılması yasaktır — önce ödünç sözleşmesi imzalanmalıdır. İlk halka arz sonrası kredili alım yasağı manipülasyon önleme tedbiridir.",
          kavramlar: [
            { terim: "Kredili Alım", tanim: "Müşterinin aracı kurumdan kredi kullanarak hisse senedi satın aldığı işlem; başlangıç özkaynak oranı portföyün %50'si olmalıdır." },
            { terim: "Açığa Satış", tanim: "Ödünç alınan menkul kıymetin satılması ve fiyat düştüğünde geri satın alınarak kârın elde edildiği işlem." },
            { terim: "Çıplak Açığa Satış", tanim: "Önce ödünç sözleşmesi imzalanmadan yapılan açığa satış; Türkiye'de kesinlikle yasaktır." },
            { terim: "Başlangıç Özkaynak Oranı", tanim: "Kredili alım işleminde müşterinin portföy değerine koyması gereken asgari özkaynak oranı: %50." },
            { terim: "Sürdürme Özkaynak Oranı", tanim: "Kredili alım sonrası portföy değerinin düşmesiyle birlikte özkaynak oranının düşebileceği alt sınır: %35." },
            { terim: "Tamamlama Süresi", tanim: "Sürdürme özkaynak oranının altına düşen müşterinin teminat tamamlama çağrısına yanıt vermesi için tanınan süre: 2 iş günü." },
            { terim: "Ödünç İşlemi", tanim: "Menkul kıymetin geçici olarak devredildiği, vade sonunda aynı tür ve miktarda menkul kıymetin iade edildiği işlem; açığa satış için ön koşuldur." },
          ],
          dikkatlar: [
            "Kredili alımda başlangıç özkaynak = %50, sürdürme = %35, tamamlama süresi = 2 iş günü — bu üç rakam sınavın temel kalıp sorusudur.",
            "Çıplak (teminat almadan) açığa satış KESİNLİKLE YASAK; önce ödünç sözleşmesi imzalanmadan açığa satış yapılamaz.",
            "İlk halka arzı takiben belirli bir süre kredili alım yapılamaz; bu kural fiyat manipülasyonunu önlemeye yöneliktir.",
            "Teminat tamamlama çağrısına 2 iş günü içinde yanıt verilmezse aracı kurum zorla tasfiye (liquidation) yapabilir; 'takvim günü' değil 'iş günü' önemlidir.",
            "Ödünç alan taraf borçlu, veren taraf alacaklıdır; vade sonunda aynı tür menkul kıymet iade edilir — nakit değil menkul kıymet.",
          ],
        },
        questions: [
          {
            text: "Kredili alım işlemlerinde başlangıç özkaynak oranı asgari ne olmalıdır?",
            options: [
              { id: "A", text: "%25" },
              { id: "B", text: "%35" },
              { id: "C", text: "%50" },
              { id: "D", text: "%75" },
            ],
            correct: "C",
            explanation:
              "Seri V No 65 sayılı Tebliğ uyarınca kredili alım işlemlerinde başlangıç özkaynak oranı asgari %50 olmalıdır. Yani müşteri, işlem bedelinin en az yarısını kendi parasıyla karşılamak zorundadır; geri kalan %50'lik kısım için aracı kurumdan kredi kullanılır.",
          },
          {
            text: "Kredili işlemlerde sürdürme özkaynak oranı kaçtır ve oranın altına düşülmesi halinde müşterinin özkaynağı tamamlama süresi nedir?",
            options: [
              { id: "A", text: "%25 — 1 iş günü" },
              { id: "B", text: "%35 — 2 iş günü" },
              { id: "C", text: "%50 — 5 iş günü" },
              { id: "D", text: "%40 — 3 iş günü" },
            ],
            correct: "B",
            explanation:
              "Sürdürme özkaynak oranı %35'tir. Müşterinin özkaynak oranı bu eşiğin altına düştüğünde aracı kurum 'özkaynak tamamlama bildirimi' (margin call) gönderir; müşteri en geç 2 iş günü içinde özkaynağını tamamlamak zorundadır. Aksi halde aracı kurum müşterinin pozisyonunu zorla kapatabilir.",
          },
          {
            text: "Açığa satış işlemi ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm aracı kurumlar açığa satış yapabilir." },
              { id: "B", text: "Sahibi olunmayan menkul kıymetler ödünç alınmaksızın satılabilir (uncovered short selling)." },
              { id: "C", text: "Yalnızca geniş yetkili aracı kurumlar açığa satış yapabilir; satış öncesi ödünç sözleşmesi imzalanmış olmalıdır." },
              { id: "D", text: "Açığa satış sadece kamu menkul kıymetlerinde yapılabilir." },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca açığa satış yalnızca geniş yetkili aracı kurumlar tarafından yapılabilir ve satış öncesi mutlaka ödünç sözleşmesi imzalanmış olmalıdır. Çıplak (uncovered/naked) açığa satış Türkiye'de yasaktır; bu kural sistemik risk ve manipülasyon endişelerini gidermeye yöneliktir.",
          },
          {
            text: "'Yukarı adım kuralı' (uptick rule) açığa satışta neyi düzenler?",
            options: [
              { id: "A", text: "Açığa satış miktarının üst sınırını" },
              { id: "B", text: "Açığa satış emrinin fiyatının son işlem fiyatının üzerinde olması gerekliliğini" },
              { id: "C", text: "Açığa satışta uygulanacak komisyon oranını" },
              { id: "D", text: "Açığa satışın hangi günlerde yapılabileceğini" },
            ],
            correct: "B",
            explanation:
              "Yukarı adım kuralı (uptick rule), açığa satış emrinin fiyatının son işlem fiyatının üzerinde olmasını zorunlu kılar. Bu kuralın amacı, açığa satış işlemlerinin piyasa düşüşlerini hızlandırmasını önlemektir. BIST'te bu kural koşullu olarak uygulanmaktadır.",
          },
          {
            text: "Aşağıdakilerden hangisi kredili işlemlerde özkaynak olarak kabul edilebilir kıymetlerden DEĞİLDİR?",
            options: [
              { id: "A", text: "Nakit" },
              { id: "B", text: "Devlet iç borçlanma senetleri (DİBS)" },
              { id: "C", text: "Likiditesi düşük halka kapalı şirket payları" },
              { id: "D", text: "Yatırım fonu katılma payları" },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca özkaynak olarak kabul edilen kıymetler; nakit, DİBS, A grubu paylar (likiditesi yüksek borsada işlem gören paylar), yatırım fonu katılma payları ve mevduattır. Likiditesi düşük halka kapalı şirket payları gibi kolay nakde çevrilemeyen varlıklar özkaynak olarak kabul edilmez.",
          },
        ],
      },
      // ─────────── Ders 5: Kitle Fonlaması ───────────
      {
        id: "m1005-l5",
        title: "Kitle Fonlaması (III-35/A.2)",
        duration: "9 dk",
        summary: {
          title: "Kitle Fonlaması (Crowdfunding)",
          intro:
            "III-35/A.2 sayılı Kitle Fonlaması Tebliği; girişimcilerin ve şirketlerin internet üzerinden çok sayıda yatırımcıdan küçük miktarlarda fon toplayarak finansman sağlamasını düzenler. İki temel türü vardır: paya dayalı kitle fonlaması (yatırımcı pay sahibi olur) ve borçlanmaya dayalı kitle fonlaması (yatırımcı alacaklı olur). Kitle fonlaması yalnızca SPK listesindeki platformlar aracılığıyla yapılabilir.",
          sections: [
            {
              heading: "Platform Esasları ve Yatırım Komitesi",
              icon: "shield",
              items: [
                {
                  strong: "Platform Niteliği:",
                  text: "Platform; anonim ortaklık şeklinde kurulmuş, ticaret unvanında 'Kitle Fonlama Platformu' ibaresi bulunan ve SPK listesinde yer alan tüzel kişidir.",
                },
                {
                  strong: "Liste Şartları:",
                  text: "Platform; asgari özsermaye, ortaklarda aranacak nitelikler, yönetim kurulu üyelerinin tecrübesi ve yatırım komitesi oluşturulması şartlarını yerine getirmelidir.",
                },
                {
                  strong: "Yatırım Komitesi:",
                  text: "Platform yönetim kurulu tarafından oluşturulan en az 3 üyeli komitedir; üyelerin sermaye piyasaları veya girişim sermayesinde tecrübesi aranır, kampanyalar bu komite onayından geçer.",
                },
                {
                  strong: "Yapamayacakları Faaliyetler:",
                  text: "Platformlar gayrimenkul ve gayrimenkule dayalı hakların alım-satımı, gayrimenkul projelerinin satışı kapsamında kitle fonlaması yapamaz; yalnızca girişim şirketleri veya borçlanma kampanyaları için faaliyet gösterirler.",
                },
                {
                  strong: "Münhasır Faaliyet:",
                  text: "Platform münhasıran paya ve/veya borçlanmaya dayalı kitle fonlaması faaliyetinde bulunabilir; başka sermaye piyasası faaliyeti yapamaz.",
                },
              ],
            },
            {
              heading: "Kampanya, Fon Toplama ve Yatırımcı Limitleri",
              icon: "trend",
              items: [
                {
                  strong: "Paya Dayalı Kitle Fonlaması:",
                  text: "Yatırımcı, fon kullanan girişim şirketinin paylarını alır ve ortak olur; kampanya başına toplanabilecek azami tutar ve yatırımcı başına azami yatırım sınırı uygulanır.",
                },
                {
                  strong: "Borçlanmaya Dayalı Kitle Fonlaması:",
                  text: "Yatırımcı, fon kullanana belirli vade ve faiz koşullarıyla borç verir; ödeme planı ve teminat esasları kampanya bilgi formunda yer alır.",
                },
                {
                  strong: "Bilgi Formu:",
                  text: "Her kampanya için kampanyayı yürüten girişim şirketi/girişimci tarafından bilgi formu hazırlanır; platform formun doğruluğunu denetler ve yatırım komitesi onayına sunar.",
                },
                {
                  strong: "Hedef Tutarın Sağlanması:",
                  text: "Kampanya süresi sonunda hedef tutarın en az %90'ı toplanmamışsa kampanya başarısız sayılır; toplanan tüm tutarlar yatırımcılara iade edilir.",
                },
                {
                  strong: "Yurt Dışı Platformlar:",
                  text: "Türkiye'de yerleşik kişilere yönelik kitle fonlaması faaliyeti yalnızca SPK listesindeki Türk platformları aracılığıyla yapılabilir; yurt dışı platformlar Türkiye'ye yönelik faaliyet gösteremez.",
                },
              ],
            },
          ],
          tip: "Kitle fonlaması iki türlüdür: paya dayalı (ortaklık) ve borçlanmaya dayalı. Platform 'gayrimenkul kitle fonlaması' yapamaz — bu Tebliğ'in özgün yasağıdır. Kampanya başarısı için hedef tutarın %90'ı eşiği klasik soru kalıbıdır.",
          kavramlar: [
            { terim: "Kitle Fonlaması", tanim: "Girişimlerin internet tabanlı platform üzerinden çok sayıda yatırımcıdan küçük miktarlarla fon toplaması; paya dayalı veya borçlanmaya dayalı olabilir." },
            { terim: "Paya Dayalı Kitle Fonlaması", tanim: "Girişim şirketinin paylarının platform aracılığıyla satılarak fon toplandığı model; yatırımcı ortak olur." },
            { terim: "Borçlanmaya Dayalı Kitle Fonlaması", tanim: "Girişimin borçlanma aracı ihraç ederek platform üzerinden fon topladığı model; yatırımcı alacaklı olur." },
            { terim: "Kitle Fonlaması Platformu", tanim: "SPK'dan yetki almış, kampanyaları internet üzerinden yayınlayan ve yönetimine aracılık eden yetkili elektronik platform." },
            { terim: "Hedef Tutar", tanim: "Kampanyanın başarılı sayılabilmesi için toplanması gereken asgari fon miktarı; kampanya bitiminde hedefin %90'ı sağlanmazsa kampanya iptal sayılır." },
            { terim: "Gayrimenkul Kitle Fonlaması Yasağı", tanim: "Platformların gayrimenkule dayalı kitle fonlaması kampanyası yürütemeyeceği, Tebliğ'de yer alan özgün yasak." },
            { terim: "Yatırım Limiti", tanim: "Bireysel yatırımcıların her bir kampanya ve yıllık bazda yatırım yapabileceği azami tutar; bilgisizlik riskini sınırlandırmaya yöneliktir." },
          ],
          dikkatlar: [
            "Kitle fonlaması iki türdür: paya dayalı (ortak olma) ve borçlanmaya dayalı (alacaklı olma) — üçüncü tür olarak 'gayrimenkul' kesinlikle YASAKTIR.",
            "Kampanya başarı eşiği hedef tutarın %90'ıdır; bu orana ulaşılamazsa kampanya iptal edilir ve toplanan fonlar yatırımcılara iade edilir.",
            "Platform yalnızca aracılık yapar; yatırım tavsiyesi vermek yetkisi dışındadır — platform ve tavsiye arasındaki sınır sınavda sorulabilir.",
            "Yatırımcı limitleri uygulanır; bireysel yatırımcılar yıllık belirli bir tutarın üzerinde kitle fonlamasına yatırım yapamaz.",
            "Gayrimenkul kitle fonlaması yasağı Tebliğ'in özgün düzenlemesidir; 'Platform gayrimenkul kampanyası yürütebilir mi?' sorusuna cevap HEP HAYIR.",
          ],
        },
        questions: [
          {
            text: "III-35/A.2 sayılı Tebliğ uyarınca bir kitle fonlama platformunun hukuki yapısı nasıl olmalıdır?",
            options: [
              { id: "A", text: "Limited şirket veya anonim ortaklık" },
              { id: "B", text: "Anonim ortaklık ve ticaret unvanında 'Kitle Fonlama Platformu' ibaresi bulunmalı, SPK listesinde yer almalıdır." },
              { id: "C", text: "Kollektif şirket" },
              { id: "D", text: "Hukuki yapı sınırı yoktur." },
            ],
            correct: "B",
            explanation:
              "Tebliğ uyarınca kitle fonlama platformu yalnızca anonim ortaklık şeklinde kurulabilir, ticaret unvanında 'Kitle Fonlama Platformu' ibaresi bulunmalı ve SPK tarafından tutulan listede yer almalıdır. Listeye alınma için asgari özsermaye, ortak nitelikleri ve yatırım komitesi oluşturma şartları sağlanmalıdır.",
          },
          {
            text: "Kitle fonlaması platformunun yatırım komitesi en az kaç üyeden oluşmalıdır?",
            options: [
              { id: "A", text: "1 üye" },
              { id: "B", text: "2 üye" },
              { id: "C", text: "3 üye" },
              { id: "D", text: "5 üye" },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca platform yönetim kurulu tarafından oluşturulan yatırım komitesi en az 3 üyeden oluşmalıdır. Üyelerin sermaye piyasaları veya girişim sermayesinde tecrübeli olması zorunludur. Tüm kampanyalar yayımlanmadan önce yatırım komitesinin onayından geçer.",
          },
          {
            text: "Kitle fonlaması kampanyası başarılı sayılması için hedeflenen tutarın asgari ne kadarının toplanmış olması gerekir?",
            options: [
              { id: "A", text: "%50" },
              { id: "B", text: "%75" },
              { id: "C", text: "%90" },
              { id: "D", text: "%100" },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca kampanya süresi sonunda hedef tutarın en az %90'ı toplanmamışsa kampanya başarısız sayılır ve toplanan tüm tutarlar yatırımcılara iade edilir. Bu kural, projenin yetersiz fonla başlamasını önleyen 'all-or-nothing' (hep ya da hiç) yaklaşımının Türkiye uygulamasıdır.",
          },
          {
            text: "Aşağıdakilerden hangisi kitle fonlama platformlarının YAPAMAYACAĞI faaliyetlerdendir?",
            options: [
              { id: "A", text: "Paya dayalı kitle fonlaması" },
              { id: "B", text: "Borçlanmaya dayalı kitle fonlaması" },
              { id: "C", text: "Gayrimenkul ve gayrimenkule dayalı hakların alım-satımı kapsamında kitle fonlaması" },
              { id: "D", text: "Girişim şirketlerine yönelik kampanya yürütme" },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca platformlar gayrimenkul ve gayrimenkule dayalı hakların alım satımı ile gayrimenkul projelerinin finansmanı kapsamında kitle fonlaması yapamaz. Bu yasak, gayrimenkul finansmanının ayrı düzenlemelere tabi olmasından (GYO, gayrimenkul sertifikası) kaynaklanır. Platformlar yalnızca girişim şirketleri için paya/borçlanmaya dayalı kampanyalar yürütebilir.",
          },
          {
            text: "Türkiye'de yerleşik kişilere yönelik kitle fonlaması faaliyeti ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yurt dışı platformlar Türkiye'ye yönelik kitle fonlaması yapabilir." },
              { id: "B", text: "Yalnızca SPK listesindeki Türk platformları aracılığıyla yapılabilir; yurt dışı platformlar Türkiye'ye yönelik faaliyet gösteremez." },
              { id: "C", text: "Bireyler doğrudan birbiriyle anlaşarak kitle fonlaması yapabilir." },
              { id: "D", text: "Kitle fonlaması Türkiye'de tamamen yasaktır." },
            ],
            correct: "B",
            explanation:
              "Tebliğ uyarınca Türkiye'de yerleşik kişilere yönelik kitle fonlaması faaliyeti yalnızca SPK listesindeki Türk platformları aracılığıyla yapılabilir. Yurt dışında yerleşik platformların Türkiye'deki yatırımcılara yönelik faaliyet göstermesi yasaktır; bu kural yatırımcı korumasını ve yargı yetkisini güvence altına alır.",
          },
        ],
      },
      // ───────────── Ders 6: Uzaktan Kimlik Tespiti ve Elektronik Sözleşme ─────────────
      {
        id: "m1005-l6",
        title: "Uzaktan Kimlik Tespiti ve Elektronik Sözleşme (III-42.1)",
        duration: "8 dk",
        summary: {
          title: "Uzaktan Kimlik Tespiti ve Elektronik Sözleşme",
          intro:
            "III-42.1 sayılı Tebliğ, aracı kurumlar ve portföy yönetim şirketlerinin müşterileriyle fiziksel ortam gerektirmeksizin elektronik kanallar aracılığıyla sözleşme ilişkisi kurmasını düzenler. Kimlik tespiti video görüşme veya dijital onay yoluyla yapılabilir; ancak yükümlülükler ve güvenlik standartları bakımından katı koşullar öngörülür.",
          sections: [
            {
              heading: "Uzaktan Kimlik Tespiti Yöntemleri",
              icon: "shield",
              items: [
                { strong: "Video Görüşme Yöntemi:", text: "Müşteriyle canlı video bağlantısı kurularak kimlik belgesi görüntülenir ve kayıt altına alınır; gerçek zamanlı etkileşim zorunludur." },
                { strong: "Dijital Onay Yöntemi:", text: "E-devlet üzerinden nitelikli elektronik imza veya mobil imza kullanılarak kimlik doğrulaması yapılır." },
                { strong: "Kayıt Yükümlülüğü:", text: "Kimlik tespitine ilişkin tüm ses ve görüntü kayıtları en az 5 yıl süreyle saklanmak zorundadır." },
              ],
            },
            {
              heading: "Elektronik Sözleşme İlkeleri",
              icon: "shield",
              items: [
                { strong: "Çerçeve Sözleşme:", text: "Yatırım hizmetlerine ilişkin çerçeve sözleşme elektronik ortamda kurulabilir; müşteriye kalıcı veri saklayıcısıyla iletilmesi zorunludur." },
                { strong: "İptal Hakkı:", text: "Müşteri, cayma hakkına sahiptir; ancak cayma süresi ve koşulları tebliğde belirlenir." },
                { strong: "Kapsam Dışı İşlemler:", text: "Nitelikli yatırımcılar dışındaki müşterilere yönelik bazı karmaşık ürün sözleşmeleri uzaktan kurulamaz." },
              ],
            },
          ],
          tip: "III-42.1 = aracı kurumlar ve PYŞ'lerin uzaktan müşteri edinimi için temel tebliğ. Video görüşmede canlı bağlantı zorunlu, kayıt 5 yıl saklanır. Dijital onay için e-devlet/nitelikli e-imza şart. Çerçeve sözleşme elektronik kurulabilir ama kalıcı veri saklayıcıyla müşteriye iletilmeli.",
          kavramlar: [
            { terim: "Uzaktan Kimlik Tespiti", tanim: "Müşteriyle fiziksel ortamda karşılaşmaksızın video görüşme veya dijital onay yoluyla kimliğinin doğrulanması." },
            { terim: "Video Görüşme Yöntemi", tanim: "Canlı video bağlantısı ile müşteri kimlik belgesi görüntülenerek kayıt altına alınan kimlik tespit yöntemi." },
            { terim: "Nitelikli Elektronik İmza", tanim: "E-devlet altyapısı veya akredite kuruluş tarafından düzenlenen, yasal olarak el yazılı imzayla eşdeğer elektronik imza." },
            { terim: "Kalıcı Veri Saklayıcısı", tanim: "Müşteriye iletilen bilgilerin değiştirilemez biçimde saklandığı ve erişilebildiği ortam; e-posta, müşteri portalı gibi." },
            { terim: "Çerçeve Sözleşme", tanim: "Yatırım hizmetlerine ilişkin genel koşulları düzenleyen ve hizmetin sunumuna temel teşkil eden ana sözleşme." },
            { terim: "Mobil İmza", tanim: "SIM kart tabanlı nitelikli elektronik imza aracı; uzaktan kimlik tespitinde e-imzayla eşdeğer kullanım hakkına sahip." },
            { terim: "5 Yıl Saklama", tanim: "Uzaktan kimlik tespit kayıtlarının (ses, görüntü, belgeler) tebliğ gereği asgari 5 yıl süreyle muhafaza edilmesi zorunluluğu." },
          ],
          dikkatlar: [
            "Video görüşmede kayıt zorunludur ve en az 5 yıl saklanmalıdır — 'canlı bağlantı yeterlidir, kayıt gerekmez' ifadesi yanlıştır.",
            "Dijital onay için e-devlet entegrasyonu veya nitelikli e-imza/mobil imza gerekir; sıradan SMS ile kimlik tespiti yapılamaz.",
            "Çerçeve sözleşme elektronik ortamda kurulabilir; ancak müşteriye kalıcı veri saklayıcısıyla iletilmesi şarttır.",
            "Tebliğ yalnızca aracı kurumlar ve portföy yönetim şirketlerini kapsar; bankaların kendi mevzuatı (BDDK) ayrıdır.",
            "Uzaktan kimlik tespiti sonrası müşteri hesabı açılabilir; ancak işlem limitleri fiziksel doğrulama yapılana kadar kısıtlı tutulabilir.",
          ],
        },
        questions: [
          {
            text: "III-42.1 sayılı Tebliğ kapsamında uzaktan kimlik tespitinde hangi yöntem kullanılamaz?",
            options: [
              { id: "A", text: "Canlı video görüşmesi" },
              { id: "B", text: "E-devlet üzerinden nitelikli elektronik imza" },
              { id: "C", text: "Müşteriye gönderilen SMS kodu" },
              { id: "D", text: "Mobil imza" },
            ],
            correct: "C",
            explanation: "SMS kodu nitelikli elektronik imza veya video görüşme yerine geçemez. Tebliğ kapsamındaki geçerli yöntemler video görüşme, nitelikli e-imza ve mobil imzadır.",
          },
          {
            text: "Uzaktan kimlik tespitine ilişkin ses ve görüntü kayıtları en az kaç yıl saklanmalıdır?",
            options: [
              { id: "A", text: "2 yıl" },
              { id: "B", text: "3 yıl" },
              { id: "C", text: "5 yıl" },
              { id: "D", text: "10 yıl" },
            ],
            correct: "C",
            explanation: "III-42.1 Tebliği uyarınca uzaktan kimlik tespitine ilişkin ses ve görüntü kayıtları en az 5 yıl süreyle saklanmak zorundadır.",
          },
          {
            text: "III-42.1 Tebliği hangi kuruluşları kapsamaktadır?",
            options: [
              { id: "A", text: "Yalnızca aracı kurumlar" },
              { id: "B", text: "Aracı kurumlar ve portföy yönetim şirketleri" },
              { id: "C", text: "Tüm finansal kuruluşlar" },
              { id: "D", text: "Yalnızca portföy yönetim şirketleri" },
            ],
            correct: "B",
            explanation: "III-42.1 Tebliği aracı kurumlar ve portföy yönetim şirketleri tarafından kullanılacak uzaktan kimlik tespiti yöntemlerini ve elektronik sözleşme ilişkisinin kurulmasını düzenler.",
          },
          {
            text: "Elektronik ortamda kurulan çerçeve sözleşmeyle ilgili aşağıdakilerden hangisi doğrudur?",
            options: [
              { id: "A", text: "Müşteriye yalnızca fiziksel posta yoluyla iletilmelidir." },
              { id: "B", text: "Müşteriye kalıcı veri saklayıcısıyla iletilmesi zorunludur." },
              { id: "C", text: "Sözlü onay yeterlidir, yazılı iletim gerekmez." },
              { id: "D", text: "Yalnızca nitelikli yatırımcılarla elektronik sözleşme kurulabilir." },
            ],
            correct: "B",
            explanation: "Elektronik ortamda kurulan çerçeve sözleşme müşteriye kalıcı veri saklayıcısı (e-posta, portal) aracılığıyla iletilmek zorundadır; bu iletim müşterinin sözleşmeye erişimini güvence altına alır.",
          },
          {
            text: "Video görüşme yöntemiyle uzaktan kimlik tespitinde aşağıdakilerden hangisi zorunludur?",
            options: [
              { id: "A", text: "Müşterinin şubeye gelerek ek onay vermesi" },
              { id: "B", text: "Görüşmenin canlı ve eş zamanlı olması ve kayıt altına alınması" },
              { id: "C", text: "Görüşmenin yalnızca mesai saatleri içinde yapılması" },
              { id: "D", text: "Müşterinin iki ayrı kimlik belgesi sunması" },
            ],
            correct: "B",
            explanation: "Video görüşme yöntemiyle kimlik tespitinde görüşmenin gerçek zamanlı (canlı) olması ve tüm ses/görüntü kayıtlarının tutulması zorunludur.",
          },
          {
            text: "Aşağıdakilerden hangisi uzaktan kimlik tespiti kapsamında dijital onay yöntemi için geçerli bir araçtır?",
            options: [
              { id: "A", text: "Banka kartı PIN kodu" },
              { id: "B", text: "E-posta onayı" },
              { id: "C", text: "Nitelikli elektronik imza" },
              { id: "D", text: "Sosyal medya hesabı doğrulaması" },
            ],
            correct: "C",
            explanation: "Nitelikli elektronik imza, yasal olarak el yazılı imzayla eşdeğer kabul edilir ve III-42.1 kapsamında dijital onay yöntemi olarak kullanılabilir.",
          },
          {
            text: "III-42.1 Tebliği kapsamında uzaktan kimlik tespiti yapılmasına rağmen hangi durum söz konusu olabilir?",
            options: [
              { id: "A", text: "Müşteri hesabı hiçbir koşulda açılamaz." },
              { id: "B", text: "İşlem limitleri fiziksel doğrulama tamamlanana kadar kısıtlı tutulabilir." },
              { id: "C", text: "Müşteri tüm yatırım ürünlerine sınırsız erişim sağlar." },
              { id: "D", text: "Sözleşme geçersiz sayılır." },
            ],
            correct: "B",
            explanation: "Uzaktan kimlik tespiti yapılmış olsa dahi kuruluşlar risk yönetimi çerçevesinde fiziksel doğrulama tamamlanana kadar müşteri işlem limitlerini kısıtlı tutabilir.",
          },
        ],
      },
    ],
  },
];