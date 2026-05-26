/* ─────────────────────────────────────────────────────────────────────────────
 * Kurumlarda ve Sermaye Piyasasında Vergilendirme (1013)
 *
 * Kaynak: SPL 1013 Çalışma Notu, 31 Aralık 2025 (196 sayfa)
 * Sınavlar: SPL Düzey 3, Türev Araçlar
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: Önceki PDF'lerle çakışma yoktur. 1013 saf vergi hukukuna (Kurumlar
 * Vergisi Kanunu, GVK Geçici 67. madde, sermaye piyasası araçlarının
 * vergilendirilmesi) odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1013 } from "./mevzuat-1013";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011,
 *     ...mevzuat1012, ...mevzuat1013
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1013: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1013 KURUMLARDA VE SERMAYE PİYASASINDA VERGİLENDİRME
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1013",
    title: "Modül · Vergilendirme (1013)",
    lessons: [
      // ──────────── Ders 1: Vergi Hukuku Temel Kavramları ────────────
      {
        id: "m1013-l1",
        title: "Vergi Hukuku Temel Kavramları ve Mükellefiyet Türleri",
        duration: "9 dk",
        summary: {
          title: "Vergi Hukuku Temel Kavramları",
          intro:
            "Vergi hukuku; devletin egemenlik gücüne dayanarak gerçek ve tüzel kişilerden zorla aldığı kamu alacaklarının (vergi, harç, resim) hukuki çerçevesini düzenler. Türk vergi sisteminin temel yasaları Vergi Usul Kanunu (VUK), Gelir Vergisi Kanunu (GVK), Kurumlar Vergisi Kanunu (KVK), KDV Kanunu ve ÖTV Kanunu'dur. Bu derste vergi mükellefi, sorumlusu, matrah, oran, beyan ve mükellefiyet türleri gibi temel kavramlar incelenir.",
          sections: [
            {
              heading: "Temel Vergi Kavramları",
              icon: "shield",
              items: [
                {
                  strong: "Vergi Mükellefi:",
                  text: "VUK md. 8 uyarınca vergi kanunlarına göre kendisine vergi borcu terettüp eden gerçek veya tüzel kişidir; vergiyi doğuran olayın muhatabıdır.",
                },
                {
                  strong: "Vergi Sorumlusu:",
                  text: "Verginin ödenmesi bakımından alacaklı vergi dairesine karşı muhatap olan kişidir; tevkifat yapmakla yükümlü olanlar (işveren, banka vb.) vergi sorumlusudur.",
                },
                {
                  strong: "Verginin Matrahı:",
                  text: "Vergi borcunun hesaplanmasında esas alınan değer veya miktardır; gelirde net kazanç, KDV'de mal/hizmet bedeli, ÖTV'de değer veya miktar matrah olarak kullanılır.",
                },
                {
                  strong: "Verginin Oranı:",
                  text: "Matraha uygulanarak verginin tutarını belirleyen yüzdesel veya nispi orandır; sabit oran (KDV) veya artan oran (gelir vergisi) şeklinde olabilir.",
                },
                {
                  strong: "Tarh, Tahakkuk, Tahsil:",
                  text: "Tarh = verginin hesaplanması, Tahakkuk = ödenmesi gereken safhaya gelmesi, Tahsil = vergi dairesince fiilen alınması — vergi tekniğinin üç temel aşamasıdır.",
                },
              ],
            },
            {
              heading: "Mükellefiyet Türleri ve Vergiyi Doğuran Olay",
              icon: "trend",
              items: [
                {
                  strong: "Tam Mükellefiyet (GVK md. 3):",
                  text: "Türkiye'de yerleşmiş olan veya bir yıl içinde devamlı olarak Türkiye'de 6 aydan fazla oturan gerçek kişiler; tam mükellefler hem yurtiçi hem yurtdışı tüm gelirleri üzerinden vergilendirilir.",
                },
                {
                  strong: "Dar Mükellefiyet:",
                  text: "Türkiye'de yerleşmiş olmayan gerçek kişiler; yalnızca Türkiye'de elde ettikleri gelirler üzerinden vergilendirilir, yurtdışı gelirleri Türkiye'de vergilendirilmez.",
                },
                {
                  strong: "Kurumlar Vergisinde Mükellefiyet (KVK md. 3):",
                  text: "Kanuni veya iş merkezi Türkiye'de bulunan kurumlar tam mükellef; bunlardan biri bile Türkiye'de bulunmayan kurumlar dar mükelleftir.",
                },
                {
                  strong: "Vergiyi Doğuran Olay:",
                  text: "Verginin doğmasına yol açan olay veya işlemdir; gelir vergisinde gelirin elde edilmesi, KDV'de teslim, ÖTV'de imal/ithalat olayıdır.",
                },
                {
                  strong: "Çifte Vergilendirmeyi Önleme Anlaşmaları:",
                  text: "Aynı gelirin iki ülke tarafından da vergilendirilmesini önleyen ikili anlaşmalardır; Türkiye 90'dan fazla ülkeyle bu tür anlaşma imzalamıştır.",
                },
              ],
            },
          ],
          tip: "Tam mükellef: Türkiye'de yerleşik = tüm dünya geliri vergilenir. Dar mükellef: Türkiye dışı yerleşik = sadece TR kaynaklı gelir. Kurumlar için kriter: kanuni VEYA iş merkezi (biri bile Türkiye'deyse tam mükellef). Tarh-Tahakkuk-Tahsil sıralaması sınavın klasik soru kalıbıdır.",
          kavramlar: [
            { terim: "Tam Mükellefiyet", tanim: "Türkiye'de yerleşik kişi veya kuruluşların tüm dünya geliri üzerinden vergilendirilmesi; ikametgâh veya kanuni/iş merkezi esas alınır." },
            { terim: "Dar Mükellefiyet", tanim: "Türkiye dışında yerleşik kişi veya kuruluşların yalnızca Türkiye kaynaklı gelirleri üzerinden vergilendirilmesi." },
            { terim: "Kanuni/İş Merkezi Kriteri", tanim: "Kurumlar için tam mükellef tespitinde kanuni merkezi VEYA iş merkezinin Türkiye'de bulunması yeterlidir; ikisinden biri olması tam mükellefiyeti doğurur." },
            { terim: "Tarh", tanim: "Vergi dairesinin mükellef veya sorumluyu, ödenmesi gereken vergi miktarını hesap ve takdir yoluyla borclandırması işlemi." },
            { terim: "Tahakkuk", tanim: "Tarhiyatın mükellefe tebliğiyle verginin kesinleşmesi ve ödeme aşamasına geçilmesi; tahsil edilebilirlik bu aşamada doğar." },
            { terim: "Tahsil", tanim: "Tahakkuk eden verginin mükellef tarafından fiilen ödenmesi; vergi borcunun son aşaması." },
            { terim: "Vergi Sorumlusu", tanim: "Verginin mükellef yerine vergi dairesine ödemekle yükümlü kişi; stopajlarda tevkifat yapan işveren veya kuruluş bu sıfatı taşır." },
          ],
          dikkatlar: [
            "Tam mükellef = tüm dünya geliri vergilenir; dar mükellef = yalnızca Türkiye kaynaklı gelir — 'yurt içi gelir' ifadesi de Türkiye kaynaklı anlamındadır.",
            "Kurumlar için tam mükellef kriteri: kanuni merkez VEYA iş merkezi Türkiye'de olması yeterlidir — iki koşulun birlikte gerçekleşmesi aranmaz.",
            "Vergilendirme sırası: Tarh → Tahakkuk → Tahsil — bu üç aşamanın sırası ve tanımı sınavın en temel vergi hukuku sorusudur.",
            "Vergi mükellefinden farklı olarak vergi sorumlusu, başkasına ait vergiyi tahsil edip devlete öder; stopajlarda aracı kurum/işveren bu roldedir.",
            "Çifte vergilendirme önleme anlaşmaları (ÇVÖA) tam ve dar mükellef arasındaki vergi yükünü belirler; anlaşma varsa iç hukuktan önce uygulanır.",
          ],
        },
        questions: [
          {
            text: "Vergi Usul Kanunu (VUK) uyarınca 'vergi mükellefi' ile 'vergi sorumlusu' arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki kavram aynı anlama gelir." },
              { id: "B", text: "Vergi mükellefi vergi borcu terettüp eden kişidir; vergi sorumlusu ise verginin ödenmesi bakımından vergi dairesine karşı muhatap olan kişidir (tevkifat yapanlar gibi)." },
              { id: "C", text: "Vergi sorumlusu yalnızca devlet kurumlarıdır." },
              { id: "D", text: "Vergi mükellefi yalnızca yabancı uyrukludur." },
            ],
            correct: "B",
            explanation:
              "VUK md. 8 uyarınca vergi mükellefi, vergi kanunlarına göre üzerine vergi borcu terettüp eden gerçek veya tüzel kişidir. Vergi sorumlusu ise verginin ödenmesi bakımından alacaklı vergi dairesine karşı muhatap olan kişidir; örneğin işveren çalışanın gelir vergisi tevkifatını yapan vergi sorumlusudur, çalışan ise vergi mükellefidir. Banka da müşterilerin faiz gelirlerinden tevkifat yapan vergi sorumlusudur.",
          },
          {
            text: "GVK md. 3 uyarınca 'tam mükellefiyet' için hangi koşul aranır?",
            options: [
              { id: "A", text: "Türkiye'de yerleşmiş olmak veya bir yıl içinde devamlı olarak Türkiye'de 6 aydan fazla oturmak; tam mükellefler tüm dünya gelirleri üzerinden vergilendirilir." },
              { id: "B", text: "Yalnızca Türk vatandaşı olmak yeterlidir." },
              { id: "C", text: "Yalnızca Türkiye'de gelir elde etmek yeterlidir." },
              { id: "D", text: "Türkiye'de bir yıldan az süreyle bulunmak yeterlidir." },
            ],
            correct: "A",
            explanation:
              "GVK md. 3 uyarınca tam mükellefiyet için iki kriterden biri sağlanmalıdır: (1) İkametgâhın Türkiye'de bulunması, (2) Bir takvim yılı içinde Türkiye'de devamlı olarak 6 aydan fazla oturmak. Tam mükellefler hem Türkiye'de hem de yurt dışında elde ettikleri tüm gelirler üzerinden Türkiye'de vergilendirilir ('worldwide income' ilkesi). Dar mükellefler ise yalnızca Türkiye kaynaklı gelirleri üzerinden vergilendirilir.",
          },
          {
            text: "Kurumlar Vergisi Kanunu (KVK) md. 3 uyarınca bir kurumun 'tam mükellef' sayılması için aşağıdakilerden hangisi yeterlidir?",
            options: [
              { id: "A", text: "Yalnızca Türk vatandaşı ortakların bulunması" },
              { id: "B", text: "Kanuni veya iş merkezinden BİRİNİN Türkiye'de bulunması yeterlidir; biri bile Türkiye'de bulunmuyorsa kurum dar mükelleftir." },
              { id: "C", text: "Sermayenin tamamının Türk Lirası cinsinden olması" },
              { id: "D", text: "Yıllık kârın belirli bir tutarı aşması" },
            ],
            correct: "B",
            explanation:
              "KVK md. 3 uyarınca bir kurumun tam mükellef sayılması için kanuni merkez veya iş merkezinden en az birinin Türkiye'de bulunması yeterlidir. Kanuni merkez; ana sözleşmede belirtilen merkezdir. İş merkezi ise iş bakımından muamelelerin fiilen toplandığı ve idari faaliyetlerin yürütüldüğü merkezdir. İki kriterden biri Türkiye'deyse kurum tam mükelleftir; ikisi de Türkiye dışındaysa dar mükelleftir.",
          },
          {
            text: "Vergi tekniğinin üç temel aşaması olan 'tarh, tahakkuk ve tahsil' kavramları için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tarh = vergi dairesince fiilen alınması, Tahakkuk = hesaplanması, Tahsil = ödenmesi gereken safhaya gelmesi" },
              { id: "B", text: "Tarh = verginin hesaplanması, Tahakkuk = ödenmesi gereken safhaya gelmesi, Tahsil = vergi dairesince fiilen alınması" },
              { id: "C", text: "Üç kavram da aynı anlama gelir." },
              { id: "D", text: "Tahsil aşaması ihtiyaridir." },
            ],
            correct: "B",
            explanation:
              "Vergi tekniğinin üç temel aşaması: (1) Tarh — vergi alacağının kanunlarda gösterilen matrah ve oranlar üzerinden vergi dairesi tarafından hesaplanarak miktarının belirlenmesi, (2) Tahakkuk — tarh edilen verginin ödenmesi gereken safhaya gelmesi (tebliğ, itiraz süresinin geçmesi sonucu), (3) Tahsil — verginin vergi dairesi tarafından kanuna uygun şekilde fiilen alınması. Bu sıralama vergi sürecinin temel yapı taşıdır ve VUK'ta düzenlenmiştir.",
          },
          {
            text: "Çifte Vergilendirmeyi Önleme Anlaşmaları (ÇVÖA) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Türkiye yalnızca AB ülkeleriyle ÇVÖA yapmıştır." },
              { id: "B", text: "ÇVÖA, aynı gelirin iki ülke tarafından da vergilendirilmesini önleyen ikili anlaşmalardır; Türkiye 90'dan fazla ülkeyle bu tür anlaşma imzalamıştır." },
              { id: "C", text: "ÇVÖA yalnızca tüzel kişiler için geçerlidir." },
              { id: "D", text: "ÇVÖA gümrük vergilerini düzenler." },
            ],
            correct: "B",
            explanation:
              "Çifte Vergilendirmeyi Önleme Anlaşmaları (ÇVÖA), iki ülke arasında aynı gelirin her iki ülkede de vergilendirilmesini önlemeye yönelik uluslararası ikili anlaşmalardır. Bu anlaşmalar genellikle OECD model anlaşmasını esas alır. Türkiye, 90'dan fazla ülkeyle ÇVÖA imzalamıştır. Anlaşmalarda; gelirin türü (faiz, temettü, royalty), vergileme hakkının hangi ülkeye ait olacağı, mahsup yöntemleri ve vergi kesintisi oranları düzenlenir. ÇVÖA hükümleri iç hukuktaki vergi düzenlemelerinden önce uygulanır.",
          },
        ],
      },
      // ──────────── Ders 2: Kurumlar Vergisi ────────────
      {
        id: "m1013-l2",
        title: "Kurumlar Vergisi — Mükellefler, İstisnalar ve İndirimler",
        duration: "10 dk",
        summary: {
          title: "Kurumlar Vergisi Kanunu",
          intro:
            "Kurumlar Vergisi Kanunu (KVK), 5520 sayılı kanunla düzenlenmiş olup; sermaye şirketleri, kooperatifler, iktisadi kamu kuruluşları, dernek ve vakıflara ait iktisadi işletmeler ile iş ortaklıklarının kazançlarını vergilendirir. Standart kurumlar vergisi oranı %25'tir (bankalarda %30). Kurum kazancı; tam mükellef kurumlarda dünya çapında elde edilen tüm kazançtan, dar mükellef kurumlarda ise Türkiye'de elde edilen kazançtan oluşur.",
          sections: [
            {
              heading: "Kurumlar Vergisi Mükellefleri ve Vergi Oranı",
              icon: "shield",
              items: [
                {
                  strong: "Kurumlar Vergisi Mükellefleri:",
                  text: "Sermaye şirketleri (anonim, limited, sermayesi paylara bölünmüş komandit), kooperatifler, iktisadi kamu kuruluşları, dernek ve vakıflara ait iktisadi işletmeler, iş ortaklıkları kurumlar vergisi mükellefidir.",
                },
                {
                  strong: "Vergi Oranı:",
                  text: "Standart kurumlar vergisi oranı %25; bankalar, finansal kiralama şirketleri, faktoring şirketleri, finansman şirketleri için %30 olarak uygulanır (2023 değişikliğiyle).",
                },
                {
                  strong: "Geçici Vergi:",
                  text: "Kurumlar vergisi mükellefleri yıl içinde dört dönemlik geçici vergi öder (Mart, Haziran, Eylül, Aralık); yıl sonunda toplam ödenecek vergiden mahsup edilir.",
                },
                {
                  strong: "Beyan ve Ödeme:",
                  text: "Kurumlar vergisi beyannamesi izleyen yılın 1-25 Nisan döneminde verilir; vergi 30 Nisan'a kadar ödenir; beyanname elektronik ortamda verilir.",
                },
                {
                  strong: "Kurum Kazancının Tespiti:",
                  text: "Hesap dönemi sonunda elde edilen ticari kâra istisnalar düşülür, kanunen kabul edilmeyen giderler eklenir, vergi indirimleri uygulanarak vergiye tabi kazanç bulunur.",
                },
              ],
            },
            {
              heading: "Kurumlar Vergisi İstisnaları ve İndirimler",
              icon: "trend",
              items: [
                {
                  strong: "İştirak Kazançları İstisnası:",
                  text: "Tam mükellef kurumlardan elde edilen iştirak kazançları (kâr payları) %100 oranında kurumlar vergisinden istisnadır; çifte vergilendirmeyi önlemek için.",
                },
                {
                  strong: "Yurtdışı İştirak Kazançları İstisnası:",
                  text: "Belirli koşulları (en az 1 yıl elde tutma, %10 ortaklık payı, kazancın %15 vergi yükü) sağlayan yurt dışı iştirak kazançları da istisnadır.",
                },
                {
                  strong: "Taşınmaz ve İştirak Hissesi Satış Kazancı İstisnası:",
                  text: "En az 2 yıl elde tutulan taşınmazların ve iştirak hisselerinin satışından elde edilen kazancın %50'si (taşınmazlar için 15.07.2023 sonrası elde edilenlerde) kurumlar vergisinden istisnadır.",
                },
                {
                  strong: "Ar-Ge ve Tasarım İndirimi:",
                  text: "Ar-Ge ve tasarım faaliyetleri için yapılan harcamaların %100'ü kurum kazancından indirilebilir; bu indirim sınırsız olup gelecek yıllara devredilebilir.",
                },
                {
                  strong: "Bağış ve Yardım İndirimi:",
                  text: "Belirli kamu kurumlarına yapılan bağış ve yardımların kurum kazancının %5'ine kadar olan kısmı indirilebilir; bazı bağışlar için (eğitim, kültür) %100 indirim uygulanır.",
                },
              ],
            },
          ],
          tip: "Kurumlar vergisi oranı %25, finansal kuruluşlarda %30. İştirak kazançları istisnası %100 — çifte vergilendirme önleme amacıyla. Beyan: Nisan 1-25, ödeme 30 Nisan'a kadar. 4 dönemlik geçici vergi (3 ayda bir). Ar-Ge harcamaları %100 indirilir, üst sınır yoktur. Standart bağış indirimi %5 sınırlıdır.",
          kavramlar: [
            { terim: "Kurumlar Vergisi Oranı", tanim: "Standart kurum kazançları üzerinden %25; bankalar ve finansal kuruluşlar için %30 oranında uygulanan vergi." },
            { terim: "İştirak Kazançları İstisnası", tanim: "Tam mükellef kurumların diğer tam mükellef kurumlardan elde ettiği kâr paylarının kurumlar vergisinden %100 istisna tutulması; çifte vergilendirmeyi önler." },
            { terim: "Geçici Vergi", tanim: "Kurumların üçer aylık dönemlerde cari yıl kazancı üzerinden ödediği peşin vergi; 4 dönem olup yıl sonu kurumlar vergisinden mahsup edilir." },
            { terim: "Kurumlar Vergisi Beyan Süresi", tanim: "Kurumlar vergisi beyannamesi Nisan 1-25 arasında verilir; verginin tamamı 30 Nisan'a kadar ödenir." },
            { terim: "Ar-Ge İndirimi", tanim: "Kurumların Ar-Ge harcamalarını kurumlar vergisi matrahından %100 oranında indirme hakkı; ayrıca ek indirim de uygulanabilir ve üst sınır yoktur." },
            { terim: "Bağış İndirimi", tanim: "Kurumların beyan ettikleri kazançtan indirebilecekleri standart bağış tutarının kurum kazancının %5'iyle sınırlı tutulması." },
            { terim: "Yatırım İndirimi", tanim: "Belirli nitelikteki yatırım harcamalarının vergi matrahından indirilmesine olanak tanıyan; yatırımı teşvik amaçlı vergi avantajı." },
          ],
          dikkatlar: [
            "Kurumlar vergisi genel oran %25; bankalar ve finansal kuruluşlar için %30 — 'tüm kurumlarda %25' ifadesi eksiktir.",
            "İştirak kazançları istisnası tam mükellefler arası kâr payı dağıtımında %100 istisna tanır; bu çifte vergilendirmeyi önlemek içindir.",
            "Geçici vergi 3 ayda bir, 4 dönem halinde ödenir; yıl sonu kurumlar vergisi beyanında geçici vergiler mahsup edilir.",
            "Ar-Ge harcamaları %100 indirilebilir; üst sınır yoktur — standart gider indiriminden farklıdır, sınırsız indirim imkânı vardır.",
            "Standart bağış indirimi %5 ile sınırlıdır; ancak eğitim ve sağlık amaçlı bazı bağışlarda bu sınır uygulanmayabilir.",
          ],
        },
        questions: [
          {
            text: "Türkiye'de uygulanan standart kurumlar vergisi oranı ile bankalarda uygulanan oran sırasıyla aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "%20 (standart) - %22 (banka)" },
              { id: "B", text: "%25 (standart) - %30 (banka)" },
              { id: "C", text: "%30 (standart) - %25 (banka)" },
              { id: "D", text: "%23 (standart) - %23 (banka)" },
            ],
            correct: "B",
            explanation:
              "Standart kurumlar vergisi oranı %25 olarak uygulanmaktadır. Ancak bankalar, finansal kiralama şirketleri, faktoring şirketleri, finansman şirketleri ve elektronik ödeme/elektronik para kuruluşları için bu oran %30 olarak uygulanır (2023 değişikliğiyle). Bu farklı oran, finansal sektörden alınan vergi gelirinin artırılmasına yöneliktir; Türkiye OECD ortalamasına yakın bir orana sahiptir.",
          },
          {
            text: "KVK kapsamında 'iştirak kazançları istisnası' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İştirak kazançları %50 oranında istisnadır." },
              { id: "B", text: "Tam mükellef kurumlardan elde edilen iştirak kazançları (kâr payları) %100 oranında kurumlar vergisinden istisnadır; çifte vergilendirmeyi önlemek için tasarlanmıştır." },
              { id: "C", text: "İştirak kazançları her zaman vergilendirilir." },
              { id: "D", text: "İstisna yalnızca yabancı kurumlardan elde edilen kâr payları için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "KVK md. 5/1-(a) kapsamında tam mükellef kurumlardan elde edilen iştirak kazançları (kâr payları) %100 oranında kurumlar vergisinden istisna edilmiştir. Bu istisnanın amacı, kâr payı olarak dağıtılan tutarın iki kez vergilendirilmesini önlemektir: kâr payı dağıtan şirket zaten kurumlar vergisi ödemiştir, dolayısıyla aynı kâr alıcı kurumda tekrar vergilendirilmez. Yurt dışı iştirak kazançları için ise belirli koşullara (en az 1 yıl elde tutma, %10 ortaklık payı, en az %15 vergi yükü) bağlı olarak istisna uygulanır.",
          },
          {
            text: "Kurumlar Vergisi mükellefleri için yıllık beyan ve ödeme süreleri ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Beyan: 1-15 Mart, ödeme: 30 Mart" },
              { id: "B", text: "Beyan: izleyen yılın 1-25 Nisan döneminde verilir; vergi 30 Nisan'a kadar ödenir; beyanname elektronik ortamda verilir." },
              { id: "C", text: "Beyan: 1-31 Mayıs, ödeme: 30 Haziran" },
              { id: "D", text: "Beyan: 1-15 Ekim, ödeme: 30 Ekim" },
            ],
            correct: "B",
            explanation:
              "Kurumlar Vergisi mükellefleri, hesap döneminin (genellikle takvim yılı) sona ermesini izleyen 4. ayın (Nisan) 1. ile 25. günleri arasında yıllık kurumlar vergisi beyannamesini elektronik ortamda verir. Vergi ise aynı ayın (Nisan) son gününe (30 Nisan) kadar ödenir. Yıl içinde ise dört dönemlik geçici vergi (Mart, Haziran, Eylül, Aralık) ödenir; yıl sonu beyanında ödenecek toplam vergiden bu geçici vergiler mahsup edilir.",
          },
          {
            text: "KVK kapsamında 'taşınmaz ve iştirak hissesi satış kazancı istisnası' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Hiçbir koşul aranmaz, tüm satış kazançları istisnadır." },
              { id: "B", text: "En az 2 yıl elde tutulan taşınmazların ve iştirak hisselerinin satışından elde edilen kazancın %50'si (taşınmazlar için 15.07.2023 sonrası elde edilenlerde) kurumlar vergisinden istisnadır." },
              { id: "C", text: "Yalnızca konut satışları istisnadır." },
              { id: "D", text: "Yalnızca devlet kurumlarına yapılan satışlar istisnadır." },
            ],
            correct: "B",
            explanation:
              "KVK md. 5/1-(e) kapsamında, en az iki tam yıl süreyle aktife dahil edilen taşınmazların ve iştirak hisselerinin satışından elde edilen kazançlar belirli oranda kurumlar vergisinden istisnadır. 15.07.2023 tarihinden sonra elde edilen taşınmazların satışından doğan kazançlar için istisna oranı %50'ye düşürülmüştür (önceki düzenlemede %50 olarak uygulanıyordu, bu kazançlar artık daha sınırlı vergi avantajı sağlar). Amaç şirketlerin uzun vadeli yatırımlarını teşvik etmektir.",
          },
          {
            text: "KVK kapsamında 'Ar-Ge ve tasarım indirimi' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Ar-Ge harcamalarının %25'i indirilebilir." },
              { id: "B", text: "Ar-Ge ve tasarım faaliyetleri için yapılan harcamaların %100'ü kurum kazancından indirilebilir; bu indirim sınırsız olup gelecek yıllara devredilebilir." },
              { id: "C", text: "Ar-Ge indirimi yalnızca yabancı şirketlere açıktır." },
              { id: "D", text: "Ar-Ge harcamaları kurumlar vergisinden indirilemez." },
            ],
            correct: "B",
            explanation:
              "5746 sayılı Araştırma, Geliştirme ve Tasarım Faaliyetlerinin Desteklenmesi Hakkında Kanun ile Kurumlar Vergisi Kanunu m. 10 uyarınca, Ar-Ge ve tasarım faaliyetleri için yapılan harcamaların %100'ü kurum kazancından indirilir. Bu indirim için üst sınır bulunmamaktadır. İlgili dönemde kazanç yetersizliği nedeniyle indirilemeyen tutarlar gelecek yıllara devredilebilir. Ar-Ge merkezleri ve teknoloji geliştirme bölgelerindeki faaliyetler için ek vergi avantajları da mevcuttur.",
          },
        ],
      },
      // ──────────── Ders 3: GVK Geçici 67. Madde ────────────
      {
        id: "m1013-l3",
        title: "GVK Geçici 67. Madde — Sermaye Piyasası Araçlarının Tevkifat ile Vergilendirilmesi",
        duration: "10 dk",
        summary: {
          title: "GVK Geçici 67. Madde Tevkifat Rejimi",
          intro:
            "GVK Geçici 67. madde; menkul kıymetler ve diğer sermaye piyasası araçlarının vergilendirilmesinde özel bir tevkifat (stopaj) rejimi düzenler. Bu sistemde, sermaye piyasası araçlarının elden çıkarılması veya elde tutulması sürecinde elde edilen gelirler üzerinden bankalar ve aracı kurumlar gibi tevkifat sorumluları tarafından vergi kesintisi yapılır. Tam mükellef gerçek kişiler için tevkifat genellikle nihai vergilendirme niteliğindedir.",
          sections: [
            {
              heading: "Tevkifat Sorumluları ve Kapsam",
              icon: "shield",
              items: [
                {
                  strong: "Tevkifat Sorumluları:",
                  text: "Bankalar, aracı kurumlar, portföy yönetim şirketleri, saklamacı kuruluşlar (Takasbank-MKK) ve tezgâh üstü işlemlerde aracılık eden kurumlar tevkifat yapmakla yükümlüdür.",
                },
                {
                  strong: "Tevkifata Tabi Gelirler:",
                  text: "Pay senedi alım-satım kazancı, faiz gelirleri, kâr payları, türev araç kazançları, repo gelirleri ve mevduat faizleri Geçici 67 kapsamında tevkifata tabidir.",
                },
                {
                  strong: "Tevkifat Oranları (Genel):",
                  text: "Pay senetleri ve fonlar genelde %0 (BIST'te işlem gören paylar için), DİBS ve özel sektör tahvilleri %10, mevduat faizleri %5-%15 (vadeye göre değişen).",
                },
                {
                  strong: "Tevkifat Matrahı:",
                  text: "Alım-satım kazançlarında satış bedeli ile maliyet bedeli arasındaki olumlu fark; faiz gelirlerinde ise brüt faiz tutarı tevkifat matrahıdır.",
                },
                {
                  strong: "Saklamacı Kuruluş Sorumluluğu:",
                  text: "Takasbank ve MKK saklamacı kuruluş olarak tevkifat sorumluluğu taşır; başka saklamacı kuruluşa virman halinde maliyet bedeli aktarılır, tevkifat sorumluluğu devam eder.",
                },
              ],
            },
            {
              heading: "Mükellefiyet Türlerine Göre Vergilendirme",
              icon: "trend",
              items: [
                {
                  strong: "Tam Mükellef Gerçek Kişiler:",
                  text: "Tevkifat genellikle NİHAİ vergilendirmedir; ek olarak yıllık beyan vermeleri gerekmez (bazı durumlar hariç). Türev araç kazançları için tevkifat farklı oranda uygulanır.",
                },
                {
                  strong: "Dar Mükellef Gerçek Kişiler:",
                  text: "Çoğu menkul kıymet kazancı için tevkifat yapılır ve bu nihai vergidir; çifte vergilendirme anlaşmaları varsa daha düşük oranlar uygulanabilir.",
                },
                {
                  strong: "Tam Mükellef Kurumlar:",
                  text: "Tevkifat yapılır ancak nihai vergi değildir; kurumlar yıllık beyan verir ve tevkif edilen vergiyi mahsup eder.",
                },
                {
                  strong: "Mahsup ve İade:",
                  text: "Yıl sonunda zarar oluşan işlemlerde, kâr eden işlemlerden tevkif edilen vergi ile mahsup yapılır; üç aylık dönemler bazında mahsup imkanı vardır.",
                },
                {
                  strong: "Geçici 67 İstisnaları:",
                  text: "BIST'te işlem gören paylar (1 yıldan fazla elde tutulan), TL cinsi DİBS, kira sertifikaları için özel istisnalar uygulanır; bu istisnalar zaman zaman değişmektedir.",
                },
              ],
            },
          ],
          tip: "GVK Geçici 67 = sermaye piyasasının vergi rejimi; tevkifat (stopaj) ana mekanizmadır. Tam mükellef gerçek kişide tevkifat NİHAİ vergi (beyan vermeye gerek yok). Saklamacı kuruluşlar (Takasbank-MKK) tevkifat sorumlusu. Üç aylık mahsup imkanı = zararla kâr birleştirilir, fazla vergi alınmaz.",
          kavramlar: [
            { terim: "GVK Geçici 67. Madde", tanim: "Sermaye piyasası araçlarından elde edilen gelirlerin tevkifat yoluyla vergilendirilmesini düzenleyen; Türkiye'nin finans vergisi çerçevesi." },
            { terim: "Tevkifat (Stopaj)", tanim: "Gelirin sahibine ödenmeden önce vergi sorumlusu tarafından kesilip devlete ödenmesi; GVK Geçici 67'nin temel mekanizması." },
            { terim: "Nihai Vergi", tanim: "Tevkifatın tam mükellef gerçek kişiler için beyan gerektirmeyen son ve kesin vergi olması; ayrıca yıllık beyanname verilmesi gerekmez." },
            { terim: "Üç Aylık Mahsup İmkânı", tanim: "Aynı üç aylık dönem içinde gerçekleşen zararlı işlemlerin kârlı işlemlerle mahsup edilebilmesi; fazla kesilen vergi iade edilir." },
            { terim: "Tevkifat Sorumlusu", tanim: "GVK Geçici 67 kapsamında tevkifatı yapan ve devlete ödemekle yükümlü saklama kuruluşları (Takasbank, MKK, aracı kurumlar)." },
            { terim: "Zarar Mahsubu", tanim: "Sermaye piyasası işlemlerinde oluşan zararların aynı tür işlemlerden elde edilen kârlarla mahsup edilebilmesi." },
            { terim: "Beyan Zorunluluğu İstisnası", tanim: "Tevkifata tabi gelirler için tam mükellef gerçek kişilerin ayrıca yıllık beyan vermemesi; tevkifat tüm vergi yükümlülüğünü karşılar." },
          ],
          dikkatlar: [
            "GVK Geçici 67'de tevkifat tam mükellef gerçek kişiler için NİHAİ vergidir; ayrıca yıllık beyanname verilmesi gerekmez.",
            "Üç aylık mahsup imkânı: zarar eden işlemlerin aynı dönemdeki kârlı işlemlerle netleştirilmesi — farklı dönem mahsubu uygulanmaz.",
            "Tevkifat sorumlusu saklama kuruluşlarıdır (Takasbank, MKK, aracı kurumlar); yatırımcı değil, bu kuruluşlar vergiyi keser ve devlete öder.",
            "Kurumlar için GVK Geçici 67 uygulanmaz; kurumlar kendi kurumlar vergisi rejimlerine tabidir.",
            "Dar mükellef gerçek kişiler için tevkifat nihai vergi niteliği taşıyabilir; beyan yükümlülüğü için çifte vergilendirme önleme anlaşmaları belirleyicidir.",
          ],
        },
        questions: [
          {
            text: "GVK Geçici 67. madde kapsamında 'tevkifat yapmakla sorumlu' kuruluşlar arasında aşağıdakilerden hangisi yer ALMAZ?",
            options: [
              { id: "A", text: "Bankalar" },
              { id: "B", text: "Aracı kurumlar" },
              { id: "C", text: "Saklamacı kuruluşlar (Takasbank, MKK)" },
              { id: "D", text: "Sermaye Piyasası Kurulu" },
            ],
            correct: "D",
            explanation:
              "Sermaye Piyasası Kurulu (SPK) bir düzenleyici-denetleyici kurumdur, vergi tevkifat sorumlusu değildir. GVK Geçici 67 kapsamında tevkifat yapmakla yükümlü olanlar şunlardır: bankalar, aracı kurumlar, portföy yönetim şirketleri, saklamacı kuruluşlar (Takasbank, MKK), tezgâh üstü işlemlerde aracılık eden kurumlar ve ödünç işlemlerinde rol alan kurumlar. Bu kuruluşlar müşterilerinin kazançlarından kanunda belirtilen oranlarda vergi keserek vergi dairesine yatırırlar.",
          },
          {
            text: "Tam mükellef gerçek kişiler için GVK Geçici 67 kapsamında yapılan tevkifatın niteliği nedir?",
            options: [
              { id: "A", text: "Tevkifat ön ödeme niteliğindedir, yıllık beyan verilmesi zorunludur." },
              { id: "B", text: "Tevkifat genellikle NİHAİ vergilendirmedir; ek olarak yıllık beyan vermeleri gerekmez (bazı durumlar hariç)." },
              { id: "C", text: "Tevkifat yapıldıktan sonra ek vergi tahakkuk eder." },
              { id: "D", text: "Tevkifat iade edilir." },
            ],
            correct: "B",
            explanation:
              "Tam mükellef gerçek kişiler için GVK Geçici 67. madde kapsamında yapılan tevkifat genellikle nihai vergilendirme niteliğindedir. Yani bu yatırımcılar tevkifatlı sermaye piyasası gelirleri için ek olarak yıllık beyan vermek zorunda değillerdir. Bu sistemin amacı, küçük yatırımcılar için vergi sürecini basitleştirmek ve uyum maliyetini azaltmaktır. Ancak bazı istisnai durumlarda (örneğin yurt dışında elde edilen gelirler veya belirli işlemler) yıllık beyan gerekebilir.",
          },
          {
            text: "GVK Geçici 67 kapsamında 'üç aylık mahsup imkanı' ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Mahsup imkanı bulunmaz, kazanç ve zarar ayrı vergilendirilir." },
              { id: "B", text: "Üç aylık dönemler bazında, kâr eden işlemlerden tevkif edilen vergi ile zararlı işlemler mahsup edilir; fazla vergi alınmaz." },
              { id: "C", text: "Mahsup yalnızca yıllık olarak yapılır." },
              { id: "D", text: "Mahsup yalnızca dar mükellefler için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "GVK Geçici 67 sisteminde 'üç aylık mahsup' (3 aylık tevkifat dönemi) imkanı önemli bir korunma mekanizmasıdır. Yatırımcının üç aylık dönemler bazında (Ocak-Mart, Nisan-Haziran, Temmuz-Eylül, Ekim-Aralık) gerçekleştirdiği işlemlerin kâr ve zararları birleştirilir. Bir işlemden kâr edilip vergi tevkif edildiyse ve aynı dönemde başka bir işlemden zarar yapıldıysa, bu zarar kâr ile mahsup edilir ve fazla tevkif edilen vergi iade edilir. Bu sistem yatırımcının net kazancı üzerinden vergilenmesini sağlar; brüt vergileme yerine net vergileme uygulanmış olur.",
          },
          {
            text: "Saklamacı kuruluşlar arasında 'virman' (transfer) yapıldığında tevkifat sorumluluğu açısından aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Virman halinde tevkifat sorumluluğu sona erer." },
              { id: "B", text: "Başka saklamacı kuruluşa virman halinde maliyet bedeli aktarılır, tevkifat sorumluluğu devam eder; yeni saklamacı kuruluş tevkifat yükümlülüğünü üstlenir." },
              { id: "C", text: "Virman yapılması yasaktır." },
              { id: "D", text: "Virman halinde yatırımcı kendisi tevkifat yapmak zorundadır." },
            ],
            correct: "B",
            explanation:
              "Bir yatırımcının menkul kıymetlerini bir saklamacı kuruluştan (örneğin bir banka) başka bir saklamacı kuruluşa (başka bir banka veya aracı kurum) transfer etmesi durumunda, mevcut saklamacının elde tuttuğu maliyet bedeli bilgisi yeni saklamacıya aktarılır. Bu sayede tevkifat sorumluluğu yeni saklamacıya geçer ve doğru maliyet bedeli üzerinden vergi hesaplanmaya devam eder. Bu sistem yatırımcı için süreklilik sağlar: kuruluş değiştirmek vergisel bir avantaj veya dezavantaj yaratmaz; gerçek alım maliyeti korunur.",
          },
          {
            text: "GVK Geçici 67 kapsamında BIST'te işlem gören pay senetlerinin alım-satımından elde edilen kazançlarda uygulanan tevkifat oranı genellikle nedir?",
            options: [
              { id: "A", text: "%10" },
              { id: "B", text: "%15" },
              { id: "C", text: "%0 (BIST'te işlem gören paylar için belirli koşullar altında istisna)" },
              { id: "D", text: "%30" },
            ],
            correct: "C",
            explanation:
              "BIST'te işlem gören pay senetlerinden elde edilen alım-satım kazançları için Geçici 67 kapsamında uygulanan tevkifat oranı genellikle %0'dır (sıfır). Bu özel istisna; sermaye piyasalarının derinleşmesini, yerli yatırımcı tabanının genişlemesini ve borsada yatırımcı katılımının artırılmasını teşvik etmek amacıyla uygulanır. Ancak menkul kıymet yatırım fonu katılma payları, halka açık olmayan paylar, türev araç kazançları gibi bazı işlemler için farklı oranlar uygulanır. Tevkifat oranları zaman zaman Bakanlar Kurulu (Cumhurbaşkanı) Kararı ile değiştirilebilir.",
          },
        ],
      },
      // ──────────── Ders 4: Sermaye Piyasası Araçlarının Vergilendirilmesi ────────────
      {
        id: "m1013-l4",
        title: "Sermaye Piyasası Araçlarının Vergilendirilmesi",
        duration: "10 dk",
        summary: {
          title: "Sermaye Piyasası Araçlarının Vergilendirilmesi",
          intro:
            "Sermaye piyasası araçlarından elde edilen gelirler 'menkul sermaye iradı' veya 'değer artışı kazancı' olarak iki ana kategoride sınıflandırılır. Menkul sermaye iratları; kar payları, faiz gelirleri ve repo gelirlerini kapsar. Değer artışı kazançları ise menkul kıymetlerin alım-satımından elde edilen kazançlardır. Her enstrüman ve mükellefiyet türüne göre farklı vergilendirme rejimi uygulanır.",
          sections: [
            {
              heading: "Gelir Türleri ve Sınıflandırma",
              icon: "shield",
              items: [
                {
                  strong: "Menkul Sermaye İradı:",
                  text: "Sermayenin sahibine sağladığı gelirdir; faiz gelirleri (mevduat, tahvil), kâr payları (temettü), repo gelirleri ve kira sertifikası getirileri menkul sermaye iradıdır.",
                },
                {
                  strong: "Değer Artışı Kazancı:",
                  text: "Menkul kıymetlerin elden çıkarılmasından (satışından) doğan kazançtır; alım-satım kazancı olarak da bilinir, GVK mükerrer 80. madde kapsamındadır.",
                },
                {
                  strong: "ÜFE Endekslemesi:",
                  text: "Değer artışı kazançlarında, alış maliyeti ÜFE artış oranına göre güncellenebilir (alış ile satış arasındaki ÜFE artışı %10'u aşarsa); enflasyondan kaynaklanan görünür kazançların vergilenmemesini sağlar.",
                },
                {
                  strong: "İndirim Oranı Uygulaması:",
                  text: "Menkul sermaye iratlarının bir kısmı, GVK 76. madde uyarınca indirim oranı (yıllık olarak Hazine tarafından belirlenir) ile vergi matrahından düşülür; enflasyonun reel getiri üzerindeki etkisini telafi eder.",
                },
                {
                  strong: "Zarar Mahsubu:",
                  text: "Aynı yıl içinde aynı tür gelirden mahsup yapılır; ileriye 5 yıl boyunca devredilebilir; ancak farklı kategorideki gelirler arası mahsup imkânı sınırlıdır.",
                },
              ],
            },
            {
              heading: "Enstrümanlara Göre Vergileme",
              icon: "trend",
              items: [
                {
                  strong: "Pay Senetleri:",
                  text: "Tam mükellef gerçek kişide; kâr payı dağıtımında %15 (kanun değişikliklerine bağlı oran) tevkifat, BIST'te işlem gören pay alım-satımı genelde %0 tevkifat.",
                },
                {
                  strong: "Devlet ve Özel Sektör Tahvilleri:",
                  text: "Faiz gelirlerinde ve alım-satım kazançlarında genelde %10 tevkifat (Geçici 67 kapsamında); 1 yıldan uzun süre tutulan TL cinsi DİBS faizinde indirim oranı uygulanır.",
                },
                {
                  strong: "Yatırım Fonu Katılma Payları:",
                  text: "Hisse senedi yoğun fonlarda alım-satım kazancı %0; diğer fonlarda alım-satım kazancı tevkifata tabi; fon kâr payları belirli oranlarda vergilendirilir.",
                },
                {
                  strong: "Mevduat Faizleri:",
                  text: "Vade ve para birimine göre değişen oranlarda tevkifat: TL kısa vadeli %15, uzun vadeli %5; döviz mevduatında %20'ye varan oranlar uygulanır (yıldan yıla değişebilir).",
                },
                {
                  strong: "Türev Araçlar:",
                  text: "Tam mükellef gerçek kişiler için %10, dar mükellef kurumlar için stopaj farklı oranlarda; vadeli işlem ve opsiyon sözleşmeleri Geçici 67 kapsamında işlem görür.",
                },
              ],
            },
          ],
          tip: "İki ana gelir kategorisi: menkul sermaye iradı (faiz, kar payı) + değer artışı kazancı (alım-satım). ÜFE endekslemesi enflasyon etkisini siler. BIST payları %0 tevkifat — yerli yatırımcı teşviki. Tahvil faizleri %10. Zarar mahsubu 5 yıl ileriye devredilebilir. Vergi oranları sürekli değişir — sınavda güncel oranlar değil, mantığı sorulur.",
          kavramlar: [
            { terim: "Menkul Sermaye İradı", tanim: "Hisse senedi temettüsü, tahvil faizi, mevduat faizi gibi sermayenin faiz veya kâr payı şeklinde getiri sağladığı gelir türü." },
            { terim: "Değer Artışı Kazancı", tanim: "Sermaye piyasası araçlarının alım-satım farkından elde edilen kazanç; GVK Geçici 67 kapsamında tevkifata tabidir." },
            { terim: "ÜFE Endekslemesi", tanim: "Menkul kıymet alış maliyetinin enflasyona göre ÜFE ile güncellenmesi; reel kazanç üzerinden vergi hesaplanmasını sağlar." },
            { terim: "BİST Pay Tevkifat Oranı", tanim: "BİST'te işlem gören hisse senetlerinden tam mükellef gerçek kişiler için uygulanan tevkifat oranı; yerli yatırımcıyı teşvik için %0." },
            { terim: "Tahvil Faiz Tevkifatı", tanim: "Devlet tahvili ve özel sektör tahvil faiz gelirlerinden uygulanan tevkifat oranı: %10." },
            { terim: "Zarar Mahsup Süresi", tanim: "Sermaye piyasası işlemlerinden doğan zararın sonraki yıllara taşınarak kârdan düşülebilmesi; azami süre 5 yıldır." },
            { terim: "Tevkifat Oranı Mantığı", tanim: "Vergi oranları mevzuat değişikliğiyle sık güncellenir; sınavda oranların mantığı (hangi araç daha yüksek/düşük vergi) sorulur." },
          ],
          dikkatlar: [
            "BİST paylarında yerli yatırımcı teşviki için tevkifat oranı %0'dır; 'BİST hisselerinde %10 stopaj' ifadesi yanıltıcıdır.",
            "Tahvil faiz geliri için tevkifat oranı %10'dur; bu oran hisse senetlerindeki sıfır oranla karşılaştırıldığında yatırım aracı seçimini etkiler.",
            "ÜFE endekslemesi maliyeti enflasyona göre artırır; böylece yalnızca reel kazanç üzerinden vergi ödenir.",
            "Zarar mahsubu en fazla 5 yıl ileriye taşınabilir; aynı tür gelirle mahsup zorunluluğu bulunabilir — farklı gelir türleriyle mahsup kısıtlıdır.",
            "Vergi oranları sıkça değişir; sınavda oran ezberi değil hangi aracın daha avantajlı vergi yapısına sahip olduğu mantığı ölçülür.",
          ],
        },
        questions: [
          {
            text: "Sermaye piyasası araçlarından elde edilen gelirlerin iki ana kategorisi aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Brüt gelir ve net gelir" },
              { id: "B", text: "Menkul sermaye iradı (faiz, kâr payı, repo) ve değer artışı kazancı (alım-satım kazancı)" },
              { id: "C", text: "Yurtiçi gelir ve yurtdışı gelir" },
              { id: "D", text: "Aktif gelir ve pasif gelir" },
            ],
            correct: "B",
            explanation:
              "GVK'ya göre sermaye piyasası araçlarından elde edilen gelirler iki ana kategoride sınıflandırılır: (1) Menkul Sermaye İradı (GVK md. 75) — sermayenin sahibine sağladığı düzenli gelirler; faiz gelirleri (mevduat, tahvil), kâr payları (temettü), repo gelirleri ve kira sertifikası getirileri bu kategoride yer alır. (2) Değer Artışı Kazancı (GVK mükerrer md. 80) — menkul kıymetlerin elden çıkarılmasından (satışından) doğan kazançlar. Bu iki kategori farklı vergilendirme rejimlerine tabidir.",
          },
          {
            text: "Değer artışı kazançlarında 'ÜFE endekslemesi' uygulamasının amacı nedir?",
            options: [
              { id: "A", text: "Yatırımcılara ek vergi yükü getirmek" },
              { id: "B", text: "Alış maliyetinin ÜFE artış oranına göre güncellenmesi sağlanarak (alış ile satış arasındaki ÜFE artışı %10'u aşarsa); enflasyondan kaynaklanan görünür kazançların vergilenmemesini sağlamak." },
              { id: "C", text: "Yatırımcıların yıllık beyan zorunluluğunu artırmak" },
              { id: "D", text: "Yabancı yatırımcılara ayrıcalık tanımak" },
            ],
            correct: "B",
            explanation:
              "ÜFE endekslemesi uygulaması, değer artışı kazançlarının vergilendirilmesinde enflasyonun yarattığı 'görünür' kazançları telafi etmek için tasarlanmıştır. Yatırımcı bir menkul kıymeti aldığında ödediği bedel, satış tarihine kadar geçen sürede ÜFE artışı oranına göre güncellenir (alış ile satış arasındaki ÜFE artışı %10'u aştığında uygulanır). Böylece sadece reel kazanç vergilendirilir; enflasyondan kaynaklanan nominal artış vergiden korunur. Yüksek enflasyonlu dönemlerde bu uygulama yatırımcılar için kritik bir avantajdır.",
          },
          {
            text: "GVK 76. maddesi uyarınca menkul sermaye iratlarına uygulanan 'indirim oranı' uygulaması ne anlama gelir?",
            options: [
              { id: "A", text: "Yatırımcılara ekstra vergi indirimi sağlar." },
              { id: "B", text: "Menkul sermaye iratlarının bir kısmı, yıllık olarak Hazine tarafından belirlenen indirim oranı ile vergi matrahından düşülür; enflasyonun reel getiri üzerindeki etkisini telafi eder." },
              { id: "C", text: "Yalnızca yabancı para mevduatlarında uygulanır." },
              { id: "D", text: "Yalnızca türev araç kazançlarında uygulanır." },
            ],
            correct: "B",
            explanation:
              "GVK 76. madde uyarınca uygulanan indirim oranı; menkul sermaye iratlarının enflasyondan kaynaklanan kısmının vergilendirilmemesini sağlar. Hazine, her yıl bu oranı belirler ve menkul sermaye iratlarının ilan edilen oranı vergi matrahından düşülür. Örneğin yıllık 100.000 TL faiz geliri elde eden ve indirim oranı %50 ise, vergi matrahı 50.000 TL olur. Bu uygulama 1 yıldan uzun süre elde tutulan TL cinsi DİBS gibi belirli enstrümanlar için geçerlidir. Amacı reel getiriyi vergilendirmek, enflasyondan kaynaklanan görünür kazancı muaf tutmaktır.",
          },
          {
            text: "Sermaye piyasasında zarar mahsubu için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Zararlar her zaman ileriye 10 yıl boyunca devredilebilir." },
              { id: "B", text: "Aynı yıl içinde aynı tür gelirden mahsup yapılır; ileriye 5 yıl boyunca devredilebilir; ancak farklı kategorideki gelirler arası mahsup imkânı sınırlıdır." },
              { id: "C", text: "Zarar mahsubu hiçbir koşulda yapılamaz." },
              { id: "D", text: "Zararlar yalnızca yabancı yatırımcılar için mahsup edilir." },
            ],
            correct: "B",
            explanation:
              "Sermaye piyasasında zarar mahsubu kuralları; (1) Aynı yıl içinde aynı tür (aynı kategorideki) gelirden mahsup yapılır — pay alım-satım zararı pay alım-satım kâr ile dengelenir, (2) Eğer mahsup edilecek tutar kalırsa veya zarar fazla ise ileriye en fazla 5 yıl boyunca devredilebilir, (3) Farklı kategorideki gelirler (örneğin pay zararı ile faiz geliri) arası mahsup imkânı sınırlıdır veya hiç yoktur. Bu kurallar zararın gerçek bir ekonomik kayıp olarak değerlendirilmesini, ancak vergi avantajına dönüştürülmesini engelleyici şekilde tasarlanmıştır.",
          },
          {
            text: "Hisse senedi yoğun yatırım fonlarının (HSYF) alım-satımından elde edilen kazancın vergilendirilmesi ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm yatırım fonları aynı oranda vergilendirilir." },
              { id: "B", text: "Hisse senedi yoğun fonlarda alım-satım kazancı %0 tevkifata tabidir; diğer fonlarda alım-satım kazancı tevkifat oranlarıyla (örn. %10) vergilendirilir." },
              { id: "C", text: "Hisse senedi yoğun fonlar yüksek oranda vergilendirilir." },
              { id: "D", text: "Yatırım fonları kurumlar vergisinden istisnadır." },
            ],
            correct: "B",
            explanation:
              "Hisse Senedi Yoğun Fonlar (HSYF), portföyünün en az %80'i borsada işlem gören ihraçcı paylarından oluşan yatırım fonlarıdır (MKYO payları hariç). Bu fonların özelliği özel vergi avantajına sahip olmalarıdır: alım-satım kazançları %0 oranında tevkifata tabidir. Bu avantaj; yatırımcıların pay piyasasına dolaylı katılımını teşvik etmek ve sermaye piyasalarının derinleşmesine destek olmak amacıyla tasarlanmıştır. Diğer yatırım fonu türlerinde (borçlanma araçları fonu, para piyasası fonu vb.) alım-satım kazançları belirli oranlarda tevkifata tabidir.",
          },
        ],
      },
      // ──────────── Ders 5: Türev Araçlarda ve Özel Yapılarda Vergilendirme ────────────
      {
        id: "m1013-l5",
        title: "Türev Araçlar, Yatırım Fonları ve Özel Yapıların Vergilendirilmesi",
        duration: "9 dk",
        summary: {
          title: "Türev Araçlar ve Özel Yapıların Vergilendirilmesi",
          intro:
            "Türev araçların vergilendirilmesi, dayanak varlığa ve mükellefiyet türüne göre farklı kurallara tabidir. Yatırım fon ve ortaklıkları için ise özel rejim uygulanır: yatırım fonlarının portföy kazançları kurumlar vergisinden istisnadır, dağıtım anında yatırımcı düzeyinde vergileme yapılır. Hazine'nin yurt dışında ihraç ettiği menkul kıymetler (Eurobond) ve örtülü sermaye/transfer fiyatlandırması gibi özel düzenlemeler de bu derste incelenir.",
          sections: [
            {
              heading: "Türev Araçların Vergilendirilmesi",
              icon: "shield",
              items: [
                {
                  strong: "Vadeli İşlem ve Opsiyon Sözleşmeleri:",
                  text: "Borsada veya tezgâh üstü gerçekleştirilen türev işlemlerden elde edilen kazançlar GVK Geçici 67 kapsamında tevkifata tabi tutulur; pay endeks vadeli işlemleri için belirli avantajlar uygulanır.",
                },
                {
                  strong: "Tam Mükellef Gerçek Kişiler:",
                  text: "Türev araç kazançlarında genelde %10 tevkifat uygulanır; pay endeks vadeli işlem ve opsiyon sözleşmeleri için %0 oranında tevkifat (HSYF benzeri teşvik).",
                },
                {
                  strong: "Tam Mükellef Kurumlar:",
                  text: "Türev araç kazançları kurum kazancına dahil edilir ve kurumlar vergisi (%25) ile vergilendirilir; tevkifat yapılırsa mahsup edilir.",
                },
                {
                  strong: "Dar Mükellef Kurumlar:",
                  text: "Dar mükellef kurumlarca yapılan türev işlemlerde özel vergi kesintisi uygulanabilir; çifte vergilendirme anlaşmaları varsa avantajlı oranlar geçerlidir.",
                },
                {
                  strong: "Hedge İşlemleri:",
                  text: "Risk yönetimi amacıyla yapılan türev işlemler ile spekülatif işlemler aynı oranda vergilendirilir; ancak hedge'in bağlantılı olduğu ana işlem ile birlikte değerlendirilmesi mümkündür.",
                },
              ],
            },
            {
              heading: "Yatırım Fon ve Ortaklıkları, Özel Yapılar",
              icon: "trend",
              items: [
                {
                  strong: "Yatırım Fonu Vergilendirmesi:",
                  text: "Türkiye'de yerleşik MKYF ve MKYO portföy kazançları kurumlar vergisinden istisnadır; vergileme yatırımcı düzeyinde gerçekleşir (kâr payı ödendiğinde veya katılma payı satıldığında).",
                },
                {
                  strong: "GYO ve Diğer Yatırım Ortaklıkları:",
                  text: "Gayrimenkul Yatırım Ortaklıklarının (GYO) kurum kazançları kurumlar vergisinden istisnadır (kurumlar vergisi %0); kâr payı dağıtımında belirli oranda tevkifat uygulanır.",
                },
                {
                  strong: "Eurobond Vergilendirmesi:",
                  text: "Hazine tarafından yurt dışında ihraç edilen menkul kıymetlerden (Eurobond) elde edilen faiz gelirleri tam mükellef gerçek kişilerde belirli koşullarla vergiden istisnadır.",
                },
                {
                  strong: "Örtülü Sermaye:",
                  text: "Bir kurumun ortaklarından veya ilişkili taraflarından öz sermayesinin 3 katını aşan oranda borçlanması halinde, aşan kısma ait faiz örtülü sermaye sayılır ve kurumlar vergisi matrahından indirilemez.",
                },
                {
                  strong: "Transfer Fiyatlandırması:",
                  text: "İlişkili kişiler arası işlemlerde piyasa şartlarına aykırı fiyat uygulanması halinde 'örtülü kazanç dağıtımı' sayılır ve transfer fiyatlandırması düzenlemeleri uygulanır.",
                },
              ],
            },
          ],
          tip: "Türev araç vergisi: Genel %10, pay endeks futures/opsiyon %0 (teşvik). Yatırım fonları: portföy kazancı KVK'dan istisna, dağıtımda yatırımcı vergiler. GYO: kurumlar vergisi %0! Örtülü sermaye sınırı: özsermaye × 3 (aşan faiz indirilemez). Transfer fiyatlandırması = ilişkili kişiler arası 'piyasa fiyatı' kuralı.",
          kavramlar: [
            { terim: "Türev Araç Vergilendirmesi", tanim: "Genel türev araçlardan elde edilen kazançlara %10 tevkifat; BİST pay ve endekse dayalı futures/opsiyon işlemlerinden %0 tevkifat (teşvik)." },
            { terim: "Yatırım Fonu Vergi İstisnası", tanim: "Yatırım fonu portföyündeki sermaye kazancı KVK kapsamında istisnadır; fon dağıtım yaptığında yatırımcı kendi statüsüne göre vergilendirilir." },
            { terim: "GYO Kurumlar Vergisi İstisnası", tanim: "Gayrimenkul Yatırım Ortaklıklarının kurumlar vergisinden tam olarak istisna tutulması; bu teşvik GYO'ları cazip yatırım aracı kılar." },
            { terim: "Örtülü Sermaye", tanim: "İlişkili kişilerden alınan borcun özsermayenin 3 katını aşması; aşan kısma ait faizler gider olarak kabul edilmez." },
            { terim: "Transfer Fiyatlandırması", tanim: "İlişkili kişiler arasındaki işlemlerde emsal bedelin kullanılması zorunluluğu; piyasa fiyatından sapma vergi kaçakçılığı şüphesi doğurur." },
            { terim: "Örtülü Kazanç Dağıtımı", tanim: "İlişkili kişiye emsal bedelden farklı fiyatlarla yapılan işlemler yoluyla vergi avantajlı kazanç transferi; KVK'da yasaklanmıştır." },
            { terim: "Çifte Vergilendirme Önleme Anlaşması (ÇVÖA)", tanim: "Türkiye ile diğer ülkeler arasında aynı gelirin iki ülkede vergilendirilmesini önleyen ikili anlaşma; iç hukuktan önce uygulanır." },
          ],
          dikkatlar: [
            "GYO kurumlar vergisinden %100 istisnadır; bu özellik GYO'yu vergi avantajlı gayrimenkul yatırım aracı yapan temel düzenlemedir.",
            "Pay ve endeks futures/opsiyon işlemleri %0 tevkifat; diğer türev araçlar %10 tevkifat — 'tüm türevlerde %10' ifadesi yanıltıcıdır.",
            "Örtülü sermaye sınırı: ilişkili kişiden alınan borç özsermayenin 3 katını aşarsa, aşan kısma ait faiz gider yazılamaz.",
            "Transfer fiyatlandırması ilişkili kişiler arasındaki işlemlerde emsale uygun fiyat zorunluluğudur; sapma otomatik ceza değil, düzeltme ve vergi tarhiyatına yol açar.",
            "Yatırım fonu portföy kazancı kurumlar vergisinden istisna; yatırımcı ise katılma payını sattığında kendi tevkifat rejimine tabi olur.",
          ],
        },
        questions: [
          {
            text: "Tam mükellef gerçek kişilerin türev araç kazançlarında uygulanan genel tevkifat oranı ile pay endeks vadeli işlem ve opsiyon sözleşmelerinde uygulanan tevkifat oranı sırasıyla aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "%5 - %10" },
              { id: "B", text: "%10 (genel) - %0 (pay endeks vadeli işlem ve opsiyon sözleşmelerinde)" },
              { id: "C", text: "%15 - %20" },
              { id: "D", text: "%30 - %30" },
            ],
            correct: "B",
            explanation:
              "Tam mükellef gerçek kişilerin türev araç kazançlarında uygulanan genel tevkifat oranı %10'dur. Ancak pay endeks vadeli işlem ve opsiyon sözleşmelerinde %0 (sıfır) tevkifat uygulanır. Bu özel teşvik; sermaye piyasalarının derinleşmesini, yatırımcı tabanının genişlemesini ve hisse senedi piyasası ile bağlantılı türev araçlara ilgiyi artırmaya yöneliktir. Hisse Senedi Yoğun Yatırım Fonlarına (HSYF) sağlanan %0 tevkifat avantajıyla paralel bir uygulamadır. Tevkifat oranları zaman zaman değişebilir; sınavda mantığı önemlidir.",
          },
          {
            text: "Türkiye'de yerleşik Menkul Kıymet Yatırım Fonları (MKYF) ve Menkul Kıymet Yatırım Ortaklıkları (MKYO) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Portföy kazançları %25 oranında kurumlar vergisine tabidir." },
              { id: "B", text: "Portföy kazançları kurumlar vergisinden istisnadır; vergileme yatırımcı düzeyinde gerçekleşir (kâr payı ödendiğinde veya katılma payı satıldığında)." },
              { id: "C", text: "Yatırım fonları yıllık %50 vergiye tabidir." },
              { id: "D", text: "Yatırım fonları her ay vergi öder." },
            ],
            correct: "B",
            explanation:
              "Türkiye'de yerleşik MKYF ve MKYO'ların portföy kazançları kurumlar vergisinden istisnadır. Bu sistemin amacı çifte vergilendirmeyi önlemektir: yatırım fonu/ortaklığı düzeyinde vergi alınsa, daha sonra yatırımcıya dağıtılan kâr payında tekrar vergi alınması gerekirdi; bu da fon yapısı yerine doğrudan yatırımı tercih etmeye sebep olurdu. Vergileme yatırımcı düzeyinde gerçekleşir: katılma payı satışından elde edilen kazanç veya fon kâr payı dağıtımında belirli oranlarda tevkifat uygulanır. Bu yapı 'pass-through' (geçirgen) vergileme olarak adlandırılır.",
          },
          {
            text: "Gayrimenkul Yatırım Ortaklıkları (GYO) için kurumlar vergisi açısından aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "GYO'lar standart %25 oranında kurumlar vergisine tabidir." },
              { id: "B", text: "GYO'ların kurum kazançları kurumlar vergisinden istisnadır (kurumlar vergisi %0); kâr payı dağıtımında belirli oranda tevkifat uygulanır." },
              { id: "C", text: "GYO'lar her ay vergi öder." },
              { id: "D", text: "GYO'lar yalnızca yabancı yatırımcılar için kullanılır." },
            ],
            correct: "B",
            explanation:
              "Gayrimenkul Yatırım Ortaklıkları (GYO) için Türkiye'de özel ve avantajlı bir vergi rejimi uygulanır: GYO'ların kurum kazançları kurumlar vergisinden istisnadır (efektif kurumlar vergisi %0). Bu özel rejim, GYO'ların gayrimenkul yatırımlarını teşvik etme amacına yöneliktir. Ancak istisnadan yararlanmak için belirli koşullara uyulmalıdır (örneğin kazancın belirli bir oranının kâr payı olarak dağıtılması). Yatırımcılara dağıtılan kâr paylarında tevkifat uygulanır. Bu yapı GYO'lara doğrudan gayrimenkul yatırımına göre vergisel avantaj sağlar.",
          },
          {
            text: "KVK kapsamında 'örtülü sermaye' kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Bir kurumun ortaklarına gizli olarak verdiği krediler" },
              { id: "B", text: "Bir kurumun ortaklarından veya ilişkili taraflarından öz sermayesinin 3 katını aşan oranda borçlanması halinde aşan kısma ait faiz örtülü sermaye sayılır ve kurumlar vergisi matrahından indirilemez." },
              { id: "C", text: "Yalnızca bankaların kullandığı bir teknik terim" },
              { id: "D", text: "Yabancı para borçlanmaların özel durumu" },
            ],
            correct: "B",
            explanation:
              "KVK md. 12 uyarınca örtülü sermaye düzenlemesi; kurumların ortaklarından veya ortaklarla ilişkili kişilerden borçlandığı tutarın hesap dönemi içinde herhangi bir tarihte kurumun öz sermayesinin 3 katını aşması halinde, aşan kısma karşılık gelen borçlanmaya örtülü sermaye denir. Bu örtülü sermayeye ödenen faizler vergi matrahından indirilemez (KKEG sayılır). Düzenlemenin amacı, vergi avantajı sağlamak için sermaye yerine borç kullanma davranışını engellemektir. Örneğin özsermayesi 1 milyon TL olan bir şirket ortağından 4 milyon TL borç almışsa, 1 milyon TL'lik kısma (3 katı aşan) ait faiz indirilemez.",
          },
          {
            text: "Transfer fiyatlandırması düzenlemeleri ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İlişkili kişiler arası işlemlerde her zaman %0 vergi uygulanır." },
              { id: "B", text: "İlişkili kişiler arası işlemlerde piyasa şartlarına aykırı fiyat uygulanması halinde 'örtülü kazanç dağıtımı' sayılır ve transfer fiyatlandırması düzenlemeleri uygulanır." },
              { id: "C", text: "Transfer fiyatlandırması yalnızca yabancı şirketler için geçerlidir." },
              { id: "D", text: "Transfer fiyatlandırması bir muhasebe tekniğidir, vergisel boyutu yoktur." },
            ],
            correct: "B",
            explanation:
              "KVK md. 13 uyarınca transfer fiyatlandırması düzenlemeleri; ilişkili kişiler arasındaki işlemlerde piyasa fiyatı (emsal) ilkesine aykırı fiyat uygulanması halini düzenler. İlişkili kişiler şunlardır: kurum ortakları, yöneticileri, ana ortakların aileleri, kurumun iştirakleri ve grup şirketleri. Bu kişiler arasında piyasa fiyatından farklı koşullarda işlem yapılırsa (örneğin grup şirketine düşük fiyatla satış, yüksek fiyatla alış) bu durum 'örtülü kazanç dağıtımı' sayılır ve fark kurum kazancına eklenerek vergilendirilir. OECD'nin BEPS (Base Erosion and Profit Shifting) önerilerine paralel uluslararası bir vergi denetim uygulamasıdır.",
          },
        ],
      },
    ],
  },
];