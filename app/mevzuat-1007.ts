/* ─────────────────────────────────────────────────────────────────────────────
 * Finansal Yönetim ve Mali Analiz (1007)
 *
 * Kaynak: SPL 1007 Çalışma Notu, 31 Aralık 2025 (158 sayfa)
 * Sınavlar: SPL Düzey 2 ve Düzey 3
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1001-1006 modüllerindeki konularla çakışma yoktur. 1007 mevzuat değil,
 * şirket finansmanının analitik ve nicel boyutuna (kaldıraç, sermaye maliyeti,
 * yatırım projesi değerleme, mali analiz) odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1007 } from "./mevzuat-1007";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1007: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1007 FİNANSAL YÖNETİM VE MALİ ANALİZ
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1007",
    title: "Modül · Finansal Yönetim ve Mali Analiz (1007)",
    lessons: [
      // ──────────── Ders 1: Finansal Planlama ve Kaldıraç ────────────
      {
        id: "m1007-l1",
        title: "Finansal Planlama, Başabaş Analizi ve Kaldıraç Kavramları",
        duration: "10 dk",
        summary: {
          title: "Finansal Planlama ve Kaldıraç",
          intro:
            "Finansal planlama; şirketin gelecekteki nakit akışlarını, gelir tablosunu ve bilançosunu öngörerek finansman ihtiyacını belirlemesi sürecidir. Nakit bütçesi, proforma tablolar ve başabaş analizi bu sürecin temel araçlarıdır. Kaldıraç ise sabit maliyetlerin/giderlerin kullanımının kâr üzerindeki etkisini ifade eder; faaliyet kaldıracı, finansal kaldıraç ve toplam (bileşik) kaldıraç olmak üzere üç türü vardır.",
          sections: [
            {
              heading: "Başabaş Analizi ve Faaliyet Kaldıracı",
              icon: "shield",
              items: [
                {
                  strong: "Başabaş Noktası:",
                  text: "Toplam gelirin toplam giderlere eşit olduğu, yani kârın sıfır olduğu satış miktarı veya hasılat tutarıdır; üretim hacmi başabaş noktasının üstüne çıkınca şirket kâra geçer.",
                },
                {
                  strong: "Başabaş Formülü:",
                  text: "Başabaş Miktarı = Sabit Maliyetler / (Birim Satış Fiyatı − Birim Değişken Maliyet); pay 'birim katkı payı' olarak adlandırılır.",
                },
                {
                  strong: "Faaliyet Kaldıracı (Operating Leverage):",
                  text: "Sabit faaliyet giderlerinin kâr üzerindeki etkisini gösterir; satışlardaki %1'lik değişimin FVÖK'te (Faiz ve Vergi Öncesi Kâr) yarattığı yüzdesel değişim olarak ifade edilir.",
                },
                {
                  strong: "Faaliyet Kaldıracı Formülü:",
                  text: "FKD = (FVÖK'teki % Değişim) / (Satışlardaki % Değişim); örneğin %18,75 satış artışı %102,36 FVÖK artışı sağlıyorsa FKD = 5,46 olur.",
                },
                {
                  strong: "Sabit Maliyetlerin Etkisi:",
                  text: "Sabit maliyetler ne kadar yüksekse faaliyet kaldıracı o kadar büyüktür; bu durum kâr potansiyelini artırır ancak satışlar düştüğünde zarar riskini de büyütür.",
                },
              ],
            },
            {
              heading: "Finansal ve Toplam Kaldıraç",
              icon: "trend",
              items: [
                {
                  strong: "Finansal Kaldıraç (Financial Leverage):",
                  text: "Sabit finansman giderlerinin (faiz, imtiyazlı kâr payı) kâr üzerindeki etkisini gösterir; FVÖK'teki %1 değişimin Hisse Başına Kâr'da yarattığı yüzdesel değişimdir.",
                },
                {
                  strong: "Finansal Kaldıraç Formülü:",
                  text: "FinKD = (HBK'daki % Değişim) / (FVÖK'teki % Değişim); örnek hesaplama: FinKD = [(500-100)/100] / [(1000-600)/600] = %400/%66 = 6,00.",
                },
                {
                  strong: "Finansal Başabaş Noktası:",
                  text: "Hisse başına kârın sıfır olduğu FVÖK düzeyidir; bu noktanın altında borçlanma firmanın HBK'sına olumsuz etki yapar.",
                },
                {
                  strong: "Toplam (Bileşik) Kaldıraç:",
                  text: "TKD = Faaliyet Kaldıracı Derecesi × Finansal Kaldıraç Derecesi; satışlardaki %1 değişimin HBK'da yarattığı toplam yüzdesel değişimi ölçer.",
                },
                {
                  strong: "İki Kademeli Risk Görünümü:",
                  text: "Faaliyet kaldıracı 'iş riski'ni, finansal kaldıraç 'finansal risk'i temsil eder; toplam kaldıraç ortakların gelirinin satışlardaki dalgalanmaya karşı toplam duyarlılığını gösterir.",
                },
              ],
            },
          ],
          tip: "Kaldıraç formüllerinde yön çok önemli: Faaliyet kaldıracı 'satış → FVÖK', Finansal kaldıraç 'FVÖK → HBK', Toplam kaldıraç ise ikisinin çarpımı. Sabit maliyet/sabit faiz ne kadar yüksekse kaldıraç o kadar büyür — ancak risk de aynı oranda artar. Sınavda bu üç formülü ezbere bilmek gerek.",
          kavramlar: [
            { terim: "Başabaş Noktası", tanim: "Toplam gelirin toplam maliyete eşit olduğu satış hacmi/cirosu; bu noktanın altında zarar, üstünde kâr oluşur." },
            { terim: "Faaliyet Kaldıraç Derecesi (FKD)", tanim: "Satışlardaki %1 değişimin FVÖK'te (faiz ve vergi öncesi kâr) kaç %'lik değişime yol açtığını gösteren katsayı; yüksek sabit maliyet FKD'yi artırır." },
            { terim: "Finansal Kaldıraç Derecesi (FinKD)", tanim: "FVÖK'teki %1 değişimin hisse başına kârda (HBK) kaç %'lik değişime neden olduğunu gösteren katsayı; yüksek faiz giderleri FinKD'yi artırır." },
            { terim: "Toplam Kaldıraç Derecesi", tanim: "FKD × FinKD; satışlardaki %1 değişimin HBK'da kaç %'lik değişime yol açtığını gösteren birleşik kaldıraç ölçüsü." },
            { terim: "FVÖK", tanim: "Faiz ve Vergi Öncesi Kâr; işletmenin borç yapısı ve vergi durumundan bağımsız faaliyet performansını gösteren gelir kalemi." },
            { terim: "Sabit Maliyet", tanim: "Üretim hacminden bağımsız olarak katlanılan kira, amortisman, sabit personel gibi giderler; yüksek sabit maliyet yüksek faaliyet kaldıracı demektir." },
            { terim: "Değişken Maliyet", tanim: "Üretim/satış hacmiyle orantılı olarak değişen; hammadde, işçilik gibi giderler; marjinal maliyetin temelini oluşturur." },
          ],
          dikkatlar: [
            "FKD = Satışlar → FVÖK yönünde ölçer; FinKD = FVÖK → HBK yönünde ölçer; Toplam = FKD × FinKD — yön karıştırılmamalı.",
            "Sabit maliyet yükseldikçe FKD yükselir ve faaliyet riski artar; sabit faiz giderleri yükseldikçe FinKD yükselir ve finansal risk artar.",
            "Başabaş noktasında kâr SIFIRDIR; bu noktanın altında zarardır — 'başabaş = en düşük kâr noktası' ifadesi yanlıştır.",
            "Satış hacmindeki artış FKD yüksek olan şirkette FVÖK'ü orantısız biçimde artırır; aynı şekilde düşüş de orantısız zarar yaratır.",
            "Toplam kaldıraç derecesi hem iş hem de finansal riskini ölçer; yüksek TKD yüksek getiri potansiyeli ve yüksek kayıp riski anlamına gelir.",
          ],
        },
        questions: [
          {
            text: "Bir şirketin başabaş satış miktarını hesaplamak için kullanılan formül aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Toplam Maliyet / Birim Satış Fiyatı" },
              { id: "B", text: "Sabit Maliyetler / (Birim Satış Fiyatı − Birim Değişken Maliyet)" },
              { id: "C", text: "(Sabit + Değişken Maliyet) / Birim Satış Fiyatı" },
              { id: "D", text: "Birim Satış Fiyatı × Üretim Miktarı" },
            ],
            correct: "B",
            explanation:
              "Başabaş satış miktarı = Sabit Maliyetler / (Birim Satış Fiyatı − Birim Değişken Maliyet) formülü ile hesaplanır. Paydadaki ifade 'birim katkı payı' olarak adlandırılır ve bir birim ürünün sabit maliyetlerin karşılanmasına yaptığı katkıyı gösterir. Bu noktada toplam gelir toplam giderlere eşit olur, yani kâr sıfırdır.",
          },
          {
            text: "Faaliyet Kaldıracı Derecesi (FKD) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Satışlardaki yüzdesel değişimin Hisse Başına Kâr'daki yüzdesel değişime oranıdır." },
              { id: "B", text: "FVÖK'teki yüzdesel değişimin satışlardaki yüzdesel değişime oranıdır." },
              { id: "C", text: "Toplam maliyetin sabit maliyete oranıdır." },
              { id: "D", text: "Brüt kâr marjıdır." },
            ],
            correct: "B",
            explanation:
              "Faaliyet Kaldıracı Derecesi = (FVÖK'teki % Değişim) / (Satışlardaki % Değişim) formülüyle hesaplanır. Sabit faaliyet giderlerinin kâr üzerindeki etkisini ölçer. FKD ne kadar yüksekse, satışlardaki küçük değişimler FVÖK'te o kadar büyük dalgalanmalara yol açar; bu da iş riskinin yüksek olduğunu gösterir.",
          },
          {
            text: "Bir şirketin Faaliyet Kaldıracı Derecesi 3, Finansal Kaldıracı Derecesi 2 ise Toplam (Bileşik) Kaldıracı Derecesi kaçtır?",
            options: [
              { id: "A", text: "1 (3 − 2)" },
              { id: "B", text: "2,5 (3 + 2)/2" },
              { id: "C", text: "5 (3 + 2)" },
              { id: "D", text: "6 (3 × 2)" },
            ],
            correct: "D",
            explanation:
              "Toplam Kaldıraç Derecesi = Faaliyet Kaldıraç Derecesi × Finansal Kaldıraç Derecesi formülüyle hesaplanır. Bu örnekte TKD = 3 × 2 = 6 olur. Yani satışlardaki %1'lik değişim, hisse başına kârda %6'lık bir değişime yol açar. Bu çarpımsal yapı, iş riski ile finansal riskin birleşik etkisini gösterir.",
          },
          {
            text: "Aşağıdakilerden hangisi 'Finansal Başabaş Noktası' kavramını DOĞRU tanımlar?",
            options: [
              { id: "A", text: "Toplam satış gelirinin sıfır olduğu nokta" },
              { id: "B", text: "FVÖK'ün sıfır olduğu nokta" },
              { id: "C", text: "Hisse başına kârın sıfır olduğu FVÖK düzeyi" },
              { id: "D", text: "Sabit maliyetlerin sıfır olduğu üretim seviyesi" },
            ],
            correct: "C",
            explanation:
              "Finansal başabaş noktası, hisse başına kârın (HBK) sıfır olduğu FVÖK düzeyidir. Bu noktada faaliyetlerden elde edilen FVÖK, ödenmesi gereken faiz ve imtiyazlı kâr payı gibi sabit finansman giderlerini tam karşılar. Bu noktanın altında borçlanma kullanımı HBK'yı düşürürken, üstünde HBK'yı yükselten kaldıraç etkisi sağlar.",
          },
          {
            text: "Bir şirketin sabit maliyetlerinin yüksek olması, kaldıraç açısından nasıl bir etki yaratır?",
            options: [
              { id: "A", text: "Faaliyet kaldıracını düşürür ve kâr potansiyelini azaltır." },
              { id: "B", text: "Faaliyet kaldıracını yükseltir; kâr potansiyelini büyütür ancak satışlar düştüğünde zarar riskini de artırır." },
              { id: "C", text: "Yalnızca finansal kaldıracı etkiler." },
              { id: "D", text: "Kaldıraç ile sabit maliyetler arasında ilişki yoktur." },
            ],
            correct: "B",
            explanation:
              "Sabit maliyetler arttıkça faaliyet kaldıracı yükselir. Bu durum 'iki ucu keskin kılıç' niteliğindedir: satışlar arttığında her ek satış birimi sabit maliyeti aşarak kâra dönüşür ve FVÖK hızla yükselir; satışlar düştüğünde ise sabit maliyetler değişmediği için zarar hızla büyür. Bu nedenle yüksek faaliyet kaldıracı yüksek 'iş riski' anlamına gelir.",
          },
        ],
      },
      // ──────────── Ders 2: Sermaye Maliyeti ve Sermaye Yapısı ────────────
      {
        id: "m1007-l2",
        title: "Sermaye Maliyeti (AOSM) ve Sermaye Yapısı Teorileri",
        duration: "10 dk",
        summary: {
          title: "Sermaye Maliyeti ve Sermaye Yapısı",
          intro:
            "Sermaye maliyeti; bir şirketin kullandığı her bir finansman kaynağının (özsermaye, borç, imtiyazlı pay) getiri beklentisinin ağırlıklı ortalamasıdır. Ağırlıklı Ortalama Sermaye Maliyeti (AOSM/WACC), şirketin yatırım kararlarında kullandığı iskonto oranıdır. Sermaye yapısı teorileri ise borç-özsermaye karışımının firma değerini nasıl etkilediğini açıklar.",
          sections: [
            {
              heading: "Sermaye Maliyeti Bileşenleri ve AOSM",
              icon: "shield",
              items: [
                {
                  strong: "Borç Maliyeti (Kd):",
                  text: "Şirketin borçlarına ödediği vergi sonrası faiz oranıdır; faiz vergiden düşülebildiği için Kd × (1 − Vergi Oranı) formülüyle hesaplanır.",
                },
                {
                  strong: "Özsermaye Maliyeti (Ke):",
                  text: "Hissedarların yatırımları için talep ettiği getiri oranıdır; CAPM (Sermaye Varlıkları Fiyatlandırma Modeli) ile Ke = Rf + β × (Rm − Rf) şeklinde hesaplanır.",
                },
                {
                  strong: "İmtiyazlı Pay Maliyeti (Kp):",
                  text: "İmtiyazlı pay sahiplerine ödenen sabit kâr payının imtiyazlı pay piyasa fiyatına oranıdır; Kp = D / P0 formülüyle bulunur.",
                },
                {
                  strong: "AOSM Formülü:",
                  text: "AOSM = (E/V × Ke) + (D/V × Kd × (1−T)) + (P/V × Kp); E = özsermaye, D = borç, P = imtiyazlı pay, V = toplam sermaye, T = vergi oranı.",
                },
                {
                  strong: "Marjinal Sermaye Maliyeti:",
                  text: "Belli bir noktaya kadar sermaye maliyeti sabit kalır; ancak yeni sermaye eklendikçe risk algısı yükselir ve maliyet artar — bu kırılma noktasına 'sermaye maliyetinin kırılması' denir.",
                },
              ],
            },
            {
              heading: "Sermaye Yapısı Teorileri",
              icon: "trend",
              items: [
                {
                  strong: "Modigliani-Miller (MM) Teoremi I:",
                  text: "Mükemmel piyasa koşullarında (vergi yok, iflas maliyeti yok) firma değeri sermaye yapısından bağımsızdır; borç-özsermaye karışımı önemsizdir.",
                },
                {
                  strong: "MM Teoremi II — Vergi Etkisi:",
                  text: "Vergiler dahil edildiğinde borç finansmanı vergi kalkanı yaratır; firma değeri = Borçsuz Firma Değeri + Vergi × Borç tutarı; teorik olarak en yüksek borç en yüksek değer.",
                },
                {
                  strong: "Dengeleme (Trade-off) Teorisi:",
                  text: "Borç finansmanının vergi avantajı (kalkan) ile iflas maliyetleri arasındaki denge noktasında optimal sermaye yapısı oluşur; firmaya özgü 'hedef borç oranı' vardır.",
                },
                {
                  strong: "Asimetrik Bilgi ve Pecking Order:",
                  text: "Yöneticilerin firma hakkında dış yatırımcılardan daha fazla bilgisi vardır; bu nedenle firmalar finansman kaynaklarını sırayla kullanır: önce iç kaynak (otofinansman), sonra borç, en son özsermaye ihracı.",
                },
                {
                  strong: "Faaliyet ve Finansal Risk:",
                  text: "Faaliyet riski sektör/iş modeli kaynaklı, finansal risk borç kullanımı kaynaklıdır; toplam risk = faaliyet riski + finansal risk; yöneticiler iki riski birlikte yönetir.",
                },
              ],
            },
          ],
          tip: "AOSM formülü = ağırlıklı ortalama; her finansman kaynağının payı × maliyeti. Borç maliyetinde vergi sonrası kullanılır (vergi kalkanı). MM Teoremi I 'mükemmel dünya' modelidir, gerçek dünyada Trade-off ve Pecking Order teorileri açıklayıcıdır.",
          kavramlar: [
            { terim: "AOSM (WACC)", tanim: "Ağırlıklı Ortalama Sermaye Maliyeti; özkaynakların ve yabancı kaynakların ağırlıkları ve maliyetleri bazında hesaplanan bileşik sermaye maliyeti." },
            { terim: "Vergi Kalkanı", tanim: "Borç faizinin vergi matrahından düşülebilmesi nedeniyle sağlanan vergi tasarrufu; borç maliyeti vergi sonrası (r×(1-t)) hesaplanır." },
            { terim: "Modigliani-Miller Teoremi I", tanim: "Mükemmel piyasa koşullarında firmanın değerinin sermaye yapısından bağımsız olduğunu öne süren teorem; vergi ve iflas maliyeti yoktur." },
            { terim: "Trade-off Teorisi", tanim: "Firmanın vergi kalkanı avantajı ile iflas maliyetlerini dengeleyerek optimal borç oranına ulaştığını açıklayan sermaye yapısı teorisi." },
            { terim: "Pecking Order Teorisi", tanim: "Firmanın önce iç kaynakları, sonra borcu, en son özkaynağı tercih ettiğini; asimetrik bilgi nedeniyle bir hiyerarşi oluştuğunu açıklayan teori." },
            { terim: "Özkaynak Maliyeti", tanim: "Hissedarların şirketten beklediği getiri; genellikle CAPM (Sermaye Varlık Fiyatlama Modeli) ile hesaplanır: ke = rf + β(rm - rf)." },
            { terim: "Finansal Kaldıraç", tanim: "Yabancı kaynak oranı arttıkça hem hissedar getirisi hem de finansal risk artar; aşırı borçlanma iflas riskini yükseltir." },
          ],
          dikkatlar: [
            "AOSM hesabında borç maliyeti MUTLAKA vergi sonrası kullanılır: kd × (1-vergi oranı); brüt borç maliyeti yanıltıcıdır.",
            "MM Teoremi I'de firma değeri sermaye yapısından bağımsızdır — bu yalnızca mükemmel piyasa varsayımı altında geçerlidir, gerçek dünyada geçersizdir.",
            "Trade-off teorisine göre optimal borç oranı vergi kalkanı faydası ile iflas maliyetinin dengesi noktasında oluşur.",
            "Pecking Order'a göre firmalar sırasıyla dağıtılmamış kâr → borç → özkaynak tercih eder; bu teoride 'optimal borç oranı' yoktur.",
            "CAPM ile özkaynak maliyeti hesabında beta katsayısı sistematik riski ölçer; β > 1 piyasadan daha riskli anlamına gelir.",
          ],
        },
        questions: [
          {
            text: "Ağırlıklı Ortalama Sermaye Maliyetinin (AOSM) hesaplanmasında borç maliyeti neden vergi sonrası olarak kullanılır?",
            options: [
              { id: "A", text: "Borç vergiye tabi olduğu için" },
              { id: "B", text: "Faiz giderlerinin vergiden düşülebilmesi nedeniyle vergi kalkanı (tax shield) yaratması" },
              { id: "C", text: "Borç verenlerin vergi muafiyeti talep etmesi" },
              { id: "D", text: "Borcun nominal değerinin vergiyi içermesi" },
            ],
            correct: "B",
            explanation:
              "Faiz giderleri vergi matrahından düşülebildiği için borç finansmanı 'vergi kalkanı' (tax shield) yaratır. Şirket %20 vergi oranıyla %10 faiz ödüyorsa, fiilen sadece %10 × (1 − 0,20) = %8 maliyet katlanmış olur. Bu nedenle AOSM hesabında borç maliyeti vergi sonrası kullanılır: Kd × (1 − T).",
          },
          {
            text: "CAPM (Sermaye Varlıkları Fiyatlandırma Modeli) kullanılarak özsermaye maliyeti nasıl hesaplanır?",
            options: [
              { id: "A", text: "Ke = Rf + β × Rm" },
              { id: "B", text: "Ke = Rf + β × (Rm − Rf)" },
              { id: "C", text: "Ke = Rm − Rf" },
              { id: "D", text: "Ke = Beta × Risk-Free Rate" },
            ],
            correct: "B",
            explanation:
              "CAPM formülü: Ke = Rf + β × (Rm − Rf). Burada Rf risksiz getiri oranı (genelde DİBS faizi), β (beta) hisse senedinin piyasa duyarlılığı, (Rm − Rf) ise piyasa risk primidir. Beta 1'den büyükse hisse piyasadan daha riskli, küçükse daha az risklidir. Bu formül özsermaye maliyetinin standart yöntemidir.",
          },
          {
            text: "Modigliani-Miller Teoremi I (mükemmel piyasa varsayımları altında) sermaye yapısı hakkında ne öne sürer?",
            options: [
              { id: "A", text: "Firma değeri yalnızca borç oranı arttıkça artar." },
              { id: "B", text: "Firma değeri sermaye yapısından bağımsızdır; borç-özsermaye karışımı firma değerini etkilemez." },
              { id: "C", text: "Optimal borç oranı %50'dir." },
              { id: "D", text: "Özsermaye finansmanı her zaman borçtan daha ucuzdur." },
            ],
            correct: "B",
            explanation:
              "Modigliani-Miller Teoremi I; mükemmel piyasa koşulları altında (vergi, iflas maliyeti, asimetrik bilgi yok) firma değerinin sermaye yapısından bağımsız olduğunu öne sürer. Diğer bir deyişle borç-özsermaye karışımı firma değerini etkilemez; firma değerini belirleyen sadece varlıkların yarattığı nakit akışlarıdır. Bu teorem teorik bir başlangıç noktasıdır; vergiler dahil edildiğinde MM Teoremi II ile borcun vergi kalkanı etkisi açıklanır.",
          },
          {
            text: "Dengeleme (Trade-off) Teorisi'ne göre optimal sermaye yapısı nasıl belirlenir?",
            options: [
              { id: "A", text: "%100 borç finansmanıyla" },
              { id: "B", text: "%100 özsermaye finansmanıyla" },
              { id: "C", text: "Borcun vergi kalkanı avantajı ile artan iflas maliyetleri arasındaki dengenin sağlandığı noktada" },
              { id: "D", text: "Yalnızca sektör ortalamasına göre" },
            ],
            correct: "C",
            explanation:
              "Trade-off (Dengeleme) Teorisi'ne göre optimal sermaye yapısı; borç kullanımının yarattığı vergi kalkanı avantajı ile borç oranı arttıkça yükselen iflas maliyetlerinin (finansal sıkıntı maliyetleri) dengelendiği noktada oluşur. Yani her firmanın özelliklerine bağlı bir 'hedef borç oranı' vardır; bu oranın altında veya üstünde olmak firma değerini düşürür.",
          },
          {
            text: "Pecking Order (Finansman Hiyerarşisi) Teorisi'ne göre firmalar finansman kaynaklarını hangi sırayla kullanmayı tercih eder?",
            options: [
              { id: "A", text: "Önce özsermaye ihracı, sonra borç, en son iç kaynak" },
              { id: "B", text: "Önce iç kaynak (otofinansman), sonra borç, en son özsermaye ihracı" },
              { id: "C", text: "Yalnızca özsermaye finansmanı" },
              { id: "D", text: "Yalnızca borç finansmanı" },
            ],
            correct: "B",
            explanation:
              "Pecking Order (Finansman Hiyerarşisi) Teorisi; yöneticilerin firma hakkında dış yatırımcılardan daha fazla bilgiye sahip olduğu (asimetrik bilgi) varsayımına dayanır. Buna göre firmalar finansman ihtiyacını sırayla şu kaynaklardan karşılar: (1) iç kaynak/otofinansman (en az bilgi maliyeti), (2) borç finansmanı (orta bilgi maliyeti), (3) özsermaye ihracı (en yüksek bilgi maliyeti, çünkü piyasa hisse ihracını 'firma değerinin yüksek olduğu' sinyali olarak yorumlar).",
          },
        ],
      },
      // ──────────── Ders 3: İşletme Sermayesi Yönetimi ────────────
      {
        id: "m1007-l3",
        title: "İşletme Sermayesi Yönetimi — Kasa, Alacak ve Stok",
        duration: "9 dk",
        summary: {
          title: "İşletme Sermayesi Yönetimi",
          intro:
            "İşletme sermayesi; şirketin günlük faaliyetlerini sürdürmesi için kullandığı kısa vadeli varlıkların yönetimini ifade eder. Kasa, alacaklar ve stoklar üç temel bileşendir. İşletme sermayesi politikası, kârlılık ile likidite arasında bir denge kurar: çok fazla işletme sermayesi tutmak kârlılığı düşürür, çok az tutmak ise likidite riskini artırır.",
          sections: [
            {
              heading: "Kasa ve Alacak Yönetimi",
              icon: "shield",
              items: [
                {
                  strong: "Kasa (Nakit) Tutma Sebepleri:",
                  text: "Üç temel sebep vardır — işlem amacı (günlük ödemeler için), ihtiyat amacı (beklenmeyen ödemeler için), spekülatif amaç (fırsat doğduğunda yatırım için).",
                },
                {
                  strong: "Baumol Modeli:",
                  text: "Optimal nakit tutma miktarını belirleyen modeldir; nakit talebi, dönüşüm maliyeti ve fırsat maliyeti arasındaki dengeyi optimize eder.",
                },
                {
                  strong: "Alacak Politikası:",
                  text: "Kredili satış koşullarının (vade, indirim, kredi limiti) belirlenmesi; daha gevşek politika satışları artırır ancak şüpheli alacak ve tahsilat riskini büyütür.",
                },
                {
                  strong: "Kredi Skorlama:",
                  text: "Müşterilerin kredi değerliliğini ölçen sistematik yöntemdir; '5C' (Karakter, Kapasite, Sermaye, Teminat, Koşullar) en yaygın kriterlerdir.",
                },
                {
                  strong: "Tahsilat Süresi:",
                  text: "Ortalama tahsilat süresi = (Alacaklar / Kredili Satışlar) × 365; bu süre uzadıkça nakit dönüş döngüsü uzar ve işletme sermayesi ihtiyacı artar.",
                },
              ],
            },
            {
              heading: "Stok Yönetimi ve Politikalar",
              icon: "trend",
              items: [
                {
                  strong: "Stok Tutma Sebepleri:",
                  text: "Üretimi kesintisiz sürdürmek, talep dalgalanmalarına karşı emniyet sağlamak, miktar indirimlerinden faydalanmak ve fiyat artışlarından korunmak.",
                },
                {
                  strong: "Stok Maliyetleri:",
                  text: "Bulundurma maliyetleri (depolama, sigorta, sermayenin fırsat maliyeti) ve sipariş maliyetleri (sipariş verme, taşıma); bu iki maliyetin toplamını minimize etmek hedeftir.",
                },
                {
                  strong: "Ekonomik Sipariş Miktarı (ESM/EOQ):",
                  text: "Toplam stok maliyetini minimize eden optimal sipariş miktarıdır; ESM = √(2 × Yıllık Talep × Sipariş Maliyeti / Birim Bulundurma Maliyeti).",
                },
                {
                  strong: "Tam Zamanında Üretim (JIT):",
                  text: "Stok seviyesini sıfıra yakın tutmaya yönelik üretim felsefesidir; tedarikçilerle yakın ilişki ve güvenilir lojistik gerektirir.",
                },
                {
                  strong: "Politika Türleri:",
                  text: "Agresif politika (düşük işletme sermayesi, yüksek getiri, yüksek risk), muhafazakar politika (yüksek işletme sermayesi, düşük getiri, düşük risk), ılımlı politika (denge).",
                },
              ],
            },
          ],
          tip: "ESM formülü = √(2DS/H); D=yıllık talep, S=sipariş maliyeti, H=birim bulundurma maliyeti. Ortalama tahsilat süresi formülü 365 ile çarpılır — sınavda sıkça çıkar. Üç işletme sermayesi politikası (agresif, muhafazakar, ılımlı) arasında 'risk-getiri' takasını anlamak kritiktir.",
          kavramlar: [
            { terim: "İşletme Sermayesi", tanim: "Dönen varlıklar ile kısa vadeli yabancı kaynakların farkı (net çalışma sermayesi); günlük operasyonları finanse eden kaynak." },
            { terim: "Ekonomik Sipariş Miktarı (ESM)", tanim: "Sipariş ve bulundurma maliyetlerini minimize eden optimal sipariş büyüklüğü; ESM = √(2DS/H) formülüyle hesaplanır." },
            { terim: "Ortalama Tahsilat Süresi", tanim: "Alacakların ortalama kaç günde tahsil edildiğini gösteren oran; Ticari Alacaklar / (Net Satışlar/365)." },
            { terim: "Agresif İşletme Sermayesi Politikası", tanim: "Yüksek kısa vadeli finansman, düşük stok ve alacak hedefleyen; yüksek risk-yüksek getiri yapısındaki politika." },
            { terim: "Muhafazakar İşletme Sermayesi Politikası", tanim: "Düşük kısa vadeli finansman, yüksek stok ve alacak hedefleyen; düşük risk-düşük getiri yapısındaki politika." },
            { terim: "Nakit Döngüsü", tanim: "Stokların alımından müşteri tahsilatına kadar geçen süre; Stok devir süresi + Alacak tahsilat süresi - Borç ödeme süresi." },
            { terim: "Ticari Alacak Yönetimi", tanim: "Müşteri kredisi, tahsilat politikası ve iskonto koşullarının belirlenerek nakit akışını optimize etme süreci." },
          ],
          dikkatlar: [
            "ESM formülü: √(2DS/H) — D yıllık talep, S sipariş maliyeti, H birim bulundurma maliyeti; sadece sayısal soru olarak da gelebilir.",
            "Ortalama tahsilat süresi formülü = (Ticari Alacaklar / Net Satışlar) × 365; rakamı 365 ile çarparak gün cinsinden hesaplanır.",
            "Agresif politika yüksek getiri-yüksek risk; muhafazakar politika düşük getiri-düşük risk; ılımlı politika ikisinin ortasıdır.",
            "Nakit döngüsü kısaldıkça işletme sermayesi ihtiyacı azalır; yüksek alacak tahsilat süresi nakit döngüsünü uzatır.",
            "İskonto politikası alacak tahsilat süresini kısaltır ancak indirim maliyeti de doğurur; bu dengeyi analiz etmek kritiktir.",
          ],
        },
        questions: [
          {
            text: "İşletme sermayesi politikası ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yüksek işletme sermayesi her zaman yüksek kârlılık sağlar." },
              { id: "B", text: "İşletme sermayesi politikası kârlılık ile likidite arasında bir denge kurar; çok fazla tutmak kârlılığı düşürür, çok az tutmak likidite riskini artırır." },
              { id: "C", text: "İşletme sermayesi politikası finansal yönetim açısından önemsizdir." },
              { id: "D", text: "Optimal işletme sermayesi tüm sektörler için aynıdır." },
            ],
            correct: "B",
            explanation:
              "İşletme sermayesi politikası; kârlılık (düşük işletme sermayesi → daha az atıl varlık → yüksek kârlılık) ile likidite (yüksek işletme sermayesi → ödeme güçlüğüne karşı güvenlik) arasında bir denge kurma sanatıdır. Üç temel politika türü vardır: agresif (düşük işletme sermayesi, yüksek risk), muhafazakar (yüksek işletme sermayesi, düşük risk) ve ılımlı (denge).",
          },
          {
            text: "Ekonomik Sipariş Miktarı (ESM/EOQ) formülü aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "ESM = Yıllık Talep × Birim Maliyet" },
              { id: "B", text: "ESM = √(2 × Yıllık Talep × Sipariş Maliyeti / Birim Bulundurma Maliyeti)" },
              { id: "C", text: "ESM = Sipariş Maliyeti / Bulundurma Maliyeti" },
              { id: "D", text: "ESM = Yıllık Talep / 12" },
            ],
            correct: "B",
            explanation:
              "Ekonomik Sipariş Miktarı = √(2DS/H) formülüyle hesaplanır. Burada D yıllık talep, S sipariş başına maliyet (sipariş verme, taşıma), H birim başına yıllık bulundurma maliyetidir (depolama, sigorta, sermayenin fırsat maliyeti). Bu formül toplam stok maliyetini (sipariş maliyetleri + bulundurma maliyetleri) minimize eden optimal sipariş büyüklüğünü verir.",
          },
          {
            text: "Bir şirketin yıllık kredili satışları 730.000 TL, ortalama alacakları 100.000 TL ise ortalama tahsilat süresi yaklaşık kaç gündür?",
            options: [
              { id: "A", text: "30 gün" },
              { id: "B", text: "50 gün" },
              { id: "C", text: "60 gün" },
              { id: "D", text: "90 gün" },
            ],
            correct: "B",
            explanation:
              "Ortalama tahsilat süresi = (Alacaklar / Kredili Satışlar) × 365 = (100.000 / 730.000) × 365 ≈ 0,137 × 365 = 50 gün. Bu süre, şirketin müşterilerinden tahsilat yapmasının ortalama ne kadar sürdüğünü gösterir; süre uzadıkça nakit dönüş döngüsü uzar ve işletme sermayesi ihtiyacı artar.",
          },
          {
            text: "Aşağıdakilerden hangisi bir şirketin nakit tutma sebepleri arasında yer ALMAZ?",
            options: [
              { id: "A", text: "İşlem amacı (günlük ödemeleri yapmak için)" },
              { id: "B", text: "İhtiyat amacı (beklenmeyen ödemeler için)" },
              { id: "C", text: "Spekülatif amaç (fırsat çıktığında yatırım yapmak için)" },
              { id: "D", text: "Vergi amaçlı (vergi matrahını artırmak için)" },
            ],
            correct: "D",
            explanation:
              "Klasik finans teorisinde nakit tutmanın üç temel sebebi vardır: (1) işlem amacı — günlük operasyonel ödemeler için, (2) ihtiyat amacı — beklenmeyen giderlere karşı tampon, (3) spekülatif amaç — uygun yatırım fırsatı doğduğunda hızlı hareket etmek için. Vergi matrahını artırma motivasyonu yoktur; aksine fazla nakit tutmak kârlılığı düşürerek vergi avantajı sağlamaz.",
          },
          {
            text: "Tam Zamanında Üretim (JIT) felsefesinin temel hedefi nedir?",
            options: [
              { id: "A", text: "Stok seviyesini maksimize etmek" },
              { id: "B", text: "Stok seviyesini sıfıra yakın tutarak bulundurma maliyetlerini minimize etmek" },
              { id: "C", text: "Üretimi tamamen otomatik hale getirmek" },
              { id: "D", text: "Tedarikçi sayısını artırmak" },
            ],
            correct: "B",
            explanation:
              "Tam Zamanında Üretim (Just-In-Time/JIT); Toyota tarafından geliştirilen bir üretim felsefesidir. Temel hedefi stok seviyesini sıfıra yakın tutarak depolama, sigorta ve sermayenin fırsat maliyetlerini minimize etmektir. Bunun için tedarikçilerle yakın işbirliği, güvenilir lojistik ağı ve esnek üretim sistemleri gereklidir; hatalı veya geç teslimat durumunda üretim duracağı için yüksek koordinasyon ister.",
          },
        ],
      },
      // ──────────── Ders 4: Yatırım Projelerinin Değerlemesi ────────────
      {
        id: "m1007-l4",
        title: "Yatırım Projelerinin Değerlemesi — NBD, İVO ve Geri Ödeme",
        duration: "10 dk",
        summary: {
          title: "Yatırım Projelerinin Değerlemesi",
          intro:
            "Yatırım projelerinin değerlemesi; şirketin uzun vadeli yatırım kararlarında, projenin değer yaratıp yaratmayacağını ölçen sistematik analizdir. Beş temel yöntem kullanılır: Geri Ödeme Süresi, İskonto Edilmiş Geri Ödeme Süresi, Net Bugünkü Değer (NBD), İç Verim Oranı (İVO) ve Kârlılık Endeksi. NBD ve İVO en sık kullanılan yöntemlerdir.",
          sections: [
            {
              heading: "NBD ve İVO Yöntemleri",
              icon: "shield",
              items: [
                {
                  strong: "Net Bugünkü Değer (NBD):",
                  text: "Projenin sağlayacağı tüm nakit girişlerinin belirli bir iskonto oranıyla bugüne indirgenmiş değerinin yatırım maliyetinden çıkarılmasıdır; NBD > 0 ise proje kabul edilir.",
                },
                {
                  strong: "NBD Formülü:",
                  text: "NBD = -İlk Yatırım + Σ [Nakit Akışı_t / (1+r)^t]; r genellikle AOSM, t yıl sayısıdır.",
                },
                {
                  strong: "İç Verim Oranı (İVO):",
                  text: "Projenin NBD'sini sıfıra eşitleyen iskonto oranıdır; İVO > AOSM ise proje kabul edilir, İVO < AOSM ise reddedilir.",
                },
                {
                  strong: "NBD ve İVO Karşılaştırması:",
                  text: "Çoğu durumda iki yöntem aynı sonuca ulaşır; ancak farklı büyüklükteki projeler veya nakit akışı dağılımları farklı olduğunda çatışma yaşanabilir, bu durumda NBD tercih edilir.",
                },
                {
                  strong: "Çoklu İVO Sorunu:",
                  text: "Nakit akışlarının işaret değiştirdiği projelerde birden fazla İVO ortaya çıkabilir; bu durumda Düzeltilmiş İç Verim Oranı (MIRR) veya doğrudan NBD kullanılır.",
                },
              ],
            },
            {
              heading: "Geri Ödeme Süresi ve Diğer Yöntemler",
              icon: "trend",
              items: [
                {
                  strong: "Geri Ödeme Süresi:",
                  text: "İlk yatırım maliyetinin proje nakit akışlarıyla geri kazanılması için geçen süredir; basit ve sezgisel olmakla birlikte zaman değerini ve geri ödeme sonrası nakit akışlarını dikkate almaz.",
                },
                {
                  strong: "İskonto Edilmiş Geri Ödeme Süresi:",
                  text: "Nakit akışlarının iskonto edilerek hesaplandığı geri ödeme süresidir; paranın zaman değerini dikkate alır ancak yine geri ödeme sonrası akışları görmez.",
                },
                {
                  strong: "Kârlılık Endeksi (PI):",
                  text: "PI = (İskonto Edilmiş Nakit Girişleri) / İlk Yatırım; PI > 1 ise proje kabul edilir, sınırlı sermaye altında en yüksek PI'lı projeler tercih edilir.",
                },
                {
                  strong: "Yatırım Türleri:",
                  text: "Yenileme yatırımları (eskimiş varlıkların değiştirilmesi), genişleme yatırımları (kapasite artırımı), modernizasyon yatırımları (verimlilik artırımı), stratejik yatırımlar (uzun vadeli rekabet avantajı).",
                },
                {
                  strong: "Projeleri Etkileyen Unsurlar:",
                  text: "Vergi oranı, amortisman politikası, enflasyon, döviz kuru beklentisi, sermaye maliyeti ve siyasi/ekonomik risk değerleme sürecinde dikkate alınması gereken kritik unsurlardır.",
                },
              ],
            },
          ],
          tip: "NBD ve İVO'nun temel farkı: NBD tutar (TL) verir, İVO oran (%) verir. NBD > 0 = İVO > AOSM (aynı şeyi söyler). Çatışma halinde NBD esastır çünkü doğrudan firma değerine etkiyi gösterir. Geri ödeme süresi basit ama zaman değerini görmez — sadece destek aracı olarak kullanılır.",
          kavramlar: [
            { terim: "Net Bugünkü Değer (NBD)", tanim: "Yatırımın tüm nakit akışlarının uygun iskonto oranıyla bugüne indirgenmesi; NBD > 0 ise proje değer yaratır ve kabul edilir." },
            { terim: "İç Verimlilik Oranı (İVO)", tanim: "NBD'yi sıfıra eşitleyen iskonto oranı; İVO > AOSM ise proje kabul edilir, oran döner." },
            { terim: "Geri Ödeme Süresi", tanim: "Yatırımın başlangıç maliyetinin nakit girişleriyle ne kadar sürede geri kazanıldığını gösteren yöntem; zaman değerini dikkate almaz." },
            { terim: "İskontolu Geri Ödeme Süresi", tanim: "Nakit akışlarının zaman değerine göre iskonto edilerek hesaplanan geri ödeme süresi; standart yöntemin geliştirilmiş hali." },
            { terim: "AOSM ile İVO Karşılaştırması", tanim: "İVO > AOSM ise proje kabul, İVO < AOSM ise proje red; bu karşılaştırma NBD > 0 ile eş anlamlıdır." },
            { terim: "Nakit Akış Tahmini", tanim: "Yatırım değerlemesinde kullanılan gelecek dönem nakit girişleri ve çıkışlarının tahmini; yalnızca artımsal nakit akışları dahil edilir." },
            { terim: "NBD-İVO Çatışması", tanim: "Birden fazla projeyi karşılaştırırken NBD ve İVO'nun farklı projeler lehine karar üretmesi; bu durumda NBD esas alınır." },
          ],
          dikkatlar: [
            "NBD para birimi cinsinden (TL) sonuç verir; İVO oran (%) olarak sonuç verir — ikisinin karşılaştırılması doğrudan mümkün değildir.",
            "NBD > 0 = İVO > AOSM = proje kabul; NBD = 0 = İVO = AOSM = nötr; NBD < 0 = İVO < AOSM = proje red.",
            "İki proje arasında çatışma olduğunda NBD esastır çünkü firma değerine katkıyı doğrudan gösterir; İVO oransal olduğundan ölçek farklılıklarını görmez.",
            "Geri ödeme süresi zaman değerini dikkate almaz; bu nedenle tek başına kullanımı yanıltıcıdır — NBD veya İVO ile birlikte kullanılmalıdır.",
            "İVO'nun birden fazla değer alabileceği durumlar (multiple IRR) mevcut olabilir; bu NBD'nin bir dezavantajı değil, İVO'nundur.",
          ],
        },
        questions: [
          {
            text: "Net Bugünkü Değer (NBD) yöntemine göre bir yatırım projesi hangi koşulda kabul edilir?",
            options: [
              { id: "A", text: "NBD < 0" },
              { id: "B", text: "NBD = 0" },
              { id: "C", text: "NBD > 0" },
              { id: "D", text: "Her durumda kabul edilir" },
            ],
            correct: "C",
            explanation:
              "NBD yöntemine göre bir proje, NBD > 0 olduğunda kabul edilir. Bu, projenin sağlayacağı iskonto edilmiş nakit girişlerinin yatırım maliyetinden büyük olduğunu, dolayısıyla şirketin değerini artıracağını gösterir. NBD = 0 ise projenin yalnızca sermaye maliyetini karşıladığı, NBD < 0 ise değer yok ettiği anlamına gelir.",
          },
          {
            text: "İç Verim Oranı (İVO) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Projenin NBD'sini maksimize eden iskonto oranıdır." },
              { id: "B", text: "Projenin NBD'sini sıfıra eşitleyen iskonto oranıdır; İVO > AOSM ise proje kabul edilir." },
              { id: "C", text: "Yalnızca pozitif nakit akışlarının ortalamasıdır." },
              { id: "D", text: "İVO yöntemi NBD ile her zaman aynı sonucu verir." },
            ],
            correct: "B",
            explanation:
              "İç Verim Oranı (İVO), projenin Net Bugünkü Değerini (NBD) sıfıra eşitleyen iskonto oranıdır. Karar kuralı: İVO > AOSM (Ağırlıklı Ortalama Sermaye Maliyeti) ise proje kabul edilir, çünkü proje sermaye maliyetinin üzerinde getiri sağlamaktadır. NBD ile çoğu zaman aynı sonucu verir, ancak farklı büyüklükteki veya nakit akış yapılı projelerde çatışma yaşanabilir.",
          },
          {
            text: "Aşağıdaki yatırım projesi değerleme yöntemlerinden hangisi paranın zaman değerini dikkate ALMAZ?",
            options: [
              { id: "A", text: "Net Bugünkü Değer (NBD)" },
              { id: "B", text: "İç Verim Oranı (İVO)" },
              { id: "C", text: "Klasik Geri Ödeme Süresi" },
              { id: "D", text: "İskonto Edilmiş Geri Ödeme Süresi" },
            ],
            correct: "C",
            explanation:
              "Klasik (basit) Geri Ödeme Süresi yöntemi, nakit akışlarını iskonto etmeden topladığı için paranın zaman değerini dikkate almaz; bu nedenle yöntemin temel zayıflığıdır. NBD, İVO ve İskonto Edilmiş Geri Ödeme Süresi yöntemleri ise nakit akışlarını iskonto ederek zaman değerini hesaba katar. Klasik geri ödeme süresi sezgisel kolaylık nedeniyle hâlâ destek aracı olarak kullanılmaktadır.",
          },
          {
            text: "Kârlılık Endeksi (Profitability Index) yöntemine göre bir proje hangi koşulda kabul edilir?",
            options: [
              { id: "A", text: "PI < 1" },
              { id: "B", text: "PI = 0" },
              { id: "C", text: "PI > 1" },
              { id: "D", text: "PI = 0,5" },
            ],
            correct: "C",
            explanation:
              "Kârlılık Endeksi (PI) = İskonto Edilmiş Nakit Girişleri / İlk Yatırım formülüyle hesaplanır. PI > 1 ise proje kabul edilir; çünkü bu, projenin yatırılan her TL için 1 TL'den fazla iskonto edilmiş nakit ürettiğini gösterir. Sermaye kısıtlaması altındaki yatırım kararlarında PI özellikle yararlıdır: en yüksek PI'lı projeler önceliklendirilir.",
          },
          {
            text: "NBD ile İVO yöntemleri arasında çatışma çıktığında genellikle hangisi tercih edilir ve neden?",
            options: [
              { id: "A", text: "İVO tercih edilir, çünkü oran daha kolay anlaşılır." },
              { id: "B", text: "NBD tercih edilir, çünkü doğrudan firma değerine etkiyi (mutlak tutar) gösterir." },
              { id: "C", text: "Geri Ödeme Süresi tercih edilir." },
              { id: "D", text: "Her ikisi de aynı sonucu verdiği için seçim önemli değildir." },
            ],
            correct: "B",
            explanation:
              "NBD ile İVO arasında çatışma çıktığında (özellikle farklı büyüklükteki projelerde veya farklı nakit akışı yapılarında) genellikle NBD tercih edilir. Bunun nedeni NBD'nin doğrudan firma değerine yapacağı katkıyı (mutlak TL tutarı olarak) göstermesidir. İVO ise bir oran (yüzde) verdiği için projenin büyüklüğünü göz ardı edebilir; örneğin %30 İVO'lu küçük bir projeden ziyade %20 İVO'lu büyük bir proje firma değerini daha çok artırabilir.",
          },
        ],
      },
      // ──────────── Ders 5: Finansal Analiz ────────────
      {
        id: "m1007-l5",
        title: "Finansal Analiz — Oran Analizi ve Mali Tablolar",
        duration: "10 dk",
        summary: {
          title: "Finansal Analiz ve Oran Analizi",
          intro:
            "Finansal analiz; şirketin mali tablolarını (bilanço, gelir tablosu, nakit akış tablosu, özkaynak değişim tablosu) inceleyerek mali durum ve performansını değerlendirme sürecidir. Oran analizi, dikey analiz, yatay analiz ve nakit akım analizi temel yöntemlerdir. Oranlar likidite, faaliyet, finansal yapı (kaldıraç) ve kârlılık olmak üzere dört ana grupta toplanır.",
          sections: [
            {
              heading: "Likidite ve Faaliyet Oranları",
              icon: "shield",
              items: [
                {
                  strong: "Cari Oran:",
                  text: "Cari Oran = Dönen Varlıklar / Kısa Vadeli Yabancı Kaynaklar; kısa vadeli borç ödeme gücünü gösterir, genel kabul gören ideal değer 2'dir (sektöre göre değişir).",
                },
                {
                  strong: "Asit-Test (Hızlı) Oranı:",
                  text: "Asit-Test = (Dönen Varlıklar - Stoklar) / KVYK; stokların likiditeye dönüşümünün yavaş olabileceği gerçeğini yansıtır, ideal değer 1'dir.",
                },
                {
                  strong: "Nakit Oranı:",
                  text: "Nakit Oranı = (Hazır Değerler + Menkul Kıymetler) / KVYK; en sıkı likidite testidir, kriz dönemlerinde kritik önem taşır, ideal değer 0,2'dir.",
                },
                {
                  strong: "Stok Devir Hızı:",
                  text: "SDH = Satışların Maliyeti / Ortalama Stok; stokların yıl içinde kaç kez döndüğünü gösterir, yüksek devir hızı verimlilik göstergesidir.",
                },
                {
                  strong: "Alacak Devir Hızı:",
                  text: "ADH = Net Satışlar / Ortalama Ticari Alacaklar; tahsilat etkinliğini ölçer, düşük ADH alacakların yavaş tahsil edildiğini gösterir.",
                },
              ],
            },
            {
              heading: "Finansal Yapı ve Kârlılık Oranları",
              icon: "trend",
              items: [
                {
                  strong: "Borç/Özsermaye Oranı:",
                  text: "B/Ö = Toplam Borçlar / Özsermaye; finansal kaldıracın derecesini gösterir, yüksek oran finansal riskin yüksek olduğunu işaret eder.",
                },
                {
                  strong: "Faiz Karşılama Oranı:",
                  text: "FKO = FVÖK / Faiz Giderleri; şirketin faiz yükümlülüklerini karşılama gücünü ölçer, oran ne kadar yüksekse risk o kadar düşüktür.",
                },
                {
                  strong: "Brüt/Net Kâr Marjı:",
                  text: "Brüt Kâr Marjı = Brüt Kâr / Net Satışlar; Net Kâr Marjı = Net Kâr / Net Satışlar; satış kalitesini ve maliyet kontrolünü gösterir.",
                },
                {
                  strong: "ROA ve ROE:",
                  text: "ROA (Aktif Kârlılığı) = Net Kâr / Toplam Varlıklar; ROE (Özsermaye Kârlılığı) = Net Kâr / Özsermaye; ROE > ROA ise borç finansmanı kullanımı kârlıdır.",
                },
                {
                  strong: "DuPont Analizi:",
                  text: "ROE = Net Kâr Marjı × Aktif Devir Hızı × Finansal Kaldıraç; ROE'yi üç bileşene ayırarak performansı detaylı analiz eder.",
                },
              ],
            },
          ],
          tip: "Oran analizinde 'tek başına' bir oran anlamlı değildir — sektör ortalaması, geçmiş yıllar ve rakiplerle karşılaştırma şart. Cari Oran, Asit-Test ve Nakit Oranı sıkılık sırasına göre azalır. DuPont formülü ROE'nin üç sürücüsünü gösterir: marj (kârlılık), devir (verimlilik), kaldıraç (finansal yapı).",
          kavramlar: [
            { terim: "Cari Oran", tanim: "Dönen Varlıklar / Kısa Vadeli Yabancı Kaynaklar; kısa vadeli yükümlülükleri karşılama kapasitesini gösteren likidite oranı." },
            { terim: "Asit-Test Oranı", tanim: "(Dönen Varlıklar - Stoklar) / Kısa Vadeli Yabancı Kaynaklar; stokları dışarıda bırakarak daha sıkı likidite testi yapar." },
            { terim: "Nakit Oranı", tanim: "Hazır Değerler / Kısa Vadeli Yabancı Kaynaklar; yalnızca nakit ve nakde eşdeğer varlıkları likidite ölçütü olarak kullanan en sıkı oran." },
            { terim: "DuPont Analizi", tanim: "ROE'yi (özkaynak kârlılığı) üç bileşene ayıran analiz: Net Kâr Marjı (kârlılık) × Aktif Devir Hızı (verimlilik) × Finansal Kaldıraç." },
            { terim: "Borç/Özkaynak Oranı", tanim: "Toplam yabancı kaynağın toplam özkaynağa oranı; finansal kaldıraç ve finansal risk düzeyini gösteren yapı oranı." },
            { terim: "Aktif Devir Hızı", tanim: "Net Satışlar / Toplam Aktif; şirketin varlıklarını ne kadar verimli kullandığını gösteren verimlilik oranı." },
            { terim: "Kârlılık Oranları", tanim: "Brüt kâr marjı, faaliyet kâr marjı, net kâr marjı, ROA (aktif kârlılığı) ve ROE (özkaynak kârlılığı) gibi gelir-gider ilişkisini ölçen oranlar." },
          ],
          dikkatlar: [
            "Likidite oranları sıkılaşma sırasıyla: Cari Oran > Asit-Test Oranı > Nakit Oranı — her geçişte paydan bir varlık sınıfı çıkarılır.",
            "DuPont analizi: ROE = Net Kâr Marjı × Aktif Devir Hızı × Finansal Kaldıraç — hangi sürücünün ROE'yi etkilediğini belirlemek için kullanılır.",
            "Oran analizi karşılaştırma olmadan anlamsızdır; sektör ortalaması, tarihsel trend veya rakip verisi olmadan tek başına oran yorumlanamaz.",
            "Cari oran 2 hedef olarak bilinse de sektöre göre 'ideal' oran değişir; düşük stok döngüsü olan firmalarda 1'in altında bile olabilir.",
            "Borç/Özkaynak oranı yükseldikçe hem finansal kaldıraç hem de finansal risk artar; yüksek kaldıraç yüksek ROE verebilir ancak iflas riskini de büyütür.",
          ],
        },
        questions: [
          {
            text: "Cari Oran ile Asit-Test Oranı arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Cari Oran net kârı, Asit-Test ise brüt kârı kullanır." },
              { id: "B", text: "Asit-Test Oranı, dönen varlıklardan stokları çıkararak hesaplanır; çünkü stokların likidite hızı diğer dönen varlıklara göre yavaştır." },
              { id: "C", text: "Cari Oran sadece bankalar için, Asit-Test ise sanayi şirketleri için kullanılır." },
              { id: "D", text: "İki oran arasında matematiksel olarak hiçbir fark yoktur." },
            ],
            correct: "B",
            explanation:
              "Cari Oran = Dönen Varlıklar / KVYK iken Asit-Test (Hızlı) Oranı = (Dönen Varlıklar − Stoklar) / KVYK formülüyle hesaplanır. İki oran arasındaki temel fark, Asit-Test'in stokları hesaplamadan dışlamasıdır; çünkü stokların nakde çevrilmesi diğer dönen varlıklara göre daha uzun sürer ve değer kaybı riski taşır. Asit-Test daha sıkı bir likidite testidir.",
          },
          {
            text: "Bir şirketin net satışları 1.000.000 TL, ortalama ticari alacakları 200.000 TL ise Alacak Devir Hızı (ADH) kaçtır?",
            options: [
              { id: "A", text: "2" },
              { id: "B", text: "5" },
              { id: "C", text: "10" },
              { id: "D", text: "20" },
            ],
            correct: "B",
            explanation:
              "Alacak Devir Hızı = Net Satışlar / Ortalama Ticari Alacaklar = 1.000.000 / 200.000 = 5. Bu sonuç, şirketin yıl içinde alacaklarını ortalama 5 kez tahsil ettiğini gösterir. Buradan ortalama tahsilat süresi de hesaplanabilir: 365 / 5 = 73 gün. ADH ne kadar yüksekse tahsilat etkinliği o kadar iyidir.",
          },
          {
            text: "DuPont analizi formülüne göre Özsermaye Kârlılığı (ROE) hangi üç bileşene ayrılır?",
            options: [
              { id: "A", text: "Cari Oran × Asit-Test × Nakit Oranı" },
              { id: "B", text: "Net Kâr Marjı × Aktif Devir Hızı × Finansal Kaldıraç" },
              { id: "C", text: "Brüt Kâr × Net Kâr × Faaliyet Kârı" },
              { id: "D", text: "Borç / Özsermaye / Toplam Varlık" },
            ],
            correct: "B",
            explanation:
              "DuPont analizi: ROE = Net Kâr Marjı (Net Kâr/Satışlar) × Aktif Devir Hızı (Satışlar/Varlıklar) × Finansal Kaldıraç (Varlıklar/Özsermaye). Bu üçlü ayrıştırma ROE'nin üç temel sürücüsünü gösterir: kârlılık (marj), verimlilik (devir hızı) ve finansal yapı (kaldıraç). Bir firmanın ROE'si yüksekse, hangi bileşenden geldiğini görerek stratejik öncelik belirlenebilir.",
          },
          {
            text: "Faiz Karşılama Oranı (FKO) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "FKO = Net Kâr / Faiz Giderleri; oran ne kadar düşükse şirket o kadar güvenlidir." },
              { id: "B", text: "FKO = FVÖK / Faiz Giderleri; oran ne kadar yüksekse şirketin faiz ödeme gücü o kadar fazladır." },
              { id: "C", text: "FKO = Faiz Giderleri / Toplam Borçlar" },
              { id: "D", text: "FKO her zaman 1'in altında olmalıdır." },
            ],
            correct: "B",
            explanation:
              "Faiz Karşılama Oranı = FVÖK / Faiz Giderleri formülüyle hesaplanır. FVÖK (Faiz ve Vergi Öncesi Kâr) kullanılır çünkü faiz ödemesi vergi öncesi yapılır. Oran ne kadar yüksekse, şirketin faiz yükümlülüklerini karşılama gücü o kadar fazladır; bankalar ve kredi derecelendirme kuruluşları kredi değerliliğini ölçerken bu oranı dikkate alır. Genel kabul gören minimum değer 2-3'tür.",
          },
          {
            text: "Bir şirketin ROE'si %20, ROA'sı %10 ise bu durum aşağıdakilerden hangisini gösterir?",
            options: [
              { id: "A", text: "Şirket borç kullanmamaktadır." },
              { id: "B", text: "Şirketin borç finansmanı kullanımı kârlıdır; finansal kaldıraç olumlu çalışmaktadır (ROE > ROA)." },
              { id: "C", text: "Şirket zarardadır." },
              { id: "D", text: "Şirketin likidite sorunu vardır." },
            ],
            correct: "B",
            explanation:
              "ROE > ROA olduğunda finansal kaldıraç olumlu çalışıyor demektir; yani şirketin borç maliyetinden daha yüksek getiri elde ettiği anlamına gelir. Bu durumda borç kullanımı, özsermaye sahipleri için kârlılığı artırmaktadır. Eğer ROE < ROA olsaydı borç finansmanı zarar getiriyor olurdu. Borçsuz bir şirkette ROE = ROA olur.",
          },
        ],
      },

      // ──────────── Ders 6: Birleşme, Devir ve Bölünme ────────────
      {
        id: "m1007-l6",
        title: "Şirketlerde Birleşme, Devir ve Bölünme",
        duration: "8 dk",
        summary: {
          title: "Birleşme, Devir ve Bölünme",
          intro:
            "Şirketler büyüme, sinerji, pazar gücü veya vergi avantajları amacıyla birleşme (merger) ve devirler (acquisition) yoluyla yeniden yapılanabilir. Türkiye'de TTK'nın 134-158. maddeleri birleşmeleri; 159-179. maddeleri bölünmeleri; 180-190. maddeleri ise tür değiştirmeyi düzenler. Sermaye piyasası mevzuatı açısından halka açık şirket birleşmeleri SPK'nın birleşme ve bölünmeye ilişkin tebliğine tabidir.",
          sections: [
            {
              heading: "Birleşme Türleri ve Hukuki Çerçeve",
              icon: "shield",
              items: [
                {
                  strong: "Devralma Yoluyla Birleşme:",
                  text: "Bir şirketin diğerini bünyesine katmasıdır; devralınan şirket tüzel kişiliğini yitirir, aktif ve pasifleri devralan şirkete geçer. Örneğin A Şirketi B'yi devralırsa B'nin borç ve varlıkları A'ya geçer, B tüzel kişiliğini yitirir.",
                },
                {
                  strong: "Yeni Kuruluş Yoluyla Birleşme:",
                  text: "İki veya daha fazla şirketin tüm varlık ve yükümlülüklerini yeni kurulan bir şirkete devredip kendilerini feshetmesidir. Her iki şirket de kapanır, yeni bir hukuki kişilik doğar.",
                },
                {
                  strong: "Halka Açık Şirketlerde Birleşme — SPK Mevzuatı:",
                  text: "Halka açık şirketlerin birleşmelerinde SPK'nın II-23.3 sayılı 'Birleşme ve Bölünme Tebliği' uygulanır. Bağımsız değerleme, bilgi formu hazırlanması ve genel kurul onayı zorunludur.",
                },
                {
                  strong: "Zorunlu Pay Alım Teklifi:",
                  text: "Halka açık şirkette kontrolün el değiştirdiği birleşmelerde SPK mevzuatı uyarınca azınlık hissedarlarına yönelik zorunlu pay alım teklifi yükümlülüğü doğabilir.",
                },
              ],
            },
            {
              heading: "Bölünme Türleri",
              icon: "trend",
              items: [
                {
                  strong: "Tam Bölünme:",
                  text: "Şirketin tüm aktif ve pasifleri iki ya da daha fazla yeni veya mevcut şirkete devredilir; bölünen şirket tüzel kişiliğini yitirir. Hissedarlar bölünen şirketin paylarına karşılık yeni şirketlerin paylarını alır.",
                },
                {
                  strong: "Kısmi Bölünme:",
                  text: "Şirketin aktiflerinin bir kısmı bir veya birden fazla başka şirkete devredilir; bölünen şirket varlığını sürdürür. Kısmi bölünme sonucunda bölünen şirket küçülmekte, yeni/mevcut şirket ise büyümektedir.",
                },
              ],
            },
            {
              heading: "Birleşme Değerlemesi ve Sinerji",
              icon: "trend",
              items: [
                {
                  strong: "Değerleme Yöntemleri:",
                  text: "Birleşmelerde şirket değerlemesi için indirgenmiş nakit akımı (DCF), piyasa karşılaştırması (EV/EBITDA, F/K çarpanları) ve net aktif değeri (NAV) yöntemleri kullanılır. Halka açık şirketlerde bağımsız değerleme zorunludur.",
                },
                {
                  strong: "Sinerji Kavramı:",
                  text: "Birleşme sonrası elde edilmesi beklenen değer artışıdır; maliyet sinerjisi (ölçek ekonomisi, genel gider azaltımı) ve gelir sinerjisi (çapraz satış, pazar payı artışı) olmak üzere ikiye ayrılır.",
                },
                {
                  strong: "Goodwill (Şerefiye):",
                  text: "Bir şirkete ödenen satın alma bedelinin, satın alınan net varlıkların makul değerini aşan kısmıdır. TFRS 3 kapsamında goodwill yılda en az bir kez değer düşüklüğü testine tabi tutulur.",
                },
              ],
            },
          ],
          tip: "Sınavda devralma ile yeni kuruluş yoluyla birleşme farkı, halka açık şirket birleşmelerinde SPK zorunlulukları ve goodwill kavramı sıkça sorulur.",
          kavramlar: [
            { terim: "Devralma Yoluyla Birleşme", tanim: "Bir şirketin diğerini bünyesine katarak devralınan şirketin tüzel kişiliğinin sona ermesi." },
            { terim: "Yeni Kuruluş Yoluyla Birleşme", tanim: "İki veya daha fazla şirketin yeni kurulan bir şirkete tüm aktif-pasiflerini devredip feshedilmesi." },
            { terim: "Tam Bölünme", tanim: "Şirketin tüm varlık ve yükümlülüklerini yeni veya mevcut şirketlere devredip tüzel kişiliğini yitirmesi." },
            { terim: "Kısmi Bölünme", tanim: "Şirketin aktiflerinin bir bölümünü başka şirketlere devretmesi; şirket varlığını sürdürür." },
            { terim: "Goodwill (Şerefiye)", tanim: "Satın alınan şirket için ödenen bedelin net varlıkların makul değerini aşan kısmı; TFRS 3 kapsamında değer düşüklüğü testine tabidir." },
            { terim: "Sinerji", tanim: "Birleşme sonrası elde edilen ek değer; maliyet sinerjisi ve gelir sinerjisi olarak ikiye ayrılır." },
            { terim: "Zorunlu Pay Alım Teklifi", tanim: "Halka açık şirkette kontrolün el değiştirmesi durumunda SPK mevzuatının azınlık hissedarları için öngördüğü pay alım yükümlülüğü." },
          ],
          dikkatlar: [
            "Devralma yoluyla birleşmede devralınan şirket tüzel kişiliğini yitirir; yeni kuruluşta ise her iki şirket de kapanır.",
            "Halka açık şirket birleşmelerinde SPK'nın II-23.3 Tebliği uygulanır ve bağımsız değerleme zorunludur.",
            "Goodwill yalnızca satın alma yoluyla oluşur; içsel olarak geliştirilemez ve TFRS 3'e göre itfa edilmez, değer düşüklüğü testine tabi tutulur.",
            "Sinerji birleşme gerekçesinde kritik rol oynar; maliyet ve gelir sinerjilerini birbirinden ayırt edebilmek önemlidir.",
            "Kontrolün el değiştirdiği birleşmelerde azınlık hissedarlarına yönelik zorunlu pay alım teklifi yükümlülüğü doğabilir.",
          ],
        },
        questions: [
          {
            text: "Devralma yoluyla birleşmede hangi sonuç ortaya çıkar?",
            options: [
              { id: "A", text: "Her iki şirket de tüzel kişiliğini yitirir, yeni bir şirket kurulur." },
              { id: "B", text: "Devralınan şirket tüzel kişiliğini yitirir, aktif ve pasifleri devralan şirkete geçer." },
              { id: "C", text: "Her iki şirket ayrı tüzel kişiliklerini korur, sadece ortaklık paylaşımı gerçekleşir." },
              { id: "D", text: "Devralan şirket tüzel kişiliğini yitirir, devralınan devam eder." },
            ],
            correct: "B",
            explanation:
              "Devralma yoluyla birleşmede devralınan şirket tüzel kişiliğini yitirir ve tüm aktif-pasifleri devralan şirkete geçer. Devralan şirket varlığını sürdürür. Yeni kuruluş yoluyla birleşmede ise her iki şirket kapanır ve yeni bir hukuki kişilik oluşur.",
          },
          {
            text: "Halka açık şirketlerin birleşmelerinde uygulanacak SPK tebliği hangisidir?",
            options: [
              { id: "A", text: "II-14.1 Yatırım Fonlarına İlişkin Esaslar Tebliği" },
              { id: "B", text: "II-23.3 Birleşme ve Bölünme Tebliği" },
              { id: "C", text: "II-5.1 İzahname Tebliği" },
              { id: "D", text: "VII-128.1 Pay Tebliği" },
            ],
            correct: "B",
            explanation:
              "Halka açık şirketlerin birleşme ve bölünmelerinde SPK'nın II-23.3 sayılı 'Birleşme ve Bölünme Tebliği' uygulanır. Bu tebliğ bağımsız değerleme zorunluluğu, bilgi formu hazırlanması ve genel kurul onayı gibi koşulları düzenler.",
          },
          {
            text: "Kısmi bölünmeyi tam bölünmeden ayıran temel unsur nedir?",
            options: [
              { id: "A", text: "Kısmi bölünmede bölünen şirket tüzel kişiliğini yitirirken tam bölünmede sürdürür." },
              { id: "B", text: "Tam bölünmede bölünen şirket tüzel kişiliğini yitirirken kısmi bölünmede varlığını sürdürür." },
              { id: "C", text: "Tam bölünme yalnızca anonim şirketlere uygulanabilir." },
              { id: "D", text: "Kısmi bölünmede hissedarlar yeni payları almak zorundadır." },
            ],
            correct: "B",
            explanation:
              "Tam bölünmede bölünen şirket tüm aktif ve pasiflerini devrederek tüzel kişiliğini yitirir. Kısmi bölünmede ise aktiflerinin yalnızca bir bölümünü devreder ve şirket faaliyetini sürdürür.",
          },
          {
            text: "Goodwill (şerefiye) nasıl oluşur ve TFRS'ye göre muhasebeleştirilmesi nasıldır?",
            options: [
              { id: "A", text: "Şirketin kendi markasına yaptığı yatırımlarla oluşur; yıllık itfa edilir." },
              { id: "B", text: "Satın alma bedelinin alınan net varlıkların makul değerini aşması durumunda oluşur; itfa edilmez, yıllık değer düşüklüğü testine tabi tutulur." },
              { id: "C", text: "Satın alma bedelinden bağımsız olarak, yönetim kalitesine göre hesaplanır." },
              { id: "D", text: "Yalnızca kısmi bölünmelerde oluşur ve 5 yılda itfa edilir." },
            ],
            correct: "B",
            explanation:
              "Goodwill (şerefiye), bir işletmenin satın alınmasında ödenen bedelin, edinilen net varlıkların makul değerini aşan kısmıdır. TFRS 3'e göre goodwill itfa edilmez; ancak yılda en az bir kez (önemli olaylar sonrasında daha sık) değer düşüklüğü testine tabi tutulur.",
          },
          {
            text: "Birleşmelerde maliyet sinerjisinin temel kaynakları arasında hangisi yer alır?",
            options: [
              { id: "A", text: "Çapraz satış imkânları ve yeni pazar kazanımları" },
              { id: "B", text: "Ölçek ekonomisi ve yönetim giderlerinin azaltılması" },
              { id: "C", text: "Goodwill değerinin artması" },
              { id: "D", text: "Zorunlu pay alım teklifinden kâr edilmesi" },
            ],
            correct: "B",
            explanation:
              "Maliyet sinerjisi, birleşme sonrası üretim, satın alma ve genel yönetim giderlerinin azaltılmasıyla elde edilen tasarrufları ifade eder. Ölçek ekonomisi (birim başına maliyetin düşmesi) en klasik maliyet sinerjisi kaynağıdır. Çapraz satış ise gelir sinerjisine örnektir.",
          },
          {
            text: "Halka açık bir şirkette birleşme sonucu kontrol el değiştirdiğinde SPK mevzuatının öngördüğü yükümlülük nedir?",
            options: [
              { id: "A", text: "Şirketin borsadan çıkarılması" },
              { id: "B", text: "Azınlık hissedarlarına yönelik zorunlu pay alım teklifi yükümlülüğü" },
              { id: "C", text: "Birleşmenin otomatik olarak iptal edilmesi" },
              { id: "D", text: "Birleşmenin rekabet kurumu onayına sunulması" },
            ],
            correct: "B",
            explanation:
              "SPK mevzuatı, halka açık şirketlerde kontrolün el değiştirdiği işlemlerde azınlık hissedarlarını korumak amacıyla zorunlu pay alım teklifi yükümlülüğü öngörür. Bu sayede azınlık hissedarları paylarını piyasa koşullarından daha avantajlı bir fiyata satma imkânına kavuşur.",
          },
          {
            text: "Yeni kuruluş yoluyla birleşmeyi devralma yoluyla birleşmeden ayıran temel özellik nedir?",
            options: [
              { id: "A", text: "Yalnızca yeni kuruluşta bağımsız değerleme yapılır." },
              { id: "B", text: "Yeni kuruluşta her iki şirket de kapanır ve yeni bir hukuki kişilik doğar." },
              { id: "C", text: "Yeni kuruluşta devralınan şirket tüzel kişiliğini yitirir." },
              { id: "D", text: "Yeni kuruluşta birleşme SPK onayı gerektirmez." },
            ],
            correct: "B",
            explanation:
              "Yeni kuruluş yoluyla birleşmede her iki şirket de tüm aktif ve pasiflerini yeni kurulan şirkete devrederek tüzel kişiliklerini yitirir. Devralma yoluyla birleşmede ise yalnızca devralınan şirket ortadan kalkar, devralan şirket varlığını sürdürür.",
          },
        ],
      },

      // ──────────── Ders 7: Leasing, Faktöring ve Forfaiting ────────────
      {
        id: "m1007-l7",
        title: "Finansal Kiralama (Leasing), Faktöring ve Forfaiting",
        duration: "8 dk",
        summary: {
          title: "Leasing, Faktöring ve Forfaiting",
          intro:
            "Finansal kiralama (leasing), faktöring ve forfaiting; özellikle KOBİ'ler ve ihracatçı şirketler için banka kredisine alternatif finansman araçları sunan özelleşmiş finansal hizmetlerdir. Türkiye'de bu hizmetler 6361 sayılı Finansal Kiralama, Faktöring, Finansman ve Tasarruf Finansman Şirketleri Kanunu ile BDDK düzenlemeleri çerçevesinde yürütülür.",
          sections: [
            {
              heading: "Finansal Kiralama (Leasing)",
              icon: "shield",
              items: [
                {
                  strong: "Tanım:",
                  text: "Kiralayan (leasing şirketi) bir varlığı satın alarak kiracıya kullanım hakkı tanır; kiracı varlığı belirli periyodik ödemeler karşılığında kullanır. Vade sonunda varlık kiracıya devredilebilir veya yeniden kiraya verilebilir.",
                },
                {
                  strong: "Finansal Kiralama (Finance Lease):",
                  text: "Varlığın sahipliğine ilişkin risk ve faydaların büyük ölçüde kiracıya devredildiği kiralamadır. TFRS 16 kapsamında kiracı varlığı ve kira yükümlülüğünü bilançosuna alır. Kira ödemeleri faiz ve anapara ödeme olarak ayrılır.",
                },
                {
                  strong: "Faaliyet Kiralaması (Operating Lease):",
                  text: "Sahipliğe ait risk ve faydaların kiralayana ait kaldığı, daha kısa vadeli kiralamadır. TFRS 16 öncesinde bilanço dışı olarak kayıt edilirdi; artık kiracı kullanım hakkı varlığı ve kira borcu olarak bilançosuna almaktadır.",
                },
                {
                  strong: "Avantajları:",
                  text: "Vergi avantajı (kira ödemeleri gider yazılabilir), sermaye bağlamaksızın ekipmana erişim, bilanço verimliliği ve teknoloji yenileme esnekliği leasingin başlıca avantajlarıdır.",
                },
              ],
            },
            {
              heading: "Faktöring",
              icon: "trend",
              items: [
                {
                  strong: "Tanım:",
                  text: "Şirketin vadeli alacaklarını faktör şirketine (banka veya faktöring şirketi) devretmesidir. Faktör, alacağı vadeden önce peşin ödeyerek alacağı satın alır ve tahsilat riskini üstlenir.",
                },
                {
                  strong: "Rücu Edilemeyen (Non-recourse) Faktöring:",
                  text: "Alacağın tahsil edilememe riski faktör şirketine ait olup satıcı şirkete rücu edilmez. Bu tür faktöring bilanço dışılık (off-balance sheet) imkânı tanır.",
                },
                {
                  strong: "Rücu Edilebilir (Recourse) Faktöring:",
                  text: "Borçlu ödeme yapamazsa faktör, alacağı satıcı şirkete iade edebilir; tahsilat riski satıcıda kalmaktadır.",
                },
                {
                  strong: "İhracat Faktöringi:",
                  text: "Yurt dışı alıcılara yönelik vadeli satışlardan doğan alacakların faktöringe konu edilmesidir; özellikle KOBİ ihracatçılarda nakit akışını hızlandırır.",
                },
              ],
            },
            {
              heading: "Forfaiting",
              icon: "trend",
              items: [
                {
                  strong: "Tanım:",
                  text: "Forfaiting, ihracatçı firmanın orta-uzun vadeli ihracat alacaklarını (genellikle senetli alacaklar) rücu hakkı olmaksızın forfaiter'a (banka/finans kuruluşu) satmasıdır. Faktöring kısa vadeli iken forfaiting orta-uzun vadeli alacaklara yöneliktir.",
                },
                {
                  strong: "Farklar — Faktöring vs Forfaiting:",
                  text: "Faktöring kısa vadeli (180 güne kadar) alacakları kapsar; forfaiting ise 1–7 yıl vadeli büyük ölçekli ihracat işlemlerine uygulanır. Forfaiting'de senet/poliçe bedelinin %100'üne kadar finansman sağlanabilirken faktöringde genellikle %80–90'ı ödenir.",
                },
                {
                  strong: "Avantajları:",
                  text: "İhracatçı nakit akışını hızlandırır ve ülke/alıcı riskini forfaiter'a devreder. Avantajlar arasında bilanço dışılık, kur riskinden korunma ve tahsilat garantisi sayılabilir.",
                },
              ],
            },
          ],
          tip: "Sınavda leasing türleri (finansal/faaliyet), TFRS 16 etkisi, faktöring ile forfaiting'in karşılaştırılması ve rücu edilebilir/edilemez faktöring ayrımı sıkça çıkar.",
          kavramlar: [
            { terim: "Finansal Kiralama (Leasing)", tanim: "Kiralayan bir varlığı satın alıp kiracıya belirli ödemeler karşılığında kullanım hakkı tanıdığı finansman yöntemi." },
            { terim: "TFRS 16", tanim: "Kira sözleşmelerinin muhasebeleştirilmesini düzenleyen uluslararası standart; kiracının kullanım hakkı varlığı ve kira yükümlülüğünü bilançoya almasını gerektirir." },
            { terim: "Faktöring", tanim: "Şirketin vadeli alacaklarını faktör şirketine devrederek vadeden önce nakit elde etmesi işlemi." },
            { terim: "Rücu Edilemeyen Faktöring", tanim: "Alacağın tahsil edilememesi riskinin faktör şirketinde kaldığı; satıcı şirkete geri dönülemediği faktöring türü." },
            { terim: "Forfaiting", tanim: "İhracatçının orta-uzun vadeli senetli ihracat alacaklarını rücu hakkı olmaksızın forfaiter'a sattığı finansman yöntemi." },
            { terim: "İhracat Faktöringi", tanim: "Yurt dışı alıcılardan doğan kısa vadeli ihracat alacaklarının faktöringe konu edilmesi." },
            { terim: "6361 Sayılı Kanun", tanim: "Finansal Kiralama, Faktöring, Finansman ve Tasarruf Finansman Şirketleri Kanunu; bu hizmetlerin hukuki çerçevesini oluşturur." },
          ],
          dikkatlar: [
            "TFRS 16 ile faaliyet kiralamaları da bilançoya alınmaya başlamış; eskiden tüm faaliyet kiralamaları bilanço dışı tutulurdu.",
            "Rücu edilemeyen faktöringde tahsilat riski faktöre devredilir; rücu edilebilirde ise risk satıcıda kalır.",
            "Forfaiting orta-uzun vadeli (1–7 yıl) büyük ihracat alacakları için kullanılır; faktöring ise kısa vadeli (180 güne kadar) alacaklara yöneliktir.",
            "Türkiye'de leasing, faktöring ve forfaiting şirketleri BDDK denetimine tabi olup 6361 sayılı Kanun kapsamında faaliyet gösterir.",
            "Forfaiting'de finansman oranı %100'e ulaşabilirken faktöringde genellikle %80–90 ödenir.",
          ],
        },
        questions: [
          {
            text: "Finansal kiralama (leasing) ile faaliyet kiralaması (operating lease) arasındaki temel fark nedir?",
            options: [
              { id: "A", text: "Finansal kiralamada varlık kiralayan bilançosunda kalır; faaliyet kiralamada kiracı varlığı bilançosuna alır." },
              { id: "B", text: "Finansal kiralamada sahipliğe ait risk ve faydalar büyük ölçüde kiracıya devredilir; faaliyet kiralamada ise kiralayana aittir." },
              { id: "C", text: "Faaliyet kiralamada kira ödemeleri daha yüksektir." },
              { id: "D", text: "Finansal kiralama yalnızca taşınmazlara; faaliyet kiralaması yalnızca taşınırlara uygulanır." },
            ],
            correct: "B",
            explanation:
              "Finansal kiralamada varlığın sahipliğine ilişkin risk ve faydaların büyük bölümü kiracıya devredilir; kiracı varlığı ve kira yükümlülüğünü bilançosuna alır. Faaliyet kiralamada ise risk ve faydalar kiralayana ait kalmaya devam eder; TFRS 16 ile artık faaliyet kiralamaları da kiracının bilançosuna alınmaktadır.",
          },
          {
            text: "TFRS 16 standartının kiracılar açısından getirdiği temel değişiklik nedir?",
            options: [
              { id: "A", text: "Finansal kiralamalar bilanço dışı tutulmaya başlanmıştır." },
              { id: "B", text: "Faaliyet kiralamaları da kiracı tarafından kullanım hakkı varlığı ve kira borcu olarak bilançoya alınmaya başlanmıştır." },
              { id: "C", text: "Tüm kiralamalarda devlet teşviki zorunlu hale gelmiştir." },
              { id: "D", text: "Kira ödemeleri artık gider olarak yazılamamaktadır." },
            ],
            correct: "B",
            explanation:
              "TFRS 16 öncesinde faaliyet kiralamaları kiracı bilançosunda yer almazken, TFRS 16 ile birlikte kiracılar tüm kira sözleşmelerini (kısa vadeliler ve küçük varlıklar hariç) kullanım hakkı varlığı ve kira yükümlülüğü olarak bilançolarına almak zorundadır.",
          },
          {
            text: "Rücu edilemeyen (non-recourse) faktöring ile rücu edilebilir (recourse) faktöring arasındaki fark nedir?",
            options: [
              { id: "A", text: "Rücu edilemeyen faktöringde tahsilat riski satıcıda; rücu edilebilirde faktördedir." },
              { id: "B", text: "Rücu edilemeyen faktöringde tahsilat riski faktör şirketine devredilir; satıcı şirkete geri dönülemez." },
              { id: "C", text: "Rücu edilemeyen faktöring yalnızca yurt içi alacaklar için geçerlidir." },
              { id: "D", text: "Rücu edilebilir faktöring her zaman daha pahalıdır." },
            ],
            correct: "B",
            explanation:
              "Rücu edilemeyen faktöringde alacağın tahsil edilememesi riski faktör şirketine ait olup satıcı firmaya rücu edilemez; bu durum bilanço dışılık (off-balance sheet) imkânı tanır. Rücu edilebilir faktöringde ise borçlu ödeme yapmazsa faktör alacağı satıcıya iade edebilir.",
          },
          {
            text: "Forfaiting ile faktöringe kıyasla en belirgin özellik hangisidir?",
            options: [
              { id: "A", text: "Forfaiting kısa vadeli alacakları kapsar; faktöring orta-uzun vadeli." },
              { id: "B", text: "Forfaiting orta-uzun vadeli ihracat alacaklarını rücu hakkı olmaksızın kapsarken faktöring kısa vadeli." },
              { id: "C", text: "Forfaiting yurt içi alacaklara uygulanır; faktöring yalnızca ihracat alacaklarına." },
              { id: "D", text: "Forfaiting'de varlık bilançoya alınır; faktöringde alınmaz." },
            ],
            correct: "B",
            explanation:
              "Forfaiting, ihracatçının 1–7 yıl vadeli büyük ölçekli senetli ihracat alacaklarını rücu hakkı olmaksızın forfaiter'a devretmesidir. Faktöring ise 180 güne kadar olan kısa vadeli alacaklar için kullanılır. Forfaiting'de genellikle %100 finansman sağlanabilirken faktöringde oran daha düşüktür.",
          },
          {
            text: "Türkiye'de finansal kiralama, faktöring ve forfaiting şirketleri hangi kanun kapsamında düzenlenmektedir?",
            options: [
              { id: "A", text: "6362 Sayılı Sermaye Piyasası Kanunu" },
              { id: "B", text: "5411 Sayılı Bankacılık Kanunu" },
              { id: "C", text: "6361 Sayılı Finansal Kiralama, Faktöring, Finansman ve Tasarruf Finansman Şirketleri Kanunu" },
              { id: "D", text: "4632 Sayılı Bireysel Emeklilik Kanunu" },
            ],
            correct: "C",
            explanation:
              "Türkiye'de finansal kiralama (leasing), faktöring, finansman ve tasarruf finansman şirketleri 6361 sayılı Kanun kapsamında BDDK denetimine tabidir. Bu şirketler banka olmamalarına rağmen mevduat dışı kaynaklarla finansman sağlayan düzenlenmiş kuruluşlardır.",
          },
          {
            text: "Faktöringin KOBİ'ler açısından en temel finansal avantajı nedir?",
            options: [
              { id: "A", text: "Uzun vadeli yatırım projelerinin finansmanını kolaylaştırması" },
              { id: "B", text: "Vadeli alacakların peşin nakde çevrilmesiyle nakit akışının hızlandırılması" },
              { id: "C", text: "Şirketin özsermaye tabanını artırması" },
              { id: "D", text: "Banka kredisi maliyetlerinden tamamen bağımsız olması" },
            ],
            correct: "B",
            explanation:
              "Faktöringin temel avantajı, şirketin vadeli alacaklarını vadeleri gelmeden nakde çevirerek işletme sermayesi döngüsünü hızlandırmasıdır. KOBİ'ler için banka kredisine alternatif bir kısa vadeli finansman kaynağı işlevi görür.",
          },
          {
            text: "İhracat faktöringinin forfaitingden ayrıldığı temel özellik nedir?",
            options: [
              { id: "A", text: "İhracat faktöringi senetli alacaklara; forfaiting senetsiz alacaklara uygulanır." },
              { id: "B", text: "İhracat faktöringi kısa vadeli (genellikle 180 güne kadar) alacakları kapsar; forfaiting orta-uzun vadeli (1–7 yıl) büyük ölçekli ihracat alacaklarını." },
              { id: "C", text: "İhracat faktöringinde rücu hakkı yoktur; forfaitingde vardır." },
              { id: "D", text: "Forfaiting yalnızca AB ülkeleriyle ticarette kullanılır." },
            ],
            correct: "B",
            explanation:
              "İhracat faktöringi kısa vadeli (genellikle 90–180 güne kadar) yurt dışı alacaklar için kullanılırken forfaiting orta-uzun vadeli (1–7 yıl), büyük tutarlı ihracat alacakları (makine, ekipman, sermaye malları) için kullanılır. Her ikisinde de risk devri söz konusudur ancak vade ve kapsam farklıdır.",
          },
        ],
      },
    ],
  },
];