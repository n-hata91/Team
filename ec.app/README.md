# メモ

## ForgeryJa 日本語faker
* 姓・名  
-ForgeryJa(:name).first_name, ForgeryJa(:name).last_name  
-ForgeryJa(:name).full_name(:to => ForgeryJa::KANA)  
* 電話番号  
-ForgeryJa(:mobile).phone_number  
* 住所  
-ForgeryJa(:address).full_address  
* 郵便番号（数字）  
-Faker::Number.number(digits:3)  
* メールアドレス  
-Faker::Internet.email  

##
##
##

