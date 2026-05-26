/* ─────────────────────────────────────────────────────────────────────────────
 * Gayrimenkul Mevzuatı (1019)
 *
 * Kaynak: SPL 1019 Çalışma Notu, 31 Aralık 2025 (557 sayfa)
 * Sınavlar: Gayrimenkul Değerleme Sınavı
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1014 (Gayrimenkul Değerleme Esasları) ile bazı kavramsal örtüşme
 * vardır (taşınmaz mülkiyet, imar, kat mülkiyeti); ancak 1014 değerleme
 * yaklaşımlarına, 1019 ise saf mevzuat metni ve detaylı hükümlere odaklanır.
 * 17 ana mevzuat bölümünü 5 dersle yoğunlaştırılmış şekilde işler:
 *   1) III-62.3 + TDUB Statüsü + Bağımsızlık
 *   2) TMK Taşınmaz Mülkiyet + Tapu + Kadastro
 *   3) İmar + İskân + Yapı Denetim + Afet/Dönüşüm
 *   4) Kat Mülkiyeti + Belediye + Büyükşehir + Kamulaştırma
 *   5) Kira + Emlak Vergisi + Alım-Satım/Kira Vergisi
 *
 * Kullanım:
 *   import { mevzuat1019 } from "./mevzuat-1019";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011,
 *     ...mevzuat1012, ...mevzuat1013, ...mevzuat1014,
 *     ...mevzuat1015, ...mevzuat1016, ...mevzuat1017,
 *     ...mevzuat1018, ...mevzuat1019
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1019: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1019 GAYRİMENKUL MEVZUATI
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1019",
    title: "Modül · Gayrimenkul Mevzuatı (1019)",
    lessons: [
      // ──────────── Ders 1: III-62.3 Tebliği + TDUB Statüsü ────────────
      {
        id: "m1019-l1",
        title: "III-62.3 Tebliği, Değerleme Kuruluşları ve TDUB Statüsü",
        duration: "10 dk",
        summary: {
          title: "Gayrimenkul Değerleme Kuruluşları Mevzuatı",
          intro:
            "Sermaye piyasasında gayrimenkul değerleme hizmeti veren kuruluşlar SPK'nın III-62.3 sayılı 'Sermaye Piyasasında Faaliyette Bulunacak Gayrimenkul Değerleme Kuruluşları Hakkında Tebliğ' ile düzenlenir. Tebliğ, kuruluşların yetkilendirilmesi, ortakların ve yöneticilerin nitelikleri, sorumlu değerleme uzmanı, bağımsızlık, mesleki sorumluluk sigortası gibi konuları detaylı düzenler. Türkiye Değerleme Uzmanları Birliği (TDUB) ise meslek mensuplarının kamu kurumu niteliğindeki meslek kuruluşudur.",
          sections: [
            {
              heading: "III-62.3 Tebliğ Hükümleri",
              icon: "shield",
              items: [
                {
                  strong: "Yetkilendirme Şartları:",
                  text: "Anonim şirket olarak kurulmuş, asgari ödenmiş sermaye 1.000.000 TL (artırılabilir), en az 2 sorumlu değerleme uzmanı, ortakların ve yöneticilerin SPK gerekliliklerine uygunluğu, faaliyet konusunun gayrimenkul değerleme olarak sınırlandırılması.",
                },
                {
                  strong: "Sorumlu Değerleme Uzmanı:",
                  text: "Her gayrimenkul değerleme kuruluşunda en az 2 sorumlu değerleme uzmanı bulunması zorunludur; SPL lisansına sahip, en az 3 yıl mesleki deneyim sahibi, raporları imzalama ve onaylama yetkisine sahip uzmandır.",
                },
                {
                  strong: "Bağımsızlık ve Çıkar Çatışması:",
                  text: "Değerleme uzmanı, değerleme yapılan gayrimenkul/şirket ile ortaklık, akrabalık (3. dereceye kadar), iş ilişkisi olamaz; aynı gayrimenkulü 5 yıl içinde 3 defadan fazla aynı uzman değerleyemez (rotasyon).",
                },
                {
                  strong: "Mesleki Sorumluluk Sigortası:",
                  text: "Tüm gayrimenkul değerleme kuruluşları zorunlu olarak mesleki sorumluluk sigortası yaptırır; rapor hatalarından doğan zararları karşılar; SPK tarafından belirlenen asgari teminat tutarlarına uyulmalıdır.",
                },
                {
                  strong: "Tam Zamanlılık ve Şube:",
                  text: "Sorumlu değerleme uzmanları tam zamanlı çalışmalıdır; başka bir işletmede bordro/sözleşme ile çalışamazlar; şube açmak SPK iznine tabidir; dışarıdan değerleme hizmeti satın alma kuralları sınırlandırılmıştır.",
                },
              ],
            },
            {
              heading: "TDUB Statüsü ve Mesleki Düzen",
              icon: "trend",
              items: [
                {
                  strong: "TDUB Nedir?:",
                  text: "Türkiye Değerleme Uzmanları Birliği — 6362 sayılı SPKn'nun 76. maddesi uyarınca kurulmuş, kamu kurumu niteliğindeki tüzel kişiliğe sahip meslek kuruluşudur; değerleme uzmanlarının üye olduğu organizasyondur.",
                },
                {
                  strong: "Üyelik:",
                  text: "Gayrimenkul değerleme uzmanları, gayrimenkul değerleme uzman yardımcıları ve değerleme uzmanlık sınavlarını başaranlar TDUB'a üye olmak zorundadır; üyelik mesleki faaliyet ön koşuludur.",
                },
                {
                  strong: "TDUB'un Görevleri:",
                  text: "Meslek standartlarını belirlemek, etik kuralları oluşturmak, eğitim faaliyetleri düzenlemek, sicil tutmak, disiplin kurulu kararlarıyla meslek mensuplarını denetlemek, kamuoyunda mesleği temsil etmek.",
                },
                {
                  strong: "Disiplin Kurulu:",
                  text: "Meslek mensuplarının etik ve mesleki kurallara aykırı davranışlarını inceler ve disiplin cezası verir: uyarı, kınama, geçici meslekten men, daimi meslekten ihraç.",
                },
                {
                  strong: "Statü ve İlişkiler:",
                  text: "TDUB, SPK denetiminde faaliyet gösterir; statüsü Cumhurbaşkanlığı kararnamesiyle yürürlüğe konulmuştur; uluslararası değerleme örgütleriyle (IVSC, RICS) işbirliği yapar.",
                },
              ],
            },
          ],
          tip: "III-62.3 Tebliği = SPK'nın gayrimenkul değerleme kuruluşları için temel düzenleme. Min sermaye 1 milyon TL, min 2 sorumlu uzman. Aynı uzman aynı gayrimenkulü 5 yılda max 3 defa değerleyebilir (rotasyon). Mesleki sorumluluk sigortası ZORUNLU. TDUB = kamu kurumu niteliğindeki meslek kuruluşu (SPKn md. 76).",
          kavramlar: [
            { terim: "SPK III-62.3 Tebliği", tanim: "Gayrimenkul değerleme kuruluşlarının kuruluş, faaliyet, lisans ve sorumluluk esaslarını düzenleyen temel SPK tebliği." },
            { terim: "Gayrimenkul Değerleme Uzmanı (GDU)", tanim: "SPK tarafından lisanslandırılan, gayrimenkul değerleme hizmeti sunma yetkisine sahip meslek mensubu." },
            { terim: "Sorumlu Değerleme Uzmanı", tanim: "Değerleme kuruluşunda en az lisans için sorumlu olan ve raporları imzalama yetkisi bulunan uzman; asgari 2 kişi zorunlu." },
            { terim: "Rotasyon Kuralı", tanim: "Aynı değerleme uzmanının aynı gayrimenkulü 5 yıl içinde en fazla 3 kez değerleyebilmesi kuralı; bağımsızlığı koruma amaçlı." },
            { terim: "Mesleki Sorumluluk Sigortası", tanim: "Değerleme kuruluşlarının mesleki hatalarından doğabilecek zararları güvence altına almak için yaptırmak zorunda olduğu sigorta." },
            { terim: "TDUB (Türkiye Değerleme Uzmanları Birliği)", tanim: "SPK Kanunu md. 76 kapsamında kamu kurumu niteliğinde kurulan meslek kuruluşu; lisanslama ve etik denetimde rol üstlenir." },
            { terim: "Değerleme Raporu", tanim: "Değerleme uzmanının belirlenen standartlara uygun biçimde hazırladığı, işlem kararlarında esas alınan resmi belge." },
          ],
          dikkatlar: [
            "Minimum sermaye şartı 1 milyon TL ve minimum 2 sorumlu değerleme uzmanı — kurumsal yeterliliğin iki temel koşulu.",
            "Rotasyon: aynı uzman + aynı gayrimenkul = 5 yılda en fazla 3 değerleme; bu sınır bağımsızlığı koruma amaçlıdır.",
            "Mesleki sorumluluk sigortası zorunludur; sigorta olmaksızın faaliyet yürütülemez.",
            "TDUB kamu kurumu niteliğindedir; üyelik zorunludur, etik kuralları ve disiplin yaptırımları bağlayıcıdır.",
            "Değerleme raporu imzalanma yetkisi yalnızca sorumlu değerleme uzmanına aittir.",
          ],
        },
        questions: [
          {
            text: "III-62.3 Tebliği kapsamında gayrimenkul değerleme kuruluşları için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Kuruluş limited şirket olarak da yapılabilir; sermaye sınırı yoktur." },
              { id: "B", text: "Anonim şirket olarak kurulmuş olmak, asgari ödenmiş sermayeyi (1.000.000 TL ve artırılabilir) karşılamak, en az 2 sorumlu değerleme uzmanı bulundurmak, faaliyet konusunu gayrimenkul değerleme ile sınırlandırmak zorunludur." },
              { id: "C", text: "Şahıs işletmesi olarak gayrimenkul değerleme hizmeti verilebilir." },
              { id: "D", text: "Sermaye yatırımı gerekmez, sadece lisans yeterlidir." },
            ],
            correct: "B",
            explanation:
              "Sermaye piyasasında gayrimenkul değerleme hizmeti verme yetkisi almak için kuruluşun III-62.3 Tebliği'nde belirtilen koşulları sağlaması gerekir: (1) Anonim Şirket Yapısı — limited şirket veya şahıs işletmesi yeterli değildir, kurumsal sorumluluk gerekçesiyle AŞ yapısı zorunludur, (2) Asgari Ödenmiş Sermaye — 1.000.000 TL tutarında ödenmiş sermaye zorunludur; SPK Tebliği ile bu tutar zaman zaman güncellenebilir, (3) En Az 2 Sorumlu Değerleme Uzmanı — bu uzmanlar tam zamanlı çalışmalı, SPL lisansına sahip olmalı ve mesleki deneyime sahip olmalıdır, (4) Faaliyet Konusu Sınırlandırması — esas sözleşmede yalnızca gayrimenkul değerleme faaliyeti olabilir; başka faaliyetler yapılamaz (örn. emlak komisyonculuğu yapılamaz — çıkar çatışması), (5) Ortaklar ve Yöneticilerin Nitelikleri — sermaye piyasası mevzuatına aykırı davranıştan ceza almamış olmak, gerekli mesleki birikim, dürüstlük.",
          },
          {
            text: "Bir gayrimenkul değerleme kuruluşunda 'sorumlu değerleme uzmanı' (SDU) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Sorumlu değerleme uzmanı stajyer olabilir." },
              { id: "B", text: "Her gayrimenkul değerleme kuruluşunda en az 2 SDU bulunması zorunludur; SPL Gayrimenkul Değerleme lisansına sahip, en az 3 yıl mesleki deneyim sahibi, tam zamanlı çalışan ve raporları imzalama/onaylama yetkisine sahip kişidir." },
              { id: "C", text: "SDU yalnızca yarı zamanlı çalışabilir." },
              { id: "D", text: "SDU başka bir şirketin yöneticisi olabilir." },
            ],
            correct: "B",
            explanation:
              "Sorumlu Değerleme Uzmanı (SDU); bir gayrimenkul değerleme kuruluşunun mesleki denetiminden ve değerleme raporlarının kalitesinden sorumlu olan kıdemli profesyoneldir. III-62.3 Tebliği uyarınca: (1) Sayı Zorunluluğu — her gayrimenkul değerleme kuruluşunda en az 2 SDU bulunması gerekir; eğer biri ayrılırsa belirli süre içinde yenisi atanmalıdır, (2) Lisans Şartı — SPL Gayrimenkul Değerleme Lisansı'na sahip olmalı, (3) Deneyim Şartı — en az 3 yıl gayrimenkul değerleme alanında mesleki deneyime sahip olmalı, (4) Tam Zamanlılık — sadece o kuruluşta tam zamanlı çalışabilir; başka bir işletmede istihdam edilemez, başka bir şirkette yönetici olamaz (çıkar çatışmasını önlemek için), (5) Yetki — değerleme raporlarını imzalama ve onaylama yetkisine sahiptir; sadece SDU'lar tarafından imzalanmamış raporlar geçersizdir, (6) Sorumluluk — raporlarda yaptıkları yanlışlardan dolayı hem cezai hem hukuki sorumluluk taşırlar.",
          },
          {
            text: "Gayrimenkul değerlemede 'rotasyon' kuralı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Rotasyon kuralı yoktur, aynı uzman her zaman aynı gayrimenkulü değerleyebilir." },
              { id: "B", text: "Aynı gayrimenkulü 5 yıllık dönemde, aynı değerleme uzmanı 3 defadan fazla değerleyemez; bu kural bağımsızlığı ve objektifliği korumayı amaçlar." },
              { id: "C", text: "Rotasyon kuralı yalnızca ticari gayrimenkullerde uygulanır." },
              { id: "D", text: "Rotasyon kuralı yalnızca yabancı uzmanlar için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "Gayrimenkul değerlemede rotasyon kuralı; değerleme uzmanı ile değerleme yapılan gayrimenkul/müşteri arasında uzun süreli ilişkinin yaratabileceği bağımlılık riskini azaltmak için tasarlanmıştır. III-62.3 Tebliği uyarınca: aynı gayrimenkul için 5 yıllık herhangi bir dönemde, aynı değerleme uzmanı en fazla 3 defa değerleme raporu hazırlayabilir. Bu kural, bağımsız denetimde uygulanan denetçi rotasyonuna benzer bir mantıkla işler. Avantajları: (1) Bağımsızlık ve objektifliğin korunması, (2) Uzun süreli müşteri ilişkisinin yaratabileceği baskının önlenmesi, (3) Yeni bir bakış açısı kazanılması, (4) Mesleki gelişimin sağlanması (uzmanların farklı gayrimenkullerde deneyim kazanması), (5) Sistemik risk yönetimi. Rotasyon kuralı kuruluş düzeyinde değil, uzman düzeyinde işler; yani aynı kuruluş aynı gayrimenkulü değerlemeye devam edebilir, ancak farklı bir uzman atamak zorundadır.",
          },
          {
            text: "Mesleki Sorumluluk Sigortası gayrimenkul değerleme kuruluşları için ne anlam ifade eder?",
            options: [
              { id: "A", text: "Yalnızca büyük kuruluşlar için ihtiyaridir." },
              { id: "B", text: "Tüm gayrimenkul değerleme kuruluşları zorunlu olarak mesleki sorumluluk sigortası yaptırır; rapor hatalarından doğan üçüncü kişi zararlarını karşılar; SPK tarafından belirlenen asgari teminat tutarlarına uyulmalıdır." },
              { id: "C", text: "Yalnızca ortaklar için sigorta yapılır." },
              { id: "D", text: "Sigortacılar bu hizmeti vermez." },
            ],
            correct: "B",
            explanation:
              "Mesleki Sorumluluk Sigortası (Professional Indemnity Insurance); gayrimenkul değerleme kuruluşları için III-62.3 Tebliği uyarınca ZORUNLUDUR. Amacı: (1) Üçüncü Kişi Korunması — değerleme raporundaki hatalar, ihmaller veya mesleki hatalar nedeniyle zarar gören üçüncü kişilerin (kredi kullanan banka, yatırımcı, alıcı) tazminat alabilmesi, (2) Kuruluş Korunması — büyük tazminat davalarına karşı kuruluşu mali çöküntüden koruma, (3) Mesleki Kalite — kuruluşları mesleki standartlara uymaya teşvik etme. Asgari Teminat Tutarları: SPK tarafından her yıl gözden geçirilir ve belirlenir; kuruluş büyüklüğüne göre değişir. Tipik olarak milyon TL'ler seviyesinde olur. Kapsam: tipik olarak ihmal sonucu yapılan hatalar, yanlış değerleme, eksik bilgi sunma, gizliliğin ihlali, kötü niyetli olmayan mesleki hatalar sigorta kapsamında. KASTEN yapılan dolandırıcılık, sahtekarlık ise sigorta dışındadır. Sigorta poliçesi süresinin geçmesi durumunda yenilenmesi gerekir; aksi halde yetkililik kaybı söz konusu olabilir.",
          },
          {
            text: "Türkiye Değerleme Uzmanları Birliği (TDUB) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "TDUB özel bir dernektir, üyelik isteğe bağlıdır." },
              { id: "B", text: "6362 sayılı SPKn'nun 76. maddesi uyarınca kurulmuş, kamu kurumu niteliğindeki tüzel kişiliğe sahip meslek kuruluşudur; gayrimenkul değerleme uzmanları, uzman yardımcıları ve sınavı başaranlar TDUB'a üye olmak ZORUNDADIR; üyelik mesleki faaliyetin ön koşuludur." },
              { id: "C", text: "TDUB özel bir şirkettir." },
              { id: "D", text: "TDUB sadece denetim hizmeti verir." },
            ],
            correct: "B",
            explanation:
              "Türkiye Değerleme Uzmanları Birliği (TDUB); 6362 sayılı Sermaye Piyasası Kanunu'nun 76. maddesi uyarınca kurulmuş, kamu kurumu niteliğindeki tüzel kişiliğe sahip bir meslek kuruluşudur. Önemli özellikleri: (1) Statü — anayasal bir 'kamu kurumu niteliğindeki meslek kuruluşu' olarak işlev görür (TÜRMOB, TMMOB, Barolar Birliği gibi); (2) Zorunlu Üyelik — gayrimenkul değerleme uzmanları, gayrimenkul değerleme uzman yardımcıları ve değerleme uzmanlık sınavlarını başaranlar TDUB'a üye olmak ZORUNDADIR; üyelik mesleki faaliyetin ön koşuludur; (3) Görevleri — meslek standartlarını belirlemek, etik kuralları oluşturmak, mesleki eğitim faaliyetleri düzenlemek, sicil tutmak, meslek mensuplarını denetlemek (disiplin kurulu kararlarıyla), kamuoyunda mesleği temsil etmek; (4) SPK Denetimi — TDUB faaliyetleri SPK denetimine tabidir; statüsü Cumhurbaşkanlığı kararnamesi ile yürürlüğe konulmuştur; (5) Uluslararası İlişkiler — IVSC (International Valuation Standards Council), RICS (Royal Institution of Chartered Surveyors) gibi uluslararası örgütlerle işbirliği yapar.",
          },
        ],
      },
      // ──────────── Ders 2: TMK Taşınmaz Mülkiyet, Tapu ve Kadastro ────────────
      {
        id: "m1019-l2",
        title: "TMK Taşınmaz Mülkiyet, Tapu Sicili ve Kadastro Mevzuatı",
        duration: "10 dk",
        summary: {
          title: "Taşınmaz Hukuku ve Tapu-Kadastro",
          intro:
            "Türk Medeni Kanunu'nun 704-1027 maddeleri taşınmaz mülkiyeti, sınırlı ayni haklar, zilyetlik ve tapu sicilini düzenler. Tapu Kanunu (2644 sayılı) ve Kadastro Kanunu (3402 sayılı) ise tapu-kadastro sistemini hukuki çerçeveye oturtur. Bu derste TMK kapsamındaki ayni hak türleri, zilyetlik kavramı, tapu sicil ilkeleri ve devletin sorumluluğu, kadastronun amacı ve tescil süreçleri incelenir.",
          sections: [
            {
              heading: "Ayni Haklar ve Zilyetlik (TMK)",
              icon: "shield",
              items: [
                {
                  strong: "Ayni Hak Kavramı:",
                  text: "Sahibine doğrudan doğruya bir eşya üzerinde yetki veren ve herkese karşı ileri sürülebilen mutlak haklardır; üçüncü kişilere karşı korunabilir (erga omnes), aleniyet ilkesine tabidir.",
                },
                {
                  strong: "Ayni Hak Türleri:",
                  text: "Mülkiyet (tam ayni hak), Sınırlı Ayni Haklar = İrtifak Hakları (intifa, sükna, geçit, kaynak), Taşınmaz Yükü (gayrimenkul mükellefiyeti), Rehin Hakları (taşınır rehni, ipotek, alacak rehni).",
                },
                {
                  strong: "Ayni Haklara Hâkim İlkeler:",
                  text: "Aleniyet (kamuya açıklık — tapu siciline tescil), belirlilik (eşyanın net tanımı), münhasırlık (aynı eşyada aynı türde ikinci hak olamaz), öncelik (önce kurulan hak öncedir).",
                },
                {
                  strong: "Zilyetlik (Possession):",
                  text: "Bir eşya üzerinde fiili hakimiyet kurma durumudur; aslı zilyetlik (kendi hesabına) ve fer'i zilyetlik (başkası adına — kiracı, depocu); zilyetlik mülkiyet karinesi sağlar (TMK md. 985).",
                },
                {
                  strong: "Zilyetliğin Korunması:",
                  text: "Saldırıya karşı kendi gücüyle savunma hakkı (TMK md. 981), zilyetlik davaları (men-i müdahale ve istihkak), eski hale iade davaları; zilyetlik 1 yıl içinde dava açılarak korunmalıdır.",
                },
              ],
            },
            {
              heading: "Tapu Sicili ve Kadastro",
              icon: "trend",
              items: [
                {
                  strong: "Tapu Sicilinin Unsurları:",
                  text: "Tapu Kütüğü (her parsel için bir sayfa), Kat Mülkiyeti Kütüğü, Yevmiye Defteri (kronolojik), Belgeler Klasörü, Plan Pafta, Mal Sahibi (özet) Defteri, Aziller Sicili.",
                },
                {
                  strong: "Tapu Sicil İlkeleri:",
                  text: "Aleniyet (sicilin kamuya açıklığı), İlliyet (sebepe dayalı tescil), Tescil (devir/kuruluş için zorunlu), Devletin Sorumluluğu (TMK md. 1007 — yanlış kayıttan doğan zarar), Üçüncü kişinin iyi niyeti.",
                },
                {
                  strong: "Devletin Sorumluluğu (TMK md. 1007):",
                  text: "Tapu sicilinin tutulmasından doğan tüm zararlardan devlet sorumludur; zarar gören kişi 1 yıl içinde Hazine'ye karşı dava açabilir; tapu memurunun ihmal/kasıtının kanıtlanmasına gerek yoktur (objektif sorumluluk).",
                },
                {
                  strong: "Kadastro Tanımı:",
                  text: "Bir ülke veya bölgedeki tüm taşınmazların yer, sınır, alan, sahip ve hak durumlarının tespitidir; mülkiyet kayıtlarının hukuki ve teknik olarak tamamlanmasıdır; 3402 sayılı Kadastro Kanunu düzenler.",
                },
                {
                  strong: "Kadastro Süreci ve Tescil:",
                  text: "İlan → İtiraz süreci → Tespit → Kontrol → Kesinleşme → Tapuya Tescil; kadastro tutanakları ile taşınmazların hukuki durumu kesinleşir; itiraz süresi geçtikten sonra kayıtlar hukuki güç kazanır.",
                },
              ],
            },
          ],
          tip: "Ayni haklar = mülkiyet + sınırlı ayni haklar (irtifak, taşınmaz yükü, rehin). Zilyetlik = fiili hakimiyet (mülkiyet karinesi). Tapu sicilinin 7 unsuru var; ana sicil = Tapu Kütüğü. Devletin sorumluluğu TMK md. 1007 — objektif sorumluluk, 1 yıl içinde Hazine'ye dava. Kadastro = taşınmazların hukuki-teknik tespiti (3402 sk).",
          kavramlar: [
            { terim: "Ayni Hak", tanim: "Eşya üzerinde doğrudan ve herkese karşı ileri sürülebilen mutlak hak; tapu siciline tescil ile kazanılır." },
            { terim: "Zilyetlik", tanim: "Bir taşınmaz veya taşınır üzerinde fiili hakimiyet kurma; mülkiyet karinesi doğurur ve kazandırıcı zamanaşımına zemin oluşturur." },
            { terim: "Tapu Kütüğü", tanim: "Tapu sicilinin ana unsuru; her taşınmaz için bir sayfa açılır, mülkiyet ve sınırlı ayni haklar burada tescil edilir." },
            { terim: "TMK Md. 1007 (Devlet Sorumluluğu)", tanim: "Tapu sicilindeki yanlış kayıt veya işlemden zarar görenlerin Hazine'ye karşı bir yıl içinde tazminat davası açabileceği objektif sorumluluk kuralı." },
            { terim: "Kadastro", tanim: "3402 sayılı Kadastro Kanunu kapsamında taşınmazların sınır, yüzölçüm ve hukuki durumunun teknik ve hukuki olarak tespit edilmesi." },
            { terim: "Tapu Sicilinin Aleniliği", tanim: "Tapu sicilini herkesin inceleyebileceği ilkesi; kayıtlı bilgileri bilmemek mazeret sayılmaz." },
            { terim: "Taşınmaz Yükü", tanim: "Belirli edimlerin sürekli olarak taşınmazdan karşılanmasını öngören sınırlı ayni hak; irtifaktan farkı bir edimi kapsamasıdır." },
          ],
          dikkatlar: [
            "Tapu sicilinin 7 unsuru: Tapu Kütüğü (ana), Yevmiye Defteri, Belgeler Defterleri, Planlar, Yardımcı Siciller, Kat Mülkiyeti Sicili, Devre Mülk Sicili.",
            "Devlet sorumluluğu TMK 1007: objektif sorumluluk — hata ispatı gerekmez; 1 yıllık hak düşürücü süre içinde Hazine'ye dava açılmalıdır.",
            "Zilyetlik mülkiyet değildir; ancak mülkiyet karinesi doğurur ve olağan zamanaşımıyla (20 yıl iyiniyetli olmayan) mülk kazanılabilir.",
            "Kadastro kesinleşince tescil olmaksızın mülkiyet devlet tarafından tapu siciline re'sen işlenir.",
            "Tapu sicilinin aleniliği: 'bilmiyordum' geçerli mazeret değil — tescilli bilgiler herkese karşı ileri sürülebilir.",
          ],
        },
        questions: [
          {
            text: "Türk Medeni Kanunu'nda 'ayni haklar' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca alacaklının borçluya karşı ileri sürebileceği haklardır." },
              { id: "B", text: "Sahibine doğrudan doğruya bir eşya üzerinde yetki veren ve herkese karşı ileri sürülebilen MUTLAK haklardır (erga omnes); aleniyet ilkesine tabidir; mülkiyet, sınırlı ayni haklar (irtifak, taşınmaz yükü, rehin) türleri vardır." },
              { id: "C", text: "Yalnızca devletin ileri sürebileceği haklardır." },
              { id: "D", text: "Hisse senedi mülkiyetidir." },
            ],
            correct: "B",
            explanation:
              "Ayni Haklar (Real Rights / Property Rights) ile şahsi haklar (kişisel haklar — alacak hakları) arasındaki temel ayrım hukukun en önemli ayrımlarından biridir: (1) Ayni Haklar — sahibine doğrudan doğruya bir eşya üzerinde yetki verir (örn. mülkiyet — sahibin malı kullanma, yararlanma, tasarrufta bulunma yetkisi); HERKESE karşı ileri sürülebilir (erga omnes); aleniyete (tapu siciline tescil) tabidir; eşyaya bağlıdır, eşya el değiştirse de hak devam eder, (2) Şahsi Haklar (Personal Rights) — yalnızca belirli kişiler arasında işler (örn. alacak hakkı — alacaklının borçludan istemi); SADECE belirli karşı tarafa karşı ileri sürülebilir (erga partes), aleniyete tabi değildir. Ayni hak türleri: (a) Mülkiyet — tam ayni hak; kullanma + yararlanma + tasarruf, (b) Sınırlı Ayni Haklar — daha sınırlı yetkiler veren haklar: irtifak hakları (intifa, sükna, geçit, kaynak), taşınmaz yükü (gayrimenkul mükellefiyeti), rehin hakları (taşınır rehni, ipotek, alacak rehni). Ayni haklara hâkim ilkeler: aleniyet, belirlilik, münhasırlık, öncelik.",
          },
          {
            text: "TMK md. 1007 kapsamında 'Devletin Tapu Sicilinden Sorumluluğu' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Devlet tapu sicilindeki hatalardan asla sorumlu değildir." },
              { id: "B", text: "Tapu sicilinin tutulmasından doğan tüm zararlardan devlet OBJEKTİF olarak sorumludur; tapu memurunun kasıt/ihmalinin kanıtlanmasına gerek yoktur; zarar gören kişi 1 yıl içinde Hazine'ye karşı dava açabilir." },
              { id: "C", text: "Devlet sorumluluğu yalnızca kasıtlı işlemler için geçerlidir." },
              { id: "D", text: "Yalnızca yabancı uyruklu zarar görenler için geçerlidir." },
            ],
            correct: "B",
            explanation:
              "TMK md. 1007 'Devletin Sorumluluğu' hükmü; tapu sicilinin hukuki güvenliğinin temel taşıdır: 'Tapu sicilinin tutulmasından doğan bütün zararlardan Devlet sorumludur.' Bu hüküm OBJEKTİF SORUMLULUK getirir: (1) Kusur Aranmaz — Tapu memurunun kasıt veya ihmali kanıtlanmak zorunda değildir; zarar görenin sadece zararı, sebep-sonuç ilişkisini ve tapu sicil hatasının varlığını kanıtlaması yeterlidir, (2) Tüm Tapu İşlemleri Kapsamda — yanlış tescil, eksik tescil, hatalı kayıt, sahtecilik sonucu yapılan kayıtlar, hukuka aykırı işlemler tümü kapsamda, (3) Davaya Hazine Muhatap — sorumluluk doğrudan Devlet'tir; davacı Hazine'ye karşı dava açar, sonra Devlet tapu memuruna rücu eder, (4) Süre — zarar gören kişi öğrenmeden itibaren 1 yıl içinde dava açmalı, her halükarda olayın üzerinden 10 yıl geçmemelidir, (5) Anlamı — tapu siciline güven (Vertrauensschutz) ilkesinin pratik karşılığıdır; iyi niyetli kişiler tapuya bakıp işlem yapabilir, hata olursa Devlet zararı karşılar.",
          },
          {
            text: "Zilyetlik ve mülkiyet arasındaki ilişki için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Zilyetlik ve mülkiyet aynı şeydir." },
              { id: "B", text: "Zilyetlik bir eşya üzerinde FİİLİ hakimiyet kurma durumudur; mülkiyet ise hukuki bir haktır. Zilyetlik mülkiyet KARİNESİ sağlar (TMK md. 985) — zilyet olan kişinin malik olduğu varsayılır, aksi ispatlanmadıkça. Kiracı, depocu gibi 'fer'i zilyetler' malik değildir." },
              { id: "C", text: "Zilyetlik sadece taşınmazlarda olur." },
              { id: "D", text: "Zilyet asla malik olamaz." },
            ],
            correct: "B",
            explanation:
              "Zilyetlik (Possession) ile Mülkiyet (Ownership) farklı kavramlardır: (1) Mülkiyet — hukuki, soyut bir haktır; sahibine kullanma, yararlanma, tasarruf etme yetkisi verir; tapu siciline tescille ispat edilir, (2) Zilyetlik — fiili (factual) bir durumdur; eşya üzerinde fiili hakimiyet kurma. İlişki: (a) Zilyetlik mülkiyet karinesi sağlar (TMK md. 985) — bir taşınırın zilyedi olan kişinin malik olduğu kabul edilir, aksi ispatlanmadıkça, (b) Mülkiyet hakkı varsa genelde zilyetlik de vardır — malik aynı zamanda zilyettir, (c) Ancak zilyetlik olmadan da mülkiyet olabilir (örn. kiraya verilen ev — malik kira süresince fiilen kullanmıyor ama mülkiyet onun) ve mülkiyet olmadan da zilyetlik olabilir (örn. kiracı eşyayı kullanıyor ama malik değil). Zilyetlik türleri: (i) Aslı Zilyetlik — kendi hesabına (malik), (ii) Fer'i Zilyetlik — başkası adına/hesabına (kiracı, depocu, ariyet alan). Zilyetliğin Korunması: zilyetlik 1 yıl içinde davayla korunabilir; saldırıya karşı kendi gücüyle savunma hakkı vardır (TMK md. 981).",
          },
          {
            text: "Kadastro Kanunu (3402 sayılı) kapsamında 'kadastro' kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Kadastro yalnızca arazinin yüzölçümünün ölçülmesidir." },
              { id: "B", text: "Bir ülke veya bölgedeki tüm taşınmazların yer, sınır, alan, sahip ve hak durumlarının HUKUKİ ve TEKNİK olarak tespit edilmesidir; süreç: ilan → itiraz süreci → tespit → kontrol → kesinleşme → tapuya tescil." },
              { id: "C", text: "Kadastro yalnızca özel mülkiyetli arazileri kapsar." },
              { id: "D", text: "Kadastro yalnızca yapılaşma izni verir." },
            ],
            correct: "B",
            explanation:
              "Kadastro (Cadastre); 3402 sayılı Kadastro Kanunu'nda düzenlenen ve bir ülke/bölgedeki tüm taşınmazların hem hukuki hem teknik olarak tespit edilip kayıt altına alındığı sistematik süreçtir. Amacı: (1) Yer ve Sınır Tespiti — taşınmazların coğrafi konumu, sınırları, komşuları teknik olarak belirlenir (ölçüm, harita yapımı), (2) Alan Tespiti — yüzölçümleri hesaplanır, (3) Sahiplik Tespiti — kimin maliki olduğu hukuki belge ve şahitlerle kanıtlanır, (4) Hak Durumu Tespiti — üzerindeki ayni haklar (irtifak, ipotek vb.) belirlenir, (5) Tapu-Kadastro Bütünleşmesi — sonuçlar tapu siciline işlenir. Süreç adımları: (1) Kadastro Komisyonu kurulur ve bölgeye gider, (2) İlan yapılır — hak sahibi olabileceğini iddia edenler süre içinde başvurmalıdır, (3) Tespit Yapılır — yerinde inceleme, ölçüm, belge incelemesi, şahit dinleme, (4) İtiraz Süreci — askıya çıkar, itirazlar değerlendirilir, (5) Kesinleşme — itiraz süresi sonunda kayıtlar kesinleşir, (6) Tapuya Tescil — sonuçlar tapu siciline işlenir. Türkiye'de tüm taşınmazların kadastro çalışması büyük ölçüde tamamlanmıştır.",
          },
          {
            text: "Sınırlı ayni haklar arasında 'irtifak hakkı' ile 'rehin hakkı' arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İrtifak hakkı ile rehin hakkı aynı kavramdır." },
              { id: "B", text: "İrtifak hakkı kullanma/yararlanma yetkisi verir (intifa, sükna, geçit, kaynak); rehin hakkı ise bir borcun teminatı olarak eşyayı güvenceye alır, borç ödenmezse eşyanın paraya çevrilmesini sağlar (ipotek = taşınmaz rehni)." },
              { id: "C", text: "İrtifak yalnızca taşınırlar için, rehin yalnızca taşınmazlar için geçerlidir." },
              { id: "D", text: "İrtifak yalnızca devlet tarafından kurulur." },
            ],
            correct: "B",
            explanation:
              "Sınırlı Ayni Haklar (TMK), mülkiyet hakkından daha sınırlı yetkiler veren ayni haklardır ve üç ana kategoriye ayrılır: (1) İrtifak Hakları (Easements) — sahibine eşya üzerinde sınırlı bir kullanma/yararlanma yetkisi verir: (a) İntifa Hakkı (Usufruct) — bir başkasının malını kullanma ve gelirlerinden yararlanma; mülkiyet baki kalır, (b) Sükna Hakkı (Habitation) — bir konutta oturma hakkı; sadece kullanma, gelir alma yok, (c) Geçit Hakkı (Right of Way) — bir taşınmaz lehine, başka taşınmaz aleyhine geçiş hakkı, (d) Kaynak Hakkı (Right to Water) — su kaynağından yararlanma, (e) Manzara Hakkı — manzaranın kapatılmaması. (2) Taşınmaz Yükü (Gayrimenkul Mükellefiyeti) — taşınmazın maliki belirli edimleri (genelde mali) yerine getirmekle yükümlüdür. (3) Rehin Hakları — bir alacağın teminatı olarak eşyaya bağlanır: (a) Taşınır Rehni — taşınır mal teminat, (b) İpotek — taşınmaz rehni (en yaygın), (c) Alacak Rehni — alacak hakkının rehni. Rehin haklarının işlevi: borç ödenmezse cebri icra ile rehinli eşya satılır, satış bedelinden alacaklı önce ödeme alır.",
          },
        ],
      },
      // ──────────── Ders 3: İmar, İskân, Yapı Denetim ve Kentsel Dönüşüm ────────────
      {
        id: "m1019-l3",
        title: "İmar Kanunu, İskân, Yapı Denetim ve 6306 Kentsel Dönüşüm",
        duration: "10 dk",
        summary: {
          title: "İmar Mevzuatı, Yapı Denetim ve Afet/Dönüşüm",
          intro:
            "3194 sayılı İmar Kanunu; ülkemizdeki tüm yapı ve yapılaşmayı, mekânsal planlamayı, parselasyonu ve yapı ruhsat süreçlerini düzenler. 4708 sayılı Yapı Denetimi Hakkında Kanun yapım sürecinde teknik denetimi düzenler. 5543 sayılı İskân Kanunu göçmenlerin ve doğal afetlerden zarar görenlerin iskânını, 6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun ise kentsel dönüşümü düzenler. Bu derste bu dört temel mevzuat çerçevesi incelenir.",
          sections: [
            {
              heading: "İmar Kanunu ve Mekânsal Planlama",
              icon: "shield",
              items: [
                {
                  strong: "İmar Kanunu Amaç ve Kapsamı:",
                  text: "3194 sayılı kanun; yerleşme yerleri ile yapılaşmaların, çevre, sağlık ve sosyal şartlarla uyumlu, kaliteli ve düzenli olmasını sağlamayı amaçlar; tüm yapı ve yapılaşmaları kapsar.",
                },
                {
                  strong: "Mekânsal Plan Kademeleri:",
                  text: "Mekânsal Strateji Planları (ulusal/bölgesel) → Çevre Düzeni Planları (il/havza) → Nazım İmar Planı (1/5000) → Uygulama İmar Planı (1/1000); üst plan alt planı bağlar.",
                },
                {
                  strong: "Yapı Ruhsatı ve İskan:",
                  text: "Yapı yapımına başlanmadan önce yapı ruhsatı alınır; inşaat tamamlandıktan sonra yapı kullanma izin belgesi (iskan) alınır; iskansız yapıda elektrik-su-doğalgaz aboneliği yapılamaz.",
                },
                {
                  strong: "İfraz, Tevhid ve Parselasyon:",
                  text: "İfraz: bir parselin bölünmesi; Tevhid: birden fazla parselin birleştirilmesi; Parselasyon: imar planına göre arsa ve yapı adalarının oluşturulması (md. 18 uygulaması).",
                },
                {
                  strong: "İmar Barışı (Geçici Madde):",
                  text: "31/12/2017 tarihinden önce yapılmış ruhsatsız/iskansız yapılara yasal statü kazandıran düzenleme; başvuru sonucu 'Yapı Kayıt Belgesi' verilir; ancak imar planı uyumu sağlanmadan yapı kalıcı sayılmaz.",
                },
              ],
            },
            {
              heading: "Yapı Denetim, İskân ve 6306 Kentsel Dönüşüm",
              icon: "trend",
              items: [
                {
                  strong: "Yapı Denetim Sistemi (4708 sk):",
                  text: "Yapı denetim kuruluşları, ruhsatlı yapıların inşaat sürecinde mevzuata ve projeye uygunluğunu denetler; statik, betonarme, çelik, izolasyon, makine-elektrik tesisat denetimi yapılır; bina ömrü boyunca sorumluluk.",
                },
                {
                  strong: "Yapı Denetim Kuruluşları:",
                  text: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından yetkilendirilir; proje müellifi, fenni mesul, yapı denetim kuruluşu üçlü yapısı; risk grupları ve denetim seviyeleri vardır.",
                },
                {
                  strong: "İskân Kanunu (5543 sk):",
                  text: "Göçmenler, mülteciler ve doğal afetlerden zarar görenlerin iskânını düzenler; Hazine arazileri tahsis edilir, sosyal konut yapılır; iskân komisyonları süreci yönetir.",
                },
                {
                  strong: "6306 Sayılı Kanun (Kentsel Dönüşüm):",
                  text: "Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun (2012); riskli yapı ve riskli alan kavramları; kira yardımı, kredi desteği, vergi muafiyetleri; rezerv yapı alanları belirlenir.",
                },
                {
                  strong: "Kentsel Dönüşüm Süreci:",
                  text: "Riskli yapı tespiti (lisanslı kuruluş raporu) → İdare onayı → Tahliye süresi → Yıkım → Yeniden yapım veya tazminat; 2/3 çoğunluk kuralı, anlaşmazlıkta hak sahibi çıkarılabilir.",
                },
              ],
            },
          ],
          tip: "İmar Kanunu = 3194 sk, Yapı Denetim = 4708 sk, İskân = 5543 sk, Kentsel Dönüşüm = 6306 sk. Plan hiyerarşisi: Strateji → Çevre Düzeni → Nazım (1/5000) → Uygulama (1/1000). İmar Barışı 31.12.2017 öncesi. Yapı Denetim 3'lü yapı: müellif + fenni mesul + denetim kuruluşu. 6306'da 2/3 çoğunluk + anlaşmazlıkta hak sahibi çıkarılabilir.",
          kavramlar: [
            { terim: "İmar Kanunu (3194)", tanim: "Türkiye'de arazi kullanımı, yapılaşma ve imar planlarını düzenleyen temel kanun; ruhsat, iskân ve aykırı yapı hükümlerini kapsar." },
            { terim: "Yapı Denetim Kanunu (4708)", tanim: "İnşaatların teknik denetimini yapı denetim kuruluşlarına yükleyen kanun; müellif, fenni mesul ve denetim kuruluşu üçlü yapısını oluşturur." },
            { terim: "İskân Kanunu (5543)", tanim: "Yapı kullanma izni (iskân) ve iskan belgelerini düzenleyen kanun; iskânsız yapıda oturmak suç teşkil eder." },
            { terim: "Kentsel Dönüşüm Kanunu (6306)", tanim: "Riskli yapıların yıkılıp yenilenmesi ve rezerv yapı alanı oluşturulmasını düzenleyen kanun; 2/3 çoğunluk kararı ile yıkım başlatılabilir." },
            { terim: "İmar Barışı", tanim: "31.12.2017 tarihi öncesinde tamamlanmış yapılara yapı kayıt belgesi düzenlenmesine imkân tanıyan geçici çözüm (3194 sk. geçici md.)." },
            { terim: "Uygulama İmar Planı (UİP)", tanim: "1/1000 ölçekli ve hâlihazır haritaya dayalı en alt kademedeki imar planı; parsel bazında yapılaşma koşullarını belirler." },
            { terim: "Yapı Denetim Üçlü Yapısı", tanim: "4708 kapsamında projeden sorumlu proje müellifi, fenni mesul mühendis ve bağımsız yapı denetim kuruluşunun birlikte sorumluluk taşıması." },
          ],
          dikkatlar: [
            "Kanun numaraları: İmar = 3194, Yapı Denetim = 4708, İskân = 5543, Kentsel Dönüşüm = 6306.",
            "Plan hiyerarşisi: Strateji → Çevre Düzeni → Nazım İmar (1/5000) → Uygulama İmar (1/1000); alt plan üst plana aykırı olamaz.",
            "6306 kentsel dönüşümde karar nisabı: kat maliklerinin en az 2/3'ünün kararı yeterli; azınlık çıkmazsa tahliye zorla yapılabilir.",
            "İmar Barışı kapsam tarihi: 31.12.2017 öncesi tamamlanmış yapılar; bu tarihten sonraki aykırı yapılar kapsam dışı.",
            "Yapı denetim kuruluşu bağımsızdır; mal sahibiyle iş ilişkisi dışında organik bağ yasaktır.",
          ],
        },
        questions: [
          {
            text: "3194 sayılı İmar Kanunu kapsamında mekânsal plan kademeleri sırasıyla aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Uygulama İmar Planı → Nazım İmar Planı → Çevre Düzeni Planı → Strateji Planı" },
              { id: "B", text: "Mekânsal Strateji Planları (ulusal/bölgesel) → Çevre Düzeni Planları (il/havza) → Nazım İmar Planı (1/5000) → Uygulama İmar Planı (1/1000); üst kademeli plan alt kademeli planı bağlar." },
              { id: "C", text: "Tek bir plan vardır." },
              { id: "D", text: "Planlar serbest sırada yapılır." },
            ],
            correct: "B",
            explanation:
              "İmar Kanunu ve Mekânsal Planlar Yapım Yönetmeliği'ne göre mekânsal plan kademeleri yukarıdan aşağıya hiyerarşik bir yapıdadır: (1) Mekânsal Strateji Planları — en üst kademede; ülkenin/bölgenin uzun vadeli mekânsal kalkınma vizyonunu belirler, (2) Çevre Düzeni Planları — il, havza veya bölgesel ölçekte; doğal kaynak korunması ve kentleşme dengesini sağlar, ölçek 1/50.000 - 1/100.000, (3) Nazım İmar Planı — yerleşim ölçeğinde; genel arazi kullanım kararlarını içerir (konut, sanayi, ticaret, yeşil alan), ölçek 1/5000, (4) Uygulama İmar Planı — parsel düzeyinde detaylı kararlar içerir (yapı yüksekliği, çekme mesafeleri, TAKS, KAKS), ölçek 1/1000 — yapı ruhsatı verilebilmesi için bu plan gerekir. Önemli kural: üst kademeli plan alt kademeli planı BAĞLAR; alt plan üst plana aykırı düzenleme yapamaz. Plan değişiklikleri ilgili idareler (belediyeler, Bakanlık) tarafından yapılır ve askıya çıkarılır.",
          },
          {
            text: "4708 sayılı Yapı Denetim Kanunu'nda 'üçlü yapı' aşağıdakilerden hangisinden oluşur?",
            options: [
              { id: "A", text: "Devlet, müteahhit, müşteri" },
              { id: "B", text: "Proje müellifi (mimar/mühendis), fenni mesul (şantiyede sorumlu mühendis), yapı denetim kuruluşu (bağımsız denetim) — bu üçlü yapı yapı kalitesini güvence altına alır." },
              { id: "C", text: "Belediye, müteahhit, mal sahibi" },
              { id: "D", text: "İşçi, mühendis, müteahhit" },
            ],
            correct: "B",
            explanation:
              "4708 sayılı Yapı Denetimi Hakkında Kanun (2001); inşaat kalitesini güvence altına almak için 'üçlü yapı' sistemini öngörmüştür: (1) Proje Müellifi — yapı projesini (mimari, statik, mekanik, elektrik) hazırlayan ruhsatlı mimar/mühendisler; projelerinin doğru ve eksiksiz olmasından sorumludur, (2) Fenni Mesul (Şantiye Şefi) — yapım sürecinde şantiyede sorumlu olan, yapının projeye uygun yapıldığını günlük denetleyen ruhsatlı mühendistir, (3) Yapı Denetim Kuruluşu — bağımsız denetim yapan, Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından yetkilendirilmiş anonim şirkettir; projeden başlayarak yapım sürecinin tüm aşamalarında (zemin etüt, statik, betonarme, çelik, izolasyon, mekanik tesisat, elektrik) projeye ve mevzuata uygunluğu denetler. Bu sistem 1999 Marmara depremi sonrası getirilmiştir; öncesinde Türkiye'de bağımsız yapı denetimi yoktu. Yapı denetim kuruluşunun sorumluluğu bina kullanım süresince devam eder; eksik denetim sonucu zarar oluşursa tazminat sorumluluğu doğar. Mesleki sorumluluk sigortası zorunludur.",
          },
          {
            text: "6306 sayılı 'Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun' (Kentsel Dönüşüm) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Kanun yalnızca yeni yapı inşaatlarını düzenler." },
              { id: "B", text: "2012 yılında yürürlüğe giren kanun, riskli yapıların yenilenmesini düzenler; lisanslı kuruluş raporu ile 'riskli yapı tespiti', kira yardımı, düşük faizli kredi, vergi muafiyetleri sağlar; 2/3 çoğunluk kararıyla yenileme yapılır, anlaşmazlıkta hak sahibinin payı kamulaştırılarak çıkarılabilir." },
              { id: "C", text: "Kanun yalnızca İstanbul için geçerlidir." },
              { id: "D", text: "Kanun yalnızca devlet binalarını kapsar." },
            ],
            correct: "B",
            explanation:
              "6306 sayılı 'Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun' (2012); Türkiye'deki deprem ve diğer afet risklerine karşı eski/dayanıksız yapıların güçlendirilmesi veya yenilenmesi sürecini düzenleyen temel mevzuattır. Temel hükümler: (1) Riskli Yapı Tespiti — lisanslı yapı denetim kuruluşları veya akademik kurumlar tarafından zemin etüdü ve yapı taraması yapılır; deprem güvenliği yetersiz görülenler 'riskli yapı' olarak tescil edilir, (2) Riskli Alan İlanı — Bakanlar Kurulu kararı ile riskli alan ilan edilebilir; alan toplu dönüşüme tabi olur, (3) Destekler — kira yardımı (geçici barınma için aylık ödeme), düşük faizli konut kredisi (devlet destekli), KDV/harç/damga vergisi muafiyetleri, (4) Karar Mekanizması — kat malikleri 2/3 çoğunluk ile dönüşüm kararı alabilir; anlaşmazlık halinde hak sahibi çıkarılır, payı kamulaştırılır ve satılır, (5) Yıkım Süreci — tahliye süresi verilir (genellikle 60 gün), tahliye olmazsa zorla yıkım yapılır, (6) Rezerv Yapı Alanları — dönüşüm bölgesindekiler için geçici/kalıcı barınma sağlamak amacıyla belirlenir. Türkiye'de 2012'den bu yana milyonlarca konut dönüşüm sürecinden geçmiştir.",
          },
          {
            text: "İmar Kanunu kapsamında 'ifraz' ve 'tevhid' kavramları için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "İki kavram aynıdır." },
              { id: "B", text: "İfraz: bir parselin iki veya daha fazla parsele bölünmesi; Tevhid: birden fazla parselin birleştirilerek tek parsel haline getirilmesi; her ikisi de imar planına uygunluk gözetilerek yapılır ve tapuya tescil edilir." },
              { id: "C", text: "İfraz arsanın satışıdır, tevhid kiralanmasıdır." },
              { id: "D", text: "İfraz yapı ruhsatıdır, tevhid iskandır." },
            ],
            correct: "B",
            explanation:
              "Parselasyon süreçlerinde iki temel kavram vardır: (1) İfraz (Bölünme/Subdivision) — bir parselin iki veya daha fazla parçaya bölünmesi işlemidir; örneğin 1000 m²'lik bir arsanın 500 m²'lik iki arsaya bölünmesi. İfraz koşulları: imar planına ve plan notlarına uygunluk, minimum parsel büyüklüğü ve cephe genişliği şartlarına uyma, parselin yola cephesi olması; ifraz işleminden sonra yeni parsellerin tapuları ayrı ayrı çıkarılır, (2) Tevhid (Birleştirme/Consolidation) — birden fazla parselin birleştirilerek tek bir parsel haline getirilmesidir; tipik kullanım: aynı malik veya farklı maliklerin yanyana arsalarını büyük bir yapı yapmak amacıyla birleştirmesi (örn. AVM, otel, plaza inşaatı için); tevhid koşulları: parsellerin bitişik olması, imar planına uygunluk, malikler arasında anlaşma. (3) Parselasyon (md. 18 uygulaması) — imar planına göre arsa ve yapı adalarının oluşturulması; belediyenin re'sen yapabileceği toplu parselasyon işlemi, düzenleme ortaklık payı (DOP) %45 sınırı vardır. Bu işlemler tapu siciline tescil edilerek hukuki kesinlik kazanır.",
          },
          {
            text: "İmar Barışı uygulaması için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm ruhsatsız yapıları kalıcı olarak tam yasallaştırır." },
              { id: "B", text: "31/12/2017 tarihinden önce yapılmış ruhsatsız/iskansız yapılara YAPI KAYIT BELGESİ verilerek yasal statü kazandıran geçici düzenlemedir; elektrik/su/doğalgaz aboneliği sağlar ancak yapı imar planına uyum kazanmadıkça kalıcı yasallık sağlamaz." },
              { id: "C", text: "İmar Barışı yalnızca devlet binaları için geçerlidir." },
              { id: "D", text: "İmar Barışı yeni yapılan binalar için de uygulanır." },
            ],
            correct: "B",
            explanation:
              "İmar Barışı; 7143 sayılı kanun (2018) ile düzenlenen ve imar mevzuatına aykırı yapılara yasal statü kazandıran geçici düzenlemedir. Temel özellikler: (1) Kapsam — 31/12/2017 tarihinden ÖNCE yapılmış ruhsatsız, ruhsat ve eklerine aykırı veya iskansız yapılar için geçerli; bu tarihten sonra yapılanlar kapsam dışı, (2) Başvuru — yapı sahipleri belirli süre içinde elektronik ortamda başvuru yapmış, harç ödemiş ve Yapı Kayıt Belgesi almışlardır, (3) Yapı Kayıt Belgesi'nin Sağladığı Haklar — elektrik, su, doğalgaz aboneliği yapılabilir; bina kullanılabilir; satışı kolaylaşır, (4) SINIRLAMALAR — Yapı Kayıt Belgesi yapıyı tam YASALLAŞTIRMAZ! Yapı hâlâ imar planına aykırıdır; sadece geçici olarak kullanım ve hizmet alımı serbestleştirilmiştir. Yapı kalıcı sayılması için imar planı değişikliği ile uyumlu hale getirilmesi gerekir, (5) Yıkım Engeli — Yapı Kayıt Belgesi alındığı sürece yapı yıkım kararı uygulanamaz; ancak kentsel dönüşüm halinde durum farklılaşabilir, (6) Sonlandırma — başvuru süresi sonunda yeni Yapı Kayıt Belgesi verilmez; mevcut belgeler ise yapı yıkılana, satılana veya yenilenene kadar geçerlidir. Değerlemede İmar Barışı'lı yapılar normal yapılara göre daha düşük değer alır.",
          },
        ],
      },
      // ──────────── Ders 4: Kat Mülkiyeti, Belediye ve Kamulaştırma ────────────
      {
        id: "m1019-l4",
        title: "Kat Mülkiyeti, Belediye, Büyükşehir ve Kamulaştırma Mevzuatı",
        duration: "10 dk",
        summary: {
          title: "Kat Mülkiyeti, Yerel Yönetim ve Kamulaştırma",
          intro:
            "634 sayılı Kat Mülkiyeti Kanunu (1965); birden fazla bağımsız bölüm içeren yapılarda mülkiyet ilişkilerini düzenler. 5393 sayılı Belediye Kanunu ve 5216 sayılı Büyükşehir Belediyesi Kanunu yerel yönetimlerin yetki ve sorumluluklarını belirler. 2942 sayılı Kamulaştırma Kanunu ise devlet ve kamu kuruluşlarının kamu yararı için özel mülkiyete el konulması sürecini düzenler. Bu derste bu dört kritik mevzuat alanı incelenir.",
          sections: [
            {
              heading: "Kat Mülkiyeti ve Kat İrtifakı",
              icon: "shield",
              items: [
                {
                  strong: "Kat Mülkiyeti vs Kat İrtifakı:",
                  text: "Kat İrtifakı — yapı henüz tamamlanmamışken (inşaat halinde) kurulan ön rejim; Kat Mülkiyeti — yapı tamamlanıp iskan alındıktan sonra kurulan kalıcı rejim; iskandan sonra kat irtifakı kat mülkiyetine dönüştürülmek zorundadır.",
                },
                {
                  strong: "Bağımsız Bölüm ve Arsa Payı:",
                  text: "Her bağımsız bölümün (daire, dükkan, depo) ayrı tapusu vardır; her bağımsız bölüm sahibinin arsa üzerinde belirli oranda arsa payı (mülkiyet) vardır; arsa payı bağımsız bölüm değerine göre belirlenir.",
                },
                {
                  strong: "Ortak Yerler ve Kullanım:",
                  text: "Apartman girişi, asansör, çatı, sığınak, bahçe, kömürlük, sahanlık gibi yerler ortak alandır; kat maliklerinin müşterek (paylı) mülkiyetindedir; arsa payı oranında kullanım hakkı.",
                },
                {
                  strong: "Yönetim ve Genel Kurul:",
                  text: "Yönetici (gerçek veya tüzel kişi) atanır, görev süresi maksimum 2 yıl; yıllık genel kurul zorunlu; aidat tahsil yetkisi, kararların oybirliği/çoğunluk gerektirip gerektirmediği yasal düzenlemeyle belirlenir.",
                },
                {
                  strong: "Devre Mülk ve Toplu Yapı:",
                  text: "Devre Mülk Hakkı (KMK md. 57-65) — bir yapının belirli dönemlerinde kullanım hakkı (örn. tatil sitesi); Toplu Yapı — büyük site yapılarında özel yönetim hükümleri (KMK md. 66-74).",
                },
              ],
            },
            {
              heading: "Belediye, Büyükşehir ve Kamulaştırma",
              icon: "trend",
              items: [
                {
                  strong: "Belediye Kanunu (5393 sk):",
                  text: "Belediye organları: Belediye Meclisi (karar organı), Encümen (icra organı), Belediye Başkanı (yürütme); görevler: imar, su-kanalizasyon, çöp, zabıta, sosyal hizmetler, kültür-spor; gelirler: emlak vergisi, çevre temizlik vergisi, ilan-reklam vergisi.",
                },
                {
                  strong: "Büyükşehir Belediyesi (5216 sk):",
                  text: "30 büyükşehirde uygulanır; il sınırları büyükşehir sınırı sayılır (6360 sk değişikliği); imar denetim yetkisi, ulaşım, su-kanalizasyon, çevre yönetimi, kentsel dönüşüm ana yetkileridir; ilçe belediyeleri ile yetki paylaşımı.",
                },
                {
                  strong: "Kamulaştırma (2942 sk) Tanımı:",
                  text: "Kamu yararı için gerekli özel mülkiyetteki taşınmazların yetkili devlet kurumlarınca bedeli ödenerek alınması işlemidir; Anayasa md. 46'ya dayanır; kamu yararı kararı + bedel takdiri + tescil aşamalarından oluşur.",
                },
                {
                  strong: "Kamulaştırma Süreci:",
                  text: "(1) Kamu yararı kararı (Bakanlar Kurulu, ilgili idare), (2) Taşınmazın belirlenmesi, (3) Bedel takdir komisyonu, (4) Pazarlık (uzlaşma) — başarısızsa dava, (5) Bedel ödemesi ve tescil; acele kamulaştırma da mümkündür.",
                },
                {
                  strong: "İrtifak Hakkı Kurularak Kamulaştırma:",
                  text: "Tam kamulaştırma yerine sadece geçit, su, enerji hattı gibi irtifak hakkı kurularak da kamulaştırma yapılabilir; daha az kapsamlı, daha düşük bedel.",
                },
              ],
            },
          ],
          tip: "Kat İrtifakı = inşaat halinde, Kat Mülkiyeti = iskandan sonra. Bağımsız bölüm = ayrı tapu + arsa payı. Devre mülk = belirli dönem kullanım hakkı. Belediye Kanunu 5393, Büyükşehir 5216 (6360 ile sınırlar genişledi). Kamulaştırma 2942 sk + Anayasa md. 46. Tam kamulaştırma yerine irtifak kamulaştırması mümkün.",
          kavramlar: [
            { terim: "Kat İrtifakı", tanim: "Yapı inşaat halindeyken tapuya tescil edilen ve ileride kat mülkiyetine dönüşecek olan geçici hak." },
            { terim: "Kat Mülkiyeti", tanim: "Tamamlanmış yapılarda iskân belgesi alındıktan sonra her bağımsız bölüme ayrı tapu verilen ve arsa payını içeren hak." },
            { terim: "Devre Mülk", tanim: "Bir taşınmazın belirli dönem kullanım hakkının birden fazla kişi arasında paylaşıldığı özel tapu hakkı; turizm tesislerinde yaygın." },
            { terim: "Kamulaştırma (2942 sk)", tanim: "Devletin kamu yararı gerekçesiyle özel mülkiyetteki taşınmazı bedel ödeyerek zorla alması; Anayasa md. 46 güvencesi altında." },
            { terim: "İrtifak Kamulaştırması", tanim: "Tam mülkiyet yerine taşınmaz üzerinde irtifak hakkı kurulması; kısmen etkilenen taşınmazlarda tercih edilir." },
            { terim: "Belediye Kanunu (5393)", tanim: "Normal ölçekli belediyelerin kuruluş, organlar ve görevlerini düzenleyen kanun; imar yetkisi belediye meclisine aittir." },
            { terim: "Büyükşehir Belediye Kanunu (5216)", tanim: "Büyükşehir belediyelerini düzenleyen kanun; 6360 ile il bütününü kapsayan sınır genişlemesi sağlandı." },
          ],
          dikkatlar: [
            "Kat irtifakı inşaat aşamasında; kat mülkiyeti iskân sonrası — geçiş zorunludur, kat irtifakı süresiz kalamaz.",
            "Bağımsız bölüm: ayrı tapu + belirli arsa payı + ortak alanlar üzerinde paydaşlık hakkı birlikte var.",
            "Kamulaştırmada bedel önceden, peşin ve nakden ödenir; 'acele kamulaştırma' istisnasında Danıştay onayı gerekir.",
            "İrtifak kamulaştırması tam kamulaştırma yerine geçebilir; bedeli tam mülkiyet bedelinden düşüktür.",
            "6360 ile nüfusu 750.000'i aşan illerde il bütünü büyükşehir belediyesi sınırı oldu; köyler mahalle statüsüne geçti.",
          ],
        },
        questions: [
          {
            text: "Kat İrtifakı ile Kat Mülkiyeti arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki kavram aynıdır." },
              { id: "B", text: "Kat İrtifakı: yapı henüz tamamlanmamışken (inşaat halinde) arsa üzerinde kurulan ön rejimdir; Kat Mülkiyeti: yapı tamamlanıp iskan alındıktan sonra kurulan kalıcı rejimdir. İskandan sonra kat irtifakı zorunlu olarak kat mülkiyetine dönüştürülür." },
              { id: "C", text: "Kat irtifakı yalnızca ticari yapılarda, kat mülkiyeti yalnızca konutlarda kurulur." },
              { id: "D", text: "Kat irtifakı yalnızca devlete ait yapılarda kurulur." },
            ],
            correct: "B",
            explanation:
              "Kat Mülkiyeti Kanunu (634 sayılı, 1965) iki farklı rejim tanımlar: (1) Kat İrtifakı (Floor Easement) — yapı HENÜZ TAMAMLANMAMIŞKEN, yani inşaat halinde veya hatta hiç başlamamışken kurulan ön rejimdir. Arsa üzerinde, yapılacak bağımsız bölümlerin geleceğine ilişkin oluşturulan paylı mülkiyet yapısıdır. Müteahhitin daire satışına olanak verir; alıcılar inşaat süresince kat irtifakı tapusu alır, (2) Kat Mülkiyeti (Floor Ownership) — yapı tamamlandıktan ve YAPI KULLANMA İZNİ (İSKAN) alındıktan sonra kurulan kalıcı rejimdir; her bağımsız bölüm ayrı tapuya sahiptir, ortak alanlar üzerinde de pay vardır. Geçiş Süreci: iskan alındıktan sonra kat irtifakı kat mülkiyetine dönüştürülmek ZORUNDADIR (KMK md. 14); bu dönüşüm tapu sicil müdürlüğünde yapılır. Önemi: kat irtifaklı bir daireyi satın alan kişi, yapı tamamlanıp iskan alınana kadar daireyi fiilen kullanamaz; bu nedenle değerleme yapılırken kat irtifaklı yapılar kat mülkiyetli yapılardan daha düşük değer alır.",
          },
          {
            text: "Kat Mülkiyeti Kanunu kapsamında 'arsa payı' kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm bağımsız bölümler eşit arsa payına sahiptir." },
              { id: "B", text: "Her bağımsız bölüm sahibinin arsa üzerinde belirli oranda arsa payı (paylı mülkiyet hissesi) vardır; arsa payı bağımsız bölümün değeri ve büyüklüğüne göre belirlenir; ortak yerler arsa payı oranında paylı mülkiyettir." },
              { id: "C", text: "Arsa payı yalnızca üst kat dairelere aittir." },
              { id: "D", text: "Arsa payı kavramı yoktur." },
            ],
            correct: "B",
            explanation:
              "Kat Mülkiyeti rejiminde 'arsa payı' (Land Share) kavramı kritik bir hukuki yapıdır: (1) Her bağımsız bölüm sahibinin (daire, dükkan, depo, atölye) yapıyı barındıran arsa üzerinde belirli bir paylı mülkiyet (müşterek mülkiyet) hissesi vardır; bu hisseye 'arsa payı' denir, (2) Arsa Payı Belirleme — arsa payı bağımsız bölümün değer ve büyüklüğüne göre belirlenir; daha büyük dairenin daha yüksek arsa payı olur; ancak sadece m² değil; kat, manzara, konumu da değerlendirilir; ana sözleşme ile belirlenir, (3) Ortak Yerler İlişkisi — apartman girişi, asansör, çatı, sığınak, bahçe gibi ortak alanlar TÜM kat maliklerinin müşterek (paylı) mülkiyetindedir; arsa payı oranında paya sahiptirler; örneğin arsa payı %5 olan bir kat maliki çatının %5'ine sahiptir, (4) Bağımsız Bölümle Bağlantı — KMK md. 5 uyarınca arsa payı bağımsız bölümden ayrılamaz; daire satılırsa arsa payı da otomatik olarak devredilir, (5) Kararlar — bazı kararlarda (örn. ortak yerlerde değişiklik) arsa payı oranında oy hakkı kullanılır, bazılarında ise üye sayısı esastır (her daireye 1 oy).",
          },
          {
            text: "Belediye Kanunu (5393 sk) kapsamında belediyenin organları aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Yalnızca Belediye Başkanı" },
              { id: "B", text: "Belediye Meclisi (karar organı), Encümen (icra organı — günlük işlemler), Belediye Başkanı (yürütme organı — meclis kararlarını uygular); üç organın yetki dağılımı yasal olarak belirlidir." },
              { id: "C", text: "Yalnızca Belediye Meclisi" },
              { id: "D", text: "Bakanlık, Vali, Belediye Başkanı" },
            ],
            correct: "B",
            explanation:
              "5393 sayılı Belediye Kanunu uyarınca belediyenin üç temel organı vardır ve aralarında yasal yetki ayrımı bulunur: (1) Belediye Meclisi — Karar organıdır; halkın doğrudan seçtiği belediye meclis üyelerinden oluşur (üye sayısı belediye nüfusuna göre değişir). Görevleri: stratejik plan ve performans programı, bütçe, kesin hesap, imar planı kararları, kadro değişiklikleri, vergi/harç oranları, taşınmaz alım-satımı, borçlanma kararları; aylık olağan toplanır, (2) Belediye Encümeni — İcra organıdır; günlük operasyonel kararları alır. Belediye Başkanı, meclisten seçilen üyeler ve birim müdürlerinden oluşur. Görevleri: yıllık çalışma programı yapım, taşınmaz satışı/kira teklif kararı, bağış-yardım kabul, idari para cezaları, haftalık toplanır, (3) Belediye Başkanı — Yürütme organıdır; halkın doğrudan seçtiği başkan, belediyenin başıdır. Görevleri: belediyeyi temsil etme, meclis kararlarını uygulama, bütçe taslağı hazırlama, personel atama, beldenin günlük yönetimi. Bu üçlü yapı yasama-yürütme ayrılığı benzeri yerel yönetim modeli oluşturur.",
          },
          {
            text: "Kamulaştırma Kanunu (2942 sk) kapsamında 'kamulaştırma' kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Devletin herhangi bir taşınmazı bedelsiz olarak alabilmesidir." },
              { id: "B", text: "Kamu yararı için gerekli özel mülkiyetteki taşınmazların yetkili devlet kurumlarınca BEDELİ ÖDENEREK alınması işlemidir; Anayasa md. 46'ya dayanır; süreç: kamu yararı kararı → bedel takdir → uzlaşma veya dava → ödeme ve tescil." },
              { id: "C", text: "Yalnızca büyük şehirlerde uygulanır." },
              { id: "D", text: "Yalnızca tarım arazilerini kapsar." },
            ],
            correct: "B",
            explanation:
              "Kamulaştırma (Expropriation); 2942 sayılı Kamulaştırma Kanunu (1983) ve Anayasa md. 46 ile düzenlenen, devletin kamu yararı için özel mülkiyetteki taşınmazları bedelini ödeyerek edinmesidir. Temel özellikleri: (1) Anayasal Dayanak — Anayasa md. 46: 'Devlet ve kamu tüzel kişileri; kamu yararının gerektirdiği hallerde, gerçek karşılıklarını peşin ödemek şartıyla, özel mülkiyette bulunan taşınmaz malları, kanunla gösterilen esas ve usullere göre, tamamını veya bir kısmını kamulaştırmaya yetkilidir.', (2) Kamu Yararı Şartı — kamulaştırmanın MUTLAK ÖN KOŞULU; sadece kamu yararı olduğu kararlaştırılmış projeler için yapılabilir (yol, baraj, okul, hastane, havalimanı vb.). Spekülatif veya gereksiz kamulaştırma yasaktır, (3) Bedel Ödenmesi Zorunlu — bedelsiz alım söz konusu değildir; gerçek karşılığı peşin ödenmelidir, (4) Süreç — kamu yararı kararı (Bakanlar Kurulu, ilgili idare) → taşınmazın tespiti → bedel takdir komisyonu → uzlaşma görüşmesi (15 gün) → başarısızsa adli dava (bedel tespit) → bedel ödemesi ve tapuya tescil, (5) Acele Kamulaştırma — Bakanlar Kurulu kararıyla acil ihtiyaç hallerinde (savunma, doğal afet) hızlandırılmış süreç, (6) İrtifak Kamulaştırması — tam kamulaştırma yerine irtifak hakkı (geçit, hat) ile sınırlı kamulaştırma da mümkündür.",
          },
          {
            text: "Büyükşehir Belediyesi Kanunu'nda (5216 sk) 2012 sonrası 6360 sayılı kanun değişikliğiyle gelen önemli düzenleme aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Büyükşehir belediyesi kavramı kaldırıldı." },
              { id: "B", text: "30 il büyükşehir statüsüne kavuşturuldu ve il sınırları büyükşehir sınırı sayıldı (önceden sadece kent merkezi büyükşehir kapsamındaydı); köyler mahalle, ilçe belediyeleri büyükşehir ilçesi haline geldi; bu kapsamlı bir yetki ve hizmet yapılanması değişikliğidir." },
              { id: "C", text: "Büyükşehirler yalnızca İstanbul, Ankara ve İzmir ile sınırlandı." },
              { id: "D", text: "Belediye başkanlarının görev süresi 10 yıla çıkarıldı." },
            ],
            correct: "B",
            explanation:
              "6360 sayılı Kanun (2012); 5216 sayılı Büyükşehir Belediyesi Kanunu'nda kapsamlı değişiklikler yapan ve Türkiye'deki yerel yönetim haritasını tamamen değiştiren önemli bir mevzuat reformudur. Temel değişiklikler: (1) Büyükşehir Sayısı — büyükşehir belediyeleri 30 ile çıkarıldı: önceden 16 olan büyükşehir sayısı arttırıldı, yeni eklenen iller: Aydın, Balıkesir, Denizli, Hatay, Malatya, Manisa, Kahramanmaraş, Mardin, Muğla, Ordu, Tekirdağ, Trabzon, Şanlıurfa, Van, (2) Sınırların Genişletilmesi — büyükşehir belediyelerinin sınırları il sınırlarına genişletildi; ÖNCEDEN sadece kent merkezi (anakent) büyükşehir kapsamındaydı, ŞIMDI tüm il büyükşehir sınırları içinde, (3) Köyler ve İlçeler — büyükşehir sınırları içindeki KÖYLER artık MAHALLE statüsündedir (köy tüzel kişiliği kalktı); il bazlı ilçe belediyeleri büyükşehir ilçe belediyesi haline geldi, (4) İl Özel İdarelerinin Kalkması — büyükşehir illerinde İl Özel İdaresi kaldırıldı, görevler büyükşehir belediyesine devredildi, (5) Hizmet Sorumluluğu — büyükşehir belediyesi tüm ilin imar, ulaşım, su-kanalizasyon, çevre hizmetlerinden sorumlu hale geldi. Bu reform Türkiye'de yaklaşık 17 milyon kişiyi etkiledi ve yerel yönetim yapısını yeniden şekillendirdi.",
          },
        ],
      },
      // ──────────── Ders 5: Kira, Emlak Vergisi ve Gayrimenkul Vergilendirmesi ────────────
      {
        id: "m1019-l5",
        title: "Kira Mevzuatı, Emlak Vergisi ve Gayrimenkul Vergilendirmesi",
        duration: "10 dk",
        summary: {
          title: "Kira ve Gayrimenkul Vergi Mevzuatı",
          intro:
            "Türk Borçlar Kanunu'nun 299-378. maddeleri kira sözleşmelerini düzenler; özellikle konut ve çatılı işyeri kiralarında kiracı koruyucu hükümler yer alır. 1319 sayılı Emlak Vergisi Kanunu; bina ve arazi vergilerini düzenler. Gelir Vergisi Kanunu (md. 70 ve devamı) ise gayrimenkul kira gelirleri (GMSİ) ve gayrimenkul alım-satım kazançlarının vergilendirilmesini düzenler. Bu derste gayrimenkul ekonomisinin bu üç hayati alanı incelenir.",
          sections: [
            {
              heading: "Kira Sözleşmeleri ve Emlak Vergisi",
              icon: "shield",
              items: [
                {
                  strong: "Kira Sözleşmesinin Niteliği (TBK md. 299):",
                  text: "Kiraya verenin bir şeyin kullanılmasını veya kullanmayla birlikte ondan yararlanılmasını kiracıya bırakmayı, kiracının da buna karşılık kira bedeli ödemeyi üstlendiği sözleşmedir.",
                },
                {
                  strong: "Konut ve Çatılı İşyeri Kira Süresi:",
                  text: "TBK md. 347 — kiracı 15 gün öncesinden bildirimde bulunarak kontratı sona erdirebilir; kiraya veren sözleşme süresinin sonunda 10 yıl uzama süresi sonunda sözleşmeyi feshetme hakkına sahip.",
                },
                {
                  strong: "Kira Artış Sınırları:",
                  text: "Konut kiralarında yıllık kira artış oranı TÜFE 12 aylık ortalaması ile sınırlandırılmıştır (TBK md. 344); 2022-2024 döneminde özel %25 sınırı uygulanmıştır (geçici düzenleme).",
                },
                {
                  strong: "Emlak Vergisi (1319 sk):",
                  text: "Bina ve arazi sahiplerinden alınan yerel vergi; her yıl Mart-Mayıs ile Kasım'da olmak üzere 2 taksitte ödenir; oran konutta binde 1, ticari binada binde 2, arsada binde 3 (büyükşehirlerde 2 katı).",
                },
                {
                  strong: "Emlak Vergi Değeri:",
                  text: "Bayındırlık Bakanlığı ile belediyenin birlikte belirlediği değerdir; her 4 yılda bir genel beyanname dönemi; emlak vergisinin matrahıdır, gerçek piyasa değerinden farklı olabilir.",
                },
              ],
            },
            {
              heading: "Gayrimenkul Vergilendirmesi (GVK)",
              icon: "trend",
              items: [
                {
                  strong: "Kira Gelirlerinin Vergilendirilmesi (GMSİ):",
                  text: "Gayrimenkul Sermaye İradı (GMSİ) — GVK md. 70 kapsamında; kira gelirleri yıllık beyan ile vergilenir; konut kirası için istisna (yıllık belirli tutar), işyeri kirasında stopaj %20 (vergi sorumlusu kiracıdır).",
                },
                {
                  strong: "Götürü vs Gerçek Gider Yöntemi:",
                  text: "Mükellef iki yöntem arasında seçim yapar: (1) Götürü gider — kira gelirinin %15'i otomatik gider yazılır, basit yöntem, (2) Gerçek gider — bina ile ilgili gerçek giderler (amortisman, faiz, tamir, vergi) belgeli olarak indirilir.",
                },
                {
                  strong: "Konut Kira İstisnası:",
                  text: "GVK md. 21 — konut kira gelirlerinde her yıl ilan edilen istisna tutarı (örn. 33.000 TL 2024 yılı için); istisna sınırının altındaki kira geliri vergilenmez; üzerindekiler ise istisna düşülerek beyan edilir.",
                },
                {
                  strong: "Gayrimenkul Satış Kazancı (Değer Artışı):",
                  text: "GVK Mük. md. 80 — bir kişinin ivazsız (miras, hibe) edindiği gayrimenkulü satışı vergi dışı; ivazlı (satın alma) edinilen gayrimenkul 5 yıl içinde satılırsa Değer Artışı Kazancı olarak vergilenir, 5 yıl sonrası vergi yok.",
                },
                {
                  strong: "Değer Artışı Hesaplama:",
                  text: "Satış bedeli − (Alış bedeli × ÜFE endekslemesi) = Vergiye tabi değer artış kazancı; ÜFE endekslemesi enflasyondan kaynaklanan görünür kazançları siler; yıllık istisna düşülür.",
                },
              ],
            },
          ],
          tip: "TBK md. 299 = kira sözleşmesi tanımı. Konut kira artışı = TÜFE 12 aylık ortalaması (özel düzenleme %25 oldu). Emlak vergisi = bina/arazi yıllık vergisi (konut binde 1, büyükşehirde 2 kat). GMSİ = kira geliri (GVK md. 70). 5 yıl kuralı = satın alınan gayrimenkul 5 yıl içinde satılırsa değer artış vergisi. İşyeri kirasında stopaj %20.",
          kavramlar: [
            { terim: "Kira Sözleşmesi (TBK 299)", tanim: "Kiraya verenin kiracıya bir şeyin kullanımını, kiracının da belirli bir bedel ödemesini taahhüt ettiği TBK md. 299'da tanımlanan sözleşme." },
            { terim: "Konut Kira Artış Sınırı", tanim: "Konut kiralarında yıllık artış TÜFE 12 aylık ortalamasıyla sınırlandırılmış; geçici dönemde %25 üst sınır uygulaması yapıldı." },
            { terim: "Emlak Vergisi", tanim: "Bina ve arazi üzerinden her yıl alınan yerel vergi; konutlarda binde 1, büyükşehirlerde binde 2 oranı uygulanır." },
            { terim: "GMSİ (Gayrimenkul Sermaye İradı)", tanim: "GVK md. 70 kapsamında kira gelirleri; konutlarda istisna sonrası kalan kısım gelir vergisine tabi, işyerlerinde %20 stopaj uygulanır." },
            { terim: "Değer Artış Kazancı (5 Yıl Kuralı)", tanim: "GVK kapsamında edinim tarihinden itibaren 5 yıl içinde elden çıkarılan gayrimenkulden elde edilen kazancın gelir vergisine tabi tutulması." },
            { terim: "İşyeri Kirası Stopajı", tanim: "Konut dışı (işyeri) kiralarında kiracı tarafından %20 oranında yapılan gelir vergisi stopajı; kiracı kira bedelinden keserek vergi dairesine öder." },
            { terim: "Tapu Harcı", tanim: "Tapu devir işlemlerinde satış bedeli üzerinden alıcı ve satıcıdan ayrı ayrı alınan; 2024 itibarıyla binde 20 oranında harç." },
          ],
          dikkatlar: [
            "Kira artışında taraflarca belirlenen oran TÜFE 12 aylık ortalamasını aşamaz; aşan kısım geçersizdir.",
            "GMSİ'de konut kiracıları stopaj yapmaz; işyeri kiracıları %20 stopaj yapar ve muhtasar beyannamesiyle beyan eder.",
            "Değer artış kazancında 5 yıl: tescil tarihinden 5 tam yıl geçtikten sonra satılan gayrimenkulde vergi doğmaz.",
            "Emlak vergisi oranları: konut binde 1, işyeri binde 2; büyükşehirlerde bu oranlar 2 katıyla uygulanır.",
            "İstisna haddi: konut kira gelirinde GVK'da belirlenen istisna tutarının altındaki gelirler vergiden muaf; üstü beyan edilir.",
          ],
        },
        questions: [
          {
            text: "Türkiye'de konut kira sözleşmelerinde yıllık kira artış oranı için temel kural aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Kiraya veren istediği oranda artış yapabilir." },
              { id: "B", text: "TBK md. 344 uyarınca konut kiralarında yıllık kira artış oranı TÜFE'nin 12 aylık ortalaması ile sınırlandırılmıştır; ayrıca 2022-2024 döneminde geçici özel düzenleme ile %25 üst sınırı uygulanmıştır." },
              { id: "C", text: "Yıllık kira artışı her zaman %50 olmalıdır." },
              { id: "D", text: "Kira artışı yasaktır." },
            ],
            correct: "B",
            explanation:
              "Türkiye'de konut kira artışı, TBK md. 344 ile düzenlenmiştir. Temel Kural: yıllık kira artış oranı, bir önceki yıla göre 12 aylık TÜFE (Tüketici Fiyat Endeksi) ortalamasını geçemez. Bu sınır kiracıyı enflasyondan koruyan ana mekanizmadır. Geçici Düzenlemeler: 2022 yılında çıkarılan ve sonra uzatılan özel düzenleme ile, konut kira artışında yıllık %25 üst sınırı getirilmiştir. Bu yüksek enflasyon dönemine yönelik geçici bir tedbirdir; kiraya verenler aleyhine, kiracı lehine bir koruma sağlar (TÜFE 12 aylık ortalaması %80 olsa bile kiracı %25'ten fazla artış ödememekle yükümlü). İşyeri Kiraları: İşyeri kiralarında ÜFE üzerinden artış yapılabilir (farklı endeks); bu da TBK'nın işyeri kiraları için farklı düzenlemesidir. Sözleşmede Belirleme: yenileme kira sözleşmesi yapılırken artış oranı belirlenebilir ancak yasal üst sınırı aşamaz. Dava: kiraya veren TÜFE ortalamasının üstünde artış talep ederse, kiracı dava açarak yasal sınırı korumayı talep edebilir. Bu hukuki çerçeve enflasyonist dönemlerde kiracı-kiraya veren arasında dengeli bir ilişki kurmayı amaçlar.",
          },
          {
            text: "Türkiye'de gayrimenkul satışlarından elde edilen 'değer artışı kazancı'nın vergilendirilmesi için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm gayrimenkul satışları daima vergilenir." },
              { id: "B", text: "GVK Mük. md. 80 uyarınca: ivazsız edinilen (miras, hibe) gayrimenkul satışı vergi dışıdır; ivazlı (satın alma) edinilen gayrimenkul 5 YIL içinde satılırsa değer artışı kazancı olarak vergilenir, 5 yıl sonra yapılan satışlarda vergi YOKTUR; ÜFE endekslemesi yapılarak enflasyondan arındırılır." },
              { id: "C", text: "Gayrimenkul satışları 10 yıl boyunca vergilenir." },
              { id: "D", text: "Yalnızca işyerleri için değer artışı kazancı uygulanır." },
            ],
            correct: "B",
            explanation:
              "Türkiye'deki gayrimenkul satış vergisi rejimi, GVK Mükerrer md. 80 (Değer Artışı Kazançları) ile düzenlenmiştir. Temel Kurallar: (1) İvazsız Edinilen Gayrimenkuller — miras, bağış (hibe) veya başka bir yolla bedelsiz (ivazsız) edinilen taşınmazların satışı VERGİ DIŞIDIR (süre kuralı işlemez), (2) İvazlı Edinilen Gayrimenkuller — satın alma yoluyla (ivazlı) edinilen taşınmazlar için '5 yıl kuralı' işler: (a) Edinim tarihinden itibaren 5 YIL İÇİNDE satılırsa, oluşan değer artışı 'Değer Artışı Kazancı' olarak yıllık beyanname ile gelir vergisine tabidir. (b) Edinim tarihinden 5 YIL GEÇTİKTEN SONRA satılırsa, oluşan kazanç VERGİ DIŞIDIR (tamamen muaftır), (3) ÜFE Endekslemesi — Alış bedeli, alış tarihinden satış tarihine kadar ÜFE artış oranına göre endekslenir (artış %10'u aşmışsa); böylece enflasyondan kaynaklanan 'görünür' kazançlar vergilendirilmez, sadece reel kazanç vergiye tabi olur. Formül: Vergiye Tabi Kazanç = Satış Bedeli − (Alış Bedeli × ÜFE Endeks Çarpanı), (4) İstisna — yıllık olarak belirlenen istisna tutarı (örn. 87.000 TL 2024 için) düşülür; üzerindeki tutar artan oranlı vergi tarifesine tabidir, (5) Beyan Süresi — satışın yapıldığı yılı izleyen Mart ayında beyanname verilir.",
          },
          {
            text: "Gayrimenkul Sermaye İradı'nın (GMSİ — kira geliri) vergilendirilmesinde 'götürü gider' ile 'gerçek gider' yöntemi arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki yöntem aynı sonucu verir." },
              { id: "B", text: "Götürü gider: kira gelirinin %15'i otomatik gider yazılır (basit, belgeli kanıt gerekmez); Gerçek gider: bina ile ilgili gerçek giderler (amortisman, faiz, tamir, sigorta, vergi, yönetim ücreti) belgeli olarak indirilir (daha karmaşık ama yüksek gider varsa daha avantajlı). Yöntemler arasında geçiş 2 yıl beklemek gerektirir." },
              { id: "C", text: "Götürü gider yalnızca ticari işyerleri için kullanılır." },
              { id: "D", text: "Gerçek gider yöntemi yasaktır." },
            ],
            correct: "B",
            explanation:
              "Kira geliri elde eden gayrimenkul sahipleri, GVK md. 74 uyarınca iki gider yöntemi arasında tercih yapabilir: (1) Götürü Gider Yöntemi — basit ve standart yöntem; toplam kira gelirinin %15'i otomatik olarak gider yazılır, belgeleme gerekmez. Avantajı: hesap kolaylığı, evrak yükü yok, küçük yatırımcılar için pratik. Dezavantajı: gerçek giderler %15'ten fazla ise vergiyi yüksek ödeme, (2) Gerçek Gider Yöntemi — bina ile ilgili gerçek giderler belgeli olarak indirilir. İndirilebilir giderler: (a) Bina amortismanı (yıllık %2 — düz amortisman), (b) Banka kredi faizleri (konut kredisi), (c) Bakım/onarım giderleri, (d) Sigorta primleri (yangın, deprem), (e) Emlak vergisi, çevre temizlik vergisi, (f) Yöneticilik/yönetim ücretleri, (g) Aydınlatma/ısıtma genel giderleri (kiraya verilen kısma düşen pay). Avantajı: gerçek giderler %15'i aşıyorsa düşük vergi, kredi faiziyle oturulan ev kiraya verildiğinde çok avantajlı. Dezavantajı: belgeleri saklamak ve kayıt tutmak zorunludur. Geçiş Kuralı: bir yöntem seçildikten sonra 2 yıl boyunca diğer yönteme geçilemez. Pratik öneri: yeni satın alınan, kredi faizi yüksek olan veya büyük tamiratlar yapılan binalar için gerçek gider; basit durumlarda götürü.",
          },
          {
            text: "Emlak Vergisi (1319 sk) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Emlak vergisi merkezi bütçeye ödenir." },
              { id: "B", text: "Bina ve arazi sahiplerinden alınan YEREL bir vergidir; belediyelere ödenir; her yıl Mart-Mayıs ve Kasım'da olmak üzere 2 taksitte ödenir; oran konutta binde 1, ticari binada binde 2, arsada binde 3 (büyükşehirlerde 2 katı); matrahı Emlak Vergi Değeri'dir, her 4 yılda bir genel beyan dönemi vardır." },
              { id: "C", text: "Emlak vergisi yalnızca ticari yapılar için ödenir." },
              { id: "D", text: "Emlak vergisi yalnızca yıllık tek seferde ödenir." },
            ],
            correct: "B",
            explanation:
              "Emlak Vergisi (Real Estate Tax); 1319 sayılı Emlak Vergisi Kanunu (1970) ile düzenlenen, yerel bir mülkiyet vergisidir. Temel Özellikleri: (1) Tabi Olanlar — Türkiye sınırları içindeki bina ve arazi sahipleri (gerçek/tüzel kişiler) ödeme yükümlüsüdür; gayrimenkul olduğu yerin belediyesine ödenir, (2) Vergi Türleri — Bina Vergisi (konut, işyeri, sanayi) ve Arazi Vergisi (arsa, tarım arazisi, bağ-bahçe) olarak iki türü vardır, (3) Oranlar — konutlarda binde 1, ticari ve sınai binalarda binde 2, arazi/arsada binde 3, tarım arazisinde binde 1. Büyükşehir Belediyesi sınırları içindeki taşınmazlar için bu oranlar 2 katı uygulanır (binde 2, 4, 6, 2), (4) Matrah — Emlak Vergi Değeri; Bayındırlık Bakanlığı ile belediye tarafından her 4 yılda bir belirlenir (genel beyan dönemi); bu değer genelde gerçek piyasa değerinin altındadır, (5) Taksitler — yıllık vergi 2 eşit taksitte ödenir: 1. taksit Mart-Mayıs döneminde, 2. taksit Kasım'da, (6) Beyan Yükümlülüğü — yeni edinen, satan veya değişiklik yapan (yeni inşaat, yıkım, kat ilave) mülk sahibi belirli sürede belediyeye bildirimde bulunmalıdır, (7) Muafiyetler — küçük ölçekli ev sahibi emeklilere, gazi/şehit aile bireylerine, küçük tarım arazisi sahiplerine özel muafiyetler vardır.",
          },
          {
            text: "İşyeri kiralarında uygulanan stopaj (vergi tevkifatı) oranı kaçtır ve sorumlu kimdir?",
            options: [
              { id: "A", text: "%5 - Mal sahibi (kiraya veren)" },
              { id: "B", text: "%20 - Kiracı (vergi sorumlusu sıfatıyla); kiracı kira ödemesinden %20 stopaj yaparak vergi dairesine yatırır; kiraya veren brüt değil net kira alır; bu stopaj kiraya verenin yıllık beyanında mahsup edilir." },
              { id: "C", text: "%50 - Belediye" },
              { id: "D", text: "Stopaj yoktur" },
            ],
            correct: "B",
            explanation:
              "İşyeri kira gelirlerinde özel bir tevkifat (stopaj) sistemi uygulanır, konut kirasından farklıdır. Detaylar: (1) Oran — İşyeri kira ödemelerinde %20 stopaj uygulanır (GVK md. 94/5), (2) Sorumlu — Stopaj yapma yükümlülüğü KİRACIYA aittir; kiracı 'vergi sorumlusu' sıfatıyla kira bedelinden %20'yi keserek vergi dairesine yatırır. Brüt 10.000 TL'lik bir işyeri kirasından kiracı 2.000 TL stopaj keser, kiraya verene 8.000 TL net öder, vergi dairesine 2.000 TL yatırır, (3) Kapsam — Mükellefiyet ve KDV statüsü kiracı için önemlidir: kiracı KDV mükellefi olan tüzel kişi veya gerçek kişi tacir ise stopaj zorunludur. Konut kiralarında stopaj YOKTUR (yıllık beyan ile vergilenir), (4) Kiraya Verenin Durumu — Kiraya veren yıllık gelir vergisi beyannamesinde brüt kira gelirini gösterir, stopaj olarak ödenmiş %20 oranındaki vergiyi mahsup eder. Eğer toplam vergi yükümlülüğü stopajdan az ise iade alır, fazla ise farkı öder, (5) Ödeme Süresi — Kiracı, stopaj yapıldığı ay sonunu izleyen 26'sına kadar muhtasar beyanname ile beyan etmeli ve ödemelidir, (6) Avantajları — Sistemin amacı vergi tahsilatını güvence altına almak ve kayıt dışı kiralamayı önlemektir; ayrıca peşin tahsil sağlar.",
          },
        ],
      },
    ],
  },
];