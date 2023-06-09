普通使用者
CREATE TABLE `User`(
    `UserID` INT PRIMARY KEY AUTO_INCREMENT COMMENT '使用者ID',
    `User_Account` VARCHAR(128)  COMMENT '使用者帳號',
    `User_Password` VARCHAR(128) COMMENT '使用者密碼',
    `User_Phone` VARCHAR(128) COMMENT '使用者手機',
    `User_Rights` tinyint COMMENT '使用者權限 0平台管理員 1商店管理員 2普通使用者',
    `User_Created_at` datetime COMMENT '使用者建立帳號時間',
    `User_Updated_at` datetime COMMENT '使用者登入時間'
);
INSERT INTO `User` (`UserID`, `User_Account`, `User_Password`, `User_Phone`, `User_Rights`, `User_Created_at`, `User_Updated_at`) VALUES (NULL, 'ekko', 'ekko', '0912345213', '1', '2023-03-13 11:59:59', '2023-03-13 11:59:59');
普通使用者加入我的最愛
CREATE TABLE `Favorite`(
    `FavoriteID` INT PRIMARY KEY AUTO_INCREMENT COMMENT 'ID',
    `UserID` INT  COMMENT '使用者ID FK',
    `ShopID` INT  COMMENT '商店ID',
    `Favorite_Name` VARCHAR(255) UNIQUE COMMENT '商店名稱',
    `Favorite_Description` VARCHAR(255) COMMENT '商店描述',
    `Favorite_IMGURL` VARCHAR(50) COMMENT '圖片路徑',
    `Favorite_delivery` VARCHAR(255) COMMENT '外送費用'
    FOREIGN KEY(`UserID`) REFERENCES `User`(`UserID`) ON DELETE SET NULL
);
商店管理員
CREATE TABLE `Shop_Manager`(
    `Shop_ManagerID` INT PRIMARY KEY AUTO_INCREMENT COMMENT '商店管理員ID',
    `Shop_Manager_Account` VARCHAR(128)  COMMENT '商店管理員帳號',
    `Shop_Manager_Password` VARCHAR(128) COMMENT '商店管理員密碼',
    `Shop_Manager_Phone` VARCHAR(128) COMMENT '商店管理員手機',
    `Shop_Manager_Rights` tinyint COMMENT '商店管理員權限 0平台管理員 1商店管理員 2普通使用者',
    `Shop_Manager_Created_at` datetime COMMENT '商店管理員建立帳號時間',
    `Shop_Manager_Updated_at` datetime COMMENT '商店管理員登入時間'
);
商店
CREATE TABLE `Shop` (
  `ShopID` INT PRIMARY KEY AUTO_INCREMENT COMMENT '店家ID',
  `Shop_ManagerID` INT COMMENT '商店管理員ID FK',
  `Shop_Name` VARCHAR(255) UNIQUE COMMENT '商店名稱',
  `Shop_Description` VARCHAR(255) COMMENT '商店描述',
  `Shop_IMGURL` VARCHAR(50) COMMENT '圖片路徑',
  `Shop_delivery` VARCHAR(255) COMMENT '外送費用',
  FOREIGN KEY(`Shop_ManagerID`) REFERENCES `Shop_Manager`(`Shop_ManagerID`) ON DELETE SET NULL
);
商店裡的商品
CREATE TABLE `Product` (
  `ProductID` INT PRIMARY KEY AUTO_INCREMENT COMMENT '產品ID',
  `ShopID` INT COMMENT '商店ID FK',
  `Product_Name` VARCHAR(255) COMMENT '產品名稱',
  `Prodcut_Type` VARCHAR(255) COMMENT '產品型別',
  `Product_Price` VARCHAR(255) COMMENT '產品價格',
  `Product_Description` VARCHAR(255) COMMENT '產品描述',
  `Product_IMGURL` VARCHAR(50) COMMENT '圖片路徑',
  FOREIGN KEY(`ShopID`) REFERENCES `Shop`(`ShopID`) ON DELETE SET NULL
);
INSERT INTO `Product` (`ProductID`, `ShopID`, `Product_Name`, `Product_Price`, `Product_Description`, `Product_IMGURL`) VALUES (NULL, '5', '勁辣雞腿堡套餐', '165', '套餐含勁辣鷄腿堡一份 (中辣)、配餐選擇與 NT$38 飲料選擇。', '');
前台icon
CREATE TABLE `Menu` (
  `MenuID` INT PRIMARY KEY AUTO_INCREMENT COMMENT 'ID',
  `IMGURL` INT COMMENT '圖片路徑',
  `title` VARCHAR(255) UNIQUE COMMENT '名稱',
);
CREATE TABLE `Product_Type` (
  `ID` INT PRIMARY KEY AUTO_INCREMENT COMMENT 'ID',
  `ShopID` INT COMMENT '店家ID',
  `Type` VARCHAR(255) COMMENT '商品型別',
);
加入購物車
CREATE TABLE Carts (
  `CartID` INT PRIMARY KEY AUTO_INCREMENT COMMENT '購物車ID',
  `UserID` INT COMMENT '商品ID',
  `ProductID` INT NOT NULL COMMENT '商品ID',
  `Product_IMGURL` VARCHAR(50) COMMENT '圖片路徑',
  `Product_Price` VARCHAR(255) COMMENT '商品價格',
  FOREIGN KEY(`UserID`) REFERENCES `User`(UserID) ON DELETE SET NULL
);
CREATE TABLE Option_Group (
  `Option_Group_ID` INT PRIMARY KEY AUTO_INCREMENT COMMENT '選項ID',
  `ShopID` INT NOT NULL COMMENT '商家ID FK',
  `Option_Group` VARCHAR(50) NOT NULL COMMENT '選項型態名稱',
  FOREIGN KEY(`ShopID`) REFERENCES `Shop`(ShopID) ON DELETE SET NULL
);

CREATE TABLE Options (
  `OptionID` INT PRIMARY KEY AUTO_INCREMENT COMMENT '選項ID',
  `Option_Group_ID` INT NOT NULL COMMENT 'Option_Group_ID FK ',
  `OptionName` VARCHAR(50) NOT NULL COMMENT '選項名稱',
  `OptionPrice` VARCHAR(50) NOT NULL COMMENT '選項價格',
  FOREIGN KEY(`Option_Group_ID`) REFERENCES `Option_Group`(Option_Group_ID) ON DELETE CASCADE
);

CREATE TABLE Product_Option_Group (
  `ProductID` INT PRIMARY KEY AUTO_INCREMENT COMMENT '選項ID',
  `Option_Group_ID` INT NOT NULL COMMENT 'Option_Group_ID FK ',
  FOREIGN KEY(`Option_Group_ID`) REFERENCES `Option_Group`(Option_Group_ID) ON DELETE CASCADE
);