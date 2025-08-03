# Lutz 🌿

## 👥 Takım İsmi  
**Grup 161**

## 🧑‍💻 Takım Üyesi  
## 👥 Grup Üyeleri

| İsim               | Rol             | Sorumluluklar                                |
|--------------------|------------------|-----------------------------------------------|
| Oğulcan Tunç Tayan | Developer         | Kodlama, uygulama geliştirme                  |
| Defne Turğut       | Scrum Master      | Sprint planlama, dökümantasyon, takip işleri  |

## 📦 Ürün Adı  
**Lutz**

## 📝 Ürün Açıklaması  
**Lutz**, kullanıcıların parfüm tercihlerine göre özel öneriler sunan, yapay zeka destekli bir web uygulamasıdır. Kullanıcıdan aldığı veriyle, zevklerine ve favori kokularına en uygun yeni parfümleri önerir. Amaç; kullanıcıya zaman kazandırmak, doğru kokuyu daha kolay bulmasını sağlamak ve bilinçli alışveriş deneyimi sunmaktır.

## 🎯 Hedef Kitle  
Parfüm dünyasına yeni adım atanlardan, kokuların dünyasında derinleşmiş olanlara kadar **tüm kullanıcılar**.

## 📣 Pazarlama Stratejisi  
- **Deneyim Odaklı Tanıtım:** Kullanıcıların kişisel tercihlerine göre özel öneriler sunulacağı için, ilk tanıtımlar kullanıcı deneyimi odaklı olacak.
- **Sosyal Medya Etkileşimi:** Parfüm önerilerini paylaşmaya teşvik eden dinamik kartlar, kullanıcıların sosyal medya etkileşimini artıracak.
- **Influencer İş Birlikleri:** Niş parfüm toplulukları ve influencer'larla tanıtım kampanyaları düzenlenmesi hedefleniyor.
- **Freemium Model:** Temel öneriler ücretsiz, detaylı analiz ve niş parfüm önerileri premium seviyede sunulacak.

## Proje Teknik Altyapısı ve Temeller

### 🚧 Amaç  
Projenin temel iskeletini kurmak, arayüz yapısını belirlemek ve kullanıcıdan alınacak verilerin nasıl işleneceğine dair bir çerçeve oluşturmaktır.

### ⚙️ Kullanılan Teknolojiler  
- **React.js**: Kullanıcı arayüzünü dinamik ve ölçeklenebilir şekilde oluşturmak için kullanılacak ana framework.
- **Vite**: React projesi hızlıca başlatılmak için tercih edilecek yapılandırıcı.
- **CSS (TailwindCSS ya da SCSS)**: Modern, mobil uyumlu ve sade tasarımlar için stil altyapısı.
- **Yapay Zeka API'si (planlama aşamasında)**: Kullanıcının favori parfümlerine göre yeni öneriler sunmak için kullanılacak.
  
### Product Backlog

| Sprint No | Hedef                                                                      | Açıklama                                                                   |
| --------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Sprint 1  | Temel yapı kurulumu ve frontend tasarımının oturtulması                    | Header, search bar, mevsim seçme arayüzü, database bağlantısı, temel UI    |
| Sprint 2  | Gemini API bağlantısı ve filtreli parfüm eşleşme sisteminin geliştirilmesi | Search bar ve mevsim seçimini alıp backend üzerinden öneri oluşturulması   |
| Sprint 3  | Son testler, önerilen parfümler arayüzü, kullanıcı deneyimi ve deploy      | Önerilen parfümlerin gösterilmesi, görsellerle birlikte, sistemin son hali |


# 🏃 Sprint 1: Frontend Tasarımı ve Backend Temeli 
## Trello Board

<img width="1069" height="612" alt="Ekran görüntüsü 2025-07-17 145003" src="https://github.com/user-attachments/assets/642aa164-a727-4336-971c-5b6369fada7d" />

## Burn-Down Chart

