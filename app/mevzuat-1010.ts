/* ─────────────────────────────────────────────────────────────────────────────
 * Ticaret Hukuku (1010)
 *
 * Kaynak: SPL 1010 Çalışma Notu, 31 Aralık 2025 (187 sayfa)
 * Sınavlar: SPL Düzey 2, Düzey 3, Kurumsal Yönetim Derecelendirme,
 *           Kredi Derecelendirme
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: Önceki PDF'lerle çakışma yoktur. 1010 saf ticaret hukukuna (TTK Ticaret
 * Şirketleri genel hükümleri ve Anonim Şirketler) odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1010 } from "./mevzuat-1010";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1010: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1010 TİCARET HUKUKU
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1010",
    title: "Modül · Ticaret Hukuku (1010)",
    lessons: [
      // ──────────── Ders 1: Ticaret Şirketleri Genel Hükümleri ────────────
      {
        id: "m1010-l1",
        title: "Ticaret Şirketleri ve Yapısal Değişiklikler (TTK m. 124-210)",
        duration: "10 dk",
        summary: {
          title: "Ticaret Şirketleri Genel Hükümleri",
          intro:
            "6102 sayılı Türk Ticaret Kanunu'nun 124-210. maddeleri ticaret şirketlerine ilişkin genel hükümleri düzenler. TTK m. 124/1 uyarınca ticaret şirketleri kollektif, komandit, anonim, limited ve kooperatif şirketlerden ibarettir. Ortak özellikleri (tüzel kişilik, sınırlı sayı ilkesi, ultra vires kaldırılması) ve yapısal değişiklikleri (birleşme, bölünme, tür değiştirme) bu bölümün temel konularıdır.",
          sections: [
            {
              heading: "Ticaret Şirketlerinin Ortak Özellikleri",
              icon: "shield",
              items: [
                {
                  strong: "Tüzel Kişilik:",
                  text: "Tüm ticaret şirketleri ticaret siciline tescil ile tüzel kişilik kazanır; bu şirketlere kendi ortaklarından ayrı bir hak ve borç sahipliği niteliği kazandırır.",
                },
                {
                  strong: "Sınırlı Sayı (Numerus Clausus) İlkesi:",
                  text: "Ticaret şirketleri kanunda sayılan beş türle sınırlıdır (kollektif, komandit, anonim, limited, kooperatif); bunlar dışında bir tür yaratılamaz.",
                },
                {
                  strong: "Ultra Vires İlkesinin Kaldırılması:",
                  text: "Yeni TTK ile şirketlerin hak ehliyeti işletme konusu ile sınırlı değildir; şirketler işletme konusu dışındaki işlemleri de yapabilir.",
                },
                {
                  strong: "Sermaye Koyma Borcu:",
                  text: "Her ortağın esas sözleşmede taahhüt ettiği sermayeyi (nakit, ayni veya emek) yerine getirme borcu vardır; ifa edilmediğinde temerrüt faizi ve esas sözleşmedeki yaptırımlar uygulanır.",
                },
                {
                  strong: "Şahıs ve Sermaye Şirketleri:",
                  text: "Kollektif ve komandit şirketler şahıs şirketi; anonim, limited ve sermayesi paylara bölünmüş komandit şirketler ise sermaye şirketi niteliğindedir.",
                },
              ],
            },
            {
              heading: "Yapısal Değişiklikler ve Şirketler Topluluğu",
              icon: "trend",
              items: [
                {
                  strong: "Birleşme (Merger):",
                  text: "İki veya daha fazla şirketin tek bir şirkete dönüşmesidir; iki türü vardır — devralma (mevcut bir şirket diğerini bünyesine alır) ve yeni kuruluş (iki şirket de sona erer, yeni şirket kurulur).",
                },
                {
                  strong: "Bölünme (Demerger):",
                  text: "Bir şirketin malvarlığının bir kısmının veya tamamının başka şirketlere geçmesidir; tam bölünme (devreden şirket sona erer) ve kısmi bölünme (devreden şirket kalır) olmak üzere ikiye ayrılır.",
                },
                {
                  strong: "Tür Değiştirme:",
                  text: "Şirketin tüzel kişiliği korunarak başka bir tür ticaret şirketine dönüşmesidir; örneğin limited şirketin anonim şirkete dönüştürülmesi.",
                },
                {
                  strong: "Şirketler Topluluğu:",
                  text: "Bir hâkim şirket ile en az bir bağlı şirketten oluşan yapıdır (TTK m. 195-209); hakimiyet sözleşmeyle veya oy çoğunluğuyla kurulabilir.",
                },
                {
                  strong: "Hakim Şirketin Sorumluluğu:",
                  text: "Hâkim şirket, bağlı şirketin kayıplarına yol açan kararlarından dolayı sorumludur; bağlı şirket pay sahipleri ve alacaklılarına karşı tazminat yükümlülüğü doğabilir.",
                },
              ],
            },
          ],
          tip: "Ticaret şirketleri kanunda 5 türle sınırlıdır (numerus clausus). Şahıs/sermaye ayrımı: kollektif+komandit = şahıs; AŞ+limited+SPB komandit = sermaye. Birleşme 2 türü var (devralma vs yeni kuruluş), bölünme 2 türü var (tam vs kısmi). Şirketler topluluğunda hâkim şirket bağlı şirket zararlarından sorumlu.",
        },
        questions: [
          {
            text: "TTK m. 124/1 uyarınca ticaret şirketleri kaç türle sınırlandırılmıştır (numerus clausus ilkesi)?",
            options: [
              { id: "A", text: "3 tür" },
              { id: "B", text: "4 tür" },
              { id: "C", text: "5 tür (Kollektif, Komandit, Anonim, Limited, Kooperatif)" },
              { id: "D", text: "Sınırsız tür yaratılabilir" },
            ],
            correct: "C",
            explanation:
              "TTK m. 124/1 uyarınca ticaret şirketleri yalnızca beş türden ibarettir: Kollektif, Komandit, Anonim, Limited ve Kooperatif şirketler. Bu 'sınırlı sayı' (numerus clausus) ilkesi gereği tarafların yeni bir şirket türü yaratması mümkün değildir; ancak mevcut türler içinde esas sözleşme ile özelleştirme yapılabilir.",
          },
          {
            text: "Ticaret şirketlerinin şahıs şirketi - sermaye şirketi sınıflandırması ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Anonim ve limited şirketler şahıs şirketleridir." },
              { id: "B", text: "Kollektif ve komandit şirketler şahıs şirketi; anonim, limited ve sermayesi paylara bölünmüş komandit şirketler sermaye şirketi niteliğindedir." },
              { id: "C", text: "Tüm ticaret şirketleri sermaye şirketleridir." },
              { id: "D", text: "Kooperatifler sermaye şirketidir." },
            ],
            correct: "B",
            explanation:
              "TTK m. 124/2 hükmünde yapılan ayrıma göre kollektif ile komandit şirketler şahıs şirketi; anonim, limited ve sermayesi paylara bölünmüş komandit şirketler ise sermaye şirketi niteliğindedir. Kooperatifler bu ayrımın dışında tutulmuştur. Şahıs şirketlerinde ortak kişiliği ön planda iken, sermaye şirketlerinde ortakların kişiliği değil sermaye katkısı önemlidir.",
          },
          {
            text: "Ultra vires ilkesinin kaldırılması ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Şirketler artık hiçbir işlem yapamaz." },
              { id: "B", text: "Yeni TTK ile şirketlerin hak ehliyeti işletme konusu ile sınırlı değildir; şirketler işletme konusu dışındaki işlemleri de yapabilir." },
              { id: "C", text: "Ultra vires hâlâ uygulanmaktadır." },
              { id: "D", text: "Sadece anonim şirketler için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "Eski TTK döneminde geçerli olan ultra vires (hak ehliyetinin işletme konusu ile sınırlı olması) ilkesi, 6102 sayılı yeni TTK ile kaldırılmıştır. Bu sayede şirketler esas sözleşmedeki işletme konusu dışında işlemler de yapabilir; bu işlemler artık geçersiz sayılmaz. Yöneticilerin yetkilerini aşması durumu ise iç ilişkide sorumluluk doğurabilir, ancak üçüncü kişiler bakımından işlem geçerlidir.",
          },
          {
            text: "Şirket birleşmeleri ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Birleşmenin tek bir türü vardır." },
              { id: "B", text: "İki türü vardır: devralma yoluyla birleşme (mevcut bir şirket diğerini bünyesine alır) ve yeni kuruluş yoluyla birleşme (iki şirket de sona erer, yeni şirket kurulur)." },
              { id: "C", text: "Birleşme yalnızca aynı türde şirketler arasında yapılabilir." },
              { id: "D", text: "Birleşme sonrası tüm şirketler tüzel kişiliklerini korur." },
            ],
            correct: "B",
            explanation:
              "TTK uyarınca birleşmenin iki temel türü vardır: (1) Devralma yoluyla birleşme — mevcut bir şirket diğer şirketi bünyesine alır, devralan şirket varlığını sürdürür, devralınan şirket sona erer; (2) Yeni kuruluş yoluyla birleşme — birleşen tüm şirketler sona erer ve onların tüm malvarlığı yeni kurulan bir şirkete geçer. Birleşme farklı türde şirketler arasında da yapılabilir.",
          },
          {
            text: "Şirketler topluluğunda hâkim şirketin sorumluluğu ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Hâkim şirketin bağlı şirket kararlarından hiçbir sorumluluğu yoktur." },
              { id: "B", text: "Hâkim şirket, bağlı şirketin kayıplarına yol açan kararlarından dolayı sorumludur; bağlı şirket pay sahipleri ve alacaklılarına karşı tazminat yükümlülüğü doğabilir." },
              { id: "C", text: "Sorumluluk yalnızca bağlı şirketin pay sahiplerine aittir." },
              { id: "D", text: "Hâkim şirket yalnızca cezai sorumluluk taşır." },
            ],
            correct: "B",
            explanation:
              "TTK m. 195-209 hükümleri uyarınca şirketler topluluğunda hâkim şirket, bağlı şirketin yönetimini etkileyen ve bağlı şirkete kayıp doğuran kararlarından sorumludur. Bağlı şirketin kayıpları zamanında giderilmediğinde hâkim şirket bağlı şirket pay sahiplerine ve alacaklılarına karşı tazminat ödemekle yükümlü olabilir. Bu düzenleme, azınlık pay sahiplerini ve alacaklıları korumaya yönelik 'kurum içi şeffaflık' ilkesinin uygulamasıdır.",
          },
        ],
      },
      // ──────────── Ders 2: Anonim Şirketin Tanımı, Unsurları ve İlkeleri ────────────
      {
        id: "m1010-l2",
        title: "Anonim Şirketin Tanımı, Unsurları ve Temel İlkeleri",
        duration: "9 dk",
        summary: {
          title: "Anonim Şirket — Tanım ve İlkeler",
          intro:
            "Anonim şirket; sermayesi belirli ve paylara bölünmüş, borçlarından dolayı yalnızca malvarlığıyla sorumlu bulunan, pay sahiplerinin sorumluluğunun taahhüt ettikleri sermaye paylarıyla sınırlı olduğu sermaye şirketidir (TTK m. 329). En az bir gerçek veya tüzel kişi tarafından kurulabilir. AŞ'lerin tabi olduğu ilkeler arasında çoğunluk, malvarlığı koruma, sınırlı sorumluluk, emredici hükümler ve eşit işlem yer alır.",
          sections: [
            {
              heading: "Anonim Şirketin Unsurları",
              icon: "shield",
              items: [
                {
                  strong: "Tüzel Kişilik:",
                  text: "Anonim şirket ticaret siciline tescil ile tüzel kişilik kazanır; ortaklarından bağımsız bir hak ve borç sahibidir.",
                },
                {
                  strong: "Belirli Sermaye:",
                  text: "Esas sermaye sistemi (en az 250.000 TL) veya kayıtlı sermaye sistemi (en az 500.000 TL) ile kurulabilir; halka açık AŞ'ler için kayıtlı sermaye sistemi kullanılır.",
                },
                {
                  strong: "Paylara Bölünme:",
                  text: "Sermaye nominal değeri en az 1 kuruş olan paylara bölünür; her pay sahipliği ve oy hakkı verir.",
                },
                {
                  strong: "Sınırlı Sorumluluk:",
                  text: "Pay sahipleri yalnızca taahhüt ettikleri sermaye paylarıyla sorumludur; şirketin borçlarından dolayı kişisel malvarlıklarıyla sorumlu tutulmazlar.",
                },
                {
                  strong: "Tek Kişilik AŞ:",
                  text: "Yeni TTK ile bir gerçek veya tüzel kişinin tek başına anonim şirket kurması mümkündür; bu durum ticaret siciline ve esas sözleşmeye yansıtılır.",
                },
              ],
            },
            {
              heading: "Anonim Şirketin Temel İlkeleri",
              icon: "trend",
              items: [
                {
                  strong: "Çoğunluk İlkesi:",
                  text: "Genel kurul kararları kanun veya esas sözleşmede aksi öngörülmedikçe basit çoğunlukla alınır; bazı kararlar (sermaye azaltımı, esas sözleşme değişikliği) için nitelikli çoğunluk aranır.",
                },
                {
                  strong: "Malvarlığının ve Sermayenin Korunması:",
                  text: "Şirketin sermayesi ve net malvarlığı pay sahiplerine doğrudan dağıtılamaz; sermayenin azaltılması, kâr dağıtımı ve geri alım sıkı kurallara tabidir.",
                },
                {
                  strong: "Emredici Hükümler İlkesi (TTK m. 340):",
                  text: "Esas sözleşme TTK'nın anonim şirketlere ilişkin hükümlerinden ancak Kanun'da açıkça izin verilmişse sapabilir; aksi sözleşme hükümleri geçersizdir.",
                },
                {
                  strong: "Eşit İşlem İlkesi (TTK m. 357):",
                  text: "Pay sahipleri, eşit şartlardaki konularda eşit işleme tabi tutulur; aynı paya sahip olanlar aynı haklara sahiptir, ayrımcılık yasaktır.",
                },
                {
                  strong: "Pay Sahiplerinin Şirkete Borçlanma Yasağı (TTK m. 358):",
                  text: "Pay sahipleri, sermaye taahhüdünden doğan borçları hariç olmak üzere şirkete borçlanamaz; istisna olarak yönetim kurulu üyeleri belirli koşullarda borçlanabilir.",
                },
              ],
            },
          ],
          tip: "AŞ esas sermaye = 250.000 TL, kayıtlı sermaye = 500.000 TL minimum. Pay nominal = en az 1 kuruş. Sınırlı sorumluluk pay sahibinin temel güvencesidir. Emredici hükümler ilkesi (TTK m. 340) AŞ hukukunun çekirdeğidir — kanun izin vermedikçe sözleşmeyle değiştirilemez.",
        },
        questions: [
          {
            text: "TTK m. 329 uyarınca anonim şirketin tanımı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Sermayesi belirsiz, ortakların borçlarından kişisel sorumlu olduğu şirkettir." },
              { id: "B", text: "Sermayesi belirli ve paylara bölünmüş, borçlarından dolayı yalnızca malvarlığıyla sorumlu, pay sahiplerinin sorumluluğunun taahhüt ettikleri sermaye paylarıyla sınırlı olduğu sermaye şirketidir." },
              { id: "C", text: "Yalnızca devlet tarafından kurulabilen şirket türüdür." },
              { id: "D", text: "Yalnızca yabancı yatırımcıların kurabileceği şirkettir." },
            ],
            correct: "B",
            explanation:
              "TTK m. 329'a göre anonim şirket; sermayesi belirli ve paylara bölünmüş olan, borçlarından dolayı yalnızca malvarlığıyla sorumlu bulunan, pay sahiplerinin sorumluluğunun taahhüt ettikleri sermaye payları ile sınırlı olduğu sermaye şirketidir. Bu tanımdaki dört unsur — belirli sermaye, paylara bölünme, malvarlığı sorumluluğu ve sınırlı sorumluluk — anonim şirketin yapısal özelliklerini oluşturur.",
          },
          {
            text: "Anonim şirketin esas sermaye sisteminde kuruluş için aranan asgari sermaye tutarı kaç TL'dir?",
            options: [
              { id: "A", text: "50.000 TL" },
              { id: "B", text: "100.000 TL" },
              { id: "C", text: "250.000 TL" },
              { id: "D", text: "500.000 TL" },
            ],
            correct: "C",
            explanation:
              "Anonim şirketler için esas sermaye sisteminde asgari sermaye tutarı 250.000 TL'dir. Halka açık olmayan anonim şirketler bu sistemi kullanır. Kayıtlı sermaye sistemini benimseyen anonim şirketlerde ise asgari başlangıç sermayesi 500.000 TL olarak öngörülmüştür. Halka açık anonim şirketler için kayıtlı sermaye sistemi kullanılır ve sermaye Kurul'un izni ile kademeli artırılabilir.",
          },
          {
            text: "TTK m. 340 uyarınca düzenlenen 'Emredici Hükümler İlkesi' ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Esas sözleşme TTK'nın AŞ hükümlerinden istediği gibi sapabilir." },
              { id: "B", text: "Esas sözleşme TTK'nın anonim şirketlere ilişkin hükümlerinden ancak Kanun'da açıkça izin verilmişse sapabilir; aksi sözleşme hükümleri geçersizdir." },
              { id: "C", text: "Esas sözleşme yalnızca yöneticileri bağlar." },
              { id: "D", text: "Bu ilke yalnızca halka açık şirketler için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "TTK m. 340 'Emredici Hükümler' başlığı altında düzenlenmiştir: 'Esas sözleşme, bu Kanunun anonim şirketlere ilişkin hükümlerinden ancak Kanunda buna açıkça izin verilmişse sapabilir.' Bu ilke, anonim şirket hukukunun çekirdek hükümlerinin tarafların iradesiyle değiştirilememesini sağlar; pay sahiplerini, alacaklıları ve üçüncü kişileri korur. Aksi yönde sözleşme hükümleri geçersiz sayılır.",
          },
          {
            text: "TTK m. 358 uyarınca pay sahiplerinin şirkete borçlanma yasağı ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Pay sahipleri sınırsız olarak şirkete borçlanabilir." },
              { id: "B", text: "Pay sahipleri sermaye taahhüdünden doğan borçları hariç olmak üzere şirkete borçlanamaz; bu yasak şirket malvarlığını korumaya yöneliktir." },
              { id: "C", text: "Yasak yalnızca yönetim kurulu üyeleri için geçerlidir." },
              { id: "D", text: "Pay sahipleri yıllık 1 milyon TL'ye kadar borçlanabilir." },
            ],
            correct: "B",
            explanation:
              "TTK m. 358 hükmü uyarınca pay sahipleri, sermaye taahhüdünden doğan vadesi gelmiş borçları ifa etmedikleri ve şirketin serbest yedek akçeleriyle birlikte kârı geçmiş yıl zararlarını karşılayacak düzeyde olmadıkça şirkete borçlanamaz. Bu yasak, anonim şirketin malvarlığının ve sermayesinin korunması ilkesinin somut bir uygulamasıdır; pay sahibinin şirket varlığını kişisel kullanımına çekmesinin önüne geçer.",
          },
          {
            text: "TTK m. 357 uyarınca düzenlenen 'Eşit İşlem İlkesi' ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm pay sahipleri her durumda aynı haklara sahiptir." },
              { id: "B", text: "Pay sahipleri eşit şartlardaki konularda eşit işleme tabi tutulur; aynı paya sahip olanlar aynı haklara sahiptir, ayrımcılık yasaktır." },
              { id: "C", text: "Yalnızca ana ortaklar eşit işleme tabidir." },
              { id: "D", text: "Eşit işlem ilkesi yalnızca temettü dağıtımında uygulanır." },
            ],
            correct: "B",
            explanation:
              "TTK m. 357 'Eşit İşlem' başlığı altında: 'Pay sahipleri eşit şartlarda eşit işleme tabi tutulur.' Bu ilke aynı durumdaki pay sahiplerinin aynı haklara sahip olmasını ve şirket organlarının ayrımcılık yapmamasını sağlar. Ancak imtiyazlı paylar bu ilkenin istisnasıdır — esas sözleşmeyle bazı paylara oy, kâr payı veya tasfiye payında imtiyaz tanınabilir. Bu durumda aynı sınıf içindeki paylar arasında eşitlik korunur.",
          },
        ],
      },
      // ──────────── Ders 3: Yönetim Kurulu ────────────
      {
        id: "m1010-l3",
        title: "Anonim Şirkette Yönetim Kurulu — Yapı, Görev ve Sorumluluk",
        duration: "10 dk",
        summary: {
          title: "Anonim Şirkette Yönetim Kurulu",
          intro:
            "Yönetim kurulu (YK); anonim şirketin yönetim ve temsil organıdır (TTK m. 365). YK'nın en az bir üyeden oluşması yeterlidir. Üyeler genel kurul tarafından seçilir; gerçek veya tüzel kişi olabilirler. Tüzel kişinin YK üyesi olması durumunda kendisi adına oy kullanacak gerçek kişiyi belirler. YK'nın görev süresi azami 3 yıldır; aksi öngörülmedikçe yeniden seçilebilir.",
          sections: [
            {
              heading: "Yönetim Kurulu Yapısı ve Üyelik",
              icon: "shield",
              items: [
                {
                  strong: "Üye Sayısı:",
                  text: "TTK m. 359 uyarınca YK en az bir üyeden oluşur; eski TTK'daki üç üye zorunluluğu kaldırılmıştır, esas sözleşme daha fazla üye öngörebilir.",
                },
                {
                  strong: "Üyelik Şartları:",
                  text: "YK üyesi gerçek veya tüzel kişi olabilir; tüzel kişi üye, kendisi adına oy kullanacak gerçek kişiyi belirler ve sicile bildirir.",
                },
                {
                  strong: "Görev Süresi:",
                  text: "Görev süresi azami 3 yıldır (TTK m. 362); esas sözleşmede aksi öngörülmedikçe üye yeniden seçilebilir, devamlılık esastır.",
                },
                {
                  strong: "Pay Sahibi Olma Şartı Yok:",
                  text: "Yeni TTK ile YK üyelerinin pay sahibi olma şartı kaldırılmıştır; ancak esas sözleşme bu şartı koruyabilir.",
                },
                {
                  strong: "Yönetim Devri:",
                  text: "TTK m. 367 uyarınca YK, esas sözleşmede izin varsa kararıyla yönetimi kısmen veya tamamen bir veya birkaç YK üyesine ya da üçüncü kişiye devredebilir.",
                },
              ],
            },
            {
              heading: "Görev, Yetki ve Sorumluluk",
              icon: "trend",
              items: [
                {
                  strong: "Devredilemez ve Vazgeçilemez Görevler (TTK m. 375):",
                  text: "Şirketin üst düzey yönetimi, organizasyon, muhasebe-finans denetim sisteminin oluşturulması, yöneticilerin atanması, gözetim, faaliyet raporu ve genel kurulun toplantıya çağrılması.",
                },
                {
                  strong: "Toplantı ve Karar Yeter Sayısı:",
                  text: "Esas sözleşmede aksine hüküm yoksa YK üye tam sayısının çoğunluğu ile toplanır ve toplantıda hazır bulunan üyelerin çoğunluğu ile karar alır (TTK m. 390).",
                },
                {
                  strong: "Müzakereye Katılma Yasağı:",
                  text: "TTK m. 393 uyarınca YK üyesi, kendisinin, eşinin ve usul/füruunun, evlilik dışında doğmuş çocuklarının kişisel ve ekonomik çıkarlarına ilişkin görüşmelere katılamaz.",
                },
                {
                  strong: "Bağlılık Yükümlülüğü:",
                  text: "YK üyeleri şirketin menfaatlerini koruyacak şekilde özen göstermelidir; rekabet yasağına (TTK m. 396) ve şirket fırsatlarını kişisel kullanmama yükümlülüğüne uymalıdır.",
                },
                {
                  strong: "Sorumluluk:",
                  text: "TTK m. 553 uyarınca YK üyeleri kanundan veya esas sözleşmeden doğan yükümlülüklerini ihlal ederek şirkete, pay sahiplerine ve alacaklılara verdikleri zararlardan sorumludur.",
                },
              ],
            },
          ],
          tip: "Yeni TTK önemli üç değişiklik getirdi: (1) YK en az 1 üye yeterli (eskiden 3), (2) tüzel kişi YK üyesi olabilir, (3) pay sahibi olma şartı kaldırıldı. Görev süresi maksimum 3 yıl. Devredilemez görevler (TTK m. 375) sınavın klasik soru kalıbıdır — 'üst düzey yönetim, denetim sistemi, faaliyet raporu' bunların başında gelir.",
        },
        questions: [
          {
            text: "TTK m. 359 uyarınca anonim şirket yönetim kurulu en az kaç üyeden oluşmak zorundadır?",
            options: [
              { id: "A", text: "Bir üye" },
              { id: "B", text: "İki üye" },
              { id: "C", text: "Üç üye" },
              { id: "D", text: "Beş üye" },
            ],
            correct: "A",
            explanation:
              "Yeni TTK m. 359 uyarınca anonim şirket yönetim kurulu en az bir üyeden oluşmak yeterlidir. Eski TTK'daki üç üye zorunluluğu kaldırılmıştır. Bu değişiklik, tek pay sahipli AŞ kuruluşunun mümkün hale getirilmesiyle paraleldir; küçük ölçekli AŞ'ler için yönetim yapısını basitleştirir. Esas sözleşme isterse daha fazla üye öngörebilir.",
          },
          {
            text: "TTK m. 362 uyarınca anonim şirket yönetim kurulu üyelerinin azami görev süresi nedir?",
            options: [
              { id: "A", text: "1 yıl" },
              { id: "B", text: "3 yıl" },
              { id: "C", text: "5 yıl" },
              { id: "D", text: "10 yıl" },
            ],
            correct: "B",
            explanation:
              "TTK m. 362 uyarınca yönetim kurulu üyelerinin görev süresi azami 3 yıl olarak belirlenmiştir. Esas sözleşmede aksine hüküm yoksa üyeler yeniden seçilebilir. Bu süre, yönetim kurulunun düzenli olarak yenilenebilmesi ve pay sahiplerinin yönetim üzerinde periyodik kontrol sağlayabilmesi amacıyla öngörülmüştür.",
          },
          {
            text: "Aşağıdakilerden hangisi TTK m. 375 uyarınca yönetim kurulunun 'devredilemez ve vazgeçilemez' görevleri arasında yer ALMAZ?",
            options: [
              { id: "A", text: "Şirketin üst düzey yönetimi ve organizasyonun belirlenmesi" },
              { id: "B", text: "Muhasebe, finans denetimi ve risk yönetimi sisteminin kurulması" },
              { id: "C", text: "Genel kurulun toplantıya çağrılması ve faaliyet raporunun düzenlenmesi" },
              { id: "D", text: "Şirketin günlük muhasebe kayıtlarının fiilen tutulması" },
            ],
            correct: "D",
            explanation:
              "TTK m. 375 yönetim kurulunun 'devredilemez ve vazgeçilemez' görevlerini sayar: üst düzey yönetim, organizasyon yapısı, muhasebe-finans-risk denetim sistemleri kurulması, müdürlerin atanması ve azli, gözetim, faaliyet raporu, genel kurulun toplantıya çağrılması, sermaye kaybı/borca batıklık halinde gerekli işlemler. Günlük muhasebe kayıtlarının tutulması operasyonel bir iş olup üst düzey yönetim görevi değildir, atanan müdür/personel tarafından yapılır.",
          },
          {
            text: "TTK m. 390 uyarınca yönetim kurulu toplantı ve karar yeter sayısı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "YK her zaman üye tam sayısının 3/4'ü ile karar alır." },
              { id: "B", text: "Esas sözleşmede aksine hüküm yoksa YK üye tam sayısının çoğunluğu ile toplanır ve toplantıda hazır bulunan üyelerin çoğunluğu ile karar alır." },
              { id: "C", text: "YK kararları oybirliği ile alınır." },
              { id: "D", text: "YK kararları yalnızca pay sahipleri tarafından alınır." },
            ],
            correct: "B",
            explanation:
              "TTK m. 390 uyarınca esas sözleşmede aksine ağırlaştırılmış nisap öngörülmedikçe, yönetim kurulu üye tam sayısının çoğunluğu ile toplanır ve kararlar toplantıda hazır bulunan üyelerin çoğunluğu ile alınır. Eşitlik halinde başkanın oyu üstün gelir. Esas sözleşme önemli kararlar için (örn. şirketin önemli mal varlığının devri) ağırlaştırılmış nisap öngörebilir.",
          },
          {
            text: "TTK m. 393 uyarınca yönetim kurulu üyesinin müzakereye katılma yasağı hangi durumlarda geçerlidir?",
            options: [
              { id: "A", text: "Yalnızca üyenin kendi kişisel çıkarlarını ilgilendiren konularda" },
              { id: "B", text: "Üyenin kendisinin, eşinin ve usul/füruunun, evlilik dışında doğmuş çocuklarının kişisel ve ekonomik çıkarlarına ilişkin görüşmelere katılamaz." },
              { id: "C", text: "Hiçbir durumda yasak yoktur." },
              { id: "D", text: "Yalnızca yıllık olağan toplantılarda yasak vardır." },
            ],
            correct: "B",
            explanation:
              "TTK m. 393 uyarınca yönetim kurulu üyesi, kendisinin şirket dışı kişisel ve ekonomik çıkarlarıyla ya da eşinin, üst veya alt soyu ile evlilik dışında doğmuş çocuklarının çıkarlarıyla şirketin çıkarları çatıştığı konuların görüşülmesine katılamaz. Bu yasak, çıkar çatışmasının önlenmesi ve kararların objektifliği açısından kritik bir kurumsal yönetim ilkesidir. Üye yasağı durumunda kararı diğer üyeler alır.",
          },
        ],
      },
      // ──────────── Ders 4: Genel Kurul ve Pay Sahipliği Hakları ────────────
      {
        id: "m1010-l4",
        title: "Genel Kurul ve Pay Sahipliği Hakları",
        duration: "9 dk",
        summary: {
          title: "Genel Kurul ve Pay Sahipliği",
          intro:
            "Genel kurul; anonim şirketin en üst karar organıdır (TTK m. 408). Pay sahiplerinin temsil edildiği bu organ, esas sözleşme değişikliği, yönetim kurulu üyelerinin seçimi, finansal tabloların onayı ve kâr dağıtımı gibi temel kararları alır. Genel kurul olağan (her yıl en az bir kez) ve olağanüstü olarak toplanır; çağrı, gündem, oy hakkı ve nisap kuralları sıkı şekilde düzenlenmiştir.",
          sections: [
            {
              heading: "Genel Kurul Yapısı ve Toplanma Usulü",
              icon: "shield",
              items: [
                {
                  strong: "Olağan ve Olağanüstü Toplantı:",
                  text: "Olağan genel kurul her faaliyet döneminin sonundan itibaren 3 ay içinde yapılır; olağanüstü toplantı YK, denetçi veya azlığın talebiyle yapılır.",
                },
                {
                  strong: "Çağrı:",
                  text: "TTK m. 414 uyarınca toplantı tarihinden en az 2 hafta önce ticaret sicili gazetesi ve şirketin internet sitesinde ilan ile yapılır; nama yazılı pay sahiplerine ayrıca taahhütlü mektupla bildirilir.",
                },
                {
                  strong: "Gündem:",
                  text: "Toplantı gündemi YK tarafından belirlenir ve çağrıda yer alır; gündem dışında karar alınamaz, ancak genel kurulda hazır olan ortakların oybirliğiyle gündeme yeni madde eklenebilir.",
                },
                {
                  strong: "Toplantı ve Karar Nisapları:",
                  text: "Olağan kararlar için sermayenin 1/4'ü temsil edilirse toplantı yapılır, oy çoğunluğuyla karar alınır; nitelikli kararlar (esas sözleşme değişikliği, sermaye azaltımı) için ağırlaştırılmış nisap aranır.",
                },
                {
                  strong: "Bakanlık Temsilcisi:",
                  text: "Bazı kararlarda (sermaye artırımı/azaltımı, esas sözleşme değişikliği) Ticaret Bakanlığı temsilcisinin toplantıda hazır bulunması zorunludur.",
                },
              ],
            },
            {
              heading: "Pay Sahipliği Hakları ve Borçları",
              icon: "trend",
              items: [
                {
                  strong: "Mali Haklar:",
                  text: "Kâr payı hakkı, tasfiye payı hakkı, hazırlık dönemi faiz hakkı, yeni pay alma (rüçhan) hakkı; bu haklar pay sahibinin ekonomik beklentilerini karşılar.",
                },
                {
                  strong: "Yönetimsel Haklar:",
                  text: "Genel kurula katılma hakkı, oy hakkı, bilgi alma ve inceleme hakkı, özel denetim isteme hakkı, sorumluluk davası açma hakkı.",
                },
                {
                  strong: "Azlık Hakları:",
                  text: "Sermayenin %10'unu (halka kapalı) veya %5'ini (halka açık) temsil eden pay sahipleri özel haklar kullanır: gündem önerme, genel kurulu olağanüstü toplantıya çağırma, özel denetim talep etme.",
                },
                {
                  strong: "Bilgi Alma Hakkı (TTK m. 437):",
                  text: "Her pay sahibi genel kurulda finansal tablolar ve faaliyet raporu hakkında bilgi alabilir; YK bilgi vermekten ancak haklı sebeple kaçınabilir.",
                },
                {
                  strong: "Pay Sahiplerinin Borçları:",
                  text: "Temel borç sermaye taahhüdünü ifa borcu olup, bunun dışında genellikle ek bir borç söz konusu değildir (sınırlı sorumluluk ilkesi); ikincil sermaye yükümlülüğü esas sözleşmede özel olarak öngörülebilir.",
                },
              ],
            },
          ],
          tip: "Olağan genel kurul faaliyet döneminin bitiminden itibaren 3 ay içinde yapılır. Çağrı süresi 2 hafta. Toplantı nisabı = sermayenin 1/4'ü (olağan kararlar). Azlık = halka kapalıda %10, halka açıkta %5 — bu rakamlar sınavın klasiğidir. Bilgi alma hakkı (TTK m. 437) genel kurulda kullanılır; haklı sebep dışında reddedilemez.",
        },
        questions: [
          {
            text: "Olağan genel kurul toplantısının yapılması için TTK'da öngörülen süre nedir?",
            options: [
              { id: "A", text: "Faaliyet döneminin bitiminden itibaren 1 ay içinde" },
              { id: "B", text: "Faaliyet döneminin bitiminden itibaren 3 ay içinde" },
              { id: "C", text: "Faaliyet döneminin bitiminden itibaren 6 ay içinde" },
              { id: "D", text: "Faaliyet döneminin bitiminden itibaren 1 yıl içinde" },
            ],
            correct: "B",
            explanation:
              "TTK uyarınca olağan genel kurul her faaliyet döneminin (genellikle takvim yılı) sonundan itibaren 3 ay içinde yapılmalıdır. Bu sürenin uzatılması ancak istisnai hallerde Ticaret Bakanlığı'nın izni ile mümkündür. Olağan genel kurulda finansal tablolar onaylanır, kâr dağıtımı kararı alınır ve süresi dolan YK üyeleri yeniden seçilir veya yenisiyle değiştirilir.",
          },
          {
            text: "TTK m. 414 uyarınca genel kurul toplantısı için yapılacak çağrı süresi nedir?",
            options: [
              { id: "A", text: "Toplantı tarihinden en az 1 hafta önce" },
              { id: "B", text: "Toplantı tarihinden en az 2 hafta önce" },
              { id: "C", text: "Toplantı tarihinden en az 1 ay önce" },
              { id: "D", text: "Toplantı tarihinden en az 3 ay önce" },
            ],
            correct: "B",
            explanation:
              "TTK m. 414 uyarınca genel kurul toplantısı için çağrı; toplantı tarihinden en az 2 hafta önce ticaret sicili gazetesinde ve şirketin internet sitesinde ilan edilir. Çağrı süresinin başlangıcı ilan ve toplantı günleri sayılmaksızın hesaplanır. Ayrıca nama yazılı pay sahiplerine taahhütlü mektupla bildirim yapılır.",
          },
          {
            text: "Halka kapalı bir anonim şirkette 'azlık hakları' hangi pay oranıyla kullanılabilir?",
            options: [
              { id: "A", text: "Sermayenin %1'ini temsil eden pay sahipleri" },
              { id: "B", text: "Sermayenin %5'ini temsil eden pay sahipleri" },
              { id: "C", text: "Sermayenin %10'unu temsil eden pay sahipleri" },
              { id: "D", text: "Sermayenin %25'ini temsil eden pay sahipleri" },
            ],
            correct: "C",
            explanation:
              "TTK uyarınca halka kapalı anonim şirketlerde sermayenin en az %10'unu temsil eden pay sahipleri 'azlık hakları'na sahiptir. Halka açık anonim şirketlerde ise bu eşik %5'e düşer. Azlık hakları arasında gündem önerme, olağanüstü genel kurul toplantısına çağrı talep etme, özel denetim talep etme ve şirketin feshini mahkemeden isteme hakkı yer alır. Bu haklar azınlığın korunması ilkesinin uygulamasıdır.",
          },
          {
            text: "TTK m. 437 uyarınca pay sahibinin bilgi alma hakkı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Pay sahibi her zaman ve her şey hakkında bilgi alabilir." },
              { id: "B", text: "Her pay sahibi genel kurulda finansal tablolar ve faaliyet raporu hakkında bilgi alabilir; yönetim kurulu bilgi vermekten ancak haklı sebeple kaçınabilir." },
              { id: "C", text: "Sadece azlık pay sahipleri bilgi alma hakkına sahiptir." },
              { id: "D", text: "Bilgi alma hakkı için ayrıca mahkeme kararı gereklidir." },
            ],
            correct: "B",
            explanation:
              "TTK m. 437 'Bilgi Alma ve İnceleme Hakkı' başlığı altında düzenlenmiştir. Her pay sahibi genel kurul gündemindeki konularla ilgili olarak yönetim kuruluna sorular sorabilir ve bilgi talep edebilir. Bilgi vermek için 'şirket sırrı' veya 'önemli zarara yol açma' gibi haklı sebeplerin varlığı gerekir; aksi takdirde reddedilen pay sahibi mahkemeye başvurabilir. Bu hak, kurumsal şeffaflığın temel taşlarından biridir.",
          },
          {
            text: "Anonim şirket genel kurulunda esas sözleşmede aksine ağırlaştırılmış nisap öngörülmediği durumda olağan kararlar için aranan toplantı nisabı nedir?",
            options: [
              { id: "A", text: "Sermayenin 1/10'unun temsili" },
              { id: "B", text: "Sermayenin 1/4'ünün temsili ve oy çoğunluğuyla karar" },
              { id: "C", text: "Sermayenin 2/3'ünün temsili" },
              { id: "D", text: "Sermayenin tamamının temsili" },
            ],
            correct: "B",
            explanation:
              "TTK uyarınca olağan genel kurul kararları için (esas sözleşme değişikliği gibi nitelikli kararlar dışında) toplantı nisabı sermayenin en az 1/4'ünün temsil edilmesidir. Karar nisabı ise toplantıda hazır bulunan oyların çoğunluğudur. Esas sözleşme bu nisapları ağırlaştırabilir ancak hafifletemez. Nitelikli kararlar (esas sözleşme değişikliği, sermaye azaltımı, birleşme) için daha yüksek nisaplar (örn. 2/3) aranır.",
          },
        ],
      },
      // ──────────── Ders 5: Sermaye Artırımı, Azaltımı ve Pay ────────────
      {
        id: "m1010-l5",
        title: "Sermaye Artırımı, Azaltımı ve Pay Kavramı",
        duration: "9 dk",
        summary: {
          title: "Sermaye Değişiklikleri ve Pay Yapısı",
          intro:
            "Anonim şirketin sermayesinin artırılması veya azaltılması esas sözleşme değişikliği niteliğindedir ve genel kurulun nitelikli çoğunluk kararını gerektirir. Sermaye artırımı; iç kaynaklardan, taahhüt yoluyla (nakdi) veya şarta bağlı olarak yapılabilir. Sermaye azaltımı ise alacaklıları korumaya yönelik sıkı prosedürlere tabidir. Pay ise anonim şirket sermayesinin paylara bölünmüş bir parçasıdır; sahibine pay sahipliği hakları verir.",
          sections: [
            {
              heading: "Sermaye Artırımı ve Azaltımı",
              icon: "shield",
              items: [
                {
                  strong: "İç Kaynaklardan Artırım:",
                  text: "Yedek akçeler ve fonlar gibi iç kaynaklar sermayeye dönüştürülür; ortaklara ek bedel ödetilmeden bedelsiz pay verilir, taahhüt aranmaz.",
                },
                {
                  strong: "Taahhüt Yoluyla Artırım:",
                  text: "Yeni pay alma hakkı (rüçhan hakkı) mevcut ortaklara önerilir; süresi 15 günden az, 60 günden fazla olamaz; kullanılmayan paylar üçüncü kişilere satılabilir.",
                },
                {
                  strong: "Şarta Bağlı Sermaye Artırımı:",
                  text: "Tahvile dönüştürme veya çalışana opsiyon hakkı sağlamak için yapılır (TTK m. 463-472); sermayenin 1/2'sini aşamaz.",
                },
                {
                  strong: "Sermaye Azaltımı:",
                  text: "Önce alacaklılar çağrılır, çağrı 3 kez 7'şer gün ara ile ticaret sicili gazetesinde ilan edilir; alacaklılar 2 ay içinde ödeme veya teminat ister.",
                },
                {
                  strong: "Bilirkişi Raporu:",
                  text: "Sermaye azaltımı için, azaltıldıktan sonra şirket varlıklarının alacakları karşılayacağına dair bilirkişi raporu alınması zorunludur.",
                },
              ],
            },
            {
              heading: "Pay Kavramı ve Türleri",
              icon: "trend",
              items: [
                {
                  strong: "Pay Tanımı:",
                  text: "Pay; anonim şirket esas sermayesinin belirli nominal değere sahip eşit parçalarıdır; her pay nominal değer x sayı = sermaye eşitliğini sağlar.",
                },
                {
                  strong: "Nama ve Hamiline Yazılı Paylar:",
                  text: "Nama yazılı paylar pay defterine kayıtlı sahiplerin malıdır; hamiline yazılı paylar ise sahipliği belge ile kanıtlanır, devri elden teslim ile yapılır.",
                },
                {
                  strong: "Adi ve İmtiyazlı Paylar:",
                  text: "İmtiyaz; kâr payı, tasfiye payı, oy ve rüçhan hakkında tanınabilir; bir paya en çok 15 oy hakkı, ancak esas sözleşme değişikliği ile ibra ve sorumluluk davasında kullanılamaz.",
                },
                {
                  strong: "Bedelli ve Bedelsiz Paylar:",
                  text: "Bedelsiz paylar iç kaynaklı sermaye artırımında, bedelli paylar ise nakdi sermaye artırımında ihraç edilir; bedelsiz paylar için ortakların ek ödeme yapması gerekmez.",
                },
                {
                  strong: "Pay Defteri (TTK m. 499):",
                  text: "Şirketin nama yazılı pay sahiplerini ve sahiplik durumunu gösteren resmi kayıttır; pay devirleri pay defterine kaydedilince geçerli hale gelir.",
                },
              ],
            },
          ],
          tip: "Sermaye azaltımı = alacaklı koruma + bilirkişi raporu. Üç tür sermaye artırımı: iç kaynaklardan, taahhütlü (rüçhan), şarta bağlı (1/2 sınırı). Rüçhan hakkı kullanım süresi 15-60 gün arası. Bir paya max 15 oy ama esas sözleşme değişikliği/ibra/sorumluluk davasında oy imtiyazı kullanılamaz — sınavın kalıp tuzağı.",
        },
        questions: [
          {
            text: "TTK uyarınca anonim şirkette sermaye artırımının üç temel türü aşağıdakilerden hangisinde DOĞRU verilmiştir?",
            options: [
              { id: "A", text: "Yalnızca nakdi artırım" },
              { id: "B", text: "İç kaynaklardan artırım, taahhüt yoluyla artırım, şarta bağlı sermaye artırımı" },
              { id: "C", text: "Yalnızca borçlanma yoluyla artırım" },
              { id: "D", text: "Yalnızca yabancı sermaye yoluyla artırım" },
            ],
            correct: "B",
            explanation:
              "TTK uyarınca anonim şirkette sermaye artırımının üç temel türü vardır: (1) İç kaynaklardan artırım — yedek akçe ve fonların sermayeye dönüştürülmesi (TTK m. 462), ortaklara bedelsiz pay verilir; (2) Taahhüt yoluyla artırım — yeni pay alma hakkı (rüçhan) mevcut ortaklara önerilir, nakdi sermaye gelir; (3) Şarta bağlı sermaye artırımı — tahvile dönüştürme veya çalışan opsiyonu için yapılır, sermayenin 1/2'sini aşamaz.",
          },
          {
            text: "Yeni pay alma hakkı (rüçhan hakkı) kullanım süresi en az ve en çok ne kadar olabilir?",
            options: [
              { id: "A", text: "En az 7 gün, en çok 30 gün" },
              { id: "B", text: "En az 15 gün, en çok 60 gün" },
              { id: "C", text: "En az 30 gün, en çok 90 gün" },
              { id: "D", text: "En az 60 gün, en çok 180 gün" },
            ],
            correct: "B",
            explanation:
              "TTK uyarınca yeni pay alma (rüçhan) hakkının kullanım süresi en az 15 günden az, en çok 60 günden fazla olamaz. Bu süre içinde mevcut ortaklar yeni çıkarılan paylara mevcut paylarına oranla katılma hakkına sahiptir; süresinde kullanılmayan paylar yönetim kurulu kararıyla üçüncü kişilere satılabilir. Süre aralığı pay sahiplerine yeterli karar verme zamanı tanımayı amaçlar.",
          },
          {
            text: "Sermaye azaltımında alacaklılara çağrı süreci için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Alacaklılara çağrı yapılmaz, doğrudan azaltım yapılır." },
              { id: "B", text: "Çağrı 3 kez 7'şer gün ara ile ticaret sicili gazetesinde ilan edilir; alacaklılar 2 ay içinde ödeme veya teminat ister." },
              { id: "C", text: "Çağrı sadece e-posta ile yapılır." },
              { id: "D", text: "Çağrı süresi 1 yıldır." },
            ],
            correct: "B",
            explanation:
              "TTK uyarınca sermaye azaltımı, alacaklı korumasına yönelik sıkı prosedürlere tabidir. Çağrı 3 kez 7'şer gün arayla ticaret sicili gazetesinde ilan edilerek yapılır. Alacaklılara, alacaklarını bildirme ve şirketten ödeme veya teminat isteme süresi 2 aydır. Ayrıca, azaltıldıktan sonra şirket varlıklarının alacaklarını karşılayacağı bilirkişi raporuyla tespit edilmedikçe sermaye azaltımı tescil edilemez.",
          },
          {
            text: "Şarta bağlı sermaye artırımı için TTK'da öngörülen üst sınır nedir?",
            options: [
              { id: "A", text: "Sermayenin 1/4'ü" },
              { id: "B", text: "Sermayenin 1/2'si (yarısı)" },
              { id: "C", text: "Sermayenin 3/4'ü" },
              { id: "D", text: "Sınır yoktur" },
            ],
            correct: "B",
            explanation:
              "TTK m. 463-472 uyarınca şarta bağlı sermaye artırımı; tahvile dönüştürme hakkı veya çalışan/yönetici pay alma hakkı tanımak amacıyla yapılır. Bu artırımın toplamı şirket sermayesinin 1/2'sini (yarısını) aşamaz. Şarta bağlı artırımda paylar, dönüştürme veya kullanım hakkının kullanılmasıyla ihraç edilir; kullanılmayan kısım sermayeye dahil olmaz. Bu sınır, sermaye yapısının istikrarını korumayı amaçlar.",
          },
          {
            text: "Anonim şirkette imtiyazlı paylar ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Bir paya sınırsız sayıda oy hakkı tanınabilir." },
              { id: "B", text: "Bir paya en çok 15 oy hakkı tanınabilir; ancak esas sözleşme değişikliği, ibra ve sorumluluk davasında oy imtiyazı kullanılamaz." },
              { id: "C", text: "İmtiyazlı paylar yalnızca yabancı yatırımcılara verilebilir." },
              { id: "D", text: "İmtiyazlı paylarda kâr payı imtiyazı tanınamaz." },
            ],
            correct: "B",
            explanation:
              "TTK uyarınca eşit itibari değerdeki paylara farklı sayıda oy hakkı verilebilir; istisnai haller hariç bir paya en çok 15 oy hakkı tanınabilir. Ancak oydaki imtiyaz aşağıdaki üç önemli kararda kullanılamaz: (1) esas sözleşme değişikliği, (2) ibra (sorumluluktan kurtarma) kararları, (3) sorumluluk davası açılması kararları. Bu istisnalar, oy imtiyazının azınlık pay sahiplerinin korunması sağlanırken kötüye kullanılmasını önler. İmtiyaz; oy yanı sıra kâr payı, tasfiye payı ve rüçhan hakkında da tanınabilir.",
          },
        ],
      },
    ],
  },
];