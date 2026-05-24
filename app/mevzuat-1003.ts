/* ─────────────────────────────────────────────────────────────────────────────
 * Sermaye Piyasası Araçları 1 (1003)
 *
 * Kaynak: SPL 1003 Çalışma Notu, 31 Aralık 2025 (173 sayfa)
 * Sınavlar: SPL Düzey 1, Düzey 2, Düzey 3 ve Türev Araçlar
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1001 (Dar Kapsamlı) ve 1002 (Geniş Kapsamlı) modüllerinde işlenen
 * mevzuat ve kolektif yatırım kuruluşları konuları burada tekrar edilmemiş;
 * 1003'e özgü olan sermaye piyasası araçlarının (paylar, borçlanma araçları,
 * yatırım fonu katılma payları, türev araçlar) teknik detaylarına
 * odaklanılmıştır.
 *
 * Kullanım:
 *   import { mevzuat1003 } from "./mevzuat-1003";
 *   export const modules = [...mevzuatVerisi, ...genisMevzuat, ...mevzuat1003];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1003: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1003 SERMAYE PİYASASI ARAÇLARI 1
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1003",
    title: "Modül · Sermaye Piyasası Araçları 1 (1003)",
    lessons: [
      // ───────────────────────── Ders 1: Paylar ─────────────────────────
      {
        id: "m1003-l1",
        title: "Paylar ve Pay Benzeri Menkul Kıymetler (VII-128.1)",
        duration: "10 dk",
        summary: {
          title: "Paylar ve Pay Benzeri Menkul Kıymetler",
          intro:
            "Pay; anonim ortaklık sermayesinin belirli nominal değere göre bölünmüş parçası olup, sahibine ortaklık hakkı verir. SPK'nın VII-128.1 sayılı Pay Tebliği, payların ihraç ve halka arz esaslarını düzenler. Pay; vadesi olmayan, sabit getirisi bulunmayan, getirisi temel olarak kâr payı, tasfiye sonucuna katılım ve değer artış kazancından oluşan bir sermaye piyasası aracıdır.",
          sections: [
            {
              heading: "Pay Türleri ve Temel Esaslar",
              icon: "shield",
              items: [
                {
                  strong: "Nama ve Hamiline Yazılı Paylar:",
                  text: "Tedavül bakımından ikiye ayrılır; bedelleri tamamen ödenmemiş paylar için hamiline yazılı pay senedi çıkarılamaz.",
                },
                {
                  strong: "Adi ve İmtiyazlı Paylar:",
                  text: "İmtiyaz; kâr payı, tasfiye payı, rüçhan ve oy hakkında tanınabilir; bir paya en çok 15 oy hakkı verilebilir, ancak esas sözleşme değişikliği ile ibra ve sorumluluk davasında oy imtiyazı kullanılamaz.",
                },
                {
                  strong: "Bedelli ve Bedelsiz Paylar:",
                  text: "Bedelsiz paylar iç kaynak ve kâr payından yapılan sermaye artırımında ihraç edilir; bedelli paylar nakit sermaye artırımında çıkarılır.",
                },
                {
                  strong: "Primli ve Primsiz Paylar:",
                  text: "Nominal değerle ihraç edilen primsiz, nominal değerin üzerinde ihraç edilen primli paydır; payları borsada nominal üstü işlem gören ortaklıkların artırımlarında payların primli satışı zorunludur.",
                },
                {
                  strong: "İtibari Değer Kuralı:",
                  text: "TTK md. 476 uyarınca bir payın itibari değeri en az 1 kuruş olmalıdır; DSYO paylarının ise itibari değeri bulunmaz, sermaye her zaman net aktif değerine eşittir.",
                },
              ],
            },
            {
              heading: "Halka Arz, Sermaye Artırımları ve KİS",
              icon: "trend",
              items: [
                {
                  strong: "Halka Açılma:",
                  text: "Payların ilk halka arzında izahname onayı için Kurula başvuru zorunludur; halka arz yöntemleri: mevcut payların satışı, sermaye artırımı yoluyla satış veya her ikisinin birlikte uygulanması.",
                },
                {
                  strong: "Bedelli Sermaye Artırımı:",
                  text: "Mevcut ortakların yeni pay alma hakkı (rüçhan hakkı) doğar; rüçhan hakkı kullanım süresi 15 günden az, 60 günden fazla olamaz.",
                },
                {
                  strong: "Şarta Bağlı Sermaye Artırımı:",
                  text: "Borçlanma araçlarına paya dönüştürme hakkı veya çalışanlara/yöneticilere pay alma hakkı tanımak üzere yapılabilir; sermayenin yarısını aşamaz.",
                },
                {
                  strong: "Fiyat İstikrarı:",
                  text: "İlk halka arzlarda yetkili kuruluş tarafından, halka arz fiyatının altına düşmesi durumunda 30 gün boyunca pay alımı yoluyla fiyat istikrarı sağlanabilir.",
                },
                {
                  strong: "Katılma İntifa Senedi (KİS):",
                  text: "Esas sözleşmede hüküm bulunması koşuluyla ihraç edilebilir; toplam ihraç tutarı ödenmiş/çıkarılmış sermayenin %50'sini aşamaz; halka açık ortaklıklar KİS sahiplerine yeni pay alma hakkı tanıyamaz.",
                },
              ],
            },
          ],
          tip: "Pay imtiyazlarında sınav klasiği: bir paya en çok 15 oy hakkı tanınabilir ancak esas sözleşme değişikliği, ibra ve sorumluluk davasında oy imtiyazı kullanılamaz. KİS ihraç limiti %50, rüçhan hakkı süresi 15-60 gün arası — bu rakamlar ezberlenmesi gereken kalıp bilgilerdir.",
        },
        questions: [
          {
            text: "TTK uyarınca bir paya tanınabilecek azami oy sayısı ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Bir paya en çok 5 oy hakkı tanınabilir." },
              { id: "B", text: "Bir paya en çok 10 oy hakkı tanınabilir." },
              { id: "C", text: "Bir paya en çok 15 oy hakkı tanınabilir; ancak esas sözleşme değişikliği, ibra ve sorumluluk davasında bu imtiyaz kullanılamaz." },
              { id: "D", text: "Sınır yoktur; esas sözleşmede serbestçe belirlenir." },
            ],
            correct: "C",
            explanation:
              "TTK uyarınca eşit itibari değerdeki paylara farklı sayıda oy hakkı verilebilir; istisnai haller hariç bir paya en çok 15 oy hakkı tanınabilir. Ancak oyda imtiyaz, esas sözleşme değişikliği ile ibra ve sorumluluk davası açılması kararlarında kullanılamaz.",
          },
          {
            text: "VII-128.1 sayılı Pay Tebliği kapsamında Katılma İntifa Senedi (KİS) ihracında uygulanan üst sınır nedir?",
            options: [
              { id: "A", text: "Ödenmiş/çıkarılmış sermayenin %25'i" },
              { id: "B", text: "Ödenmiş/çıkarılmış sermayenin %50'si" },
              { id: "C", text: "Ödenmiş/çıkarılmış sermayenin %75'i" },
              { id: "D", text: "Ödenmiş/çıkarılmış sermayenin %100'ü" },
            ],
            correct: "B",
            explanation:
              "Pay Tebliği uyarınca, ortaklıkların ihraç edebilecekleri KİS'lerin toplam ihraç tutarı, ödenmiş ya da çıkarılmış sermayenin %50'sini geçemez. İhraç limitinin belirlenmesinde, daha önce ihraç edilmiş KİS'lerin tutarı bir indirim kalemi olarak dikkate alınır.",
          },
          {
            text: "Aşağıdakilerden hangisi 'bedelsiz pay' kavramı için doğrudur?",
            options: [
              { id: "A", text: "Şirketin nakit sermaye artırımıyla ihraç ettiği paylardır." },
              { id: "B", text: "Yalnızca yabancı yatırımcılara satılabilen paylardır." },
              { id: "C", text: "İç kaynaklardan ve kâr payından yapılan sermaye artırımı sonucunda ihraç edilen ve ortaklara karşılık alınmadan dağıtılan paylardır." },
              { id: "D", text: "İmtiyazlı pay sahiplerine özel olarak çıkarılan paylardır." },
            ],
            correct: "C",
            explanation:
              "Bedelsiz paylar, ortaklıkların iç kaynaklardan ve kâr payından yaptıkları sermaye artırımları sonucunda ihraç edilen ve karşılığında ortaklardan herhangi bir bedel talep edilmeyen paylardır. Sermaye artırımı sonucunda ortaklığa dışarıdan fon girişi olmaz.",
          },
          {
            text: "Değişken Sermayeli Yatırım Ortaklıklarının (DSYO) paylarının itibari değeri ile ilgili aşağıdakilerden hangisi doğrudur?",
            options: [
              { id: "A", text: "1 kuruştan az olamaz." },
              { id: "B", text: "İtibari değeri bulunmaz; sermaye her zaman net aktif değerine eşittir." },
              { id: "C", text: "İtibari değeri en az 1 TL olmalıdır." },
              { id: "D", text: "İtibari değeri Kurul tarafından belirlenir." },
            ],
            correct: "B",
            explanation:
              "SPKn md. 50/2 hükmü uyarınca DSYO'ların paylarının itibari değeri bulunmaz. Bu durumda DSYO'nun sermayesi her zaman net aktif değerine (varlıklar toplamından borçların düşülmesiyle bulunan tutar) eşit olur. TTK'nın asgari sermaye, nominal değer, sermaye artırımı vb. hükümleri DSYO'lar için uygulanmaz.",
          },
          {
            text: "Halka açık olmayan bir anonim ortaklığın halka açık ortaklık statüsünü kazanmasına ne ad verilir?",
            options: [
              { id: "A", text: "İhraç" },
              { id: "B", text: "Halka arz eden" },
              { id: "C", text: "Halka açılma" },
              { id: "D", text: "Birleşme" },
            ],
            correct: "C",
            explanation:
              "Pay Tebliği'ndeki tanımlar uyarınca 'halka açılma', halka açık olmayan bir ortaklığın halka açık ortaklık statüsünü kazanmasını ifade eder. 'İhraç' sermaye piyasası araçlarının çıkarılması, 'halka arz eden' ise mevcut payların satışını gerçekleştiren ortağı/ortakları belirtir.",
          },
        ],
      },
      // ────────────────────── Ders 2: Borçlanma Araçları ──────────────────────
      {
        id: "m1003-l2",
        title: "Borçlanma Araçları (VII-128.8) ve Tahvil Türleri",
        duration: "10 dk",
        summary: {
          title: "Borçlanma Araçları ve Tahvil Türleri",
          intro:
            "Borçlanma araçları; ihraççının borçlu olduğunu gösteren, sahibine vade sonunda anapara ile birlikte faiz ödemesi yapma yükümlülüğü doğuran sermaye piyasası araçlarıdır. VII-128.8 sayılı Borçlanma Araçları Tebliği uyarınca tahvil, finansman bonosu, paya dönüştürülebilir tahvil, değiştirilebilir tahvil ve kıymetli maden bonoları başlıca borçlanma aracı türleridir.",
          sections: [
            {
              heading: "Genel Esaslar ve İhraç Limiti",
              icon: "shield",
              items: [
                {
                  strong: "Yetkili Organ Kararı:",
                  text: "Halka açık ortaklıklarda yönetim kurulu, halka açık olmayan ortaklıklarda esas sözleşmede aksi öngörülmedikçe genel kurul yetkilidir; karar alındıktan sonra Kurula başvuru için 1 yıllık süre vardır.",
                },
                {
                  strong: "İhraç Limiti — Halka Arz:",
                  text: "Halka açık ortaklıklarda ihraç limiti, özkaynak tutarının 5 katını geçemez; halka açık olmayan ortaklıklarda 3 katını geçemez.",
                },
                {
                  strong: "İhraç Limiti — Nitelikli Yatırımcılara Satış:",
                  text: "Halka açık ortaklıklarda özkaynak tutarının 10 katı, halka açık olmayan ortaklıklarda 6 katı sınırı uygulanır.",
                },
                {
                  strong: "Vade ve Kayden İhraç:",
                  text: "Tahvil vadesi en az 365 gündür; finansman bonosu vadesi 365 günden kısadır. Tüm borçlanma araçları kaydi olarak ihraç edilir ve MKK'ya bildirilir.",
                },
                {
                  strong: "Kurul Ücreti:",
                  text: "İhraç değerinin binde yedisi tutarındadır; vade uzadıkça ücret artar (1 yıla kadar binde 7, daha uzun vadelerde aşamalı oranlar).",
                },
              ],
            },
            {
              heading: "Özel Tahvil Türleri",
              icon: "trend",
              items: [
                {
                  strong: "Erken İtfa Edilebilir Tahviller:",
                  text: "İhraççıya veya tahvil sahibine vade öncesi itfa hakkı tanır; bu hak izahname/ihraç belgesinde açıkça belirtilmelidir.",
                },
                {
                  strong: "Paya Dönüştürülebilir Tahvil (PDT):",
                  text: "İtfa süresi içinde veya sonunda paya dönüştürme hakkı taşıyan tahvillerdir; sermaye artırımı yapılarak yeni paya dönüştürülebileceği gibi, mevcut paylarla da değiştirilebilir.",
                },
                {
                  strong: "Değiştirilebilir Tahvil (DET):",
                  text: "Tahvil sahibine, tahvilini ihraççı ortaklığın iştiraki olan başka bir ortaklığın paylarıyla değiştirme hakkı veren tahvillerdir.",
                },
                {
                  strong: "Finansman Bonoları:",
                  text: "Vadesi 365 günden kısa olan ve iskontolu olarak satılan kısa vadeli borçlanma araçlarıdır; faiz kuponu yoktur, getiri itfa değeri ile satış değeri arasındaki farktan oluşur.",
                },
                {
                  strong: "Yeşil ve Sürdürülebilir Borçlanma Araçları:",
                  text: "İhraç gelirleri çevre dostu projelere yönlendirilen tahvillerdir; bağımsız ikinci taraf görüşü zorunludur ve BIST'te ayrı bir endeksle takip edilir.",
                },
              ],
            },
          ],
          tip: "Borçlanma araçlarında ihraç limitleri sınavın kalbidir: halka arzda 5x özkaynak (halka açık), 3x özkaynak (halka açık olmayan); nitelikli yatırımcıya satışta 10x ve 6x. Vade ayrımı da klasiktir: tahvil ≥365 gün, finansman bonosu <365 gün.",
        },
        questions: [
          {
            text: "Halka açık bir ortaklığın halka arz yoluyla ihraç edebileceği borçlanma araçlarının üst sınırı, özkaynak tutarının kaç katıdır?",
            options: [
              { id: "A", text: "3 katı" },
              { id: "B", text: "5 katı" },
              { id: "C", text: "6 katı" },
              { id: "D", text: "10 katı" },
            ],
            correct: "B",
            explanation:
              "VII-128.8 sayılı Borçlanma Araçları Tebliği uyarınca, halka açık ortaklıkların halka arz yoluyla ihraç edebilecekleri borçlanma araçlarının toplam tutarı özkaynaklarının 5 katını geçemez. Halka açık olmayan ortaklıklarda bu sınır 3 kat, nitelikli yatırımcılara satışta ise sırasıyla 10 ve 6 kattır.",
          },
          {
            text: "Aşağıdakilerden hangisi 'finansman bonosu' tanımı için doğrudur?",
            options: [
              { id: "A", text: "Vadesi 365 günden uzun olan ve sabit faiz ödeyen borçlanma aracıdır." },
              { id: "B", text: "Vadesi 365 günden kısa olan ve iskontolu olarak satılan kısa vadeli borçlanma aracıdır." },
              { id: "C", text: "Sahibine paya dönüştürme hakkı veren tahvil türüdür." },
              { id: "D", text: "Devlet tarafından çıkarılan kamu borçlanma aracıdır." },
            ],
            correct: "B",
            explanation:
              "Finansman bonoları, vadesi 365 günden kısa olan ve iskontolu olarak satılan kısa vadeli borçlanma araçlarıdır. Faiz kuponu yoktur; getiri itfa değeri ile satış değeri arasındaki farktan elde edilir. Vadesi 365 gün ve daha uzun olanlar 'tahvil' olarak nitelendirilir.",
          },
          {
            text: "Paya Dönüştürülebilir Tahvil (PDT) ve Değiştirilebilir Tahvil (DET) arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "PDT vadeli, DET vadesizdir." },
              { id: "B", text: "PDT ihraççının kendi paylarına dönüştürülürken, DET ihraççının iştiraki olan başka bir ortaklığın paylarıyla değiştirilir." },
              { id: "C", text: "PDT yalnızca yabancı para cinsinden ihraç edilebilir." },
              { id: "D", text: "PDT yalnızca halka arz edilirken, DET nitelikli yatırımcılara satılır." },
            ],
            correct: "B",
            explanation:
              "PDT, sahibine ihraççı ortaklığın paylarına dönüştürme hakkı tanır (sermaye artırımıyla yeni paya dönüştürme veya mevcut paylarla değiştirme yoluyla). DET ise sahibine, ihraççının iştiraki olan başka bir ortaklığın paylarıyla değiştirme hakkı verir. Hangi paya dönüşeceği temel ayrımdır.",
          },
          {
            text: "VII-128.8 sayılı Tebliğ uyarınca borçlanma araçlarının ihraç süreciyle ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Borçlanma araçları fiziki senet olarak ihraç edilir." },
              { id: "B", text: "Yetkili organ kararı sonrası Kurula başvuru için 6 aylık süre vardır." },
              { id: "C", text: "Borçlanma araçları kaydi olarak ihraç edilir ve MKK'ya bildirilmesi zorunludur." },
              { id: "D", text: "Halka arz öncesi Borsadan kotasyon alınması yeterlidir, Kurul onayına gerek yoktur." },
            ],
            correct: "C",
            explanation:
              "Tebliğ uyarınca borçlanma araçları kaydi olarak ihraç edilir ve MKK'ya bildirilmesi zorunludur. Yetkili organ kararından sonra Kurula başvuru için 1 yıllık süre vardır. Halka arz için Kurul onayı (izahname onayı) zorunludur.",
          },
          {
            text: "Yeşil ve Sürdürülebilir Borçlanma Araçları için aşağıdakilerden hangisi doğrudur?",
            options: [
              { id: "A", text: "İhraç sonrası getirilerinin nereye harcandığı raporlanmaz." },
              { id: "B", text: "İhraç gelirleri çevresel projelere yönlendirilir; bağımsız ikinci taraf görüşü alınması zorunludur." },
              { id: "C", text: "Yalnızca kamu kurumları tarafından ihraç edilebilir." },
              { id: "D", text: "Yeşil tahviller için Kurul ücreti uygulanmaz." },
            ],
            correct: "B",
            explanation:
              "Yeşil ve sürdürülebilir borçlanma araçlarının ihraç gelirleri, çevresel veya sürdürülebilirlik amaçlı projelere yönlendirilir. Bu nitelikteki araçlar için bağımsız ikinci taraf görüşü alınması zorunludur ve BIST'te ayrı bir endeks (BIST Sürdürülebilirlik Temalı Borçlanma Araçları Endeksi) ile takip edilir.",
          },
        ],
      },
      // ────────────────── Ders 3: Yatırım Fonu Katılma Payları ──────────────────
      {
        id: "m1003-l3",
        title: "Yatırım Fonu Katılma Payları ve Şemsiye Fon Türleri",
        duration: "9 dk",
        summary: {
          title: "Yatırım Fonu Katılma Payları",
          intro:
            "Yatırım fonu katılma payı; tasarruf sahibinin fon malvarlığına ortaklığını ve hak ve borçlarını gösteren, kayden ihraç edilen sermaye piyasası aracıdır. III-52.1 sayılı Tebliğ uyarınca tüm yatırım fonu katılma payları bir şemsiye fona bağlı olarak ihraç edilir; her şemsiye fon, yatırım stratejisine göre farklı türlerde sınıflandırılır.",
          sections: [
            {
              heading: "Şemsiye Fon Türleri ve Asgari Yatırım Oranları",
              icon: "shield",
              items: [
                {
                  strong: "Borçlanma Araçları Şemsiye Fonu:",
                  text: "Fon toplam değerinin en az %80'i devamlı olarak yerli/yabancı kamu ve/veya özel sektör borçlanma araçlarına yatırılır.",
                },
                {
                  strong: "Hisse Senedi Şemsiye Fonu:",
                  text: "Fon toplam değerinin en az %80'i devamlı olarak yerli/yabancı ihraççıların paylarına yatırılır.",
                },
                {
                  strong: "Para Piyasası Şemsiye Fonu:",
                  text: "Portföyün tamamı vadesine en fazla 184 gün kalmış araçlardan oluşur; günlük ağırlıklı ortalama vade en fazla 45 gündür.",
                },
                {
                  strong: "Karma Şemsiye Fon:",
                  text: "Pay, borçlanma araçları, kira sertifikaları ve kıymetli madenlerin en az ikisinin ayrı ayrı %20, birlikte en az %80 oranında bulunduğu fonlardır.",
                },
                {
                  strong: "Garantili ve Koruma Amaçlı Şemsiye Fonlar:",
                  text: "Yatırımcının başlangıç yatırımının belirli bölümünün geri ödenmesini taahhüt eder; garantili fon garantöre dayanırken koruma amaçlı fon en iyi gayret esasıyla çalışır.",
                },
              ],
            },
            {
              heading: "Özel Fon Yapıları ve Kurallar",
              icon: "trend",
              items: [
                {
                  strong: "Hisse Senedi Yoğun Fon:",
                  text: "Portföy değerinin en az %80'i devamlı olarak (MKYO payları hariç) borsada işlem gören ihraççı paylarından oluşan fonlardır; özel vergi avantajları sunar.",
                },
                {
                  strong: "Serbest Şemsiye Fon:",
                  text: "Yalnızca nitelikli yatırımcılara satılan fonları kapsar; portföy sınırlamalarına tabi değildir, daha esnek yatırım stratejileri uygulanabilir.",
                },
                {
                  strong: "Çalışanlara Yönelik Özel Şemsiye Fon:",
                  text: "Bir işverenin bayi, acente ve/veya çalışanlarına tahsis edilen, performans/prim/ikramiye amaçlı kullanılan fonlardır.",
                },
                {
                  strong: "Endeks Fonlar:",
                  text: "Bir endeks kapsamındaki varlıkların tamamından veya örnekleme yoluyla seçilen kısmından oluşur; unvanında 'ENDEKS' ibaresine yer verilmesi zorunludur.",
                },
                {
                  strong: "Yabancı İbaresi:",
                  text: "Yabancı para ve sermaye piyasası araçlarına %80 oranında yatırım yapan fonlar unvanlarında 'YABANCI' ibaresini kullanmak zorundadır; bu ibareyi kullanmayan fonlarda yabancı varlık oranı %20'yi aşamaz.",
                },
              ],
            },
          ],
          tip: "Şemsiye fon türlerindeki %80 eşiği bir 'altın oran'dır: borçlanma araçları, hisse senedi ve yabancı fonlarda devamlı sağlanmak zorundadır. Para Piyasası fonunda ise farklı kurallar geçerli — vadeye en fazla 184 gün ve günlük ağırlıklı ortalama vade en fazla 45 gün. Bu rakamlar her sınavda mutlaka gelir.",
        },
        questions: [
          {
            text: "Bir 'Hisse Senedi Şemsiye Fonu'nun toplam değerinin asgari ne kadarı devamlı olarak yerli/yabancı ihraççıların paylarına yatırılmak zorundadır?",
            options: [
              { id: "A", text: "%51" },
              { id: "B", text: "%70" },
              { id: "C", text: "%80" },
              { id: "D", text: "%100" },
            ],
            correct: "C",
            explanation:
              "III-52.1 sayılı Tebliğ uyarınca Hisse Senedi Şemsiye Fonu; fon toplam değerinin en az %80'inin devamlı olarak yerli ve/veya yabancı ihraççıların paylarına yatırıldığı fonları kapsar. Aynı %80 eşiği Borçlanma Araçları Şemsiye Fonu için de geçerlidir.",
          },
          {
            text: "Para Piyasası Şemsiye Fonu için aşağıdaki süre sınırlarından hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Portföy araçlarının vadesi en fazla 90 gün, günlük ağırlıklı ortalama vade en fazla 30 gün" },
              { id: "B", text: "Portföy araçlarının vadesi en fazla 184 gün, günlük ağırlıklı ortalama vade en fazla 45 gün" },
              { id: "C", text: "Portföy araçlarının vadesi en fazla 365 gün, günlük ağırlıklı ortalama vade en fazla 90 gün" },
              { id: "D", text: "Portföy araçlarının vadesi en fazla 730 gün, günlük ağırlıklı ortalama vade en fazla 180 gün" },
            ],
            correct: "B",
            explanation:
              "Para Piyasası Şemsiye Fonu; portföyünün tamamı vadesine en fazla 184 gün kalmış likiditesi yüksek para ve sermaye piyasası araçlarından oluşan, günlük olarak hesaplanan ağırlıklı ortalama vadesi en fazla 45 gün olan fonları kapsar.",
          },
          {
            text: "Karma Şemsiye Fon için aşağıdaki şartlardan hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tek bir varlık türünün fon toplam değerine oranı asgari %80 olmalıdır." },
              { id: "B", text: "Pay, borçlanma araçları, kira sertifikaları ve kıymetli madenlerden en az ikisinin ayrı ayrı %20, birlikte en az %80 oranında bulunması gerekir." },
              { id: "C", text: "Portföyün tamamı yabancı para birimleri cinsinden olmalıdır." },
              { id: "D", text: "Portföyün en az %50'si türev araçlardan oluşmalıdır." },
            ],
            correct: "B",
            explanation:
              "Karma Şemsiye Fon; ortaklık payları, borçlanma araçları, kira sertifikaları, altın ve diğer kıymetli madenler ile bu madenlere dayalı sermaye piyasası araçlarının en az ikisinin ayrı ayrı fon toplam değerine oranı asgari %20, birlikte en az %80 olan fonları kapsar.",
          },
          {
            text: "Yatırım fonlarının unvanında 'YABANCI' ibaresinin kullanılması ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yabancı para araçlarına %50'den fazla yatırım yapanlar 'YABANCI' ibaresini kullanmalıdır." },
              { id: "B", text: "Yabancı para ve sermaye piyasası araçlarına en az %80 oranında yatırım yapan fonlar 'YABANCI' ibaresini kullanmalıdır." },
              { id: "C", text: "'YABANCI' ibaresi yalnızca yurtdışında satılan fonlar için kullanılır." },
              { id: "D", text: "'YABANCI' ibaresinin kullanımı ihtiyaridir." },
            ],
            correct: "B",
            explanation:
              "Tebliğ uyarınca yabancı para ve sermaye piyasası araçlarına toplam değerinin en az %80'i oranında yatırım yapan fonların unvanlarında 'YABANCI' ibaresine yer verilmesi zorunludur. Bu ibareyi kullanmayan hisse senedi ve borçlanma araçları fonlarında yabancı varlık oranı %20'yi aşamaz.",
          },
          {
            text: "'Hisse Senedi Yoğun Fon' tanımında, fon portföy değerinin asgari ne kadarı borsada işlem gören ihraççı paylarından oluşmalıdır (MKYO payları hariç)?",
            options: [
              { id: "A", text: "%51" },
              { id: "B", text: "%70" },
              { id: "C", text: "%80" },
              { id: "D", text: "%100" },
            ],
            correct: "C",
            explanation:
              "Hisse Senedi Yoğun Fon; fon portföy değerinin en az %80'i devamlı olarak menkul kıymet yatırım ortaklıkları payları hariç olmak üzere borsada işlem gören ihraççı paylarından oluşan fonlar olarak tanımlanır. Bu fonlar belirli vergi avantajlarından yararlanır.",
          },
        ],
      },
      // ─────────────────────── Ders 4: Türev Araçlar ───────────────────────
      {
        id: "m1003-l4",
        title: "Türev Araçlar — Forward, Futures, Opsiyon ve Swap",
        duration: "9 dk",
        summary: {
          title: "Türev Araçlar",
          intro:
            "Türev araçlar; değeri başka bir varlığa (dayanak varlık) bağlı olarak belirlenen finansal sözleşmelerdir. Forward, futures, opsiyon ve swap olmak üzere dört temel türev araç türü bulunur. Türev araçlar; korunma (hedging), spekülasyon ve arbitraj amacıyla kullanılır. Türkiye'de organize türev piyasası BİAŞ Vadeli İşlem ve Opsiyon Piyasası (VİOP) bünyesinde işler.",
          sections: [
            {
              heading: "Forward ve Futures Sözleşmeleri",
              icon: "shield",
              items: [
                {
                  strong: "Forward Sözleşmesi:",
                  text: "Tarafların belirli bir varlığı, gelecekte belirli bir tarihte, bugünden belirlenen fiyat üzerinden alıp satmayı taahhüt ettikleri tezgahüstü (OTC) sözleşmedir; standart değildir, vadesinde mutlaka teslimle sonuçlanır.",
                },
                {
                  strong: "Futures Sözleşmesi:",
                  text: "Forward'ın organize borsa versiyonudur; miktar, vade ve dayanak varlık standartlaştırılmıştır, takas merkezi karşı taraf riskini üstlenir ve günlük uzlaşma sistemi uygulanır.",
                },
                {
                  strong: "Teminat Sistemi:",
                  text: "Futures'ta başlangıç teminatı yatırılır; günlük uzlaşmaya göre kâr/zarar teminat hesabına yansıtılır, teminat sürdürme seviyesinin altına düştüğünde teminat tamamlama çağrısı (margin call) yapılır.",
                },
                {
                  strong: "Pozisyon Kapatma:",
                  text: "Futures pozisyonu vade öncesi ters işlemle kapatılabilir; çoğu sözleşme nakit uzlaşma ile sonlanır, fiziki teslim oranı düşüktür.",
                },
              ],
            },
            {
              heading: "Opsiyon ve Swap Sözleşmeleri",
              icon: "trend",
              items: [
                {
                  strong: "Opsiyon — Alıcı/Satıcı:",
                  text: "Opsiyon alıcısı, dayanak varlığı belirlenen fiyattan alma (call) veya satma (put) hakkına sahiptir, yükümlü değildir; opsiyon satıcısı (writer) prim alır ve karşılık olarak yükümlülük altına girer.",
                },
                {
                  strong: "Avrupa ve Amerikan Opsiyonu:",
                  text: "Avrupa tipi yalnızca vadesinde, Amerikan tipi vadeye kadar herhangi bir günde kullanılabilir; opsiyonun değeri içsel değer (intrinsic value) ve zaman değerinden (time value) oluşur.",
                },
                {
                  strong: "Opsiyon Pozisyonları:",
                  text: "Karda (in-the-money), başabaş (at-the-money), zararda (out-of-the-money) olmak üzere üçe ayrılır; karda olanlar derhal kullanılırsa kâr getirir, zararda olanlar değersiz biter.",
                },
                {
                  strong: "Swap Sözleşmesi:",
                  text: "İki tarafın belirli bir süre boyunca, önceden belirlenen kurallar çerçevesinde nakit akışlarını değiştirdikleri sözleşmelerdir; en yaygın türleri faiz oranı swap'ı (IRS) ve döviz kuru swap'ıdır.",
                },
                {
                  strong: "VİOP İşlem Esasları:",
                  text: "Türkiye'de türev araçlar BİAŞ VİOP'ta işlem görür; dayanak varlık olarak BIST 30 endeksi, ihraççı payları, yabancı para birimleri, altın ve emtia kullanılabilir.",
                },
              ],
            },
          ],
          tip: "Forward ile futures arasındaki ayrım klasik sınav sorusudur: forward standart değil, OTC, karşı taraf riski yüksek; futures standart, organize borsa, takas merkezi karşı taraf riskini üstlenir. Opsiyonda 'alıcı hak sahibi, satıcı yükümlü' kuralı her sınavda gelir.",
        },
        questions: [
          {
            text: "Forward sözleşmesi ile futures sözleşmesi arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Forward'da prim ödenirken futures'ta ödenmez." },
              { id: "B", text: "Forward standart olmayan tezgahüstü sözleşmeyken, futures organize borsada işlem gören standart sözleşmedir; takas merkezi karşı taraf riskini üstlenir." },
              { id: "C", text: "Forward yalnızca dövizlerde, futures yalnızca paylarda kullanılır." },
              { id: "D", text: "Futures yalnızca nitelikli yatırımcılara açıktır." },
            ],
            correct: "B",
            explanation:
              "Forward, taraflar arasında özel olarak yapılan tezgahüstü (OTC) sözleşmedir; miktar, vade ve fiyat tarafların serbest iradesiyle belirlenir, karşı taraf riski yüksektir. Futures ise organize borsada işlem gören, miktar/vade/dayanak varlık standartlaştırılmış, takas merkezinin karşı taraf riskini üstlendiği sözleşmedir. Günlük uzlaşma ve teminat sistemi yalnızca futures'ta uygulanır.",
          },
          {
            text: "Opsiyon sözleşmelerinde alıcı ve satıcının pozisyonları için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Hem alıcı hem satıcı yükümlüdür." },
              { id: "B", text: "Alıcı yükümlü, satıcı hak sahibidir." },
              { id: "C", text: "Alıcı dayanak varlığı alma/satma hakkına sahiptir, yükümlü değildir; satıcı prim alır ve karşılık olarak yükümlülük altına girer." },
              { id: "D", text: "Hem alıcı hem satıcı opsiyon prim öder." },
            ],
            correct: "C",
            explanation:
              "Opsiyon sözleşmelerinde alıcı, opsiyonun cinsine göre dayanak varlığı belirlenen fiyattan alma (call) veya satma (put) hakkına sahiptir; bu hakkı kullanmaya zorlanamaz. Opsiyon satıcısı (writer) ise prim alır ve karşılığında alıcının opsiyonu kullanması halinde dayanak varlığı teslim etme/alma yükümlülüğü altına girer.",
          },
          {
            text: "Avrupa tipi ve Amerikan tipi opsiyon arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Avrupa tipi yalnızca Avrupa borsalarında, Amerikan tipi yalnızca ABD borsalarında işlem görür." },
              { id: "B", text: "Avrupa tipi opsiyon yalnızca vade sonunda, Amerikan tipi opsiyon vade içerisindeki herhangi bir günde kullanılabilir." },
              { id: "C", text: "Avrupa tipi yalnızca alım, Amerikan tipi yalnızca satım opsiyonu olabilir." },
              { id: "D", text: "Amerikan tipi opsiyonda prim ödenmez." },
            ],
            correct: "B",
            explanation:
              "Avrupa tipi opsiyon yalnızca vade sonunda (expiry date) kullanılabilirken, Amerikan tipi opsiyon vade öncesi herhangi bir iş gününde kullanılabilir. Amerikan tipi daha esnek olduğu için genellikle daha yüksek prime sahiptir. İsimleri kıtalarla değil, kullanım esnekliğiyle ilgilidir.",
          },
          {
            text: "Vadeli işlem (futures) sözleşmelerinde 'teminat tamamlama çağrısı' (margin call) hangi durumda yapılır?",
            options: [
              { id: "A", text: "Yatırımcı pozisyon açtığında" },
              { id: "B", text: "Pozisyondan kâr edildiğinde" },
              { id: "C", text: "Günlük uzlaşma sonucunda teminat seviyesi sürdürme teminatının altına düştüğünde" },
              { id: "D", text: "Sözleşmenin vadesi dolduğunda" },
            ],
            correct: "C",
            explanation:
              "Futures sözleşmelerinde günlük uzlaşma sistemi uygulanır; her gün sonunda kâr/zarar teminat hesabına yansıtılır. Teminat seviyesi belirlenen sürdürme teminatı düzeyinin altına düştüğünde takas merkezi yatırımcıya teminat tamamlama çağrısı (margin call) yapar; yatırımcı belirli sürede teminatı tamamlamazsa pozisyonu zorla kapatılır.",
          },
          {
            text: "Faiz Oranı Swap (IRS) sözleşmesinin temel mantığı aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Tarafların belirli bir varlığı gelecekte teslim etmeyi taahhüt ettikleri sözleşmedir." },
              { id: "B", text: "İki tarafın belirli bir süre boyunca, önceden belirlenen kurallar çerçevesinde değişken faiz ile sabit faiz nakit akışlarını değiştirdikleri sözleşmedir." },
              { id: "C", text: "Tarafların farklı para birimlerinin ana parasını değiştirdikleri sözleşmedir." },
              { id: "D", text: "Tarafların alım/satım hakkı için prim ödedikleri sözleşmedir." },
            ],
            correct: "B",
            explanation:
              "Faiz Oranı Swap (IRS); iki tarafın belirli bir süre boyunca, önceden belirlenen anapara üzerinden hesaplanan farklı faiz oranı yapısındaki nakit akışlarını (genellikle değişken-sabit faiz) değiştirdikleri sözleşmedir. IRS'de anapara fiilen el değiştirmez, yalnızca faiz farkları üzerinden netleştirme yapılır.",
          },
        ],
      },
      // ─────────────────── Ders 5: Kamu Borçlanma Araçları ───────────────────
      {
        id: "m1003-l5",
        title: "Kamu Borçlanma Araçları — Devlet Tahvili ve Hazine Bonosu",
        duration: "8 dk",
        summary: {
          title: "Kamu Borçlanma Araçları",
          intro:
            "Kamu borçlanma araçları; merkezi yönetim, mahalli idareler veya kamu iktisadi teşebbüsleri tarafından bütçe açıklarının finansmanı veya yatırım projelerinin fonlanması amacıyla ihraç edilen borçlanma araçlarıdır. Türkiye'de Hazine ve Maliye Bakanlığı tarafından ihraç edilen Devlet İç Borçlanma Senetleri (DİBS) ve Eurobond'lar başlıca kamu borçlanma araçlarıdır.",
          sections: [
            {
              heading: "DİBS Türleri ve Temel Özellikler",
              icon: "shield",
              items: [
                {
                  strong: "Devlet Tahvili:",
                  text: "Hazine tarafından TL veya yabancı para cinsinden ihraç edilen, vadesi 1 yıl ve daha uzun olan kamu borçlanma araçlarıdır; sabit/değişken kuponlu veya kuponsuz olabilir.",
                },
                {
                  strong: "Hazine Bonosu:",
                  text: "Hazine tarafından ihraç edilen, vadesi 1 yıldan kısa olan kısa vadeli kamu borçlanma aracıdır; iskontolu olarak ihraç edilir, kupon ödemesi yoktur.",
                },
                {
                  strong: "TÜFE'ye Endeksli Tahviller:",
                  text: "Anaparası ve/veya kupon ödemeleri TÜFE değişimine endeksli olan tahvillerdir; yatırımcıyı enflasyon riskinden korur.",
                },
                {
                  strong: "Altına Endeksli Tahviller:",
                  text: "İtfa tutarı altın fiyatına endekslenmiş tahvillerdir; sahibinin altın hesabı şeklinde de tutulabilir.",
                },
                {
                  strong: "Eurobond:",
                  text: "Türkiye Cumhuriyeti tarafından uluslararası piyasalarda yabancı para (USD, EUR vb.) cinsinden ihraç edilen, genellikle uzun vadeli (5-30 yıl) borçlanma araçlarıdır.",
                },
              ],
            },
            {
              heading: "İhraç Yöntemleri ve Piyasa İşleyişi",
              icon: "trend",
              items: [
                {
                  strong: "İhale Yöntemi:",
                  text: "DİBS'ler genelde Hazine tarafından düzenlenen ihalelerle birincil piyasada satılır; rekabetçi ve rekabetçi olmayan teklifler kabul edilir.",
                },
                {
                  strong: "Doğrudan Satış (TAP):",
                  text: "Belirli yatırımcı kitlelerine ya da kurumlara doğrudan satış yöntemi de kullanılabilir.",
                },
                {
                  strong: "İkincil Piyasa:",
                  text: "DİBS'ler ihraç sonrası BİAŞ Borçlanma Araçları Piyasası'nda ve bankalararası piyasada işlem görür; yüksek likiditeye sahiptir.",
                },
                {
                  strong: "Kredi Riski:",
                  text: "Türkiye'de kamu borçlanma araçları 'risksiz varlık' olarak kabul edilir; ülke kredi notu (sovereign rating) bu varlıkların kredi kalitesini gösterir.",
                },
                {
                  strong: "Vergi Avantajı:",
                  text: "Bireysel yatırımcıların DİBS'lerden elde ettiği faiz gelirleri belirli koşullarda gelir vergisi stopajına tabi olup, kurumlar vergisi mükellefleri için farklı vergileme kuralları geçerlidir.",
                },
              ],
            },
          ],
          tip: "DİBS'lerde temel ayrım vade üzerinden yapılır: vadesi 1 yıldan kısa olan 'Hazine Bonosu', 1 yıl ve üzeri 'Devlet Tahvili'. Hazine bonosunda kupon yoktur, iskontolu satılır. Eurobond yabancı para cinsinden ve uluslararası piyasalarda ihraç edilir — bu üç tanım sınavın klasiğidir.",
        },
        questions: [
          {
            text: "Devlet tahvili ile hazine bonosu arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Devlet tahvili yabancı para cinsinden, hazine bonosu TL cinsinden ihraç edilir." },
              { id: "B", text: "Devlet tahvili kayıtlı yatırımcılara, hazine bonosu nitelikli yatırımcılara satılır." },
              { id: "C", text: "Devlet tahvilinin vadesi 1 yıl ve daha uzunken, hazine bonosunun vadesi 1 yıldan kısadır." },
              { id: "D", text: "Devlet tahvili Borsada işlem görmezken, hazine bonosu görür." },
            ],
            correct: "C",
            explanation:
              "Devlet tahvili ile hazine bonosu arasındaki temel ayrım vadeleri üzerinden yapılır: hazine bonosunun vadesi 1 yıldan kısa, devlet tahvilinin vadesi ise 1 yıl ve daha uzundur. Hazine bonosu iskontolu satılır ve kupon ödemesi yoktur; devlet tahvili ise sabit/değişken kuponlu veya kuponsuz olabilir.",
          },
          {
            text: "Türkiye Cumhuriyeti tarafından uluslararası piyasalarda yabancı para cinsinden ihraç edilen, genellikle uzun vadeli kamu borçlanma araçlarına ne ad verilir?",
            options: [
              { id: "A", text: "Eurobond" },
              { id: "B", text: "Hazine bonosu" },
              { id: "C", text: "Finansman bonosu" },
              { id: "D", text: "Kıymetli maden bonosu" },
            ],
            correct: "A",
            explanation:
              "Eurobond, Türkiye Cumhuriyeti tarafından uluslararası piyasalarda USD, EUR gibi yabancı para birimleri cinsinden ihraç edilen, genellikle 5-30 yıl arası uzun vadeli kamu borçlanma araçlarıdır. Birincil ihraç uluslararası yatırımcılara yapılır ve uluslararası borsalarda işlem görür.",
          },
          {
            text: "TÜFE'ye Endeksli Tahvillerin temel amacı aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Vergi avantajı sağlamak" },
              { id: "B", text: "Yatırımcıyı enflasyon riskinden korumak" },
              { id: "C", text: "Likidite riskini azaltmak" },
              { id: "D", text: "Erken itfa hakkı tanımak" },
            ],
            correct: "B",
            explanation:
              "TÜFE'ye endeksli tahvillerde anapara ve/veya kupon ödemeleri TÜFE'deki değişime endekslenir. Bu sayede enflasyonun reel getirisi olumsuz etkilemesi önlenir ve yatırımcı satın alma gücünü koruyabilir. Yüksek enflasyon dönemlerinde tercih edilen bir araçtır.",
          },
          {
            text: "DİBS'lerin birincil piyasada en yaygın satış yöntemi aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Halka arz yoluyla satış" },
              { id: "B", text: "BİAŞ üzerinden borsada satış" },
              { id: "C", text: "Hazine tarafından düzenlenen ihalelerle satış (rekabetçi/rekabetçi olmayan teklifler)" },
              { id: "D", text: "Yalnızca yabancı yatırımcılara doğrudan satış" },
            ],
            correct: "C",
            explanation:
              "Türkiye'de DİBS'lerin birincil piyasadaki en yaygın satış yöntemi Hazine tarafından düzenlenen ihalelerdir. İhalede hem rekabetçi (faiz teklifi vererek) hem de rekabetçi olmayan teklifler kabul edilir. İhraç sonrası ikincil piyasa işlemleri BİAŞ Borçlanma Araçları Piyasası ve bankalararası piyasada gerçekleşir.",
          },
          {
            text: "Kamu borçlanma araçlarının kredi riski açısından özelliği aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Diğer borçlanma araçlarıyla aynı kredi riskine sahiptir." },
              { id: "B", text: "Yerel piyasada 'risksiz varlık' olarak kabul edilir; ülke kredi notu (sovereign rating) bu varlıkların kalitesini gösterir." },
              { id: "C", text: "Hiçbir kredi riski derecelendirmesine tabi değildir." },
              { id: "D", text: "Yalnızca özel sektör borçlanma araçlarından daha riskli kabul edilir." },
            ],
            correct: "B",
            explanation:
              "Kamu borçlanma araçları yerel piyasada genellikle 'risksiz varlık' olarak kabul edilir; bu varlıkların kredi kalitesi uluslararası kredi derecelendirme kuruluşlarınca verilen ülke kredi notu (sovereign rating) ile ölçülür. Bu varlıklar finansal modellerde 'risksiz getiri oranı' (risk-free rate) olarak da kullanılır.",
          },
        ],
      },
    ],
  },
];