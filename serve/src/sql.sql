CREATE TABLE `User`(
    `UserID` INT PRIMARY KEY AUTO_INCREMENT COMMENT '使用者ID',
    `User_Account` VARCHAR(128)  COMMENT '使用者帳號',
    `User_Password` VARCHAR(128) COMMENT '使用者密碼',
    `User_Phone` VARCHAR(128) COMMENT '使用者手機',
    `User_Rights` tinyint COMMENT '使用者權限',
    `User_Created_at` datetime COMMENT '使用者建立帳號時間',
    `User_Updated_at` datetime COMMENT '使用者登入時間'
);
INSERT INTO `User` (`UserID`, `User_Account`, `User_Password`, `User_Phone`, `User_Rights`, `User_Created_at`, `User_Updated_at`) VALUES (NULL, 'ekko', 'ekko', '0912345213', '1', '2023-03-13 11:59:59', '2023-03-13 11:59:59');


CREATE TABLE `Product` (
  `ProducttID` INT PRIMARY KEY AUTO_INCREMENT COMMENT '專案ID',
  `UserID` INT COMMENT '使用者ID FK',
  `Product_Name` VARCHAR(255) UNIQUE COMMENT '產品名稱',
  `Product_Description` VARCHAR(255) UNIQUE COMMENT '產品描述',
  `Product_IMGURL` VARCHAR(50) COMMENT '圖片路徑',
  FOREIGN KEY(`UserID`) REFERENCES `User`(`UserID`) ON DELETE CASCADE
);

CREATE TABLE `Menu` (
  `MenuID` INT PRIMARY KEY AUTO_INCREMENT COMMENT 'ID',
  `IMGURL` INT COMMENT '圖片路徑',
  `title` VARCHAR(255) UNIQUE COMMENT '名稱',
);