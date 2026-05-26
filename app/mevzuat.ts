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
    /** Anahtar kavramlar sözlüğü (opsiyonel) */
    kavramlar?: { terim: string; tanim: string }[];
    /** Sınavda dikkat edilmesi gereken çok sayıda uyarı (opsiyonel) */
    dikkatlar?: string[];
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
            "Sermaye piyasası; orta ve uzun vadeli fon ihtiyacının, sermaye piyasası araçlarının alım satımı aracılığıyla tasarruf sahiplerinden fon talep edenlere aktarıldığı, doğrudan finansman mekanizmasının işlediği organize piyasalar bütünüdür. Bu tanımın birkaç unsuru dikkat çeker: (i) vadeler orta-uzun vadelidir (para piyasasının kısa vade yapısından bu yönde ayrılır), (ii) transfer aracılığı 'sermaye piyasası aracı' ile gerçekleşir, (iii) banka benzeri aracılar devreye girmeksizin doğrudan finansman köprüsü kurulur. Para piyasasıyla birlikte finans piyasasının iki ana alt dalından birini oluşturur. Üç temel ekonomik işlevi vardır: (1) Riski dağıtma — birçok yatırımcının küçük paylar üstlenmesiyle büyük projelerin finansmanını mümkün kılar; (2) Mülkiyeti tabana yayma — küçük tasarrufçular büyük şirketlerin ortağı olabilir; (3) Likidite sağlama — araçların ikincil piyasada işlem görmesiyle yatırımcılar ihtiyaç duydukları anda pozisyonlarını nakde çevirebilir. Sermaye piyasası aynı zamanda ekonominin 'barometresi' işlevi görür: piyasa fiyatları beklentileri, büyüme dinamiklerini ve risk algısını anlık yansıtır.",
          sections: [
            {
              heading: "Birincil ve İkincil Piyasa Ayrımı",
              icon: "shield",
              items: [
                {
                  strong: "Birincil Piyasa:",
                  text: "Sermaye piyasası araçlarının ihraççı tarafından ilk kez piyasaya çıkarılarak yatırımcılara satıldığı piyasadır. Halka arz ve nitelikli yatırımcıya satış yoluyla işler; fon doğrudan ihraççıya akar. Halka arz izahnamesinin SPK tarafından onaylanması zorunludur.",
                },
                {
                  strong: "İkincil Piyasa:",
                  text: "Daha önce ihraç edilmiş araçların yatırımcılar arasında el değiştirdiği piyasadır. İhraççıya artık fon akışı sağlamaz; bununla birlikte birincil piyasa fiyatını doğrudan etkiler. Üç kritik fonksiyonu vardır: (a) likidite sağlama, (b) fiyat keşfi ve oluşumu, (c) borçlanma araçlarında vade belirleme.",
                },
                {
                  strong: "Spot Piyasa:",
                  text: "İşlem ve teslimin eş zamanlı gerçekleştiği piyasadır. Borsa İstanbul Pay Piyasası ve Tahvil-Bono Piyasası bu kategorinin başlıca örneklerindendir. Uzlaşma süresi en fazla T+2 olup anlık fiyatlar piyasanın cari değerini yansıtır.",
                },
                {
                  strong: "Vadeli Piyasa:",
                  text: "İşlemin bugün yapıldığı, teslimatın ileriki bir tarihe bırakıldığı piyasalardır. Forward (tezgâhüstü/ikili sözleşme), swap (faiz/döviz/emtia takası), futures (standart borsada işlem gören vadeli sözleşme) ve opsiyon (alım-satım hakkı veren sözleşme) olmak üzere dört temel enstrüman barındırır. Borsa İstanbul Vadeli İşlem ve Opsiyon Piyasası (VİOP) organize vadeli piyasaların merkezidir.",
                },
                {
                  strong: "Organize ve Tezgâhüstü (OTC) Piyasalar:",
                  text: "Organize piyasalar standart sözleşmeler, merkezi takas ve kamuyu aydınlatma zorunluluklarıyla güvence altındadır (Borsa İstanbul). OTC piyasalar ise esneklik sunar; iki taraf arasında serbestçe belirlenen koşullarla işlemler yapılır (forward, tezgâhüstü swaplar).",
                },
              ],
            },
            {
              heading: "Sermaye Piyasasının Beş Temel Unsuru",
              icon: "trend",
              items: [
                {
                  strong: "Fon Talep Edenler — İhraççılar (md. 3/1-h):",
                  text: "Sermaye piyasası araçlarını ihraç eden, ihraç için Kurula başvuran veya araçları halka arz edilen tüzel kişiler ile tüzel kişiliği bulunmasa da yatırım fonlarıdır. Gerçek kişiler ve donatma iştirakleri ihraççı olamaz. Kitle fonlama platformları aracılığıyla para toplayanlar ise tanımın açıkça dışında bırakılmıştır.",
                },
                {
                  strong: "Fon Arz Edenler — Yatırımcılar:",
                  text: "Bireysel (perakende) ve kurumsal yatırımcılar ile nitelikli (profesyonel) yatırımcılar olarak sınıflandırılır. II-5.2 sayılı Tebliğ çerçevesinde 'nitelikli yatırımcı'; talebe dayalı kabul edilenler dahil profesyonel müşterilerdir. Halka arz ve nitelikli yatırımcıya satışta farklı bilgi sağlama yükümlülükleri geçerlidir.",
                },
                {
                  strong: "Sermaye Piyasası Araçları:",
                  text: "Pay, borçlanma araçları, türev araçlar, yatırım fonu katılma belgeleri ve bunların kombinasyonu olan yapılandırılmış ürünler olmak üzere geniş bir yelpazeden oluşur. Araç, ihraç ve alım yoluyla taraflar arasında ortaklık ya da borç-alacak ilişkisi kurarak fon transferinin temelini oluşturur.",
                },
                {
                  strong: "Yardımcı Kuruluşlar — Sermaye Piyasası Kurumları (md. 35):",
                  text: "Kanun kapsamında sayılan sermaye piyasası kurumları şunlardır: yatırım kuruluşları (aracı kurumlar ve bankalar), kolektif yatırım kuruluşları, portföy yönetim şirketleri, bağımsız denetim kuruluşları, derecelendirme kuruluşları, değerleme şirketleri, ipotek finansmanı kuruluşları, varlık kiralama şirketleri, merkezi takas kuruluşları ve merkezi saklama kuruluşları. Mevduat bankaları bu listede yer almaz; ancak yetki belgesi alarak sermaye piyasası faaliyeti yürütebilirler.",
                },
                {
                  strong: "Borsalar ve Teşkilatlanmış Diğer Piyasalar:",
                  text: "Borsa İstanbul A.Ş., Türkiye'nin tek borsası olarak organize piyasaların tamamını bünyesinde toplar (pay piyasası, tahvil-bono piyasası, kıymetli madenler piyasası, VİOP). Borsa; likidite sağlama, fiyat keşfi, ekonominin barometresi olma, ihraççılara itibar kazandırma ve öz düzenleyici kuruluş olarak meslek standartlarını belirleme fonksiyonlarını üstlenir.",
                },
              ],
            },
            {
              heading: "Sermaye Piyasasının Ekonomik Fonksiyonları",
              icon: "shield",
              items: [
                {
                  strong: "Fon Aktarım Mekanizması:",
                  text: "Atıl tasarrufları verimli yatırımlara yönlendirerek ekonominin büyüme potansiyelini artırır. Banka aracılığına gerek kalmaksızın doğrudan finansman köprüsü kurar.",
                },
                {
                  strong: "Risk Dağıtımı:",
                  text: "Büyük bir projenin riski, çok sayıda küçük yatırımcıya dağıtılır. Pay senetleri bu dağıtımın en tipik örneğidir; şirketin iyi veya kötü gidişatı hissedarlar arasında paylaşılır.",
                },
                {
                  strong: "Mülkiyetin Tabana Yayılması:",
                  text: "Halka arz mekanizması sayesinde küçük tasarrufçular büyük şirketlerin ortakları hâline gelerek servet birikimini kolektifleştirir. Bu özellik hem ekonomik adaleti hem de şirket yönetişimini güçlendirir.",
                },
                {
                  strong: "Ekonomik Gösterge İşlevi:",
                  text: "Hisse senedi endeksleri, getiri eğrileri ve CDS (kredi temerrüt swap) spreadleri ekonomik beklentilerin anlık termometresidir. Piyasa fiyatları; enflasyon, büyüme ve risk iştahını önceden sinyal verir.",
                },
              ],
            },
          ],
          tip: "İkincil piyasa ihraççıya fon sağlamaz; yalnızca yatırımcılar arasında el değiştirme sağlar. Buna rağmen birincil piyasa fiyat oluşumunu doğrudan etkiler. 'Fiyat keşfi (price discovery)' ifadesi çıktığında ikincil piyasayı işaretleyin. Ayrıca yatırım fonları tüzel kişilik sahibi olmasa da 'ihraççı' sayılır; bu ayrıntı sınav sorularında sık karşınıza çıkar.",
          kavramlar: [
            { terim: "Birincil Piyasa", tanim: "Araçların ihraççı tarafından ilk kez satıldığı; ihraççıya doğrudan fon akışının sağlandığı piyasa." },
            { terim: "İkincil Piyasa", tanim: "Daha önce ihraç edilmiş araçların yatırımcılar arasında alınıp satıldığı; ihraççıya fon akışı sağlamayan ancak fiyat keşfini gerçekleştiren piyasa." },
            { terim: "Spot Piyasa", tanim: "İşlem ve teslimatın eş zamanlı ya da T+2 içinde gerçekleştiği; anlık piyasa fiyatını yansıtan piyasa türü." },
            { terim: "Vadeli Piyasa", tanim: "Teslimatın ileriki bir tarihe ertelendiği; forward, swap, futures ve opsiyon işlemlerini kapsayan piyasa türü." },
            { terim: "İhraççı", tanim: "SPKn md. 3/1-h: Sermaye piyasası araçlarını ihraç eden tüzel kişiler ve yatırım fonları. Gerçek kişiler ve donatma iştirakleri kapsam dışıdır." },
            { terim: "Nitelikli Yatırımcı", tanim: "II-5.2 sayılı Tebliğ kapsamında talebe dayalı kabul edilenler dahil profesyonel müşteriler." },
            { terim: "OTC (Tezgâhüstü) Piyasa", tanim: "Standart borsa kuralları dışında, iki taraf arasında serbestçe belirlenen koşullarla işlemlerin yapıldığı piyasa." },
            { terim: "Fiyat Keşfi", tanim: "İkincil piyasada arz-talep dengesiyle araçların piyasa değerinin belirlenmesi süreci." },
          ],
          dikkatlar: [
            "İkincil piyasa ihraççıya fon SAĞLAMAZ — ancak birincil piyasa fiyatını doğrudan etkiler. Sınav sorularında bu iki özellik birbirine karıştırılır.",
            "Yatırım fonları tüzel kişiliğe sahip olmasa da 'ihraççı' sayılır (md. 3/1-h). Donatma iştiraki ise tüzel kişiliği olmadığı için ihraççı OLAMAZ.",
            "Kitle fonlama platformları aracılığıyla para toplayanlar ihraççı tanımının açıkça DIŞINDADIR.",
            "Mevduat bankaları SPKn md. 35'te sayılan 'sermaye piyasası kurumları' arasında YER ALMAZ; yalnızca yetki belgesiyle sermaye piyasası faaliyetine katılabilirler.",
            "Pay Piyasası ve Tahvil-Bono Piyasası SPOT piyasa örnekleridir; vadeli piyasayla karıştırmayın.",
          ],
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
            "30 Aralık 2012 tarihinde yürürlüğe giren 6362 sayılı Sermaye Piyasası Kanunu, yürürlükten kaldırılan 2499 sayılı Kanun'un çok daha kapsamlı ve çağdaş bir versiyonudur. Hazırlanmasında dört temel etken belirleyici olmuştur: (1) Aynı dönemde yürürlüğe giren 6102 sayılı Türk Ticaret Kanunu ile uyum zorunluluğu, (2) AB finans mevzuatına (MiFID, EMIR, AIFMD) entegrasyon ihtiyacı, (3) 2008 küresel finansal krizinin ortaya koyduğu sistem riskleri ve denetim açıkları, (4) 2499 sayılı eski Kanun'un piyasanın ölçek ve karmaşıklığı karşısında yetersiz kalması. Kanun, 'çerçeve kanun' (skeleton law) niteliğinde olup ayrıntı düzenlemeler Kurul tebliğ ve ilke kararlarına bırakılmıştır. Bu yapı hem esneklik sağlar (Kurul piyasa koşullarına hızlıca uyum sağlayabilir) hem de teknik konuların uzmanlaşmış otorite tarafından düzenlenmesine olanak tanır. Mevzuat hiyerarşisi şu şekildedir: 6362 sayılı SPKn (birincil kaynak) → Yönetmelik → Tebliğ → Kurul İlke Kararları.",
          sections: [
            {
              heading: "Kanunun Amacı — Yedi Temel Değer",
              icon: "shield",
              items: [
                {
                  strong: "Güvenilirlik:",
                  text: "Piyasanın tüm aktörleri arasında sözleşme ve taahhütlere sadakatin esas olduğu bir ortam oluşturulması; güvensizliğin piyasadan sermaye kaçışına yol açtığı gerçeğinden hareketle bu değer önceliklidir.",
                },
                {
                  strong: "Şeffaflık:",
                  text: "Kamuyu aydınlatma ilkesi kapsamında ihraççıların ve sermaye piyasası kurumlarının zamanında, doğru ve eksiksiz bilgi açıklaması. İçsel bilgi asimetrisi ile piyasa manipülasyonu şeffaflık ilkesinin ihlalidir.",
                },
                {
                  strong: "Etkinlik:",
                  text: "Fon transferinin ve fiyat keşfinin en düşük işlem maliyetiyle gerçekleşmesi; düzenleyici yükün piyasayı boğmadan koruma işlevini yerine getirmesi.",
                },
                {
                  strong: "İstikrar:",
                  text: "Ani ve aşırı oynaklıkların önlenmesi; sistemik riskin kontrol altında tutulması. 2008 sonrası düzenleyici çerçevenin belkemiğini oluşturmaktadır.",
                },
                {
                  strong: "Adalet ve Rekabet:",
                  text: "Tüm aktörlerin eşit kurallara tabi olması ve piyasada çarpıtıcı tekellerin oluşmasının engellenmesi. Haksız avantaj yaratan uygulamalar (manipülasyon, içeriden öğrenme) bu değerlerin doğrudan ihlalidir.",
                },
                {
                  strong: "Tasarruf Sahiplerinin Korunması:",
                  text: "Kanunun nihai amacı; bireysel yatırımcıların bilgi asimetrisinden, yanıltıcı uygulamalardan ve aracı kurumların ahlaki tehlikesinden (moral hazard) korunmasını güvence altına almaktır.",
                },
              ],
            },
            {
              heading: "Uygulama Alanı ve Kapsam",
              icon: "trend",
              items: [
                {
                  strong: "Temel Kapsam (md. 1 ve 136):",
                  text: "Halka açık ortaklıklar, tüm sermaye piyasası kurum ve kuruluşları ile bu Kanun'da düzenlenen faaliyetler Kanun kapsamındadır. Muafiyet tanınan kurumlar sınırlı sayıda olup bireysel muafiyet kararı Kurul tarafından verilir.",
                },
                {
                  strong: "Genel Hükümlerle İlişki (md. 2/2):",
                  text: "Kanun ve ikincil düzenlemelerde hüküm bulunmayan; diğer kanunlarda bu Kanunun uygulanmayacağının belirtildiği hâllerde TMK, TBK, TTK ve TCK başta olmak üzere genel hükümler uygulanır. Bu kural SPKn'nu 'birincil mevzuat' statüsüne yerleştirir.",
                },
                {
                  strong: "İkincil Mevzuat Zinciri:",
                  text: "SPK, Kanun'dan aldığı yetki çerçevesinde yönetmelik, tebliğ ve ilke kararları çıkarır. Bir konuda önce Kanun, ardından ilgili tebliğ, son olarak ilke kararları uygulanır. Tebliğler Roma rakamıyla sınıflandırılır (örn. II-5.2 Satış Tebliği, III-35.1 Halka Arz Tebliği).",
                },
              ],
            },
            {
              heading: "Çerçeve Kanun Niteliğinin Sonuçları",
              icon: "shield",
              items: [
                {
                  strong: "Geniş İkincil Düzenleme Yetkisi:",
                  text: "Kanun yalnızca ana esasları belirler; ayrıntıları Kurul düzenlemelerine bırakır. Bu esneklik sayesinde Kurul piyasa ihtiyaçlarına hızla yanıt verebilir.",
                },
                {
                  strong: "Sürekli İzleme ve Güncelleme Yükümlülüğü:",
                  text: "Piyasanın hassas ve dinamik yapısı nedeniyle düzenleyicinin piyasayı ve düzenlemelerin etkisini sürekli izlemesi, gerektiğinde tebliğ değişikliğine gitmesi zorunludur.",
                },
                {
                  strong: "İdari ve Cezai Yaptırım Yetkisi:",
                  text: "SPK; md. 103 vd. kapsamında idari para cezası, md. 106 vd. kapsamındaki suçlar için Cumhuriyet Başsavcılıklarına suç duyurusu ve md. 96 kapsamında faaliyet durdurma kararları verebilir.",
                },
                {
                  strong: "Uluslararası Uyum Zorunluluğu:",
                  text: "AB direktifleri ve IOSCO standartlarındaki değişiklikler periyodik olarak Kanun ve tebliğlere yansıtılmakta; bu durum mevzuatın sık güncellemesini zorunlu kılmaktadır.",
                },
              ],
            },
          ],
          tip: "Sınavlarda 'SPKn'nun temel amacı hangisi DEĞİLDİR?' soruları sıkça çıkar. 'Şirket kâr maksimizasyonu' ve 'ekonomik büyüme garantisi' Kanun'un amaçları arasında YOKTUR. Çerçeve kanun niteliği nedeniyle bir konunun çözümünde her zaman şu sıra izlenir: Kanun → Tebliğ → İlke Kararı.",
          kavramlar: [
            { terim: "Çerçeve Kanun", tanim: "Ana esasları belirleyip ayrıntı düzenlemeyi uzman otoriteye (SPK) devreden, dolayısıyla tebliğ ve ilke kararlarıyla yaşayan kanun türü." },
            { terim: "Birincil Mevzuat", tanim: "Kanun ve Kanun'a dayanarak çıkarılan yönetmelikler; diğer düzenlemelere önceliklidir." },
            { terim: "İkincil Mevzuat", tanim: "SPK tebliğleri ve ilke kararları; Kanun'dan yetki alarak çıkarılır, birincil mevzuatla çelişemez." },
            { terim: "Kamuyu Aydınlatma", tanim: "Yatırımcıların bilinçli karar verebilmesi için ihraççı ve aracıların zamanında, tam ve doğru bilgi açıklaması yükümlülüğü." },
            { terim: "Sistemik Risk", tanim: "Bir piyasa aktörünün sorunlarının tüm finansal sisteme sıçrama tehlikesi; SPKn'nun istikrar amacının temel gerekçesidir." },
            { terim: "Moral Hazard (Ahlaki Tehlike)", tanim: "Riski başkasına transfer eden aktörün daha riskli davranma eğilimi; yatırımcı korumasının temel nedeni." },
          ],
          dikkatlar: [
            "'Kâr maksimizasyonu', 'ekonomik büyüme garantisi' veya 'devlet geliri artırma' ifadeleri SPKn'nun amacı olarak sunulursa YANLIŞ seçenektir.",
            "Genel hükümler (TTK, TBK vb.) Kanunda ve ikincil mevzuatta HÜKÜM BULUNMAMASI koşuluyla ve diğer kanunlarda özellikle 'bu kanun uygulanmaz' denmesi halinde devreye girer.",
            "İdari para cezası md. 103 vd., cezai suçlar ise md. 106 vd.'de düzenlenir. Bu madde numaralarını karıştırmayın.",
            "2499 sayılı eski Kanun yetersiz kaldığı için 6362 sayılı Kanun çıkarılmıştır; OECD kuralları veya IMF talepleri doğrudan hazırlanma gerekçesi olarak sayılmamaktadır.",
          ],
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
            "6362 sayılı Sermaye Piyasası Kanunu, piyasanın bütünlüğünü (market integrity) ve yatırımcı güvenini korumak için iki paralel yaptırım rejimi öngörmektedir: (1) Adli suçlar — md. 106-115 arasında düzenlenen, savcılık soruşturması ve mahkeme kararı gerektiren hapis ve adli para cezası içeren suçlar; (2) İdari yaptırımlar — md. 103 vd.'nde düzenlenen, doğrudan SPK kararıyla uygulanan idari para cezaları. İki rejim birbirinden bağımsız işler; aynı fiil hem suç hem de idari ihlal teşkil edebilir. Suçların büyük bölümü 'özel kanun' kapsamında olduğundan TCK'nın genel hükümleri tamamlayıcı niteliktedir. 2024 yılında yapılan değişiklikle kripto varlık hizmet sağlayıcılarına ilişkin zimmet suçu (md. 110/A) eklenmiş; yaptırım rejimi güçlendirilmiştir.",
          sections: [
            {
              heading: "Bilgi Suistimali — md. 106 (İçeriden Öğrenenlerin Ticareti)",
              icon: "shield",
              items: [
                {
                  strong: "Tanım ve Unsurlar:",
                  text: "İhraççı ya da faaliyetiyle bağlantılı kişilerin henüz kamuya açıklanmamış içsel bilgiyi kullanarak bizzat ya da başkası aracılığıyla sermaye piyasası araçlarında işlem yapmasıdır. Suçun üç unsuru: (a) içsel bilgiye erişim, (b) kasıt, (c) bu bilgiye dayanarak işlem yapmak veya yönlendirmek.",
                },
                {
                  strong: "Suçun Faili:",
                  text: "Yönetim kurulu üyeleri, yöneticiler, denetçiler, çalışanlar ve bunların yakınları başta olmak üzere; işin, mesleğin ya da görevin yerine getirilmesi nedeniyle içsel bilgiye ulaşan herkes fail olabilir.",
                },
                {
                  strong: "Ceza Miktarı:",
                  text: "2 yıldan 5 yıla kadar hapis ve beş bin güne kadar adli para cezası. Suçun örgütlü biçimde ya da piyasa bozucu sonuçlar doğuracak şekilde işlenmesi hâlinde ceza artırılır.",
                },
              ],
            },
            {
              heading: "Piyasa Dolandırıcılığı — md. 107 (Manipülasyon)",
              icon: "trend",
              items: [
                {
                  strong: "İşleme Dayalı Manipülasyon:",
                  text: "Sermaye piyasası araçlarında yapay arz veya talep yaratmak, fiyatı yapay düzeyde tutmak ya da hareketini etkilemek amacıyla gerçek bir ekonomik gerekçe olmaksızın alım-satım yapmak. Wash trade (kendi kendine işlem) ve matched order (anlaşmalı alım-satım) bu kategoridedir.",
                },
                {
                  strong: "Bilgiye Dayalı Manipülasyon:",
                  text: "Fiyatı etkileme amacıyla yanlış, yanıltıcı veya eksik bilgi, söylenti ya da haber yaymak; analiz raporu veya görüş bildirimiyle piyasayı yanlış yönlendirmek.",
                },
                {
                  strong: "Ceza Miktarı:",
                  text: "3 yıldan 5 yıla kadar hapis ve beş bin güne kadar adli para cezası. Suçun piyasayı ciddi biçimde bozması hâlinde üst sınırdan ceza uygulanır; ayrıca elde edilen kazanç müsadereye tabi tutulur.",
                },
              ],
            },
            {
              heading: "Zimmet Suçu — md. 110 ve md. 110/A",
              icon: "shield",
              items: [
                {
                  strong: "Yatırım Kuruluşlarında Zimmet (md. 110):",
                  text: "Yatırım kuruluşu yönetici ve çalışanlarının müşteri varlıklarını (para, menkul kıymet, fiziki varlık) hizmet nedeniyle muhafazalarına bırakılmış olmalarını fırsat bilerek zimmete geçirmeleri. Temel ceza: 8 yıldan 14 yıla kadar hapis ve on bin güne kadar adli para cezası.",
                },
                {
                  strong: "Nitelikli Hal — Hileli Davranış:",
                  text: "Suçun açığa çıkmamasını sağlamak amacıyla hileli davranışlarla işlenmesi hâlinde ceza 14 yıldan 20 yıla kadar hapis olarak ağırlaştırılır.",
                },
                {
                  strong: "Kripto Varlık Hizmet Sağlayıcılarda Zimmet (md. 110/A — 2024):",
                  text: "2024 yılı değişikliğiyle eklenen bu hüküm, kripto varlık hizmet sağlayıcısı yönetici ve çalışanlarının müşteri kripto varlıklarını zimmete geçirmesini ayrı bir suç tipi olarak düzenler. Hileli davranış hâlinde 14-20 yıl hapis uygulanır.",
                },
              ],
            },
            {
              heading: "İdari Para Cezalarının Yapısı — md. 103 vd.",
              icon: "trend",
              items: [
                {
                  strong: "Genel Ceza Mekanizması (md. 103/1):",
                  text: "SPK, Kanun ve ikincil mevzuat ihlallerinde belirlenen maktu alt ve üst sınırlar arasında idari para cezası uygular. Tutarlar her yıl yeniden değerleme oranıyla güncellenir. Bu ceza adli cezadan bağımsızdır; aynı fiil için her ikisi birden uygulanabilir.",
                },
                {
                  strong: "Tüzel Kişilere Özel Hesaplama:",
                  text: "Tüzel kişi ihlallerinde asgari maktu tutardan az olmamak üzere: son bağımsız denetimden geçmiş yıllık brüt satış hasılatının %1'i ile vergi öncesi kârın %20'sinden yüksek olanına kadar ceza uygulanabilir.",
                },
                {
                  strong: "Menfaat Temin Edilmesi Hâli:",
                  text: "Aykırılık sonucu haksız menfaat sağlanmışsa verilecek idari para cezası, elde edilen menfaatin iki katından az olamaz; bu kural maktu sınırın üzerinde bir sonuç doğursa bile uygulanır.",
                },
                {
                  strong: "Tekerrür Hâli:",
                  text: "Aynı kabahatin idari yaptırım kararı kesinleşmeden birden çok işlenmesi (süregelen ihlal) hâlinde ceza iki kat artırılır. Menfaat varsa ceza, menfaat veya zararın üç katından az olamaz.",
                },
                {
                  strong: "Diğer İdari Yaptırımlar:",
                  text: "Yalnızca idari para cezası değil; faaliyet izninin iptali (md. 96), geçici faaliyet durdurma ve yöneticilerin görevden uzaklaştırılması da SPK'nın başvurduğu yaptırım araçlarındandır.",
                },
              ],
            },
          ],
          tip: "İdari para cezası (md. 103) ile adli para cezası (mahkeme kararıyla md. 106-115) birbirinden tamamen bağımsızdır; aynı eylem için ikisi birden uygulanabilir. Sınavlarda 'hangi madde?' sorusu sıkça çıkar: bilgi suistimali md. 106, piyasa dolandırıcılığı md. 107, zimmet md. 110, idari para cezası md. 103. Bu madde numaralarını ezberleyin.",
          kavramlar: [
            { terim: "İçeriden Öğrenenler Ticareti", tanim: "Henüz kamuya duyurulmamış içsel bilgiyi kullanarak sermaye piyasası aracında işlem yapma suçu (md. 106)." },
            { terim: "Piyasa Manipülasyonu", tanim: "Yapay arz-talep yaratma veya yanıltıcı bilgi yayarak fiyatı etkileme suçu (md. 107)." },
            { terim: "Wash Trade", tanim: "Kendi satışı ile kendi alışını eş zamanlı yaparak yoğun işlem izlenimi yaratmak; manipülasyon türü." },
            { terim: "Zimmet", tanim: "Görev nedeniyle muhafaza edilen müşteri varlıklarını zimmete geçirme (md. 110, yatırım kuruluşları)." },
            { terim: "İdari Para Cezası", tanim: "SPK'nın doğrudan kararıyla uygulanan, mahkeme kararı gerektirmeyen para yaptırımı (md. 103)." },
            { terim: "Adli Para Cezası", tanim: "Mahkeme kararıyla verilen, hapis cezasına alternatif ya da ek olarak uygulanan para yaptırımı." },
            { terim: "Tekerrür", tanim: "Aynı kabahatin yaptırım kararı kesinleşmeden tekrar işlenmesi; cezayı iki katına çıkaran ağırlaştırıcı neden." },
            { terim: "Müsadere", tanim: "Suç yoluyla elde edilen kazanç ve araçların devlet hazinesine aktarılması; manipülasyon suçunda uygulanır." },
          ],
          dikkatlar: [
            "md. 103 = İDARİ para cezası (SPK kararı); md. 106-115 = ADLİ suçlar (savcılık-mahkeme). Bunları kesinlikle karıştırmayın.",
            "Bilgi suistimali (md. 106): 2-5 yıl hapis. Piyasa dolandırıcılığı (md. 107): 3-5 yıl hapis. Zimmet (md. 110): 8-14 yıl, hileli ise 14-20 yıl hapis.",
            "Menfaat temin edilmişse idari para cezası menfaatin en az İKİ KATI; tekerrürde menfaat varsa en az ÜÇ KATI olur.",
            "Kripto varlık hizmet sağlayıcılarda zimmet 2024 yılında eklenen md. 110/A ile ayrı suç tipi olarak düzenlenmiştir; yeni soru konusudur.",
            "İdari yaptırımlar arasında sadece para cezası yoktur; faaliyet iptali ve yönetici görevden uzaklaştırma da SPK'nın elindeki araçlardandır.",
          ],
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