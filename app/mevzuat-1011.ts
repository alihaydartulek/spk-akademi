/* ─────────────────────────────────────────────────────────────────────────────
 * Türev Araçlar, Piyasalar ve Risk Yönetimi (1011)
 *
 * Kaynak: SPL 1011 Çalışma Notu, 31 Aralık 2025 (173 sayfa)
 * Sınavlar: Türev Araçlar Sınavı
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1003 ve 1009'da türev araçlardan kısaca bahsedilmişti; 1011 ise
 * tamamen türev araçlara odaklanır ve operasyonel detayları (forward, futures,
 * opsiyon, swap, egzotik türevler, risk yönetimi ve fiyatlama) derinlemesine
 * inceler. Çakışma değil derinleştirme niteliğindedir.
 *
 * Kullanım:
 *   import { mevzuat1011 } from "./mevzuat-1011";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1011: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1011 TÜREV ARAÇLAR, PİYASALAR VE RİSK YÖNETİMİ
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1011",
    title: "Modül · Türev Araçlar ve Risk Yönetimi (1011)",
    lessons: [
      // ──────────── Ders 1: Forward ve Futures Sözleşmeleri ────────────
      {
        id: "m1011-l1",
        title: "Forward (Alivre) ve Futures Sözleşmeleri",
        duration: "10 dk",
        summary: {
          title: "Forward ve Futures Sözleşmeleri",
          intro:
            "Vadeli işlem sözleşmeleri, taraflar arasında belirli bir varlığın ileride belirli bir tarih ve fiyat üzerinden alım-satımı için yapılan anlaşmalardır. Forward (alivre) sözleşmeleri tezgâh üstü piyasalarda standart olmadan; futures sözleşmeleri ise organize borsalarda standartlaştırılmış olarak işlem görür. Aralarındaki yapısal farklar karşı taraf riski, takas mekanizması ve teminatlandırma açılarından kritiktir.",
          sections: [
            {
              heading: "Forward Sözleşmelerinin Özellikleri",
              icon: "shield",
              items: [
                {
                  strong: "Tanım:",
                  text: "İki tarafın belirli bir varlığı, gelecekte belirli bir tarihte, bugünden belirlenen fiyat üzerinden alıp-satmayı taahhüt ettiği tezgâh üstü (OTC) sözleşmedir; standart yoktur.",
                },
                {
                  strong: "Esnek Yapı:",
                  text: "Miktar, vade, dayanak varlık ve fiyat tarafların serbest iradesiyle belirlenir; özelleştirilmiş ihtiyaçlar (özel vade, miktar) için idealdir.",
                },
                {
                  strong: "Karşı Taraf Riski:",
                  text: "Forward'larda takas merkezi olmadığı için tarafların yükümlülüklerini yerine getirmeme (temerrüt) riski yüksektir; bu nedenle güvenilir karşı taraf seçimi kritiktir.",
                },
                {
                  strong: "Teslimat ve Netleştirme:",
                  text: "Vadesinde fiziksel teslimat veya nakdi netleştirme (cash settlement) ile sonlandırılır; çoğu ticari forward fiziksel teslimle, finansal forward'lar netleştirme ile kapanır.",
                },
                {
                  strong: "Türkiye'de Kullanım:",
                  text: "İhracatçılar ve ithalatçılar kur riskini yönetmek için bankalarla TL/USD veya TL/EUR forward işlemleri yapar; faiz oranı forward'ları (FRA) da yaygındır.",
                },
              ],
            },
            {
              heading: "Futures Sözleşmeleri ve Teminatlandırma",
              icon: "trend",
              items: [
                {
                  strong: "Tanım ve Standartlaştırma:",
                  text: "Forward'ın organize borsa versiyonu olan futures'ta; sözleşme büyüklüğü, vade ve dayanak varlık standartlaştırılmıştır; tarafların serbestliği yoktur.",
                },
                {
                  strong: "Takas Merkezi:",
                  text: "Türkiye'de Takasbank merkezi karşı taraf (CCP) olarak işlem yapar; alıcı için satıcı, satıcı için alıcı pozisyonuna geçer ve karşı taraf riskini sıfırlar.",
                },
                {
                  strong: "Başlangıç Teminatı:",
                  text: "Pozisyon açılırken yatırılan teminattır; takas merkezi tarafından sözleşme türüne ve dayanak varlığa göre belirlenir, fiyat dalgalanmalarına göre güncellenir.",
                },
                {
                  strong: "Sürdürme Teminatı ve Margin Call:",
                  text: "Sürdürme teminatı pozisyonun korunması için gereken minimum tutardır; teminat bunun altına düşerse 'teminat tamamlama çağrısı' (margin call) yapılır, yatırımcı 1-2 iş günü içinde tamamlamalıdır.",
                },
                {
                  strong: "Günlük Uzlaşma (Mark-to-Market):",
                  text: "Pozisyonların kâr-zararı her işlem günü sonu hesaplanıp teminat hesabına yansıtılır; bu sayede kayıplar birikmez ve sistemik risk kontrol altında tutulur.",
                },
              ],
            },
          ],
          tip: "Forward = OTC + standart yok + karşı taraf riski yüksek; Futures = borsa + standart + CCP + teminat sistemi. Üç temel teminat kavramı: başlangıç (pozisyon açma), sürdürme (minimum), tamamlama (margin call). Türkiye'de futures = VİOP, CCP = Takasbank — bunlar sınavın klasik soru kalıbıdır.",
          kavramlar: [
            { terim: "Forward Sözleşmesi", tanim: "İki taraf arasında OTC olarak standart olmayan koşullarla yapılan; ileriki tarihte belirli fiyattan teslimatı öngören vadeli sözleşme." },
            { terim: "Futures Sözleşmesi", tanim: "Organize borsada (VİOP) işlem gören, standartlaştırılmış vadeli sözleşme; Takasbank CCP olarak karşı taraf riskini üstlenir." },
            { terim: "Başlangıç Teminatı", tanim: "Futures pozisyonu açmak için yatırılan asgari teminat; piyasa değerine göre günlük güncellenir." },
            { terim: "Sürdürme Teminatı", tanim: "Pozisyon açık olduğu sürece hesapta tutulması gereken asgari teminat düzeyi; altına düşülünce tamamlama çağrısı gelir." },
            { terim: "Teminat Tamamlama Çağrısı (Margin Call)", tanim: "Hesaptaki teminatın sürdürme düzeyinin altına düşmesi durumunda aracı kurumun ek teminat talep etmesi." },
            { terim: "Günlük Uzlaşma (Mark-to-Market)", tanim: "Futures pozisyonlarının her gün kapanış fiyatına göre değerlenerek kâr/zararın teminat hesabına yansıtılması." },
            { terim: "Teslimat Yükümlülüğü", tanim: "Futures sözleşmesinde vade sonunda dayanak varlığın fiziki teslim edilmesi veya nakit uzlaşmayla pozisyonun kapatılması." },
          ],
          dikkatlar: [
            "Forward OTC + standart değil + karşı taraf riski taraflarda; Futures borsa + standart + Takasbank (CCP) karşı taraf riskini üstlenir — bu temel ayrım türev araçların 1 numaralı soru kalıbıdır.",
            "Teminat sıralaması: başlangıç (pozisyon açma) > sürdürme (minimum düzey) → altına düşünce tamamlama çağrısı.",
            "Günlük uzlaşma (mark-to-market) futures'a özgüdür; forward'da günlük teminat güncellemesi yoktur.",
            "Türkiye'de organize vadeli borsa = VİOP; merkezi karşı taraf = Takasbank — 'İMKB' veya 'SPK' seçenekleri yanıltıcıdır.",
            "Fiziki teslimat tüm futures sözleşmelerinde zorunlu değildir; pay ve endeks sözleşmelerinde nakit uzlaşma yapılır.",
          ],
        },
        questions: [
          {
            text: "Forward (alivre) sözleşmelerinin futures sözleşmelerinden temel farkı aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Forward'da takas merkezi vardır." },
              { id: "B", text: "Forward standart olmayan, tezgâh üstü (OTC) sözleşmedir; karşı taraf riski yüksek olup miktar, vade ve fiyat tarafların iradesine bağlıdır. Futures ise organize borsada işlem gören standartlaştırılmış sözleşmedir." },
              { id: "C", text: "Forward yalnızca dövizlerde, futures yalnızca emtialarda kullanılır." },
              { id: "D", text: "Futures yalnızca nitelikli yatırımcılara açıktır." },
            ],
            correct: "B",
            explanation:
              "Forward sözleşmeleri tezgâh üstü (OTC) piyasalarda taraflar arasında doğrudan yapılan, miktar/vade/fiyatın serbestçe belirlendiği sözleşmelerdir; takas merkezi yoktur, karşı taraf riski yüksektir. Futures sözleşmeleri ise organize borsada (Türkiye'de VİOP) işlem gören, sözleşme büyüklüğü ve vade gibi şartları standartlaştırılmış sözleşmelerdir; merkezi takas (Takasbank) ile karşı taraf riski sıfırlanır.",
          },
          {
            text: "Futures piyasalarında 'günlük uzlaşma' (mark-to-market) sisteminin amacı nedir?",
            options: [
              { id: "A", text: "Yatırımcıların komisyon ödemelerini düşürmek" },
              { id: "B", text: "Pozisyonların kâr-zararını her işlem günü sonu hesaplayıp teminat hesabına yansıtarak kayıpların birikmesini önlemek; sistemik riski kontrol altında tutmak." },
              { id: "C", text: "Vade sonunda fiziksel teslimi zorunlu kılmak" },
              { id: "D", text: "İşlem hacmini sınırlamak" },
            ],
            correct: "B",
            explanation:
              "Günlük uzlaşma (mark-to-market) sistemi; tüm açık pozisyonların kâr veya zararını her işlem günü sonunda hesaplayıp teminat hesabına yansıtan mekanizmadır. Bu sayede kayıplar birikmez ve takas merkezi (Takasbank) için sistemik risk önlenir. Yatırımcının teminatı sürdürme teminatının altına düşerse 'teminat tamamlama çağrısı' (margin call) gönderilir.",
          },
          {
            text: "Futures sözleşmelerinde 'sürdürme teminatı' kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Pozisyon açılırken yatırılması gereken başlangıç tutarıdır." },
              { id: "B", text: "Pozisyonun korunması için teminatın altına düşmemesi gereken minimum tutardır; bu seviyenin altına inildiğinde teminat tamamlama çağrısı (margin call) yapılır." },
              { id: "C", text: "Vade sonunda ödenecek tutardır." },
              { id: "D", text: "Komisyon ücretidir." },
            ],
            correct: "B",
            explanation:
              "Futures piyasalarında üç temel teminat kavramı vardır: (1) Başlangıç teminatı — pozisyon açılırken yatırılan tutar, (2) Sürdürme teminatı — pozisyonun korunması için minimum tutar, genelde başlangıç teminatından düşüktür, (3) Teminat tamamlama çağrısı (margin call) — günlük uzlaşma sonucu teminat sürdürme seviyesinin altına düştüğünde yatırımcıdan teminatın başlangıç seviyesine tamamlanması istenir; aksi halde pozisyon zorla kapatılabilir.",
          },
          {
            text: "Türkiye'de futures sözleşmelerinin işlem gördüğü piyasa ve takas merkezi aşağıdakilerden hangisinde DOĞRU olarak verilmiştir?",
            options: [
              { id: "A", text: "Pay Piyasası — MKK" },
              { id: "B", text: "Borçlanma Araçları Piyasası — TCMB" },
              { id: "C", text: "Vadeli İşlem ve Opsiyon Piyasası (VİOP) — Takasbank" },
              { id: "D", text: "Para Piyasası — BDDK" },
            ],
            correct: "C",
            explanation:
              "Türkiye'de organize türev piyasası BİAŞ Vadeli İşlem ve Opsiyon Piyasası'dır (VİOP). Takasbank ise VİOP'ta merkezi karşı taraf (CCP) olarak işlev görür: her işlemde alıcı için satıcı, satıcı için alıcı pozisyonuna geçerek karşı taraf riskini sıfırlar. Ayrıca günlük uzlaşma, teminat yönetimi ve marjin call süreçlerinden sorumludur.",
          },
          {
            text: "Bir ihracatçı 3 ay sonra 1 milyon USD tahsilat yapacaktır. Türk Lirasının değer kazanmasından korunmak için hangi forward işlemini yapmalıdır?",
            options: [
              { id: "A", text: "USD alım forwardı (long position)" },
              { id: "B", text: "USD satım forwardı (short position) — bugünden belirlediği kurla 3 ay sonra dolarını TL'ye çevirme garantisi alır." },
              { id: "C", text: "Forward yapmaya gerek yoktur." },
              { id: "D", text: "EUR alım forwardı" },
            ],
            correct: "B",
            explanation:
              "İhracatçı 3 ay sonra USD tahsilat alacak ve TL'ye çevirmek isteyecektir. Eğer bu sürede TL değer kazanırsa (USD/TL kuru düşerse) USD'yi daha az TL ile değişmek zorunda kalır, gelir kaybı yaşar. Bunu önlemek için 'USD satım forwardı' yapmalıdır: bugünden belirlenen kurla 3 ay sonra dolarını TL'ye çevirme garantisi alır. İthalatçının durumu ise tam tersidir — kur yükselişinden korunmak için 'USD alım forwardı' yapar.",
          },
        ],
      },
      // ──────────── Ders 2: Opsiyonlar ────────────
      {
        id: "m1011-l2",
        title: "Opsiyonlar — Çeşitler, Pozisyonlar ve Fiyatlama Faktörleri",
        duration: "10 dk",
        summary: {
          title: "Opsiyonlar",
          intro:
            "Opsiyon; sahibine dayanak varlığı belirli bir fiyattan (kullanım fiyatı/strike) belirli bir tarihe kadar alma (call/alım) veya satma (put/satım) HAKKI veren ancak yükümlülük getirmeyen finansal sözleşmedir. Opsiyon alıcısı bu hakkı satın almak için 'opsiyon primi' öder; opsiyon satıcısı (yazıcı/writer) ise prim karşılığında alıcının opsiyonu kullanması durumunda dayanak varlığı teslim/satın alma yükümlülüğü altına girer.",
          sections: [
            {
              heading: "Opsiyon Çeşitleri ve Pozisyonlar",
              icon: "shield",
              items: [
                {
                  strong: "Alım (Call) Opsiyonu:",
                  text: "Alıcısına, dayanak varlığı kullanım fiyatından satın alma hakkı verir; dayanak varlığın yükselmesini bekleyen yatırımcılar tarafından tercih edilir.",
                },
                {
                  strong: "Satım (Put) Opsiyonu:",
                  text: "Alıcısına, dayanak varlığı kullanım fiyatından satma hakkı verir; dayanak varlığın düşmesini bekleyen yatırımcılar veya hedge yapanlar tarafından kullanılır.",
                },
                {
                  strong: "Avrupa ve Amerikan Tipi:",
                  text: "Avrupa tipi opsiyon yalnızca vade sonunda kullanılabilir; Amerikan tipi vade içinde herhangi bir gün kullanılabilir, daha esnek olduğu için genellikle daha yüksek prim taşır.",
                },
                {
                  strong: "Uzun ve Kısa Pozisyon:",
                  text: "Uzun pozisyon = opsiyonu satın almak (alıcı/holder), prim öder; kısa pozisyon = opsiyon satmak (yazıcı/writer), prim alır ve yükümlülük üstlenir.",
                },
                {
                  strong: "Pozisyon Durumu:",
                  text: "Karda (in-the-money/ITM) — kullanılması yatırımcıya kâr sağlayan; Başabaşta (at-the-money/ATM) — kullanım fiyatı = piyasa fiyatı; Zararda (out-of-the-money/OTM) — kullanılması zarar getirir.",
                },
              ],
            },
            {
              heading: "Opsiyon Fiyatını Etkileyen Faktörler",
              icon: "trend",
              items: [
                {
                  strong: "Dayanak Varlığın Spot Fiyatı (S):",
                  text: "Dayanak varlığın güncel piyasa fiyatı; spot fiyat yükseldikçe call opsiyon değeri artar, put opsiyon değeri düşer.",
                },
                {
                  strong: "Kullanım Fiyatı (K):",
                  text: "Opsiyonun işleme konabileceği fiyat; call'da düşük kullanım fiyatı, put'ta yüksek kullanım fiyatı opsiyon değerini artırır.",
                },
                {
                  strong: "Vadeye Kalan Süre (T):",
                  text: "Vade ne kadar uzaksa belirsizlik o kadar fazladır; bu nedenle hem call hem de put opsiyonun zaman değeri artar; vade yaklaştıkça zaman değeri sıfıra iner.",
                },
                {
                  strong: "Volatilite (σ):",
                  text: "Dayanak varlığın oynaklığı arttıkça opsiyonların değeri yükselir; çünkü yüksek volatilite hem büyük kâr hem de büyük zarar potansiyelini artırır, ancak opsiyon alıcısının zararı prim ile sınırlıdır.",
                },
                {
                  strong: "Risksiz Faiz Oranı (r):",
                  text: "Faiz oranı yükseldiğinde call opsiyon değeri artar (gelecekte ödenecek kullanım fiyatının bugünkü değeri düşer); put opsiyon değeri ise düşer.",
                },
              ],
            },
          ],
          tip: "Opsiyon = HAKK ama yükümlülük YOK. Alıcı (long) hak sahibi, satıcı (short/writer) yükümlü. ITM = karda, ATM = başabaş, OTM = zararda. Beş fiyatlama faktörü: S, K, T, σ, r — Black-Scholes modelinin de girdileridir. Volatilite arttıkça hem call hem put değerlenir — sınavın klasik tuzağı.",
          kavramlar: [
            { terim: "Alım Opsiyonu (Call)", tanim: "Sahibine dayanak varlığı kullanım fiyatından satın alma HAKKI veren opsiyon; satıcı ise bu fiyattan satmak YÜKÜMLÜLÜĞÜNDEDIR." },
            { terim: "Satım Opsiyonu (Put)", tanim: "Sahibine dayanak varlığı kullanım fiyatından satma HAKKI veren opsiyon; satıcı ise bu fiyattan almak YÜKÜMLÜLÜĞÜNDEDIR." },
            { terim: "Karda (In-the-Money / ITM)", tanim: "Call için piyasa fiyatı > kullanım fiyatı; Put için piyasa fiyatı < kullanım fiyatı olan, hemen kullanılırsa kâr sağlayan durum." },
            { terim: "Para Başı (At-the-Money / ATM)", tanim: "Piyasa fiyatı ile kullanım fiyatının eşit olduğu, kullanıma nötr olan opsiyon durumu." },
            { terim: "Zararda (Out-of-the-Money / OTM)", tanim: "Hemen kullanılırsa zarara yol açan opsiyon durumu; Call için piyasa < kullanım, Put için piyasa > kullanım." },
            { terim: "Volatilite (σ)", tanim: "Dayanak varlık fiyatının dalgalanma oranı; arttığında hem call hem put değerini yükseltir — yüksek belirsizlik yüksek opsiyon değeri demektir." },
            { terim: "Black-Scholes Modeli", tanim: "Avrupa tipi opsiyonların teorik değerini beş girdiye (S, K, T, σ, r) göre hesaplayan en yaygın opsiyon fiyatlama modeli." },
          ],
          dikkatlar: [
            "Opsiyon alıcısı hak sahibidir ve kullanmak zorunda değildir; maksimum kaybı ödediği primdir. Satıcı yükümlüdür; alıcı kullanırsa yerine getirmek zorundadır.",
            "ITM = karda, ATM = başabaş, OTM = zararda — Call ve Put için yönler farklıdır: Call'da fiyat kullanım üstünde ITM, Put'ta kullanım üstünde OTM.",
            "Volatilite arttıkça hem call hem put değerini YÜKSELTİR; 'put değer kaybeder' yanıltıcıdır — belirsizlik her iki tarafa da yarar.",
            "Opsiyon fiyatlama faktörleri: S (spot fiyat), K (kullanım fiyatı), T (vadeye kalan süre), σ (volatilite), r (risksiz faiz) — Black-Scholes'ün 5 girdisi.",
            "Avrupa tipi opsiyon yalnızca vadede kullanılabilir; Amerikan tipi her zaman kullanılabilir — daha fazla esneklik Amerikan tipini daha değerli kılar.",
          ],
        },
        questions: [
          {
            text: "Bir 'alım (call) opsiyonu' alıcısı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Dayanak varlığı kullanım fiyatından satma yükümlülüğü altındadır." },
              { id: "B", text: "Dayanak varlığı kullanım fiyatından satın alma HAKKINA sahiptir; bu hakkı kullanmaya zorlanamaz, prim ödemiştir." },
              { id: "C", text: "Hem alma hem satma yükümlülüğü altındadır." },
              { id: "D", text: "Prim alır." },
            ],
            correct: "B",
            explanation:
              "Alım (call) opsiyonu alıcısı (long position), dayanak varlığı belirli kullanım fiyatından satın alma HAKKINA sahiptir; ancak bu hakkı kullanmaya zorlanamaz. Karşılığında 'opsiyon primi' öder. Opsiyonu satan (yazıcı/writer) ise prim alır ve alıcının kullanması durumunda dayanak varlığı teslim etme YÜKÜMLÜLÜĞÜ altına girer. Asimetrik risk yapısı opsiyonun temel özelliğidir.",
          },
          {
            text: "Avrupa tipi opsiyon ile Amerikan tipi opsiyon arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Avrupa tipi yalnızca Avrupa borsalarında, Amerikan tipi yalnızca ABD borsalarında işlem görür." },
              { id: "B", text: "Avrupa tipi yalnızca vade sonunda, Amerikan tipi vade içinde herhangi bir gün kullanılabilir; Amerikan tipi daha esnek olduğu için genellikle daha yüksek prim taşır." },
              { id: "C", text: "Avrupa tipi yalnızca alım (call), Amerikan tipi yalnızca satım (put) opsiyonu olabilir." },
              { id: "D", text: "İki tip arasında matematiksel fark yoktur." },
            ],
            correct: "B",
            explanation:
              "Avrupa tipi opsiyon yalnızca vade sonunda (expiry date) kullanılabilirken, Amerikan tipi opsiyon vade içinde herhangi bir iş gününde kullanılabilir. Amerikan tipi daha esnek olduğu için aynı koşullarda genellikle Avrupa tipinden daha yüksek prim taşır. İsimleri kıtalarla değil, kullanım esnekliğiyle ilgilidir; her iki tip de tüm dünya borsalarında işlem görebilir.",
          },
          {
            text: "Opsiyon fiyatını etkileyen 'volatilite' faktörü için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Volatilite arttıkça yalnızca call opsiyon değeri artar." },
              { id: "B", text: "Volatilite arttıkça yalnızca put opsiyon değeri artar." },
              { id: "C", text: "Dayanak varlığın volatilitesi arttıkça hem call hem put opsiyonun değeri yükselir; çünkü yüksek volatilite büyük kâr ve büyük zarar potansiyelini artırır, ancak opsiyon alıcısının zararı prim ile sınırlıdır." },
              { id: "D", text: "Volatilitenin opsiyon fiyatına etkisi yoktur." },
            ],
            correct: "C",
            explanation:
              "Volatilite, dayanak varlığın fiyat hareketlerinin standart sapmasıdır. Hem call hem put opsiyon için volatilite arttıkça opsiyon değeri yükselir. Mantık şudur: opsiyon alıcısının zararı en kötü ihtimalle prim kadardır (sınırlı), ancak kâr potansiyeli teorik olarak sınırsızdır. Yüksek volatilite büyük fiyat hareketleri olasılığını artırır, dolayısıyla 'büyük kâr' ihtimali yükselir. Bu nedenle volatilite Black-Scholes modelinin en kritik girdilerinden biridir.",
          },
          {
            text: "Bir opsiyon için kullanım fiyatı 50 TL, dayanak varlığın spot fiyatı 60 TL ise alım (call) opsiyonunun pozisyon durumu nedir?",
            options: [
              { id: "A", text: "Karda (in-the-money/ITM)" },
              { id: "B", text: "Başabaşta (at-the-money/ATM)" },
              { id: "C", text: "Zararda (out-of-the-money/OTM)" },
              { id: "D", text: "Belirsiz" },
            ],
            correct: "A",
            explanation:
              "Bir alım (call) opsiyonu için: spot fiyat (S) > kullanım fiyatı (K) ise opsiyon 'karda' (ITM), S = K ise 'başabaşta' (ATM), S < K ise 'zararda' (OTM) durumdadır. Bu örnekte S=60 > K=50 olduğundan opsiyon ITM'dir; alıcı opsiyonu kullanırsa varlığı 50 TL'den alıp piyasada 60 TL'den satabilir, prim hariç 10 TL kâr eder. Satım (put) opsiyonunda ise tam tersi geçerlidir: S < K ise ITM olur.",
          },
          {
            text: "Opsiyon yazıcısı (satıcısı) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca prim öder." },
              { id: "B", text: "Prim alır ve karşılığında alıcının opsiyonu kullanması durumunda dayanak varlığı teslim etme/alma yükümlülüğü altına girer; teorik zararı sınırsızdır (özellikle 'çıplak' yazılı call'da)." },
              { id: "C", text: "Hem prim alır hem de hak sahibidir." },
              { id: "D", text: "Yalnızca borsalarda satış yapabilir." },
            ],
            correct: "B",
            explanation:
              "Opsiyon yazıcısı (writer/short position) opsiyonu satan taraftır; karşılığında prim alır. Alıcının opsiyonu kullanması durumunda dayanak varlığı kullanım fiyatından teslim etmek (call'da) veya satın almak (put'ta) yükümlülüğü altındadır. Yazıcının kâr potansiyeli prim ile sınırlıdır, ancak zarar potansiyeli teorik olarak sınırsızdır (özellikle dayanak varlığı tutmadan yapılan 'çıplak' (naked) call yazımında). Bu asimetrik yapı, yazıcılığın yüksek riskli bir strateji olduğunu gösterir.",
          },
        ],
      },
      // ──────────── Ders 3: Swap Anlaşmaları ────────────
      {
        id: "m1011-l3",
        title: "Swap (Değişim) Anlaşmaları — Faiz ve Döviz Swapları",
        duration: "9 dk",
        summary: {
          title: "Swap Anlaşmaları",
          intro:
            "Swap (değişim) anlaşması; iki tarafın belirli bir süre boyunca, önceden belirlenen kurallar çerçevesinde nakit akışlarını değiştirdikleri tezgâh üstü türev sözleşmesidir. En yaygın iki türü 'Faiz Swapı' (IRS — Interest Rate Swap) ve 'Döviz Swapı' (Currency Swap) olup; faiz swapı genellikle değişken-sabit faiz takası olarak yapılırken, döviz swapı farklı para birimleri arasında anapara ve faiz akışlarının takası şeklinde gerçekleşir.",
          sections: [
            {
              heading: "Faiz Swapı (Interest Rate Swap)",
              icon: "shield",
              items: [
                {
                  strong: "Tanım:",
                  text: "İki tarafın aynı anapara üzerinden farklı faiz yapılarına dayanan nakit akışlarını değiştirdiği swap; en yaygın türü 'plain vanilla' (sade) faiz swapıdır — bir taraf sabit faiz öder, karşı taraf değişken faiz öder.",
                },
                {
                  strong: "Anapara El Değiştirmez:",
                  text: "Faiz swapında anapara fiilen el değiştirmez; yalnızca tarafların ödeme yükümlülükleri netleştirilerek farkı gösteren taraf fark kadar ödeme yapar (netting).",
                },
                {
                  strong: "Karşılaştırmalı Üstünlük:",
                  text: "Tarafların farklı piyasalarda farklı borçlanma maliyetleri vardır; her taraf nispeten avantajlı olduğu piyasadan borçlanıp swap ile tercih ettiği faiz yapısına geçer, böylece her ikisi de toplam maliyetini düşürür.",
                },
                {
                  strong: "Kullanım Amaçları:",
                  text: "Faiz riskinden korunma (hedging), aktif-pasif yönetimi (banka), spekülasyon ve finansman maliyetinin düşürülmesi temel kullanım amaçlarıdır.",
                },
                {
                  strong: "Değerleme:",
                  text: "Faiz swapının değeri = sabit faizli bonun değeri − değişken faizli bonun değeri; sözleşme başında tarafların değişimi adil olduğundan swap değeri sıfırdır, vade ilerledikçe faiz hareketlerine bağlı olarak değişir.",
                },
              ],
            },
            {
              heading: "Döviz Swapı (Currency Swap)",
              icon: "trend",
              items: [
                {
                  strong: "Tanım:",
                  text: "İki tarafın farklı para birimlerinden anapara ve buna ilişkin faiz akışlarını belirli bir süre boyunca takas ettiği sözleşmedir; faiz swapından farklı olarak anapara fiilen el değiştirir.",
                },
                {
                  strong: "Üç Aşama:",
                  text: "(1) Sözleşme başında anaparalar değişilir, (2) Vade boyunca taraflar diğerinin para biriminde faiz öder, (3) Vade sonunda anaparalar başlangıç kurundan tekrar değişilir.",
                },
                {
                  strong: "Tipleri:",
                  text: "Sabit-sabit döviz swapı (her iki tarafın sabit faiz ödediği), sabit-değişken (faiz formatı farklı), değişken-değişken (her iki tarafın da değişken faiz ödediği — 'basis swap' olarak da bilinir).",
                },
                {
                  strong: "Kullanım Alanları:",
                  text: "Yabancı para borçlanma maliyetlerini düşürme, döviz kuru riskinden korunma, uluslararası nakit akış yönetimi; özellikle çok uluslu firmalar tarafından yaygın kullanılır.",
                },
                {
                  strong: "Türkiye'de Swap Piyasası:",
                  text: "BİAŞ Swap Piyasası iki alt pazardan oluşur: Para Swap Pazarı (TL-döviz) ve Kıymetli Madenler Swap Pazarı (TL-altın); bankalar arası kısa vadeli likidite yönetiminde kritik öneme sahiptir.",
                },
              ],
            },
          ],
          tip: "Faiz swapında anapara el DEĞİŞTİRMEZ — sadece netleştirme yapılır. Döviz swapında anapara fiilen el DEĞİŞTİR — sözleşme başı ve sonunda. Karşılaştırmalı üstünlük teorisi swap'ın temel mantığıdır: her taraf avantajlı olduğu piyasadan borçlanıp swap ile tercih ettiği yapıya geçer.",
          kavramlar: [
            { terim: "Faiz Swapı (IRS)", tanim: "Bir tarafın sabit faiz ödemesi karşılığında diğer tarafın değişken faiz ödediği anlaşma; anapara el değiştirmez, yalnızca fark netleştirilir." },
            { terim: "Döviz Swapı (CCS)", tanim: "İki tarafın farklı para birimlerinde anapara ve faiz ödemelerini değiştirdiği anlaşma; sözleşme başı ve sonunda anapara fiziken el değiştirir." },
            { terim: "Netleştirme (Netting)", tanim: "Faiz swapında iki tarafın birbirine olan ödeme yükümlülüklerinin netleştirilmesi; yalnızca fark tutarı ödenir." },
            { terim: "Karşılaştırmalı Üstünlük ve Swap", tanim: "Her tarafın göreli avantajına sahip olduğu piyasadan borçlanıp swap ile tercih ettiği yapıya geçmesi; karşılıklı faiz tasarrufu sağlar." },
            { terim: "Sabit/Değişken Faiz Dönüşümü", tanim: "Faiz swapının en yaygın amacı; değişken faizli borç taşıyan firma sabit faiz ödeyerek kur/faiz riskini azaltır." },
            { terim: "Bazis (Basis) Riski", tanim: "Swap'ta kullanılan değişken faiz göstergesinin (örn. LIBOR) ile firmanın borçlandığı oranın tam örtüşmemesinden doğan artık risk." },
            { terim: "Tezgah Üstü Swap", tanim: "Büyük çoğunluğu organize borsa dışında, bankalar ve kurumsal taraflar arasında ikili sözleşmeyle yapılan swap işlemi." },
          ],
          dikkatlar: [
            "Faiz swapında ANAPARA EL DEĞİŞTİRMEZ; yalnızca faiz farkı netleştirilir — 'anapara da değişir' ifadesi yanlıştır.",
            "Döviz swapında ise sözleşme başında ve sonunda anapara fiilen el DEĞİŞTİRİR; bu faiz swapından temel farkıdır.",
            "Karşılaştırmalı üstünlük teorisi swap mantığını açıklar: her taraf avantajlı borçlanma piyasasına gidip swap ile tercih ettiği para/faiz yapısına geçer.",
            "Sabit faiz ödeyen swap tarafı faiz yükselince kazanır (değişken yerine sabit ödüyor); değişken faiz ödeyen taraf faiz düşünce kazanır.",
            "Swap OTC işlemdir ve standart değildir; ancak 2008 krizinden sonra bazı standart swaplar merkezi takas (CCP) aracılığıyla işleme konulmaktadır.",
          ],
        },
        questions: [
          {
            text: "Faiz swapı (Interest Rate Swap) ile döviz swapı (Currency Swap) arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Faiz swapında anapara fiilen el değiştirir, döviz swapında değişmez." },
              { id: "B", text: "Faiz swapında anapara fiilen el değiştirmez, yalnızca faiz farkları netleştirilir; döviz swapında anapara hem başlangıçta hem vade sonunda fiilen el değiştirir." },
              { id: "C", text: "İkisi arasında fark yoktur." },
              { id: "D", text: "Faiz swapı yalnızca bankalararası, döviz swapı yalnızca tezgâh üstü piyasada yapılır." },
            ],
            correct: "B",
            explanation:
              "Faiz swapı ile döviz swapı arasındaki temel yapısal fark anaparanın el değiştirip değiştirmemesidir. Faiz swapında her iki taraf da aynı para birimi cinsinden ödeme yaptığı için anapara fiilen el değiştirmez; sadece dönemsel faiz ödemelerinin netleştirilmesi sonucu fark ödemesi yapılır. Döviz swapında ise farklı para birimleri olduğu için anapara hem sözleşme başında hem de vade sonunda fiilen el değiştirir.",
          },
          {
            text: "Faiz swapında 'plain vanilla' (sade) yapı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Her iki taraf da sabit faiz öder." },
              { id: "B", text: "Bir taraf sabit faiz öder ve değişken faiz alır; karşı taraf değişken faiz öder ve sabit faiz alır." },
              { id: "C", text: "Her iki taraf da değişken faiz öder." },
              { id: "D", text: "Anapara sözleşme başında el değiştirir." },
            ],
            correct: "B",
            explanation:
              "Plain vanilla (sade) faiz swapı; bir tarafın sabit faiz ödediği ve değişken faiz aldığı, diğer tarafın ise değişken faiz ödeyip sabit faiz aldığı en yaygın faiz swapı türüdür. Genellikle değişken faiz olarak referans gösterge faiz oranları (TLREF, EURIBOR, SOFR vb.) kullanılır. Bu yapı tarafların farklı faiz risklerini değiştirmesini, böylece kendi tercihlerine uygun faiz yapısına geçmesini sağlar.",
          },
          {
            text: "Swap kontratının temel mantığı olan 'karşılaştırmalı üstünlük' kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Her iki tarafın da aynı borçlanma maliyetine sahip olması" },
              { id: "B", text: "Tarafların farklı piyasalarda farklı borçlanma maliyetleri vardır; her taraf nispeten avantajlı olduğu piyasadan borçlanıp swap ile tercih ettiği faiz yapısına geçerek toplam maliyetini düşürür." },
              { id: "C", text: "Yalnızca büyük firmaların swap yapabilmesi" },
              { id: "D", text: "Swap'ın yalnızca spekülasyon amacıyla kullanılması" },
            ],
            correct: "B",
            explanation:
              "Karşılaştırmalı üstünlük (David Ricardo'nun uluslararası ticaret teorisinin uyarlaması), swap kontratlarının ekonomik mantığıdır. Tarafların farklı piyasalarda farklı borçlanma maliyetleri olabilir; örneğin A firması sabit faizli piyasada nispeten avantajlı, B firması değişken faizli piyasada avantajlıdır. Her iki firma da nispeten avantajlı olduğu piyasadan borçlanıp swap aracılığıyla tercih ettiği faiz yapısına geçerse, ikisi de bireysel olarak doğrudan ulaşamayacakları daha düşük toplam maliyete erişir.",
          },
          {
            text: "Döviz swapının üç temel aşaması aşağıdakilerden hangisinde DOĞRU sırayla verilmiştir?",
            options: [
              { id: "A", text: "Faiz ödemesi → Anapara değişimi → Faiz ödemesi" },
              { id: "B", text: "(1) Sözleşme başında anaparalar değişilir, (2) Vade boyunca taraflar diğerinin para biriminde faiz öder, (3) Vade sonunda anaparalar başlangıç kurundan tekrar değişilir." },
              { id: "C", text: "Sadece vade sonunda netleştirme yapılır." },
              { id: "D", text: "Yalnızca sözleşme başında bir kez ödeme yapılır." },
            ],
            correct: "B",
            explanation:
              "Döviz swapı üç aşamalı bir yapıya sahiptir: (1) Sözleşmenin başında tarafların belirledikleri kurdan anaparalar fiilen el değiştirilir, (2) Vade boyunca her taraf diğerinin para birimi cinsinden faiz ödemeleri yapar (sabit veya değişken), (3) Vade sonunda anaparalar başlangıçta belirlenen kurdan tekrar değiştirilir. Bu yapı, hem döviz kuru riskini hem de faiz oranı farkını yöneten kapsamlı bir hedge aracıdır.",
          },
          {
            text: "BİAŞ Swap Piyasası bünyesindeki pazarlar aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Yalnızca Para Swap Pazarı" },
              { id: "B", text: "Para Swap Pazarı (TL-döviz) ve Kıymetli Madenler Swap Pazarı (TL-altın)" },
              { id: "C", text: "Yalnızca Faiz Swap Pazarı" },
              { id: "D", text: "Pay Senedi Swap Pazarı ve Tahvil Swap Pazarı" },
            ],
            correct: "B",
            explanation:
              "BİAŞ Swap Piyasası iki alt pazardan oluşur: (1) Para Swap Pazarı — TL ile döviz (USD, EUR vb.) arasında belirli süre boyunca yapılan swap işlemleri için, (2) Kıymetli Madenler Swap Pazarı — TL ile altın arasında yapılan swap işlemleri için. Bu pazarlarda tarafların belirli vade boyunca varlık değiştirip vade sonunda iade etme esası uygulanır; bankaların likidite ve yabancı para yönetimi için kritik bir altyapı sağlar.",
          },
        ],
      },
      // ──────────── Ders 4: Türev Araçların Risk Yönetiminde Kullanımı ────────────
      {
        id: "m1011-l4",
        title: "Türev Araçların Risk Yönetiminde Kullanımı (Hedging)",
        duration: "10 dk",
        summary: {
          title: "Türev Araçlarla Risk Yönetimi",
          intro:
            "Türev araçların temel ekonomik fonksiyonlarından biri risk yönetimidir (hedging). Yatırımcılar, ihracatçılar, ithalatçılar ve portföy yöneticileri kur riski, faiz riski ve fiyat riski gibi piyasa risklerine karşı türev ürünleri kullanarak korunma sağlar. Hedging, riski tamamen ortadan kaldırmaz ancak öngörülebilir hale getirir; karşı tarafın spekülasyon amaçlı yaptığı işlem, hedge yapanın koruma sağlamasını mümkün kılar.",
          sections: [
            {
              heading: "Kur Riski Yönetimi (Forex Hedging)",
              icon: "shield",
              items: [
                {
                  strong: "İhracatçı Kur Riski:",
                  text: "İleride döviz tahsilatı bekleyen ihracatçı, TL'nin değer kazanmasından zarar görür; korunma için 'döviz satım forwardı' veya 'döviz futures kısa pozisyonu' alır.",
                },
                {
                  strong: "İthalatçı Kur Riski:",
                  text: "İleride döviz ödemesi yapacak ithalatçı, TL'nin değer kaybetmesinden zarar görür; korunma için 'döviz alım forwardı' veya 'döviz futures uzun pozisyonu' alır.",
                },
                {
                  strong: "Forward vs Futures Karşılaştırması:",
                  text: "Forward özelleştirilmiş (miktar/vade serbest) ama karşı taraf riski var; futures standart ama tam tutulması gereken pozisyon büyüklüğü ile uyuşmayabilir, baz riski oluşur.",
                },
                {
                  strong: "Opsiyonla Hedging:",
                  text: "Forward/futures'ta yön kaybı varsa kâr fırsatı kaybedilir; opsiyon ise prim karşılığında 'tek yönlü koruma' sağlar — kötü senaryoda hedge çalışır, iyi senaryoda fırsattan yararlanılır.",
                },
                {
                  strong: "Maliyet Analizi:",
                  text: "Forward'ın görünür maliyeti yoktur (forward kuru anlık spot kurdan farklıdır); opsiyonun maliyeti açıkça prim olarak ödenir — taraflar maliyet/risk dengesine göre seçim yapar.",
                },
              ],
            },
            {
              heading: "Hisse Portföyü ve Faiz Riski Yönetimi",
              icon: "trend",
              items: [
                {
                  strong: "Hisse Portföyünün Endeks Futures ile Hedging:",
                  text: "Bir hisse portföyünü piyasa düşüşünden korumak için endeks futures'ı (örn. BIST 30 futures) kısa pozisyonu açılır; portföyün betası dikkate alınarak hedge oranı hesaplanır.",
                },
                {
                  strong: "Beta Bazlı Hedge Oranı:",
                  text: "Hedge edilecek futures sayısı = (Portföy Değeri × Portföy Betası) / (Endeks × Sözleşme Çarpanı); bu formül portföyün piyasa duyarlılığını dikkate alır.",
                },
                {
                  strong: "Put Opsiyonu ile Sigortalama:",
                  text: "Hisse veya endeks put opsiyonu satın alarak 'taban koruması' sağlanır; piyasa düştüğünde put kâr verir, piyasa yükseldiğinde sadece prim kaybedilir — bir nevi sigorta primidir.",
                },
                {
                  strong: "Faiz Riski Yönetimi:",
                  text: "Bono/tahvil portföyleri için faiz futures veya faiz swap'ları kullanılır; bankalar aktif-pasif vade uyumsuzluğunu (mismatch) faiz swaplarıyla yönetir.",
                },
                {
                  strong: "Hedge Oranı (Hedge Ratio):",
                  text: "Hedge oranı 1 = tam hedge (riski sıfırlama amaçlı), <1 kısmi hedge (riski azaltma), >1 aşırı hedge (genellikle yapılmaz, ek risk yaratır); pratikte tam hedge nadiren mümkündür.",
                },
              ],
            },
          ],
          tip: "İhracatçı = USD short forward (USD satım), İthalatçı = USD long forward (USD alım) — bu eşleşme sınavın klasik soru kalıbıdır. Hisse portföyü hedging'inde 'beta' kritik girdi; beta yüksekse daha çok futures ile hedge gerekir. Put opsiyonu = portföy sigortası — prim karşılığında taban koruması sağlar.",
          kavramlar: [
            { terim: "Hedging (Korunma)", tanim: "Mevcut bir riske karşı zıt yönde türev pozisyonu alarak olası zararı sınırlandırma stratejisi." },
            { terim: "Döviz Riski Korunması", tanim: "İhracatçının alacağı dövizi forward ile satması (short), ithalatçının ödemesi dövizi forward ile satın alması (long) yoluyla kur riskini kilitleme." },
            { terim: "Portföy Sigortası", tanim: "Hisse portföyüne karşı put opsiyonu satın alarak aşağı yönlü riske karşı koruma; prim ödeme karşılığında taban fiyat garantisi." },
            { terim: "Beta ile Hedge Oranı", tanim: "Hisse portföyünü endeks futures ile hedgelemede kullanılan oran: Hedge = (Portföy Değeri × Beta) / Sözleşme Değeri." },
            { terim: "Çapraz Hedging", tanim: "Riskten korunulacak varlıkla tam örtüşmeyen bir dayanak varlığa sahip türev araç kullanılarak yapılan koruma; bazis riski içerir." },
            { terim: "Tam Hedge (Perfect Hedge)", tanim: "Türev pozisyonunun korunulan riskle tam olarak örtüştüğü ideal durum; pratikte nadiren mümkündür." },
            { terim: "Spekülatif Pozisyon", tanim: "Riskten korunma amacı taşımayan; fiyat tahminlerine dayanarak kâr elde etmek için alınan türev pozisyonu." },
          ],
          dikkatlar: [
            "İhracatçı ileride USD alacak → bu riski ortadan kaldırmak için şimdi USD satış (short) forward alır; ithalatçı USD ödeyecek → USD alış (long) forward alır.",
            "Hisse portföyü hedginginde beta kullanılır; hedge edilecek futures sözleşme sayısı = (Portföy Değeri × Beta) / Futures Sözleşme Değeri.",
            "Put opsiyonu portföy sigortası işlevi görür; kâr potansiyeli limitsiz kalırken kayıp prim + kullanım fiyatı altındaki değerle sınırlanır.",
            "Çapraz hedgingde korunulan varlık ile futures dayanak varlığı aynı değilse bazis riski doğar; bu risk tam elimine edilemez.",
            "Spekülatör ile hedger arasındaki fark: hedger zaten bir riske maruz kalıp onu azaltır; spekülatör risk almak için piyasaya girer.",
          ],
        },
        questions: [
          {
            text: "3 ay sonra USD ödemesi yapacak bir ithalatçı kur riskinden korunmak için hangi türev pozisyonunu almalıdır?",
            options: [
              { id: "A", text: "USD satım forwardı (short position)" },
              { id: "B", text: "USD alım forwardı (long position) — bugünden belirlenen kurla 3 ay sonra USD alma garantisi alır." },
              { id: "C", text: "Türev araç gerekmez." },
              { id: "D", text: "EUR satım forwardı" },
            ],
            correct: "B",
            explanation:
              "İthalatçı 3 ay sonra USD ödemesi yapacak ve TL ile USD alacaktır. Eğer bu sürede TL değer kaybederse (USD/TL kuru yükselirse) aynı USD'yi daha çok TL ile satın almak zorunda kalır, gider artışı yaşar. Bunu önlemek için 'USD alım forwardı' (long position) yapmalıdır: bugünden belirlenen kurla 3 ay sonra USD alma garantisi alır. İhracatçının durumu ise tam tersidir — 'USD satım forwardı' ile TL'nin değer kazanmasından korunur.",
          },
          {
            text: "Hisse portföyünü piyasa düşüşünden korumak için endeks futures kullanılırken aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Endeks futures uzun pozisyonu (alım) açılır." },
              { id: "B", text: "Endeks futures kısa pozisyonu (satım) açılır; piyasa düşerse futures kâr eder ve portföydeki kayıp telafi edilir. Hedge oranı portföyün betası dikkate alınarak hesaplanır." },
              { id: "C", text: "Yalnızca opsiyon kullanılabilir." },
              { id: "D", text: "Hedge yapmak imkansızdır." },
            ],
            correct: "B",
            explanation:
              "Hisse portföyünü piyasa düşüşünden korumak için endeks futures KISA pozisyonu (satım) açılır. Piyasa düşerse endeks futures kâr eder ve bu kâr portföyün uğradığı kaybı dengeler. Hedge edilecek futures sayısı şu formülle hesaplanır: N = (Portföy Değeri × Portföy Betası) / (Endeks × Sözleşme Çarpanı). Beta yüksekse portföy piyasaya daha duyarlıdır ve daha çok futures gerekir; beta düşükse daha az.",
          },
          {
            text: "Forward ve opsiyon ile hedge yapmanın temel farkı aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Forward bir hak verir, opsiyon yükümlülük getirir." },
              { id: "B", text: "Forward iki yönlü hedge sağlar — hem koruma hem de fırsat kaybı; opsiyon ise prim karşılığında 'tek yönlü koruma' sağlar — kötü senaryoda çalışır, iyi senaryoda yalnızca prim kaybedilir, fırsat kaybedilmez." },
              { id: "C", text: "İkisi arasında fark yoktur." },
              { id: "D", text: "Opsiyon yalnızca borsalarda işlem görür." },
            ],
            correct: "B",
            explanation:
              "Forward (ve futures) ile hedge yaparken pozisyon iki yönlü çalışır: olumsuz hareketten korur ama olumlu fırsatı da kaybettirir. Örneğin USD alım forwardı yapan ithalatçı kur düşüşünden faydalanamaz. Opsiyon ise asimetrik bir araçtır: prim ödenir ama 'sigorta' niteliğinde tek yönlü koruma sağlar. Kötü senaryoda opsiyon kullanılır ve koruma sağlar; iyi senaryoda kullanılmaz, sadece prim kaybedilir ve piyasa fırsatından faydalanılır. Bu yapı opsiyonu pahalı ama esnek bir hedge aracı yapar.",
          },
          {
            text: "Bir portföy yöneticisinin 10 milyon TL değerindeki hisse portföyü için, portföy betası 1,2 ve endeks futures sözleşme değeri 50.000 TL ise hedge için kaç kısa pozisyon futures sözleşmesi gereklidir?",
            options: [
              { id: "A", text: "120 sözleşme" },
              { id: "B", text: "200 sözleşme" },
              { id: "C", text: "240 sözleşme" },
              { id: "D", text: "500 sözleşme" },
            ],
            correct: "C",
            explanation:
              "Hedge formülü: N = (Portföy Değeri × Portföy Betası) / Sözleşme Değeri. Buradan: N = (10.000.000 × 1,2) / 50.000 = 12.000.000 / 50.000 = 240 sözleşme. Beta 1,2 olduğu için portföy piyasadan %20 daha duyarlıdır; bu nedenle eğer beta 1 olsaydı 200 sözleşme yeterli olurdu, ancak betanın etkisiyle 240'a çıkar. Bu pozisyon kısa açılır ki piyasa düştüğünde kâr edip portföyün kaybını telafi etsin.",
          },
          {
            text: "Hedge oranı (hedge ratio) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Hedge oranı her zaman 1 olmalıdır." },
              { id: "B", text: "Hedge oranı 1 = tam hedge (riski sıfırlama), <1 kısmi hedge (riski azaltma), >1 aşırı hedge (genellikle yapılmaz, ek risk yaratır); pratikte tam hedge nadiren mümkündür." },
              { id: "C", text: "Hedge oranı yalnızca opsiyonlar için geçerlidir." },
              { id: "D", text: "Hedge oranı 0 olduğunda risk en düşüktür." },
            ],
            correct: "B",
            explanation:
              "Hedge oranı, hedge edilen pozisyonun, korunmak istenen pozisyona oranıdır. Hedge oranı = 1 ise 'tam hedge' yapılmıştır, riski tamamen sıfırlamayı amaçlar (pratikte baz riski nedeniyle nadiren mümkündür). Hedge oranı < 1 ise 'kısmi hedge' yapılmıştır, riski azaltır ama tamamen yok etmez; özellikle yatırımcı belirli oranda olumlu hareketten faydalanmak istediğinde kullanılır. Hedge oranı > 1 ise 'aşırı hedge' olur ve aslında ters yönde yeni bir risk yaratır, bu nedenle nadiren tercih edilir.",
          },
        ],
      },
      // ──────────── Ders 5: Türev Araç Fiyatlama ve Stratejiler ────────────
      {
        id: "m1011-l5",
        title: "Türev Araç Fiyatlaması ve Egzotik Türevler",
        duration: "9 dk",
        summary: {
          title: "Türev Araç Fiyatlaması ve Egzotik Türevler",
          intro:
            "Türev araçların fiyatlanması; arbitrajsız fiyatlama (no-arbitrage pricing) ilkesine dayanır. Vadeli işlemler 'taşıma maliyeti' (cost of carry) modeli ile, opsiyonlar ise Black-Scholes-Merton modeli gibi olasılıksal modellerle fiyatlanır. Egzotik türevler (Asya, bariyer, dijital opsiyonlar; Kredi Temerrüt Takasları/CDS) standart türevlerin geliştirilmiş versiyonlarıdır; daha karmaşık ödeme yapıları ve özelleştirilmiş risk profilleri sunar.",
          sections: [
            {
              heading: "Vadeli İşlem ve Opsiyon Fiyatlaması",
              icon: "shield",
              items: [
                {
                  strong: "Forward/Futures Fiyatlaması:",
                  text: "Cost-of-carry modeli: F = S × (1 + r − q)^T; F vadeli fiyat, S spot fiyat, r risksiz faiz, q kâr payı/depolama maliyeti, T vade süresi. Arbitrajsız denge sağlanır.",
                },
                {
                  strong: "Baz Riski:",
                  text: "Baz = Spot Fiyat − Vadeli Fiyat; tam hedge yapılamadığında baz riski oluşur. Baz riski özellikle dayanak varlığın hedge aracıyla tam eşleşmediği durumlarda artar.",
                },
                {
                  strong: "Black-Scholes Modeli:",
                  text: "Avrupa tipi opsiyonların teorik fiyatını hesaplayan kapalı formüllü model; girdileri spot fiyat, kullanım fiyatı, vade, volatilite ve risksiz faiz oranıdır.",
                },
                {
                  strong: "Greekler (Greeks):",
                  text: "Delta — opsiyon fiyatının dayanak fiyatına duyarlılığı; Gamma — delta'nın değişim hızı; Vega — volatiliteye duyarlılık; Theta — zaman aşınması; Rho — faize duyarlılık.",
                },
                {
                  strong: "Put-Call Paritesi:",
                  text: "C − P = S − K × e^(-rT); Avrupa tipi call ve put opsiyonları arasındaki arbitrajsız ilişkiyi gösterir; biri biliniyorsa diğeri hesaplanabilir.",
                },
              ],
            },
            {
              heading: "Egzotik Türevler ve Stratejiler",
              icon: "trend",
              items: [
                {
                  strong: "Asya Opsiyonları:",
                  text: "Ödeme; vade boyunca dayanak varlığın ortalama fiyatına bağlıdır (örneğin son 30 günün ortalaması); standart opsiyonlardan daha az volatilitedir, dolayısıyla daha düşük prim taşır.",
                },
                {
                  strong: "Bariyerli Opsiyonlar:",
                  text: "Belirli bir bariyer fiyatı aşıldığında veya altına inildiğinde aktive olur (knock-in) veya devre dışı kalır (knock-out); standart opsiyonlardan daha düşük prim, ancak daha karmaşık risk profili sunar.",
                },
                {
                  strong: "Dijital (Binary) Opsiyonlar:",
                  text: "Vadede ya sabit bir tutar (ödeme) yapılır ya da hiçbir şey ödenmez; 'tümü-veya-hiçbir' yapısı; bahis benzeri bir ödeme profili sağlar.",
                },
                {
                  strong: "Kredi Temerrüt Takasları (CDS):",
                  text: "Bir borçlunun temerrüt riskine karşı sigorta görevi gören türev sözleşmedir; CDS alıcısı periyodik prim öder, temerrüt durumunda satıcı tazminat öder. 2008 krizinde önemli rol oynamıştır.",
                },
                {
                  strong: "Stratejiler:",
                  text: "Spread (boğa/ayı), Straddle (volatilite oyunu), Strangle (geniş volatilite), Butterfly (dar aralık) gibi opsiyon kombinasyonları belirli piyasa görüşlerini ifade etmek için kullanılır.",
                },
              ],
            },
          ],
          tip: "Cost-of-carry: F = S(1+r-q)^T — vadeli fiyatın spot fiyattan farkı taşıma maliyeti kadardır. Beş Greek (Delta, Gamma, Vega, Theta, Rho) opsiyon riskini ölçer. Put-Call Paritesi C - P = S - Ke^(-rT); Avrupa opsiyonları için temel arbitraj denklemi. CDS = kredi sigortası — 2008 krizinin yıldızı.",
          kavramlar: [
            { terim: "Taşıma Maliyeti (Cost-of-Carry)", tanim: "Futures fiyatının spot fiyata kıyasla içerdiği ek maliyet; F = S × (1 + r − q)^T — r finansman maliyeti, q temettü getirisi." },
            { terim: "Delta (Δ)", tanim: "Dayanak varlık fiyatındaki 1 birimlik değişime karşı opsiyon fiyatının değişimi; 0 ile 1 arasında değişir, call için pozitif, put için negatif." },
            { terim: "Vega", tanim: "Volatilitedeki 1 puanlık değişime karşı opsiyon fiyatının değişimi; volatilite arttıkça her iki yön opsiyonu da değer kazanır." },
            { terim: "Theta (Zaman Değeri Erimesi)", tanim: "Vadeye kalan süre azaldıkça opsiyon değerinin düşmesi; alıcı için negatif (değer kaybeder), satıcı için pozitif etkidir." },
            { terim: "Put-Call Paritesi", tanim: "Avrupa opsiyonları için C − P = S − K·e^(−rT) denklemi; aynı dayanak, kullanım fiyatı ve vadeye sahip call ile put arasındaki denge ilişkisi." },
            { terim: "Kredi Temerrüt Swapı (CDS)", tanim: "Bir referans varlığın (genellikle tahvil) kredi riskine karşı koruma sağlayan türev araç; alıcı prim öder, satıcı temerrüt halinde tazminat öder." },
            { terim: "Egzotik Opsiyon", tanim: "Standart Avrupa/Amerikan opsiyonlarından farklı, özel ödeme yapısına sahip; bariyer, Asya, dijital gibi karmaşık opsiyon türleri." },
          ],
          dikkatlar: [
            "Taşıma maliyeti formülü: F = S × (1 + r − q)^T; temettü getirisi (q) futures fiyatını düşürür — 'temettü vadeli fiyatı artırır' yanıltıcıdır.",
            "Delta call için pozitif (0 ile 1 arası), put için negatif (-1 ile 0 arası); delta = 0.5 yaklaşık ATM durumunu gösterir.",
            "Vega hem call hem put için POZİTİF; volatilite yükselince her iki opsiyon türü de değer kazanır — 'put volatilite artınca değer kaybeder' yanıltıcıdır.",
            "Theta zaman opsiyonu satıcısı lehinedir; alıcı her gün değer kaybeder (negatif theta), satıcı ise zaman erimesinden kâr eder.",
            "Put-Call Paritesi Avrupa opsiyonları için geçerlidir; Amerikan tipi opsiyonlarda erken kullanım hakkı bu denklemi bozar.",
          ],
        },
        questions: [
          {
            text: "Forward/futures fiyatlamasında 'cost-of-carry' modeli formülü aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "F = S × T" },
              { id: "B", text: "F = S × (1 + r − q)^T; F vadeli fiyat, S spot fiyat, r risksiz faiz, q kâr payı/depolama maliyeti, T vade süresi." },
              { id: "C", text: "F = S × r" },
              { id: "D", text: "F = S − r + q" },
            ],
            correct: "B",
            explanation:
              "Cost-of-carry (taşıma maliyeti) modeli, vadeli işlem sözleşmelerinin arbitrajsız fiyatlanmasının temelidir: F = S × (1 + r − q)^T. Burada S dayanak varlığın spot fiyatı, r risksiz faiz oranı (varlığı vadeye kadar tutmanın maliyeti), q gelir oranı (kâr payı, faiz vb.), T vade süresidir. Sürekli kapitalizasyonda formül F = S × e^((r-q)T) olarak ifade edilir. Bu formül, dayanak varlığı bugün satın alıp vadeye kadar taşımak ile vadeli sözleşme yapmak arasındaki arbitrajsız dengeyi sağlar.",
          },
          {
            text: "Opsiyon fiyatlamasında kullanılan 'Greek'ler' ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Delta opsiyonun zaman aşınmasını ölçer." },
              { id: "B", text: "Delta — dayanak fiyatına duyarlılık; Gamma — delta'nın değişim hızı; Vega — volatiliteye duyarlılık; Theta — zaman aşınması; Rho — faiz duyarlılığını ölçer." },
              { id: "C", text: "Vega opsiyonun fiyatının kullanım fiyatına duyarlılığını ölçer." },
              { id: "D", text: "Greek'ler yalnızca tahvil opsiyonları için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "Opsiyon Greek'leri, opsiyon fiyatının çeşitli faktörlere duyarlılığını ölçen risk metrikleridir: (1) Delta — opsiyon fiyatının dayanak varlık fiyatındaki 1 birimlik değişime duyarlılığı, (2) Gamma — delta'nın değişim hızı (delta'nın türevi), (3) Vega — volatilitedeki %1 değişime duyarlılık, (4) Theta — zamanın geçmesinin opsiyon fiyatına etkisi (zaman aşınması), (5) Rho — risksiz faiz oranındaki değişime duyarlılık. Profesyonel opsiyon yatırımcıları portföylerini 'delta-nötr' veya 'gamma-nötr' tutarak yönetir.",
          },
          {
            text: "Put-Call paritesi için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca Amerikan tipi opsiyonlar için geçerlidir." },
              { id: "B", text: "Avrupa tipi call (C) ve put (P) opsiyonları arasındaki arbitrajsız ilişkidir: C − P = S − K × e^(-rT); biri biliniyorsa diğeri hesaplanabilir." },
              { id: "C", text: "Put ve call opsiyonun birbirinin tam tersi olduğunu söyler." },
              { id: "D", text: "Yalnızca para opsiyonları için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "Put-Call Paritesi; aynı dayanak varlık, kullanım fiyatı ve vadeye sahip Avrupa tipi call ve put opsiyonları arasındaki arbitrajsız ilişkiyi gösterir: C − P = S − K × e^(-rT). Bu denklem; bir call opsiyon ve risksiz tahvil pozisyonunun, bir put opsiyon ve dayanak varlık pozisyonu ile aynı ödeme profilini sağladığını ifade eder. Eğer piyasada bu denklem sağlanmazsa arbitraj fırsatı doğar; arbitrajcılar fiyatları dengeler. Pratik olarak, opsiyonlardan biri biliniyorsa diğerinin teorik fiyatı kolayca hesaplanabilir.",
          },
          {
            text: "Asya opsiyonları (Asian options) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca Asya borsalarında işlem görür." },
              { id: "B", text: "Ödeme; vade boyunca dayanak varlığın ortalama fiyatına bağlıdır; standart opsiyonlardan daha az volatilite, dolayısıyla daha düşük prim taşır." },
              { id: "C", text: "Yalnızca vade sonunda ödeme yapar ve fiyatı vade sonu fiyatına bağlıdır." },
              { id: "D", text: "Bariyer fiyatları içerir." },
            ],
            correct: "B",
            explanation:
              "Asya opsiyonları (path-dependent egzotik opsiyonlar); ödemesi vade boyunca dayanak varlığın ortalama fiyatına bağlı olan opsiyonlardır. Örneğin son 30 günün ortalama fiyatı kullanılır. Bu yapı standart opsiyonlardan iki önemli farklılık taşır: (1) Manipülasyon riski daha düşüktür çünkü tek bir günün fiyatı belirleyici değildir, (2) Ortalama alındığı için volatilite etkisi azalır, bu da daha düşük prim anlamına gelir. Genellikle emtia ve döviz piyasalarında ihracatçı/ithalatçıların düzenli işlemleri için tercih edilir.",
          },
          {
            text: "Kredi Temerrüt Takası (CDS) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Bir tür sermaye artırımı yöntemidir." },
              { id: "B", text: "Bir borçlunun temerrüt (default) riskine karşı sigorta görevi gören türev sözleşmedir; CDS alıcısı periyodik prim öder, temerrüt durumunda satıcı tazminat öder. 2008 küresel krizinde önemli rol oynamıştır." },
              { id: "C", text: "Yalnızca devlet tahvilleri için kullanılır." },
              { id: "D", text: "Faiz swap türüdür." },
            ],
            correct: "B",
            explanation:
              "Kredi Temerrüt Takası (Credit Default Swap — CDS); bir borçlunun (referans varlık — şirket veya devlet tahvili) temerrüde düşmesi riskine karşı sigorta benzeri koruma sağlayan türev sözleşmesidir. CDS alıcısı (koruma alan) belirli aralıklarla 'CDS primi' öder; eğer referans varlık temerrüde düşerse satıcı (koruma satan) önceden anlaşılan tazminatı öder. CDS'ler 2008 küresel finansal krizinde önemli rol oynamıştır — özellikle AIG'nin yazdığı CDS'lerin temerrüde düşmesi krizi derinleştirmiştir. Türkiye CDS spread'leri ülke risk göstergesi olarak yakından izlenir.",
          },
        ],
      },
    ],
  },
];