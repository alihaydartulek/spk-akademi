/* ─────────────────────────────────────────────────────────────────────────────
 * Temel Finans Matematiği ve Değerleme Yöntemleri (1009)
 *
 * Kaynak: SPL 1009 Çalışma Notu, 31 Aralık 2025 (257 sayfa)
 * Sınavlar: SPL Düzey 3, Türev Araçlar, Kurumsal Yönetim Derecelendirme,
 *           Kredi Derecelendirme
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1007 (Finansal Yönetim) ile bazı kavram örtüşmeleri olabilir ancak 1009
 * portföy teorisi, FVFM, Arbitraj Fiyatlama Modeli, temel/teknik analiz ve
 * portföy performans ölçümü gibi spesifik nicel konulara odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1009 } from "./mevzuat-1009";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008, ...mevzuat1009
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1009: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1009 TEMEL FİNANS MATEMATİĞİ VE DEĞERLEME YÖNTEMLERİ
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1009",
    title: "Modül · Temel Finans Matematiği ve Değerleme (1009)",
    lessons: [
      // ──────────── Ders 1: Paranın Zaman Değeri ────────────
      {
        id: "m1009-l1",
        title: "Paranın Zaman Değeri ve Faiz Hesaplamaları",
        duration: "10 dk",
        summary: {
          title: "Paranın Zaman Değeri",
          intro:
            "Paranın zaman değeri (Time Value of Money — TVM); aynı miktar paranın bugünkü değerinin gelecekteki değerinden yüksek olduğunu ifade eden temel finans ilkesidir. Bu ilke, yatırımcının tüketimini erteleyerek elde ettiği faiz getirisi ve enflasyon kayıplarını telafi eder. Faiz hesaplamaları basit ve bileşik olarak ikiye ayrılır; bileşik faiz finansta neredeyse her hesaplamada kullanılır.",
          sections: [
            {
              heading: "Faiz Türleri ve Hesaplama Yöntemleri",
              icon: "shield",
              items: [
                {
                  strong: "Basit Faiz:",
                  text: "Faiz yalnızca anapara üzerinden hesaplanır; FV = PV × (1 + r×n) formülü uygulanır, kısa vadeli işlemlerde (örn. iskonto) kullanılır.",
                },
                {
                  strong: "Bileşik Faiz:",
                  text: "Faiz hem anapara hem de birikmiş faiz üzerinden hesaplanır; FV = PV × (1+r)^n formülü kullanılır, finans matematiğinin temel hesaplama yöntemidir.",
                },
                {
                  strong: "Nominal ve Efektif Faiz Oranı:",
                  text: "Nominal oran yıllık ilan edilen orandır; efektif oran ise dönem içi kapitalizasyon dikkate alınarak hesaplanan gerçek getiri oranıdır: EAR = (1 + r/m)^m − 1.",
                },
                {
                  strong: "Sürekli Bileşik Faiz:",
                  text: "Kapitalizasyon sıklığı sonsuza giderse: FV = PV × e^(r×n); türev fiyatlama ve modelleme çalışmalarında sıkça kullanılır.",
                },
                {
                  strong: "Reel Faiz:",
                  text: "Nominal faizden enflasyonun arındırılması ile bulunur; Fisher Denklemi ile (1 + nominal) = (1 + reel) × (1 + enflasyon), yaklaşık reel ≈ nominal − enflasyon.",
                },
              ],
            },
            {
              heading: "Bugünkü Değer, Gelecek Değer ve Anüite",
              icon: "trend",
              items: [
                {
                  strong: "Bugünkü Değer (PV):",
                  text: "Gelecekteki bir nakit akışının bugünkü değeri; PV = FV / (1+r)^n; iskonto oranı ne kadar yüksekse PV o kadar düşüktür.",
                },
                {
                  strong: "Gelecek Değer (FV):",
                  text: "Bugünkü bir tutarın belirli bir vade sonundaki değeri; FV = PV × (1+r)^n; faiz oranı ve süre arttıkça FV katlanarak büyür.",
                },
                {
                  strong: "Sıradan Anüite:",
                  text: "Her dönem sonunda eşit miktarda yapılan ödemelerdir; PV = PMT × [1 − (1+r)^(-n)] / r; mortgage, kredi taksitleri, emekli aylıkları örneklerdir.",
                },
                {
                  strong: "Peşin Anüite:",
                  text: "Her dönem başında yapılan eşit ödemelerdir; sıradan anüitenin (1+r) ile çarpılmasıyla bulunur; kira ödemeleri tipik örnektir.",
                },
                {
                  strong: "Sürekli (Sınırsız) Anüite:",
                  text: "Sonsuza kadar devam eden eşit ödemelerin bugünkü değeri; PV = PMT / r; öncelikli pay temettüleri ve İngiltere'nin Consol tahvilleri örnektir.",
                },
              ],
            },
          ],
          tip: "Bileşik faiz formülü FV = PV × (1+r)^n her sınavda mutlaka çıkar. Sıradan anüite ile peşin anüite farkı: peşin = sıradan × (1+r). Sürekli anüite formülü PV = PMT / r — basit ama önemli, özellikle imtiyazlı pay değerlemesinde kullanılır.",
          kavramlar: [
            { terim: "Paranın Zaman Değeri", tanim: "Bugünkü bir para biriminin gelecekteki aynı tutardan daha değerli olduğu ilke; tüm finansal değerleme modellerinin temeli." },
            { terim: "Bileşik Faiz", tanim: "Faizin faize eklenerek büyümesi; FV = PV × (1+r)^n formülüyle hesaplanır — n dönem sayısı, r dönemlik faiz oranı." },
            { terim: "Anüite", tanim: "Eşit aralıklarla yapılan eşit tutarlı ödeme serisi; sıradan anüitede ödemeler dönem sonunda, peşin anüitede dönem başında yapılır." },
            { terim: "Peşin Anüite", tanim: "Ödemelerin dönem başında gerçekleştiği anüite türü; değeri sıradan anüite değeri × (1+r) ile hesaplanır." },
            { terim: "Sürekli Anüite (Perpetüite)", tanim: "Sonsuza kadar devam eden eşit ödeme serisi; PV = PMT/r formülüyle değerlenir; imtiyazlı paylar ve konsoller için kullanılır." },
            { terim: "İskonto Oranı", tanim: "Gelecekteki nakit akışlarını bugüne indirgemede kullanılan faiz oranı; risk primini ve risksiz faiz oranını içerir." },
            { terim: "Efektif Faiz Oranı", tanim: "Nominal faizin bileşik hesaba göre yıllık gerçek maliyeti; bileşik dönem sayısı arttıkça efektif oran nominalin üzerine çıkar." },
          ],
          dikkatlar: [
            "FV = PV × (1+r)^n bileşik faiz; basit faizde FV = PV × (1 + r × n) — uzun vadede iki formül arasındaki fark büyür.",
            "Peşin anüite = sıradan anüite × (1+r); ödemelerin dönem başında yapılması bir dönem daha faiz kazandırır.",
            "Sürekli anüite formülü PV = PMT/r; büyüme varsa PV = D1/(r−g) — Gordon Büyüme Modeli ile aynı matematiksel yapıdadır.",
            "Efektif faiz oranı nominal faize her zaman eşit veya büyüktür; bileşik dönem sıklaştıkça (aylık → günlük) efektif oran yükselir.",
            "İskonto oranı yükseldikçe gelecekteki nakit akışlarının bugünkü değeri düşer; ters ilişki tüm değerleme sorularının temelidir.",
          ],
        },
        questions: [
          {
            text: "Yıllık %10 bileşik faiz oranıyla 5 yıl sonra 1.000 TL elde etmek için bugün ne kadar yatırılmalıdır? (Yaklaşık)",
            options: [
              { id: "A", text: "550 TL" },
              { id: "B", text: "620 TL" },
              { id: "C", text: "680 TL" },
              { id: "D", text: "750 TL" },
            ],
            correct: "B",
            explanation:
              "PV (Bugünkü Değer) = FV / (1+r)^n formülü ile hesaplanır. PV = 1.000 / (1,10)^5 = 1.000 / 1,6105 ≈ 620,92 TL. Bileşik faizde her yıl faiz hem anaparaya hem de birikmiş faize uygulandığı için PV, basit faize göre daha düşük çıkar.",
          },
          {
            text: "Nominal faiz oranı %12 ve aylık kapitalizasyon yapılan bir hesabın efektif yıllık faiz oranı (EAR) yaklaşık olarak kaçtır?",
            options: [
              { id: "A", text: "%12,00" },
              { id: "B", text: "%12,68" },
              { id: "C", text: "%14,00" },
              { id: "D", text: "%15,50" },
            ],
            correct: "B",
            explanation:
              "EAR = (1 + r/m)^m − 1 formülüyle hesaplanır. r = 0,12, m = 12 (aylık kapitalizasyon). EAR = (1 + 0,12/12)^12 − 1 = (1,01)^12 − 1 ≈ 1,1268 − 1 = 0,1268 = %12,68. Kapitalizasyon sıklığı arttıkça nominal ile efektif faiz arasındaki fark açılır.",
          },
          {
            text: "Sıradan (ordinary) anüite ile peşin (annuity due) anüite arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Sıradan anüitenin faizi daha yüksektir." },
              { id: "B", text: "Sıradan anüitede ödemeler dönem sonlarında, peşin anüitede ise dönem başlarında yapılır; peşin anüitenin değeri = sıradan anüite × (1+r)." },
              { id: "C", text: "Peşin anüite yalnızca yıllık ödemelerde kullanılır." },
              { id: "D", text: "İki anüite türü arasında matematiksel fark yoktur." },
            ],
            correct: "B",
            explanation:
              "Sıradan anüitede ödemeler her dönemin sonunda yapılır (örn. kredi taksitleri); peşin anüitede ise her dönemin başında yapılır (örn. ön ödemeli kira). Peşin anüitenin tüm ödemeleri bir dönem önce yapıldığı için bugünkü/gelecek değeri sıradan anüitenin (1+r) katı kadar fazla olur.",
          },
          {
            text: "Sürekli (sınırsız) anüitenin bugünkü değeri formülü aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "PV = PMT × n" },
              { id: "B", text: "PV = PMT × (1+r)^n" },
              { id: "C", text: "PV = PMT / r" },
              { id: "D", text: "PV = PMT × [1 − (1+r)^(-n)] / r" },
            ],
            correct: "C",
            explanation:
              "Sürekli (sonsuz) anüite, sonsuza kadar devam eden eşit ödemelerin bugünkü değeridir. Formülü PV = PMT / r olarak basit bir bölme şeklindedir. Bu formül sabit kâr payı ödeyen imtiyazlı paylar ve İngiltere'nin Consol tahvilleri gibi sonsuz ömürlü enstrümanların değerlemesinde kullanılır. Örneğin yıllık 100 TL temettü ve %10 iskonto oranıyla PV = 100/0,10 = 1.000 TL.",
          },
          {
            text: "Fisher Denklemine göre nominal faiz oranı %15 ve enflasyon oranı %10 ise yaklaşık reel faiz oranı kaçtır?",
            options: [
              { id: "A", text: "%5" },
              { id: "B", text: "%15" },
              { id: "C", text: "%25" },
              { id: "D", text: "%-5" },
            ],
            correct: "A",
            explanation:
              "Fisher Denklemi: (1 + Nominal) = (1 + Reel) × (1 + Enflasyon). Tam hesaplama: 1,15 = (1 + r) × 1,10 → r = 1,15/1,10 − 1 = 0,0455 ≈ %4,55. Yaklaşık formül ile reel ≈ nominal − enflasyon = 15 − 10 = %5. Yüksek enflasyonlu ortamlarda yaklaşık formülün hatası büyür; tam Fisher formülü tercih edilmelidir.",
          },
        ],
      },
      // ──────────── Ders 2: Getiri ve Risk ────────────
      {
        id: "m1009-l2",
        title: "Getiri ve Risk — Beklenen Getiri ve Standart Sapma",
        duration: "9 dk",
        summary: {
          title: "Getiri ve Risk",
          intro:
            "Getiri ve risk, finansal varlıkların değerlemesinin iki temel boyutudur. Yatırımcılar daha yüksek getiri için daha yüksek risk üstlenmek zorundadır — bu risk-getiri dengelemesi (trade-off) finans teorisinin temel ilkesidir. Risk; gerçekleşen getirinin beklenen getiriden sapma derecesi olarak ölçülür ve genellikle standart sapma ile ifade edilir.",
          sections: [
            {
              heading: "Getiri Türleri ve Hesaplaması",
              icon: "shield",
              items: [
                {
                  strong: "Elde Tutma Getirisi (Holding Period Return):",
                  text: "ETP = (P_son − P_ilk + Kâr Payı) / P_ilk; bir varlığın belirli bir dönemde sağladığı toplam getiriyi gösterir.",
                },
                {
                  strong: "Para-Ağırlıklı Getiri (Money-Weighted Return):",
                  text: "İç Verim Oranı (İVO) yöntemiyle hesaplanır; nakit giriş-çıkışlarının zamanlaması ve büyüklüğü dikkate alınır, bireysel yatırımcı performansını ölçer.",
                },
                {
                  strong: "Zaman-Ağırlıklı Getiri (Time-Weighted Return):",
                  text: "Para giriş-çıkışlarından bağımsız, dönemsel getirilerin geometrik ortalamasıdır; portföy yöneticisinin performansını ölçmek için kullanılır.",
                },
                {
                  strong: "Yıllıklandırılmış Getiri:",
                  text: "Daha uzun veya daha kısa dönemli getirilerin yıllık eşdeğerine dönüştürülmesi: (1 + getiri)^(1/yıl) − 1; karşılaştırmalı analizde standart birim sağlar.",
                },
                {
                  strong: "Beklenen Getiri E(R):",
                  text: "E(R) = Σ Pi × Ri; her olasılığın getiriyle çarpılarak toplanmasıdır; ileriye dönük (ex-ante) tahmin sağlar, tarihsel ortalamalardan farklıdır.",
                },
              ],
            },
            {
              heading: "Risk Ölçümü ve Portföy Riski",
              icon: "trend",
              items: [
                {
                  strong: "Varyans ve Standart Sapma:",
                  text: "Tek bir varlığın riskinin ölçüsüdür; varyans = E[(R − E(R))²], standart sapma = √varyans; standart sapma getiri ile aynı birimdedir, anlaşılması daha kolaydır.",
                },
                {
                  strong: "Portföy Beklenen Getirisi:",
                  text: "Portföydeki varlıkların ağırlıklı ortalamasıdır; E(Rp) = Σ wi × E(Ri); ağırlıklar varlığın portföy içindeki yüzdesidir.",
                },
                {
                  strong: "Portföy Varyansı (İki Varlık):",
                  text: "σp² = w1²σ1² + w2²σ2² + 2w1w2σ1σ2ρ12; ρ varlıklar arası korelasyon katsayısıdır, çeşitlendirme etkisinin temelidir.",
                },
                {
                  strong: "Korelasyon ve Çeşitlendirme:",
                  text: "ρ = -1 mükemmel ters, ρ = +1 mükemmel pozitif, ρ = 0 ilişkisiz; korelasyon ne kadar düşükse çeşitlendirme yararı o kadar yüksek.",
                },
                {
                  strong: "Sistematik ve Sistematik Olmayan Risk:",
                  text: "Sistematik risk piyasaya özgü (faiz, enflasyon, savaş) — çeşitlendirilemez; sistematik olmayan risk şirkete özgü — çeşitlendirme ile elimine edilebilir.",
                },
              ],
            },
          ],
          tip: "Para-ağırlıklı getiri = İVO (yatırımcı için), Zaman-ağırlıklı getiri = geometrik ortalama (yönetici için) — sınavın klasik tuzağıdır. İki varlıklı portföyde korelasyon (ρ) ne kadar düşükse çeşitlendirme yararı o kadar büyük. Sistematik risk = piyasa riski = beta ile ölçülür; çeşitlendirilemez.",
          kavramlar: [
            { terim: "Beklenen Getiri", tanim: "Olası senaryoların olasılıkla ağırlıklandırılmış ortalama getirisi; E(R) = Σ[P(i) × R(i)] formülüyle hesaplanır." },
            { terim: "Standart Sapma (Risk)", tanim: "Getirinin beklenen değerden ortalama sapmasının kare kökü; toplam riski ölçer ve portföy dağılımını gösterir." },
            { terim: "Sistematik Risk", tanim: "Tüm piyasayı etkileyen, çeşitlendirmeyle giderilemeyen risk; beta katsayısıyla ölçülür (faiz, ekonomik konjonktür vb.)." },
            { terim: "Sistematik Olmayan Risk", tanim: "Şirkete veya sektöre özgü, çeşitlendirmeyle azaltılabilen risk; yeterli çeşitlendirme sonrası sıfıra yaklaşır." },
            { terim: "Korelasyon Katsayısı (ρ)", tanim: "İki varlık getirisinin birlikte hareket derecesini -1 ile +1 arasında gösteren katsayı; ρ = -1 tam ters hareket, ρ = +1 tam aynı yönde hareket." },
            { terim: "Para-Ağırlıklı Getiri", tanim: "İVO yöntemiyle hesaplanan, nakit akışlarının zamanlamasına duyarlı getiri; yatırımcının gerçek deneyimini yansıtır." },
            { terim: "Zaman-Ağırlıklı Getiri", tanim: "Nakit akışlarından bağımsız, geometrik ortalama yöntemiyle hesaplanan getiri; portföy yöneticisinin performansını ölçmede kullanılır." },
          ],
          dikkatlar: [
            "Para-ağırlıklı getiri = İVO (yatırımcı için); zaman-ağırlıklı getiri = geometrik ortalama (yönetici performansı için) — 'hangisi için kullanılır' sorusu sınavın klasiğidir.",
            "Korelasyon ρ = -1 portföy riskini en fazla azaltır; ρ = +1 çeşitlendirme sağlamaz; pratikte ρ < 1 her koşulda bir miktar çeşitlendirme sunar.",
            "Sistematik risk çeşitlendirmeyle giderilemez; yeterli sayıda hisse eklendikten sonra kalan risk sistematik risktir.",
            "Standart sapma toplam riski ölçer; CAPM'de ise yalnızca sistematik risk (beta) fiyatlanır — bu ayrım sınavda karışıklığa neden olur.",
            "Portföy standart sapması bireysel standart sapmaların ağırlıklı ortalamasından KÜÇÜKtür (ρ < 1 olduğunda); tam formül kovaryansı içerir.",
          ],
        },
        questions: [
          {
            text: "Bir yatırımcı bir hisse senedini 100 TL'den almış, dönem sonunda 110 TL olmuş ve dönem içinde 5 TL kâr payı ödemesi yapmıştır. Elde tutma getirisi nedir?",
            options: [
              { id: "A", text: "%5" },
              { id: "B", text: "%10" },
              { id: "C", text: "%15" },
              { id: "D", text: "%20" },
            ],
            correct: "C",
            explanation:
              "Elde Tutma Getirisi = (Son Fiyat − İlk Fiyat + Kâr Payı) / İlk Fiyat = (110 − 100 + 5) / 100 = 15 / 100 = %15. Bu formül hem fiyat artışını (sermaye kazancı) hem de dönem içinde alınan kâr paylarını (gelir bileşeni) içerir; toplam getiriyi yansıtır.",
          },
          {
            text: "Para-ağırlıklı getiri ile zaman-ağırlıklı getiri arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İkisi her zaman aynı sonucu verir." },
              { id: "B", text: "Para-ağırlıklı getiri (İVO) nakit giriş-çıkış zamanlamasını dikkate alır ve bireysel yatırımcı performansını ölçer; zaman-ağırlıklı getiri ise nakit hareketlerinden bağımsızdır ve portföy yöneticisi performansını ölçer." },
              { id: "C", text: "Para-ağırlıklı getiri yalnızca tahvillerde kullanılır." },
              { id: "D", text: "Zaman-ağırlıklı getiri yalnızca yıllık bazda hesaplanır." },
            ],
            correct: "B",
            explanation:
              "Para-ağırlıklı getiri (İç Verim Oranı yöntemiyle) yatırımcının yaptığı tüm nakit giriş ve çıkışlarının zamanlaması ve büyüklüğünü dikkate aldığı için bireysel yatırımcı performansını ölçer. Zaman-ağırlıklı getiri ise dönemsel getirilerin geometrik ortalamasıdır; nakit hareketlerinin etkisini ortadan kaldırdığı için portföy yöneticisinin yetkinliğini ölçmek için standart yöntemdir (CFA, GIPS standartları zorunlu kılar).",
          },
          {
            text: "İki varlıklı bir portföyde varlıklar arasındaki korelasyon katsayısı (ρ) -1 ise çeşitlendirme yararı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Çeşitlendirme yararı yoktur." },
              { id: "B", text: "Mükemmel ters korelasyon teorik olarak portföy riskini sıfıra indirebilir; en yüksek çeşitlendirme yararı sağlar." },
              { id: "C", text: "Portföy riski iki varlığın riskinin ortalamasına eşittir." },
              { id: "D", text: "Korelasyon portföy riskini etkilemez." },
            ],
            correct: "B",
            explanation:
              "Korelasyon katsayısı -1 olan iki varlık 'mükemmel ters korelasyon' içindedir; biri yükselirken diğeri tam ters yönde hareket eder. Portföy varyansı formülü σp² = w1²σ1² + w2²σ2² + 2w1w2σ1σ2ρ12'de ρ = -1 olduğunda uygun ağırlıklarla portföy riski teorik olarak sıfıra indirilebilir. Bu nedenle korelasyon ne kadar düşükse (özellikle negatifse) çeşitlendirme yararı o kadar yüksektir.",
          },
          {
            text: "Sistematik risk ile sistematik olmayan risk arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Sistematik risk şirkete özgüdür ve çeşitlendirme ile yok edilebilir." },
              { id: "B", text: "Sistematik risk piyasaya özgüdür (faiz, enflasyon, savaş) ve çeşitlendirilemez; sistematik olmayan risk şirkete özgüdür ve çeşitlendirme ile elimine edilebilir." },
              { id: "C", text: "İki risk türü aynı şeydir." },
              { id: "D", text: "Sistematik risk yalnızca tahvilleri etkiler." },
            ],
            correct: "B",
            explanation:
              "Sistematik risk (piyasa riski); tüm piyasayı veya geniş varlık sınıflarını etkileyen genel risklerdir (faiz değişimi, enflasyon, jeopolitik şoklar). Beta katsayısı ile ölçülür ve çeşitlendirme ile yok edilemez. Sistematik olmayan risk (özgün/şirket riski) ise belirli bir şirkete veya sektöre özgüdür (yönetim hatası, ürün başarısızlığı); yeterince çeşitlendirilmiş bir portföyle elimine edilebilir. CAPM'e göre yatırımcılar yalnızca sistematik risk için ek getiri talep eder.",
          },
          {
            text: "Bir portföyde A varlığının ağırlığı %60 ve beklenen getirisi %15, B varlığının ağırlığı %40 ve beklenen getirisi %10 ise portföyün beklenen getirisi nedir?",
            options: [
              { id: "A", text: "%10" },
              { id: "B", text: "%12" },
              { id: "C", text: "%13" },
              { id: "D", text: "%15" },
            ],
            correct: "C",
            explanation:
              "Portföy beklenen getirisi = Σ (wi × E(Ri)) = (0,60 × 15) + (0,40 × 10) = 9 + 4 = %13. Portföy beklenen getirisi her zaman varlıkların ağırlıklı ortalamasıdır; bu doğrusal bir ilişkidir. Ancak portföy riski (varyans/standart sapma) için aynı durum geçerli değildir — korelasyon faktörü devreye girdiği için risk ortalamadan daha düşük olabilir.",
          },
        ],
      },
      // ──────────── Ders 3: Portföy Teorisi ────────────
      {
        id: "m1009-l3",
        title: "Portföy Teorisi — Markowitz Modeli ve Etkin Sınır",
        duration: "9 dk",
        summary: {
          title: "Modern Portföy Teorisi",
          intro:
            "Modern Portföy Teorisi (MPT); 1952'de Harry Markowitz tarafından geliştirilen, yatırımcıların verili bir risk düzeyinde maksimum beklenen getiriyi sağlayan portföyleri seçeceğini ileri süren teoridir. Teorinin temel katkıları: çeşitlendirme yararının matematiksel ispatı, etkin sınır (efficient frontier) kavramı ve risksiz varlığın eklenmesiyle Sermaye Pazarı Doğrusu'nun türetilmesidir.",
          sections: [
            {
              heading: "Fayda Teorisi ve Etkin Sınır",
              icon: "shield",
              items: [
                {
                  strong: "Fayda Teorisi:",
                  text: "Yatırımcılar getiri arttıkça, risk azaldıkça fayda elde eder; her yatırımcının kendine özgü 'risk iştahı' ve fayda fonksiyonu vardır.",
                },
                {
                  strong: "Kayıtsızlık Eğrileri:",
                  text: "Bir yatırımcının aynı fayda düzeyini sağladığı risk-getiri kombinasyonlarını gösterir; risk averse yatırımcılarda dışbükeydir, eğim 'risk priminin' ölçüsüdür.",
                },
                {
                  strong: "Ortalama-Varyans Modeli:",
                  text: "Markowitz'in temel modeli; portföyleri ortalama getirisi ve varyansı (riski) açısından değerlendirir, normal dağılım varsayar.",
                },
                {
                  strong: "Etkin Portföy:",
                  text: "Aynı risk düzeyinde daha yüksek getiri sağlayan başka portföy yoksa, ya da aynı getiri düzeyinde daha düşük risk sağlayan başka portföy yoksa, o portföy etkindir.",
                },
                {
                  strong: "Etkin Sınır (Efficient Frontier):",
                  text: "Tüm etkin portföylerin oluşturduğu eğridir; risk-getiri grafiğinde sol üst kısımda yer alır, optimal portföy bu eğri üzerindedir.",
                },
              ],
            },
            {
              heading: "Risksiz Varlık ve Sermaye Pazarı Doğrusu",
              icon: "trend",
              items: [
                {
                  strong: "Risksiz Varlık:",
                  text: "Beklenen getirisi kesin olan, varyansı sıfır olan varlıktır; pratikte kısa vadeli devlet borçlanma senetleri (Hazine Bonosu) yaklaşık olarak risksiz kabul edilir.",
                },
                {
                  strong: "Risksiz Varlık ile Çeşitlendirme:",
                  text: "Risksiz varlık portföye eklendiğinde etkin sınır doğrusal hale gelir; her yatırımcı bu doğru üzerinde tercihlerine göre nokta seçer.",
                },
                {
                  strong: "Sermaye Pazarı Doğrusu (CML):",
                  text: "Risksiz varlığın getirisinden başlayarak pazar portföyüne (M) teğet geçen doğrudur; tüm verimli portföyler bu doğru üzerindedir.",
                },
                {
                  strong: "Pazar Portföyü:",
                  text: "Tüm riskli varlıkların piyasa kapitalizasyonu ağırlıklı portföyüdür; teorik olarak tüm yatırımcılar aynı pazar portföyünü tutar (Tobin'in Ayrılık Teoremi).",
                },
                {
                  strong: "Portföy Seçimi Teoremi:",
                  text: "Risk tercihinden bağımsız olarak tüm yatırımcılar aynı riskli portföyü (pazar portföyü) tutar; risk iştahları yalnızca risksiz varlık-pazar portföyü ağırlığını değiştirir.",
                },
              ],
            },
          ],
          tip: "Markowitz'in MPT teorisi 1990 Nobel ödülü kazandı. Etkin sınır = sol üst eğri, risksiz varlık eklendiğinde doğrusal CML olur. Tobin'in ayrılık teoremi: tüm yatırımcılar aynı riskli portföyü (pazar portföyü) tutar — sadece risksiz varlık ile ağırlıklarını değiştirir.",
          kavramlar: [
            { terim: "Modern Portföy Teorisi (MPT)", tanim: "Harry Markowitz'in 1952'de geliştirdiği; varlıklar arasındaki korelasyonu kullanarak belirli risk düzeyi için getiriyi maksimize eden portföy oluşturma çerçevesi." },
            { terim: "Etkin Sınır", tanim: "Belirli bir risk düzeyinde en yüksek beklenen getiriyi sağlayan portföylerin oluşturduğu eğri; sol üst kısımda yer alan portföyler etkindir." },
            { terim: "Sermaye Piyasası Doğrusu (CML)", tanim: "Risksiz varlık ile pazar portföyünü birleştiren doğrusal yatırım fırsatı seti; tüm etkin portföyler bu doğru üzerindedir." },
            { terim: "Pazar Portföyü", tanim: "Piyasadaki tüm riskli varlıkları piyasa değeri ağırlıklarıyla içeren teorik portföy; CML'nin riskli uç noktasıdır." },
            { terim: "Tobin'in Ayrılık Teoremi", tanim: "Risk tercihinden bağımsız olarak tüm yatırımcıların aynı riskli portföyü (pazar portföyü) tutacağını; sadece risksiz varlıkla oranı değiştireceğini öne süren teorem." },
            { terim: "Minimum Varyans Portföyü", tanim: "Etkin sınır üzerinde en düşük riske (varyansa) sahip olan portföy; bunun solundaki portföyler etkin değildir." },
            { terim: "Çeşitlendirme Faydası", tanim: "Mükemmel korelasyonu olmayan varlıkları birleştirmenin portföy riskini bireysel varlıkların ağırlıklı ortalamasının altına düşürmesi." },
          ],
          dikkatlar: [
            "Etkin sınır, tüm mümkün portföylerin sol üst köşesini oluşturan eğridir; aynı risk için daha yüksek getiri sağlar.",
            "Risksiz varlık eklenince etkin sınır CML'ye (doğruya) dönüşür; CML etkin sınırın üzerinde kalan portföyleri mümkün kılar.",
            "Tobin'in ayrılık teoreminde risk tercihinden bağımsız olarak tüm yatırımcılar aynı riskli portföyü (pazar portföyü) tutar; sadece risksiz varlıkla oran değişir.",
            "Minimum varyans portföyü etkin sınırın en sol noktasıdır; bu noktanın solundaki portföyler etkin değildir.",
            "MPT çeşitlendirme faydasını matematiksel olarak kanıtlar: ρ < 1 iken portföy riski bireysel risklerin ağırlıklı ortalamasından KÜÇÜKTÜR.",
          ],
        },
        questions: [
          {
            text: "Modern Portföy Teorisi'nde 'etkin portföy' kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca en yüksek getiriyi sağlayan portföydür." },
              { id: "B", text: "Aynı risk düzeyinde daha yüksek getiri sağlayan başka portföy bulunmuyorsa veya aynı getiri düzeyinde daha düşük risk sağlayan başka portföy bulunmuyorsa, o portföy etkindir." },
              { id: "C", text: "Yalnızca risksiz varlıkları içeren portföydür." },
              { id: "D", text: "Tüm portföyler etkindir." },
            ],
            correct: "B",
            explanation:
              "Etkin portföy, Markowitz'in tanımladığı bir kavramdır: bir portföy, ya kendisiyle aynı risk düzeyinde daha yüksek beklenen getiri sağlayan başka bir portföy yoksa, ya da kendisiyle aynı getiri düzeyinde daha düşük risk sağlayan başka portföy yoksa etkindir. Tüm etkin portföyler 'etkin sınır' (efficient frontier) eğrisi üzerinde yer alır.",
          },
          {
            text: "Sermaye Pazarı Doğrusu (CML) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca tek bir varlık için geçerlidir." },
              { id: "B", text: "Risksiz varlığın getirisinden başlayarak pazar portföyüne (M) teğet olarak geçen doğrudur; tüm verimli portföyler bu doğru üzerindedir." },
              { id: "C", text: "Yalnızca tahvil portföyleri için kullanılır." },
              { id: "D", text: "Kayıtsızlık eğrisini gösterir." },
            ],
            correct: "B",
            explanation:
              "Sermaye Pazarı Doğrusu (Capital Market Line — CML), risksiz varlığın getirisinden başlayan ve etkin sınıra (riskli varlık portföyleri eğrisine) pazar portföyü noktasında teğet olarak geçen doğrudur. Risksiz varlık portföye eklendiğinde tüm verimli (efficient) portföyler bu doğrusal hat üzerinde yer alır. Yatırımcılar risk tercihlerine göre bu doğru üzerinde farklı noktalar seçer (borç vererek/alarak).",
          },
          {
            text: "Tobin'in Ayrılık Teoremi (Separation Theorem) aşağıdakilerden hangisini öne sürer?",
            options: [
              { id: "A", text: "Her yatırımcı kendine özgü farklı bir riskli portföy tutar." },
              { id: "B", text: "Risk tercihinden bağımsız olarak tüm yatırımcılar aynı riskli portföyü (pazar portföyü) tutar; risk iştahları yalnızca risksiz varlık ile pazar portföyü arasındaki ağırlığı değiştirir." },
              { id: "C", text: "Yatırımcılar yalnızca tek tek hisse senetleri tutmalıdır." },
              { id: "D", text: "Çeşitlendirme yararsızdır." },
            ],
            correct: "B",
            explanation:
              "Tobin'in Ayrılık Teoremi (Two-Fund Separation Theorem); risksiz bir varlığın varlığında, risk tercihi ne olursa olsun tüm yatırımcıların aynı 'optimal riskli portföyü' (pazar portföyü) tutacağını ileri sürer. Yatırımcılar arasındaki tek fark, kendi risk iştahlarına göre risksiz varlık ile pazar portföyü arasındaki ağırlık seçimidir. Risk averse yatırımcılar daha çok risksiz varlık tutarken, risk arayan yatırımcılar borç alıp pazar portföyüne yatırım yapabilir.",
          },
          {
            text: "Bir yatırımcının kayıtsızlık eğrileri ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm yatırımcılar için aynıdır." },
              { id: "B", text: "Risk averse yatırımcılarda dışbükeydir; eğim risk priminin ölçüsüdür ve eğri üzerindeki tüm noktalar yatırımcı için aynı fayda düzeyini sağlar." },
              { id: "C", text: "Her zaman düz bir doğru şeklindedir." },
              { id: "D", text: "Risk arttıkça yatırımcının faydası artar." },
            ],
            correct: "B",
            explanation:
              "Kayıtsızlık eğrileri, bir yatırımcının aynı fayda düzeyini sağladığı risk-getiri kombinasyonlarını gösterir. Risk averse (riskten kaçınan) yatırımcılarda eğri dışbükeydir (yukarı doğru artan eğimle): yatırımcı daha fazla risk almak için daha çok ek getiri talep eder. Eğim 'risk primi' veya 'marjinal ikame oranını' gösterir; her yatırımcının risk iştahına göre eğrinin dikliği değişir.",
          },
          {
            text: "Markowitz'in Ortalama-Varyans Modeli için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca beklenen getiriyi maksimize etmeye odaklanır." },
              { id: "B", text: "Yalnızca varyansı (riski) minimize etmeye odaklanır." },
              { id: "C", text: "Portföyleri hem ortalama getirisi hem de varyansı (riski) açısından değerlendirir; getirilerin normal dağıldığını varsayar." },
              { id: "D", text: "Risksiz varlığı zorunlu kılar." },
            ],
            correct: "C",
            explanation:
              "Markowitz'in Ortalama-Varyans Modeli, portföy seçimini iki boyutlu olarak ele alır: portföyün beklenen getirisi (ortalama) ve riski (varyans/standart sapma). Model, getirilerin normal dağılım izlediğini varsayar — bu bir kısıtlamadır çünkü gerçek piyasa getirileri 'fat tails' (kalın kuyruklar) gösterebilir. Yatırımcılar verilen risk düzeyinde getiriyi maksimize eden veya verilen getiride riski minimize eden portföyleri seçer.",
          },
        ],
      },
      // ──────────── Ders 4: Varlık Fiyatlama Modelleri ────────────
      {
        id: "m1009-l4",
        title: "Varlık Fiyatlama Modelleri — FVFM, AFT ve Fama-French",
        duration: "10 dk",
        summary: {
          title: "Varlık Fiyatlama Modelleri",
          intro:
            "Varlık fiyatlama modelleri; finansal varlıkların beklenen getirisini risk faktörleriyle ilişkilendiren teorik çerçevelerdir. Finansal Varlıkları Fiyatlama Modeli (FVFM/CAPM) tek faktörlü (sadece pazar riski) modeldir; Arbitraj Fiyatlama Teorisi (AFT/APT) ise birden fazla makroekonomik faktörü dikkate alır. Fama-French Üç Faktör Modeli ise CAPM'i büyüklük (size) ve değer (value) faktörleriyle genişletir.",
          sections: [
            {
              heading: "FVFM (CAPM) ve Sermaye Pazarı Doğrusu",
              icon: "shield",
              items: [
                {
                  strong: "FVFM Formülü:",
                  text: "E(Ri) = Rf + βi × (E(Rm) − Rf); burada Rf risksiz faiz, βi varlığın betası, (E(Rm) − Rf) pazar risk primi (MRP).",
                },
                {
                  strong: "Beta Katsayısı:",
                  text: "β = Cov(Ri, Rm) / Var(Rm); varlığın pazara göre sistematik riskini ölçer; β > 1 pazardan fazla, β < 1 pazardan az hareket eder.",
                },
                {
                  strong: "FVFM Varsayımları:",
                  text: "Yatırımcılar rasyoneldir, vergi-işlem maliyeti yoktur, tek dönemli yatırım, herkes aynı bilgiye sahip, risksiz oranda borç alıp verebilir.",
                },
                {
                  strong: "Sermaye Pazarı Doğrusu (CML) vs Menkul Kıymet Pazarı Doğrusu (SML):",
                  text: "CML sadece etkin portföyleri kapsar (toplam risk-getiri ilişkisi), SML ise tüm varlıkları kapsar (sistematik risk-getiri ilişkisi).",
                },
                {
                  strong: "Pazar Risk Primi:",
                  text: "(E(Rm) − Rf) tarihsel olarak ABD'de %5-7 arasında ölçülmüştür; Türkiye gibi gelişmekte olan piyasalarda daha yüksek olabilir.",
                },
              ],
            },
            {
              heading: "AFT ve Çoklu Faktör Modelleri",
              icon: "trend",
              items: [
                {
                  strong: "Arbitraj Fiyatlama Teorisi (AFT/APT):",
                  text: "Stephen Ross (1976) tarafından geliştirilen, varlık getirilerini birden fazla makroekonomik faktöre bağlayan modeldir; arbitraj olanağı yoksa benzer riskli varlıkların aynı getiriyi sağlaması gerektiği fikri esastır.",
                },
                {
                  strong: "AFT Formülü:",
                  text: "E(Ri) = Rf + β1×F1 + β2×F2 + ... + βn×Fn; her faktör bir makroekonomik değişkene karşılık gelir (enflasyon, GSYH, faiz vb.).",
                },
                {
                  strong: "Fama-French Üç Faktör Modeli:",
                  text: "E(Ri) = Rf + β1(Rm−Rf) + β2(SMB) + β3(HML); SMB = küçük−büyük şirket primi, HML = yüksek−düşük PD/DD oranı primi (değer−büyüme primi).",
                },
                {
                  strong: "Carhart Dört Faktör Modeli:",
                  text: "Fama-French'e MOM (momentum) faktörünü ekler; son 12 ayda yüksek getiri sağlayan hisselerin trendi sürdürdüğü gözlemine dayanır.",
                },
                {
                  strong: "FVFM ve AFT Karşılaştırması:",
                  text: "FVFM tek faktör (pazar) varsayımı yapar, AFT ise çoklu faktöre izin verir; FVFM daha basit ve ezberlenmesi kolay, AFT ise daha esnek ve gerçekçi olduğu için akademik araştırmalarda tercih edilir.",
                },
              ],
            },
          ],
          tip: "FVFM formülü E(R) = Rf + β(Rm − Rf) sınavın olmazsa olmazıdır. Beta = sistematik risk ölçüsü, pazar betası 1 referans noktasıdır. Fama-French = CAPM + SMB + HML; üç faktör modeli akademide CAPM'den daha yaygın kullanılır.",
          kavramlar: [
            { terim: "FVFM (CAPM)", tanim: "Finansal Varlık Fiyatlama Modeli; E(R) = Rf + β(Rm − Rf) formülüyle varlığın beklenen getirisini sistematik riske (beta) göre hesaplar." },
            { terim: "Beta (β)", tanim: "Varlığın getirisinin piyasa getirisine olan duyarlılığı; β=1 piyasayla aynı, β>1 piyasadan daha riskli, β<1 piyasadan daha az riskli." },
            { terim: "Menkul Kıymet Piyasa Doğrusu (SML)", tanim: "Beklenen getirinin beta'ya göre doğrusal ilişkisini gösteren grafik; SML üzerindeki varlıklar doğru fiyatlanmış, altındakiler pahalı, üstündekiler ucuzdur." },
            { terim: "Fama-French 3 Faktör Modeli", tanim: "CAPM'e SMB (küçük - büyük şirket farkı) ve HML (yüksek - düşük defter/piyasa değeri farkı) faktörlerini ekleyen geliştirilmiş model." },
            { terim: "Arbitraj Fiyatlama Teorisi (AFT)", tanim: "Varlık getirisinin birden fazla makroekonomik faktöre (enflasyon, GSYİH, vb.) duyarlı olduğunu öne süren çok faktörlü fiyatlama modeli." },
            { terim: "Pazar Risk Primi", tanim: "Risksiz faiz oranının üzerinde piyasa portföyünden beklenen ek getiri: (Rm − Rf); yatırımcının sistematik riske katlanma bedeli." },
            { terim: "Alfa (α)", tanim: "Gerçekleşen getirinin CAPM'in öngördüğü getiriden sapması; α > 0 varlık modelden daha fazla getiri sağlamıştır, α < 0 daha az." },
          ],
          dikkatlar: [
            "FVFM formülü: E(R) = Rf + β × (Rm − Rf) — her terimi bilmek şart: Rf risksiz oran, β sistematik risk, (Rm-Rf) piyasa risk primi.",
            "β = 1 piyasayla aynı hareket; β > 1 piyasadan daha oynak (daha riskli); β < 1 daha az oynak (daha az riskli); β = 0 risksiz varlık.",
            "SML üzerindeki varlıklar doğru fiyatlanmış; SML altında ise fiyat yüksek (düşük getiri beklentisi); SML üstünde ise fiyat düşük (yüksek getiri fırsatı).",
            "Fama-French modeli: CAPM + SMB (küçük şirket primine) + HML (değer hissesi primine) — CAPM'in açıklayamadığı anomalileri kapsar.",
            "AFT'de birden fazla faktör kullanılır; CAPM sadece pazar faktörü kullanır — bu esneklik AFT'yi teoride daha güçlü kılar ancak faktörlerin seçimi öznel kalır.",
          ],
        },
        questions: [
          {
            text: "FVFM (CAPM) formülüne göre beklenen getiri nasıl hesaplanır?",
            options: [
              { id: "A", text: "E(Ri) = Rf × β × (E(Rm) − Rf)" },
              { id: "B", text: "E(Ri) = Rf + βi × (E(Rm) − Rf)" },
              { id: "C", text: "E(Ri) = E(Rm) + β × Rf" },
              { id: "D", text: "E(Ri) = β × Rf" },
            ],
            correct: "B",
            explanation:
              "FVFM (Finansal Varlıkları Fiyatlama Modeli) formülü: E(Ri) = Rf + βi × (E(Rm) − Rf). Bu formülün üç bileşeni vardır: (1) Rf — risksiz getiri (zaman değeri), (2) βi — varlığın sistematik riski, (3) (E(Rm) − Rf) — pazar risk primi (yatırımcının risk almak için talep ettiği ek getiri). Bu formül modern finansın en temel ve en sık kullanılan denklemlerinden biridir.",
          },
          {
            text: "Bir hissenin betası 1,5; risksiz getiri %5; pazar getirisi %12 ise FVFM'ye göre beklenen getirisi nedir?",
            options: [
              { id: "A", text: "%12,5" },
              { id: "B", text: "%15,5" },
              { id: "C", text: "%17,5" },
              { id: "D", text: "%18,0" },
            ],
            correct: "B",
            explanation:
              "FVFM formülü: E(R) = Rf + β × (Rm − Rf) = 5 + 1,5 × (12 − 5) = 5 + 1,5 × 7 = 5 + 10,5 = %15,5. Hisse betası 1,5 olduğu için pazardan daha riskli kabul edilir; pazar risk priminin (7 puan) 1,5 katı kadar (10,5 puan) ek getiri sağlaması beklenir. Eğer hissenin gerçek getirisi bu beklenen getiriden düşükse, hisse aşırı değerli demektir.",
          },
          {
            text: "Sermaye Pazarı Doğrusu (CML) ile Menkul Kıymet Pazarı Doğrusu (SML) arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki kavram aynıdır." },
              { id: "B", text: "CML yalnızca etkin portföyleri kapsar (toplam risk-getiri ilişkisi); SML tüm varlıkları kapsar (sistematik risk-getiri ilişkisi)." },
              { id: "C", text: "CML yalnızca tahviller için, SML yalnızca paylar için kullanılır." },
              { id: "D", text: "İki doğru farklı yatırım dönemleri için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "CML (Capital Market Line) yalnızca etkin (efficient) portföyleri ve risksiz varlık ile pazar portföyü kombinasyonlarını içerir; x ekseni 'toplam risk' (standart sapma) ölçer. SML (Security Market Line) ise FVFM'nin grafiksel ifadesidir; tüm varlıkları kapsar (etkin olmayanlar dahil) ve x ekseni 'sistematik risk' (beta) ölçer. SML her risk için adil getiriyi gösterir; varlıklar SML üstündeyse aşırı değerli, altındaysa düşük değerlidir.",
          },
          {
            text: "Fama-French Üç Faktör Modeli'nin CAPM'e göre eklediği iki faktör hangileridir?",
            options: [
              { id: "A", text: "Faiz ve enflasyon" },
              { id: "B", text: "Büyüklük (SMB — Small Minus Big) ve Değer (HML — High Minus Low PD/DD)" },
              { id: "C", text: "Likidite ve volatilite" },
              { id: "D", text: "Sektör ve coğrafya" },
            ],
            correct: "B",
            explanation:
              "Fama-French Üç Faktör Modeli (1992); CAPM'in eksik kaldığı gözlemleri açıklamak için iki faktör ekler. (1) SMB (Small Minus Big) — küçük şirket hisselerinin büyük şirket hisselerinden daha yüksek getiri sağlama eğilimi (büyüklük primi). (2) HML (High Minus Low) — yüksek PD/DD oranlı (değer hisseleri) hisselerinin düşük PD/DD oranlı (büyüme hisseleri) hisselerden daha yüksek getiri sağlama eğilimi (değer primi). Bu model akademik finansta CAPM'den daha güvenilir kabul edilir.",
          },
          {
            text: "Arbitraj Fiyatlama Teorisi (AFT/APT) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tek bir faktöre (pazar getirisi) dayanır." },
              { id: "B", text: "Stephen Ross tarafından geliştirilen, varlık getirilerini birden fazla makroekonomik faktöre bağlayan modeldir; arbitraj olanağı yoksa benzer riskli varlıkların aynı getiriyi sağlaması gerektiği fikri esastır." },
              { id: "C", text: "Yalnızca türev araçlar için kullanılır." },
              { id: "D", text: "AFT ve FVFM aynı sonuçları verir." },
            ],
            correct: "B",
            explanation:
              "Arbitraj Fiyatlama Teorisi (APT — Arbitrage Pricing Theory) Stephen Ross tarafından 1976'da geliştirilmiştir. Modelin temel mantığı: aynı riske sahip iki varlık farklı getiri sağlıyorsa arbitraj fırsatı doğar; arbitrajcılar bu fırsatı sömürerek fiyatları dengeler. AFT formülü: E(Ri) = Rf + β1F1 + β2F2 + ... + βnFn; her F bir makroekonomik faktörü temsil eder (enflasyon, GSYH büyümesi, faiz vb.). FVFM tek faktör varsayımı yaparken AFT çoklu faktöre izin verir, daha gerçekçidir.",
          },
        ],
      },
      // ──────────── Ders 5: Temel ve Teknik Analiz ────────────
      {
        id: "m1009-l5",
        title: "Temel ve Teknik Analiz — Şirket Değerleme ve Göstergeler",
        duration: "10 dk",
        summary: {
          title: "Temel Analiz ve Teknik Analiz",
          intro:
            "Yatırım analizinde iki temel okul vardır: Temel analiz, varlığın 'gerçek değerini' ekonomik temeller, sektör koşulları ve şirket göstergeleriyle hesaplar. Teknik analiz ise tarihsel fiyat ve hacim verilerini grafiksel formasyonlar ve göstergeler aracılığıyla inceleyerek geleceği tahmin etmeye çalışır. İki yaklaşım birbirinin tamamlayıcısıdır; profesyonel yatırımcılar genellikle ikisini birleştirir.",
          sections: [
            {
              heading: "Temel Analiz ve Şirket Değerleme",
              icon: "shield",
              items: [
                {
                  strong: "Üç Aşamalı Temel Analiz:",
                  text: "Genel ekonomi analizi (GSYH, enflasyon, faiz), sektör analizi (büyüme, rekabet, regülasyon) ve şirket analizi (mali tablolar, yönetim kalitesi, rekabet avantajı).",
                },
                {
                  strong: "İndirgenmiş Nakit Akışı (DCF):",
                  text: "Şirket değeri = Σ [FCF_t / (1+r)^t] + Devam Değeri / (1+r)^n; FCF serbest nakit akışı, r ise AOSM (WACC) iskonto oranıdır.",
                },
                {
                  strong: "Kâr Payı İndirgeme Modeli (DDM):",
                  text: "Pay değeri = D1 / (r − g); D1 gelecek dönemin kâr payı, r özsermaye maliyeti, g sürdürülebilir büyüme oranıdır (Gordon Büyüme Modeli).",
                },
                {
                  strong: "Karşılaştırılabilir Şirket Analizi:",
                  text: "F/K (Fiyat/Kazanç), PD/DD (Piyasa Değeri/Defter Değeri), FD/FAVÖK gibi çarpanlar benzer şirketlerle karşılaştırılır; piyasa odaklı değerleme yöntemidir.",
                },
                {
                  strong: "Şirket Değerinden Hisse Değerine:",
                  text: "Hisse Değeri = (Şirket Değeri − Net Borç) / Mevcut Hisse Sayısı; net borç = toplam borç − nakit ve nakit benzerleri.",
                },
              ],
            },
            {
              heading: "Teknik Analiz Göstergeleri ve Formasyonlar",
              icon: "trend",
              items: [
                {
                  strong: "Trend ve Trend Çizgileri:",
                  text: "Yükseliş trendi (yüksek dipler ve tepeler), düşüş trendi (düşük dipler ve tepeler), yatay trend (eşit dip/tepeler); trend çizgileri destek ve direnç görevi görür.",
                },
                {
                  strong: "Hareketli Ortalamalar (MA):",
                  text: "Belirli dönemdeki fiyatların aritmetik ortalamasıdır; Basit MA (SMA) ve Üstel MA (EMA) en yaygındır; EMA son verilere daha çok ağırlık verir.",
                },
                {
                  strong: "MACD ve RSI:",
                  text: "MACD (Hareketli Ortalama Yakınsama-Iraksama) iki EMA'nın farkıdır, trend gücünü gösterir; RSI (Göreceli Güç Endeksi) 0-100 arası ölçek, >70 aşırı alım, <30 aşırı satım sinyali verir.",
                },
                {
                  strong: "Klasik Formasyonlar:",
                  text: "Omuz-Baş-Omuz (trend dönüşü), İkili Tepe/Dip (zıt trend), Yuvarlak Dönüş (kademeli geçiş), Yükselen/Alçalan Takoz (devam veya dönüş).",
                },
                {
                  strong: "Elliot Dalga Teorisi:",
                  text: "Piyasa fiyatlarının 5 dalgalık etki ve 3 dalgalık düzeltme şeklinde tekrarlayan döngüler izlediğini öne sürer; psikolojik kalıplara dayanır.",
                },
              ],
            },
          ],
          tip: "Temel analiz 'gerçek değer'i bulur, teknik analiz 'fiyat hareketini' tahmin eder — ikisi rakip değil, tamamlayıcıdır. DCF yöntemi en kapsamlı temel değerleme yöntemidir. RSI 70/30 sınırları sınavın klasik tuzağıdır — bu eşikler aşırı alım/satım sinyali verir. Gordon Büyüme Modeli D1/(r-g) öncelikli pay değerlemesinde de kullanılır.",
          kavramlar: [
            { terim: "Temel Analiz", tanim: "Şirketin finansal tablolarını, rekabet pozisyonunu ve makroekonomik koşulları inceleyerek içsel (gerçek) değeri tahmin eden analiz yöntemi." },
            { terim: "Teknik Analiz", tanim: "Geçmiş fiyat ve hacim verilerini kullanarak gelecekteki fiyat hareketlerini tahmin etmeye çalışan analiz yöntemi." },
            { terim: "DCF (İndirgenmiş Nakit Akışı)", tanim: "Gelecekteki serbest nakit akışlarını uygun iskonto oranıyla bugüne indirgeyen en kapsamlı temel değerleme yöntemi." },
            { terim: "Gordon Büyüme Modeli", tanim: "Sabit büyüme hızında temettü ödeyen hisseyi değerleyen model: P = D1 / (r − g); imtiyazlı paylar için g=0 kullanılır." },
            { terim: "Göreceli Güç Endeksi (RSI)", tanim: "0-100 arasında değişen momentum göstergesi; RSI > 70 aşırı alım (satış sinyali), RSI < 30 aşırı satım (alım sinyali)." },
            { terim: "Hareketli Ortalama (MA)", tanim: "Belirli dönemlerin kapanış fiyatlarının ortalamasından oluşan trend göstergesi; kısa dönem MA uzun dönem MA'yı yukarı keserse 'altın çapraz' oluşur." },
            { terim: "F/K Oranı (P/E)", tanim: "Hisse fiyatının hisse başına kâra oranı; yüksek F/K yüksek büyüme beklentisi veya aşırı değerleme gösterebilir." },
          ],
          dikkatlar: [
            "RSI eşikleri: > 70 aşırı alım (düşüş sinyali), < 30 aşırı satım (yükseliş sinyali) — '50 sınırı' veya '60/40' gibi seçenekler yanıltıcıdır.",
            "Gordon Büyüme Modeli: P = D1/(r−g); D1 = gelecek yıl beklenen temettü, r = gerekli getiri, g = sürekli büyüme oranı; g < r koşulu zorunludur.",
            "DCF yönteminde şirket değeri serbest nakit akışlarının toplamıdır; terminal değer genellikle toplam değerin büyük bölümünü oluşturur.",
            "Teknik analizde trend yönü önemlidir: hareketli ortalama kesişimleri alım-satım sinyali üretir; temel analizin aksine şirket verisine bakmaz.",
            "F/K oranı sektöre göre yorumlanmalıdır; yüksek büyüme beklentisindeki teknoloji şirketleri yüksek F/K taşıyabilir — mutlak karşılaştırma yanıltıcıdır.",
          ],
        },
        questions: [
          {
            text: "Temel analizin üç aşaması aşağıdakilerden hangisinde DOĞRU sırayla verilmiştir?",
            options: [
              { id: "A", text: "Şirket → Sektör → Genel Ekonomi" },
              { id: "B", text: "Genel Ekonomi → Sektör → Şirket" },
              { id: "C", text: "Sektör → Şirket → Genel Ekonomi" },
              { id: "D", text: "Genel Ekonomi → Şirket → Sektör" },
            ],
            correct: "B",
            explanation:
              "Temel analiz 'top-down' (yukarıdan aşağıya) yaklaşımıyla üç aşamada gerçekleştirilir: (1) Genel Ekonomi Analizi — GSYH büyümesi, enflasyon, faiz, döviz kuru gibi makroekonomik göstergeler değerlendirilir; (2) Sektör Analizi — sektörün büyüme potansiyeli, rekabet yapısı, regülasyon ortamı incelenir; (3) Şirket Analizi — şirketin mali tabloları, yönetim kalitesi, rekabet avantajı analiz edilir. Bu sıralama, mikrodan önce makroyu anlamayı sağlar.",
          },
          {
            text: "Gordon Büyüme Modeli formülü aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Pay Değeri = D1 / (r + g)" },
              { id: "B", text: "Pay Değeri = D1 / (r − g)" },
              { id: "C", text: "Pay Değeri = D1 × r × g" },
              { id: "D", text: "Pay Değeri = D1 + r + g" },
            ],
            correct: "B",
            explanation:
              "Gordon Büyüme Modeli (Sabit Büyüme Kâr Payı İndirgeme Modeli); Pay Değeri = D1 / (r − g) formülüyle hesaplanır. D1 gelecek dönemin (1 yıl sonra) beklenen kâr payı, r özsermaye maliyeti (iskonto oranı), g ise kâr payının sürdürülebilir sabit büyüme oranıdır. Modelin önemli kısıtı: r > g olmalıdır, aksi takdirde formül anlamsızlaşır. Sürekli (sınırsız) anüite formülünün büyüyen versiyonu olarak düşünülebilir.",
          },
          {
            text: "Göreceli Güç Endeksi (RSI) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "RSI değeri 0-1.000 arasında ölçeklenir." },
              { id: "B", text: "RSI > 70 'aşırı alım' bölgesini, RSI < 30 ise 'aşırı satım' bölgesini gösterir; trend dönüşü sinyali verebilir." },
              { id: "C", text: "RSI yalnızca yıllık olarak hesaplanır." },
              { id: "D", text: "RSI hisse senedi temettüsünü gösterir." },
            ],
            correct: "B",
            explanation:
              "RSI (Relative Strength Index — Göreceli Güç Endeksi); J. Welles Wilder tarafından geliştirilen, fiyat hareketlerinin gücünü ölçen ve 0-100 arası ölçeklenen bir momentum göstergesidir. Genel kabul gören eşikler: RSI > 70 aşırı alım bölgesini gösterir (fiyatlar düşebilir), RSI < 30 aşırı satım bölgesini gösterir (fiyatlar yükselebilir). 50 değeri nötr noktadır. Standart hesaplama dönemi 14 gündür.",
          },
          {
            text: "İndirgenmiş Nakit Akışı (DCF) yönteminde şirket değerini hesaplarken hangi iskonto oranı kullanılır?",
            options: [
              { id: "A", text: "Risksiz faiz oranı (Hazine Bonosu faizi)" },
              { id: "B", text: "Ağırlıklı Ortalama Sermaye Maliyeti (AOSM/WACC)" },
              { id: "C", text: "Yıllık enflasyon oranı" },
              { id: "D", text: "Şirketin temettü dağıtım oranı" },
            ],
            correct: "B",
            explanation:
              "DCF yönteminde gelecekteki Serbest Nakit Akışları (FCF) bugünkü değere indirgenirken Ağırlıklı Ortalama Sermaye Maliyeti (AOSM/WACC) iskonto oranı olarak kullanılır. AOSM, şirketin tüm finansman kaynaklarının (özsermaye + borç) ağırlıklı ortalama maliyetidir. Bu oran, şirketin yarattığı nakit akışlarının hem hisse sahiplerinin hem de borç verenlerin getiri beklentilerini karşılayıp karşılamadığını ölçer. Şirket değeri = Σ FCF_t / (1+WACC)^t + Devam Değeri.",
          },
          {
            text: "Elliot Dalga Teorisi ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Piyasa fiyatları rastgele hareket eder, kalıba uymaz." },
              { id: "B", text: "Piyasa fiyatları 5 dalgalık etki (impulse) ve 3 dalgalık düzeltme (corrective) şeklinde tekrarlayan döngüler izler; teori psikolojik kalıplara dayanır." },
              { id: "C", text: "Yalnızca tahviller için geçerlidir." },
              { id: "D", text: "Elliot Dalga Teorisi temel analizin bir parçasıdır." },
            ],
            correct: "B",
            explanation:
              "Elliot Dalga Teorisi; Ralph Nelson Elliott tarafından 1930'larda geliştirilen, piyasa fiyatlarının yatırımcı psikolojisinin etkisiyle tekrarlayan dalga kalıpları izlediğini öne süren bir teknik analiz teorisidir. Temel yapı: 5 dalgalık 'etki' (impulse) hareketi ve 3 dalgalık 'düzeltme' (corrective) hareketinden oluşan toplam 8 dalgalık döngüler. Teori Fibonacci sayılarıyla da bağlantılıdır ve uzun vadeli trend analizi için kullanılır.",
          },
        ],
      },

      // ──────────── Ders 6: Portföy Performans Ölçümü ────────────
      {
        id: "m1009-l6",
        title: "Portföy Performans Ölçüm Teknikleri: Sharpe, Treynor ve Jensen",
        duration: "9 dk",
        summary: {
          title: "Portföy Performans Ölçüm Teknikleri",
          intro:
            "Portföy performansını değerlendirmek için yalnızca getiri oranına bakmak yanıltıcı olabilir; çünkü yüksek getiri yüksek riskle elde edilmiş olabilir. Bu nedenle risk-ayarlı performans ölçütleri geliştirilmiştir. Sharpe Oranı, Treynor Oranı ve Jensen Alfası (Jensen'in Alfası) en yaygın kullanılan üç risk-ayarlı performans göstergesidir; her biri riski farklı şekilde tanımlar ve farklı portföy karşılaştırma durumlarında kullanılır.",
          sections: [
            {
              heading: "Sharpe Oranı",
              icon: "shield",
              items: [
                {
                  strong: "Formül:",
                  text: "Sharpe Oranı = (Rp – Rf) / σp. Burada Rp: portföyün ortalama getirisi; Rf: risksiz faiz oranı; σp: portföyün standart sapması (toplam risk).",
                },
                {
                  strong: "Yorumu:",
                  text: "Sharpe oranı, üstlenilen her birim toplam risk (standart sapma) başına elde edilen fazla getiriyi (risk primini) ölçer. Oran ne kadar yüksekse portföy performansı o kadar iyidir.",
                },
                {
                  strong: "Kullanım Alanı:",
                  text: "Yatırımcı portföyünü iyi çeşitlendirememişse veya tek bir portföy değerlendiriliyorsa Sharpe oranı uygundur çünkü toplam riski (sistematik + sistematik olmayan) dikkate alır.",
                },
                {
                  strong: "Sınırlaması:",
                  text: "Negatif Sharpe değerleri karşılaştırma yapmayı zorlaştırır. Standart sapma getiri dağılımının simetrik olduğunu varsayar; asimetrik dağılımlarda yanıltıcı olabilir.",
                },
              ],
            },
            {
              heading: "Treynor Oranı",
              icon: "trend",
              items: [
                {
                  strong: "Formül:",
                  text: "Treynor Oranı = (Rp – Rf) / βp. Burada βp: portföyün betası (sistematik risk).",
                },
                {
                  strong: "Yorumu:",
                  text: "Treynor oranı, üstlenilen her birim sistematik risk (piyasa riski) başına elde edilen fazla getiriyi ölçer. Çeşitlendirilebilir (sistematik olmayan) riski görmezden gelir.",
                },
                {
                  strong: "Kullanım Alanı:",
                  text: "Portföy iyi çeşitlendirilmişse ve daha geniş bir portföyün parçasıysa Treynor oranı tercih edilir. Büyük kurumsal portföylerin karşılaştırılmasında kullanılır.",
                },
                {
                  strong: "Sharpe ile Fark:",
                  text: "Sharpe toplam riski (σ), Treynor ise yalnızca piyasa riskini (β) baz alır. İyi çeşitlendirilmiş bir portföy için her iki oran da benzer sıralama verir.",
                },
              ],
            },
            {
              heading: "Jensen Alfası (α)",
              icon: "trend",
              items: [
                {
                  strong: "Formül:",
                  text: "Jensen Alfası (α) = Rp – [Rf + βp × (Rm – Rf)]. Burada Rm: piyasa portföyünün getirisi; parantez içindeki ifade CAPM'e göre beklenen getiridir.",
                },
                {
                  strong: "Yorumu:",
                  text: "Jensen Alfası, portföyün CAPM tarafından öngörülen getirinin üzerinde (veya altında) fiilen elde ettiği fazla getiridir. α > 0: portföy yöneticisi piyasayı yeniyor; α = 0: piyasayla aynı; α < 0: piyasanın altında kalınıyor.",
                },
                {
                  strong: "Kullanım Alanı:",
                  text: "Portföy yöneticisinin aktif yönetiminin değer yaratıp yaratmadığını ölçmek için kullanılır. Fon yöneticisi değerlendirmelerinde sıkça başvurulan bir ölçüttür.",
                },
                {
                  strong: "CAPM Bağlantısı:",
                  text: "Jensen Alfası CAPM'i temel aldığından, CAPM'in geçerliliğini kabul etmeden alfa yorumlamak doğru değildir. Piyasa anomalileri ve CAPM sınırlılıkları alfa değerlerini etkileyebilir.",
                },
              ],
            },
            {
              heading: "Üç Ölçütün Karşılaştırması",
              icon: "shield",
              items: [
                {
                  strong: "Risk Tanımı:",
                  text: "Sharpe → Toplam risk (σ) | Treynor → Sistematik risk (β) | Jensen → Sistematik risk (β) ile CAPM beklentisi aşımı.",
                },
                {
                  strong: "En Uygun Kullanım:",
                  text: "Az çeşitlendirilmiş portföy → Sharpe. İyi çeşitlendirilmiş veya kurumsal portföy → Treynor. Aktif yönetici performansı → Jensen Alfası.",
                },
                {
                  strong: "Ortak Payda:",
                  text: "Her üç ölçüt de risksiz faiz oranını (Rf) temel alır ve fazla getiriyi (risk primini) ölçer; fark ettikleri nokta risk ölçütüdür.",
                },
              ],
            },
          ],
          tip: "Formüller ve risk tanımları arasındaki fark sınavın favorisidir: Sharpe σ, Treynor β kullanır. Jensen alfası ise CAPM beklentisinin üzerindeki getiridir.",
          kavramlar: [
            { terim: "Sharpe Oranı", tanim: "(Rp – Rf) / σp formülüyle toplam risk başına fazla getiriyi ölçen risk-ayarlı performans göstergesi." },
            { terim: "Treynor Oranı", tanim: "(Rp – Rf) / βp formülüyle sistematik risk (beta) başına fazla getiriyi ölçen performans göstergesi." },
            { terim: "Jensen Alfası (α)", tanim: "Portföyün CAPM beklentisinin üzerinde fiilen elde ettiği fazla getiri; aktif yönetim değerini ölçer." },
            { terim: "Risk-Ayarlı Getiri", tanim: "Portföy getirisinin alınan riske göre normalize edilerek elde edilen ölçüt; saf getiri karşılaştırmasından daha anlamlıdır." },
            { terim: "Beta (β)", tanim: "Portföyün piyasaya göre duyarlılığını gösteren sistematik risk ölçütü; β=1 piyasayla aynı hareketliliği ifade eder." },
            { terim: "Standart Sapma (σ)", tanim: "Portföy getirilerinin ortalamadan sapmasını gösteren toplam risk ölçütü; Sharpe oranında payda olarak kullanılır." },
            { terim: "CAPM Beklentisi", tanim: "Rf + β × (Rm – Rf) formülüyle hesaplanan; piyasa riskine göre beklenen portföy getirisi." },
          ],
          dikkatlar: [
            "Sharpe oranı toplam riski (σ) baz alırken Treynor oranı yalnızca sistematik riski (β) dikkate alır; az çeşitlendirilmiş portföylerde Sharpe daha uygun tercihdir.",
            "Jensen Alfası sıfırın üzerindeyse portföy yöneticisi piyasayı geçiyor demektir; sıfırın altında ise aktif yönetim zarar etmektedir.",
            "CAPM'e dayanan Jensen Alfasını yorumlamak için CAPM'in geçerli olduğunu varsaymak gerekir.",
            "Üç ölçüt de risksiz faiz oranını (Rf) paylaşır; fazla getiriyi (risk primini) farklı risk tanımlarıyla normalize eder.",
            "İyi çeşitlendirilmiş kurumsal portföylerde Treynor ve Jensen benzer sıralama verirken, az çeşitlendirilmiş portföylerde Sharpe ile Treynor sıralamaları farklılaşabilir.",
          ],
        },
        questions: [
          {
            text: "Sharpe Oranı formülü hangisidir?",
            options: [
              { id: "A", text: "(Rp – Rf) / βp" },
              { id: "B", text: "(Rp – Rf) / σp" },
              { id: "C", text: "Rp – [Rf + βp × (Rm – Rf)]" },
              { id: "D", text: "(Rp – Rm) / σp" },
            ],
            correct: "B",
            explanation:
              "Sharpe Oranı = (Rp – Rf) / σp formülüyle hesaplanır. Portföy getirisi ile risksiz faiz arasındaki farkı (fazla getiri) portföyün standart sapmasına (toplam riske) böler. Seçenek A Treynor Oranı, C ise Jensen Alfasıdır.",
          },
          {
            text: "Treynor Oranı ile Sharpe Oranı'nın temel farkı nedir?",
            options: [
              { id: "A", text: "Treynor oranı standart sapmayı; Sharpe oranı betayı baz alır." },
              { id: "B", text: "Treynor oranı sistematik riski (beta); Sharpe oranı toplam riski (standart sapma) baz alır." },
              { id: "C", text: "İkisi de aynı formülü kullanır, yorumları farklıdır." },
              { id: "D", text: "Treynor oranı yalnızca hisse senetleri için kullanılır." },
            ],
            correct: "B",
            explanation:
              "Sharpe oranı paydada standart sapmayı (toplam risk = sistematik + sistematik olmayan) kullanırken, Treynor oranı paydada betayı (yalnızca piyasa riski = sistematik risk) kullanır. Bu fark, hangi ölçütün ne zaman tercih edileceğini belirler.",
          },
          {
            text: "Jensen Alfasının (α) pozitif olması ne anlama gelir?",
            options: [
              { id: "A", text: "Portföyün standart sapması piyasadan yüksektir." },
              { id: "B", text: "Portföy yöneticisi CAPM beklentisinin üzerinde fazla getiri elde etmiştir; aktif yönetim değer yaratmıştır." },
              { id: "C", text: "Portföyün betası birden büyüktür." },
              { id: "D", text: "Portföy risksiz faizin altında getiri sağlamıştır." },
            ],
            correct: "B",
            explanation:
              "Jensen Alfası = Rp – [Rf + β(Rm – Rf)] formülüyle hesaplanır. Pozitif alfa, portföy yöneticisinin CAPM'in öngördüğü beklenen getirisinin üzerinde fiilen getiri elde ettiğini, yani aktif yönetimin değer yarattığını gösterir. α = 0 piyasayla aynı, α < 0 piyasanın altında kalındığı anlamına gelir.",
          },
          {
            text: "Az çeşitlendirilmiş bir portföyü değerlendirirken hangi performans ölçütü daha uygun tercihdir?",
            options: [
              { id: "A", text: "Treynor Oranı" },
              { id: "B", text: "Jensen Alfası" },
              { id: "C", text: "Sharpe Oranı" },
              { id: "D", text: "Beta Katsayısı" },
            ],
            correct: "C",
            explanation:
              "Az çeşitlendirilmiş portföylerde sistematik olmayan (özgün) risk tamamen giderilemez. Bu durumda yalnızca sistematik riski (β) baz alan Treynor veya Jensen yerine toplam riski (σ) dikkate alan Sharpe Oranı daha doğru değerlendirme sağlar.",
          },
          {
            text: "Bir portföy yöneticisinin aktif yönetim becerisi değerlendirilmek istendiğinde en uygun ölçüt hangisidir?",
            options: [
              { id: "A", text: "Standart Sapma" },
              { id: "B", text: "Jensen Alfası" },
              { id: "C", text: "Sharpe Oranı" },
              { id: "D", text: "Korelasyon Katsayısı" },
            ],
            correct: "B",
            explanation:
              "Jensen Alfası, portföy yöneticisinin piyasa riskine göre beklenen getiriyi (CAPM) ne kadar aştığını ölçtüğünden aktif yönetim becerisini doğrudan değerlendirmek için idealdir. Fon yöneticisi karşılaştırmalarında ve performans değerlendirme raporlarında yaygın olarak kullanılır.",
          },
          {
            text: "CAPM'e göre bir portföyün beklenen getirisi Rf = %5, βp = 1,2 ve Rm = %12 ise Jensen Alfasını hesaplamak için portföyün gerçekleşen getirisi Rp = %15 olduğunda alfa kaçtır?",
            options: [
              { id: "A", text: "%1,6" },
              { id: "B", text: "%3,4" },
              { id: "C", text: "–%1,4" },
              { id: "D", text: "%10" },
            ],
            correct: "A",
            explanation:
              "CAPM Beklentisi = Rf + β × (Rm – Rf) = 5 + 1,2 × (12 – 5) = 5 + 8,4 = 13,4%. Jensen Alfası = Rp – CAPM Beklentisi = 15 – 13,4 = 1,6%. Pozitif alfa, yöneticinin piyasayı geçtiğini gösterir.",
          },
          {
            text: "Hangi durum için Treynor oranı Sharpe oranına tercih edilir?",
            options: [
              { id: "A", text: "Portföy az çeşitlendirildiğinde ve tek başına değerlendirildiğinde" },
              { id: "B", text: "Portföy iyi çeşitlendirildiğinde ve daha büyük bir portföyün alt bileşeni olduğunda" },
              { id: "C", text: "Portföy yüksek getiri-düşük risk özelliği taşıdığında" },
              { id: "D", text: "Portföy yalnızca hisse senetlerinden oluştuğunda" },
            ],
            correct: "B",
            explanation:
              "Treynor oranı, portföyün iyi çeşitlendirilmiş olduğu ve daha büyük bir portföyün bir parçası olarak değerlendirildiği durumlarda tercih edilir. Bu koşullarda sistematik olmayan risk çeşitlendirmeyle giderildiğinden yalnızca sistematik risk (β) ilgili risk ölçütüdür.",
          },
        ],
      },
    ],
  },
];