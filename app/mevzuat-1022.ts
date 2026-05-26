/* ─────────────────────────────────────────────────────────────────────────────
 * Bilgi Sistemleri İşletimi (1022)
 *
 * Kaynak: SPL 1022 Çalışma Notu, 31 Aralık 2025 (144 sayfa)
 * Sınavlar: Bilgi Sistemleri Bağımsız Denetim Sınavı
 *
 * Tip yapısı: mevzuat.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1020 (BS Yönetimi ve Denetimi) ile bazı kavram örtüşmesi vardır;
 * 1022 ise BS Altyapısı (donanım, yazılım, veri tabanı, sanallaştırma),
 * modern teknolojiler (Bulut, IoT, AI, RPA, Blok Zincir), BS Operasyonları
 * (ITIL hizmet yönetimi, olay/problem/değişiklik yönetimi, yedekleme,
 * kapasite/performans), BS Sürekliliği (BCP/DRP, RTO/RPO, BIA) konularına
 * derinlemesine ve operasyonel düzeyde odaklanır.
 *
 * Kullanım:
 *   import { mevzuat1022 } from "./mevzuat-1022";
 *   export const modules = [
 *     ...mevzuatVerisi, ...genisMevzuat,
 *     ...mevzuat1003, ...mevzuat1004, ...mevzuat1005,
 *     ...mevzuat1006, ...mevzuat1007, ...mevzuat1008,
 *     ...mevzuat1009, ...mevzuat1010, ...mevzuat1011,
 *     ...mevzuat1012, ...mevzuat1013, ...mevzuat1014,
 *     ...mevzuat1015, ...mevzuat1016, ...mevzuat1017,
 *     ...mevzuat1018, ...mevzuat1019, ...mevzuat1020,
 *     ...mevzuat1021, ...mevzuat1022
 *   ];
 * ────────────────────────────────────────────────────────────────────────── */

import type { Module } from "./mevzuat";

