/* ─────────────────────────────────────────────────────────────────────────────
 * Takas, Saklama ve Operasyon İşlemleri (1012)
 *
 * Kaynak: SPL 1012 Çalışma Notu, 31 Aralık 2025 (185 sayfa)
 * Sınavlar: SPL Düzey 1, Düzey 2, Düzey 3
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1006'da BİAŞ piyasalarından genel olarak bahsedilmişti; 1012 ise
 * piyasalar arkasındaki takas, saklama, kaydileştirme ve teminat yönetimi
 * altyapısına derinlemesine girer. Çakışma değil, operasyonel detay sağlar.
 *
 * Kullanım:
 *   import { mevzuat1012 } from "./mevzuat-1012";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011, ...mevzuat1012
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1012: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1012 TAKAS, SAKLAMA VE OPERASYON İŞLEMLERİ
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1012",
    title: "Modül · Takas, Saklama ve Operasyon İşlemleri (1012)",
    lessons: [
      // ──────────── Ders 1: Takas ve Saklama Temel Kavramları ────────────
      {
        id: "m1012-l1",
        title: "Takas ve Saklamaya İlişkin Temel Kavramlar",
        duration: "10 dk",
        summary: {
          title: "Takas ve Saklama Temel Kavramları",
          intro:
            "Takas, sermaye piyasası işlemlerinden doğan nakit ve menkul kıymet yükümlülüklerinin karşılıklı olarak yerine getirilmesi sürecidir. Saklama ise sermaye piyasası araçlarının ve nakdin güvenli şekilde tutulmasıdır. Bu süreçler; merkezi takas kuruluşu (Takasbank), merkezi saklama kuruluşu (MKK) ve merkezi karşı taraf (CCP) yapıları üzerine kuruludur. Bu altyapı; yatırımcı korumasını sağlar, sistemik riski azaltır ve piyasa etkinliğini artırır.",
          sections: [
            {
              heading: "Temel Kurumlar ve Kavramlar",
              icon: "shield",
              items: [
                {
                  strong: "Takasbank (İstanbul Takas ve Saklama Bankası A.Ş.):",
                  text: "Sermaye piyasası işlemlerinin takasını gerçekleştiren, yatırım kuruluşları ve borsalar arasında nakit ve menkul kıymet aktarımını yöneten kuruluştur; özel hukuk tüzel kişisi anonim ortaklıktır.",
                },
                {
                  strong: "MKK (Merkezi Kayıt Kuruluşu):",
                  text: "Sermaye piyasası araçlarının kaydileştirildiği ve sahiplik kayıtlarının tutulduğu merkezi kuruluştur; yatırımcı bazlı (hesap bazlı) saklama sistemi uygular.",
                },
                {
                  strong: "Merkezi Karşı Taraf (CCP) — Açık Teklif Yöntemi:",
                  text: "Takasbank'ın bir işlem eşleştiği anda piyasa katılımcıları arasına girerek alıcıya karşı satıcı, satıcıya karşı alıcı konumuna geçmesidir; karşı taraf riski sıfırlanır.",
                },
                {
                  strong: "T+0, T+1, T+2 Takas Süreleri:",
                  text: "Takas valörü işlem gününden (T) ne kadar sonra gerçekleştirilir; pay piyasasında T+2, türev piyasalarda T+0/T+1 yaygındır.",
                },
                {
                  strong: "Açık Pozisyon:",
                  text: "VİOP'ta veya tezgâh üstü piyasada işlem, nakdi uzlaşma veya fiziki teslimatla kapatılmamış kısa ve uzun pozisyonlardır; ödünç pay piyasasında vadesi gelmemiş ödünç işlemlerdir.",
                },
              ],
            },
            {
              heading: "Takas Mekanizması ve Riskler",
              icon: "trend",
              items: [
                {
                  strong: "Brüt vs Net Takas:",
                  text: "Brüt takasta her işlem ayrı ayrı kapatılır; net takasta aynı katılımcının alacak ve borçları netleştirilerek tek bir tutar üzerinden takas yapılır — likidite ihtiyacını azaltır.",
                },
                {
                  strong: "DvP (Delivery vs Payment) — Teslim Karşılığı Ödeme:",
                  text: "Menkul kıymetin tesliminin nakit ödemeyle eş zamanlı yapılması ilkesidir; bir tarafın yükümlülüğünü yerine getirmesi diğerinin yapmasına bağlıdır, böylece anapara riski elimine edilir.",
                },
                {
                  strong: "Takas Kesinliği:",
                  text: "Takas işleminin tamamlandıktan sonra geri alınamaması ilkesidir; takas kesinliği, takasın gerçekleşmesinin kesin (irrevocable) ve nihai (final) olduğunu belirtir.",
                },
                {
                  strong: "Temerrüt:",
                  text: "Takas yükümlülüğünün vadesinde yerine getirilmemesidir; temerrüt durumunda Takasbank temerrüt prosedürlerini uygular (ceza, teminat çözme, garanti fonu kullanımı).",
                },
                {
                  strong: "Sistemik Risk:",
                  text: "Tek bir katılımcının temerrüdünün diğer katılımcılara bulaşıp tüm sistemi tehdit edebilme riskidir; CCP, çok katmanlı garanti yapısı ve teminat sistemi bu riski yönetir.",
                },
              ],
            },
          ],
          tip: "Üç temel kurum: Takasbank (takas+saklama), MKK (kaydileştirme), VİOP/Pay Piyasası (işlem). DvP (Delivery vs Payment) takasta anapara riskini sıfırlar. Pay piyasası takas süresi T+2 — sınavın klasiğidir. Açık teklif yöntemi = CCP mekanizması.",
        },
        questions: [
          {
            text: "Takasbank'ın 'açık teklif yöntemi' (open offer) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Takasbank, sadece banka müşterilerine hizmet verir." },
              { id: "B", text: "Takasbank, bir işlemin eşleştiği anda piyasa katılımcıları arasına girerek alıcıya karşı satıcı, satıcıya karşı alıcı konumuna geçer; bu sayede karşı taraf riski sıfırlanır." },
              { id: "C", text: "Açık teklif yöntemi yalnızca devlet tahvilleri için kullanılır." },
              { id: "D", text: "Açık teklif yöntemi tarafların doğrudan birbirleriyle takas yapmasıdır." },
            ],
            correct: "B",
            explanation:
              "Açık teklif yöntemi (open offer); Takasbank'ın merkezi karşı taraf (CCP) işlevini yerine getirme şeklidir. İşlem eşleştiği anda Takasbank otomatik olarak alıcıya karşı satıcı, satıcıya karşı alıcı pozisyonuna geçer. Bu yapı, taraflar arasındaki karşı taraf riskini ortadan kaldırır; her iki taraf da Takasbank'ı muhatap olarak görür. Sistemik riskin yönetilmesinde ve piyasanın istikrarında kritik bir mekanizmadır.",
          },
          {
            text: "BİAŞ Pay Piyasası'nda standart takas süresi (valörü) nedir?",
            options: [
              { id: "A", text: "T+0 (aynı gün)" },
              { id: "B", text: "T+1" },
              { id: "C", text: "T+2" },
              { id: "D", text: "T+5" },
            ],
            correct: "C",
            explanation:
              "BİAŞ Pay Piyasası'nda standart takas valörü T+2'dir; yani işlem gerçekleştiği günden (T) iki iş günü sonra takas (nakit ödeme ve menkul kıymet teslimatı) tamamlanır. Bu süre uluslararası standartla uyumludur. VİOP'ta türev işlemlerinin günlük uzlaşması T+0 olarak yapılır; tezgah üstü işlemlerde ise taraflar arası mutabakata göre T+0, T+1 veya daha uzun valörler uygulanabilir.",
          },
          {
            text: "DvP (Delivery vs Payment — Teslim Karşılığı Ödeme) ilkesinin temel amacı nedir?",
            options: [
              { id: "A", text: "Komisyonları düşürmek" },
              { id: "B", text: "Menkul kıymetin tesliminin nakit ödemeyle eş zamanlı yapılmasını sağlayarak anapara riskini elimine etmek; bir tarafın yükümlülüğünü yerine getirmesi diğerinin yapmasına bağlıdır." },
              { id: "C", text: "İşlem sürelerini uzatmak" },
              { id: "D", text: "Yalnızca yabancı yatırımcıları korumak" },
            ],
            correct: "B",
            explanation:
              "DvP (Delivery versus Payment) ilkesi; uluslararası takas standartlarının temel taşlarından biridir. Menkul kıymetin tesliminin (delivery) nakit ödemenin (payment) eş zamanlı olarak yapılmasını sağlar. Bu sayede 'anapara riski' (principal risk) tamamen elimine edilir: bir taraf parasını öderken karşı taraf menkul kıymeti teslim etmezse zarara uğramaz, çünkü iki işlem birlikte gerçekleşir. Türkiye'de pay ve borçlanma araçları piyasalarında DvP uygulanmaktadır.",
          },
          {
            text: "Brüt takas ile net takas arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Brüt takas yalnızca dövizde, net takas yalnızca paylarda kullanılır." },
              { id: "B", text: "Brüt takasta her işlem ayrı ayrı kapatılır; net takasta aynı katılımcının alacak ve borçları netleştirilerek tek bir tutar üzerinden takas yapılır, böylece likidite ihtiyacı azalır." },
              { id: "C", text: "İkisi arasında fark yoktur." },
              { id: "D", text: "Brüt takas yalnızca devlet tahvilleri için uygulanır." },
            ],
            correct: "B",
            explanation:
              "Brüt takas; her işlemin ayrı ayrı kapatıldığı, alacak-borç netleştirmesinin yapılmadığı sistemdir. Net takas ise aynı gün içinde aynı kıymet veya nakdin tüm alış-satışlarının netleştirilerek tek bir tutar üzerinden takas yapıldığı sistemdir. Net takas; likidite ihtiyacını ciddi ölçüde azaltır (örneğin 100M TL alış + 95M TL satış = 5M TL net takas), bu nedenle pay piyasası gibi yüksek hacimli piyasalarda tercih edilir.",
          },
          {
            text: "MKK (Merkezi Kayıt Kuruluşu) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Sadece bankaların hesaplarını tutar." },
              { id: "B", text: "Sermaye piyasası araçlarının kaydileştirildiği ve sahiplik kayıtlarının tutulduğu merkezi kuruluştur; yatırımcı bazlı (hesap bazlı) saklama sistemi uygular." },
              { id: "C", text: "Yalnızca yabancı menkul kıymetler için kullanılır." },
              { id: "D", text: "Borsa İstanbul'un bir alt birimidir." },
            ],
            correct: "B",
            explanation:
              "Merkezi Kayıt Kuruluşu (MKK), Türk sermaye piyasasının merkezi saklama (CSD — Central Securities Depository) altyapısıdır. Tüm sermaye piyasası araçlarının kaydileştirildiği (dematerialized) ve sahiplik kayıtlarının tutulduğu kurumdur. Türkiye uluslararası uygulamadan farklı olarak 'yatırımcı bazlı saklama' sistemi kullanır: her yatırımcının kendi adına açılmış MKK hesabı vardır; bu sistem yatırımcı kimlik bilgisinin kuruma kadar şeffaf izlenmesini sağlar ve yatırımcı korumasını güçlendirir.",
          },
        ],
      },
      // ──────────── Ders 2: Kaydileştirme ve MKK Düzenlemeleri ────────────
      {
        id: "m1012-l2",
        title: "Kaydileştirme ve MKK Düzenlemeleri",
        duration: "9 dk",
        summary: {
          title: "Kaydileştirme ve MKK Yapısı",
          intro:
            "Kaydileştirme; sermaye piyasası araçlarının fiziki senet basılmaksızın elektronik kayıtlarla ihraç edilip izlenmesidir. Türkiye'de tüm sermaye piyasası araçları kaydileştirilmiş ve fiziki senet uygulamasından vazgeçilmiştir. MKK; bu kayıtların tutulduğu merkezi kurum olup; SPK, BDDK ve Hazine'nin ortaklığında kurulmuştur. Yatırımcı koruması, kimlik şeffaflığı ve hızlı transfer kaydileştirmenin temel faydalarıdır.",
          sections: [
            {
              heading: "MKK'nın Yapısı ve Faaliyetleri",
              icon: "shield",
              items: [
                {
                  strong: "Kuruluş Yapısı:",
                  text: "MKK; SPKn'na göre kurulmuş özel hukuk tüzel kişisi anonim ortaklıktır; ortaklık yapısında SPK, BIST, Takasbank ve aracı kuruluşlar yer alır.",
                },
                {
                  strong: "Yatırımcı Bazlı Saklama:",
                  text: "Türkiye'nin uluslararası uygulamadan ayrılan kritik özelliği; her yatırımcının kendi MKK numarasıyla doğrudan kayıtlı olduğu, sahipliğin omnibüs hesap altında değil yatırımcı bazında izlendiği sistemdir.",
                },
                {
                  strong: "MKK Üyeleri:",
                  text: "Aracı kuruluşlar, bankalar ve yatırım kuruluşları MKK üyesi olabilir; üyeler kendi müşterileri adına MKK'ya hesap açtırma ve transfer yapma yetkisine sahiptir.",
                },
                {
                  strong: "İhraçcı İşlemleri:",
                  text: "MKK; halka arz, sermaye artırımı, kâr payı dağıtımı, genel kurul gibi şirket olaylarında ihraçcılar için kayıt ve hak hesaplaması yapar; KAP ile entegre çalışır.",
                },
                {
                  strong: "Yatırımcı Bilgi Servisi (YBS):",
                  text: "MKK üzerinden yatırımcıların kendi hesaplarındaki menkul kıymetleri ve hareketleri çevrimiçi izlemesini sağlayan e-Devlet entegre sistemdir.",
                },
              ],
            },
            {
              heading: "Kaydileştirme Süreci ve Faydaları",
              icon: "trend",
              items: [
                {
                  strong: "Kaydileştirme Tanımı:",
                  text: "Sermaye piyasası araçlarının fiziki senet basılmaksızın yalnızca elektronik kayıtlar üzerinden ihraç edilmesi, izlenmesi, devredilmesi ve itfa edilmesidir.",
                },
                {
                  strong: "Geçiş Süreci:",
                  text: "Türkiye'de pay senetleri 2005, devlet tahvilleri ve hazine bonoları 2002, özel sektör tahvilleri 2009 yılından itibaren tamamen kaydileştirilmiştir; fiziki senetler iptal edilmiştir.",
                },
                {
                  strong: "Faydaları:",
                  text: "Sahteciliğin önlenmesi, hırsızlık/kayıp riskinin elimine edilmesi, transfer hızının artması, işlem maliyetinin düşmesi, kimlik şeffaflığının sağlanması, vergi tahsilatının kolaylaşması.",
                },
                {
                  strong: "Sahiplik ve Hak Geçişi:",
                  text: "Kaydi senetlerde sahiplik MKK kaydıyla doğar; pay defterine kayıt veya fiziki teslim gerekmez. Devirler MKK üzerinde elektronik olarak gerçekleşir.",
                },
                {
                  strong: "Uluslararası Bağlantılar:",
                  text: "MKK, ICSD'ler (Euroclear, Clearstream) ile çalışarak yabancı yatırımcı işlemlerinin Türkiye'ye entegrasyonunu sağlar; sınır ötesi takas işlemlerini destekler.",
                },
              ],
            },
          ],
          tip: "Türkiye'nin yatırımcı bazlı saklama sistemi dünyada nadirdir — uluslararası standartta omnibüs (toplu) hesap kullanılır. Pay senetleri 2005'te kaydileştirildi. Kaydileştirmenin 5 temel faydası: sahtecilik, kayıp, hız, maliyet, şeffaflık. Sahiplik MKK kaydıyla doğar — pay defteri ikincildir.",
        },
        questions: [
          {
            text: "Türkiye'de MKK'nın uyguladığı saklama sistemi diğer ülkelerden hangi yönüyle farklılaşır?",
            options: [
              { id: "A", text: "Türkiye omnibüs (toplu) hesap sistemi kullanır." },
              { id: "B", text: "Türkiye 'yatırımcı bazlı saklama' sistemi kullanır; her yatırımcı kendi MKK numarasıyla doğrudan kayıtlıdır, sahiplik omnibüs hesap altında değil yatırımcı bazında izlenir." },
              { id: "C", text: "Türkiye fiziki senet sistemini hâlâ kullanır." },
              { id: "D", text: "İki sistem arasında fark yoktur." },
            ],
            correct: "B",
            explanation:
              "Türkiye'nin MKK altyapısı, uluslararası uygulamadan kritik bir yönüyle farklıdır: 'yatırımcı bazlı saklama' (beneficial owner level custody) sistemini uygular. Her yatırımcının kendi MKK numarası vardır ve sahipliği doğrudan adına kayıtlıdır. Uluslararası standart ise 'omnibüs hesap' sistemidir — aracı kuruluş kendi adına bir hesap açar ve müşterilerinin tüm pozisyonlarını bu hesap altında toplar. Türkiye sistemi; yatırımcı korumasını güçlendirir, vergi takibini kolaylaştırır ve kimlik şeffaflığı sağlar; ancak sınır ötesi entegrasyonda ek karmaşıklık yaratır.",
          },
          {
            text: "Türkiye'de pay senetlerinin kaydileştirme tarihi (fiziki senetlerin tamamen kaldırıldığı yıl) hangisidir?",
            options: [
              { id: "A", text: "1998" },
              { id: "B", text: "2002" },
              { id: "C", text: "2005" },
              { id: "D", text: "2012" },
            ],
            correct: "C",
            explanation:
              "Türkiye'de pay senetlerinin kaydileştirilmesi 2005 yılında tamamlanmıştır; bu tarihten itibaren halka açık şirketlerin pay senetleri yalnızca MKK kayıtları üzerinden izlenmektedir, fiziki senet basımı yapılmamaktadır. Diğer kaydileştirme tarihleri: devlet tahvilleri ve hazine bonoları 2002, özel sektör tahvilleri 2009. Bu süreç dünyada en kapsamlı kaydileştirme örneklerinden biridir.",
          },
          {
            text: "Kaydileştirilmiş bir sermaye piyasası aracında sahiplik nasıl doğar?",
            options: [
              { id: "A", text: "Pay defterine kayıtla" },
              { id: "B", text: "MKK kaydıyla; fiziki teslim veya pay defteri kaydı gerekmez, devirler MKK üzerinde elektronik olarak gerçekleşir." },
              { id: "C", text: "Senedin fiziki teslimiyle" },
              { id: "D", text: "Noter onayıyla" },
            ],
            correct: "B",
            explanation:
              "Kaydileştirilmiş sermaye piyasası araçlarında sahiplik MKK kaydıyla doğar; bu yeni TTK ve SPKn ile getirilmiş bir ilkedir. Fiziki senet, pay defteri kaydı veya noter işlemi sahipliğin doğması için gerekli değildir. Devirler taraflar arasında değil, doğrudan MKK üzerinde elektronik olarak gerçekleşir; aracı kuruluşlar bu işlemleri MKK ile entegre sistemler üzerinden yapar.",
          },
          {
            text: "MKK'nın 'Yatırımcı Bilgi Servisi (YBS)' aşağıdakilerden hangisini sağlar?",
            options: [
              { id: "A", text: "Sadece kurumsal yatırımcıların hesaplarını izler." },
              { id: "B", text: "Yatırımcıların kendi hesaplarındaki menkul kıymetleri ve hareketleri çevrimiçi izlemesini sağlayan, e-Devlet entegre sistemdir." },
              { id: "C", text: "Yalnızca aracı kuruluşların kullandığı raporlama aracıdır." },
              { id: "D", text: "MKK personelinin iç haberleşme sistemidir." },
            ],
            correct: "B",
            explanation:
              "Yatırımcı Bilgi Servisi (YBS), MKK tarafından sunulan ve tüm yatırımcıların kendi hesaplarındaki menkul kıymetleri, işlem geçmişlerini ve şirket olaylarını (kâr payı, sermaye artırımı, vb.) çevrimiçi olarak izleyebildiği e-Devlet entegre sistemdir. Bu sistem yatırımcıya doğrudan şeffaflık sağlar; aracı kuruluş raporlarına bağımlı kalmaksızın kendi pozisyonlarını teyit edebilir. Yatırımcı korumasının temel taşlarından biridir.",
          },
          {
            text: "Aşağıdakilerden hangisi kaydileştirmenin sağladığı faydalardan DEĞİLDİR?",
            options: [
              { id: "A", text: "Sahteciliğin önlenmesi" },
              { id: "B", text: "Hırsızlık ve kayıp riskinin elimine edilmesi" },
              { id: "C", text: "Transfer hızının artması ve maliyetin düşmesi" },
              { id: "D", text: "Hisse senedi getirisinin garanti altına alınması" },
            ],
            correct: "D",
            explanation:
              "Kaydileştirme; sermaye piyasası araçlarının fiziki olmaktan elektronik olmaya geçmesidir. Faydaları: (1) sahteciliğin önlenmesi (sahte senet basılamaz), (2) hırsızlık/kayıp riskinin elimine edilmesi, (3) transfer hızının artması, (4) işlem maliyetinin düşmesi, (5) kimlik şeffaflığının sağlanması, (6) vergi tahsilatının kolaylaşması. Ancak hisse senedi getirisi piyasa koşullarına bağlıdır; kaydileştirme operasyonel-teknik bir altyapıdır, hiçbir getiri garantisi sağlamaz.",
          },
        ],
      },
      // ──────────── Ders 3: BİAŞ Pay Piyasası Takas İşlemleri ────────────
      {
        id: "m1012-l3",
        title: "BİAŞ Pay Piyasası Takas, Temerrüt ve Teminat İşlemleri",
        duration: "10 dk",
        summary: {
          title: "Pay Piyasası Takas ve Temerrüt",
          intro:
            "BİAŞ Pay Piyasası takas işlemleri; merkezi karşı taraf hizmeti veren Takasbank tarafından yürütülür. Pay alım-satım işlemlerinin takası standart olarak T+2 valörüyle yapılır. Takasbank, açık teklif yöntemiyle CCP olarak görev yapar; risk ve teminat yönetimi BISTECH Marjin Yöntemi adı verilen portföy bazlı bir algoritma ile gerçekleştirilir. Temerrüt halinde özel prosedürler işler.",
          sections: [
            {
              heading: "Pay Piyasası Takas Mekanizması",
              icon: "shield",
              items: [
                {
                  strong: "T+2 Valörü:",
                  text: "Pay piyasasında işlem gününden iki iş günü sonra (T+2) takas tamamlanır; bu süre yatırımcılara nakit hazırlama ve menkul kıymet hareketlendirme imkânı verir.",
                },
                {
                  strong: "Net Mutabakat:",
                  text: "Aynı kıymet ve tarafın gün içindeki tüm alış-satışları netleştirilerek tek tutar üzerinden takas yapılır; bu yaklaşım likidite ihtiyacını ciddi ölçüde azaltır.",
                },
                {
                  strong: "DvP Prensibi:",
                  text: "Pay teslimi ve nakit ödemenin eş zamanlı yapılması ilkesi uygulanır; tarafların yükümlülükleri birbirine bağlıdır, anapara riski elimine edilir.",
                },
                {
                  strong: "Takas Üyelikleri:",
                  text: "Takasbank pay piyasası üyeliği aracı kurumlara, bankalara ve yetkili yatırım kuruluşlarına açıktır; üyeler kendi adına ve müşteri adına işlem yapabilir.",
                },
                {
                  strong: "Türev Pay Karşılaştırması:",
                  text: "Pay piyasasında DvP prensibi uygulanırken, türev piyasalarda günlük uzlaşma sistemi (mark-to-market) kullanılır; iki sistem farklı risk yönetim mantıklarına dayanır.",
                },
              ],
            },
            {
              heading: "Risk Yönetimi, Teminat ve Temerrüt",
              icon: "trend",
              items: [
                {
                  strong: "BISTECH Marjin Yöntemi:",
                  text: "BISTECH üzerinde portföy bazlı risk yönetim algoritması ile bulunması gereken teminat tutarını hesaplama yöntemidir; portföy çeşitlendirmesinin yarattığı risk azaltıcı etkiyi dikkate alır.",
                },
                {
                  strong: "Brüt Teminatlandırma:",
                  text: "MKT üyelerinin müşteri pozisyonları için yatırmaları gereken teminat tutarının, müşteri pozisyonları birbirleriyle netleştirilmeksizin her bir müşteri için ayrı ayrı hesaplanan teminat yükümlülüklerinin toplamı kadar olmasıdır.",
                },
                {
                  strong: "Pozisyon Hesabı Türleri:",
                  text: "Çoklu pozisyon hesabı (üyenin kendi ve müşteri pozisyonlarının ayrıştırıldığı toplu hesap), tekli pozisyon hesabı (her müşteriye özel ayrı hesap) iki temel yapıdır.",
                },
                {
                  strong: "Garanti Fonu:",
                  text: "Üyelerin temerrüdüne karşı kullanılan ortak risk paylaşım fonudur; her üye katkı payı yatırır, krizde birlikte zararı paylaşırlar (loss sharing mekanizması).",
                },
                {
                  strong: "Temerrüt Süreci:",
                  text: "Temerrüt halinde sırasıyla: temerrüt ilanı, temerrüt cezası, teminatın çözülmesi, garanti fonunun kullanılması, son aşamada Takasbank'ın özsermayesinin kullanılması adımları işler.",
                },
              ],
            },
          ],
          tip: "Pay piyasası T+2, türev T+0 — kritik ayrım. BISTECH Marjin Yöntemi = portföy bazlı (riski azaltır), Brüt Teminat = her müşteri ayrı (üyeyi koruma altına alır). Temerrüt 'falanjı' (default waterfall): teminat → garanti fonu → Takasbank özsermayesi sırasıyla kullanılır. CCP'yi koruyan çok katmanlı yapı.",
        },
        questions: [
          {
            text: "BİAŞ Pay Piyasası'nda standart takas valörü T+2 nasıl çalışır?",
            options: [
              { id: "A", text: "İşlem gerçekleştiği an takas tamamlanır." },
              { id: "B", text: "İşlem günü (T) ve iki iş günü sonra (T+2) takas (nakit ödeme ve menkul kıymet teslimatı) tamamlanır; bu süre yatırımcılara nakit hazırlama ve hareketlendirme imkânı verir." },
              { id: "C", text: "İşlem gerçekleştikten 5 iş günü sonra takas yapılır." },
              { id: "D", text: "Pay piyasasında takas yoktur." },
            ],
            correct: "B",
            explanation:
              "T+2 takas valörü; 'Trade date + 2 business days' anlamına gelir. İşlem T gününde gerçekleşir, T+1'de pozisyonlar netleştirilir, T+2'de nakit ve menkul kıymet aktarımları tamamlanır. Bu süre uluslararası standartla uyumludur (ABD, AB de T+2 uygular). Yatırımcılara nakit hazırlama ve menkul kıymet hareketlendirme zamanı tanır. Önemli: T'den T+2'ye kadar tarafların yükümlülüklerini yerine getirme süreleri vardır.",
          },
          {
            text: "BISTECH Marjin Yöntemi için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Her menkul kıymet için ayrı ayrı sabit teminat hesaplar." },
              { id: "B", text: "BISTECH üzerinde portföy bazlı risk yönetim algoritması ile bulunması gereken teminat tutarını hesaplama yöntemidir; portföy çeşitlendirmesinin yarattığı risk azaltıcı etkiyi dikkate alır." },
              { id: "C", text: "Yalnızca yabancı yatırımcılar için kullanılır." },
              { id: "D", text: "Teminat hesaplaması manuel olarak yapılır." },
            ],
            correct: "B",
            explanation:
              "BISTECH Marjin Yöntemi; BIST'in kullandığı BISTECH altyapısı üzerinde çalışan, portföy bazlı risk yönetimi yapan otomatik teminat hesaplama algoritmasıdır. Her bir pozisyon için ayrı ayrı teminat hesaplamak yerine, üyenin tüm portföyü bir bütün olarak değerlendirilir. Bu yaklaşım portföy çeşitlendirmesinin yarattığı 'doğal hedge' etkisini hesaba katar (örn. zıt yönlü pozisyonlar birbirini kısmen dengeler), dolayısıyla daha gerçekçi ve genellikle daha düşük teminat gereksinimi ortaya çıkar.",
          },
          {
            text: "'Brüt teminatlandırma' kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm müşterilerin pozisyonları netleştirilerek tek bir teminat hesaplanır." },
              { id: "B", text: "MKT üyelerinin müşteri pozisyonları için yatırmaları gereken teminat tutarının, müşteri pozisyonları birbirleriyle netleştirilmeksizin her bir müşteri için ayrı ayrı hesaplanan teminat yükümlülüklerinin toplamı kadar olmasıdır." },
              { id: "C", text: "Brüt teminatlandırma yalnızca türev piyasada kullanılır." },
              { id: "D", text: "Brüt teminat sadece kâr eden müşterilerden alınır." },
            ],
            correct: "B",
            explanation:
              "Brüt teminatlandırma; merkezi karşı taraf üyelerinin müşteri pozisyonları için yatırmaları gereken teminatın, müşterilerin pozisyonları birbirleriyle netleştirilmeksizin her bir müşteri için ayrı ayrı hesaplanmasıdır. Yani üye 100 müşterisinin pozisyonları için 100 ayrı teminat hesaplar ve toplamını yatırır. Net teminatlandırmadan farklı olarak müşterilerin zıt yönlü pozisyonları birbirini dengelemez. Bu yaklaşım müşteri varlıklarının korunmasını ve MKT'nin riskini sınırlandırır.",
          },
          {
            text: "Takasbank'ın temerrüt halinde uyguladığı 'falanj' (waterfall) sırası aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Önce Takasbank'ın özsermayesi, sonra teminat, sonra garanti fonu" },
              { id: "B", text: "Önce temerrüt eden üyenin teminatı, sonra garanti fonu (üyelerin ortak fonu), son aşamada Takasbank'ın özsermayesi" },
              { id: "C", text: "Yalnızca devlet desteğiyle ödeme yapılır." },
              { id: "D", text: "Falanj yoktur, zarar paylaşımı rastgele yapılır." },
            ],
            correct: "B",
            explanation:
              "Temerrüt yönetiminde uluslararası standart 'default waterfall' uygulanır: (1) İlk önce temerrüt eden üyenin kendi yatırdığı teminatlar kullanılır — kendi riskini kendi karşılar, (2) Yetersiz kalırsa garanti fonu kullanılır — tüm üyelerin ortak fonudur, kayıp paylaşılır, (3) Son çare olarak Takasbank kendi özsermayesini kullanır — 'skin in the game' ilkesi gereği. Bu sıralama; temerrüt eden taraf cezalandırılırken sistem bütünlüğünün korunmasını sağlar. Çok katmanlı bir savunma hattıdır.",
          },
          {
            text: "Pay piyasasında DvP (Delivery vs Payment) prensibi ile türev piyasalarda günlük uzlaşma sistemi arasındaki temel fark nedir?",
            options: [
              { id: "A", text: "İki sistem aynı şekilde çalışır." },
              { id: "B", text: "Pay piyasasında DvP ile menkul kıymet teslimi ve nakit ödeme eş zamanlı yapılır; türev piyasalarda günlük uzlaşma (mark-to-market) ile pozisyonların kâr/zararı her gün hesaplanıp teminat hesabına yansıtılır, kayıplar birikmez." },
              { id: "C", text: "DvP yalnızca yabancı yatırımcılar için kullanılır." },
              { id: "D", text: "Türev piyasalarda takas yoktur." },
            ],
            correct: "B",
            explanation:
              "Pay piyasası ve türev piyasa farklı risk yönetim mantıklarına dayanır. Pay piyasasında DvP (Delivery vs Payment) prensibi uygulanır: işlem T'de gerçekleşir, T+2'de menkul kıymet teslimi ve nakit ödeme eş zamanlı tamamlanır; tarafların yükümlülükleri birbirine bağlıdır. Türev piyasalarda ise pozisyonlar açık tutulur, günlük uzlaşma (mark-to-market) ile her gün sonu kâr/zarar hesaplanıp teminat hesabına yansıtılır. Bu sistem kayıpların birikmesini önler ve sistemik riski yönetir.",
          },
        ],
      },
      // ──────────── Ders 4: Türev Piyasalarda Takas ve Teminatlandırma ────────────
      {
        id: "m1012-l4",
        title: "Türev Piyasalarda Takas, Uzlaşma ve Teminatlandırma",
        duration: "9 dk",
        summary: {
          title: "Türev Piyasalarda Takas ve Teminatlandırma",
          intro:
            "BİAŞ Vadeli İşlem ve Opsiyon Piyasası'nda (VİOP) takas işlemleri Takasbank tarafından merkezi karşı taraf hizmeti olarak gerçekleştirilir. Türev piyasalarda günlük uzlaşma sistemi, çok katmanlı teminat yapısı ve garanti fonu ile çalışan kapsamlı bir risk yönetim altyapısı uygulanır. Tezgâh üstü (OTC) türev işlemler de zorunlu merkezi takas kapsamına alınmıştır (post-2008 reformları).",
          sections: [
            {
              heading: "VİOP Takas İşlemleri ve Uzlaşma",
              icon: "shield",
              items: [
                {
                  strong: "Açık Teklif Yöntemi:",
                  text: "VİOP'ta her işlem eşleştiği anda Takasbank otomatik olarak alıcıya karşı satıcı, satıcıya karşı alıcı pozisyonuna geçer; karşı taraf riski sıfırlanır.",
                },
                {
                  strong: "Günlük Uzlaşma (Mark-to-Market):",
                  text: "Her işlem günü sonu pozisyonların kâr/zararı hesaplanır ve teminat hesaplarına yansıtılır; kayıplar birikmez, sistemik risk kontrol altında tutulur.",
                },
                {
                  strong: "Kâr/Zarar Hesaplama:",
                  text: "Uzun pozisyon: (Uzlaşma Fiyatı − Açılış Fiyatı) × Sözleşme Çarpanı × Sözleşme Sayısı; kısa pozisyonda işaret tersine çevrilir.",
                },
                {
                  strong: "Vade Sonu Uzlaşma:",
                  text: "Sözleşme vadesinde fiziki teslimat veya nakdi uzlaşı yapılır; nakdi uzlaşılı sözleşmelerde son uzlaşı fiyatı dayanak varlığın belirlenen referans fiyatına göre hesaplanır.",
                },
                {
                  strong: "Pozisyon Kapatma:",
                  text: "Vade öncesi ters işlemle pozisyon kapatılabilir; bu en yaygın çıkış yöntemidir, fiziki teslimata gerek kalmaz.",
                },
              ],
            },
            {
              heading: "Çok Katmanlı Teminat ve Garanti Fonu",
              icon: "trend",
              items: [
                {
                  strong: "Başlangıç Teminatı:",
                  text: "Pozisyon açılırken yatırılan teminattır; sözleşme türü, dayanak varlık volatilitesi ve pozisyon büyüklüğüne göre Takasbank tarafından belirlenir, dinamik olarak güncellenir.",
                },
                {
                  strong: "Sürdürme Teminatı ve Margin Call:",
                  text: "Teminatın hiçbir zaman düşmemesi gereken alt sınırdır (genelde başlangıç teminatının %75'i); altına inildiğinde teminat tamamlama çağrısı (margin call) yapılır.",
                },
                {
                  strong: "Olağanüstü Durum Teminatı:",
                  text: "Yüksek volatilite, sistemik kriz veya benzeri olağanüstü durumlarda Takasbank tarafından geçici olarak talep edilen ek teminattır; risk yönetimi esnek tutulur.",
                },
                {
                  strong: "Garanti Fonu:",
                  text: "Tüm üyelerin katkı yaptığı ortak risk paylaşım fonudur; bir üyenin temerrüdü kendi teminatını aşarsa, bu fon devreye girer; üyeler arası 'loss sharing' ilkesi uygulanır.",
                },
                {
                  strong: "OTC Türev Takası:",
                  text: "2008 finansal krizi sonrası uluslararası reformlarla standart OTC türevleri için merkezi takas zorunluluğu getirildi; Takasbank bu hizmeti VİOP altyapısı üzerinden sunar.",
                },
              ],
            },
          ],
          tip: "Türev piyasada üç teminat: başlangıç, sürdürme, olağanüstü. Sürdürme genelde başlangıcın %75'i. Garanti fonu = ortak fon (loss sharing). 2008 sonrası OTC zorunlu CCP — sınavın yeni klasik konusu. Vadede iki çıkış: ters işlem (yaygın) veya fiziki teslim/nakdi uzlaşı.",
        },
        questions: [
          {
            text: "VİOP'ta günlük uzlaşma (mark-to-market) sisteminin temel mantığı nedir?",
            options: [
              { id: "A", text: "Pozisyonlar yalnızca vade sonunda hesaplanır." },
              { id: "B", text: "Her işlem günü sonu pozisyonların kâr/zararı hesaplanıp teminat hesaplarına yansıtılır; kayıplar birikmez ve sistemik risk kontrol altında tutulur." },
              { id: "C", text: "Pozisyon kâr/zararı bir yıl sonra hesaplanır." },
              { id: "D", text: "Mark-to-market yalnızca opsiyonlar için uygulanır." },
            ],
            correct: "B",
            explanation:
              "Günlük uzlaşma (mark-to-market) sistemi; her işlem günü sonunda tüm açık pozisyonların kâr/zararının güncel piyasa fiyatına göre hesaplanıp teminat hesaplarına yansıtılması ilkesidir. Bu sistem üç kritik fayda sağlar: (1) Kayıplar birikmez ve büyük şoklara yol açmaz, (2) Kazanan taraf günlük olarak kârını alır, kaybeden taraf her gün teminatını günceller, (3) Sistemik risk minimuma iner çünkü taraflar büyük açık pozisyon biriktirmez. Tüm modern türev piyasalarının temel risk yönetim aracıdır.",
          },
          {
            text: "VİOP'ta sürdürme teminatı genellikle başlangıç teminatının ne kadarıdır?",
            options: [
              { id: "A", text: "Başlangıç teminatının %25'i" },
              { id: "B", text: "Başlangıç teminatının %75'i — bu seviyenin altına inildiğinde teminat tamamlama çağrısı yapılır." },
              { id: "C", text: "Başlangıç teminatının %100'ü" },
              { id: "D", text: "Başlangıç teminatından bağımsızdır." },
            ],
            correct: "B",
            explanation:
              "Türev piyasalarda sürdürme teminatı, başlangıç teminatının yaklaşık %75'i düzeyinde belirlenir (sözleşme türüne göre değişebilir). Sürdürme teminatı; pozisyonun korunması için teminatın hiçbir zaman düşmemesi gereken alt sınırdır. Günlük uzlaşma sonucunda teminat hesabı bu sınırın altına düşerse Takasbank 'teminat tamamlama çağrısı' (margin call) gönderir; yatırımcı belirli sürede (genellikle 1 iş günü) teminatı başlangıç seviyesine tamamlamak zorundadır, aksi halde pozisyonu zorla kapatılır.",
          },
          {
            text: "VİOP'ta uzun (long) pozisyon için günlük kâr/zarar hesaplaması formülü aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "(Açılış Fiyatı − Uzlaşma Fiyatı) × Sözleşme Çarpanı × Sözleşme Sayısı" },
              { id: "B", text: "(Uzlaşma Fiyatı − Açılış Fiyatı) × Sözleşme Çarpanı × Sözleşme Sayısı" },
              { id: "C", text: "Uzlaşma Fiyatı × Sözleşme Sayısı" },
              { id: "D", text: "Sözleşme Çarpanı × Sözleşme Sayısı" },
            ],
            correct: "B",
            explanation:
              "Uzun (long) pozisyonda kâr/zarar = (Uzlaşma Fiyatı − Açılış Fiyatı) × Sözleşme Çarpanı × Sözleşme Sayısı formülüyle hesaplanır. Uzlaşma fiyatı açılış fiyatından yüksekse pozitif (kâr), düşükse negatif (zarar) sonuç çıkar. Kısa (short) pozisyonda işaret tersine çevrilir: (Açılış Fiyatı − Uzlaşma Fiyatı). Sözleşme çarpanı, BIST 30 endeksinde 100 TL'dir; pay vadeli işlem sözleşmesinde ise 100 paydır. Sözleşme sayısı yatırımcının açtığı pozisyon sayısını gösterir.",
          },
          {
            text: "Garanti Fonu için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca devlet tarafından finanse edilir." },
              { id: "B", text: "Tüm üyelerin katkı yaptığı ortak risk paylaşım fonudur; bir üyenin temerrüdü kendi teminatını aşarsa bu fon devreye girer; üyeler arası 'loss sharing' ilkesi uygulanır." },
              { id: "C", text: "Sadece yatırımcı şikayetleri için kullanılır." },
              { id: "D", text: "Garanti fonu yalnızca opsiyon işlemleri için tutulur." },
            ],
            correct: "B",
            explanation:
              "Garanti Fonu (Default Fund); merkezi karşı taraf altyapısının kritik bir bileşenidir. Tüm MKT üyeleri belirli bir formüle göre bu fona katkı yapar. Bir üyenin temerrüdü durumunda kendi teminatları yetersiz kalırsa, bu ortak fon devreye girer ve kayıp tüm üyeler arasında paylaşılır ('loss sharing' ilkesi). Bu yapı üyeleri sistemin sağlıklı işleyişini takip etmeye teşvik eder; aynı zamanda bireysel temerrüdün sistemik krize dönüşmesini engeller. Default waterfall'ın ikinci aşamasında kullanılır (üye teminatı → garanti fonu → CCP özsermayesi).",
          },
          {
            text: "2008 finansal krizi sonrası tezgâh üstü (OTC) türev işlemler için getirilen düzenleme aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "OTC türev işlemleri tamamen yasaklandı." },
              { id: "B", text: "Standart OTC türevleri için merkezi takas zorunluluğu getirildi; Türkiye'de Takasbank bu hizmeti VİOP altyapısı üzerinden sunar." },
              { id: "C", text: "OTC işlemleri için teminat zorunluluğu kaldırıldı." },
              { id: "D", text: "Hiçbir düzenleme yapılmadı." },
            ],
            correct: "B",
            explanation:
              "2008 küresel finansal krizi sonrası G20 zirvelerinde alınan kararlar (Pittsburgh 2009) ile uluslararası reformlar başlatıldı. Bu reformların temelinde standart OTC türev sözleşmeleri için merkezi karşı taraf zorunluluğu yer alır; krizde Lehman Brothers ve AIG'nin OTC işlemlerinin sistemik riske dönüşmesi bu reformu tetiklemiştir. Türkiye de bu reformlara uyum sağlamış, Takasbank VİOP altyapısı üzerinden zorunlu OTC türev takas hizmetini sunmaya başlamıştır. Ayrıca raporlama zorunlulukları ve ticari raporlama merkezleri (Trade Repositories) kurulmuştur.",
          },
        ],
      },
      // ──────────── Ders 5: Takasbank Teminat Yönetimi ve Saklama Hizmetleri ────────────
      {
        id: "m1012-l5",
        title: "Takasbank Teminat Yönetimi ve Portföy Saklama Hizmetleri",
        duration: "9 dk",
        summary: {
          title: "Teminat Yönetimi ve Saklama Hizmetleri",
          intro:
            "Takasbank teminat yönetimi; tüm sermaye piyasası işlemlerinde tarafların yükümlülüklerini yerine getirememesi durumuna karşı korunmayı sağlayan kritik bir altyapıdır. Teminata kabul edilen varlıklar, değerleme katsayıları ve portföy saklama hizmetleri yatırımcı korumasının temel araçlarıdır. Portföy saklama, yatırım fonu ve emeklilik fonu varlıklarının kurucu PYŞ'den ayrı bir kurum tarafından korunmasını sağlar.",
          sections: [
            {
              heading: "Teminat Yönetimi ve Değerleme",
              icon: "shield",
              items: [
                {
                  strong: "Teminata Kabul Edilen Varlıklar:",
                  text: "Türk Lirası nakit, döviz (USD, EUR), Devlet İç Borçlanma Senetleri (DİBS), pay senetleri (likiditesi yüksek olanlar), kıymetli madenler (altın), yatırım fonu katılma payları teminat olarak kabul edilir.",
                },
                {
                  strong: "Değerleme Katsayıları (Haircut):",
                  text: "Her varlık türü için risk düzeyine göre değerleme indirimi uygulanır; nakit %0 (tam değer), DİBS %2-5, pay senetleri %20-50, döviz %5-15 gibi tipik haircut oranları vardır.",
                },
                {
                  strong: "Teminat Tipleri:",
                  text: "İşlem teminatı (pozisyon açılırken yatırılır), garanti fonu katkı payı (üyelik karşılığı), olağanüstü durum teminatı (kriz dönemlerinde geçici), ortaklar teminatı (üye sermayesi).",
                },
                {
                  strong: "Teminat Değerleme Sıklığı:",
                  text: "Teminatlar gerçek zamanlı veya günlük olarak değerlenir; volatilite arttığında daha sık değerleme yapılır; haircut oranları periyodik olarak gözden geçirilir.",
                },
                {
                  strong: "Teminat İade Süreci:",
                  text: "Pozisyon kapatıldığında veya yükümlülük tamamlandığında teminat iade edilir; iade süresi genellikle T+1 valörüyle çalışır.",
                },
              ],
            },
            {
              heading: "Portföy Saklama Hizmetleri",
              icon: "trend",
              items: [
                {
                  strong: "Portföy Saklama Tanımı:",
                  text: "Yatırım fonu, emeklilik fonu, yatırım ortaklığı gibi kurumsal yatırımcıların varlıklarının kurucu PYŞ'den BAĞIMSIZ bir kuruluşta saklanması; bu sayede çıkar çatışması önlenir.",
                },
                {
                  strong: "Portföy Saklayıcının Görevleri:",
                  text: "Varlıkların güvenli saklanması, alım-satım işlemlerinin doğrulanması, kayıt kontrolü, NAV (Net Aktif Değer) hesaplamasının doğruluğunun kontrolü, kurumsal yatırımcının çıkarlarını koruma.",
                },
                {
                  strong: "Saklayıcı Olabilecek Kuruluşlar:",
                  text: "Bankalar, geniş yetkili aracı kurumlar ve özel olarak yetkilendirilen kuruluşlar portföy saklayıcı olabilir; SPK'dan ayrı izin alınması gerekir.",
                },
                {
                  strong: "Bağımsızlık İlkesi:",
                  text: "Saklayıcı kuruluş, kurucu PYŞ'den hukuki ve operasyonel olarak bağımsız olmalıdır; aynı grup şirketi olabilir ancak ayrı tüzel kişiliğe sahip olmalıdır.",
                },
                {
                  strong: "Yatırımcı Koruması:",
                  text: "Portföy saklayıcı sistemi; PYŞ'nin iflası, yönetim hatası veya dolandırıcılık durumlarında yatırımcı varlıklarının korunmasını garanti eder, sistemik bir koruma katmanı sağlar.",
                },
              ],
            },
          ],
          tip: "Teminat varlık türleri 5 ana grup: nakit, DİBS, pay, döviz, altın. Haircut = risk indirimi (volatil varlıkta yüksek). Portföy saklama = PYŞ'den bağımsız saklayıcı; çıkar çatışmasını önler. III-56.1 Tebliği bu alanı düzenler. Saklayıcının NAV doğruluğunu kontrol etmesi yatırımcı koruma açısından kritik.",
        },
        questions: [
          {
            text: "Teminat değerlemesinde uygulanan 'değerleme katsayısı' (haircut) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm varlıklara aynı oranda uygulanır." },
              { id: "B", text: "Her varlık türü için risk düzeyine göre değerleme indirimi uygulanır; nakit %0 (tam değer), DİBS %2-5, pay senetleri %20-50, döviz %5-15 gibi tipik haircut oranları vardır." },
              { id: "C", text: "Haircut sadece yabancı para teminatlar için kullanılır." },
              { id: "D", text: "Haircut bir komisyon türüdür." },
            ],
            correct: "B",
            explanation:
              "Haircut (değerleme katsayısı); teminat olarak kabul edilen bir varlığın piyasa değerinden yapılan indirimdir. Mantığı şudur: temerrüt halinde varlığın hızlı satışı gerekebilir ve fiyatta düşüş olabilir; haircut bu olası zarara karşı bir tampon sağlar. Düşük riskli varlıklarda (nakit, DİBS) haircut düşük veya sıfırdır; yüksek volatil varlıklarda (pay senetleri, kripto) haircut yüksek tutulur. Haircut oranları piyasa koşullarına göre periyodik olarak güncellenir; kriz dönemlerinde artırılabilir.",
          },
          {
            text: "Aşağıdakilerden hangisi Takasbank tarafından teminat olarak kabul edilen varlıklardan DEĞİLDİR?",
            options: [
              { id: "A", text: "Türk Lirası nakit ve döviz (USD, EUR)" },
              { id: "B", text: "Devlet İç Borçlanma Senetleri (DİBS) ve likiditesi yüksek pay senetleri" },
              { id: "C", text: "Altın gibi kıymetli madenler ve yatırım fonu katılma payları" },
              { id: "D", text: "Şirketin sahip olduğu gayrimenkuller" },
            ],
            correct: "D",
            explanation:
              "Takasbank teminat olarak yalnızca yüksek likiditeye sahip ve hızlıca paraya çevrilebilen finansal varlıkları kabul eder. Bu kabul listesi: TL nakit ve döviz (USD, EUR), Devlet İç Borçlanma Senetleri (DİBS), likiditesi yüksek pay senetleri (BIST 30, BIST 100), altın ve gümüş gibi kıymetli madenler, yatırım fonu katılma payları. Gayrimenkuller; satışı uzun zaman alan, değerlemesi sübjektif ve hızlıca paraya çevrilemeyen varlıklar olduğu için teminat olarak kabul edilmez. Aynı şekilde sanat eseri, antika, ticari işletmeler de teminat olamaz.",
          },
          {
            text: "Portföy saklama hizmeti için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Kurucu PYŞ kendi varlıklarını saklayabilir." },
              { id: "B", text: "Yatırım fonu, emeklilik fonu, yatırım ortaklığı gibi kurumsal yatırımcıların varlıklarının kurucu PYŞ'den BAĞIMSIZ bir kuruluşta saklanmasıdır; bu sayede çıkar çatışması önlenir." },
              { id: "C", text: "Saklayıcı kuruluş yalnızca devlettir." },
              { id: "D", text: "Portföy saklama yalnızca yabancı yatırımcılar için zorunludur." },
            ],
            correct: "B",
            explanation:
              "Portföy saklama hizmeti, yatırımcı korumasının temel taşlarından biridir. Yatırım fonu, emeklilik fonu, yatırım ortaklığı gibi kurumsal yatırımcıların varlıkları, fonu yöneten Portföy Yönetim Şirketi'nden (PYŞ) bağımsız bir saklayıcı kuruluşta tutulur. Bu yapı çıkar çatışmasını önler: PYŞ, müşteri varlıklarını kendi varlıklarıyla karıştıramaz veya yetkisiz işlem yapamaz. Saklayıcı; varlıkları korur, alım-satım işlemlerini doğrular, NAV hesaplamasını kontrol eder ve PYŞ'nin iflası durumunda yatırımcı varlıklarının ayrı kalmasını sağlar.",
          },
          {
            text: "Portföy saklayıcı kuruluşun temel görevleri arasında aşağıdakilerden hangisi yer ALMAZ?",
            options: [
              { id: "A", text: "Varlıkların güvenli saklanması ve kayıt kontrolü" },
              { id: "B", text: "NAV (Net Aktif Değer) hesaplamasının doğruluğunun kontrol edilmesi" },
              { id: "C", text: "Alım-satım işlemlerinin doğrulanması" },
              { id: "D", text: "Yatırım stratejisinin belirlenmesi ve fonun aktif yönetimi" },
            ],
            correct: "D",
            explanation:
              "Portföy saklayıcı kuruluş, yatırım fonunun günlük yönetimine müdahale etmez. Yatırım stratejisinin belirlenmesi, varlık seçimi ve aktif portföy yönetimi Portföy Yönetim Şirketi'nin (PYŞ) sorumluluğundadır. Saklayıcının görevleri ise denetleyici ve koruyucu niteliktedir: (1) Varlıkları güvenli saklamak, (2) PYŞ'nin yaptığı işlemleri doğrulamak (alım-satım emirleri uygun mu), (3) Kayıt mutabakatı yapmak, (4) NAV hesaplamasının doğruluğunu kontrol etmek, (5) Mevzuata uyumu izlemek. Bu görev ayrımı yatırımcı korumasının temelidir.",
          },
          {
            text: "Portföy saklama hizmetinde 'bağımsızlık ilkesi' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Saklayıcı ile PYŞ aynı tüzel kişilik olabilir." },
              { id: "B", text: "Saklayıcı kuruluş, kurucu PYŞ'den hukuki ve operasyonel olarak bağımsız olmalıdır; aynı grup şirketi olabilir ancak ayrı tüzel kişiliğe sahip olmalıdır." },
              { id: "C", text: "Saklayıcının PYŞ ile hiçbir bağlantısı olamaz." },
              { id: "D", text: "Bağımsızlık ilkesi yalnızca yabancı saklayıcılar için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "Portföy saklamada bağımsızlık ilkesi; saklayıcının kurucu PYŞ'den ayrı tüzel kişiliğe sahip olması ve kararlarını bağımsız alabilmesini ifade eder. Aynı grup şirketi olabilir (örneğin bir banka iştiraki olan PYŞ'nin saklayıcısı aynı grubun başka bir bankası olabilir), ancak: (1) Ayrı tüzel kişilik gereklidir, (2) Operasyonel ayrılık olmalıdır (ayrı personel, sistem, prosedürler), (3) Çıkar çatışması durumunda yatırımcı çıkarı öncelikli olmalıdır. Bu yapı tam bağımsızlık değil ama 'işlevsel bağımsızlık' (functional independence) sağlar; yatırımcı korumasının temelidir.",
          },
        ],
      },
    ],
  },
];