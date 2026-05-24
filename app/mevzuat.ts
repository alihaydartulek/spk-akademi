/* ─────────────────────────────────────────────────────────────────────────────
 * SPL Akademi — İçerik Verileri
 *
 * Bu dosya, sitedeki tüm modül/ders/özet/soru içeriğini barındırır.
 * page.tsx yalnızca görsel kodları içerir ve içeriği buradan import eder.
 *
 * Yeni içerik eklemek istediğinde sadece bu dosyayı düzenlemen yeterli.
 * ────────────────────────────────────────────────────────────────────────── */

/* ─────────── Tip Tanımları ─────────── */

export type Question = {
  text: string;
  options: { id: string; text: string }[];
  correct: string;
  explanation: string;
};

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  summary: {
    title: string;
    intro: string;
    sections: {
      heading: string;
      icon: "shield" | "trend";
      items: { strong: string; text: string }[];
    }[];
    tip: string;
  };
  questions: Question[];
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

/* ─────────── İçerik ─────────── */

export const mevzuatVerisi: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL 1 — SERMAYE PİYASASI KANUNU
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1",
    title: "Modül 1 · Sermaye Piyasası Kanunu",
    lessons: [
      {
        id: "l1-1",
        title: "Sermaye Piyasası Kavramı ve Unsurları",
        duration: "8 dk",
        summary: {
          title: "Sermaye Piyasası Kavramı ve Unsurları",
          intro:
            "Sermaye piyasası; orta ve uzun vadeli ödünç verilebilir fonların, sermaye piyasası araçlarının alım satımı yoluyla tasarruf sahiplerinden fon talep edenlere aktarıldığı ve bu iki kesim arasında doğrudan finansman köprüsü kurulmasını sağlayan piyasanın adıdır. Para piyasasıyla birlikte finans piyasasının bir alt türünü oluşturur; özellikle riski dağıtma, mülkiyeti tabana yayma ve likidite sağlama fonksiyonları sermaye piyasasına özgüdür.",
          sections: [
            {
              heading: "Birincil ve İkincil Piyasa Ayrımı",
              icon: "shield",
              items: [
                {
                  strong: "Birincil Piyasa:",
                  text: "Sermaye piyasası araçlarının ihraççı tarafından ilk kez piyasaya çıkarılarak alıcılara satıldığı piyasadır; ihraççıya doğrudan fon akışı sağlar.",
                },
                {
                  strong: "İkincil Piyasa:",
                  text: "Daha önce ihraç edilmiş araçların yatırımcılar arasında alınıp satıldığı piyasadır; likidite, fiyat oluşumu ve vade belirleme fonksiyonlarını üstlenir.",
                },
                {
                  strong: "Spot ve Vadeli Piyasalar:",
                  text: "Spot piyasada işlem ve teslim aynı anda yapılır (Pay Piyasası, Tahvil ve Bono Piyasası); vadeli piyasalar forward, swap, futures ve opsiyon işlemlerini kapsar.",
                },
              ],
            },
            {
              heading: "Sermaye Piyasasının Beş Unsuru",
              icon: "trend",
              items: [
                {
                  strong: "Fon Talep Edenler (İhraççılar):",
                  text: "SPKn md. 3/1-h uyarınca sermaye piyasası araçlarını ihraç eden, bunun için Kurula başvuran veya araçları halka arz edilen tüzel kişiler ile yatırım fonlarıdır; gerçek kişiler ihraçcı olamaz.",
                },
                {
                  strong: "Fon Arz Edenler (Yatırımcılar):",
                  text: "Bireysel-kurumsal, nitelikli-nitelikli olmayan şeklinde sınıflandırılır. Nitelikli yatırımcı, II-5.2 sayılı Tebliğ kapsamında talebe dayalı kabul edilenler dahil profesyonel müşterileri ifade eder.",
                },
                {
                  strong: "Sermaye Piyasası Araçları:",
                  text: "İhraç ve alım yoluyla taraflar arasında ortaklık veya borç-alacak ilişkisi kuran, fon transferinin temelini oluşturan enstrümanlardır.",
                },
                {
                  strong: "Yardımcı Kuruluşlar:",
                  text: "SPKn md. 35'te 'sermaye piyasası kurumları' başlığı altında sayılır: yatırım kuruluşları, kolektif yatırım kuruluşları, bağımsız denetim, değerleme, derecelendirme şirketleri, portföy yönetim şirketleri, ipotek finansmanı kuruluşları, varlık kiralama şirketleri ve merkezi takas-saklama kuruluşları.",
                },
                {
                  strong: "Borsalar ve Teşkilatlanmış Diğer Piyasalar:",
                  text: "Likidite, fiyat oluşumu, ekonominin göstergesi olma, itibar sağlama ve öz düzenleyici kuruluş olarak meslek kurallarını belirleme fonksiyonlarını yürütür.",
                },
              ],
            },
          ],
          tip: "İkincil piyasa ihraççıya fon sağlamaz; yalnızca yatırımcılar arasında el değiştirme sağlar. Buna rağmen birincil piyasa fiyatlarını doğrudan etkilediği için 'fiyat keşfi' fonksiyonu sınav sorularında sıkça karşımıza çıkar.",
        },
        questions: [
          {
            text: "Aşağıdakilerden hangisi sermaye piyasasının 6362 sayılı SPKn md. 35'te sayılan 'sermaye piyasası kurumları' arasında yer almaz?",
            options: [
              { id: "A", text: "Portföy yönetim şirketleri" },
              { id: "B", text: "Varlık kiralama şirketleri" },
              { id: "C", text: "Mevduat bankaları" },
              { id: "D", text: "Veri depolama kuruluşları" },
            ],
            correct: "C",
            explanation:
              "SPKn md. 35'te sermaye piyasası kurumları sayılırken mevduat bankaları yer almaz; bankalar bu kapsamda olmayıp, sermaye piyasası faaliyetlerine ancak yetki belgesi ile katılabilirler. Diğer üç seçenek doğrudan maddede sayılmaktadır.",
          },
          {
            text: "Likidite sağlama, fiyatın belirlenmesine katkı sunma ve borçlanma araçlarının vadelerinin belirlenmesi fonksiyonları öncelikle hangi piyasaya özgüdür?",
            options: [
              { id: "A", text: "Birincil piyasa" },
              { id: "B", text: "İkincil piyasa" },
              { id: "C", text: "Tezgâhüstü piyasa" },
              { id: "D", text: "Para piyasası" },
            ],
            correct: "B",
            explanation:
              "Birincil piyasa yalnızca ihraççıya fon sağlar. Likidite, fiyat oluşumu ve vade belirleme ise yatırımcılar arasında alım satımın gerçekleştiği ikincil piyasanın temel üç fonksiyonudur.",
          },
          {
            text: "6362 sayılı SPKn md. 3/1-h kapsamında 'ihraççı' tanımı ile ilgili aşağıdakilerden hangisi yanlıştır?",
            options: [
              { id: "A", text: "Yatırım fonları, tüzel kişilikleri olmamasına rağmen ihraççı kapsamındadır." },
              { id: "B", text: "Donatma iştiraki sermaye piyasası aracı ihraç edebilir." },
              { id: "C", text: "Kitle fonlama platformları aracılığıyla para toplayanlar ihraççı tanımı dışında tutulmuştur." },
              { id: "D", text: "Gerçek kişiler ihraççı olamaz." },
            ],
            correct: "B",
            explanation:
              "SPKn md. 3/1-h'ye göre sermaye piyasası aracı ihracı, kural olarak tüzel kişilere ve yatırım fonlarına özgüdür. Donatma iştiraki tüzel kişiliği haiz olmadığı için ihraçcı olamaz; bu seçenek yanlıştır. Kitle fonlama yoluyla para toplayanlar tanım dışındadır.",
          },
          {
            text: "Vadeli piyasaların kapsamı ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
            options: [
              { id: "A", text: "Vadeli piyasalar yalnızca futures ve opsiyonları kapsar." },
              { id: "B", text: "Pay Piyasası ve Tahvil-Bono Piyasası vadeli piyasa örnekleridir." },
              { id: "C", text: "Forward, swap, futures ve opsiyon işlemlerinin tamamı vadeli piyasalar kapsamındadır." },
              { id: "D", text: "Spot piyasada teslim, işlemden 30 gün sonra gerçekleşir." },
            ],
            correct: "C",
            explanation:
              "Vadeli piyasalar; forward, swap, futures ve opsiyon işlemlerinin tümünü içerir. Pay Piyasası ile Tahvil-Bono Piyasası spot piyasalardır; spot piyasada işlem ve teslim eş zamanlı yapılır.",
          },
          {
            text: "Nitelikli yatırımcı kavramı ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
            options: [
              { id: "A", text: "Yalnızca kurumsal yatırımcıları kapsar." },
              { id: "B", text: "II-5.2 sayılı Tebliğ uyarınca, talebe dayalı profesyonel kabul edilenler dahil profesyonel müşterileri ifade eder." },
              { id: "C", text: "Tasarrufu 100.000 TL üzerinde olan tüm bireysel yatırımcıları kapsar." },
              { id: "D", text: "Halka arzlarda nitelikli yatırımcı sınıflandırması yapılamaz." },
            ],
            correct: "B",
            explanation:
              "II-5.2 sayılı Sermaye Piyasası Araçlarının Satışı Tebliği m. 4/1-m hükmünde nitelikli yatırımcı, 'Kurulun yatırım kuruluşlarına ilişkin düzenlemelerinde tanımlanan ve talebe dayalı olarak profesyonel kabul edilenler de dahil profesyonel müşteriler' olarak tanımlanmıştır. Bu kavram hem kurumsal yatırımcıları hem de belirli portföy büyüklüğündeki bireyleri kapsar.",
          },
        ],
      },
      {
        id: "l1-2",
        title: "6362 Sayılı SPKn'nun Amacı, Kapsamı ve Düzenleme İlkeleri",
        duration: "7 dk",
        summary: {
          title: "6362 Sayılı SPKn'nun Amacı, Kapsamı ve Düzenleme İlkeleri",
          intro:
            "30/12/2012 tarihinde yürürlüğe giren 6362 sayılı Sermaye Piyasası Kanunu, çerçeve kanun niteliğinde bir 'piyasa düzenleyici' metindir. Hazırlanmasında 6102 sayılı Türk Ticaret Kanunu'nun yürürlüğe girmesi, AB müktesebatına uyum, 2008 küresel krizinden çıkarılan dersler ve 2499 sayılı mülga Kanun'un yetersiz kalması belirleyici olmuştur.",
          sections: [
            {
              heading: "Kanunun Amacı ve Uygulama Alanı",
              icon: "shield",
              items: [
                {
                  strong: "Temel Amaç:",
                  text: "Sermaye piyasasının güvenilir, şeffaf, etkin, istikrarlı, adil ve rekabetçi bir ortamda işleyişini sağlamak; tasarruf sahiplerinin hak ve menfaatlerini korumaktır.",
                },
                {
                  strong: "Uygulama Alanı (md. 136):",
                  text: "Sınırlı olarak Kanuna tabi olan veya muafiyet kapsamında bulunan kurumlar dışında, halka açık ortaklıklar ile sermaye piyasası kurum ve kuruluşları Kanun kapsamındadır.",
                },
                {
                  strong: "Genel Hükümlerle İlişki (md. 2/2):",
                  text: "Bu Kanun ve ikincil mevzuatta hüküm bulunmayan ve diğer kanunlarda SPKn'nun uygulanmayacağının belirtildiği hâllerde TMK, TBK, TTK, TCK gibi genel hükümler uygulanır.",
                },
              ],
            },
            {
              heading: "Çerçeve Kanun Olmasının Üç Sonucu",
              icon: "trend",
              items: [
                {
                  strong: "İkincil Düzenleme Yetkisi:",
                  text: "Kanun ana esasları belirler; detayları SPK tebliğ ve ilke kararlarıyla düzenler. Bu yetki SPK'ya geniş bir hareket alanı tanır.",
                },
                {
                  strong: "Sürekli İzleme Gereği:",
                  text: "Düzenlemelerin piyasaya etkisi devamlı izlenmeli; piyasanın hassas ve dinamik yapısı nedeniyle sonuçlar hızla kendini gösterebilir.",
                },
                {
                  strong: "Yaptırım Yetkisi:",
                  text: "SPK md. 103 vd. uyarınca idari para cezası verebilir; md. 106 vd.'deki suçlar için Cumhuriyet Başsavcılıklarına suç duyurusunda bulunabilir.",
                },
              ],
            },
          ],
          tip: "SPKn'nun 'çerçeve kanun' niteliği, soyut hükümlerin Kurul tebliğleriyle somutlaşması anlamına gelir. Bu nedenle bir konunun çözümünde önce Kanun, ardından ilgili tebliğ ve son olarak ilke kararları zinciri takip edilir.",
        },
        questions: [
          {
            text: "6362 sayılı Sermaye Piyasası Kanunu'nun temel amaçlarından biri aşağıdakilerden hangisi DEĞİLDİR?",
            options: [
              { id: "A", text: "Piyasanın güvenilir, şeffaf ve adil işleyişini sağlamak" },
              { id: "B", text: "Tasarruf sahiplerinin hak ve menfaatlerini korumak" },
              { id: "C", text: "Halka açık şirketlerin kâr maksimizasyonunu garanti altına almak" },
              { id: "D", text: "Sermaye piyasasının istikrarlı ve rekabetçi bir ortamda işlemesini temin etmek" },
            ],
            correct: "C",
            explanation:
              "Kanunun amacı; piyasanın güvenli, şeffaf, etkin, istikrarlı, adil ve rekabetçi işleyişi ile yatırımcı korumasıdır. Bireysel şirketlerin kâr maksimizasyonu Kanun'un amaç hükmünde yer almaz.",
          },
          {
            text: "6362 sayılı SPKn'nun 'çerçeve kanun' niteliğinin doğrudan bir sonucu aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Tüm hükümlerinin emredici nitelikte olması" },
              { id: "B", text: "Detay düzenleme yetkisinin Sermaye Piyasası Kurulu'na bırakılması" },
              { id: "C", text: "Ortaklıklar arası sözleşmelerin Kanun'a uyma yükümlülüğünün ortadan kalkması" },
              { id: "D", text: "Genel hükümlerin uygulanmayacağının kabul edilmesi" },
            ],
            correct: "B",
            explanation:
              "Çerçeve kanun, ana esasları belirleyip detayları uzmanlaşmış kamu otoritesine bırakır. SPKn'nda da Kurul, Kanun'dan aldığı yetkiyle çizilen sınırlar dahilinde tebliğ ve ilke kararları çıkarmaktadır.",
          },
          {
            text: "Sermaye piyasası mevzuatında hüküm bulunmayan bir konuda hangi sıralama doğrudur?",
            options: [
              { id: "A", text: "Önce TTK, sonra SPKn, sonra Kurul tebliğleri uygulanır." },
              { id: "B", text: "Sermaye piyasası mevzuatı 'birincil mevzuat' statüsündedir; bu mevzuatta hüküm yoksa ve diğer kanunda SPKn'nun uygulanmayacağı belirtilmişse genel hükümler uygulanır." },
              { id: "C", text: "Sermaye piyasası alanında genel hükümler hiçbir koşulda uygulanamaz." },
              { id: "D", text: "Borçlar Kanunu, sermaye piyasası mevzuatına önceliklidir." },
            ],
            correct: "B",
            explanation:
              "SPKn md. 2/2 hükmü uyarınca, Kanun ve ikincil mevzuatta hüküm bulunmayan ve diğer kanunlarda bu Kanunun uygulanmayacağı belirtilen hâllerde genel hükümler uygulanır. Bu hüküm, sermaye piyasası mevzuatını birincil mevzuat statüsüne yükseltir.",
          },
          {
            text: "Sermaye Piyasası Kurulu'nun yetkilerinden biri olan 'idari para cezası verme yetkisi' SPKn'nun hangi maddelerinde düzenlenmiştir?",
            options: [
              { id: "A", text: "md. 103 vd." },
              { id: "B", text: "md. 106 vd." },
              { id: "C", text: "md. 89 vd." },
              { id: "D", text: "md. 35 vd." },
            ],
            correct: "A",
            explanation:
              "SPKn md. 103 ve devamı, idari para cezalarını düzenler. md. 106 vd. ise sermaye piyasası suçlarını içerir; md. 89 denetim yetkisini, md. 35 ise sermaye piyasası kurumlarını düzenler.",
          },
          {
            text: "6362 sayılı SPKn'nun hazırlanmasında belirleyici olan faktörler arasında aşağıdakilerden hangisi yer ALMAZ?",
            options: [
              { id: "A", text: "6102 sayılı Türk Ticaret Kanunu'nun yürürlüğe girmesi" },
              { id: "B", text: "AB müktesebatına uyum zorunluluğu" },
              { id: "C", text: "2008 küresel finans krizinden çıkarılan dersler" },
              { id: "D", text: "OECD'nin doğrudan üye ülkelere getirdiği bağlayıcı sermaye yeterlilik kuralları" },
            ],
            correct: "D",
            explanation:
              "Kanunun hazırlanmasında 6102 sayılı TTK'nun yürürlüğe girmesi, AB müktesebatına uyum, 2008 krizinden çıkarılan dersler ve 2499 sayılı mülga Kanun'un yetersiz kalması belirleyici olmuştur. OECD'nin sermaye yeterlilik kuralları ise SPKn için doğrudan bağlayıcı bir kaynak teşkil etmemiştir.",
          },
        ],
      },
      {
        id: "l1-3",
        title: "Sermaye Piyasası Suçları ve İdari Para Cezaları",
        duration: "9 dk",
        summary: {
          title: "Sermaye Piyasası Suçları ve İdari Para Cezaları",
          intro:
            "6362 sayılı SPKn, piyasanın bütünlüğünü ve yatırımcı güvenini korumak amacıyla özgün suç tipleri ve geniş kapsamlı idari yaptırım rejimi öngörmektedir. Suçlar md. 106-115'te, idari para cezaları ise md. 103 ve devamında düzenlenmiştir.",
          sections: [
            {
              heading: "Sermaye Piyasasına Özgü Temel Suçlar",
              icon: "shield",
              items: [
                {
                  strong: "Bilgi Suistimali (md. 106):",
                  text: "İçsel bilgiyi kullanarak sermaye piyasası aracında işlem yapmak suçtur; kasıt ve haksız yarar sağlama bu suçun temel unsurlarıdır.",
                },
                {
                  strong: "Piyasa Dolandırıcılığı (md. 107):",
                  text: "Yapay arz-talep yaratma, fiyat manipülasyonu, yanıltıcı bilgi yayma gibi fiilleri kapsar; ağır hapis ve adli para cezaları öngörülmüştür.",
                },
                {
                  strong: "Güveni Kötüye Kullanma ve Zimmet (md. 110):",
                  text: "Yatırım kuruluşlarında müşteri varlıklarının zimmete geçirilmesi 8-14 yıl hapis ve ağır adli para cezasıyla cezalandırılır.",
                },
                {
                  strong: "Kripto Varlık Hizmet Sağlayıcılarda Zimmet (md. 110/A):",
                  text: "2024 değişikliği ile eklenen bu hüküm, hizmet sağlayıcı yöneticilerinin müşteri varlıklarını zimmete geçirmesini ayrıca düzenler; hileli davranış halinde 14-20 yıl hapis öngörülür.",
                },
                {
                  strong: "Bilgi-Belge Vermeme, Sır Saklama İhlali (md. 111-113):",
                  text: "Kurul denetimine direnme, denetim sırasında istenen bilgileri açıklama suçları ayrı ayrı düzenlenmiş; 1-3 yıl hapis cezaları öngörülmüştür.",
                },
              ],
            },
            {
              heading: "İdari Para Cezalarının Yapısı",
              icon: "trend",
              items: [
                {
                  strong: "Genel İdari Para Cezası (md. 103/1):",
                  text: "Kurul düzenlemelerine, standart-formlara ve kararlara aykırılıkta belirlenen tutarlar arasında ceza verilir; tutarlar her yıl yeniden değerleme oranıyla güncellenir.",
                },
                {
                  strong: "Tüzel Kişiler İçin Hesaplama:",
                  text: "Aykırılığın ağırlığı ve mağdur sayısı dikkate alınarak, son bağımsız denetimden geçmiş yıllık brüt satış hasılatının %1'i ile vergi öncesi kârın %20'sinden yüksek olanına kadar ceza uygulanabilir.",
                },
                {
                  strong: "Menfaat Temin Edilmesi Hâli:",
                  text: "Aykırılık sonucu menfaat sağlanmışsa ceza, bu menfaatin iki katından az olamaz.",
                },
                {
                  strong: "Tekerrür Hâli:",
                  text: "Aynı kabahatin idari yaptırım kararı verilinceye kadar birden çok işlenmesi hâlinde ceza iki kat artırılır; menfaat varsa cezanın menfaat veya zararın üç katından az olamayacağı kuralı geçerlidir.",
                },
              ],
            },
          ],
          tip: "İdari para cezası ile adli para cezası birbirinden farklıdır: idari para cezası SPK'nın doğrudan tesis ettiği yaptırımdır, adli para cezası ise mahkeme kararıyla verilir ve hapis cezasının yanında uygulanabilir. Sınavda iki kavramın karıştırılmaması kritiktir.",
        },
        questions: [
          {
            text: "Bilgi suistimali (içeriden öğrenenlerin ticareti) suçu, 6362 sayılı SPKn'nun hangi maddesinde düzenlenmiştir?",
            options: [
              { id: "A", text: "md. 103" },
              { id: "B", text: "md. 106" },
              { id: "C", text: "md. 107" },
              { id: "D", text: "md. 110" },
            ],
            correct: "B",
            explanation:
              "Bilgi suistimali SPKn md. 106'da; piyasa dolandırıcılığı md. 107'de; zimmet ise md. 110'da düzenlenmiştir. md. 103 ise idari para cezalarını içerir.",
          },
          {
            text: "Bir yatırım kuruluşunda zimmet suçunun 'açığa çıkmamasını sağlamaya yönelik hileli davranışlarla' işlenmesi hâlinde verilecek hapis cezasının alt-üst sınırları nedir?",
            options: [
              { id: "A", text: "5-10 yıl" },
              { id: "B", text: "8-14 yıl" },
              { id: "C", text: "14-20 yıl" },
              { id: "D", text: "1-3 yıl" },
            ],
            correct: "C",
            explanation:
              "SPKn md. 110 uyarınca yatırım kuruluşlarında zimmet için temel ceza 8-14 yıldır; ancak suç hileli davranışlarla işlenmişse ceza 14 yıldan 20 yıla kadar hapis ve ağır adli para cezası olarak ağırlaştırılır.",
          },
          {
            text: "SPKn md. 103/1 kapsamında tüzel kişilere uygulanacak idari para cezası ile ilgili aşağıdakilerden hangisi doğrudur?",
            options: [
              { id: "A", text: "Tüzel kişilere yalnızca asgari maktu tutarda ceza verilir." },
              { id: "B", text: "Brüt satış hasılatının %5'i ile vergi öncesi kârın %50'si arasında ceza uygulanır." },
              { id: "C", text: "Brüt satış hasılatının %1'i ile vergi öncesi kârın %20'sinden yüksek olanına kadar ceza uygulanabilir." },
              { id: "D", text: "Tüzel kişilere idari para cezası verilemez; yalnızca temsilciye ceza uygulanır." },
            ],
            correct: "C",
            explanation:
              "md. 103/1 hükmüne göre tüzel kişiler için, asgari maktu tutardan az olmamak üzere, son bağımsız denetimden geçmiş yıllık finansal tablolardaki brüt satış hasılatının %1'i ile vergi öncesi kârın %20'sinden yüksek olanına kadar idari para cezası uygulanabilir.",
          },
          {
            text: "Aykırılık sonucu menfaat temin edilmesi hâlinde verilecek idari para cezası asgari ne kadar olabilir?",
            options: [
              { id: "A", text: "Temin edilen menfaatin yarısından az olamaz." },
              { id: "B", text: "Temin edilen menfaate eşit olmalıdır." },
              { id: "C", text: "Temin edilen menfaatin iki katından az olamaz." },
              { id: "D", text: "Maktu üst sınırı aşamaz." },
            ],
            correct: "C",
            explanation:
              "md. 103/1 hükmü açık biçimde, yükümlülüğe aykırılıktan menfaat temin edilmesi hâlinde verilecek idari para cezasının bu menfaatin iki katından az olamayacağını düzenlemektedir.",
          },
          {
            text: "SPKn md. 113 uyarınca, Kurul tarafından yürütülen inceleme veya denetim faaliyeti kapsamında istenen bilgi veya belgelere ilişkin olarak başkalarına açıklamada bulunan kişiler hakkında hangi yaptırım öngörülmüştür?",
            options: [
              { id: "A", text: "Yalnızca idari para cezası" },
              { id: "B", text: "1 yıldan 3 yıla kadar hapis ve adli para cezası" },
              { id: "C", text: "5 yıldan 10 yıla kadar hapis cezası" },
              { id: "D", text: "Sadece Birlik üyeliğinden çıkarma" },
            ],
            correct: "B",
            explanation:
              "SPKn md. 113'te 'sır saklama yükümlülüğünün ihlali' suçu düzenlenmiş olup; inceleme/denetim kapsamında istenen bilgi veya belgelere ilişkin olarak başkalarına açıklamada bulunanlar 1 yıldan 3 yıla kadar hapis ve beş bin güne kadar adli para cezası ile cezalandırılır.",
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // MODÜL 2 — ÖZEL DURUMLAR TEBLİĞİ (II-15.1)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m2",
    title: "Modül 2 · Özel Durumlar Tebliği (II-15.1)",
    lessons: [
      {
        id: "l2-1",
        title: "İçsel Bilgi Kavramı ve Açıklama Yükümlülüğü",
        duration: "8 dk",
        summary: {
          title: "İçsel Bilgi Kavramı ve Açıklama Yükümlülüğü",
          intro:
            "II-15.1 sayılı Özel Durumlar Tebliği, sermaye piyasası araçlarının değerini, fiyatını veya yatırımcıların yatırım kararlarını etkileyebilecek henüz kamuya açıklanmamış bilgi, olay ve gelişmeleri 'içsel bilgi' olarak tanımlamakta ve ihraççılar başta olmak üzere ilgili tarafların kamuyu aydınlatma yükümlülüklerini düzenlemektedir.",
          sections: [
            {
              heading: "Açıklama Yükümlülüğünün Kapsamı",
              icon: "shield",
              items: [
                {
                  strong: "Tebliğ Yükümlülüklerine Tabi Olanlar:",
                  text: "İşlem sırası geçici kapatılmış olanlar dahil halka açık ortaklık statüsü kazananlar, payları borsada işlem gören ihraççılar ve ilgili taraflar; pay dışındaki sermaye piyasası araçlarını yurt içinde halka arz edip payları borsada işlem görmeyen ihraççılar; kira sertifikası ihraçlarında fon kullanıcıları (kısıtlı bölümlerle).",
                },
                {
                  strong: "Tebliğ Yükümlülüklerine Tabi Olmayanlar:",
                  text: "Yurt dışında sermaye piyasası aracı ihraç eden ancak halka açık olmayan ortaklıklar Tebliğ yükümlülüklerinin dışında tutulmuştur.",
                },
                {
                  strong: "Üçüncü Kişilerin Yükümlülüğü:",
                  text: "İhraççıların doğrudan/dolaylı olarak oy haklarında veya sermayesinde ≥%10 paya veya yönetim kurulu üyesi seçme hakkı veren imtiyazlı payların ≥%10'una sahip kişiler de içsel bilgiye ulaştıklarında açıklama yapmakla yükümlüdür.",
                },
              ],
            },
            {
              heading: "Açıklama Erteleme ve Erişim Listesi",
              icon: "trend",
              items: [
                {
                  strong: "Ertelemenin Üç Şartı:",
                  text: "İhraççı; (i) meşru çıkarlarının zarar görmemesi, (ii) yatırımcıların yanıltılmaması ve (iii) gizliliğin sağlanabilir olması koşullarıyla içsel bilginin kamuya açıklanmasını erteleyebilir.",
                },
                {
                  strong: "Erteleme Sona Ermesi:",
                  text: "Erteleme sebepleri ortadan kalkar kalkmaz açıklama yapılır; açıklamada erteleme kararı ve sebepler de belirtilir. Olayın gerçekleşmemesi hâlinde açıklama yapılmayabilir.",
                },
                {
                  strong: "İçsel Bilgilere Erişim Listesi:",
                  text: "İhraççı, içsel bilgiye düzenli erişimi olan kişileri MKK'ya bildirir; değişiklik halinde en geç 2 iş günü içinde günceller. İdari sorumluluğu olan kişiler de listede sayılır.",
                },
                {
                  strong: "Olağan Dışı Hareketler:",
                  text: "Sermaye piyasası araçlarının fiyat veya işlem hacminde olağan piyasa koşullarıyla açıklanamayan değişimler olduğunda, ilgili borsanın talebi üzerine ihraççı kamuya açıklama yapmak zorundadır.",
                },
              ],
            },
          ],
          tip: "İçsel bilginin tanımındaki üç kriter — değer/fiyat etkisi, yatırım kararını etkileyebilirlik ve henüz kamuya açıklanmamış olması — birlikte aranır. Bu kriterlerden biri eksikse ortada Tebliğ anlamında 'içsel bilgi' yoktur ve açıklama yükümlülüğü doğmaz.",
        },
        questions: [
          {
            text: "II-15.1 sayılı Özel Durumlar Tebliği uyarınca 'içsel bilgi'nin tanımında aşağıdaki unsurlardan hangisi yer ALMAZ?",
            options: [
              { id: "A", text: "Sermaye piyasası aracının değerini veya fiyatını etkileyebilme" },
              { id: "B", text: "Yatırımcıların yatırım kararlarını etkileyebilme" },
              { id: "C", text: "Henüz kamuya açıklanmamış olma" },
              { id: "D", text: "Mutlaka geleceğe yönelik tahminler içermesi" },
            ],
            correct: "D",
            explanation:
              "İçsel bilgi; sermaye piyasası araçlarının değer/fiyat veya yatırımcının kararlarını etkileyebilecek, henüz kamuya açıklanmamış bilgi, olay ve gelişmelerdir. Geleceğe yönelik tahmin içermesi şartı tanımda yer almaz; geçmiş veya mevcut bir durum da içsel bilgi teşkil edebilir.",
          },
          {
            text: "İhraççı dışında, içsel bilgiyi öğrenen üçüncü kişilerin doğrudan açıklama yükümlülüğü hangi sahiplik eşiğinde doğar?",
            options: [
              { id: "A", text: "Sermayenin veya oy haklarının ≥%5'i" },
              { id: "B", text: "Sermayenin veya oy haklarının ≥%10'u, ya da %10 imtiyazlı pay sahipliği" },
              { id: "C", text: "Sermayenin ≥%25'i" },
              { id: "D", text: "Yalnızca yönetim kurulu üyesi olmak yeterlidir." },
            ],
            correct: "B",
            explanation:
              "Tebliğe göre, ihraççıların doğrudan veya dolaylı olarak oy haklarında veya sermayesinde %10 ya da daha fazla paya veya yönetim kurulu üyesi seçme/aday gösterme hakkı veren imtiyazlı payların %10'una sahip kişiler içsel bilgiye ulaştıklarında doğrudan açıklama yapmakla yükümlüdür.",
          },
          {
            text: "İçsel bilginin kamuya açıklanmasının ertelenebilmesi için aşağıdaki şartlardan hangisi aranmaz?",
            options: [
              { id: "A", text: "İhraççının meşru çıkarlarının zarar görmemesi" },
              { id: "B", text: "Yatırımcıların yanıltılmaması" },
              { id: "C", text: "Bilgilerin gizli tutulabilmesi" },
              { id: "D", text: "Sermaye Piyasası Kurulu'ndan önceden yazılı izin alınması" },
            ],
            correct: "D",
            explanation:
              "Tebliğde erteleme için üç şart aranır: meşru çıkarın korunması, yatırımcıların yanıltılmaması ve gizliliğin sağlanabilir olması. Erteleme için Kurul'dan ön izin almak gerekmez; sorumluluk ihraççıya aittir. Kurul yalnızca gerek görürse erteleme sebeplerini sonradan inceler.",
          },
          {
            text: "İçsel bilgilere erişimi olan kişiler listesindeki bir değişiklik halinde, ihraççının MKK'ya bildirim yapması gereken azami süre nedir?",
            options: [
              { id: "A", text: "Aynı gün içinde" },
              { id: "B", text: "En geç 2 iş günü" },
              { id: "C", text: "En geç 5 iş günü" },
              { id: "D", text: "En geç 15 gün" },
            ],
            correct: "B",
            explanation:
              "Tebliğ uyarınca içsel bilgilere erişimi olan kişiler listesindeki değişiklikler en geç 2 iş günü içinde MKK'ya bildirilerek güncellenmelidir. İdari sorumluluğu bulunan kişiler de aynı zamanda içsel bilgilere erişimi olan kişiler olarak kabul edilir.",
          },
          {
            text: "Bir ihraççının payında olağan piyasa koşullarıyla açıklanamayan fiyat veya hacim hareketleri gözlendiğinde aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İhraççı yalnızca Kurul'dan talep gelirse açıklama yapar." },
              { id: "B", text: "İhraççı, ilgili borsanın talebi üzerine kamuya açıklama yapmak zorundadır." },
              { id: "C", text: "Açıklama yalnızca pay sahiplerine bireysel olarak yapılır." },
              { id: "D", text: "Hareketin nedeni ne olursa olsun ihraççıya hiçbir yükümlülük doğmaz." },
            ],
            correct: "B",
            explanation:
              "Tebliğde açıkça düzenlendiği üzere, ihraççılar olağan piyasa koşullarıyla açıklanamayan fiyat ve işlem hacmi hareketleri olduğunda ilgili borsanın talebi üzerine kamuya açıklama yapmak zorundadır. Açıklamada kamuya açıklanmamış özel durumların bulunup bulunmadığı belirtilir.",
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // MODÜL 3 — KURUMSAL YÖNETİM TEBLİĞİ (II-17.1)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m3",
    title: "Modül 3 · Kurumsal Yönetim Tebliği (II-17.1)",
    lessons: [
      {
        id: "l3-1",
        title: "Kurumsal Yönetimin Temel Esasları ve Dört Kolonu",
        duration: "7 dk",
        summary: {
          title: "Kurumsal Yönetimin Temel Esasları ve Dört Kolonu",
          intro:
            "Kurumsal yönetim; pay sahipleri, yatırımcılar, çalışanlar ve diğer menfaat sahiplerinin haklarını ideal seviyede koruyacak bir yapıyı kurmayı amaçlayan kurallar bütünüdür. 1992 İngiltere Cadbury Raporu'yla başlayan bu yaklaşım, Türkiye'de 6102 sayılı TTK ve II-17.1 sayılı Tebliğ ile düzenlenmiştir.",
          sections: [
            {
              heading: "Kurumsal Yönetimin Dört Taşıyıcı Kolonu",
              icon: "shield",
              items: [
                {
                  strong: "Şeffaflık (Transparency):",
                  text: "Pay sahiplerinin ve sermaye piyasası aktörlerinin tam bilgilendirilmesi; maddi ve şekli kamuyu aydınlatma. Web siteleri bu ilkenin temel aracıdır.",
                },
                {
                  strong: "Adillik (Fairness):",
                  text: "Geniş kapsamlı eşit işlem ilkesi. Yalnızca pay sahiplerine değil; çalışanlara, alacaklılara, müşterilere ve menfaat sahiplerine de eşit muamele.",
                },
                {
                  strong: "Hesap Verilebilirlik (Accountability):",
                  text: "Yönetimin şeffaflığı, doğruluğu, kararların açıklanabilirliği ve haklı sebebe dayanması; profesyonel niteliğe gönderme yapar.",
                },
                {
                  strong: "Sorumluluk (Responsibility):",
                  text: "Görevden kaynaklanan yükümlülüklere tam bağlılık ve bunları bilinçle yerine getirme.",
                },
              ],
            },
            {
              heading: "Tebliğ'in Uygulama Kapsamı",
              icon: "trend",
              items: [
                {
                  strong: "Yıldız, Ana ve Alt Pazar Şirketleri:",
                  text: "II-17.1 sayılı Tebliğ kapsamında, payları bu pazarlarda işlem gören ortaklıklar Tebliğ ekindeki Kurumsal Yönetim İlkelerine uymakla yükümlüdür.",
                },
                {
                  strong: "Uyum Raporları:",
                  text: "Ortaklıklar; (i) gönüllü ilkelere uyumu raporlamak için Kurumsal Yönetim Uyum Raporu (URF) ve (ii) mevcut uygulamalar için Kurumsal Yönetim Bilgi Formu (KYBF) hazırlar.",
                },
                {
                  strong: "Üç Cevap Seçeneği:",
                  text: "Ortaklıklar her ilke için 'Uyumlu', 'Uyumlu değil' veya 'Muaf' (istisna kapsamında olunması) yanıtlarından birini gerekçesiyle birlikte verir.",
                },
                {
                  strong: "Bağımsız Denetim:",
                  text: "Finansal tablolar, uluslararası standartlara göre uzman, bağımsız ve tarafsız denetçilerce denetlenir.",
                },
              ],
            },
          ],
          tip: "Tebliğ'deki yaklaşım klasik 'comply or explain' (uy veya açıkla) ilkesidir. Bir ortaklık ilkeye uymadığını seçtiğinde bunu gerekçeleyerek açıklamak zorundadır; bu yüzden 'Uyumlu değil' cevabı tek başına yeterli değildir.",
        },
        questions: [
          {
            text: "Kurumsal yönetimin 'dört taşıyıcı kolonu' aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Karlılık, verimlilik, büyüme, sürdürülebilirlik" },
              { id: "B", text: "Şeffaflık, adillik, hesap verilebilirlik, sorumluluk" },
              { id: "C", text: "Yatırım, finansman, denetim, raporlama" },
              { id: "D", text: "Bağımsızlık, dürüstlük, gizlilik, hız" },
            ],
            correct: "B",
            explanation:
              "TTK genel gerekçesinde de yer aldığı üzere, kurumsal yönetim dört taşıyıcı kolon üzerine oturur: şeffaflık (transparency), adillik (fairness), hesap verilebilirlik (accountability) ve sorumluluk (responsibility).",
          },
          {
            text: "II-17.1 sayılı Kurumsal Yönetim Tebliği'nin temel uygulama yaklaşımı aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Tüm ilkelere koşulsuz uyum zorunluluğu" },
              { id: "B", text: "İlkelere yalnızca finansal kurumların uyma zorunluluğu" },
              { id: "C", text: "Comply or explain (uy veya açıkla) ilkesi" },
              { id: "D", text: "İlkelere uymama hâlinde otomatik para cezası" },
            ],
            correct: "C",
            explanation:
              "Tebliğ, klasik 'uy veya açıkla' (comply or explain) yaklaşımını benimser. Ortaklık ilkeye uymamayı seçtiğinde gerekçesini açıklamak zorundadır; cevap seçenekleri 'Uyumlu', 'Uyumlu değil' ve 'Muaf' şeklindedir.",
          },
          {
            text: "II-17.1 sayılı Tebliğ kapsamındaki kurumsal yönetim ilkelerine uyumda kullanılan 'Muaf' ifadesi neyi belirtir?",
            options: [
              { id: "A", text: "Ortaklığın ilkeyi uygulamak istemediğini" },
              { id: "B", text: "Sermaye Piyasası Kurulu'nun ilkeyi tamamen kaldırdığını" },
              { id: "C", text: "Ortaklığın Tebliğ uyarınca istisna kapsamında tutulduğunu" },
              { id: "D", text: "İlkenin yalnızca finansal sektör için geçerli olduğunu" },
            ],
            correct: "C",
            explanation:
              "Tebliğ'de 'Muaf' ifadesi, ortaklığın Kurumsal Yönetim Tebliği uyarınca istisna kapsamında tutulmuş olunması hâlini belirtir. Bu durumda ortaklık ilgili ilkeye uyma yükümlülüğünün dışındadır.",
          },
          {
            text: "Kurumsal yönetimde 'şeffaflık' ilkesi aşağıdakilerden en doğru hangisini ifade eder?",
            options: [
              { id: "A", text: "Şirket sırlarının korunmasını" },
              { id: "B", text: "Pay sahiplerinin ve sermaye piyasası aktörlerinin tam bilgilendirilmesini ve maddi-şekli kamuyu aydınlatmayı" },
              { id: "C", text: "Yönetim kurulu kararlarının yalnızca pay sahipleriyle paylaşılmasını" },
              { id: "D", text: "İçsel bilgilerin tüm taraflara açıklanmasını" },
            ],
            correct: "B",
            explanation:
              "Şeffaflık, pay sahiplerinin ve sermaye piyasasındaki rol sahibi tüm aktörlerin tam bilgilendirilmesini ve aydınlatılmasını hedefler. Bu kapsamda hem maddi hem şekli kamuyu aydınlatma kuralları bulunur. Web siteleri bu ilkenin önemli araçlarındandır.",
          },
          {
            text: "II-17.1 sayılı Tebliğ uyarınca payları Yıldız, Ana ve Alt Pazar'da işlem gören ortaklıkların hazırlamak zorunda olduğu raporlardan biri aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Bağımsız Denetim Riski Raporu" },
              { id: "B", text: "İçsel Bilgi Erişim Raporu" },
              { id: "C", text: "Kurumsal Yönetim Uyum Raporu (URF)" },
              { id: "D", text: "Türev İşlem Beyan Raporu" },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca ortaklıklar; gönüllü ilkelere uyum durumunu raporlamak için Kurumsal Yönetim Uyum Raporu (URF) ve mevcut uygulamalara ilişkin bilgi vermek üzere Kurumsal Yönetim Bilgi Formu (KYBF) hazırlamakla yükümlüdür.",
          },
        ],
      },
      {
        id: "l3-2",
        title: "Yatırım Fonları ve Şemsiye Fonlar (III-52.1)",
        duration: "9 dk",
        summary: {
          title: "Yatırım Fonları ve Şemsiye Fonlar (III-52.1)",
          intro:
            "III-52.1 sayılı Yatırım Fonlarına İlişkin Esaslar Tebliği uyarınca yatırım fonu, tasarruf sahiplerinden katılma payı karşılığı toplanan paralarla, inançlı mülkiyet esaslarına göre, portföy yönetim şirketleri tarafından içtüzükle kurulan ve tüzel kişiliği bulunmayan mal varlığıdır. Tüm fon katılma payları bir şemsiye fona bağlı olarak ihraç edilir.",
          sections: [
            {
              heading: "Şemsiye Fon Yapısı ve Türleri",
              icon: "shield",
              items: [
                {
                  strong: "Şemsiye Fon Tanımı:",
                  text: "Katılma payları tek bir içtüzük kapsamında ihraç edilen tüm fonları kapsayan yatırım fonudur; her bir fonun varlık ve yükümlülükleri birbirinden ayrıdır.",
                },
                {
                  strong: "Borçlanma Araçları Şemsiye Fonu:",
                  text: "Toplam değerinin en az %80'i devamlı olarak yerli/yabancı kamu ve özel sektör borçlanma araçlarına yatırılan fonları kapsar.",
                },
                {
                  strong: "Hisse Senedi Şemsiye Fonu:",
                  text: "Toplam değerinin en az %80'i devamlı olarak yerli/yabancı ihraççıların paylarına yatırılan fonları kapsar.",
                },
                {
                  strong: "Para Piyasası Şemsiye Fonu:",
                  text: "Portföyün tamamı sürekli olarak vadesine en fazla 184 gün kalmış likiditesi yüksek araçlardan oluşur; günlük ağırlıklı ortalama vade en fazla 45 gündür.",
                },
                {
                  strong: "Katılım Şemsiye Fonu:",
                  text: "Portföy tamamı sürekli olarak kira sertifikaları, katılma hesapları, paylar, kıymetli madenler ve faize dayalı olmayan diğer araçlardan oluşur.",
                },
              ],
            },
            {
              heading: "Fon Malvarlığı ve Yönetim Esasları",
              icon: "trend",
              items: [
                {
                  strong: "Malvarlığı Ayrılığı İlkesi:",
                  text: "Fon malvarlığı, kurucu portföy yönetim şirketinin ve portföy saklayıcısının malvarlığından ayrıdır; haczedilemez, rehnedilemez, iflas masasına dahil edilemez.",
                },
                {
                  strong: "Portföy Yöneticisi Niteliği:",
                  text: "Fon, yatırım yapabileceği varlıklar konusunda yeterli bilgi ve sermaye piyasasında en az 5 yıllık tecrübeye sahip portföy yöneticilerince yatırımcı lehine yönetilir.",
                },
                {
                  strong: "Mahsup Yasağı:",
                  text: "Kurucunun üçüncü kişilere borçları ile fonların aynı üçüncü kişilerden alacakları birbirine mahsup edilemez.",
                },
                {
                  strong: "Fon Toplam Değeri (FTD):",
                  text: "Fon portföy değerine diğer varlık ve alacaklar eklenerek borçların düşülmesiyle hesaplanır; günlük olarak Tebliğ esaslarına göre değerlenir.",
                },
              ],
            },
          ],
          tip: "Fon malvarlığının ayrılığı ilkesi, yatırımcı korumasının temel taşıdır. Kurucu iflas etse bile fon malvarlığı bu süreçten etkilenmez. Sınavlarda 'haczedilemez, rehnedilemez, iflas masasına dahil edilemez' üçlüsü kalıp soru olarak sıkça karşımıza çıkar.",
        },
        questions: [
          {
            text: "III-52.1 sayılı Tebliğ'de 'şemsiye fon' aşağıdakilerden hangisini ifade eder?",
            options: [
              { id: "A", text: "Yalnızca borsa yatırım fonlarını kapsayan üst kuruluş" },
              { id: "B", text: "Katılma payları tek bir içtüzük kapsamında ihraç edilen tüm fonları kapsayan yatırım fonu" },
              { id: "C", text: "Birden fazla portföy yönetim şirketinin ortak yönettiği fon havuzu" },
              { id: "D", text: "Sermaye Piyasası Kurulu'nun denetimine tabi olmayan kapalı uçlu yatırım aracı" },
            ],
            correct: "B",
            explanation:
              "Tebliğ uyarınca şemsiye fon, katılma payları tek bir içtüzük kapsamında ihraç edilen tüm fonları kapsayan yatırım fonudur. Her bir fonun varlık ve yükümlülükleri birbirinden ayrıdır.",
          },
          {
            text: "Para Piyasası Şemsiye Fonu portföyünde günlük olarak hesaplanan ağırlıklı ortalama vade üst sınırı nedir?",
            options: [
              { id: "A", text: "30 gün" },
              { id: "B", text: "45 gün" },
              { id: "C", text: "90 gün" },
              { id: "D", text: "184 gün" },
            ],
            correct: "B",
            explanation:
              "Para Piyasası Şemsiye Fonu, portföyünün tamamı vadesine en fazla 184 gün kalmış likiditesi yüksek para ve sermaye piyasası araçlarından oluşan, günlük olarak hesaplanan ağırlıklı ortalama vadesi en fazla 45 gün olan fonları kapsar.",
          },
          {
            text: "Bir 'Borçlanma Araçları Şemsiye Fonu'nun toplam değerinin asgari ne kadarının devamlı olarak yerli/yabancı kamu ve özel sektör borçlanma araçlarında olması gerekir?",
            options: [
              { id: "A", text: "%51" },
              { id: "B", text: "%70" },
              { id: "C", text: "%80" },
              { id: "D", text: "%100" },
            ],
            correct: "C",
            explanation:
              "Tebliğ'e göre Borçlanma Araçları Şemsiye Fonu, toplam değerinin en az %80'i devamlı olarak yerli ve/veya yabancı kamu ve/veya özel sektör borçlanma araçlarına yatırılan fonları kapsar. Aynı %80 eşiği Hisse Senedi Şemsiye Fonu için de geçerlidir.",
          },
          {
            text: "Yatırım fonu malvarlığının korunmasına ilişkin aşağıdaki ifadelerden hangisi YANLIŞTIR?",
            options: [
              { id: "A", text: "Fon malvarlığı kurucunun malvarlığından ayrıdır." },
              { id: "B", text: "Fon malvarlığı kamu alacaklarının tahsili amacıyla bile haczedilemez." },
              { id: "C", text: "Kurucunun yönetiminin kamuya devredilmesi hâlinde dahi fon başka bir amaçla tasarruf edilemez." },
              { id: "D", text: "Kurucu iflas ederse fon malvarlığı iflas masasına dahil edilir." },
            ],
            correct: "D",
            explanation:
              "Tebliğ açıkça düzenlemiştir ki, fon malvarlığı kurucu veya saklayıcının yönetiminin/denetiminin kamu kurumlarına devredilmesi halinde dahi başka amaçla tasarruf edilemez, kamu alacaklarının tahsili amacıyla dahi haczedilemez ve iflas masasına dahil edilemez. Bu nedenle (D) seçeneği yanlıştır.",
          },
          {
            text: "Fon portföyünün yönetimine ilişkin aşağıdakilerden hangisi doğrudur?",
            options: [
              { id: "A", text: "Portföy yöneticisinin sermaye piyasasında en az 3 yıllık tecrübesi yeterlidir." },
              { id: "B", text: "Portföy yöneticisinin sermaye piyasasında en az 5 yıllık tecrübesi gereklidir." },
              { id: "C", text: "Portföy yönetiminde yatırımcı lehine hareket edilmesi şart değildir." },
              { id: "D", text: "Fon malvarlığı kurucunun isteğine bağlı olarak rehin edilebilir." },
            ],
            correct: "B",
            explanation:
              "Tebliğ uyarınca fon malvarlığı, fonun yatırım yapabileceği varlıklar konusunda yeterli bilgi ve sermaye piyasası alanında en az 5 yıllık tecrübeye sahip portföy yöneticileri tarafından, yatırımcı lehine ve çıkarını gözeterek yönetilmek zorundadır.",
          },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // MODÜL 4 — TSPB MESLEK KURALLARI VE ETİK İLKELER
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m4",
    title: "Modül 4 · TSPB Meslek Kuralları ve Etik İlkeler",
    lessons: [
      {
        id: "l4-1",
        title: "TSPB Üyelerinin Genel İlkeleri ve Müşteri İlişkileri",
        duration: "8 dk",
        summary: {
          title: "TSPB Üyelerinin Genel İlkeleri ve Müşteri İlişkileri",
          intro:
            "Türkiye Sermaye Piyasaları Birliği (TSPB), SPKn md. 74 uyarınca üyelerinin meslek kurallarını oluşturmakla görevli kamu kurumu niteliğinde bir meslek kuruluşudur. Üyeleri arasında aracı kurumlar, bankalar, menkul kıymet/girişim sermayesi/gayrimenkul yatırım ortaklıkları ve portföy yönetim şirketleri yer alır.",
          sections: [
            {
              heading: "Faaliyetlerde Uyulacak Genel İlkeler",
              icon: "shield",
              items: [
                {
                  strong: "Dürüst ve Adil Davranma:",
                  text: "Müşteri çıkarlarını ve piyasaların bütünlüğünü gözeterek doğru beyana dayalı ve mesleki gereklere uygun hareket etme.",
                },
                {
                  strong: "Bağımsızlık ve Tarafsızlık:",
                  text: "Bağımsızlığa gölge düşürebilecek teklif/talepte bulunmama; aynı koşullara sahip her müşteriye eşit davranma.",
                },
                {
                  strong: "Mesleki Özen ve Titizlik:",
                  text: "Dikkatli ve basiretli davranma, teknik bilgi birikimini sağlama, meslek gelişmelerini takip etme.",
                },
                {
                  strong: "Saydamlık:",
                  text: "Tüm taraflara mevzuat ve teamüllerin gerektirdiği şekilde tam, doğru, hızlı ve eşit bilgilendirme.",
                },
                {
                  strong: "Suç Gelirleriyle Mücadele:",
                  text: "Aklama ve yolsuzlukla mücadelede şüpheli işlemleri tespit ederek ilgili kurum-kuruluşlarla işbirliği yapma; çalışanlara bu konuda eğitim verme.",
                },
              ],
            },
            {
              heading: "Müşterilerle İlişkilere İlişkin İlkeler",
              icon: "trend",
              items: [
                {
                  strong: "Müşteriyi Tanıma Kuralı (KYC):",
                  text: "İş ilişkisi öncesi kimlik bilgisi alınır, mali durumu, yatırım amacı ve risk tercihi belirlenir; ürün/hizmet uygunsuzsa müşteri uyarılır.",
                },
                {
                  strong: "Müşteri Talimatlarına Uyma:",
                  text: "Talimatlar kesin, açık ve anlaşılır olmalı; üye, talimatların müşterinin çıkarına uygunluğunu gözeterek yerine getirmelidir.",
                },
                {
                  strong: "Müşteri Menfaatleri:",
                  text: "Sadakat ve özen borcu çerçevesinde sözleşmelerde müşteri haklarını zedeleyici şart konulamaz; piyasa bilgisizliğinden yararlanılarak alım-satıma yönlendirilemez.",
                },
                {
                  strong: "Ücret-Komisyon Şeffaflığı:",
                  text: "Hizmet karşılığı alınan ücret, komisyon ve masrafların tarifeye uygun, açık ve önceden bildirilmiş olması esastır.",
                },
                {
                  strong: "Müşteri Şikâyetleri:",
                  text: "Üyeler şikâyetleri kayıt altına alır, etkin değerlendirir ve makul sürede yanıtlar.",
                },
              ],
            },
          ],
          tip: "Müşteriyi Tanıma Kuralı (KYC), AML mevzuatı ve Müşteri İlişkileri etiği kesişiminde yer alan üçlü bir yükümlülüktür. Sınavlarda 'müşteri uyarısı' yükümlülüğü, yalnızca bilgi verme değil; ürünün uygun olmadığı yönündeki net iletişim olarak sorulmaktadır.",
        },
        questions: [
          {
            text: "TSPB, hangi maddesi uyarınca üyelerinin meslek kurallarını oluşturmakla görevlendirilmiştir?",
            options: [
              { id: "A", text: "SPKn md. 35" },
              { id: "B", text: "SPKn md. 37" },
              { id: "C", text: "SPKn md. 74/2-b" },
              { id: "D", text: "SPKn md. 103" },
            ],
            correct: "C",
            explanation:
              "SPKn md. 74'ün 2. fıkrasının (b) bendi uyarınca TSPB, üyelerinin dayanışma ve sermaye piyasası ile mesleğin gerektirdiği özen ve disiplin içinde çalışmalarına yönelik meslek kurallarını oluşturmakla görevli ve yetkilidir.",
          },
          {
            text: "TSPB üyesi bir aracı kurumun, müşteriye uygunluk değerlendirmesi sonucu sunulan ürünün müşteri için uygun olmadığı kanaatine varması durumunda yapması gereken nedir?",
            options: [
              { id: "A", text: "İşlemi reddetmek ve ek bilgi vermemek" },
              { id: "B", text: "Müşteriyi uyarmak ve uygunluk durumunu açıkça bildirmek" },
              { id: "C", text: "Bir başka müşteri adına işlemi gerçekleştirmek" },
              { id: "D", text: "Müşteriden yazılı feragat alarak işlemi yapmak" },
            ],
            correct: "B",
            explanation:
              "Müşteriyi Tanıma Kuralı kapsamında üye, müşterinin mali durumu, yatırım amacı ve risk tercihini değerlendirir; ürün veya hizmet müşteriye uygun değilse müşteriyi uyarmakla yükümlüdür. Uyarı yükümlülüğü, etik ilkelerin temel parçasıdır.",
          },
          {
            text: "Aşağıdakilerden hangisi TSPB üyelerinin meslek kurallarına aykırı fiil ve işlemleri için Statü md. 24 kapsamında öngörülen disiplin cezalarından biri DEĞİLDİR?",
            options: [
              { id: "A", text: "Uyarı" },
              { id: "B", text: "Kınama" },
              { id: "C", text: "İdari para cezası" },
              { id: "D", text: "Sermaye piyasasında çalışma yasağı" },
            ],
            correct: "D",
            explanation:
              "Birlik Statüsü'nün 24. maddesinde sayılan disiplin cezaları; uyarı, kınama, idari para cezası, Birlik üyeliğinden geçici çıkarma ve Birlik üyeliğinden sürekli çıkarmadır. 'Sermaye piyasasında çalışma yasağı' Birlik tarafından değil, SPK tarafından verilebilen bir tedbirdir.",
          },
          {
            text: "TSPB Meslek Kuralları kapsamında 'Bağımsızlık ve Tarafsızlık' ilkesi gereği üyeler aşağıdakilerden hangisini yapmakla yükümlüdür?",
            options: [
              { id: "A", text: "Yalnızca yüksek hacimli müşterilere öncelik tanımak" },
              { id: "B", text: "Aynı koşullara sahip her müşteriye eşit şekilde davranmak" },
              { id: "C", text: "Diğer üyelere bilgi vermemek" },
              { id: "D", text: "Müşterilerden hediye kabul etmek" },
            ],
            correct: "B",
            explanation:
              "Bağımsızlık ve Tarafsızlık ilkesi, üyelerin bağımsızlıklarına gölge düşürebilecek teklif veya taleplerde bulunmamasını ve aynı koşullara sahip her müşteriye eşit şekilde davranmasını gerektirir.",
          },
          {
            text: "TSPB Meslek Kuralları'na göre 'Müşteri Menfaatleri' ilkesi çerçevesinde üyeler için aşağıdakilerden hangisi YASAKTIR?",
            options: [
              { id: "A", text: "Müşteriye uygun risk profili belirlemek" },
              { id: "B", text: "Hizmet karşılığı tarifeye uygun ücret almak" },
              { id: "C", text: "Müşterinin piyasa hakkında bilgisizliğinden yararlanarak alım-satıma yönlendirmek" },
              { id: "D", text: "Müşteriyle yazılı sözleşme yapmak" },
            ],
            correct: "C",
            explanation:
              "Müşteri Menfaatleri ilkesi gereği üyeler; sadakat ve özen borcunu gözeterek müşterilerin piyasa hakkında bilgisizlik ve tecrübesizliğinden yararlanıp alım-satıma yönlendiremez. Bu davranış doğrudan etik kurallara aykırılık teşkil eder.",
          },
        ],
      },
    ],
  },
];