export const mevzuat1022: Module[] = [
  // ════════════════════════════════════════════════════════════════════════
  // MODÜL — 1022 BİLGİ SİSTEMLERİ İŞLETİMİ
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "m1022",
    title: "Modül · Bilgi Sistemleri İşletimi (1022)",
    lessons: [
      // ──────────── Ders 1: BS Altyapısı — Donanım, Yazılım ve Sanallaştırma ────────────
      {
        id: "m1022-l1",
        title: "BS Altyapısı — Donanım, Yazılım, Veri Yönetimi ve Sanallaştırma",
        duration: "10 dk",
        summary: {
          title: "BS Altyapısı ve Temel Bileşenler",
          intro:
            "Bilgi Sistemleri Altyapısı; bir organizasyonun BT operasyonlarını destekleyen donanım, yazılım, ağ, veri yönetimi ve insan kaynaklarının bütünüdür. Donanım bileşenleri — bilgisayar türleri (mainframe, server, PC, terminal), sunucu mimarileri (web, uygulama, veritabanı, dosya, posta sunucusu) ve depolama sistemlerini içerir. Yazılım katmanı — işletim sistemleri, sıkılaştırılmış konfigürasyonlar, sanallaştırma teknolojilerini kapsar. Veri yönetişimi ise veri yaşam döngüsü, veri tabanı yönetim sistemleri (DBMS), veri ambarı (Data Warehouse) ve veri modellerinin yönetimini içerir.",
          sections: [
            {
              heading: "Donanım Bileşenleri ve Sunucu Mimarileri",
              icon: "shield",
              items: [
                {
                  strong: "Temel Donanım Bileşenleri:",
                  text: "CPU (Central Processing Unit) — merkezi işlemci, RAM (Random Access Memory) — geçici bellek, Depolama (HDD/SSD/NVMe) — kalıcı saklama, Anakart, Güç Kaynağı, Soğutma Sistemleri, Ağ Arayüzü Kartı (NIC).",
                },
                {
                  strong: "Bilgisayar Türleri (Büyüklüğe Göre):",
                  text: "Süper Bilgisayar (HPC) — bilimsel hesaplama, hava tahmini; Mainframe — yüksek işlem hacmi, banka çekirdek sistemleri; Mini Bilgisayar — orta ölçekli; Mikrobilgisayar (PC) — kişisel; Tablet/Akıllı Telefon — mobil bilgi işlem.",
                },
                {
                  strong: "Görevlerine Göre Sunucular:",
                  text: "Web Sunucusu (Apache, Nginx, IIS), Uygulama Sunucusu (Tomcat, JBoss), Veritabanı Sunucusu (Oracle, SQL Server, MySQL), Dosya Sunucusu, Posta Sunucusu (Exchange), Vekil Sunucu (Proxy), DNS Sunucusu, DHCP Sunucusu, Print Sunucusu.",
                },
                {
                  strong: "Yapısına Göre Sunucu Mimarileri:",
                  text: "Tower (kule), Rack (raf), Blade (bıçak — yüksek yoğunluk), Hyper-Converged (donanım + yazılım entegre); kurumsal veri merkezlerinde rack ve blade yaygındır.",
                },
                {
                  strong: "Donanım Yönetim Süreçleri:",
                  text: "Donanım Bakım Programları (preventive, planlı), Donanım Performansını İzleme (CPU, RAM, disk kullanımı), Donanım Tedarik Süreci (RFP, değerlendirme, satın alma, kabul).",
                },
              ],
            },
            {
              heading: "Yazılım, Veri Yönetişimi ve Sanallaştırma",
              icon: "trend",
              items: [
                {
                  strong: "İşletim Sistemleri:",
                  text: "Sunucu OS'leri: Windows Server, Linux (RHEL, Ubuntu, SUSE), UNIX (AIX, Solaris); İstemci OS'leri: Windows, macOS, Linux; Mobil: iOS, Android; donanımla yazılım arasındaki köprü.",
                },
                {
                  strong: "Sıkılaştırılmış Baz Konfigürasyonlar (Hardening):",
                  text: "İşletim sistemi ve uygulamaların güvenlik açıklarını kapatmak için yapılandırılması; gereksiz servislerin kapatılması, default şifrelerin değiştirilmesi, yamaların uygulanması, kullanılmayan portların kapatılması; CIS Benchmark, DISA STIG kılavuzları.",
                },
                {
                  strong: "Sanallaştırma (Virtualization):",
                  text: "Tek bir fiziksel donanım üzerinde birden fazla sanal makinenin (VM) çalıştırılması; Hypervisor (VMware ESXi, Microsoft Hyper-V, KVM, Xen) ile yönetilir; kaynak optimizasyonu, izolasyon, hızlı dağıtım sağlar; bulut bilişimin temelidir.",
                },
                {
                  strong: "Veri Yaşam Döngüsü (Data Lifecycle):",
                  text: "Veri Oluşturma → Saklama → Kullanma → Paylaşma → Arşivleme → İmha; her aşamada güvenlik, gizlilik ve uyum gereksinimleri vardır; KVKK ve GDPR veri yaşam döngüsünü düzenler.",
                },
                {
                  strong: "Veri Tabanı Yönetim Sistemleri (DBMS):",
                  text: "İlişkisel (RDBMS): Oracle, MySQL, PostgreSQL, SQL Server — SQL dili, ACID özellikleri (Atomicity, Consistency, Isolation, Durability); NoSQL: MongoDB, Cassandra, Redis — büyük veri, esnek şema; Veri Ambarı (Data Warehouse) — analitik amaçlı tarihsel veri saklama (Snowflake, Teradata).",
                },
              ],
            },
          ],
          tip: "Sunucu türleri: Web, Uygulama, Veritabanı, Dosya, Posta. Mimari: Tower → Rack → Blade → Hyper-Converged. Hardening = güvenlik için yapılandırma sıkılaştırma. Hypervisor = sanal makineleri yöneten katman. ACID = ilişkisel DB özelliği (Atomicity, Consistency, Isolation, Durability). Veri Ambarı ≠ İşlemsel DB (analitik vs operasyonel).",
          kavramlar: [
            { terim: "Hypervisor", tanim: "Fiziksel donanım üzerinde birden fazla sanal makineyi çalıştıran sanallaştırma katmanı; Type 1 (bare-metal) ve Type 2 (hosted) olmak üzere ikiye ayrılır." },
            { terim: "ACID Özellikleri", tanim: "İlişkisel veritabanlarındaki işlem güvenilirliği ilkeleri: Atomicity (bütün ya da hiç), Consistency (bütünlük), Isolation (yalıtım), Durability (kalıcılık)." },
            { terim: "Hardening (Sıkılaştırma)", tanim: "Sunucu ve sistemlerin gereksiz hizmet, port ve hesapların kapatılmasıyla saldırı yüzeyinin azaltılması; güvenli yapılandırma süreci." },
            { terim: "Veri Ambarı (Data Warehouse)", tanim: "Analitik ve raporlama amaçlı yapılandırılmış büyük veri deposu; işlemsel veritabanından ayrı tutulur, OLAP sorguları için optimize edilir." },
            { terim: "İlişkisel Veritabanı (RDBMS)", tanim: "Verilerin tablolar halinde ve ilişkiler aracılığıyla depolandığı, SQL ile yönetilen veritabanı sistemi; ACID özelliklerini destekler." },
            { terim: "Blade Sunucu", tanim: "Yüksek yoğunluklu raf içinde minimum yer kaplayan modüler sunucu kartı; ortak güç kaynağı ve soğutma altyapısıyla çalışır." },
            { terim: "Hyper-Converged Altyapı (HCI)", tanim: "İşlem, depolama ve ağ bileşenlerinin tek bir yazılım tanımlı platformda birleştirildiği modern veri merkezi mimarisi." },
          ],
          dikkatlar: [
            "ACID özellikleri: Atomicity (ya hepsi ya hiç), Consistency (tutarlılık), Isolation (işlemler birbirini etkilemez), Durability (commit sonrası kalıcı).",
            "Veri ambarı ≠ işlemsel DB: ambar analitik (OLAP, raporlama), işlemsel DB anlık işlemler (OLTP) için optimize edilmiştir.",
            "Hardening: varsayılan şifre değiştirme, gereksiz portları kapatma, en az yetki ilkesi — güvenlik temelinin ilk adımı.",
            "Type 1 hypervisor (VMware ESXi) doğrudan donanım üzerinde; Type 2 (VirtualBox) işletim sistemi üzerinde çalışır — performans farkı önemli.",
            "Sunucu mimarisi: Tower (küçük), Rack (orta), Blade (yüksek yoğunluk), HCI (yazılım tanımlı modern).",
          ],
        },
        questions: [
          {
            text: "İlişkisel veri tabanlarının (RDBMS) temel özelliği 'ACID' aşağıdakilerden hangisinden oluşur?",
            options: [
              { id: "A", text: "Audit, Control, Inspection, Documentation" },
              { id: "B", text: "Atomicity (Atomiklik — işlem ya tamamen yapılır ya hiç yapılmaz), Consistency (Tutarlılık — veritabanı tutarlı durumdan tutarlı duruma geçer), Isolation (İzolasyon — eşzamanlı işlemler birbirini etkilemez), Durability (Dayanıklılık — onaylanan işlem kalıcıdır)" },
              { id: "C", text: "Authentication, Confidentiality, Integrity, Detection" },
              { id: "D", text: "Application, Cloud, Internet, Database" },
            ],
            correct: "B",
            explanation:
              "ACID; ilişkisel veri tabanı yönetim sistemlerinin (RDBMS) güvenilirliğini garanti eden dört temel özelliktir; Jim Gray tarafından 1981'de formüle edilmiştir. (1) Atomicity (Atomiklik) — bir işlem (transaction) ya TAMAMEN yapılır ya da HİÇ yapılmaz; kısmen tamamlanmış işlem olamaz. Örnek: A hesabından B hesabına para transferinde, A'dan çıkış ve B'ye giriş atomik bir işlem; biri başarısız olursa diğeri de geri alınır (rollback). (2) Consistency (Tutarlılık) — işlem öncesinde ve sonrasında veritabanı tutarlı bir durumda olur; tüm kurallar (constraints, triggers, foreign keys) korunur. Örnek: bir transfer işlemi sonunda toplam para miktarı değişmemeli. (3) Isolation (İzolasyon) — eşzamanlı çalışan işlemler birbirini etkilemez; her işlem sanki tek başına çalışıyormuş gibi sonuç verir. İzolasyon seviyeleri: Read Uncommitted, Read Committed, Repeatable Read, Serializable. (4) Durability (Dayanıklılık) — bir işlem onaylandıktan (commit) sonra sistem çökse bile kalıcıdır; veritabanı yeniden başladığında işlem korunur (transaction log ile). ACID, finansal işlemler, kritik kurumsal uygulamalar için vazgeçilmezdir. NoSQL veritabanları (MongoDB, Cassandra) ise BASE (Basically Available, Soft state, Eventual consistency) modelini benimser — ACID kadar güçlü değildir ama yüksek ölçeklenebilirlik sağlar; sosyal medya, e-ticaret katalog gibi uygulamalar için uygundur.",
          },
          {
            text: "Sanallaştırma (Virtualization) teknolojisi için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Sanallaştırma bir fiziksel sunucuyu yok eder." },
              { id: "B", text: "Tek bir fiziksel donanım üzerinde birden fazla SANAL MAKİNENİN (VM) çalıştırılmasını sağlayan teknolojidir; HYPERVISOR (VMware ESXi, Microsoft Hyper-V, KVM, Xen) ile yönetilir; kaynak optimizasyonu, izolasyon, hızlı dağıtım, maliyet tasarrufu sağlar; BULUT BİLİŞİMİN TEMELİDİR." },
              { id: "C", text: "Sanallaştırma yalnızca yazılım test ortamı için kullanılır." },
              { id: "D", text: "Sanallaştırma bir programlama dilidir." },
            ],
            correct: "B",
            explanation:
              "Sanallaştırma (Virtualization); modern BS altyapısının temel teknolojilerindendir; 1960'larda IBM mainframe sistemlerinde başlamış, 2000'lerden sonra x86 sunucularda yaygınlaşmıştır (VMware'in başarısıyla). Temel Mantık: Tek bir fiziksel donanım (host) üzerinde, donanım kaynaklarını paylaşan birden fazla bağımsız işletim sistemi (guest OS) çalıştırılır; her birine 'sanal makine' (Virtual Machine - VM) denir. Hypervisor: Sanal makineleri yöneten yazılım katmanı; iki türü vardır: (1) Tip 1 (Bare-metal/Native) — doğrudan donanım üzerinde çalışır, OS yok; örnekler: VMware ESXi, Microsoft Hyper-V (server), Citrix XenServer, KVM (Linux), (2) Tip 2 (Hosted) — bir OS üzerinde çalışır, daha az verimli; örnekler: VMware Workstation, Oracle VirtualBox, Parallels Desktop. Sanallaştırma Türleri: (a) Sunucu Sanallaştırma — en yaygın, fiziksel sunucular VM'lere dönüştürülür, (b) Depolama Sanallaştırma — birden fazla fiziksel depolama tek mantıksal pool, (c) Ağ Sanallaştırma — SDN (Software Defined Networking), VLAN, NFV, (d) Masaüstü Sanallaştırma — VDI (Virtual Desktop Infrastructure), kullanıcı masaüstü merkezi sunucuda. Avantajları: (1) Kaynak Optimizasyonu — fiziksel sunucular genelde %10-15 kullanılırdı, VM'lerle %70-80'e çıkar, (2) İzolasyon — VM'ler birbirinden bağımsız çalışır, (3) Hızlı Dağıtım — yeni VM dakikalar içinde, (4) Maliyet Tasarrufu — daha az fiziksel donanım, enerji, soğutma, (5) İş Sürekliliği — VM'ler kolayca taşınabilir (vMotion), (6) Test/Dev Ortamı — geliştirici kendi VM'inde, (7) Yeşil BT — daha az enerji tüketimi. Bulut Bilişimle İlişki: bulut bilişim sanallaştırma üzerine kurulmuştur; AWS, Azure, GCP fiziksel sunucularını VM'ler halinde müşterilere sunar. Modern Gelişmeler: Konteynerleştirme (Docker, Kubernetes) — daha hafif sanallaştırma; OS-level virtualization; mikroservis mimarileri için ideal.",
          },
          {
            text: "İşletim Sistemi 'Sıkılaştırma' (Hardening) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Sıkılaştırma yalnızca performans artırma işlemidir." },
              { id: "B", text: "İşletim sistemi ve uygulamaların GÜVENLİK açıklarını kapatmak için yapılandırılması işlemidir; gereksiz servislerin kapatılması, default şifrelerin değiştirilmesi, yamaların uygulanması, kullanılmayan portların kapatılması, yetkilendirme sıkılaştırması, log yönetimi içerir; CIS Benchmark, DISA STIG kılavuzları rehberlik eder." },
              { id: "C", text: "Sıkılaştırma yalnızca veritabanları için yapılır." },
              { id: "D", text: "Sıkılaştırma sadece yıllık olarak yapılır." },
            ],
            correct: "B",
            explanation:
              "Sıkılaştırma (Hardening / Security Hardening); bir bilgisayar sistemi, uygulama veya cihazın güvenlik açıklarını azaltmak için yapılandırılması işlemidir. Temel Mantık: sistem fabrika ayarlarıyla (default configuration) gelir; bu ayarlar genelde 'kullanım kolaylığı' odaklıdır ve güvenlik açıkları içerir. Sıkılaştırma ile saldırı yüzeyi (attack surface) minimuma indirilir. Tipik Sıkılaştırma Adımları: (1) Gereksiz Servisleri Kapatma — kullanılmayan servisler (FTP, Telnet, SNMP) güvenlik açığı yaratabilir; sadece gerekenler açık tutulur, (2) Default Şifre Değişikliği — admin/admin, root/root gibi default şifreler hemen değiştirilir; karmaşık şifreler ve MFA, (3) Yamaların Uygulanması — işletim sistemi ve yazılım güncellemeleri zamanında uygulanır, (4) Kullanılmayan Portların Kapatılması — firewall kuralları ile gereksiz network portları kapatılır, (5) Yetkilendirme Sıkılaştırma — gereksiz hesaplar silinir, ayrıcalıklı hesaplar (admin) sınırlı kullanılır, görevler ayrılığı, (6) Log Yönetimi — denetim izleri (audit logs) etkinleştirilir, merkezi log sistemine gönderilir, (7) Anti-malware/EDR — güvenlik yazılımları kurulur ve güncel tutulur, (8) Şifreleme — disk şifreleme (BitLocker, LUKS), iletişim şifreleme (TLS), (9) Güvenlik Duvarı Kuralları — host-based firewall, sıkı kurallar, (10) BIOS/UEFI Güvenliği — Secure Boot, BIOS şifresi. Sıkılaştırma Kılavuzları: (1) CIS Benchmarks — Center for Internet Security; Windows, Linux, macOS, AWS, Azure için detaylı sıkılaştırma kılavuzları, (2) DISA STIG — Defense Information Systems Agency; ABD savunma standartları, (3) NIST SP 800-123 — Server Security; (4) Microsoft Security Baselines — Windows, M365 için, (5) ISO 27001/27002 — bilgi güvenliği kontrolleri. Sıkılaştırma yaşam döngüsü: (a) Mevcut durumu değerlendir, (b) Standart seç (CIS, STIG), (c) Uygula (otomatik araçlar ile - Ansible, Puppet, Chef), (d) Test et, (e) İzle ve sürekli iyileştir. Kritik altyapı, finansal kurumlar, sağlık kuruluşları için sıkılaştırma zorunludur (BDDK, SPK düzenlemeleri uyarınca).",
          },
          {
            text: "Veri Tabanı Yönetim Sistemlerinde (DBMS) 'İlişkisel (RDBMS)' ile 'NoSQL' arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki tür aynıdır, sadece isim farklı." },
              { id: "B", text: "RDBMS (Oracle, MySQL, PostgreSQL): tablo bazlı, sabit şema, SQL dili, ACID özellikleri — yapılandırılmış veri, finansal işlemler için. NoSQL (MongoDB, Cassandra, Redis): esnek şema (doküman, key-value, graph, column), yüksek ölçeklenebilirlik, BASE özellikleri — büyük veri, sosyal medya, gerçek zamanlı uygulamalar için." },
              { id: "C", text: "RDBMS yalnızca yeni teknoloji, NoSQL eski teknolojidir." },
              { id: "D", text: "NoSQL yalnızca metin saklamak için kullanılır." },
            ],
            correct: "B",
            explanation:
              "Veri Tabanı Yönetim Sistemleri (DBMS); modern uygulamaların kalbidir. İki ana paradigma vardır: (1) İlişkisel Veri Tabanları (RDBMS - Relational Database Management Systems) — Tarihçe: 1970'te Edgar F. Codd tarafından icat edildi. Yapı: Veriler tablolar (relations) halinde saklanır; satırlar (records) ve sütunlar (fields/attributes); tablolar arası ilişkiler 'yabancı anahtarlar' (foreign keys) ile kurulur. Dili: SQL (Structured Query Language) — standartlaşmış sorgu dili. Özellikleri: ACID (Atomicity, Consistency, Isolation, Durability); sabit şema (schema-on-write); güçlü tutarlılık; karmaşık sorgular (JOIN). Örnekleri: Oracle Database, Microsoft SQL Server, MySQL, PostgreSQL, IBM DB2, MariaDB. Uygun Olduğu Yerler: Banka çekirdek sistemleri, ERP, CRM, finansal raporlama, muhasebe — yapılandırılmış veri ve ACID gerektiren yerler. (2) NoSQL Veri Tabanları — Tarihçe: 2000'lerde web ölçeğinde uygulamalar (Facebook, Twitter, Google, Amazon) için ortaya çıktı; 'Not Only SQL'. Türleri: (a) Doküman (Document) — MongoDB, CouchDB; JSON benzeri belgeler, (b) Anahtar-Değer (Key-Value) — Redis, Riak, DynamoDB; basit ve hızlı, (c) Sütun Bazlı (Column-Family) — Cassandra, HBase; büyük veri analizi, (d) Graf (Graph) — Neo4j, Amazon Neptune; sosyal ağ, öneri sistemleri. Özellikleri: Esnek şema (schema-on-read); BASE (Basically Available, Soft state, Eventual consistency); yatay ölçeklenebilirlik; yüksek performans; ACID daha gevşek. Uygun Olduğu Yerler: Sosyal medya, IoT, gerçek zamanlı analitik, büyük veri, içerik yönetimi, e-ticaret katalog, oyun lider tabloları. Karar Kriterleri: ACID kritik mi? → RDBMS. Web ölçeğinde mi? → NoSQL. Yapılandırılmış veri mi? → RDBMS. Şema sürekli değişiyor mu? → NoSQL. Karmaşık JOIN gerekli mi? → RDBMS. Modern Trend: çoğu organizasyon her ikisini birlikte kullanır (polyglot persistence) — her veri türü için en uygun DB seçilir.",
          },
          {
            text: "BS altyapısında 'sunucu türleri' arasında 'görevlerine göre' aşağıdakilerden hangisi yer ALMAZ?",
            options: [
              { id: "A", text: "Web Sunucusu (Apache, Nginx) ve Uygulama Sunucusu (Tomcat, JBoss)" },
              { id: "B", text: "Veritabanı Sunucusu (Oracle, SQL Server) ve Dosya Sunucusu" },
              { id: "C", text: "Posta Sunucusu (Exchange) ve DNS/DHCP Sunucusu" },
              { id: "D", text: "Müşteri Memnuniyet Sunucusu" },
            ],
            correct: "D",
            explanation:
              "BS altyapısında sunucular GÖREVLERİNE göre birçok türe ayrılır; 'Müşteri Memnuniyet Sunucusu' diye bir teknik sunucu türü YOKTUR (bu bir iş süreci, sunucu değil). Sunucu Türleri (Görevlerine Göre): (1) Web Sunucusu (Web Server) — kullanıcıdan gelen HTTP isteklerini karşılar, statik içerik sunar. Örnekler: Apache HTTP Server, Nginx, Microsoft IIS, LiteSpeed; Türkiye'de en yaygın Apache ve Nginx, (2) Uygulama Sunucusu (Application Server) — iş mantığını çalıştırır, dinamik içerik üretir. Örnekler: Apache Tomcat (Java), JBoss/WildFly, IBM WebSphere, Oracle WebLogic, Microsoft .NET, (3) Veritabanı Sunucusu (Database Server) — DBMS çalıştırır, veri saklar ve sorguları işler. Örnekler: Oracle Database, Microsoft SQL Server, MySQL Server, PostgreSQL, MongoDB, (4) Dosya Sunucusu (File Server) — merkezi dosya saklama ve paylaşım; SMB/CIFS, NFS protokolleri; örn. Windows Server File Services, NAS cihazları, (5) Posta Sunucusu (Mail Server) — e-posta gönderme/alma; SMTP, IMAP, POP3 protokolleri. Örnekler: Microsoft Exchange Server, Postfix, Sendmail, (6) DNS Sunucusu (Domain Name System) — alan adlarını IP adreslerine çevirir; BIND, Windows DNS, (7) DHCP Sunucusu — istemcilere otomatik IP adresi atar; Windows DHCP, ISC DHCP, (8) Vekil/Proxy Sunucusu — istemci ile internet arasında aracı; Squid, Apache Traffic Server; güvenlik, önbelleğe alma, (9) Print Sunucusu — yazıcıları merkezi yönetir, (10) Domain Controller (Active Directory) — Windows ağında kimlik doğrulama ve yetkilendirme, (11) Backup Sunucusu — merkezi yedekleme; Veeam, Commvault, NetBackup, (12) Streaming Sunucusu — video/ses akışı; Wowza, Nginx-RTMP, (13) Game Sunucusu — oyun istemcilerini bağlayan, (14) FTP Sunucusu — dosya transferi; vsftpd, ProFTPD, (15) Terminal Sunucusu / VDI — uzak masaüstü erişimi. Modern Trend: bu sunucu rollerinin çoğu artık sanal makinelerde (VM) veya konteynerlerde çalışır; bulut platformlarında (AWS, Azure, GCP) yönetilen hizmet olarak sunulur (PaaS).",
          },
        ],
      },
      // ──────────── Ders 2: Modern Teknolojiler — Bulut, AI, IoT, Blok Zincir ────────────
      {
        id: "m1022-l2",
        title: "Modern BS Teknolojileri — Bulut, Büyük Veri, AI, IoT, RPA, Blok Zincir",
        duration: "10 dk",
        summary: {
          title: "Modern Bilgi Sistemleri Teknolojileri",
          intro:
            "Modern BS altyapısı; geleneksel donanım/yazılımdan ötesine geçen dönüştürücü teknolojilerle şekillenmektedir. Bulut Bilişim (Cloud Computing) — hizmet olarak BT (IaaS, PaaS, SaaS); Büyük Veri (Big Data) — 5V (Volume, Velocity, Variety, Veracity, Value); Yapay Zekâ (AI) — makine öğrenmesi, derin öğrenme; Nesnelerin İnterneti (IoT) — fiziksel cihazlar arası bağlantı; Robotik Süreç Otomasyonu (RPA) — kuralsal görevlerin otomasyonu; Blok Zincir (Blockchain) — dağıtık defter teknolojisi. Bu teknolojiler finansal piyasaları ve denetim mesleğini köklü olarak değiştirmektedir.",
          sections: [
            {
              heading: "Bulut Bilişim ve Büyük Veri",
              icon: "shield",
              items: [
                {
                  strong: "Bulut Bilişim Temel Özellikleri:",
                  text: "Talep Üzerine Self-Servis (on-demand self-service), Geniş Ağ Erişimi (broad network access), Kaynak Havuzu (resource pooling), Hızlı Esneklik (rapid elasticity), Ölçülen Hizmet (measured service - kullandığın kadar öde).",
                },
                {
                  strong: "Bulut Bilişim Hizmet Modelleri:",
                  text: "IaaS (Infrastructure as a Service) — sunucu, depolama, ağ (AWS EC2, Azure VM); PaaS (Platform as a Service) — geliştirme platformu (Heroku, Google App Engine); SaaS (Software as a Service) — hazır uygulama (Office 365, Salesforce, Gmail).",
                },
                {
                  strong: "Bulut Dağıtım Modelleri:",
                  text: "Public Cloud — herkese açık (AWS, Azure, GCP); Private Cloud — özel kuruluşa ait; Hybrid Cloud — public ve private birleşimi; Community Cloud — benzer ihtiyaçlı topluluklar.",
                },
                {
                  strong: "Büyük Veri (Big Data) — 5V:",
                  text: "Volume (Hacim — terabaytlar/petabaytlar), Velocity (Hız — gerçek zamanlı akış), Variety (Çeşitlilik — yapılandırılmış/yapılandırılmamış), Veracity (Doğruluk — veri kalitesi), Value (Değer — anlamlı içgörüler).",
                },
                {
                  strong: "Büyük Veri Teknolojileri:",
                  text: "Apache Hadoop (HDFS dağıtık dosya sistemi, MapReduce), Apache Spark (in-memory hesaplama, daha hızlı), Apache Kafka (gerçek zamanlı veri akışı), Data Lake (ham veri saklama), Data Warehouse (yapılandırılmış analitik).",
                },
              ],
            },
            {
              heading: "AI, IoT, RPA ve Blok Zincir",
              icon: "trend",
              items: [
                {
                  strong: "Yapay Zekâ (AI) ve Makine Öğrenmesi:",
                  text: "AI: insan gibi 'düşünebilen' sistemler; Machine Learning (ML): veriden öğrenen algoritmalar (denetimli/denetimsiz/pekiştirmeli); Deep Learning: yapay sinir ağları (CNN, RNN, Transformer); finansta: algoritmik ticaret, kredi notlaması, sahtekarlık tespiti, robo-danışman.",
                },
                {
                  strong: "Nesnelerin İnterneti (IoT - Internet of Things):",
                  text: "Fiziksel cihazların (sensörler, kameralar, akıllı cihazlar) internet üzerinden veri toplaması ve iletişim kurması; akıllı şehirler, akıllı evler, endüstriyel IoT (IIoT), giyilebilir teknoloji; protokol: MQTT, CoAP.",
                },
                {
                  strong: "Robotik Süreç Otomasyonu (RPA):",
                  text: "Kural tabanlı, tekrar eden insan görevlerinin yazılım robotlarıyla otomatize edilmesi; örnek: fatura işleme, müşteri kaydı oluşturma, raporlama; araçlar: UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate.",
                },
                {
                  strong: "Blok Zincir Temel Kavramlar:",
                  text: "Dağıtık defter (distributed ledger), kriptografi (hash, dijital imza), konsensüs mekanizmaları (Proof of Work, Proof of Stake), akıllı sözleşmeler (smart contracts), node'lar arası senkronizasyon; merkezi otoriteye gerek yok.",
                },
                {
                  strong: "Blok Zincir Ağ Türleri ve Kullanım Alanları:",
                  text: "Public (Bitcoin, Ethereum), Private (kurumsal), Consortium (banka konsorsiyumu — R3 Corda); kullanım: kripto para, tedarik zinciri, dijital kimlik, sağlık kayıtları, oy verme, sermaye piyasası takası (DLT).",
                },
              ],
            },
          ],
          tip: "Bulut 3 hizmet modeli: IaaS (altyapı) + PaaS (platform) + SaaS (yazılım). 4 dağıtım: Public + Private + Hybrid + Community. Big Data 5V. AI/ML = veriden öğrenme. IoT = bağlı cihazlar. RPA = kural tabanlı otomasyon (UiPath). Blok Zincir = dağıtık defter, merkezi otorite YOK, kripto + konsensüs ile.",
          kavramlar: [
            { terim: "IaaS (Infrastructure as a Service)", tanim: "Bulutta sanal sunucu, depolama ve ağ altyapısının kiralanması; müşteri işletim sistemi ve üstünü yönetir (AWS EC2, Azure VM)." },
            { terim: "PaaS (Platform as a Service)", tanim: "Uygulama geliştirme ve çalıştırma için hazır platform; müşteri yalnızca uygulama kodunu yönetir (Google App Engine, Heroku)." },
            { terim: "SaaS (Software as a Service)", tanim: "Hazır yazılımın internet üzerinden kullanıma sunulması; müşteri yalnızca uygulamayı kullanır (Salesforce, Microsoft 365)." },
            { terim: "Big Data 5V", tanim: "Büyük verinin 5 temel özelliği: Volume (hacim), Velocity (hız), Variety (çeşitlilik), Veracity (doğruluk), Value (değer)." },
            { terim: "Blok Zincir (Blockchain)", tanim: "Merkezi otoriteye gerek duymadan dağıtık düğümler arasında kriptografik olarak güvence altına alınmış ve değiştirilemez dağıtık defter teknolojisi." },
            { terim: "RPA (Robotic Process Automation)", tanim: "Tekrarlayan kural tabanlı iş süreçlerinin yazılım robotlarıyla otomatikleştirilmesi; kullanıcı arayüzünü taklit eder, entegrasyon gerektirmez." },
            { terim: "IoT (Nesnelerin İnterneti)", tanim: "İnternet aracılığıyla birbirine bağlı cihazların veri toplaması ve paylaşması; akıllı sensörler, wearable cihazlar, endüstriyel otomasyon." },
          ],
          dikkatlar: [
            "Bulut hizmet sorumluluğu: IaaS (altyapı bulutta, OS ve üstü müşteri), PaaS (platform bulutta, kod müşteri), SaaS (her şey bulutta).",
            "Big Data 5V: Volume (TB/PB büyüklük), Velocity (gerçek zamanlı hız), Variety (yapılandırılmamış dahil), Veracity (kalite), Value (anlam).",
            "Blok zincir: değiştirilemez kayıt, merkezi otorite yok, konsensüs mekanizması (PoW, PoS); finans, tedarik zinciri kullanım alanları.",
            "RPA kural tabanlı ve deterministik; AI/ML ise öğrenme ve tahmin kapasitesi olan — ikisini karıştırmayın.",
            "Hibrit bulut = özel + genel bulut kombinasyonu; hassas veriler özel, esnek kapasite genel bulutta.",
          ],
        },
        questions: [
          {
            text: "Bulut bilişim hizmet modellerinden 'IaaS, PaaS, SaaS' arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Üç model aynıdır, sadece marka farkı." },
              { id: "B", text: "IaaS (Infrastructure as a Service) — temel altyapı: sunucu, depolama, ağ (AWS EC2, Azure VM); PaaS (Platform as a Service) — geliştirme platformu (Heroku, Google App Engine); SaaS (Software as a Service) — hazır uygulama (Office 365, Salesforce, Gmail); soyutlama seviyesi IaaS'tan SaaS'a artar, kullanıcı sorumluluğu azalır." },
              { id: "C", text: "IaaS yalnızca büyük şirketler içindir." },
              { id: "D", text: "SaaS sadece güvenlik yazılımıdır." },
            ],
            correct: "B",
            explanation:
              "Bulut bilişimin üç temel hizmet modeli (NIST tarafından standartlaştırılmıştır); her biri farklı bir SOYUTLAMA seviyesi ve sorumluluk paylaşımı sunar. Hayal Edin: Pizza Modeli — IaaS (un, malzeme alır, kendiniz yaparsınız), PaaS (donmuş pizza alır, fırına atarsınız), SaaS (hazır pizza yersiniz). (1) IaaS (Infrastructure as a Service - Hizmet Olarak Altyapı) — Bulut sağlayıcı temel altyapıyı sunar: sanal makineler (VM), depolama, ağ, sanal makineler. Kullanıcının sorumluluğu: işletim sistemi, ara katman (middleware), runtime, veri, uygulamalar. Örnekler: AWS EC2 (sanal sunucu), AWS S3 (depolama), Azure VM, Google Compute Engine, DigitalOcean Droplets. Uygun Olduğu Durumlar: tam kontrol gerektiren, özel yapılandırma, eski uygulamaları taşıma. (2) PaaS (Platform as a Service - Hizmet Olarak Platform) — Bulut sağlayıcı ek olarak işletim sistemi, runtime, veritabanı, geliştirme araçlarını da sağlar. Kullanıcının sorumluluğu: sadece UYGULAMA ve VERİ. Örnekler: Heroku, Google App Engine, AWS Elastic Beanstalk, Azure App Service, Firebase, Vercel, Netlify. Uygun Olduğu Durumlar: hızlı uygulama geliştirme, altyapı yönetmek istemeyen geliştiriciler. (3) SaaS (Software as a Service - Hizmet Olarak Yazılım) — Bulut sağlayıcı HAZIR çalışan bir uygulama sunar; kullanıcı sadece KULLANIR. Kullanıcının sorumluluğu: VERİ ve KONFIGURASYON ayarları. Örnekler: Microsoft Office 365, Google Workspace, Salesforce CRM, Slack, Zoom, Dropbox, GitHub, Atlassian Jira. Uygun Olduğu Durumlar: standart iş uygulamaları, hızlı erişim, lisans yönetimi olmadan. Sorumluluk Paylaşımı (Shared Responsibility Model): IaaS'ta müşteri çok sorumlu (OS yamaları dahil); SaaS'ta sağlayıcı çok sorumlu. Diğer Modeller: FaaS/Serverless (AWS Lambda, Azure Functions) — fonksiyon bazlı; DBaaS (Database as a Service); CaaS (Container as a Service); XaaS (Anything as a Service).",
          },
          {
            text: "Büyük Veri (Big Data) için 5V özelliklerinden 'Velocity' (Hız) ne anlama gelir?",
            options: [
              { id: "A", text: "Verinin boyutudur." },
              { id: "B", text: "Verinin üretilme, işlenme ve iletilme HIZIDIR; sosyal medya akışları, IoT sensör verileri, finansal işlemler gibi gerçek zamanlı veri akışları yüksek hız gerektirir; Apache Kafka, Spark Streaming gibi araçlar bu hızla başa çıkmak için tasarlanmıştır." },
              { id: "C", text: "Verinin türleridir." },
              { id: "D", text: "Verinin maliyetidir." },
            ],
            correct: "B",
            explanation:
              "Büyük Veri (Big Data) kavramı; 2001'de analist Doug Laney tarafından 3V (Volume, Velocity, Variety) olarak tanımlanmış, sonradan 5V'ye (Veracity, Value eklenerek) genişletilmiştir. 5V Detayları: (1) Volume (Hacim) — verinin BOYUTU; gigabaytlardan terabaytlar, petabaytlar, hatta zettabaytlara. Örnek: Facebook günde 4 PB veri üretir, Google günde 20 PB işler, CERN deneyleri saniyede TB'lar üretir. Geleneksel veritabanları bu hacimle başa çıkamaz; dağıtık sistemler gerekir. (2) Velocity (Hız) — verinin ÜRETİLME, İŞLENME ve İLETİLME HIZI; gerçek zamanlı (real-time) veri akışları. Örnekler: borsada saniyede milyonlarca işlem, IoT sensörlerden sürekli akış, sosyal medya tweet'leri, kredi kartı işlemleri. Apache Kafka (mesaj kuyruğu), Apache Storm/Flink/Spark Streaming (akış işleme) bu hızı yönetir. (3) Variety (Çeşitlilik) — verinin TÜRÜ ve KAYNAĞI; yapılandırılmış (tablolar), yarı yapılandırılmış (JSON, XML), yapılandırılmamış (video, ses, resim, metin). Örnek: bir banka müşteri profili için tablolar (yapılandırılmış), e-postalar (yarı), telefon kayıtları (yapılandırılmamış) bir arada işler. (4) Veracity (Doğruluk/Güvenilirlik) — verinin KALİTESİ, doğruluğu, güvenilirliği; veri tüm kaynaklardan gelir, bazıları gürültülü, eksik, tutarsız olabilir. 'Garbage in, garbage out' problemi; veri temizleme (data cleansing), veri kalitesi yönetimi kritiktir. (5) Value (Değer) — veriden çıkarılan ANLAMLI içgörü, iş değeri; veri tek başına değildir, ondan elde edilen analiz, tahmin, optimizasyon değerlidir. Modern Eklemeler: Variability (Değişkenlik), Visualization (Görselleştirme). Büyük Veri Teknolojileri: Apache Hadoop (HDFS + MapReduce — toplu işleme), Apache Spark (in-memory, daha hızlı), Apache Kafka (mesaj/akış), Apache Cassandra (NoSQL DB), Elastic Stack (ELK — log analizi), Snowflake/Databricks (modern data platforms). Finansta Uygulamalar: yüksek frekanslı işlem (HFT), sahtekarlık tespiti, kredi notlaması, müşteri segmentasyonu, regülasyon uyumu.",
          },
          {
            text: "Blok Zincir (Blockchain) teknolojisi için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Blok zincir merkezi bir veri tabanıdır." },
              { id: "B", text: "DAĞITIK DEFTER (distributed ledger) teknolojisidir; verilerin kriptografik olarak bağlı bloklar halinde saklanması, blokların ağdaki tüm node'lar arasında senkronize tutulması; merkezi otorite gerektirmez; konsensüs mekanizmaları (Proof of Work, Proof of Stake) ile mutabakat sağlar; veriler değiştirilemez (immutability)." },
              { id: "C", text: "Blok zincir yalnızca Bitcoin için kullanılır." },
              { id: "D", text: "Blok zincir bir programlama dilidir." },
            ],
            correct: "B",
            explanation:
              "Blok Zincir (Blockchain); Satoshi Nakamoto tarafından 2008'de Bitcoin makalesinde tanıtılan, dağıtık defter teknolojisinin (DLT) en yaygın uygulamasıdır. Temel Mantık: Veriler 'BLOK' adı verilen birimlerde saklanır; her blok, bir önceki bloğun kriptografik özetini (hash) içerir; bu sayede 'zincir' oluşur ve geçmişteki bir bloğu değiştirmek imkânsızlaşır (immutability). Ana Özellikler: (1) Dağıtıklık (Distributed) — ağdaki TÜM node'larda (binlerce bilgisayar) tam kopya saklanır; merkezi sunucu yok, (2) Değişmezlik (Immutability) — bir kez yazılan veri değiştirilemez; geçmişi değiştirmek için ağdaki çoğunluk node'ları kontrol altına almak gerekir (%51 saldırı), (3) Şeffaflık (Transparency) — public blockchain'lerde tüm işlemler herkese açıktır (anonim ama izlenebilir), (4) Kriptografi — Hash fonksiyonları (SHA-256), dijital imzalar (asymetric cryptography - public/private key), Merkle Trees, (5) Konsensüs Mekanizmaları — node'lar arasında mutabakat sağlama: PoW (Proof of Work — Bitcoin, enerji yoğun), PoS (Proof of Stake — Ethereum 2.0, daha verimli), PBFT, DPoS, PoA, (6) Akıllı Sözleşmeler (Smart Contracts) — koşullara göre otomatik çalışan kod parçaları (Ethereum). Ağ Türleri: (1) Public (Açık) — herkese açık (Bitcoin, Ethereum), izin gerektirmez (permissionless), (2) Private (Özel) — bir organizasyon içinde (Hyperledger Fabric), izinli (permissioned), (3) Consortium (Konsorsiyum) — birden fazla organizasyon (banka konsorsiyumu R3 Corda), (4) Hybrid — public + private karışımı. Kullanım Alanları: (a) Kripto Para — Bitcoin, Ethereum, vs., (b) Tedarik Zinciri — IBM Food Trust, malların izlenebilirliği, (c) Dijital Kimlik — Self-Sovereign Identity, (d) Sağlık Kayıtları — MediBlock, hasta verilerinin güvenli paylaşımı, (e) Oy Verme — şeffaf seçim sistemleri, (f) Tapu Kayıtları — gayrimenkul tapuları, (g) Sermaye Piyasası — Takas-Saklama (DLT), tahvil ihracı, oy hakkı yönetimi, (h) NFT — Non-Fungible Tokens — dijital sanat, (i) DeFi (Decentralized Finance) — merkezi olmayan finans. Sınırlamalar: ölçeklenebilirlik (Bitcoin 7 tps, VISA 24.000 tps), enerji tüketimi (PoW), yasal belirsizlik, hız.",
          },
          {
            text: "Robotik Süreç Otomasyonu (RPA - Robotic Process Automation) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "RPA fiziksel robotlardır." },
              { id: "B", text: "Kural tabanlı, tekrar eden insan görevlerinin YAZILIM ROBOTLARIYLA (botlar) otomatize edilmesidir; UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate gibi araçlarla; faktura işleme, veri girişi, raporlama, müşteri kayıt oluşturma gibi işlemleri yapar; insanların yerine geçmez, sıkıcı işleri otomatize eder." },
              { id: "C", text: "RPA yalnızca büyük üretim tesisleri için kullanılır." },
              { id: "D", text: "RPA gelişmiş yapay zekâdır." },
            ],
            correct: "B",
            explanation:
              "Robotik Süreç Otomasyonu (Robotic Process Automation - RPA); 2010'lardan sonra hızla yaygınlaşan, kural tabanlı işleri YAZILIM robotlarıyla (botlar) otomatize eden bir teknolojidir. Adı 'robotik' olsa da FİZİKSEL robotlar DEĞİL; sadece bilgisayar yazılımlarıdır; bir insan gibi bilgisayarda çalışır — fare hareketleri, klavye girişleri, tıklamalar, kopyala-yapıştır işlemleri yapar. Nasıl Çalışır? RPA botu, var olan uygulamaları ve sistemleri (ERP, CRM, web sitesi, Excel, e-posta) bir insan gibi kullanır; arayüzü taklit eder. Tipik RPA Senaryoları: (1) Fatura İşleme — gelen faturayı PDF'ten oku, ERP'ye gir, onay akışına gönder, (2) Müşteri Kayıt — web formdan veri al, CRM'e yaz, hoşgeldin e-postası gönder, (3) Raporlama — birden fazla sistemden veri çek, Excel'de birleştir, e-posta ile gönder, (4) Bordro İşlemleri — çalışan saatlerini topla, hesapla, bordro sistemine yaz, (5) IT Servis Talepleri — şifre sıfırlama, hesap açma, izin verme, (6) Bankacılık — para transferi onayları, hesap kontrolü, KYC kontrolü, (7) Sigorta — talep işleme, poliçe yenileme, (8) Tedarik Zinciri — sipariş işleme, stok güncelleme. Önde Gelen RPA Araçları: (1) UiPath — pazar lideri, görsel tasarımcı, geniş ekosistem, (2) Automation Anywhere — kurumsal kullanım, (3) Blue Prism — İngiltere kökenli, finansal hizmetler güçlü, (4) Microsoft Power Automate — Office 365 entegrasyonu, (5) WorkFusion — AI entegre RPA. RPA vs AI: (a) RPA — kural tabanlı, deterministic, mevcut işi otomatize eder, (b) AI — öğrenir, karar verir, yeni iş üretir, (c) IPA (Intelligent Process Automation) — RPA + AI; modern trend. RPA'nın Faydaları: (1) Hız — bot 24/7 çalışır, insandan 5-10x hızlı, (2) Doğruluk — yorulmaz, hata yapmaz, (3) Maliyet — uzun vadede ucuz, (4) Çalışan Memnuniyeti — sıkıcı işlerden kurtulma, (5) Ölçeklenebilirlik — peak dönemlerde bot sayısı artırılır, (6) Hızlı ROI — 6-12 ay. Sınırlamaları: değişiklikler bot'u bozar (UI değişikliği), karmaşık kararlar veremez, sürekli bakım gerektirir.",
          },
          {
            text: "Modern bulut bilişimde 'dağıtım modelleri' arasında aşağıdakilerden hangisi YOKTUR?",
            options: [
              { id: "A", text: "Public Cloud (Kamu Bulutu) — AWS, Azure, GCP gibi herkese açık" },
              { id: "B", text: "Private Cloud (Özel Bulut) — tek organizasyona özel" },
              { id: "C", text: "Hybrid Cloud (Hibrit Bulut) — public ve private birleşimi" },
              { id: "D", text: "Restricted Cloud (Kısıtlı Bulut) — yalnızca devlet kurumları için" },
            ],
            correct: "D",
            explanation:
              "Bulut Bilişim Dağıtım Modelleri (Cloud Deployment Models); NIST (National Institute of Standards and Technology) tarafından standartlaştırılmış 4 ana modeldir. 'Restricted Cloud' standart bir model DEĞİLDİR; uydurma bir terimdir. Doğru 4 model: (1) Public Cloud (Kamu Bulutu) — En yaygın model. Bulut sağlayıcı (AWS, Microsoft Azure, Google Cloud Platform - GCP, Alibaba Cloud, Oracle Cloud) kaynaklarını internet üzerinden tüm müşterilerine sunar. Çok kiracılı (multi-tenant) yapı; donanım paylaşılır ama izolasyon vardır. Avantajları: ölçeklenebilirlik, düşük başlangıç maliyeti, hızlı dağıtım, sağlayıcı yönetir. Dezavantajları: veri kontrolü düşük, güvenlik endişeleri, regülasyon uyumu zor olabilir, (2) Private Cloud (Özel Bulut) — Tek bir organizasyona ait bulut altyapısı; ya kendi veri merkezinde (on-premise) ya da sağlayıcı tarafından yönetilen ama tek müşteriye atanmış (hosted private). Tek kiracılı (single-tenant). Avantajları: tam kontrol, yüksek güvenlik, regülasyon uyumu, özel yapılandırma. Dezavantajları: yüksek başlangıç maliyeti, ölçeklenebilirlik sınırlı, yönetim sorumluluğu. Tipik kullanıcılar: bankalar, savunma sanayi, sağlık kuruluşları, hassas devlet kurumları. Türkiye'de Akbank, Garanti BBVA gibi bankalar büyük private cloud'lar kullanır. (3) Community Cloud (Topluluk Bulutu) — Benzer ihtiyaçlara, regülasyona, güvenlik gereksinimlerine sahip birden fazla organizasyon tarafından paylaşılan bulut altyapısı. Avantajları: maliyet paylaşımı, ortak uyum gereksinimleri. Örnek kullanıcılar: hükümet kuruluşları (GovCloud), araştırma enstitüleri, eğitim kurumları. AWS GovCloud, Azure Government bu modele örnektir. (4) Hybrid Cloud (Hibrit Bulut) — Public + Private (veya Community) bulut karışımı; iki ortam arasında uygulamalar ve veri taşınabilir. Avantajları: hassas veriyi private'ta tut, ölçeklenmeyi public'te yap, esneklik. En yaygın kurumsal model. Modern Eklemeler: (a) Multi-Cloud — birden fazla public cloud sağlayıcı kullanma (örn. AWS + Azure birlikte; sağlayıcı bağımlılığı azaltma), (b) Distributed Cloud — bulut hizmetleri farklı coğrafi konumlara dağıtılır.",
          },
        ],
      },
      // ──────────── Ders 3: BS Operasyonları — ITIL Hizmet Yönetimi ────────────
      {
        id: "m1022-l3",
        title: "BS Operasyonları — ITIL Hizmet Yönetimi ve Olay/Problem Yönetimi",
        duration: "10 dk",
        summary: {
          title: "BS Hizmet Yönetimi (ITSM)",
          intro:
            "BS Hizmet Yönetimi (IT Service Management - ITSM); bilgi teknolojilerinin organizasyona değer üretecek hizmetler olarak yönetilmesidir. ITIL (Information Technology Infrastructure Library) ITSM'in dünya çapında en yaygın çerçevesidir. Temel ITSM süreçleri: Hizmet Masası (tek temas noktası), Olay Yönetimi (incident management - hızlı kurtarma), Problem Yönetimi (kök neden analizi), Değişiklik Yönetimi, Sürüm Yönetimi, Yama Yönetimi, Konfigürasyon Yönetimi, SLA/OLA Yönetimi, Kaynak Yönetimi.",
          sections: [
            {
              heading: "Hizmet Masası, Olay ve Problem Yönetimi",
              icon: "shield",
              items: [
                {
                  strong: "Hizmet Masası (Service Desk):",
                  text: "Kullanıcılarla BS arasındaki TEK TEMAS NOKTASI (single point of contact); kullanıcı sorunlarını ve isteklerini kaydeder, ilk seviye destek sunar, daha karmaşık sorunları üst seviyelere yönlendirir (escalation); seviyeler: L1 (front-line), L2 (uzman), L3 (uzman teknik).",
                },
                {
                  strong: "Hizmet Masası Araçları:",
                  text: "Ticket yönetim sistemleri (JIRA Service Management, ServiceNow, Zendesk, Freshservice, BMC Remedy), bilgi tabanı (knowledge base), self-servis portal, otomatik yönlendirme, SLA izleme.",
                },
                {
                  strong: "Olay Yönetimi (Incident Management):",
                  text: "Bilgi sistemlerinde planlanmamış kesintilerin (incident) HIZLI ÇÖZÜMÜNE odaklanır; amaç servisi normal duruma döndürmektir, kök neden analizi değildir. Beş Adım: 1) Tespit, 2) Sınıflandırma ve Önceliklendirme, 3) Araştırma ve Teşhis, 4) Çözme ve Kurtarma, 5) Kapatma.",
                },
                {
                  strong: "Problem Yönetimi (Problem Management):",
                  text: "Olayların KÖK NEDENİNİ bulmaya ve sorunu kalıcı olarak çözmeye odaklanır; aynı sorunun tekrarlamasını önler. Tekniği: 5 Why, Fishbone (Ishikawa), Pareto analizi, Trend Analizi; çıktısı: Bilinen Hata (Known Error) ve Geçici Çözüm (Workaround).",
                },
                {
                  strong: "Olay ve Problem Farkı:",
                  text: "Olay (Incident) — Tek bir kesinti olayı; hızlı çözüm hedef; örn. 'Email çalışmıyor'. Problem — Olayın altındaki kök neden; kalıcı çözüm hedef; örn. 'Email sunucusunun disk dolma sorunu'. Bir problem birden fazla olayı tetikleyebilir.",
                },
              ],
            },
            {
              heading: "Değişiklik, Sürüm, Yama ve Konfigürasyon Yönetimi",
              icon: "trend",
              items: [
                {
                  strong: "Değişiklik Yönetimi (Change Management):",
                  text: "BT ortamındaki her değişikliğin kontrollü, onaylı, dokümante şekilde yapılması süreci; Değişiklik Talep Formu (RFC - Request for Change), Etki Analizi, Onay (Change Advisory Board - CAB), Uygulama, Doğrulama, Kapatma adımları.",
                },
                {
                  strong: "Değişiklik Türleri:",
                  text: "Standart (Standard) — düşük risk, ön onaylı (örn. parola sıfırlama); Normal — değerlendirme ve onay gerektirir; Acil (Emergency) — kritik sorun için hızlı süreç (Emergency CAB - ECAB).",
                },
                {
                  strong: "Sürüm Yönetimi (Release Management):",
                  text: "Yazılım ve sistem güncellemelerinin paketlenmesi, test edilmesi ve dağıtılması süreci; major release (büyük değişiklik), minor release (küçük), emergency release (acil yama); modern: Continuous Deployment (CI/CD).",
                },
                {
                  strong: "Yama Yönetimi (Patch Management):",
                  text: "Yazılım güvenlik açıklarını kapatan yamaların (patches) düzenli ve kontrollü uygulanması; süreç: Tespit → Önceliklendirme (kritiklik) → Test → Uygulama → Doğrulama; Patch Tuesday (Microsoft her ay ikinci Salı).",
                },
                {
                  strong: "Konfigürasyon Yönetimi (Configuration Management):",
                  text: "BT varlıklarının (Configuration Items - CI) ve bunların özelliklerinin merkezi olarak izlenmesi; CMDB (Configuration Management Database) merkezi veri tabanıdır; CI ilişkileri (impact analysis) için kritik. SLA = dış paydaş, OLA = iç paydaş anlaşmaları.",
                },
              ],
            },
          ],
          tip: "ITIL = ITSM dünya standardı. Hizmet Masası = TEK temas noktası, L1-L2-L3 seviyeler. Olay (hızlı çöz) ≠ Problem (kök nedeni bul). Değişiklik 3 tür: Standart-Normal-Acil. CAB = Change Advisory Board onaylar. CMDB = BT varlık veritabanı. SLA (dış müşteri) vs OLA (iç birim) anlaşmaları. Patch Tuesday = MS aylık güvenlik yamaları.",
          kavramlar: [
            { terim: "Hizmet Masası (Service Desk)", tanim: "IT ile son kullanıcı arasındaki tek temas noktası; olayları kayıt altına alır, L1 çözüm dener, gerekirse L2/L3'e yönlendirir." },
            { terim: "Olay Yönetimi (Incident Management)", tanim: "Hizmet kesintisini veya bozulmayı mümkün olan en kısa sürede normal işleyişe döndürmeyi amaçlayan ITIL süreci; kök neden araştırması değil." },
            { terim: "Problem Yönetimi (Problem Management)", tanim: "Olayların kök nedenini belirleyerek tekrarlayan kesintileri önlemeye odaklanan ITIL süreci; bilinen hata (known error) kaydını yönetir." },
            { terim: "CAB (Değişiklik Danışma Kurulu)", tanim: "Önerilen değişiklikleri değerlendiren ve onaylayan çapraz fonksiyonel komite; normal ve majör değişiklikler CAB onayına tabidir." },
            { terim: "CMDB (Yapılandırma Yönetim Veritabanı)", tanim: "IT altyapısındaki yapılandırma öğelerini (CI) ve aralarındaki ilişkileri kaydeden merkezi veritabanı; değişiklik ve olay yönetiminin temelidir." },
            { terim: "SLA vs OLA", tanim: "SLA (Service Level Agreement) = IT ve dış müşteri arasındaki hizmet seviyesi anlaşması; OLA (Operational Level Agreement) = IT'nin iç birimlerle anlaşması." },
            { terim: "Acil Değişiklik", tanim: "Kritik bir arızayı gidermek için CAB sürecini beklemeden hızlandırılmış prosedürle onaylanan ve uygulanan ITIL değişiklik türü." },
          ],
          dikkatlar: [
            "Olay ≠ Problem: olay hızlı çözüm (hizmet restore), problem kök neden analizi (tekrarlamayı engelleme).",
            "Değişiklik 3 türü: Standart (önceden onaylı, rutin) → Normal (CAB incelemesi) → Acil (ECAB hızlandırılmış onay).",
            "CMDB bir veritabanı değil; yapılandırma öğelerini ve ilişkilerini gösteren kayıt sistemi — değişiklik etkisini analiz etmede kritik.",
            "SLA dışarıya (müşteri), OLA içeriye (departman), UC (Underpinning Contract) dış tedarikçiye — üç katman birbirini destekler.",
            "L1: hizmet masası ilk yanıt; L2: uzman teknik destek; L3: üretici/mühendis — yükseltme süreci otomatik tetiklenmelidir.",
          ],
        },
        questions: [
          {
            text: "ITIL'de 'Olay Yönetimi' (Incident Management) ile 'Problem Yönetimi' (Problem Management) arasındaki temel fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki süreç aynıdır." },
              { id: "B", text: "Olay Yönetimi: Tek bir kesinti olayının HIZLI ÇÖZÜMÜNE odaklanır, amaç servisi normal duruma döndürmektir (örn. 'Email çalışmıyor', restart ile çöz); Problem Yönetimi: Olayların KÖK NEDENİNİ bulup KALICI çözmeye odaklanır, aynı sorunun tekrarını önler (örn. 'Email sunucusunun disk dolma sorununu kalıcı çöz')." },
              { id: "C", text: "Olay yalnızca yazılım, problem yalnızca donanım için." },
              { id: "D", text: "Problem sadece üst yönetim tarafından çözülür." },
            ],
            correct: "B",
            explanation:
              "Olay (Incident) ve Problem; ITIL'de iki ayrı süreç ve iki ayrı tanım olmasına rağmen sık karıştırılır. Anlamak için iyi bir benzetme: bir araba lastik patladığında — Olay: yedek lastiği takıp yola devam etmek (servisi geri getirme); Problem: o yolda lastik patladığını çözmek için yola çıkmadan önce tehlikeli noktayı bulmak. (1) Olay Yönetimi (Incident Management) — Tanım: Bir BT hizmetinin planlanmamış kesintisi veya kalitesinin düşmesi 'olaydır'. Amaç: Olayın etkilediği hizmeti EN KISA SÜREDE normal çalışma seviyesine döndürmek. Kök nedenle ilgilenmez; geçici çözüm (workaround) bile olabilir. Örnek: 'Email sistemim çalışmıyor' → restart yapıldı, çalıştı → olay kapandı. Beş Adım: (a) Tespit/Kayıt — kullanıcı veya izleme sistemi bildirir, (b) Sınıflandırma ve Önceliklendirme — etki × aciliyet matrisi; Critical/High/Medium/Low, (c) Araştırma ve Teşhis — bilgi tabanını ara, benzer olaylara bak, sorunu bul, (d) Çözüm ve Kurtarma — düzeltici eylem (restart, config değişikliği, geçici çözüm), (e) Kapatma — kullanıcı onayı, kayıt güncellenir. Ölçütler: MTTR (Mean Time To Repair), SLA uyumu, ilk çağrı çözüm oranı. (2) Problem Yönetimi (Problem Management) — Tanım: Bir veya birden çok olayın KÖK NEDENİ. Amaç: Olayların tekrarını önlemek; sorunu kalıcı olarak çözmek. Yaklaşım: Reaktif (yaşanan olaylardan sonra) ve Proaktif (henüz olay olmadan riskleri tespit). Tipik Süreç: (a) Tespit — tekrarlayan olay paterni veya majör olay sonrası, (b) Kategorize ve Önceliklendir, (c) Kök Neden Analizi (RCA - Root Cause Analysis) — 5 Why tekniği, Fishbone/Ishikawa, Pareto analizi, Trend analizi, (d) Geçici Çözüm Bul (Workaround) — kalıcı çözüm gelene kadar, (e) Bilinen Hata Kaydı (Known Error) — KEDB'ye kaydet, (f) Kalıcı Çözüm — değişiklik isteği aç (RFC), Change Management'a gönder. Bir Problem birden fazla Olayı tetikleyebilir; bir Olay sürekli tekrarlıyorsa Problem'e dönüştürülmelidir. Örnek: aynı sunucuda her hafta disk dolma olayı → Problem ayarla → kök neden: log rotasyon yok → kalıcı çözüm: log rotation kurulumu.",
          },
          {
            text: "ITIL Değişiklik Yönetiminde 'değişiklik türleri' aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "Yalnızca bir tür değişiklik vardır." },
              { id: "B", text: "Üç tür değişiklik vardır: (1) Standart (Standard) — düşük risk, önceden onaylı, otomatik prosedür (örn. parola sıfırlama, yazılım kurulumu); (2) Normal — değerlendirme ve onay gerektirir, Change Advisory Board (CAB) inceler; (3) Acil (Emergency) — kritik bir sorun için hızlı süreç, Emergency CAB (ECAB) hızlı karar verir." },
              { id: "C", text: "Yalnızca yazılım ve donanım değişiklikleri." },
              { id: "D", text: "Yalnızca yıllık değişiklikler." },
            ],
            correct: "B",
            explanation:
              "ITIL Değişiklik Yönetimi (Change Management) Süreci; BT ortamındaki değişikliklerin organizasyon ve hizmetler üzerindeki riskini minimize etmek için kontrollü, onaylı ve dokümante şekilde yapılmasını sağlar. Üç Temel Değişiklik Türü: (1) Standart Değişiklik (Standard Change) — Özellikleri: Düşük risk, tekrarlayan, daha önce yaşanmış ve güvenle uygulanabileceği kanıtlanmış değişiklikler. Önceden onaylanmıştır; her seferinde CAB onayı gerekmez. Standart prosedüre göre uygulanır. Örnekler: Parola sıfırlama, yeni kullanıcı hesabı oluşturma, standart yazılım kurulumu (Office gibi), yazıcı ekleme, e-posta hesap oluşturma, VPN erişimi açma. Avantajı: Hızlı, otomatize, low-touch. (2) Normal Değişiklik (Normal Change) — Özellikleri: Standart olmayan değişiklikler; risk değerlendirmesi ve onay gerektirir. Süreç: (a) RFC (Request for Change) sunulur, (b) Etki Analizi — hangi sistemler, kullanıcılar, hizmetler etkilenir? (c) Risk Değerlendirmesi — başarısızlık olasılığı, etkisi, geri alma planı, (d) CAB Onayı — Change Advisory Board (BT yöneticileri, departman temsilcileri) toplanır, değişikliği değerlendirir ve onaylar, (e) Pilotaj/Test — mümkünse test ortamında, (f) Planlı Uygulama — bakım penceresinde, (g) Doğrulama — değişiklik başarılı mı? geri alma gerekli mi? (h) Kapatma — dokümante et. Örnekler: Yeni bir sunucu kurulumu, ana bir uygulamanın yükseltilmesi, ağ yapılandırma değişikliği. (3) Acil Değişiklik (Emergency Change) — Özellikleri: Kritik bir sorun veya güvenlik açığı nedeniyle ACİL olarak yapılması gereken değişiklikler. Standart sürecin tüm aşamaları yapılamaz ama yine de kontrol vardır. Süreç: (a) Emergency RFC — acil değişiklik formu, (b) Emergency CAB (ECAB) — küçük, hızlı toplanabilen karar verici grup; telefon/Zoom üzerinden toplanır, (c) Hızlı Karar — saatler içinde, (d) Uygulama — bekletmeden, (e) Sonradan Dokümante — değişiklik sonrası tam dokümantasyon yapılır. Örnekler: Kritik güvenlik açığının zero-day yaması, üretim sisteminin acil patlamasında çare, regülasyon değişikliğinin acil uygulanması. ITIL 4'te bu kavramlar 'Change Enablement' olarak güncellenmiştir. CAB'in modern karşılığı 'Change Authority' rolüdür.",
          },
          {
            text: "ITIL'de 'Hizmet Masası' (Service Desk) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Yalnızca yazılım geliştiriciler için bir teknik birimdir." },
              { id: "B", text: "Kullanıcılarla BS arasındaki TEK TEMAS NOKTASIDIR (Single Point of Contact - SPOC); kullanıcı sorunlarını ve isteklerini kaydeder, ilk seviye destek sunar; daha karmaşık sorunları üst seviyelere yönlendirir (escalation); seviyeler: L1 (front-line, basit sorunlar), L2 (uzman, orta seviye), L3 (uzman teknik, en karmaşık)." },
              { id: "C", text: "Yalnızca üst yönetim için danışmanlık verir." },
              { id: "D", text: "Hizmet masası yalnızca telefonla çalışır." },
            ],
            correct: "B",
            explanation:
              "Hizmet Masası (Service Desk); ITIL ve ITSM çerçevesinin merkezi unsurudur; modern BT organizasyonlarının yüzüdür. Temel Felsefe: Kullanıcılar (çalışanlar, müşteriler) BT sorunları olduğunda tek bir yere ulaşır; o yer Hizmet Masası'dır. Bu 'tek temas noktası' (Single Point of Contact - SPOC) yaklaşımı; karmaşık BT ortamlarında kullanıcı deneyimini basitleştirir. Hizmet Masası Görevleri: (1) Ticket Yönetimi — sorunları ve istekleri sisteme kaydetme, takibini yapma, (2) İlk Seviye Destek — bilinen sorunları çözme, kullanıcıyı eğitme, (3) Eskalasyon Yönetimi — daha karmaşık sorunları doğru uzmana yönlendirme, (4) Bilgi Tabanı (Knowledge Base) — sık karşılaşılan sorunlar ve çözümler dokümantasyonu, (5) Self-Servis — kullanıcının kendi başına çözebilmesi için portallar, (6) Bildirim — kullanıcıları çözüm durumu hakkında bilgilendirme, (7) Memnuniyet Anketleri — hizmet kalitesini ölçme. Destek Seviyeleri: (a) L0 (Self-Service) — kullanıcının kendi yardımı; FAQ, knowledge base, otomatik şifre sıfırlama portalı, chatbot. Modern AI destekli sistemler %30-40 oranında L0'da çözüm sağlar, (b) L1 (Front-line / Tier 1) — telefon, e-posta, chat ile ilk destek; rutin sorunlar (parola sıfırlama, yazılım kurulumu, basit sorunlar); %60-70 oranda L1'de çözülmesi hedef, (c) L2 (Specialized / Tier 2) — daha derin teknik bilgi gerektiren sorunlar; sistem yöneticileri, ağ uzmanları, uygulama uzmanları; daha az ticket ama daha karmaşık, (d) L3 (Expert / Tier 3) — en yüksek uzmanlık; ürün geliştiriciler, mimarisi, vendor desteği; nadir ama kritik sorunlar, (e) L4 (Vendor Support) — gerektiğinde dış üretici desteği. Hizmet Masası Türleri: (1) Yerel Hizmet Masası — küçük şirket, tek konum, (2) Merkezi Hizmet Masası — büyük şirket, tek bir merkezi nokta, (3) Sanal Hizmet Masası — coğrafi olarak dağıtık ama tek bir mantıksal yapı, 'follow the sun' (24/7 destek), (4) Self-Service Portal — kullanıcının doğrudan etkileşim kurabildiği web platformu. Yazılım Araçları: ServiceNow (pazar lideri), Atlassian Jira Service Management, Zendesk, Freshservice, BMC Remedy, ManageEngine ServiceDesk Plus, SolarWinds Service Desk.",
          },
          {
            text: "SLA (Service Level Agreement) ile OLA (Operational Level Agreement) arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki kavram aynıdır." },
              { id: "B", text: "SLA: BT hizmet sağlayıcı ile DIŞ müşteri (veya iş birimi/son kullanıcı) arasındaki, hizmet seviyesini garanti eden YAZILI ANLAŞMA (örn. %99.9 uptime, 1 saatte yanıt); OLA: BT departmanı içindeki birimler arasında, SLA'nın yerine getirilmesini destekleyen İÇ MUTABAKAT (örn. ağ ekibinin sunucu ekibine verdiği destek)." },
              { id: "C", text: "SLA yalnızca yazılım, OLA yalnızca donanım için." },
              { id: "D", text: "OLA yalnızca yıllık olarak imzalanır." },
            ],
            correct: "B",
            explanation:
              "BT Hizmet Yönetiminde Anlaşma Türleri; hizmetlerin nasıl sunulacağını ve kalite seviyelerini formal olarak belirler. Üç temel anlaşma türü vardır ve hiyerarşik bir yapı oluşturur: (1) SLA (Service Level Agreement - Hizmet Seviyesi Anlaşması) — BT hizmet sağlayıcı ile DIŞ taraf (müşteri, iş birimi, son kullanıcı, dış müşteri) arasındaki yazılı anlaşma. Hizmet seviyelerini, kalite metriklerini, sorumlulukları, cezaları tanımlar. Tipik SLA Metrikleri: (a) Erişilebilirlik (Availability) — %99.9 (yıllık 8.76 saat downtime), %99.99 (52 dakika); (b) Yanıt Süresi (Response Time) — incident'e ne kadar sürede yanıt verilecek; (c) Çözüm Süresi (Resolution Time) — kategoriye göre (Critical 4 saat, High 8 saat, Medium 24 saat, Low 5 gün); (d) Performans (Performance) — sayfa yükleme süresi, sorgu yanıt süresi; (e) İlk Çağrı Çözüm Oranı; (f) Müşteri Memnuniyet Skoru. Örnek SLA: Banka ile internet bankacılığı sağlayıcısı arasında — '%99.95 uptime garanti, ihlalde aylık ücretten %10 indirim'. (2) OLA (Operational Level Agreement - Operasyonel Seviye Anlaşması) — Aynı BT organizasyonunun İÇİNDEKİ farklı ekipler/birimler arasındaki anlaşma; SLA'nın yerine getirilmesini destekler. Görünmez ama kritik. Örnek: Müşteri SLA'sında '4 saatte sorun çözümü' garantisi varsa, BT içinde: Hizmet Masası ekibi, Sistem ekibi ile OLA imzalar — 'Sistem ekibi 30 dakika içinde teknik yanıt verecek'; Sistem ekibi, Ağ ekibi ile başka bir OLA imzalar; bu zincirleme tüm parçaların çalışması ile son kullanıcıya 4 saat SLA tutulur. (3) UC / UPC (Underpinning Contract - Dayanak Sözleşme) — BT sağlayıcı ile DIŞ tedarikçi/satıcı arasındaki sözleşme. Örnek: ABC Bank, AWS ile bulut sözleşmesi (UC). UC, SLA'yı destekler. Hiyerarşi: SLA (müşteriye söz) → OLA (iç birimler arası) → UC (dış tedarikçilerle) — bu üçü uyumlu olmalıdır. Aksi takdirde: SLA: 'Müşteriye 4 saatte çözüm'. Tedarikçi UC: 'Vendor'dan 5 saatte yanıt' — SLA tutulamaz!. SLA Yönetimi: Critical Service Failure (CSF), Service Improvement Plan (SIP), Service Review Meeting. Gerçek dünyada Türkiye bankaları AWS, Microsoft, Oracle ile UC, kendi BT içinde OLA, müşterilere SLA imzalar.",
          },
          {
            text: "Yama Yönetimi (Patch Management) sürecinde 'Patch Tuesday' kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Tüm sistemleri Salı günleri kapatmak demektir." },
              { id: "B", text: "MICROSOFT'un her ayın İKİNCİ SALI gününde Windows ve diğer ürünleri için güvenlik yamalarını yayınladığı geleneksel uygulamadır; BT yöneticileri bu yamaları test edip kontrollü olarak ortamlarına uygularlar; modern yama yönetiminin önemli takvim olayıdır." },
              { id: "C", text: "Yalnızca yazılım geliştiricilerin çalıştığı gündür." },
              { id: "D", text: "Salı günleri internet erişimi yasaklandığı süreçtir." },
            ],
            correct: "B",
            explanation:
              "Patch Tuesday (Yama Salısı); Microsoft'un 2003'ten beri uyguladığı, BT dünyasının önemli bir geleneğidir. Detaylar: Microsoft, her ayın 2. Salı'sında (genelde Pasifik Saati 10 AM'de) Windows, Office, Edge, Exchange, SQL Server gibi ürünleri için TOPLU güvenlik yamaları, performans güncellemeleri ve yeni özellik güncellemelerini yayınlar. Neden Salı? Hafta başı (Pazartesi) güncellemeler dağıtmak BT ekiplerinin haftaya sorunla başlamasına neden olur; hafta sonu yakın değil; ortada en uygun gün Salı. Patch Tuesday Yamaları: (1) Kritik (Critical) — uzaktan kod yürütme (RCE) açıkları, hemen uygulanmalı, (2) Önemli (Important) — yetki yükseltme, bilgi sızıntısı, (3) Orta/Düşük (Moderate/Low) — daha az kritik. CVE (Common Vulnerabilities and Exposures) numaralarıyla tanımlanır. Tipik Bir Patch Tuesday: 30-150 arası güvenlik açığı kapatılır; ayda yüzlerce CVE. BT Ekipleri için Süreç: (1) Çarşamba — yamaları indir, gözden geçir, kritiklik değerlendir, (2) Hafta Sonuna Kadar — test ortamında deneyin, sorun var mı kontrol et, (3) İkinci Hafta — pilot grupta uygula (BT departmanı kendi), (4) Üçüncü-Dördüncü Hafta — tüm üretim ortamına yay. Otomatik vs Manuel: Küçük şirketler Windows Update'i otomatik açık tutabilir; büyük şirketler kontrollü dağıtım kullanır (WSUS - Windows Server Update Services, SCCM, Intune). Patch Tuesday'in Önemi: Microsoft'un öngörülebilir takvimi BT planlamasını kolaylaştırır; ancak siber suçlular da bunu kullanır: 'Exploit Wednesday' diye bir kavram vardır — yamaların yayınlandığı Salı'dan sonraki Çarşamba günü siber suçlular yamaları analiz edip henüz güncellemeyen sistemleri saldırır. Bu nedenle hızlı yama uygulaması kritiktir. Diğer Üreticiler: Adobe (her ayın 2. Salısı, Microsoft ile aynı gün), Oracle (üç aylık döngü), Cisco (her ayın 2. ve 4. Çarşambası), Apple (düzensiz). Zero-Day Yamaları: kritik bir açık keşfedildiğinde Patch Tuesday beklenmez, 'out-of-band' (band-dışı) yama yayınlanır.",
          },
        ],
      },
      // ──────────── Ders 4: Yedekleme, Kapasite ve Performans Yönetimi ────────────
      {
        id: "m1022-l4",
        title: "Yedekleme, Kapasite, Performans ve Kullanılabilirlik Yönetimi",
        duration: "10 dk",
        summary: {
          title: "Yedekleme, Kapasite ve Performans Yönetimi",
          intro:
            "BS Operasyonlarının kritik unsurları yedekleme, kapasite ve performans yönetimidir. Yedekleme (Backup) — veri kaybına karşı koruma; türleri: tam, artımlı (incremental), farksal (differential), sentetik tam. 3-2-1 yedekleme kuralı modern standarttır. Kapasite Yönetimi (Capacity Management) — gelecekteki kaynak ihtiyaçlarını öngörmek ve planlamak. Kullanılabilirlik Yönetimi (Availability Management) — hizmetlerin sürekli erişilebilirliğini sağlamak; izleme, etki hesaplama, esneklik. Sürekli İyileştirme (Continuous Improvement) — performans metrikleri ile sürekli optimizasyon.",
          sections: [
            {
              heading: "Yedekleme Türleri ve Teknolojileri",
              icon: "shield",
              items: [
                {
                  strong: "Yedekleme Türleri:",
                  text: "Tam (Full) Yedek — tüm veri yedeklenir, en yavaş ama en güvenli; Artımlı (Incremental) — son yedeklemeden sonra değişenler, hızlı ama geri yüklemede tüm zinciri gerekir; Farksal (Differential) — son tam yedeklemeden sonra değişenler, orta hız; Sentetik Tam (Synthetic Full) — incremental'lardan oluşturulan sanal tam yedek.",
                },
                {
                  strong: "3-2-1 Yedekleme Kuralı:",
                  text: "Modern altın standart: 3 KOPYA verinin (1 orijinal + 2 yedek), 2 FARKLI tipte depolama ortamı (HDD + Tape, veya HDD + Cloud), 1 KOPYA off-site (uzak konum veya bulutta); felaket durumlarına karşı koruma sağlar.",
                },
                {
                  strong: "Yedek Depolama Teknolojileri:",
                  text: "DAS (Direct Attached Storage) — doğrudan sunucuya bağlı; NAS (Network Attached Storage) — ağ üzerinden erişim; SAN (Storage Area Network) — yüksek hızlı blok düzeyi; Bulut Yedek (AWS S3, Azure Blob, Backblaze B2) — uzak konumda; Tape (Manyetik bant) — uzun süre arşiv için ekonomik.",
                },
                {
                  strong: "RAID Türleri:",
                  text: "Redundant Array of Independent Disks; RAID 0 — striping (hız), yedek YOK; RAID 1 — mirroring (aynaya), tam yedek; RAID 5 — distributed parity, 1 disk arızası tolere; RAID 6 — double parity, 2 disk; RAID 10 — RAID 1+0, hız ve güvenlik.",
                },
                {
                  strong: "Yedekleme İşlem Süreci:",
                  text: "Yedekleme politikası (sıklık, retention süresi), yedekleme penceresi (genelde gece), yedek doğrulama (verify), geri yükleme testi (DR drill), retention (saklama süreleri — KVKK, vergi mevzuatı), arşivleme.",
                },
              ],
            },
            {
              heading: "Kapasite, Performans ve Kullanılabilirlik Yönetimi",
              icon: "trend",
              items: [
                {
                  strong: "Kapasite Yönetimi (Capacity Management):",
                  text: "Gelecekteki BT kaynak ihtiyaçlarını (CPU, RAM, disk, bant genişliği) öngörme ve planlama; iş büyümesi ve değişiklikleri dikkate alır; ne çok az (performans sorunu) ne çok fazla (maliyet); İş, Hizmet, Bileşen kapasite yönetimi olarak üç düzey.",
                },
                {
                  strong: "Kapasite Yönetimi Faydaları:",
                  text: "Performans sorunlarının önlenmesi, maliyet optimizasyonu, ölçeklenebilirliğin planlanması, SLA uyumu, kullanıcı memnuniyeti; modern bulutta otomatik ölçeklendirme (auto-scaling) ile birleşir.",
                },
                {
                  strong: "Kullanılabilirlik Yönetimi (Availability Mgmt):",
                  text: "BT hizmetlerinin SLA'da taahhüt edilen seviyede erişilebilir olmasını sağlama; izleme (monitoring), etki hesaplama, analiz, esneklik (resiliency), güvenlik, sürekli iyileştirme; %99.9, %99.99, %99.999 (five nines) hedefleri.",
                },
                {
                  strong: "Erişilebilirlik Hesaplama:",
                  text: "Erişilebilirlik = (Toplam Süre - Downtime) / Toplam Süre × 100; %99 (3.65 gün/yıl downtime), %99.9 (8.76 saat/yıl), %99.99 (52.6 dakika/yıl), %99.999 (5.26 dakika/yıl — five nines, mission critical).",
                },
                {
                  strong: "Sürekli İyileştirme (Continual Service Improvement):",
                  text: "ITIL'de CSI sürekli süreci; Deming Döngüsü (PDCA - Plan-Do-Check-Act); KPI'lar ile performans ölçümü, trend analizi, iyileştirme fırsatları belirleme, yatırım önceliklendirmesi; modern yaklaşım 'Kaizen' kültürü.",
                },
              ],
            },
          ],
          tip: "3-2-1 Yedekleme: 3 kopya + 2 ortam + 1 off-site. Yedek türleri: Tam (yavaş), Incremental (hızlı), Differential (orta). RAID 1 = mirror, RAID 5 = parity. Erişilebilirlik: %99.9 = 8.76 sa/yıl, %99.99 = 52 dk/yıl. Kapasite yönetimi 3 düzey: İş, Hizmet, Bileşen. PDCA = sürekli iyileştirme döngüsü.",
          kavramlar: [
            { terim: "3-2-1 Yedekleme Kuralı", tanim: "En az 3 kopya + 2 farklı ortam türü + 1 tesis dışı (off-site) depolama; silinmiş verilerin kurtarılabilmesini güvence altına alır." },
            { terim: "Artımlı Yedekleme (Incremental Backup)", tanim: "Son yedekten bu yana değişen verileri kayıt altına alan yedekleme; en hızlı alınır ancak geri yükleme en uzundur." },
            { terim: "Diferansiyel Yedekleme (Differential Backup)", tanim: "Son tam yedekten bu yana değişen tüm verileri içeren yedekleme; artımlıdan daha büyük ama geri yükleme daha hızlı." },
            { terim: "RAID 5", tanim: "En az 3 diskten oluşan, parite dağıtımıyla tek disk arızasına toleranslı depolama RAID seviyesi; okuma hızlı, yazma görece yavaş." },
            { terim: "Erişilebilirlik (Availability) SLA", tanim: "%99.9 = yılda 8,76 saat kesinti; %99.99 = 52 dakika; %99.999 = 5 dakika — beş dokuz kritik sistemler için hedef." },
            { terim: "PDCA (Deming Döngüsü)", tanim: "Plan-Do-Check-Act sürekli iyileştirme döngüsü; ITIL ve ISO 27001 dahil pek çok yönetim sisteminin temel yapısı." },
            { terim: "Kapasite Yönetimi", tanim: "IT kaynaklarının iş talebini karşılayacak düzeyde planlanması ve izlenmesi; iş (business), hizmet (service) ve bileşen (component) düzeyinde yürütülür." },
          ],
          dikkatlar: [
            "3-2-1 kuralını tam öğren: 3 kopya, 2 ortam (disk+bant gibi), 1 dışarıda — herhangi biri eksik kural sağlanmaz.",
            "Yedek hiyerarşisi: Tam > Diferansiyel > Artımlı (boyut büyüklüğü); geri yükleme hızı tam > diferansiyel > artımlı.",
            "RAID yedek değildir; RAID sadece disk arızasına karşı korur, silinmiş/üzerine yazılmış veriye karşı korumaz.",
            "Erişilebilirlik hesabı: %99.9 ≈ 8,76 saat yıllık kesinti; %99.99 ≈ 52 dakika; sınav sorusunda hangi seviyenin kaç dakikaya karşılık geldiğini bilin.",
            "PDCA Deming döngüsü: Plan (planla) → Do (uygula) → Check (kontrol et) → Act (düzelt ve standartlaştır).",
          ],
        },
        questions: [
          {
            text: "Modern yedekleme stratejisinde '3-2-1 Kuralı' aşağıdakilerden hangisini ifade eder?",
            options: [
              { id: "A", text: "3 dakikada 2 kez 1 yedekleme yapılması" },
              { id: "B", text: "3 KOPYA verinin tutulması (1 orijinal + 2 yedek), 2 FARKLI tipte depolama ortamında saklanması (örn. HDD + Tape veya HDD + Cloud), 1 KOPYA off-site (uzak konum veya bulutta) bulundurulması; yangın, sel, hırsızlık, ransomware gibi felaketlere karşı koruma sağlar." },
              { id: "C", text: "Yedeğin 3 yıl, 2 ay, 1 günde silinmesi" },
              { id: "D", text: "Sadece 3 dosya yedeklemek" },
            ],
            correct: "B",
            explanation:
              "3-2-1 Yedekleme Kuralı; modern veri koruma stratejisinin altın standardıdır; ABD fotoğrafçısı Peter Krogh tarafından tanıtılmış ve sonradan kurumsal BT standardı haline gelmiştir. Üç Bileşen: (1) '3' = ÜÇ KOPYA Veri — 1 orijinal (üretim verisi) + 2 yedek kopya = toplam 3. Tek yedek yetersizdir çünkü yedek kopyanın kendisi de bozulabilir, silinebilir, hasar görebilir; iki yedek istatistiksel olarak çok daha güvenli, (2) '2' = İKİ FARKLI Tipte Depolama Ortamı — yedekler farklı türde depolama medyalarında olmalı; örn. bir kopya yerel sabit diskte (HDD/SSD), bir kopya manyetik bant (Tape) veya buluta. Neden? Aynı medya türü aynı arıza türüne maruz kalabilir (örn. tüm yedekler aynı tip diskteyse ve disk türünde sistematik bir hata varsa hepsi bozulabilir), (3) '1' = BİR KOPYA Off-Site (Uzak Konumda) — en az bir kopya fiziksel olarak FARKLI bir konumda olmalı. Neden? Yangın, sel, deprem, hırsızlık gibi felaketler ana lokasyondaki tüm verileri yok edebilir; off-site kopya bu felaketlere karşı koruma sağlar. Modern off-site: bulut yedekleme (AWS S3, Azure Blob, Backblaze B2), uzak veri merkezi, başka şehirde sunucu, hatta başka kıtada. Modern Güncellemeler: (a) 3-2-1-1-0 Kuralı (Veeam) — 3 kopya + 2 ortam + 1 off-site + 1 OFFLINE (air-gapped, ransomware'dan korumak için) + 0 hata (her yedeklemenin başarılı doğrulanması); ransomware saldırılarının bulut yedeklerini de şifrelemesine karşı, (b) 4-3-2 Kuralı — 4 kopya + 3 lokasyon + 2 farklı bulut sağlayıcı (multi-cloud), (c) Immutable Backups — değiştirilemez yedekler; ransomware şifreleyemez. Uygulama: Office 365 verisi → 1 yerel sunucu yedeği + 1 NAS yedek + 1 AWS S3 yedek (off-site). 3-2-1 kuralı şirket içi (on-premise) sistemler kadar bulut sistemleri için de geçerlidir; bulut sağlayıcılar yedekleme sağlamaz, müşterinin sorumluluğudur (paylaşılan sorumluluk modeli).",
          },
          {
            text: "Bir BT hizmetinin '%99.9 erişilebilirlik' SLA'sı yıllık ne kadar downtime'a denk gelir?",
            options: [
              { id: "A", text: "Yılda 1 dakika downtime" },
              { id: "B", text: "Yılda yaklaşık 8.76 saat downtime — %99.9 (üç dokuz) erişilebilirlik, 8760 saatlik yılın %0.1'ine denk gelir; %99.99 (dört dokuz) = 52.6 dakika; %99.999 (beş dokuz / five nines) = 5.26 dakika; mission critical sistemler 'five nines' hedefler." },
              { id: "C", text: "Yılda 100 saat downtime" },
              { id: "D", text: "Erişilebilirlik downtime ile ilgili değildir." },
            ],
            correct: "B",
            explanation:
              "Erişilebilirlik (Availability) hesaplaması; SLA yönetiminin temelidir ve yüzdeyle ifade edilir. Formül: Erişilebilirlik = (Toplam Süre - Downtime) / Toplam Süre × 100. Bir yıl = 8760 saat olarak alınır (24 × 365). Erişilebilirlik Seviyeleri ve Yıllık Downtime Karşılıkları: (1) %90 (Bir 9) — 36.5 gün/yıl, 8.76 saat/gün; gerçekçi olmayan bir hedef, hizmet için kabul edilemez, (2) %95 — 18.25 gün/yıl, çok zayıf, (3) %99 (İki 9) — 3.65 gün/yıl, 7.2 saat/ay; düşük öncelikli iç sistemler için kabul edilebilir, (4) %99.5 — 1.83 gün/yıl, (5) %99.9 (Üç 9) — 8.76 saat/yıl, 43.8 dakika/ay; STANDART KURUMSAL HEDEF; bankalar, e-ticaret, kurumsal e-posta için tipik, (6) %99.95 — 4.38 saat/yıl, 21.6 dakika/ay; finansal işlemler, kritik veri, (7) %99.99 (Dört 9 / Four Nines) — 52.6 dakika/yıl, 4.32 dakika/ay; bankacılık altyapısı, ödeme sistemleri, (8) %99.999 (Beş 9 / Five Nines) — 5.26 dakika/yıl, 26 saniye/ay; mission critical; telekom anahtarları, hava trafik kontrol, kalp pili sistemleri, (9) %99.9999 (Altı 9) — 31.5 saniye/yıl; çok nadir, ultra-kritik. Yüksek Erişilebilirliğin Maliyeti: erişilebilirlik %99'dan %99.9'a çıkarmak 10x maliyet, %99.9'dan %99.99'a çıkarmak 10x daha maliyet; her dokuz logaritmik olarak pahalı. Yüksek Erişilebilirlik Sağlama Yöntemleri: (1) Yedeklilik (Redundancy) — sunucu, disk, ağ kartı yedekleri, (2) Cluster — birden fazla sunucu birlikte, biri çökerse diğer alır, (3) Load Balancing — yük dağılımı, (4) Multiple Data Centers — coğrafi yedeklilik (Active-Active, Active-Passive), (5) RAID — disk yedekleme, (6) UPS ve Jeneratör — güç kesintisine karşı, (7) Disaster Recovery — felaket kurtarma. Türkiye SPK ve BDDK düzenlemeleri kritik finansal sistemler için yüksek erişilebilirlik standartları zorunlu kılar (%99.9 minimum, ana sistemler %99.99 hedeflenir).",
          },
          {
            text: "RAID (Redundant Array of Independent Disks) türlerinden 'RAID 5' için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "RAID 5'te yedeklilik yoktur, sadece hız vardır." },
              { id: "B", text: "Veriyi birden fazla diske BÖLÜP DAĞITAN ve aynı zamanda PARITY (eşlik) bilgisini de dağıtık olarak saklayan RAID seviyesi; en az 3 disk gerektirir; 1 disk arızası tolere edilebilir (verisi parity'den yeniden hesaplanır); hem performans hem de yedeklilik dengesi sunar; iş sunucularında yaygın." },
              { id: "C", text: "RAID 5 sadece yansıtma yapar." },
              { id: "D", text: "RAID 5 yalnızca SSD'lerle çalışır." },
            ],
            correct: "B",
            explanation:
              "RAID (Redundant Array of Independent Disks); birden fazla diski bir mantıksal birim olarak kullanmak için geliştirilen teknolojidir; 1987'de Berkeley Üniversitesi'nde tanımlanmış; amaçları: performans artırma, yedeklilik sağlama veya her ikisini birden. Yaygın RAID Seviyeleri: (1) RAID 0 (Striping) — Veri birden fazla diske parçalara bölünerek dağıtılır (stripe). YEDEKLİLİK YOK; bir disk arızalanırsa tüm veri kaybolur. Avantajı: yüksek performans (paralel okuma/yazma). Kullanım: yüksek performans gerektiren ama veri kritik olmayan yerler (video düzenleme cache, geçici hesaplama), (2) RAID 1 (Mirroring) — Veri iki diskte AYNI şekilde tutulur (ayna/mirror). Tam yedeklilik; bir disk arızalanırsa diğer çalışmaya devam eder. Avantajı: yüksek güvenlik, okuma hızı (iki diskten paralel okuma). Dezavantajı: %50 kapasite kaybı (2 disk için sadece 1 disk kullanılabilir alan). Kullanım: işletim sistemi diskleri, kritik veriler, (3) RAID 5 (Distributed Parity) — En az 3 disk gerektirir. Veri stripe'lara bölünüp dağıtılır, ayrıca PARITY (eşlik) bilgisi de dağıtık olarak saklanır. 1 disk arızası tolere edilir — parity'den eksik veri yeniden hesaplanır. Avantajları: hem performans hem yedeklilik, %75-90 kapasite verimliliği (disk sayısına göre değişir; 4 disk ile %75 kullanılabilir). Dezavantajı: yazma performansı düşük (parity hesaplama maliyeti), arızalı disk değişimi sırasında rebuild süresi uzun (büyük diskler için riskli — ikinci disk de arızalanabilir). Kullanım: dosya sunucuları, web sunucuları, küçük-orta veritabanları, (4) RAID 6 (Double Parity) — En az 4 disk gerektirir. RAID 5 gibi ama iki parity diski; 2 disk arızası tolere eder. Avantajı: yüksek güvenlik (rebuild sırasında ikinci arızada bile veri korunur). Dezavantajı: daha yüksek maliyet, daha düşük performans. Kullanım: büyük diskler (4TB+) ile RAID 5'in riski yüksek olduğunda. (5) RAID 10 (RAID 1+0) — En az 4 disk gerektirir. RAID 1 (mirror) ve RAID 0 (stripe) kombinasyonu — önce aynalar, sonra stripe yapılır. Hem en yüksek performans hem yedeklilik. Dezavantaj: %50 kapasite kaybı. Kullanım: yüksek performans gerektiren veritabanları (SQL Server, Oracle production). Modern Alternatifler: (1) Software-defined Storage (Microsoft Storage Spaces, ZFS); (2) Erasure Coding — bulutta yaygın (AWS S3, Hadoop HDFS); RAID'den daha verimli, daha güvenli.",
          },
          {
            text: "Yedekleme türlerinden 'Artımlı Yedekleme' (Incremental Backup) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Her zaman tüm verileri yedekler." },
              { id: "B", text: "Sadece SON YEDEKLEMEDEN (tam veya artımlı) sonra değişen verileri yedekler; çok hızlı ve az alan kaplar; ANCAK geri yüklemede son tam yedek + tüm artımlı yedeklerin sırayla yüklenmesi gerekir, yavaş. Farksal (Differential) yedekleme ise son TAM yedeklemeden bu yana değişenleri yedekler, geri yüklemede sadece tam + son differential gerekir." },
              { id: "C", text: "Sadece yıllık olarak çalışır." },
              { id: "D", text: "Sadece veritabanları için kullanılır." },
            ],
            correct: "B",
            explanation:
              "Yedekleme Türleri; her birinin farklı bir veri yakalama stratejisi vardır; doğru seçim hız, depolama alanı ve geri yükleme süresi dengesi gözetilerek yapılır. (1) Tam Yedekleme (Full Backup) — Her seferinde TÜM veriler yedeklenir; ne değişti, ne değişmedi fark etmez. Avantajları: Geri yükleme en hızlısı (tek bir dosyadan), basit yönetim. Dezavantajları: En yavaş yedekleme, en çok depolama alanı kullanır, yedekleme penceresi geniş. Sıklık: genelde haftalık (örn. Pazar gecesi). (2) Artımlı Yedekleme (Incremental Backup) — Son YEDEKLEMEDEN (tam veya önceki artımlı fark etmez) bu yana DEĞİŞEN dosyaları yedekler. Süreç: Pazar = Full Backup; Pazartesi = Pazar'dan sonraki değişiklikler; Salı = Pazartesi'den sonraki değişiklikler; Çarşamba = Salı'dan sonraki değişiklikler; vs. Avantajları: En hızlı yedekleme, en az alan, yedekleme penceresi küçük. Dezavantajları: Geri yükleme YAVAS ve karmaşık — son tam yedek + ARASINDAKİ TÜM artımlı yedekler sırayla yüklenmeli. Bir artımlı bozulursa zincir kırılır. Sıklık: her gün veya hatta saatlik. (3) Farksal Yedekleme (Differential Backup) — Son TAM yedeklemeden bu yana DEĞİŞEN tüm dosyaları yedekler (artan boyutta). Süreç: Pazar = Full; Pazartesi = Pazar'dan beri değişenler (1 gün); Salı = Pazar'dan beri değişenler (2 gün); Çarşamba = Pazar'dan beri değişenler (3 gün); büyür. Avantajları: Geri yükleme HIZLI (sadece full + son differential), iki dosya yeterli. Dezavantajları: Artımlı'dan daha çok alan kaplar (büyür), günden güne büyür. Karşılaştırma — Bir Pazartesi Senaryosu: Tam: yüklenir ve haftada bir kez; Artımlı + Tam: en hızlı yedekleme ama 6 dosya (tam + 5 artımlı) yüklenmeli; Differential + Tam: 2 dosya (tam + son differential) yüklenir. (4) Sentetik Tam Yedek (Synthetic Full) — Artımlı yedeklerden 'sanal' bir tam yedek oluşturulur; gerçek tam yedek çalıştırılmaz, üretim sistemine yük binmez. Modern yedekleme yazılımları kullanır. (5) Sürekli Veri Koruması (CDP - Continuous Data Protection) — Her veri değişikliği anında yedeklenir; herhangi bir noktaya geri dönülebilir; özellikle veritabanları için. (6) Snapshot — Belirli bir anın anlık görüntüsü; storage seviyesinde, çok hızlı, ancak gerçek yedek değildir (aynı disk üzerinde). Tipik Kurumsal Strateji: Haftalık full + günlük artımlı + saatlik veritabanı transaction log yedeği; 3-2-1 kuralıyla.",
          },
          {
            text: "BS Operasyonlarında 'Sürekli İyileştirme' (Continual Service Improvement - CSI) için kullanılan 'PDCA Döngüsü' aşağıdakilerden hangisinden oluşur?",
            options: [
              { id: "A", text: "Project, Design, Code, Audit" },
              { id: "B", text: "Plan (Planla) — hedefler ve iyileştirme planı, Do (Uygula) — değişiklikleri pilotta uygula, Check (Kontrol Et) — sonuçları ölç ve değerlendir, Act (Önlem Al) — başarılıysa yay, başarısızsa düzelt; W. Edwards Deming'in geliştirdiği sürekli iyileştirme döngüsüdür (Deming Wheel)." },
              { id: "C", text: "Plan, Develop, Compile, Approve" },
              { id: "D", text: "Yalnızca bir kez yapılan değerlendirme" },
            ],
            correct: "B",
            explanation:
              "PDCA Döngüsü (Plan-Do-Check-Act); kalite yönetiminin ve sürekli iyileştirmenin temel modelidir; Walter A. Shewhart tarafından 1930'larda geliştirilmiş, W. Edwards Deming tarafından 1950'lerde yaygınlaştırılmıştır (bu nedenle 'Deming Cycle' veya 'Deming Wheel' olarak da bilinir). Türkçe karşılığı PUKÖ (Planla-Uygula-Kontrol Et-Önlem Al). Mantığı: İyileştirme bir kez yapılıp bırakılmaz; sürekli bir döngü olarak tekrarlanır. Her döngüde küçük bir ilerleme sağlanır; zaman içinde büyük dönüşüm. Dört Aşama: (1) Plan (Planla) — Mevcut durumu analiz et; iyileştirme fırsatlarını belirle; hedefler koy (SMART); değişiklik planı oluştur; gerekli kaynakları planla; başarı kriterlerini tanımla. Hangi metrikler ölçülecek? Beklenen sonuç ne? (2) Do (Uygula) — Planı KÜÇÜK ÖLÇEKTE/PİLOT'da uygula; tüm organizasyona değil önce sınırlı bir alanda; çalışanları eğit; süreci dokümante et; gözlem yap. (3) Check (Kontrol Et / Studyy - bazı versiyonlarda) — Sonuçları toplanan veri ile değerlendir; planlanan hedeflere ulaşıldı mı? Beklenen sonuç oluştu mu? Beklenmedik etki var mı? KPI'ları ölç. Bu aşama ÖNEMLİDİR — atlayan organizasyonlar çoğu sürekli iyileştirmede başarısız olur. (4) Act (Önlem Al / Adjust) — Sonuçlara göre karar ver: BAŞARILIYSA → Tüm organizasyona STANDARTLAŞTIR ve yay (standardization); BAŞARISIZSA → Sorunu analiz et, düzeltici eylemler yap; KISMEN BAŞARILIYSA → Düzelterek tekrar uygula. Sonra döngüyü tekrar başlat — bir sonraki iyileştirme alanı için Plan aşamasına geç. Modern Versiyonu: PDSA (Plan-Do-Study-Act) — 'Check' yerine 'Study' Deming'in son tercih ettiği versiyon; daha derin analiz ima eder. Uygulamaları: (1) ITIL CSI (Continual Service Improvement) — 7 adımlı iyileştirme süreci PDCA'ya dayanır, (2) Lean — Kaizen (sürekli iyileştirme), (3) Six Sigma — DMAIC (Define-Measure-Analyze-Improve-Control), (4) ISO 9001 — kalite yönetim sistemi, (5) Agile/Scrum — Sprint Retrospective, (6) DevOps — sürekli geri bildirim ve iyileştirme döngüsü. Türkiye'de SPK ve BDDK düzenlemeleri kurumların sürekli iyileştirme süreçlerini denetler. Tipik Örnek: Banka çağrı merkezinde bekleyiş süresi 5 dakika → PLAN: Yeni IVR menüsü tasarla → DO: Pilot şubede uygula → CHECK: Süre 3 dakikaya düştü → ACT: Tüm çağrı merkezine yay.",
          },
        ],
      },
      // ──────────── Ders 5: BS Sürekliliği — BCP, DRP, RTO, RPO ────────────
      {
        id: "m1022-l5",
        title: "BS Sürekliliği — İş Sürekliliği Planı (BCP), DRP, BIA, RTO/RPO",
        duration: "10 dk",
        summary: {
          title: "BS Sürekliliği ve Felaket Kurtarma",
          intro:
            "Bilgi Sistemleri Sürekliliği (BS Continuity); kritik iş süreçlerinin felaket veya kesinti sonrasında belirli bir süre içinde devam etmesini sağlamaktır. Üç ana bileşen: (1) İş Sürekliliği Planı (BCP - Business Continuity Plan) — geniş kapsamlı, iş operasyonlarının tümünü kapsar; (2) Felaket Kurtarma Planı (DRP - Disaster Recovery Plan) — BT odaklı, kritik sistemlerin kurtarılması; (3) İş Etki Analizi (BIA - Business Impact Analysis) — risklerin önceliklendirilmesinin temeli. RTO (Recovery Time Objective - Kurtarma Süresi Hedefi) ve RPO (Recovery Point Objective - Kurtarma Noktası Hedefi) iki temel ölçüttür.",
          sections: [
            {
              heading: "İş Sürekliliği Kavramları ve Standartları",
              icon: "shield",
              items: [
                {
                  strong: "BCP ve DRP Farkı:",
                  text: "BCP (İş Sürekliliği Planı) — kapsamlı; iş operasyonlarının tümünü, çalışan, lokasyon, süreçler, tedarikçi ilişkileri dahil; DRP (Felaket Kurtarma Planı) — daha dar kapsamlı; sadece BT sistemlerinin kurtarılmasına odaklanır; DRP, BCP'nin bir parçasıdır.",
                },
                {
                  strong: "İş Sürekliliği Standartları:",
                  text: "ISO 22301 — İş Sürekliliği Yönetim Sistemi (uluslararası standart, sertifikasyon mümkün); ISO 22313 — uygulama kılavuzu; NIST SP 800-34 — ABD federal kılavuz; BCI Good Practice Guidelines.",
                },
                {
                  strong: "Felaket Türleri:",
                  text: "Doğal — deprem, sel, fırtına, yangın, salgın; Teknolojik — sunucu arızası, elektrik kesintisi, siber saldırı (ransomware, DDoS), yazılım hatası; İnsan Kaynaklı — sabotaj, terör, kazara silme, içeriden tehdit; Hibrit — birden fazla felaketin birleşimi.",
                },
                {
                  strong: "İş Etki Analizi (BIA - Business Impact Analysis):",
                  text: "İş süreçlerinin kritiklik düzeyinin değerlendirilmesi; her kritik süreç için MTPD (Maximum Tolerable Period of Disruption), MTO (Maximum Tolerable Outage), RTO, RPO hedefleri belirlenir; finansal etki, müşteri etkisi, regülasyon, itibar hesaplanır.",
                },
                {
                  strong: "RTO ve RPO Tanımları:",
                  text: "RTO (Recovery Time Objective - Kurtarma Süresi Hedefi) — bir sistemin felaket sonrası yeniden çalışır hale gelmesi için kabul edilebilir MAKSİMUM süre; RPO (Recovery Point Objective - Kurtarma Noktası Hedefi) — felaket öncesi son güvenli noktadan ne kadar veri kaybı kabul edilebilir (zaman cinsinden).",
                },
              ],
            },
            {
              heading: "BCP/DRP Yönetimi ve Test",
              icon: "trend",
              items: [
                {
                  strong: "BCP Organizasyon ve Roller:",
                  text: "Üst Yönetim Sponsoru, BCM Koordinatörü, BCM Komitesi, BIA Ekibi, Kriz Yönetim Ekibi, Felaket Kurtarma Ekibi, İletişim Sorumlusu; her birinin tanımlı görevleri ve yedek (backup) atamaları olmalı.",
                },
                {
                  strong: "İş Sürekliliği Stratejileri:",
                  text: "Sıcak Site (Hot Site) — tam çalışır halde yedek lokasyon, çok hızlı kurtarma (saatler), pahalı; Ilık Site (Warm Site) — yarı hazır, kısmen donatılmış (12-24 saat); Soğuk Site (Cold Site) — boş alan, donanım yok (günler-haftalar); Bulut Tabanlı DR — modern, esnek, maliyet-etkin.",
                },
                {
                  strong: "Felaket Kurtarma Planı (DRP):",
                  text: "Kritik BT sistemlerinin kurtarılma adımları; sistem öncelik sıralaması, kurtarma prosedürleri, alternatif veri merkezi, veri replikasyonu (synchronous/asynchronous), failover prosedürleri, geri dönüş (failback).",
                },
                {
                  strong: "BCP/DRP Test Türleri:",
                  text: "Masa Üstü Test (Tabletop) — toplantı odasında senaryo tartışması; Walk-Through — adım adım gözden geçirme; Simülasyon — gerçeğe yakın senaryolar; Paralel Test — yedek sistem test, üretim devam; Tam Kesinti Testi — gerçek failover, en kapsamlı.",
                },
                {
                  strong: "BCP/DRP Bakım ve Denetim:",
                  text: "Yıllık BIA güncellemesi, organizasyon değişikliklerinde plan güncelleme, düzenli testler (en az yıllık), eğitim ve farkındalık, iç ve bağımsız denetim, SPK/BDDK düzenleyici denetim, sertifikasyon (ISO 22301).",
                },
              ],
            },
          ],
          tip: "BCP (geniş, tüm iş) ⊃ DRP (BT odaklı). RTO = ne kadar sürede çalışır hale gelecek? RPO = ne kadar veri kaybı kabul edilebilir? BIA = kritikliği belirleme. ISO 22301 = uluslararası BC standardı. Site türleri: Hot (saatler/pahalı) > Warm > Cold (günler/ucuz). Test türleri: Tabletop → Walkthrough → Simulation → Parallel → Full Interruption.",
          kavramlar: [
            { terim: "BCP (İş Sürekliliği Planı)", tanim: "Felaket veya büyük kesinti durumunda kritik iş işlevlerinin sürekliliğini sağlamak için hazırlanan kapsamlı plan; DRP'yi de kapsar." },
            { terim: "DRP (Felaket Kurtarma Planı)", tanim: "BT altyapısının ve sistemlerinin bir felaket sonrasında belirlenen süreler içinde yeniden çalışır hale getirilmesine yönelik BT odaklı plan." },
            { terim: "RTO (Kurtarma Süresi Hedefi)", tanim: "Bir hizmetin veya sistemin kesintiden sonra ne kadar sürede çalışır hale getirilmesi gerektiğini belirten hedef süre." },
            { terim: "RPO (Kurtarma Noktası Hedefi)", tanim: "Felaket durumunda kabul edilebilir maksimum veri kaybı süresi; son yedek ile kesinti anı arasında geçen süre RPO sınırını belirler." },
            { terim: "BIA (İş Etki Analizi)", tanim: "İş süreçlerinin kesintiden nasıl etkileneceğini ve hangi süreçlerin kritik olduğunu belirleyen analiz; BCP'nin temelini oluşturur." },
            { terim: "Hot Site", tanim: "Tam donanımlı, veri yansıtmalı ve kısa sürede devreye alınabilir yedek tesis; en pahalı ama en hızlı kurtarma seçeneği." },
            { terim: "ISO 22301", tanim: "İş sürekliliği yönetim sistemleri için uluslararası standart; BCP kurulumu, işletilmesi ve iyileştirilmesine ilişkin gereksinimleri tanımlar." },
          ],
          dikkatlar: [
            "BCP ≠ DRP: BCP tüm iş işlevlerini kapsar, DRP yalnızca BT'yi; DRP, BCP'nin bir alt bileşenidir.",
            "RTO (süre) ve RPO (veri) iki ayrı hedef; RTO kısa + RPO kısa = maliyetli — ikisinin dengelenmesi gerekir.",
            "Site türleri: Hot (saatler içinde, pahalı) → Warm (günler içinde, orta) → Cold (haftalar içinde, ucuz).",
            "BIA olmadan BCP yapılamaz; hangi sürecin kritik olduğu BIA ile belirlenir.",
            "Test hiyerarşisi: Tabletop (masa başı) → Walkthrough (adım adım) → Simulation → Parallel (iki sistem) → Full Interruption (gerçek kesinti).",
          ],
        },
        questions: [
          {
            text: "İş Sürekliliği Planı (BCP) ile Felaket Kurtarma Planı (DRP) arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki plan aynıdır." },
              { id: "B", text: "BCP (İş Sürekliliği Planı): GENİŞ kapsamlı; iş operasyonlarının TÜMÜNÜ kapsar — çalışan, lokasyon, süreçler, tedarikçi ilişkileri, iletişim, hukuk, finans, halkla ilişkiler. DRP (Felaket Kurtarma Planı): DAR kapsamlı; sadece BT sistemlerinin kurtarılmasına odaklanır — sunucu, ağ, veritabanı, uygulamalar; DRP, BCP'nin BİR PARÇASIDIR." },
              { id: "C", text: "BCP yalnızca yangın için, DRP yalnızca deprem için." },
              { id: "D", text: "BCP devlet kurumları için, DRP özel sektör için." },
            ],
            correct: "B",
            explanation:
              "İş Sürekliliği Planı (Business Continuity Plan - BCP) ve Felaket Kurtarma Planı (Disaster Recovery Plan - DRP); ikisi de organizasyonların felaket durumlarında işlerini sürdürebilmesi için hayati önem taşır, ancak farklı kapsamlardadır. (1) İş Sürekliliği Planı (BCP) — KAPSAMLI yaklaşım; iş operasyonlarının TÜM yönlerini kapsar. İçeriği: (a) Çalışan Sürekliliği — çalışan güvenliği, evden çalışma planları, vekil atamalar, kritik personel yedekleri, (b) Lokasyon Sürekliliği — ana ofis kullanılamazsa alternatif çalışma lokasyonları (hot/warm/cold sites), (c) İletişim Sürekliliği — telefon, e-posta, web sitesi, sosyal medya iletişimi, kriz iletişimi, paydaşlara bilgi, (d) Süreç Sürekliliği — kritik iş süreçlerinin nasıl devam edeceği, manuel prosedürler, (e) Tedarikçi/Müşteri İlişkileri — kritik tedarikçilerin yedekleri, müşteri hizmet seviyesi, (f) Finansal Sürekliliği — nakit akışı yönetimi, sigorta talepleri, acil bütçeler, (g) Hukuki ve Regülasyon — yasal yükümlülüklerin korunması, raporlama, (h) BT Sürekliliği (DRP) — BCP'nin alt parçası. Sahibi: genelde Risk Yönetimi, Operasyon, veya CISO seviyesinde. (2) Felaket Kurtarma Planı (DRP) — TEKNİK odaklı; BT sistemlerinin kurtarılmasına odaklanır. İçeriği: (a) Kritik BT Sistemlerinin Tespit ve Önceliklendirilmesi (Tier 1, 2, 3 sistemler), (b) Veri Yedekleme ve Replikasyon Stratejileri, (c) Alternatif Veri Merkezi (DR Site) kurulumu, (d) Sistem Failover Prosedürleri — ana sistemden yedeğe geçiş, (e) Kurtarma Sıralaması (hangi sistem önce, hangisi sonra), (f) Geri Dönüş (Failback) Prosedürleri — felaket sonrası ana sisteme dönüş, (g) Teknik Personel ve İletişim Yapısı, (h) Yazılım, donanım, lisans envanteri. Sahibi: BT Direktörü, IT Operations, CIO. İlişki: DRP ⊆ BCP. DRP, BCP'nin BT bileşenidir. Bir BCP'si olmayan organizasyon, sadece DRP ile tam korunmaz (çünkü insan, lokasyon, iletişim eksiktir). Bir DRP'si olmayan organizasyon, BCP'si olsa bile BT sistemleri kurtarılamazsa iş operasyonu yapamaz. Modern yaklaşımda 'Operational Resilience' kavramı bu ikisini birleştirir.",
          },
          {
            text: "İş Sürekliliği planlamasında 'RTO' (Recovery Time Objective) ile 'RPO' (Recovery Point Objective) arasındaki fark aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "İki kavram aynıdır." },
              { id: "B", text: "RTO (Kurtarma Süresi Hedefi): Bir sistemin felaket sonrası YENİDEN ÇALIŞIR hale gelmesi için kabul edilebilir MAKSİMUM SÜRE (örn. 4 saat); RPO (Kurtarma Noktası Hedefi): Felaket öncesi son güvenli noktadan ne kadar VERİ KAYBI kabul edilebilir, ZAMAN cinsinden (örn. 1 saatlik veri kaybı tolere edilir)." },
              { id: "C", text: "RTO ve RPO yalnızca yıllık olarak ölçülür." },
              { id: "D", text: "İkisi de aynı şeyi farklı isimlerle ifade eder." },
            ],
            correct: "B",
            explanation:
              "RTO ve RPO; İş Sürekliliği ve Felaket Kurtarma planlamasının iki TEMEL ölçütüdür; BIA (Business Impact Analysis) sonucunda her kritik sistem için belirlenir. İkisi farklı şeyleri ölçer ama birlikte kullanılır. (1) RTO (Recovery Time Objective - Kurtarma Süresi Hedefi) — Tanım: Bir sistemin/sürecin felaket sonrası YENİDEN ÇALIŞIR HALE GELMESİ için kabul edilebilir MAKSİMUM SÜRE. 'Sistemim ne kadar süre kapalı olabilir?' sorusunun yanıtı. Ölçü Birimi: saat, dakika, gün. Örnek RTO Değerleri: (a) İnternet Bankacılığı: 1-4 saat, (b) Çağrı Merkezi: 4 saat, (c) Muhasebe Sistemi: 24 saat, (d) E-posta: 4 saat, (e) İK Sistemi: 48 saat, (f) BIST Trading Sistemi: 0 (kesinti kabul edilemez). RTO Belirleme: BIA sonucunda kritiklik düzeyine göre; sektör regülasyonu (BDDK, SPK); maliyet-fayda analizi (kısa RTO çok pahalı). RTO'yu Etkileyen Teknolojiler: Veri replikasyonu, sıcak site, otomatik failover, cluster, load balancer. (2) RPO (Recovery Point Objective - Kurtarma Noktası Hedefi) — Tanım: Felaket öncesi son GÜVENLİ noktadan ne kadar VERİ KAYBI kabul edilebilir, ZAMAN cinsinden ölçülür. 'Ne kadar veri kaybedebilirim?' sorusunun yanıtı. Ölçü Birimi: saat, dakika, saniye. Örnek RPO Değerleri: (a) Banka İşlemleri: 0 (her transaction korunmalı — senkron replikasyon), (b) E-ticaret Sipariş: 1 dakika, (c) Muhasebe Sistemi: 1 saat, (d) Müşteri CRM: 4 saat, (e) İK Sistemi: 1 gün, (f) Stok Sistemi: 1 saat. RPO Belirleme: Verinin kritikliği; veri kaybedildiğinde finansal/operasyonel/itibar etkisi; regülasyon (KVKK, SOX, Basel). RPO'yu Etkileyen Teknolojiler: (a) Yedekleme sıklığı (RPO = yedekleme aralığı), (b) Sürekli Veri Koruması (CDP — RPO ≈ 0), (c) Veri replikasyonu (senkron RPO=0; asenkron RPO=birkaç saniye-dakika), (d) Transaction log shipping. Sıkı RTO+RPO = Pahalı: RTO 0 + RPO 0 = aktif-aktif çift veri merkezi (en pahalı, $milyonlar); RTO 4 saat + RPO 1 saat = orta seviye, daha makul; RTO 24 saat + RPO 24 saat = klasik yedekleme yeterli. SPK ve BDDK Düzenlemeleri: Türkiye'de finansal kurumlar için bu rakamlar regülasyonla belirlenir; kritik ödeme sistemleri çok düşük RTO/RPO zorunlu.",
          },
          {
            text: "İş Sürekliliği Yönetim Sistemi için uluslararası standart aşağıdakilerden hangisidir?",
            options: [
              { id: "A", text: "ISO 9001" },
              { id: "B", text: "ISO 22301 — İş Sürekliliği Yönetim Sistemi (Business Continuity Management Systems); uluslararası kabul gören, sertifikasyon mümkün standarttır; ISO 22313 uygulama kılavuzudur; organizasyonların kapsamlı bir BCM süreci kurmasını sağlar." },
              { id: "C", text: "ISO 27001 (yalnız bilgi güvenliği)" },
              { id: "D", text: "ISO 14001 (çevre yönetimi)" },
            ],
            correct: "B",
            explanation:
              "ISO 22301; uluslararası standartlaşmış İş Sürekliliği Yönetim Sistemi (Business Continuity Management System - BCMS) standardıdır. Tarihçe: ISO tarafından 2012'de ilk kez yayımlanmış, 2019'da revize edilmiştir; BS 25999 (İngiltere standardı) temel alınarak geliştirilmiştir. Sertifikasyon: ISO 22301 sertifikasyonu, bağımsız akredite sertifikasyon kuruluşları tarafından verilir (BSI, TÜV, SGS, Bureau Veritas, TSE); 3 yıl geçerli, yıllık gözetim denetimleri, 3 yılda bir yenileme. Standardın Yapısı: (1) Kapsam ve Liderlik — üst yönetim taahhüdü, BCM politikası, kaynak tahsisi, (2) Planlama — risk değerlendirmesi, BIA, hedef belirleme, (3) Destek — yetkinlik, farkındalık, iletişim, (4) Operasyon — BIA, risk değerlendirme, iş sürekliliği stratejisi geliştirme, prosedürler, test, (5) Performans Değerlendirme — izleme, ölçüm, iç denetim, yönetimin gözden geçirmesi, (6) İyileştirme — düzeltici eylemler, sürekli iyileştirme. Avantajları: Müşteri ve paydaşlara güvence, regülasyon uyumu (SPK, BDDK, KVKK), sigorta primlerinde indirim, ihalelerde tercih sebebi, kriz yönetimi yeteneği. Diğer İlgili Standartlar: (a) ISO 22313 — ISO 22301 için uygulama kılavuzu (yorumlama, uygulama önerileri), (b) ISO 22317 — İş Etki Analizi (BIA) rehberi, (c) ISO 22318 — Tedarik Zinciri Sürekliliği, (d) ISO 22320 — Olay Yönetimi, (e) NIST SP 800-34 — ABD federal hükümeti için BCP rehberi, (f) BCI Good Practice Guidelines — Business Continuity Institute (İngiltere) rehberi, (g) DRI International — Disaster Recovery Institute standartları. Türkiye'de Uygulama: Bankalar (BDDK), sermaye piyasası kurumları (SPK), sigorta şirketleri (SEDDK), enerji şirketleri (EPDK), sağlık kuruluşları, devlet kurumları yaygın ISO 22301 sertifikası almaktadır. Diğer ISO Standartları: ISO 9001 — Kalite Yönetimi (BCM değil), ISO 27001 — Bilgi Güvenliği (BCM'nin bir parçası), ISO 14001 — Çevre Yönetimi, ISO 45001 — İSG. ISO 27001 ile ISO 22301 birlikte sıkça uygulanır — bilgi güvenliği ve iş sürekliliği birbirini tamamlar.",
          },
          {
            text: "Felaket Kurtarma site stratejilerinden 'Sıcak Site' (Hot Site) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Sıcak site sadece teorik bir kavramdır." },
              { id: "B", text: "TAM ÇALIŞIR halde, güncel veri ile sürekli senkronize, ana sistem çöktüğünde HEMEN (dakikalar-saatler içinde) devreye alınabilen yedek lokasyondur; en HIZLI kurtarma sağlar (düşük RTO/RPO) ama EN PAHALI seçenektir; mission critical sistemler için kullanılır (bankacılık, hava trafik kontrol)." },
              { id: "C", text: "Sadece boş bir bina demektir." },
              { id: "D", text: "Felaket sonrası 1 ay içinde devreye girer." },
            ],
            correct: "B",
            explanation:
              "Felaket Kurtarma (Disaster Recovery) Site Stratejileri; ana veri merkezinin kullanılamaz hale gelmesi durumunda kritik BT sistemlerinin nereden çalıştırılacağı stratejisidir. Üç ana site türü vardır, her birinin RTO/RPO, maliyet ve hız dengesi farklıdır: (1) Sıcak Site (Hot Site) — TAM ÇALIŞIR halde yedek lokasyon. Özellikleri: (a) Tüm donanım kurulmuş ve çalışıyor, (b) Veri sürekli replikasyon ile senkron (synchronous) veya yakın gerçek zamanlı (asynchronous) aktarılıyor, (c) Yazılımlar yüklü ve test edilmiş, (d) Felaket olduğunda sadece switch yapılır, (e) RTO: 0-4 saat (saniyeler-dakikalar mümkün), RPO: 0-15 dakika (senkron'da neredeyse 0). Maliyet: EN YÜKSEK; tüm donanım iki kat (ana + yedek), sürekli yazılım lisansları, bant genişliği, personel. Yıllık maliyet milyon dolarlar olabilir. Uygun Olduğu Yerler: Mission critical sistemler — bankalar (core banking), borsalar (BIST trading), kredi kartı işlem sistemleri, hava trafik kontrol, telekom anahtarları, kalp pili izleme, hastane sistemleri. (2) Ilık Site (Warm Site) — YARI hazır lokasyon. Özellikleri: (a) Temel donanım kurulmuş ama hazır halde değil, (b) Veriler kısmen replikate edilmiş (gün/hafta gecikmesi), (c) Yazılımlar yüklü, ama veri ve konfigürasyon güncellenmesi gerekir, (d) Aktivasyon sırasında manuel yapılandırma, son veri yüklemesi (e) RTO: 4-24 saat, RPO: 4-24 saat (yedek sıklığına bağlı). Maliyet: ORTA; daha az donanım, daha az personel, daha az bant genişliği. Uygun Olduğu Yerler: önemli ancak gerçek-zamanlı olmayan sistemler — kurumsal ERP, CRM, e-posta, dosya sunucusu, üretim takip. (3) Soğuk Site (Cold Site) — BOŞ ALAN. Özellikleri: (a) Sadece fiziksel alan (binası, elektrik, soğutma, ağ altyapısı), (b) Donanım YOK — felaket sonrası satın alınır veya kiralanır, (c) Yazılım YOK, (d) Veri kurtarma yedeklerden yapılır, (e) Aktivasyon GÜNLER-HAFTALAR alır. Maliyet: EN DÜŞÜK; sadece alan kira ve temel altyapı. Uygun Olduğu Yerler: küçük şirketler, kritik olmayan sistemler, bütçe kısıtlı durumlar. Modern Trend - Bulut Tabanlı DR: AWS Disaster Recovery, Azure Site Recovery; geleneksel sıcak/ılık site'a alternatif; daha esnek, daha maliyet-etkin (kullanmadığında ödemiyorsun); RTO/RPO ihtiyacına göre özelleştirilebilir; Pilot Light, Warm Standby, Multi-Site Active-Active gibi farklı tiers. Karma yaklaşımlar yaygın: kritik sistemler için sıcak, diğerleri için ılık veya bulut.",
          },
          {
            text: "BCP/DRP test türleri arasında 'Masa Üstü Test' (Tabletop Exercise) için aşağıdakilerden hangisi DOĞRUDUR?",
            options: [
              { id: "A", text: "Gerçek bir felaket sonrası yapılır." },
              { id: "B", text: "Bir TOPLANTI ODASINDA, ekibin felaket senaryosunu adım adım tartıştığı, gerçek sistem kapatılmadan yapılan TEORİK egzersiz; en BASIT ve ucuz test türüdür; planın boşluklarını ve rolleri test eder; yıllık yapılması önerilir, sonra simülasyon ve full interruption testlerine geçilir." },
              { id: "C", text: "Sadece masa üstü bilgisayarlarda yapılır." },
              { id: "D", text: "Felaket sonrası raporlama metodudur." },
            ],
            correct: "B",
            explanation:
              "BCP/DRP Test Türleri; bir plan yazıp dokümante etmek yeterli değildir; düzenli olarak test edilmesi gerekir. Test türleri kompleksite, maliyet ve gerçeklik açısından sıralanır: (1) Masa Üstü Egzersiz (Tabletop Exercise) — EN BASIT test. Yapısı: Ekip üyeleri (BCP/DRP planındaki sorumlu kişiler) bir toplantı odasında toplanır; bir kolaylaştırıcı (facilitator) bir senaryo sunar (örn. 'Ana veri merkezinde yangın oldu, sunucu odası kullanılamaz'); ekip üyeleri planın adımlarını sırayla anlatır, kararlar verir, soruları yanıtlar. Gerçek sistemler kapatılmaz. Avantajları: en ucuz, en hızlı, risksiz, plan boşlukları tespit edilir, yeni ekip üyeleri eğitilir, roller netleşir. Dezavantajları: sadece teorik, gerçek koşulları yansıtmaz, otomatik sistemler test edilmez. Sıklık: Yıllık (en az). Süre: 2-4 saat. (2) Yapısal Walk-Through (Structured Walk-Through) — Tabletop'tan biraz daha detaylı. Plan dokümanı baştan sona okunur, her adım analiz edilir, eksiklikler kaydedilir. Süre: yarım gün. (3) Simülasyon Testi (Simulation) — Daha gerçeğe yakın senaryo. Yapısı: belirli koşullar yaratılır, ekip canlı olarak yanıt verir; bazen alternatif lokasyondan çalışma simüle edilir. Gerçek sistemlerle değil ama detaylı senaryoyla. (4) Paralel Test (Parallel Test) — DR sistemleri DEVREYE ALINIR ve çalıştırılır, ANA SİSTEMLER de çalışmaya devam eder; iki sistem paralel çalışır, sonuçlar karşılaştırılır. Avantaj: gerçek sistemi test eder, ama ana operasyonu etkilemez. (5) Tam Kesinti Testi (Full Interruption Test) — EN KAPSAMLI test. Ana sistemler GERÇEK olarak kapatılır, DR sistemleri devreye alınır; iş süreçleri DR site'tan yürütülür. En gerçekçi ama EN RİSKLİ. Bazı şirketler asla yapmaz, çünkü gerçek operasyon riski. Genellikle yıllık veya iki yılda bir, çok dikkatli planlanır. Modern Trend - 'Chaos Engineering': Netflix'in geliştirdiği yaklaşım; üretim ortamında planlı olarak hatalar enjekte edilir (sunucu kapatma, ağ gecikme, vs.); sistem dayanıklılığını gerçek koşullarda test eder. Araçlar: Netflix Chaos Monkey, Gremlin, Litmus. Test Sonrası: her testten sonra detaylı rapor — başarılı yönler, eksiklikler, iyileştirme önerileri; plan revize edilir. Regülasyon: BDDK, SPK kritik finansal kurumlar için yıllık BCP/DRP testi zorunlu kılar; test sonuçları regülatöre raporlanır. ISO 22301 sertifikalı kuruluşlar düzenli test yapmak zorundadır.",
          },
        ],
      },
    ],
  },
];