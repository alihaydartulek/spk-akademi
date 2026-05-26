/* ─────────────────────────────────────────────────────────────────────────────
 * Finansal Piyasalar (1006)
 *
 * Kaynak: SPL 1006 Çalışma Notu, 31 Aralık 2025 (252 sayfa)
 * Sınavlar: SPL Düzey 2, Düzey 3 ve Türev Araçlar
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1003/1004/1005 modüllerindeki konularla çakışma yoktur. 1006 piyasaların
 * operasyonel işleyişine (BIST pazarları, emir tipleri, seans saatleri, takas)
 * odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1006 } from "./mevzuat-1006";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005, ...mevzuat1006
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1006: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1006 FİNANSAL PİYASALAR
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1006",
    title: "Modül · Finansal Piyasalar (1006)",
    lessons: [
      // ──────────── Ders 1: Borsa İstanbul'un Hukuki Yapısı ────────────
      {
        id: "m1006-l1",
        title: "Borsa İstanbul A.Ş. Hukuki Yapısı ve Yönetimi",
        duration: "9 dk",
        summary: {
          title: "Borsa İstanbul A.Ş. Hukuki Yapısı",
          intro:
            "Borsa İstanbul A.Ş. (BİAŞ); SPKn'na göre kurulmuş, sermaye piyasası araçları ile kıymetli madenlerin alım-satımının organize, şeffaf ve etkin biçimde gerçekleştirildiği piyasaları işleten anonim ortaklıktır. 30/12/2012 tarihinde 6362 sayılı SPKn'nun 65. maddesi uyarınca kurulmuştur. Borsa, sermaye piyasalarının üç temel fonksiyonu olan likidite sağlama, fiyat oluşturma ve öz düzenleyici (SRO) görevlerini yürütür.",
          sections: [
            {
              heading: "Borsanın Tanımı ve Hukuki Çerçevesi",
              icon: "shield",
              items: [
                {
                  strong: "Borsanın Tanımı:",
                  text: "Borsa, sermaye piyasası araçları, döviz, kıymetli madenler ve kıymetli taşlar gibi varlıkların organize, açık, sürekli ve şeffaf bir piyasada alım satımı için kurulmuş anonim ortaklıktır.",
                },
                {
                  strong: "Üç Temel Yönetmelik:",
                  text: "Borsalar ve Piyasa İşleticilerinin Kuruluş Yönetmeliği (genel çerçeve), BİAŞ Borsacılık Faaliyetlerine İlişkin Esaslar Yönetmeliği (operasyonel kurallar) ve BİAŞ Kıymetli Madenler Yönetmeliği (kıymetli maden işlemleri).",
                },
                {
                  strong: "Hukuki Statüsü:",
                  text: "BİAŞ özel hukuk tüzel kişisidir; sermayesinin %48'i Türkiye Varlık Fonu (TVF), kalan kısmı diğer ortaklara aittir.",
                },
                {
                  strong: "Genel Kurul ve YK:",
                  text: "Yönetim kurulu en az 7 üyeden oluşur, üyelerin çoğunluğu sermaye piyasası alanında deneyimli olmalıdır; SPK ön onayı zorunludur.",
                },
                {
                  strong: "Komiteler:",
                  text: "Yönetim Kurulu Komiteleri arasında Denetim Komitesi, Riskin Erken Saptanması Komitesi, Kotasyon Komitesi, Uyuşmazlık Komitesi ve Disiplin Komitesi yer alır.",
                },
              ],
            },
            {
              heading: "Üyelik, Kotasyon ve Denetim",
              icon: "trend",
              items: [
                {
                  strong: "Borsa Üyeliği:",
                  text: "Borsada işlem yapma yetkisine sahip olan kuruluşlardır; aracı kurumlar, bankalar ve geniş yetkili yatırım kuruluşları üye olabilir.",
                },
                {
                  strong: "Kotasyon:",
                  text: "Sermaye piyasası araçlarının borsada işlem görmek üzere kabul edilmesidir; her piyasa için ayrı kotasyon kriterleri vardır (özsermaye, halka açıklık oranı, faaliyet süresi).",
                },
                {
                  strong: "Kottan Çıkarma:",
                  text: "İhraçcının yükümlülüklerini yerine getirmemesi, faaliyetlerinin durması, mali yapısının bozulması gibi hallerde Kotasyon Komitesi kararıyla menkul kıymet kottan çıkarılır.",
                },
                {
                  strong: "İşlemin Geçici Durdurulması:",
                  text: "Olağan dışı fiyat hareketleri, gecikmiş özel durum açıklaması veya piyasa düzenini bozucu davranışlar nedeniyle BİAŞ tarafından geçici olarak işlem durdurulabilir.",
                },
                {
                  strong: "Denetim Yetkisi:",
                  text: "Borsa, üyelerinin işlem ve faaliyetlerini denetleme yetkisine sahiptir; SPK ile koordineli çalışır, ihlal tespit ettiğinde SPK'ya bildirir.",
                },
              ],
            },
          ],
          tip: "Borsa = Anonim Ortaklık + SRO niteliği; SPK denetimine tabidir ama kendi kurallarını koyabilir. TVF'nin %48 payı sınavın klasik soru kalıbıdır. Üç piyasa ana yönetmeliği ezberlenmesi gereken yapı taşıdır.",
          kavramlar: [
            { terim: "Borsa İstanbul (BİAŞ)", tanim: "Türkiye'nin tek organize menkul kıymet borsası; anonim ortaklık yapısında olup kendi düzenleyici gücüne (SRO) sahip, SPK denetimine tabi kuruluş." },
            { terim: "Öz Düzenleyici Kuruluş (SRO)", tanim: "Kendi üyelerine yönelik kural ve standartlar koyabilen, iç disiplin mekanizması bulunan borsalar ve meslek birlikleri gibi kuruluşlar." },
            { terim: "Türkiye Varlık Fonu (TVF)", tanim: "Borsa İstanbul'un %48 pay sahibi olan kamu yatırım fonu; BİAŞ'ın en büyük hissedarı." },
            { terim: "Piyasa Bölümlendirmesi", tanim: "BİAŞ bünyesindeki Pay Piyasası, Borçlanma Araçları Piyasası ve VİOP'un her birini ayrı yönetmelikle düzenleyen yapısal ayrım." },
            { terim: "Borsa Yönetim Kurulu", tanim: "BİAŞ'ın tepe yönetim organı; borsa kurallarını belirler, piyasa işleyişini denetler ve SPK'ya karşı sorumludur." },
            { terim: "Borsa Kotasyon", tanim: "Menkul kıymetlerin BİAŞ'ta işlem görebilmesi için belirli finansal ve yönetim şartlarını sağlaması zorunluluğu." },
            { terim: "Piyasa Mekanizması", tanim: "BİAŞ'ta sürekli müzayede veya tek fiyat yöntemiyle alış-satış emirlerinin eşleştirildiği elektronik alım-satım sistemi." },
          ],
          dikkatlar: [
            "BİAŞ anonim ortaklıktır ve öz düzenleyici kuruluş (SRO) niteliği taşır; kendi kurallarını koyabilir ancak SPK denetimine tabidir.",
            "TVF BİAŞ'ın %48 pay sahibidir; bu oran sınavda '%50 devlet payı' veya '%35 TVF' gibi yanıltıcı seçeneklerle sunulabilir.",
            "BİAŞ üç ana piyasayı işletir: Pay Piyasası, Borçlanma Araçları Piyasası ve VİOP; her birinin ayrı yönetmeliği vardır.",
            "Borsa kotasyonu ile borsa kaydı farklı kavramlardır; kotasyonsuz menkul kıymetler de borsa kaydına alınabilir.",
            "BİAŞ'ın kendi kurallarını çiğneyen üyelerine disiplin cezası verme yetkisi vardır; bu SRO niteliğinin doğal sonucudur.",
          ],
        },
        questions: [
          {
            text: "Borsa İstanbul A.Ş.'nin hukuki niteliği ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Kamu tüzel kişiliğine sahip bir kurumdur." },
              { id: "B", text: "Özel hukuk tüzel kişisi anonim ortaklıktır; sermayesinin %48'i Türkiye Varlık Fonu'na aittir." },
              { id: "C", text: "Hazine ve Maliye Bakanlığı'na bağlı bir genel müdürlüktür." },
              { id: "D", text: "Sermaye Piyasası Kurulu'nun bir alt organıdır." },
            ],
            correct: "B",
            explanation:
              "Borsa İstanbul A.Ş. özel hukuk tüzel kişisidir, anonim ortaklık şeklinde kurulmuştur. Sermayesinin %48'i Türkiye Varlık Fonu'na (TVF), kalan kısmı diğer ortaklara aittir. SPK denetimine tabidir ancak özerk yapıda öz düzenleyici (SRO) niteliğindedir.",
          },
          {
            text: "BİAŞ'ın yönetim kurulu en az kaç üyeden oluşmalıdır?",
            options: [
              { id: "A", text: "5 üye" },
              { id: "B", text: "7 üye" },
              { id: "C", text: "9 üye" },
              { id: "D", text: "11 üye" },
            ],
            correct: "B",
            explanation:
              "BİAŞ yönetim kurulu en az 7 üyeden oluşur. Üyelerin çoğunluğunun sermaye piyasası alanında en az 5 yıllık deneyime sahip olması ve atamaların SPK ön onayına tabi olması zorunludur. Bu yapı borsanın profesyonel yönetimi açısından kritiktir.",
          },
          {
            text: "Aşağıdakilerden hangisi BİAŞ'ın yönetim kurulu komiteleri arasında yer ALMAZ?",
            options: [
              { id: "A", text: "Denetim Komitesi" },
              { id: "B", text: "Kotasyon Komitesi" },
              { id: "C", text: "Disiplin Komitesi" },
              { id: "D", text: "Vergi Yönetimi Komitesi" },
            ],
            correct: "D",
            explanation:
              "BİAŞ Yönetim Kurulu Komiteleri arasında Denetim Komitesi, Riskin Erken Saptanması Komitesi, Kotasyon Komitesi, Uyuşmazlık Komitesi ve Disiplin Komitesi yer alır. Vergi yönetimi BİAŞ'ın bir komite konusu değildir; vergi işleri ihraçcıların kendi sorumluluğundadır.",
          },
          {
            text: "Bir sermaye piyasası aracının borsada işlem görmek üzere kabul edilmesi sürecine ne ad verilir?",
            options: [
              { id: "A", text: "İhraç" },
              { id: "B", text: "Kotasyon" },
              { id: "C", text: "Tedavül" },
              { id: "D", text: "Halka arz" },
            ],
            correct: "B",
            explanation:
              "Kotasyon, sermaye piyasası araçlarının borsada işlem görmek üzere kabul edilmesi sürecidir. Her piyasa için farklı kotasyon kriterleri (özsermaye büyüklüğü, halka açıklık oranı, faaliyet süresi vb.) vardır. Kotasyon kararı BİAŞ Kotasyon Komitesi tarafından verilir.",
          },
          {
            text: "BİAŞ'ın bir sermaye piyasası aracının işlemlerini geçici olarak durdurma yetkisi hangi durumda kullanılır?",
            options: [
              { id: "A", text: "İhraçcının kâr açıklaması yapması" },
              { id: "B", text: "Olağan dışı fiyat hareketleri, gecikmiş özel durum açıklaması veya piyasa düzenini bozucu davranışlar tespit edildiğinde" },
              { id: "C", text: "İhraçcının vergi beyannamesi vermemesi" },
              { id: "D", text: "İhraçcının ortak sayısının azalması" },
            ],
            correct: "B",
            explanation:
              "BİAŞ; olağan dışı fiyat veya hacim hareketleri, gecikmiş veya yetersiz kamuyu aydınlatma açıklamaları, piyasa düzenini bozucu davranışlar veya yatırımcı çıkarlarını tehdit eden durumlarda işlem geçici olarak durdurma yetkisine sahiptir. Bu yetki, bilgi asimetrisini ve manipülasyonu engellemek için kullanılır.",
          },
        ],
      },
      // ──────────── Ders 2: BİAŞ Pay Piyasası ────────────
      {
        id: "m1006-l2",
        title: "BİAŞ Pay Piyasası — Pazarlar, Emir Tipleri ve Seanslar",
        duration: "10 dk",
        summary: {
          title: "BİAŞ Pay Piyasası",
          intro:
            "BİAŞ Pay Piyasası, Türkiye'nin en büyük ve likit ikincil piyasasıdır. Pazar yapılanması Yıldız Pazar, Ana Pazar, Alt Pazar, Yakın İzleme Pazarı (YİP), Piyasa Öncesi İşlem Platformu (PÖİP), Yapılandırılmış Ürünler ve Fon Pazarı (YÜFP), Girişim Sermayesi Pazarı (GSP) ve Emtia Pazarı'ndan oluşur. İşlemler sürekli müzayede sistemi ile yürütülür ve emir öncelik kuralları kesindir.",
          sections: [
            {
              heading: "Pazar Yapısı ve Sınıflandırma Kriterleri",
              icon: "shield",
              items: [
                {
                  strong: "Yıldız Pazar:",
                  text: "Fiili dolaşımdaki paylarının değeri (FDPD) yüksek, likit paylar; en kapsamlı işlem ve şeffaflık esasları uygulanır.",
                },
                {
                  strong: "Ana Pazar:",
                  text: "Orta büyüklükteki ihraçcı paylarının işlem gördüğü pazar; Yıldız ve Alt Pazar arasında geçiş bölgesidir.",
                },
                {
                  strong: "Alt Pazar:",
                  text: "Daha küçük FDPD ve likiditeye sahip paylar burada işlem görür; FDPD 450 milyon TL üzerinde olup temettü getirisi %10'dan büyük olanlar Ana Pazar'a geçer.",
                },
                {
                  strong: "YİP (Yakın İzleme Pazarı):",
                  text: "Mali zafiyeti olan, faaliyetinde sorun bulunan ihraçcıların paylarının özel gözetim altında işlem gördüğü pazardır.",
                },
                {
                  strong: "Diğer Pazarlar:",
                  text: "PÖİP (halka açılmamış şirket payları için), YÜFP (yatırım fonu payları, BYF, varant, sertifika), GSP (girişim sermayesi yatırım ortaklıkları payları), EP (emtia sertifikaları).",
                },
              ],
            },
            {
              heading: "Emir Tipleri ve Seans İşleyişi",
              icon: "trend",
              items: [
                {
                  strong: "Limit Emir:",
                  text: "Belirli bir fiyat üzerinden alım-satım emridir; o fiyattan veya daha iyisinden işlem gerçekleştirilebilir, kalanı emir defterinde bekler.",
                },
                {
                  strong: "Piyasa Emri:",
                  text: "Fiyat belirtilmeden, en uygun karşı emirden başlayarak işlem gerçekleştirir; gerçekleştirilemeyen kısmı iptal olur.",
                },
                {
                  strong: "Açılış ve Kapanış Seansları:",
                  text: "Açılış seansı (tek fiyat yöntemiyle açılış fiyatı belirleme), sürekli müzayede (gün boyu emir eşleşmesi) ve kapanış seansı (kapanış fiyatı belirleme) olarak üç bölümden oluşur.",
                },
                {
                  strong: "Fiyat-Zaman Önceliği:",
                  text: "Aynı fiyatlı emirler arasında ilk giren önce eşleşir (FIFO); fiyat önceliği zaman önceliğinin üstündedir — alımda yüksek fiyat, satımda düşük fiyat öncelik kazanır.",
                },
                {
                  strong: "Devre Kesici (Circuit Breaker):",
                  text: "Fiyat günlük belirlenen üst/alt limitleri aşarsa veya endeks belirli oranda hareket ederse işlem geçici durdurulur (EBDKS — Endekse Bağlı Devre Kesici Sistemi).",
                },
              ],
            },
          ],
          tip: "Pazar sınıflandırması FDPD bazlı: Yıldız > Ana > Alt. 450 ve 750 milyon TL eşikleri sınavın klasik soru kalıbıdır. Emir önceliklerinde 'fiyat > zaman' kuralı kesindir — aynı fiyatta zaman önceliği geçer.",
          kavramlar: [
            { terim: "Yıldız Pazar", tanim: "BİAŞ Pay Piyasasında FDPD'si 750 milyon TL ve üzeri olan büyük şirketlerin işlem gördüğü en üst pazar." },
            { terim: "Ana Pazar", tanim: "FDPD'si 450-750 milyon TL arasındaki orta büyüklükteki şirketlerin işlem gördüğü pazar." },
            { terim: "Alt Pazar", tanim: "FDPD'si 450 milyon TL'nin altında olan küçük şirketlerin işlem gördüğü pazar; BİAŞ'ta en az likiditeye sahip pazar." },
            { terim: "Fiyat Önceliği", tanim: "Emir eşleştirmesinde en yüksek alış fiyatının ve en düşük satış fiyatının öncelikle gerçekleştirilmesi kuralı." },
            { terim: "Zaman Önceliği", tanim: "Aynı fiyattaki emirlerde daha önce girilmiş emrin önce gerçekleştirilmesi ilkesi." },
            { terim: "Sürekli Müzayede", tanim: "Emirlerin sürekli olarak sıraya alınıp eşleşme koşulu sağlandığında anında gerçekleştirildiği borsa işlem yöntemi." },
            { terim: "Tek Fiyat Yöntemi", tanim: "Belirli bir zaman diliminde biriken emirlerin tamamını tek bir denge fiyatıyla eşleştiren borsa işlem yöntemi; alt pazar hisselerinde kullanılır." },
          ],
          dikkatlar: [
            "Pazar sıralaması: Yıldız (750M+ TL FDPD) > Ana (450-750M TL) > Alt (<450M TL) — rakamlar sınavda yer değiştirilerek sorulabilir.",
            "Emir önceliği: önce fiyat, aynı fiyatta zaman; 'miktar önceliği' veya 'müşteri önceliği' gibi seçenekler yanıltıcıdır.",
            "Sürekli müzayede yönteminde emirler anlık eşleşirken, tek fiyat yönteminde belirli saatlerde toplama yapılır — alt pazar hisseleri genellikle tek fiyat yöntemiyle işlem görür.",
            "450 ve 750 milyon TL eşikleri FDPD (Fiili Dolaşımdaki Pay Değeri) bazındadır; 'piyasa değeri' değil FDPD kullanılmaktadır.",
            "BİAŞ'ta emir türleri: limit emir (fiyat belirlenir), piyasa emri (en iyi fiyat), şartlı emir — her birinin özellikleri sınavda farklı formatlarda sorulabilir.",
          ],
        },
        questions: [
          {
            text: "BİAŞ Pay Piyasası'nda Yıldız Pazar, Ana Pazar ve Alt Pazar arasındaki sınıflandırmada kullanılan temel kriter nedir?",
            options: [
              { id: "A", text: "İhraçcının yaşı" },
              { id: "B", text: "Fiili dolaşımdaki payların değeri (FDPD) ve likidite" },
              { id: "C", text: "İhraçcının sektörü" },
              { id: "D", text: "Yabancı ortaklık oranı" },
            ],
            correct: "B",
            explanation:
              "Pazar sınıflandırmasında temel kriter fiili dolaşımdaki payların değeri (FDPD) ve likiditedir. Yıldız Pazar yüksek FDPD ve likiditeye sahip paylar için, Alt Pazar ise daha küçük ölçekli ihraçcılar için kullanılır. Ana Pazar bu ikisi arasında bir geçiş bölgesidir.",
          },
          {
            text: "Alt Pazar'da yer alan paylardan hangileri Ana Pazar'a alınır?",
            options: [
              { id: "A", text: "FDPD 100 milyon TL üzerinde olan tüm paylar" },
              { id: "B", text: "FDPD 450 milyon TL üzerinde ve temettü getirisi %10'dan büyük olanlar veya FDPD 750 milyon TL üzerinde ve likiditesi 0,2'den küçük olanlar" },
              { id: "C", text: "Yalnızca yabancı ortaklı paylar" },
              { id: "D", text: "Geçen yıl kâr açıklayan tüm paylar" },
            ],
            correct: "B",
            explanation:
              "Alt Pazar'dan Ana Pazar'a geçiş kriterleri: (i) FDPD 450 milyon TL'nin üstünde ve ek kriter olarak temettü getirisi %10'dan büyük olanlar, (ii) FDPD 750 milyon TL'nin üstünde ve likiditesi 0,2'den küçük olanlar. Bu kriterler diğer kriterlere bakılmaksızın geçişi sağlar.",
          },
          {
            text: "BİAŞ Pay Piyasası'nda emirlerin eşleştirilmesinde uygulanan öncelik kuralı aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Yalnızca zaman önceliği geçerlidir." },
              { id: "B", text: "Yalnızca fiyat önceliği geçerlidir." },
              { id: "C", text: "Fiyat önceliği üstündür; aynı fiyat seviyesindeki emirler arasında zaman önceliği uygulanır." },
              { id: "D", text: "Emir büyüklüğü öncelik belirler." },
            ],
            correct: "C",
            explanation:
              "BİAŞ'da emir eşleştirme kuralı 'fiyat-zaman önceliği' esasına dayanır. Önce fiyat önceliği uygulanır: alımda yüksek fiyatlı emirler, satımda düşük fiyatlı emirler önce eşleşir. Aynı fiyat seviyesinde birden fazla emir varsa, ilk giren ilk çıkar (FIFO) kuralı işler.",
          },
          {
            text: "Aşağıdakilerden hangisi BİAŞ Pay Piyasası seans yapısında yer ALMAZ?",
            options: [
              { id: "A", text: "Açılış seansı (tek fiyat yöntemiyle açılış fiyatı belirleme)" },
              { id: "B", text: "Sürekli müzayede (gün boyu emir eşleşmesi)" },
              { id: "C", text: "Kapanış seansı (kapanış fiyatı belirleme)" },
              { id: "D", text: "Açık artırma seansı (her hisse için tek tek müzayede)" },
            ],
            correct: "D",
            explanation:
              "BİAŞ Pay Piyasası seans yapısı üç bölümden oluşur: açılış seansı, sürekli müzayede ve kapanış seansı. Tek tek hisse müzayedesi yapılmaz; tüm hisseler aynı seans yapısı içinde sürekli olarak işlem görür. Açılış ve kapanış seanslarında 'tek fiyat' yöntemi, sürekli müzayedede ise 'emir-emir eşleşme' yöntemi kullanılır.",
          },
          {
            text: "EBDKS (Endekse Bağlı Devre Kesici Sistemi) hangi amaçla uygulanır?",
            options: [
              { id: "A", text: "İhraçcı şirketlere vergi avantajı sağlamak için" },
              { id: "B", text: "Endeks belirli bir oranda hareket ettiğinde işlemleri geçici olarak durdurarak ani fiyat hareketlerinin yarattığı paniği yatıştırmak için" },
              { id: "C", text: "Yabancı yatırımcı işlemlerini sınırlamak için" },
              { id: "D", text: "İhraçcıların kâr açıklamalarını standartlaştırmak için" },
            ],
            correct: "B",
            explanation:
              "EBDKS (Endekse Bağlı Devre Kesici Sistemi), endeksin belirli bir oranda yukarı veya aşağı hareket etmesi halinde tüm işlemleri geçici olarak durdurma mekanizmasıdır. Amacı, ani ve şiddetli fiyat hareketlerinin yarattığı panik satışları/alımları yatıştırmak ve yatırımcılara rasyonel karar vermek için zaman kazandırmaktır. Uluslararası uygulamada 'circuit breaker' olarak bilinir.",
          },
        ],
      },
      // ──────────── Ders 3: Borçlanma Araçları Piyasası + Repo Pazarları ────────────
      {
        id: "m1006-l3",
        title: "Borçlanma Araçları Piyasası ve Repo Pazarları",
        duration: "9 dk",
        summary: {
          title: "Borçlanma Araçları Piyasası",
          intro:
            "BİAŞ Borçlanma Araçları Piyasası; devlet iç borçlanma senetleri, özel sektör tahvil ve bonoları, kira sertifikaları, repo işlemleri ve uluslararası tahvillerin işlem gördüğü organize piyasadır. Piyasa, çok pazarlı yapıda işler: Kesin Alım Satım Pazarı, Repo-Ters Repo Pazarları (4 alt türü), Uluslararası Tahvil Pazarı, Nitelikli Yatırımcıya İhraç Pazarı, Gözaltı Pazarı ve Taahhütlü İşlemler Pazarı.",
          sections: [
            {
              heading: "Kesin Alım Satım Pazarı ve Piyasa Yapıcılığı",
              icon: "shield",
              items: [
                {
                  strong: "Kesin Alım Satım Pazarı:",
                  text: "Borçlanma araçlarının kesin (final) alım-satımının yapıldığı temel pazar; gün içinde ve T+1, T+2 gibi forward valörlerde işlem yapılabilir.",
                },
                {
                  strong: "İşlem Yapabilecek Kuruluşlar:",
                  text: "Bankalar, geniş yetkili aracı kurumlar ve yatırım fonu/yatırım ortaklığı temsilcileri; her üyenin Takasbank nezdinde teminat hesabı bulunmalıdır.",
                },
                {
                  strong: "Piyasa Yapıcılığı:",
                  text: "Hazine ihale sürecinde belirlenen piyasa yapıcı bankalar, ikincil piyasada sürekli alış-satış kotasyonu vermekle yükümlüdür; karşılığında imtiyazlı haklara sahip olur (rekabetçi olmayan teklif vb.).",
                },
                {
                  strong: "ISIN Kodu:",
                  text: "Her menkul kıymet için uluslararası standart 12 karakterli ISIN kodu (International Securities Identification Number) atanır; ilk iki karakter ülke kodudur (TR Türkiye için).",
                },
                {
                  strong: "Takas:",
                  text: "Borçlanma araçları işlemlerinin takası Takasbank tarafından T+0 (aynı gün) veya T+1 olarak yapılır; netleştirme prensibi uygulanır.",
                },
              ],
            },
            {
              heading: "Repo Pazarları ve Diğer Pazarlar",
              icon: "trend",
              items: [
                {
                  strong: "Repo-Ters Repo Pazarı:",
                  text: "Geri alım vaadi ile satış (repo) ve geri satım vaadi ile alım (ters repo) işlemlerinin yapıldığı pazar; klasik repo'da menkul kıymet teminat olarak gösterilir.",
                },
                {
                  strong: "Menkul Kıymet Tercihli Repo Pazarı:",
                  text: "Belirli bir menkul kıymeti elde etmek isteyen tarafların kullandığı repo pazarıdır; repoya konu menkul kıymet baştan belirlenir, ikincil piyasada karşılaşılan likidite sıkıntılarını giderir.",
                },
                {
                  strong: "Pay Senedi Repo Pazarı:",
                  text: "Pay senetleri üzerinden yapılan repo işlemleri için ayrı bir pazardır; hisse senedi finansmanı ve açığa satış için kullanılır.",
                },
                {
                  strong: "Gözaltı Pazarı:",
                  text: "Mali zafiyet, ödeme güçlüğü veya yasal süreçler nedeniyle özel gözetim altına alınan borçlanma araçlarının işlem gördüğü pazardır.",
                },
                {
                  strong: "Nitelikli Yatırımcıya İhraç Pazarı:",
                  text: "Yalnızca nitelikli yatırımcılara satılan borçlanma araçlarının ikincil piyasa işlemleri burada yapılır; halka arz edilmemiş araçlar bu pazarda işlem görür.",
                },
              ],
            },
          ],
          tip: "Borçlanma Araçları Piyasası'nda 7 farklı pazar var: Kesin Alım Satım, 4 Repo Pazarı (klasik, tercihli, pay, taahhütlü), Uluslararası Tahvil, Nitelikli Yatırımcı, Gözaltı. Repo türleri arasındaki ayrım sınavın klasik tuzağıdır — özellikle 'menkul kıymet tercihli repo' tek bir kıymeti hedefler.",
          kavramlar: [
            { terim: "Kesin Alım Satım Pazarı", tanim: "BİAŞ Borçlanma Araçları Piyasasında DİBS ve diğer sabit getirili menkul kıymetlerin spot (kesin) alım-satımının yapıldığı pazar." },
            { terim: "Repo İşlemi", tanim: "Menkul kıymetin belirli bir fiyatla satılıp önceden belirlenen geri alım fiyatı ve tarihiyle geri alınmasını taahhüt eden kısa vadeli finansman işlemi." },
            { terim: "Klasik Repo Pazarı", tanim: "Standart geri alım taahhüdü içeren, en yaygın kullanılan repo türünün gerçekleştirildiği pazar." },
            { terim: "Menkul Kıymet Tercihli Repo", tanim: "Tarafların belirli bir menkul kıymeti teminat olarak kullanmayı kararlaştırdığı; teminat konulan kıymeti önceden belirleyen repo türü." },
            { terim: "Nitelikli Yatırımcı Pazarı", tanim: "Yalnızca nitelikli yatırımcıların katılabildiği, özel borçlanma araçlarının işlem gördüğü BİAŞ alt pazarı." },
            { terim: "Gözaltı Pazarı", tanim: "Yatırımcıların bilgilendirilmesi amacıyla finansal durumu zayıflamış veya mevzuatı ihlal eden şirketlerin menkul kıymetlerinin işlem gördüğü pazar." },
            { terim: "Uluslararası Tahvil Pazarı", tanim: "BİAŞ bünyesinde yabancı para biriminde ihraç edilmiş tahvillerin işlem gördüğü pazar bölümü." },
          ],
          dikkatlar: [
            "BAP'ta 7 farklı pazar bölümü vardır; 'kaç tür repo pazarı var?' sorusunda cevap 4'tür (klasik, tercihli, pay, taahhütlü).",
            "Menkul kıymet tercihli repo belirli bir menkul kıymeti teminat olarak belirler; 'hangi kıymeti' konusundaki spesifiklik onu diğer repo türlerinden ayırır.",
            "Gözaltı Pazarı'nda işlem görmek yatırımcı için risk sinyali olarak kabul edilir; borsadan ihraç anlamına gelmez, sadece özel platform olarak izlenir.",
            "Nitelikli Yatırımcı Pazarı'nda işlem yapabilmek için Kurul'un belirlediği servet/deneyim eşiklerini karşılamak gerekir.",
            "Kesin Alım Satım ile repo arasındaki temel fark: kesin alım-satımda geri alım taahhüdü yoktur; repoda ise geri alım zorunludur.",
          ],
        },
        questions: [
          {
            text: "BİAŞ Borçlanma Araçları Piyasası'nda piyasa yapıcı bankaların ikincil piyasadaki temel yükümlülüğü nedir?",
            options: [
              { id: "A", text: "Yalnızca alım emri vermek" },
              { id: "B", text: "Sürekli alış-satış kotasyonu vererek piyasaya likidite sağlamak" },
              { id: "C", text: "Menkul kıymetleri yalnızca yabancı yatırımcılara satmak" },
              { id: "D", text: "Hazine adına ihale düzenlemek" },
            ],
            correct: "B",
            explanation:
              "Piyasa yapıcı bankalar, Hazine ihale sürecinde seçilen ve ikincil piyasada belirli menkul kıymetler için sürekli alış-satış kotasyonu vermekle yükümlü olan bankalardır. Bu yükümlülük karşılığında rekabetçi olmayan teklif hakkı, ihalede ek alım hakkı gibi imtiyazlara sahip olurlar. Amacı borçlanma araçları piyasasının likiditesini artırmaktır.",
          },
          {
            text: "Bir menkul kıymetin uluslararası standart kimlik kodu (ISIN) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "8 karakterden oluşur ve ilk karakter ihraç tarihini gösterir." },
              { id: "B", text: "12 karakterden oluşur ve ilk iki karakter ülke kodunu gösterir (Türkiye için TR)." },
              { id: "C", text: "16 karakterden oluşur ve ilk dört karakter ihraçcının vergi numarasını içerir." },
              { id: "D", text: "Standart bir formatı yoktur, her borsa kendisi belirler." },
            ],
            correct: "B",
            explanation:
              "ISIN (International Securities Identification Number); 12 karakterden oluşan uluslararası standart menkul kıymet tanımlama kodudur. İlk iki karakter ISO ülke kodunu gösterir (Türkiye için TR), sonraki 9 karakter ihraçcı ve menkul kıymet bilgilerini içerir, son karakter kontrol basamağıdır.",
          },
          {
            text: "Repo işlemi için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Geri alım vaadi olmayan kesin satış işlemidir." },
              { id: "B", text: "Geri alım vaadi ile menkul kıymet satışıdır; satıcı önceden anlaşılan tarihte ve fiyattan kıymeti geri alır." },
              { id: "C", text: "Yalnızca pay senetleri için kullanılır." },
              { id: "D", text: "Vade sonu olmayan süresiz işlemdir." },
            ],
            correct: "B",
            explanation:
              "Repo (Repurchase Agreement); satıcının menkul kıymeti satıp önceden anlaşılan tarih ve fiyattan geri almayı taahhüt ettiği bir geri alım vaadi içeren satış işlemidir. Esasen kısa vadeli teminatlı borçlanma niteliğindedir; satıcı fon kullanan, alıcı fon veren taraftır. Ters repo ise alıcı tarafının perspektifinden aynı işlemdir.",
          },
          {
            text: "Menkul Kıymet Tercihli Repo Pazarı'nın diğer repo pazarlarından temel farkı nedir?",
            options: [
              { id: "A", text: "Yalnızca yabancı para cinsinden işlem yapılır." },
              { id: "B", text: "Repoya konu olacak spesifik menkul kıymet işlem öncesi belirlenir; bu sayede likidite sıkıntısı çekilen kıymetlerin ödünç alınmasına imkan sağlar." },
              { id: "C", text: "Yalnızca pay senetleri repo'ya konu olabilir." },
              { id: "D", text: "İşlem yapabilecek üye sayısı sınırlıdır." },
            ],
            correct: "B",
            explanation:
              "Menkul Kıymet Tercihli Repo Pazarı'nda repoya konu olacak spesifik menkul kıymet işlem öncesi tarafların seçimine bırakılır. Bu özellik, piyasada likidite sıkıntısı yaşanan veya açığa satış için ödünç alınmak istenen belirli bir menkul kıymetin elde edilmesini kolaylaştırır. Klasik Repo-Ters Repo Pazarı'nda ise repoya konu menkul kıymet havuzdan otomatik seçilir.",
          },
          {
            text: "Aşağıdakilerden hangisi BİAŞ Borçlanma Araçları Piyasası'nın bir alt pazarı DEĞİLDİR?",
            options: [
              { id: "A", text: "Kesin Alım Satım Pazarı" },
              { id: "B", text: "Repo-Ters Repo Pazarı" },
              { id: "C", text: "Yıldız Pazar" },
              { id: "D", text: "Gözaltı Pazarı" },
            ],
            correct: "C",
            explanation:
              "Yıldız Pazar, BİAŞ Pay Piyasası'nın bir alt pazarıdır; borçlanma araçları piyasasının değil. BİAŞ Borçlanma Araçları Piyasası alt pazarları: Kesin Alım Satım Pazarı, Repo-Ters Repo Pazarı, Menkul Kıymet Tercihli Repo Pazarı, Pay Senedi Repo Pazarı, Uluslararası Tahvil Pazarı, Nitelikli Yatırımcıya İhraç Pazarı, Gözaltı Pazarı ve Taahhütlü İşlemler Pazarı'dır.",
          },
        ],
      },
      // ──────────── Ders 4: Vadeli İşlem ve Opsiyon Piyasası (VİOP) ────────────
      {
        id: "m1006-l4",
        title: "Vadeli İşlem ve Opsiyon Piyasası (VİOP)",
        duration: "10 dk",
        summary: {
          title: "Vadeli İşlem ve Opsiyon Piyasası (VİOP)",
          intro:
            "BİAŞ VİOP; vadeli işlem ve opsiyon sözleşmelerinin organize biçimde işlem gördüğü piyasadır. Pay, pay endeksi (BIST 30, BIST 100), döviz (USD/TL, EUR/TL), kıymetli madenler (altın), emtia (bakır, elektrik) ve DİBS dayanak varlıkları üzerine vadeli işlem ve opsiyon sözleşmeleri ihraç edilir. Takasbank merkezi karşı taraf (CCP) olarak risk üstlenir.",
          sections: [
            {
              heading: "Sözleşme Türleri ve İşlem Esasları",
              icon: "shield",
              items: [
                {
                  strong: "Pay Vadeli İşlem Sözleşmeleri:",
                  text: "Belirli paylar üzerine yazılan sözleşmeler; Grup 1 (en likit paylar) ve Grup 2 olarak ayrılır, sözleşme büyüklüğü 100 paya karşılık gelir.",
                },
                {
                  strong: "Endeks Vadeli İşlem Sözleşmeleri:",
                  text: "BIST 30 endeksi en yaygın kullanılan dayanak varlıktır; sözleşme değeri endeks değeri x 100 TL olarak hesaplanır, nakit uzlaşı zorunludur.",
                },
                {
                  strong: "Döviz Vadeli İşlem Sözleşmeleri:",
                  text: "USD/TL ve EUR/TL sözleşmeleri yaygındır; fiziki teslimatlı veya nakit uzlaşılı olabilir, fiziki teslimatlı sözleşmelerde özel teslimat takvimi uygulanır.",
                },
                {
                  strong: "Opsiyon Sözleşmeleri:",
                  text: "Pay, endeks ve döviz dayanaklı alım/satım opsiyonları işlem görür; piyasa yapıcılar belirlenmiş maksimum spread içinde sürekli kotasyon vermek zorundadır.",
                },
                {
                  strong: "Akşam Seansı:",
                  text: "Bazı sözleşmeler için (örn. Dolar/Ton Bakır, USD/TL) gündüz seansının ardından akşam seansı düzenlenir; uluslararası piyasalarla eş zamanlı işlem imkanı sağlar.",
                },
              ],
            },
            {
              heading: "Teminat ve Takas Sistemi",
              icon: "trend",
              items: [
                {
                  strong: "Merkezi Karşı Taraf (CCP):",
                  text: "Takasbank, VİOP işlemlerinde merkezi karşı taraf olarak işlev görür; her işlemin alıcı tarafı için satıcı, satıcı tarafı için alıcı konumuna geçerek karşı taraf riskini ortadan kaldırır.",
                },
                {
                  strong: "Başlangıç Teminatı:",
                  text: "Pozisyon açılırken yatırılan teminat; sözleşme türüne ve dayanak varlığa göre Takasbank tarafından belirlenir, fiyat dalgalanmalarına göre güncellenir.",
                },
                {
                  strong: "Sürdürme Teminatı:",
                  text: "Teminatın hiçbir zaman düşmemesi gereken alt sınırdır; bu seviyenin altına inildiğinde teminat tamamlama çağrısı yapılır.",
                },
                {
                  strong: "Günlük Uzlaşma:",
                  text: "Pozisyonların kâr/zararı her işlem günü sonunda hesaplanıp teminat hesabına yansıtılır (mark-to-market); bu sayede kayıplar birikmez.",
                },
                {
                  strong: "Vade Sonu Uzlaşma:",
                  text: "Sözleşme vadesinde fiziki teslimat veya nakit uzlaşı yapılır; nakit uzlaşılı sözleşmelerde uzlaşı fiyatı dayanak varlığın belirlenen referans fiyatına göre hesaplanır.",
                },
              ],
            },
          ],
          tip: "VİOP'ta CCP olarak Takasbank'ın rolü kritiktir — karşı taraf riskini sıfırlar. Pay sözleşmesi büyüklüğü = 100 pay, endeks sözleşme değeri = endeks x 100 TL kalıp formülleridir. Akşam seansı uluslararası piyasalarla senkronizasyon için kullanılır — özellikle bakır ve döviz işlemlerinde.",
          kavramlar: [
            { terim: "VİOP", tanim: "BİAŞ bünyesindeki Vadeli İşlem ve Opsiyon Piyasası; futures ve opsiyon sözleşmelerinin işlem gördüğü organize türev borsası." },
            { terim: "Takasbank (CCP)", tanim: "VİOP işlemlerinde merkezi karşı taraf olarak her iki tarafın karşı tarafı olan ve temerrüt riskini üstlenen takas kuruluşu." },
            { terim: "Teminat (Marjin)", tanim: "VİOP'ta pozisyon açarken yatırılan ve piyasa değeri düştükçe ek yatırım gerektiren güvence tutarı; başlangıç ve sürdürme olmak üzere iki türü vardır." },
            { terim: "Fiziki Teslimat", tanim: "Bazı emtia ve döviz futures sözleşmelerinde vade sonunda dayanak varlığın fiilen teslim edilmesi; pay ve endeks sözleşmeleri nakit uzlaşmalıdır." },
            { terim: "Nakit Uzlaşma", tanim: "Vade sonunda fiziki teslimat yerine pozisyon kâr/zararının nakden ödenmesi; pay ve endeks futures sözleşmelerinde kullanılan yöntem." },
            { terim: "VİOP Akşam Seansı", tanim: "Gündüz seansından sonra döviz ve emtia sözleşmelerinde açılan ek işlem seansı; uluslararası piyasalarla senkronizasyon sağlar." },
            { terim: "Pay Sözleşme Büyüklüğü", tanim: "VİOP'ta bir pay futures sözleşmesinin 100 paya karşılık geldiği standart kontrat büyüklüğü; endeks sözleşmesinde değer = endeks x 100 TL." },
          ],
          dikkatlar: [
            "Takasbank VİOP'ta CCP (merkezi karşı taraf) olarak görev yapar; bu karşı taraf temerrüt riskini ortadan kaldırır — OTC türevlerde böyle bir mekanizma yoktur.",
            "Pay futures sözleşmesi 100 paya, endeks futures sözleşmesi ise endeks değeri x 100 TL'ye eşittir — sözleşme değeri hesaplama soruları sınavda çıkar.",
            "Teminat tutarı yeterliliği günlük olarak kontrol edilir; yetersiz kaldığında tamamlama çağrısı (margin call) gelir.",
            "VİOP akşam seansı gündüz seansından farklı ürünleri kapsar: döviz ve emtia sözleşmeleri — pay sözleşmeleri akşam seansında işlem GÖRMEZ.",
            "Pay ve endeks sözleşmeleri nakit uzlaşmalıdır; fiziki hisse teslimi yapılmaz — 'vade sonunda hisse teslimi' ifadesi yanlıştır.",
          ],
        },
        questions: [
          {
            text: "VİOP'ta Takasbank'ın merkezi karşı taraf (CCP) olarak işlev görmesinin temel sonucu nedir?",
            options: [
              { id: "A", text: "İşlem ücretleri düşer." },
              { id: "B", text: "Karşı taraf riski ortadan kalkar; her işlemde Takasbank alıcının karşısındaki satıcı, satıcının karşısındaki alıcı konumuna geçer." },
              { id: "C", text: "Yatırımcılar teminat yatırmak zorunda kalmaz." },
              { id: "D", text: "Vade öncesi pozisyon kapatılamaz." },
            ],
            correct: "B",
            explanation:
              "Merkezi karşı taraf (CCP — Central Counterparty) sisteminde Takasbank, VİOP'ta gerçekleştirilen her işlemde karşı taraf olarak yer alır: alıcı için satıcı, satıcı için alıcı pozisyonuna geçer. Bu sayede tarafların birbirine olan risk maruziyeti ortadan kalkar; tek karşı taraf Takasbank olur. Bu yapı türev piyasalarda sistemik riski azaltan kritik bir unsurdur.",
          },
          {
            text: "VİOP'ta pay vadeli işlem sözleşmelerinin standart sözleşme büyüklüğü kaç paya karşılık gelir?",
            options: [
              { id: "A", text: "1 pay" },
              { id: "B", text: "10 pay" },
              { id: "C", text: "100 pay" },
              { id: "D", text: "1.000 pay" },
            ],
            correct: "C",
            explanation:
              "VİOP'ta pay vadeli işlem sözleşmelerinin standart sözleşme büyüklüğü 100 paya karşılık gelir. Yani bir adet pay vadeli işlem sözleşmesi açıldığında, dayanak olarak 100 adet payın taahhüdü doğmuş olur. Endeks sözleşmelerinde ise sözleşme değeri = endeks değeri × 100 TL olarak hesaplanır.",
          },
          {
            text: "VİOP'ta günlük uzlaşma (mark-to-market) sisteminin amacı nedir?",
            options: [
              { id: "A", text: "Yatırımcıların komisyon ödemelerini düşürmek" },
              { id: "B", text: "Pozisyonların kâr/zararını her işlem günü sonunda hesaplayıp teminat hesabına yansıtarak kayıpların birikmesini önlemek" },
              { id: "C", text: "Vade sonunda fiziki teslimat zorunluluğu getirmek" },
              { id: "D", text: "İşlem hacmini sınırlamak" },
            ],
            correct: "B",
            explanation:
              "Günlük uzlaşma (mark-to-market) sistemi; tüm açık pozisyonların kâr veya zararını her işlem günü sonunda hesaplayıp teminat hesabına yansıtan mekanizmadır. Bu sayede kayıplar birikmez ve takas merkezi (Takasbank) için sistemik risk önlenir. Yatırımcının teminatı sürdürme teminatı altına düşerse teminat tamamlama çağrısı (margin call) gönderilir.",
          },
          {
            text: "VİOP'ta endekse (örn. BIST 30) dayalı vadeli işlem sözleşmelerinin uzlaşı yöntemi aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Yalnızca fiziki teslimat" },
              { id: "B", text: "Yatırımcı seçimine bırakılır" },
              { id: "C", text: "Yalnızca nakit uzlaşı; endeks fiziksel olarak teslim edilemediği için zorunludur" },
              { id: "D", text: "Vade sonunda otomatik olarak yenilenir" },
            ],
            correct: "C",
            explanation:
              "Endekse dayalı vadeli işlem sözleşmelerinde uzlaşı yöntemi zorunlu olarak nakit uzlaşıdır. Bunun nedeni mantıksal bir gerekliliktir: bir endeks (örn. BIST 30) fiziksel bir varlık değildir, dolayısıyla teslim edilemez. Vade sonunda son uzlaşı fiyatı (endeksin belirlenen referans değerine göre) ile pozisyonun açılış fiyatı arasındaki fark, teminat hesabına nakit olarak yansıtılır.",
          },
          {
            text: "VİOP'ta 'akşam seansı' (after-hours) uygulamasının temel amacı nedir?",
            options: [
              { id: "A", text: "Borsanın çalışma süresini uzatmak" },
              { id: "B", text: "Uluslararası piyasalarla eş zamanlı işlem imkanı sağlamak; özellikle döviz ve emtia gibi global olarak işlem gören sözleşmeler için kritik öneme sahiptir." },
              { id: "C", text: "Yalnızca yabancı yatırımcılara avantaj sağlamak" },
              { id: "D", text: "Komisyon gelirlerini artırmak" },
            ],
            correct: "B",
            explanation:
              "VİOP akşam seansı; özellikle USD/TL, EUR/TL döviz sözleşmeleri ve Dolar/Ton Bakır gibi global olarak işlem gören emtia sözleşmeleri için uluslararası piyasalarla eş zamanlı işlem imkanı sağlar. Yurt dışındaki gelişmelere (FED kararları, ABD veri açıklamaları vb.) Türk yatırımcıların gündüz seansı kapanışından önce reaksiyon vermesini sağlayan kritik bir mekanizmadır.",
          },
        ],
      },
      // ──────────── Ders 5: TEFAS ve Diğer Piyasalar ────────────
      {
        id: "m1006-l5",
        title: "TEFAS, Para Piyasaları ve Takasbank Piyasaları",
        duration: "9 dk",
        summary: {
          title: "TEFAS, Para ve Takasbank Piyasaları",
          intro:
            "Türkiye Elektronik Fon Alım Satım Platformu (TEFAS); yatırım fonu katılma paylarının elektronik bir merkezi platformda alınıp satıldığı, Takasbank tarafından işletilen sistemdir. BİAŞ Para Piyasası, TCMB Piyasaları, Bankalararası Piyasalar ve Takasbank bünyesindeki Borsa Para Piyasaları ile Swap Piyasası, Türk finansal piyasa altyapısını tamamlayan operasyonel sistemlerdir.",
          sections: [
            {
              heading: "TEFAS — Elektronik Fon Platformu",
              icon: "shield",
              items: [
                {
                  strong: "Tanım ve İşlev:",
                  text: "TEFAS, yatırım fonu katılma paylarının fon kurucularından dağıtım kuruluşları aracılığıyla elektronik ortamda alınıp satıldığı merkezi platformdur; Takasbank tarafından işletilir.",
                },
                {
                  strong: "Üye Türleri:",
                  text: "Kurucu üyeler (fon kurucusu olan PYŞ'ler) ve dağıtıcı üyeler (TEFAS aracılığıyla fon satışı yapan yatırım kuruluşları) olmak üzere iki tür üye vardır.",
                },
                {
                  strong: "İşlem Görmeyen Fonlar:",
                  text: "Garantili ve anapara koruma amaçlı fonlar TEFAS'ta işlem göremez; özel fonlar ise yalnızca tahsis edildikleri kişilerce TEFAS dışında alınıp satılır.",
                },
                {
                  strong: "Zorunluluk İlkesi:",
                  text: "Bu istisnalar dışında TEFAS'a üye olacak tüm fonların katılma payı alım-satım işlemlerinin sadece TEFAS üzerinden yapılması zorunludur.",
                },
                {
                  strong: "Dağıtıcı Kuruluş Erişimi:",
                  text: "Bir yatırımcı, herhangi bir TEFAS dağıtıcı kuruluşu (örn. bankası) üzerinden tüm fon kurucularının fonlarını alıp satabilir; bu çapraz erişim TEFAS'ın temel avantajıdır.",
                },
              ],
            },
            {
              heading: "Para Piyasaları ve Takasbank Sistemleri",
              icon: "trend",
              items: [
                {
                  strong: "BİAŞ Para Piyasası:",
                  text: "Bankalararası kısa vadeli TL borçlanma işlemlerinin yapıldığı pazardır; gecelik ve haftalık vadelerde borçlanma/borç verme işlemleri yapılır.",
                },
                {
                  strong: "BİAŞ Swap Piyasası:",
                  text: "Para Swap Pazarı (TL-döviz) ve Kıymetli Madenler Swap Pazarı (TL-altın) olmak üzere iki alt pazarı vardır; tarafların belirli süre boyunca varlık değiştirmesi esasına dayanır.",
                },
                {
                  strong: "Takasbank Borsa Para Piyasası (BPP):",
                  text: "BIST üyeleri için kısa vadeli TL fonlama imkanı sağlayan piyasadır; teminata dayalı işler, tek karşı taraf Takasbank'tır.",
                },
                {
                  strong: "Takasbank Ödünç Pay Piyasası (ÖPP):",
                  text: "Pay senedi ödünç işlemlerinin yapıldığı merkezi piyasadır; açığa satış için ödünç alma ve takas yükümlülüğünün yerine getirilmesi amaçlarıyla kullanılır.",
                },
                {
                  strong: "Bireysel Emeklilik Fon Alım Satım Platformu:",
                  text: "BES fonlarının elektronik alım-satım altyapısıdır; emeklilik şirketleri ve fon kurucuları arasında otomatik takas sağlar.",
                },
              ],
            },
          ],
          tip: "TEFAS = fonların 'merkez bankası'; istisnaları (garantili ve anapara koruma fonları) sınavda mutlaka sorulur. Çapraz dağıtıcı erişimi TEFAS'ın temel avantajıdır — yatırımcı bir kuruluşta hesabı varsa tüm fonlara ulaşır. Takasbank dört piyasa işletir: Para, Ödünç Pay, BPP ve Swap takası.",
          kavramlar: [
            { terim: "TEFAS", tanim: "Türkiye Elektronik Fon Alım Satım Platformu; farklı aracı kuruluşlar aracılığıyla yatırımcılara tüm fonlara tek noktadan erişim imkanı sunan elektronik sistem." },
            { terim: "Çapraz Dağıtım", tanim: "TEFAS'ta bir aracı kuruluşta hesabı olan yatırımcının, başka PYŞ'lerin kurucusu olduğu fonlara da aynı hesaptan erişebilmesi." },
            { terim: "TEFAS İstisnası", tanim: "Garantili fonlar ve anapara korumalı fonlar TEFAS'ta zorunlu olarak işlem görmez; bu fonlar münhasıran kurucusu aracılığıyla satılabilir." },
            { terim: "Takasbank Para Piyasası", tanim: "Takasbank bünyesinde bankaların ve aracı kurumların kısa vadeli (gecelik dahil) nakit alışverişi yaptığı organize para piyasası." },
            { terim: "Ödünç Pay Piyasası", tanim: "Takasbank bünyesinde hisse senetlerinin geçici olarak ödünç alınıp verildiği; açığa satış için kullanılan organize piyasa." },
            { terim: "Borsa Para Piyasası (BPP)", tanim: "BİAŞ bünyesinde kısa vadeli borçlanma işlemlerinin gerçekleştirildiği piyasa; Takasbank takas işlevini üstlenir." },
            { terim: "Swap Takası", tanim: "Takasbank'ın faiz swapı ve döviz swapı gibi OTC türev işlemler için merkezi takas (CCP) hizmeti sunduğu faaliyet alanı." },
          ],
          dikkatlar: [
            "TEFAS'ta işlem görme zorunluluğu olan fonlar dışında, garantili fonlar ve anapara korumalı fonlar TEFAS'a dahil olmak zorunda değildir — bu istisna sınavda mutlaka sorulur.",
            "Çapraz dağıtım sayesinde yatırımcı tek bir kuruluştan tüm PYŞ'lerin fonlarına ulaşabilir; bu avantaj TEFAS'ın temel katma değeridir.",
            "Takasbank Para Piyasası kısa vadeli; Borsa Para Piyasası ise BİAŞ bünyesinde çalışır — iki ayrı piyasadır, karıştırılmamalı.",
            "Ödünç Pay Piyasası açığa satış işlemleri için zorunlu ön adımdır; ödünç sözleşmesi olmadan açığa satış yapılamaz.",
            "Takasbank'ın swap takası hizmeti merkezi takas anlamına gelir; OTC swapları için karşı taraf riskini azaltır.",
          ],
        },
        questions: [
          {
            text: "Türkiye Elektronik Fon Alım Satım Platformu (TEFAS) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Borsa İstanbul A.Ş. tarafından işletilen bir sistemdir." },
              { id: "B", text: "Yatırım fonu katılma paylarının elektronik bir merkezi platformda alınıp satıldığı, Takasbank tarafından işletilen sistemdir." },
              { id: "C", text: "Yalnızca yabancı yatırım fonları için kullanılır." },
              { id: "D", text: "Sermaye Piyasası Kurulu'nun bir biriminin altında çalışır." },
            ],
            correct: "B",
            explanation:
              "TEFAS; yatırım fonu katılma paylarının fon kurucularından dağıtım kuruluşları aracılığıyla elektronik ortamda alınıp satıldığı merkezi platformdur. Sistem Takasbank tarafından işletilir. Yatırımcılar herhangi bir dağıtıcı kuruluş (örn. bankası) üzerinden farklı kurucuların fonlarına erişebilir; bu çapraz erişim TEFAS'ın temel avantajıdır.",
          },
          {
            text: "Aşağıdaki yatırım fonu türlerinden hangisi TEFAS'ta işlem göremez?",
            options: [
              { id: "A", text: "Hisse senedi şemsiye fonuna bağlı fonlar" },
              { id: "B", text: "Borçlanma araçları şemsiye fonuna bağlı fonlar" },
              { id: "C", text: "Garantili ve anapara koruma amaçlı fonlar" },
              { id: "D", text: "Karma şemsiye fona bağlı fonlar" },
            ],
            correct: "C",
            explanation:
              "Garantili ve anapara koruma amaçlı fonlar TEFAS'ta işlem göremez. Bu fonların alım-satım işlemleri yalnızca kurucu PYŞ tarafından doğrudan gerçekleştirilir, çünkü bu fonların özel niteliği (garanti süresi, koruma şartları) merkezi platformdaki standart işlem akışına uymamaktadır. Diğer fon türleri TEFAS aracılığıyla işlem görmek zorundadır.",
          },
          {
            text: "TEFAS'ta üye türleri ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca fon kurucuları üye olabilir." },
              { id: "B", text: "Kurucu üyeler (fon kurucusu PYŞ'ler) ve dağıtıcı üyeler (fon satışı yapan yatırım kuruluşları) olmak üzere iki tür üye vardır." },
              { id: "C", text: "Bireysel yatırımcılar doğrudan TEFAS'a üye olarak işlem yapabilir." },
              { id: "D", text: "TEFAS üyelerinin sayısı SPK tarafından sınırlandırılmıştır." },
            ],
            correct: "B",
            explanation:
              "TEFAS'ta iki tür üye bulunur: (i) Kurucu üyeler — fon kurucusu olan PYŞ'lerdir, (ii) Dağıtıcı üyeler — TEFAS üzerinden müşterilerine fon satışı yapan yatırım kuruluşlarıdır. Bireysel yatırımcılar doğrudan TEFAS'a üye olamaz; dağıtıcı bir kuruluş aracılığıyla işlem yaparlar. Bu iki katmanlı yapı sistemin operasyonel temelidir.",
          },
          {
            text: "Takasbank Ödünç Pay Piyasası (ÖPP) hangi amaçla kullanılır?",
            options: [
              { id: "A", text: "Yalnızca yabancı yatırımcı işlemlerinde" },
              { id: "B", text: "Pay senedi ödünç işlemlerinin merkezi olarak yapılması; özellikle açığa satış için ödünç alma ve takas yükümlülüğünün yerine getirilmesi amaçlarıyla" },
              { id: "C", text: "Sadece halka arz işlemlerinde" },
              { id: "D", text: "Yatırım fonu katılma paylarının ödüncünde" },
            ],
            correct: "B",
            explanation:
              "Takasbank Ödünç Pay Piyasası (ÖPP), pay senedi ödünç alma-verme işlemlerinin organize biçimde yapıldığı merkezi piyasadır. ÖPP'nin temel kullanım amaçları: (i) açığa satış işlemi yapacak yatırımcıların gerekli payları ödünç alması, (ii) takas yükümlülüğünü yerine getiremeyecek üyelerin geçici pay teminat sağlaması, (iii) piyasa yapıcıların pozisyon yönetiminde esneklik kazanması.",
          },
          {
            text: "BİAŞ Swap Piyasası bünyesindeki pazarlar aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Yalnızca Para Swap Pazarı" },
              { id: "B", text: "Para Swap Pazarı (TL-döviz) ve Kıymetli Madenler Swap Pazarı (TL-altın)" },
              { id: "C", text: "Pay Swap Pazarı ve Tahvil Swap Pazarı" },
              { id: "D", text: "Yalnızca Faiz Swap Pazarı" },
            ],
            correct: "B",
            explanation:
              "BİAŞ Swap Piyasası iki alt pazardan oluşur: (i) Para Swap Pazarı — TL ile döviz (USD, EUR vb.) arasında belirli süre boyunca yapılan swap işlemleri için, (ii) Kıymetli Madenler Swap Pazarı — TL ile altın arasında yapılan swap işlemleri için. Tarafların belirli vade boyunca varlıklarını değiştirip vade sonunda iade etme esasına dayanır; bankaların likidite ve yabancı para yönetimi için kritiktir.",
          },
        ],
      },

      // ──────────── Ders 6: Tezgahüstü (OTC) Piyasalar ────────────
      {
        id: "m1006-l6",
        title: "Tezgahüstü (OTC) Piyasalar ve İşleyişi",
        duration: "8 dk",
        summary: {
          title: "Tezgahüstü (OTC) Piyasalar",
          intro:
            "Tezgahüstü piyasalar (Over-the-Counter — OTC), organize bir borsa bünyesinde değil, tarafların ikili anlaşmalar aracılığıyla doğrudan alım satım gerçekleştirdiği merkezi olmayan piyasalardır. Türkiye'de başta bankalar ve aracı kurumlar arasında yürütülen yabancı para, repo, tahvil ve türev araç işlemleri OTC piyasalarda gerçekleşir. OTC piyasalar esneklik ve özelleştirme imkânı sunmakla birlikte karşı taraf riski ve şeffaflık eksikliği gibi sorunlar barındırır.",
          sections: [
            {
              heading: "OTC Piyasanın Özellikleri ve Türleri",
              icon: "shield",
              items: [
                {
                  strong: "Tanım ve Temel Fark:",
                  text: "OTC piyasalarda sözleşme koşulları (miktar, vade, fiyat) tamamen taraflarca belirlenir; standartlaştırılmış borsalarda ise sözleşme şartları önceden sabitlenmiştir. Böylece işlemler daha esnek ama daha az şeffaftır.",
                },
                {
                  strong: "Yabancı Para (Döviz) OTC Piyasaları:",
                  text: "Türkiye'de bankalararası döviz alım satımı ve müşteri işlemlerinin büyük kısmı OTC kanalıyla yürütülür. TCMB döviz müdahalelerinin bir bölümü de bu piyasa üzerinden gerçekleşir.",
                },
                {
                  strong: "Tahvil ve Repo OTC Piyasaları:",
                  text: "Devlet iç borçlanma senetleri (DİBS) birincil piyasadan ihraç edildikten sonra ikincil piyasada ağırlıklı olarak OTC kanalıyla (elektronik platformlar dahil) el değiştirir; gecelik repo ve ters repo işlemleri de OTC niteliğindedir.",
                },
                {
                  strong: "Türev OTC Araçlar:",
                  text: "Forward (vadeli döviz alım-satım), faiz swap (IRS), döviz swap, egzotik opsiyonlar gibi birçok türev işlem organize borsada değil, taraflar arasında OTC yapılır. Avrupa'da EMIR, ABD'de Dodd-Frank bu işlemlere raporlama ve takas merkezi zorunluluğu getirmiştir.",
                },
                {
                  strong: "Karşı Taraf Riski:",
                  text: "Borsalarda merkezi karşı taraf (CCP) temerrüt riskini üstlenir; OTC'de ise taraflar birbirlerine doğrudan maruz kalır. Bu nedenle kredi değerliliği ve teminat anlaşmaları (CSA/ISDA) OTC işlemler için kritik öneme sahiptir.",
                },
                {
                  strong: "Yurt İçi OTC Platformları:",
                  text: "BIST bünyesindeki Borçlanma Araçları Piyasası, BİST Repo-Ters Repo Pazarı ve Elektronik Fon Platformu organize olmakla birlikte OTC benzeri ikili fiyatlama da kullanılmaktadır. Tamamen OTC olan işlemler ise TCMB'nin kotasyon sistemi ve bankalararası doğrudan müzakere yoluyla gerçekleşir.",
                },
              ],
            },
            {
              heading: "OTC Piyasaların Avantajları ve Riskleri",
              icon: "trend",
              items: [
                {
                  strong: "Esneklik:",
                  text: "Taraflar ihtiyaca özgü vade, tutar ve yapı tasarlayabilir; bu durum kurumsal yatırımcılar ve şirketler için finansal risk yönetimini kolaylaştırır.",
                },
                {
                  strong: "Likidite ve Fiyat Tespiti:",
                  text: "OTC piyasalar bazen organize borsalara kıyasla daha derin likidite sunabilir; ancak fiyatlar kamuoyuyla anlık paylaşılmadığından fiyat şeffaflığı sınırlıdır.",
                },
                {
                  strong: "Düzenleyici Gelişmeler:",
                  text: "2008 krizi sonrası G20 kararları doğrultusunda standartlaştırılabilir OTC türev sözleşmelerinin merkezi karşı taraf (CCP) aracılığıyla takası zorunlu hale getirilmiştir; bu süreç OTC ile organize piyasalar arasındaki sınırı kısmen bulanıklaştırmıştır.",
                },
              ],
            },
          ],
          tip: "Sınavda OTC ile organize piyasaların farkı, karşı taraf riski ve Türkiye'deki OTC araç türleri sıkça sorulur. Döviz, tahvil ve türev ayrımını netleştirin.",
          kavramlar: [
            { terim: "OTC (Tezgahüstü) Piyasa", tanim: "Merkezi bir borsa olmaksızın taraflarca ikili anlaşmayla gerçekleştirilen alım satım platformu." },
            { terim: "Karşı Taraf Riski (Counterparty Risk)", tanim: "OTC işlemlerde karşı tarafın yükümlülüğünü yerine getirememesi riski." },
            { terim: "Forward", tanim: "İleri vadede belirli bir varlığı önceden anlaşılan fiyat ve koşullarla alıp satmayı taahhüt eden OTC sözleşmesi." },
            { terim: "Faiz Swap (IRS)", tanim: "İki tarafın sabit ve değişken faiz ödemelerini belirli bir anapara üzerinden takas ettiği OTC türev aracı." },
            { terim: "ISDA Ana Sözleşmesi", tanim: "OTC türev işlemleri düzenleyen standart uluslararası çerçeve sözleşmesi; Türkiye'de bankalar arası kullanılır." },
            { terim: "Merkezi Karşı Taraf (CCP)", tanim: "Takasbanka benzer şekilde OTC işlemlerde karşı taraf riskini üstlenen merkezi takas kuruluşu." },
            { terim: "DİBS İkincil Piyasası", tanim: "Birincil piyasadan ihraç edilen devlet tahvillerinin OTC kanalıyla el değiştirdiği piyasa." },
          ],
          dikkatlar: [
            "OTC piyasalarda fiyatlar kamuya anlık olarak açıklanmaz; bu durum şeffaflık riskini artırır.",
            "Türkiye'de bankalararası döviz işlemlerinin büyük çoğunluğu OTC piyasada gerçekleşir ve TCMB müdahaleleri bu kanal üzerinden yürütülür.",
            "2008 sonrası düzenlemeler (EMIR, Dodd-Frank) standart OTC türev sözleşmelerini zorunlu merkezi takasa (CCP) yönlendirmiştir.",
            "OTC işlemlerde karşı tarafın ödeme gücünü yitirmesi riski (karşı taraf riski) organize borsalara göre çok daha yüksektir.",
            "Egzotik opsiyonlar ve özelleştirilmiş swap sözleşmeleri standartlaştırılamadığından daima OTC kalmaya devam eder.",
          ],
        },
        questions: [
          {
            text: "Tezgahüstü (OTC) piyasaların organize borsalardan temel farkı nedir?",
            options: [
              { id: "A", text: "OTC piyasalarda işlemler merkezi bir takas odası aracılığıyla gerçekleştirilir." },
              { id: "B", text: "OTC piyasalarda sözleşme koşulları standartlaştırılmıştır ve değiştirilemez." },
              { id: "C", text: "OTC piyasalarda taraflar ikili anlaşmayla sözleşme koşullarını serbestçe belirler; merkezi borsa yoktur." },
              { id: "D", text: "OTC piyasalar yalnızca hisse senedi alım satımına aracılık eder." },
            ],
            correct: "C",
            explanation:
              "OTC piyasaların özü, tarafların doğrudan birbirleriyle müzakere ederek sözleşme koşullarını (vade, miktar, fiyat) belirlemesidir. Organize borsalarda ise standartlaştırılmış sözleşmeler ve merkezi takas odası (CCP) bulunur.",
          },
          {
            text: "OTC piyasalarda karşı taraf riskinin yönetiminde kullanılan temel uluslararası standart sözleşme hangisidir?",
            options: [
              { id: "A", text: "ISDA Ana Sözleşmesi" },
              { id: "B", text: "BIST Temel Sözleşmesi" },
              { id: "C", text: "EMIR Standart Protokolü" },
              { id: "D", text: "Dodd-Frank Çerçeve Anlaşması" },
            ],
            correct: "A",
            explanation:
              "ISDA (International Swaps and Derivatives Association) Ana Sözleşmesi, OTC türev işlemlerinde taraflar arasındaki hak ve yükümlülükleri düzenleyen standart uluslararası çerçevedir. Türkiye'deki bankalar da bu sözleşmeyi yaygın olarak kullanır.",
          },
          {
            text: "Aşağıdakilerden hangisi OTC piyasalarda işlem gören bir araç değildir?",
            options: [
              { id: "A", text: "Faiz oranı swap (IRS)" },
              { id: "B", text: "Vadeli döviz (Forward) sözleşmesi" },
              { id: "C", text: "Borsa İstanbul'da işlem gören standart vadeli işlem (futures) sözleşmesi" },
              { id: "D", text: "Bankalararası gecelik repo" },
            ],
            correct: "C",
            explanation:
              "BIST'te (VİOP gibi) işlem gören standart vadeli işlem sözleşmeleri organize borsaya aittir; standartlaştırılmış fiyat, miktar ve vade içerir ve CCP üzerinden takas edilir. Forward, IRS ve bankalararası repo ise OTC niteliğindedir.",
          },
          {
            text: "2008 küresel finansal krizi sonrasında G20 kararlarıyla OTC türev piyasaları için getirilen temel düzenleyici yükümlülük nedir?",
            options: [
              { id: "A", text: "OTC türev işlemlerinin tamamen yasaklanması" },
              { id: "B", text: "Standartlaştırılabilir OTC türevlerin merkezi karşı taraf (CCP) aracılığıyla takasının zorunlu tutulması" },
              { id: "C", text: "Tüm OTC türevlerin borsaya taşınarak standartlaştırılması" },
              { id: "D", text: "OTC türevlere yalnızca merkez bankalarının aracılık etmesi" },
            ],
            correct: "B",
            explanation:
              "G20 Pittsburgh Zirvesi (2009) kararları ve ardından gelen EMIR (AB) ile Dodd-Frank (ABD) düzenlemeleri, standartlaştırılabilir OTC türev sözleşmelerini zorunlu merkezi takasa (CCP) yönlendirmiştir. Böylece karşı taraf riski azaltılmak istenmiştir.",
          },
          {
            text: "Türkiye'de bankalararası döviz işlemlerinin büyük bölümünün gerçekleştiği piyasa türü hangisidir?",
            options: [
              { id: "A", text: "Borsa İstanbul Pay Piyasası" },
              { id: "B", text: "Tezgahüstü (OTC) Döviz Piyasası" },
              { id: "C", text: "VİOP Döviz Vadeli İşlem Piyasası" },
              { id: "D", text: "Serbest Döviz Büroları" },
            ],
            correct: "B",
            explanation:
              "Türkiye'de bankalararası döviz alım satımının büyük kısmı OTC kanalıyla, yani bankalar arasında doğrudan elektronik platformlar ve telefon müzakeresi yoluyla gerçekleşir. TCMB döviz müdahaleleri de bu OTC döviz piyasasında uygulanır.",
          },
          {
            text: "Aşağıdakilerden hangisi OTC piyasaların avantajlarından biri değildir?",
            options: [
              { id: "A", text: "Sözleşme koşullarının taraflarca özelleştirilmesine imkân tanıması" },
              { id: "B", text: "Fiyatların anlık olarak kamuoyuyla paylaşılması" },
              { id: "C", text: "İhtiyaca özgü vade ve yapıların tasarlanabilmesi" },
              { id: "D", text: "Kurumsal yatırımcılara esnek risk yönetimi imkânı sunması" },
            ],
            correct: "B",
            explanation:
              "Fiyatların anlık kamuoyuyla paylaşılması OTC piyasaların özelliği değil, organize borsaların özelliğidir. OTC piyasalarda fiyatlar taraflar arasında belirlenir ve şeffaflık sınırlıdır; bu, şeffaflık eksikliği olarak OTC'nin dezavantajlarından biridir.",
          },
          {
            text: "Egzotik opsiyonların OTC piyasalarda kalmaya devam etmesinin temel nedeni nedir?",
            options: [
              { id: "A", text: "Yüksek işlem hacimlerinden kaynaklanan takas maliyetleri" },
              { id: "B", text: "Yasal düzenlemelerin egzotik opsiyonları borsaya taşımayı açıkça yasaklaması" },
              { id: "C", text: "Özelleştirilmiş yapıları nedeniyle standartlaştırılamamaları" },
              { id: "D", text: "Merkezi takas kurumlarının egzotik opsiyonları reddetmesi" },
            ],
            correct: "C",
            explanation:
              "Egzotik opsiyonlar (bariyer, Asya tipi, lookback vb.) ödeme yapısı, vade ve aktivasyon koşulları bakımından standartlaştırılamayan özelleştirilmiş araçlardır. Bu yüzden borsaya taşınmaları mümkün değildir ve OTC piyasada kalmaya devam ederler.",
          },
        ],
      },

      // ──────────── Ders 7: TCMB Piyasaları ve Bankalararası Para Piyasası ────────────
      {
        id: "m1006-l7",
        title: "TCMB Piyasaları ve Bankalararası Para Piyasası",
        duration: "8 dk",
        summary: {
          title: "TCMB Piyasaları ve Bankalararası Para Piyasası",
          intro:
            "Türkiye Cumhuriyet Merkez Bankası (TCMB), para politikasını hayata geçirirken çeşitli piyasaları araç olarak kullanır: Açık Piyasa İşlemleri (APİ), Döviz ve Efektif Piyasaları, Bankalararası Para Piyasası (BPP) ve TCMB İnterbank Piyasası bunların başında gelir. Bu piyasalar aracılığıyla TCMB kısa vadeli faiz oranlarını yönlendirir, TL likiditesini yönetir ve döviz kurunu etkiler.",
          sections: [
            {
              heading: "TCMB Açık Piyasa İşlemleri (APİ)",
              icon: "shield",
              items: [
                {
                  strong: "APİ Tanımı:",
                  text: "TCMB'nin para politikası amaçlarıyla DİBS (Devlet İç Borçlanma Senedi) alım-satımı, repo veya ters repo işlemleri yaparak piyasadaki TL likiditesini düzenlemesidir. Türkiye'de APİ esas olarak repo ve ters repo kanalıyla yürütülür.",
                },
                {
                  strong: "Repo İşlemi (Likidite Enjeksiyonu):",
                  text: "TCMB menkul kıymet teminata alarak bankacılık sektörüne TL aktarır; vade sonunda bankalar kıymetleri geri alır. Piyasada TL sıkışıklığı olduğunda TCMB repo açar ve faiz koridorunun alt sınırını (gecelik borç alma faizi) belirler.",
                },
                {
                  strong: "Ters Repo İşlemi (Likidite Çekme):",
                  text: "TCMB menkul kıymet satarak piyasadan TL çeker; aşırı likidite dönemlerinde kullanılır. Faiz koridorunun üst sınırı (gecelik borç verme faizi) bu işlem aracılığıyla şekillenir.",
                },
                {
                  strong: "Politika Faizi (Bir Haftalık Repo):",
                  text: "TCMB'nin temel para politikası aracı olan bir haftalık repo ihalesi; gecelik faizlerin çıpalı tutulduğu temel referans oranıdır. Para Politikası Kurulu (PPK) kararlarıyla belirlenir.",
                },
              ],
            },
            {
              heading: "TCMB Döviz ve Efektif Piyasaları",
              icon: "trend",
              items: [
                {
                  strong: "Döviz Alım-Satım İhaleleri:",
                  text: "TCMB döviz rezervini yönetmek ve kur oynaklığını azaltmak amacıyla belirlenmiş kurallara göre döviz alım veya satım ihalesi düzenler; bu ihaleler organize ihale yöntemiyle veya doğrudan işlem yoluyla yapılır.",
                },
                {
                  strong: "Efektif Piyasası:",
                  text: "TCMB'nin bankalara karşı döviz efektif (banknot) alım ve satımı yaptığı piyasadır; turizm yoğun dönemlerinde döviz banknotu talebini karşılamaya yönelik işlemler bu kanaldan yürütülür.",
                },
                {
                  strong: "Döviz Swap İşlemleri:",
                  text: "TCMB, TL likiditesi vermek veya döviz rezervini desteklemek amacıyla bankalara döviz karşılığı TL (veya tersi) swap imkânı tanır. Bu işlemler aynı zamanda kısa vadeli döviz arz-talep dengesini düzenler.",
                },
              ],
            },
            {
              heading: "Bankalararası Para Piyasası (BPP)",
              icon: "trend",
              items: [
                {
                  strong: "BPP'nin İşlevi:",
                  text: "Bankalar günlük likidite açıklarını veya fazlalarını kendi aralarında gecelik veya kısa vadeli borçlanma (TL) yoluyla giderir. Piyasa faizi (TLREF vb.) bu mekanizmayla oluşur.",
                },
                {
                  strong: "TLREF ve Referans Faiz:",
                  text: "Türkiye Lirası Gecelik Referans Faiz Oranı (TLREF), Borsa İstanbul Repo-Ters Repo Pazarı ile bankalararası işlemlerden türetilir; kredi ve türev sözleşmelerinde endeks faiz olarak yaygınlaşmaktadır.",
                },
                {
                  strong: "BIST Repo-Ters Repo Pazarı:",
                  text: "TCMB APİ'si dışındaki repo işlemleri BIST Borçlanma Araçları Piyasası bünyesindeki Repo-Ters Repo Pazarı'nda gerçekleşir ve hem bankalar hem aracı kurumlar bu piyasada işlem yapabilir.",
                },
              ],
            },
          ],
          tip: "TCMB faiz koridoru (alt-üst sınır), politika faizi (1 haftalık repo), TLREF referans faizi ve APİ mekanizması sınavda sıkça çıkar. Bu araçların birbirleriyle ilişkisini kavrayın.",
          kavramlar: [
            { terim: "Açık Piyasa İşlemleri (APİ)", tanim: "TCMB'nin piyasa likiditesini düzenlemek amacıyla DİBS ve repo/ters repo yoluyla TL alım-satımı yapması." },
            { terim: "Politika Faizi", tanim: "TCMB'nin Para Politikası Kurulu tarafından belirlenen ve referans alınan 1 haftalık repo faiz oranı." },
            { terim: "Faiz Koridoru", tanim: "TCMB'nin gecelik borç verme (üst sınır) ve borç alma (alt sınır) faizlerinin oluşturduğu bant; kısa vadeli piyasa faizleri bu koridorda gezinir." },
            { terim: "TLREF", tanim: "Türkiye Lirası Gecelik Referans Faiz Oranı; repo piyasası işlemlerinden hesaplanır ve kredi sözleşmelerinde endeks faiz olarak kullanılır." },
            { terim: "Bankalararası Para Piyasası (BPP)", tanim: "Bankaların kendi aralarında kısa vadeli TL borç alıp vererek günlük likidite dengesini sağladığı piyasa." },
            { terim: "Döviz Swap İşlemi (TCMB)", tanim: "TCMB'nin bankalara TL karşılığı döviz (veya tersi) verdiği, vade sonunda iade yapılan kısa vadeli döviz-TL değişim işlemi." },
            { terim: "Ters Repo (Likidite Çekme)", tanim: "TCMB'nin DİBS satışı yoluyla piyasadan TL çektiği APİ aracı; aşırı likidite koşullarında kullanılır." },
          ],
          dikkatlar: [
            "Politika faizi TCMB'nin 1 haftalık repo ihalesinin faiz oranıdır; gecelik borç alma/verme faizleriyle karıştırılmamalıdır.",
            "TCMB repo işlemi piyasaya TL enjekte eder (likidite artışı); ters repo ise piyasadan TL çeker (likidite azalışı).",
            "TLREF, BIST Repo-Ters Repo Pazarı verilerinden türetilir ve LIBOR'un yerini alan yerel referans faiz olarak gelişmektedir.",
            "TCMB Döviz ve Efektif Piyasaları ayrı mekanizmalardır: döviz ihaleleri rezerv yönetimine, efektif piyasası banknot talebine yöneliktir.",
            "Faiz koridoru uygulamasında üst sınır (borç verme faizi) ile alt sınır (borç alma faizi) arasındaki fark para politikasının öngörülebilirliğini etkiler.",
          ],
        },
        questions: [
          {
            text: "TCMB'nin temel para politikası aracı olarak kullandığı politika faizi hangi işleme karşılık gelir?",
            options: [
              { id: "A", text: "Gecelik borç verme faizi" },
              { id: "B", text: "Bir haftalık repo ihale faizi" },
              { id: "C", text: "Gecelik borç alma faizi" },
              { id: "D", text: "Üç aylık hazine bonosu faizi" },
            ],
            correct: "B",
            explanation:
              "TCMB'nin temel para politikası aracı olan politika faizi, Para Politikası Kurulu tarafından belirlenen 1 haftalık repo ihale faiz oranıdır. Gecelik faizler bu oranın etrafında seyretmekte, faiz koridoru ise alt ve üst sınırı belirlemektedir.",
          },
          {
            text: "TCMB APİ kapsamında piyasaya TL enjekte etmek amacıyla kullandığı araç hangisidir?",
            options: [
              { id: "A", text: "Ters Repo (DİBS satışı)" },
              { id: "B", text: "Repo (DİBS teminatlı borç verme)" },
              { id: "C", text: "Döviz satım ihalesi" },
              { id: "D", text: "Efektif döviz alımı" },
            ],
            correct: "B",
            explanation:
              "Repo işleminde TCMB, bankaların DİBS'lerini teminat olarak alıp piyasaya TL aktarır. Vade sonunda bankalar DİBS'lerini geri alarak borcu kapatır. Ters repoda ise DİBS satışıyla piyasadan TL çekilir.",
          },
          {
            text: "TLREF (Türkiye Lirası Gecelik Referans Faiz Oranı) hangi piyasadan türetilmektedir?",
            options: [
              { id: "A", text: "TCMB Açık Piyasa İşlemleri faiz oranı" },
              { id: "B", text: "BIST Repo-Ters Repo Pazarı işlemleri" },
              { id: "C", text: "Hazine ihaleleri ağırlıklı ortalama faizi" },
              { id: "D", text: "BIST Pay Piyasası temettü getirisi" },
            ],
            correct: "B",
            explanation:
              "TLREF, Borsa İstanbul Repo-Ters Repo Pazarı'ndaki gerçekleşmiş işlemlerden hesaplanan ağırlıklı ortalama gecelik faiz oranıdır. Türkiye'de LIBOR'un yerine geçen yerel referans faizi olarak kredi ve türev sözleşmelerinde giderek yaygınlaşmaktadır.",
          },
          {
            text: "TCMB faiz koridorunun üst sınırını belirleyen faiz türü hangisidir?",
            options: [
              { id: "A", text: "Bir haftalık repo faizi (politika faizi)" },
              { id: "B", text: "Gecelik borç alma faizi" },
              { id: "C", text: "Gecelik borç verme faizi" },
              { id: "D", text: "Zorunlu karşılık faizi" },
            ],
            correct: "C",
            explanation:
              "Faiz koridorunda üst sınır TCMB'nin bankalara gecelik borç verdiği faiz oranıdır; alt sınır ise TCMB'nin bankalardan gecelik borç aldığı faiz oranıdır. Politika faizi (1 haftalık repo) bu iki sınır arasında konumlanır.",
          },
          {
            text: "TCMB Döviz Swap İşleminin temel amacı nedir?",
            options: [
              { id: "A", text: "Bankaların uzun vadeli kredi maliyetlerini azaltmak" },
              { id: "B", text: "Kısa vadeli TL likiditesi sağlamak veya döviz rezervini desteklemek" },
              { id: "C", text: "Hisse senedi piyasasını düzenlemek" },
              { id: "D", text: "DİBS faizlerini doğrudan belirlemek" },
            ],
            correct: "B",
            explanation:
              "TCMB Döviz Swap işleminde bankalar dövizlerini TCMB'ye vererek TL alır (veya tersi); vade sonunda işlem iade edilir. Bu mekanizma hem TL likiditesini düzenlemek hem de döviz rezervini desteklemek için kullanılır.",
          },
          {
            text: "Bankalararası Para Piyasasının (BPP) bankacılık sektörü açısından temel işlevi nedir?",
            options: [
              { id: "A", text: "Uzun vadeli yatırım projelerine finansman sağlamak" },
              { id: "B", text: "Hisse senedi ve tahvil ihraçlarına aracılık etmek" },
              { id: "C", text: "Bankaların günlük likidite açıklarını veya fazlalarını kısa vadeli borçlanmayla gidermesi" },
              { id: "D", text: "TCMB para politikasını doğrudan uygulamak" },
            ],
            correct: "C",
            explanation:
              "Bankalararası Para Piyasası, bankaların birbirine kısa vadeli (genellikle gecelik) TL borç verip aldığı piyasadır. Bankaların rezerv açıkları veya fazlaları bu piyasa aracılığıyla dengelenir; TLREF bu piyasadan oluşan gecelik faizi yansıtır.",
          },
          {
            text: "TCMB aşırı likidite döneminde hangi APİ aracını kullanır?",
            options: [
              { id: "A", text: "Repo açarak bankacılık sistemine TL aktarır" },
              { id: "B", text: "Ters repo yaparak piyasadan TL çeker" },
              { id: "C", text: "DİBS alım ihalesi düzenleyerek piyasaya likidite sağlar" },
              { id: "D", text: "Zorunlu karşılık oranını düşürerek piyasaya TL bırakır" },
            ],
            correct: "B",
            explanation:
              "Aşırı likidite dönemlerinde TCMB ters repo yaparak bankalardan TL alır ve piyasadaki fazla likiditeyi çeker; bu işlemde TCMB menkul kıymet satıp TL'yi piyasadan çekmiş olur. Repo ise tam tersi yönde çalışır: piyasaya TL aktarır.",
          },
        ],
      },

      // ──────────── Ders 8: Bireysel Emeklilik Fon Platformu ────────────
      {
        id: "m1006-l8",
        title: "Bireysel Emeklilik Fon Alım Satım Platformu (EFP)",
        duration: "7 dk",
        summary: {
          title: "Bireysel Emeklilik Fon Alım Satım Platformu",
          intro:
            "Bireysel Emeklilik Fon Alım Satım Platformu (EFP veya BEFAS); Borsa İstanbul bünyesinde kurulmuş olup bireysel emeklilik şirketlerinin (BES) katılımcı fonlarının alım-satımını düzenli, şeffaf ve merkezi biçimde gerçekleştirdiği elektronik platformdur. 2022 yılında devreye giren EFP, bireysel emeklilik sisteminin etkinliğini artırmak ve fon transferlerini standartlaştırmak amacıyla oluşturulmuştur.",
          sections: [
            {
              heading: "Platformun Amacı ve Kapsamı",
              icon: "shield",
              items: [
                {
                  strong: "Kuruluş Amacı:",
                  text: "EFP; BES katılımcılarının birikimlerini yönetmede kullanılan emeklilik yatırım fonlarının bireysel emeklilik şirketleri arasında ve katılımcı hesapları arasında standart, hızlı ve güvenli şekilde transfer edilmesini sağlamak için kurulmuştur.",
                },
                {
                  strong: "Platform Yöneticisi:",
                  text: "EFP, Borsa İstanbul A.Ş. (BİAŞ) tarafından işletilmektedir. Platforma bireysel emeklilik şirketleri, emeklilik yatırım fonu kurucuları ve yöneticileri (portföy yönetim şirketleri) katılabilir.",
                },
                {
                  strong: "Kapsam:",
                  text: "Bireysel Emeklilik Sistemi (BES) kapsamındaki emeklilik yatırım fonları EFP üzerinden alım-satıma konu olabilir. Bireysel emeklilik şirketleri, katılımcılarına ait fon payı alım satım emirlerini Platform üzerinden iletir.",
                },
              ],
            },
            {
              heading: "EFP'nin İşleyişi ve Avantajları",
              icon: "trend",
              items: [
                {
                  strong: "Emir İletimi ve Eşleştirme:",
                  text: "BES şirketi, katılımcı talebini aldıktan sonra fon payı alım veya satım emrini EFP'ye iletir. Platform, emirleri fon yöneticisiyle eşleştirir ve takas işlemlerini merkezi olarak yönetir.",
                },
                {
                  strong: "Şeffaflık ve Standartlaştırma:",
                  text: "EFP öncesinde her BES şirketi kendi sisteminde fon transferi yaparken işlemler standart dışıydı ve süreçler uzundu. EFP ile tüm transferler tek bir platforma taşınarak şeffaflık ve hız artırılmıştır.",
                },
                {
                  strong: "Takas ve Saklama:",
                  text: "EFP işlemlerinin takası ve saklama hizmetleri Merkezi Kayıt Kuruluşu (MKK) ve Borsa İstanbul Takas ve Saklama A.Ş. (Takasbank) altyapısıyla entegre yürütülür.",
                },
                {
                  strong: "Fon Transfer Süreci:",
                  text: "Katılımcı BES şirketi değiştirdiğinde (şirket transferi) veya fon tercihini değiştirdiğinde EFP, eski fondaki payların satışı ve yeni fondaki alışı eş zamanlı ve sorunsuz gerçekleştirerek katılımcının birikiminin sürekliliğini korur.",
                },
              ],
            },
            {
              heading: "Düzenleyici Çerçeve",
              icon: "trend",
              items: [
                {
                  strong: "Yasal Dayanak:",
                  text: "EFP, 4632 sayılı Bireysel Emeklilik Tasarruf ve Yatırım Sistemi Kanunu ile SPK'nın emeklilik yatırım fonlarına ilişkin tebliğleri kapsamında faaliyet göstermektedir.",
                },
                {
                  strong: "Denetim:",
                  text: "EFP işlemleri hem SPK hem de Emeklilik Gözetim Merkezi (EGM) tarafından izlenmektedir. BİAŞ platformun operasyonundan sorumludur.",
                },
              ],
            },
          ],
          tip: "EFP; BES, BİAŞ ve fon transfer mekanizması ekseninde sınava çıkabilir. 'Kim işletiyor?', 'Hangi fonlar kapsama giriyor?', 'Takas kimle yapılıyor?' sorularına hazırlıklı olun.",
          kavramlar: [
            { terim: "EFP (Elektronik Fon Platformu)", tanim: "Borsa İstanbul bünyesinde BES emeklilik yatırım fonlarının alım-satımının standart ve merkezi biçimde gerçekleştirildiği platform." },
            { terim: "Bireysel Emeklilik Sistemi (BES)", tanim: "Devlet katkısıyla desteklenen ve katılımcıların emeklilik tasarruflarını birikimleri için yatırdığı zorunlu olmayan bireysel emeklilik sistemi." },
            { terim: "Emeklilik Yatırım Fonu", tanim: "BES katılımcılarının birikimlerinin yatırıldığı, portföy yönetim şirketlerince yönetilen ve EFP üzerinden alım-satımı yapılan yatırım fonu türü." },
            { terim: "Şirket Transferi (BES)", tanim: "Katılımcının bir BES şirketinden diğerine geçişi; EFP bu transferin fon alım-satımını standart biçimde gerçekleştirir." },
            { terim: "Emeklilik Gözetim Merkezi (EGM)", tanim: "BES sisteminin teknik altyapısını yöneten, fon ve katılımcı bilgilerini takip eden merkezi sistem." },
            { terim: "Merkezi Karşı Taraf (CCP — EFP Bağlamında)", tanim: "EFP işlemlerinde takas hizmetlerini sunan Takasbank'ın üstlendiği karşı taraf rolü." },
            { terim: "4632 Sayılı Kanun", tanim: "Bireysel Emeklilik Tasarruf ve Yatırım Sistemi Kanunu; BES ve emeklilik şirketlerinin temel yasal çerçevesini oluşturur." },
          ],
          dikkatlar: [
            "EFP'yi işleten kuruluş Borsa İstanbul A.Ş.'dir; SPK düzenlemek ve denetlemekle birlikte platformu işletmez.",
            "EFP yalnızca BES emeklilik yatırım fonlarını kapsar; bireysel yatırım fonları veya TEFAS kapsamındaki yatırım fonlarıyla karıştırılmamalıdır.",
            "Takas ve saklama hizmetleri Takasbank ve MKK altyapısıyla entegre çalışır.",
            "Şirket transferi durumunda katılımcının birikiminin sürekliliği EFP'nin en kritik işlevlerinden biridir.",
            "EFP'nin yasal dayanağı 4632 sayılı Bireysel Emeklilik Kanunu'dur; SPK tebliğleri ikincil mevzuatı oluşturur.",
          ],
        },
        questions: [
          {
            text: "Bireysel Emeklilik Fon Alım Satım Platformu'nu (EFP) işleten kuruluş hangisidir?",
            options: [
              { id: "A", text: "Sermaye Piyasası Kurulu (SPK)" },
              { id: "B", text: "Emeklilik Gözetim Merkezi (EGM)" },
              { id: "C", text: "Borsa İstanbul A.Ş. (BİAŞ)" },
              { id: "D", text: "Hazine ve Maliye Bakanlığı" },
            ],
            correct: "C",
            explanation:
              "Bireysel Emeklilik Fon Alım Satım Platformu (EFP), Borsa İstanbul A.Ş. (BİAŞ) tarafından işletilmektedir. SPK düzenleyici ve denetleyici rolüne, EGM ise teknik izleme ve gözetim rolüne sahiptir.",
          },
          {
            text: "EFP'nin temel kuruluş amacı nedir?",
            options: [
              { id: "A", text: "Hisse senedi ve tahvil piyasasındaki ikincil işlemleri yürütmek" },
              { id: "B", text: "BES kapsamındaki emeklilik yatırım fonlarının alım-satımını standart ve merkezi biçimde gerçekleştirmek" },
              { id: "C", text: "TCMB'nin döviz müdahalelerini koordine etmek" },
              { id: "D", text: "OTC türev işlemlerini düzenlemek" },
            ],
            correct: "B",
            explanation:
              "EFP; bireysel emeklilik şirketleri arasında ve katılımcı hesaplarında emeklilik yatırım fonu alım-satımını standartlaştırmak, hızlandırmak ve şeffaflaştırmak amacıyla Borsa İstanbul bünyesinde kurulmuştur.",
          },
          {
            text: "EFP işlemlerinin takası ve saklaması hangi kuruluşlar aracılığıyla yürütülür?",
            options: [
              { id: "A", text: "TCMB ve SPK" },
              { id: "B", text: "Takasbank ve Merkezi Kayıt Kuruluşu (MKK)" },
              { id: "C", text: "EGM ve Hazine" },
              { id: "D", text: "BES şirketleri kendi bünyelerinde yönetir" },
            ],
            correct: "B",
            explanation:
              "EFP işlemlerinin takası Takasbank, saklama hizmetleri ise Merkezi Kayıt Kuruluşu (MKK) altyapısıyla entegre biçimde yürütülmektedir. Bu yapı BES sistemindeki fon transferlerinde güvenlik ve süreklilik sağlar.",
          },
          {
            text: "Bir BES katılımcısının başka bir emeklilik şirketine geçmek istediğinde EFP'nin üstlendiği kritik işlev nedir?",
            options: [
              { id: "A", text: "Katılımcıya yeni şirketi seçmede danışmanlık yapmak" },
              { id: "B", text: "Eski fondaki payların satışını ve yeni fondaki alışı eş zamanlı gerçekleştirerek birikimin sürekliliğini korumak" },
              { id: "C", text: "Transfer için SPK onayı almak" },
              { id: "D", text: "Katılımcının birikimini geçici olarak TCMB'de tutmak" },
            ],
            correct: "B",
            explanation:
              "EFP, şirket transferi sürecinde eski BES şirketindeki fon paylarının satışını ve yeni şirketteki emeklilik yatırım fonunun alışını eş zamanlı standart bir süreçte gerçekleştirerek katılımcının birikiminin kesintisiz aktarılmasını sağlar.",
          },
          {
            text: "EFP'nin yasal dayanağını oluşturan kanun hangisidir?",
            options: [
              { id: "A", text: "6362 Sayılı Sermaye Piyasası Kanunu" },
              { id: "B", text: "5411 Sayılı Bankacılık Kanunu" },
              { id: "C", text: "4632 Sayılı Bireysel Emeklilik Tasarruf ve Yatırım Sistemi Kanunu" },
              { id: "D", text: "2499 Sayılı Eski Sermaye Piyasası Kanunu" },
            ],
            correct: "C",
            explanation:
              "EFP, 4632 sayılı Bireysel Emeklilik Tasarruf ve Yatırım Sistemi Kanunu ile SPK'nın emeklilik yatırım fonlarına ilişkin tebliğleri kapsamında faaliyet göstermektedir. 6362 sayılı Kanun ise genel sermaye piyasası mevzuatıdır.",
          },
          {
            text: "EFP kapsamına giren araçlar aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Tüm yatırım fonları (TEFAS dahil)" },
              { id: "B", text: "Yalnızca BES kapsamındaki emeklilik yatırım fonları" },
              { id: "C", text: "Hisse senedi ve devlet tahvilleri" },
              { id: "D", text: "Döviz ve altın fonları" },
            ],
            correct: "B",
            explanation:
              "EFP yalnızca Bireysel Emeklilik Sistemi (BES) kapsamındaki emeklilik yatırım fonlarını kapsar. TEFAS üzerinden işlem gören bireysel yatırım fonları EFP'nin değil TEFAS'ın kapsamındadır.",
          },
          {
            text: "Aşağıdakilerden hangisi EFP öncesi sistemin temel sorunlarından biri değildi?",
            options: [
              { id: "A", text: "Fon transfer işlemlerinin standart dışı ve uzun sürmesi" },
              { id: "B", text: "BES şirketleri arasında fon takibinin güç olması" },
              { id: "C", text: "Merkezi takas altyapısının olmaması" },
              { id: "D", text: "Emeklilik fonlarının yüksek getiri sağlamaması" },
            ],
            correct: "D",
            explanation:
              "EFP'nin kuruluş gerekçesi yüksek getiri sorunu değil; standartlaştırma eksikliği, fon transferlerinin uzun sürmesi ve merkezi takas/saklama altyapısının bulunmamasıydı. Getiri performansı ayrı bir konudur ve EFP'nin kuruluş amacıyla doğrudan ilgisi yoktur.",
          },
        ],
      },
    ],
  },
];