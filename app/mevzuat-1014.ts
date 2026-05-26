/* ─────────────────────────────────────────────────────────────────────────────
 * Gayrimenkul Değerleme Esasları (1014)
 *
 * Kaynak: SPL 1014 Çalışma Notu, 31 Aralık 2025 (304 sayfa)
 * Sınavlar: Konut Değerleme Sınavı, Gayrimenkul Değerleme Sınavı
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: Önceki PDF'lerle çakışma yoktur. 1014 saf gayrimenkul değerleme
 * konusuna (değer kavramı, değerleme yaklaşımları, imar mevzuatı, gayrimenkul
 * hukuku, ipotek finansmanı) odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1014 } from "./mevzuat-1014";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011,
 *     ...mevzuat1012, ...mevzuat1013, ...mevzuat1014
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1014: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1014 GAYRİMENKUL DEĞERLEME ESASLARI
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1014",
    title: "Modül · Gayrimenkul Değerleme (1014)",
    lessons: [
      // ──────────── Ders 1: Değerlemeye İlişkin Temel Kavramlar ────────────
      {
        id: "m1014-l1",
        title: "Değerlemeye İlişkin Temel Kavramlar ve Çerçeve",
        duration: "10 dk",
        summary: {
          title: "Değerleme Bilimi ve Temel Kavramlar",
          intro:
            "Değerleme; bir mal veya hakka belirli bir tarihte para cinsinden değer biçilmesi sürecidir. Gayrimenkul değerleme, taşınmazların ekonomik, sosyal ve hukuki etkenler altında pazar değerini belirleyen sistematik yaklaşımdır. Değer; yararlılık, kıtlık, arzu ve etkin alım gücü olmak üzere dört temel faktör tarafından belirlenir. Ekonomik ilkeler (arz-talep, ikame, denge, katkı) ve değer türleri (pazar değeri, makul değer, yatırım değeri) değerlemenin kavramsal temelini oluşturur.",
          sections: [
            {
              heading: "Değer Faktörleri ve Ekonomik İlkeler",
              icon: "shield",
              items: [
                {
                  strong: "Dört Değer Faktörü:",
                  text: "Yararlılık (varlığın ihtiyaçları karşılayabilmesi), kıtlık (sınırlı arz), arzu (talep oluşturan psikolojik istek), etkin alım gücü (mali güç) — birinin yokluğu değeri sıfırlar.",
                },
                {
                  strong: "Beklenti ve Değişim İlkeleri:",
                  text: "Beklenti, gelecekteki faydaların bugünkü değerini belirler; değişim ise sosyal/ekonomik koşulların sürekli evrildiği ve değerleri etkilediğini ifade eder.",
                },
                {
                  strong: "Arz, Talep ve İkame İlkeleri:",
                  text: "Arz-talep dengesi pazar fiyatını belirler; ikame ilkesi ise alıcının benzer bir gayrimenkul için aynı veya daha düşük fiyat ödemeyi tercih edeceğini söyler.",
                },
                {
                  strong: "Katkı ve Artık Verimlilik İlkeleri:",
                  text: "Katkı; her bileşenin gayrimenkulün toplam değerine katkısının marjinal olarak ölçüldüğü ilkedir; artık verimlilik ise emek-sermaye-yönetim sonrası kalan değerin araziye atfedildiği yaklaşımdır.",
                },
                {
                  strong: "Uygunluk ve Dışsallık İlkeleri:",
                  text: "Uygunluk; gayrimenkulün çevresine uyumunu (örn. komşu binaların büyüklüğü) ölçer; dışsallık ise çevresel faktörlerin (gürültü, manzara, ulaşım) değere etkisini ifade eder.",
                },
              ],
            },
            {
              heading: "Temel Kavramlar ve Değer Türleri",
              icon: "trend",
              items: [
                {
                  strong: "Değer, Fiyat ve Maliyet:",
                  text: "Değer = ödenecek subjektif tutar; Fiyat = fiili işlem bedeli; Maliyet = üretim/edinme harcaması — üçü birbirinden farklı kavramlardır.",
                },
                {
                  strong: "Pazar Değeri (UDS Tanımı):",
                  text: "İstekli alıcı ve istekli satıcının, makul piyasa şartlarında, baskı altında olmadan, yeterli bilgiye sahip olarak yaptıkları işlemde değişim değeridir.",
                },
                {
                  strong: "Makul Değer ve Yatırım Değeri:",
                  text: "Makul değer; bilgili ve istekli iki taraf arasında pazarlığa açık fiyattır. Yatırım değeri; belirli bir yatırımcı için belirli bir varlığın değeridir, kişiye/firmaya özgüdür.",
                },
                {
                  strong: "Sinerji ve Tasfiye Değeri:",
                  text: "Sinerji değeri; iki varlığın birleştirilmesinden doğan ek değer (örn. yan parsellerin birleştirilmesi). Tasfiye değeri; aciliyet altında satışta elde edilebilecek değer (genellikle pazar değerinin altında).",
                },
                {
                  strong: "Değerleme Uzmanlığı:",
                  text: "Değerleme uzmanı; SPK lisansına sahip, bağımsız ve tarafsız olarak gayrimenkul değer tespiti yapan profesyoneldir; rapor düzenleme yetkisine sahiptir.",
                },
              ],
            },
          ],
          tip: "Dört değer faktörü: yararlılık, kıtlık, arzu, etkin alım gücü — birinin yokluğu değeri sıfırlar. Pazar değeri = istekli alıcı/satıcı, baskısız işlem. Yatırım değeri kişiye özel, makul değerden farklı. Tasfiye değeri pazar değerinin altındadır. UDS = Uluslararası Değerleme Standartları.",
          kavramlar: [
            { terim: "Pazar Değeri", tanim: "Yeterli pazarlama süresi sonunda, bilgili, istekli ve baskısız bir alıcı ile satıcı arasında gerçekleşecek tahmini işlem bedeli." },
            { terim: "Yatırım Değeri", tanim: "Belirli bir yatırımcının kendi amaçları ve koşulları doğrultusunda belirlenen subjektif değer; pazar değerinden farklı olabilir." },
            { terim: "Tasfiye Değeri", tanim: "Varlığın makul pazarlama süresi tanınmaksızın zorunlu satış koşullarında elde edilecek değer; pazar değerinin altındadır." },
            { terim: "Dört Değer Faktörü", tanim: "Mülkün değer kazanabilmesi için gerekli dört koşul: yararlılık (fayda sağlaması), kıtlık (arzın sınırlı olması), arzu (talep yaratması), etkin alım gücü (karşılanabilir fiyat)." },
            { terim: "UDS (Uluslararası Değerleme Standartları)", tanim: "IVS (International Valuation Standards) olarak bilinen; küresel gayrimenkul ve diğer varlık değerleme uygulamalarını standartlaştıran çerçeve." },
            { terim: "En Verimli ve En İyi Kullanım", tanim: "Mülkün yasal, fiziksel ve finansal olarak mümkün ve değeri maksimize eden kullanımını belirleyen analiz; her değerlemenin temel adımı." },
            { terim: "Değerleme Bağımsızlığı", tanim: "Değerleyicinin ihraçcı, müşteri veya üçüncü tarafların baskısından bağımsız, tarafsız değerleme yapma zorunluluğu." },
          ],
          dikkatlar: [
            "Dört değer faktöründen birinin yokluğu değeri sıfırlar; 'yararlılıkla birlikte kıtlık da gerekli mi?' sorusunda cevap EVET.",
            "Pazar değeri istekli + bilgili + baskısız alıcı ve satıcı varsayar; zorunlu satış koşulları pazar değerini oluşturmaz.",
            "Yatırım değeri bireysel beklentilere göre değişen subjektif bir kavramdır; pazar değeriyle çakışabilir ama aynı değildir.",
            "Tasfiye değeri pazar değerinden DÜŞÜKTÜR; 'tasfiyede daha yüksek fiyat alınır' ifadesi yanlıştır.",
            "En verimli ve en iyi kullanım analizi yasal + fiziksel + finansal olarak mümkün ve maksimum değer sağlayan kullanımı belirler; bu analiz yapılmadan değerleme tamamlanamaz.",
          ],
        },
        questions: [
          {
            text: "Değerlemede 'değer faktörleri' olarak isimlendirilen dört temel unsur aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Maliyet, kâr, faiz, vergi" },
              { id: "B", text: "Yararlılık, kıtlık, arzu, etkin alım gücü" },
              { id: "C", text: "Arsa, bina, altyapı, çevre" },
              { id: "D", text: "Konum, büyüklük, yaş, durum" },
            ],
            correct: "B",
            explanation:
              "Bir varlığın değer kazanabilmesi için dört temel faktörün bir arada bulunması gerekir: (1) Yararlılık — varlığın ihtiyaçları karşılayabilme yeteneği, (2) Kıtlık — sınırlı arz, herkesin sahip olamaması, (3) Arzu — talebi oluşturan psikolojik istek, (4) Etkin alım gücü — alıcıların gerçek mali kapasitesi. Bu dört faktörden herhangi birinin yokluğu varlığın değerini sıfırlar; örneğin yararlı ama bol bulunan hava değer taşımazken, kıt bulunan ama yararsız bir nesne de değerli olmaz.",
          },
          {
            text: "UDS (Uluslararası Değerleme Standartları) kapsamında 'pazar değeri' tanımı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Devlet kurumlarınca belirlenen sabit değer" },
              { id: "B", text: "İstekli alıcı ve istekli satıcının, makul piyasa şartlarında, baskı altında olmadan, yeterli bilgiye sahip olarak yaptıkları işlemde değişim değeridir." },
              { id: "C", text: "Yalnızca emlak vergisinde kullanılan değer" },
              { id: "D", text: "Mahkeme tarafından belirlenen değer" },
            ],
            correct: "B",
            explanation:
              "Pazar değeri (Market Value) UDS tanımına göre; istekli (zorlanmamış) bir alıcı ile istekli bir satıcı arasında, kollanmış pazarlık koşullarında, makul piyasa şartlarında, her iki tarafın da konuyla ilgili yeterli bilgiye sahip olduğu ve hiçbir baskı altında olmadığı bir işlemde, gayrimenkulün değerleme tarihinde el değiştirmesi gereken tahmini tutardır. Bu tanım uluslararası geçerli olup tüm değerleme raporlarında temel referans olarak kullanılır.",
          },
          {
            text: "Değer, fiyat ve maliyet kavramları arasındaki fark için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Üçü her zaman birbirine eşittir." },
              { id: "B", text: "Değer = ödenmesi beklenen subjektif tutar; Fiyat = fiili işlem bedeli; Maliyet = üretim veya edinme harcaması; üçü birbirinden farklı kavramlardır." },
              { id: "C", text: "Değer ve maliyet aynıdır, fiyat farklıdır." },
              { id: "D", text: "Yalnızca finansal varlıklarda farklılaşır." },
            ],
            correct: "B",
            explanation:
              "Değerleme literatüründe üç kavram net olarak ayrıştırılır: (1) Değer (Value) — ödenmesi beklenen subjektif tutar, gözlemlenemez ve hesaplanır, (2) Fiyat (Price) — bir işlemde fiilen ödenen bedel, gözlemlenebilir gerçek bir veridir, (3) Maliyet (Cost) — bir varlığın üretimi veya edinilmesi için yapılan harcama, geçmişe ait bir tutardır. Pazar dengesi durumunda üçü birbirine yaklaşabilir, ancak farklı durumlarda (acil satış, manipülasyon, kişisel çıkar) önemli ölçüde ayrışırlar.",
          },
          {
            text: "Değerlemede 'ikame ilkesi' aşağıdakilerden hangisini ifade eder?",
            options: [
              { id: "A", text: "Bir gayrimenkulün değeri zaman içinde değişmez." },
              { id: "B", text: "Aklı başında bir alıcı, benzer kullanışlılık ve fayda sağlayan bir gayrimenkul için daha yüksek bir bedel ödemeye yanaşmaz; yani değer, ikame edilebilir benzer varlıkların değerini geçemez." },
              { id: "C", text: "Eski binaların yerine yenisi yapılmalıdır." },
              { id: "D", text: "Devlet gayrimenkullerin yerini özel sektör doldurur." },
            ],
            correct: "B",
            explanation:
              "İkame ilkesi (Principle of Substitution) gayrimenkul değerlemenin en önemli ekonomik ilkelerinden biridir: aklı başında bir alıcı, benzer kullanışlılık, fayda ve nitelik sağlayan başka bir gayrimenkul daha düşük fiyatla mevcut olduğunda, daha yüksek bedel ödemeyi tercih etmez. Bu ilke pazar yaklaşımının (emsal karşılaştırma) teorik temelidir; benzer gayrimenkullerin satış fiyatları değerlemenin temel referansı olur. Aynı zamanda ikame ilkesi maliyet yaklaşımının da dayanağıdır: yeniden inşa maliyetinin üzerinde fiyat ödenmeyeceği varsayımına dayanır.",
          },
          {
            text: "'Tasfiye değeri' (liquidation value) kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tasfiye değeri her zaman pazar değerinden yüksektir." },
              { id: "B", text: "Aciliyet altında veya sınırlı pazarlama süresinde satışta elde edilebilecek değerdir; genellikle pazar değerinin altındadır." },
              { id: "C", text: "Yalnızca devlet kurumlarınca belirlenir." },
              { id: "D", text: "Yalnızca yabancı yatırımcılar için kullanılır." },
            ],
            correct: "B",
            explanation:
              "Tasfiye değeri (liquidation value); gayrimenkulün acil veya sınırlı pazarlama süresi koşullarında satılması durumunda elde edilebilecek değerdir. Normal pazar koşullarındaki yeterli pazarlama süresi mevcut olmadığı için, tasfiye değeri genellikle pazar değerinin altındadır. İki alt türü vardır: (1) Düzenli tasfiye değeri — makul ancak normalden kısa pazarlama süresi, (2) Zorla tasfiye değeri — çok kısa süre, icra satışı gibi acil durumlar. Tasfiye değeri özellikle iflas, kredi teminatı, mahkeme kararı durumlarında değerleme amacıyla kullanılır.",
          },
        ],
      },
      // ──────────── Ders 2: İmar Bilgisi ve Yapı Sınıflandırması ────────────
      {
        id: "m1014-l2",
        title: "İmar Bilgisi, İmar Mevzuatı ve Yapıların Sınıflandırılması",
        duration: "9 dk",
        summary: {
          title: "İmar Bilgisi ve Yapı Sınıflandırması",
          intro:
            "İmar; bir alanın kentsel ve fiziksel olarak planlanması, düzenlenmesi ve inşa edilmesi sürecidir. 3194 sayılı İmar Kanunu, Mekânsal Planlar Yapım Yönetmeliği ve Planlı Alanlar İmar Yönetmeliği bu alanı düzenler. Mekânsal planlar; mekânsal strateji planları, çevre düzeni planları ve imar planları (nazım, uygulama) olmak üzere kademeli bir hiyerarşi içinde yapılır. Yapılar ise malzemeye, kullanıma, mülkiyete ve diğer kriterlere göre çeşitli şekillerde sınıflandırılır.",
          sections: [
            {
              heading: "Mekânsal Planlar ve İmar Belgeleri",
              icon: "shield",
              items: [
                {
                  strong: "Plan Hiyerarşisi:",
                  text: "Mekânsal Strateji Planları (ulusal/bölgesel), Çevre Düzeni Planları (il/havza), İmar Planları (Nazım: 1/5000, Uygulama: 1/1000); üstün plan alt planı bağlar.",
                },
                {
                  strong: "İmar Durumu Belgesi:",
                  text: "Belediye veya valilik tarafından düzenlenen ve bir taşınmazın yapılaşma koşullarını (TAKS, KAKS, kat sınırı, çekme mesafesi vb.) belirten resmi belgedir.",
                },
                {
                  strong: "Yapı Ruhsatı:",
                  text: "İnşaata başlanabilmesi için ilgili idareden alınması zorunlu izin belgesidir; yapının imar mevzuatına uygun yapılacağını teminat altına alır.",
                },
                {
                  strong: "Yapı Kullanma İzin Belgesi (İskân):",
                  text: "Yapının tamamlandıktan sonra kullanılabileceğini gösteren belgedir; iskansız yapılarda elektrik-su-doğalgaz aboneliği yapılamaz, satış güçleşir.",
                },
                {
                  strong: "İmar Barışı:",
                  text: "31/12/2017 öncesi yapılmış ruhsatsız/iskansız yapılara yasal statü kazandıran geçici düzenleme; 'Yapı Kayıt Belgesi' verilir, ancak imar planı uyumu sağlanmadıkça yapı kalıcı sayılmaz.",
                },
              ],
            },
            {
              heading: "Yapıların Sınıflandırılması",
              icon: "trend",
              items: [
                {
                  strong: "Yapı Malzemesine Göre:",
                  text: "Yığma yapı, betonarme yapı, çelik yapı, ahşap yapı, prefabrike yapı; malzeme türü dayanıklılık, ömür ve değerlemeyi etkiler.",
                },
                {
                  strong: "Hizmet Amacına Göre:",
                  text: "Konut, ticari yapı, sanayi yapısı, sağlık yapısı, eğitim yapısı, dini yapı, idari yapı, spor yapısı; her sınıf farklı değerleme yaklaşımı gerektirir.",
                },
                {
                  strong: "Emlak Vergisine Esas Sınıflandırma:",
                  text: "Emlak Vergisi Kanunu kapsamında yapılar; arsa payı, bina nitelikleri, yapım yılı, yapım sınıfı (A-D arası inşaat kalitesi) gibi kriterlere göre sınıflandırılır.",
                },
                {
                  strong: "Yapı Yaklaşık Birim Maliyeti:",
                  text: "Bayındırlık ve İskan Bakanlığı tarafından her yıl yayımlanan, yapım sınıfına göre m² birim maliyet listesidir; maliyet yaklaşımıyla değerlemede temel referanstır.",
                },
                {
                  strong: "TAKS, KAKS ve Çekme Mesafesi:",
                  text: "TAKS (Taban Alanı Kat Sayısı) = bina taban alanı / arsa alanı; KAKS (Kat Alanı Kat Sayısı) = toplam yapı alanı / arsa alanı; çekme mesafesi parsel sınırlarına bırakılan asgari mesafedir.",
                },
              ],
            },
          ],
          tip: "Plan hiyerarşisi: Strateji → Çevre Düzeni → Nazım İmar (1/5000) → Uygulama İmar (1/1000). TAKS = taban alanı oranı, KAKS = toplam inşaat alanı oranı. Yapı ruhsatı = inşaata başlama izni, İskân = kullanma izni. İmar Barışı 31.12.2017 öncesi yapılar için geçici çözüm.",
          kavramlar: [
            { terim: "İmar Planı Hiyerarşisi", tanim: "En üst kademeden en alta: Strateji Planı → Çevre Düzeni Planı → Nazım İmar Planı (1/5000) → Uygulama İmar Planı (1/1000)." },
            { terim: "TAKS (Taban Alan Kat Sayısı)", tanim: "Yapının zemin kattaki taban alanının parsel alanına oranı; yapının arsa üzerindeki yatay yayılımını sınırlar." },
            { terim: "KAKS / Emsal", tanim: "Toplam inşaat alanının parsel alanına oranı; yapının toplam hacmini (kat sayısı × TAKS ile ilişkili) belirler." },
            { terim: "Yapı Ruhsatı", tanim: "Yapıya başlamadan önce yetkili idareden alınan inşaata başlama izni; projenin imar planına uygunluğunu belgeler." },
            { terim: "Yapı Kullanma İzni (İskân)", tanim: "İnşaatın tamamlanması ve projeye uygunluğunun denetlenmesi sonrası verilen; yapının kullanımına olanak tanıyan izin belgesi." },
            { terim: "Uygulama İmar Planı", tanim: "1/1000 ölçekli, parsel bazında yapılaşma koşullarını belirleyen en alt kademeli ve en bağlayıcı imar planı türü." },
            { terim: "İmar Barışı", tanim: "31.12.2017 tarihinden önce tamamlanmış imarsız veya ruhsatsız yapılara yapı kayıt belgesi verilmesine olanak tanıyan geçici düzenleme." },
          ],
          dikkatlar: [
            "Plan hiyerarşisi: Strateji → Çevre Düzeni → Nazım İmar (1/5000) → Uygulama İmar (1/1000) — alt kademeler üst kademelere aykırı olamaz.",
            "TAKS yatay yayılımı, KAKS/emsal toplam inşaat hacmini sınırlar — 'KAKS taban alanıdır' yanıltıcıdır, KAKS tüm katların toplamıdır.",
            "Yapı ruhsatı inşaata başlamak için, iskân ise yapıyı kullanmak için gereklidir; ruhsatsız yapıda iskân alınamaz.",
            "İmar Barışı yalnızca 31.12.2017 tarihi öncesi yapılar için geçerlidir; bu tarihten sonraki imarsız yapılara uygulanmaz.",
            "Uygulama imar planı 1/1000 ölçekli ve parsel bazında en detaylı plan olup; buraya aykırı ruhsat düzenlenemez.",
          ],
        },
        questions: [
          {
            text: "Türkiye'deki mekânsal planlama hiyerarşisinde plan kademeleri hangi sırayla yer alır?",
            options: [
              { id: "A", text: "Uygulama İmar Planı → Çevre Düzeni Planı → Mekânsal Strateji Planı → Nazım İmar Planı" },
              { id: "B", text: "Mekânsal Strateji Planları (ulusal/bölgesel) → Çevre Düzeni Planları (il/havza) → İmar Planları (Nazım: 1/5000, Uygulama: 1/1000); üst plan alt planı bağlar." },
              { id: "C", text: "Yalnızca İmar Planı vardır, diğer plan türleri yoktur." },
              { id: "D", text: "Sıralamayı belediye serbestçe belirler." },
            ],
            correct: "B",
            explanation:
              "Türkiye'deki mekânsal planlama hiyerarşisi yukarıdan aşağıya kademelidir: (1) Mekânsal Strateji Planları — ulusal ve bölgesel ölçekte; ülkenin uzun vadeli mekânsal vizyonunu belirler, (2) Çevre Düzeni Planları — il, havza veya bölgesel ölçekte; doğal kaynakların korunması ve kalkınma dengesini sağlar, (3) İmar Planları — yerel ölçekte; Nazım İmar Planı (1/5000, genel arazi kullanımı) ve Uygulama İmar Planı (1/1000, parsel bazlı detaylar). Üst kademeli plan alt kademeli planı bağlayıcıdır; alt plan üst plana aykırı düzenleme yapamaz.",
          },
          {
            text: "TAKS (Taban Alanı Kat Sayısı) ve KAKS (Kat Alanı Kat Sayısı) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "TAKS = toplam yapı alanı / arsa alanı; KAKS = bina taban alanı / arsa alanı" },
              { id: "B", text: "TAKS = bina taban alanı / arsa alanı; KAKS = toplam yapı alanı (tüm katların toplamı) / arsa alanı" },
              { id: "C", text: "İki kavram aynı anlama gelir." },
              { id: "D", text: "Sadece arsa fiyatını gösterir, yapılaşmayı belirtmez." },
            ],
            correct: "B",
            explanation:
              "TAKS (Taban Alanı Kat Sayısı), bina taban alanının arsa alanına oranıdır; binanın arsanın ne kadarına oturduğunu gösterir (örneğin TAKS 0,30 ise bina arsanın %30'una oturur). KAKS (Kat Alanı Kat Sayısı), toplam yapı alanının (tüm katların alanlarının toplamı) arsa alanına oranıdır; binanın toplam inşaat alanını gösterir (örneğin KAKS 1,50 ise toplam inşaat alanı arsa alanının 1,5 katı). Bu iki katsayı imar durumunda en kritik yapılaşma parametreleridir ve gayrimenkul değerini doğrudan etkiler.",
          },
          {
            text: "Yapı ruhsatı ile yapı kullanma izin belgesi (iskân) arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Aynı belgenin iki ismidir." },
              { id: "B", text: "Yapı ruhsatı inşaata başlanabilmesi için alınan izin belgesidir; iskân ise yapının tamamlandıktan sonra kullanılabileceğini gösteren belgedir; iskansız yapılarda elektrik-su-doğalgaz aboneliği yapılamaz." },
              { id: "C", text: "Yapı ruhsatı satış sırasında, iskân ise inşaat sırasında alınır." },
              { id: "D", text: "Yapı ruhsatı yalnızca konutlar için, iskân yalnızca ticari yapılar için gereklidir." },
            ],
            correct: "B",
            explanation:
              "Yapı ruhsatı (Yapı İzni); inşaata başlanmadan önce ilgili idareden alınan izin belgesidir; mimari proje, yapı sahibi, müteahhit ve yapı denetim kuruluşu bilgilerini içerir. İskân (Yapı Kullanma İzin Belgesi); inşaat tamamlandıktan sonra yapının imar mevzuatına ve projeye uygun şekilde inşa edildiğini gösterir, yapının fiilen kullanılabilmesi için zorunludur. İskansız yapılarda elektrik, su, doğalgaz aboneliği yapılamaz, kat irtifakı/kat mülkiyeti tesis edilemez ve satış güçleşir; bu nedenle değerleme açısından kritik bir unsurdur.",
          },
          {
            text: "İmar Barışı uygulaması için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm ruhsatsız yapıları kalıcı olarak yasallaştırır." },
              { id: "B", text: "31/12/2017 öncesi yapılmış ruhsatsız/iskansız yapılara yasal statü kazandıran geçici düzenlemedir; 'Yapı Kayıt Belgesi' verilir, ancak imar planı uyumu sağlanmadıkça yapı kalıcı sayılmaz." },
              { id: "C", text: "Yalnızca yeni yapılar için geçerlidir." },
              { id: "D", text: "İmar Barışı kaldırılmıştır." },
            ],
            correct: "B",
            explanation:
              "İmar Barışı; 7143 sayılı kanunla düzenlenen ve 31/12/2017 tarihinden önce yapılmış ruhsatsız veya ruhsata aykırı yapılara yasal statü kazandıran geçici bir düzenlemedir. Yapı sahipleri Yapı Kayıt Belgesi alarak elektrik-su-doğalgaz aboneliği, satış vb. işlemleri yapabilir. Ancak Yapı Kayıt Belgesi, yapıyı imar planına uygun hale getirmez; yapı tam yasallık kazanmamıştır. Belge alındıktan sonra yapı yıkım kararı uygulanamaz, ancak imar planı değişikliği veya kentsel dönüşüm halinde durum değişebilir. Değerleme yaparken Yapı Kayıt Belgeli yapılar için bu durum dikkate alınmalıdır.",
          },
          {
            text: "Yapı Yaklaşık Birim Maliyeti listesinin değerlemedeki önemi nedir?",
            options: [
              { id: "A", text: "Yalnızca emlak vergisi hesaplamasında kullanılır." },
              { id: "B", text: "Bayındırlık ve İskan Bakanlığı tarafından her yıl yayımlanan, yapım sınıfına göre m² birim maliyet listesidir; maliyet yaklaşımıyla değerlemede yeniden inşa maliyetinin hesaplanmasında temel referanstır." },
              { id: "C", text: "Yalnızca arsa fiyatlarını gösterir." },
              { id: "D", text: "Yalnızca müteahhitlere yöneliktir." },
            ],
            correct: "B",
            explanation:
              "Yapı Yaklaşık Birim Maliyeti listesi; her yıl Bayındırlık ve İskan Bakanlığı (Çevre, Şehircilik ve İklim Değişikliği Bakanlığı) tarafından yayımlanan, yapı sınıflarına göre (lüks A, 1.sınıf B, 2.sınıf C, 3.sınıf D) metrekare başına yaklaşık inşaat maliyetlerini gösteren resmi listedir. Bu liste, gayrimenkul değerlemesinde maliyet yaklaşımıyla değer takdir ederken yeniden inşa maliyetinin (replacement cost) hesaplanmasında temel referans olarak kullanılır. Değerleme uzmanı; yapının sınıfını belirler, listeden ilgili m² birim fiyatını alır, m² ile çarpar ve aşınma payını düşerek maliyet yaklaşımıyla değer bulur.",
          },
        ],
      },
      // ──────────── Ders 3: Değerleme Süreci ve Yöntemleri ────────────
      {
        id: "m1014-l3",
        title: "Değerleme Süreci ve Üç Temel Değerleme Yaklaşımı",
        duration: "10 dk",
        summary: {
          title: "Değerleme Süreci ve Yaklaşımları",
          intro:
            "Değerleme süreci; sorunun tanımlanmasıyla başlayan, verilerin toplanması ve analiziyle devam eden, üç temel yaklaşımın (pazar, gelir, maliyet) uygulanmasıyla sonuçlanan ve nihai değerin takdiri ile raporlanmasıyla biten sistematik bir süreçtir. Her yaklaşım farklı varsayımlara dayanır: pazar yaklaşımı emsal karşılaştırması, gelir yaklaşımı gelecek nakit akışları, maliyet yaklaşımı yeniden inşa maliyetidir.",
          sections: [
            {
              heading: "Değerleme Sürecinin Aşamaları",
              icon: "shield",
              items: [
                {
                  strong: "Sorunun Tanımlanması:",
                  text: "Müşterinin ve kullanıcıların belirlenmesi, değerlemenin amacı, değer esası, değerleme tarihi, gayrimenkulün tanımı ve varsayımların belirlenmesi sürecin başlangıç adımlarıdır.",
                },
                {
                  strong: "İşin Kapsamı:",
                  text: "Yapılacak işin sınırları, kullanılacak yaklaşımlar, raporlama detayı, gerekli inceleme düzeyi ve çıkar çatışması kontrolü gibi unsurları belirleyen aşamadır.",
                },
                {
                  strong: "Veri Toplama ve Analiz:",
                  text: "Genel veriler (ekonomik, demografik, çevresel) ve özel veriler (subject property, emsaller, gelir/maliyet) toplanır; pazar analizi ve en verimli/en iyi kullanım belirlenir.",
                },
                {
                  strong: "Yaklaşımların Uygulanması:",
                  text: "Üç temel yaklaşım (pazar, gelir, maliyet) gayrimenkulün niteliğine ve değerleme amacına göre uygulanır; her yaklaşım ayrı ayrı bir değer göstergesi üretir.",
                },
                {
                  strong: "Uyumlaştırma ve Raporlama:",
                  text: "Üç yaklaşımdan elde edilen değer göstergeleri uyumlaştırılarak nihai değer takdir edilir; UDS standartlarına uygun değerleme raporu hazırlanır.",
                },
              ],
            },
            {
              heading: "Üç Temel Değerleme Yaklaşımı",
              icon: "trend",
              items: [
                {
                  strong: "Pazar Yaklaşımı (Sales Comparison):",
                  text: "Benzer (emsal) gayrimenkullerin satış fiyatlarına dayalı yöntemdir; ikame ilkesini kullanır, en yaygın kullanılan yaklaşımdır, konutlar için en uygun yöntemdir.",
                },
                {
                  strong: "Gelir Yaklaşımı (Income Approach):",
                  text: "Gayrimenkulün gelecek nakit akışlarının bugünkü değerine dayanır; ticari gayrimenkuller (otel, AVM, ofis) için tercih edilen yöntemdir.",
                },
                {
                  strong: "Maliyet Yaklaşımı (Cost Approach):",
                  text: "Yeniden inşa maliyeti − aşınma payı + arsa değeri formülüyle hesaplanır; özel amaçlı yapılar (okul, hastane, kilise) için kullanılır.",
                },
                {
                  strong: "Doğrudan Kapitalizasyon Yöntemi:",
                  text: "Gelir yaklaşımının basit versiyonu: Değer = Yıllık Net Gelir / Kapitalizasyon Oranı; istikrarlı gelir akışına sahip varlıklar için uygundur.",
                },
                {
                  strong: "İndirgenmiş Nakit Akımı (DCF):",
                  text: "Gelir yaklaşımının gelişmiş versiyonu; gelecek nakit akışları yıl yıl projekte edilir, iskonto edilerek bugünkü değeri bulunur, gelişme projeleri için ideal.",
                },
              ],
            },
          ],
          tip: "Üç yaklaşım: Pazar (emsal), Gelir (nakit akışı), Maliyet (inşa+arsa). Konut için → Pazar, Ticari için → Gelir, Özel amaçlı için → Maliyet yaklaşımı en uygundur. En verimli ve en iyi kullanım analizi her değerlemenin temelidir. Doğrudan kapitalizasyon = Gelir / Cap Rate.",
          kavramlar: [
            { terim: "Pazar Yaklaşımı", tanim: "Değerleme konusu gayrimenkulün, piyasada yakın zamanda gerçekleşmiş benzer satışlarla (emsal) karşılaştırılması yoluyla değer tespiti." },
            { terim: "Gelir Yaklaşımı", tanim: "Gayrimenkulün ileride yaratacağı nakit akışlarının bugünkü değere indirgenmesi; doğrudan kapitalizasyon veya DCF yöntemiyle uygulanır." },
            { terim: "Maliyet Yaklaşımı", tanim: "Arsa değeri ile yapının yeniden inşa maliyetinden fiziksel/fonksiyonel/ekonomik yıpranmanın düşülmesiyle bulunan değer." },
            { terim: "Doğrudan Kapitalizasyon", tanim: "Bir yıllık net faaliyet gelirinin kapitalizasyon oranına bölünmesiyle değer hesaplama yöntemi: Değer = NOI / Cap Rate." },
            { terim: "Cap Rate (Kapitalizasyon Oranı)", tanim: "Net faaliyet gelirinin mülk değerine oranı; piyasa koşullarını ve yatırımcı beklentilerini yansıtır." },
            { terim: "DCF (İndirgenmiş Nakit Akışı)", tanim: "Gelir yaklaşımının ileri versiyonu; birden fazla dönem için tahmini gelirler ve dönem sonu satış değeri uygun iskonto oranıyla bugüne indirgenir." },
            { terim: "En İyi Kullanım Analizi", tanim: "Yasal açıdan mümkün, fiziksel açıdan olanaklı, finansal açıdan fizibıl ve maksimum değer yaratan kullanımı belirleyen analiz." },
          ],
          dikkatlar: [
            "Konut değerlemesinde pazar (emsal karşılaştırma) yaklaşımı ön plana çıkar; yeterli emsal yoksa diğer yaklaşımlar devreye girer.",
            "Ticari gayrimenkullerde (AVM, ofis) gelir yaklaşımı tercih edilir; kira geliri ve doluluk oranı kritik girdilerdir.",
            "Özel amaçlı yapılarda (ibadet yeri, okul) pazar emsali bulunmadığından maliyet yaklaşımı esas alınır.",
            "Doğrudan kapitalizasyonda Değer = Net Faaliyet Geliri / Cap Rate; cap rate'in küçük değişimi değeri büyük oranda etkiler.",
            "En iyi kullanım analizi yalnızca 'boşmuş gibi' ve 'mevcut kullanımla' şeklinde iki ayrı biçimde yapılabilir.",
          ],
        },
        questions: [
          {
            text: "Değerleme süreci için aşağıdakilerden hangisi DOĞRU sırayı verir?",
            options: [
              { id: "A", text: "Yaklaşımların uygulanması → Sorunun tanımlanması → Veri toplama → Raporlama" },
              { id: "B", text: "Sorunun tanımlanması → İşin kapsamı → Veri toplama ve analiz → Yaklaşımların uygulanması → Uyumlaştırma ve raporlama" },
              { id: "C", text: "Veri toplama → Raporlama → Sorunun tanımlanması → Yaklaşımların uygulanması" },
              { id: "D", text: "Raporlama → Yaklaşımların uygulanması → Veri toplama → Sorunun tanımlanması" },
            ],
            correct: "B",
            explanation:
              "Değerleme süreci sistematik ve sıralı bir yapıya sahiptir: (1) Sorunun tanımlanması — müşteri, amaç, değer esası, tarih, gayrimenkul tanımı, varsayımlar; (2) İşin kapsamı — yapılacak işin sınırları, yaklaşımlar, raporlama detayı; (3) Veri toplama ve analiz — genel ve özel veriler, pazar analizi, en verimli/en iyi kullanım; (4) Yaklaşımların uygulanması — pazar, gelir ve maliyet yaklaşımlarının uygun olanlarıyla değer hesaplama; (5) Uyumlaştırma ve raporlama — üç yaklaşımdan değer göstergelerinin uyumlaştırılması ve nihai değerin takdiri ile rapor hazırlanması. Bu sıra UDS ve IVSC standartlarına uygundur.",
          },
          {
            text: "Pazar yaklaşımı (Sales Comparison Approach) ile gelir yaklaşımı (Income Approach) arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki yaklaşım aynı şeyi farklı isimlerle ifade eder." },
              { id: "B", text: "Pazar yaklaşımı benzer (emsal) gayrimenkullerin satış fiyatlarına dayanır (ikame ilkesi); gelir yaklaşımı ise gayrimenkulün gelecek nakit akışlarının bugünkü değerine dayanır." },
              { id: "C", text: "Pazar yaklaşımı yalnızca konutlar, gelir yaklaşımı yalnızca arsalar için kullanılır." },
              { id: "D", text: "İki yaklaşım da yalnızca yabancı gayrimenkuller için kullanılır." },
            ],
            correct: "B",
            explanation:
              "Pazar yaklaşımı; benzer (emsal) gayrimenkullerin satış fiyatlarının analiziyle değer takdiri yapar. İkame ilkesine dayanır: alıcı benzer kullanıma sahip olan başka gayrimenkullerden daha yüksek fiyat ödemez. En çok konut, arsa ve apartman dairesi gibi standart pazara sahip varlıklarda kullanılır. Gelir yaklaşımı ise gayrimenkulün gelecek dönemlerde sağlayacağı nakit akışlarının (kira, vb.) bugünkü değerine dayanır. Doğrudan kapitalizasyon (Net Gelir / Cap Rate) veya indirgenmiş nakit akımı (DCF) yöntemleri kullanılır. En çok ticari gayrimenkuller (otel, AVM, ofis) için tercih edilir.",
          },
          {
            text: "Maliyet yaklaşımı (Cost Approach) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Maliyet yaklaşımı emsallerin satış fiyatlarına dayanır." },
              { id: "B", text: "Maliyet yaklaşımı; Yeniden İnşa Maliyeti − Aşınma Payı + Arsa Değeri formülüyle değer hesaplar; özel amaçlı yapılar (okul, hastane, kilise) için en uygun yöntemdir." },
              { id: "C", text: "Maliyet yaklaşımı yalnızca arsalar için kullanılır." },
              { id: "D", text: "Maliyet yaklaşımı en az kullanılan yöntemdir." },
            ],
            correct: "B",
            explanation:
              "Maliyet yaklaşımı; bir gayrimenkulün benzerinin bugün yeniden inşa edilmesi durumundaki maliyete dayanır. Formül: Değer = Arsa Değeri + (Yeniden İnşa Maliyeti − Aşınma Payı). Yeniden inşa maliyeti yapı yaklaşık birim maliyeti listesi ile m² × birim fiyat şeklinde hesaplanır. Aşınma; fiziksel (kullanım, yaş), fonksiyonel (eskimiş plan), ekonomik (çevre değişimi) olmak üzere üç türlüdür. Maliyet yaklaşımı özellikle yeni inşa edilmiş yapılarda, özel amaçlı yapılarda (okul, hastane, kilise, müze gibi pazar emsali olmayan yapılar) ve sigorta amaçlı değerlemelerde tercih edilir. Pazar değerinin tavanını oluşturur (ikame ilkesi gereği).",
          },
          {
            text: "Doğrudan Kapitalizasyon Yöntemi formülü aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Değer = Yıllık Net Gelir × Kapitalizasyon Oranı" },
              { id: "B", text: "Değer = Yıllık Net Gelir / Kapitalizasyon Oranı" },
              { id: "C", text: "Değer = Yıllık Net Gelir + Kapitalizasyon Oranı" },
              { id: "D", text: "Değer = Brüt Gelir × Risksiz Faiz" },
            ],
            correct: "B",
            explanation:
              "Doğrudan Kapitalizasyon Yöntemi (Direct Capitalization), gelir yaklaşımının basit ve yaygın versiyonudur: Değer = Yıllık Net İşletme Geliri (NOI) / Kapitalizasyon Oranı (Cap Rate). Örneğin yıllık NOI 100.000 TL ve cap rate %8 ise gayrimenkul değeri = 100.000 / 0,08 = 1.250.000 TL olur. Bu yöntem istikrarlı gelir akışına sahip varlıklar için (örneğin uzun vadeli kiraya verilmiş ticari gayrimenkuller) uygundur. Cap rate; benzer gayrimenkullerin pazardaki kira getirisi/satış fiyatı oranlarından hesaplanır. Yöntemin temel kısıtı tek dönemlik gelir alınmasıdır; gelir değişimi varsa DCF tercih edilmelidir.",
          },
          {
            text: "Konut, ticari gayrimenkul ve özel amaçlı yapı (okul, hastane, kilise) için en uygun değerleme yaklaşımları sırasıyla aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Maliyet, Pazar, Gelir" },
              { id: "B", text: "Pazar Yaklaşımı (konut), Gelir Yaklaşımı (ticari), Maliyet Yaklaşımı (özel amaçlı)" },
              { id: "C", text: "Gelir, Pazar, Maliyet" },
              { id: "D", text: "Tüm gayrimenkuller için yalnızca Pazar Yaklaşımı kullanılır." },
            ],
            correct: "B",
            explanation:
              "Üç yaklaşımın en uygun kullanım alanları gayrimenkul tipine göre değişir: (1) Konut için → Pazar Yaklaşımı en uygundur çünkü konut piyasası geniş ve standart, emsal bulmak kolaydır, (2) Ticari Gayrimenkul (otel, AVM, ofis, depo) için → Gelir Yaklaşımı en uygundur çünkü bu gayrimenkullerin asıl değeri kira getirileridir; alıcı kâr beklentisiyle satın alır, (3) Özel Amaçlı Yapılar (okul, hastane, kilise, müze) için → Maliyet Yaklaşımı en uygundur çünkü bu yapıların pazar emsali nadirdir, gelir üretmezler veya gelirleri standart değildir. Profesyonel değerleme raporlarında genellikle ikincil kontrol için diğer yaklaşımlar da uygulanır.",
          },
        ],
      },
      // ──────────── Ders 4: Gayrimenkul Hukuku ve Mülkiyet ────────────
      {
        id: "m1014-l4",
        title: "Gayrimenkul Mülkiyeti, Sınırlı Ayni Haklar ve Tapu Sistemi",
        duration: "9 dk",
        summary: {
          title: "Gayrimenkul Hukuku ve Mülkiyet",
          intro:
            "Gayrimenkul (taşınmaz); arazi, yapılar ve bunların ayrılmaz parçaları olan haklardan oluşur. Türk Medeni Kanunu (TMK) gayrimenkul mülkiyetini düzenler. Mülkiyet hakkı; sahibine kullanma (ius utendi), yararlanma (ius fruendi) ve tasarruf etme (ius abutendi) yetkilerini verir. Sınırlı ayni haklar (intifa, sükna, irtifak, rehin) ise mülkiyetten daha sınırlı haklardır. Tapu sicili sistemi mülkiyetin resmi kayıt altına alınmasını sağlar.",
          sections: [
            {
              heading: "Gayrimenkul Mülkiyeti ve Türleri",
              icon: "shield",
              items: [
                {
                  strong: "Gayrimenkulün Tanımı:",
                  text: "TMK uyarınca arazi (toprak), tapu kütüğüne kayıtlı bağımsız ve sürekli haklar, ve kat mülkiyeti tesis edilmiş bağımsız bölümler gayrimenkul olarak kabul edilir.",
                },
                {
                  strong: "Mülkiyet Hakkının Üç Yetkisi:",
                  text: "İus utendi (kullanma yetkisi), ius fruendi (yararlanma yetkisi: kira alma, ürün toplama), ius abutendi (tasarruf etme yetkisi: satma, bağışlama, ipotek koyma).",
                },
                {
                  strong: "Mülkiyet Türleri:",
                  text: "Tek mülkiyet (tek malik), paylı mülkiyet (birden fazla malik, herkesin payı belirli), elbirliği mülkiyeti (paylar belirli değil, miras, evlilik mal rejimi gibi).",
                },
                {
                  strong: "Kat Mülkiyeti:",
                  text: "634 sayılı KMK uyarınca; bir binanın bağımsız bölümlerinin (daire, dükkan, atölye) ayrı ayrı mülkiyete konu olması; her bağımsız bölüm sahibinin ortak alanlarda da arsa payı oranında payı vardır.",
                },
                {
                  strong: "Mülkiyet Kısıtlamaları:",
                  text: "Komşuluk hukuku (gürültü, koku, dumana karşı), kamu yararı kısıtlamaları (imar planı, kamulaştırma), tarımsal toprakların korunması, askeri yasak bölge gibi sınırlamalar mülkiyet hakkını kısıtlar.",
                },
              ],
            },
            {
              heading: "Sınırlı Ayni Haklar ve Tapu Sistemi",
              icon: "trend",
              items: [
                {
                  strong: "İntifa Hakkı (Usufruct):",
                  text: "Bir başkasının malını kullanma ve yararlanma (semerelerinden yararlanma, kiraya verme) hakkı; mülkiyet hakkı baki kalır, intifa hakkı sınırlı süreli olabilir veya hayat boyu sürebilir.",
                },
                {
                  strong: "Sükna Hakkı (Habitation):",
                  text: "Bir konutta veya konutun bir bölümünde oturma hakkı; intifadan farklı olarak yararlanma yoktur, sadece oturma yetkisi vardır, kişiseldir.",
                },
                {
                  strong: "İrtifak Hakkı (Easement):",
                  text: "Bir taşınmaz lehine, başka bir taşınmaz aleyhine kurulan haktır; geçit hakkı, su hakkı, kaynak hakkı, manzara hakkı gibi türleri vardır.",
                },
                {
                  strong: "Rehin Hakkı:",
                  text: "Bir borcun teminatı olarak gayrimenkulün rehnedilmesidir; ipotek (taşınmaz rehni) en yaygın türdür, borç ödenmediğinde gayrimenkul cebri icra ile satılabilir.",
                },
                {
                  strong: "Tapu Sicili:",
                  text: "Tüm taşınmazların ve haklarının resmi kayıt altına alındığı sicildir; tapu kütüğü, kat mülkiyeti kütüğü ve şerhler defteri ana bölümleridir; kayıtlar resmi nitelikte ve aleni karinedir.",
                },
              ],
            },
          ],
          tip: "Mülkiyetin üç yetkisi: kullanma (utendi), yararlanma (fruendi), tasarruf (abutendi). Sınırlı ayni haklar: İntifa (kullan+yararlan), Sükna (sadece otur), İrtifak (taşınmazlar arası), Rehin (borç teminatı). Tapu kaydı resmi karinedir — aksi mahkemece ispatlanmadıkça doğru kabul edilir. Kat mülkiyeti = bağımsız bölüm + arsa payı.",
          kavramlar: [
            { terim: "Ayni Hak", tanim: "Bir eşya üzerinde doğrudan ve herkese karşı ileri sürülebilen mutlak hak; tapu siciline tescille kazanılır." },
            { terim: "Mülkiyet Hakkı", tanim: "Bir taşınmaz üzerinde en geniş ayni hak; kullanma (utendi), yararlanma (fruendi) ve tasarruf (abutendi) yetkilerinin tamamını kapsar." },
            { terim: "İntifa Hakkı", tanim: "Bir malı kullanma ve semerelerinden yararlanma hakkı; ancak tasarruf (devretme/tahrip) yetkisi yoktur." },
            { terim: "Sükna Hakkı", tanim: "Bir yapıda veya yapının bir bölümünde oturma hakkı; intifakın daha dar biçimi olup alt kiraya verilmesi kural olarak yasaktır." },
            { terim: "İrtifak Hakkı", tanim: "Bir taşınmaz (yüklü taşınmaz) üzerinde başka bir taşınmaz (yararlanan taşınmaz) ya da belirli kişi lehine kurulan sınırlı ayni hak." },
            { terim: "İpotek", tanim: "Alacağı güvence altına almak için taşınmaz üzerinde kurulan taşınmaz rehni; borç ödenmezse taşınmaz paraya çevrilir." },
            { terim: "Kat Mülkiyeti", tanim: "Tamamlanmış bir yapının bağımsız bölümlerinin ayrı mülkiyet konusu olduğu sistem; her bağımsız bölüme arsa payı tahsis edilir." },
          ],
          dikkatlar: [
            "İntifa hakkı: kullanma + yararlanma yetkisi verir; tasarruf (devretme, tahrip etme) yetkisi mülkiyet sahibinde kalır.",
            "Sükna hakkı intifakın daha dar biçimidir; hak sahibi yapıyı başkasına kiralayamaz/devredemez.",
            "Tapu sicilinin aleniliği ilkesi: herkes tapu sicilini bildiğini kabul eder; 'bilmiyordum' savunması geçersizdir.",
            "Kat irtifakı ≠ kat mülkiyeti; yapı tamamlandıktan sonra kat irtifakı kat mülkiyetine dönüştürülmelidir.",
            "İpotekte kişisel borç ile taşınmaz yükü birbirinden ayrıdır; borç ödenmezse taşınmaz el değiştirmiş olsa dahi ipotek takip eder.",
          ],
        },
        questions: [
          {
            text: "TMK uyarınca mülkiyet hakkının üç temel yetkisi aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Sahip olma, satma, kiralama" },
              { id: "B", text: "İus utendi (kullanma yetkisi), ius fruendi (yararlanma yetkisi: kira alma, ürün toplama), ius abutendi (tasarruf etme yetkisi: satma, bağışlama, ipotek koyma)" },
              { id: "C", text: "Yalnızca satma yetkisi" },
              { id: "D", text: "Yalnızca kiraya verme yetkisi" },
            ],
            correct: "B",
            explanation:
              "Türk Medeni Kanunu ve Roma Hukuku geleneğine göre mülkiyet hakkı üç temel yetkiyi içerir: (1) İus utendi (Kullanma yetkisi) — sahibinin malı bizzat kullanma hakkı; oturma, ekip biçme vb., (2) İus fruendi (Yararlanma yetkisi) — maldan gelir elde etme hakkı; kira alma, semerelerini toplama, ürün satma, (3) İus abutendi (Tasarruf etme yetkisi) — mal üzerinde hukuki tasarrufta bulunma hakkı; satma, bağışlama, ipotek koyma, vasiyet etme. Bu üç yetki birleşince 'tam mülkiyet' (full ownership) oluşur; sınırlı ayni haklar bu yetkilerin bir kısmını içerir.",
          },
          {
            text: "Paylı mülkiyet ile elbirliği mülkiyeti arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Paylı mülkiyette herkesin payı belirlidir ve serbestçe satılabilir; elbirliği mülkiyetinde ise paylar belirli değildir, miras veya evlilik mal rejimi gibi durumlardan doğar ve ortakların birlikte hareket etmesi gerekir." },
              { id: "B", text: "İki kavram aynıdır." },
              { id: "C", text: "Paylı mülkiyet yalnızca konutlar, elbirliği yalnızca arsalar için kullanılır." },
              { id: "D", text: "Paylı mülkiyet yasaktır." },
            ],
            correct: "A",
            explanation:
              "Paylı mülkiyet (müşterek mülkiyet); birden fazla kişinin bir mal üzerinde belirli oranlarda paya sahip olduğu mülkiyet türüdür. Her ortak kendi payını serbestçe satabilir, devredebilir veya ipotek koyabilir; pay her zaman belirli ve sayısaldır. Elbirliği mülkiyeti (iştirak halinde mülkiyet); paylar belirli değildir, mülkiyet ortakların tümüne aittir. Genellikle miras yoluyla, evlilik mal rejiminden veya adi şirketten doğar. Ortakların birlikte hareket etmesi gerekir; paylaşma için önce iştirakin sona erdirilmesi (paya çevirme) gerekir. Tapu kayıtlarında elbirliği mülkiyeti 'iştirak halinde' ibaresi ile belirtilir.",
          },
          {
            text: "İntifa hakkı (usufruct) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Mülkiyet hakkını sona erdirir." },
              { id: "B", text: "Bir başkasının malını kullanma ve yararlanma (semerelerinden yararlanma, kiraya verme) hakkıdır; mülkiyet hakkı baki kalır, intifa hakkı sınırlı süreli olabilir veya hayat boyu sürebilir." },
              { id: "C", text: "Yalnızca devlete ait gayrimenkullerde uygulanır." },
              { id: "D", text: "İntifa hakkı tapuya tescil edilmez." },
            ],
            correct: "B",
            explanation:
              "İntifa hakkı (usufructus); bir başkasının malını kullanma (utendi) ve ondan yararlanma (fruendi) yetkilerini sahibine veren sınırlı ayni haktır. İntifa sahibi mülkiyetin sahibi değildir, ancak mülkün gelirlerinden (kira, ürün) yararlanabilir, bizzat kullanabilir. Ancak malın kendisini satamaz, bağışlayamaz veya bozucu/yıkıcı tasarrufta bulunamaz. Mülkiyet hakkı baki kalır ('çıplak mülkiyet — nuda proprietas'). İntifa hakkı; sınırlı süreli (örn. 30 yıl) veya hayat boyu olarak kurulabilir, ölümle veya sürenin dolmasıyla sona erer. Tapuya tescil edilir ve aleni karine oluşturur.",
          },
          {
            text: "Türkiye'de tapu sicili sistemi için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tapu kayıtları gizlidir, yalnızca malik bilgiye ulaşabilir." },
              { id: "B", text: "Tüm taşınmazların ve haklarının resmi kayıt altına alındığı sicildir; tapu kütüğü, kat mülkiyeti kütüğü ve şerhler defteri ana bölümleridir; kayıtlar resmi nitelikte ve aleni karinedir." },
              { id: "C", text: "Tapu sicili özel sektör tarafından tutulur." },
              { id: "D", text: "Tapu kayıtları her zaman değiştirilebilir, herhangi bir formaliteye tabi değildir." },
            ],
            correct: "B",
            explanation:
              "Türkiye'deki tapu sicili sistemi (Tapu ve Kadastro Genel Müdürlüğü tarafından yönetilir) tüm taşınmaz mülkiyet haklarının ve sınırlı ayni hakların resmi kayıt altına alındığı sistemdir. Üç ana bölümü vardır: (1) Tapu Kütüğü — taşınmazların temel kayıtları, (2) Kat Mülkiyeti Kütüğü — kat mülkiyetli yapılar, (3) Şerhler Defteri — geçici tedbirler, ihtilaflar. Tapu kayıtları aleni (public) karinedir; iyi niyetli üçüncü kişiler tapuya güvenerek hareket edebilir, kayıtlar aksi mahkeme kararıyla ispat edilmedikçe doğru kabul edilir. Bu 'aleniyet' ilkesi gayrimenkul piyasasının güvenli işlemesinin temelidir.",
          },
          {
            text: "Kat Mülkiyeti Kanunu (KMK) kapsamında 'kat mülkiyeti' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Kat mülkiyeti yalnızca tek katlı evlerde geçerlidir." },
              { id: "B", text: "Bir binanın bağımsız bölümlerinin (daire, dükkan, atölye) ayrı ayrı mülkiyete konu olması; her bağımsız bölüm sahibinin ortak alanlarda (apartman girişi, asansör, çatı, bahçe) da arsa payı oranında payı vardır." },
              { id: "C", text: "Kat mülkiyeti yalnızca ticari yapılar için tesis edilebilir." },
              { id: "D", text: "Kat mülkiyetinde apartmandaki ortak alanlar kimse tarafından kullanılamaz." },
            ],
            correct: "B",
            explanation:
              "634 sayılı Kat Mülkiyeti Kanunu (KMK); bir binanın bağımsız bölümlerinin (daire, dükkan, atölye, depo) ayrı ayrı mülkiyete konu olması rejimidir. Her bağımsız bölüm bir tapu kütüğüne sahiptir ve ayrıca alınıp satılabilir. Ancak her bağımsız bölüm sahibi, binanın ortak yerlerinde (giriş, asansör, çatı, sığınak, bahçe, kömürlük, arsa) arsa payı oranında müşterek (paylı) mülkiyete sahiptir. Ortak alanlar üzerindeki tasarruflar (örn. çatıya cep telefonu antenı kurulması, çatı arsasının satılması) için tüm kat maliklerinin oybirliği veya nitelikli çoğunluk kararı gerekir. Apartman yöneticisi atanması, aidat toplanması bu hukuki yapı içinde işler.",
          },
        ],
      },
      // ──────────── Ders 5: Gayrimenkul Finansmanı ve İpotek ────────────
      {
        id: "m1014-l5",
        title: "Gayrimenkul Finansmanı ve İpotek Kredileri",
        duration: "9 dk",
        summary: {
          title: "Gayrimenkul Finansmanı ve İpotek Sistemi",
          intro:
            "Gayrimenkul finansmanı; konut ve ticari gayrimenkul edinimi için sağlanan uzun vadeli kredilerin toplamıdır. İpotek (mortgage) sistemi gayrimenkul finansmanının temel aracıdır: alınan gayrimenkul kredinin teminatı olarak gösterilir. Türkiye'de 5582 sayılı kanunla 2007'de modern ipotek finansmanı sistemi (konut finansmanı sistemi) kurulmuştur. İkincil ipotek piyasası, varlığa dayalı menkul kıymetler ve ipotek finansmanı kuruluşları sistemin temel bileşenleridir.",
          sections: [
            {
              heading: "İpotek Kredileri ve Yapısı",
              icon: "shield",
              items: [
                {
                  strong: "Konut Finansmanı Sistemi:",
                  text: "5582 sayılı kanunla 2007'de kurulan, ipotek kredilerinin standartlaştırıldığı, tüketici korumasının güçlendirildiği ve ikincil piyasanın tanımlandığı sistemdir.",
                },
                {
                  strong: "Konut Kredisi Türleri:",
                  text: "Sabit faizli (faiz vade boyunca sabit), değişken faizli (referans orana göre güncellenir), kademeli faizli (yıllar içinde değişen sabit oranlar) gibi türleri vardır.",
                },
                {
                  strong: "Loan-to-Value (LTV) Oranı:",
                  text: "Kredi tutarı / Gayrimenkul değeri; Türkiye'de konut için %80, lüks konut/2.konutta %50 gibi oranlarla sınırlandırılmıştır (BDDK düzenlemesi).",
                },
                {
                  strong: "Geri Ödeme Yapıları:",
                  text: "Eşit taksitli (anüite) — her ay aynı tutar, aşamalı (graduated) — başta düşük artan, balon ödemeli (balloon) — vade sonunda büyük tutar, faiz-only — başta sadece faiz.",
                },
                {
                  strong: "Erken Ödeme:",
                  text: "Tüketici Sözleşmeleri Kanunu uyarınca ipotek kredisinde erken ödeme hakkı vardır; banka erken ödeme tazminatı talep edebilir (kalan vadeye göre %1 veya %2).",
                },
              ],
            },
            {
              heading: "İkincil Piyasa ve İpotek Finansmanı Kuruluşları",
              icon: "trend",
              items: [
                {
                  strong: "Birincil ve İkincil Piyasalar:",
                  text: "Birincil piyasada bankalar/finans kuruluşları doğrudan tüketiciye konut kredisi verir; ikincil piyasada bu krediler menkul kıymetleştirilerek yatırımcılara satılır.",
                },
                {
                  strong: "İpotek Finansmanı Kuruluşları (İFK):",
                  text: "Bankalardan ipotek kredilerini alarak menkul kıymetleştiren kurumsal yapılardır; SPK denetimine tabi olarak faaliyet gösterirler.",
                },
                {
                  strong: "İpoteğe Dayalı Menkul Kıymetler (İDMK):",
                  text: "İpoteklerden oluşan portföyün menkul kıymetleştirilerek yatırımcılara sunulduğu yapılandırılmış ürünlerdir (mortgage-backed securities — MBS).",
                },
                {
                  strong: "Teminatlı Menkul Kıymetler (TMK):",
                  text: "Bankaların ipotek kredilerini bilanço içinde tutarak çıkardığı, ipotekler tarafından teminat altına alınmış borçlanma araçlarıdır (covered bonds).",
                },
                {
                  strong: "Kentsel Dönüşüm:",
                  text: "Riskli yapıların yenilenmesi sürecidir; 6306 sayılı kanun kapsamında özel kredi imkanları (düşük faizli, devlet destekli) sağlanır; gayrimenkul değerini önemli ölçüde etkiler.",
                },
              ],
            },
          ],
          tip: "İpotek kredisinde temel kavramlar: LTV (kredi/değer oranı), eşit taksitli (anüite) ödeme, sabit/değişken faiz. 2007'de 5582 ile modern sistem kuruldu. İDMK (mortgage-backed) = ipotek havuzunun menkul kıymetleştirilmesi. Erken ödemede banka tazminat talep edebilir. 6306 sayılı kanun kentsel dönüşümü düzenler.",
          kavramlar: [
            { terim: "LTV (Loan-to-Value)", tanim: "Kullandırılan kredi tutarının gayrimenkulün değerine oranı; bankalar genellikle %80 üst sınır uygular." },
            { terim: "İpotek Kredisi (Mortgage)", tanim: "Taşınmaz ipoteği teminatıyla verilen uzun vadeli konut ya da ticari gayrimenkul alım kredisi." },
            { terim: "Anüite (Eşit Taksitli Ödeme)", tanim: "Her dönem sabit tutarda ödenen kredi taksiti; başlangıçta faiz ağırlıklı, zamanla anapara ağırlıklı hale gelir." },
            { terim: "İDMK (İpotek Teminatlı Menkul Kıymet)", tanim: "İpotek alacaklarından oluşturulan havuzun menkul kıymetleştirilmesiyle ihraç edilen araç; mortgage-backed security." },
            { terim: "5582 Sayılı Kanun", tanim: "2007'de yürürlüğe giren konut finansmanı kanunu; ipotekli konut finansmanı sistemini, konut finansmanı kuruluşlarını ve İDMK ihracını düzenler." },
            { terim: "6306 Sayılı Kanun", tanim: "Afet riski altındaki alanların dönüştürülmesini düzenleyen kentsel dönüşüm kanunu; riskli yapı tespiti ve yıkım-yeniden yapım sürecini kapsar." },
            { terim: "Erken Ödeme Tazminatı", tanim: "Krediyi vadesinden önce kapatan borçlunun bankaya ödemesi gereken tazminat; bankanın faiz kaybını telafi etmeye yönelik yasal hak." },
          ],
          dikkatlar: [
            "LTV oranı %80 ile sınırlandırılmıştır; değerin %80'inden fazla kredi kullandırılamaz.",
            "Anüite ödemesinde ilk taksitlerde faiz payı yüksek, son taksitlerde anapara payı yüksektir; toplam ödeme sabit kalır.",
            "İDMK = ipotek alacaklarının menkul kıymetleştirilmesi; 5582 sayılı Kanun bu sistemi mümkün kıldı.",
            "Erken ödemede borçludan tazminat talep edilebilir; bu yasal bir haktır, sözleşmede önceden belirlenir.",
            "6306 Kanunu riskli yapı tespiti yetkisini Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'na verir.",
          ],
        },
        questions: [
          {
            text: "Türkiye'de modern ipotek finansmanı sistemi (konut finansmanı sistemi) hangi yıl ve hangi kanunla kurulmuştur?",
            options: [
              { id: "A", text: "2001 - 4756 sayılı kanun" },
              { id: "B", text: "2007 - 5582 sayılı kanun" },
              { id: "C", text: "2012 - 6362 sayılı kanun" },
              { id: "D", text: "2018 - 7143 sayılı kanun" },
            ],
            correct: "B",
            explanation:
              "5582 sayılı 'Konut Finansmanı Sistemine İlişkin Çeşitli Kanunlarda Değişiklik Yapılması Hakkında Kanun' 21 Şubat 2007'de yürürlüğe girmiştir. Bu kanun ile Türkiye'de modern ipotek finansmanı sistemi (mortgage sistemi) kurulmuştur. Kanunun temel düzenlemeleri: tüketici korumasının güçlendirilmesi (cayma hakkı, sözleşme öncesi bilgilendirme), erken ödeme tazminatı sınırlandırılması, ikincil ipotek piyasasının düzenlenmesi, İpotek Finansmanı Kuruluşlarının (İFK) kurulması, İpoteğe Dayalı Menkul Kıymetler (İDMK) ve Konut Finansmanı Fonlarının düzenlenmesi. Bu kanun Türkiye'de gayrimenkul piyasasının kurumsallaşmasında önemli bir dönüm noktasıdır.",
          },
          {
            text: "Loan-to-Value (LTV) oranı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "LTV = Yıllık faiz / Anapara" },
              { id: "B", text: "LTV = Kredi tutarı / Gayrimenkul değeri; Türkiye'de konut için BDDK düzenlemesiyle %80 (lüks konut/2.konut için %50) gibi sınırlamalar vardır." },
              { id: "C", text: "LTV = Aylık taksit / Aylık gelir" },
              { id: "D", text: "LTV = Vade / Faiz oranı" },
            ],
            correct: "B",
            explanation:
              "LTV (Loan-to-Value) Oranı; konut/gayrimenkul kredilerinin temel risk göstergesidir: Kredi Tutarı / Gayrimenkul Değeri. Yatırımcı tarafının (özsermaye) ne kadar olduğunu gösterir. Türkiye'de BDDK düzenlemesiyle: konut için maksimum %80 (yani 1 milyon TL'lik bir konut için max 800.000 TL kredi), lüks konut ve 2. konut için maksimum %50 (yine 1 milyon TL'lik konut için max 500.000 TL kredi) sınırlandırılmıştır. LTV oranı yüksek olan kredilerde temerrüt riski daha yüksektir; bu nedenle bankalar yüksek LTV'li kredilerde daha fazla teminat veya daha yüksek faiz uygular. ABD subprime krizinde %100'e yakın LTV oranlı krediler büyük rol oynamıştır.",
          },
          {
            text: "İpotek kredilerinin geri ödeme yapısında 'eşit taksitli (anüite)' yöntem için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İlk yıllar daha yüksek, sonraki yıllar daha düşük taksit ödenir." },
              { id: "B", text: "Her ay aynı tutarda taksit ödenir; ancak taksitin içindeki anapara/faiz dağılımı zamanla değişir — başta faiz baskındır, sonradan anapara ağırlık kazanır." },
              { id: "C", text: "Vade sonunda tek bir büyük tutar ödenir." },
              { id: "D", text: "Yalnızca faiz ödenir, anapara ödenmez." },
            ],
            correct: "B",
            explanation:
              "Eşit taksitli (anüite) yöntem; ipotek kredilerinde en yaygın kullanılan geri ödeme yapısıdır. Her ay aynı tutarda taksit ödenir; bu sayede tüketici için ödeme öngörülebilir ve bütçelendirme kolaydır. Ancak sabit taksit içindeki anapara ve faiz dağılımı zamanla değişir: başlangıçta taksitin büyük kısmı faize, küçük kısmı anaparaya gider; vade sonuna doğru bu durum tersine döner — faiz azalır, anapara artar. Bu durum 'amortizasyon tablosu' (taksit planı) ile gösterilir. Anüite formülü: PMT = PV × [r(1+r)^n / ((1+r)^n − 1)] (PMT = aylık taksit, PV = kredi tutarı, r = aylık faiz, n = vade ay sayısı).",
          },
          {
            text: "İpoteğe Dayalı Menkul Kıymetler (İDMK / Mortgage-Backed Securities — MBS) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Doğrudan ev alımı için kullanılan krediler." },
              { id: "B", text: "İpoteklerden oluşan portföyün menkul kıymetleştirilerek yatırımcılara sunulduğu yapılandırılmış ürünlerdir; bankaların kredi portföyünü ikincil piyasaya satmasını sağlar." },
              { id: "C", text: "Yalnızca ticari gayrimenkul yatırımlarında kullanılır." },
              { id: "D", text: "Devlet tarafından çıkarılan tahviller." },
            ],
            correct: "B",
            explanation:
              "İpoteğe Dayalı Menkul Kıymetler (İDMK), Mortgage-Backed Securities (MBS) olarak da bilinir. Bankaların verdiği konut/ticari gayrimenkul ipotek kredileri bir havuzda toplanır ve bu havuza dayalı menkul kıymetler ihraç edilerek yatırımcılara satılır. Bu sayede bankalar likidite kazanır, riski yatırımcılara aktarır ve yeni krediler verebilir hale gelir. Türkiye'de 5582 sayılı kanunla düzenlenmiştir; SPK'nın III-58.1 sayılı Tebliği bu işlemleri detaylı şekilde düzenler. ABD'de subprime krizi (2007-2008) MBS'lerin kötü kalitedeki ipoteklerden oluşan havuzlardan ihraç edilmesi nedeniyle patlak verdi; bu olay menkul kıymetleştirmenin risk yönetimi açısından önemini gösterdi.",
          },
          {
            text: "6306 sayılı 'Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun' (Kentsel Dönüşüm Kanunu) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca yeni yapıların inşası için kullanılır." },
              { id: "B", text: "Riskli yapıların yenilenmesi sürecini düzenler; özel kredi imkanları (düşük faizli, devlet destekli), kira yardımı ve vergi muafiyetleri sağlar; gayrimenkul değerini önemli ölçüde etkiler." },
              { id: "C", text: "Yalnızca İstanbul için geçerlidir." },
              { id: "D", text: "Yalnızca devlete ait gayrimenkulleri kapsar." },
            ],
            correct: "B",
            explanation:
              "6306 sayılı 'Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun' (yaygın olarak Kentsel Dönüşüm Kanunu olarak bilinir, 2012 yılında yürürlüğe girmiştir); deprem ve diğer doğal afet risklerine karşı eski ve riskli yapıların yenilenmesini düzenler. Kanun kapsamındaki destekler: (1) Düşük faizli kredi olanakları (devlet destekli), (2) Kira yardımı (yenileme sürecinde geçici barınma için), (3) KDV, harç ve vergi muafiyetleri/indirimleri, (4) Belediyelerce yapılan plan değişiklikleri. Kentsel dönüşüm gayrimenkul değerini ciddi şekilde etkiler: dönüşümden önce eski yapı düşük değerli, dönüşüm sonrası yeni daire çok daha değerlidir; bu nedenle değerleme uzmanları kentsel dönüşüm potansiyelini değerlendirme raporlarına yansıtır.",
          },
        ],
      },
    ],
  },
];