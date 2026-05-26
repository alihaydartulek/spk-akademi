/* ─────────────────────────────────────────────────────────────────────────────
 * Bilgi Sistemleri Güvenliği (1023)
 * Kaynak: SPL 1023 Çalışma Notu, 31 Aralık 2025 (121 sayfa)
 * Sınavlar: Bilgi Sistemleri Bağımsız Denetim Sınavı
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1023: Module[] = [
  {
    id: "m1023",
    title: "Modül · Bilgi Sistemleri Güvenliği (1023)",
    lessons: [
      // ──────────── Ders 1: Bilgi Güvenliği Yönetimi ve Varlık Yönetimi ────────────
      {
        id: "m1023-l1",
        title: "Bilgi Güvenliği Yönetimi, Varlık Yönetimi ve Veri Sınıflandırma",
        duration: "10 dk",
        summary: {
          title: "Bilgi Güvenliği Yönetimi ve Varlık Yönetimi",
          intro:
            "Bilgi Güvenliği Yönetimi (ISM); bilgi varlıklarının gizlilik, bütünlük ve erişilebilirlik (CIA) niteliklerinin korunması için politikalar, prosedürler ve kontrollerin bütünüdür. Üst yönetim sorumluluğunda, ISO 27001 referansıyla kurulur. Varlık Yönetimi ise bilgi varlıklarının envanterinin tutulması, sınıflandırılması ve etiketlenmesidir.",
          sections: [
            {
              heading: "Bilgi Güvenliği Temelleri",
              icon: "shield",
              items: [
                { strong: "CIA Üçgeni:", text: "Confidentiality (Gizlilik) + Integrity (Bütünlük) + Availability (Erişilebilirlik); bilgi güvenliği yönetiminin temel ilkeleri." },
                { strong: "Üst Yönetim Sorumluluğu:", text: "Yönetim Kurulu nihai sorumlu; CISO atanır; bilgi güvenliği politikası onaylanır; bütçe ve kaynak tahsisi yapılır." },
                { strong: "Roller:", text: "Veri Sahibi (sınıflandırma kararı), Veri Bekçisi (BT — koruma uygulama), CISO (strateji), Güvenlik Yöneticisi (operasyon), tüm çalışanlar (politika uyumu)." },
                { strong: "Farkındalık ve Eğitim:", text: "Yeni başlayan oryantasyonu, yıllık tazeleme, phishing simülasyonları; insan en zayıf halka." },
                { strong: "Risk Yönetimi:", text: "Risk tespit → analiz → değerlendirme → müdahale → izleme; ISO 27005 standardı." },
              ],
            },
            {
              heading: "Varlık Yönetimi ve Veri Sınıflandırma",
              icon: "trend",
              items: [
                { strong: "Varlık Türleri:", text: "Donanım, yazılım, veri, personel, dokümantasyon, hizmetler." },
                { strong: "Varlık Envanteri:", text: "CMDB (Configuration Management Database) merkezi kayıt; sahibi, lokasyon, sınıflandırma kayıtlı." },
                { strong: "Veri Sınıflandırma:", text: "4 seviye: Public (genel), Internal (dahili), Confidential (gizli), Top Secret (çok gizli); KVKK ek kategori — özel nitelikli kişisel veri." },
                { strong: "Etiketleme:", text: "Fiziksel (donanım) ve dijital (meta veri); DLP sistemleri etiketleri tanır." },
                { strong: "Taşınabilir Varlıklar:", text: "Laptop/telefon disk şifreleme, MDM, uzaktan silme; BYOD modelleri: COBO (şirket), COPE (şirket+kişisel), CYOD (seçim)." },
              ],
            },
          ],
          tip: "CIA = Confidentiality + Integrity + Availability. Veri Sahibi (sınıflandırma) ≠ Veri Bekçisi (koruma). 4 sınıflandırma seviyesi: Public-Internal-Confidential-Top Secret. KVKK özel nitelikli veri ek koruma gerektirir. BYOD modelleri: COBO/COPE/CYOD.",
          kavramlar: [
            { terim: "CIA Üçgeni", tanim: "Bilgi güvenliğinin üç temel hedefi: Gizlilik (yetkisiz erişim engeli), Bütünlük (veri doğruluğu/değişmezliği), Erişilebilirlik (yetkili kullanıcı erişimi)." },
            { terim: "Veri Sahibi (Data Owner)", tanim: "Verinin içeriğinden ve sınıflandırılmasından sorumlu iş birimi yöneticisi; hangi bilginin ne kadar hassas olduğuna karar verir." },
            { terim: "Veri Bekçisi (Data Custodian)", tanim: "Veri sahibinin belirlediği politikayı teknik olarak uygulayan IT personeli; yedekleme, erişim kontrolü, şifreleme gibi teknik koruma önlemleri." },
            { terim: "Veri Sınıflandırma Seviyeleri", tanim: "Gizlilik düzeyine göre: Public (herkese açık) → Internal (iç kullanım) → Confidential (gizli) → Top Secret (çok gizli)." },
            { terim: "KVKK Özel Nitelikli Veri", tanim: "Sağlık, biyometrik, genetik, ırk/etnik köken, siyasi görüş, din gibi hassas kişisel veriler; standart veriye kıyasla ek güvenlik önlemi gerektirir." },
            { terim: "BYOD (Kendi Cihazını Getir)", tanim: "Çalışanların kişisel cihazlarıyla kurumsal kaynaklara eriştiği model; COBO (kurumsal cihaz), COPE (kurumsal ama kişisel de), CYOD (seç+kendin al) alternatifleri." },
            { terim: "Veri Yaşam Döngüsü", tanim: "Verinin oluşturulması, depolanması, kullanılması, paylaşılması ve imha edilmesini kapsayan aşamalar; her aşamada farklı güvenlik önlemleri gerekir." },
          ],
          dikkatlar: [
            "Veri sahibi sınıflandırma kararını verir; veri bekçisi teknik uygulamayı yapar — roller farklı, aynı kişi olamaz.",
            "KVKK özel nitelikli verilerin işlenmesi için kural olarak açık rıza gerekir; istisna halleri sınırlıdır.",
            "BYOD en büyük riski veri sızıntısı ve cihaz kaybıdır; MDM (Mobil Cihaz Yönetimi) ile yönetilir.",
            "CIA'de herhangi bir bileşen ihlali güvenlik başarısızlığıdır; DDoS saldırısı Availability'i, ransomware Confidentiality'i hedef alır.",
            "Sınıflandırma seviyeleri: Public açıklanabilir, Internal dahili, Confidential kısıtlı, Top Secret kritik — her seviye için farklı işleme kuralları.",
          ],
        },
        questions: [
          {
            text: "Bilgi güvenliğinin 'CIA Üçgeni' aşağıdakilerden hangisinden oluşur?",
            options: [
              { id: "A", text: "Customer, Information, Asset" },
              { id: "B", text: "Confidentiality (Gizlilik), Integrity (Bütünlük), Availability (Erişilebilirlik) — bilgi güvenliği yönetiminin üç temel ilkesi; gizlilik yetkisiz erişimi önler, bütünlük verinin doğruluğunu sağlar, erişilebilirlik yetkili kişilerin ihtiyaç anında erişimini garanti eder." },
              { id: "C", text: "Control, Inspection, Audit" },
              { id: "D", text: "Compliance, Identity, Authentication" },
            ],
            correct: "B",
            explanation: "CIA Üçgeni bilgi güvenliği yönetiminin altın standardıdır. Confidentiality — yetkisiz erişimden koruma (şifreleme, erişim kontrolü, NDA). Integrity — verinin doğruluğu ve tutarlılığının korunması (hash, dijital imza, denetim izleri). Availability — yetkili kullanıcıların ihtiyaç anında erişebilmesi (yedekleme, BCP, DR, redundancy). Modern eklemeler: Parkerian Hexad — CIA + Possession + Authenticity + Utility.",
          },
          {
            text: "'Veri Sahibi' (Data Owner) ile 'Veri Bekçisi' (Data Custodian) arasındaki fark nedir?",
            options: [
              { id: "A", text: "İki rol aynıdır." },
              { id: "B", text: "Veri Sahibi: verinin iş değerini bilen, SINIFLANDIRMA kararını veren, erişim yetkilerini onaylayan (iş birimi yöneticisi); Veri Bekçisi: verinin teknik olarak KORUNMASINDAN sorumlu (BT departmanı). Sahip sınıflandırır, bekçi uygular." },
              { id: "C", text: "Veri Sahibi yalnızca BT departmanından olur." },
              { id: "D", text: "Veri Bekçisi verinin yasal sahibidir." },
            ],
            correct: "B",
            explanation: "Veri Sahibi (Data Owner) — verinin iş değerini bilen iş birimi yöneticisi; veri sınıflandırma, erişim yetkilerini onaylama, yasal/regülasyon uyumu sorumlulukları vardır. Veri Bekçisi (Data Custodian) — BT departmanı; şifreleme, yedekleme, erişim kontrolleri uygulama, teknik koruma. Görevler ayrılığı ilkesi gereği iki rol farklı kişilerde olmalıdır. KVKK md. 12 ayrıca Veri Sorumlusu (Controller) ve Veri İşleyen (Processor) yasal rolleri tanımlar.",
          },
          {
            text: "BYOD modellerinden 'COPE' (Corporate-Owned, Personally-Enabled) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca yabancı şirketlerde kullanılır." },
              { id: "B", text: "Şirkete ait olan, çalışanın kişisel olarak da kullanabileceği cihaz modelidir; şirket sahip ve yöneticidir, MDM ile yönetilir; iş ve kişisel veri 'container' ayrımı; BYOD'a göre daha güvenli ama maliyetli; bankacılık gibi yüksek güvenlikli sektörlerde tercih edilir." },
              { id: "C", text: "Kişisel cihazların şirket için kullanılmasıdır." },
              { id: "D", text: "Yalnızca dizüstü bilgisayarlar içindir." },
            ],
            correct: "B",
            explanation: "BYOD modelleri: (1) BYOD — çalışan kendi cihazı; ucuz ama riskli. (2) COBO — şirkete ait, yalnızca iş; en güvenli ama kullanıcı memnuniyetsizliği. (3) COPE — şirkete ait, kişisel kullanım da serbest; güvenlik + memnuniyet dengesi; iş/kişisel container ayrımı (MDM ile). (4) CYOD — kullanıcı listeden cihaz seçer. Yönetim araçları: Microsoft Intune, VMware Workspace ONE, Jamf. Güvenlik kontrolleri: disk şifreleme, MFA, uzaktan silme, jailbreak tespiti.",
          },
          {
            text: "Bilgi güvenliğinde 'farkındalık ve eğitim' programları neden kritiktir?",
            options: [
              { id: "A", text: "Eğitim güvenlik için önemsizdir." },
              { id: "B", text: "'İnsan en zayıf halka'; sosyal mühendislik, phishing, kötü şifre alışkanlıkları TEKNİK kontrollerle değil ÇALIŞAN FARKINDALIĞI ile önlenebilir; oryantasyon + yıllık tazeleme + phishing simülasyonları + güvenlik haftaları zorunludur." },
              { id: "C", text: "Eğitim yalnızca BT personeli içindir." },
              { id: "D", text: "Eğitim güvenlik politikasının parçası değildir." },
            ],
            correct: "B",
            explanation: "IBM 2023 raporu: ihlallerin %19'u phishing ile başlar. Verizon DBIR: ihlallerin %68'inde insan faktörü var. Eğitim bileşenleri: (1) Yeni başlayan oryantasyonu, (2) Yıllık tazeleme (zorunlu test), (3) Phishing simülasyonları (KnowBe4, Cofense, Proofpoint), (4) Hedeflenmiş eğitimler (finans, üst yönetim), (5) Güvenlik haftaları, (6) Olay sonrası eğitim. Konular: phishing tanıma, şifre güvenliği, sosyal mühendislik, USB güvenliği, KVKK uyumu. ISO 27001 ve SPK/BDDK zorunlu kılar.",
          },
          {
            text: "Veri sınıflandırma seviyeleri için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm veriler aynı seviyede korunmalıdır." },
              { id: "B", text: "Tipik 4 seviye: Public (pazarlama, basın bültenleri), Internal (iç memo), Confidential (müşteri verisi, finansal raporlar), Top Secret/Restricted (stratejik plan, M&A); her seviyenin farklı kontrolleri vardır; KVKK kişisel veri ve özel nitelikli kişisel veri ayrımı zorunlu." },
              { id: "C", text: "Sınıflandırma yalnızca devlet kurumları için." },
              { id: "D", text: "Sınıflandırma her yıl tamamen değiştirilir." },
            ],
            correct: "B",
            explanation: "Veri sınıflandırma 4 seviye: (1) Public — kamuya açık (web içeriği, basın). (2) Internal — kuruluş içi (iç memo, organizasyon şeması). (3) Confidential — yetkisiz erişimde zarar (müşteri verisi, finansal raporlar, çalışan maaş). (4) Top Secret — yıkıcı zarar (stratejik plan, M&A, fikri mülkiyet, kritik şifreler). KVKK md. 6: özel nitelikli kişisel veri (sağlık, biyometrik, dini inanç, cinsel hayat) ek koruma gerektirir. Etiketleme: fiziksel + dijital meta veri + e-posta konu 'GİZLİ' eklenmesi.",
          },
        ],
      },
      // ──────────── Ders 2: Fiziksel ve Çevresel Güvenlik ────────────
      {
        id: "m1023-l2",
        title: "Fiziksel ve Çevresel Güvenlik — Veri Merkezi Korumaları",
        duration: "9 dk",
        summary: {
          title: "Fiziksel ve Çevresel Güvenlik",
          intro:
            "Fiziksel Güvenlik bilgi varlıklarının fiziksel olarak yetkisiz erişim, hasar ve etkilerden korunmasıdır. Çevresel Güvenlik ise yangın, sel, deprem, sıcaklık, nem, elektrik kesintisi gibi çevresel tehditlerden koruma sağlar. Veri merkezleri için kapsamlı kontroller zorunludur.",
          sections: [
            {
              heading: "Fiziksel Kontroller",
              icon: "shield",
              items: [
                { strong: "Perimetre Güvenliği:", text: "Çevre duvarları, çitler, bariyerler, aydınlatma; tesis dışından erişimi sınırlar." },
                { strong: "Erişim Kontrolleri:", text: "Kart geçiş (RFID, NFC), biyometrik (parmak izi, retina, yüz), mantrap (çift kapılı geçiş — tailgating önler), turnstile." },
                { strong: "İzleme:", text: "CCTV (kayıt 30-90 gün saklama), 7/24 güvenlik personeli, hareket algılayıcılar, alarm sistemleri." },
                { strong: "Veri Merkezi Tier (Uptime Institute):", text: "Tier I (%99.671, 28.8 sa downtime/yıl) → Tier II → Tier III (%99.982, 1.6 sa) → Tier IV (%99.995, 26 dk); finansal kurumlar Tier III/IV." },
                { strong: "Kritik Bölgeler:", text: "Sunucu odası, network odası, UPS, jeneratör alanı ayrı erişim; ziyaretçi kayıt + eskort zorunlu." },
              ],
            },
            {
              heading: "Çevresel Kontroller",
              icon: "trend",
              items: [
                { strong: "Yangın Söndürme:", text: "VESDA (erken duman tespiti), gazlı söndürme (FM-200, Inergen, Novec 1230 — su zarar verir, gaz korur), yangın bölmeleri." },
                { strong: "Sıcaklık/Nem (HVAC):", text: "Veri merkezi ideal: 18-27°C, nem %40-60; CRAC üniteleri, soğuk koridor / sıcak koridor mimarisi, containment." },
                { strong: "Güç Yönetimi:", text: "UPS (anlık köprü, 5-30 dk batarya) + Jeneratör (uzun süreli, saatler-günler dizel/doğalgaz); çift güç hattı (A+B), ATS, PDU." },
                { strong: "EMI/RFI Koruma:", text: "Topraklama, kablo standartları, Faraday Kafesi (askeri/devlet TEMPEST)." },
                { strong: "Diğer Tehditler:", text: "Su sızıntı dedektörleri, drenaj, deprem direnci, sismik izolatörler, temiz oda standartları (ISO 14644)." },
              ],
            },
          ],
          tip: "Veri merkezi Tier: III (en yaygın) = %99.982. Gazlı söndürme (FM-200) donanım korur. Sıcaklık 18-27°C, nem %40-60. UPS (anlık) + Jeneratör (uzun süreli). Mantrap = tailgating önler. CCTV 30-90 gün saklanır.",
          kavramlar: [
            { terim: "Veri Merkezi Tier Sınıflaması", tanim: "Uptime Institute'ün veri merkezlerini erişilebilirlik ve artıklığa göre derecelendirdiği 4 katmanlı sistem; Tier III = %99,982 (en yaygın ticari)." },
            { terim: "Gazlı Söndürme (FM-200/Novec)", tanim: "Elektronik ekipmanı korumak için su yerine gaz kullanan yangın söndürme sistemi; donanıma zarar vermez." },
            { terim: "UPS (Kesintisiz Güç Kaynağı)", tanim: "Şebeke kesintisinde batarya desteğiyle anlık güç sağlayan sistem; jeneratör devreye girene kadar kritik sistemleri ayakta tutar." },
            { terim: "Mantrap (Hava Kilidi)", tanim: "Bir kapıdan girmeden diğer kapıyı açmanın mümkün olmadığı çift kapılı fiziksel güvenlik sistemi; tailgating (izinsiz takip) saldırısını önler." },
            { terim: "Tailgating (Kuyruk Takma)", tanim: "Yetkili birinin ardından yetkisiz kişinin güvenli alana girmesi; fiziksel güvenlik ihlalinin en yaygın türü." },
            { terim: "Soğuk Koridor / Sıcak Koridor", tanim: "Veri merkezinde sunucu raflarının yüz yüze (soğuk hava) veya sırt sırta (sıcak hava) yerleştirildiği termal verimlilik düzenlemesi." },
            { terim: "CCTV Saklama Süresi", tanim: "Güvenlik kamera kayıtlarının saklanması gereken süre; operasyonel alanlarda 30-90 gün standarttır, düzenleyici gereklilikler daha uzun süre öngörebilir." },
          ],
          dikkatlar: [
            "Tier III veri merkezi N+1 artıklık ve bakım için kesinti gerekmez özelliği ile en yaygın ticari standarttır.",
            "FM-200 gazlı söndürme su değil; donanımı korur, ancak insan sağlığına zararlı konsantrasyonlarda kullanılırsa tahliye gerekir.",
            "UPS anlık koruma sağlar (saniyeler/dakikalar); uzun süreli kesintide jeneratör devreye girer — ikisi birbirini tamamlar.",
            "Mantrap tailgating saldırısına karşı en etkili fiziksel kontrol; biyometrik kapı kilidiyle güçlendirilmesi önerilir.",
            "Veri merkezi sıcaklık ve nem: 18-27°C, %40-60 nem — bu aralık dışı ekipman arızası riskini artırır.",
          ],
        },
        questions: [
          {
            text: "Veri merkezi 'Tier III' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tier III en düşük seviyedir." },
              { id: "B", text: "Uptime Institute'un 'Concurrently Maintainable' (Eş Zamanlı Bakım) seviyesidir; %99.982 erişilebilirlik (yıllık 1.6 saat downtime); yedekli bileşenler ve birden fazla dağıtım yolu; bakım için sistem KAPATILMADAN bakım yapılabilir; finansal kurumlar için STANDART seviyedir." },
              { id: "C", text: "Yalnızca devlet kurumları için." },
              { id: "D", text: "Tier III'te elektrik kesintisi sık." },
            ],
            correct: "B",
            explanation: "Uptime Institute Tier sınıflandırması: Tier I (%99.671, basit), Tier II (%99.741, yedekli bileşenler), Tier III (%99.982, eş zamanlı bakım — N+1, çift güç/soğutma), Tier IV (%99.995, fault tolerant — 2N veya 2N+1). Tier III standart kurumsal seviyedir; bankalar, sigorta, telekom yaygın kullanır. BIST, MKK gibi piyasa altyapı kurumları Tier III+ veya IV gerektirir. BDDK ve SPK kritik finansal sistemler için Tier III minimum talep eder.",
          },
          {
            text: "Veri merkezlerinde su yerine gazlı yangın söndürme kullanılmasının nedeni nedir?",
            options: [
              { id: "A", text: "Gaz daha ucuzdur." },
              { id: "B", text: "Su, elektronik donanıma ciddi zarar verir ve kısa devreye neden olur; gazlı sistemler (FM-200, Inergen, Novec 1230) elektronik cihazlara zarar vermez; insan sağlığına zararsız formülasyonlar tercih edilir; oksijen yoğunluğunu azaltarak veya kimyasal müdahale ile söndürür." },
              { id: "C", text: "Su yangın söndürmede etkisizdir." },
              { id: "D", text: "Gaz hemen tükenmez." },
            ],
            correct: "B",
            explanation: "Gazlı söndürme türleri: (1) FM-200 (HFC-227ea) — kimyasal söndürme, hızlı (10 sn), insan güvenli, tortusuz; (2) Inergen — Argon+Nitrojen+CO2, oksijeni %15'e düşürür; (3) Novec 1230 — çevre dostu (düşük GWP), modern tercih; (4) CO2 — eski, insan tehlikeli (boğulma). Sistem: VESDA erken duman tespit → alarm (30 sn tahliye) → HVAC durur, kapılar kapanır → gaz salınır (10 sn) → yangın söner → havalandırma. Bazı merkezler yedek 'pre-action sprinkler' de kullanır.",
          },
          {
            text: "'Mantrap' (çift kapılı geçiş) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Mantrap bir kapı türüdür." },
              { id: "B", text: "İki kapı arasında küçük bölmeden oluşan erişim kontrolü; ilk kapı kapanmadan ikincisi açılmaz, 'tailgating' (yetkilinin ardından yetkisizin geçmesi) önlenir; biometric doğrulama ve ağırlık sensörü ile kombine edilebilir; yüksek güvenlikli bölgelerde kullanılır." },
              { id: "C", text: "Mantrap yalnızca dış kapılarda." },
              { id: "D", text: "Mantrap yalnızca dijitaldir." },
            ],
            correct: "B",
            explanation: "Mantrap iki kapı arası küçük bölme; interlock mekanizması — ilk kapı kapanmadan ikinci açılmaz. Çözdüğü sorun: TAILGATING (yetkili kişinin ardından yetkisiz birinin sızması). Özellikler: ağırlık sensörü (tek kişi kontrolü), CCTV, acil buton, görsel sinyaller. Kullanım: veri merkezleri, banka kasaları, hapishaneler, askeri tesisler, nükleer tesisler. Modern türevler: Security Revolving Door, Sally Port, Optical Turnstile. Türkiye'de büyük bankaların veri merkezlerinde, BIST/MKK/Takasbank'ta yaygın.",
          },
          {
            text: "UPS ile Jeneratör arasındaki fark nedir?",
            options: [
              { id: "A", text: "İki sistem aynı işlevi görür." },
              { id: "B", text: "UPS (Kesintisiz Güç Kaynağı): bataryalı, elektrik kesintisinde ANLIK (milisaniyeler) köprü, 5-30 dk güç; Jeneratör: dizel/doğalgaz motor, UZUN SÜRELİ (saatler-günler) güç, devreye girmesi 10-60 saniye; pratikte ikisi birlikte: UPS jeneratör başlayana kadar köprü kurar." },
              { id: "C", text: "UPS yalnızca yazılım." },
              { id: "D", text: "Jeneratör yalnızca ofislerde." },
            ],
            correct: "B",
            explanation: "UPS türleri: Standby (offline, ucuz), Line-Interactive (orta), Online/Double-Conversion (kritik sistemler, en kaliteli). UPS görevleri: köprü sağlama (jeneratör başlayana kadar), güç kalitesi (voltaj düzeltme, harmonik filtre), kısa kesintilerde yeterlilik. Jeneratör: dizel veya doğalgaz, 10-60 sn start süresi, 24-72 saat yakıt kapasitesi, yakıt ikmali ile haftalar. Veri merkezi mimari: Şebeke → ATS → UPS → PDU → Sunucu (A hattı + B hattı, dual PSU). Modern: Lityum-iyon UPS (10-15 yıl ömür), yakıt hücresi.",
          },
          {
            text: "Veri merkezinde 'soğuk koridor / sıcak koridor' konsepti için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Sıcaklık farkı olmayan tasarım." },
              { id: "B", text: "Rack'lerin ön ve arkasının farklı koridorlara bakacak şekilde konumlandırılması; soğuk hava sunucuların ÖNÜNDEN (Soğuk Koridor) çekilir, ısınmış hava ARKADAN (Sıcak Koridor) tahliye edilir; sıcak/soğuk hava karışmaz, soğutma verimliliği artar (%20-50 enerji tasarrufu); modern veri merkezlerinde 'containment' ile yalıtılır." },
              { id: "C", text: "Yalnızca yaz aylarında." },
              { id: "D", text: "Yalnızca eski veri merkezlerinde." },
            ],
            correct: "B",
            explanation: "Soğuk/sıcak koridor modern veri merkezi tasarım standardı. Klasik tasarımda tüm rack'ler aynı yöne bakardı; arkadan çıkan sıcak hava sonraki rack'in önüne girerek CRAC verimliliğini düşürürdü. Modern tasarım: rack'ler karşılıklı sıralar (önler önlere, arkalar arkalara). PUE (Power Usage Effectiveness) iyileşmesi 0.3-0.5; iyi PUE 1.2-1.5. Containment (yalıtım) ile sıcak/soğuk hava fiziksel olarak ayrılır. Modern trendler: sıvı soğutma (immersion cooling, AI/HPC için), free cooling (soğuk iklim — İskandinavya), AI tabanlı optimizasyon (Google DeepMind %40 tasarruf).",
          },
        ],
      },
      // ──────────── Ders 3: Ağ Güvenliği — OSI, TCP/IP, Saldırılar ────────────
      {
        id: "m1023-l3",
        title: "Ağ Güvenliği — OSI, TCP/IP, Saldırı Türleri ve Savunma",
        duration: "10 dk",
        summary: {
          title: "Ağ Güvenliği — Modeller, Tehditler ve Savunma",
          intro:
            "Ağ Güvenliği; ağ trafiğinin, cihazlarının ve protokollerinin yetkisiz erişim, kötüye kullanım, değişiklik ve kesintiye karşı korunmasıdır. OSI (7 katmanlı) ve TCP/IP (4 katmanlı) referans modelleri ağ iletişiminin temelini oluşturur. Savunma 'derinliğine' (defense in depth) çoklu katmanlı korumadır.",
          sections: [
            {
              heading: "Ağ Modelleri ve Protokoller",
              icon: "shield",
              items: [
                { strong: "OSI 7 Katman:", text: "(1) Fiziksel, (2) Veri Bağlantısı, (3) Ağ, (4) Taşıma, (5) Oturum, (6) Sunum, (7) Uygulama; akronim: 'All People Seem To Need Data Processing'." },
                { strong: "TCP/IP 4 Katman:", text: "(1) Ağ Erişimi (OSI L1+L2), (2) İnternet (L3), (3) Taşıma (L4), (4) Uygulama (L5+L6+L7); fiili internet standardı." },
                { strong: "TCP vs UDP:", text: "TCP — bağlantı yönelimli, güvenilir, sıralı (web, e-posta, FTP); UDP — bağlantısız, hızlı, garantisiz (video, DNS, VoIP, oyun)." },
                { strong: "Önemli Portlar:", text: "HTTP/HTTPS 80/443, FTP 21, SSH 22, DNS 53, SMTP/IMAP/POP3 25/143/110, RDP 3389." },
                { strong: "Ağ Cihazları:", text: "Switch (L2), Router (L3), Firewall (paket/uygulama filtre), IDS/IPS (saldırı tespit/önleme), WAF (web özel), Load Balancer." },
              ],
            },
            {
              heading: "Saldırılar ve Savunma",
              icon: "trend",
              items: [
                { strong: "Cyber Kill Chain (Lockheed Martin):", text: "1. Keşif, 2. Silahlandırma, 3. Teslim, 4. İstismar, 5. Kurulum, 6. C2 (Komuta-Kontrol), 7. Hedef Eylemi." },
                { strong: "Yaygın Saldırılar:", text: "DDoS (hizmet kesintisi), MITM (ortadaki adam), SQL Injection, XSS, CSRF, Phishing/Spear Phishing." },
                { strong: "Zararlı Yazılım:", text: "Virüs, Solucan (Worm), Trojan, Ransomware (fidye), Spyware, Rootkit, APT (gelişmiş kalıcı tehdit)." },
                { strong: "Sosyal Mühendislik:", text: "Phishing (toplu), Spear Phishing (hedefli), Whaling (CEO fraud), Vishing (sesli), Smishing (SMS), Pretexting, Baiting, Tailgating." },
                { strong: "Savunma:", text: "Defense in Depth, DMZ, Network Segmentation, Zero Trust ('asla güvenme'), SIEM/SOC, MFA, şifreleme, yamalar, eğitim." },
              ],
            },
          ],
          tip: "OSI 7 vs TCP/IP 4. TCP (güvenilir) vs UDP (hızlı). Önemli portlar: HTTP 80, HTTPS 443, SSH 22, DNS 53. Kill Chain 7 adım. Defense in Depth + Zero Trust. APT = gelişmiş kalıcı tehdit. SIEM = log toplama ve analiz.",
          kavramlar: [
            { terim: "OSI 7 Katman Modeli", tanim: "Ağ iletişimini 7 katmana ayıran referans modeli: Fiziksel → Veri Bağı → Ağ → Taşıma → Oturum → Sunum → Uygulama." },
            { terim: "Cyber Kill Chain", tanim: "Lockheed Martin'in saldırı aşamalarını modelleyen çerçeve: Keşif → Silahlandırma → Teslim → İstismar → Kurulum → C2 → Hedef Eylem (7 adım)." },
            { terim: "Zero Trust Mimarisi", tanim: "'Hiçbir zaman güvenme, her zaman doğrula' ilkesine dayanan güvenlik yaklaşımı; iç ağdaki kullanıcılar da sürekli kimlik doğrulamasına tabi tutulur." },
            { terim: "APT (Gelişmiş Kalıcı Tehdit)", tanim: "Uzun süre hedef sistemde gizli kalan, devlet destekli veya organize tehdit aktörlerince yürütülen sofistike siber saldırı." },
            { terim: "SIEM (Güvenlik Bilgisi ve Olay Yönetimi)", tanim: "Farklı kaynaklardan log ve olay verisi toplayarak gerçek zamanlı analiz ve uyarı üreten merkezi güvenlik yönetim platformu." },
            { terim: "Defense in Depth", tanim: "Tek bir güvenlik katmanına bağımlı olmak yerine birden fazla katmanlı savunma mekanizmasının (ağ, uygulama, veri) birlikte kullanılması." },
            { terim: "IDS/IPS", tanim: "Intrusion Detection System (saldırıyı tespit eder, alarm üretir) ve Intrusion Prevention System (saldırıyı tespit eder ve otomatik engeller)." },
          ],
          dikkatlar: [
            "Önemli portlar: HTTP 80, HTTPS 443, SSH 22, DNS 53, FTP 21, SMTP 25 — sınav sorusu favorisi.",
            "Zero Trust: 'içerideysen güvenli' varsayımını reddeder; her erişim isteği kimlik doğrulama + yetkilendirme + bağlam kontrolüne tabi.",
            "Kill Chain 7 adımı: Keşif → Silahlandırma → Teslim → İstismar → Kurulum → C2 (Command & Control) → Hedef Eylem.",
            "APT uzun süre tespit edilmeden sistemde kalır; SIEM ve davranışsal analitik APT tespitinde kritik rol oynar.",
            "IDS tespit eder alarm üretir; IPS tespit eder VE engeller — pasif vs aktif savunma ayrımı.",
          ],
        },
        questions: [
          {
            text: "OSI 7 katmanlı modelinde 'Taşıma Katmanı' (L4) hangi protokolleri içerir?",
            options: [
              { id: "A", text: "HTTP ve HTTPS" },
              { id: "B", text: "TCP (bağlantı yönelimli, güvenilir, sıralı teslimat — web, e-posta, FTP) ve UDP (bağlantısız, hızlı, garantisiz — video, DNS, VoIP); uçtan uca veri aktarımı, port numaraları bu katmanda." },
              { id: "C", text: "Ethernet ve Wi-Fi" },
              { id: "D", text: "IP ve ICMP" },
            ],
            correct: "B",
            explanation: "OSI 7 katman: L1 Fiziksel (kablo, sinyal), L2 Veri Bağlantısı (Ethernet, MAC, switch), L3 Ağ (IP, router, ICMP), L4 TAŞIMA (TCP, UDP — uçtan uca, portlar), L5 Oturum, L6 Sunum (SSL/TLS, JPEG), L7 Uygulama (HTTP, FTP, SMTP, DNS). TCP: 3'lü el sıkışma (SYN-SYN/ACK-ACK), güvenilir, akış kontrolü; HTTP, FTP, SSH, SMTP, IMAP. UDP: bağlantısız, düşük overhead; DNS, DHCP, VoIP, video streaming, oyunlar. Akronim: 'Aslan Sevdiği Tek O Vakit Bana Filiz' (TR).",
          },
          {
            text: "Lockheed Martin 'Cyber Kill Chain' modeli aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Saldırı → Savunma → Geri Çekilme" },
              { id: "B", text: "(1) Keşif (Reconnaissance), (2) Silahlandırma (Weaponization), (3) Teslim (Delivery), (4) İstismar (Exploitation), (5) Kurulum (Installation), (6) Komuta-Kontrol (C2), (7) Hedef Eylemi (Actions on Objectives); her aşamada zinciri kırarak saldırı durdurulabilir." },
              { id: "C", text: "Sadece tek aşama vardır." },
              { id: "D", text: "Saldırı yıllar boyunca devam eder." },
            ],
            correct: "B",
            explanation: "Kill Chain 7 aşama: (1) Keşif — pasif (LinkedIn, OSINT) ve aktif (Nmap, Shodan) bilgi toplama; (2) Silahlandırma — exploit + payload hazırlama; (3) Teslim — phishing, web, USB, sosyal mühendislik (%94 e-posta); (4) İstismar — açık sömürme; (5) Kurulum — backdoor, kalıcılık (persistence); (6) C2 — saldırgan ile iletişim (HTTPS, DNS tunneling); (7) Hedef Eylemi — veri çalma, ransomware, sabotaj, lateral movement. Modern: MITRE ATT&CK — daha detaylı (14 taktik, 200+ teknik). Defense in Depth her aşamada savunma katmanı.",
          },
          {
            text: "'DDoS' (Distributed Denial of Service) saldırısı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "DDoS verileri çalan saldırıdır." },
              { id: "B", text: "Hedef sisteme BİRDEN FAZLA KAYNAKTAN (botnet) aşırı yük gönderilerek meşru kullanıcı erişimini engelleyen saldırı; volumetric, protocol, application layer türleri; savunma: Cloudflare, Akamai, AWS Shield, rate limiting, scrubbing center." },
              { id: "C", text: "DDoS sadece kişisel bilgisayarları etkiler." },
              { id: "D", text: "DDoS yalnızca yazılım hatalarından." },
            ],
            correct: "B",
            explanation: "DDoS = binlerce-milyonlarca bot ile saldırı (botnet — Mirai, Emotet). Türleri: (1) Volumetric — UDP/ICMP flood, DNS amplification, bant genişliği doldurma (100 Gbps - 1 Tbps); (2) Protocol — SYN flood, Ping of Death, Smurf; (3) Application Layer (L7) — HTTP flood, Slowloris (düşük bant, yüksek etki). Savunma: Cloudflare (lider), Akamai, AWS Shield, Imperva; Anycast (coğrafi yayma), rate limiting, WAF, CDN. Rekor: 2023 Cloudflare 71M req/sn. Türkiye'de BTK yıllık raporlar; bankalar ve devlet kurumları sık hedef. TCK md. 244 suç.",
          },
          {
            text: "Sosyal mühendislik saldırılarından 'Whaling' nedir?",
            options: [
              { id: "A", text: "Balina avı simülasyonu" },
              { id: "B", text: "Üst düzey yöneticiler (CEO, CFO) HEDEFLENEN sosyal mühendislik saldırısı; 'CEO Fraud' veya 'BEC' olarak da bilinir; örnek: CFO'ya CEO'dan geliyormuş gibi 'acil para transferi' e-postası; haftalarca araştırma sonrası; milyon dolarlık kayıplar mümkün." },
              { id: "C", text: "Sadece denizci personeli hedefler." },
              { id: "D", text: "Bir tür antivirüs." },
            ],
            correct: "B",
            explanation: "Whaling = 'big fish' (büyük balık) — CEO/CFO/COO hedef. FBI 2023: BEC saldırıları yıllık 2.9 milyar USD zarar. Senaryo: (1) LinkedIn'den araştırma (CEO kim, CFO kim, tatildeler mi), (2) Sahte e-posta hesabı (micr0soft.com) veya hesap ele geçirme, (3) Acil/gizli transfer e-postası ('Hiç kimseyle konuşma!'), (4) CFO transfer yapar, (5) Para saldırgana. Savunma: DMARC/DKIM/SPF, çift onay, doğrulama kanalları (telefon), üst yönetim eğitimi, limit kontrolleri, AI anomali tespit. Sosyal mühendislik türleri: Phishing (toplu), Spear (hedefli), Whaling (üst düzey), Vishing (telefon), Smishing (SMS), Pretexting, Baiting, Tailgating.",
          },
          {
            text: "Modern siber güvenlik yaklaşımı 'Zero Trust' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İç ağdaki tüm cihazlara güvenmek." },
              { id: "B", text: "'ASLA güvenme, HER ZAMAN doğrula' (Never trust, always verify); iç/dış ağ ayrımı yok; her istek için kimlik, cihaz, bağlam analizi; klasik perimeter savunmanın yerini aldı; bulut çağında 'kale ve hendek' modelinin alternatifi." },
              { id: "C", text: "Hiç kimseye veri verme." },
              { id: "D", text: "Yalnızca offline çalışma." },
            ],
            correct: "B",
            explanation: "Zero Trust — Forrester John Kindervag 2010, Google BeyondCorp ile uygulandı, NIST SP 800-207 (2020) standartlaştırdı. Slogan: 'Never Trust, Always Verify'. Geleneksel 'kale ve hendek' modeli artık yetersiz çünkü: uzaktan çalışma, BYOD, bulut SaaS, içeriden tehditler, lateral movement (Equifax, Target, SolarWinds). İlkeler: (1) Açık Doğrulama, (2) En Az Ayrıcalık, (3) Sürekli Doğrulama, (4) İhlal Edildiğini Varsay, (5) Mikro-segmentasyon, (6) Uçtan Uca Şifreleme. Mimari: PE/PA/PEP, IdP (Azure AD, Okta), MFA, EDR/XDR, ZTNA, SASE (Cisco Umbrella, Zscaler, Cloudflare, Palo Alto Prisma). Türkiye'de bankalar, telekom, savunma sanayi geçiş yapıyor.",
          },
        ],
      },
      // ──────────── Ders 4: Erişim Güvenliği — MFA, Biyometri ────────────
      {
        id: "m1023-l4",
        title: "Erişim Güvenliği — Kimlik Doğrulama, MFA, Biyometri ve Erişim Kontrol Modelleri",
        duration: "10 dk",
        summary: {
          title: "Erişim Güvenliği ve Kimlik Yönetimi",
          intro:
            "Erişim Güvenliği; doğru kişinin, doğru zamanda, doğru kaynağa, doğru seviyede erişimini sağlama disiplinidir. Üç kavram: Identification (kimsin?), Authentication (kanıtla), Authorization (neye erişebilirsin?). MFA modern standarttır. Erişim kontrol modelleri: DAC, MAC, RBAC, ABAC.",
          sections: [
            {
              heading: "Kimlik Doğrulama",
              icon: "shield",
              items: [
                { strong: "3 Faktör:", text: "(1) Bildiğin (şifre, PIN), (2) Sahip Olduğun (token, telefon), (3) Olduğun (biyometri); modern eklemeler: lokasyon, davranış." },
                { strong: "MFA:", text: "En az 2 farklı faktör; Microsoft: %99.9 güvenlik artışı; SMS OTP zayıf (SIM swap), TOTP orta, FIDO2/Passkey en güçlü." },
                { strong: "Şifre Güvenliği:", text: "Min 12-16 karakter, tekrar yok, hash+salt ile saklama, şifre yöneticileri (1Password, Bitwarden); NIST artık zorunlu değişimi önermez." },
                { strong: "Biyometri:", text: "Parmak izi, yüz tanıma, retina/iris, ses, davranışsal; metrikler: FAR (yanlış kabul), FRR (yanlış red), CER (kesişim)." },
                { strong: "SSO:", text: "Tek oturum açma — SAML, OAuth 2.0, OpenID Connect; sağlayıcılar: Azure AD, Okta, Auth0, Ping Identity." },
              ],
            },
            {
              heading: "Erişim Kontrol Modelleri",
              icon: "trend",
              items: [
                { strong: "DAC:", text: "Sahip kararı — Windows NTFS, Linux chmod; esnek ama güvensiz." },
                { strong: "MAC:", text: "Merkezi karar — askeri/devlet, SELinux, güvenlik etiketleri (Confidential, Secret, Top Secret)." },
                { strong: "RBAC:", text: "Rol bazlı — en yaygın; kullanıcı rollere atanır, rolün haklarını miras alır; AD, AWS IAM, SAP." },
                { strong: "ABAC:", text: "Attribute bazlı — en esnek, en modern; kullanıcı + kaynak + eylem + bağlam (zaman, lokasyon, cihaz); Zero Trust ile uyumlu." },
                { strong: "Prensipler:", text: "Least Privilege (en az ayrıcalık), Need-to-Know, Görevler Ayrılığı, Defense in Depth, Periyodik Erişim Gözden Geçirmesi (6 ayda bir)." },
              ],
            },
          ],
          tip: "3 faktör: Bildiğin + Sahip Olduğun + Olduğun. MFA %99.9 güvenlik. FIDO2/Passkey en güçlü, SMS en zayıf. Biyometri: FAR (sahte kabul), FRR (gerçek red), CER (kesişim). RBAC en yaygın model. Least Privilege = altın kural.",
          kavramlar: [
            { terim: "MFA (Çok Faktörlü Kimlik Doğrulama)", tanim: "Kimliği doğrulamak için iki veya daha fazla farklı faktörün (bilgi + sahiplik + biyometri) bir arada kullanılması; hesap ihlali riskini %99'u aşkın oranda azaltır." },
            { terim: "FIDO2 / Passkey", tanim: "Şifresiz kimlik doğrulama için FIDO Alliance standardı; public-key kriptografisine dayalı, kimlik avına dirençli en güçlü kimlik doğrulama yöntemi." },
            { terim: "FAR ve FRR (Biyometri)", tanim: "FAR (False Acceptance Rate): yetkisiz kişinin kabul edilme oranı; FRR (False Rejection Rate): yetkili kişinin reddedilme oranı; CER ikisinin kesişim noktası." },
            { terim: "RBAC (Rol Tabanlı Erişim Kontrolü)", tanim: "Kullanıcılara rol atanması ve rollere izin verilmesi esasına dayanan en yaygın erişim kontrol modeli; yönetimi kolaylaştırır." },
            { terim: "Least Privilege (En Az Yetki İlkesi)", tanim: "Kullanıcı veya uygulamanın yalnızca işini yapması için gereken minimum yetkilere sahip olması; yetki yayılması riskini azaltır." },
            { terim: "Segregation of Duties (Görev Ayrılığı)", tanim: "Kritik bir işlemin tek kişi tarafından başlatılıp tamamlanmasını engelleyen kontrol; hile ve hatayı önlemeye yönelik." },
            { terim: "SSO (Tek Oturum Açma)", tanim: "Kullanıcının bir kez kimlik doğrulamasıyla birden fazla sisteme erişmesini sağlayan yönetim; SAML, OAuth, OIDC protokollerine dayanır." },
          ],
          dikkatlar: [
            "3 kimlik doğrulama faktörü: Bildiğin (şifre/PIN), Sahip Olduğun (OTP/token), Olduğun (parmak izi/yüz) — aynı türden iki faktör MFA sayılmaz.",
            "FIDO2 en güçlü; SMS OTP en zayıf MFA yöntemi — SIM swap saldırısına açık.",
            "Biyometride FAR düşükse güvenli ama FRR yüksek olur; ikisi arasındaki optimum nokta CER (eşit hata oranı).",
            "Least Privilege altın kural: hiç kimse görevinin ötesinde yetki taşımamalı; periyodik erişim gözden geçirmesiyle denetlenmeli.",
            "RBAC'ta kullanıcılar bireysel değil rol bazında yetkilendirilir; organizasyon büyüdükçe yönetimi kolaylaşır.",
          ],
        },
        questions: [
          {
            text: "Kimlik doğrulamada 3 temel faktör nedir?",
            options: [
              { id: "A", text: "Yalnızca şifre, PIN, gizli soru." },
              { id: "B", text: "(1) Bildiğin (şifre, PIN, gizli soru); (2) Sahip Olduğun (token, akıllı kart, telefon, donanım anahtarı); (3) Olduğun (biyometri: parmak izi, retina, yüz, ses); bazı modellerde ek: bulunduğun yer (lokasyon)." },
              { id: "C", text: "Yalnızca biyometrik veriler." },
              { id: "D", text: "Yalnızca akıllı kartlar." },
            ],
            correct: "B",
            explanation: "Kimlik doğrulama 3 faktör paradigması: (1) Knowledge — şifre/PIN/gizli soru; en zayıf, çalınır/unutulur. (2) Possession — donanım token (YubiKey, RSA SecurID), yazılım token (Google Authenticator, Microsoft Authenticator — TOTP), SMS (zayıf), Push notification, FIDO2 anahtarları. (3) Inherence — fiziksel biyometri (parmak izi, yüz, retina, iris, ses) ve davranışsal (yazma ritmi, fare hareketi). Modern eklemeler: (4) Location, (5) Behavior. MFA = en az 2 FARKLI faktör türü; sadece 'şifre + gizli soru' MFA değildir (ikisi de bildiğin). Microsoft: MFA hesap ihlallerinin %99.9'unu engeller. SPK/BDDK bankacılıkta MFA zorunlu kılar.",
          },
          {
            text: "Biyometride 'FAR' ve 'FRR' arasındaki fark nedir?",
            options: [
              { id: "A", text: "İki metrik aynıdır." },
              { id: "B", text: "FAR (Yanlış Kabul Oranı): YETKİSİZ kişinin sistem tarafından kabul edilme olasılığı (saldırgan girer); FRR (Yanlış Reddetme Oranı): YETKİLİ kişinin reddedilme olasılığı (gerçek kullanıcı giremez); ters orantılı — eşik düşük → FAR↑, FRR↓; CER iki oranın eşit olduğu nokta." },
              { id: "C", text: "Yalnızca yüz tanımada." },
              { id: "D", text: "Yıllık hesaplanır." },
            ],
            correct: "B",
            explanation: "Biyometrik metrikler: FAR (False Accept Rate) — saldırgan girer (güvenlik açığı, düşük olmalı); FRR (False Reject Rate) — gerçek kullanıcı giremez (kullanıcı deneyimi, düşük olmalı); ikisi ters orantılı, eşik (threshold) ile dengelenir. CER/EER (Crossover/Equal Error Rate) — FAR = FRR olduğu nokta, sistem kalitesinin tek göstergesi. FTE (Failure to Enroll) — kaydedilemiyor (örn. parmak izi okunamayan kişi); FTC (Failure to Capture) — yakalanamıyor. Biyometri kalitesi: Parmak İzi CER %0.5-2, Yüz 2D %1-5, Yüz 3D (Face ID) %0.01, İris %0.001, Retina %0.0001. KVKK md. 6: biyometrik veri özel nitelikli — açık rıza zorunlu.",
          },
          {
            text: "Erişim kontrol modeli 'RBAC' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Her kullanıcıya bireysel yetki verilir." },
              { id: "B", text: "Erişim hakları KULLANICI ROLLERİ üzerinden verilen modeldir; örn. 'Muhasebe Rolü', 'BT Yöneticisi'; kullanıcılar rollere ATANIR ve rolün haklarını miras alır; en yaygın model; ölçeklenebilir, yönetim kolay; AD, AWS IAM, SAP standardı." },
              { id: "C", text: "Sadece dosya sahibi yetki verebilir." },
              { id: "D", text: "Yalnızca askeri sistemlerde." },
            ],
            correct: "B",
            explanation: "Erişim kontrol modelleri: (1) DAC — sahip kararı, esnek/güvensiz (NTFS, chmod, Google Drive). (2) MAC — merkezi karar, askeri/devlet (SELinux, Bell-LaPadula). (3) RBAC — rol bazlı, en yaygın; NIST 4 seviye (RBAC0/1/2/3). Yapı: Roller tanımlanır → role izinler atanır → kullanıcı role atanır → izinleri miras alır. Avantaj: ölçeklenebilir, yönetim kolay, görevler ayrılığı. (4) ABAC — attribute bazlı, en esnek, en modern; kullanıcı + kaynak + eylem + bağlam (zaman, lokasyon, cihaz); AWS IAM Conditions, Open Policy Agent. Karşılaştırma: DAC (esnek/güvensiz) → MAC (sıkı/askeri) → RBAC (yaygın/dengeli) → ABAC (esnek/karmaşık). Modern kurumlar RBAC + ABAC karışımı kullanır.",
          },
          {
            text: "'Least Privilege' (En Az Ayrıcalık) ilkesi nedir?",
            options: [
              { id: "A", text: "Tüm kullanıcılara tam yetki." },
              { id: "B", text: "Kullanıcılara yalnızca GÖREVLERİ İÇİN MİNİMUM GEREKLİ yetkilerin verilmesi; gereksiz erişim verilmez; saldırgan bir hesabı ele geçirse bile sınırlı zarar verir; düzenli erişim gözden geçirmesi (access review) ile uygulanır; Zero Trust temel ilkesi." },
              { id: "C", text: "Yalnızca yöneticilere yetki." },
              { id: "D", text: "Tüm sistemlere aynı yetki." },
            ],
            correct: "B",
            explanation: "Least Privilege — bilgi güvenliğinin altın kuralı (Jerome Saltzer, 1970'ler). 'Her kullanıcı/program, görevini yapmak için kesinlikle gereken minimum yetkiye sahip olmalı.' Neden kritik: hesap ele geçirme, içeriden tehdit, lateral movement, hata sınırlama. Pratik uygulama: standart çalışan sınırlı, muhasebe sadece finansal, sistem yöneticisi ayrı 'admin' hesabı + JIT (Just-in-Time), geliştirici sadece test/dev (production değil). İlgili: Need-to-Know (sadece görev için bilgi), JIT (geçici yetki — PAM araçları: CyberArk, BeyondTrust), JEA (Just-Enough-Access). Uygulama: audit + RBAC/ABAC + onay iş akışları + 6 aylık access review (SPK/BDDK/ISO 27001 zorunlu). IGA araçları: SailPoint, Saviynt, Okta IGA. KVKK md. 12 — kişisel verilere minimum gerekli erişim.",
          },
          {
            text: "MFA seçeneklerinden EN GÜÇLÜ olanı hangisidir?",
            options: [
              { id: "A", text: "SMS OTP — SIM swap saldırılarına açık." },
              { id: "B", text: "FIDO2 / Passkey / WebAuthn — donanım anahtarları (YubiKey, Google Titan) veya cihaza bağlı biyometri; phishing'e tamamen DİRENÇLİ (origin binding); açık anahtar kriptografisi; Apple/Microsoft/Google Passkey standart desteği; geleceğin standardı." },
              { id: "C", text: "Sadece bir şifre." },
              { id: "D", text: "Gizli soru." },
            ],
            correct: "B",
            explanation: "MFA güvenlik sıralaması (zayıftan güçlüye): (1) Gizli soru (ZAYIF — sosyal medyada bulunur), (2) SMS OTP (ZAYIF — SIM swap, SS7 saldırıları; Twitter CEO Jack Dorsey hack 2019), (3) Email OTP (ORTA), (4) Push Notification (GÜÇLÜ — MFA Fatigue saldırısı dezavantajı, Uber 2022 hack; çözüm: Number Matching), (5) TOTP App (GÜÇLÜ — Google/Microsoft Authenticator, ama phishing'e açık), (6) Hardware OTP (ÇOK GÜÇLÜ — RSA SecurID, eski teknoloji), (7) FIDO2/Passkey/WebAuthn (EN GÜÇLÜ — phishing'e tamamen dirençli, origin binding ile sahte sitelere çalışmaz). FIDO2 örnekleri: YubiKey, Google Titan, Apple Passkey, Microsoft Hello, Windows Hello. 2022-2023'te büyük üreticiler Passkey desteği başlattı — şifreler tarihe karışıyor. Türkiye: bankacılık uygulamaları parmak izi + Face ID standart.",
          },
        ],
      },
      // ──────────── Ders 5: Kriptografi ve Üçüncü Taraf Güvenlik ────────────
      {
        id: "m1023-l5",
        title: "Veri Güvenliği, Kriptografi (Simetrik/Asimetrik, PKI) ve Üçüncü Taraf Güvenlik",
        duration: "10 dk",
        summary: {
          title: "Veri Güvenliği ve Kriptografi",
          intro:
            "Kriptografi; verileri matematiksel yöntemlerle koruyan disiplindir. Üç temel araç: Hash (bütünlük), Simetrik Şifreleme (gizlilik, hızlı), Asimetrik Şifreleme (anahtar dağıtımı, kimlik doğrulama). PKI (Public Key Infrastructure) dijital güvenin altyapısıdır. Üçüncü Taraf Güvenliği ise tedarikçi/bulut sağlayıcı risklerinin yönetilmesidir.",
          sections: [
            {
              heading: "Kriptografi Temelleri",
              icon: "shield",
              items: [
                { strong: "İz Kayıtları (Audit Logs):", text: "Kim, ne, ne zaman, nerede, sonuç; SIEM merkezi toplama; VUK 5 yıl, bankacılık 10 yıl, KVKK amaç + 3 yıl; immutable storage." },
                { strong: "Hash (Kriptografik Özet):", text: "Tek yönlü, sabit boyut, geri alınamaz; MD5/SHA-1 KIRIK, güncel: SHA-256, SHA-3, BLAKE2; parola için bcrypt/Argon2 (yavaş, brute force dirençli); salt + pepper." },
                { strong: "Simetrik Şifreleme:", text: "Aynı anahtarla şifrele/çöz; ÇOK HIZLI; anahtar dağıtım sorunu; AES-256 altın standart; DES/3DES eskidi; ChaCha20 mobil için iyi." },
                { strong: "Asimetrik Şifreleme:", text: "Public Key (paylaşılır) + Private Key (gizli); YAVAŞ ama anahtar dağıtımı çözer; RSA 2048+, ECC daha verimli (256 bit ECC ≈ 3072 bit RSA)." },
                { strong: "Hybrid Şifreleme (HTTPS/TLS):", text: "Asimetrik ile simetrik anahtar değişimi → simetrik ile veri şifreleme; iki yöntem birlikte hızı ve güveni sağlar." },
              ],
            },
            {
              heading: "PKI ve Üçüncü Taraf Güvenliği",
              icon: "trend",
              items: [
                { strong: "PKI:", text: "Sertifika otoritesi (CA), CRL (iptal listesi), OCSP (gerçek zamanlı kontrol), X.509 standart; CA hiyerarşisi: Root → Intermediate → End-entity." },
                { strong: "Türkiye E-İmza:", text: "5070 sayılı Kanun (2004); NES (Nitelikli Elektronik Sertifika) ıslak imza eşdeğeri; ESHS'ler: TÜRKTRUST, e-Güven, E-Tugra, KamuSM; BTK denetimi." },
                { strong: "Dijital İmza:", text: "Gönderici hash hesaplar → kendi PRIVATE key ile şifreler = imza; alıcı PUBLIC key ile çözer + hash karşılaştırır; non-repudiation (inkar edilemezlik)." },
                { strong: "Üçüncü Taraf Güvenliği:", text: "Tedarikçi, bulut, danışman ile veri/sistem paylaşımı; 3 aşama: Başlama (due diligence + sözleşme), Sürdürme (izleme + denetim), Sonlandırma (veri iadesi + erişim iptali)." },
                { strong: "Due Diligence ve Sözleşme:", text: "ISO 27001/SOC 2 kontrolü, geçmiş ihlaller; sözleşmede: SLA, güvenlik gereksinimleri, denetim hakkı, ihlal bildirimi (24-72 sa), KVKK veri yerleşimi, sonlandırmada veri iadesi, sigorta." },
              ],
            },
          ],
          tip: "Hash = tek yönlü (SHA-256). Simetrik (AES) = hızlı + anahtar dağıtım sorunu. Asimetrik (RSA/ECC) = yavaş + anahtar paylaşım çözümü. Hybrid (HTTPS) = ikisini birleştirir. PKI = CA + CRL + OCSP + X.509. Türkiye e-imza: 5070 sayılı Kanun, NES ıslak imza eşdeğeri. Dijital imza = non-repudiation. Tedarikçi 3 aşama.",
          kavramlar: [
            { terim: "Hash Fonksiyonu", tanim: "Herhangi uzunluktaki girdiyi sabit uzunluklu çıktıya dönüştüren tek yönlü matematiksel işlev; SHA-256, veri bütünlüğü doğrulamasında kullanılır." },
            { terim: "Simetrik Şifreleme (AES)", tanim: "Şifreleme ve şifre çözme için aynı anahtarın kullanıldığı hızlı şifreleme; temel sorunu güvenli anahtar dağıtımıdır." },
            { terim: "Asimetrik Şifreleme (RSA/ECC)", tanim: "Genel (public) ve özel (private) anahtar çiftini kullanan şifreleme; anahtar dağıtım sorununu çözer ama simetrikten yavaştır." },
            { terim: "PKI (Açık Anahtar Altyapısı)", tanim: "Dijital sertifikaların oluşturulmasını, dağıtımını ve doğrulanmasını yöneten sistem; CA, CRL, OCSP ve X.509 sertifikalarını kapsar." },
            { terim: "NES (Nitelikli Elektronik İmza)", tanim: "5070 sayılı Kanun kapsamında ıslak imza ile aynı hukuki değere sahip güvenli elektronik imza; sertifika yetkili bir TSP tarafından sağlanır." },
            { terim: "Non-Repudiation (İnkâr Edilemezlik)", tanim: "Dijital imzanın imzalayanın işlemi gerçekleştirdiğini kanıtlaması; gönderici mesajı gönderdiğini inkâr edemez." },
            { terim: "Hibrit Şifreleme (HTTPS/TLS)", tanim: "Anahtar değişimi için asimetrik, veri şifreleme için simetrik şifrelemeyi birleştiren yöntem; HTTPS/TLS bu modeli kullanır." },
          ],
          dikkatlar: [
            "Hash tek yönlüdür; aynı girdi her zaman aynı çıktıyı verir ama geri dönüştürülemez — şifre saklama ve bütünlük doğrulama.",
            "Simetrik (AES): hızlı, büyük veri şifrelemede kullanılır; asimetrik (RSA): yavaş, anahtar değişiminde ve dijital imzada kullanılır.",
            "HTTPS/TLS hibrit modeli: RSA ile oturum anahtarı paylaşılır, AES ile veri şifrelenir — hız + güvenlik dengesi.",
            "PKI'da CA (Certificate Authority) sertifika verir; CRL iptal listesi, OCSP gerçek zamanlı iptal doğrulaması.",
            "NES ıslak imzayla eşdeğer hukuki değer taşır; elektronik imzanın en güçlü türüdür.",
          ],
        },
        questions: [
          {
            text: "Kriptografide 'Hash Fonksiyonu' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Hash şifrelemeyi geri alır." },
              { id: "B", text: "Veriyi sabit boyutlu özet haline getiren TEK YÖNLÜ matematiksel fonksiyondur; aynı veri her zaman aynı hash; küçük değişiklik tamamen farklı hash (avalanche); GERİ ALINAMAZ; MD5/SHA-1 KIRIK, güncel: SHA-256, SHA-3; kullanım: veri bütünlüğü, parola saklama, dijital imza, blockchain." },
              { id: "C", text: "Hash anahtar gerektirir." },
              { id: "D", text: "Hash yalnızca dosya isimlerini değiştirir." },
            ],
            correct: "B",
            explanation: "Hash 5 özellik: deterministik, hızlı, tek yönlü, çakışma direnci, avalanche etkisi. Algoritmalar: MD5 (1991, KIRIK 2004), SHA-1 (1995, KIRIK 2017 Google SHAttered), SHA-256 (ALTIN STANDART, blockchain), SHA-3 (2015, Keccak), BLAKE2/3 (modern hızlı). Parola için özel: bcrypt, scrypt, Argon2 (yavaş, brute force dirençli). Kullanım: (1) Veri bütünlüğü (checksum, ISO indirme), (2) Parola saklama (hash + salt + pepper — rainbow table önler), (3) Dijital imza (önce hash, sonra şifrele), (4) Blockchain (Bitcoin SHA-256, blok zincir bütünlüğü), (5) Git commit hash, (6) Forensic chain of custody. Saldırılar: brute force, rainbow tables, birthday attack.",
          },
          {
            text: "Simetrik (AES) ile asimetrik (RSA) şifreleme arasındaki fark nedir?",
            options: [
              { id: "A", text: "İki yöntem aynıdır." },
              { id: "B", text: "Simetrik (AES): Aynı anahtarla şifrele/çöz; ÇOK HIZLI, büyük veri için; anahtar dağıtım sorunu var. Asimetrik (RSA): Public Key (paylaşılır) + Private Key (gizli); YAVAŞ ama anahtar dağıtımını çözer; pratikte birlikte kullanılır (Hybrid: RSA ile AES anahtarı paylaş, AES ile veri şifrele) — HTTPS, TLS, SSH bu şekilde çalışır." },
              { id: "C", text: "AES yalnızca yazılım, RSA donanım." },
              { id: "D", text: "Asimetrik her zaman güvensizdir." },
            ],
            correct: "B",
            explanation: "Simetrik (AES, ChaCha20, 3DES, Blowfish) — aynı anahtar; gigabayt/sn hızı (AES-NI hardware); anahtar dağıtım sorunu (A ve B nasıl güvenle aynı anahtarı paylaşır?). DES KIRIK, RC4 KIRIK. Asimetrik (RSA 2048+, ECC 256, Diffie-Hellman, EdDSA) — Public Key herkese açık, Private Key gizli; biriyle şifrele, diğeriyle aç. AES'ten 1000x yavaş. ECC daha verimli — 256 bit ECC ≈ 3072 bit RSA güç; mobil/IoT için ideal. HYBRID Şifreleme (HTTPS/TLS senaryosu): (1) Sunucu Public Key gönderir, (2) Tarayıcı rastgele simetrik anahtar üretir, (3) Public Key ile şifreleyip gönderir, (4) Sunucu Private Key ile çözer, (5) Bundan sonra AES ile veri. Tüm modern protokoller hybrid: TLS 1.3, SSH, IPsec, PGP, Signal, WhatsApp.",
          },
          {
            text: "PKI'de 'Sertifika Otoritesi' (CA) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "CA bir donanım anahtarıdır." },
              { id: "B", text: "Dijital sertifikaları imzalayan GÜVENİLİR ÜÇÜNCÜ TARAF; bir kişi/kuruluşun public key'inin gerçekten ona ait olduğunu garanti eder; CA hiyerarşisi: Root CA → Intermediate CA → End-entity sertifika; tarayıcılar 'trust store'da root CA'ları içerir; X.509 sertifika standardı." },
              { id: "C", text: "CA yalnızca devlet kurumudur." },
              { id: "D", text: "CA verileri saklar." },
            ],
            correct: "B",
            explanation: "PKI sistemi: CA (Certificate Authority) — sertifika imzalayan güvenilir taraf. Sertifika içeriği (X.509): Subject (sahip), Public Key, Issuer (CA), Serial Number, Geçerlilik süresi, İmza algoritması (SHA256withRSA), Extensions, CA imzası. CA hiyerarşisi: (1) Root CA — kendinden imzalı, HSM içinde, fiziksel güvenlik; sadece intermediate'leri imzalar (DigiCert, Let's Encrypt, Sectigo, GlobalSign), (2) Intermediate CA — Root tarafından imzalı, günlük operasyonel, (3) End-entity — son kullanıcı sertifikası. CRL (Certificate Revocation List) — iptal listesi; OCSP (Online Certificate Status Protocol) — gerçek zamanlı kontrol. Kullanım: HTTPS, e-imza, kod imzalama, VPN, S/MIME e-posta şifreleme. Türkiye'de NES (Nitelikli Elektronik Sertifika) ıslak imza eşdeğeri (5070 sayılı Kanun); ESHS'ler BTK denetiminde.",
          },
          {
            text: "Türkiye'de e-imza ve elektronik sertifikalar için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "E-imza yasal değer taşımaz." },
              { id: "B", text: "5070 sayılı Elektronik İmza Kanunu (2004); Nitelikli Elektronik Sertifika (NES) ile yapılan e-imza = ıslak İMZA İLE AYNI HUKUKİ DEĞERE sahiptir; ESHS'ler (Elektronik Sertifika Hizmet Sağlayıcıları): TÜRKTRUST, e-Güven, E-Tugra, KamuSM; BTK denetiminde; Mobil İmza ve E-İmza yaygın kullanım (e-Devlet, e-Beyanname, e-Fatura)." },
              { id: "C", text: "E-imza yalnızca devlet kurumları için." },
              { id: "D", text: "5070 sayılı Kanun yürürlükten kaldırıldı." },
            ],
            correct: "B",
            explanation: "5070 sayılı Elektronik İmza Kanunu (2004) Türkiye'de e-imza hukuki çerçevesini belirler. NES (Nitelikli Elektronik Sertifika) ile yapılan güvenli elektronik imza ıslak imzayla aynı hukuki sonucu doğurur. ESHS'ler (Elektronik Sertifika Hizmet Sağlayıcıları) BTK tarafından denetlenir. Türkiye'deki ESHS'ler: TÜRKTRUST, e-Güven, E-Tugra (EFG Bilişim), KamuSM (TÜBİTAK BİLGEM). Sertifika türleri: nitelikli, mali mühür (kurumsal e-fatura), zaman damgası. Kullanım: e-Devlet, e-Beyanname (Vergi Dairesi), e-Fatura, e-İmza ile sözleşmeler, mobil imza (Turkcell, Vodafone, Türk Telekom — SIM kart üzerinde). KVKK uyumlu ve hukuki ispat açısından kritik. Dijital imza süreci: gönderici hash → private key ile şifrele = imza; alıcı public key ile çöz + hash karşılaştır → değişmemiş + non-repudiation (gönderici inkar edemez).",
          },
          {
            text: "Üçüncü Taraf İletişim Güvenliği için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Üçüncü taraflar güvenlik için sorumlu değildir." },
              { id: "B", text: "Tedarikçi/bulut/danışman ile veri-sistem paylaşımı yüksek risk taşır (büyük ihlallerin çoğu tedarikçilerden — Target 2013 HVAC, SolarWinds 2020); 3 aşama: BAŞLAMA (due diligence, ISO 27001/SOC 2 kontrolü, sözleşmede SLA + güvenlik + denetim hakkı + ihlal bildirimi 24-72 saat + KVKK veri yerleşimi), SÜRDÜRME (izleme, periyodik denetim), SONLANDIRMA (veri iadesi/imhası, erişim iptali)." },
              { id: "C", text: "Sözleşme imzalanması yeterlidir." },
              { id: "D", text: "Dış kaynak risksizdir." },
            ],
            correct: "B",
            explanation: "Üçüncü Taraf Güvenliği — modern siber güvenliğin en büyük risk alanlarından biri. Ünlü vakalar: Target 2013 (HVAC tedarikçisi üzerinden 40M kredi kartı), SolarWinds 2020 (yazılım güncellemesi üzerinden 18.000+ kurum), Kaseya 2021 (MSP üzerinden ransomware), Okta 2022 (alt-tedarikçi ihlali). 3 Aşama: (1) BAŞLAMA — Due Diligence: ISO 27001, SOC 2 Type II sertifikaları, finansal sağlık, referanslar, geçmiş ihlaller; Sözleşme: SLA (uptime, yanıt süresi), güvenlik gereksinimleri (şifreleme, MFA), denetim hakkı (yıllık/gerektiğinde), ihlal bildirimi (24-72 saat zorunlu), veri yerleşimi (KVKK md. 9 — yurtdışına çıkar mı?), alt-tedarikçi kontrolü, sonlandırmada veri iadesi/imhası, mesleki sorumluluk sigortası, KVKK Veri İşleyen Sözleşmesi. (2) SÜRDÜRME — sürekli izleme, üçüncü taraf risk skoru (BitSight, SecurityScorecard), periyodik denetim, sertifika yenileme kontrolü. (3) SONLANDIRMA — veri iadesi/güvenli imha (sertifikalı), erişim iptali (hesaplar, VPN, fiziksel kart), bilgi yönetimi (dokümantasyon). SPK VII-128.10 ve BDDK düzenlemeleri kritik dış kaynak için onay zorunlu.",
          },
        ],
      },
    ],
  },
];