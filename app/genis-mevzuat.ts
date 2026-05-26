/* ─────────────────────────────────────────────────────────────────────────────
 * Geniş Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları (1002)
 *
 * Kaynak: SPL 1002 Çalışma Notu, 31 Aralık 2025 (335 sayfa)
 * Tip yapısı: data.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1001 (Dar Kapsamlı) modülünde işlenen Sermaye Piyasası Kanunu temelleri,
 * Özel Durumlar Tebliği ve Yatırım Fonları (III-52.1) gibi konular burada
 * tekrar edilmemiş; 1002'ye özgü olan kolektif yatırım kuruluşları (GYO,
 * MKYO/DSYO, PYŞ, BYF, GYF, GSYF/GSYO) ve Sermaye Piyasası Çalışanları
 * Etik İlkeleri konularına odaklanılmıştır.
 *
 * Kullanım:
 *   import { genisMevzuat } from "./mevzuat-1002";
 *   const allModules = [...darMevzuat, ...genisMevzuat];
 * ────────────────────────────────────────────────────────────────────────── */

import { type Module } from "./mevzuat";

export const genisMevzuat: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1002 GENİŞ KAPSAMLI MEVZUAT
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1002",
    title: "Modül · Geniş Kapsamlı Mevzuat (1002)",
    lessons: [
      // ───────────────────────────── Ders 1: GYO ─────────────────────────────
      {
        id: "m1002-l1",
        title: "Gayrimenkul Yatırım Ortaklıkları (III-48.1)",
        duration: "10 dk",
        summary: {
          title: "Gayrimenkul Yatırım Ortaklıkları (III-48.1)",
          intro:
            "Gayrimenkul Yatırım Ortaklıkları (GYO), III-48.1 sayılı Tebliğ kapsamında düzenlenen, kayıtlı sermaye sistemine tabi ve özel olarak gayrimenkullere, gayrimenkule dayalı sermaye piyasası araçlarına, gayrimenkul projelerine, gayrimenkule dayalı haklara ve sermaye piyasası araçlarına yatırım yapabilen sermaye piyasası kurumlarıdır. Halka açık ortaklık niteliğinde olup, paylarının asgari %25'inin halka arz yoluyla satılması zorunludur.",
          sections: [
            {
              heading: "Kuruluş, Halka Arz ve Yapısal Esaslar",
              icon: "shield",
              items: [
                {
                  strong: "Halka Arz Süresi:",
                  text: "GYO olarak kurulan veya dönüşen ortaklıkların ticaret siciline tescili takip eden 3 ay içinde, çıkarılmış sermayenin asgari %25'ini temsil eden payların halka arzına ilişkin izahnamenin onaylanması talebiyle Kurula başvurmaları zorunludur.",
                },
                {
                  strong: "Altyapı GYO'ları İçin Süreler:",
                  text: "Çıkarılmış sermayesi 3 milyar TL'den az olanlar için 2 yıl, 3 milyar TL ve daha fazla olanlar için 4 yıl içinde halka arz başvurusu yapılması gerekir.",
                },
                {
                  strong: "Ayni Sermaye:",
                  text: "Kuruluş ve sermaye artırımlarında, üzerinde ipotek bulunmayan veya değerini önemli ölçüde etkileyecek takyidat şerhi olmayan gayrimenkuller ve gayrimenkule dayalı ayni haklar TTK çerçevesinde ayni sermaye olarak konulabilir.",
                },
                {
                  strong: "Borçlanma Sınırı:",
                  text: "GYO'lar kısa süreli fon ihtiyaçlarını veya portföyle ilgili maliyetlerini karşılamak amacıyla kredi kullanabilir; ancak kullanılabilecek kredi tutarı hesap dönemi sonundaki özsermayelerinin azami beş katını geçemez.",
                },
                {
                  strong: "Kotasyon Zorunluluğu:",
                  text: "Halka arz eden GYO'lar, satış süresinin bitimini takip eden 15 gün içinde paylarının BİAŞ kotuna alınması için Kurula başvurmak zorundadır.",
                },
              ],
            },
            {
              heading: "Portföy Sınırlamaları ve Yatırım Faaliyetleri",
              icon: "trend",
              items: [
                {
                  strong: "Asgari Gayrimenkul Yatırımı:",
                  text: "Aktif toplamının en az %51'i, gayrimenkullerden, gayrimenkul projelerinden, gayrimenkule dayalı haklardan ve gayrimenkule dayalı sermaye piyasası araçlarından oluşmak zorundadır.",
                },
                {
                  strong: "Para ve Sermaye Piyasası Araçları:",
                  text: "Aktif toplamının en fazla %50'si para ve sermaye piyasası araçlarına yatırılabilir; tek bir ihraççıya ait sermaye piyasası araçlarına yapılan yatırım aktif toplamın %10'unu aşamaz.",
                },
                {
                  strong: "Yapamayacakları İşler:",
                  text: "GYO'lar, otel ve hastane gibi gayrimenkullerin işletmesini yapamaz, kısa vadeli alım-satım amacıyla gayrimenkul ticareti yapamaz, sermaye piyasası araçlarının kredili alım-satımıyla iştigal edemez ve mali sektörde faaliyet gösteren şirketlere ortak olamaz.",
                },
                {
                  strong: "Değerleme Zorunluluğu:",
                  text: "Portföye dahil edilecek veya çıkartılacak her bir varlık için, Kurul tarafından listeye alınmış gayrimenkul değerleme kuruluşlarına değerleme yaptırılması zorunludur.",
                },
                {
                  strong: "İmtiyazlı Pay Yasağı:",
                  text: "GYO'lar, yönetim kurulu üyelerini aday gösterme imtiyazı tanıyan paylar dışında oy ve kâr payında imtiyaz tanıyan pay ihraç edemez.",
                },
              ],
            },
          ],
          tip: "GYO'larda 'aktif toplamının asgari %51'i' kuralı esastır; bu eşik bir kez bile altına düşerse Kurul'a uyum süresi talebiyle başvurulması gerekir. Sınavda %25 (halka arz oranı), %51 (gayrimenkul yatırım oranı) ve 5 katı (kredi sınırı) rakamları en sık karşılaşılan kalıp sorulardır.",
          kavramlar: [
            { terim: "GYO", tanim: "Kayıtlı sermaye sistemine tabi, gayrimenkul, gayrimenkul projeleri ve hakları portföyünde bulunduran halka açık anonim ortaklık." },
            { terim: "Ayni Sermaye", tanim: "İpotek veya değeri etkileyecek takyidat bulunmayan gayrimenkul ve gayrimenkule dayalı ayni hakların ortaklığa sermaye olarak konulması." },
            { terim: "Borçlanma Sınırı", tanim: "GYO'ların kısa vadeli fon ihtiyacı için kullanabileceği toplam kredinin özsermayenin en fazla 5 katıyla sınırlandırılması." },
            { terim: "Değerleme Kuruluşu", tanim: "Kurul listesinde yer alan, GYO portföyüne girecek veya çıkacak her varlığı bağımsız olarak değerlemekle yükümlü kuruluş." },
            { terim: "Altyapı GYO'su", tanim: "Altyapı projelerine odaklanan, sermaye büyüklüğüne göre 2 veya 4 yıl halka arz süresi tanınan özel GYO türü." },
            { terim: "İmtiyazlı Pay Yasağı", tanim: "GYO'ların oy ve kâr payında imtiyaz sağlayan pay ihraç edememesi; yalnızca YK aday gösterme imtiyazlı pay izin verilmesi." },
            { terim: "Kotasyon Zorunluluğu", tanim: "Halka arzın tamamlanmasından itibaren 15 gün içinde payların BİAŞ kotuna alınması için Kurul'a başvurma yükümlülüğü." },
          ],
          dikkatlar: [
            "Aktif toplamının asgari %51'i gayrimenkul bileşimini oluşturmak zorundadır; bu eşiğin altına düşülmesi halinde Kurul'a uyum programı sunulması gerekir — ihlal anında feshe yol açmaz.",
            "Tek bir ihraççıya ait sermaye piyasası araçlarına yapılan yatırım aktif toplamın %10'unu aşamaz; toplam para ve SPK araçlarına %50 sınırı ayrıca uygulanır.",
            "GYO'lar otel, hastane gibi gayrimenkulleri portföye alabilir ancak bunların işletmeciliğini yapamaz; 'alma' ile 'işletme' arasındaki fark sınavda çelmeli soru olarak gelir.",
            "Altyapı GYO'larında eşik 3 milyar TL: altında 2 yıl, üstünde 4 yıl halka arz süresine izin verilir — rakamları ters sıralamak yaygın hata.",
            "Halka arz sonrasında kotasyon başvurusu 15 gün içinde yapılmalıdır; seçeneklerde '30 gün' veya '1 ay' sunulabilir, doğru yanıt 15 gündür.",
          ],
        },
        questions: [
          {
            text: "III-48.1 sayılı Tebliğ uyarınca bir GYO'nun aktif toplamı içinde gayrimenkullerin, gayrimenkul projelerinin ve gayrimenkule dayalı hakların asgari oranı ne kadar olmalıdır?",
            options: [
              { id: "A", text: "%25" },
              { id: "B", text: "%50" },
              { id: "C", text: "%51" },
              { id: "D", text: "%80" },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca GYO'ların aktif toplamının en az %51'i; gayrimenkullerden, gayrimenkul projelerinden, gayrimenkule dayalı haklardan ve gayrimenkule dayalı sermaye piyasası araçlarından oluşmak zorundadır. Bu oran portföy sınırlamalarının çekirdeğini oluşturur.",
          },
          {
            text: "Halka arz yoluyla satılan paylar bakımından bir GYO'nun çıkarılmış sermayesinin asgari ne kadarı halka arz edilmek zorundadır?",
            options: [
              { id: "A", text: "%10" },
              { id: "B", text: "%15" },
              { id: "C", text: "%20" },
              { id: "D", text: "%25" },
            ],
            correct: "D",
            explanation:
              "GYO Tebliği'ne göre kuruluş veya dönüşümün ticaret siciline tescilini takip eden üç ay içinde çıkarılmış sermayelerinin asgari %25'ini temsil eden payların halka arzına ilişkin izahnamenin onaylanması talebiyle Kurula başvurmaları zorunludur.",
          },
          {
            text: "Bir GYO'nun kullanabileceği kredi toplamı ile ilgili Tebliğ'de yer alan üst sınır aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Hesap dönemi sonundaki özsermayenin 2 katı" },
              { id: "B", text: "Hesap dönemi sonundaki özsermayenin 3 katı" },
              { id: "C", text: "Hesap dönemi sonundaki özsermayenin 5 katı" },
              { id: "D", text: "Hesap dönemi sonundaki özsermayenin 10 katı" },
            ],
            correct: "C",
            explanation:
              "Tebliğ'in 'Borçlanma Sınırı' başlıklı bölümünde, GYO'ların kullanabileceği kredi tutarının hesap dönemi sonundaki özsermayelerinin azami 5 katını geçemeyeceği düzenlenmiştir.",
          },
          {
            text: "Aşağıdakilerden hangisi GYO'ların yapamayacağı işlerden biri DEĞİLDİR?",
            options: [
              { id: "A", text: "Otel, hastane gibi gayrimenkullerin işletmesini yapmak" },
              { id: "B", text: "Kısa vadeli alım-satım amacıyla gayrimenkul ticareti yapmak" },
              { id: "C", text: "Gayrimenkul değerleme kuruluşlarına portföydeki varlıkların değerlemesini yaptırmak" },
              { id: "D", text: "Sermaye piyasası araçlarının kredili alım-satımıyla iştigal etmek" },
            ],
            correct: "C",
            explanation:
              "Gayrimenkul değerleme yaptırmak GYO'lar için yasaklanmış bir iş değil, aksine zorunluluktur. Diğer üç seçenek (otel/hastane işletmesi, kısa vadeli alım-satım, sermaye piyasası araçlarının kredili alımı) Tebliğ'de açıkça yapamayacakları işler arasında sayılmıştır.",
          },
          {
            text: "Bir GYO'nun tek bir ihraççıya ait para ve sermaye piyasası araçlarına yapacağı yatırım, aktif toplamın azami yüzde kaçını oluşturabilir?",
            options: [
              { id: "A", text: "%5" },
              { id: "B", text: "%10" },
              { id: "C", text: "%25" },
              { id: "D", text: "%50" },
            ],
            correct: "B",
            explanation:
              "Portföy sınırlamaları çerçevesinde, GYO'ların aktif toplamının en fazla %50'si para ve sermaye piyasası araçlarına yatırılabilir; ancak tek bir ihraççıya ait araçlara yapılan yatırım aktif toplamın %10'unu aşamaz. Bu yoğunlaşma riskini önleyen temel sınırdır.",
          },
        ],
      },
      // ──────────────────── Ders 2: Menkul Kıymet Yatırım Ortaklıkları ────────────────────
      {
        id: "m1002-l2",
        title: "Menkul Kıymet Yatırım Ortaklıkları ve DSYO (III-48.5)",
        duration: "9 dk",
        summary: {
          title: "Menkul Kıymet Yatırım Ortaklıkları ve DSYO (III-48.5)",
          intro:
            "Menkul Kıymet Yatırım Ortaklıkları (MKYO), III-48.5 sayılı Tebliğ kapsamında düzenlenen sermaye piyasası kurumları olup; ortaklara ait fonların sermaye piyasası araçları, kıymetli madenler ve diğer varlıklara yatırılması yoluyla oluşturulan portföyleri profesyonel olarak yönetir. Tebliğ ayrıca 'Değişken Sermayeli Yatırım Ortaklığı' (DSYO) kavramını da düzenleyerek Türk sermaye piyasasına Avrupa'daki UCITs benzeri açık uçlu yapılar kazandırmıştır.",
          sections: [
            {
              heading: "Sabit Sermayeli MKYO Esasları",
              icon: "shield",
              items: [
                {
                  strong: "Hukuki Yapı:",
                  text: "MKYO'lar tüzel kişiliği haiz anonim ortaklıklar olup paylarını çıkarmak ve halka arzı yapmak suretiyle topladıkları fonları profesyonel yönetimle değerlendirir.",
                },
                {
                  strong: "Faaliyet Alanı:",
                  text: "Faaliyetleri münhasıran portföy işletmekle sınırlıdır; portföye varlık alıp satabilir, repo-ters repo işlemleri yapabilir ve ödünç işlemlerinde bulunabilir.",
                },
                {
                  strong: "İç Sistemler Zorunluluğu:",
                  text: "Yönetim kurulu kararıyla iç kontrol sistemi, risk yönetim sistemi ve teftiş birimi ile bunların gözetimine yönelik birimlerin oluşturulması zorunludur.",
                },
                {
                  strong: "Yapamayacakları İşler:",
                  text: "Kuruldan izin alınmaksızın esas sözleşmede belirtilen amaçlar dışında faaliyette bulunamaz, bankacılık-sigortacılık yapamaz, kredi veremez, ortaklara borç para veremez.",
                },
              ],
            },
            {
              heading: "Değişken Sermayeli Yatırım Ortaklığı (DSYO)",
              icon: "trend",
              items: [
                {
                  strong: "Tanım:",
                  text: "Esas sermayesi yatırım yapılan varlıkların değerine göre değişen, yatırımcı paylarının ihracı ve geri alınması suretiyle çalışan, kayıtlı sermaye sistemi içerisinde yer almayan açık uçlu yatırım ortaklığıdır.",
                },
                {
                  strong: "Pay Yapısı:",
                  text: "DSYO'larda 'kurucu payları' ve 'yatırımcı payları' olmak üzere iki tür pay bulunur. Yatırımcı payları talep üzerine ihraç ve geri alınabilir niteliktedir.",
                },
                {
                  strong: "Portföy Türleri:",
                  text: "Hisse senedi, borçlanma araçları, kira sertifikası, fon sepeti, karma, para piyasası, katılım, altın ve diğer kıymetli madenler portföyleri oluşturulabilir; her birinin asgari %80'i ilgili varlık türüne yatırılır.",
                },
                {
                  strong: "Serbest Portföy:",
                  text: "Portföy sınırlamalarına tabi olmayan, yalnızca nitelikli yatırımcılara satılabilen 'serbest portföyler' oluşturulabilir; bu portföyler için asgari yatırım tutarı sınırlandırılabilir.",
                },
                {
                  strong: "Kredi Sınırı:",
                  text: "DSYO'lar net varlık değerinin %10'unu aşmamak üzere, fonun likidite ihtiyacının karşılanması amacıyla kredi kullanabilir.",
                },
              ],
            },
          ],
          tip: "MKYO ile DSYO arasındaki temel ayrım kapalı uçlu/açık uçlu yapıdır: MKYO'da paylar borsada işlem görür ve sayı sabit kalır; DSYO'da ise yatırımcı talebine göre paylar sürekli ihraç edilip geri alınır. UCITs'in Türkiye uygulaması olarak DSYO'lar fonlarla yatırım ortaklıkları arasında bir geçiş köprüsüdür.",
          kavramlar: [
            { terim: "MKYO", tanim: "Menkul Kıymet Yatırım Ortaklığı; sermaye piyasası araçları portföyü işleten, tüzel kişiliği olan kapalı uçlu ortaklık." },
            { terim: "DSYO", tanim: "Değişken Sermayeli Yatırım Ortaklığı; sermayesi yatırım varlıklarının değerine göre değişen, payların ihraç/geri alımıyla çalışan açık uçlu ortaklık." },
            { terim: "Kapalı Uçlu Yapı", tanim: "Yeni pay ihracının söz konusu olmadığı, mevcut payların yalnızca borsada el değiştirebildiği yatırım ortaklığı yapısı." },
            { terim: "Açık Uçlu Yapı", tanim: "Yatırımcı talebi üzerine yeni pay ihraç edilip geri alınabilen, dolayısıyla toplam pay sayısının değiştiği fon/ortaklık yapısı." },
            { terim: "Serbest Portföy", tanim: "DSYO bünyesinde portföy kısıtlamalarına tabi olmayan, yalnızca nitelikli yatırımcılara satılabilen portföy türü." },
            { terim: "Yatırımcı Payı", tanim: "DSYO'da yatırımcı tarafından talep üzerine satın alınan ve iade edilebilen, değeri net varlık değerine göre belirlenen pay." },
            { terim: "İç Kontrol Sistemi", tanim: "MKYO yönetim kurulunca oluşturulması zorunlu; faaliyetlerin mevzuata uygunluğunu sağlayan bağımsız denetim yapılanması." },
          ],
          dikkatlar: [
            "MKYO kapalı uçlu = sabit sermaye = paylar sadece borsada el değiştirir; DSYO açık uçlu = değişken sermaye = yatırımcı talebine göre pay ihraç ve geri alımı yapılır.",
            "DSYO'da kredi sınırı net varlık değerinin %10'udur; GYF'de bu oran toplam değerin %50'sidir — fonlar arasındaki oran farkı sınavda sık karşılaşılan tuzaktır.",
            "DSYO'nun serbest portföyleri yalnızca nitelikli yatırımcılara satılabilir; bu portföyler için izahname yerine ihraç belgesi düzenlenir.",
            "DSYO portföy türlerinde (hisse senedi, borçlanma vb.) her türün asgari %80'i ilgili varlık sınıfına yatırılmalıdır — aynı %80 kuralı BYF için de geçerlidir.",
            "MKYO'larda iç kontrol, risk yönetim sistemi ve teftiş birimi oluşturulması yönetim kurulunun zorunlu görevidir; bunlar opsiyonel değildir.",
          ],
        },
        questions: [
          {
            text: "III-48.5 sayılı Tebliğ uyarınca Değişken Sermayeli Yatırım Ortaklığı (DSYO) ile sabit sermayeli MKYO arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "DSYO tüzel kişiliğe sahip değildir." },
              { id: "B", text: "DSYO esas sermayesi yatırım yapılan varlıkların değerine göre değişir; yatırımcı payları talep üzerine ihraç ve geri alınabilir." },
              { id: "C", text: "DSYO'lar yalnızca yabancı yatırımcılara açıktır." },
              { id: "D", text: "DSYO'larda kâr dağıtımı yasaktır." },
            ],
            correct: "B",
            explanation:
              "DSYO; esas sermayesi yatırım yapılan varlıkların değerine göre değişen, yatırımcı paylarının ihracı ve geri alınması suretiyle çalışan açık uçlu yatırım ortaklığıdır. Sabit sermayeli MKYO'da ise sermaye sabittir ve paylar borsada el değiştirir.",
          },
          {
            text: "DSYO'larda 'serbest portföy' niteliği taşıyan portföyler kimlere satılabilir?",
            options: [
              { id: "A", text: "Yalnızca tüzel kişi yatırımcılara" },
              { id: "B", text: "Yalnızca nitelikli yatırımcılara" },
              { id: "C", text: "Tüm bireysel ve kurumsal yatırımcılara" },
              { id: "D", text: "Yalnızca yurtdışında yerleşik yatırımcılara" },
            ],
            correct: "B",
            explanation:
              "Tebliğ'in 'Serbest portföyler' başlıklı bölümünde, portföy sınırlamalarına tabi olmayan serbest portföylerin yalnızca nitelikli yatırımcılara satılabileceği düzenlenmiştir. Bu portföyler için asgari yatırım tutarı da Tebliğ'de belirlenmiştir.",
          },
          {
            text: "Aşağıdakilerden hangisi Menkul Kıymet Yatırım Ortaklıklarının yapamayacakları işlerden biri DEĞİLDİR?",
            options: [
              { id: "A", text: "Bankacılık ve sigortacılık faaliyetlerinde bulunmak" },
              { id: "B", text: "Kredi vermek ve ortaklara borç para vermek" },
              { id: "C", text: "Portföye sermaye piyasası aracı alıp satmak" },
              { id: "D", text: "Esas sözleşmedeki amaç dışında Kuruldan izinsiz faaliyet göstermek" },
            ],
            correct: "C",
            explanation:
              "Sermaye piyasası araçlarının portföye alım-satımı, MKYO'nun temel faaliyetidir; yapamayacakları iş değil, asıl iştigal konusudur. Diğer üç seçenek (bankacılık, kredi verme, izinsiz amaç dışı faaliyet) Tebliğ'de açıkça yasaklanmıştır.",
          },
          {
            text: "Bir DSYO'nun fon likidite ihtiyacı için kullanabileceği kredi tutarı, aşağıdaki üst sınırlardan hangisi ile sınırlandırılmıştır?",
            options: [
              { id: "A", text: "Net varlık değerinin %5'i" },
              { id: "B", text: "Net varlık değerinin %10'u" },
              { id: "C", text: "Net varlık değerinin %25'i" },
              { id: "D", text: "Net varlık değerinin %50'si" },
            ],
            correct: "B",
            explanation:
              "Tebliğ'in DSYO'lara ilişkin 'Kredi işlemleri' başlıklı bölümünde, fonun likidite ihtiyacının karşılanması amacıyla net varlık değerinin %10'unu aşmamak üzere kredi kullanılabileceği düzenlenmiştir.",
          },
          {
            text: "DSYO'larda yatırımcı paylarının ihraç ve geri alımı bakımından aşağıdakilerden hangisi doğrudur?",
            options: [
              { id: "A", text: "Yatırımcı payları yalnızca borsada alınıp satılabilir; geri alım yapılamaz." },
              { id: "B", text: "Yatırımcı payları talep üzerine ihraç edilebilir ve yatırımcının talebi üzerine ortaklık tarafından geri alınabilir." },
              { id: "C", text: "Yatırımcı paylarının ihracı sadece halka arz suretiyle gerçekleştirilebilir." },
              { id: "D", text: "Yatırımcı payları nominal değerinden işlem görür, fiyat değişimi olmaz." },
            ],
            correct: "B",
            explanation:
              "DSYO'nun en ayırt edici özelliği, yatırımcı paylarının yatırımcı talebi üzerine ihraç edilebilmesi ve yine yatırımcı talebi üzerine ortaklık tarafından geri alınabilir nitelikte olmasıdır. Bu açık uçlu yapı, ürünü yatırım fonlarına yaklaştıran temel özelliktir.",
          },
        ],
      },
      // ──────────────────── Ders 3: Portföy Yönetim Şirketleri ────────────────────
      {
        id: "m1002-l3",
        title: "Portföy Yönetim Şirketleri (III-55.1)",
        duration: "10 dk",
        summary: {
          title: "Portföy Yönetim Şirketleri (III-55.1)",
          intro:
            "III-55.1 sayılı Tebliğ uyarınca Portföy Yönetim Şirketi (PYŞ); ana faaliyet konusu yatırım fonlarının kurulması ve yönetimi olan, anonim ortaklık şeklinde kurulmuş ve Sermaye Piyasası Kurulu'ndan faaliyet izni almış sermaye piyasası kurumudur. PYŞ'ler kolektif portföy yöneticiliği yanında, yetki belgesine bağlı olarak bireysel portföy yöneticiliği ve yatırım danışmanlığı faaliyetlerini de yürütebilir.",
          sections: [
            {
              heading: "Kuruluş, Faaliyet İzni ve Sermaye Yeterliliği",
              icon: "shield",
              items: [
                {
                  strong: "Kuruluş Şartları:",
                  text: "Anonim ortaklık şeklinde kurulması, paylarının nakit karşılığı çıkarılması, başlangıç sermayesinin Tebliğ'de belirlenen tutardan az olmaması, ticaret unvanında 'Portföy Yönetimi' ibaresinin yer alması ve esas sözleşmenin Tebliğ hükümlerine uygun olması zorunludur.",
                },
                {
                  strong: "Yöneticilik Şartı:",
                  text: "PYŞ'nin genel müdürünün, yöneticilerinin ve ihtisas personelinin (portföy yöneticisi, fon müdürü, araştırma uzmanı, iç kontrol elemanı, müfettiş, risk yönetim personeli, yatırım danışmanı) ilgili lisanslara ve mesleki tecrübeye sahip olması zorunludur.",
                },
                {
                  strong: "Sermaye Yeterliliği:",
                  text: "Yönetilen portföy büyüklüğüne göre kademeli sermaye yeterliliği yükümlülüğü uygulanır; portföy büyüdükçe asgari özsermaye gereği de artar.",
                },
                {
                  strong: "Portföy Saklayıcısı Zorunluluğu:",
                  text: "PYŞ'lerin kurucusu olduğu fonların varlıkları, Kanun'un 56. maddesi kapsamında yetkilendirilmiş portföy saklama hizmetini yürüten kuruluşlar tarafından saklanır.",
                },
                {
                  strong: "Faaliyetleri Sınırlı PYŞ'ler:",
                  text: "Münhasıran GYF veya GSYF kurmak için kurulan şirketlerde başlangıç sermayesi yarı oranında uygulanır; ayrıca dışarıdan hizmet alımı esnekliği sağlanır.",
                },
              ],
            },
            {
              heading: "Yönetim İlkeleri ve Yapamayacakları İşler",
              icon: "trend",
              items: [
                {
                  strong: "Mesleki Özen ve Titizlik İlkesi:",
                  text: "PYŞ ve çalışanları, üstün gayret ve özenle iş ve işlemleri ifa etmek, müşterilerin haklarını korumak ve onların yararına olacak şekilde davranmakla yükümlüdür.",
                },
                {
                  strong: "Bağımsızlık İlkesi:",
                  text: "PYŞ ve çalışanları, sermaye piyasası faaliyetleri ile ilgili kararlarda bağımsızlıklarını koruyarak görevlerini ifa eder; menfaat çatışmalarına yol açabilecek hususlardan kaçınır.",
                },
                {
                  strong: "Çıkar Çatışmasının Önlenmesi:",
                  text: "Müşteriler arasında, müşterilerle PYŞ arasında ve müşterilerle PYŞ çalışanları arasında çıkabilecek çıkar çatışmalarının önlenmesine yönelik yazılı politika ve prosedürlerin oluşturulması zorunludur.",
                },
                {
                  strong: "Sır Saklama Yükümlülüğü:",
                  text: "PYŞ'nin yönetim kurulu üyeleri, ortakları, çalışanları sıfatlarından dolayı öğrendikleri müşterilere ait sırları açıklayamazlar; bu yükümlülük görevden ayrılmadan sonra da devam eder.",
                },
                {
                  strong: "Yapamayacağı İşler:",
                  text: "PYŞ; mevduat veya katılım fonu kabulü, ödünç para verme, yetki belgesinin kapsamı dışındaki sermaye piyasası faaliyetleri, ticari, sınai ve zirai faaliyetler ve esas sözleşmesinde belirtilenler dışındaki konularda iştirak edinemez.",
                },
              ],
            },
          ],
          tip: "PYŞ'nin temel sorumluluğu 'inançlı mülkiyet' esasına dayanır: yönettiği fon malvarlığı kendi mülkiyetinden ayrı tutulur ve yatırımcı çıkarına yönetilir. Sınavda en sık karşılaşılan tuzak, mevduat kabulü ile fon kuruculuğunun karıştırılmasıdır — PYŞ asla mevduat kabul etmez, yalnızca fon kurar ve yönetir.",
          kavramlar: [
            { terim: "PYŞ", tanim: "Portföy Yönetim Şirketi; yatırım fonu kuran ve yöneten, Kurul'dan faaliyet izni almış anonim ortaklık." },
            { terim: "İnançlı Mülkiyet", tanim: "PYŞ'nin yönettiği fon varlıklarının kendi malvarlığından hukuken ayrı tutulmasını sağlayan, yatırımcıyı koruyucu temel ilke." },
            { terim: "Kolektif Portföy Yöneticiliği", tanim: "Birçok yatırımcıdan toplanan fonları havuzda birleştirerek ortak kurallara göre yönetme faaliyeti; PYŞ'nin asıl faaliyet alanı." },
            { terim: "Bireysel Portföy Yöneticiliği", tanim: "Tek bir müşteriye ait portföyü bireysel sözleşmeyle yönetme; PYŞ'nin yetki belgesiyle yapabileceği ek faaliyet." },
            { terim: "Portföy Saklayıcısı", tanim: "Kanun'un 56. maddesi kapsamında yetkilendirilmiş, PYŞ'nin kurucusu olduğu fon varlıklarını bağımsız olarak saklayan kuruluş." },
            { terim: "İhtisas Personeli", tanim: "PYŞ bünyesinde portföy yöneticisi, fon müdürü, araştırma uzmanı, iç kontrol elemanı, müfettiş, risk yönetim personeli ve yatırım danışmanını kapsayan lisans gerektiren personel." },
            { terim: "Çıkar Çatışması Yönetimi", tanim: "Müşteriler arası, müşteri-PYŞ arası ve müşteri-çalışan arası çatışmaları önlemek için hazırlanan yazılı politika ve prosedürler." },
          ],
          dikkatlar: [
            "PYŞ hiçbir koşulda mevduat veya katılım fonu kabul edemez; bu faaliyet bankacılığa özgüdür — 'PYŞ mevduat kabul eder mi?' sorusuna kesinlikle hayır.",
            "Portföy yönetim hizmeti dışarıdan alınsa bile, kurucu PYŞ'nin fonun yönetimindeki hukuki sorumluluğu devam eder; sorumluluk hizmet sağlayıcıya geçmez.",
            "Sır saklama yükümlülüğü görevden ayrıldıktan sonra da geçerliliğini korur; 'görev süresince' ifadesi eksik ve yanıltıcıdır.",
            "GYF veya GSYF kurmak üzere kurulan faaliyetleri sınırlı PYŞ'de başlangıç sermayesi standart tutarın yarısına indirilmektedir.",
            "Çıkar çatışması önleme politikasının yazılı olarak hazırlanması ve iç kontrol mekanizmalarıyla uyumlu tutulması zorunludur — opsiyonel değildir.",
          ],
        },
        questions: [
          {
            text: "III-55.1 sayılı Tebliğ uyarınca aşağıdakilerden hangisi Portföy Yönetim Şirketinin yapamayacağı işlerden biridir?",
            options: [
              { id: "A", text: "Yatırım fonu kurmak ve yönetmek" },
              { id: "B", text: "Yatırım danışmanlığı hizmeti vermek" },
              { id: "C", text: "Mevduat veya katılım fonu kabul etmek" },
              { id: "D", text: "Bireysel portföy yöneticiliği yapmak" },
            ],
            correct: "C",
            explanation:
              "Mevduat veya katılım fonu kabul etmek bankacılık faaliyetidir ve PYŞ'lerin yapamayacağı işler arasında açıkça düzenlenmiştir. Yatırım fonu kurmak ve yönetmek, yatırım danışmanlığı ve bireysel portföy yöneticiliği ise PYŞ'nin asıl faaliyet alanlarındandır.",
          },
          {
            text: "Münhasıran gayrimenkul yatırım fonu veya girişim sermayesi yatırım fonu kurmak ve yönetmek üzere kurulan PYŞ'lerin başlangıç sermayesi nasıl uygulanır?",
            options: [
              { id: "A", text: "Aynı tutarda uygulanır." },
              { id: "B", text: "İki kat olarak uygulanır." },
              { id: "C", text: "Yarısı olarak uygulanır." },
              { id: "D", text: "Beş katı olarak uygulanır." },
            ],
            correct: "C",
            explanation:
              "Tebliğ'in 'Faaliyetleri Sınırlı Portföy Yönetim Şirketlerine İlişkin Esaslar' başlıklı bölümünde, münhasıran GYF veya GSYF kurmak ve yönetmek üzere kurulan şirketlerde başlangıç sermayesi tutarı ile asgari özsermaye ve sermaye tutarlarının yarısı olarak uygulanacağı düzenlenmiştir.",
          },
          {
            text: "Bir PYŞ'nin kurucusu olduğu fonun portföy yönetim hizmetinin başka bir PYŞ'den alınması durumunda, fonun yönetimine ilişkin sorumluluk kime aittir?",
            options: [
              { id: "A", text: "Hizmeti veren PYŞ'ye geçer; kurucu sorumluluktan kurtulur." },
              { id: "B", text: "Sorumluluk Sermaye Piyasası Kurulu'na geçer." },
              { id: "C", text: "Hizmet dışarıdan alınmış olsa dahi kurucu PYŞ'nin sorumluluğu devam eder." },
              { id: "D", text: "Sorumluluk portföy saklayıcısı kuruluşa devredilir." },
            ],
            correct: "C",
            explanation:
              "Tebliğ'de açıkça düzenlendiği üzere, Şirket'in kurucusu olduğu fonun portföyünün yönetimine ilişkin hizmetin dışarıdan alınması halinde dahi Şirket'in fonun yönetimine ilişkin sorumluluğu devam eder. Bu kural inançlı mülkiyet ve yatırımcı koruması ilkesinin doğal sonucudur.",
          },
          {
            text: "PYŞ Tebliği'nde tanımlanan 'ihtisas personeli' kapsamında aşağıdakilerden hangisi yer ALMAZ?",
            options: [
              { id: "A", text: "Portföy yöneticisi" },
              { id: "B", text: "Fon müdürü" },
              { id: "C", text: "Müşteri ilişkileri yönetmeni" },
              { id: "D", text: "İç kontrol elemanı" },
            ],
            correct: "C",
            explanation:
              "Tebliğ'de ihtisas personeli; araştırma uzmanı, fon müdürü, iç kontrol elemanı, müfettiş, portföy yöneticisi, risk yönetim birimi personeli ve yatırım danışmanını ifade eder. Müşteri ilişkileri yönetmeni bu listede yer almaz.",
          },
          {
            text: "PYŞ'nin sır saklama yükümlülüğü ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
            options: [
              { id: "A", text: "Yükümlülük yalnızca görev süresi boyunca devam eder, görevden ayrıldıktan sonra sona erer." },
              { id: "B", text: "Yükümlülük yalnızca yönetim kurulu üyeleri için geçerlidir, çalışanlar için uygulanmaz." },
              { id: "C", text: "Yönetim kurulu üyeleri, ortakları ve çalışanları için geçerli olan bu yükümlülük, görevden ayrılmadan sonra da devam eder." },
              { id: "D", text: "Şirket pay sahipleri sırrı isterlerse açıklanabilir." },
            ],
            correct: "C",
            explanation:
              "Tebliğ'in 'Sır Saklama' başlıklı bölümü, PYŞ'nin yönetim kurulu üyeleri, ortakları, çalışanlarının sıfatlarından dolayı öğrendikleri müşterilere ait sırları açıklayamayacaklarını ve bu yükümlülüğün görevden ayrılmadan sonra da devam edeceğini düzenler.",
          },
        ],
      },
      // ──────────────────── Ders 4: Borsa Yatırım Fonları ────────────────────
      {
        id: "m1002-l4",
        title: "Borsa Yatırım Fonları (III-52.2)",
        duration: "9 dk",
        summary: {
          title: "Borsa Yatırım Fonları (III-52.2)",
          intro:
            "Borsa Yatırım Fonu (BYF), III-52.2 sayılı Tebliğ kapsamında düzenlenen, katılma payları BİAŞ'ta işlem gören ve fon portföyünün kompozisyonunu yansıtacak şekilde portföyde yer alan varlıkların veya nakdin teslimi suretiyle katılma payı oluşturulabilen ya da iadesi karşılığında bu varlıkların alınmasına imkan veren açık uçlu yatırım aracıdır. BYF'ler, yatırım fonu ile menkul kıymet yatırım ortaklığının özelliklerini birleştiren karma bir enstrümandır.",
          sections: [
            {
              heading: "Hukuki Yapı ve Endeks Takibi",
              icon: "shield",
              items: [
                {
                  strong: "Hukuki Niteliği:",
                  text: "Tüzel kişiliği bulunmayan, portföy yönetim şirketleri tarafından bir içtüzük ile kurulan ve inançlı mülkiyet esaslarına göre işletilen malvarlığıdır.",
                },
                {
                  strong: "Endeks Takibi Zorunluluğu:",
                  text: "BYF'ler Kurul tarafından uygun görülen bir endeksi takip etmek üzere kurulur; portföylerinin en az %80'i devamlı olarak takip edilen endeks kapsamındaki varlıklara yatırılır.",
                },
                {
                  strong: "Asgari Halka Arz Tutarı:",
                  text: "Halka arz aşamasında konulacak avans veya yapılacak halka arz tutarının en az 50 milyon TL olması zorunludur; bu kural yetersiz likiditeyi önlemeyi amaçlar.",
                },
                {
                  strong: "Asgari Fon Toplam Değeri:",
                  text: "Faaliyet süresince, her ayın son iş günü yapılan değerlendirme itibarıyla fon toplam değerinin son üç aylık ortalama değerinin 25 milyon TL'nin altına düşemeyeceği hüküm altına alınmıştır.",
                },
                {
                  strong: "Yabancı Para Birimleri:",
                  text: "Yatırım fonlarından farklı olarak, TCMB tarafından günlük alım-satım kurları ilan edilen yabancı para birimleri BYF portföylerine dahil edilebilir.",
                },
              ],
            },
            {
              heading: "Birincil-İkincil Piyasa İşlemleri ve Performans",
              icon: "trend",
              items: [
                {
                  strong: "Birincil Piyasa İşlemleri:",
                  text: "Belirli bir BYF payı (örn. 50.000 pay) ve katları karşılığında ayni ve/veya nakdi olarak gerçekleştirilir; bu nedenle birincil piyasa işlemleri büyük ölçüde nitelikli yatırımcılar tarafından kullanılır.",
                },
                {
                  strong: "Arbitraj Mekanizması:",
                  text: "İşlem fiyatı ile birim pay değeri arasında sapma olduğunda yatırımcılar 'creation' (oluşturma) ve 'redemption' (iade) işlemleriyle prim/iskontoyu kapatabilir; bu MKYO'larda görülen iskontolu işlem sorununu BYF'lerde ortadan kaldırır.",
                },
                {
                  strong: "Takip Farkı ve Takip Hatası:",
                  text: "Eski mevzuattaki %90'lık korelasyon zorunluluğu kaldırılmış, yerine 'tracking difference' (takip farkı) ve 'tracking error' (takip hatası) kavramları getirilmiştir; bu kriterlerin kamuya açıklanması zorunludur.",
                },
                {
                  strong: "Swap'a Dayalı BYF'ler:",
                  text: "Swap sözleşmelerine dayalı BYF'lerde karşı taraf riski fon toplam değerinin azami %10'u ile sınırlandırılmış olup, fon unvanında dolaylı endeks takibini belirtecek bir ibareye yer verilmesi zorunludur.",
                },
                {
                  strong: "Yönetim Ücreti Avantajı:",
                  text: "BYF'lerin yönetim ücretleri, klasik endeks fonlara kıyasla önemli ölçüde düşüktür; bu özellik düşük maliyetli pasif yatırım stratejisi için cazip kılar.",
                },
              ],
            },
          ],
          tip: "BYF, MKYO ve klasik yatırım fonu üçlüsü sınavda sıkça karşılaştırılır: tüzel kişiliği yalnızca MKYO'da var, ikincil piyasa işlemi yatırım fonunda yok, birincil piyasa işlemi yalnızca yatırım fonu ile BYF'de var. Birincil piyasa işlemleri sayesinde BYF'lerde MKYO'lardaki iskontolu işlem sorunu yaşanmaz.",
          kavramlar: [
            { terim: "BYF", tanim: "Borsa Yatırım Fonu; katılma payları borsada işlem gören, endeksi pasif olarak takip eden tüzel kişiliği olmayan açık uçlu fon." },
            { terim: "Birincil Piyasa İşlemi", tanim: "BYF'de büyük lotlar halinde (örn. 50.000 pay) ayni ve/veya nakdi olarak gerçekleştirilen katılma payı oluşturma veya iade etme işlemi." },
            { terim: "İkincil Piyasa İşlemi", tanim: "BYF paylarının borsada alıcı ile satıcı arasında normal hisse senedi gibi gerçekleşen alım-satım işlemleri." },
            { terim: "Creation/Redemption", tanim: "BYF'nin işlem fiyatını net varlık değerine (NAV) yakın tutan; yetkili katılımcıların arbitraj yapmasına dayanan birincil piyasa mekanizması." },
            { terim: "Takip Hatası (Tracking Error)", tanim: "BYF getirisi ile takip edilen endeks getirisi arasındaki dönemsel standart sapma; yönetim kalitesinin göstergesi." },
            { terim: "Takip Farkı (Tracking Difference)", tanim: "Belirli bir dönemde BYF'nin kümülatif getirisi ile endeks getirisi arasındaki fark; maliyetleri de yansıtır." },
            { terim: "Swap'a Dayalı BYF", tanim: "Endeks bileşenlerini fiziksel olarak değil swap sözleşmesiyle takip eden dolaylı yapıdaki BYF; karşı taraf riski %10 ile sınırlıdır." },
          ],
          dikkatlar: [
            "BYF portföyünün devamlı olarak en az %80'i takip edilen endeks kapsamındaki varlıklara yatırılmak zorundadır; bu oran BYF için mutlak alt sınırdır.",
            "Halka arz aşamasında asgari 50 milyon TL konulması zorunlu; faal dönemde fon toplam değerinin son üç aylık ortalaması 25 milyon TL'nin altına düşemez — iki farklı rakam karıştırılmamalı.",
            "Swap'a dayalı BYF'lerde karşı taraf riski fon toplam değerinin %10'unu aşamaz; fon unvanında 'dolaylı endeks' ibaresine yer verilmesi zorunludur.",
            "Birincil piyasa işlemleri büyük lotlar ve katlarıyla yapılır; bu nedenle bireysel yatırımcılar genellikle ikincil piyasada işlem yapar — 'birincil piyasa yatırımcıya açık değil' ifadesi yanıltıcıdır, teknik olarak açık ama pratikte erişilmez.",
            "Yatırım fonunda ikincil piyasa işlemi YOKTUR; BYF ve MKYO'da her ikisi de borsada işlem görür — üç araç arasındaki bu ayrım en sık sınav sorusu konusudur.",
          ],
        },
        questions: [
          {
            text: "III-52.2 sayılı Tebliğ uyarınca BYF'lerin halka arz aşamasında konulacak avans veya yapılacak halka arz tutarının asgari sınırı aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "10 milyon TL" },
              { id: "B", text: "25 milyon TL" },
              { id: "C", text: "50 milyon TL" },
              { id: "D", text: "100 milyon TL" },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca BYF katılma paylarının likiditesinin ve işlem hacminin çok düşük bir düzeyde gerçekleşmesinin önüne geçilmesi amacıyla halka arz aşamasında konulacak avans tutarının ya da yapılacak halka arz tutarının en az 50 milyon TL olması öngörülmüştür.",
          },
          {
            text: "Yatırım Fonu, Borsa Yatırım Fonu (BYF) ve Menkul Kıymet Yatırım Ortaklığı (MKYO) karşılaştırıldığında aşağıdakilerden hangisi YANLIŞTIR?",
            options: [
              { id: "A", text: "Yatırım fonunun ve BYF'nin tüzel kişiliği yokken, MKYO tüzel kişiliğe sahiptir." },
              { id: "B", text: "Yatırım fonu aktif yönetim, BYF pasif yönetim, MKYO ise aktif yönetim ile yönetilir." },
              { id: "C", text: "Yatırım fonunda ikincil piyasa işlemi yapılırken BYF'de yapılmaz." },
              { id: "D", text: "BYF ve MKYO katılma payları/payları borsada işlem görür." },
            ],
            correct: "C",
            explanation:
              "Yatırım fonlarında ikincil piyasa işlemi YOKTUR; yatırımcı katılma paylarını yalnızca kurucudan alıp ona iade eder. BYF ve MKYO'larda ise ikincil piyasa işlemleri tüm yatırımcılara açık ve nakdi olarak günlük gerçekleştirilir. Diğer üç ifade doğrudur.",
          },
          {
            text: "Bir BYF'nin portföyünün asgari ne kadarı, takip ettiği endeks kapsamındaki varlıklara devamlı olarak yatırılmak zorundadır?",
            options: [
              { id: "A", text: "%51" },
              { id: "B", text: "%70" },
              { id: "C", text: "%80" },
              { id: "D", text: "%100" },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca BYF'lerin portföylerinin en az %80'ini devamlı olarak sadece takip edilen endeks kapsamındaki varlıklara yatırmaları zorunludur. Aynı %80 oranı, takip edilen endeksi takip eden yabancı borsalarda işlem gören BYF katılma payları için de geçerlidir.",
          },
          {
            text: "Swap sözleşmelerine dayalı BYF'lerde karşı taraf riski fon toplam değerinin azami yüzde kaçı ile sınırlandırılmıştır?",
            options: [
              { id: "A", text: "%5" },
              { id: "B", text: "%10" },
              { id: "C", text: "%20" },
              { id: "D", text: "%25" },
            ],
            correct: "B",
            explanation:
              "Tebliğ'de swap sözleşmelerine dayalı BYF'ler için karşı taraf riskinin fon toplam değerinin azami %10'u ile sınırlandırıldığı düzenlenmiştir. Ayrıca bu fonların unvanlarında dolaylı endeks takibini belirtecek bir ibareye yer verilmesi zorunludur.",
          },
          {
            text: "BYF'lerin MKYO'lara üstünlüğünün temel sebebi olarak Tebliğ ve uygulamada ortaya konulan en önemli mekanizma aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "BYF'lerde yatırım danışmanlığı zorunluluğunun bulunması" },
              { id: "B", text: "Birincil piyasa işlemleri (creation/redemption) sayesinde işlem fiyatının fon birim pay değerine çok yakın seyretmesi ve önemli iskonto/primin önlenmesi" },
              { id: "C", text: "BYF'lerin sadece kurumsal yatırımcılara açık olması" },
              { id: "D", text: "BYF'lerin Kurul denetimine tabi olmaması" },
            ],
            correct: "B",
            explanation:
              "BYF'lerin MKYO'lara temel üstünlüğü, birincil piyasa creation/redemption mekanizmasıdır: işlem fiyatının birim pay değerinden sapması durumunda yatırımcılar arbitraj yaparak fiyatı dengeler. Bu sayede MKYO'larda görülen iskontolu işlem sorunu BYF'lerde önemli ölçüde çözülmüştür.",
          },
        ],
      },
      // ──────────────────── Ders 5: GYF ve GSYF ────────────────────
      {
        id: "m1002-l5",
        title: "Gayrimenkul ve Girişim Sermayesi Yatırım Fonları (III-52.3 / III-52.4)",
        duration: "10 dk",
        summary: {
          title: "Gayrimenkul ve Girişim Sermayesi Yatırım Fonları",
          intro:
            "III-52.3 sayılı Gayrimenkul Yatırım Fonu (GYF) Tebliği ve III-52.4 sayılı Girişim Sermayesi Yatırım Fonu (GSYF) Tebliği, nitelikli yatırımcıların alternatif yatırım enstrümanlarına erişimini düzenler. Bu fonlar tüzel kişiliği bulunmayan, portföy yönetim şirketleri tarafından kurulan ve inançlı mülkiyet esaslarına göre profesyonel yönetilen kapalı uçlu yapılardır. Her ikisi de yalnızca nitelikli yatırımcılara satılabilir.",
          sections: [
            {
              heading: "Gayrimenkul Yatırım Fonu (GYF) Esasları",
              icon: "shield",
              items: [
                {
                  strong: "Tanım ve Hukuki Yapı:",
                  text: "GYF; nitelikli yatırımcılardan toplanan paralarla, pay sahipleri hesabına inançlı mülkiyet esaslarına göre Kurulca belirlenmiş varlık ve haklardan oluşan portföyü işletmek amacıyla PYŞ tarafından kurulan ve tüzel kişiliği bulunmayan malvarlığıdır.",
                },
                {
                  strong: "Asgari Gayrimenkul Yatırımı:",
                  text: "Fon toplam değerinin en az %80'inin gayrimenkul yatırımlarından oluşması zorunludur; bu eşik GYO'larda %51 iken GYF'de %80'e çıkmaktadır.",
                },
                {
                  strong: "Sadece Nitelikli Yatırımcılara Satış:",
                  text: "GYF katılma payları yalnızca nitelikli yatırımcılara satılabilir; bu nedenle izahname yerine ihraç belgesi düzenlenir.",
                },
                {
                  strong: "Süreli ve Süresiz Fonlar:",
                  text: "GYF'ler süreli veya süresiz olarak kurulabilir; süresi sona eren fonlar Kurul izniyle tasfiye edilir, varlıklar nakde dönüştürülerek pay sahiplerine dağıtılır.",
                },
                {
                  strong: "Borçlanma:",
                  text: "GYF'ler fon toplam değerinin azami %50'si oranında kredi kullanabilir; ipotek tesisi mümkündür.",
                },
              ],
            },
            {
              heading: "Girişim Sermayesi Yatırım Fonu (GSYF) Esasları",
              icon: "trend",
              items: [
                {
                  strong: "Tanım:",
                  text: "GSYF; nitelikli yatırımcılardan katılma payı karşılığı toplanan paralarla, pay sahipleri hesabına inançlı mülkiyet esasları çerçevesinde girişim sermayesi yatırımlarından oluşan portföyü işletmek amacıyla kurulan kapalı uçlu fondur.",
                },
                {
                  strong: "Asgari Girişim Sermayesi Yatırımı:",
                  text: "Fon toplam değerinin en az %80'inin girişim sermayesi yatırımlarına yönlendirilmesi zorunludur; kalan kısım sermaye piyasası araçları, mevduat ve ters repo gibi likit varlıklara yatırılabilir.",
                },
                {
                  strong: "Yatırım Komitesi:",
                  text: "GSYF kuran PYŞ bünyesinde, en az üç kişilik yatırım komitesinin oluşturulması zorunludur; üyelerinin girişim sermayesi yatırımlarında en az 5 yıllık tecrübeye sahip olması gerekir.",
                },
                {
                  strong: "Süre Sınırı:",
                  text: "GSYF'ler en fazla 12 yıllık süreyle kurulabilir; bu süre Kurul izniyle uzatılabilir.",
                },
                {
                  strong: "Vergisel Avantaj:",
                  text: "GSYF katılma paylarına yapılan yatırımlar belirli koşullarda kurumlar vergisi indirimine ve gelir vergisi istisnasına konu olabilir; bu avantaj GSYF'leri kurumsal yatırımcılar için cazip kılar.",
                },
              ],
            },
          ],
          tip: "GYO ile GYF, GSYO ile GSYF arasındaki temel ayrım hukuki yapıdadır: ortaklıklar (GYO/GSYO) tüzel kişiliğe sahip ve halka açık iken, fonlar (GYF/GSYF) tüzel kişiliği olmayan ve yalnızca nitelikli yatırımcılara açık yapılardır. Vergi avantajı açısından da GSYF, GSYO'ya kıyasla genellikle daha avantajlı bir yapı sunar.",
          kavramlar: [
            { terim: "GYF", tanim: "Gayrimenkul Yatırım Fonu; tüzel kişiliği olmayan, PYŞ tarafından kurulan, nitelikli yatırımcılara açık kapalı uçlu gayrimenkul fonu." },
            { terim: "GSYF", tanim: "Girişim Sermayesi Yatırım Fonu; tüzel kişiliği olmayan, nitelikli yatırımcılara açık, girişim şirketlerine yatırım yapan kapalı uçlu fon." },
            { terim: "Nitelikli Yatırımcı", tanim: "Mevzuatta belirlenen servet/deneyim eşiklerini aşan, karmaşık ve riskli ürünlere yatırım yapabilen profesyonel veya kurumsal yatırımcı." },
            { terim: "Kapalı Uçlu Fon", tanim: "Belirli bir süre veya süresiz olarak kurulan, katılma paylarının vadeden önce iade edilemediği, likiditesi sınırlı fon yapısı." },
            { terim: "İhraç Belgesi", tanim: "GYF ve GSYF katılma payları için izahname yerine düzenlenen, nitelikli yatırımcılara sunulan daha basit bilgi dokümanı." },
            { terim: "Yatırım Komitesi", tanim: "GSYF bünyesinde en az 3 kişiden oluşan, girişim sermayesi yatırım kararlarını veren; üyelerinde en az 5 yıl tecrübe aranan komite." },
            { terim: "GYO-GYF Karşılaştırması", tanim: "GYO: tüzel kişi + halka açık + %51 gayrimenkul; GYF: tüzel kişiliği yok + sadece NKY + %80 gayrimenkul oranı zorunluluğu." },
          ],
          dikkatlar: [
            "GYF'de gayrimenkul yatırımı oranı en az %80 olmalıdır; GYO'da bu oran %51'dir — oran farkı sınavın en temel karşılaştırma sorusudur.",
            "GSYF en fazla 12 yıllık süreyle kurulabilir; bu süre Kurul izniyle uzatılabilir — '10 yıl' seçeneği yanıltıcıdır.",
            "GSYF yatırım komitesinde en az 3 üye bulunmalı; ilgili üyeler girişim sermayesinde en az 5 yıl tecrübeli olmalıdır — 'en az 2 yıl' veya '3 kişi' gibi hatalı seçenekler sunulabilir.",
            "GYF borçlanma limiti fon toplam değerinin %50'sidir; GYO'da ise özsermayenin 5 katı esas alınır — iki farklı hesaplama yöntemi karıştırılmamalı.",
            "GYF ve GSYF katılma payları borsada işlem görmez, yalnızca nitelikli yatırımcılara ihraç belgesiyle satılır — 'BİAŞ'ta işlem görür' ifadesi yanlıştır.",
          ],
        },
        questions: [
          {
            text: "III-52.3 sayılı Tebliğ uyarınca bir Gayrimenkul Yatırım Fonu'nun (GYF) toplam değerinin asgari ne kadarı gayrimenkul yatırımlarından oluşmak zorundadır?",
            options: [
              { id: "A", text: "%51" },
              { id: "B", text: "%70" },
              { id: "C", text: "%80" },
              { id: "D", text: "%100" },
            ],
            correct: "C",
            explanation:
              "GYF'ler için fon toplam değerinin en az %80'inin gayrimenkul yatırımlarından oluşması zorunludur. Bu oran GYO'larda %51 iken GYF'de %80'e çıkmaktadır; çünkü GYF'ler sadece nitelikli yatırımcılara açık olduğu için yatırımcı korumasının yanı sıra portföy konsantrasyonu daha sıkı tutulur.",
          },
          {
            text: "Aşağıdakilerden hangisi GYF ile GYO arasındaki TEMEL farklardan biridir?",
            options: [
              { id: "A", text: "GYF tüzel kişiliğe sahip iken GYO tüzel kişiliği bulunmayan bir yapıdır." },
              { id: "B", text: "GYF yalnızca nitelikli yatırımcılara açık iken GYO halka açık bir ortaklık yapısıdır." },
              { id: "C", text: "GYF'ler Kurul denetimine tabi değil, GYO'lar ise tabidir." },
              { id: "D", text: "GYF'lerde gayrimenkul yatırım oranı %25 iken GYO'larda %51'dir." },
            ],
            correct: "B",
            explanation:
              "Temel ayrım yatırımcı kitlesi ve hukuki yapıdadır: GYF tüzel kişiliği olmayan, sadece nitelikli yatırımcılara satılabilen kapalı uçlu fondur; GYO ise tüzel kişiliği haiz, halka açık anonim ortaklık yapısıdır. Diğer üç seçenek tanımlara aykırıdır.",
          },
          {
            text: "Bir Girişim Sermayesi Yatırım Fonu (GSYF) en fazla kaç yıllık süreyle kurulabilir?",
            options: [
              { id: "A", text: "5 yıl" },
              { id: "B", text: "8 yıl" },
              { id: "C", text: "10 yıl" },
              { id: "D", text: "12 yıl" },
            ],
            correct: "D",
            explanation:
              "Tebliğ uyarınca GSYF'ler en fazla 12 yıllık süreyle kurulabilir. Bu süre, fon süresinin sonunda Kurul izniyle uzatılabilir; ancak temel sınır 12 yıldır. Girişim sermayesi yatırımlarının olgunlaşma süresi göz önünde bulundurularak bu uzun vade öngörülmüştür.",
          },
          {
            text: "GSYF kuran bir Portföy Yönetim Şirketi bünyesinde oluşturulması zorunlu olan yatırım komitesi ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "En az 5 kişiden oluşmalıdır." },
              { id: "B", text: "En az üç kişiden oluşmalı; üyelerin girişim sermayesi yatırımlarında en az 5 yıllık tecrübesi olmalıdır." },
              { id: "C", text: "Tamamı yönetim kurulu üyelerinden oluşmak zorundadır." },
              { id: "D", text: "Yalnızca bağımsız üyelerden teşkil edilebilir." },
            ],
            correct: "B",
            explanation:
              "PYŞ Tebliği'nin GSYF'ye ilişkin hükümlerine göre Şirket bünyesinde en az üç kişilik bir yatırım komitesinin oluşturulması ve üyelerinden ilgili kişilerin girişim sermayesi yatırımları konusunda en az 5 yıllık tecrübeye sahip olması zorunludur.",
          },
          {
            text: "Aşağıdakilerden hangisi bir GYF'nin temel özelliklerinden biri DEĞİLDİR?",
            options: [
              { id: "A", text: "PYŞ tarafından kurulması ve yönetilmesi" },
              { id: "B", text: "Tüzel kişiliği bulunmaması ve inançlı mülkiyet esaslarına göre işletilmesi" },
              { id: "C", text: "Katılma paylarının BİAŞ'ta tüm yatırımcılara açık olarak işlem görmesi" },
              { id: "D", text: "Fon toplam değerinin azami %50'si oranında kredi kullanabilmesi" },
            ],
            correct: "C",
            explanation:
              "GYF'lerin katılma payları BİAŞ'ta TÜM yatırımcılara açık olarak işlem GÖRMEZ; çünkü GYF katılma payları yalnızca nitelikli yatırımcılara satılabilir. Diğer üç özellik (PYŞ tarafından kurulma, tüzel kişiliği olmama, %50 kredi sınırı) GYF Tebliği'ne uygundur.",
          },
        ],
      },
      // ──────────────────── Ders 6: Sermaye Piyasası Çalışanları Etik İlkeleri ────────────────────
      {
        id: "m1002-l6",
        title: "Sermaye Piyasası Çalışanları Etik İlkeleri ve Davranış Kuralları",
        duration: "8 dk",
        summary: {
          title: "Sermaye Piyasası Çalışanları Etik İlkeleri",
          intro:
            "Türkiye Sermaye Piyasaları Birliği (TSPB) tarafından yayımlanan Sermaye Piyasası Çalışanları Etik İlkeleri ve Davranış Kuralları, sermaye piyasası faaliyetinde bulunan tüm çalışanların mesleki davranışlarına yönelik bağlayıcı standartlar getirir. Etik ilkelerin temelinde 'mesleki uzmanlık' vardır; çalışan, yasal çerçeveyi tam ve yetkin biçimde bilmek, müşteri çıkarını korumak ve piyasanın bütünlüğünü gözetmekle yükümlüdür.",
          sections: [
            {
              heading: "Mesleki Uzmanlık Davranış Kuralları",
              icon: "shield",
              items: [
                {
                  strong: "Mevzuatın Bilinmesi:",
                  text: "Sermaye piyasası çalışanı, sermaye piyasası ve ilgili diğer mevzuatı, kurum içi düzenlemeleri öğrenmeli, kendini güncel tutmalı ve bunlara uymalıdır. Mevzuatlar arasında çelişki olduğunda daha katı olan düzenlemeye göre hareket etmelidir.",
                },
                {
                  strong: "Bağımsızlık ve Tarafsızlık:",
                  text: "Çalışan, kendisinin veya başkalarının bağımsızlığına gölge düşürebilecek hediye, menfaat veya maddi karşılık sağlamamalı; mütevazı hediyeler dışında her türlü teklifi reddetmelidir.",
                },
                {
                  strong: "İçsel Bilgilerin Kullanılmaması:",
                  text: "Çalışan, içsel bilgiyi kullanarak işlem yapamaz; bilginin fiyatlara yansıyıp yansımamasından bağımsız olarak içsel bilgi kullanımı davranış kuralının ihlali sayılır.",
                },
                {
                  strong: "Mesleki Uzmanlığa Uygun Olmayan Davranış:",
                  text: "Sahtekârlık, hile veya aldatma içeren hiçbir mesleki davranışta bulunulamaz; profesyonel dürüstlüğü, itibarı veya yetkinliği zedeleyen tüm davranışlar bu kuralın ihlali sayılır.",
                },
                {
                  strong: "Daha Katı Düzenlemeye Uyma:",
                  text: "Türk mevzuatı ile yabancı ülke mevzuatı arasında çelişki olduğunda veya bir konu hiç düzenlenmediğinde, çalışan daha katı olan düzenlemeye uymalıdır.",
                },
              ],
            },
            {
              heading: "Müşteri Sorumluluğu ve İhlallerin Bildirilmesi",
              icon: "trend",
              items: [
                {
                  strong: "Müşteri Çıkarına Hareket:",
                  text: "Çalışan, müşterinin çıkarlarını kendi veya kurumunun çıkarlarının üstünde tutmak ve müşteriye uygun olmayan ürün veya hizmeti uyararak bildirmekle yükümlüdür.",
                },
                {
                  strong: "Mütevazı Hediye Sınırı:",
                  text: "Mütevazı nitelikteki hediyeler kabul edilebilir; ancak müşteri menfaatleriyle çatışacak örtük veya açık önerilerin reddedilmesi esastır. Lüks eğlence, pahalı bilet veya halka arzlarda öncelik vaadi gibi teklifler kabul edilmez.",
                },
                {
                  strong: "İhlallerin Bildirilmesi:",
                  text: "Çalışan, kurumunda mevzuata aykırı iş ve işlem fark ettiğinde önce sıralı amirlerine bildirir; sonuç alamadığında SPK, MASAK ve/veya TSPB'ye bildirim yapma yükümlülüğü doğar.",
                },
                {
                  strong: "İlişki Kesme Yükümlülüğü:",
                  text: "Bildirim ve uyarılarına rağmen aykırılık devam ettiğinde çalışan, söz konusu eylemle veya gerekirse kurumla ilişkisini kesmek zorundadır.",
                },
                {
                  strong: "Uyum Birimine Başvuru:",
                  text: "Mevzuatın uygulanmasında çelişkili durumlarda, çalışan kurumun mevzuata uyum biriminden veya hukuk bölümünden destek almakla yükümlüdür.",
                },
              ],
            },
          ],
          tip: "Etik ilkelerde 'daha katı olan düzenlemeye uyma' kuralı temel pusuladır: iki mevzuat çelişiyorsa veya konu hiç düzenlenmemişse, çalışan her zaman daha sıkı olan kurala uyacaktır. İçsel bilgi kullanımı ise bilginin fiyata yansıyıp yansımadığına bakılmaksızın ihlal teşkil eder — bu ayrım sınavda çelmeli soru olarak sıkça karşımıza çıkar.",
          kavramlar: [
            { terim: "Mesleki Uzmanlık", tanim: "Sermaye piyasası çalışanının mevzuatı tam ve yetkin biçimde öğrenip uygulaması; bilgi eksikliğini 'mazeret' saymaması yükümlülüğü." },
            { terim: "Bağımsızlık İlkesi", tanim: "Çalışanın hediye, menfaat veya baskıyla bağımsızlığını yitirmemesini; mütevazı hediyeler dışında her teklifi reddetmesini gerektiren ilke." },
            { terim: "Daha Katı Düzenlemeye Uyma", tanim: "İki mevzuat çeliştiğinde veya konu düzenlenmediğinde, çalışanın her zaman daha sıkı olan kurala uyması zorunluluğu." },
            { terim: "İçsel Bilgi", tanim: "Kamuoyuna açıklanmamış, şirket pay fiyatını etkileyebilecek nitelikteki gizli bilgi; kullanımı hem yasal suç hem etik ihlaldir." },
            { terim: "Mütevazı Hediye", tanim: "Bağımsızlığı tehdit etmeyecek nitelikte, sembolik olarak kabul edilebilen hediyeler; lüks eğlence ve pahalı biletler bu kapsamda değildir." },
            { terim: "İhlal Bildirimi", tanim: "Çalışanın mevzuata aykırılığı önce sıralı amirlerine, sonuç alınamazsa SPK/MASAK/TSPB'ye bildirme yükümlülüğü." },
            { terim: "İlişki Kesme", tanim: "Uyarılara rağmen aykırılık sürdüğünde çalışanın söz konusu işlem veya gerekirse kurumla ilişkisini kesmesi zorunluluğu." },
          ],
          dikkatlar: [
            "İçsel bilginin kullanımı bilginin fiyata yansıyıp yansımamasından bağımsız olarak etik ihlaldir — 'fiyata zaten yansıdı, sorun yok' argümanı geçersizdir.",
            "İhlal bildirim sıralaması: önce sıralı amirler → sonuç alınamazsa SPK/MASAK/TSPB; doğrudan basına sızdırma etik dışı bir davranıştır.",
            "Mevzuat çelişkisinde en sıkı düzenleme geçerlidir; 'daha esnek olan uygulanır' veya 'çalışan seçim yapabilir' ifadeleri yanlıştır.",
            "Lüks eğlence davetleri, pahalı konser biletleri ve halka arz önceliği vaadi mütevazı hediye sayılmaz; bunların kabulü etik ihlaldir.",
            "Sır saklama yükümlülüğü görevden ayrıldıktan sonra da devam eder; 'yalnızca çalışma süresinde geçerli' ifadesi yanlıştır.",
          ],
        },
        questions: [
          {
            text: "Bir sermaye piyasası çalışanı, yurtdışında inceleme yaptığı bir şirkete ilişkin henüz kamuya açıklanmamış ve şirketin piyasa değerini etkileyebilecek bir bilgi edinmiştir. İlgili ülkede bilgi suistimali suçu düzenlenmemiştir. Çalışanın yapması gereken nedir?",
            options: [
              { id: "A", text: "Bilgiyi serbestçe kullanabilir, çünkü ilgili ülke mevzuatı buna izin vermektedir." },
              { id: "B", text: "Türk mevzuatındaki daha katı kurala uymalı ve bu bilgiyi tavsiyelerinde kullanmamalıdır." },
              { id: "C", text: "Bilgiyi yalnızca kurum içi paylaşıma açabilir." },
              { id: "D", text: "Bilgiyi sadece kurumsal yatırımcılarla paylaşabilir." },
            ],
            correct: "B",
            explanation:
              "Etik İlkelerin 'Mevzuatın Bilinmesi' davranış kuralına göre, mevzuatlar arasında uyumsuzluk veya çelişki olması durumunda veya bir ülkede konunun düzenlenmemiş olması halinde, sermaye piyasası çalışanı daha katı olan düzenlemeye uymalıdır. Türk mevzuatında bilgi suistimali yasak olduğundan çalışan bu bilgiyi kullanamaz.",
          },
          {
            text: "TSPB Sermaye Piyasası Çalışanları Etik İlkelerine göre, çalışanın 'Bağımsızlık ve Tarafsızlık' davranış kuralı kapsamında değerlendirildiğinde aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Çalışan, müşterilerden istediği her türlü hediyeyi kabul edebilir." },
              { id: "B", text: "Lüks eğlencelere davet, pahalı gösteri biletleri veya halka arzlarda öncelik gibi menfaatler kabul edilebilir." },
              { id: "C", text: "Mütevazı hediyeler kabul edilebilir; ancak bağımsızlığı tehdit edebilecek her türlü teklifin reddedilmesi esastır." },
              { id: "D", text: "Yalnızca yöneticilerin hediye kabul etme yasağı vardır, diğer çalışanlar bu kuralın dışındadır." },
            ],
            correct: "C",
            explanation:
              "Etik İlkelerde mütevazı nitelikteki hediyelerin kabul edilebilir olduğu, ancak çalışanın bağımsızlığına ve tarafsızlığına gölge düşürebilecek her türlü hediye veya menfaat teklifinin reddedilmesinin esas olduğu açıkça düzenlenmiştir. Lüks eğlence ve halka arz önceliği gibi teklifler bu kapsamda kabul edilemez.",
          },
          {
            text: "Bir aracı kurumda çalışan Nil, mevzuata aykırı işlemler tespit etmesine rağmen kurumun uyum birimi 'gereksiz' diyerek konuyu kapatmıştır. Etik İlkelere göre Nil'in yapması gereken nedir?",
            options: [
              { id: "A", text: "Uyum birimi karar verdiği için artık herhangi bir sorumluluğu yoktur." },
              { id: "B", text: "Yalnızca konu hakkında not tutarak kendi sorumluluğunu kaldırabilir." },
              { id: "C", text: "Konuyu sıralı amirlerine bildirmeli; sonuç alamadığında işlemden kaçınarak SPK, MASAK ve/veya TSPB'ye bildirim yapmalıdır." },
              { id: "D", text: "Doğrudan basına bilgi sızdırmalıdır." },
            ],
            correct: "C",
            explanation:
              "Etik İlkelerde, uyum birimi görüşünün mevzuata aykırılığı kabul etmediği durumlarda dahi çalışan sorumluluktan kurtulmaz. Çalışan önce sıralı amirlerini bilgilendirmeli, sonuç alamadığında iş ve işlemden uzaklaşıp SPK, MASAK ve/veya TSPB'ye bildirim yapmalıdır. Basına sızdırma etik bir yöntem değildir.",
          },
          {
            text: "Etik İlkeler kapsamında 'içsel bilgilerin kullanılmaması' kuralı bakımından aşağıdakilerden hangisi doğrudur?",
            options: [
              { id: "A", text: "Bilgi fiyata yansımışsa kullanılması davranış kuralı ihlali sayılmaz." },
              { id: "B", text: "Bilginin fiyatlara yansıyıp yansımadığına bakılmaksızın içsel bilginin kullanılması davranış kuralı ihlalidir." },
              { id: "C", text: "İçsel bilgi yalnızca yöneticiler tarafından kullanılabilir." },
              { id: "D", text: "Bilginin kasten değil ihmalle kullanılması davranış kuralı ihlali sayılmaz." },
            ],
            correct: "B",
            explanation:
              "Çalışma notunda açıkça belirtildiği üzere, içsel bilgilerin kullanımı davranış kuralı bilginin fiyatlara yansıyıp yansımadığıyla ilgili değildir; bilginin kullanılması yeterlidir. Ayrıca ihmalkâr davranma da ihlal sayılır; örneğin bilginin içsel olduğunu bilmesine rağmen kullanan çalışan hem suç hem de davranış kuralı ihlali işlemiş olur.",
          },
          {
            text: "Aşağıdakilerden hangisi 'Mesleki Uzmanlığa Uygun Olmayan Davranış' kuralının ihlali sayılır?",
            options: [
              { id: "A", text: "Çalışanın yıllık eğitim seminerlerine katılması" },
              { id: "B", text: "Çalışanın mevzuatı yakından takip etmesi" },
              { id: "C", text: "Yalan, aldatma, hırsızlık ve diğer dürüst olmayan eylemlerde bulunma" },
              { id: "D", text: "Müşterilerle yazılı sözleşme imzalanması" },
            ],
            correct: "C",
            explanation:
              "Mesleki Uzmanlığa Uygun Olmayan Davranış kuralı; profesyonel dürüstlüğü, itibarı veya yetkinliği zedeleyen tüm davranışları ele alır. Yalan, aldatma, hırsızlık ve diğer dürüst olmayan davranışları içeren herhangi bir eylem davranış kuralının ihlali anlamına gelir. Diğer üç seçenek olumlu profesyonel davranışlardır.",
          },
        ],
      },
    ],
  },
];