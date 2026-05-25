/* �����������������������������������������������������������������������������
 * Geni� Kapsaml� Sermaye Piyasas� Mevzuat� ve Meslek Kurallar� (1002)
 *
 * Kaynak: SPL 1002 �al��ma Notu, 31 Aral�k 2025 (335 sayfa)
 * Tip yap�s�: data.ts'deki Module, Lesson, Question tipleriyle uyumludur.
 *
 * Not: 1001 (Dar Kapsaml�) mod�l�nde i�lenen Sermaye Piyasas� Kanunu temelleri,
 * �zel Durumlar Tebli�i ve Yat�r�m Fonlar� (III-52.1) gibi konular burada
 * tekrar edilmemi�; 1002'ye �zg� olan kolektif yat�r�m kurulu�lar� (GYO,
 * MKYO/DSYO, PY�, BYF, GYF, GSYF/GSYO) ve Sermaye Piyasas� �al��anlar�
 * Etik �lkeleri konular�na odaklan�lm��t�r.
 *
 * Kullan�m:
 *   import { genisMevzuat } from "./mevzuat-1002";
 *   const allModules = [...darMevzuat, ...genisMevzuat];
 * �������������������������������������������������������������������������� */

import { type Module } from "./mevzuat";

export const genisMevzuat: Module[] = [
  // ========================================================================
  // MOD�L � 1002 GEN�� KAPSAMLI MEVZUAT
  // ========================================================================
  {
    id: "m1002",
    title: "Mod�l � Geni� Kapsaml� Mevzuat (1002)",
    lessons: [
      // ����������������������������� Ders 1: GYO �����������������������������
      {
        id: "m1002-l1",
        title: "Gayrimenkul Yat�r�m Ortakl�klar� (III-48.1)",
        duration: "10 dk",
        summary: {
          title: "Gayrimenkul Yat�r�m Ortakl�klar� (III-48.1)",
          intro:
            "Gayrimenkul Yat�r�m Ortakl�klar� (GYO), III-48.1 say�l� Tebli� kapsam�nda d�zenlenen, kay�tl� sermaye sistemine tabi ve �zel olarak gayrimenkullere, gayrimenkule dayal� sermaye piyasas� ara�lar�na, gayrimenkul projelerine, gayrimenkule dayal� haklara ve sermaye piyasas� ara�lar�na yat�r�m yapabilen sermaye piyasas� kurumlar�d�r. Halka a��k ortakl�k niteli�inde olup, paylar�n�n asgari %25'inin halka arz yoluyla sat�lmas� zorunludur.",
          sections: [
            {
              heading: "Kurulu�, Halka Arz ve Yap�sal Esaslar",
              icon: "shield",
              items: [
                {
                  strong: "Halka Arz S�resi:",
                  text: "GYO olarak kurulan veya d�n��en ortakl�klar�n ticaret siciline tescili takip eden 3 ay i�inde, ��kar�lm�� sermayenin asgari %25'ini temsil eden paylar�n halka arz�na ili�kin izahnamenin onaylanmas� talebiyle Kurula ba�vurmalar� zorunludur.",
                },
                {
                  strong: "Altyap� GYO'lar� ��in S�reler:",
                  text: "��kar�lm�� sermayesi 3 milyar TL'den az olanlar i�in 2 y�l, 3 milyar TL ve daha fazla olanlar i�in 4 y�l i�inde halka arz ba�vurusu yap�lmas� gerekir.",
                },
                {
                  strong: "Ayni Sermaye:",
                  text: "Kurulu� ve sermaye art�r�mlar�nda, �zerinde ipotek bulunmayan veya de�erini �nemli �l��de etkileyecek takyidat �erhi olmayan gayrimenkuller ve gayrimenkule dayal� ayni haklar TTK �er�evesinde ayni sermaye olarak konulabilir.",
                },
                {
                  strong: "Bor�lanma S�n�r�:",
                  text: "GYO'lar k�sa s�reli fon ihtiya�lar�n� veya portf�yle ilgili maliyetlerini kar��lamak amac�yla kredi kullanabilir; ancak kullan�labilecek kredi tutar� hesap d�nemi sonundaki �zsermayelerinin azami be� kat�n� ge�emez.",
                },
                {
                  strong: "Kotasyon Zorunlulu�u:",
                  text: "Halka arz eden GYO'lar, sat�� s�resinin bitimini takip eden 15 g�n i�inde paylar�n�n B�A� kotuna al�nmas� i�in Kurula ba�vurmak zorundad�r.",
                },
              ],
            },
            {
              heading: "Portf�y S�n�rlamalar� ve Yat�r�m Faaliyetleri",
              icon: "trend",
              items: [
                {
                  strong: "Asgari Gayrimenkul Yat�r�m�:",
                  text: "Aktif toplam�n�n en az %51'i, gayrimenkullerden, gayrimenkul projelerinden, gayrimenkule dayal� haklardan ve gayrimenkule dayal� sermaye piyasas� ara�lar�ndan olu�mak zorundad�r.",
                },
                {
                  strong: "Para ve Sermaye Piyasas� Ara�lar�:",
                  text: "Aktif toplam�n�n en fazla %50'si para ve sermaye piyasas� ara�lar�na yat�r�labilir; tek bir ihra���ya ait sermaye piyasas� ara�lar�na yap�lan yat�r�m aktif toplam�n %10'unu a�amaz.",
                },
                {
                  strong: "Yapamayacaklar� ��ler:",
                  text: "GYO'lar, otel ve hastane gibi gayrimenkullerin i�letmesini yapamaz, k�sa vadeli al�m-sat�m amac�yla gayrimenkul ticareti yapamaz, sermaye piyasas� ara�lar�n�n kredili al�m-sat�m�yla i�tigal edemez ve mali sekt�rde faaliyet g�steren �irketlere ortak olamaz.",
                },
                {
                  strong: "De�erleme Zorunlulu�u:",
                  text: "Portf�ye dahil edilecek veya ��kart�lacak her bir varl�k i�in, Kurul taraf�ndan listeye al�nm�� gayrimenkul de�erleme kurulu�lar�na de�erleme yapt�r�lmas� zorunludur.",
                },
                {
                  strong: "�mtiyazl� Pay Yasa��:",
                  text: "GYO'lar, y�netim kurulu �yelerini aday g�sterme imtiyaz� tan�yan paylar d���nda oy ve k�r pay�nda imtiyaz tan�yan pay ihra� edemez.",
                },
              ],
            },
          ],
          tip: "GYO'larda 'aktif toplam�n�n asgari %51'i' kural� esast�r; bu e�ik bir kez bile alt�na d��erse Kurul'a uyum s�resi talebiyle ba�vurulmas� gerekir. S�navda %25 (halka arz oran�), %51 (gayrimenkul yat�r�m oran�) ve 5 kat� (kredi s�n�r�) rakamlar� en s�k kar��la��lan kal�p sorulard�r.",
        },
        questions: [
          {
            text: "III-48.1 say�l� Tebli� uyar�nca bir GYO'nun aktif toplam� i�inde gayrimenkullerin, gayrimenkul projelerinin ve gayrimenkule dayal� haklar�n asgari oran� ne kadar olmal�d�r?",
            options: [
              { id: "A", text: "%25" },
              { id: "B", text: "%50" },
              { id: "C", text: "%51" },
              { id: "D", text: "%80" },
            ],
            correct: "C",
            explanation:
              "Tebli� uyar�nca GYO'lar�n aktif toplam�n�n en az %51'i; gayrimenkullerden, gayrimenkul projelerinden, gayrimenkule dayal� haklardan ve gayrimenkule dayal� sermaye piyasas� ara�lar�ndan olu�mak zorundad�r. Bu oran portf�y s�n�rlamalar�n�n �ekirde�ini olu�turur.",
          },
          {
            text: "Halka arz yoluyla sat�lan paylar bak�m�ndan bir GYO'nun ��kar�lm�� sermayesinin asgari ne kadar� halka arz edilmek zorundad�r?",
            options: [
              { id: "A", text: "%10" },
              { id: "B", text: "%15" },
              { id: "C", text: "%20" },
              { id: "D", text: "%25" },
            ],
            correct: "D",
            explanation:
              "GYO Tebli�i'ne g�re kurulu� veya d�n���m�n ticaret siciline tescilini takip eden �� ay i�inde ��kar�lm�� sermayelerinin asgari %25'ini temsil eden paylar�n halka arz�na ili�kin izahnamenin onaylanmas� talebiyle Kurula ba�vurmalar� zorunludur.",
          },
          {
            text: "Bir GYO'nun kullanabilece�i kredi toplam� ile ilgili Tebli�'de yer alan �st s�n�r a�a��dakilerden hangisidir?",
            options: [
              { id: "A", text: "Hesap d�nemi sonundaki �zsermayenin 2 kat�" },
              { id: "B", text: "Hesap d�nemi sonundaki �zsermayenin 3 kat�" },
              { id: "C", text: "Hesap d�nemi sonundaki �zsermayenin 5 kat�" },
              { id: "D", text: "Hesap d�nemi sonundaki �zsermayenin 10 kat�" },
            ],
            correct: "C",
            explanation:
              "Tebli�'in 'Bor�lanma S�n�r�' ba�l�kl� b�l�m�nde, GYO'lar�n kullanabilece�i kredi tutar�n�n hesap d�nemi sonundaki �zsermayelerinin azami 5 kat�n� ge�emeyece�i d�zenlenmi�tir.",
          },
          {
            text: "A�a��dakilerden hangisi GYO'lar�n yapamayaca�� i�lerden biri DE��LD�R?",
            options: [
              { id: "A", text: "Otel, hastane gibi gayrimenkullerin i�letmesini yapmak" },
              { id: "B", text: "K�sa vadeli al�m-sat�m amac�yla gayrimenkul ticareti yapmak" },
              { id: "C", text: "Gayrimenkul de�erleme kurulu�lar�na portf�ydeki varl�klar�n de�erlemesini yapt�rmak" },
              { id: "D", text: "Sermaye piyasas� ara�lar�n�n kredili al�m-sat�m�yla i�tigal etmek" },
            ],
            correct: "C",
            explanation:
              "Gayrimenkul de�erleme yapt�rmak GYO'lar i�in yasaklanm�� bir i� de�il, aksine zorunluluktur. Di�er �� se�enek (otel/hastane i�letmesi, k�sa vadeli al�m-sat�m, sermaye piyasas� ara�lar�n�n kredili al�m�) Tebli�'de a��k�a yapamayacaklar� i�ler aras�nda say�lm��t�r.",
          },
          {
            text: "Bir GYO'nun tek bir ihra���ya ait para ve sermaye piyasas� ara�lar�na yapaca�� yat�r�m, aktif toplam�n azami y�zde ka��n� olu�turabilir?",
            options: [
              { id: "A", text: "%5" },
              { id: "B", text: "%10" },
              { id: "C", text: "%25" },
              { id: "D", text: "%50" },
            ],
            correct: "B",
            explanation:
              "Portf�y s�n�rlamalar� �er�evesinde, GYO'lar�n aktif toplam�n�n en fazla %50'si para ve sermaye piyasas� ara�lar�na yat�r�labilir; ancak tek bir ihra���ya ait ara�lara yap�lan yat�r�m aktif toplam�n %10'unu a�amaz. Bu yo�unla�ma riskini �nleyen temel s�n�rd�r.",
          },
        ],
      },
      // �������������������� Ders 2: Menkul K�ymet Yat�r�m Ortakl�klar� ��������������������
      {
        id: "m1002-l2",
        title: "Menkul K�ymet Yat�r�m Ortakl�klar� ve DSYO (III-48.5)",
        duration: "9 dk",
        summary: {
          title: "Menkul K�ymet Yat�r�m Ortakl�klar� ve DSYO (III-48.5)",
          intro:
            "Menkul K�ymet Yat�r�m Ortakl�klar� (MKYO), III-48.5 say�l� Tebli� kapsam�nda d�zenlenen sermaye piyasas� kurumlar� olup; ortaklara ait fonlar�n sermaye piyasas� ara�lar�, k�ymetli madenler ve di�er varl�klara yat�r�lmas� yoluyla olu�turulan portf�yleri profesyonel olarak y�netir. Tebli� ayr�ca 'De�i�ken Sermayeli Yat�r�m Ortakl���' (DSYO) kavram�n� da d�zenleyerek T�rk sermaye piyasas�na Avrupa'daki UCITs benzeri a��k u�lu yap�lar kazand�rm��t�r.",
          sections: [
            {
              heading: "Sabit Sermayeli MKYO Esaslar�",
              icon: "shield",
              items: [
                {
                  strong: "Hukuki Yap�:",
                  text: "MKYO'lar t�zel ki�ili�i haiz anonim ortakl�klar olup paylar�n� ��karmak ve halka arz� yapmak suretiyle toplad�klar� fonlar� profesyonel y�netimle de�erlendirir.",
                },
                {
                  strong: "Faaliyet Alan�:",
                  text: "Faaliyetleri m�nhas�ran portf�y i�letmekle s�n�rl�d�r; portf�ye varl�k al�p satabilir, repo-ters repo i�lemleri yapabilir ve �d�n� i�lemlerinde bulunabilir.",
                },
                {
                  strong: "�� Sistemler Zorunlulu�u:",
                  text: "Y�netim kurulu karar�yla i� kontrol sistemi, risk y�netim sistemi ve tefti� birimi ile bunlar�n g�zetimine y�nelik birimlerin olu�turulmas� zorunludur.",
                },
                {
                  strong: "Yapamayacaklar� ��ler:",
                  text: "Kuruldan izin al�nmaks�z�n esas s�zle�mede belirtilen ama�lar d���nda faaliyette bulunamaz, bankac�l�k-sigortac�l�k yapamaz, kredi veremez, ortaklara bor� para veremez.",
                },
              ],
            },
            {
              heading: "De�i�ken Sermayeli Yat�r�m Ortakl��� (DSYO)",
              icon: "trend",
              items: [
                {
                  strong: "Tan�m:",
                  text: "Esas sermayesi yat�r�m yap�lan varl�klar�n de�erine g�re de�i�en, yat�r�mc� paylar�n�n ihrac� ve geri al�nmas� suretiyle �al��an, kay�tl� sermaye sistemi i�erisinde yer almayan a��k u�lu yat�r�m ortakl���d�r.",
                },
                {
                  strong: "Pay Yap�s�:",
                  text: "DSYO'larda 'kurucu paylar�' ve 'yat�r�mc� paylar�' olmak �zere iki t�r pay bulunur. Yat�r�mc� paylar� talep �zerine ihra� ve geri al�nabilir niteliktedir.",
                },
                {
                  strong: "Portf�y T�rleri:",
                  text: "Hisse senedi, bor�lanma ara�lar�, kira sertifikas�, fon sepeti, karma, para piyasas�, kat�l�m, alt�n ve di�er k�ymetli madenler portf�yleri olu�turulabilir; her birinin asgari %80'i ilgili varl�k t�r�ne yat�r�l�r.",
                },
                {
                  strong: "Serbest Portf�y:",
                  text: "Portf�y s�n�rlamalar�na tabi olmayan, yaln�zca nitelikli yat�r�mc�lara sat�labilen 'serbest portf�yler' olu�turulabilir; bu portf�yler i�in asgari yat�r�m tutar� s�n�rland�r�labilir.",
                },
                {
                  strong: "Kredi S�n�r�:",
                  text: "DSYO'lar net varl�k de�erinin %10'unu a�mamak �zere, fonun likidite ihtiyac�n�n kar��lanmas� amac�yla kredi kullanabilir.",
                },
              ],
            },
          ],
          tip: "MKYO ile DSYO aras�ndaki temel ayr�m kapal� u�lu/a��k u�lu yap�d�r: MKYO'da paylar borsada i�lem g�r�r ve say� sabit kal�r; DSYO'da ise yat�r�mc� talebine g�re paylar s�rekli ihra� edilip geri al�n�r. UCITs'in T�rkiye uygulamas� olarak DSYO'lar fonlarla yat�r�m ortakl�klar� aras�nda bir ge�i� k�pr�s�d�r.",
        },
        questions: [
          {
            text: "III-48.5 say�l� Tebli� uyar�nca De�i�ken Sermayeli Yat�r�m Ortakl��� (DSYO) ile sabit sermayeli MKYO aras�ndaki temel fark a�a��dakilerden hangisidir?",
            options: [
              { id: "A", text: "DSYO t�zel ki�ili�e sahip de�ildir." },
              { id: "B", text: "DSYO esas sermayesi yat�r�m yap�lan varl�klar�n de�erine g�re de�i�ir; yat�r�mc� paylar� talep �zerine ihra� ve geri al�nabilir." },
              { id: "C", text: "DSYO'lar yaln�zca yabanc� yat�r�mc�lara a��kt�r." },
              { id: "D", text: "DSYO'larda k�r da��t�m� yasakt�r." },
            ],
            correct: "B",
            explanation:
              "DSYO; esas sermayesi yat�r�m yap�lan varl�klar�n de�erine g�re de�i�en, yat�r�mc� paylar�n�n ihrac� ve geri al�nmas� suretiyle �al��an a��k u�lu yat�r�m ortakl���d�r. Sabit sermayeli MKYO'da ise sermaye sabittir ve paylar borsada el de�i�tirir.",
          },
          {
            text: "DSYO'larda 'serbest portf�y' niteli�i ta��yan portf�yler kimlere sat�labilir?",
            options: [
              { id: "A", text: "Yaln�zca t�zel ki�i yat�r�mc�lara" },
              { id: "B", text: "Yaln�zca nitelikli yat�r�mc�lara" },
              { id: "C", text: "T�m bireysel ve kurumsal yat�r�mc�lara" },
              { id: "D", text: "Yaln�zca yurtd���nda yerle�ik yat�r�mc�lara" },
            ],
            correct: "B",
            explanation:
              "Tebli�'in 'Serbest portf�yler' ba�l�kl� b�l�m�nde, portf�y s�n�rlamalar�na tabi olmayan serbest portf�ylerin yaln�zca nitelikli yat�r�mc�lara sat�labilece�i d�zenlenmi�tir. Bu portf�yler i�in asgari yat�r�m tutar� da Tebli�'de belirlenmi�tir.",
          },
          {
            text: "A�a��dakilerden hangisi Menkul K�ymet Yat�r�m Ortakl�klar�n�n yapamayacaklar� i�lerden biri DE��LD�R?",
            options: [
              { id: "A", text: "Bankac�l�k ve sigortac�l�k faaliyetlerinde bulunmak" },
              { id: "B", text: "Kredi vermek ve ortaklara bor� para vermek" },
              { id: "C", text: "Portf�ye sermaye piyasas� arac� al�p satmak" },
              { id: "D", text: "Esas s�zle�medeki ama� d���nda Kuruldan izinsiz faaliyet g�stermek" },
            ],
            correct: "C",
            explanation:
              "Sermaye piyasas� ara�lar�n�n portf�ye al�m-sat�m�, MKYO'nun temel faaliyetidir; yapamayacaklar� i� de�il, as�l i�tigal konusudur. Di�er �� se�enek (bankac�l�k, kredi verme, izinsiz ama� d��� faaliyet) Tebli�'de a��k�a yasaklanm��t�r.",
          },
          {
            text: "Bir DSYO'nun fon likidite ihtiyac� i�in kullanabilece�i kredi tutar�, a�a��daki �st s�n�rlardan hangisi ile s�n�rland�r�lm��t�r?",
            options: [
              { id: "A", text: "Net varl�k de�erinin %5'i" },
              { id: "B", text: "Net varl�k de�erinin %10'u" },
              { id: "C", text: "Net varl�k de�erinin %25'i" },
              { id: "D", text: "Net varl�k de�erinin %50'si" },
            ],
            correct: "B",
            explanation:
              "Tebli�'in DSYO'lara ili�kin 'Kredi i�lemleri' ba�l�kl� b�l�m�nde, fonun likidite ihtiyac�n�n kar��lanmas� amac�yla net varl�k de�erinin %10'unu a�mamak �zere kredi kullan�labilece�i d�zenlenmi�tir.",
          },
          {
            text: "DSYO'larda yat�r�mc� paylar�n�n ihra� ve geri al�m� bak�m�ndan a�a��dakilerden hangisi do�rudur?",
            options: [
              { id: "A", text: "Yat�r�mc� paylar� yaln�zca borsada al�n�p sat�labilir; geri al�m yap�lamaz." },
              { id: "B", text: "Yat�r�mc� paylar� talep �zerine ihra� edilebilir ve yat�r�mc�n�n talebi �zerine ortakl�k taraf�ndan geri al�nabilir." },
              { id: "C", text: "Yat�r�mc� paylar�n�n ihrac� sadece halka arz suretiyle ger�ekle�tirilebilir." },
              { id: "D", text: "Yat�r�mc� paylar� nominal de�erinden i�lem g�r�r, fiyat de�i�imi olmaz." },
            ],
            correct: "B",
            explanation:
              "DSYO'nun en ay�rt edici �zelli�i, yat�r�mc� paylar�n�n yat�r�mc� talebi �zerine ihra� edilebilmesi ve yine yat�r�mc� talebi �zerine ortakl�k taraf�ndan geri al�nabilir nitelikte olmas�d�r. Bu a��k u�lu yap�, �r�n� yat�r�m fonlar�na yakla�t�ran temel �zelliktir.",
          },
        ],
      },
      // �������������������� Ders 3: Portf�y Y�netim �irketleri ��������������������
      {
        id: "m1002-l3",
        title: "Portf�y Y�netim �irketleri (III-55.1)",
        duration: "10 dk",
        summary: {
          title: "Portf�y Y�netim �irketleri (III-55.1)",
          intro:
            "III-55.1 say�l� Tebli� uyar�nca Portf�y Y�netim �irketi (PY�); ana faaliyet konusu yat�r�m fonlar�n�n kurulmas� ve y�netimi olan, anonim ortakl�k �eklinde kurulmu� ve Sermaye Piyasas� Kurulu'ndan faaliyet izni alm�� sermaye piyasas� kurumudur. PY�'ler kolektif portf�y y�neticili�i yan�nda, yetki belgesine ba�l� olarak bireysel portf�y y�neticili�i ve yat�r�m dan��manl��� faaliyetlerini de y�r�tebilir.",
          sections: [
            {
              heading: "Kurulu�, Faaliyet �zni ve Sermaye Yeterlili�i",
              icon: "shield",
              items: [
                {
                  strong: "Kurulu� �artlar�:",
                  text: "Anonim ortakl�k �eklinde kurulmas�, paylar�n�n nakit kar��l��� ��kar�lmas�, ba�lang�� sermayesinin Tebli�'de belirlenen tutardan az olmamas�, ticaret unvan�nda 'Portf�y Y�netimi' ibaresinin yer almas� ve esas s�zle�menin Tebli� h�k�mlerine uygun olmas� zorunludur.",
                },
                {
                  strong: "Y�neticilik �art�:",
                  text: "PY�'nin genel m�d�r�n�n, y�neticilerinin ve ihtisas personelinin (portf�y y�neticisi, fon m�d�r�, ara�t�rma uzman�, i� kontrol eleman�, m�fetti�, risk y�netim personeli, yat�r�m dan��man�) ilgili lisanslara ve mesleki tecr�beye sahip olmas� zorunludur.",
                },
                {
                  strong: "Sermaye Yeterlili�i:",
                  text: "Y�netilen portf�y b�y�kl���ne g�re kademeli sermaye yeterlili�i y�k�ml�l��� uygulan�r; portf�y b�y�d�k�e asgari �zsermaye gere�i de artar.",
                },
                {
                  strong: "Portf�y Saklay�c�s� Zorunlulu�u:",
                  text: "PY�'lerin kurucusu oldu�u fonlar�n varl�klar�, Kanun'un 56. maddesi kapsam�nda yetkilendirilmi� portf�y saklama hizmetini y�r�ten kurulu�lar taraf�ndan saklan�r.",
                },
                {
                  strong: "Faaliyetleri S�n�rl� PY�'ler:",
                  text: "M�nhas�ran GYF veya GSYF kurmak i�in kurulan �irketlerde ba�lang�� sermayesi yar� oran�nda uygulan�r; ayr�ca d��ar�dan hizmet al�m� esnekli�i sa�lan�r.",
                },
              ],
            },
            {
              heading: "Y�netim �lkeleri ve Yapamayacaklar� ��ler",
              icon: "trend",
              items: [
                {
                  strong: "Mesleki �zen ve Titizlik �lkesi:",
                  text: "PY� ve �al��anlar�, �st�n gayret ve �zenle i� ve i�lemleri ifa etmek, m��terilerin haklar�n� korumak ve onlar�n yarar�na olacak �ekilde davranmakla y�k�ml�d�r.",
                },
                {
                  strong: "Ba��ms�zl�k �lkesi:",
                  text: "PY� ve �al��anlar�, sermaye piyasas� faaliyetleri ile ilgili kararlarda ba��ms�zl�klar�n� koruyarak g�revlerini ifa eder; menfaat �at��malar�na yol a�abilecek hususlardan ka��n�r.",
                },
                {
                  strong: "��kar �at��mas�n�n �nlenmesi:",
                  text: "M��teriler aras�nda, m��terilerle PY� aras�nda ve m��terilerle PY� �al��anlar� aras�nda ��kabilecek ��kar �at��malar�n�n �nlenmesine y�nelik yaz�l� politika ve prosed�rlerin olu�turulmas� zorunludur.",
                },
                {
                  strong: "S�r Saklama Y�k�ml�l���:",
                  text: "PY�'nin y�netim kurulu �yeleri, ortaklar�, �al��anlar� s�fatlar�ndan dolay� ��rendikleri m��terilere ait s�rlar� a��klayamazlar; bu y�k�ml�l�k g�revden ayr�lmadan sonra da devam eder.",
                },
                {
                  strong: "Yapamayaca�� ��ler:",
                  text: "PY�; mevduat veya kat�l�m fonu kabul�, �d�n� para verme, yetki belgesinin kapsam� d���ndaki sermaye piyasas� faaliyetleri, ticari, s�nai ve zirai faaliyetler ve esas s�zle�mesinde belirtilenler d���ndaki konularda i�tirak edinemez.",
                },
              ],
            },
          ],
          tip: "PY�'nin temel sorumlulu�u 'inan�l� m�lkiyet' esas�na dayan�r: y�netti�i fon malvarl��� kendi m�lkiyetinden ayr� tutulur ve yat�r�mc� ��kar�na y�netilir. S�navda en s�k kar��la��lan tuzak, mevduat kabul� ile fon kuruculu�unun kar��t�r�lmas�d�r � PY� asla mevduat kabul etmez, yaln�zca fon kurar ve y�netir.",
        },
        questions: [
          {
            text: "III-55.1 say�l� Tebli� uyar�nca a�a��dakilerden hangisi Portf�y Y�netim �irketinin yapamayaca�� i�lerden biridir?",
            options: [
              { id: "A", text: "Yat�r�m fonu kurmak ve y�netmek" },
              { id: "B", text: "Yat�r�m dan��manl��� hizmeti vermek" },
              { id: "C", text: "Mevduat veya kat�l�m fonu kabul etmek" },
              { id: "D", text: "Bireysel portf�y y�neticili�i yapmak" },
            ],
            correct: "C",
            explanation:
              "Mevduat veya kat�l�m fonu kabul etmek bankac�l�k faaliyetidir ve PY�'lerin yapamayaca�� i�ler aras�nda a��k�a d�zenlenmi�tir. Yat�r�m fonu kurmak ve y�netmek, yat�r�m dan��manl��� ve bireysel portf�y y�neticili�i ise PY�'nin as�l faaliyet alanlar�ndand�r.",
          },
          {
            text: "M�nhas�ran gayrimenkul yat�r�m fonu veya giri�im sermayesi yat�r�m fonu kurmak ve y�netmek �zere kurulan PY�'lerin ba�lang�� sermayesi nas�l uygulan�r?",
            options: [
              { id: "A", text: "Ayn� tutarda uygulan�r." },
              { id: "B", text: "�ki kat olarak uygulan�r." },
              { id: "C", text: "Yar�s� olarak uygulan�r." },
              { id: "D", text: "Be� kat� olarak uygulan�r." },
            ],
            correct: "C",
            explanation:
              "Tebli�'in 'Faaliyetleri S�n�rl� Portf�y Y�netim �irketlerine �li�kin Esaslar' ba�l�kl� b�l�m�nde, m�nhas�ran GYF veya GSYF kurmak ve y�netmek �zere kurulan �irketlerde ba�lang�� sermayesi tutar� ile asgari �zsermaye ve sermaye tutarlar�n�n yar�s� olarak uygulanaca�� d�zenlenmi�tir.",
          },
          {
            text: "Bir PY�'nin kurucusu oldu�u fonun portf�y y�netim hizmetinin ba�ka bir PY�'den al�nmas� durumunda, fonun y�netimine ili�kin sorumluluk kime aittir?",
            options: [
              { id: "A", text: "Hizmeti veren PY�'ye ge�er; kurucu sorumluluktan kurtulur." },
              { id: "B", text: "Sorumluluk Sermaye Piyasas� Kurulu'na ge�er." },
              { id: "C", text: "Hizmet d��ar�dan al�nm�� olsa dahi kurucu PY�'nin sorumlulu�u devam eder." },
              { id: "D", text: "Sorumluluk portf�y saklay�c�s� kurulu�a devredilir." },
            ],
            correct: "C",
            explanation:
              "Tebli�'de a��k�a d�zenlendi�i �zere, �irket'in kurucusu oldu�u fonun portf�y�n�n y�netimine ili�kin hizmetin d��ar�dan al�nmas� halinde dahi �irket'in fonun y�netimine ili�kin sorumlulu�u devam eder. Bu kural inan�l� m�lkiyet ve yat�r�mc� korumas� ilkesinin do�al sonucudur.",
          },
          {
            text: "PY� Tebli�i'nde tan�mlanan 'ihtisas personeli' kapsam�nda a�a��dakilerden hangisi yer ALMAZ?",
            options: [
              { id: "A", text: "Portf�y y�neticisi" },
              { id: "B", text: "Fon m�d�r�" },
              { id: "C", text: "M��teri ili�kileri y�netmeni" },
              { id: "D", text: "�� kontrol eleman�" },
            ],
            correct: "C",
            explanation:
              "Tebli�'de ihtisas personeli; ara�t�rma uzman�, fon m�d�r�, i� kontrol eleman�, m�fetti�, portf�y y�neticisi, risk y�netim birimi personeli ve yat�r�m dan��man�n� ifade eder. M��teri ili�kileri y�netmeni bu listede yer almaz.",
          },
          {
            text: "PY�'nin s�r saklama y�k�ml�l��� ile ilgili a�a��daki ifadelerden hangisi do�rudur?",
            options: [
              { id: "A", text: "Y�k�ml�l�k yaln�zca g�rev s�resi boyunca devam eder, g�revden ayr�ld�ktan sonra sona erer." },
              { id: "B", text: "Y�k�ml�l�k yaln�zca y�netim kurulu �yeleri i�in ge�erlidir, �al��anlar i�in uygulanmaz." },
              { id: "C", text: "Y�netim kurulu �yeleri, ortaklar� ve �al��anlar� i�in ge�erli olan bu y�k�ml�l�k, g�revden ayr�lmadan sonra da devam eder." },
              { id: "D", text: "�irket pay sahipleri s�rr� isterlerse a��klanabilir." },
            ],
            correct: "C",
            explanation:
              "Tebli�'in 'S�r Saklama' ba�l�kl� b�l�m�, PY�'nin y�netim kurulu �yeleri, ortaklar�, �al��anlar�n�n s�fatlar�ndan dolay� ��rendikleri m��terilere ait s�rlar� a��klayamayacaklar�n� ve bu y�k�ml�l���n g�revden ayr�lmadan sonra da devam edece�ini d�zenler.",
          },
        ],
      },
      // �������������������� Ders 4: Borsa Yat�r�m Fonlar� ��������������������
      {
        id: "m1002-l4",
        title: "Borsa Yat�r�m Fonlar� (III-52.2)",
        duration: "9 dk",
        summary: {
          title: "Borsa Yat�r�m Fonlar� (III-52.2)",
          intro:
            "Borsa Yat�r�m Fonu (BYF), III-52.2 say�l� Tebli� kapsam�nda d�zenlenen, kat�lma paylar� B�A�'ta i�lem g�ren ve fon portf�y�n�n kompozisyonunu yans�tacak �ekilde portf�yde yer alan varl�klar�n veya nakdin teslimi suretiyle kat�lma pay� olu�turulabilen ya da iadesi kar��l���nda bu varl�klar�n al�nmas�na imkan veren a��k u�lu yat�r�m arac�d�r. BYF'ler, yat�r�m fonu ile menkul k�ymet yat�r�m ortakl���n�n �zelliklerini birle�tiren karma bir enstr�mand�r.",
          sections: [
            {
              heading: "Hukuki Yap� ve Endeks Takibi",
              icon: "shield",
              items: [
                {
                  strong: "Hukuki Niteli�i:",
                  text: "T�zel ki�ili�i bulunmayan, portf�y y�netim �irketleri taraf�ndan bir i�t�z�k ile kurulan ve inan�l� m�lkiyet esaslar�na g�re i�letilen malvarl���d�r.",
                },
                {
                  strong: "Endeks Takibi Zorunlulu�u:",
                  text: "BYF'ler Kurul taraf�ndan uygun g�r�len bir endeksi takip etmek �zere kurulur; portf�ylerinin en az %80'i devaml� olarak takip edilen endeks kapsam�ndaki varl�klara yat�r�l�r.",
                },
                {
                  strong: "Asgari Halka Arz Tutar�:",
                  text: "Halka arz a�amas�nda konulacak avans veya yap�lacak halka arz tutar�n�n en az 50 milyon TL olmas� zorunludur; bu kural yetersiz likiditeyi �nlemeyi ama�lar.",
                },
                {
                  strong: "Asgari Fon Toplam De�eri:",
                  text: "Faaliyet s�resince, her ay�n son i� g�n� yap�lan de�erlendirme itibar�yla fon toplam de�erinin son �� ayl�k ortalama de�erinin 25 milyon TL'nin alt�na d��emeyece�i h�k�m alt�na al�nm��t�r.",
                },
                {
                  strong: "Yabanc� Para Birimleri:",
                  text: "Yat�r�m fonlar�ndan farkl� olarak, TCMB taraf�ndan g�nl�k al�m-sat�m kurlar� ilan edilen yabanc� para birimleri BYF portf�ylerine dahil edilebilir.",
                },
              ],
            },
            {
              heading: "Birincil-�kincil Piyasa ��lemleri ve Performans",
              icon: "trend",
              items: [
                {
                  strong: "Birincil Piyasa ��lemleri:",
                  text: "Belirli bir BYF pay� (�rn. 50.000 pay) ve katlar� kar��l���nda ayni ve/veya nakdi olarak ger�ekle�tirilir; bu nedenle birincil piyasa i�lemleri b�y�k �l��de nitelikli yat�r�mc�lar taraf�ndan kullan�l�r.",
                },
                {
                  strong: "Arbitraj Mekanizmas�:",
                  text: "��lem fiyat� ile birim pay de�eri aras�nda sapma oldu�unda yat�r�mc�lar 'creation' (olu�turma) ve 'redemption' (iade) i�lemleriyle prim/iskontoyu kapatabilir; bu MKYO'larda g�r�len iskontolu i�lem sorununu BYF'lerde ortadan kald�r�r.",
                },
                {
                  strong: "Takip Fark� ve Takip Hatas�:",
                  text: "Eski mevzuattaki %90'l�k korelasyon zorunlulu�u kald�r�lm��, yerine 'tracking difference' (takip fark�) ve 'tracking error' (takip hatas�) kavramlar� getirilmi�tir; bu kriterlerin kamuya a��klanmas� zorunludur.",
                },
                {
                  strong: "Swap'a Dayal� BYF'ler:",
                  text: "Swap s�zle�melerine dayal� BYF'lerde kar�� taraf riski fon toplam de�erinin azami %10'u ile s�n�rland�r�lm�� olup, fon unvan�nda dolayl� endeks takibini belirtecek bir ibareye yer verilmesi zorunludur.",
                },
                {
                  strong: "Y�netim �creti Avantaj�:",
                  text: "BYF'lerin y�netim �cretleri, klasik endeks fonlara k�yasla �nemli �l��de d���kt�r; bu �zellik d���k maliyetli pasif yat�r�m stratejisi i�in cazip k�lar.",
                },
              ],
            },
          ],
          tip: "BYF, MKYO ve klasik yat�r�m fonu ��l�s� s�navda s�k�a kar��la�t�r�l�r: t�zel ki�ili�i yaln�zca MKYO'da var, ikincil piyasa i�lemi yat�r�m fonunda yok, birincil piyasa i�lemi yaln�zca yat�r�m fonu ile BYF'de var. Birincil piyasa i�lemleri sayesinde BYF'lerde MKYO'lardaki iskontolu i�lem sorunu ya�anmaz.",
        },
        questions: [
          {
            text: "III-52.2 say�l� Tebli� uyar�nca BYF'lerin halka arz a�amas�nda konulacak avans veya yap�lacak halka arz tutar�n�n asgari s�n�r� a�a��dakilerden hangisidir?",
            options: [
              { id: "A", text: "10 milyon TL" },
              { id: "B", text: "25 milyon TL" },
              { id: "C", text: "50 milyon TL" },
              { id: "D", text: "100 milyon TL" },
            ],
            correct: "C",
            explanation:
              "Tebli� uyar�nca BYF kat�lma paylar�n�n likiditesinin ve i�lem hacminin �ok d���k bir d�zeyde ger�ekle�mesinin �n�ne ge�ilmesi amac�yla halka arz a�amas�nda konulacak avans tutar�n�n ya da yap�lacak halka arz tutar�n�n en az 50 milyon TL olmas� �ng�r�lm��t�r.",
          },
          {
            text: "Yat�r�m Fonu, Borsa Yat�r�m Fonu (BYF) ve Menkul K�ymet Yat�r�m Ortakl��� (MKYO) kar��la�t�r�ld���nda a�a��dakilerden hangisi YANLI�TIR?",
            options: [
              { id: "A", text: "Yat�r�m fonunun ve BYF'nin t�zel ki�ili�i yokken, MKYO t�zel ki�ili�e sahiptir." },
              { id: "B", text: "Yat�r�m fonu aktif y�netim, BYF pasif y�netim, MKYO ise aktif y�netim ile y�netilir." },
              { id: "C", text: "Yat�r�m fonunda ikincil piyasa i�lemi yap�l�rken BYF'de yap�lmaz." },
              { id: "D", text: "BYF ve MKYO kat�lma paylar�/paylar� borsada i�lem g�r�r." },
            ],
            correct: "C",
            explanation:
              "Yat�r�m fonlar�nda ikincil piyasa i�lemi YOKTUR; yat�r�mc� kat�lma paylar�n� yaln�zca kurucudan al�p ona iade eder. BYF ve MKYO'larda ise ikincil piyasa i�lemleri t�m yat�r�mc�lara a��k ve nakdi olarak g�nl�k ger�ekle�tirilir. Di�er �� ifade do�rudur.",
          },
          {
            text: "Bir BYF'nin portf�y�n�n asgari ne kadar�, takip etti�i endeks kapsam�ndaki varl�klara devaml� olarak yat�r�lmak zorundad�r?",
            options: [
              { id: "A", text: "%51" },
              { id: "B", text: "%70" },
              { id: "C", text: "%80" },
              { id: "D", text: "%100" },
            ],
            correct: "C",
            explanation:
              "Tebli� uyar�nca BYF'lerin portf�ylerinin en az %80'ini devaml� olarak sadece takip edilen endeks kapsam�ndaki varl�klara yat�rmalar� zorunludur. Ayn� %80 oran�, takip edilen endeksi takip eden yabanc� borsalarda i�lem g�ren BYF kat�lma paylar� i�in de ge�erlidir.",
          },
          {
            text: "Swap s�zle�melerine dayal� BYF'lerde kar�� taraf riski fon toplam de�erinin azami y�zde ka�� ile s�n�rland�r�lm��t�r?",
            options: [
              { id: "A", text: "%5" },
              { id: "B", text: "%10" },
              { id: "C", text: "%20" },
              { id: "D", text: "%25" },
            ],
            correct: "B",
            explanation:
              "Tebli�'de swap s�zle�melerine dayal� BYF'ler i�in kar�� taraf riskinin fon toplam de�erinin azami %10'u ile s�n�rland�r�ld��� d�zenlenmi�tir. Ayr�ca bu fonlar�n unvanlar�nda dolayl� endeks takibini belirtecek bir ibareye yer verilmesi zorunludur.",
          },
          {
            text: "BYF'lerin MKYO'lara �st�nl���n�n temel sebebi olarak Tebli� ve uygulamada ortaya konulan en �nemli mekanizma a�a��dakilerden hangisidir?",
            options: [
              { id: "A", text: "BYF'lerde yat�r�m dan��manl��� zorunlulu�unun bulunmas�" },
              { id: "B", text: "Birincil piyasa i�lemleri (creation/redemption) sayesinde i�lem fiyat�n�n fon birim pay de�erine �ok yak�n seyretmesi ve �nemli iskonto/primin �nlenmesi" },
              { id: "C", text: "BYF'lerin sadece kurumsal yat�r�mc�lara a��k olmas�" },
              { id: "D", text: "BYF'lerin Kurul denetimine tabi olmamas�" },
            ],
            correct: "B",
            explanation:
              "BYF'lerin MKYO'lara temel �st�nl���, birincil piyasa creation/redemption mekanizmas�d�r: i�lem fiyat�n�n birim pay de�erinden sapmas� durumunda yat�r�mc�lar arbitraj yaparak fiyat� dengeler. Bu sayede MKYO'larda g�r�len iskontolu i�lem sorunu BYF'lerde �nemli �l��de ��z�lm��t�r.",
          },
        ],
      },
      // �������������������� Ders 5: GYF ve GSYF ��������������������
      {
        id: "m1002-l5",
        title: "Gayrimenkul ve Giri�im Sermayesi Yat�r�m Fonlar� (III-52.3 / III-52.4)",
        duration: "10 dk",
        summary: {
          title: "Gayrimenkul ve Giri�im Sermayesi Yat�r�m Fonlar�",
          intro:
            "III-52.3 say�l� Gayrimenkul Yat�r�m Fonu (GYF) Tebli�i ve III-52.4 say�l� Giri�im Sermayesi Yat�r�m Fonu (GSYF) Tebli�i, nitelikli yat�r�mc�lar�n alternatif yat�r�m enstr�manlar�na eri�imini d�zenler. Bu fonlar t�zel ki�ili�i bulunmayan, portf�y y�netim �irketleri taraf�ndan kurulan ve inan�l� m�lkiyet esaslar�na g�re profesyonel y�netilen kapal� u�lu yap�lard�r. Her ikisi de yaln�zca nitelikli yat�r�mc�lara sat�labilir.",
          sections: [
            {
              heading: "Gayrimenkul Yat�r�m Fonu (GYF) Esaslar�",
              icon: "shield",
              items: [
                {
                  strong: "Tan�m ve Hukuki Yap�:",
                  text: "GYF; nitelikli yat�r�mc�lardan toplanan paralarla, pay sahipleri hesab�na inan�l� m�lkiyet esaslar�na g�re Kurulca belirlenmi� varl�k ve haklardan olu�an portf�y� i�letmek amac�yla PY� taraf�ndan kurulan ve t�zel ki�ili�i bulunmayan malvarl���d�r.",
                },
                {
                  strong: "Asgari Gayrimenkul Yat�r�m�:",
                  text: "Fon toplam de�erinin en az %80'inin gayrimenkul yat�r�mlar�ndan olu�mas� zorunludur; bu e�ik GYO'larda %51 iken GYF'de %80'e ��kmaktad�r.",
                },
                {
                  strong: "Sadece Nitelikli Yat�r�mc�lara Sat��:",
                  text: "GYF kat�lma paylar� yaln�zca nitelikli yat�r�mc�lara sat�labilir; bu nedenle izahname yerine ihra� belgesi d�zenlenir.",
                },
                {
                  strong: "S�reli ve S�resiz Fonlar:",
                  text: "GYF'ler s�reli veya s�resiz olarak kurulabilir; s�resi sona eren fonlar Kurul izniyle tasfiye edilir, varl�klar nakde d�n��t�r�lerek pay sahiplerine da��t�l�r.",
                },
                {
                  strong: "Bor�lanma:",
                  text: "GYF'ler fon toplam de�erinin azami %50'si oran�nda kredi kullanabilir; ipotek tesisi m�mk�nd�r.",
                },
              ],
            },
            {
              heading: "Giri�im Sermayesi Yat�r�m Fonu (GSYF) Esaslar�",
              icon: "trend",
              items: [
                {
                  strong: "Tan�m:",
                  text: "GSYF; nitelikli yat�r�mc�lardan kat�lma pay� kar��l��� toplanan paralarla, pay sahipleri hesab�na inan�l� m�lkiyet esaslar� �er�evesinde giri�im sermayesi yat�r�mlar�ndan olu�an portf�y� i�letmek amac�yla kurulan kapal� u�lu fondur.",
                },
                {
                  strong: "Asgari Giri�im Sermayesi Yat�r�m�:",
                  text: "Fon toplam de�erinin en az %80'inin giri�im sermayesi yat�r�mlar�na y�nlendirilmesi zorunludur; kalan k�s�m sermaye piyasas� ara�lar�, mevduat ve ters repo gibi likit varl�klara yat�r�labilir.",
                },
                {
                  strong: "Yat�r�m Komitesi:",
                  text: "GSYF kuran PY� b�nyesinde, en az �� ki�ilik yat�r�m komitesinin olu�turulmas� zorunludur; �yelerinin giri�im sermayesi yat�r�mlar�nda en az 5 y�ll�k tecr�beye sahip olmas� gerekir.",
                },
                {
                  strong: "S�re S�n�r�:",
                  text: "GSYF'ler en fazla 12 y�ll�k s�reyle kurulabilir; bu s�re Kurul izniyle uzat�labilir.",
                },
                {
                  strong: "Vergisel Avantaj:",
                  text: "GSYF kat�lma paylar�na yap�lan yat�r�mlar belirli ko�ullarda kurumlar vergisi indirimine ve gelir vergisi istisnas�na konu olabilir; bu avantaj GSYF'leri kurumsal yat�r�mc�lar i�in cazip k�lar.",
                },
              ],
            },
          ],
          tip: "GYO ile GYF, GSYO ile GSYF aras�ndaki temel ayr�m hukuki yap�dad�r: ortakl�klar (GYO/GSYO) t�zel ki�ili�e sahip ve halka a��k iken, fonlar (GYF/GSYF) t�zel ki�ili�i olmayan ve yaln�zca nitelikli yat�r�mc�lara a��k yap�lard�r. Vergi avantaj� a��s�ndan da GSYF, GSYO'ya k�yasla genellikle daha avantajl� bir yap� sunar.",
        },
        questions: [
          {
            text: "III-52.3 say�l� Tebli� uyar�nca bir Gayrimenkul Yat�r�m Fonu'nun (GYF) toplam de�erinin asgari ne kadar� gayrimenkul yat�r�mlar�ndan olu�mak zorundad�r?",
            options: [
              { id: "A", text: "%51" },
              { id: "B", text: "%70" },
              { id: "C", text: "%80" },
              { id: "D", text: "%100" },
            ],
            correct: "C",
            explanation:
              "GYF'ler i�in fon toplam de�erinin en az %80'inin gayrimenkul yat�r�mlar�ndan olu�mas� zorunludur. Bu oran GYO'larda %51 iken GYF'de %80'e ��kmaktad�r; ��nk� GYF'ler sadece nitelikli yat�r�mc�lara a��k oldu�u i�in yat�r�mc� korumas�n�n yan� s�ra portf�y konsantrasyonu daha s�k� tutulur.",
          },
          {
            text: "A�a��dakilerden hangisi GYF ile GYO aras�ndaki TEMEL farklardan biridir?",
            options: [
              { id: "A", text: "GYF t�zel ki�ili�e sahip iken GYO t�zel ki�ili�i bulunmayan bir yap�d�r." },
              { id: "B", text: "GYF yaln�zca nitelikli yat�r�mc�lara a��k iken GYO halka a��k bir ortakl�k yap�s�d�r." },
              { id: "C", text: "GYF'ler Kurul denetimine tabi de�il, GYO'lar ise tabidir." },
              { id: "D", text: "GYF'lerde gayrimenkul yat�r�m oran� %25 iken GYO'larda %51'dir." },
            ],
            correct: "B",
            explanation:
              "Temel ayr�m yat�r�mc� kitlesi ve hukuki yap�dad�r: GYF t�zel ki�ili�i olmayan, sadece nitelikli yat�r�mc�lara sat�labilen kapal� u�lu fondur; GYO ise t�zel ki�ili�i haiz, halka a��k anonim ortakl�k yap�s�d�r. Di�er �� se�enek tan�mlara ayk�r�d�r.",
          },
          {
            text: "Bir Giri�im Sermayesi Yat�r�m Fonu (GSYF) en fazla ka� y�ll�k s�reyle kurulabilir?",
            options: [
              { id: "A", text: "5 y�l" },
              { id: "B", text: "8 y�l" },
              { id: "C", text: "10 y�l" },
              { id: "D", text: "12 y�l" },
            ],
            correct: "D",
            explanation:
              "Tebli� uyar�nca GSYF'ler en fazla 12 y�ll�k s�reyle kurulabilir. Bu s�re, fon s�resinin sonunda Kurul izniyle uzat�labilir; ancak temel s�n�r 12 y�ld�r. Giri�im sermayesi yat�r�mlar�n�n olgunla�ma s�resi g�z �n�nde bulundurularak bu uzun vade �ng�r�lm��t�r.",
          },
          {
            text: "GSYF kuran bir Portf�y Y�netim �irketi b�nyesinde olu�turulmas� zorunlu olan yat�r�m komitesi ile ilgili a�a��dakilerden hangisi DO�RUDUR?",
            options: [
              { id: "A", text: "En az 5 ki�iden olu�mal�d�r." },
              { id: "B", text: "En az �� ki�iden olu�mal�; �yelerin giri�im sermayesi yat�r�mlar�nda en az 5 y�ll�k tecr�besi olmal�d�r." },
              { id: "C", text: "Tamam� y�netim kurulu �yelerinden olu�mak zorundad�r." },
              { id: "D", text: "Yaln�zca ba��ms�z �yelerden te�kil edilebilir." },
            ],
            correct: "B",
            explanation:
              "PY� Tebli�i'nin GSYF'ye ili�kin h�k�mlerine g�re �irket b�nyesinde en az �� ki�ilik bir yat�r�m komitesinin olu�turulmas� ve �yelerinden ilgili ki�ilerin giri�im sermayesi yat�r�mlar� konusunda en az 5 y�ll�k tecr�beye sahip olmas� zorunludur.",
          },
          {
            text: "A�a��dakilerden hangisi bir GYF'nin temel �zelliklerinden biri DE��LD�R?",
            options: [
              { id: "A", text: "PY� taraf�ndan kurulmas� ve y�netilmesi" },
              { id: "B", text: "T�zel ki�ili�i bulunmamas� ve inan�l� m�lkiyet esaslar�na g�re i�letilmesi" },
              { id: "C", text: "Kat�lma paylar�n�n B�A�'ta t�m yat�r�mc�lara a��k olarak i�lem g�rmesi" },
              { id: "D", text: "Fon toplam de�erinin azami %50'si oran�nda kredi kullanabilmesi" },
            ],
            correct: "C",
            explanation:
              "GYF'lerin kat�lma paylar� B�A�'ta T�M yat�r�mc�lara a��k olarak i�lem G�RMEZ; ��nk� GYF kat�lma paylar� yaln�zca nitelikli yat�r�mc�lara sat�labilir. Di�er �� �zellik (PY� taraf�ndan kurulma, t�zel ki�ili�i olmama, %50 kredi s�n�r�) GYF Tebli�i'ne uygundur.",
          },
        ],
      },
      // �������������������� Ders 6: Sermaye Piyasas� �al��anlar� Etik �lkeleri ��������������������
      {
        id: "m1002-l6",
        title: "Sermaye Piyasas� �al��anlar� Etik �lkeleri ve Davran�� Kurallar�",
        duration: "8 dk",
        summary: {
          title: "Sermaye Piyasas� �al��anlar� Etik �lkeleri",
          intro:
            "T�rkiye Sermaye Piyasalar� Birli�i (TSPB) taraf�ndan yay�mlanan Sermaye Piyasas� �al��anlar� Etik �lkeleri ve Davran�� Kurallar�, sermaye piyasas� faaliyetinde bulunan t�m �al��anlar�n mesleki davran��lar�na y�nelik ba�lay�c� standartlar getirir. Etik ilkelerin temelinde 'mesleki uzmanl�k' vard�r; �al��an, yasal �er�eveyi tam ve yetkin bi�imde bilmek, m��teri ��kar�n� korumak ve piyasan�n b�t�nl���n� g�zetmekle y�k�ml�d�r.",
          sections: [
            {
              heading: "Mesleki Uzmanl�k Davran�� Kurallar�",
              icon: "shield",
              items: [
                {
                  strong: "Mevzuat�n Bilinmesi:",
                  text: "Sermaye piyasas� �al��an�, sermaye piyasas� ve ilgili di�er mevzuat�, kurum i�i d�zenlemeleri ��renmeli, kendini g�ncel tutmal� ve bunlara uymal�d�r. Mevzuatlar aras�nda �eli�ki oldu�unda daha kat� olan d�zenlemeye g�re hareket etmelidir.",
                },
                {
                  strong: "Ba��ms�zl�k ve Tarafs�zl�k:",
                  text: "�al��an, kendisinin veya ba�kalar�n�n ba��ms�zl���na g�lge d���rebilecek hediye, menfaat veya maddi kar��l�k sa�lamamal�; m�tevaz� hediyeler d���nda her t�rl� teklifi reddetmelidir.",
                },
                {
                  strong: "��sel Bilgilerin Kullan�lmamas�:",
                  text: "�al��an, i�sel bilgiyi kullanarak i�lem yapamaz; bilginin fiyatlara yans�y�p yans�mamas�ndan ba��ms�z olarak i�sel bilgi kullan�m� davran�� kural�n�n ihlali say�l�r.",
                },
                {
                  strong: "Mesleki Uzmanl��a Uygun Olmayan Davran��:",
                  text: "Sahtek�rl�k, hile veya aldatma i�eren hi�bir mesleki davran��ta bulunulamaz; profesyonel d�r�stl���, itibar� veya yetkinli�i zedeleyen t�m davran��lar bu kural�n ihlali say�l�r.",
                },
                {
                  strong: "Daha Kat� D�zenlemeye Uyma:",
                  text: "T�rk mevzuat� ile yabanc� �lke mevzuat� aras�nda �eli�ki oldu�unda veya bir konu hi� d�zenlenmedi�inde, �al��an daha kat� olan d�zenlemeye uymal�d�r.",
                },
              ],
            },
            {
              heading: "M��teri Sorumlulu�u ve �hlallerin Bildirilmesi",
              icon: "trend",
              items: [
                {
                  strong: "M��teri ��kar�na Hareket:",
                  text: "�al��an, m��terinin ��karlar�n� kendi veya kurumunun ��karlar�n�n �st�nde tutmak ve m��teriye uygun olmayan �r�n veya hizmeti uyararak bildirmekle y�k�ml�d�r.",
                },
                {
                  strong: "M�tevaz� Hediye S�n�r�:",
                  text: "M�tevaz� nitelikteki hediyeler kabul edilebilir; ancak m��teri menfaatleriyle �at��acak �rt�k veya a��k �nerilerin reddedilmesi esast�r. L�ks e�lence, pahal� bilet veya halka arzlarda �ncelik vaadi gibi teklifler kabul edilmez.",
                },
                {
                  strong: "�hlallerin Bildirilmesi:",
                  text: "�al��an, kurumunda mevzuata ayk�r� i� ve i�lem fark etti�inde �nce s�ral� amirlerine bildirir; sonu� alamad���nda SPK, MASAK ve/veya TSPB'ye bildirim yapma y�k�ml�l��� do�ar.",
                },
                {
                  strong: "�li�ki Kesme Y�k�ml�l���:",
                  text: "Bildirim ve uyar�lar�na ra�men ayk�r�l�k devam etti�inde �al��an, s�z konusu eylemle veya gerekirse kurumla ili�kisini kesmek zorundad�r.",
                },
                {
                  strong: "Uyum Birimine Ba�vuru:",
                  text: "Mevzuat�n uygulanmas�nda �eli�kili durumlarda, �al��an kurumun mevzuata uyum biriminden veya hukuk b�l�m�nden destek almakla y�k�ml�d�r.",
                },
              ],
            },
          ],
          tip: "Etik ilkelerde 'daha kat� olan d�zenlemeye uyma' kural� temel pusulad�r: iki mevzuat �eli�iyorsa veya konu hi� d�zenlenmemi�se, �al��an her zaman daha s�k� olan kurala uyacakt�r. ��sel bilgi kullan�m� ise bilginin fiyata yans�y�p yans�mad���na bak�lmaks�z�n ihlal te�kil eder � bu ayr�m s�navda �elmeli soru olarak s�k�a kar��m�za ��kar.",
        },
        questions: [
          {
            text: "Bir sermaye piyasas� �al��an�, yurtd���nda inceleme yapt��� bir �irkete ili�kin hen�z kamuya a��klanmam�� ve �irketin piyasa de�erini etkileyebilecek bir bilgi edinmi�tir. �lgili �lkede bilgi suistimali su�u d�zenlenmemi�tir. �al��an�n yapmas� gereken nedir?",
            options: [
              { id: "A", text: "Bilgiyi serbest�e kullanabilir, ��nk� ilgili �lke mevzuat� buna izin vermektedir." },
              { id: "B", text: "T�rk mevzuat�ndaki daha kat� kurala uymal� ve bu bilgiyi tavsiyelerinde kullanmamal�d�r." },
              { id: "C", text: "Bilgiyi yaln�zca kurum i�i payla��ma a�abilir." },
              { id: "D", text: "Bilgiyi sadece kurumsal yat�r�mc�larla payla�abilir." },
            ],
            correct: "B",
            explanation:
              "Etik �lkelerin 'Mevzuat�n Bilinmesi' davran�� kural�na g�re, mevzuatlar aras�nda uyumsuzluk veya �eli�ki olmas� durumunda veya bir �lkede konunun d�zenlenmemi� olmas� halinde, sermaye piyasas� �al��an� daha kat� olan d�zenlemeye uymal�d�r. T�rk mevzuat�nda bilgi suistimali yasak oldu�undan �al��an bu bilgiyi kullanamaz.",
          },
          {
            text: "TSPB Sermaye Piyasas� �al��anlar� Etik �lkelerine g�re, �al��an�n 'Ba��ms�zl�k ve Tarafs�zl�k' davran�� kural� kapsam�nda de�erlendirildi�inde a�a��dakilerden hangisi DO�RUDUR?",
            options: [
              { id: "A", text: "�al��an, m��terilerden istedi�i her t�rl� hediyeyi kabul edebilir." },
              { id: "B", text: "L�ks e�lencelere davet, pahal� g�steri biletleri veya halka arzlarda �ncelik gibi menfaatler kabul edilebilir." },
              { id: "C", text: "M�tevaz� hediyeler kabul edilebilir; ancak ba��ms�zl��� tehdit edebilecek her t�rl� teklifin reddedilmesi esast�r." },
              { id: "D", text: "Yaln�zca y�neticilerin hediye kabul etme yasa�� vard�r, di�er �al��anlar bu kural�n d���ndad�r." },
            ],
            correct: "C",
            explanation:
              "Etik �lkelerde m�tevaz� nitelikteki hediyelerin kabul edilebilir oldu�u, ancak �al��an�n ba��ms�zl���na ve tarafs�zl���na g�lge d���rebilecek her t�rl� hediye veya menfaat teklifinin reddedilmesinin esas oldu�u a��k�a d�zenlenmi�tir. L�ks e�lence ve halka arz �nceli�i gibi teklifler bu kapsamda kabul edilemez.",
          },
          {
            text: "Bir arac� kurumda �al��an Nil, mevzuata ayk�r� i�lemler tespit etmesine ra�men kurumun uyum birimi 'gereksiz' diyerek konuyu kapatm��t�r. Etik �lkelere g�re Nil'in yapmas� gereken nedir?",
            options: [
              { id: "A", text: "Uyum birimi karar verdi�i i�in art�k herhangi bir sorumlulu�u yoktur." },
              { id: "B", text: "Yaln�zca konu hakk�nda not tutarak kendi sorumlulu�unu kald�rabilir." },
              { id: "C", text: "Konuyu s�ral� amirlerine bildirmeli; sonu� alamad���nda i�lemden ka��narak SPK, MASAK ve/veya TSPB'ye bildirim yapmal�d�r." },
              { id: "D", text: "Do�rudan bas�na bilgi s�zd�rmal�d�r." },
            ],
            correct: "C",
            explanation:
              "Etik �lkelerde, uyum birimi g�r���n�n mevzuata ayk�r�l��� kabul etmedi�i durumlarda dahi �al��an sorumluluktan kurtulmaz. �al��an �nce s�ral� amirlerini bilgilendirmeli, sonu� alamad���nda i� ve i�lemden uzakla��p SPK, MASAK ve/veya TSPB'ye bildirim yapmal�d�r. Bas�na s�zd�rma etik bir y�ntem de�ildir.",
          },
          {
            text: "Etik �lkeler kapsam�nda 'i�sel bilgilerin kullan�lmamas�' kural� bak�m�ndan a�a��dakilerden hangisi do�rudur?",
            options: [
              { id: "A", text: "Bilgi fiyata yans�m��sa kullan�lmas� davran�� kural� ihlali say�lmaz." },
              { id: "B", text: "Bilginin fiyatlara yans�y�p yans�mad���na bak�lmaks�z�n i�sel bilginin kullan�lmas� davran�� kural� ihlalidir." },
              { id: "C", text: "��sel bilgi yaln�zca y�neticiler taraf�ndan kullan�labilir." },
              { id: "D", text: "Bilginin kasten de�il ihmalle kullan�lmas� davran�� kural� ihlali say�lmaz." },
            ],
            correct: "B",
            explanation:
              "�al��ma notunda a��k�a belirtildi�i �zere, i�sel bilgilerin kullan�m� davran�� kural� bilginin fiyatlara yans�y�p yans�mad���yla ilgili de�ildir; bilginin kullan�lmas� yeterlidir. Ayr�ca ihmalk�r davranma da ihlal say�l�r; �rne�in bilginin i�sel oldu�unu bilmesine ra�men kullanan �al��an hem su� hem de davran�� kural� ihlali i�lemi� olur.",
          },
          {
            text: "A�a��dakilerden hangisi 'Mesleki Uzmanl��a Uygun Olmayan Davran��' kural�n�n ihlali say�l�r?",
            options: [
              { id: "A", text: "�al��an�n y�ll�k e�itim seminerlerine kat�lmas�" },
              { id: "B", text: "�al��an�n mevzuat� yak�ndan takip etmesi" },
              { id: "C", text: "Yalan, aldatma, h�rs�zl�k ve di�er d�r�st olmayan eylemlerde bulunma" },
              { id: "D", text: "M��terilerle yaz�l� s�zle�me imzalanmas�" },
            ],
            correct: "C",
            explanation:
              "Mesleki Uzmanl��a Uygun Olmayan Davran�� kural�; profesyonel d�r�stl���, itibar� veya yetkinli�i zedeleyen t�m davran��lar� ele al�r. Yalan, aldatma, h�rs�zl�k ve di�er d�r�st olmayan davran��lar� i�eren herhangi bir eylem davran�� kural�n�n ihlali anlam�na gelir. Di�er �� se�enek olumlu profesyonel davran��lard�r.",
          },
        ],
      },
    ],
  },
];