CREATE DATABASE flicker;

USE flicker;

/* Create other tables and define schemas for them here! */
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `flicker`;

CREATE TABLE `flicker` (
  `user_ID` INTEGER(4) NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(600) NULL DEFAULT NULL,
  `title` VARCHAR(40) NULL DEFAULT NULL,
  `tag` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`user_ID`)
);

insert into `flicker`(`url`, `title`) values(`http://google.com`, `Google`); 

-- ---
-- Table 'Messages'
--
-- ---

-- DROP TABLE IF EXISTS `Messages`;

-- CREATE TABLE `Messages` (
--   `message_ID` INTEGER(5) NOT NULL AUTO_INCREMENT DEFAULT NULL,
--   `user_ID` INTEGER(4) NULL DEFAULT NULL,
--   `text` VARCHAR(140) NULL DEFAULT NULL,
--   `room_ID` INTEGER(5) NULL DEFAULT NULL,
--   PRIMARY KEY (`message_ID`)
-- );

-- ---
-- Table 'Rooms'
--
-- ---

-- DROP TABLE IF EXISTS `Rooms`;

-- CREATE TABLE `Rooms` (
--   `room_ID` INTEGER(5) NOT NULL AUTO_INCREMENT DEFAULT NULL,
--   `roomname` VARCHAR(20) NULL DEFAULT NULL,
--   PRIMARY KEY (`room_ID`)
-- );

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `Messages` ADD FOREIGN KEY (user_ID) REFERENCES `Users` (`user_ID`);
-- ALTER TABLE `Messages` ADD FOREIGN KEY (room_ID) REFERENCES `Rooms` (`room_ID`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`user_ID`,`handle`) VALUES
-- ('','');
-- INSERT INTO `Messages` (`message_ID`,`user_ID`,`message`,`room_ID`) VALUES
-- ('','','','');
-- INSERT INTO `Rooms` (`room_ID`,`roomname`) VALUES
-- ('','');



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

