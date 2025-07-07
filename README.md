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

## Burn-Down Chart

![sprint1_burndown_chart_1_6_temmuz](https://github.com/user-attachments/assets/4b937f0a-a1e2-43a7-919b-8f6aad8b0212)

## 🎯 Sprint Hedefi

- 🖥️ Ana sayfa, header, container ve alt bar oluşturulacak  
- 🔌 Veritabanı bağlantısı sağlanacak  
- 🧴 Parfüm verileri (isim, açıklama, resim) eklenebilecek  
- 🌤️ Mevsim seçme ve 🔍 search bar arayüzü tamamlanacak

## User Story ve Story Point Tablosu

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