![sprint1_burndown_chart_1_6_temmuz](https://github.com/user-attachments/assets/4b937f0a-a1e2-43a7-919b-8f6aad8b0212)

## 🎯 Sprint Hedefi

- 🖥️ Ana sayfa, header, container ve alt bar oluşturulacak  
- 🔌 Veritabanı bağlantısı sağlanacak  
- 🧴 Parfüm verileri (isim, açıklama, resim) eklenebilecek  
- 🌤️ Mevsim seçme ve 🔍 search bar arayüzü tamamlanacak

## User Story ve Story Point Tablosu
- Sprint 1 için tamamlanacak görev puanı toplam 17 puan olarak belirlenmiştir. Görevlere zorluk seviyesine göre story pointler belirlenmiştir. Bu sprint için hedeflenen puan tamamlanmıştır.

| ID     | User Story                                                                                                 | Açıklama                                  | Story Point |
| ------ | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| US01   | Ben bir kullanıcı olarak, sayfaya girdiğimde şık bir başlık ve slogan görmek istiyorum.                    | Header + "Lutz kokun seni belirler" alanı | 2           |
| US02   | Ben bir kullanıcı olarak, arama yapabileceğim bir search bar görmek istiyorum.                             | Search bar UI                             | 3           |
| US03   | Ben bir kullanıcı olarak, bir mevsim seçerek parfüm eşleştirmesi için filtreleme yapmak istiyorum.         | Mevsim seçme dropdown                     | 3           |
| US04   | Ben bir admin olarak, veritabanına parfüm bilgisi ve görseli ekleyebilmek istiyorum.                       | DB modeli oluşturma + veri ekleme         | 5           |
| US05   | Ben bir kullanıcı olarak, sayfanın alt kısmında öneri parfüm alanını tasarlanmış şekilde görmek istiyorum. | Alt container UI – placeholder öneriler   | 4           |
| Toplam | –                                                                                                          | –                                         | **17**      |

## 📆 Daily Scrum Tablosu

| Gün    | Yapılacak İşler                                  | Notlar                                   |
| ------ | ------------------------------------------------ | ---------------------------------------- |
| 1. Gün | Proje yapısının kurulması, header tasarımı       | UI renkleri ve yazı tipi kararı          |
| 2. Gün | Search bar ve mevsim seçme alanının tasarlanması | Tasarım detayları netleşiyor             |
| 3. Gün | Database yapısının oluşturulması                 | SQLite veya PostgreSQL tercih edilebilir |
| 4. Gün | Veritabanına veri ekleme                         | 10 parfüm örneği + görseller             |
| 5. Gün | Alt bar ve öneri kısmı UI tasarımı               | Henüz filtreleme yok, tasarım            |
| 6. Gün | Tüm tasarımın gözden geçirilmesi                 | Hatalar varsa düzeltilir                 |
| 7. Gün | Demo sunum + sprint review                       | Hazırlık ve geri bildirim                |

## 🔎 Sprint Review
- Tüm temel UI bileşenleri başarıyla oluşturuldu.
- Veritabanı bağlantısı kuruldu ve 6 örnek veri eklendi.
- Gemini API bağlantısı henüz entegre edilmedi (Sprint 2 işi).
- Takım, Lutzla butonunun mantığını netleştirdi.
## 🔁 Sprint Retrospective

| Ne iyi gitti                 | Ne geliştirilmeli          | Aksiyon                                 |
| ---------------------------- | -------------------------- | --------------------------------------- |
| Tasarım net, zamanında bitti | Veri ekleme süreci yavaştı | Veri girişine örnek şablon hazırlanacak |
| Ekip içi iletişim iyiydi     | Görsel optimizasyon eksik  | Görsel boyutları normalize edilecek     |
| UI beğenildi                 | Kodun modülerliği eksik    | Sprint 2’de refactoring yapılacak       |

# 🏃 Sprint 2: Backend Entegrasyonu ve Öneri Sistemi
## Trello Board

<img width="1072" height="620" alt="Ekran görüntüsü 2025-07-17 145903" src="https://github.com/user-attachments/assets/6082045e-492b-4b63-a1d6-bef1063238ad" />

## Burn-Down Chart
<img width="2000" height="1200" alt="sprint2_burndown_chart_7_20_temmuz" src="https://github.com/user-attachments/assets/2e50ce98-4a66-40b5-bb0f-9cfa880ddf34" />

## 🎯 Sprint Hedefi
- 🔗 Search bar ve mevsim seçimlerinin backend’e gönderilmesi  
- 🤖 Gemini API bağlantısının kurulması  
- 🧠 Kullanıcı girdileriyle öneri oluşturulması  
- 🗃️ Veritabanından filtrelenmiş parfüm önerilerinin gösterilmesi  

---

## User Story ve Story Point Tablosu
- Sprint 2 için tamamlanacak görev puanı toplam 18 puan olarak belirlenmiştir. Görevlere zorluk seviyesine göre story pointler belirlenmiştir. Bu sprint için hedeflenen puan tamamlanmıştır.

| ID   | User Story                                                                                | Story Point |
| ---- | ----------------------------------------------------------------------------------------- | ----------- |
| US06 | Bir kullanıcı olarak, arama yaparken mevsimi de seçip öneri almak istiyorum               | 5 SP        |
| US07 | Bir geliştirici olarak, Gemini API'den gelen komutları backend'de kullanmak istiyorum     | 5 SP        |
| US08 | Bir kullanıcı olarak, arama sonucunda bana önerilen parfümleri görebilmek istiyorum       | 4 SP        |
| US09 | Kullanıcının verdiği inputlara göre veritabanından eşleşen ürünleri filtrelemek istiyorum | 4 SP        |

## 📆 Daily Scrum Tablosu

| Tarih     | Yapılan İşler                                                | Notlar                                            |
| --------- | ------------------------------------------------------------ | ------------------------------------------------- |
| 7 Temmuz  | Search ve mevsim verisinin birlikte alınması                 | Frontend'den backend'e veri gönderimi test edildi |
| 9 Temmuz  | Gemini API'ye ilk test bağlantısı                            | API anahtarı başarıyla çalıştırıldı               |
| 11 Temmuz | Kullanıcı komutu ile Gemini'den gelen öneri metni çözümlendi | Filtreleme formatı netleşti                       |
| 13 Temmuz | Gemini'den gelen komutlara göre veritabanı filtreleme        | SQL query yapısı oluşturuldu                      |
| 15 Temmuz | Önerilen parfümler frontend'de gösterildi                    | Görsel boyutlandırma test edildi                  |
| 17 Temmuz | Arayüz düzenlemeleri ve küçük hataların giderilmesi          | Buton-stil uyumsuzlukları düzeltildi              |
| 20 Temmuz | Son testler + dokümantasyon + burndown chart çıkarıldı       | Sprint review hazırlandı                          |

## 🔎 Sprint Review

- ✅ Gemini API başarıyla entegre edildi ve test verileriyle denendi  
- ✅ Kullanıcıdan alınan mevsim + arama girdileri backend'e başarıyla iletildi  
- ✅ Gelen komutlar yorumlandı ve önerilen parfümler başarıyla filtrelendi  
- ✅ Önerilen parfümler frontend'de görselleri ve açıklamalarıyla gösterildi  
- 📌 Kullanıcı deneyimi açısından sade ve etkili bir sonuç elde edildi

---
## 🔁 Sprint Retrospective

| 👍 İyi Gidenler | 🧠 Geliştirilebilecek Noktalar | 🎯 Aksiyonlar |
|----------------|-------------------------------|---------------|
| API bağlantısı sorunsuz gerçekleşti | Arayüzdeki kart yapısı daha erken ele alınmalıydı | UI bileşenleri Sprint 3’e taşındı |
| Görev dağılımı net ve etkiliydi | Gemini’dan gelen yanıtlar bazen uzun sürdü | Hız optimizasyonları yapılacak |
| Kodun okunabilirliği iyiydi | Kod modülerliği tam oturmadı | Kod refactor planlandı |

# 🏃 Sprint 3: Kullanıcı Deneyimi, Son Testler ve Yayınlama
## Trello Board
<img width="1069" height="649" alt="Ekran görüntüsü 2025-07-30 210323" src="https://github.com/user-attachments/assets/6893f1ae-8c47-4581-a649-a8283f820e7c" />

## Burn-Down Chart
<img width="2400" height="1200" alt="sprint3_burndown_chart" src="https://github.com/user-attachments/assets/5f344e21-99db-48e3-b34f-7d5c8215564e" />

## 🎯 Sprint Hedefi
- ✅ Önerilen parfümlerin kullanıcı dostu kart yapısında gösterilmesi  
- ✅ Son kullanıcı deneyimi testlerinin yapılması
- ✅ Uygulamanın responsive hale getirilmesi 
- ✅ Genel hata düzeltmeleri ve kod iyileştirmeleri

---
## User Story ve Story Point Tablosu
- Sprint 3 için tamamlanacak görev puanı toplam 16 puan olarak belirlenmiştir. Görevlere zorluk seviyesine göre story pointler belirlenmiştir. Bu sprint için hedeflenen puan tamamlanmıştır.
  
| ID   | User Story                                                                                                  | Story Point |
| ---- | ----------------------------------------------------------------------------------------------------------- | ----------- |
| US10 | Ben bir kullanıcı olarak, önerilen parfümleri görsel ve açıklamayla birlikte şık kartlarda görmek istiyorum | 4 SP        |
| US11 | Ben bir kullanıcı olarak, uygulamayı mobil cihazımda da rahatlıkla kullanmak istiyorum                      | 4 SP        |
| US12 | Ben bir geliştirici olarak, uygulamayı yayına almak istiyorum                                               | 3 SP        |
| US13 | Ben bir geliştirici olarak, sistemin genelini test etmek ve hataları düzeltmek istiyorum                    | 5 SP        |

## 📆 Daily Scrum Tablosu

| Tarih     | Yapılan İşler                                       | Notlar                                   |
| --------- | --------------------------------------------------- | ---------------------------------------- |
| 21 Temmuz | Öneri kartlarının ilk versiyonu ve görsel düzeni    | Tailwind kart yapısı hazırlandı          |
| 23 Temmuz | Kartlara verilerin entegre edilmesi                 | API'den gelen sonuçlar UI'ye taşındı     |
| 25 Temmuz | Responsive yapı için CSS düzenlemeleri              | Mobilde bozulmalar giderildi             |
| 27 Temmuz | Uygulama genelinde test süreci ve hata düzeltmeleri | 3 hata çözüldü, 2 stil sorunu düzeltildi |
| 29 Temmuz | Deploy süreci – Netlify yapılandırması              | Başarıyla yayına alındı                  |
| 31 Temmuz | Kullanıcı testi ve geri bildirim toplanması         | Kart yazı boyutu önerisi alındı          |
| 1 Ağustos | Sprint review + dokümantasyon tamamlama             | Proje sunumu hazırlandı                  |

## 🔎 Sprint Review
- ✅ Önerilen parfümler artık şık ve okunabilir kartlarda gösteriliyor
- ✅ Uygulama hem masaüstü hem de mobilde sorunsuz çalışıyor
- ✅ Kod düzenlemesi yapıldı, bileşenler sadeleştirildi
- ✅ Kullanıcı testlerinden olumlu geri dönüşler alındı

---
## 🔁 Sprint Retrospective

| 👍 İyi Gidenler                                 | 🧠 Geliştirilebilecek Noktalar        | 🎯 Aksiyonlar                              |
| ----------------------------------------------- | ------------------------------------- | ------------------------------------------ |
| Kart yapısı hem kullanıcı hem takımca beğenildi | Deploy süreci biraz zaman aldı        | Gelecekte CI/CD yapılandırması düşünülecek |
| Responsive tasarım hatasız ilerledi             | Görsel boyutları optimize edilmemişti | Tüm görseller % olarak yeniden boyutlandı  |
| Kullanıcı testleri planlı şekilde yapıldı       | Netlify log analizi eksikti           | Basit log takip sistemi entegre edilecek   |

## Product Images
![WhatsApp Görsel 2025-08-03 saat 14 57 23_69fdf756](https://github.com/user-attachments/assets/64b5bb9e-8fbc-4f9e-8b2e-7c8815df916c)
![WhatsApp Görsel 2025-08-03 saat 14 57 24_658cbf18](https://github.com/user-attachments/assets/e79fc1bb-ea46-472b-b812-6750d7732124)
![WhatsApp Görsel 2025-08-03 saat 14 57 24_f984628d](https://github.com/user-attachments/assets/5afc2c88-0498-48cc-bc8b-669c916814fc)
![WhatsApp Görsel 2025-08-03 saat 14 57 24_caaa1abf](https://github.com/user-attachments/assets/f5444407-4ea0-4336-9600-12b440d24ab7)
![WhatsApp Görsel 2025-08-03 saat 14 57 24_00abadf5](https://github.com/user-attachments/assets/c6a78be8-4624-4857-9ae3-4ed18b262c59)





